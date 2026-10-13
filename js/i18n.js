/* ------------------------------------------------------------------
 * Traduction de l'interface.
 *
 * Les textes sont dans js/lang/<code>.js (une clé par texte, {nom} pour
 * les valeurs insérées). Une clé absente d'une langue reprend le texte
 * français. Pour ajouter une langue (espagnol, allemand…) : créer
 * js/lang/<code>.js sur le modèle de en.js, l'importer ci-dessous et
 * l'ajouter à LANGUES (les drapeaux espagnol et allemand sont déjà
 * dessinés dans js/flags.js), puis déposer ses gabarits dans
 * data/templates/<code>/.
 *
 * Ce module ne touche pas au DOM : il est aussi chargé par les tests.
 * ------------------------------------------------------------------ */

import fr from "./lang/fr.js";
import en from "./lang/en.js";

/** Langues proposées, dans l'ordre du menu. `pays` est écrit dans la langue du pays. */
export const LANGUES = [
  { code: "fr", pays: "France", locale: "fr-FR", textes: fr },
  { code: "en", pays: "United Kingdom", locale: "en-GB", textes: en },
];

export const LANGUE_DEFAUT = "fr";
const STORAGE_KEY = "mordheim-langue";

let current = LANGUE_DEFAUT;

function find(code) {
  return LANGUES.find((l) => l.code === code);
}

/** Langue choisie par le visiteur lors d'une visite précédente, sinon le français. */
export function detectLang() {
  try {
    const saved = globalThis.localStorage?.getItem(STORAGE_KEY);
    if (find(saved)) return saved;
  } catch {
    // Stockage indisponible (navigation privée…) : on continue sans.
  }
  return LANGUE_DEFAUT;
}

export function getLang() {
  return current;
}

export function getLocale() {
  return find(current).locale;
}

export function setLang(code, { remember = true } = {}) {
  if (!find(code)) return;
  current = code;
  if (!remember) return;
  try {
    globalThis.localStorage?.setItem(STORAGE_KEY, code);
  } catch {
    // Sans stockage, la langue vaut pour la page en cours seulement.
  }
}

/** Texte traduit ; {nom} est remplacé par vars.nom. */
export function t(key, vars = {}) {
  const text = find(current).textes[key] ?? fr[key] ?? key;
  return text.replace(/\{(\w+)\}/g, (m, k) => (k in vars ? String(vars[k]) : m));
}
