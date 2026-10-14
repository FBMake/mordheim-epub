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
  BANDES,
  FACTIONS,
  coutCalcule,
  getBande,
  getGuerrier,
  newFigurineFromModele,
  prixEquipement,
  EQUIPEMENT_COURANT,
  STAT_KEYS,
  TRESOR_DEPART,
  buildRoster,
  creationTotals,
  creationWarnings,
  descriptionRegle,
  duplicateFigurine,
  coutEntree,
  coutRecrue,
  recruterDansGroupe,
  tailleGroupe,
  MAX_GROUPE,
  knownRuleNames,
  newCreation,
  newFigurine,
  contientRegle,
  regleBloquantXp,
  reglesDeLaBande,
  texteSansXp,
  equipementRefuse,
} from "./warband-builder.js";
import { LANGUES, detectLang, getLang, getLocale, setLang, t } from "./i18n.js";
import { flagSvg } from "./flags.js";
import { loc, locBande, locCompetence, locGuerrier, locNomRegle, locRegle } from "./donnees-langue.js";
import { pisteXpHtml } from "./experience.js";
import {
  annulerProgression,
  appliquerProgression,
  appliquerProgressionHeros,
  competencesDepart,
  competencesLibres,
  ecartsProfil,
  lancer2D6,
  progressionsDues,
  promouvoir,
  resultatProgression,
  resultatProgressionHeros,
} from "./progression.js";
import { competencesAccessibles, maximumsGuerrier } from "./data/competences.js";
import { RESULTATS, appliquerCombat, bilanFigurine, splitItems } from "./combats.js";
import {
  MORT,
  appliquerMalus,
  blessuresPour,
  getBlessure,
  libelleBlessure,
  malusTotal,
  nomBlessure,
  texteMalus,
} from "./blessures.js";

setLang(detectLang(), { remember: false });

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
const cimetiereBox = document.getElementById("cimetiere");
const cimetiereList = document.getElementById("cimetiere-list");

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

// ---------------------------------------------------------------------
// Bulle d'explication des règles et compétences : au survol de la souris,
// au clavier (focus) et au toucher sur mobile (un toucher l'ouvre, un
// autre ailleurs la ferme). Tout élément portant data-info en profite.
// ---------------------------------------------------------------------
function infoAttr(texte) {
  return texte ? ` data-info="${escapeHtml(texte)}" tabindex="0"` : "";
}
/** Pastille fixe, avec bulle d'explication si `info` est donné. */
function chipInfoHtml(nom, info = "") {
  return `<span class="chip chip-fixe${info ? " chip-info" : ""}"${infoAttr(info)}>${escapeHtml(nom)}</span>`;
}
/** Ajoute la bulle d'explication à un élément créé en JavaScript. */
function infoBulle(el, texte) {
  if (!texte) return;
  el.dataset.info = texte;
  el.classList.add("chip-info");
  if (el.tagName !== "BUTTON") el.tabIndex = 0;
}

const bulle = document.createElement("div");
bulle.className = "bulle-info";
bulle.setAttribute("role", "tooltip");
bulle.hidden = true;
document.body.appendChild(bulle);
let bulleCible = null;

function montrerBulle(el) {
  bulleCible = el;
  bulle.textContent = el.dataset.info;
  bulle.hidden = false;
  // Au-dessus de la pastille, sinon en dessous ; toujours dans l'écran.
  const r = el.getBoundingClientRect();
  const b = bulle.getBoundingClientRect();
  const marge = 8;
  const left = Math.min(Math.max(marge, r.left + r.width / 2 - b.width / 2), window.innerWidth - b.width - marge);
  const dessus = r.top - b.height - marge >= 0;
  bulle.style.left = `${left}px`;
  bulle.style.top = `${dessus ? r.top - b.height - marge : r.bottom + marge}px`;
  bulle.classList.toggle("dessous", !dessus);
}
function cacherBulle() {
  bulleCible = null;
  bulle.hidden = true;
}
// Les fenêtres (<dialog>) passent au-dessus de la page : la bulle s'y déplace.
function placerBulle(el) {
  const parent = el.closest("dialog[open]") || document.body;
  if (bulle.parentElement !== parent) parent.appendChild(bulle);
}
// Type du dernier appui : un focus donné par un clic ou un toucher n'ouvre pas la bulle
// (la souris l'a déjà ouverte au survol, le toucher l'ouvre au clic).
let dernierAppui = { type: "", quand: 0 };
document.addEventListener("pointerdown", (e) => (dernierAppui = { type: e.pointerType, quand: Date.now() }), true);
const appuiRecent = () => Date.now() - dernierAppui.quand < 600;
document.addEventListener("pointerover", (e) => {
  if (e.pointerType !== "mouse") return;
  const el = e.target.closest?.("[data-info]");
  if (!el) return;
  placerBulle(el);
  montrerBulle(el);
});
document.addEventListener("pointerout", (e) => {
  if (e.pointerType !== "mouse") return;
  const el = e.target.closest?.("[data-info]");
  if (el && !el.contains(e.relatedTarget)) cacherBulle();
});
document.addEventListener("focusin", (e) => {
  if (appuiRecent()) return;
  const el = e.target.closest?.("[data-info]");
  if (!el) return;
  placerBulle(el);
  montrerBulle(el);
});
document.addEventListener("focusout", () => {
  if (!appuiRecent()) cacherBulle();
});
document.addEventListener("click", (e) => {
  const el = e.target.closest?.("[data-info]");
  // Toucher une pastille (pas un bouton, ni sa croix de retrait) ouvre ou ferme sa bulle.
  // À la souris, la bulle suit le survol : un clic sur la pastille ne la ferme pas.
  if (el && appuiRecent() && dernierAppui.type === "mouse") return;
  if (el && el.tagName !== "BUTTON" && !e.target.closest(".chip-del")) {
    if (bulleCible === el && !bulle.hidden) cacherBulle();
    else {
      placerBulle(el);
      montrerBulle(el);
    }
    return;
  }
  if (!bulle.hidden && !bulle.contains(e.target)) cacherBulle();
});
document.addEventListener("scroll", cacherBulle, { capture: true, passive: true });
window.addEventListener("resize", cacherBulle);

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
  if (name === "regles") renderReglesBande();
}

function showTab(name) {
  // Tant que la bande n'est pas créée, seule la page de recrutement s'affiche, sans menu.
  if (currentCreation?.brouillon) name = "brouillon";
  else if (name === "brouillon") name = "composition";
  tabButtons.forEach((b) => {
    const on = b.dataset.tab === name;
    b.classList.toggle("active", on);
    b.setAttribute("aria-selected", on ? "true" : "false");
  });
  document.querySelectorAll(".tab-panel").forEach((p) => (p.hidden = p.dataset.panel !== name));
  // Les noms personnalisés saisis dans « Figurines » apparaissent sur les cartes des guerriers.
  if (currentCreation) renderCreation();
}

// Petit écran : le menu est replié en haut de la page.
const sidebar = document.getElementById("sidebar");
const menuToggle = document.getElementById("menu-toggle");
function toggleMenu(open = !sidebar.classList.contains("menu-ouvert")) {
  sidebar.classList.toggle("menu-ouvert", open);
  menuToggle.setAttribute("aria-expanded", open ? "true" : "false");
}
menuToggle.addEventListener("click", () => toggleMenu());

navButtons.forEach((b) =>
  b.addEventListener("click", async () => {
    toggleMenu(false);
    await flushSave();
    showView(b.dataset.view);
  })
);
tabButtons.forEach((b) => b.addEventListener("click", () => showTab(b.dataset.tab)));
document.getElementById("unsaved-go").addEventListener("click", () => {
  showView("accueil");
  slotStatus.textContent = t("slot.choisir", { nom: currentModel?.meta.nom });
});

function fillDatalist(id, values) {
  document.getElementById(id).innerHTML = values.map((v) => `<option value="${escapeHtml(v)}"></option>`).join("");
}
/** Saisies automatiques qui dépendent de la langue (noms des bandes et des règles). */
function fillLangDatalists() {
  fillDatalist("factions-list", [...BANDES.map(locBande), ...FACTIONS]);
  fillDatalist("rules-list", knownRuleNames());
}
fillLangDatalists();
fillDatalist("equipment-list", EQUIPEMENT_COURANT);

// ---------------------------------------------------------------------
// Aperçu de la bande
// ---------------------------------------------------------------------
function renderBandeHead(model) {
  document.getElementById("bande-faction").textContent = model.meta.catalogue || t("bande.factionInconnue");
  document.getElementById("bande-origine").textContent =
    (currentCreation ? t(currentCreation.brouillon ? "bande.brouillon" : "bande.creee") : t("bande.importee")) +
    (activeSlot ? t("bande.emplacement", { n: activeSlot }) : t("bande.nonEnregistree"));
  document.getElementById("unsaved-box").hidden = Boolean(activeSlot);
  navBande.hidden = false;
  navBande.textContent = model.meta.nom;
}

