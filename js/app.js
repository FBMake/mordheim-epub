import { parseRoster } from "./parser.js";
import { buildPdf } from "./pdf-builder.js";
import {
  resizeAndCompressImage,
  serializePersonalization,
  downloadPersonalizationFile,
  parsePersonalizationFile,
  applyPersonalization,
} from "./personalization.js";
import {
  STATUTS,
  emptyPartie,
  applyPartie,
  mergeIntoSlot,
  serializeExport,
  parseExport,
  listSlots,
  getSlot,
  putSlot,
  deleteSlot,
  requestPersistence,
} from "./warband-store.js";
import {
  FACTIONS,
  EQUIPEMENT_COURANT,
  STAT_KEYS,
  TRESOR_DEPART,
  buildRoster,
  creationTotals,
  creationWarnings,
  duplicateFigurine,
  knownRuleNames,
  newCreation,
  newFigurine,
} from "./warband-builder.js";

const dropzone = document.getElementById("dropzone");
const fileInput = document.getElementById("file-input");
const fileError = document.getElementById("file-error");
const bandeView = document.getElementById("view-bande");
const generateBtn = document.getElementById("generate-btn");
const generateStatus = document.getElementById("generate-status");

const persoDropzone = document.getElementById("perso-dropzone");
const persoFileInput = document.getElementById("perso-file-input");
const persoLoadedMsg = document.getElementById("perso-loaded-msg");
const orphansBox = document.getElementById("orphans-box");
const orphansList = document.getElementById("orphans-list");
const persoCardsContainer = document.getElementById("perso-cards");

let currentModel = null;
// customisations[id] = { nom, bio, photo } — source de vérité pour la génération.
let customisations = {};
// personnalisations importées mais dont la figurine n'existe plus dans le
// roster actuel : on les garde pour ne pas les perdre au prochain export.
let orphanCustomisations = new Map();
// JSON BattleScribe d'origine de la bande affichée (stocké tel quel dans l'emplacement).
let currentRoster = null;
// Suivi de partie (XP, état, notes, magot) — voir warband-store.js.
let partie = emptyPartie();
// Emplacement (1 à 4) de la bande affichée, ou null si elle n'est pas enregistrée.
let activeSlot = null;
// Bande créée dans l'application : modèle éditable dont currentRoster est
// généré (warband-builder.js). null pour une bande importée.
let currentCreation = null;

const slotsContainer = document.getElementById("slots");
const slotStatus = document.getElementById("slot-status");
const partieMagotOr = document.getElementById("partie-magot-or");
const partieMagotPierres = document.getElementById("partie-magot-pierres");
const partieNotes = document.getElementById("partie-notes");

