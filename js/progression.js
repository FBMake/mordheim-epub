/**
 * progression.js
 * ---------------
 * Progression des hommes de main par l'expérience (tableau de progression
 * des hommes de main, 2D6).
 *
 * Un groupe progresse à 2, 5, 9 et 14 points d'expérience. À chaque seuil,
 * on lance 2D6 :
 *    2-4  +1 Initiative
 *    5    +1 Force
 *    6-7  +1 CC ou +1 CT, au choix
 *    8    +1 Attaque
 *    9    +1 Commandement
 *   10-12 Ce gars a du talent : une figurine du groupe devient un héros.
 * Une caractéristique déjà au maximum de la race ne progresse pas : on relance.
 * Tout le groupe progresse ensemble ; une recrue ajoutée ensuite reçoit
 * l'expérience et donc le profil du groupe.
 *
 * Les héros progressent aux seuils de leur piste (2, 4, 6, 8, 11…) franchis
 * après leur recrutement (xpDepart). Tableau des héros, 2D6 :
 *    2-5   Nouvelle compétence
 *    6     +1 Force ou +1 Attaque (D6 : 1-3 F, 4-6 A)
 *    7     +1 CC ou +1 CT, au choix
 *    8     +1 Initiative ou +1 Commandement (D6 : 1-3 I, 4-6 Cd)
 *    9     +1 Points de vie ou +1 Endurance (D6 : 1-3 PV, 4-6 E)
 *   10-12  Nouvelle compétence
 * C'est ainsi qu'un héros apprend ses compétences : chaque progression est
 * gardée dans fig.progressions, l'historique affiché sur sa fiche.
 *
 * Module sans DOM (testé par test/test-progression.mjs).
 */

import { maximumsGuerrier } from "./data/competences.js";
import { SEUILS_HDM, SEUILS_HEROS } from "./experience.js";

export { SEUILS_HDM, SEUILS_HEROS };

/** Résultat du tableau pour un total de 2D6. */
export function resultatProgression(total) {
  if (total <= 4) return { code: "I", stats: ["I"] };
  if (total === 5) return { code: "F", stats: ["F"] };
  if (total <= 7) return { code: "CC/CT", stats: ["CC", "CT"] };
  if (total === 8) return { code: "A", stats: ["A"] };
  if (total === 9) return { code: "Cd", stats: ["Cd"] };
  return { code: "talent", stats: [] };
}

function toInt(v) {
  const n = Number(v);
  return Number.isFinite(n) ? Math.max(0, Math.round(n)) : 0;
}

/** Résultat du tableau des héros pour un total de 2D6. */
export function resultatProgressionHeros(total) {
  if (total <= 5 || total >= 10) return { code: "competence", stats: [] };
  if (total === 6) return { code: "F/A", stats: ["F", "A"] };
  if (total === 7) return { code: "CC/CT", stats: ["CC", "CT"] };
  if (total === 8) return { code: "I/Cd", stats: ["I", "Cd"] };
  return { code: "PV/E", stats: ["PV", "E"] };
}

/** Seuils de la piste d'un héros franchis depuis son recrutement, sans progression enregistrée. */
function seuilsHerosEnAttente(fig, xp) {
  const faits = new Set((fig.progressions || []).filter((p) => p.seuil).map((p) => p.seuil));
  const depart = toInt(fig.xpDepart);
  return SEUILS_HEROS.filter((s) => s > depart && s <= toInt(xp) && !faits.has(s));
}

/** Progressions que la figurine (héros ou groupe) doit encore lancer avec cette expérience. */
export function progressionsDues(fig, xp) {
  if (fig?.categorie === "heros") return seuilsHerosEnAttente(fig, xp).length;
  if (fig?.categorie !== "hdm") return 0;
  const atteints = SEUILS_HDM.filter((s) => toInt(xp) >= s).length;
  return Math.max(0, atteints - (fig.progressions || []).filter((p) => !p.seuil).length);
}

/** Lancer de 2D6 (Math.random suffit pour un jeu). */
export function lancer2D6(random = Math.random) {
  return [1 + Math.floor(random() * 6), 1 + Math.floor(random() * 6)];
}

/** La caractéristique peut-elle encore progresser (maximum de la race) ? */
export function peutProgresser(fig, stat, guerrier) {
  const valeur = Number(fig.stats?.[stat]);
  if (!Number.isFinite(valeur)) return false;
  const max = maximumsGuerrier(guerrier)?.max[stat];
  return max === undefined || valeur < max;
}

/**
 * Applique un jet de progression à un groupe d'hommes de main.
 * @param {Object} fig - groupe (modifié en place)
 * @param {number[]} des - les deux dés
 * @param {Object} [opts]
 * @param {string} [opts.choix] - "CC" ou "CT" pour un 6-7
 * @param {Object} [opts.guerrier] - guerrier des données, pour les maximums
 * @returns {{ ok: boolean, code: string, stat?: string, relancer?: boolean }}
 *   relancer : la caractéristique est au maximum, rien n'est enregistré.
 *   code "talent" : à l'appelant de détacher le héros (voir promouvoir).
 */