function renderPreview(model) {
  document.getElementById("preview-nom").textContent = model.meta.nom;
  renderBandeHead(model);
  document.getElementById("preview-gc").textContent = t("stat.po", { n: model.meta.gc });
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

  const brouillon = Boolean(currentCreation?.brouillon);
  document.getElementById("bande-menu").hidden = brouillon;
  document.getElementById("compo-import").hidden = Boolean(currentCreation);
  document.getElementById("compo-creation").hidden = !currentCreation;
  document.getElementById("suivi-effectif").hidden = !currentCreation || brouillon;
  // Héros et hommes de main modifiables : dans le brouillon, puis dans « Suivi de bande ».
  const creaEdit = document.getElementById("crea-edit");
  creaEdit.hidden = !currentCreation;
  document.getElementById(brouillon ? "crea-zone-brouillon" : "crea-zone-suivi").appendChild(creaEdit);
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
    const statut = h.statut ? ` — ${escapeHtml(t(`statut.${h.statut}`))}` : "";
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

/** Résumé de l'historique des combats d'une figurine (vide si aucun). */
function bilanHtml(id) {
  const b = bilanFigurine(partie.combats || [], id);
  if (!b.combats) return "";
  const blessures = b.blessures.length
    ? `<br />${escapeHtml(t("bilan.blessures", { liste: b.blessures.join(", ") }))}`
    : "";
  return `<p class="perso-bilan">${escapeHtml(t("bilan.texte", { n: b.combats, xp: b.xp }))}${blessures}</p>`;
}

const estMort = (card) => card.statut === "Mort";

/**
 * Liste de blessures choisies dans la table (voir blessures.js) :
 * pastilles supprimables + liste déroulante pour en ajouter une.
 * `onAdd(id)` peut renvoyer false pour ne pas garder la blessure dans la liste.
 */
function blessuresEditor(container, list, estHeros, { permanentes = false, onAdd, onChange } = {}) {
  const render = () => {
    container.innerHTML = "";
    if (list.length) {
      const chips = document.createElement("div");
      chips.className = "chips";
      list.forEach((id, i) => {
        const chip = document.createElement("span");
        chip.className = "chip";
        const malus = texteMalus(getBlessure(id)?.malus);
        chip.textContent = nomBlessure(id) + (malus ? ` (${malus})` : "");
        const del = document.createElement("button");
        del.type = "button";
        del.className = "chip-del";
        del.setAttribute("aria-label", t("chip.retirer", { item: nomBlessure(id) }));
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
    }
    const select = document.createElement("select");
    select.className = "perso-nom-input blessure-select";
    select.setAttribute("aria-label", t("blessures.ajouter"));
    select.innerHTML =
      option("", t("blessures.ajouter")) +
      blessuresPour(estHeros, { permanentes }).map((b) => option(b.id, libelleBlessure(b, estHeros))).join("");
    select.addEventListener("change", () => {
      const id = select.value;
      if (!id) return;
      if (onAdd?.(id) !== false) list.push(id);
      render();
      onChange?.();
    });
    container.appendChild(select);
  };
  render();
}

/** « Profil après blessures : M 3, E 2 » (vide sans malus). */
function profilBlesseHtml(card) {
  const malus = malusTotal(card.blessuresPartie);
  const keys = Object.keys(malus).filter((k) => card.stats[k] !== card.statsRoster?.[k]);
  if (!keys.length) return "";
  const profil = keys
    .map((k) => {
      const cls = malus[k] > 0 ? "stat-plus" : "stat-moins";
      return `<span class="${cls}">${escapeHtml(`${k} ${card.stats[k]} (${malus[k] > 0 ? "+" : "−"}${Math.abs(malus[k])})`)}</span>`;
    })
    .join(", ");
  // Le texte traduit garde « {profil} », remplacé par les valeurs colorées.
  return `<p class="perso-bilan">${escapeHtml(t("blessures.profil", { profil: "{profil}" })).replace("{profil}", profil)}</p>`;
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
        ${t("perso.photo")}
        <input type="file" accept="image/*" class="perso-photo-input" hidden />
      </label>
    </div>
    <div class="perso-fields">
      <p class="perso-original-name">${categorie} — ${escapeHtml(card.nom)}</p>
      <label class="perso-label">
        ${t("perso.nom")}
        <input type="text" class="perso-nom-input" placeholder="${escapeHtml(card.nom)}" value="${escapeHtml(
          custom.nom
        )}" />
      </label>
      <label class="perso-label">
        ${t("perso.bio")}
        <textarea class="perso-bio-input" rows="2" placeholder="${escapeHtml(t("perso.bio.exemple"))}">${escapeHtml(
          custom.bio
        )}</textarea>
      </label>
      <div class="partie-row">
        <label class="perso-label">
          ${t("perso.xp")}
          <input type="number" class="perso-nom-input partie-xp-input" inputmode="numeric"
            placeholder="${card.xpRoster ?? card.xp}" value="${partie.figurines[card.id]?.xp ?? ""}" ${
              regleSansXpCarte(card) ? "disabled" : ""
            } />
        </label>
        <label class="perso-label">
          ${t("perso.etat")}
          <select class="perso-nom-input partie-statut-input">
            ${STATUTS.map(
              (st) =>
                `<option value="${st}" ${partie.figurines[card.id]?.statut === st ? "selected" : ""}>${
                  escapeHtml(t(`statut.${st}`))
                }</option>`
            ).join("")}
          </select>
        </label>
      </div>
      <div class="xp-piste-wrap"></div>
      ${bilanHtml(card.id)}
      ${
        currentModel.heros.includes(card)
          ? `<div class="perso-label">${escapeHtml(t("blessures.titre"))}<div class="blessures-editor"></div></div>`
          : ""
      }
      <div class="profil-blesse">${profilBlesseHtml(card)}</div>
      <label class="perso-label">
        ${t("perso.notes")}
        <input type="text" class="perso-nom-input partie-notes-input" placeholder="${escapeHtml(t("perso.notes.exemple"))}"
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
  // Le nom choisi apparaît aussi sur la carte du guerrier (« Recrues et progressions »).
  nomInput.addEventListener("change", () => {
    if (currentCreation) renderCreation();
  });

  const bioInput = div.querySelector(".perso-bio-input");
  bioInput.addEventListener("input", () => {
    ensureCustomisation(card.id).bio = bioInput.value;
    scheduleSave();
  });

  const figurine = () => {
    if (!partie.figurines[card.id]) partie.figurines[card.id] = { xp: null, statut: "", notes: "", blessures: [] };
    partie.figurines[card.id].blessures ||= [];
    return partie.figurines[card.id];
  };
  const xpInput = div.querySelector(".partie-xp-input");
  // Piste d'expérience en cases à cocher, comme sur la fiche d'origine : cliquer
  // une case fixe l'XP à cette valeur (cliquer la dernière cochée la décoche).
  const pisteBox = div.querySelector(".xp-piste-wrap");
  // Une règle « ne gagne jamais d'expérience » grise la piste et le champ.
  const sansXp = regleSansXpCarte(card);
  const renderPiste = () => {
    const xp = partie.figurines[card.id]?.xp ?? card.xpRoster ?? card.xp;
    const categorie = currentModel.heros.includes(card) ? "heros" : "hdm";
    pisteBox.innerHTML = sansXp
      ? pisteBloqueeHtml(xp, categorie, sansXp)
      : pisteXpHtml(xp, categorie, { modifiable: true, titre: t("perso.xpPiste") });
  };
  renderPiste();
  pisteBox.addEventListener("click", (e) => {
    const b = e.target.closest("[data-xp]");
    if (!b) return;
    figurine().xp = Number(b.dataset.xp);
    xpInput.value = b.dataset.xp;
    renderPiste();
    refreshTotals(currentModel);
    scheduleSave();
  });
  xpInput.addEventListener("input", () => {
    const n = xpInput.value === "" ? null : Number(xpInput.value);
    figurine().xp = Number.isFinite(n) ? n : null;
    renderPiste();
    refreshTotals(currentModel);
    scheduleSave();
  });
  const statutInput = div.querySelector(".partie-statut-input");
  statutInput.addEventListener("change", () => {
    figurine().statut = statutInput.value;
    refreshTotals(currentModel);
    // Une figurine déclarée morte part au cimetière.
    if (statutInput.value === "Mort") renderPersoCards(currentModel);
    scheduleSave();
  });

  const blessuresBox = div.querySelector(".blessures-editor");
  if (blessuresBox) {
    blessuresEditor(blessuresBox, figurine().blessures, true, {
      permanentes: true,
      onAdd: (id) => {
        if (id !== MORT) return true;
        figurine().statut = "Mort";
        return false;
      },
      onChange: () => {
        refreshTotals(currentModel);
        if (estMort(card)) renderPersoCards(currentModel);
        else div.querySelector(".profil-blesse").innerHTML = profilBlesseHtml(card);
        scheduleSave();
      },
    });
  }
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
      showError(t("perso.erreurPhoto", { err: err.message }));
    }
  });

  return div;
}

function renderPersoCards(model) {
  persoCardsContainer.innerHTML = "";
  model.heros.filter((c) => !estMort(c)).forEach((card) =>
    persoCardsContainer.appendChild(persoCardTemplate(card, t("categorie.heros")))
  );
  model.hommesDeMain.filter((c) => !estMort(c)).forEach((card) =>
    persoCardsContainer.appendChild(persoCardTemplate(card, t("categorie.hdm")))
  );
  renderCimetiere(model);
}

/** Cimetière : les figurines mortes, sans fiche dans le PDF, que l'on peut ramener. */
function renderCimetiere(model) {
  const morts = [
    ...model.heros.filter(estMort).map((card) => [card, t("categorie.heros")]),
    ...model.hommesDeMain.filter(estMort).map((card) => [card, t("categorie.hdm")]),
  ];
  cimetiereBox.hidden = morts.length === 0;
  cimetiereList.innerHTML = "";
  for (const [card, categorie] of morts) {
    const custom = customisations[card.id] || {};
    const blessures = card.blessuresPartie.map(nomBlessure);
    const li = document.createElement("li");
    li.className = "tombe";
    li.innerHTML = `
      ${custom.photo ? `<img class="tombe-photo" src="${custom.photo}" alt="" />` : `<span class="tombe-croix" aria-hidden="true">✝</span>`}
      <div class="tombe-texte">
        <strong>${escapeHtml(custom.nom || card.nom)}</strong>
        <span class="tombe-detail">${escapeHtml(categorie)} — ${escapeHtml(card.nom)} · ${card.xp} xp</span>
        ${blessures.length ? `<span class="tombe-detail">${escapeHtml(t("bilan.blessures", { liste: blessures.join(", ") }))}</span>` : ""}
      </div>
      <button type="button" class="btn-slot tombe-ramener">${escapeHtml(t("cimetiere.ramener"))}</button>
    `;
    li.querySelector(".tombe-ramener").addEventListener("click", () => {
      partie.figurines[card.id].statut = "";
      refreshTotals(currentModel);
      renderPersoCards(currentModel);
      scheduleSave();
    });
    cimetiereList.appendChild(li);
  }
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
      { nom: val.nom || val.label || t("sansNom"), bio: val.bio || "", photo: val.photo || null, label: val.label || "" },
    ])
  );
  partie = saved?.partie ? structuredClone(saved.partie) : emptyPartie();
  currentCreation = saved?.creation ? structuredClone(saved.creation) : null;
  generateStatus.textContent = "";
  applyPartie(currentModel, partie);
  renderPreview(currentModel);
  renderPartieInputs();
  renderPersoCards(currentModel);
  renderCombats();
  renderOrphans();
}

