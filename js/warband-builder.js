/**
 * warband-builder.js
 * -------------------
 * Création d'une bande « de zéro » dans l'application, sans passer par
 * New Recruit / BattleScribe.
 *
 * La bande créée est décrite par un petit modèle éditable (`creation`) :
 *   { version, nom, faction, tresorDepart, reglesBande[], figurines[] }
 * avec, pour chaque figurine :
 *   { id, categorie: "heros" | "hdm", type, coutGc, xp, stats{M..Cd},
 *     equipement[], competences[], regles[] }
 *
 * `buildRoster(creation)` le convertit en un JSON au format d'export
 * BattleScribe. Tout le reste de l'application (parser.js, emplacements,
 * personnalisation, suivi de partie, PDF) traite donc une bande créée
 * exactement comme une bande importée.
 *
 * Le dépôt ne contient pas les catalogues de règles (profils, coûts et
 * listes d'équipement par bande) : coûts et caractéristiques sont saisis
 * à la main. Seuls les noms de compétences/règles connus du dictionnaire
 * de traduction sont proposés en saisie automatique (leur texte français
 * est alors repris dans le PDF).
 */

import { RULE_TRANSLATIONS } from "./translations.js";

export const CREATION_VERSION = 1;
export const GENERATED_BY = "mordheim-epub";
export const TRESOR_DEPART = 500;
export const MAX_HEROS = 6;
export const STAT_KEYS = ["M", "CC", "CT", "F", "E", "PV", "I", "A", "Cd"];

/** Bandes proposées à la création (saisie libre possible en plus). */
export const FACTIONS = [
  "Mercenaires du Reikland",
  "Mercenaires de Middenheim",
  "Mercenaires de Marienburg",
  "Culte des Possédés",
  "Chasseurs de Sorcières",
  "Sœurs de Sigmar",
  "Morts-Vivants",
  "Skavens du Clan Eshin",
  "Orques & Gobelins",
  "Nains Chasseurs de Trésor",
  "Hommes-Bêtes",
  "Carnaval du Chaos",
  "Elfes Noirs",
  "Kislevites",
  "Pirates",
  "Mercenaires d'Averland",
  "Mercenaires d'Ostland",
  "École d'Artillerie de Nuln",
];

/** Équipement courant proposé en saisie automatique (saisie libre possible). */
export const EQUIPEMENT_COURANT = [
  "Dague", "Épée", "Hache", "Masse", "Marteau", "Lance", "Hallebarde", "Fléau",
  "Morgenstern", "Arme lourde", "Épée à deux mains", "Rapière", "Lance de cavalerie",
  "Arc court", "Arc", "Arc long", "Arbalète", "Arbalète de poing", "Fronde",
  "Javelots", "Couteaux de lancer", "Pistolet", "Paire de pistolets", "Pistolet de duel",
  "Arquebuse", "Tromblon", "Long fusil d'Hochland", "Armure légère", "Armure lourde",
  "Bouclier", "Rondache", "Casque", "Corde et grappin", "Lanterne", "Ail",
  "Herbes de soin", "Eau bénite", "Talisman de Sigmar", "Cheval", "Chien de guerre",
];

let idCounter = 0;
function newId() {
  idCounter += 1;
  const rand = Math.random().toString(36).slice(2, 8);
  return `c-${Date.now().toString(36)}-${idCounter}-${rand}`;
}

function defaultStats() {
  return { M: "4", CC: "3", CT: "3", F: "3", E: "3", PV: "1", I: "3", A: "1", Cd: "7" };
}

export function newCreation(nom = "", faction = "") {
  return {
    version: CREATION_VERSION,
    nom: nom.trim() || "Nouvelle bande",
    faction: faction.trim(),
    tresorDepart: TRESOR_DEPART,
    reglesBande: [],
    figurines: [],
  };
}

export function newFigurine(categorie = "heros") {
  return {
    id: newId(),
    categorie: categorie === "hdm" ? "hdm" : "heros",
    type: "",
    coutGc: 0,
    xp: 0,
    stats: defaultStats(),
    equipement: [],
    competences: [],
    regles: [],
  };
}

