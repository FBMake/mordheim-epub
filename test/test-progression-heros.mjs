import assert from "assert/strict";
import {
  contientRegle,
  getGuerrier,
  newFigurineFromModele,
  normalizeCreation,
  newCreation,
  regleBloquantXp,
  regleSansXp,
} from "../js/warband-builder.js";
import {
  annulerProgression,
  appliquerProgressionHeros,
  ecartsProfil,
  progressionsDues,
  resultatProgressionHeros,
} from "../js/progression.js";

// --- Tableau des héros ---
assert.equal(resultatProgressionHeros(2).code, "competence");
assert.equal(resultatProgressionHeros(5).code, "competence");
assert.deepEqual(resultatProgressionHeros(6).stats, ["F", "A"]);
assert.deepEqual(resultatProgressionHeros(7).stats, ["CC", "CT"]);
assert.deepEqual(resultatProgressionHeros(8).stats, ["I", "Cd"]);
assert.deepEqual(resultatProgressionHeros(9).stats, ["PV", "E"]);
assert.equal(resultatProgressionHeros(12).code, "competence");

// --- Seuils franchis après le recrutement seulement (capitaine : 20 XP au départ) ---
const cap = newFigurineFromModele("reikland/mercenary-captain");
const guerrier = getGuerrier(cap.modele);
assert.equal(cap.xpDepart, 20);
assert.equal(progressionsDues(cap, 20), 0);
assert.equal(progressionsDues(cap, 28), 2); // 24 et 28

// --- Caractéristique, puis compétence, chacune sur son seuil ---
assert.deepEqual(appliquerProgressionHeros(cap, [3, 4], { xp: 28, choix: "CT", guerrier }), { ok: true, code: "CC/CT", stat: "CT" });
assert.equal(cap.stats.CT, "5");
assert.equal(cap.progressions[0].seuil, 24);
assert.equal(appliquerProgressionHeros(cap, [1, 1], { xp: 28, guerrier }).manque, "competence");
assert.equal(appliquerProgressionHeros(cap, [1, 1], { xp: 28, competence: "Esquive", guerrier }).ok, true);
assert.deepEqual(cap.competences, ["Esquive"]);
assert.equal(cap.progressions[1].seuil, 28);
assert.equal(progressionsDues(cap, 28), 0);
assert.equal(appliquerProgressionHeros(cap, [3, 4], { xp: 28, guerrier }).manque, "seuil");

// --- Couleurs : écart avec le profil des données, malus de blessure ---
assert.deepEqual(ecartsProfil(cap, guerrier), { CT: 1 });
assert.deepEqual(ecartsProfil(cap, guerrier, { M: -1 }), { CT: 1, M: -1 });

// --- L'historique survit à l'enregistrement ---
const c = newCreation("Test", "", "reikland");
c.figurines.push(cap);
const lu = normalizeCreation(JSON.parse(JSON.stringify(c))).figurines[0];
assert.equal(lu.xpDepart, 20);
assert.deepEqual(lu.progressions[1], { des: [1, 1], resultat: "competence", competence: "Esquive", seuil: 28 });

// --- Retirer une progression défait son effet ---
annulerProgression(cap, 1);
assert.deepEqual(cap.competences, []);
annulerProgression(cap, 0);
assert.equal(cap.stats.CT, "4");
assert.equal(progressionsDues(cap, 28), 2);

// --- Règles qui empêchent de gagner de l'expérience ---
assert.equal(regleBloquantXp(newFigurineFromModele("morts-vivants/zombies")), "Sans cervelle");
assert.equal(regleBloquantXp(newFigurineFromModele("orques/troll")), "Monstre stupide");
assert.equal(regleBloquantXp(cap), null);
assert.ok(regleSansXp("Animaux"));
assert.ok(!regleSansXp("Peur"));
assert.ok(!regleSansXp("Garde du Corps")); // compétence du Marchand : c'est le garde qui ne progresse pas

// --- Doublons, en français comme en anglais ---
assert.ok(contientRegle(["Peur"], "peur"));
assert.ok(contientRegle(["Esquive"], "Dodge"));
assert.ok(!contientRegle(["Peur"], "Esquive"));

console.log("test-progression-heros : OK");
