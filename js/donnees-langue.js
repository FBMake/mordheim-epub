/* ------------------------------------------------------------------
 * Données de jeu dans la langue de l'interface.
 *
 * Les données (js/data/bandes.js, règles des rosters) sont stockées en
 * français : c'est sous ces noms que les bandes créées sont enregistrées.
 * En anglais, ce module donne le nom officiel anglais d'une bande, d'un
 * guerrier, d'un objet, d'une liste de compétences, et la version anglaise
 * d'une règle (js/data/bandes-en.js, généré depuis tools/bsdata/en.json).
 * Les fonctions d'affichage `loc*` ne changent rien en français.
 *
 * Ce module ne touche pas au DOM : il est aussi chargé par les tests.
 * ------------------------------------------------------------------ */

import { EN } from "./data/bandes-en.js";
import { BANDES } from "./data/bandes.js";
import { NAME_TRANSLATIONS, RULE_TRANSLATIONS, isFrenchText } from "./translations.js";
import { getLang } from "./i18n.js";

export const enAnglais = () => getLang() === "en";

// Nom français (ou anglais affiché) d'une règle → clé anglaise de EN.regles / RULE_TRANSLATIONS.
const cleRegle = new Map(Object.entries(EN.reglesFr));
for (const [key, val] of Object.entries(RULE_TRANSLATIONS)) {
  // Quelques clés du dictionnaire sont déjà françaises (« Maître Armurier ») : pas d'anglais à en tirer.
  if (val?.name && !isFrenchText(key) && !cleRegle.has(val.name)) cleRegle.set(val.name, key);
}
for (const [key, val] of Object.entries(EN.regles)) if (!cleRegle.has(val.nom)) cleRegle.set(val.nom, key);
const cleRegleMinuscule = new Map([...cleRegle].map(([nom, key]) => [nom.toLowerCase(), key]));
// Les clés de RULE_TRANSLATIONS ne sont pas toujours écrites comme celles de EN.regles (« black hunger »).
const regleParCle = new Map(Object.entries(EN.regles).map(([key, val]) => [key.toLowerCase(), val]));

// Nom français → nom anglais (bandes, guerriers, objets, listes de compétences, libellés).
const noms = new Map([
  ["Portée", "Range"],
  ["Force", "Strength"],
  ["Svg. d'Armure", "Armour Save"],
  ["Spéciale", "Special"],
  ["Or", "Gold"],
]);
for (const b of BANDES) {
  noms.set(b.nom, EN.bandes[b.id]);
  for (const g of b.guerriers) if (!noms.has(g.nom)) noms.set(g.nom, EN.guerriers[g.id]);
}
for (const table of [EN.equipement, EN.competences, EN.categories]) {
  for (const [fr, en] of Object.entries(table)) if (!noms.has(fr)) noms.set(fr, en);
}
for (const [en, fr] of Object.entries(NAME_TRANSLATIONS)) if (!noms.has(fr)) noms.set(fr, en);

/** Nom anglais d'un nom français connu, sinon le nom tel quel. */
export function nomAnglais(nom) {
  return noms.get(nom) || nom;
}

/** Version anglaise { nom, resume } d'une règle (nom français, clé ou nom anglais), ou null. */
export function regleAnglaise(nom) {
  const key = regleParCle.has(String(nom).toLowerCase())
    ? nom
    : cleRegle.get(nom) || cleRegleMinuscule.get(String(nom).toLowerCase());
  if (!key) return null;
  return regleParCle.get(key.toLowerCase()) || { nom: key, resume: "" };
}

/** Noms anglais des règles et compétences connues (saisie automatique en anglais). */
export function nomsReglesAnglais() {
  const out = new Set(Object.values(EN.regles).map((r) => r.nom));
  for (const key of Object.keys(RULE_TRANSLATIONS)) if (!isFrenchText(key)) out.add(key);
  return [...out].sort((a, b) => a.localeCompare(b, "en"));
}

// ---------------------------------------------------------------------
// Affichage dans la langue de l'interface
// ---------------------------------------------------------------------

/** Nom d'une bande, d'un guerrier, d'un objet, d'une liste… dans la langue de l'interface. */
export function loc(nom) {
  return enAnglais() ? nomAnglais(nom) : nom;
}

export function locBande(b) {
  return enAnglais() ? EN.bandes[b.id] || b.nom : b.nom;
}

export function locGuerrier(g) {
  return enAnglais() ? EN.guerriers[g.id] || g.nom : g.nom;
}

/** Règle { nom, resume } dans la langue de l'interface. */
export function locRegle(r) {
  if (!enAnglais()) return r;
  const en = regleAnglaise(r.nom);
  return en ? { nom: en.nom, resume: en.resume } : r;
}

/** Compétence de js/data/competences.js ({ en, nom, resume }) dans la langue de l'interface. */
export function locCompetence(c) {
  if (!enAnglais()) return c;
  return regleAnglaise(c.en) || { nom: c.en, resume: "" };
}

/** Nom seul d'une règle ou compétence dans la langue de l'interface. */
export function locNomRegle(nom) {
  return enAnglais() ? regleAnglaise(nom)?.nom || nom : nom;
}
