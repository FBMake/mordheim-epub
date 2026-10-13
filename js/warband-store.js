/**
 * warband-store.js
 * -----------------
 * Mini base de données locale (IndexedDB, dans le navigateur de
 * l'utilisateur) qui conserve jusqu'à 4 bandes, chacune dans un
 * « emplacement » numéroté de 1 à 4.
 *
 * Un emplacement contient :
 *   - l'export JSON BattleScribe / New Recruit d'origine (jamais modifié),
 *   - les personnalisations (nom, bio, photo) par figurine,
 *   - les personnalisations orphelines (figurine disparue du roster),
 *   - le suivi de partie (XP, état, blessures, notes par figurine ; magot
 *     et notes de la bande) qui remplace les valeurs du roster dans le PDF,
 *   - pour une bande créée dans l'application, son modèle éditable
 *     (`creation`, voir warband-builder.js) dont le roster est généré.
 *
 * IndexedDB plutôt que localStorage : les photos (data URL JPEG) pèsent
 * vite plus que les ~5 Mo autorisés par localStorage.
 *
 * Les fonctions « pures » (sans IndexedDB) sont exportées séparément pour
 * être testables sous Node (voir test/test-warband-store.mjs).
 */

import { normalizeCreation } from "./warband-builder.js";
import { STATUTS, cleanCombat } from "./combats.js";
import { appliquerMalus, cleanBlessures, regleBlessure } from "./blessures.js";

export const SLOT_COUNT = 4;
export const EXPORT_FORMAT = "mordheim-epub-bandes";
const EXPORT_VERSION = 1;

const DB_NAME = "mordheim-bandes";
const DB_VERSION = 1;
const STORE = "emplacements";

export { STATUTS };

// ---------------------------------------------------------------------
// Fonctions pures
// ---------------------------------------------------------------------

export function emptyPartie() {
  return { magotOr: null, magotPierres: null, notes: "", figurines: {}, combats: [] };
}

function toNumberOrNull(v) {
  if (v === null || v === undefined || v === "") return null;
  const n = Number(v);
  return Number.isFinite(n) ? n : null;
}

function cleanPerso(val = {}) {
  return { nom: val.nom || "", bio: val.bio || "", photo: val.photo || null };
}

function cleanPartie(p = {}) {
  const out = emptyPartie();
  out.magotOr = toNumberOrNull(p.magotOr);
  out.magotPierres = toNumberOrNull(p.magotPierres);
  out.notes = p.notes || "";
  out.combats = (Array.isArray(p.combats) ? p.combats : []).map(cleanCombat);
  for (const [id, f] of Object.entries(p.figurines || {})) {
    out.figurines[id] = {
      xp: toNumberOrNull(f?.xp),
      statut: STATUTS.includes(f?.statut) ? f.statut : "",
      notes: f?.notes || "",
      // Blessures permanentes (identifiants de blessures.js).
      blessures: cleanBlessures(f?.blessures),
    };
  }
  return out;
}

/** Valide et normalise un enregistrement d'emplacement (import ou lecture). */
export function normalizeRecord(rec) {
  const slot = Number(rec?.slot);
  if (!Number.isInteger(slot) || slot < 1 || slot > SLOT_COUNT) {
    throw new Error(`Numéro d'emplacement invalide : ${rec?.slot}`);
  }
  if (!rec.roster || !rec.roster.roster) {
    throw new Error(`L'emplacement ${slot} ne contient pas d'export de roster valide.`);
  }
  const customisations = {};
  for (const [id, val] of Object.entries(rec.customisations || {})) {
    customisations[id] = cleanPerso(val);
  }
  const orphelines = {};
  for (const [id, val] of Object.entries(rec.orphelines || {})) {
    orphelines[id] = { ...cleanPerso(val), label: val.label || val.nom || "" };
  }
  return {
    slot,
    nom: rec.nom || rec.roster.roster.name || "Bande sans nom",
    roster: rec.roster,
    customisations,
    orphelines,
    partie: cleanPartie(rec.partie),
    // Bande créée dans l'application (warband-builder.js) : modèle éditable
    // dont `roster` est généré. null pour une bande importée.
    creation: normalizeCreation(rec.creation),
    majLe: rec.majLe || new Date().toISOString(),
  };
}

