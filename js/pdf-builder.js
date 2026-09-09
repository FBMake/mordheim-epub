/**
 * pdf-builder.js
 * --------------
 * Construit un fichier .pdf en superposant le texte du modèle normalisé
 * (parser.js + personalization.js) sur les gabarits image fournis par
 * l'utilisateur (Bande, Héros, Homme de main) et sur un gabarit "Règles"
 * nettoyé (bordure + titre conservés, répété sur autant de pages que
 * nécessaire).
 *
 * Les coordonnées de chaque champ sont définies dans tools/coords/*.json
 * (voir tools/coord-picker.html pour les régénérer/ajuster soi-même).
 *
 * Dépend du module vendorisé js/vendor/pdf-lib.esm.min.js.
 */

import { PDFDocument, rgb, StandardFonts } from "./vendor/pdf-lib.esm.min.js";

const FONT_MAP = {
  TimesRoman: { regular: StandardFonts.TimesRoman, bold: StandardFonts.TimesRomanBold },
  Helvetica: { regular: StandardFonts.Helvetica, bold: StandardFonts.HelveticaBold },
  Courier: { regular: StandardFonts.Courier, bold: StandardFonts.CourierBold },
};

const INK = rgb(0x24 / 255, 0x1d / 255, 0x15 / 255);
const WAX = rgb(0x7a / 255, 0x2e / 255, 0x2e / 255);

async function fetchBytes(path) {
  const res = await fetch(path, { cache: "no-store" });
  if (!res.ok) throw new Error(`Impossible de charger ${path}`);
  return new Uint8Array(await res.arrayBuffer());
}

async function fetchJson(path) {
  const res = await fetch(path, { cache: "no-store" });
  if (!res.ok) throw new Error(`Impossible de charger ${path}`);
  return res.json();
}

/**
 * Découpe un texte en lignes qui tiennent dans maxWidth (en points PDF),
 * pour la police et la taille données.
 */
function wrapText(text, font, size, maxWidth) {
  const paragraphs = String(text || "").split(/\n+/);
  const lines = [];
  for (const para of paragraphs) {
    const words = para.split(/\s+/).filter(Boolean);
    let line = "";
    for (const word of words) {
      const test = line ? `${line} ${word}` : word;
      if (font.widthOfTextAtSize(test, size) > maxWidth && line) {
        lines.push(line);
        line = word;
      } else {
        line = test;
      }
    }
    if (line) lines.push(line);
    if (!words.length) lines.push(""); // ligne vide = saut de paragraphe
  }
  return lines;
}

function drawField(page, font, text, field) {
  if (text === undefined || text === null || text === "") return;
  const size = field.size || 22;
  const str = String(text);

  if (field.maxWidth) {
    const lineHeight = field.lineHeight || size * 1.3;
    const lines = wrapText(str, font, size, field.maxWidth);
    lines.forEach((line, i) => {
      page.drawText(line, {
        x: field.x,
        y: page.getHeight() - field.y - i * lineHeight,
        size,
        font,
        color: INK,
      });
    });
    return;
  }

  let x = field.x;
  const width = font.widthOfTextAtSize(str, size);
  if (field.align === "center") x -= width / 2;
  if (field.align === "right") x -= width;
  page.drawText(str, {
    x,
    y: page.getHeight() - field.y,
    size,
    font,
    color: INK,
  });
}

async function embedImageFile(pdfDoc, path) {
  const bytes = await fetchBytes(path);
  return pdfDoc.embedPng(bytes);
}

