/**
 * blessures.js
 * ------------
 * Table des blessures graves de Mordheim et leurs effets.
 *
 * Une blessure est enregistrée par son identifiant (voir BLESSURES) :
 *   - dans un combat (effet.blessures), pour l'historique,
 *   - sur la figurine (partie.figurines[id].blessures) quand elle est
 *     permanente : ses malus sont alors appliqués aux caractéristiques
 *     et elle figure sur la fiche du PDF.
 * Les blessures « ponctuelles » (capturé, dépouillé, blessure profonde…)
 * ne restent que dans l'historique des combats.
 *
 * La blessure « mort » envoie la figurine au cimetière (état « Mort ») :
 * elle n'apparaît plus dans le PDF tant qu'on ne la ramène pas.
 *
 * Les noms et effets affichés sont dans js/lang/<code>.js
 * (clés blessure.<id> et blessure.<id>.effet).
 */

import { t } from "./i18n.js";

export const MORT = "mort";

/**
 * Table des blessures graves des héros (jet de D66), plus « mort » pour
 * les hommes de main (1-2 sur 1D6).
 *   jet       : résultat de dé, affiché pour retrouver la ligne après un jet
 *   malus     : modificateurs permanents des caractéristiques
 *   permanent : reste sur la fiche de la figurine
 *   heros     : réservée aux héros (les hommes de main ne peuvent que mourir)
 */
export const BLESSURES = [
  { id: MORT, jet: "11-15", jetHdm: "1-2", permanent: false, heros: false },
  { id: "jambe", jet: "22", malus: { M: -1 }, permanent: true, heros: true },
  { id: "brasAmpute", jet: "23", permanent: true, heros: true },
  { id: "brasBlesse", jet: "23", permanent: false, heros: true },
  { id: "stupidite", jet: "24", permanent: true, heros: true },
  { id: "frenesie", jet: "24", permanent: true, heros: true },
  { id: "jambeBrisee", jet: "25", permanent: true, heros: true },
  { id: "poitrine", jet: "26", malus: { E: -1 }, permanent: true, heros: true },
  { id: "borgne", jet: "31", malus: { CT: -1 }, permanent: true, heros: true },
  { id: "vieilleBlessure", jet: "32", permanent: true, heros: true },
  { id: "nerfs", jet: "33", malus: { I: -1 }, permanent: true, heros: true },
  { id: "main", jet: "34", malus: { CC: -1 }, permanent: true, heros: true },
  { id: "profonde", jet: "35", permanent: false, heros: true },
  { id: "depouille", jet: "36", permanent: false, heros: true },
  { id: "rancune", jet: "56", permanent: true, heros: true },
  { id: "capture", jet: "61", permanent: false, heros: true },
  { id: "endurci", jet: "62-63", permanent: true, heros: true },
  { id: "cicatrices", jet: "64", permanent: true, heros: true },
  { id: "arenes", jet: "65", permanent: false, heros: true },
  { id: "survit", jet: "66", permanent: false, heros: true },
];

const byId = new Map(BLESSURES.map((b) => [b.id, b]));

export function getBlessure(id) {
  return byId.get(id) || null;
}

/** Garde les identifiants connus (une blessure peut se répéter : deux jambes blessées font −2 M). */
export function cleanBlessures(list) {
  return (Array.isArray(list) ? list : []).map(String).filter((id) => byId.has(id));
}

/** Blessures proposées pour une figurine ; `permanentes` : seulement celles qui restent sur la fiche. */
export function blessuresPour(estHeros, { permanentes = false } = {}) {
  return BLESSURES.filter((b) => (estHeros || !b.heros) && (!permanentes || b.permanent || b.id === MORT));
}

export function nomBlessure(id) {
  return t(`blessure.${id}`);
}

/** « M −1, E −1 » (vide si la blessure n'a pas de malus). */
export function texteMalus(malus) {
  return Object.entries(malus || {})
    .map(([k, v]) => `${k} ${v > 0 ? "+" : "−"}${Math.abs(v)}`)
    .join(", ");
}

/** Libellé de liste : « 22 · Blessure à la jambe (M −1) ». */
export function libelleBlessure(b, estHeros = true) {
  const jet = estHeros ? b.jet : b.jetHdm || b.jet;
  const malus = texteMalus(b.malus);
  return `${jet} · ${nomBlessure(b.id)}${malus ? ` (${malus})` : ""}`;
}

/** Somme des malus d'une liste de blessures, par caractéristique. */
export function malusTotal(ids) {
  const out = {};
  for (const id of cleanBlessures(ids)) {
    for (const [k, v] of Object.entries(byId.get(id).malus || {})) out[k] = (out[k] || 0) + v;
  }
  return out;
}

/**
 * Profil après blessures. Seules les valeurs numériques sont modifiées
 * (un « - » ou « 2D6 » reste tel quel) ; une caractéristique ne descend
 * pas sous 1.
 */
export function appliquerMalus(stats, ids) {
  const out = { ...stats };
  for (const [k, v] of Object.entries(malusTotal(ids))) {
    const n = Number(out[k]);
    if (out[k] !== undefined && String(out[k]).trim() !== "" && Number.isFinite(n)) {
      out[k] = String(Math.max(1, n + v));
    }
  }
  return out;
}

/** Règle au format du parser ({ name, description }) pour la fiche et le chapitre Blessures du PDF. */
export function regleBlessure(id) {
  return { name: nomBlessure(id), description: t(`blessure.${id}.effet`) };
}