function escapeHtml(str) {
  return String(str ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function safeBaseName(name) {
  return (name || "bande")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .toLowerCase();
}

function showError(msg) {
  fileError.textContent = msg;
  fileError.hidden = false;
}
function clearError() {
  fileError.hidden = true;
  fileError.textContent = "";
}

// ---------------------------------------------------------------------
// Menus : menu principal (vues) et menu de la bande ouverte (onglets)
// ---------------------------------------------------------------------
const navButtons = document.querySelectorAll(".app-nav .nav-btn");
const navBande = document.querySelector(".app-nav .nav-bande");
const tabButtons = document.querySelectorAll(".bande-menu .tab-btn");

function showView(name) {
  if (name === "bande" && !currentModel) name = "accueil";
  document.querySelectorAll(".view").forEach((v) => (v.hidden = v.id !== `view-${name}`));
  navButtons.forEach((b) => b.classList.toggle("active", b.dataset.view === name));
  if (name === "nouvelle") prepareNewForm();
  if (name === "accueil") renderSlots();
}

function showTab(name) {
  tabButtons.forEach((b) => {
    const on = b.dataset.tab === name;
    b.classList.toggle("active", on);
    b.setAttribute("aria-selected", on ? "true" : "false");
  });
  document.querySelectorAll(".tab-panel").forEach((p) => (p.hidden = p.dataset.panel !== name));
  // Les noms personnalisés saisis dans « Figurines » apparaissent dans la composition.
  if (name === "composition" && currentCreation) renderCreation();
}

navButtons.forEach((b) =>
  b.addEventListener("click", async () => {
    await flushSave();
    showView(b.dataset.view);
  })
);
tabButtons.forEach((b) => b.addEventListener("click", () => showTab(b.dataset.tab)));
document.getElementById("unsaved-go").addEventListener("click", () => {
  showView("accueil");
  slotStatus.textContent = `Choisissez « Enregistrer ici » sur un emplacement pour garder « ${currentModel?.meta.nom} ».`;
});

function fillDatalist(id, values) {
  document.getElementById(id).innerHTML = values.map((v) => `<option value="${escapeHtml(v)}"></option>`).join("");
}
fillDatalist("factions-list", FACTIONS);
fillDatalist("rules-list", knownRuleNames());
fillDatalist("equipment-list", EQUIPEMENT_COURANT);

// ---------------------------------------------------------------------
// Aperçu de la bande
// ---------------------------------------------------------------------
function renderBandeHead(model) {
  document.getElementById("bande-faction").textContent = model.meta.catalogue || "Faction non précisée";
  document.getElementById("bande-origine").textContent =
    (currentCreation ? "Créée dans l'application" : "Importée depuis New Recruit / BattleScribe") +
    (activeSlot ? ` · emplacement ${activeSlot}` : " · non enregistrée");
  document.getElementById("unsaved-box").hidden = Boolean(activeSlot);
  navBande.hidden = false;
  navBande.textContent = model.meta.nom;
}

function renderPreview(model) {
  document.getElementById("preview-nom").textContent = model.meta.nom;
  renderBandeHead(model);
  document.getElementById("preview-gc").textContent = `${model.meta.gc} po`;
  document.getElementById("preview-wr").textContent = model.meta.warbandRating;
  document.getElementById("count-heros").textContent = model.heros.length;
  document.getElementById("count-hdm").textContent = model.hommesDeMain.length;
  refreshTotals(model);

  const warningBox = document.getElementById("warning-box");
  const warningList = document.getElementById("warning-list");
  if (model.nonTraduits.length) {
    warningList.innerHTML = model.nonTraduits.map((w) => `<li>${w}</li>`).join("");
    warningBox.hidden = false;
  } else {
    warningBox.hidden = true;
  }

  document.getElementById("compo-import").hidden = Boolean(currentCreation);
  document.getElementById("compo-creation").hidden = !currentCreation;
  if (currentCreation) renderCreation();
  document.getElementById("figurines-empty").hidden = model.heros.length + model.hommesDeMain.length > 0;
}

/** Met à jour magot, XP et listes après une saisie de suivi de partie. */
function refreshTotals(model) {
  applyPartie(model, partie);
  document.getElementById("preview-magot").textContent = model.bande.magotOr;
  document.getElementById("preview-xp").textContent = model.bande.xpTotal;
  const item = (h) => {
    const nom = escapeHtml(customisations[h.id]?.nom || h.nom);
    const statut = h.statut ? ` — ${escapeHtml(h.statut)}` : "";
    return `<li>${nom} <em>(${h.xp} xp${statut})</em></li>`;
  };
  document.getElementById("list-heros").innerHTML = model.heros.map(item).join("");
  document.getElementById("list-hdm").innerHTML = model.hommesDeMain.map(item).join("");
}

// ---------------------------------------------------------------------
// Panneau de personnalisation (nom, bio, photo par figurine)
// ---------------------------------------------------------------------
function ensureCustomisation(id) {
  if (!customisations[id]) {
    customisations[id] = { nom: "", bio: "", photo: null };
  }
  return customisations[id];
}

function persoCardTemplate(card, categorie) {
  const custom = ensureCustomisation(card.id);
  const div = document.createElement("div");
  div.className = "perso-card";
  div.dataset.id = card.id;

  div.innerHTML = `
    <div class="perso-photo-wrap">
      <img class="perso-photo-preview" src="${
        custom.photo || ""
      }" alt="" ${custom.photo ? "" : 'style="display:none"'} />
      <label class="perso-photo-btn">
        Photo
        <input type="file" accept="image/*" class="perso-photo-input" hidden />
      </label>
    </div>
    <div class="perso-fields">
      <p class="perso-original-name">${categorie} — ${escapeHtml(card.nom)}</p>
      <label class="perso-label">
        Nom personnalisé
        <input type="text" class="perso-nom-input" placeholder="${escapeHtml(card.nom)}" value="${escapeHtml(
          custom.nom
        )}" />
      </label>
      <label class="perso-label">
        Bio
        <textarea class="perso-bio-input" rows="2" placeholder="Quelques lignes d'histoire...">${escapeHtml(
          custom.bio
        )}</textarea>
      </label>
      <div class="partie-row">
        <label class="perso-label">
          XP
          <input type="number" class="perso-nom-input partie-xp-input" inputmode="numeric"
            placeholder="${card.xpRoster ?? card.xp}" value="${partie.figurines[card.id]?.xp ?? ""}" />
        </label>
        <label class="perso-label">
          État
          <select class="perso-nom-input partie-statut-input">
            ${STATUTS.map(
              (st) =>
                `<option value="${st}" ${partie.figurines[card.id]?.statut === st ? "selected" : ""}>${
                  st || "En forme"
                }</option>`
            ).join("")}
          </select>
        </label>
      </div>
      <label class="perso-label">
        Blessures / notes de partie
        <input type="text" class="perso-nom-input partie-notes-input" placeholder="Œil crevé, objet trouvé..."
          value="${escapeHtml(partie.figurines[card.id]?.notes)}" />
      </label>
    </div>
  `;

  const nomInput = div.querySelector(".perso-nom-input");
  nomInput.addEventListener("input", () => {
    ensureCustomisation(card.id).nom = nomInput.value;
    refreshTotals(currentModel);
    scheduleSave();
  });

  const bioInput = div.querySelector(".perso-bio-input");
  bioInput.addEventListener("input", () => {
    ensureCustomisation(card.id).bio = bioInput.value;
    scheduleSave();
  });

  const figurine = () => {
    if (!partie.figurines[card.id]) partie.figurines[card.id] = { xp: null, statut: "", notes: "" };
    return partie.figurines[card.id];
  };
  const xpInput = div.querySelector(".partie-xp-input");
  xpInput.addEventListener("input", () => {
    const n = xpInput.value === "" ? null : Number(xpInput.value);
    figurine().xp = Number.isFinite(n) ? n : null;
    refreshTotals(currentModel);
    scheduleSave();
  });
  const statutInput = div.querySelector(".partie-statut-input");
  statutInput.addEventListener("change", () => {
    figurine().statut = statutInput.value;
    refreshTotals(currentModel);
    scheduleSave();
  });
  const partieNotesInput = div.querySelector(".partie-notes-input");
  partieNotesInput.addEventListener("input", () => {
    figurine().notes = partieNotesInput.value;
    scheduleSave();
  });

  const photoInput = div.querySelector(".perso-photo-input");
  const photoPreview = div.querySelector(".perso-photo-preview");
  photoInput.addEventListener("change", async () => {
    const file = photoInput.files?.[0];
    if (!file) return;
    try {
      const dataUrl = await resizeAndCompressImage(file);
      ensureCustomisation(card.id).photo = dataUrl;
      photoPreview.src = dataUrl;
      photoPreview.style.display = "";
      scheduleSave();
    } catch (err) {
      console.error(err);
      showError(`Impossible de charger cette photo : ${err.message}`);
    }
  });

  return div;
}

function renderPersoCards(model) {
  persoCardsContainer.innerHTML = "";
  model.heros.forEach((card) =>
    persoCardsContainer.appendChild(persoCardTemplate(card, "Héros"))
  );
  model.hommesDeMain.forEach((card) =>
    persoCardsContainer.appendChild(persoCardTemplate(card, "Homme de main"))
  );
}

function renderOrphans() {
  if (orphanCustomisations.size === 0) {
    orphansBox.hidden = true;
    return;
  }
  orphansList.innerHTML = [...orphanCustomisations.values()]
    .map((o) => `<li>${escapeHtml(o.nom)}</li>`)
    .join("");
  orphansBox.hidden = false;
}

// ---------------------------------------------------------------------
// Chargement du roster JSON
// ---------------------------------------------------------------------
/**
 * Affiche une bande à partir de son JSON BattleScribe, avec, si elle vient
 * d'un emplacement, ses personnalisations et son suivi de partie.
 */
function loadRoster(json, saved = null) {
  const model = parseRoster(json);
  currentRoster = json;
  currentModel = model;
  customisations = {};
  for (const [id, val] of Object.entries(saved?.customisations || {})) {
    customisations[id] = { nom: val.nom || "", bio: val.bio || "", photo: val.photo || null };
  }
  orphanCustomisations = new Map(
    Object.entries(saved?.orphelines || {}).map(([id, val]) => [
      id,
      { nom: val.nom || val.label || "(sans nom)", bio: val.bio || "", photo: val.photo || null, label: val.label || "" },
    ])
  );
  partie = saved?.partie ? structuredClone(saved.partie) : emptyPartie();
  currentCreation = saved?.creation ? structuredClone(saved.creation) : null;
  generateStatus.textContent = "";
  applyPartie(currentModel, partie);
  renderPreview(currentModel);
  renderPartieInputs();
  renderPersoCards(currentModel);
  renderOrphans();
}

async function handleFile(file) {
  clearError();
  if (!file) return;
  if (!file.name.toLowerCase().endsWith(".json")) {
    showError("Merci de déposer un fichier .json (export de roster BattleScribe).");
    return;
  }
  try {
    const text = await file.text();
    const json = JSON.parse(text);
    parseRoster(json); // valide le fichier avant de quitter la bande ouverte
    await flushSave();
    activeSlot = null;
    loadRoster(json);
    persoLoadedMsg.hidden = true;
    renderSlots();
    slotStatus.textContent = "";
    showView("bande");
    showTab("composition");
  } catch (err) {
    console.error(err);
    showError(`Impossible de lire ce fichier : ${err.message || "erreur inconnue"}.`);
  }
}

dropzone.addEventListener("click", () => fileInput.click());
dropzone.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    fileInput.click();
  }
});
fileInput.addEventListener("change", (e) => handleFile(e.target.files[0]));
["dragenter", "dragover"].forEach((evt) =>
  dropzone.addEventListener(evt, (e) => {
    e.preventDefault();
    dropzone.classList.add("dragover");
  })
);
["dragleave", "drop"].forEach((evt) =>
  dropzone.addEventListener(evt, (e) => {
    e.preventDefault();
    dropzone.classList.remove("dragover");
  })
);
dropzone.addEventListener("drop", (e) => handleFile(e.dataTransfer.files?.[0]));