/**
 * Remplace le roster d'un emplacement par un nouvel export (ex. après une
 * partie mise à jour dans New Recruit) en conservant ce qui peut l'être :
 *   - personnalisations des figurines encore présentes (par id),
 *   - les autres deviennent orphelines (rien n'est perdu),
 *   - état et notes de partie des figurines encore présentes, notes de bande.
 * Les XP et le magot saisis à la main sont abandonnés : le nouvel export
 * fait foi.
 *
 * @param {object|null} previous - enregistrement existant (ou null)
 * @param {object} model - modèle du nouveau roster (parser.js)
 * @param {object} customisations - personnalisations en cours dans l'interface
 */
export function mergeIntoSlot(previous, model, customisations = {}) {
  const ids = new Set([...model.heros, ...model.hommesDeMain].map((c) => c.id));
  const labelOf = (id) =>
    previous?.orphelines?.[id]?.label || previous?.customisations?.[id]?.nom || "";

  const merged = {};
  const orphelines = { ...(previous?.orphelines || {}) };
  for (const [id, val] of Object.entries(previous?.customisations || {})) {
    if (ids.has(id)) merged[id] = cleanPerso(val);
    else if (val.nom || val.bio || val.photo) orphelines[id] = { ...cleanPerso(val), label: labelOf(id) };
  }
  // Une orpheline dont la figurine réapparaît redevient active.
  for (const id of Object.keys(orphelines)) {
    if (ids.has(id)) {
      if (!merged[id]) merged[id] = cleanPerso(orphelines[id]);
      delete orphelines[id];
    }
  }
  // Ce qui est saisi dans l'interface est prioritaire.
  for (const [id, val] of Object.entries(customisations)) {
    if (ids.has(id) && (val.nom || val.bio || val.photo)) merged[id] = cleanPerso(val);
  }

  const partie = emptyPartie();
  partie.notes = previous?.partie?.notes || "";
  // L'historique des combats appartient à la bande, pas à l'export : on le garde.
  partie.combats = (previous?.partie?.combats || []).map(cleanCombat);
  for (const [id, f] of Object.entries(previous?.partie?.figurines || {})) {
    const blessures = cleanBlessures(f.blessures);
    if (ids.has(id) && (f.statut || f.notes || blessures.length)) {
      partie.figurines[id] = { xp: null, statut: f.statut || "", notes: f.notes || "", blessures };
    }
  }
  return { customisations: merged, orphelines, partie };
}

/**
 * Applique le suivi de partie au modèle (muté en place) avant génération
 * du PDF ou affichage : XP, magot, totaux, état, blessures (malus sur le
 * profil) et notes par figurine. Les morts ne comptent plus dans les totaux.
 */
export function applyPartie(model, partie) {
  const p = partie || emptyPartie();
  const cards = [...model.heros, ...model.hommesDeMain];
  for (const card of cards) {
    // Valeur d'origine du roster, gardée pour pouvoir annuler une saisie.
    if (card.xpRoster === undefined) card.xpRoster = card.xp;
    if (card.statsRoster === undefined) card.statsRoster = { ...card.stats };
    if (card.blessuresRoster === undefined) card.blessuresRoster = [...card.blessures];
    const f = p.figurines[card.id];
    card.xp = f?.xp ?? card.xpRoster;
    card.statut = f?.statut || "";
    card.notesPartie = f?.notes || "";
    card.blessuresPartie = cleanBlessures(f?.blessures);
    card.stats = appliquerMalus(card.statsRoster, card.blessuresPartie);
    card.blessures = [...card.blessuresRoster, ...card.blessuresPartie.map(regleBlessure)];
  }
  if (model.bande.magotOrRoster === undefined) model.bande.magotOrRoster = model.bande.magotOr;
  if (model.bande.magotPierresRoster === undefined) {
    model.bande.magotPierresRoster = model.bande.magotPierres;
  }
  model.bande.magotOr = p.magotOr ?? model.bande.magotOrRoster;
  model.bande.magotPierres = p.magotPierres ?? model.bande.magotPierresRoster;
  model.bande.xpTotal = cards
    .filter((c) => c.statut !== "Mort")
    .reduce((sum, c) => sum + (Number(c.xp) || 0), 0);
  model.bande.valeurDeBande = model.bande.xpTotal * 5;
  model.bande.notesPartie = p.notes || "";
  return model;
}

