import assert from "assert/strict";
import { getGuerrier, newFigurine, newFigurineFromModele, normalizeCreation, newCreation } from "../js/warband-builder.js";
import { appliquerProgression, progressionsDues, promouvoir, resultatProgression } from "../js/progression.js";

assert.equal(resultatProgression(3).code, "I");
assert.equal(resultatProgression(5).code, "F");
assert.equal(resultatProgression(7).code, "CC/CT");
assert.equal(resultatProgression(8).code, "A");
assert.equal(resultatProgression(9).code, "Cd");
assert.equal(resultatProgression(11).code, "talent");

// --- Seuils 2, 5, 9, 14 ---
const g = newFigurineFromModele("reikland/swordsmen");
g.nombre = 3;
assert.equal(progressionsDues(g, 1), 0);
assert.equal(progressionsDues(g, 5), 2);

// --- Jet appliqué au profil, choix CC/CT ---
const guerrier = getGuerrier(g.modele);
const ct = Number(g.stats.CT);
assert.deepEqual(appliquerProgression(g, [3, 4], { choix: "CT", guerrier }), { ok: true, code: "CC/CT", stat: "CT" });
assert.equal(Number(g.stats.CT), ct + 1);
assert.equal(progressionsDues(g, 5), 1);

// --- Maximum de race : relance, rien d'enregistré ---
g.stats.F = "4";
const r = appliquerProgression(g, [2, 3], { guerrier });
assert.equal(r.relancer, true);
assert.equal(g.progressions.length, 1);

// --- Ce gars a du talent : un membre devient héros ---
appliquerProgression(g, [5, 6], { guerrier });
const heros = promouvoir(g, newFigurine, 5);
assert.equal(g.nombre, 2);
assert.equal(heros.categorie, "heros");
assert.equal(heros.xp, 5);
assert.deepEqual(heros.stats, g.stats);

// --- Les progressions sont conservées ---
const c = newCreation("T", "", "reikland");
c.figurines.push(g);
assert.equal(normalizeCreation(c).figurines[0].progressions.length, 2);

console.log("test-progression : OK");

// --- Piste d'expérience en cases ---
import { pisteXp, pisteXpHtml } from "../js/experience.js";
assert.equal(pisteXp("heros").cases, 90);
assert.equal(pisteXp("hdm").cases, 14);
const html = pisteXpHtml(3, "hdm", { modifiable: true });
assert.equal((html.match(/cochee/g) || []).length, 3);
assert.equal((html.match(/seuil/g) || []).length, 4);
assert.match(html, /data-xp="2" aria-label="3"/); // cliquer la dernière case cochée la décoche
console.log("test-experience : OK");