// ---------------------------------------------------------------------
// Chargement du fichier de personnalisation (optionnel)
// ---------------------------------------------------------------------
async function handlePersoFile(file) {
  if (!file || !currentModel) return;
  try {
    const text = await file.text();
    const importedMap = parsePersonalizationFile(text);
    const orphans = applyPersonalization(currentModel, importedMap);

    // Recharge customisations depuis le modèle mis à jour + conserve les
    // orphelines pour le prochain export.
    customisations = {};
    [...currentModel.heros, ...currentModel.hommesDeMain].forEach((card) => {
      customisations[card.id] = {
        nom: card.nomPersonnalise || "",
        bio: card.bio || "",
        photo: card.photo || null,
      };
    });
    orphanCustomisations = new Map();
    for (const [id, val] of importedMap.entries()) {
      const isOrphan = orphans.some((o) => o.id === id);
      if (isOrphan) {
        orphanCustomisations.set(id, {
          nom: val.nom || val._label || "(sans nom)",
          bio: val.bio,
          photo: val.photo,
          label: val._label || "",
        });
      }
    }

    renderPersoCards(currentModel);
    renderOrphans();
    persoLoadedMsg.textContent = `Personnalisation chargée (${
      Object.keys(customisations).filter(
        (id) => customisations[id].nom || customisations[id].bio || customisations[id].photo
      ).length
    } figurine(s) personnalisée(s)).`;
    persoLoadedMsg.hidden = false;
    refreshTotals(currentModel);
    scheduleSave();
  } catch (err) {
    console.error(err);
    showError(`Fichier de personnalisation invalide : ${err.message}`);
  }
}

