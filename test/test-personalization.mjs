import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { parseRoster } from "../js/parser.js";
import {
  serializePersonalization,
  parsePersonalizationFile,
  applyPersonalization,
} from "../js/personalization.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const json = JSON.parse(readFileSync(join(__dirname, "../sample-data/exemple.json"), "utf8"));

// --- Étape 1 : premier export, on personnalise un héros ---
const model1 = parseRoster(json);
const heroId = model1.heros[0].id;
const active = new Map();
active.set(heroId, { nom: "Gaspard le Balafré", bio: "Un vétéran taciturne.", photo: "data:image/jpeg;base64,AAAA" });
const orphansEmpty = new Map();
const fileText = serializePersonalization(active, orphansEmpty, model1.meta.nom);
console.log("Fichier généré (extrait) :", fileText.slice(0, 200), "...");

// --- Étape 2 : ré-import sur le MÊME roster (mêmes ids) ---
const model2 = parseRoster(json);
const importedMap = parsePersonalizationFile(fileText);
const orphans2 = applyPersonalization(model2, importedMap);
console.assert(model2.heros[0].nomPersonnalise === "Gaspard le Balafré", "Le nom personnalisé doit être réappliqué");
console.assert(orphans2.length === 0, "Aucune orpheline attendue sur le même roster");
console.log("Étape 2 OK : nom réappliqué =", model2.heros[0].nomPersonnalise, "| orphelines =", orphans2.length);

// --- Étape 3 : simulate un roster où ce héros a été supprimé (id inconnu) ---
const model3 = parseRoster(json);
model3.heros = model3.heros.slice(1); // on retire le héros personnalisé
const orphans3 = applyPersonalization(model3, importedMap);
console.assert(orphans3.length === 1, "Une orpheline attendue");
console.log("Étape 3 OK : orphelines détectées =", orphans3);

// --- Étape 4 : le fichier régénéré doit conserver l'orpheline ---
const orphanMap = new Map(orphans3.map((o) => [o.id, { nom: o.nom, bio: "", photo: null, label: o.nom }]));
const fileText2 = serializePersonalization(new Map(), orphanMap, model3.meta.nom);
const reparsed = parsePersonalizationFile(fileText2);
console.assert(reparsed.get(heroId)._orpheline === true, "L'orpheline doit être marquée dans le fichier régénéré");
console.log("Étape 4 OK : orpheline conservée dans le nouveau fichier.");

console.log("\nTOUS LES TESTS PERSONNALISATION OK");
