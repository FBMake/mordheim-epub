/**
 * pdf-builder.js
 * --------------
 * Construit un fichier .pdf en superposant le texte du modèle normalisé
 * (parser.js + personalization.js) sur les gabarits image fournis par
 * l'utilisateur (data/templates/<langue>/*.jpg), dans cet ordre :
 *   couverture, bande, compte de bande, effectif (une ligne par héros ou
 *   groupe), une fiche par héros, les hommes de main (cinq groupes par
 *   page), les règles et l'historique des combats (répartis sur autant de
 *   pages que nécessaire).
 *
 * Les coordonnées de chaque champ sont définies dans tools/coords/*.json,
 * en pixels de l'image (1414 × 2000), y vers le bas ; pour un texte, y est
 * la ligne de base.
 *
 * Dépend du module vendorisé js/vendor/pdf-lib.esm.min.js.
 */

import { PDFDocument, rgb, StandardFonts } from "./vendor/pdf-lib.esm.min.js";
import { LANGUE_DEFAUT, getLang, getLocale, t } from "./i18n.js";
import { CROIX_XP_PATH } from "./experience.js";
import { MORT, nomBlessure } from "./blessures.js";

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

/**
 * Gabarit de la langue choisie (data/templates/<langue>/<nom>), sinon le
 * gabarit français : une langue sans gabarits imprime les fiches françaises.
 */
async function fetchTemplate(name) {
  const lang = getLang();
  if (lang !== LANGUE_DEFAUT) {
    try {
      return await fetchBytes(`data/templates/${lang}/${name}`);
    } catch {
      // Pas encore de gabarit dans cette langue.
    }
  }
  return fetchBytes(`data/templates/${LANGUE_DEFAUT}/${name}`);
}

async function fetchJson(path) {
  const res = await fetch(path, { cache: "no-store" });
  if (!res.ok) throw new Error(`Impossible de charger ${path}`);
  return res.json();
}

/** Image de gabarit intégrée une seule fois, même si elle sert sur plusieurs pages. */
function templateCache(pdfDoc) {
  const cache = new Map();
  return (name) => {
    if (!cache.has(name)) {
      cache.set(
        name,
        fetchTemplate(name).then((bytes) => (/\.png$/i.test(name) ? pdfDoc.embedPng(bytes) : pdfDoc.embedJpg(bytes)))
      );
    }
    return cache.get(name);
  };
}

/**
 * Les polices standard du PDF ne couvrent que l'alphabet latin courant
 * (WinAnsi) : les autres caractères sont remplacés plutôt que de faire
 * échouer tout le PDF.
 */