/** Fichier de sauvegarde regroupant tous les emplacements occupés. */
export function serializeExport(records) {
  return JSON.stringify(
    {
      format: EXPORT_FORMAT,
      version: EXPORT_VERSION,
      exporteLe: new Date().toISOString(),
      emplacements: records.filter(Boolean).map(normalizeRecord),
    },
    null,
    2
  );
}

/** Lit et valide un fichier de sauvegarde. @returns {object[]} enregistrements */
export function parseExport(text) {
  let data;
  try {
    data = JSON.parse(text);
  } catch {
    throw new Error("Ce fichier de sauvegarde n'est pas un JSON valide.");
  }
  if (data?.format !== EXPORT_FORMAT || !Array.isArray(data.emplacements)) {
    throw new Error("Ce fichier ne ressemble pas à une sauvegarde de bandes de cette application.");
  }
  return data.emplacements.map(normalizeRecord);
}

// ---------------------------------------------------------------------
// Accès IndexedDB
// ---------------------------------------------------------------------

let dbPromise = null;

function openDb() {
  if (!dbPromise) {
    dbPromise = new Promise((resolve, reject) => {
      if (typeof indexedDB === "undefined") {
        reject(new Error("Ce navigateur ne permet pas le stockage local (IndexedDB)."));
        return;
      }
      const req = indexedDB.open(DB_NAME, DB_VERSION);
      req.onupgradeneeded = () => {
        const db = req.result;
        if (!db.objectStoreNames.contains(STORE)) {
          db.createObjectStore(STORE, { keyPath: "slot" });
        }
      };
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error || new Error("Ouverture de la base locale impossible."));
    });
    dbPromise.catch(() => {
      dbPromise = null;
    });
  }
  return dbPromise;
}

function run(mode, fn) {
  return openDb().then(
    (db) =>
      new Promise((resolve, reject) => {
        const tx = db.transaction(STORE, mode);
        const result = fn(tx.objectStore(STORE));
        tx.oncomplete = () => resolve(result?.result);
        tx.onerror = () => reject(tx.error);
        tx.onabort = () => reject(tx.error || new Error("Écriture annulée (espace disque plein ?)."));
      })
  );
}

/** @returns {Promise<Array<object|null>>} tableau de 4 cases (null si vide) */
export async function listSlots() {
  const all = (await run("readonly", (s) => s.getAll())) || [];
  const slots = Array(SLOT_COUNT).fill(null);
  for (const rec of all) {
    if (rec.slot >= 1 && rec.slot <= SLOT_COUNT) slots[rec.slot - 1] = rec;
  }
  return slots;
}

export function getSlot(slot) {
  return run("readonly", (s) => s.get(slot));
}

export function putSlot(record) {
  const rec = normalizeRecord({ ...record, majLe: new Date().toISOString() });
  return run("readwrite", (s) => s.put(rec)).then(() => rec);
}

export function deleteSlot(slot) {
  return run("readwrite", (s) => s.delete(slot));
}

/** Demande au navigateur de ne pas effacer la base en cas de manque de place. */
export function requestPersistence() {
  if (navigator.storage?.persist) navigator.storage.persist().catch(() => {});
}
