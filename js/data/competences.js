/**
 * competences.js
 * ---------------
 * Listes de compétences de Mordheim et maximums de caractéristiques par
 * race, pour trier ce qu'un guerrier peut apprendre.
 *
 *  - Les listes sont nommées comme dans js/data/bandes.js (champ
 *    `competences` de chaque guerrier : « Combat », « Spéciales (Nains) »…).
 *    Le nom anglais sert de clé dans RULE_TRANSLATIONS (translations.js),
 *    d'où viennent le nom français et le résumé quand ils y figurent.
 *  - Seuls les héros apprennent des compétences ; les hommes de main n'y
 *    ont pas accès (sauf « Ce gars a du talent », qui en fait un héros).
 *  - Les maximums sont ceux du livre de règles (profils maximums par race).
 *    Les animaux et les morts sans esprit ne progressent pas : leur profil
 *    de départ est leur maximum.
 */

import { RULE_TRANSLATIONS } from "../translations.js";
import { COMPETENCES_SUPPLEMENTS, RACES_SUPPLEMENTS } from "./bandes.js";

// condition : "chef" (règle Chef), "sorcier" (règle Sorcier…), "profane" (ni répurgateur
// ni sœur de Sigmar, interdits de Savoir arcanique), ou un id de guerrier.
const LISTES = {
  Combat: [
    ["Strike To Injure"],
    ["Combat Master"],
    ["Weapons Training", "Maniement des armes", "Peut utiliser toute arme de corps à corps qu'il trouve, pas seulement celles de sa liste d'équipement."],
    ["Web of Steel"],
    ["Expert Swordsman"],
    ["Step Aside"],
  ],
  Tir: [
    ["Quick Shot"],
    ["Pistolier"],
    ["Eagle Eyes"],
    ["Weapons Expert"],
    ["Nimble"],
    ["Trick Shooter"],
    ["Hunter"],
    ["Knife-Fighter", "Lanceur de couteaux", "Peut lancer jusqu'à trois couteaux de lancer par phase de tir, répartis entre les cibles à portée."],
  ],
  Érudition: [
    ["Battle Tongue", null, null, "chef"],
    ["Sorcery", null, null, "sorcier"],
    ["Streetwise"],
    ["Haggle"],
    ["Arcane Lore", null, null, "profane"],
    ["Wyrdstone Hunter"],
    ["Warrior Wizard", null, null, "sorcier"],
  ],
  Force: [
    ["Mighty Blow"],
    ["Pit Fighter"],
    ["Resilient"],
    ["Fearsome"],
    ["Strongman"],
    ["Unstoppable Charge"],
  ],
  Vitesse: [
    ["Leap"],
    ["Sprint"],
    ["Acrobat"],
    ["Lightning Reflexes"],
    ["Jump Up"],
    ["Dodge"],
    ["Scale Sheer Surfaces"],
  ],
  "Spéciales (Skavens)": [
    ["Black Hunger"],
    ["Tail Fighting"],
    ["Wall Runner"],
    ["Infiltration"],
    ["Art of Silent Death"],
  ],
  "Spéciales (Hommes-bêtes)": [
    ["Horned One"],
    ["Bellowing Battle-Roar", "Rugissement guerrier", ""],
    ["Manhunter", "Chasseur d'hommes", ""],
    ["Ambush", "Embuscade", ""],
  ],
  "Spéciales (Sœurs de Sigmar)": [
    ["Sign of Sigmar"],
    ["Protection of Sigmar"],
    ["Utter Determination", null, null, "soeurs/sigmarite-matriarch"],
    ["Righteous Fury"],
    ["Absolute Faith"],
  ],
  "Spéciales (Nains)": [
    ["Master of Blades", "Maître des lames", ""],
    ["Extra Tough"],
    ["Resource Hunter"],
    ["True Grit"],
    ["Thick Skull"],
  ],
  "Spéciales (Orques)": [
    ["Waaagh!"],
    ["Ere We Go!", "En avant !", ""],
    ["Da Cunnin' Plan", "Le plan rusé", ""],
    ["'Ard Head", "Tête dure", ""],
  ],
  "Spéciales (Tueurs de trolls)": [
    ["Ferocious Charge"],
    ["Monster Slayer"],
    ["Berserker"],
  ],
};