persoDropzone.addEventListener("click", () => persoFileInput.click());
persoDropzone.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    persoFileInput.click();
  }
});
persoFileInput.addEventListener("change", (e) => handlePersoFile(e.target.files[0]));
["dragenter", "dragover"].forEach((evt) =>
  persoDropzone.addEventListener(evt, (e) => {
    e.preventDefault();
    persoDropzone.classList.add("dragover");
  })
);
["dragleave", "drop"].forEach((evt) =>
  persoDropzone.addEventListener(evt, (e) => {
    e.preventDefault();
    persoDropzone.classList.remove("dragover");
  })
);
persoDropzone.addEventListener("drop", (e) => handlePersoFile(e.dataTransfer.files?.[0]));

// ---------------------------------------------------------------------
// Génération EPUB + fichier de personnalisation
// ---------------------------------------------------------------------
generateBtn.addEventListener("click", async () => {
  if (!currentModel) return;
  generateBtn.disabled = true;
  generateStatus.textContent = "Génération en cours…";
  try {
    // Applique les personnalisations actuelles (issues des formulaires) au modèle.
    [...currentModel.heros, ...currentModel.hommesDeMain].forEach((card) => {
      const c = customisations[card.id] || {};
      card.nomPersonnalise = c.nom || "";
      card.bio = c.bio || "";
      card.photo = c.photo || null;
    });
    applyPartie(currentModel, partie);

    const base = safeBaseName(currentModel.meta.nom);

    const blob = await buildPdf(currentModel);
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${base}.pdf`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);

    const activeMap = new Map(Object.entries(customisations));
    const json = serializePersonalization(activeMap, orphanCustomisations, currentModel.meta.nom);
    downloadPersonalizationFile(json, base);

    generateStatus.textContent =
      "PDF et fichier de personnalisation téléchargés ✓ — gardez ce dernier pour la prochaine fois.";
  } catch (err) {
    console.error(err);
    generateStatus.textContent = `Erreur lors de la génération : ${err.message}`;
  } finally {
    generateBtn.disabled = false;
  }
});

// ---------------------------------------------------------------------
// Suivi de partie au niveau de la bande (magot, réserve / notes)
// ---------------------------------------------------------------------
function renderPartieInputs() {
  partieMagotOr.value = partie.magotOr ?? "";
  partieMagotOr.placeholder = currentModel?.bande.magotOrRoster ?? "";
  partieMagotPierres.value = partie.magotPierres ?? "";
  partieMagotPierres.placeholder = currentModel?.bande.magotPierresRoster ?? "";
  partieNotes.value = partie.notes || "";
}

function numberOrNull(input) {
  if (input.value === "") return null;
  const n = Number(input.value);
  return Number.isFinite(n) ? n : null;
}

partieMagotOr.addEventListener("input", () => {
  partie.magotOr = numberOrNull(partieMagotOr);
  if (currentModel) refreshTotals(currentModel);
  scheduleSave();
});
partieMagotPierres.addEventListener("input", () => {
  partie.magotPierres = numberOrNull(partieMagotPierres);
  if (currentModel) refreshTotals(currentModel);
  scheduleSave();
});
partieNotes.addEventListener("input", () => {
  partie.notes = partieNotes.value;
  scheduleSave();
});

// ---------------------------------------------------------------------
// Nouvelle bande (création de zéro, voir warband-builder.js)
// ---------------------------------------------------------------------
const newForm = document.getElementById("new-form");
const newNom = document.getElementById("new-nom");
const newFaction = document.getElementById("new-faction");
const newFactionAutreWrap = document.getElementById("new-faction-autre-wrap");
const newFactionAutre = document.getElementById("new-faction-autre");
const newTresor = document.getElementById("new-tresor");
const newSlot = document.getElementById("new-slot");
const newStatus = document.getElementById("new-status");
const FACTION_AUTRE = "__autre__";

newFaction.innerHTML =
  FACTIONS.map((f) => `<option value="${escapeHtml(f)}">${escapeHtml(f)}</option>`).join("") +
  `<option value="${FACTION_AUTRE}">Autre (saisie libre)…</option>`;
newFaction.addEventListener("change", () => {
  newFactionAutreWrap.hidden = newFaction.value !== FACTION_AUTRE;
});

/** Remplit la liste des emplacements : le premier vide est proposé par défaut. */
async function prepareNewForm() {
  newStatus.textContent = "";
  let slots = [];
  try {
    slots = await listSlots();
  } catch (err) {
    newStatus.textContent = `Stockage local indisponible : ${err.message} (navigation privée ?)`;
  }
  const keep = newSlot.value;
  newSlot.innerHTML = slots
    .map((rec, i) => `<option value="${i + 1}">${i + 1} — ${rec ? `remplacer « ${escapeHtml(rec.nom)} »` : "vide"}</option>`)
    .join("");
  const firstEmpty = slots.findIndex((r) => !r);
  newSlot.value = keep && slots[Number(keep) - 1] === null ? keep : String(firstEmpty >= 0 ? firstEmpty + 1 : 1);
  newNom.focus();
}

newForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const faction = newFaction.value === FACTION_AUTRE ? newFactionAutre.value : newFaction.value;
  const n = Number(newSlot.value);
  try {
    const existing = await getSlot(n);
    if (
      existing &&
      !confirm(
        `L'emplacement ${n} contient déjà « ${existing.nom} ». La remplacer par la nouvelle bande ?\n` +
          "La bande actuelle de cet emplacement sera définitivement effacée (exportez la sauvegarde avant si besoin)."
      )
    ) {
      return;
    }
    await flushSave();
    const creation = newCreation(newNom.value, faction);
    const tresor = Number(newTresor.value);
    creation.tresorDepart = Number.isFinite(tresor) && newTresor.value !== "" ? Math.max(0, tresor) : TRESOR_DEPART;
    activeSlot = n;
    loadRoster(buildRoster(creation), { creation });
    persoLoadedMsg.hidden = true;
    await saveNow();
    newForm.reset();
    newFactionAutreWrap.hidden = true;
    showView("bande");
    showTab("composition");
  } catch (err) {
    console.error(err);
    newStatus.textContent = `Création impossible : ${err.message}`;
  }
});

