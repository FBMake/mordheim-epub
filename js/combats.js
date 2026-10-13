/**
 * combats.js
 * ----------
 * Historique des combats d'une bande et leurs effets sur les combattants.
 *
 * Un combat est enregistré dans le suivi de partie (partie.combats, voir
 * warband-store.js). À l'enregistrement, ses effets sont appliqués une fois
 * pour toutes :
 *   - XP gagnée ajoutée à l'XP actuelle de la figurine,
 *   - nouvel état (blessé, hors de combat, mort) si l'utilisateur en choisit un,
 *   - blessures choisies dans la table (voir blessures.js) : les permanentes
 *     sont ajoutées à la figurine (malus sur son profil), « mort » l'envoie
 *     au cimetière,
 *   - équipement gagné ou perdu : modifié directement sur une bande créée
 *     dans l'application, noté (+objet / −objet) sur une bande importée,
 *   - gains de la bande (couronnes, pierres magiques) ajoutés au magot.
 * Supprimer un combat de l'historique n'annule pas ces effets.
 */

import { MORT, cleanBlessures, getBlessure, nomBlessure } from "./blessures.js";

/** États possibles d'une figurine ("" : en forme). Valeurs enregistrées, traduites à l'affichage. */
export const STATUTS = ["", "Blessé", "Hors de combat", "Mort"];

export const RESULTATS = ["victoire", "defaite", "nul"];

function toInt(v) {
  const n = Math.trunc(Number(v));
  return Number.isFinite(n) ? n : 0;
}

function cleanList(v) {
  return (Array.isArray(v) ? v : []).map((x) => String(x).trim()).filter(Boolean);
}

/** Découpe « Épée, arc » en ["Épée", "arc"]. */
export function splitItems(text) {
  return cleanList(String(text || "").split(/[,;\n]/));
}

function cleanEffet(e = {}) {
  return {
    id: String(e.id || ""),
    nom: String(e.nom || ""),
    xp: toInt(e.xp),
    // null : état inchangé par ce combat.
    statut: STATUTS.includes(e.statut) ? e.statut : null,
    // Texte libre des combats notés avant la table des blessures.
    blessure: String(e.blessure || "").trim(),
    blessures: cleanBlessures(e.blessures),
    gagne: cleanList(e.gagne),
    perdu: cleanList(e.perdu),
  };
}

/** Valide et normalise un combat (lecture, import de sauvegarde). */
export function cleanCombat(c = {}) {
  return {
    id: String(c.id || `combat-${Date.now().toString(36)}`),
    date: /^\d{4}-\d{2}-\d{2}$/.test(c.date) ? c.date : new Date().toISOString().slice(0, 10),
    adversaire: String(c.adversaire || "").trim(),
    scenario: String(c.scenario || "").trim(),
    resultat: RESULTATS.includes(c.resultat) ? c.resultat : "",
    gainOr: toInt(c.gainOr),
    gainPierres: toInt(c.gainPierres),
    notes: String(c.notes || "").trim(),
    effets: (Array.isArray(c.effets) ? c.effets : []).map(cleanEffet).filter((e) => e.id),
  };
}

/** Un effet sans rien de renseigné n'est pas gardé dans l'historique. */
export function effetVide(e) {
  return !e.xp && e.statut === null && !e.blessure && !e.blessures.length && !e.gagne.length && !e.perdu.length;
}

function appendNote(notes, line) {
  return notes ? `${notes}\n${line}` : line;
}

/**
 * Enregistre un combat et applique ses effets (mutations en place).
 *
 * @param {object} combat - combat saisi (nettoyé par cleanCombat)
 * @param {object} ctx
 * @param {object} ctx.partie - suivi de partie de la bande
 * @param {object|null} ctx.creation - modèle d'une bande créée ici (null si importée)
 * @param {Object<string, number>} ctx.xpActuel - XP actuelle de chaque figurine, par id
 * @param {number} ctx.magotOr - magot actuel en couronnes
 * @param {number} ctx.magotPierres - pierres magiques actuelles
 * @returns {object} le combat enregistré
 */
export function appliquerCombat(combat, { partie, creation, xpActuel, magotOr, magotPierres }) {
  const c = cleanCombat(combat);
  c.effets = c.effets.filter((e) => !effetVide(e));

  for (const e of c.effets) {
    const f = (partie.figurines[e.id] ||= { xp: null, statut: "", notes: "", blessures: [] });
    f.blessures ||= [];
    if (e.xp) f.xp = Math.max(0, toInt(xpActuel[e.id]) + e.xp);
    // Une blessure « mort » sans état choisi envoie la figurine au cimetière.
    if (e.statut === null && e.blessures.includes(MORT)) e.statut = "Mort";
    if (e.statut !== null) f.statut = e.statut;
    if (e.blessure) f.notes = appendNote(f.notes, e.blessure);
    f.blessures.push(...e.blessures.filter((id) => getBlessure(id).permanent));

    const fig = creation?.figurines.find((x) => x.id === e.id);
    if (fig) {
      fig.equipement.push(...e.gagne);
      for (const objet of e.perdu) {
        const i = fig.equipement.findIndex((x) => x.toLowerCase() === objet.toLowerCase());
        if (i >= 0) fig.equipement.splice(i, 1);
      }
    } else {
      // Bande importée : l'équipement vient de New Recruit, on le note.
      const changes = [...e.gagne.map((o) => `+${o}`), ...e.perdu.map((o) => `−${o}`)];
      if (changes.length) f.notes = appendNote(f.notes, changes.join(", "));
    }
  }

  if (c.gainOr) partie.magotOr = Math.max(0, toInt(magotOr) + c.gainOr);
  if (c.gainPierres) partie.magotPierres = Math.max(0, toInt(magotPierres) + c.gainPierres);

  partie.combats.unshift(c);
  return c;
}

/** Bilan d'une figurine sur tout l'historique : nombre de combats, XP gagnée, blessures (de la plus ancienne à la plus récente). */
export function bilanFigurine(combats, id) {
  // L'historique est rangé du plus récent au plus ancien.
  const effets = [...combats].reverse().flatMap((c) => c.effets.filter((e) => e.id === id));
  return {
    combats: effets.length,
    xp: effets.reduce((s, e) => s + e.xp, 0),
    blessures: effets.flatMap((e) => [e.blessure, ...e.blessures.map(nomBlessure)]).filter(Boolean),
  };
}