/** Listes communes, proposées à un héros saisi à la main (sans guerrier des données). */
export const LISTES_COMMUNES = ["Combat", "Tir", "Érudition", "Force", "Vitesse"];

const translations = new Map(Object.entries(RULE_TRANSLATIONS).map(([k, v]) => [k.toLowerCase(), v]));

/** { [liste]: [{ en, nom, resume, condition }] } */
export const COMPETENCES = Object.fromEntries(
  Object.entries({ ...LISTES, ...COMPETENCES_SUPPLEMENTS }).map(([liste, items]) => [
    liste,
    items.map(([en, nom, resume, condition = null]) => {
      const tr = translations.get(en.toLowerCase());
      return { en, nom: nom || tr?.name || en, resume: resume ?? tr?.description ?? "", condition };
    }),
  ])
);

// ---------------------------------------------------------------------
// Maximums de caractéristiques par race
// ---------------------------------------------------------------------

const P = (M, CC, CT, F, E, PV, I, A, Cd) => ({ M, CC, CT, F, E, PV, I, A, Cd });

export const RACES = {
  humain: { nom: "Humain", max: P(4, 6, 6, 4, 4, 3, 6, 4, 9) },
  possede: { nom: "Possédé", max: P(6, 8, 0, 6, 6, 4, 7, 5, 10) },
  vampire: { nom: "Vampire", max: P(6, 8, 6, 7, 6, 4, 9, 4, 10) },
  goule: { nom: "Goule", max: P(5, 5, 2, 4, 5, 3, 5, 5, 7) },
  skaven: { nom: "Skaven", max: P(6, 6, 6, 4, 4, 3, 7, 4, 7) },
  nain: { nom: "Nain", max: P(3, 7, 6, 4, 5, 3, 5, 4, 10) },
  orque: { nom: "Orque", max: P(4, 6, 6, 4, 5, 3, 5, 4, 9) },
  gobelin: { nom: "Gobelin", max: P(4, 5, 6, 4, 4, 3, 6, 4, 7) },
  hommeBete: { nom: "Homme-bête", max: P(5, 7, 6, 4, 5, 4, 6, 4, 9) },
  halfling: { nom: "Halfling", max: P(4, 5, 7, 3, 3, 3, 9, 4, 10) },
  ogre: { nom: "Ogre", max: P(6, 5, 4, 5, 5, 5, 6, 5, 9) },
  // Races des bandes des suppléments (tools/bsdata/supplements/).
  ...RACES_SUPPLEMENTS,
};

/** Guerriers qui ne gagnent pas d'expérience : leur profil de départ est leur maximum. */
const SANS_PROGRESSION = new Set([
  "repurgateurs/warhounds",
  "morts-vivants/dire-wolves",
  "morts-vivants/zombies",
  "skavens/rat-ogre",
  "skavens/giant-rats",
  "orques/troll",
  "orques/cave-squig",
  "hommes-betes/warhounds-of-chaos",
  "carnaval/plague-cart",
  "carnaval/nurglings",
  "kislevites/trained-bear",
]);

// Race des guerriers qui ne sont pas humains (tous les autres le sont, sauf
// le minotaure et le centigor, dont le livre de base ne donne pas le maximum).
const RACE_PAR_GUERRIER = {
  "possedes/possessed": "possede",
  "possedes/beastmen": "hommeBete",
  "morts-vivants/vampire": "vampire",
  "morts-vivants/ghouls": "goule",
  "skavens/assassin-adept": "skaven",
  "skavens/eshin-sorcerer": "skaven",
  "skavens/black-skaven": "skaven",
  "skavens/night-runners": "skaven",
  "skavens/verminkin": "skaven",
  "nains/noble": "nain",
  "nains/engineer": "nain",
  "nains/troll-slayer": "nain",
  "nains/clansmen": "nain",
  "nains/thunderers": "nain",
  "nains/beardlings": "nain",
  "orques/orc-boss": "orque",
  "orques/orc-big-uns": "orque",
  "orques/orc-shaman": "orque",
  "orques/orc-boyz": "orque",
  "orques/goblin-warriors": "gobelin",
  "hommes-betes/beastmen-chieftain": "hommeBete",
  "hommes-betes/beastmen-shaman": "hommeBete",
  "hommes-betes/bestigors": "hommeBete",
  "hommes-betes/gor": "hommeBete",
  "hommes-betes/ungor": "hommeBete",
  "hommes-betes/minotaur": null,
  "hommes-betes/centigors": null,
  "carnaval/plague-bearers": null,
  "averland/halflings-scouts": "halfling",
  "ostland/ogre": "ogre",
};

