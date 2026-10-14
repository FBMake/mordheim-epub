/**
 * warband-builder.js
 * -------------------
 * Création d'une bande « de zéro » dans l'application, sans passer par
 * New Recruit / BattleScribe.
 *
 * La bande créée est décrite par un petit modèle éditable (`creation`) :
 *   { version, nom, faction, tresorDepart, reglesBande[], figurines[] }
 * avec, pour chaque figurine :
 *   { id, categorie: "heros" | "hdm", type, coutGc, xp, xpDepart, stats{M..Cd},
 *     nombre, surcout, progressions[],
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
import { enAnglais, loc, locBande, locGuerrier, nomsReglesAnglais, regleAnglaise } from "./donnees-langue.js";

export const CREATION_VERSION = 1;
export const GENERATED_BY = "mordheim-epub";
export const TRESOR_DEPART = 500;
export const MAX_HEROS = 6;
/** Un groupe d'hommes de main compte de 1 à 5 figurines identiques. */
export const MAX_GROUPE = 5;
/** Une recrue qui rejoint un groupe existant coûte 2 co de plus par point d'expérience du groupe. */
export const SURCOUT_XP_RECRUE = 2;
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

/**
 * Limites d'équipement du livre de règles (Constitution de la bande, « Armes
 * et armures ») : deux armes de corps à corps en plus de la dague gratuite,
 * deux armes de tir (une paire de pistolets compte pour une) et une armure.
 * Un bouclier (ou une rondache) et un casque : un seul de chaque, faute de
 * mieux. Le reste (divers) n'est pas limité.
 */
const LIMITES_EQUIPEMENT = { corps: 2, tir: 2, armure: 1, bouclier: 1, casque: 1 };

/** Emplacement d'un objet de la liste d'un guerrier (null : objet libre ou inconnu). */
export function emplacementEquipement(guerrier, nom) {
  if (nom === "Dague gratuite") return null;
  const cat = (guerrier?.equipement || []).find((c) => c.objets.some((o) => o.nom === nom));
  if (!cat) return null;
  if (cat.categorie === "Armes de corps à corps") return "corps";
  if (cat.categorie === "Armes de tir") return "tir";
  if (cat.categorie !== "Armures") return null;
  if (nom === "Casque") return "casque";
  if (nom === "Bouclier" || nom === "Rondache") return "bouclier";
  return "armure";
}

const ARMES_DEUX_MAINS = new Set(["Arme lourde", "Épée à deux mains", "Hallebarde", "Fléau", "Pique"]);
const BOUCLIERS = new Set(["Bouclier", "Rondache"]);
const PROTECTIONS = new Set(["Bouclier", "Rondache", "Casque", "Armure légère", "Armure lourde", "Armure en gromril"]);

/**
 * Une règle ou une compétence de la figurine (y compris gagnée plus tard)
 * l'autorise-t-elle à porter un bouclier avec une arme à deux mains ? On
 * cherche dans sa description une phrase qui cite les deux sans négation.
 */