async function handleFile(file) {
  clearError();
  if (!file) return;
  if (!file.name.toLowerCase().endsWith(".json")) {
    showError(t("import.pasJson"));
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
    showError(t("import.illisible", { err: err.message || t("erreur.inconnue") }));
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
          nom: val.nom || val._label || t("sansNom"),
          bio: val.bio,
          photo: val.photo,
          label: val._label || "",
        });
      }
    }

    renderPersoCards(currentModel);
    renderOrphans();
    persoLoadedMsg.textContent = t("persoFichier.charge", {
      n: Object.keys(customisations).filter(
        (id) => customisations[id].nom || customisations[id].bio || customisations[id].photo
      ).length,
    });
    persoLoadedMsg.hidden = false;
    refreshTotals(currentModel);
    scheduleSave();
  } catch (err) {
    console.error(err);
    showError(t("persoFichier.invalide", { err: err.message }));
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
  generateStatus.textContent = t("imprimer.enCours");
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

    generateStatus.textContent = t("imprimer.ok");
  } catch (err) {
    console.error(err);
    generateStatus.textContent = t("imprimer.erreur", { err: err.message });
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
// Historique des combats (voir combats.js)
// ---------------------------------------------------------------------
const combatDialog = document.getElementById("combat-dialog");
const combatForm = document.getElementById("combat-form");
const combatResultat = document.getElementById("combat-resultat");
const combatEffets = document.getElementById("combat-effets");
const combatsList = document.getElementById("combats-list");
const INCHANGE = "__inchange__";
// Blessures choisies dans la fenêtre de combat, par figurine.
let combatBlessures = new Map();

function renderResultatOptions() {
  combatResultat.innerHTML = ["", ...RESULTATS].map((r) => option(r, t(`resultat.${r}`))).join("");
}

const nomFigurine = (card) => customisations[card.id]?.nom || card.nom;

function openCombatDialog() {
  combatForm.reset();
  renderResultatOptions();
  document.getElementById("combat-date").value = new Date().toISOString().slice(0, 10);
  // Les morts ne combattent plus.
  const cards = [...currentModel.heros, ...currentModel.hommesDeMain].filter((c) => !estMort(c));
  combatBlessures = new Map(cards.map((c) => [c.id, []]));
  combatEffets.innerHTML = cards
    .map(
      (card) => `
    <fieldset class="combat-effet" data-id="${escapeHtml(card.id)}" data-nom="${escapeHtml(nomFigurine(card))}">
      <legend>${escapeHtml(nomFigurine(card))}</legend>
      <div class="partie-row">
        <label class="perso-label">
          ${t("effet.xp")}
          <input type="number" class="perso-nom-input effet-xp" inputmode="numeric" min="0" placeholder="0" ${
            regleSansXpCarte(card) ? `disabled title="${escapeHtml(t("xp.bloquee", { regle: regleSansXpCarte(card) }))}"` : ""
          } />
        </label>
        <label class="perso-label">
          ${t("effet.etat")}
          <select class="perso-nom-input effet-statut">
            ${option(INCHANGE, t("effet.inchange"))}
            ${STATUTS.map((st) => option(st, t(`statut.${st}`))).join("")}
          </select>
        </label>
      </div>
      <details class="effet-details">
        <summary>${t("effet.details")}</summary>
        <div class="perso-label">
          ${t("effet.blessure")}
          <div class="effet-blessures"></div>
        </div>
        <div class="partie-row">
          <label class="perso-label">
            ${t("effet.gagne")}
            <input type="text" class="perso-nom-input effet-gagne" placeholder="${escapeHtml(t("effet.gagne.exemple"))}" />
          </label>
          <label class="perso-label">
            ${t("effet.perdu")}
            <input type="text" class="perso-nom-input effet-perdu" placeholder="${escapeHtml(t("effet.gagne.exemple"))}" />
          </label>
        </div>
      </details>
    </fieldset>`
    )
    .join("");
  for (const card of cards) {
    const fs = combatEffets.querySelector(`.combat-effet[data-id="${CSS.escape(card.id)}"]`);
    const estHeros = currentModel.heros.includes(card);
    blessuresEditor(fs.querySelector(".effet-blessures"), combatBlessures.get(card.id), estHeros, {
      // Choisir « mort » règle aussi l'état après le combat.
      onAdd: (id) => {
        if (id === MORT) fs.querySelector(".effet-statut").value = "Mort";
        return true;
      },
    });
  }
  combatEffets.hidden = cards.length === 0;
  combatDialog.showModal();
}

document.getElementById("combat-new").addEventListener("click", () => {
  if (currentModel) openCombatDialog();
});
document.getElementById("combat-cancel").addEventListener("click", () => combatDialog.close());

combatForm.addEventListener("submit", () => {
  if (!currentModel) return;
  const val = (id) => document.getElementById(id).value;
  const effets = [...combatEffets.querySelectorAll(".combat-effet")].map((fs) => {
    const statut = fs.querySelector(".effet-statut").value;
    return {
      id: fs.dataset.id,
      nom: fs.dataset.nom,
      xp: fs.querySelector(".effet-xp").value,
      statut: statut === INCHANGE ? null : statut,
      blessures: combatBlessures.get(fs.dataset.id) || [],
      gagne: splitItems(fs.querySelector(".effet-gagne").value),
      perdu: splitItems(fs.querySelector(".effet-perdu").value),
    };
  });
  const cards = [...currentModel.heros, ...currentModel.hommesDeMain];
  partie.combats ||= [];
  appliquerCombat(
    {
      id: `combat-${Date.now().toString(36)}`,
      date: val("combat-date"),
      adversaire: val("combat-adversaire"),
      scenario: val("combat-scenario"),
      resultat: val("combat-resultat"),
      gainOr: val("combat-gain-or"),
      gainPierres: val("combat-gain-pierres"),
      notes: val("combat-notes"),
      effets,
    },
    {
      partie,
      creation: currentCreation,
      xpActuel: Object.fromEntries(cards.map((c) => [c.id, c.xp])),
      magotOr: currentModel.bande.magotOr,
      magotPierres: currentModel.bande.magotPierres,
    }
  );
  if (currentCreation) {
    applyCreationChange();
  } else {
    refreshTotals(currentModel);
    renderPersoCards(currentModel);
    scheduleSave();
  }
  renderPartieInputs();
  renderCombats();
});

function formatCombatDate(iso) {
  const d = new Date(`${iso}T12:00:00`);
  return Number.isNaN(d.getTime()) ? iso : d.toLocaleDateString(getLocale(), { dateStyle: "long" });
}

function effetLigne(e) {
  const parts = [];
  if (e.xp) parts.push(t("combats.xpCourt", { n: e.xp }));
  if (e.statut !== null) parts.push(t(`statut.${e.statut}`));
  if (e.blessure) parts.push(e.blessure);
  // « Mort » est déjà dit par l'état.
  parts.push(...e.blessures.filter((id) => !(id === MORT && e.statut === "Mort")).map(nomBlessure));
  parts.push(...e.gagne.map((o) => `+${o}`), ...e.perdu.map((o) => `−${o}`));
  return `<li><strong>${escapeHtml(e.nom)}</strong> : ${escapeHtml(parts.join(", "))}</li>`;
}

function renderCombats() {
  const combats = partie.combats || [];
  document.getElementById("combats-vide").hidden = combats.length > 0;
  combatsList.innerHTML = "";
  for (const c of combats) {
    const gains = [];
    if (c.gainOr) gains.push(t("combats.gainOrCourt", { n: c.gainOr }));
    if (c.gainPierres) gains.push(t("combats.gainPierresCourt", { n: c.gainPierres }));
    const div = document.createElement("div");
    div.className = `unit-card combat-card${c.resultat ? ` combat-${c.resultat}` : ""}`;
    div.innerHTML = `
      <div class="combat-head">
        <strong>${escapeHtml(formatCombatDate(c.date))}</strong>
        ${c.adversaire ? `<span>${escapeHtml(t("combats.contre", { nom: c.adversaire }))}</span>` : ""}
        ${c.resultat ? `<span class="combat-resultat">${escapeHtml(t(`resultat.${c.resultat}`))}</span>` : ""}
      </div>
      ${c.scenario ? `<p class="combat-ligne">${escapeHtml(t("combats.scenarioLigne", { nom: c.scenario }))}</p>` : ""}
      ${gains.length ? `<p class="combat-ligne">${escapeHtml(t("combats.gains", { liste: gains.join(", ") }))}</p>` : ""}
      ${
        c.effets.length
          ? `<ul class="combat-effets-liste">${c.effets.map(effetLigne).join("")}</ul>`
          : `<p class="combat-ligne"><em>${escapeHtml(t("combats.aucunEffet"))}</em></p>`
      }
      ${c.notes ? `<p class="combat-ligne combat-notes">${escapeHtml(c.notes)}</p>` : ""}
      <button type="button" class="btn-link combat-suppr">${escapeHtml(t("combats.supprimer"))}</button>
    `;
    div.querySelector(".combat-suppr").addEventListener("click", () => {
      if (!confirm(t("combats.confirmSupprimer"))) return;
      partie.combats = partie.combats.filter((x) => x !== c);
      renderCombats();
      renderPersoCards(currentModel);
      scheduleSave();
    });
    combatsList.appendChild(div);
  }
}

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
const BANDE_PREFIX = "bande:";

const option = (value, label) => `<option value="${escapeHtml(value)}">${escapeHtml(label)}</option>`;
function renderFactionOptions() {
  const keep = newFaction.value;
  newFaction.innerHTML =
    `<optgroup label="${escapeHtml(t("nouvelle.groupeDonnees"))}">${BANDES.map((b) => option(BANDE_PREFIX + b.id, locBande(b))).join("")}</optgroup>` +
    `<optgroup label="${escapeHtml(t("nouvelle.groupeManuel"))}">${FACTIONS.map((f) => option(f, f)).join("")}${option(FACTION_AUTRE, t("nouvelle.autre"))}</optgroup>`;
  if (keep) newFaction.value = keep;
}
renderFactionOptions();
newFaction.addEventListener("change", () => {
  newFactionAutreWrap.hidden = newFaction.value !== FACTION_AUTRE;
  // Trésor de départ propre à la bande (ex. 600 co pour Marienburg).
  const bande = getBande(newFaction.value.slice(BANDE_PREFIX.length));
  newTresor.value = bande ? bande.tresor : TRESOR_DEPART;
});

/** Remplit la liste des emplacements : le premier vide est proposé par défaut. */
async function prepareNewForm() {
  newStatus.textContent = "";
  let slots = [];
  try {
    slots = await listSlots();
  } catch (err) {
    newStatus.textContent = t("slot.stockageIndispo", { err: err.message });
  }
  const keep = newSlot.value;
  newSlot.innerHTML = slots
    .map((rec, i) => `<option value="${i + 1}">${i + 1} — ${rec ? escapeHtml(t("nouvelle.slotRemplacer", { nom: rec.nom })) : t("nouvelle.slotVide")}</option>`)
    .join("");
  const firstEmpty = slots.findIndex((r) => !r);
  newSlot.value = keep && slots[Number(keep) - 1] === null ? keep : String(firstEmpty >= 0 ? firstEmpty + 1 : 1);
  newNom.focus();
}

newForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const bandeId = newFaction.value.startsWith(BANDE_PREFIX) ? newFaction.value.slice(BANDE_PREFIX.length) : "";
  const faction = newFaction.value === FACTION_AUTRE ? newFactionAutre.value : bandeId ? "" : newFaction.value;
  const n = Number(newSlot.value);
  try {
    const existing = await getSlot(n);
    if (
      existing &&
      !confirm(t("nouvelle.confirmRemplacer", { n, nom: existing.nom }))
    ) {
      return;
    }
    await flushSave();
    const creation = newCreation(newNom.value, faction, bandeId);
    const tresor = Number(newTresor.value);
    creation.tresorDepart = Number.isFinite(tresor) && newTresor.value !== "" ? Math.max(0, tresor) : TRESOR_DEPART;
    // Brouillon gardé dans l'emplacement jusqu'au bouton « Créer la bande ».
    creation.brouillon = true;
    activeSlot = n;
    loadRoster(buildRoster(creation), { creation });
    persoLoadedMsg.hidden = true;
    await saveNow();
    newForm.reset();
    newFactionAutreWrap.hidden = true;
    newTresor.value = getBande(newFaction.value.slice(BANDE_PREFIX.length))?.tresor ?? TRESOR_DEPART;
    showView("bande");
    showTab("composition");
  } catch (err) {
    console.error(err);
    newStatus.textContent = t("nouvelle.erreur", { err: err.message });
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
 *  - unique : refuse un mot déjà dans la liste (même règle en français ou en anglais).
 *  - avantModif() : appelé avant chaque ajout ou retrait ; false l'annule.
 */
/**
 * `saisie: false` retire le champ texte : on ajoute alors seulement depuis
 * une liste de pastilles à côté (fiche d'un guerrier avec ses données).
 */
function chipEditor(container, list, { datalist, placeholder, onChange, label = (item) => item, unique = false, avantModif, info, saisie = true }) {
  const render = () => {
    container.innerHTML = "";
    const chips = document.createElement("div");
    chips.className = "chips";
    list.forEach((item, i) => {
      const chip = document.createElement("span");
      chip.className = "chip";
      chip.textContent = label(item);
      infoBulle(chip, info?.(item));
      const del = document.createElement("button");
      del.type = "button";
      del.className = "chip-del";
      del.setAttribute("aria-label", t("chip.retirer", { item: label(item) }));
      del.textContent = "×";
      del.addEventListener("click", () => {
        if (avantModif && !avantModif()) return;
        list.splice(i, 1);
        render();
        onChange?.();
      });
      chip.appendChild(del);
      chips.appendChild(chip);
    });
    container.appendChild(chips);
    if (!saisie) return;

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
    btn.textContent = t("chip.ajouter");
    const add = () => {
      const v = input.value.trim();
      if (!v) return;
      if (unique && contientRegle(list, v)) {
        input.setCustomValidity(t("chip.dejaPresent", { item: v }));
        input.reportValidity();
        return;
      }
      if (avantModif && !avantModif()) return;
      list.push(v);
      render();
      onChange?.();
      container.querySelector(".chip-add input")?.focus();
    };
    input.addEventListener("input", () => input.setCustomValidity(""));
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

/**
 * Liste de choix commune (équipement, compétences, règles) : un titre par
 * groupe et une pastille par élément, grisée quand il est déjà pris ou
 * interdit. groupes = [{ titre, items: [{ texte, title, disabled, onPick }] }]
 */
function renderChoix(container, groupes) {
  container.innerHTML = "";
  for (const g of groupes) {
    if (!g.items.length) continue;
    const row = document.createElement("div");
    row.className = "arsenal-cat";
    if (g.titre) row.innerHTML = `<p class="arsenal-titre">${escapeHtml(g.titre)}</p>`;
    for (const it of g.items) {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "chip chip-btn";
      b.textContent = it.texte;
      b.disabled = !!it.disabled;
      infoBulle(b, it.title);
      b.addEventListener("click", it.onPick);
      row.appendChild(b);
    }
    container.appendChild(row);
  }
}

/**
 * Ligne de profil ; `ecarts` ({ CC: 1, M: -1 }) colore les caractéristiques
 * améliorées en vert et diminuées en rouge par rapport au profil de base.
 */
function statLine(stats, ecarts = {}) {
  return STAT_KEYS.map((k) => {
    const d = ecarts[k] || 0;
    const cls = d > 0 ? " stat-plus" : d < 0 ? " stat-moins" : "";
    const title = d ? ` title="${escapeHtml(t("profil.ecart", { n: `${d > 0 ? "+" : "−"}${Math.abs(d)}` }))}"` : "";
    // Chevron vers le haut (amélioration) ou vers le bas (blessure) à côté de la valeur.
    const chevron = d ? `<i class="stat-chevron" aria-hidden="true">${d > 0 ? "▲" : "▼"}</i>` : "";
    return `<span class="stat-cell${cls}"${title}><b>${t(`profil.${k}`)}</b><span>${escapeHtml(stats[k])}${chevron}</span></span>`;
  }).join("");
}

/** XP actuelle d'une figurine : celle du suivi de partie si elle a été saisie, sinon celle de la fiche. */
function xpCourante(fig) {
  return partie.figurines[fig.id]?.xp ?? fig.xp;
}

/** Figurine de la bande créée correspondant à une carte du suivi de partie (même identifiant). */
function figurineDeCarte(card) {
  return currentCreation?.figurines.find((f) => f.id === card.id) || null;
}

/** Règle qui empêche la carte de gagner de l'expérience (nom affiché), ou null. */
function regleSansXpCarte(card) {
  const fig = figurineDeCarte(card);
  if (fig) {
    const r = regleBloquantXp(fig);
    return r ? locNomRegle(r) : null;
  }
  return (card.reglesSpeciales || []).find((r) => texteSansXp(r.description))?.name || null;
}

/** Piste d'XP grisée et non cliquable, avec la règle qui l'explique. */
function pisteBloqueeHtml(xp, categorie, regle) {
  return `<div class="xp-bloquee">${pisteXpHtml(xp, categorie, { titre: t("xp.bloquee", { regle }) })}
    <p class="hint-inline">${escapeHtml(t("xp.bloquee", { regle }))}</p></div>`;
}

/** Texte d'une progression de l'historique : « 7 → +1 CC », « 11 → Esquive ». */
function texteEntreeProgression(p) {
  const res = p.resultat === "competence" ? locNomRegle(p.competence) : texteProgression(p.resultat);
  return `${p.des[0] + p.des[1]} (${res})`;
}

/**
 * Carte d'un guerrier de la bande créée. `lecture` : sans boutons (menu Composition).
 * Dans le brouillon, seuls Modifier, Dupliquer et Retirer sont proposés.
 */
function unitCard(fig, { lecture = false } = {}) {
  const div = document.createElement("div");
  div.className = "unit-card";
  const custom = customisations[fig.id]?.nom;
  const groupe = fig.categorie === "hdm";
  const nombre = tailleGroupe(fig);
  const titre =
    escapeHtml(loc(fig.type) || t(groupe ? "categorie.hdm" : "categorie.heros")) + (nombre > 1 ? ` ×${nombre}` : "");
  const sansXp = regleBloquantXp(fig);
  // Profil avec les blessures du suivi de partie ; améliorations en vert, malus en rouge.
  const blessures = partie.figurines[fig.id]?.blessures;
  const stats = appliquerMalus(fig.stats, blessures);
  const ecarts = ecartsProfil(fig, getGuerrier(fig.modele), malusTotal(blessures));
  // Équipement, compétences et règles rangés en colonnes de pastilles.
  // Compétences et règles : explication au survol (ou au toucher sur mobile).
  const bloc = (titre, items, avecInfo = false) => `
    <div class="unit-bloc">
      <p class="unit-bloc-titre">${escapeHtml(titre)}</p>
      ${
        items.length
          ? `<span class="chips">${items
              .map((x) => (avecInfo ? chipInfoHtml(locNomRegle(x), descriptionRegle(x)) : chipInfoHtml(loc(x))))
              .join("")}</span>`
          : `<span class="unit-bloc-vide">—</span>`
      }
    </div>`;
  const blocs = [
    bloc(t("fig.equipement"), fig.equipement),
    // Les hommes de main n'apprennent pas de compétences.
    groupe ? "" : bloc(t("fig.competences"), fig.competences, true),
    bloc(t("fig.regles"), fig.regles, true),
  ].join("");
  const details = [
    fig.progressions?.length
      ? escapeHtml(t("unite.progressions", { liste: fig.progressions.map(texteEntreeProgression).join(", ") }))
      : "",
    // Accès aux compétences : utile pour faire progresser, pas dans la consultation.
    !lecture && getGuerrier(fig.modele)?.competences.length
      ? `<span class="muted">${escapeHtml(t("unite.acces", { liste: getGuerrier(fig.modele).competences.map(loc).join(", ") }))}</span>`
      : "",
  ].filter(Boolean);
  div.innerHTML = `
    <div class="unit-head">
      <span class="unit-name">${custom ? `${escapeHtml(custom)} <em>(${titre})</em>` : titre}</span>
      <span class="unit-cost">${
        nombre > 1 ? t("unite.coutGroupe", { total: coutEntree(fig), unite: fig.coutGc }) : `${coutEntree(fig)} ${t("monnaie")}`
      } · ${fig.xp} xp</span>
    </div>
    <div class="stat-line">${statLine(stats, ecarts)}</div>
    ${
      sansXp
        ? pisteBloqueeHtml(xpCourante(fig), fig.categorie, locNomRegle(sansXp))
        : pisteXpHtml(xpCourante(fig), fig.categorie, { titre: t("perso.xpPiste") })
    }
    <div class="unit-blocs${groupe ? " unit-blocs-hdm" : ""}">${blocs}</div>
    ${details.map((d) => `<p class="unit-detail">${d}</p>`).join("")}
    ${lecture ? "" : `<div class="slot-actions"></div>`}
  `;
  if (lecture) return div;
  const brouillon = currentCreation.brouillon;
  const actions = div.querySelector(".slot-actions");
  const addBtn = (label, onClick) => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "btn-slot";
    b.textContent = label;
    b.addEventListener("click", onClick);
    actions.appendChild(b);
  };
  addBtn(t("unite.modifier"), () => openFigDialog(fig));
  const dues = sansXp || brouillon ? 0 : progressionsDues(fig, xpCourante(fig));
  if (dues) addBtn(t("unite.progression", { n: dues }), () => openProgDialog(fig));
  if (groupe && nombre < MAX_GROUPE && !brouillon) {
    // Recrue en cours de campagne : même équipement et même XP que le groupe,
    // payée 2 co de plus par point d'expérience.
    const xp = xpCourante(fig);
    addBtn(t("unite.recrue", { prix: coutRecrue(fig, xp) }), () => {
      const prix = coutRecrue(fig, xp);
      if (!confirm(t("unite.confirmRecrue", { prix, base: fig.coutGc, xp, nom: loc(fig.type) || t("categorie.hdm") }))) return;
      recruterDansGroupe(fig, xp);
      // Un magot saisi dans le suivi de partie paie la recrue ; sinon le trésor restant baisse de lui-même.
      if (partie.magotOr !== null && partie.magotOr !== undefined) {
        partie.magotOr -= prix;
        renderPartieInputs();
      }
      applyCreationChange();
    });
  }
  addBtn(t("unite.dupliquer"), () => {
    const i = currentCreation.figurines.indexOf(fig);
    currentCreation.figurines.splice(i + 1, 0, duplicateFigurine(fig));
    applyCreationChange();
  });
  addBtn(t("unite.retirer"), () => {
    if (!confirm(t("unite.confirmRetirer", { nom: custom || loc(fig.type) || t("unite.cetteFigurine") }))) return;
    currentCreation.figurines = currentCreation.figurines.filter((f) => f !== fig);
    delete customisations[fig.id];
    delete partie.figurines[fig.id];
    applyCreationChange();
  });
  return div;
}

// ---------------------------------------------------------------------
// Progression des hommes de main (2D6 à chaque seuil d'expérience)
// ---------------------------------------------------------------------
const progDialog = document.getElementById("prog-dialog");
const progD1 = document.getElementById("prog-d1");
const progD2 = document.getElementById("prog-d2");
const progChoix = document.getElementById("prog-choix");
let progFig = null;

/** Texte d'un résultat enregistré : une caractéristique (« CC ») ou « talent ». */
function texteProgression(resultat) {
  return resultat === "talent" ? t("prog.talent") : `+1 ${t(`profil.${resultat}`)}`;
}

const progCompetence = document.getElementById("prog-competence");
const progHeros = () => progFig?.categorie === "heros";

function renderProgResultat(message = "") {
  const total = Number(progD1.value) + Number(progD2.value);
  const valide = [progD1.value, progD2.value].every((v) => /^[1-6]$/.test(v));
  const res = valide ? (progHeros() ? resultatProgressionHeros(total) : resultatProgression(total)) : null;
  const deuxStats = res?.stats.length === 2;
  document.getElementById("prog-choix-wrap").hidden = !deuxStats;
  if (deuxStats && progChoix.dataset.code !== res.code) {
    progChoix.innerHTML = res.stats.map((k) => option(k, `+1 ${t(`profil.${k}`)}`)).join("");
    progChoix.dataset.code = res.code;
  }
  document.getElementById("prog-competence-wrap").hidden = res?.code !== "competence";
  const cle = res ? `prog.res${progHeros() ? "Heros" : ""}.${res.code}` : "";
  document.getElementById("prog-resultat").textContent = res ? `${total} : ${t(cle)}${message ? ` ${message}` : ""}` : "";
}

/** Compétences qu'un héros peut apprendre, groupées par liste (déjà acquises et réservées exclues). */
function renderProgCompetences(fig) {
  const listes = competencesAccessibles(fig, getGuerrier(fig.modele));
  progCompetence.innerHTML =
    option("", t("prog.choisirCompetence")) +
    listes
      .map((l) => {
        const opts = l.competences.filter((c) => c.permise && !c.acquise);
        return opts.length
          ? `<optgroup label="${escapeHtml(loc(l.liste))}">${opts.map((c) => option(c.nom, locCompetence(c).nom)).join("")}</optgroup>`
          : "";
      })
      .join("");
}

function lancerProg() {
  [progD1.value, progD2.value] = lancer2D6();
  renderProgResultat();
}

function openProgDialog(fig) {
  progFig = fig;
  const heros = fig.categorie === "heros";
  const nom = customisations[fig.id]?.nom || loc(fig.type) || t(heros ? "categorie.heros" : "categorie.hdm");
  document.getElementById("prog-title").textContent = t("prog.titre", { nom });
  document.getElementById("prog-aide").textContent = t(heros ? "prog.aideHeros" : "prog.aide");
  progChoix.dataset.code = "";
  if (heros) renderProgCompetences(fig);
  lancerProg();
  progDialog.showModal();
}

progD1.addEventListener("input", () => renderProgResultat());
progCompetence.addEventListener("change", () => progCompetence.setCustomValidity(""));
progD2.addEventListener("input", () => renderProgResultat());
document.getElementById("prog-lancer").addEventListener("click", lancerProg);
document.getElementById("prog-cancel").addEventListener("click", () => progDialog.close());
document.getElementById("prog-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const fig = progFig;
  const des = [Number(progD1.value), Number(progD2.value)];
  const guerrier = getGuerrier(fig.modele);
  const r = progHeros()
    ? appliquerProgressionHeros(fig, des, { xp: xpCourante(fig), choix: progChoix.value, competence: progCompetence.value, guerrier })
    : appliquerProgression(fig, des, { choix: progChoix.value, guerrier });
  if (r.manque === "competence") {
    progCompetence.setCustomValidity(t("prog.choisirCompetence"));
    progCompetence.reportValidity();
    return;
  }
  if (r.relancer) {
    // Caractéristique déjà au maximum de la race : on relance sans rien enregistrer.
    renderProgResultat(t(progHeros() ? "prog.auMaximumHeros" : "prog.auMaximum", { stat: t(`profil.${r.stat}`) }));
    return;
  }
  if (r.code === "talent") {
    const heros = promouvoir(fig, newFigurine, xpCourante(fig));
    if (heros) {
      const figs = currentCreation.figurines;
      figs.splice(figs.indexOf(fig) + 1, 0, heros);
    }
  }
  progDialog.close();
  progFig = null;
  applyCreationChange();
});

function renderCreation() {
  const c = currentCreation;
  if (document.activeElement !== creaNom) creaNom.value = c.nom;
  if (document.activeElement !== creaFaction) creaFaction.value = loc(c.faction);
  if (document.activeElement !== creaTresor) creaTresor.value = c.tresorDepart;

  const tot = creationTotals(c);
  document.getElementById("crea-budget").textContent =
    t("compo.budget", { tresor: tot.tresor, cout: tot.cout, reste: tot.reste, effectif: tot.effectif });

  const warnings = creationWarnings(c);
  document.getElementById("creation-warnings").hidden = !warnings.length;
  document.getElementById("creation-warnings-list").innerHTML = warnings.map((w) => `<li>${escapeHtml(w)}</li>`).join("");

  for (const cat of ["heros", "hdm"]) {
    const figs = c.figurines.filter((f) => f.categorie === cat);
    document.getElementById(`crea-count-${cat}`).textContent = figs.length;
    const list = document.getElementById(`crea-list-${cat}`);
    list.innerHTML = figs.length ? "" : `<p class="hint-text small left">${t("compo.personne")}</p>`;
    figs.forEach((f) => list.appendChild(unitCard(f)));
    // Composition : les mêmes cartes, sans modification possible.
    document.getElementById(`lecture-count-${cat}`).textContent = figs.length;
    const lecture = document.getElementById(`lecture-list-${cat}`);
    lecture.innerHTML = figs.length ? "" : `<p class="hint-text small left">${t("compo.personne")}</p>`;
    figs.forEach((f) => lecture.appendChild(unitCard(f, { lecture: true })));
  }
  document.getElementById("lecture-regles-bloc").hidden = !c.reglesBande.length;
  document.getElementById("lecture-regles").innerHTML = `<span class="chips">${c.reglesBande
    .map((r) => chipInfoHtml(locNomRegle(r), descriptionRegle(r)))
    .join("")}</span>`;

  // Règles de bande : on choisit dans la liste de la faction ; saisie libre seulement sans liste.
  const reglesFaction = getBande(c.bandeId)?.regles || [];
  chipEditor(document.getElementById("crea-regles-bande"), c.reglesBande, {
    saisie: !reglesFaction.length,
    info: descriptionRegle,
    datalist: "rules-list",
    placeholder: t("compo.regleBandePlaceholder"),
    onChange: applyCreationChange,
    label: locNomRegle,
    unique: true,
  });
  renderReglesChoix(
    document.getElementById("crea-regles-choix"),
    document.getElementById("crea-regles-liste"),
    c.reglesBande,
    reglesFaction,
    applyCreationChange
  );
}

creaNom.addEventListener("change", () => {
  currentCreation.nom = creaNom.value.trim() || t("nouvelle.nomDefaut");
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
// Fin du recrutement : la bande est créée et son menu apparaît.
document.getElementById("crea-valider").addEventListener("click", async () => {
  if (!currentCreation?.brouillon) return;
  if (!currentCreation.figurines.length) {
    alert(t("brouillon.vide"));
    return;
  }
  const warnings = creationWarnings(currentCreation);
  if (warnings.length && !confirm(t("brouillon.confirmAvertissements", { liste: warnings.map((w) => `• ${w}`).join("\n") }))) {
    return;
  }
  currentCreation.brouillon = false;
  applyCreationChange();
  await saveNow();
  showTab("composition");
  bandeView.scrollIntoView({ behavior: "smooth", block: "start" });
});

document.querySelectorAll(".add-btn").forEach((b) =>
  b.addEventListener("click", () => {
    if (getBande(currentCreation?.bandeId)) openRecruitDialog(b.dataset.add);
    else openFigDialog(null, b.dataset.add);
  })
);

// ---------------------------------------------------------------------
// Recrutement d'après les données de la bande
// ---------------------------------------------------------------------
const recruitDialog = document.getElementById("recruit-dialog");
let recruitCategorie = "heros";

function reglesText(regles) {
  return regles
    .map(locRegle)
    .map((r) => `<abbr${infoAttr(r.resume)}>${escapeHtml(r.nom)}</abbr>`)
    .join(", ");
}

function openRecruitDialog(categorie) {
  recruitCategorie = categorie;
  const bande = getBande(currentCreation.bandeId);
  const isHero = categorie === "heros";
  document.getElementById("recruit-title").textContent = t(isHero ? "fig.recruterHeros" : "fig.recruterHdm");
  const list = document.getElementById("recruit-list");
  list.innerHTML = "";
  for (const g of bande.guerriers.filter((x) => x.categorie === categorie)) {
    const n = currentCreation.figurines.filter((f) => f.modele === g.id).reduce((s, f) => s + tailleGroupe(f), 0);
    const complet = g.max !== null && n >= g.max;
    const div = document.createElement("div");
    div.className = `unit-card${complet ? " complet" : ""}`;
    div.innerHTML = `
      <div class="unit-head">
        <span class="unit-name">${escapeHtml(locGuerrier(g))}</span>
        <span class="unit-cost">${g.cout} ${t("monnaie")}${g.xp ? ` · ${g.xp} xp` : ""} · ${n}/${g.max ?? "∞"}</span>
      </div>
      <div class="stat-line">${statLine(g.profil)}</div>
      ${g.regles.length ? `<p class="unit-detail">${t("unite.regles", { liste: reglesText(g.regles) })}</p>` : ""}
      <div class="slot-actions"></div>`;
    const b = document.createElement("button");
    b.type = "button";
    b.className = "btn-slot";
    b.textContent = complet ? t("recrue.complet") : t("recrue.recruter");
    b.disabled = complet;
    b.addEventListener("click", () => {
      recruitDialog.close();
      openFigDialog(null, categorie, newFigurineFromModele(g.id));
    });
    div.querySelector(".slot-actions").appendChild(b);
    list.appendChild(div);
  }
  recruitDialog.showModal();
}
document.getElementById("recruit-cancel").addEventListener("click", () => recruitDialog.close());
document.getElementById("recruit-libre").addEventListener("click", () => {
  recruitDialog.close();
  openFigDialog(null, recruitCategorie);
});

// ---------------------------------------------------------------------
// Fiche d'édition d'une figurine (fenêtre)
// ---------------------------------------------------------------------
const figDialog = document.getElementById("fig-dialog");
const figForm = document.getElementById("fig-form");
const figType = document.getElementById("fig-type");
const figCout = document.getElementById("fig-cout");
const figXp = document.getElementById("fig-xp");
const figNombre = document.getElementById("fig-nombre");
const figStats = document.getElementById("fig-stats");
let figDraft = null; // copie en cours d'édition
let figOriginal = null; // figurine remplacée à la validation (null = recrutement)

// Le coût saisi à la main n'est plus recalculé (objet acheté à un autre prix…).
figCout.addEventListener("input", () => (figCout.dataset.manuel = "1"));

function renderFigStatLabels() {
  figStats.innerHTML = STAT_KEYS.map(
    (k) =>
      `<label class="stat-edit"><span>${t(`profil.${k}`)}</span><input type="text" class="perso-nom-input" data-stat="${k}" maxlength="4" /><small class="stat-max"></small></label>`
  ).join("");
}

/** Une caractéristique au-dessus du maximum de la race bloque la validation. */
function checkStatMax(inp) {
  const max = inp.dataset.max === "" || inp.dataset.max === undefined ? NaN : Number(inp.dataset.max);
  const v = Number(inp.value.trim());
  inp.setCustomValidity(inp.value.trim() !== "" && Number.isFinite(v) && v > max ? inp.title : "");
}
figStats.addEventListener("input", (e) => {
  if (e.target.matches("input[data-stat]")) checkStatMax(e.target);
});

function applyStatMaximums(guerrier) {
  const maxima = maximumsGuerrier(guerrier);
  figStats.querySelectorAll("input").forEach((inp) => {
    const max = maxima?.max[inp.dataset.stat];
    const known = max !== undefined;
    inp.dataset.max = known ? max : "";
    inp.title = known
      ? t(maxima.sansProgression ? "fig.maximumSansProgression" : "fig.maximum", { race: maxima.race, max })
      : "";
    inp.nextElementSibling.textContent = known ? `≤ ${max}` : "";
    checkStatMax(inp);
  });
}
renderFigStatLabels();

/** Coût recalculé d'après la liste d'équipement du guerrier, si la figurine en vient. */
function syncCout() {
  if (figCout.dataset.manuel === "1") return;
  const calc = coutCalcule(figDraft);
  if (calc !== null) figCout.value = calc;
}

function renderArsenal(guerrier) {
  const box = document.getElementById("fig-arsenal");
  box.hidden = !guerrier?.equipement.length;
  if (box.hidden) return;
  // Un objet peut être pris plusieurs fois (deux dagues…) dans la limite des règles :
  // au-delà, il est grisé et sa bulle dit pourquoi.
  renderChoix(
    document.getElementById("fig-arsenal-liste"),
    guerrier.equipement.map((cat) => ({
      titre: loc(cat.categorie),
      items: cat.objets.map((o) => {
        const refus = equipementRefuse(guerrier, figDraft.equipement, o.nom, figDraft);
        return {
          texte: `${loc(o.nom)} · ${o.cout ?? 0} ${t("monnaie")}`,
          disabled: Boolean(refus),
          title: refus ? t(`fig.limite.${refus}`) : "",
          onPick: () => {
            figDraft.equipement.push(o.nom);
            renderFigEquipement();
            syncCout();
          },
        };
      }),
    }))
  );
}

function renderFigEquipement() {
  // Une seule façon d'ajouter : la liste d'équipement du guerrier quand les données en ont une,
  // sinon le champ texte (bande saisie à la main).
  const guerrier = getGuerrier(figDraft.modele);
  const liste = Boolean(guerrier?.equipement.length);
  document.getElementById("fig-arsenal").open = liste;
  chipEditor(document.getElementById("fig-equipement"), figDraft.equipement, {
    saisie: !liste,
    datalist: "equipment-list",
    placeholder: t("fig.equipement.exemple"),
    onChange: () => {
      syncCout();
      renderArsenal(guerrier);
    },
    label: loc,
  });
  // Les limites dépendent de ce qui est déjà porté : la liste est regrisée à chaque ajout.
  renderArsenal(guerrier);
}

// Les compétences d'un héros viennent de ses progressions : les modifier à la
// main demande une confirmation (une fois par ouverture de la fiche).
let modifManuelleOk = false;
function confirmerModifManuelle() {
  if (!modifManuelleOk) modifManuelleOk = confirm(t("fig.confirmModifCompetences"));
  return modifManuelleOk;
}

function renderFigCompetences() {
  chipEditor(document.getElementById("fig-competences"), figDraft.competences, {
    // Les compétences se choisissent dans les listes accessibles (listes communes à défaut de données).
    saisie: false,
    info: descriptionRegle,
    datalist: "rules-list",
    placeholder: t("fig.competences.exemple"),
    onChange: () => {
      renderCompetencesChoix();
      renderHistorique();
    },
    label: locNomRegle,
    unique: true,
    avantModif: confirmerModifManuelle,
  });
  renderCompetencesChoix();
  renderHistorique();
  renderFigDepart();
  renderArsenal(getGuerrier(figDraft.modele));
}

/**
 * XP de départ de la figurine en cours d'édition : celle du champ XP tant
 * que la bande est en création (recrutement ou brouillon), sinon celle
 * enregistrée au recrutement.
 */
function xpDepartFiche() {
  if (!figOriginal || currentCreation?.brouillon) return Math.max(0, Number(figXp.value) || 0);
  return figDraft.xpDepart;
}

/** Nombre de compétences de départ que ce héros doit avoir (0 si l'expérience lui est interdite). */
function nbCompetencesDepart() {
  return regleBloquantXp(figDraft) ? 0 : competencesDepart(figDraft, xpDepartFiche());
}

/**
 * Compétences de départ d'un héros recruté avec de l'expérience : une case
 * par seuil déjà franchi, à remplir ou non selon les règles du groupe
 * (les règles officielles n'en donnent pas).
 */
function renderFigDepart() {
  const n = figDraft.categorie === "heros" ? nbCompetencesDepart() : 0;
  const bloc = document.getElementById("fig-depart-bloc");
  bloc.hidden = n === 0;
  if (!n) return;
  document.getElementById("fig-depart-titre").textContent = t("fig.depart", { n, xp: xpDepartFiche() });
  const box = document.getElementById("fig-depart-slots");
  box.innerHTML = "";
  const libres = competencesLibres(figDraft);
  for (let i = 0; i < n; i++) {
    const slot = document.createElement("div");
    slot.className = "depart-slot";
    const num = `<span class="depart-num">${i + 1}</span>`;
    if (libres[i]) {
      slot.innerHTML = `${num}${chipInfoHtml(locNomRegle(libres[i]), descriptionRegle(libres[i]))}`;
      const del = document.createElement("button");
      del.type = "button";
      del.className = "chip-del";
      del.textContent = "×";
      del.setAttribute("aria-label", t("chip.retirer", { item: locNomRegle(libres[i]) }));
      del.addEventListener("click", () => {
        figDraft.competences.splice(figDraft.competences.indexOf(libres[i]), 1);
        renderFigCompetences();
      });
      slot.querySelector(".chip").appendChild(del);
    } else {
      // Case vide : la compétence se choisit dans les pastilles « Compétences accessibles ».
      slot.classList.add("vide");
      slot.innerHTML = `${num}<span class="depart-vide">${escapeHtml(t("fig.departChoisir"))}</span>`;
    }
    box.appendChild(slot);
  }
}

/**
 * Historique des progressions de la figurine, dans l'ordre : seuil
 * d'expérience, jet et résultat. Retirer une ligne défait son effet, après
 * une alerte.
 */
function renderHistorique() {
  const prog = figDraft.progressions || [];
  // Compétences prises hors progression (bande importée, saisie à la main).
  const hors = figDraft.competences.filter((c) => !prog.some((p) => p.competence === c));
  const bloc = document.getElementById("fig-historique-bloc");
  bloc.hidden = !prog.length && !hors.length;
  const ol = document.getElementById("fig-historique");
  ol.innerHTML = "";
  prog.forEach((p, i) => {
    const li = document.createElement("li");
    const xp = p.seuil ? `<span class="historique-xp">${p.seuil} xp</span>` : "";
    const res = p.resultat === "competence" ? `<b>${escapeHtml(locNomRegle(p.competence))}</b>` : escapeHtml(texteProgression(p.resultat));
    li.innerHTML = `${xp}<span class="historique-jet">${p.des[0]} + ${p.des[1]}</span><span>${res}</span>`;
    if (p.resultat !== "talent") {
      const del = document.createElement("button");
      del.type = "button";
      del.className = "chip-del";
      del.textContent = "×";
      del.setAttribute("aria-label", t("chip.retirer", { item: li.textContent }));
      del.addEventListener("click", () => {
        if (!confirm(t("fig.confirmRetirerProgression"))) return;
        annulerProgression(figDraft, i);
        figStats.querySelectorAll("input").forEach((inp) => (inp.value = figDraft.stats[inp.dataset.stat]));
        renderFigCompetences();
        renderFigStatsEcarts();
      });
      li.appendChild(del);
    }
    ol.appendChild(li);
  });
  for (const c of hors) {
    const li = document.createElement("li");
    li.className = "historique-hors";
    li.innerHTML = `<span class="historique-xp">—</span><span class="historique-jet"></span><span><b>${escapeHtml(
      locNomRegle(c)
    )}</b> <em>${escapeHtml(t("fig.horsProgression"))}</em></span>`;
    ol.appendChild(li);
  }
}

/**
 * Compétences que la figurine peut apprendre, triées par liste : celles de
 * ses listes d'accès seulement (aucune pour un homme de main), en grisant
 * celles déjà acquises ou réservées (chef, sorcier, matriarche…).
 */
function renderCompetencesChoix() {
  const box = document.getElementById("fig-comp-choix");
  const listes = competencesAccessibles(figDraft, getGuerrier(figDraft.modele));
  box.hidden = !listes.length;
  if (box.hidden) return;
  renderChoix(
    document.getElementById("fig-comp-liste"),
    listes.map((l) => ({
      titre: loc(l.liste),
      items: l.competences.map((c) => {
        const affiche = locCompetence(c);
        const etat = c.acquise ? t("fig.competenceAcquise") : !c.permise ? t("fig.competenceReservee") : "";
        return {
          texte: affiche.nom,
          disabled: c.acquise || !c.permise,
          title: [etat, affiche.resume].filter(Boolean).join(" · "),
          onPick: () => {
            if (!confirmerModifManuelle()) return;
            figDraft.competences.push(c.nom);
            renderFigCompetences();
          },
        };
      }),
    }))
  );
}

/**
 * Règles de la bande des données à choisir d'un clic, grisées quand la
 * liste les contient déjà. `list` est modifiée en place puis `rerender()`.
 */
function renderReglesChoix(details, liste, list, regles, rerender) {
  details.hidden = !regles.length;
  if (details.hidden) return;
  renderChoix(liste, [
    {
      items: regles.map((r) => {
        const affiche = locRegle(r);
        const deja = contientRegle(list, r.nom);
        return {
          texte: affiche.nom,
          disabled: deja,
          title: [deja ? t("fig.regleDejaPresente") : "", affiche.resume].filter(Boolean).join(" · "),
          onPick: () => {
            list.push(r.nom);
            rerender();
          },
        };
      }),
    },
  ]);
}

/** Règles des guerriers d'une bande des données (sans les règles de la bande elle-même). */
function reglesGuerriers(bande) {
  return bande ? reglesDeLaBande(bande).filter((r) => !bande.regles.includes(r)) : [];
}

// L'XP saisie au recrutement fixe le nombre de compétences de départ.
figXp.addEventListener("input", () => {
  if (figDraft?.categorie === "heros") renderFigDepart();
});

/** Une règle comme « Animaux » ou « Démon » interdit l'expérience : champ XP grisé. */
function renderFigXpBloque() {
  const regle = regleBloquantXp(figDraft);
  figXp.disabled = !!regle;
  const note = document.getElementById("fig-xp-bloque");
  note.hidden = !regle;
  note.textContent = regle ? t("xp.bloquee", { regle: locNomRegle(regle) }) : "";
}

/** Caractéristiques au-dessus (vert) ou au-dessous (rouge) du profil du guerrier. */
function renderFigStatsEcarts() {
  const lu = { stats: {} };
  figStats.querySelectorAll("input").forEach((inp) => (lu.stats[inp.dataset.stat] = inp.value.trim()));
  const ecarts = ecartsProfil({ ...figDraft, stats: lu.stats }, getGuerrier(figDraft.modele));
  figStats.querySelectorAll("input").forEach((inp) => {
    const d = ecarts[inp.dataset.stat] || 0;
    inp.classList.toggle("stat-plus", d > 0);
    inp.classList.toggle("stat-moins", d < 0);
  });
}
figStats.addEventListener("input", renderFigStatsEcarts);

function openFigDialog(fig, categorie = "heros", draft = null) {
  figOriginal = fig;
  figDraft = draft || (fig ? structuredClone(fig) : newFigurine(categorie));
  // Recrutement : on peut composer librement ; une fois le héros dans la bande, l'alerte s'applique.
  modifManuelleOk = !fig;
  const guerrier = getGuerrier(figDraft.modele);
  const isHero = figDraft.categorie === "heros";
  document.getElementById("fig-title").textContent = fig
    ? t(isHero ? "fig.modifierHeros" : "fig.modifierHdm")
    : t(isHero ? "fig.recruterHeros" : "fig.recruterHdm");
  // Le type est enregistré en français ; il s'affiche dans la langue de l'interface.
  figType.value = loc(figDraft.type);
  figCout.value = figDraft.coutGc;
  figCout.dataset.manuel = "";
  figXp.value = figDraft.xp;
  // Hommes de main : un groupe de figurines identiques, coût indiqué par figurine.
  document.getElementById("fig-nombre-wrap").hidden = isHero;
  figNombre.max = MAX_GROUPE;
  figNombre.value = tailleGroupe(figDraft);
  document.getElementById("fig-cout-label").textContent = t(isHero ? "fig.cout" : "fig.coutUnitaire");
  figStats.querySelectorAll("input").forEach((inp) => (inp.value = figDraft.stats[inp.dataset.stat]));
  renderFigStatsEcarts();
  renderFigXpBloque();
  renderFigEquipement();
  applyStatMaximums(guerrier);
  document.getElementById("fig-acces").textContent = !isHero
    ? t("fig.competencesHdm")
    : guerrier?.competences.length
      ? t("fig.acces", { liste: guerrier.competences.map(loc).join(", ") })
      : "";
  // Les hommes de main n'apprennent pas de compétences ; leurs règles sont
  // celles de leur profil dans les données, affichées sans être modifiables.
  document.getElementById("fig-competences-bloc").hidden = !isHero;
  // Pas de compétence encore : la saisie à la main est ouverte (recrutement, héros importé…).
  // Héros recruté avec de l'expérience : ses compétences se choisissent dans les cases de départ.
  document.getElementById("fig-comp-modifier").open = !fig;
  if (isHero) renderFigCompetences();
  const reglesFixes = !isHero && !!guerrier;
  const reglesBox = document.getElementById("fig-regles");
  const reglesTexte = document.getElementById("fig-regles-fixes");
  const reglesChoix = document.getElementById("fig-regles-choix");
  reglesBox.hidden = reglesFixes;
  reglesTexte.hidden = !reglesFixes;
  reglesChoix.hidden = true;
  if (reglesFixes) {
    // Mêmes pastilles que les listes modifiables, sans bouton de retrait.
    reglesTexte.innerHTML = guerrier.regles.length
      ? `<span class="chips">${guerrier.regles
          .map(locRegle)
          .map((r) => chipInfoHtml(r.nom, r.resume))
          .join("")}</span>`
      : escapeHtml(t("fig.aucuneRegle"));
  } else {
    // Règles des guerriers de la bande à choisir en pastilles ; champ texte seulement sans données.
    const reglesConnues = reglesGuerriers(getBande(currentCreation?.bandeId));
    reglesChoix.open = reglesConnues.length > 0;
    const renderRegles = () => {
      chipEditor(reglesBox, figDraft.regles, {
        saisie: !reglesConnues.length,
        info: descriptionRegle,
        datalist: "rules-list",
        placeholder: t("fig.regles.exemple"),
        // « Chef » ou « Sorcier » ouvrent certaines compétences ; « Animaux » interdit l'expérience.
        onChange: renderRegles,
        label: locNomRegle,
        unique: true,
      });
      renderReglesChoix(
        reglesChoix,
        document.getElementById("fig-regles-liste"),
        figDraft.regles,
        reglesConnues,
        renderRegles
      );
      if (isHero) renderCompetencesChoix();
      renderFigXpBloque();
      // Une règle peut autoriser le bouclier avec une arme à deux mains.
      renderArsenal(guerrier);
    };
    renderRegles();
  }
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
    if (document.getElementById(id).closest("[hidden]")) continue;
    const pending = document.querySelector(`#${id} .chip-add input`)?.value.trim();
    if (!pending || (key !== "equipement" && contientRegle(figDraft[key], pending))) continue;
    figDraft[key].push(pending);
  }
  // Le coût suit l'équipement ajouté, sauf si le joueur l'a modifié après coup.
  syncCout();
  if (figType.value.trim() !== loc(figDraft.type)) figDraft.type = figType.value.trim();
  figDraft.coutGc = Math.max(0, Number(figCout.value) || 0);
  figDraft.xp = Math.max(0, Number(figXp.value) || 0);
  // Au recrutement (et tant que la bande est en brouillon), l'expérience saisie est le point de départ des progressions.
  if (!figOriginal || currentCreation.brouillon) figDraft.xpDepart = figDraft.xp;
  if (figDraft.categorie === "hdm") {
    figDraft.nombre = Math.min(MAX_GROUPE, Math.max(1, Math.round(Number(figNombre.value)) || 1));
    figDraft.competences = [];
  }
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
// Règles des bandes (consultation des données)
// ---------------------------------------------------------------------
const reglesSelect = document.getElementById("regles-bande-select");
function renderReglesOptions() {
  const keep = reglesSelect.value;
  reglesSelect.innerHTML = BANDES.map((b) => option(b.id, locBande(b))).join("");
  if (keep) reglesSelect.value = keep;
}
renderReglesOptions();

function renderReglesBande() {
  if (currentCreation?.bandeId && !reglesSelect.dataset.touched) reglesSelect.value = currentCreation.bandeId;
  const b = getBande(reglesSelect.value) || BANDES[0];
  const regle = (r) => {
    const { nom, resume } = locRegle(r);
    return `<li><strong>${escapeHtml(nom)}</strong>${resume ? ` : ${escapeHtml(resume)}` : ""}</li>`;
  };
  const guerrier = (g) => `
    <div class="unit-card">
      <div class="unit-head">
        <span class="unit-name">${escapeHtml(locGuerrier(g))}</span>
        <span class="unit-cost">${g.cout} ${t("monnaie")}${g.xp ? ` · ${g.xp} xp` : ""} · ${t("regles.effectif", { min: g.min || 0, max: g.max ?? "∞" })}</span>
      </div>
      <div class="stat-line">${statLine(g.profil)}</div>
      ${g.regles.length ? `<p class="unit-detail">${t("unite.regles", { liste: reglesText(g.regles) })}</p>` : ""}
      ${g.competences.length ? `<p class="unit-detail">${escapeHtml(t("unite.acces", { liste: g.competences.map(loc).join(", ") }))}</p>` : ""}
      ${
        g.equipement.length
          ? `<details class="arsenal"><summary>${t("regles.listeEquipement")}</summary>${g.equipement
              .map(
                (c) =>
                  `<p class="unit-detail"><em>${escapeHtml(loc(c.categorie))}</em> : ${c.objets
                    .map((o) => `${escapeHtml(loc(o.nom))} (${o.cout ?? 0})`)
                    .join(", ")}</p>`
              )
              .join("")}</details>`
          : ""
      }
    </div>`;
  const regles = [...new Map(b.guerriers.flatMap((g) => g.regles).map((r) => [r.nom, r])).values()];
  document.getElementById("regles-bande-contenu").innerHTML = `
    <p class="unit-detail">${t("regles.tresor", { tresor: b.tresor, max: b.effectifMax })}</p>
    ${b.regles.length ? `<h3 class="mini-title">${t("regles.reglesBande")}</h3><ul class="regles-list">${b.regles.map(regle).join("")}</ul>` : ""}
    <h3 class="mini-title">${t("compo.heros")}</h3>
    <div class="unit-list">${b.guerriers.filter((g) => g.categorie === "heros").map(guerrier).join("")}</div>
    <h3 class="mini-title">${t("compo.hdm")}</h3>
    <div class="unit-list">${b.guerriers.filter((g) => g.categorie === "hdm").map(guerrier).join("")}</div>
    ${regles.length ? `<h3 class="mini-title">${t("regles.reglesGuerriers")}</h3><ul class="regles-list">${regles.map(regle).join("")}</ul>` : ""}`;
  document.getElementById("regles-source").textContent = t("regles.source", { source: b.source });
}
reglesSelect.addEventListener("change", () => {
  reglesSelect.dataset.touched = "1";
  renderReglesBande();
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
    const heure = new Date(rec.majLe).toLocaleTimeString(getLocale(), { hour: "2-digit", minute: "2-digit" });
    slotStatus.textContent = t("slot.sauvegarde", { n: activeSlot, heure });
    renderBandeHead(currentModel);
    renderSlots();
  } catch (err) {
    console.error(err);
    slotStatus.textContent = t("slot.erreurSauvegarde", { err: err.message });
  }
}

async function flushSave() {
  if (saveTimer) await saveNow();
}

function formatDate(iso) {
  try {
    return new Date(iso).toLocaleString(getLocale(), { dateStyle: "short", timeStyle: "short" });
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
    slotStatus.textContent = t("slot.stockageIndispo", { err: err.message });
    return;
  }
  slotsContainer.innerHTML = "";
  slots.forEach((rec, i) => {
    const n = i + 1;
    const isActive = activeSlot === n;
    const div = document.createElement("div");
    div.className = `slot-card${rec ? "" : " empty"}${isActive ? " active" : ""}`;
    const catalogue = rec?.roster?.roster?.forces?.[0]?.catalogueName?.trim() || "";
    const origine = rec
      ? rec.creation
        ? t(rec.creation.brouillon ? "slot.brouillon" : "slot.creeeIci")
        : t("slot.importee")
      : "";
    div.innerHTML = `
      <p class="slot-num">${t("slot.num", { n })}${isActive ? t("slot.ouverte") : ""}</p>
      <p class="slot-name">${rec ? escapeHtml(rec.nom) : t("slot.vide")}</p>
      <p class="slot-meta">${
        rec
          ? `${escapeHtml(catalogue)}${catalogue ? " · " : ""}${origine} · ${t("slot.modifieeLe", { date: formatDate(rec.majLe) })}`
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
    if (rec && !isActive) addBtn(t(rec.creation?.brouillon ? "slot.reprendre" : "slot.ouvrir"), () => openSlot(n));
    if (isActive) addBtn(t("slot.afficher"), () => showView("bande"));
    if (!rec) addBtn(t("slot.nouvelle"), () => {
      showView("nouvelle");
      newSlot.value = String(n);
    });
    if (currentModel && !activeSlot) addBtn(t("slot.enregistrerIci"), () => saveToSlot(n, rec));
    if (rec) addBtn(t("slot.vider"), () => clearSlot(n, rec));
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
    slotStatus.textContent = t("slot.erreurOuvrir", { n, err: err.message });
  }
}

async function saveToSlot(n, existing) {
  if (!currentModel) return;
  await flushSave();
  let merged = null;
  if (existing) {
    if (existing.nom === currentModel.meta.nom) {
      // Même bande (nouvel export après une partie) : on garde personnalisations et notes.
      const ok = confirm(t("slot.confirmMaj", { nom: existing.nom, n }));
      if (!ok) return;
      merged = mergeIntoSlot(existing, currentModel, customisations);
    } else {
      const ok = confirm(t("slot.confirmRemplacer", { n, ancien: existing.nom, nouveau: currentModel.meta.nom }));
      if (!ok) return;
    }
  }
  if (merged) {
    customisations = merged.customisations;
    orphanCustomisations = new Map(
      Object.entries(merged.orphelines).map(([id, o]) => [id, { ...o, nom: o.nom || o.label || t("sansNom") }])
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
    slotStatus.textContent = t("slot.erreurEnregistrer", { err: err.message });
  }
}

async function clearSlot(n, rec) {
  if (!confirm(t("slot.confirmVider", { n, nom: rec.nom }))) return;
  try {
    if (activeSlot === n) {
      clearTimeout(saveTimer);
      saveTimer = null;
      activeSlot = null;
    }
    await deleteSlot(n);
    if (currentModel) renderBandeHead(currentModel);
    slotStatus.textContent = t("slot.vide.ok", { n });
  } catch (err) {
    console.error(err);
    slotStatus.textContent = t("slot.erreurVider", { n, err: err.message });
  }
  renderSlots();
}

document.getElementById("export-slots-btn").addEventListener("click", async () => {
  try {
    await flushSave();
    const records = (await listSlots()).filter(Boolean);
    if (!records.length) {
      slotStatus.textContent = t("export.rien");
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
    slotStatus.textContent = t("export.ok", { n: records.length });
  } catch (err) {
    console.error(err);
    slotStatus.textContent = t("export.erreur", { err: err.message });
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
      slotStatus.textContent = t("importSauv.vide");
      return;
    }
    const liste = records.map((r) => `  ${r.slot}. ${r.nom}`).join("\n");
    if (!confirm(t("importSauv.confirm", { liste }))) return;
    await flushSave();
    for (const rec of records) await putSlot(rec);
    const reopen = records.find((r) => r.slot === activeSlot);
    if (reopen) loadRoster(reopen.roster, reopen);
    else if (currentModel) renderBandeHead(currentModel);
    slotStatus.textContent = t("importSauv.ok", { n: records.length });
    renderSlots();
  } catch (err) {
    console.error(err);
    slotStatus.textContent = t("importSauv.erreur", { err: err.message });
  }
});

document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden") flushSave();
});

// ---------------------------------------------------------------------
// Langue de l'interface (voir i18n.js) : écusson + menu des pays
// ---------------------------------------------------------------------
const langBtn = document.getElementById("lang-btn");
const langMenu = document.getElementById("lang-menu");

/** Textes fixes de la page, repérés par leurs attributs data-i18n*. */
function applyStaticTexts() {
  document.documentElement.lang = getLang();
  document.querySelectorAll("[data-i18n]").forEach((el) => (el.textContent = t(el.dataset.i18n)));
  // data-i18n-placeholder="clé" → attribut placeholder, etc.
  for (const attr of ["placeholder", "aria-label", "title", "content"]) {
    document.querySelectorAll(`[data-i18n-${attr}]`).forEach((el) =>
      el.setAttribute(attr, t(el.getAttribute(`data-i18n-${attr}`)))
    );
  }
  langBtn.innerHTML = flagSvg(getLang());
  langMenu.innerHTML = "";
  for (const l of LANGUES) {
    const b = document.createElement("button");
    b.type = "button";
    b.className = `lang-option${l.code === getLang() ? " active" : ""}`;
    b.setAttribute("role", "menuitem");
    b.lang = l.code;
    b.innerHTML = `${flagSvg(l.code)}<span>${escapeHtml(l.pays)}</span>`;
    b.addEventListener("click", () => changeLang(l.code));
    langMenu.appendChild(b);
  }
}

function toggleLangMenu(open = langMenu.hidden) {
  langMenu.hidden = !open;
  langBtn.setAttribute("aria-expanded", String(open));
}

/** Réaffiche tout ce qui dépend de la langue, sans perdre la bande ouverte. */
function changeLang(code) {
  toggleLangMenu(false);
  if (code === getLang()) return;
  setLang(code);
  applyStaticTexts();
  renderFactionOptions();
  renderReglesOptions();
  fillLangDatalists();
  renderFigStatLabels();
  if (currentModel) {
    // Noms et règles de la bande dans la nouvelle langue.
    currentModel = parseRoster(currentRoster);
    applyPartie(currentModel, partie);
    renderPreview(currentModel);
    renderPersoCards(currentModel);
    renderCombats();
  }
  const view = [...document.querySelectorAll(".view")].find((v) => !v.hidden)?.id.replace("view-", "");
  showView(view || "accueil");
}

langBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  toggleLangMenu();
});
document.addEventListener("click", (e) => {
  if (!langMenu.hidden && !langMenu.contains(e.target)) toggleLangMenu(false);
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !langMenu.hidden) {
    toggleLangMenu(false);
    langBtn.focus();
  }
});

applyStaticTexts();
requestPersistence();
showView("accueil");
