import assert from "assert/strict";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { parseRoster } from "../js/parser.js";
import {
  applyPartie,
  emptyPartie,
  mergeIntoSlot,
  normalizeRecord,
  parseExport,
  serializeExport,
} from "../js/warband-store.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const json = JSON.parse(readFileSync(join(__dirname, "../sample-data/exemple.json"), "utf8"));

// --- Suivi de partie : XP et magot saisis remplacent ceux du roster ---
const model = parseRoster(json);
const hero = model.heros[0];
const xpOrigine = hero.xp;
const partie = emptyPartie();
partie.figurines[hero.id] = { xp: xpOrigine + 3, statut: "Hors de combat", notes: "Jambe blessée" };
partie.magotOr = 123;
applyPartie(model, partie);
assert.equal(hero.xp, xpOrigine + 3);
assert.equal(hero.statut, "Hors de combat");
assert.equal(model.bande.magotOr, 123);
assert.equal(model.bande.valeurDeBande, model.bande.xpTotal * 5);
// Vider la saisie revient aux valeurs de l'export.
applyPartie(model, emptyPartie());
assert.equal(hero.xp, xpOrigine);
assert.equal(model.bande.magotOr, model.bande.magotOrRoster);
console.log("Suivi de partie OK");

// --- Export / import de la sauvegarde ---
const rec = {
  slot: 2,
  nom: model.meta.nom,
  roster: json,
  customisations: { [hero.id]: { nom: "Gaspard", bio: "", photo: null } },
  orphelines: {},
  partie,
};
const back = parseExport(serializeExport([rec]));
assert.equal(back.length, 1);
assert.equal(back[0].slot, 2);
assert.equal(back[0].customisations[hero.id].nom, "Gaspard");
assert.equal(back[0].partie.figurines[hero.id].xp, xpOrigine + 3);
assert.throws(() => parseExport("{}"));
assert.throws(() => normalizeRecord({ ...rec, slot: 5 }));
console.log("Export / import OK");

// --- Mise à jour d'un emplacement avec un nouvel export ---
const nouveau = parseRoster(json);
nouveau.heros = nouveau.heros.slice(1); // le héros personnalisé a disparu
const autreId = nouveau.heros[0].id;
const previous = normalizeRecord({
  ...rec,
  customisations: { ...rec.customisations, [autreId]: { nom: "Ulrich", bio: "", photo: null } },
  partie: { ...partie, figurines: { ...partie.figurines, [autreId]: { xp: 9, statut: "Blessé", notes: "" } } },
});
const merged = mergeIntoSlot(previous, nouveau, {});
assert.equal(merged.customisations[autreId].nom, "Ulrich");
assert.equal(merged.orphelines[hero.id].nom, "Gaspard", "le héros disparu devient orphelin");
assert.equal(merged.partie.figurines[autreId].statut, "Blessé");
assert.equal(merged.partie.figurines[autreId].xp, null, "les XP du nouvel export font foi");
assert.equal(merged.partie.magotOr, null);
console.log("Mise à jour d'emplacement OK");