export function autoriseDeuxMainsBouclier(fig) {
  return [...(fig?.regles || []), ...(fig?.competences || [])].some((nom) =>
    (descriptionRegle(nom) || "")
      .split(/[.;]/)
      .some(
        (phrase) =>
          /armes? à deux mains|arme lourde/i.test(phrase) &&
          /bouclier/i.test(phrase) &&
          !/\b(ne|n'|sans|pas)\b/i.test(phrase)
      )
  );
}

/**
 * Combinaisons permises mais à signaler (pas bloquées) : clés i18n
 * `equipement.alerte.*`. Une arme à deux mains rend le bouclier inutile au
 * corps à corps (il garde son +1 contre le tir) ; la morgenstern ne
 * s'utilise pas avec une rondache ; armure lourde et bouclier coûtent 1 en
 * Mouvement ; le boulet et chaîne (encombrant) ne laisse rien d'autre que
 * les champignons fous ; un sorcier ne lance pas de sort avec une armure, un
 * bouclier, un casque ou une rondache (les prières de Sigmar le peuvent).
 */
export function avertissementsEquipement(fig) {
  const eq = fig?.equipement || [];
  const out = [];
  if (eq.some((e) => ARMES_DEUX_MAINS.has(e)) && eq.some((e) => BOUCLIERS.has(e)) && !autoriseDeuxMainsBouclier(fig)) {
    out.push("deuxMains");
  }
  if (eq.includes("Morgenstern") && eq.includes("Rondache")) out.push("morgenstern");
  if (eq.includes("Armure lourde") && eq.includes("Bouclier")) out.push("armureLourdeBouclier");
  const sorcier = [...(fig?.regles || []), ...(fig?.competences || [])].some((r) => /^Sorcier\b/.test(r));
  if (sorcier && eq.some((e) => PROTECTIONS.has(e))) out.push("sorcier");
  if (eq.includes("Boulet et chaîne") && eq.some((e) => e !== "Boulet et chaîne" && e !== "Champignons fous")) {
    out.push("encombrant");
  }
  return out;
}

/** Effet de l'équipement sur le profil : armure lourde et bouclier, -1 en Mouvement. */
export function malusEquipement(fig) {
  const eq = fig?.equipement || [];
  return eq.includes("Armure lourde") && eq.includes("Bouclier") ? { M: -1 } : {};
}

/**
 * Pourquoi un objet ne peut plus être ajouté à l'équipement (clé de l'emplacement
 * plein, ou "dagueGratuite" pour une deuxième dague gratuite), null s'il peut l'être.
 */
export function equipementRefuse(guerrier, equipement, nom) {
  if (nom === "Dague gratuite" && equipement.includes(nom)) return "dagueGratuite";
  const emplacement = emplacementEquipement(guerrier, nom);
  if (!emplacement) return null;
  const pris = equipement.filter((e) => emplacementEquipement(guerrier, e) === emplacement).length;
  return pris >= LIMITES_EQUIPEMENT[emplacement] ? emplacement : null;
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
    // Brouillon : la bande est encore en cours de recrutement (bouton « Créer » pas encore appuyé).
    brouillon: false,
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
  fig.xpDepart = g.xp;
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
    // Expérience au recrutement : seuls les seuils franchis ensuite donnent une progression.
    xpDepart: 0,
    stats: defaultStats(),
    equipement: [],
    competences: [],
    regles: [],
    // Hommes de main : taille du groupe, et ce que les recrues ajoutées en
    // campagne ont coûté en plus du prix de base (expérience du groupe).
    nombre: 1,
    surcout: 0,
    // Jets de progression déjà faits : [{ des: [d1, d2], resultat }] ; un héros
    // note aussi le seuil d'expérience atteint et la compétence choisie
    // ({ seuil, resultat: "competence", competence }), voir progression.js.
    progressions: [],
  };
}

/**
 * Coût d'une nouvelle recrue dans un groupe d'hommes de main existant.
 * @param {number} [xp] - expérience actuelle du groupe (suivi de partie), sinon celle de la fiche
 */
export function coutRecrue(fig, xp = fig.xp) {
  return toInt(fig.coutGc) + SURCOUT_XP_RECRUE * toInt(xp);
}

/**
 * Ajoute une recrue à un groupe d'hommes de main pendant la campagne : elle
 * reçoit l'équipement et l'expérience du groupe, et paie le surcoût
 * d'expérience. Renvoie le prix payé, ou null si le groupe est complet.
 */
export function recruterDansGroupe(fig, xp = fig.xp) {
  if (fig.categorie !== "hdm" || toInt(fig.nombre) >= MAX_GROUPE) return null;
  const prix = coutRecrue(fig, xp);
  fig.nombre = toInt(fig.nombre) + 1;
  fig.surcout = toInt(fig.surcout) + SURCOUT_XP_RECRUE * toInt(xp);
  return prix;
}

/** Règles d'un homme de main : celles de son guerrier dans les données, non modifiables. */
function reglesHommeDeMain(f) {
  const g = getGuerrier(f.modele);
  return g ? g.regles.map((r) => r.nom) : cleanList(f.regles);
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
  out.brouillon = c.brouillon === true;
  out.figurines = (Array.isArray(c.figurines) ? c.figurines : [])
    .filter((f) => f && f.id)
    .map((f) => {
      const stats = defaultStats();
      for (const k of STAT_KEYS) {
        if (f.stats?.[k] !== undefined && f.stats[k] !== null) stats[k] = String(f.stats[k]).trim() || "-";
      }
      const hdm = f.categorie === "hdm";
      return {
        id: String(f.id),
        modele: getGuerrier(f.modele) ? f.modele : "",
        categorie: hdm ? "hdm" : "heros",
        type: String(f.type || "").trim(),
        coutGc: toInt(f.coutGc),
        xp: toInt(f.xp),
        // Bande enregistrée avant ce champ : XP du profil des données, sinon XP actuelle (aucune progression rétroactive).
        xpDepart: toInt(f.xpDepart ?? getGuerrier(f.modele)?.xp ?? f.xp),
        stats,
        equipement: cleanList(f.equipement),
        // Les hommes de main n'apprennent pas de compétences et gardent les règles de leur profil.
        competences: hdm ? [] : cleanList(f.competences),
        regles: hdm ? reglesHommeDeMain(f) : cleanList(f.regles),
        nombre: hdm ? Math.max(1, toInt(f.nombre ?? 1)) : 1,
        surcout: hdm ? toInt(f.surcout) : 0,
        progressions: (Array.isArray(f.progressions) ? f.progressions : [])
          .filter((p) => Array.isArray(p?.des) && p.des.length === 2)
          .map((p) => ({
            des: p.des.map((d) => Math.min(6, Math.max(1, toInt(d)))),
            resultat: String(p.resultat || ""),
            ...(p.seuil ? { seuil: toInt(p.seuil) } : {}),
            ...(p.competence ? { competence: String(p.competence) } : {}),
          })),
      };
    });
  return out;
}

