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
 * Module sans DOM (testé par test/test-progression.mjs).
 */

import { maximumsGuerrier } from "./data/competences.js";
import { SEUILS_HDM } from "./experience.js";

export { SEUILS_HDM };

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

/** Progressions que le groupe doit encore lancer avec cette expérience. */
export function progressionsDues(fig, xp) {
  if (fig?.categorie !== "hdm") return 0;
  const atteints = SEUILS_HDM.filter((s) => toInt(xp) >= s).length;
  return Math.max(0, atteints - (fig.progressions || []).length);
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
    return null;
  }
  fig.nombre -= 1;
  const heros = nouvelleFigurine("heros");
  Object.assign(heros, {
    modele: fig.modele,
    type: fig.type,
    coutGc: fig.coutGc,
    xp: toInt(xp ?? fig.xp),
    stats: { ...fig.stats },
    equipement: [...fig.equipement],
    regles: [...fig.regles],
  });
  return heros;
}
