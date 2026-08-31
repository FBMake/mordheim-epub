/**
 * parser.js
 * ---------
 * Transforme un export JSON BattleScribe (roster Mordheim) en un modèle
 * normalisé, entièrement en français, prêt à être injecté dans les
 * gabarits EPUB (voir epub-builder.js).
 *
 * Ce fichier NE MODIFIE JAMAIS le JSON d'origine : il le lit et construit
 * un nouvel objet. Le fichier importé par l'utilisateur reste intact et
 * peut être téléchargé à nouveau depuis l'appli si besoin.
 */

import {
  isFrenchText,
  RULE_TRANSLATIONS,
  WEAPON_SPECIAL_TRANSLATIONS,
  NAME_TRANSLATIONS,
  VALUE_TRANSLATIONS,
  normalizeStatBump,
} from "./translations.js";

// Liste des passages qui n'ont pas pu être traduits automatiquement.
// Remplie pendant le parsing, exposée dans le modèle final pour être
// affichée à l'utilisateur (transparence plutôt que traduction inventée).
function makeReport() {
  return { untranslated: new Set() };
}

function markUntranslated(report, label) {
  if (label) report.untranslated.add(label);
}

// ---------------------------------------------------------------------
// 1) Construction du dictionnaire canonique des règles/compétences
//    (une entrée par "name", en français, valable pour tout le document)
// ---------------------------------------------------------------------
function buildCanonicalRuleDictionary(rosterRoot, report) {
  const byName = new Map(); // name -> [{description}]

  function walk(obj) {
    if (Array.isArray(obj)) {
      obj.forEach(walk);
      return;
    }
    if (obj && typeof obj === "object") {
      if (Array.isArray(obj.rules)) {
        for (const r of obj.rules) {
          if (!r || !r.name) continue;
          const list = byName.get(r.name) || [];
          list.push(r.description || "");
          byName.set(r.name, list);
        }
      }
      for (const key of Object.keys(obj)) walk(obj[key]);
    }
  }
  walk(rosterRoot);

  const dict = new Map(); // name -> { name(fr), description(fr) }
  for (const [name, descriptions] of byName.entries()) {
    const frVersion = descriptions.find((d) => isFrenchText(d));
    if (frVersion) {
      dict.set(name, { name, description: frVersion });
      continue;
    }
    if (RULE_TRANSLATIONS[name]) {
      dict.set(name, RULE_TRANSLATIONS[name]);
      continue;
    }
    // Aucune traduction connue : on garde l'anglais et on le signale.
    dict.set(name, { name, description: descriptions[0] || "" });
    markUntranslated(report, `Règle « ${name} »`);
  }
  return dict;
}

function lookupRule(dict, name) {
  return dict.get(name) || { name, description: "" };
}

function translateName(name) {
  if (!name) return name;
  return NAME_TRANSLATIONS[name] || name;
}

function translateValue(v) {
  if (!v) return v;
  return VALUE_TRANSLATIONS[v] || v;
}

// ---------------------------------------------------------------------
// 2) Aides de lecture BattleScribe
// ---------------------------------------------------------------------
function findCost(costs, typeId) {
  if (!Array.isArray(costs)) return 0;
  const c = costs.find((c) => c.typeId === typeId);
  return c ? c.value : 0;
}

function primaryCategory(selection) {
  const cats = selection.categories || [];
  const primary = cats.find((c) => c.primary) || cats[0];
  return primary ? primary.name : "";
}

const STAT_KEYS = ["M", "CC", "CT", "F", "E", "PV", "I", "A", "Cd"];

function extractStats(selection) {
  const profiles = (selection.profiles || []).filter(
    (p) => !/max/i.test(p.name || "")
  );
  const profile = profiles[0] || (selection.profiles || [])[0];
  const stats = {};
  STAT_KEYS.forEach((k) => (stats[k] = "-"));
  if (profile) {
    for (const c of profile.characteristics || []) {
      if (STAT_KEYS.includes(c.name)) stats[c.name] = c.$text || "-";
    }
  }
  return stats;
}