// ---------------------------------------------------------------------
// Compétences et règles connues (saisie automatique)
// ---------------------------------------------------------------------

/** Noms des règles/compétences du dictionnaire dans la langue de l'interface, triés. */
export function knownRuleNames() {
  if (enAnglais()) return nomsReglesAnglais();
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
  // Nom anglais d'une règle de bande (saisie en anglais) → son nom français dans les données.
  const fr = nomFrancaisRegle(name);
  if (fr) return fr;
  if (!frToKey) {
    frToKey = new Map();
    for (const [key, val] of Object.entries(RULE_TRANSLATIONS)) {
      const fr = val?.name?.toLowerCase();
      if (fr && !frToKey.has(fr)) frToKey.set(fr, key);
    }
  }
  return frToKey.get(name.toLowerCase()) || name;
}

/**
 * Explication d'une règle ou compétence (nom français, anglais ou clé du
 * dictionnaire) dans la langue de l'interface, ou "" si elle est inconnue.
 */
export function descriptionRegle(nom) {
  const n = String(nom || "").trim();
  if (!n) return "";
  if (enAnglais()) {
    const en = regleAnglaise(n) || regleAnglaise(resolveRuleName(n));
    if (en?.resume) return en.resume;
  }
  const key = resolveRuleName(n);
  return resumes.get(n) || resumes.get(key) || RULE_TRANSLATIONS[key]?.description || "";
}

/** Clé de comparaison d'une règle ou compétence, quelle que soit la langue de saisie (« Esquive » = « Dodge »). */
export function cleRegle(nom) {
  return resolveRuleName(nom).toLowerCase();
}

/** La liste contient-elle déjà cette règle ou compétence ? */
export function contientRegle(list, nom) {
  const cle = cleRegle(nom);
  return (list || []).some((n) => cleRegle(n) === cle);
}

// ---------------------------------------------------------------------
// Règles qui empêchent de gagner de l'expérience (animaux, démons, morts sans esprit…)
// ---------------------------------------------------------------------

const TEXTE_SANS_XP =
  /ne\s+gagnen?t?\s+(jamais|pas)\s+(d['’]|de\s+l['’])exp[ée]rience|never\s+gains?\s+(any\s+)?experience|gains?\s+no\s+experience|do(es)?\s+not\s+gain\s+(any\s+)?experience/i;
// « Garde du corps » est une compétence du Marchand : c'est son garde, pas lui, qui ne gagne pas d'expérience.
const PAS_SANS_XP = new Set(["Guardian"]);

/** Le texte d'une règle dit-il que la figurine ne gagne jamais d'expérience ? */
export function texteSansXp(texte) {
  return TEXTE_SANS_XP.test(String(texte || ""));
}

/** La règle (nom français, anglais ou clé du dictionnaire) empêche-t-elle de gagner de l'expérience ? */
export function regleSansXp(nom) {
  const n = String(nom || "").trim();
  if (!n) return false;
  if (resumes.has(n)) return texteSansXp(resumes.get(n));
  const key = resolveRuleName(n);
  if (PAS_SANS_XP.has(key)) return false;
  if (resumes.has(key)) return texteSansXp(resumes.get(key));
  return texteSansXp(RULE_TRANSLATIONS[key]?.description) || texteSansXp(regleAnglaise(n)?.resume);
}

/** Première règle de la figurine qui l'empêche de gagner de l'expérience, ou null. */
export function regleBloquantXp(fig) {
  return (fig?.regles || []).find(regleSansXp) || null;
}

