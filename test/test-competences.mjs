import assert from "assert/strict";
import {
  BANDES,
  creationWarnings,
  getGuerrier,
  newCreation,
  newFigurineFromModele,
} from "../js/warband-builder.js";
import {
  COMPETENCES,
  competencesAccessibles,
  competencesHorsListe,
  depassementsMaximum,
  maximumsGuerrier,
} from "../js/data/competences.js";

// --- Chaque liste citée par les données de bandes est décrite ---
for (const b of BANDES) {
  for (const g of b.guerriers) {
    for (const liste of g.competences) assert.ok(COMPETENCES[liste], `liste inconnue : ${liste}`);
  }
}
assert.equal(COMPETENCES.Combat[0].nom, "Frappe Précise");

// --- Un héros ne voit que ses listes ; un homme de main aucune ---
const tueur = newFigurineFromModele("nains/troll-slayer");
const listes = competencesAccessibles(tueur, getGuerrier(tueur.modele)).map((l) => l.liste);
assert.deepEqual(listes, getGuerrier("nains/troll-slayer").competences);
assert.ok(listes.includes("Spéciales (Tueurs de trolls)"));
assert.ok(!listes.includes("Tir"));
const guerrierClan = newFigurineFromModele("nains/clansmen");
assert.deepEqual(competencesAccessibles(guerrierClan, getGuerrier("nains/clansmen")), []);

// --- Réservées et déjà acquises ---
const chef = newFigurineFromModele("reikland/mercenary-captain");
const champion = newFigurineFromModele("reikland/champion");
const trouve = (fig, en) =>
  competencesAccessibles(fig, getGuerrier(fig.modele))
    .flatMap((l) => l.competences)
    .find((c) => c.en === en);
assert.equal(trouve(chef, "Battle Tongue").permise, true);
assert.equal(trouve(champion, "Battle Tongue")?.permise ?? false, false);
chef.competences.push("Marchandage");
assert.equal(trouve(chef, "Haggle").acquise, true);

// --- Compétence hors liste signalée ---
champion.competences.push("Faim Noire");
assert.deepEqual(competencesHorsListe(champion, getGuerrier(champion.modele)), ["Faim Noire"]);

// --- Maximums de race ---
assert.equal(maximumsGuerrier(getGuerrier("nains/noble")).max.E, 5);
assert.equal(maximumsGuerrier(getGuerrier("reikland/champion")).max.CC, 6);
assert.equal(maximumsGuerrier(getGuerrier("skavens/rat-ogre")).sansProgression, true);
assert.equal(maximumsGuerrier(getGuerrier("hommes-betes/minotaur")), null);
chef.stats.CC = "7";
assert.deepEqual(depassementsMaximum(chef, getGuerrier(chef.modele)), [{ stat: "CC", valeur: 7, max: 6 }]);

const c = newCreation("Test", "", "reikland");
c.figurines.push(chef, champion);
const alertes = creationWarnings(c).join("\n");
assert.match(alertes, /Faim Noire/);
assert.match(alertes, /CC 7/);

console.log("test-competences : OK");
