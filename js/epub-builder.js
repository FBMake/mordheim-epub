/**
 * epub-builder.js
 * ---------------
 * Construit un fichier .epub à partir du modèle normalisé (parser.js)
 * éventuellement enrichi par personalization.js (nom, bio, photo par
 * figurine).
 *
 * Organisation retenue avec l'utilisateur :
 *   1. Bande       – infos générales + noms des règles de bande (sans
 *                     description, renvoi vers le chapitre Règles)
 *   2. Héros       – fiches (equip + noms de compétences/règles)
 *   3. Hommes de main – idem
 *   4. Règles      – compendium : TOUTES les règles/compétences citées
 *                     dans l'ouvrage, une seule fois chacune, triées par
 *                     ordre alphabétique.
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

function frSort(a, b) {
  return a.localeCompare(b, "fr", { sensitivity: "base" });
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
.card-header {
  display: block;
  overflow: hidden;
  margin-bottom: 0.4em;
}
.card-photo {
  float: right;
  width: 30%;
  max-width: 140px;
  margin: 0 0 0.6em 0.8em;
  border: 1px solid #8a6e3d;
}
.card-bio {
  font-style: italic;
  color: #3a2f20;
  margin: 0.3em 0 0.8em 0;
}
table.stats {
  width: 100%;
  border-collapse: collapse;
  margin: 0.6em 0 1em 0;
  font-size: 0.95em;
  clear: both;
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
ul.equip-list, ul.skill-list, ul.tag-list {
  margin: 0.2em 0 0.6em 0;
  padding-left: 1.2em;
}
ul.tag-list { list-style: none; padding-left: 0; }
ul.tag-list li {
  display: inline;
}
ul.tag-list li:not(:last-child)::after { content: " · "; }
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
  page-break-after: always;
  break-after: page;
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

function equipmentListHtml(equipement) {
  if (!equipement.length) return "";
  return `<div class="section-label">Équipement</div><ul class="equip-list">${equipement
    .map((e) => {
      const details = e.details
        .filter((d) => d.value)
        .map((d) => `${esc(d.label)}\u00a0: ${esc(d.value)}`)
        .join(" — ");
      return `<li><strong>${esc(e.nom)}</strong>${
        details ? ` <em>(${details})</em>` : ""
      }</li>`;
    })
    .join("\n")}</ul>`;
}

// Les compétences/règles ne sont plus détaillées ici : simple liste de
// noms, renvoyant au chapitre "Règles" en fin d'ouvrage (décision prise
// avec l'utilisateur pour éviter les doublons de texte).
function nameTagsHtml(label, items) {
  if (!items.length) return "";
  const uniqueNames = [...new Set(items.map((i) => i.name))];
  return `<div class="section-label">${esc(label)}</div><ul class="tag-list">${uniqueNames
    .map((n) => `<li>${esc(n)}</li>`)
    .join("")}</ul>`;
}

function characterCardHtml(card, imageFileByCardId) {
  const displayName = card.nomPersonnalise || card.nom;
  const showOriginType =
    card.nomPersonnalise && card.nomPersonnalise !== card.typeOrigine;
  const blessures = card.blessures.length
    ? `<div class="section-label">Blessures</div>${card.blessures.map(
        (b) => `<div class="rule-block"><h3>${esc(b.name)}</h3>${nl2p(b.description)}</div>`
      ).join("\n")}`
    : "";
  const photoFile = imageFileByCardId.get(card.id);
  const photoHtml = photoFile
    ? `<img class="card-photo" src="images/${photoFile}" alt="Portrait de ${esc(
        displayName
      )}"/>`
    : "";

  const bioHtml = card.bio ? `<p class="card-bio">${esc(card.bio)}</p>` : "";

  const equip = equipmentListHtml(card.equipement);

  const aug = card.augmentations.length
    ? `<div class="section-label">Augmentations</div><p>${card.augmentations
        .map(esc)
        .join(", ")}</p>`
    : "";

  const promue = card.promue ? `<p><em>Figurine promue.</em></p>` : "";

  const s = card.stats;
  return `
<div class="card">
  <div class="card-header">
    ${photoHtml}
    <h2 class="card-name">${esc(displayName)}</h2>
    <p class="card-type">${
      showOriginType ? `${esc(card.typeOrigine)} · ` : ""
    }${card.coutGc} po · Valeur de Bande ${card.coutWr} · Expérience ${
    card.xp
  }</p>
    ${bioHtml}
  </div>
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
  ${blessures}   
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
 * Rassemble, sans doublon et triées par ordre alphabétique, toutes les
 * règles/compétences citées n'importe où dans le modèle (règles de
 * bande + compétences et règles spéciales de chaque figurine).
 */
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
  };
}