// ---------------------------------------------------------------------
// Composition d'une bande créée : réglages, héros, hommes de main
// ---------------------------------------------------------------------
const creaNom = document.getElementById("crea-nom");
const creaFaction = document.getElementById("crea-faction");
const creaTresor = document.getElementById("crea-tresor");

/** Régénère le roster après une modification de la composition. */
function applyCreationChange() {
  currentRoster = buildRoster(currentCreation);
  currentModel = parseRoster(currentRoster);
  applyPartie(currentModel, partie);
  renderPreview(currentModel);
  renderPersoCards(currentModel);
  scheduleSave();
}

/**
 * Petite liste éditable de mots (équipement, compétences, règles) :
 * pastilles supprimables + champ avec saisie automatique.
 */
function chipEditor(container, list, { datalist, placeholder, onChange }) {
  const render = () => {
    container.innerHTML = "";
    const chips = document.createElement("div");
    chips.className = "chips";
    list.forEach((item, i) => {
      const chip = document.createElement("span");
      chip.className = "chip";
      chip.textContent = item;
      const del = document.createElement("button");
      del.type = "button";
      del.className = "chip-del";
      del.setAttribute("aria-label", `Retirer ${item}`);
      del.textContent = "×";
      del.addEventListener("click", () => {
        list.splice(i, 1);
        render();
        onChange?.();
      });
      chip.appendChild(del);
      chips.appendChild(chip);
    });
    container.appendChild(chips);

    const row = document.createElement("div");
    row.className = "chip-add";
    const input = document.createElement("input");
    input.type = "text";
    input.className = "perso-nom-input";
    input.placeholder = placeholder;
    if (datalist) input.setAttribute("list", datalist);
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "btn-slot";
    btn.textContent = "Ajouter";
    const add = () => {
      const v = input.value.trim();
      if (!v) return;
      list.push(v);
      render();
      onChange?.();
      container.querySelector(".chip-add input")?.focus();
    };
    btn.addEventListener("click", add);
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        add();
      }
    });
    row.append(input, btn);
    container.appendChild(row);
  };
  render();
}

function statLine(stats) {
  return STAT_KEYS.map((k) => `<span class="stat-cell"><b>${k}</b>${escapeHtml(stats[k])}</span>`).join("");
}

