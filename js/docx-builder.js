/**
 * docx-builder.js
 * ---------------
 * Construit un fichier .docx à partir du modèle normalisé (parser.js),
 * en remplacement de l'ancien export EPUB : contrairement à l'EPUB
 * (mise en page fluide, dépendante de la liseuse), le DOCX a des pages
 * de taille fixe, ce qui permet un contrôle strict des sauts de page et
 * de la taille des images — décision prise avec l'utilisateur suite à
 * des problèmes de redimensionnement en EPUB.
 *
 * Même organisation de contenu que l'EPUB :
 *   1. Bande, 2. Héros, 3. Hommes de main (une figurine = une page),
 *   4. Règles (Armes / Spéciales / Équipe), sans doublon.
 *
 * Dépend du module vendorisé js/vendor/docx.mjs (bundle ESM autonome).
 */

import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  PageBreak,
  HeadingLevel,
  AlignmentType,
  Table,
  TableRow,
  TableCell,
  WidthType,
  BorderStyle,
  ImageRun,
  ShadingType,
  VerticalAlign,
} from "./vendor/docx.mjs";

// --- Palette reprise du site (cf. css/style.css) ---
const INK = "241D15";
const BRASS = "8A6E3D";
const WAX = "7A2E2E";
const PARCHMENT = "EDE0C8";

const STAT_KEYS = ["M", "CC", "CT", "F", "E", "PV", "I", "A", "Cd"];
const PHOTO_SIZE_PX = 140;

function frSort(a, b) {
  return a.localeCompare(b, "fr", { sensitivity: "base" });
}

function dataUrlToUint8Array(dataUrl) {
  const base64 = dataUrl.slice(dataUrl.indexOf(",") + 1);
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return bytes;
}

function heading(text) {
  return new Paragraph({
    text,
    heading: HeadingLevel.HEADING_1,
    alignment: AlignmentType.CENTER,
    border: {
      bottom: { style: BorderStyle.DOUBLE, size: 6, color: INK },
    },
    spacing: { after: 300 },
  });
}

function subheading(text) {
  return new Paragraph({
    text,
    heading: HeadingLevel.HEADING_2,
    spacing: { before: 200, after: 120 },
  });
}

function label(text) {
  return new Paragraph({
    children: [
      new TextRun({ text: text.toUpperCase(), bold: true, color: WAX, size: 18 }),
    ],
    spacing: { before: 160, after: 60 },
  });
}

function body(text) {
  return new Paragraph({ children: [new TextRun({ text })], spacing: { after: 80 } });
}

function ruleParagraphs(rule) {
  const paras = [
    new Paragraph({
      children: [new TextRun({ text: rule.name, bold: true, color: INK })],
      spacing: { before: 140, after: 40 },
    }),
  ];
  const lines = (rule.description || "").split(/\n+/).filter(Boolean);
  for (const line of lines) {
    paras.push(new Paragraph({ text: line, spacing: { after: 60 } }));
  }
  if (!lines.length) paras.push(new Paragraph({ text: "" }));
  return paras;
}

function statsTable(stats) {
  const headerRow = new TableRow({
    children: STAT_KEYS.map(
      (k) =>
        new TableCell({
          shading: { type: ShadingType.CLEAR, fill: INK },
          verticalAlign: VerticalAlign.CENTER,
          children: [
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [new TextRun({ text: k, bold: true, color: "FFFFFF" })],
            }),
          ],
        })
    ),
  });
  const valueRow = new TableRow({
    children: STAT_KEYS.map(
      (k) =>
        new TableCell({
          verticalAlign: VerticalAlign.CENTER,
          children: [
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [new TextRun({ text: String(stats[k] ?? "-") })],
            }),
          ],
        })
    ),
  });
  return new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    borders: {
      top: { style: BorderStyle.SINGLE, size: 4, color: BRASS },
      bottom: { style: BorderStyle.SINGLE, size: 4, color: BRASS },
      left: { style: BorderStyle.SINGLE, size: 4, color: BRASS },
      right: { style: BorderStyle.SINGLE, size: 4, color: BRASS },
      insideHorizontal: { style: BorderStyle.SINGLE, size: 4, color: BRASS },
      insideVertical: { style: BorderStyle.SINGLE, size: 4, color: BRASS },
    },
    rows: [headerRow, valueRow],
  });
}

/**
 * Construit les paragraphes d'une fiche personnage (une page).
 * @param {object} card
 * @returns {(Paragraph|Table)[]}
 */
