import assert from "assert/strict";
import { parseRoster } from "../js/parser.js";
import {
  MAX_GROUPE,
  buildRoster,
  coutRecrue,
  creationTotals,
  creationWarnings,
  newCreation,
  newFigurineFromModele,
  normalizeCreation,
  recruterDansGroupe,
} from "../js/warband-builder.js";

// --- Un groupe d'hommes de main compte dans le coût, l'effectif et la valeur ---
const c = newCreation("Groupes", "", "reikland");
const chef = newFigurineFromModele("reikland/mercenary-captain");
const spadassins = newFigurineFromModele("reikland/swordsmen");
spadassins.nombre = 3;
c.figurines.push(chef, spadassins);
let tot = creationTotals(c);
assert.equal(tot.effectif, 4);
assert.equal(tot.hdm, 3);
assert.equal(tot.cout, chef.coutGc + 3 * spadassins.coutGc);
assert.equal(tot.valeurDeBande, 5 + chef.xp + 3 * 5);

// --- Recrue en campagne : +2 co par point d'expérience du groupe ---
spadassins.xp = 4;
const avant = creationTotals(c).cout;
assert.equal(coutRecrue(spadassins), spadassins.coutGc + 8);
assert.equal(recruterDansGroupe(spadassins), spadassins.coutGc + 8);
assert.equal(spadassins.nombre, 4);
assert.equal(creationTotals(c).cout, avant + spadassins.coutGc + 8);
spadassins.nombre = MAX_GROUPE;
assert.equal(recruterDansGroupe(spadassins), null);
spadassins.nombre = 6;
assert.match(creationWarnings(c).join("\n"), /groupe de 6/);
spadassins.nombre = 4;

// --- Les hommes de main gardent les règles de leurs données, sans compétences ---
spadassins.competences = ["Sprint"];
spadassins.regles = ["Règle maison"];
const n = normalizeCreation(c);
const s = n.figurines.find((f) => f.id === spadassins.id);
assert.deepEqual(s.competences, []);
assert.deepEqual(s.regles, []);
assert.equal(s.nombre, 4);
assert.equal(s.surcout, 8);

// --- Le groupe passe dans le roster puis le modèle ---
const model = parseRoster(buildRoster(c));
assert.equal(model.hommesDeMain[0].nombre, 4);
assert.match(model.hommesDeMain[0].nom, /×4$/);

console.log("test-groupes : OK");
