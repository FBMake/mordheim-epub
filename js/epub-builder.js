/**
 * epub-builder.js
 * ---------------
 * Construit un fichier .epub (EPUB 3, compatible envoi vers Kindle via
 * "Envoyer vers Kindle" / Amazon convertit l'EPUB en AZW3 à la réception)
 * à partir du modèle normalisé produit par parser.js.
 *
 * Dépend de la variable globale JSZip (chargée via CDN dans index.html).
 */

function esc(s) {
  return String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function nl2p(text) {
  return String(text || "")
    .split(/\n+/)
    .filter(Boolean)
    .map((p) => `<p>${esc(p)}</p>`)
    .join("\n");
}

const CSS = `
@font-face {
  font-family: "Blackletter";
  src: local("UnifrakturCook");
}
body {
  font-family: "Georgia", "EB Garamond", serif;
  color: #2b2118;
  line-height: 1.5;
  margin: 1em;
}
h1.page-title {
  font-family: "Blackletter", "Georgia", serif;
  font-size: 2em;
  text-align: center;
  border-bottom: 3px double #2b2118;
  padding-bottom: 0.2em;
  margin-bottom: 0.8em;
  letter-spacing: 0.02em;
}
h2.card-name {
  font-size: 1.4em;
  margin: 0 0 0.1em 0;
  border-bottom: 1px solid #8a6e3d;
  padding-bottom: 0.15em;
}
.card-type {
  font-style: italic;
  color: #5a4a30;
  margin: 0 0 0.6em 0;
}
table.stats {
  width: 100%;
  border-collapse: collapse;
  margin: 0.6em 0 1em 0;
  font-size: 0.95em;
}
table.stats th, table.stats td {
  border: 1px solid #8a6e3d;
  text-align: center;
  padding: 0.25em 0.1em;
}
table.stats th {
  background: #2b2118;
  color: #ede0c8;
}
.section-label {
  font-weight: bold;
  text-transform: uppercase;
  font-size: 0.85em;
  letter-spacing: 0.08em;
  color: #7a2e2e;
  margin-top: 0.9em;
  margin-bottom: 0.2em;
}
ul.equip-list, ul.skill-list {
  margin: 0.2em 0 0.6em 0;
  padding-left: 1.2em;
}
.rule-block {
  margin-bottom: 0.9em;
  padding: 0.5em 0.8em;
  border-left: 3px solid #8a6e3d;
  background: #f6f0e2;
}
.rule-block h3 {
  margin: 0 0 0.2em 0;
  font-size: 1.05em;
}
.meta-line {
  text-align: center;
  color: #5a4a30;
  margin-bottom: 1.5em;
}
.card {
  page-break-inside: avoid;
  margin-bottom: 2em;
  border: 1px solid #8a6e3d;
  padding: 0.8em 1em;
}
hr.sep {
  border: none;
  border-top: 1px dashed #8a6e3d;
  margin: 2em 0;
}
`;

function characterCardHtml(card) {
  const equip = card.equipement.length
    ? `<div class="section-label">Équipement</div><ul class="equip-list">${card.equipement
        .map((e) => {
          const details = e.details
            .filter((d) => d.value)
            .map((d) => `${esc(d.label)}\u00a0: ${esc(d.value)}`)
            .join(" — ");
          return `<li><strong>${esc(e.nom)}</strong>${
            details ? ` <em>(${details})</em>` : ""
          }</li>`;
        })
        .join("\n")}</ul>`
    : "";

  const comp = card.competences.length
    ? `<div class="section-label">Compétences</div><ul class="skill-list">${card.competences
        .map(
          (c) =>
            `<li><strong>${esc(c.name)}</strong>${
              c.description ? ` — ${esc(c.description)}` : ""
            }</li>`
        )
        .join("\n")}</ul>`
    : "";

  const regles = card.reglesSpeciales.length
    ? `<div class="section-label">Règles spéciales</div>${card.reglesSpeciales
        .map(
          (r) =>
            `<div class="rule-block"><h3>${esc(r.name)}</h3>${nl2p(
              r.description
            )}</div>`
        )
        .join("\n")}`
    : "";

  const aug = card.augmentations.length
    ? `<div class="section-label">Augmentations</div><p>${card.augmentations
        .map(esc)
        .join(", ")}</p>`
    : "";

  const promue = card.promue
    ? `<p><em>Figurine promue.</em></p>`
    : "";

  const s = card.stats;
  return `
<div class="card">
  <h2 class="card-name">${esc(card.nom)}</h2>
  <p class="card-type">${card.coutGc} po · Valeur de Bande ${card.coutWr} · Expérience ${card.xp}</p>
  <table class="stats">
    <tr><th>M</th><th>CC</th><th>CT</th><th>F</th><th>E</th><th>PV</th><th>I</th><th>A</th><th>Cd</th></tr>
    <tr><td>${esc(s.M)}</td><td>${esc(s.CC)}</td><td>${esc(s.CT)}</td><td>${esc(
    s.F
  )}</td><td>${esc(s.E)}</td><td>${esc(s.PV)}</td><td>${esc(s.I)}</td><td>${esc(
    s.A
  )}</td><td>${esc(s.Cd)}</td></tr>
  </table>
  ${promue}
  ${equip}
  ${comp}
  ${regles}
  ${aug}
</div>`;
}

function chapterHtml(title, bodyHtml, lang = "fr") {
  return `<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="${lang}">
<head>
  <meta charset="utf-8"/>
  <title>${esc(title)}</title>
  <link rel="stylesheet" type="text/css" href="style.css"/>
</head>
<body>
  <h1 class="page-title">${esc(title)}</h1>
  ${bodyHtml}
</body>
</html>`;
}

/**
 * Construit les 4 chapitres XHTML à partir du modèle normalisé.
 */
function buildChapters(model) {
  const chapters = [];

  // 1) Règles
  const reglesBody =
    model.reglesGenerales
      .map(
        (r) =>
          `<div class="rule-block"><h3>${esc(r.name)}</h3>${nl2p(
            r.description
          )}</div>`
      )
      .join("\n") || "<p><em>Aucune règle générale trouvée.</em></p>";
  chapters.push({
    id: "regles",
    file: "regles.xhtml",
    title: "Règles",
    html: chapterHtml("Règles", reglesBody),
  });

  // 2) Bande
  const bandeBody = `
<p class="meta-line">${esc(model.meta.catalogue)}</p>
<div class="section-label">Nom de la bande</div>
<p>${esc(model.meta.nom)}</p>
<div class="section-label">Magot</div>
<p>Couronnes d'or\u00a0: ${model.bande.magotOr} — Pierres magiques\u00a0: ${
    model.bande.magotPierres
  }</p>
<div class="section-label">Valeur de bande</div>
<p>Expérience totale des membres (${model.bande.xpTotal}) × 5 = <strong>${
    model.bande.valeurDeBande
  }</strong></p>
<div class="section-label">Coût total</div>
<p>${model.meta.gc} po — Valeur de Bande officielle\u00a0: ${
    model.meta.warbandRating
  }</p>
`;
  chapters.push({
    id: "bande",
    file: "bande.xhtml",
    title: "Bande",
    html: chapterHtml("Bande", bandeBody),
  });

  // 3) Héros
  const herosBody =
    model.heros.map(characterCardHtml).join('\n<hr class="sep"/>\n') ||
    "<p><em>Aucun héros dans cette bande.</em></p>";
  chapters.push({
    id: "heros",
    file: "heros.xhtml",
    title: "Héros",
    html: chapterHtml("Héros", herosBody),
  });

  // 4) Hommes de main
  const hdmBody =
    model.hommesDeMain.map(characterCardHtml).join('\n<hr class="sep"/>\n') ||
    "<p><em>Aucun homme de main dans cette bande.</em></p>";
  chapters.push({
    id: "hommes-de-main",
    file: "hommes-de-main.xhtml",
    title: "Hommes de main",
    html: chapterHtml("Hommes de main", hdmBody),
  });

  return chapters;
}

function uuid() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

/**
 * Construit le Blob .epub complet.
 * @param {object} model - modèle normalisé (voir parser.js)
 * @returns {Promise<Blob>}
 */
export async function buildEpub(model) {
  if (typeof JSZip === "undefined") {
    throw new Error(
      "JSZip n'est pas chargé. Vérifiez la balise <script> dans index.html."
    );
  }
  const zip = new JSZip();
  const bookId = `urn:uuid:${uuid()}`;
  const chapters = buildChapters(model);

  // mimetype DOIT être le premier fichier, non compressé
  zip.file("mimetype", "application/epub+zip", { compression: "STORE" });

  zip.folder("META-INF").file(
    "container.xml",
    `<?xml version="1.0" encoding="UTF-8"?>
<container version="1.0" xmlns="urn:oasis:names:tc:opendocument:xmlns:container">
  <rootfiles>
    <rootfile full-path="OEBPS/content.opf" media-type="application/oebps-package+xml"/>
  </rootfiles>
</container>`
  );

  const oebps = zip.folder("OEBPS");
  oebps.file("style.css", CSS);
  for (const ch of chapters) {
    oebps.file(ch.file, ch.html);
  }

  const manifestItems = chapters
    .map(
      (ch) =>
        `<item id="${ch.id}" href="${ch.file}" media-type="application/xhtml+xml"/>`
    )
    .join("\n    ");
  const spineItems = chapters
    .map((ch) => `<itemref idref="${ch.id}"/>`)
    .join("\n    ");
  const navPoints = chapters
    .map(
      (ch, i) => `<navPoint id="navPoint-${i + 1}" playOrder="${i + 1}">
      <navLabel><text>${esc(ch.title)}</text></navLabel>
      <content src="${ch.file}"/>
    </navPoint>`
    )
    .join("\n    ");
  const navLis = chapters
    .map((ch) => `<li><a href="${ch.file}">${esc(ch.title)}</a></li>`)
    .join("\n        ");

  oebps.file(
    "content.opf",
    `<?xml version="1.0" encoding="UTF-8"?>
<package xmlns="http://www.idpf.org/2007/opf" version="3.0" unique-identifier="BookId">
  <metadata xmlns:dc="http://purl.org/dc/elements/1.1/">
    <dc:identifier id="BookId">${bookId}</dc:identifier>
    <dc:title>${esc(model.meta.nom)}</dc:title>
    <dc:language>fr</dc:language>
    <dc:creator>Générateur de fiches Mordheim</dc:creator>
    <meta property="dcterms:modified">${new Date()
      .toISOString()
      .replace(/\.\d+Z$/, "Z")}</meta>
  </metadata>
  <manifest>
    ${manifestItems}
    <item id="css" href="style.css" media-type="text/css"/>
    <item id="ncx" href="toc.ncx" media-type="application/x-dtbncx+xml"/>
    <item id="nav" href="nav.xhtml" media-type="application/xhtml+xml" properties="nav"/>
  </manifest>
  <spine toc="ncx">
    ${spineItems}
  </spine>
</package>`
  );

  oebps.file(
    "toc.ncx",
    `<?xml version="1.0" encoding="UTF-8"?>
<ncx xmlns="http://www.daisy.org/z3986/2005/ncx/" version="2005-1">
  <head>
    <meta name="dtb:uid" content="${bookId}"/>
  </head>
  <docTitle><text>${esc(model.meta.nom)}</text></docTitle>
  <navMap>
    ${navPoints}
  </navMap>
</ncx>`
  );

  oebps.file(
    "nav.xhtml",
    `<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:epub="http://www.idpf.org/2007/ops" xml:lang="fr">
<head><meta charset="utf-8"/><title>Table des matières</title></head>
<body>
  <nav epub:type="toc" id="toc">
    <h1>Table des matières</h1>
    <ol>
        ${navLis}
    </ol>
  </nav>
</body>
</html>`
  );

  return zip.generateAsync({
    type: "blob",
    mimeType: "application/epub+zip",
  });
}
