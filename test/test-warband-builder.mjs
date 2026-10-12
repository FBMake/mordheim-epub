import assert from "assert/strict";
import { parseRoster } from "../js/parser.js";
import {
  buildRoster,
  creationTotals,
  creationWarnings,
  duplicateFigurine,
  knownRuleNames,
  newCreation,
  newFigurine,
  normalizeCreation,
  resolveRuleName,
} from "../js/warband-builder.js";
import { normalizeRecord, parseExport, serializeExport } from "../js/warband-store.js";

// --- Une bande créée de zéro passe par le même parseur qu'un export ---
const c = newCreation("Les Rats du Port", "Mercenaires de Marienburg");
const chef = newFigurine("heros");
Object.assign(chef, {
  type: "Capitaine",
  coutGc: 60,
  xp: 20,
  stats: { M: "4", CC: "4", CT: "4", F: "3", E: "3", PV: "1", I: "4", A: "1", Cd: "8" },
  equipement: ["Épée", "Pistolet"],
  competences: ["Marchandage", "Compétence maison"],
  regles: ["Chef"],
});
const garde = newFigurine("hdm");
Object.assign(garde, { type: "Spadassin", coutGc: 25, equipement: ["Hallebarde"] });
c.figurines.push(chef, garde, duplicateFigurine(garde));
c.reglesBande.push("Riches marchands");

const totals = creationTotals(c);
assert.equal(totals.cout, 110);
assert.equal(totals.reste, 390);
assert.equal(totals.heros, 1);
assert.equal(totals.hdm, 2);
assert.equal(totals.valeurDeBande, 3 * 5 + 20);
assert.deepEqual(creationWarnings(c), []);

const model = parseRoster(buildRoster(c));
assert.equal(model.meta.nom, "Les Rats du Port");
assert.equal(model.meta.catalogue, "Mercenaires de Marienburg");
assert.equal(model.meta.gc, 110);
assert.equal(model.meta.warbandRating, 35);
assert.equal(model.bande.magotOr, 390);
assert.equal(model.heros.length, 1);
assert.equal(model.hommesDeMain.length, 2);
const h = model.heros[0];
assert.equal(h.id, chef.id); // identifiant stable : personnalisation et suivi de partie
assert.equal(h.nom, "Capitaine");
assert.equal(h.coutGc, 60);
assert.equal(h.xp, 20);
assert.equal(h.stats.Cd, "8");
assert.deepEqual(h.equipement.map((e) => e.nom), ["Épée", "Pistolet"]);
// « Marchandage » est connue du dictionnaire : son texte français est repris.
const marchandage = h.competences.find((r) => r.name === "Marchandage");
assert.ok(marchandage?.description.length > 20);
assert.ok(h.competences.some((r) => r.name === "Compétence maison"));
assert.ok(model.reglesGenerales.some((r) => r.name === "Riches marchands"));
// Les règles saisies sans texte ne sont pas signalées comme « non traduites ».
assert.deepEqual(model.nonTraduits, []);
assert.notEqual(model.hommesDeMain[0].id, model.hommesDeMain[1].id);
console.log("Bande créée → modèle OK");

// --- Saisie automatique des compétences ---
assert.ok(knownRuleNames().includes("Marchandage"));
assert.equal(resolveRuleName("marchandage"), "Haggle");
assert.equal(resolveRuleName("Inconnue"), "Inconnue");
console.log("Compétences connues OK");

// --- Contrôles ---
const trop = newCreation("Trop chère");
for (let i = 0; i < 7; i++) trop.figurines.push(Object.assign(newFigurine("heros"), { coutGc: 80 }));
const warnings = creationWarnings(trop);
assert.equal(warnings.length, 2);
assert.equal(parseRoster(buildRoster(trop)).bande.magotOr, 0);
console.log("Contrôles OK");

// --- Sauvegarde : le modèle de création suit l'emplacement ---
const rec = normalizeRecord({ slot: 1, nom: c.nom, roster: buildRoster(c), creation: c });
assert.equal(rec.creation.figurines.length, 3);
const back = parseExport(serializeExport([rec]));
assert.equal(back[0].creation.figurines[0].competences[1], "Compétence maison");
assert.equal(normalizeRecord({ slot: 2, nom: "x", roster: buildRoster(c) }).creation, null);
assert.equal(normalizeCreation({ figurines: [{ id: "a", coutGc: "-3", stats: { M: 5 } }] }).figurines[0].coutGc, 0);
console.log("Sauvegarde des bandes créées OK");
