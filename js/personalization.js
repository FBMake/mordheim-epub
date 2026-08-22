/**
 * personalization.js
 * -------------------
 * Gère la personnalisation des figurines (nom, bio, photo) et le
 * fichier compagnon "<bande>-personnalisation.json" que l'utilisateur
 * télécharge en même temps que l'EPUB et réimporte à côté de son
 * prochain export JSON New Recruit.
 *
 * Le fichier compagnon est indépendant du JSON BattleScribe : il ne le
 * modifie jamais, et associe chaque personnalisation à une figurine via
 * son identifiant interne stable ("id" BattleScribe).
 */

const FORMAT_VERSION = 1;
const MAX_DIMENSION = 500; // px, plus grand côté
const JPEG_QUALITY = 0.82;

/**
 * Redimensionne et compresse une image (File) en data URL JPEG.
 * @param {File} file
 * @returns {Promise<string>} data URL "data:image/jpeg;base64,..."
 */
export function resizeAndCompressImage(file) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const reader = new FileReader();
    reader.onerror = () => reject(new Error("Lecture de l'image impossible."));
    reader.onload = () => {
      img.onerror = () => reject(new Error("Image invalide."));
      img.onload = () => {
        let { width, height } = img;
        if (width > height && width > MAX_DIMENSION) {
          height = Math.round((height * MAX_DIMENSION) / width);
          width = MAX_DIMENSION;
        } else if (height >= width && height > MAX_DIMENSION) {
          width = Math.round((width * MAX_DIMENSION) / height);
          height = MAX_DIMENSION;
        }
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, width, height);
        ctx.drawImage(img, 0, 0, width, height);
        resolve(canvas.toDataURL("image/jpeg", JPEG_QUALITY));
      };
      img.src = reader.result;
    };
    reader.readAsDataURL(file);
  });
}

/**
 * Construit le contenu JSON du fichier de personnalisation.
 * @param {Map<string, {nom:string, bio:string, photo:string|null}>} active
 *        personnalisations correspondant à une figurine du roster actuel
 * @param {Map<string, {nom:string, bio:string, photo:string|null, label?:string}>} orphans
 *        personnalisations dont la figurine d'origine n'a pas été retrouvée
 *        (conservées pour ne rien perdre, voir la question posée à l'utilisateur)
 * @param {string} bandeName
 */
export function serializePersonalization(active, orphans, bandeName) {
  const personnages = {};
  for (const [id, data] of active.entries()) {
    if (!data) continue;
    if (!data.nom && !data.bio && !data.photo) continue; // rien à sauvegarder
    personnages[id] = {
      nom: data.nom || "",
      bio: data.bio || "",
      photo: data.photo || null,
    };
  }
  for (const [id, data] of orphans.entries()) {
    personnages[id] = {
      nom: data.nom || "",
      bio: data.bio || "",
      photo: data.photo || null,
      _orpheline: true,
      _label: data.label || "",
    };
  }
  const payload = {
    format: "mordheim-epub-personnalisation",
    version: FORMAT_VERSION,
    bande: bandeName || "",
    exporteLe: new Date().toISOString(),
    personnages,
  };
  return JSON.stringify(payload, null, 2);
}

/**
 * Déclenche le téléchargement du fichier de personnalisation.
 */
export function downloadPersonalizationFile(jsonText, safeBaseName) {
  const blob = new Blob([jsonText], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${safeBaseName || "bande"}-personnalisation.json`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

/**
 * Parse et valide un fichier de personnalisation importé par l'utilisateur.
 * @returns {Map<string, {nom, bio, photo, _orpheline?, _label?}>}
 */
export function parsePersonalizationFile(text) {
  let data;
  try {
    data = JSON.parse(text);
  } catch {
    throw new Error("Ce fichier de personnalisation n'est pas un JSON valide.");
  }
  if (data.format !== "mordheim-epub-personnalisation" || !data.personnages) {
    throw new Error(
      "Ce fichier ne ressemble pas à un fichier de personnalisation généré par cette application."
    );
  }
  const map = new Map();
  for (const [id, val] of Object.entries(data.personnages)) {
    map.set(id, {
      nom: val.nom || "",
      bio: val.bio || "",
      photo: val.photo || null,
      _orpheline: !!val._orpheline,
      _label: val._label || "",
    });
  }
  return map;
}

/**
 * Applique les personnalisations importées aux figurines du modèle
 * actuel (par id) et renvoie la liste des personnalisations orphelines
 * (id présent dans le fichier mais absent du roster actuel) afin de les
 * signaler à l'utilisateur et de les préserver au prochain export.
 *
 * @param {object} model - modèle produit par parser.js (muté en place)
 * @param {Map} importedMap - résultat de parsePersonalizationFile
 * @returns {Array<{id:string, nom:string}>} orphelines détectées
 */
export function applyPersonalization(model, importedMap) {
  const allCards = [...model.heros, ...model.hommesDeMain];
  const orphans = [];

  for (const [id, data] of importedMap.entries()) {
    const card = allCards.find((c) => c.id === id);
    if (card) {
      card.nomPersonnalise = data.nom || "";
      card.bio = data.bio || "";
      card.photo = data.photo || null;
    } else {
      orphans.push({
        id,
        nom: data.nom || data._label || "(sans nom)",
      });
    }
  }

  return orphans;
}
