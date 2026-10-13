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
 * Pour les bandes décrites dans js/data/bandes.js (données BSData
 * traduites), `creation.bandeId` et `figurine.modele` renvoient à la bande
 * et au guerrier recrutés : profil, coût, listes d'équipement et
 * effectifs sont alors proposés et contrôlés. Pour une autre faction, tout
 * se saisit à la main.
 */

import { RULE_TRANSLATIONS } from "./translations.js";
import { BANDES } from "./data/bandes.js";
import { competencesHorsListe, depassementsMaximum } from "./data/competences.js";
import { t } from "./i18n.js";

export const CREATION_VERSION = 1;
export const GENERATED_BY = "mordheim-epub";
export const TRESOR_DEPART = 500;
export const MAX_HEROS = 6;
export const STAT_KEYS = ["M", "CC", "CT", "F", "E", "PV", "I", "A", "Cd"];

export { BANDES };

/** Autres factions proposées à la création, sans données de règles (saisie manuelle). */
export const FACTIONS = [
  "Amazones",
  "Caravane de marchands arabéens",
  "Chevaliers de Bretonnie",
  "École d'Artillerie de Nuln",
  "Elfes Noirs",
  "Gardiens des tombes",
  "Gladiateurs",
  "Gobelins de la forêt",
  "Guerriers des Ombres",
  "Hommes-Lézards",
  "Hors-la-loi de la forêt de Stirwood",
  "Mercenaires de Miragliano",
  "Nains du Chaos",
  "Norses",
  "Pirates",
  "Skavens du Clan Pestilens",
].sort((a, b) => a.localeCompare(b, "fr"));

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

// ---------------------------------------------------------------------
// Données des bandes (js/data/bandes.js)
// ---------------------------------------------------------------------

const bandesById = new Map(BANDES.map((b) => [b.id, b]));
const guerriersById = new Map(BANDES.flatMap((b) => b.guerriers.map((g) => [g.id, g])));
// Résumés français des règles de bande et de guerrier, par nom français.
const resumes = new Map();
for (const b of BANDES) {
  for (const r of [...b.regles, ...b.guerriers.flatMap((g) => g.regles)]) {
    if (r.resume && !resumes.has(r.nom)) resumes.set(r.nom, r.resume);
  }
}

export function getBande(id) {
  return bandesById.get(id) || null;
}

export function getGuerrier(id) {
  return guerriersById.get(id) || null;
}

/** Prix d'un objet dans la liste d'équipement d'un guerrier (null si absent). */
export function prixEquipement(guerrier, nom) {
  for (const cat of guerrier?.equipement || []) {
    const objet = cat.objets.find((o) => o.nom === nom);
    if (objet) return objet.cout ?? 0;
  }
  return null;
}

/** Coût d'une figurine recrutée d'après les données : guerrier + équipement de sa liste. */
export function coutCalcule(fig) {
  const g = getGuerrier(fig.modele);
  if (!g) return null;
  return g.cout + (fig.equipement || []).reduce((s, nom) => s + (prixEquipement(g, nom) ?? 0), 0);
}

let idCounter = 0;
function newId() {
  idCounter += 1;
  const rand = Math.random().toString(36).slice(2, 8);
  return `c-${Date.now().toString(36)}-${idCounter}-${rand}`;
}

function defaultStats() {
  return { M: "4", CC: "3", CT: "3", F: "3", E: "3", PV: "1", I: "3", A: "1", Cd: "7" };
}

/**
 * @param {string} nom
 * @param {string} faction - nom libre, ou ignoré si `bandeId` désigne une bande connue
 * @param {string} [bandeId] - identifiant d'une bande de js/data/bandes.js
 */
export function newCreation(nom = "", faction = "", bandeId = "") {
  const bande = getBande(bandeId);
  return {
    version: CREATION_VERSION,
    nom: nom.trim() || "Nouvelle bande",
    faction: bande ? bande.nom : faction.trim(),
    bandeId: bande ? bande.id : "",
    tresorDepart: bande ? bande.tresor : TRESOR_DEPART,
    reglesBande: bande ? bande.regles.map((r) => r.nom) : [],
    figurines: [],
  };
}

