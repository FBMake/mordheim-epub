import assert from "assert/strict";
import { parseRoster } from "../js/parser.js";
import {
  FRANCS_TIREURS,
  buildRoster,
  creationTotals,
  creationWarnings,
  effectifMaximum,
  employeurAutorise,
  francsDisponibles,
  getGuerrier,
  newCreation,
  newFigurineFromModele,
  normalizeCreation,
  soldeFranc,
} from "../js/warband-builder.js";

// --- Les francs-tireurs du livre de base sont dans les données ---
assert.ok(FRANCS_TIREURS.length >= 50, "francs-tireurs du livre et des suppléments");
for (const g of FRANCS_TIREURS) {
  assert.equal(g.categorie, "franc", g.id);
  // Le vieux prospecteur se paie en trésors : prime 0.
  assert.ok(g.prime >= 0 && g.solde >= 0 && g.valeur > 0, g.id);
  assert.ok(g.regles.some((r) => r.nom === "Franc-tireur"), `${g.id} : règle Franc-tireur`);
}

// --- Engagement : prime, équipement fourni, pas d'effectif ni de héros en plus ---
const c = newCreation("Francs", "", "reikland");
c.figurines.push(newFigurineFromModele("reikland/mercenary-captain"));
const ogre = newFigurineFromModele("francs-tireurs/ogre-bodyguard");
assert.equal(ogre.franc, true);
assert.equal(ogre.categorie, "heros");
assert.equal(ogre.coutGc, 80);
assert.ok(ogre.equipement.length, "équipement de départ fourni");
c.figurines.push(ogre);
let tot = creationTotals(c);
assert.equal(tot.heros, 1, "le franc-tireur n'est pas un héros de plus");
assert.equal(tot.effectif, 1, "ni une figurine de l'effectif");
assert.equal(tot.francs, 1);
assert.equal(tot.solde, 30);
assert.equal(tot.cout, 60 + 80);
// Valeur : 5 + 20 xp pour le capitaine, valeur propre de l'ogre (+ son XP).
assert.equal(tot.valeurDeBande, 25 + getGuerrier(ogre.modele).valeur);

// --- Employeurs ---
assert.equal(employeurAutorise(getGuerrier("francs-tireurs/freelance-knight"), "reikland"), true);
assert.equal(employeurAutorise(getGuerrier("francs-tireurs/freelance-knight"), "skavens"), false);
assert.equal(employeurAutorise(getGuerrier("francs-tireurs/ogre-bodyguard"), "skavens-pestilens"), false, "groupe @skavens");
const sk = newCreation("Rats", "", "skavens");
sk.figurines.push(newFigurineFromModele("francs-tireurs/ogre-bodyguard"));
assert.ok(creationWarnings(sk).some((w) => w.includes("refuse")), "employeur refusé signalé");
assert.equal(francsDisponibles(sk).find((x) => x.guerrier.id === "francs-tireurs/ogre-bodyguard").autorise, false);

// --- Un seul de chaque type ---
c.figurines.push(newFigurineFromModele("francs-tireurs/ogre-bodyguard"));
assert.ok(creationWarnings(c).some((w) => w.includes("un seul franc-tireur")));
c.figurines.pop();
assert.equal(francsDisponibles(c).find((x) => x.guerrier.id === "francs-tireurs/ogre-bodyguard").engage, true);

// --- Le halfling agrandit la bande ---
c.figurines.push(newFigurineFromModele("francs-tireurs/halfling-scout"));
assert.equal(effectifMaximum(c), 16);

// --- Solde selon la composition de la bande ---
const ranger = { franc: true, modele: "francs-tireurs/elf-ranger" };
assert.equal(soldeFranc(ranger, c), 20);
const avecNain = { bandeId: "reikland", figurines: [{ modele: "nains/noble" }] };
assert.equal(soldeFranc(ranger, avecNain), 40);

// --- Sauvegarde et export ---
const relu = normalizeCreation(JSON.parse(JSON.stringify(c)));
assert.equal(relu.figurines.filter((f) => f.franc).length, 2);
const model = parseRoster(buildRoster(c));
const cartes = model.heros.filter((h) => h.franc);
assert.equal(cartes.length, 2, "francs-tireurs lus comme tels à l'import");

console.log("test-francs-tireurs : OK");