function extractEquipmentItem(sel, report, reglesArmesOut) {
  const item = { nom: translateName(sel.name), details: [] };
  const profile = (sel.profiles || [])[0];
  // "Dague gratuite" doit chercher la traduction sous "Dague", etc.
  const baseName = (sel.name || "").replace(/\s+(gratuite|free)$/i, "").trim();
  if (profile) {
    for (const c of profile.characteristics || []) {
      if (!c.name) continue;
      let text = c.$text || "";
      if (c.name === "Spéciale" || c.name === "Special") {
        // La règle d'arme part désormais dans le chapitre "Règles des
        // armes" en fin d'ouvrage, plus dans la fiche personnage.
        const known =
          WEAPON_SPECIAL_TRANSLATIONS[sel.name] ||
          WEAPON_SPECIAL_TRANSLATIONS[baseName];
        if (known) {
          text = known;
        } else if (text && !isFrenchText(text)) {
          markUntranslated(report, `Règle spéciale de l'objet « ${sel.name} »`);
        }
        if (text) {
          reglesArmesOut.push({ name: translateName(sel.name), description: text });
        }
        continue;
      }
      text = translateValue(text);
      item.details.push({ label: translateName(c.name), value: text });
    }
  }
  return item;
}

const INJURY_CONTAINER_RE = /^(serious injury|blessures? graves?)$/i;

/**
 * Parcourt récursivement les `selections` imbriquées d'une figurine et
 * en extrait : équipement, compétences, règles, blessures, expérience,
 * promotion, augmentations de caractéristiques.
 */
function walkModelSelections(selections, ruleDict, report, out) {
  for (const sel of selections || []) {
    const name = sel.name || "";

    if (name === "Équipement") {
      for (const eq of sel.selections || []) {
        out.equipement.push(extractEquipmentItem(eq, report, out.reglesArmes));
      }
      continue;
    }

    if (name === "Compétences") {
      collectSkills(sel.selections || [], ruleDict, report, out);
      continue;
    }

    if (INJURY_CONTAINER_RE.test(name)) {
      collectInjuries(sel.selections || [], ruleDict, out.blessures);
      continue;
    }

    if (name === "Experience") {
      out.xp += sel.number || 0;
      continue;
    }

    if (name === "Promue" || sel.entryId?.includes("Promue")) {
      out.promue = true;
      continue;
    }

    if (name === "Characteristic Increases") {
      for (const inc of sel.selections || []) {
        out.augmentations.push(normalizeStatBump(inc.name));
      }
      continue;
    }

    if (sel.group === "Characteristic Increases") {
      out.augmentations.push(normalizeStatBump(name));
      continue;
    }

    // Sous-groupe générique (ex. contient d'autres selections) : on
    // continue de creuser au cas où (structure BattleScribe imbriquée).
    if (Array.isArray(sel.selections) && sel.selections.length) {
      walkModelSelections(sel.selections, ruleDict, report, out);
    }
  }
}

/** Recherche récursive de blessures graves (mêmes patrons qu'une compétence). */
function collectInjuries(selections, ruleDict, out) {
  for (const sel of selections || []) {
    if (Array.isArray(sel.rules) && sel.rules.length) {
      for (const r of sel.rules) {
        out.push(lookupRule(ruleDict, r.name));
      }
    } else if (Array.isArray(sel.selections) && sel.selections.length) {
      collectInjuries(sel.selections, ruleDict, out);
    }
  }
}

/** Recherche récursive de compétences (entrées avec un tableau `rules`). */
function collectSkills(selections, ruleDict, report, out) {
  for (const sel of selections || []) {
    if (Array.isArray(sel.rules) && sel.rules.length) {
      for (const r of sel.rules) {
        out.competences.push(lookupRule(ruleDict, r.name));
      }
    } else if (Array.isArray(sel.selections) && sel.selections.length) {
      collectSkills(sel.selections, ruleDict, report, out);
    } else if (sel.name) {
      // Compétence sans description explicite dans cette instance :
      // on tente quand même le dictionnaire canonique par nom.
      const looked = ruleDict.get(sel.name);
      if (looked) out.competences.push(looked);
    }
  }
}

