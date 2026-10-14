import assert from "assert/strict";
import { parseRoster } from "../js/parser.js";
import {
  BANDES,
  equipementRefuse,
  avertissementsEquipement,
  malusEquipement,
  autoriseDeuxMainsBouclier,
  buildRoster,
  coutCalcule,
  getGuerrier,
  newFigurineFromModele,
  prixEquipement,
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
import { competencesDepart, competencesDepartManquantes } from "../js/progression.js";

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

// --- Bandes officielles de BSData (js/data/bandes.js) ---
assert.equal(BANDES.length, 31);
for (const b of BANDES) {
  const chefs = b.guerriers.filter((g) => g.categorie === "heros" && g.min === 1);
  assert.equal(chefs.length, 1, `${b.nom} : un seul chef obligatoire`);
  assert.ok(chefs[0].regles.some((r) => r.nom === "Chef"), `${b.nom} : le chef a la règle Chef`);
  for (const g of b.guerriers) {
    assert.ok(Number.isFinite(g.cout) && g.cout > 0, `${g.id} : coût`);
    // Le Char de la peste n'a qu'une Endurance et des points de vie.
    assert.ok(g.profil && (g.profil.Cd || g.profil.E), `${g.id} : profil`);
    for (const r of g.regles) assert.ok(r.resume, `${g.id} : résumé de « ${r.nom} »`);
  }
}
console.log("Données des bandes OK");

const mb = newCreation("Les Rats du Port", "", "marienburg");
assert.equal(mb.faction, "Mercenaires de Marienburg");
assert.equal(mb.tresorDepart, 600);
assert.deepEqual(mb.reglesBande, ["Grands marchands"]);
const capitaine = newFigurineFromModele("marienburg/mercenary-captain");
assert.equal(capitaine.type, "Capitaine mercenaire");
assert.equal(capitaine.xp, 20);
assert.equal(capitaine.stats.Cd, "8");
assert.deepEqual(capitaine.equipement, ["Dague gratuite"]);
capitaine.equipement.push("Épée", "Pistolet");
assert.equal(prixEquipement(getGuerrier(capitaine.modele), "Épée"), 10);
assert.equal(coutCalcule(capitaine), 60 + 0 + 10 + 15);
capitaine.coutGc = coutCalcule(capitaine);
mb.figurines.push(capitaine);
for (let i = 0; i < 6; i++) mb.figurines.push(newFigurineFromModele("marienburg/swordsmen"));
const w = creationWarnings(mb);
assert.ok(w.some((x) => x.includes("Spadassins") && x.includes("5 au maximum")), w.join("\n"));
mb.figurines.pop();
// Recruté avec 20 xp : 8 seuils déjà franchis (2, 4, 6, 8, 11, 14, 17, 20), donc jusqu'à 8 compétences de départ, facultatives.
assert.equal(competencesDepart(capitaine), 8);
assert.equal(competencesDepartManquantes(capitaine), 8);
capitaine.competences.push("Esquive", "Sprint");
assert.equal(competencesDepartManquantes(capitaine), 6);
assert.deepEqual(creationWarnings(mb), []);
const m = parseRoster(buildRoster(mb));
assert.equal(m.meta.catalogue, "Mercenaires de Marienburg");
// Les règles reprises des données gardent leur nom français et leur résumé dans le PDF.
const regleChef = m.heros[0].reglesSpeciales.find((r) => r.name === "Chef");
assert.ok(regleChef?.description.includes("Commandement"));
assert.ok(m.reglesGenerales.find((r) => r.name === "Grands marchands")?.description.includes("600 co"));
assert.deepEqual(m.nonTraduits, []);
assert.equal(normalizeCreation(mb).figurines[0].modele, "marienburg/mercenary-captain");
assert.equal(normalizeCreation({ ...mb, bandeId: "inconnue" }).bandeId, "");
console.log("Création d'après les données OK");

// Brouillon : gardé dans l'emplacement tant que la bande n'est pas créée.
assert.equal(newCreation("Brouillon").brouillon, false);
assert.equal(normalizeCreation({ ...mb, brouillon: true }).brouillon, true);
assert.equal(normalizeCreation({ ...mb, brouillon: "oui" }).brouillon, false);
// Bande enregistrée avant le brouillon : considérée comme déjà créée.
const { brouillon: _b, ...ancienne } = mb;
assert.equal(normalizeCreation(ancienne).brouillon, false);
console.log("Brouillon OK");

// Limites d'équipement : 2 armes de corps à corps (hors dague gratuite), 2 armes de tir différentes,
// une armure, un bouclier, un casque.
{
  const capitaine = BANDES.flatMap((b) => b.guerriers).find((g) => g.id === "marienburg/mercenary-captain");
  const refus = (eq, nom) => equipementRefuse(capitaine, eq, nom);
  assert.equal(refus(["Dague gratuite", "Épée"], "Épée"), null);
  assert.equal(refus(["Dague gratuite", "Épée", "Épée"], "Hache"), "corps");
  assert.equal(refus(["Arbalète"], "Arbalète"), null);
  assert.equal(refus(["Arbalète"], "Arc"), null);
  assert.equal(refus(["Arbalète", "Arc"], "Pistolet"), "tir");
  assert.equal(refus(["Armure légère"], "Armure lourde"), "armure");
  assert.equal(refus(["Armure légère", "Casque"], "Bouclier"), null);
  assert.equal(refus(["Bouclier"], "Rondache"), "bouclier");
  assert.equal(refus(["Casque"], "Casque"), "casque");
  assert.equal(refus(["Dague gratuite"], "Dague gratuite"), "dagueGratuite");
  // Arme à deux mains et bouclier : permis, mais signalé.
  assert.equal(refus(["Arme lourde"], "Bouclier"), null);
  const alertes = (equipement, regles = []) => avertissementsEquipement({ equipement, regles, competences: [] });
  assert.deepEqual(alertes(["Arme lourde", "Bouclier"]), ["deuxMains"]);
  assert.deepEqual(alertes(["Hallebarde", "Rondache"]), ["deuxMains"]);
  assert.deepEqual(alertes(["Épée", "Bouclier", "Casque"]), []);
  assert.deepEqual(alertes(["Morgenstern", "Rondache"]), ["morgenstern"]);
  assert.deepEqual(alertes(["Armure lourde", "Bouclier"]), ["armureLourdeBouclier"]);
  assert.deepEqual(alertes(["Boulet et chaîne", "Champignons fous"]), []);
  assert.deepEqual(alertes(["Bâton", "Casque"], ["Sorcier (Nécromancie)"]), ["sorcier"]);
  assert.deepEqual(alertes(["Armure lourde"], ["Prières de Sigmar"]), []);
  assert.deepEqual(alertes(["Boulet et chaîne", "Champignons fous", "Dague gratuite"]), ["encombrant"]);
  // Sauf si une règle de la figurine l'autorise (règle inventée pour le test, sans description connue : aucune exception).
  assert.equal(autoriseDeuxMainsBouclier({ regles: ["Chef"], competences: [] }), false);
  assert.equal(autoriseDeuxMainsBouclier({ regles: ["Une Seule Attaque, Sans Bouclier"], competences: [] }), false);
  assert.deepEqual(malusEquipement({ equipement: ["Armure lourde", "Bouclier"] }), { M: -1 });
  assert.deepEqual(malusEquipement({ equipement: ["Armure lourde", "Rondache"] }), {});
  console.log("Limites d'équipement OK");
}
