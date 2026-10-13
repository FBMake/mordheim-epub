import assert from "assert/strict";
import { appliquerCombat, bilanFigurine, cleanCombat, splitItems } from "../js/combats.js";
import { emptyPartie, mergeIntoSlot, normalizeRecord } from "../js/warband-store.js";

// --- Bande créée ici : XP, état, blessure, équipement et magot ---
const partie = emptyPartie();
const creation = {
  figurines: [
    { id: "c1", equipement: ["Dague", "Épée"] },
    { id: "c2", equipement: ["Dague"] },
  ],
};
appliquerCombat(
  {
    date: "2026-10-13",
    adversaire: "Les Rats",
    resultat: "victoire",
    gainOr: 35,
    gainPierres: 2,
    effets: [
      { id: "c1", nom: "Capitaine", xp: 3, statut: "Blessé", blessure: "Œil crevé", gagne: ["Arc"], perdu: ["épée"] },
      { id: "c2", nom: "Jeune sang", xp: 0, statut: null }, // rien : non gardé
    ],
  },
  { partie, creation, xpActuel: { c1: 20, c2: 0 }, magotOr: 440, magotPierres: 0 }
);
assert.equal(partie.figurines.c1.xp, 23);
assert.equal(partie.figurines.c1.statut, "Blessé");
assert.equal(partie.figurines.c1.notes, "Œil crevé");
assert.deepEqual(creation.figurines[0].equipement, ["Dague", "Arc"]);
assert.equal(partie.figurines.c2, undefined);
assert.equal(partie.magotOr, 475);
assert.equal(partie.magotPierres, 2);
assert.equal(partie.combats.length, 1);
assert.equal(partie.combats[0].effets.length, 1);

// Deuxième combat : l'XP s'ajoute à la nouvelle valeur, l'historique est du plus récent au plus ancien.
appliquerCombat(
  { date: "2026-10-20", resultat: "defaite", effets: [{ id: "c1", xp: 2, blessure: "Jambe blessée" }] },
  { partie, creation, xpActuel: { c1: 23 }, magotOr: 475, magotPierres: 2 }
);
assert.equal(partie.figurines.c1.xp, 25);
assert.equal(partie.figurines.c1.statut, "Blessé"); // état inchangé
assert.equal(partie.combats[0].date, "2026-10-20");
assert.deepEqual(bilanFigurine(partie.combats, "c1"), { combats: 2, xp: 5, blessures: ["Œil crevé", "Jambe blessée"] });

// --- Bande importée : l'équipement est noté, pas modifié ---
const p2 = emptyPartie();
appliquerCombat(
  { effets: [{ id: "x", gagne: ["Hallebarde"], perdu: ["Bouclier"] }] },
  { partie: p2, creation: null, xpActuel: {}, magotOr: 0, magotPierres: 0 }
);
assert.equal(p2.figurines.x.notes, "+Hallebarde, −Bouclier");

// --- Normalisation ---
assert.deepEqual(splitItems("Épée, arc ;  ,lance"), ["Épée", "arc", "lance"]);
const c = cleanCombat({ date: "n'importe quoi", resultat: "?", effets: [{ id: "a", statut: "Inconnu" }, { nom: "sans id" }] });
assert.match(c.date, /^\d{4}-\d{2}-\d{2}$/);
assert.equal(c.resultat, "");
assert.equal(c.effets.length, 1);
assert.equal(c.effets[0].statut, null);

// L'historique est gardé à l'enregistrement et lors d'une mise à jour par un nouvel export.
const rec = normalizeRecord({ slot: 1, roster: { roster: { name: "B" } }, partie });
assert.equal(rec.partie.combats.length, 2);
const merged = mergeIntoSlot(rec, { heros: [], hommesDeMain: [] });
assert.equal(merged.partie.combats.length, 2);

// --- Blessures choisies dans la table : permanentes sur la figurine, « mort » au cimetière ---
const p3 = emptyPartie();
appliquerCombat(
  {
    effets: [
      { id: "h1", nom: "Capitaine", statut: null, blessures: ["jambe", "capture", "inconnue", "jambe"] },
      { id: "h2", nom: "Champion", statut: null, blessures: ["mort"] },
    ],
  },
  { partie: p3, creation: null, xpActuel: {}, magotOr: 0, magotPierres: 0 }
);
assert.deepEqual(p3.figurines.h1.blessures, ["jambe", "jambe"], "les blessures ponctuelles restent dans l'historique");
assert.equal(p3.figurines.h1.statut, "");
assert.equal(p3.figurines.h2.statut, "Mort");
assert.deepEqual(p3.combats[0].effets[0].blessures, ["jambe", "capture", "jambe"]);
assert.equal(bilanFigurine(p3.combats, "h1").blessures.length, 3);

console.log("test-combats : OK");