async function addTemplatePage(pdfDoc, font, imagePath, coords, values, extra) {
  const imageBytes = await fetchBytes(imagePath);
  const image = await pdfDoc.embedPng(imageBytes);
  const page = pdfDoc.addPage([coords.width, coords.height]);
  page.drawImage(image, { x: 0, y: 0, width: coords.width, height: coords.height });

  for (const [key, field] of Object.entries(coords.fields)) {
    if (key === "photo") continue; // géré séparément (image, pas texte)
    drawField(page, font, values[key], field);
  }

  if (coords.fields.photo && extra && extra.photoDataUrl) {
    try {
      const base64 = extra.photoDataUrl.slice(extra.photoDataUrl.indexOf(",") + 1);
      const bin = atob(base64);
      const bytes = new Uint8Array(bin.length);
      for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
      const photo = await pdfDoc.embedJpg(bytes);
      const f = coords.fields.photo;
      page.drawImage(photo, {
        x: f.x,
        y: coords.height - f.y - f.height,
        width: f.width,
        height: f.height,
      });
    } catch {
      // photo illisible : on l'ignore plutôt que de faire échouer tout le PDF
    }
  }
  return page;
}

function characterFieldValues(card) {
  const s = card.stats;
  return {
    nom: card.nomPersonnalise || card.nom,
    type: card.nomPersonnalise ? card.typeOrigine : "",
    type_code: `${card.coutGc} po`,
    bio: card.bio || "",
    stat_M: s.M, stat_CC: s.CC, stat_CT: s.CT, stat_F: s.F, stat_E: s.E,
    stat_PV: s.PV, stat_I: s.I, stat_A: s.A, stat_CD: s.Cd,
    equipement: card.equipement
      .map((e) => {
        const details = e.details.filter((d) => d.value).map((d) => `${d.label}: ${d.value}`).join(", ");
        return details ? `${e.nom} (${details})` : e.nom;
      })
      .join("\n"),
    competences_blessures: [
      ...card.competences.map((c) => c.name),
      ...card.reglesSpeciales.map((r) => r.name),
      ...card.blessures.map((b) => b.name),
      ...(card.augmentations.length ? [`Augmentations: ${card.augmentations.join(", ")}`] : []),
    ].join("\n"),
  };
}

function frSort(a, b) {
  return a.localeCompare(b, "fr", { sensitivity: "base" });
}

function buildCompendiums(model) {
  const dedupe = (list) => {
    const byName = new Map();
    for (const r of list) if (r && r.name && !byName.has(r.name)) byName.set(r.name, r);
    return [...byName.values()].sort((a, b) => frSort(a.name, b.name));
  };
  const allCards = [...model.heros, ...model.hommesDeMain];
  return {
    armes: dedupe(allCards.flatMap((c) => c.reglesArmes)),
    speciales: dedupe(allCards.flatMap((c) => [...c.competences, ...c.reglesSpeciales])),
    equipe: dedupe(model.reglesGenerales),
    blessures: dedupe(allCards.flatMap((c) => c.blessures)),
  };
}

/**
 * Ajoute les pages du chapitre Règles sur le gabarit "vierge" (bordure +
 * titre conservés), en répartissant le texte sur autant de pages que
 * nécessaire. La zone de texte et les tailles de police viennent du
 * fichier tools/coords/regles-coords.json (modifiable avec l'outil
 * tools/coord-picker.html, comme les autres gabarits).
 */