function lisible(font, text) {
  const str = String(text).replace(/\u2212/g, "-").replace(/[\u2010-\u2013]/g, "-");
  try {
    font.encodeText(str);
    return str;
  } catch {
    return [...str]
      .map((ch) => {
        try {
          font.encodeText(ch);
          return ch;
        } catch {
          return "?";
        }
      })
      .join("");
  }
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

/**
 * Écrit un champ. Avec lineHeight (ou maxY), le texte passe à la ligne dans
 * maxWidth et s'arrête avant maxY (dernière ligne terminée par « … ») ; avec
 * maxWidth seul, il tient sur une ligne et la taille diminue si besoin.
 */
function drawField(page, fonts, text, field) {
  if (text === undefined || text === null || text === "") return;
  const font = field.bold ? fonts.bold : fonts.regular;
  const color = field.color === "wax" ? WAX : INK;
  let size = field.size || 22;
  const str = String(text).split("\n").map((l) => lisible(font, l)).join("\n");
  const H = page.getHeight();

  if (field.maxWidth && (field.lineHeight || field.maxY)) {
    const lineHeight = field.lineHeight || size * 1.3;
    let lines = wrapText(str, font, size, field.maxWidth);
    if (field.maxY) {
      const max = Math.max(1, Math.floor((field.maxY - field.y) / lineHeight) + 1);
      if (lines.length > max) {
        lines = lines.slice(0, max);
        lines[max - 1] = `${lines[max - 1]}…`;
      }
    }
    lines.forEach((line, i) => {
      page.drawText(line, { x: field.x, y: H - field.y - i * lineHeight, size, font, color });
    });
    return;
  }

  let width = font.widthOfTextAtSize(str, size);
  if (field.maxWidth && width > field.maxWidth) {
    size = Math.max(8, size * (field.maxWidth / width));
    width = font.widthOfTextAtSize(str, size);
  }
  let x = field.x;
  if (field.align === "center") x -= width / 2;
  if (field.align === "right") x -= width;
  page.drawText(str, { x, y: H - field.y, size, font, color });
}

/** Champ d'un bloc répété (ligne d'effectif, groupe d'hommes de main) : dy depuis le haut du bloc. */
function placer(field, y0, dx = 0) {
  const out = { ...field, x: field.x + dx, y: y0 + field.dy };
  if (field.maxDy !== undefined) out.maxY = y0 + field.maxDy;
  return out;
}

/** Coche les cases d'expérience du gabarit d'une croix à la main (une par point, rangée par rangée). */
function cocherXp(page, zone, xp) {
  const n = Math.min(Math.max(0, Math.round(Number(xp) || 0)), zone.rangs.length * zone.parRang);
  const cote = Math.min(zone.largeur, zone.hauteur);
  for (let i = 0; i < n; i++) {
    const x = zone.x + (i % zone.parRang) * zone.pas + (zone.largeur - cote) / 2;
    const yHaut = zone.rangs[Math.floor(i / zone.parRang)] + (zone.hauteur - cote) / 2;
    // drawSvgPath place l'origine du tracé (axe y vers le bas) au point donné.
    page.drawSvgPath(CROIX_XP_PATH, {
      x,
      y: page.getHeight() - yHaut,
      scale: cote / 100,
      color: WAX,
      borderWidth: 0,
    });
  }
}

const STAT_KEYS = ["M", "CC", "CT", "F", "E", "PV", "I", "A", "Cd"];

function drawStats(page, fonts, stats, zone, y) {
  STAT_KEYS.forEach((k, i) => {
    drawField(page, fonts, stats?.[k], { x: zone.xs[i], y, align: "center", size: zone.size });
  });
}

/** Photo posée dans son cadre sans être déformée (centrée, proportions gardées). */
async function drawPhoto(pdfDoc, page, dataUrl, f) {
  try {
    const base64 = dataUrl.slice(dataUrl.indexOf(",") + 1);
    const bin = atob(base64);
    const bytes = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
    const photo = /^data:image\/png/.test(dataUrl) ? await pdfDoc.embedPng(bytes) : await pdfDoc.embedJpg(bytes);
    const scale = Math.min(f.width / photo.width, f.height / photo.height);
    const width = photo.width * scale;
    const height = photo.height * scale;
    page.drawImage(photo, {
      x: f.x + (f.width - width) / 2,
      y: page.getHeight() - f.y - (f.height + height) / 2,
      width,
      height,
    });
  } catch {
    // photo illisible : on l'ignore plutôt que de faire échouer tout le PDF
  }
}

async function addTemplatePage(pdfDoc, ctx, coords, values, extra = {}) {
  const image = await ctx.template(coords.image);
  const page = pdfDoc.addPage([coords.width, coords.height]);
  page.drawImage(image, { x: 0, y: 0, width: coords.width, height: coords.height });

  for (const [key, field] of Object.entries(coords.fields)) {
    if (key === "photo" || key === "xp_cases") continue; // gérés séparément (image, cases)
    drawField(page, ctx.fonts, values[key], field);
  }
  if (coords.fields.xp_cases && extra.xp) cocherXp(page, coords.fields.xp_cases, extra.xp);
  if (coords.fields.photo && extra.photoDataUrl) await drawPhoto(pdfDoc, page, extra.photoDataUrl, coords.fields.photo);
  return page;
}

function listeEquipement(card) {
  return card.equipement.map((e) => {
    const details = e.details.filter((d) => d.value).map((d) => `${d.label}: ${d.value}`).join(", ");
    return details ? `${e.nom} (${details})` : e.nom;
  });
}

/** Compétences, règles spéciales, blessures et suivi de partie d'une figurine. */
function listeRegles(card) {
  return [
    ...card.competences.map((c) => c.name),
    ...card.reglesSpeciales.map((r) => r.name),
    ...card.blessures.map((b) => b.name),
    ...(card.augmentations.length ? [`Augmentations: ${card.augmentations.join(", ")}`] : []),
    // Suivi de partie (voir warband-store.js), absent du roster BattleScribe.
    ...(card.statut ? [t("pdf.etat", { statut: t(`statut.${card.statut}`) })] : []),
    ...(card.notesPartie ? [card.notesPartie] : []),
  ];
}

/** Nom d'un groupe d'hommes de main sans son « ×3 ». */
const typeGroupe = (card) => card.typeOrigine.replace(/\s*×\d+$/, "");

function characterFieldValues(card) {
  const s = card.stats;
  return {
    nom: card.nomPersonnalise || card.nom,
    type: card.typeOrigine,
    type_code: `${card.coutGc} co`,
    bio: card.bio || "",
    stat_M: s.M, stat_CC: s.CC, stat_CT: s.CT, stat_F: s.F, stat_E: s.E,
    stat_PV: s.PV, stat_I: s.I, stat_A: s.A, stat_CD: s.Cd,
    equipement: listeEquipement(card).join("\n"),
    competences_blessures: listeRegles(card).join("\n"),
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

/** Effectif : une ligne par héros puis par groupe d'hommes de main, 13 lignes par page. */
async function addEffectifPages(pdfDoc, ctx, coords, cards) {
  const parPage = coords.lignes.length;
  const f = coords.fields;
  for (let debut = 0; debut < Math.max(cards.length, 1); debut += parPage) {
    const page = pdfDoc.addPage([coords.width, coords.height]);
    page.drawImage(await ctx.template(coords.image), { x: 0, y: 0, width: coords.width, height: coords.height });
    cards.slice(debut, debut + parPage).forEach((card, i) => {
      const y0 = coords.lignes[i];
      const nom = card.nomPersonnalise || card.nom;
      drawField(page, ctx.fonts, nom, placer(f.nom, y0));
      const type = card.nomPersonnalise ? card.typeOrigine : "";
      drawField(page, ctx.fonts, [type, `${card.xp} xp`].filter(Boolean).join(" · "), placer(f.type, y0));
      drawStats(page, ctx.fonts, card.stats, f.stats, y0 + f.stats.dy);
    });
  }
}

/** Hommes de main : cinq groupes par page. */
async function addHommesDeMainPages(pdfDoc, ctx, coords, cards) {
  const parPage = coords.groupes.length;
  const f = coords.fields;
  for (let debut = 0; debut < cards.length; debut += parPage) {
    const page = pdfDoc.addPage([coords.width, coords.height]);
    page.drawImage(await ctx.template(coords.image), { x: 0, y: 0, width: coords.width, height: coords.height });
    cards.slice(debut, debut + parPage).forEach((card, i) => {
      const { y: y0, dx } = coords.groupes[i];
      drawField(page, ctx.fonts, card.nomPersonnalise || typeGroupe(card), placer(f.nom, y0, dx));
      drawField(page, ctx.fonts, typeGroupe(card), placer(f.type, y0, dx));
      drawField(page, ctx.fonts, card.nombre || 1, placer(f.quantite, y0, dx));
      drawStats(page, ctx.fonts, card.stats, { ...f.stats, xs: f.stats.xs.map((x) => x + dx) }, y0 + f.stats.dy);
      drawField(page, ctx.fonts, listeEquipement(card).join(", "), placer(f.equipement, y0, dx));
      drawField(page, ctx.fonts, listeRegles(card).join(", "), placer(f.regles, y0, dx));
      const xp = f.xp_cases;
      if (card.xp) cocherXp(page, { ...xp, x: xp.x + dx, rangs: [y0 + xp.dy] }, card.xp);
    });
  }
}

/**
 * Texte suivi réparti sur autant de pages que nécessaire (règles,
 * historique) : chaque page reprend le gabarit, le texte reste dans la
 * zone « content » des coordonnées.
 */
function pagesSuivies(pdfDoc, ctx, coords, image) {
  const W = coords.width;
  const H = coords.height;
  const zone = coords.fields.content;
  const bas = zone.y + zone.height;
  let page = null;
  let y = bas + 1; // nouvelle page dès la première ligne

  function nouvellePage() {
    page = pdfDoc.addPage([W, H]);
    page.drawImage(image, { x: 0, y: 0, width: W, height: H });
    y = zone.y;
  }

  return {
    /** Une ligne de texte ; leading = avance après la ligne. */
    ligne(text, { bold = false, size, color = INK, leading = size * 1.35, indent = 0 } = {}) {
      if (y + size * 0.3 > bas) nouvellePage();
      const font = bold ? ctx.fonts.bold : ctx.fonts.regular;
      page.drawText(lisible(font, text), { x: zone.x + indent, y: H - y, size, font, color });
      y += leading;
    },
    /** Paragraphe découpé à la largeur de la zone. */
    paragraphe(text, { bold = false, size, indent = 0, color } = {}) {
      const font = bold ? ctx.fonts.bold : ctx.fonts.regular;
      for (const line of wrapText(lisible(font, text), font, size, zone.width - indent)) {
        this.ligne(line, { bold, size, indent, color });
      }
    },
    espace(px) {
      y += px;
    },
    /** Commence un bloc sur une nouvelle page s'il ne reste pas la place de hauteur px. */
    garderEnsemble(px) {
      if (y + px > bas) nouvellePage();
    },
    commencer() {
      nouvellePage();
    },
  };
}

/** Chapitre Règles : règles des armes, spéciales, d'équipe et blessures. */
async function addRulesPages(pdfDoc, ctx, coords, model) {
  const titleSize = coords.fields.section_title?.size || 26;
  const bodySize = coords.fields.rule_body?.size || 20;
  const texte = pagesSuivies(pdfDoc, ctx, coords, await ctx.template(coords.image));

  const { armes, speciales, equipe, blessures } = buildCompendiums(model);
  const sections = [
    ["Règles des Armes", armes],
    ["Règles Spéciales", speciales],
    ["Règles d'Équipe", equipe],
    ["Blessures", blessures],
  ];

  texte.commencer();
  for (const [title, rules] of sections) {
    texte.garderEnsemble(titleSize + bodySize * 3);
    texte.ligne(title, { bold: true, size: titleSize, color: WAX, leading: titleSize + 14 });
    if (!rules.length) {
      texte.ligne("Aucune règle référencée.", { size: bodySize });
      texte.espace(16);
      continue;
    }
    for (const rule of rules) {
      texte.garderEnsemble(bodySize * 3);
      texte.ligne(rule.name, { bold: true, size: bodySize });
      texte.paragraphe(rule.description, { size: bodySize });
      texte.espace(16);
    }
  }
}

function dateCombat(iso) {
  const d = new Date(`${iso}T12:00:00`);
  return Number.isNaN(d.getTime()) ? iso : d.toLocaleDateString(getLocale(), { dateStyle: "long" });
}

function effetTexte(e) {
  const parts = [];
  if (e.xp) parts.push(t("combats.xpCourt", { n: e.xp }));
  if (e.statut !== null) parts.push(t(`statut.${e.statut}`));
  if (e.blessure) parts.push(e.blessure);
  // « Mort » est déjà dit par l'état.
  parts.push(...(e.blessures || []).filter((id) => !(id === MORT && e.statut === "Mort")).map(nomBlessure));
  parts.push(...e.gagne.map((o) => `+${o}`), ...e.perdu.map((o) => `-${o}`));
  return `${e.nom} : ${parts.join(", ")}`;
}

/**
 * Historique des combats, du plus ancien au plus récent. Sans combat noté,
 * la page reste vierge pour être remplie à la main.
 */
async function addHistoriquePages(pdfDoc, ctx, coords, combats) {
  const titreSize = coords.fields.titre?.size || 24;
  const size = coords.fields.texte?.size || 20;
  const texte = pagesSuivies(pdfDoc, ctx, coords, await ctx.template(coords.image));
  texte.commencer();
  [...combats].reverse().forEach((c, i) => {
    texte.garderEnsemble(titreSize + size * 4);
    const titre = [
      `${i + 1}. ${dateCombat(c.date)}`,
      c.adversaire ? t("combats.contre", { nom: c.adversaire }) : "",
      c.resultat ? `- ${t(`resultat.${c.resultat}`)}` : "",
    ].filter(Boolean).join(" ");
    texte.ligne(titre, { bold: true, size: titreSize, color: WAX, leading: titreSize + 10 });
    if (c.scenario) texte.paragraphe(t("combats.scenarioLigne", { nom: c.scenario }), { size });
    const gains = [];
    if (c.gainOr) gains.push(t("combats.gainOrCourt", { n: c.gainOr }));
    if (c.gainPierres) gains.push(t("combats.gainPierresCourt", { n: c.gainPierres }));
    if (gains.length) texte.paragraphe(t("combats.gains", { liste: gains.join(", ") }), { size });
    for (const e of c.effets) texte.paragraphe(`• ${effetTexte(e)}`, { size, indent: 18 });
    if (c.notes) texte.paragraphe(c.notes, { size });
    texte.espace(22);
  });
}

/**
 * Construit le Blob .pdf complet.
 * @param {object} model - modèle normalisé (parser.js), personnalisation
 *   déjà appliquée (card.nomPersonnalise / bio / photo)
 * @param {object} [options]
 * @param {Array} [options.combats] - historique des combats (partie.combats)
 * @returns {Promise<Blob>}
 */
export async function buildPdf(model, { combats = [] } = {}) {
  // Les figurines au cimetière (état « Mort ») n'ont plus de fiche.
  const vivante = (card) => card.statut !== "Mort";
  model = { ...model, heros: model.heros.filter(vivante), hommesDeMain: model.hommesDeMain.filter(vivante) };
  const pdfDoc = await PDFDocument.create();

  const coords = Object.fromEntries(
    await Promise.all(
      ["couverture", "bande", "compte", "effectif", "hero", "homme_de_main", "regles", "historique"].map(
        async (nom) => [nom, await fetchJson(`tools/coords/${nom}-coords.json`)]
      )
    )
  );
  // Le choix de police est global : on lit celui du gabarit « bande ».
  const fontChoice = FONT_MAP[coords.bande.font] || FONT_MAP.TimesRoman;
  const ctx = {
    template: templateCache(pdfDoc),
    fonts: {
      regular: await pdfDoc.embedFont(fontChoice.regular),
      bold: await pdfDoc.embedFont(fontChoice.bold),
    },
  };

  // 1) Couverture
  await addTemplatePage(pdfDoc, ctx, coords.couverture, {
    nom_bande: model.meta.nom,
    type_bande: model.meta.catalogue,
  });

  // 2) Bande
  const reglesBandeNoms = model.reglesGenerales.map((r) => r.name).join(", ");
  await addTemplatePage(pdfDoc, ctx, coords.bande, {
    nom_bande: model.meta.nom,
    type_bande: model.meta.catalogue,
    bio: reglesBandeNoms ? `Règles de bande : ${reglesBandeNoms}` : "",
    valeur_bande_exp: String(model.bande.xpTotal),
    valeur_bande_total: String(model.bande.valeurDeBande),
  });

  // 3) Compte de bande
  await addTemplatePage(pdfDoc, ctx, coords.compte, {
    magot_couronnes: `${model.bande.magotOr} co`,
    magot_pierres: String(model.bande.magotPierres),
    reserve: model.bande.notesPartie || "",
  });

  // 4) Effectif
  await addEffectifPages(pdfDoc, ctx, coords.effectif, [...model.heros, ...model.hommesDeMain]);

  // 5) Héros
  for (const card of model.heros) {
    await addTemplatePage(pdfDoc, ctx, coords.hero, characterFieldValues(card), {
      photoDataUrl: card.photo,
      xp: card.xp,
    });
  }

  // 6) Hommes de main
  await addHommesDeMainPages(pdfDoc, ctx, coords.homme_de_main, model.hommesDeMain);

  // 7) Règles, 8) Historique (répartis sur autant de pages que nécessaire)
  await addRulesPages(pdfDoc, ctx, coords.regles, model);
  await addHistoriquePages(pdfDoc, ctx, coords.historique, combats);

  const bytes = await pdfDoc.save();
  return new Blob([bytes], { type: "application/pdf" });
}