function unitCard(fig) {
  const div = document.createElement("div");
  div.className = "unit-card";
  const custom = customisations[fig.id]?.nom;
  const titre = escapeHtml(fig.type || (fig.categorie === "heros" ? "Héros" : "Homme de main"));
  const details = [
    fig.equipement.length ? `Équipement : ${escapeHtml(fig.equipement.join(", "))}` : "",
    fig.competences.length ? `Compétences : ${escapeHtml(fig.competences.join(", "))}` : "",
    fig.regles.length ? `Règles : ${escapeHtml(fig.regles.join(", "))}` : "",
  ].filter(Boolean);
  div.innerHTML = `
    <div class="unit-head">
      <span class="unit-name">${custom ? `${escapeHtml(custom)} <em>(${titre})</em>` : titre}</span>
      <span class="unit-cost">${fig.coutGc} co · ${fig.xp} xp</span>
    </div>
    <div class="stat-line">${statLine(fig.stats)}</div>
    ${details.map((d) => `<p class="unit-detail">${d}</p>`).join("")}
    <div class="slot-actions"></div>
  `;
  const actions = div.querySelector(".slot-actions");
  const addBtn = (label, onClick) => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "btn-slot";
    b.textContent = label;
    b.addEventListener("click", onClick);
    actions.appendChild(b);
  };
  addBtn("Modifier", () => openFigDialog(fig));
  addBtn("Dupliquer", () => {
    const i = currentCreation.figurines.indexOf(fig);
    currentCreation.figurines.splice(i + 1, 0, duplicateFigurine(fig));
    applyCreationChange();
  });
  addBtn("Retirer", () => {
    if (!confirm(`Retirer « ${custom || fig.type || "cette figurine"} » de la bande ?`)) return;
    currentCreation.figurines = currentCreation.figurines.filter((f) => f !== fig);
    delete customisations[fig.id];
    delete partie.figurines[fig.id];
    applyCreationChange();
  });
  return div;
}

function renderCreation() {
  const c = currentCreation;
  if (document.activeElement !== creaNom) creaNom.value = c.nom;
  if (document.activeElement !== creaFaction) creaFaction.value = c.faction;
  if (document.activeElement !== creaTresor) creaTresor.value = c.tresorDepart;

  const t = creationTotals(c);
  document.getElementById("crea-budget").textContent =
    `Trésor de départ ${t.tresor} co · dépensé ${t.cout} co · reste ${t.reste} co (versé au magot) · ${t.effectif} figurine(s)`;

  const warnings = creationWarnings(c);
  document.getElementById("creation-warnings").hidden = !warnings.length;
  document.getElementById("creation-warnings-list").innerHTML = warnings.map((w) => `<li>${escapeHtml(w)}</li>`).join("");

  for (const cat of ["heros", "hdm"]) {
    const figs = c.figurines.filter((f) => f.categorie === cat);
    document.getElementById(`crea-count-${cat}`).textContent = figs.length;
    const list = document.getElementById(`crea-list-${cat}`);
    list.innerHTML = figs.length ? "" : `<p class="hint-text small left">Personne pour l'instant.</p>`;
    figs.forEach((f) => list.appendChild(unitCard(f)));
  }

  chipEditor(document.getElementById("crea-regles-bande"), c.reglesBande, {
    datalist: "rules-list",
    placeholder: "Règle spéciale de la bande",
    onChange: applyCreationChange,
  });
}

creaNom.addEventListener("change", () => {
  currentCreation.nom = creaNom.value.trim() || "Nouvelle bande";
  applyCreationChange();
});
creaFaction.addEventListener("change", () => {
  currentCreation.faction = creaFaction.value.trim();
  applyCreationChange();
});
creaTresor.addEventListener("change", () => {
  const n = Number(creaTresor.value);
  currentCreation.tresorDepart = Number.isFinite(n) && creaTresor.value !== "" ? Math.max(0, n) : TRESOR_DEPART;
  applyCreationChange();
});
document.querySelectorAll(".add-btn").forEach((b) =>
  b.addEventListener("click", () => openFigDialog(null, b.dataset.add))
);

// ---------------------------------------------------------------------
// Fiche d'édition d'une figurine (fenêtre)
// ---------------------------------------------------------------------
const figDialog = document.getElementById("fig-dialog");
const figForm = document.getElementById("fig-form");
const figType = document.getElementById("fig-type");
const figCout = document.getElementById("fig-cout");
const figXp = document.getElementById("fig-xp");
const figStats = document.getElementById("fig-stats");
let figDraft = null; // copie en cours d'édition
let figOriginal = null; // figurine remplacée à la validation (null = recrutement)

figStats.innerHTML = STAT_KEYS.map(
  (k) => `<label class="stat-edit"><span>${k}</span><input type="text" class="perso-nom-input" data-stat="${k}" maxlength="4" /></label>`
).join("");

function openFigDialog(fig, categorie = "heros") {
  figOriginal = fig;
  figDraft = fig ? structuredClone(fig) : newFigurine(categorie);
  const isHero = figDraft.categorie === "heros";
  document.getElementById("fig-title").textContent = fig
    ? `Modifier ${isHero ? "le héros" : "l'homme de main"}`
    : `Recruter ${isHero ? "un héros" : "un homme de main"}`;
  figType.value = figDraft.type;
  figCout.value = figDraft.coutGc;
  figXp.value = figDraft.xp;
  figStats.querySelectorAll("input").forEach((inp) => (inp.value = figDraft.stats[inp.dataset.stat]));
  chipEditor(document.getElementById("fig-equipement"), figDraft.equipement, {
    datalist: "equipment-list",
    placeholder: "Épée, arc, armure légère...",
  });
  chipEditor(document.getElementById("fig-competences"), figDraft.competences, {
    datalist: "rules-list",
    placeholder: "Nom de compétence",
  });
  chipEditor(document.getElementById("fig-regles"), figDraft.regles, {
    datalist: "rules-list",
    placeholder: "Chef, Peur, Animal...",
  });
  figDialog.showModal();
  figType.focus();
}

figForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // Un texte laissé dans un champ d'ajout sans cliquer « Ajouter » est quand même pris.
  for (const [id, key] of [
    ["fig-equipement", "equipement"],
    ["fig-competences", "competences"],
    ["fig-regles", "regles"],
  ]) {
    const pending = document.querySelector(`#${id} .chip-add input`);
    if (pending?.value.trim()) figDraft[key].push(pending.value.trim());
  }
  figDraft.type = figType.value.trim();
  figDraft.coutGc = Math.max(0, Number(figCout.value) || 0);
  figDraft.xp = Math.max(0, Number(figXp.value) || 0);
  figStats.querySelectorAll("input").forEach((inp) => {
    figDraft.stats[inp.dataset.stat] = inp.value.trim() || "-";
  });
  const figs = currentCreation.figurines;
  const i = figs.indexOf(figOriginal);
  if (i >= 0) figs[i] = figDraft;
  else figs.push(figDraft);
  figDialog.close();
  figDraft = figOriginal = null;
  applyCreationChange();
});
document.getElementById("fig-cancel").addEventListener("click", () => figDialog.close());

// ---------------------------------------------------------------------
// Emplacements de bande (base locale IndexedDB, voir warband-store.js)
// ---------------------------------------------------------------------
let saveTimer = null;

function buildRecord(slot) {
  const orphelines = {};
  for (const [id, o] of orphanCustomisations.entries()) {
    orphelines[id] = { nom: o.nom || "", bio: o.bio || "", photo: o.photo || null, label: o.label || o.nom || "" };
  }
  const customs = {};
  for (const [id, c] of Object.entries(customisations)) {
    if (c.nom || c.bio || c.photo) customs[id] = c;
  }
  return {
    slot,
    nom: currentModel.meta.nom,
    roster: currentRoster,
    customisations: customs,
    orphelines,
    partie,
    creation: currentCreation,
  };
}

/** Sauvegarde automatique (différée) de la bande ouverte dans son emplacement. */
function scheduleSave() {
  if (!activeSlot || !currentModel) return;
  clearTimeout(saveTimer);
  saveTimer = setTimeout(saveNow, 400);
}

async function saveNow() {
  clearTimeout(saveTimer);
  saveTimer = null;
  if (!activeSlot || !currentModel) return;
  try {
    const rec = await putSlot(buildRecord(activeSlot));
    const heure = new Date(rec.majLe).toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" });
    slotStatus.textContent = `Emplacement ${activeSlot} sauvegardé automatiquement (${heure}) ✓`;
    renderBandeHead(currentModel);
    renderSlots();
  } catch (err) {
    console.error(err);
    slotStatus.textContent = `Sauvegarde impossible : ${err.message}. Exportez la sauvegarde pour ne rien perdre.`;
  }
}

async function flushSave() {
  if (saveTimer) await saveNow();
}

function formatDate(iso) {
  try {
    return new Date(iso).toLocaleString("fr-FR", { dateStyle: "short", timeStyle: "short" });
  } catch {
    return "";
  }
}

async function renderSlots() {
  let slots;
  try {
    slots = await listSlots();
  } catch (err) {
    console.error(err);
    slotsContainer.innerHTML = "";
    slotStatus.textContent = `Stockage local indisponible : ${err.message} (navigation privée ?)`;
    return;
  }
  slotsContainer.innerHTML = "";
  slots.forEach((rec, i) => {
    const n = i + 1;
    const isActive = activeSlot === n;
    const div = document.createElement("div");
    div.className = `slot-card${rec ? "" : " empty"}${isActive ? " active" : ""}`;
    const catalogue = rec?.roster?.roster?.forces?.[0]?.catalogueName?.trim() || "";
    const origine = rec ? (rec.creation ? "créée ici" : "importée") : "";
    div.innerHTML = `
      <p class="slot-num">Emplacement ${n}${isActive ? " · ouverte" : ""}</p>
      <p class="slot-name">${rec ? escapeHtml(rec.nom) : "Vide"}</p>
      <p class="slot-meta">${
        rec
          ? `${escapeHtml(catalogue)}${catalogue ? " · " : ""}${origine} · modifiée le ${formatDate(rec.majLe)}`
          : "&nbsp;"
      }</p>
      <div class="slot-actions"></div>
    `;
    const actions = div.querySelector(".slot-actions");
    const addBtn = (label, onClick) => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "btn-slot";
      b.textContent = label;
      b.addEventListener("click", onClick);
      actions.appendChild(b);
    };
    if (rec && !isActive) addBtn("Ouvrir", () => openSlot(n));
    if (isActive) addBtn("Afficher", () => showView("bande"));
    if (!rec) addBtn("Nouvelle bande", () => {
      showView("nouvelle");
      newSlot.value = String(n);
    });
    if (currentModel && !activeSlot) addBtn("Enregistrer ici", () => saveToSlot(n, rec));
    if (rec) addBtn("Vider", () => clearSlot(n, rec));
    slotsContainer.appendChild(div);
  });
}