/** Copie d'une figurine avec un nouvel identifiant (ex. un 2e homme de main). */
export function duplicateFigurine(fig) {
  return { ...structuredClone(fig), id: newId() };
}

function toInt(v) {
  const n = Number(v);
  return Number.isFinite(n) ? Math.max(0, Math.round(n)) : 0;
}

function cleanList(list) {
  return (Array.isArray(list) ? list : [])
    .map((s) => String(s ?? "").trim())
    .filter(Boolean);
}

/** Valide/normalise un modèle de création (lecture d'un emplacement, import). */
export function normalizeCreation(c) {
  if (!c || typeof c !== "object") return null;
  const out = newCreation(String(c.nom || ""), String(c.faction || ""));
  out.tresorDepart = c.tresorDepart === undefined ? TRESOR_DEPART : toInt(c.tresorDepart);
  out.reglesBande = cleanList(c.reglesBande);
  out.figurines = (Array.isArray(c.figurines) ? c.figurines : [])
    .filter((f) => f && f.id)
    .map((f) => {
      const stats = defaultStats();
      for (const k of STAT_KEYS) {
        if (f.stats?.[k] !== undefined && f.stats[k] !== null) stats[k] = String(f.stats[k]).trim() || "-";
      }
      return {
        id: String(f.id),
        categorie: f.categorie === "hdm" ? "hdm" : "heros",
        type: String(f.type || "").trim(),
        coutGc: toInt(f.coutGc),
        xp: toInt(f.xp),
        stats,
        equipement: cleanList(f.equipement),
        competences: cleanList(f.competences),
        regles: cleanList(f.regles),
      };
    });
  return out;
}

// ---------------------------------------------------------------------
// Compétences et règles connues (saisie automatique)
// ---------------------------------------------------------------------

/** Noms français des règles/compétences du dictionnaire, triés. */
export function knownRuleNames() {
  const names = new Set();
  for (const val of Object.values(RULE_TRANSLATIONS)) {
    if (val?.name) names.add(val.name);
  }
  return [...names].sort((a, b) => a.localeCompare(b, "fr"));
}

let frToKey = null;
/**
 * Nom saisi → nom de règle à écrire dans le roster. Un nom français connu
 * est ramené à sa clé anglaise du dictionnaire, pour que parser.js
 * retrouve la description française.
 */
export function resolveRuleName(saisie) {
  const name = String(saisie || "").trim();
  if (!name || RULE_TRANSLATIONS[name]) return name;
  if (!frToKey) {
    frToKey = new Map();
    for (const [key, val] of Object.entries(RULE_TRANSLATIONS)) {
      const fr = val?.name?.toLowerCase();
      if (fr && !frToKey.has(fr)) frToKey.set(fr, key);
    }
  }
  return frToKey.get(name.toLowerCase()) || name;
}

// ---------------------------------------------------------------------
// Totaux et contrôles
// ---------------------------------------------------------------------

export function creationTotals(creation) {
  const figs = creation?.figurines || [];
  const cout = figs.reduce((s, f) => s + toInt(f.coutGc), 0);
  const heros = figs.filter((f) => f.categorie === "heros").length;
  const tresor = toInt(creation?.tresorDepart ?? TRESOR_DEPART);
  return {
    cout,
    tresor,
    reste: tresor - cout,
    heros,
    hdm: figs.length - heros,
    effectif: figs.length,
    // Valeur de bande Mordheim : 5 par figurine + 1 par point d'expérience.
    valeurDeBande: figs.reduce((s, f) => s + 5 + toInt(f.xp), 0),
  };
}

export function creationWarnings(creation) {
  const t = creationTotals(creation);
  const out = [];
  if (t.reste < 0) out.push(`Budget dépassé de ${-t.reste} co (trésor de départ : ${t.tresor} co).`);
  if (t.heros > MAX_HEROS) out.push(`${t.heros} héros : une bande en compte ${MAX_HEROS} au maximum.`);
  if (t.effectif && !t.heros) out.push("Aucun héros : il faut au moins un chef.");
  return out;
}