export function appliquerProgression(fig, des, { choix, guerrier } = {}) {
  const total = des[0] + des[1];
  const res = resultatProgression(total);
  let stat;
  if (res.stats.length) {
    stat = res.stats.length > 1 ? (res.stats.includes(choix) ? choix : res.stats[0]) : res.stats[0];
    if (!peutProgresser(fig, stat, guerrier)) return { ok: false, code: res.code, stat, relancer: true };
    fig.stats[stat] = String(Number(fig.stats[stat]) + 1);
  }
  fig.progressions = [...(fig.progressions || []), { des: [...des], resultat: stat || res.code }];
  return { ok: true, code: res.code, stat };
}

/**
 * Applique un jet de progression à un héros, pour le premier seuil en attente.
 * @param {Object} fig - héros (modifié en place)
 * @param {number[]} des - les deux dés
 * @param {Object} opts
 * @param {number} opts.xp - expérience actuelle
 * @param {string} [opts.choix] - caractéristique choisie parmi les deux proposées
 * @param {string} [opts.competence] - compétence choisie pour 2-5 / 10-12
 * @param {Object} [opts.guerrier] - guerrier des données, pour les maximums
 * @returns {{ ok: boolean, code: string, stat?: string, relancer?: boolean, manque?: string }}
 *   relancer : la caractéristique est au maximum (choisir l'autre ou relancer).
 *   manque "competence" : aucune compétence choisie ; "seuil" : aucun seuil en attente.
 */
export function appliquerProgressionHeros(fig, des, { xp, choix, competence, guerrier } = {}) {
  const seuil = seuilsHerosEnAttente(fig, xp)[0];
  const res = resultatProgressionHeros(des[0] + des[1]);
  if (!seuil) return { ok: false, code: res.code, manque: "seuil" };
  let entree;
  if (res.code === "competence") {
    const nom = String(competence || "").trim();
    if (!nom) return { ok: false, code: res.code, manque: "competence" };
    if (!(fig.competences || []).includes(nom)) fig.competences = [...(fig.competences || []), nom];
    entree = { des: [...des], resultat: "competence", competence: nom, seuil };
  } else {
    const stat = res.stats.includes(choix) ? choix : res.stats[0];
    if (!peutProgresser(fig, stat, guerrier)) return { ok: false, code: res.code, stat, relancer: true };
    fig.stats[stat] = String(Number(fig.stats[stat]) + 1);
    entree = { des: [...des], resultat: stat, seuil };
  }
  fig.progressions = [...(fig.progressions || []), entree];
  return { ok: true, code: res.code, stat: entree.resultat === "competence" ? undefined : entree.resultat };
}

/**
 * Retire une progression de l'historique et défait son effet : la
 * compétence est oubliée, la caractéristique perd son point. (Un « Ce gars
 * a du talent » ne se défait pas : le héros détaché reste dans la bande.)
 */
export function annulerProgression(fig, index) {
  const p = fig.progressions?.[index];
  if (!p) return false;
  if (p.resultat === "competence") {
    const i = (fig.competences || []).indexOf(p.competence);
    if (i >= 0) fig.competences.splice(i, 1);
  } else if (p.resultat in (fig.stats || {})) {
    const n = Number(fig.stats[p.resultat]);
    if (Number.isFinite(n)) fig.stats[p.resultat] = String(n - 1);
  }
  fig.progressions.splice(index, 1);
  return true;
}

/**
 * Écart de chaque caractéristique avec le profil de base : le profil du
 * guerrier dans les données s'il est connu, sinon les progressions
 * enregistrées. Les malus de blessures (voir blessures.js) s'y ajoutent.
 * @returns {Object<string, number>} ex. { CC: 1, M: -1 } (écarts nuls omis)
 */
export function ecartsProfil(fig, guerrier, malus = {}) {
  const out = {};
  const add = (k, v) => {
    if (v) out[k] = (out[k] || 0) + v;
    if (out[k] === 0) delete out[k];
  };
  if (guerrier?.profil) {
    for (const [k, base] of Object.entries(guerrier.profil)) {
      const a = Number(fig.stats?.[k]);
      const b = Number(base);
      if (String(base).trim() !== "" && Number.isFinite(a) && Number.isFinite(b)) add(k, a - b);
    }
  } else {
    for (const p of fig.progressions || []) if (p.resultat in (fig.stats || {})) add(p.resultat, 1);
  }
  for (const [k, v] of Object.entries(malus)) add(k, v);
  return out;
}

/**
 * « Ce gars a du talent » : une figurine quitte le groupe et devient un héros
 * avec le profil, l'équipement et l'expérience du groupe. Un groupe d'une
 * seule figurine devient entièrement ce héros.
 * @param {Object} fig - groupe (modifié en place)
 * @param {Function} nouvelleFigurine - fabrique d'une figurine vide (newFigurine)
 * @returns {Object|null} le nouveau héros, ou null si le groupe lui-même est devenu héros
 */
export function promouvoir(fig, nouvelleFigurine, xp) {
  if ((fig.nombre || 1) <= 1) {
    fig.categorie = "heros";
    fig.nombre = 1;
    fig.surcout = 0;
    fig.xp = toInt(xp ?? fig.xp);
    fig.xpDepart = fig.xp;
    return null;
  }
  fig.nombre -= 1;
  const heros = nouvelleFigurine("heros");
  Object.assign(heros, {
    modele: fig.modele,
    type: fig.type,
    coutGc: fig.coutGc,
    xp: toInt(xp ?? fig.xp),
    xpDepart: toInt(xp ?? fig.xp),
    stats: { ...fig.stats },
    equipement: [...fig.equipement],
    regles: [...fig.regles],
  });
  return heros;
}
