/* Petits écussons aux couleurs des pays, dessinés en SVG (aucune image à charger).
 * Le drapeau est découpé dans une forme d'écu et cerclé de laiton. */

const ECU = "M1 1H29V19Q29 31 15 35Q1 31 1 19Z";

const DRAPEAUX = {
  // France : bleu, blanc, rouge en bandes verticales.
  fr: `<rect width="10" height="36" fill="#0055a4"/><rect x="10" width="10" height="36" fill="#fff"/><rect x="20" width="10" height="36" fill="#ef4135"/>`,
  // Royaume-Uni : Union Jack simplifié.
  en: `<rect width="30" height="36" fill="#012169"/>
    <path d="M0 0L30 36M30 0L0 36" stroke="#fff" stroke-width="7"/>
    <path d="M0 0L30 36M30 0L0 36" stroke="#c8102e" stroke-width="2.4"/>
    <path d="M15 0V36M0 18H30" stroke="#fff" stroke-width="10"/>
    <path d="M15 0V36M0 18H30" stroke="#c8102e" stroke-width="6"/>`,
  // Espagne : rouge, jaune (double), rouge.
  es: `<rect width="30" height="36" fill="#aa151b"/><rect y="9" width="30" height="18" fill="#f1bf00"/>`,
  // Allemagne : noir, rouge, or.
  de: `<rect width="30" height="12" fill="#000"/><rect y="12" width="30" height="12" fill="#dd0000"/><rect y="24" width="30" height="12" fill="#ffce00"/>`,
};

let uid = 0;

export function flagSvg(code) {
  const id = `ecu-${code}-${++uid}`;
  return `<svg class="ecusson" viewBox="0 0 30 36" aria-hidden="true" focusable="false">
    <defs><clipPath id="${id}"><path d="${ECU}"/></clipPath></defs>
    <g clip-path="url(#${id})">${DRAPEAUX[code] || ""}</g>
    <path d="${ECU}" fill="none" stroke="#8a6e3d" stroke-width="1.6"/>
  </svg>`;
}