/** Clé de race d'un guerrier des données (humain, nain, skaven…), null si inconnue. */
export function raceGuerrier(guerrier) {
  if (!guerrier) return null;
  // Les guerriers des suppléments portent leur race ; ceux de BSData passent par la table.
  if ("race" in guerrier) return guerrier.race;
  return guerrier.id in RACE_PAR_GUERRIER ? RACE_PAR_GUERRIER[guerrier.id] : "humain";
}

/**
 * Maximums de caractéristiques d'un guerrier des données.
 * @returns {{ race: string, max: Object<string, number> } | null}
 *   race : nom affichable ; null si inconnu (figurine saisie à la main…).
 */
export function maximumsGuerrier(guerrier) {
  if (!guerrier) return null;
  if (SANS_PROGRESSION.has(guerrier.id) || guerrier.sansProgression) {
    const max = {};
    for (const [k, v] of Object.entries(guerrier.profil || {})) {
      const n = Number(v);
      if (v !== "" && Number.isFinite(n)) max[k] = n;
    }
    return { race: null, sansProgression: true, max };
  }
  const race = RACES[raceGuerrier(guerrier)];
  return race ? { race: race.nom, sansProgression: false, max: { ...race.max } } : null;
}

/** Caractéristiques d'une figurine au-dessus du maximum : [{ stat, valeur, max }]. */
export function depassementsMaximum(fig, guerrier) {
  const m = maximumsGuerrier(guerrier);
  if (!m) return [];
  const out = [];
  for (const [stat, max] of Object.entries(m.max)) {
    const valeur = Number(fig.stats?.[stat]);
    if (Number.isFinite(valeur) && valeur > max) out.push({ stat, valeur, max });
  }
  return out;
}

// ---------------------------------------------------------------------
// Compétences accessibles
// ---------------------------------------------------------------------

function conditionRemplie(condition, fig) {
  if (!condition) return true;
  const regles = fig.regles || [];
  if (condition === "chef") return regles.includes("Chef");
  if (condition === "sorcier") return regles.some((r) => r.startsWith("Sorcier"));
  if (condition === "profane") return !/^(repurgateurs|soeurs)\//.test(fig.modele || "");
  return fig.modele === condition;
}

/**
 * Compétences qu'une figurine peut apprendre, par liste.
 * Les hommes de main n'ont accès à aucune liste.
 * @returns {Array<{ liste: string, competences: Array<{ nom, en, resume, condition, acquise, permise }> }>}
 */
export function competencesAccessibles(fig, guerrier) {
  if (fig.categorie !== "heros") return [];
  // Un homme de main promu (« Ce gars a du talent ») n'a pas de listes dans les données : listes communes.
  // Un franc-tireur a les siennes, comme un héros.
  const listes = guerrier && guerrier.categorie !== "hdm" ? guerrier.competences : LISTES_COMMUNES;
  const acquises = new Set((fig.competences || []).map((c) => c.toLowerCase()));
  return listes
    .filter((liste) => COMPETENCES[liste])
    .map((liste) => ({
      liste,
      competences: COMPETENCES[liste].map((c) => ({
        ...c,
        acquise: acquises.has(c.nom.toLowerCase()) || acquises.has(c.en.toLowerCase()),
        permise: conditionRemplie(c.condition, fig),
      })),
    }));
}

/** Compétences d'une figurine qui ne figurent dans aucune de ses listes. */
export function competencesHorsListe(fig, guerrier) {
  if (!guerrier) return [];
  const permises = new Set();
  for (const { competences } of competencesAccessibles(fig, guerrier)) {
    for (const c of competences) {
      if (!c.permise) continue;
      permises.add(c.nom.toLowerCase());
      permises.add(c.en.toLowerCase());
    }
  }
  return (fig.competences || []).filter((c) => !permises.has(c.toLowerCase()));
}
