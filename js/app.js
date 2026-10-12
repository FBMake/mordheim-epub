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

const dropzone = document.getElementById("dropzone");
const fileInput = document.getElementById("file-input");
const fileError = document.getElementById("file-error");
const previewSection = document.getElementById("preview-section");
const generateBtn = document.getElementById("generate-btn");
const generateStatus = document.getElementById("generate-status");

const persoUploadSection = document.getElementById("perso-upload-section");
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
// Aperçu de la bande
// ---------------------------------------------------------------------
function renderPreview(model) {
  document.getElementById("preview-nom").textContent = model.meta.nom;
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

  previewSection.hidden = false;
  persoUploadSection.hidden = false;
  generateStatus.textContent = "";
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
    await flushSave();
    loadRoster(json);
    activeSlot = null;
    persoLoadedMsg.hidden = true;
    renderSlots();
    slotStatus.textContent =
      "Bande chargée mais pas encore enregistrée : choisissez « Enregistrer ici » sur un emplacement pour la garder.";
  } catch (err) {
    console.error(err);
    showError(`Impossible de lire ce fichier : ${err.message || "erreur inconnue"}.`);
    previewSection.hidden = true;
    persoUploadSection.hidden = true;
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
    div.innerHTML = `
      <p class="slot-num">Emplacement ${n}${isActive ? " · ouverte" : ""}</p>
      <p class="slot-name">${rec ? escapeHtml(rec.nom) : "Vide"}</p>
      <p class="slot-meta">${
        rec ? `${escapeHtml(catalogue)}${catalogue ? " · " : ""}modifiée le ${formatDate(rec.majLe)}` : "&nbsp;"
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
    if (currentModel && !isActive) addBtn("Enregistrer ici", () => saveToSlot(n, rec));
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
    loadRoster(rec.roster, rec);
    activeSlot = n;
    persoLoadedMsg.hidden = true;
    slotStatus.textContent = `Bande « ${rec.nom} » ouverte depuis l'emplacement ${n}. Les modifications sont sauvegardées automatiquement.`;
    renderSlots();
    previewSection.scrollIntoView({ behavior: "smooth", block: "start" });
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
    slotStatus.textContent = `Bande enregistrée dans l'emplacement ${n} ✓ — les modifications suivantes sont sauvegardées automatiquement.`;
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
renderSlots();