function characterCardBlocks(card) {
  const displayName = card.nomPersonnalise || card.nom;
  const showOriginType = card.nomPersonnalise && card.nomPersonnalise !== card.typeOrigine;

  const blocks = [];

  if (card.photo) {
    try {
      blocks.push(
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new ImageRun({
              type: "jpg",
              data: dataUrlToUint8Array(card.photo),
              transformation: { width: PHOTO_SIZE_PX, height: PHOTO_SIZE_PX },
            }),
          ],
        })
      );
    } catch {
      // Photo illisible : on ignore silencieusement plutôt que de faire
      // échouer la génération de tout le document.
    }
  }

  blocks.push(
    new Paragraph({
      alignment: AlignmentType.CENTER,
      heading: HeadingLevel.HEADING_2,
      children: [new TextRun({ text: displayName, bold: true })],
      spacing: { after: 40 },
    })
  );

  const metaLine = `${showOriginType ? card.typeOrigine + " · " : ""}${card.coutGc} po · Valeur de Bande ${card.coutWr} · Expérience ${card.xp}`;
  blocks.push(
    new Paragraph({
      alignment: AlignmentType.CENTER,
      children: [new TextRun({ text: metaLine, italics: true, color: "5A4A30" })],
      spacing: { after: 120 },
    })
  );

  if (card.bio) {
    blocks.push(
      new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [new TextRun({ text: card.bio, italics: true })],
        spacing: { after: 160 },
      })
    );
  }

  blocks.push(statsTable(card.stats));

  if (card.promue) {
    blocks.push(
      new Paragraph({
        children: [new TextRun({ text: "Figurine promue.", italics: true })],
        spacing: { before: 100 },
      })
    );
  }

  if (card.equipement.length) {
    blocks.push(label("Équipement"));
    for (const e of card.equipement) {
      const details = e.details
        .filter((d) => d.value)
        .map((d) => `${d.label} : ${d.value}`)
        .join(" — ");
      blocks.push(
        new Paragraph({
          bullet: { level: 0 },
          children: [
            new TextRun({ text: e.nom, bold: true }),
            ...(details ? [new TextRun({ text: `  (${details})`, italics: true })] : []),
          ],
        })
      );
    }
  }

  // Les compétences / règles spéciales / règles d'armes ne sont PAS
  // détaillées ici : regroupées dans le chapitre "Règles" en fin de
  // document. Seules les blessures restent sur la fiche (propres à
  // cette figurine).
  if (card.blessures.length) {
    blocks.push(label("Blessures"));
    for (const b of card.blessures) blocks.push(...ruleParagraphs(b));
  }

  if (card.augmentations.length) {
    blocks.push(label("Augmentations"));
    blocks.push(body(card.augmentations.join(", ")));
  }

  return blocks;
}

function compendiums(model) {
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
  };
}

/**
 * Construit le Blob .docx complet.
 * @param {object} model - modèle normalisé (voir parser.js)
 * @returns {Promise<Blob>}
 */
export async function buildDocx(model) {
  const children = [];

  // --- Chapitre 1 : Bande ---
  children.push(heading("Bande"));
  children.push(
    new Paragraph({
      alignment: AlignmentType.CENTER,
      children: [new TextRun({ text: model.meta.catalogue, italics: true, color: "5A4A30" })],
      spacing: { after: 200 },
    })
  );
  children.push(label("Nom de la bande"));
  children.push(body(model.meta.nom));
  children.push(label("Magot"));
  children.push(
    body(
      `Couronnes d'or : ${model.bande.magotOr} — Pierres magiques : ${model.bande.magotPierres}`
    )
  );
  children.push(label("Valeur de bande"));
  children.push(
    body(
      `Expérience totale des membres (${model.bande.xpTotal}) × 5 = ${model.bande.valeurDeBande}`
    )
  );
  children.push(label("Coût total"));
  children.push(body(`${model.meta.gc} po — Valeur de Bande officielle : ${model.meta.warbandRating}`));
  if (model.reglesGenerales.length) {
    children.push(label("Règles de bande"));
    children.push(body(model.reglesGenerales.map((r) => r.name).join(" · ")));
    children.push(
      new Paragraph({
        children: [
          new TextRun({
            text: "Voir le détail de chaque règle dans le chapitre « Règles » en fin de document.",
            italics: true,
          }),
        ],
      })
    );
  }
  children.push(new Paragraph({ children: [new PageBreak()] }));

  // --- Chapitre 2 : Héros ---
  children.push(heading("Héros"));
  if (!model.heros.length) {
    children.push(body("Aucun héros dans cette bande."));
  }
  model.heros.forEach((card, i) => {
    children.push(...characterCardBlocks(card));
    children.push(new Paragraph({ children: [new PageBreak()] }));
  });

  // --- Chapitre 3 : Hommes de main ---
  children.push(heading("Hommes de main"));
  if (!model.hommesDeMain.length) {
    children.push(body("Aucun homme de main dans cette bande."));
  }
  model.hommesDeMain.forEach((card) => {
    children.push(...characterCardBlocks(card));
    children.push(new Paragraph({ children: [new PageBreak()] }));
  });

  // --- Chapitre 4 : Règles (3 sous-sections, sans doublon) ---
  children.push(heading("Règles"));
  const { armes, speciales, equipe } = compendiums(model);
  const section = (titre, items) => {
    children.push(subheading(titre));
    if (!items.length) {
      children.push(body("Aucune règle référencée."));
      return;
    }
    for (const r of items) children.push(...ruleParagraphs(r));
  };
  section("Règles des Armes", armes);
  children.push(new Paragraph({ children: [new PageBreak()] }));
  section("Règles Spéciales", speciales);
  children.push(new Paragraph({ children: [new PageBreak()] }));
  section("Règles d'Équipe", equipe);

  const doc = new Document({
    creator: "Générateur de fiches Mordheim",
    title: model.meta.nom,
    styles: {
      default: {
        document: { run: { font: "Georgia", size: 22, color: INK } },
      },
    },
    sections: [
      {
        properties: {
          page: {
            size: { width: "21cm", height: "29.7cm" },
            margin: { top: "1.6cm", bottom: "1.6cm", left: "1.8cm", right: "1.8cm" },
          },
        },
        children,
      },
    ],
  });

  return Packer.toBlob(doc);
}