// ---------------------------------------------------------------------
// Conversion en export BattleScribe
// ---------------------------------------------------------------------

function cost(typeId, name, value) {
  return { name, typeId, value };
}

function ruleEntries(names, prefix) {
  return cleanList(names).map((n, i) => ({
    id: `${prefix}-r${i}`,
    name: resolveRuleName(n),
    description: "",
  }));
}

function figurineSelection(fig) {
  const isHero = fig.categorie === "heros";
  const type = fig.type || (isHero ? "Héros" : "Homme de main");
  const selections = [
    { id: `${fig.id}-xp`, name: "Experience", number: toInt(fig.xp), type: "upgrade" },
  ];
  const equipement = cleanList(fig.equipement);
  if (equipement.length) {
    selections.push({
      id: `${fig.id}-eq`,
      name: "Équipement",
      type: "upgrade",
      selections: equipement.map((nom, i) => ({ id: `${fig.id}-eq${i}`, name: nom, number: 1, type: "upgrade" })),
    });
  }
  const competences = cleanList(fig.competences);
  if (competences.length) {
    selections.push({
      id: `${fig.id}-cp`,
      name: "Compétences",
      type: "upgrade",
      selections: competences.map((nom, i) => ({
        id: `${fig.id}-cp${i}`,
        name: nom,
        number: 1,
        type: "upgrade",
        rules: ruleEntries([nom], `${fig.id}-cp${i}`),
      })),
    });
  }
  return {
    id: fig.id,
    name: type,
    number: 1,
    type: isHero ? "model" : "unit",
    categories: [{ id: `${fig.id}-cat`, name: isHero ? "Héros" : "Hommes de main", primary: true }],
    costs: [cost("points", " gc", toInt(fig.coutGc)), cost("wb-rating", " Warband Rating", 5 + toInt(fig.xp))],
    profiles: [
      {
        id: `${fig.id}-p`,
        // « Profil » plutôt que le type : parser.js écarte les profils dont le nom contient « max ».
        name: "Profil",
        typeName: "Figurine",
        characteristics: STAT_KEYS.map((k) => ({ name: k, $text: String(fig.stats?.[k] ?? "-") })),
      },
    ],
    rules: ruleEntries(fig.regles, `${fig.id}-rg`),
    selections,
  };
}

/** Modèle de création → JSON au format d'export BattleScribe. */
export function buildRoster(creation) {
  const c = normalizeCreation(creation) || newCreation();
  const t = creationTotals(c);
  const selections = [
    {
      id: "magot",
      name: "Magot",
      type: "upgrade",
      selections: [{ id: "magot-or", name: "Or", number: Math.max(0, t.reste), type: "upgrade" }],
    },
  ];
  if (c.reglesBande.length) {
    selections.push({
      id: "regles-bande",
      name: "Règles Spéciales",
      type: "upgrade",
      rules: ruleEntries(c.reglesBande, "bande"),
    });
  }
  // Héros d'abord, puis hommes de main, dans l'ordre de saisie.
  const ordered = [
    ...c.figurines.filter((f) => f.categorie === "heros"),
    ...c.figurines.filter((f) => f.categorie === "hdm"),
  ];
  for (const fig of ordered) selections.push(figurineSelection(fig));

  return {
    roster: {
      id: "bande-creee",
      name: c.nom,
      generatedBy: GENERATED_BY,
      gameSystemName: "Mordheim",
      costs: [cost("points", " gc", t.cout), cost("wb-rating", " Warband Rating", t.valeurDeBande)],
      costLimits: [cost("points", " gc", t.tresor)],
      forces: [
        {
          id: "force",
          name: "Bande",
          catalogueName: c.faction,
          rules: [],
          selections,
        },
      ],
    },
  };
}