/** Figurine recrutée d'après un guerrier des données (profil, coût, XP et règles repris). */
export function newFigurineFromModele(guerrierId) {
  const g = getGuerrier(guerrierId);
  if (!g) throw new Error(`Guerrier inconnu : ${guerrierId}`);
  const fig = newFigurine(g.categorie);
  fig.modele = g.id;
  fig.type = g.nom;
  fig.coutGc = g.cout;
  fig.xp = g.xp;
  for (const k of STAT_KEYS) fig.stats[k] = g.profil?.[k] || "-";
  fig.regles = g.regles.map((r) => r.nom);
  // Chaque guerrier a droit à une dague gratuite quand sa liste la prévoit.
  if (prixEquipement(g, "Dague gratuite") !== null) fig.equipement.push("Dague gratuite");
  return fig;
}

export function newFigurine(categorie = "heros") {
  return {
    id: newId(),
    modele: "",
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
  // Une bande inconnue des données (mise à jour retirée…) reste lisible en saisie manuelle.
  out.bandeId = getBande(c.bandeId) ? c.bandeId : "";
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
        modele: getGuerrier(f.modele) ? f.modele : "",
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
  for (const nom of resumes.keys()) names.add(nom);
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
  const tot = creationTotals(creation);
  const out = [];
  if (tot.reste < 0) out.push(t("alerte.budget", { depassement: -tot.reste, tresor: tot.tresor }));
  if (tot.heros > MAX_HEROS) out.push(t("alerte.tropHeros", { n: tot.heros, max: MAX_HEROS }));
  if (tot.effectif && !tot.heros) out.push(t("alerte.sansChef"));

  const bande = getBande(creation?.bandeId);
  if (!bande) return out;
  if (tot.effectif > bande.effectifMax) {
    out.push(t("alerte.effectif", { n: tot.effectif, bande: bande.nom, max: bande.effectifMax }));
  }
  const figs = creation.figurines || [];
  for (const g of bande.guerriers) {
    const n = figs.filter((f) => f.modele === g.id).length;
    if (g.max !== null && n > g.max) out.push(t("alerte.max", { n, nom: g.nom, max: g.max }));
    if (g.min && n < g.min && figs.length) out.push(t("alerte.min", { nom: g.nom, min: g.min }));
  }
  for (const f of figs) {
    const g = getGuerrier(f.modele);
    if (!g) continue;
    const horsListe = f.equipement.filter((nom) => prixEquipement(g, nom) === null);
    if (horsListe.length) {
      out.push(t("alerte.horsListe", { nom: f.type || g.nom, liste: horsListe.join(", ") }));
    }
    const competences = competencesHorsListe(f, g);
    if (competences.length) {
      out.push(t("alerte.competences", { nom: f.type || g.nom, liste: competences.join(", ") }));
    }
    for (const d of depassementsMaximum(f, g)) {
      out.push(t("alerte.maximum", { nom: f.type || g.nom, stat: t(`profil.${d.stat}`), valeur: d.valeur, max: d.max }));
    }
  }
  return out;
}

// ---------------------------------------------------------------------
// Conversion en export BattleScribe
// ---------------------------------------------------------------------

function cost(typeId, name, value) {
  return { name, typeId, value };
}

function ruleEntries(names, prefix) {
  // Règle issue des données de bande : on garde son nom français et son résumé.
  return cleanList(names).map((n, i) => ({
    id: `${prefix}-r${i}`,
    name: resumes.has(n) ? n : resolveRuleName(n),
    description: resumes.get(n) || "",
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
  const tot = creationTotals(c);
  const selections = [
    {
      id: "magot",
      name: "Magot",
      type: "upgrade",
      selections: [{ id: "magot-or", name: "Or", number: Math.max(0, tot.reste), type: "upgrade" }],
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
      costs: [cost("points", " gc", tot.cout), cost("wb-rating", " Warband Rating", tot.valeurDeBande)],
      costLimits: [cost("points", " gc", tot.tresor)],
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