async function openSlot(n) {
  try {
    await flushSave();
    const rec = await getSlot(n);
    if (!rec) return renderSlots();
    clearError();
    activeSlot = n;
    loadRoster(rec.roster, rec);
    persoLoadedMsg.hidden = true;
    slotStatus.textContent = "";
    showView("bande");
    showTab("composition");
    bandeView.scrollIntoView({ behavior: "smooth", block: "start" });
  } catch (err) {
    console.error(err);
    slotStatus.textContent = `Impossible d'ouvrir l'emplacement ${n} : ${err.message}`;
  }
}

async function saveToSlot(n, existing) {
  if (!currentModel) return;
  await flushSave();
  let merged = null;
  if (existing) {
    if (existing.nom === currentModel.meta.nom) {
      // Même bande (nouvel export après une partie) : on garde personnalisations et notes.
      const ok = confirm(
        `Mettre à jour « ${existing.nom} » (emplacement ${n}) avec ce fichier ?\n` +
          "Noms, bios, photos et notes de partie sont conservés ; XP et magot reprennent les valeurs du nouvel export."
      );
      if (!ok) return;
      merged = mergeIntoSlot(existing, currentModel, customisations);
    } else {
      const ok = confirm(
        `L'emplacement ${n} contient déjà « ${existing.nom} ». La remplacer par « ${currentModel.meta.nom} » ?\n` +
          "La bande actuelle de cet emplacement sera définitivement effacée (exportez la sauvegarde avant si besoin)."
      );
      if (!ok) return;
    }
  }
  if (merged) {
    customisations = merged.customisations;
    orphanCustomisations = new Map(
      Object.entries(merged.orphelines).map(([id, o]) => [id, { ...o, nom: o.nom || o.label || "(sans nom)" }])
    );
    partie = merged.partie;
  }
  activeSlot = n;
  try {
    // Réaffiche à partir de l'état fusionné pour que l'écran corresponde à l'emplacement.
    loadRoster(currentRoster, buildRecord(n));
    await saveNow();
    showView("bande");
    slotStatus.textContent = "";
    generateStatus.textContent = "";
  } catch (err) {
    console.error(err);
    slotStatus.textContent = `Enregistrement impossible : ${err.message}`;
  }
}

async function clearSlot(n, rec) {
  if (!confirm(`Vider l'emplacement ${n} (« ${rec.nom} ») ? Cette bande sera effacée de ce navigateur.`)) return;
  try {
    if (activeSlot === n) {
      clearTimeout(saveTimer);
      saveTimer = null;
      activeSlot = null;
    }
    await deleteSlot(n);
    if (currentModel) renderBandeHead(currentModel);
    slotStatus.textContent = `Emplacement ${n} vidé.`;
  } catch (err) {
    console.error(err);
    slotStatus.textContent = `Impossible de vider l'emplacement ${n} : ${err.message}`;
  }
  renderSlots();
}

document.getElementById("export-slots-btn").addEventListener("click", async () => {
  try {
    await flushSave();
    const records = (await listSlots()).filter(Boolean);
    if (!records.length) {
      slotStatus.textContent = "Aucune bande enregistrée à exporter.";
      return;
    }
    const blob = new Blob([serializeExport(records)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `mordheim-bandes-${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
    slotStatus.textContent = `Sauvegarde exportée (${records.length} bande(s)) ✓`;
  } catch (err) {
    console.error(err);
    slotStatus.textContent = `Export impossible : ${err.message}`;
  }
});

const importSlotsInput = document.getElementById("import-slots-input");
document.getElementById("import-slots-btn").addEventListener("click", () => importSlotsInput.click());
importSlotsInput.addEventListener("change", async () => {
  const file = importSlotsInput.files?.[0];
  importSlotsInput.value = "";
  if (!file) return;
  try {
    const records = parseExport(await file.text());
    if (!records.length) {
      slotStatus.textContent = "Ce fichier de sauvegarde ne contient aucune bande.";
      return;
    }
    const liste = records.map((r) => `  ${r.slot}. ${r.nom}`).join("\n");
    if (!confirm(`Importer ces bandes ? Elles remplaceront le contenu des mêmes emplacements :\n${liste}`)) return;
    await flushSave();
    for (const rec of records) await putSlot(rec);
    const reopen = records.find((r) => r.slot === activeSlot);
    if (reopen) loadRoster(reopen.roster, reopen);
    else if (currentModel) renderBandeHead(currentModel);
    slotStatus.textContent = `${records.length} bande(s) importée(s) ✓`;
    renderSlots();
  } catch (err) {
    console.error(err);
    slotStatus.textContent = `Import impossible : ${err.message}`;
  }
});

document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden") flushSave();
});

requestPersistence();
showView("accueil");
