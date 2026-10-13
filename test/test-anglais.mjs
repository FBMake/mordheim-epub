import assert from "assert/strict";
import { readFileSync } from "fs";
import { parseRoster } from "../js/parser.js";
import { setLang } from "../js/i18n.js";
import { BANDES, buildRoster, creationWarnings, knownRuleNames, newCreation, newFigurineFromModele } from "../js/warband-builder.js";
import { EN } from "../js/data/bandes-en.js";
import { loc, locBande, locRegle } from "../js/donnees-langue.js";

// --- Toutes les données de bandes ont une version anglaise ---
for (const b of BANDES) {
  assert.ok(EN.bandes[b.id], `bande sans nom anglais : ${b.id}`);
  for (const r of [...b.regles, ...b.guerriers.flatMap((g) => g.regles)]) {
    assert.ok(EN.reglesFr[r.nom], `règle sans version anglaise : ${r.nom}`);
  }
  for (const g of b.guerriers) {
    assert.ok(EN.guerriers[g.id], `guerrier sans nom anglais : ${g.id}`);
    for (const c of g.competences) assert.ok(EN.competences[c], `liste sans nom anglais : ${c}`);
    for (const cat of g.equipement) for (const o of cat.objets) assert.ok(EN.equipement[o.nom], o.nom);
  }
}

// --- Affichage : rien ne change en français, noms officiels en anglais ---
const reikland = BANDES.find((b) => b.id === "reikland");
setLang("fr", { remember: false });
assert.equal(locBande(reikland), "Mercenaires du Reikland");
assert.equal(loc("Épée"), "Épée");
setLang("en", { remember: false });
assert.equal(locBande(reikland), "Reikland Mercenaries");
assert.equal(loc("Épée"), "Sword");
assert.equal(loc("Capitaine mercenaire"), "Mercenary Captain");
assert.equal(locRegle(reikland.regles[0]).nom, "Reikland Discipline");
assert.ok(knownRuleNames().includes("Mighty Blow"));
console.log("Données anglaises OK");

// --- Bande créée (enregistrée en français) lue en anglais ---
const c = newCreation("The Rats", "", "reikland");
const chef = newFigurineFromModele("reikland/mercenary-captain");
chef.equipement.push("Épée");
chef.competences.push("Coup Puissant", "Compétence maison");
c.figurines.push(chef);
const roster = buildRoster(c);
const en = parseRoster(roster, { lang: "en" });
assert.equal(en.meta.catalogue, "Reikland Mercenaries");
const h = en.heros[0];
assert.equal(h.nom, "Mercenary Captain");
assert.deepEqual(h.equipement.map((e) => e.nom), ["Free Dagger", "Sword"]);
assert.deepEqual(h.competences.map((r) => r.name), ["Mighty Blow", "Compétence maison"]);
assert.match(h.competences[0].description, /Strength/);
assert.equal(h.reglesSpeciales[0].name, "Leader");
assert.equal(en.reglesGenerales[0].name, "Reikland Discipline");
assert.match(en.reglesGenerales[0].description, /Leadership/);
assert.deepEqual(en.nonTraduits, []);
// Une règle de bande saisie en anglais est enregistrée sous son nom français.
c.reglesBande.push("Reikland Discipline");
assert.ok(buildRoster(c).roster.forces[0].selections.some((s) => s.rules?.some((r) => r.name === "Discipline du Reikland")));
setLang("en", { remember: false });
c.figurines.push(newFigurineFromModele("reikland/mercenary-captain"));
assert.ok(creationWarnings(c).some((w) => w.includes("Mercenary Captain")));

// Le même roster reste en français dans l'interface française.
const fr = parseRoster(roster, { lang: "fr" });
assert.equal(fr.heros[0].nom, "Capitaine mercenaire");
assert.equal(fr.reglesGenerales[0].name, "Discipline du Reikland");
console.log("Bande créée en anglais OK");

// --- Export BattleScribe : le texte anglais d'origine est repris ---
const exemple = JSON.parse(readFileSync(new URL("../sample-data/exemple.json", import.meta.url), "utf8"));
const enEx = parseRoster(exemple, { lang: "en" });
const frEx = parseRoster(exemple, { lang: "fr" });
const care = enEx.reglesGenerales.find((r) => r.name === "Impeccable Care");
assert.ok(care && !/[éèà]/.test(care.description), "Impeccable Care en anglais");
assert.ok(frEx.reglesGenerales.some((r) => r.name === "Soin Impeccable"));
assert.deepEqual(enEx.nonTraduits, []);
assert.ok(enEx.heros[0].competences.some((c) => c.name === "Eagle Eyes"));
console.log("Export en anglais OK");