function buildChapters(model, imageFileByCardId) {
  const chapters = [];

  // 1) Bande
  const reglesBandeNoms = model.reglesGenerales.map((r) => r.name);
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
${
  reglesBandeNoms.length
    ? `<div class="section-label">Règles de bande</div><ul class="tag-list">${reglesBandeNoms
        .map((n) => `<li>${esc(n)}</li>`)
        .join("")}</ul><p><em>Voir le détail de chaque règle dans le chapitre « Règles » en fin d'ouvrage.</em></p>`
    : ""
}
`;
  chapters.push({
    id: "bande",
    file: "bande.xhtml",
    title: "Bande",
    html: chapterHtml("Bande", bandeBody),
  });

  // 2) Héros
  const herosBody =
    model.heros
      .map((c) => characterCardHtml(c, imageFileByCardId))
      .join('\n<hr class="sep"/>\n') ||
    "<p><em>Aucun héros dans cette bande.</em></p>";
  chapters.push({
    id: "heros",
    file: "heros.xhtml",
    title: "Héros",
    html: chapterHtml("Héros", herosBody),
  });

  // 3) Hommes de main
  const hdmBody =
    model.hommesDeMain
      .map((c) => characterCardHtml(c, imageFileByCardId))
      .join('\n<hr class="sep"/>\n') ||
    "<p><em>Aucun homme de main dans cette bande.</em></p>";
  chapters.push({
    id: "hommes-de-main",
    file: "hommes-de-main.xhtml",
    title: "Hommes de main",
    html: chapterHtml("Hommes de main", hdmBody),
  });

  // 4) Règles (compendium, en dernier, sans doublon)
  const { armes, speciales, equipe } = buildCompendiums(model);
  const section = (titre, items) =>
    `<h2 class="card-name">${esc(titre)}</h2>${
      items.length ? items.map(ruleBlockHtml).join("\n") : "<p><em>Aucune règle référencée.</em></p>"
    }`;
  const reglesBody = [
    section("Règles des Armes", armes),
    section("Règles Spéciales", speciales),
    section("Règles d'Équipe", equipe),
  ].join('\n<hr class="sep"/>\n');
  // const compendium = buildCompendium(model);
  // const reglesBody =
  //   compendium
  //     .map(
  //       (r) =>
  //         `<div class="rule-block"><h3>${esc(r.name)}</h3>${nl2p(
  //           r.description
  //         )}</div>`
  //     )
  //     .join("\n") || "<p><em>Aucune règle référencée.</em></p>";
  // chapters.push({
  //   id: "regles",
  //   file: "regles.xhtml",
  //   title: "Règles",
  //   html: chapterHtml("Règles", reglesBody),
  // });

  return chapters;
}

function uuid() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

function dataUrlToBase64(dataUrl) {
  const comma = dataUrl.indexOf(",");
  return comma === -1 ? dataUrl : dataUrl.slice(comma + 1);
}

/**
 * Construit le Blob .epub complet.
 * @param {object} model - modèle normalisé (voir parser.js), avec ou
 *   sans personnalisation appliquée (card.nomPersonnalise/bio/photo)
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

  // Prépare les images (une par figurine ayant une photo) et leur nom
  // de fichier dans l'EPUB.
  const imageFileByCardId = new Map();
  const allCards = [...model.heros, ...model.hommesDeMain];
  for (const card of allCards) {
    if (card.photo) {
      imageFileByCardId.set(card.id, `${card.id}.jpg`);
    }
  }

  const chapters = buildChapters(model, imageFileByCardId);

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

  const imagesFolder = oebps.folder("images");
  for (const card of allCards) {
    const filename = imageFileByCardId.get(card.id);
    if (filename) {
      imagesFolder.file(filename, dataUrlToBase64(card.photo), {
        base64: true,
      });
    }
  }

  const chapterManifestItems = chapters
    .map(
      (ch) =>
        `<item id="${ch.id}" href="${ch.file}" media-type="application/xhtml+xml"/>`
    )
    .join("\n    ");
  const imageManifestItems = [...imageFileByCardId.entries()]
    .map(
      ([cardId, filename], i) =>
        `<item id="img-${i}" href="images/${filename}" media-type="image/jpeg"/>`
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
    ${chapterManifestItems}
    ${imageManifestItems}
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