function extractCharacterCard(sel, ruleDict, report) {
  const card = {
    id: sel.id, // identifiant stable BattleScribe, utilisé pour la personnalisation
    nom: translateName(sel.name),
    typeOrigine: translateName(sel.name), // conservé même si l'utilisateur renomme la figurine
    coutGc: findCost(sel.costs, "points"),
    coutWr: findCost(sel.costs, "wb-rating"),
    xp: 0,
    promue: false,
    stats: extractStats(sel),
    equipement: [],
    competences: [],
    reglesSpeciales: (sel.rules || []).map((r) => lookupRule(ruleDict, r.name)),
    reglesArmes: [],
    blessures: [],
    augmentations: [],
    // Champs de personnalisation, remplis ensuite par personalization.js
    // (jamais lus depuis le JSON BattleScribe, qui ne les contient pas).
    nomPersonnalise: "",
    bio: "",
    photo: null, // data URL (JPEG compressé) ou null
  };
  walkModelSelections(sel.selections || [], ruleDict, report, card);
  return card;
}

// ---------------------------------------------------------------------
// 3) Point d'entrée principal
// ---------------------------------------------------------------------
export function parseRoster(json) {
  const report = makeReport();
  if (!json || !json.roster) {
    throw new Error(
      "Ce fichier ne ressemble pas à un export de roster BattleScribe (clé 'roster' absente)."
    );
  }
  const roster = json.roster;
  const force = (roster.forces || [])[0];
  if (!force) {
    throw new Error("Aucune force trouvée dans ce roster.");
  }

  const ruleDict = buildCanonicalRuleDictionary(roster, report);

  const model = {
    meta: {
      nom: roster.name || "Bande sans nom",
      gc: findCost(roster.costs, "points"),
      warbandRating: findCost(roster.costs, "wb-rating"),
      catalogue: (force.catalogueName || "").trim(),
    },
    bande: {
      magotOr: 0,
      magotPierres: 0,
      xpTotal: 0,
    },
    reglesGenerales: [],
    heros: [],
    hommesDeMain: [],
    nonTraduits: [],
  };

  // Règles générales au niveau de la force (Impeccable Care, etc.)
  for (const r of force.rules || []) {
    model.reglesGenerales.push(lookupRule(ruleDict, r.name));
  }

  for (const sel of force.selections || []) {
    const cat = primaryCategory(sel);

    if (sel.name === "Magot") {
      for (const item of sel.selections || []) {
        const qty = item.number || findCost(item.costs, "points") || 0;
        if (/or$/i.test(item.name) || /^or$/i.test(item.name)) {
          model.bande.magotOr += qty;
        } else if (/pierre/i.test(item.name)) {
          model.bande.magotPierres += qty;
        }
      }
      continue;
    }

    if (sel.name === "Grade") {
      for (const g of sel.selections || []) {
        for (const r of g.rules || []) {
          model.reglesGenerales.push(lookupRule(ruleDict, r.name));
        }
      }
      continue;
    }

    if (sel.name === "Règles Spéciales") {
      for (const r of sel.rules || []) {
        model.reglesGenerales.push(lookupRule(ruleDict, r.name));
      }
      continue;
    }

    if (cat === "Héros") {
      const card = extractCharacterCard(sel, ruleDict, report);
      model.heros.push(card);
      model.bande.xpTotal += card.xp;
      continue;
    }

    if (cat === "Hommes de main") {
      const card = extractCharacterCard(sel, ruleDict, report);
      model.hommesDeMain.push(card);
      model.bande.xpTotal += card.xp;
      continue;
    }

    // Sélections de configuration/uncategorized non gérées explicitement :
    // ignorées volontairement (elles ne correspondent à aucune fiche du
    // gabarit papier fourni).
  }

  // Dédoublonnage des règles générales par nom
  const seen = new Set();
  model.reglesGenerales = model.reglesGenerales.filter((r) => {
    if (seen.has(r.name)) return false;
    seen.add(r.name);
    return true;
  });

  model.bande.valeurDeBande = model.bande.xpTotal * 5;
  model.nonTraduits = Array.from(report.untranslated);

  return model;
}