async function addRulesPages(pdfDoc, font, boldFont, model) {
  const imageBytes = await fetchBytes("data/templates/regles-vierge.png");
  const image = await pdfDoc.embedPng(imageBytes);

  let coords;
  try {
    coords = await fetchJson("tools/coords/regles-coords.json");
  } catch {
    coords = null;
  }
  const W = (coords && coords.width) || 1414;
  const H = (coords && coords.height) || 2000;
  const contentField = coords?.fields?.content || { x: 90, y: 220, width: W - 180, height: H - 280 };
  const contentX = contentField.x, contentTop = contentField.y, contentWidth = contentField.width;
  const contentBottom = contentField.y + contentField.height;
  const titleSize = coords?.fields?.section_title?.size || 24;
  const bodySize = coords?.fields?.rule_body?.size || 20;
  const lineHeight = Math.round(bodySize * 1.35);
  const sectionGap = 16;

  const { armes, speciales, equipe, blessures } = buildCompendiums(model);
  const sections = [
    ["Règles des Armes", armes],
    ["Règles Spéciales", speciales],
    ["Règles d'Équipe", equipe],
    ["Blessures", blessures],
  ];

  let page = null;
  let y = contentBottom + 1; // force une nouvelle page dès la première ligne

  function newPage() {
    page = pdfDoc.addPage([W, H]);
    page.drawImage(image, { x: 0, y: 0, width: W, height: H });
    y = contentTop;
  }

  function ensureSpace(neededHeight) {
    if (y + neededHeight > contentBottom) newPage();
  }

  function drawLine(text, opts = {}) {
    const f = opts.bold ? boldFont : font;
    const size = opts.size || bodySize;
    ensureSpace(size + 6);
    page.drawText(text, { x: contentX, y: H - y, size, font: f, color: opts.color || INK });
    y += (opts.leading || lineHeight);
  }

  newPage();
  for (const [title, rules] of sections) {
    drawLine(title, { bold: true, size: titleSize, color: WAX, leading: titleSize + 14 });
    if (!rules.length) {
      drawLine("Aucune règle référencée.", { leading: lineHeight + sectionGap });
      continue;
    }
    for (const rule of rules) {
      drawLine(rule.name, { bold: true });
      const lines = wrapText(rule.description, font, bodySize, contentWidth);
      for (const line of lines) drawLine(line);
      y += sectionGap;
    }
  }
}

/**
 * Construit le Blob .pdf complet.
 * @param {object} model - modèle normalisé (parser.js), personnalisation
 *   déjà appliquée (card.nomPersonnalise / bio / photo)
 * @returns {Promise<Blob>}
 */
export async function buildPdf(model) {
  const pdfDoc = await PDFDocument.create();

  // Le choix de police est global : on lit celui du gabarit "bande"
  // (les 3 fichiers de coordonnées doivent normalement être cohérents,
  // puisque défini une seule fois dans l'outil de pointage).
  const bandeCoordsForFont = await fetchJson("tools/coords/bande-coords.json");
  const fontChoice = FONT_MAP[bandeCoordsForFont.font] || FONT_MAP.TimesRoman;
  const font = await pdfDoc.embedFont(fontChoice.regular);
  const boldFont = await pdfDoc.embedFont(fontChoice.bold);

  // 1) Bande
  const bandeCoords = await fetchJson("tools/coords/bande-coords.json");
  const reglesBandeNoms = model.reglesGenerales.map((r) => r.name).join(", ");
  await addTemplatePage(pdfDoc, font, "data/templates/bande.png", bandeCoords, {
    nom_bande: model.meta.nom,
    type_bande: model.meta.catalogue,
    bio: reglesBandeNoms ? `Règles de bande : ${reglesBandeNoms}` : "",
    equipement_col1: "",
    equipement_col2: "",
    magot_couronnes: String(model.bande.magotOr),
    magot_pierres: String(model.bande.magotPierres),
    valeur_bande_exp: String(model.bande.xpTotal),
    valeur_bande_total: String(model.bande.valeurDeBande),
  });

  // 2) Héros
  const heroCoords = await fetchJson("tools/coords/hero-coords.json");
  for (const card of model.heros) {
    await addTemplatePage(
      pdfDoc, font, "data/templates/hero.png", heroCoords,
      characterFieldValues(card), { photoDataUrl: card.photo }
    );
  }

  // 3) Hommes de main
  const hdmCoords = await fetchJson("tools/coords/homme_de_main-coords.json");
  for (const card of model.hommesDeMain) {
    await addTemplatePage(
      pdfDoc, font, "data/templates/homme_de_main.png", hdmCoords,
      characterFieldValues(card), { photoDataUrl: card.photo }
    );
  }

  // 4) Règles (gabarit nettoyé, réparti sur autant de pages que nécessaire)
  await addRulesPages(pdfDoc, font, boldFont, model);

  const bytes = await pdfDoc.save();
  return new Blob([bytes], { type: "application/pdf" });
}