/** Règles connues des guerriers d'une bande des données (pour les choisir dans une liste), sans doublon. */
export function reglesDeLaBande(bande) {
  const out = new Map();
  for (const r of [...(bande?.regles || []), ...(bande?.guerriers || []).flatMap((g) => g.regles)]) {
    if (!out.has(r.nom)) out.set(r.nom, r);
  }
  return [...out.values()];
}

let frParCle = null;
function nomFrancaisRegle(name) {
  if (!frParCle) {
    frParCle = new Map();
    for (const b of BANDES) {
      for (const r of [...b.regles, ...b.guerriers.flatMap((g) => g.regles)]) {
        const en = regleAnglaise(r.nom);
        if (en && !frParCle.has(en.nom.toLowerCase())) frParCle.set(en.nom.toLowerCase(), r.nom);
      }
    }
  }
  return frParCle.get(name.toLowerCase()) || null;
}

// ---------------------------------------------------------------------
// Totaux et contrôles
// ---------------------------------------------------------------------

/** Nombre de figurines d'une entrée : 1 pour un héros, la taille du groupe pour des hommes de main. */
export function tailleGroupe(f) {
  return f?.categorie === "hdm" ? Math.max(1, toInt(f.nombre ?? 1)) : 1;
}

/** Coût total d'une entrée : prix par figurine × taille du groupe, plus le surcoût des recrues. */
export function coutEntree(f) {
  return toInt(f.coutGc) * tailleGroupe(f) + (f?.categorie === "hdm" ? toInt(f.surcout) : 0);
}

export function creationTotals(creation) {
  const figs = creation?.figurines || [];
  const cout = figs.reduce((s, f) => s + coutEntree(f), 0);
  const heros = figs.filter((f) => f.categorie === "heros").length;
  const effectif = figs.reduce((s, f) => s + tailleGroupe(f), 0);
  const tresor = toInt(creation?.tresorDepart ?? TRESOR_DEPART);
  return {
    cout,
    tresor,
    reste: tresor - cout,
    heros,
    hdm: effectif - heros,
    effectif,
    // Valeur de bande Mordheim : 5 par figurine + 1 par point d'expérience (chaque membre d'un groupe a l'XP du groupe).
    valeurDeBande: figs.reduce((s, f) => s + (5 + toInt(f.xp)) * tailleGroupe(f), 0),
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
    out.push(t("alerte.effectif", { n: tot.effectif, bande: locBande(bande), max: bande.effectifMax }));
  }
  const figs = creation.figurines || [];
  for (const g of bande.guerriers) {
    const n = figs.filter((f) => f.modele === g.id).reduce((s, f) => s + tailleGroupe(f), 0);
    if (g.max !== null && n > g.max) out.push(t("alerte.max", { n, nom: locGuerrier(g), max: g.max }));
    if (g.min && n < g.min && figs.length) out.push(t("alerte.min", { nom: locGuerrier(g), min: g.min }));
  }
  for (const f of figs) {
    if (tailleGroupe(f) > MAX_GROUPE) {
      out.push(t("alerte.groupe", { nom: loc(f.type) || t("categorie.hdm"), n: tailleGroupe(f), max: MAX_GROUPE }));
    }
    const g = getGuerrier(f.modele);
    if (!g) continue;
    const horsListe = f.equipement.filter((nom) => prixEquipement(g, nom) === null);
    if (horsListe.length) {
      out.push(t("alerte.horsListe", { nom: loc(f.type) || locGuerrier(g), liste: horsListe.map(loc).join(", ") }));
    }
    const competences = competencesHorsListe(f, g);
    if (competences.length) {
      out.push(t("alerte.competences", { nom: f.type || g.nom, liste: competences.join(", ") }));
    }
    for (const a of avertissementsEquipement(f)) {
      out.push(`${loc(f.type) || locGuerrier(g)} · ${t(`equipement.alerte.${a}`)}`);
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
  return cleanList(names).map((n, i) => {
    const name = resumes.has(n) ? n : resolveRuleName(n);
    return { id: `${prefix}-r${i}`, name, description: resumes.get(name) || "" };
  });
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
    number: tailleGroupe(fig),
    type: isHero ? "model" : "unit",
    categories: [{ id: `${fig.id}-cat`, name: isHero ? "Héros" : "Hommes de main", primary: true }],
    costs: [
      cost("points", " gc", coutEntree(fig)),
      cost("wb-rating", " Warband Rating", (5 + toInt(fig.xp)) * tailleGroupe(fig)),
    ],
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
