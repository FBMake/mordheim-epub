/**
 * experience.js
 * --------------
 * Piste d'expérience en cases à cocher, comme sur la fiche de personnage
 * d'origine : une case par point d'expérience, les cases épaisses marquant
 * les seuils de progression.
 *
 *  - Héros : 90 cases (3 rangées de 30, comme sur les gabarits hero.png et
 *    homme_de_main.png), seuils 2, 4, 6, 8, 11, 14… 90.
 *  - Hommes de main : 14 cases, seuils 2, 5, 9 et 14.
 *
 * Module sans DOM (testé par test/test-progression.mjs).
 */

export const SEUILS_HEROS = [2, 4, 6, 8, 11, 14, 17, 20, 24, 28, 32, 36, 41, 46, 51, 57, 63, 69, 76, 83, 90];
export const SEUILS_HDM = [2, 5, 9, 14];

/**
 * Croix tracée à la main (deux traits effilés) qui coche une case : dessinée
 * dans un carré 100×100, elle laisse voir le contour de la case.
 * Utilisée par la page (CSS), l'EPUB et le PDF.
 */
export const CROIX_XP_PATH = "M12,12 Q56,38 90,88 Q38,62 12,12 Z M88,10 Q62,58 12,90 Q38,42 88,10 Z";

/** Nombre de cases et seuils de la piste d'une catégorie ("heros" ou "hdm"). */
export function pisteXp(categorie) {
  return categorie === "hdm"
    ? { cases: 14, seuils: new Set(SEUILS_HDM) }
    : { cases: 90, seuils: new Set(SEUILS_HEROS) };
}

/**
 * Piste en HTML : une case <button> par point d'expérience quand elle est
 * modifiable (data-xp = valeur si on clique), sinon des <span>.
 */
export function pisteXpHtml(xp, categorie, { modifiable = false, titre = "" } = {}) {
  const { cases, seuils } = pisteXp(categorie);
  const n = Math.max(0, Math.round(Number(xp) || 0));
  let html = "";
  for (let i = 1; i <= cases; i++) {
    const cls = `xp-case${i <= n ? " cochee" : ""}${seuils.has(i) ? " seuil" : ""}`;
    html += modifiable
      ? `<button type="button" class="${cls}" data-xp="${i === n ? i - 1 : i}" aria-label="${i}"></button>`
      : `<span class="${cls}"></span>`;
  }
  const plus = n > cases ? `<span class="xp-plus">+${n - cases}</span>` : "";
  return `<div class="xp-piste${categorie === "hdm" ? " xp-hdm" : ""}" title="${titre}">${html}${plus}</div>`;
}
