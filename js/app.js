import { parseRoster } from "./parser.js";
import { buildDocx } from "./docx-builder.js";
import {
  resizeAndCompressImage,
  serializePersonalization,
  downloadPersonalizationFile,
  parsePersonalizationFile,
  applyPersonalization,
} from "./personalization.js";

const dropzone = document.getElementById("dropzone");
const fileInput = document.getElementById("file-input");
const fileError = document.getElementById("file-error");
const previewSection = document.getElementById("preview-section");
const generateBtn = document.getElementById("generate-btn");
const generateStatus = document.getElementById("generate-status");

const persoUploadSection = document.getElementById("perso-upload-section");
const persoDropzone = document.getElementById("perso-dropzone");
const persoFileInput = document.getElementById("perso-file-input");
const persoLoadedMsg = document.getElementById("perso-loaded-msg");
const orphansBox = document.getElementById("orphans-box");
const orphansList = document.getElementById("orphans-list");
const persoCardsContainer = document.getElementById("perso-cards");

let currentModel = null;
// customisations[id] = { nom, bio, photo } — source de vérité pour la génération.
let customisations = {};
// personnalisations importées mais dont la figurine n'existe plus dans le
// roster actuel : on les garde pour ne pas les perdre au prochain export.
let orphanCustomisations = new Map();

function safeBaseName(name) {
  return (name || "bande")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .toLowerCase();
}

function showError(msg) {
  fileError.textContent = msg;
  fileError.hidden = false;
}
function clearError() {
  fileError.hidden = true;
  fileError.textContent = "";
}

// ---------------------------------------------------------------------
// Aperçu de la bande
// ---------------------------------------------------------------------
function renderPreview(model) {
  document.getElementById("preview-nom").textContent = model.meta.nom;
  document.getElementById("preview-gc").textContent = `${model.meta.gc} po`;
  document.getElementById("preview-wr").textContent = model.meta.warbandRating;
  document.getElementById("preview-magot").textContent = model.bande.magotOr;
  document.getElementById("preview-xp").textContent = model.bande.xpTotal;

  document.getElementById("count-heros").textContent = model.heros.length;
  document.getElementById("count-hdm").textContent = model.hommesDeMain.length;

  document.getElementById("list-heros").innerHTML = model.heros
    .map((h) => `<li>${h.nom} <em>(${h.xp} xp)</em></li>`)
    .join("");
  document.getElementById("list-hdm").innerHTML = model.hommesDeMain
    .map((h) => `<li>${h.nom} <em>(${h.xp} xp)</em></li>`)
    .join("");

  const warningBox = document.getElementById("warning-box");
  const warningList = document.getElementById("warning-list");
  if (model.nonTraduits.length) {
    warningList.innerHTML = model.nonTraduits.map((w) => `<li>${w}</li>`).join("");
    warningBox.hidden = false;
  } else {
    warningBox.hidden = true;
  }

  previewSection.hidden = false;
  persoUploadSection.hidden = false;
  generateStatus.textContent = "";
}

// ---------------------------------------------------------------------
// Panneau de personnalisation (nom, bio, photo par figurine)
// ---------------------------------------------------------------------
function ensureCustomisation(id) {
  if (!customisations[id]) {
    customisations[id] = { nom: "", bio: "", photo: null };
  }
  return customisations[id];
}

function persoCardTemplate(card, categorie) {
  const custom = ensureCustomisation(card.id);
  const div = document.createElement("div");
  div.className = "perso-card";
  div.dataset.id = card.id;

  div.innerHTML = `
    <div class="perso-photo-wrap">
      <img class="perso-photo-preview" src="${
        custom.photo || ""
      }" alt="" ${custom.photo ? "" : 'style="display:none"'} />
      <label class="perso-photo-btn">
        Photo
        <input type="file" accept="image/*" class="perso-photo-input" hidden />
      </label>
    </div>
    <div class="perso-fields">
      <p class="perso-original-name">${categorie} — ${card.nom}</p>
      <label class="perso-label">
        Nom personnalisé
        <input type="text" class="perso-nom-input" placeholder="${card.nom}" value="${
    custom.nom || ""
  }" />
      </label>
      <label class="perso-label">
        Bio
        <textarea class="perso-bio-input" rows="2" placeholder="Quelques lignes d'histoire...">${
          custom.bio || ""
        }</textarea>
      </label>
    </div>
  `;

  const nomInput = div.querySelector(".perso-nom-input");
  nomInput.addEventListener("input", () => {
    ensureCustomisation(card.id).nom = nomInput.value;
  });

  const bioInput = div.querySelector(".perso-bio-input");
  bioInput.addEventListener("input", () => {
    ensureCustomisation(card.id).bio = bioInput.value;
  });

  const photoInput = div.querySelector(".perso-photo-input");
  const photoPreview = div.querySelector(".perso-photo-preview");
  photoInput.addEventListener("change", async () => {
    const file = photoInput.files?.[0];
    if (!file) return;
    try {
      const dataUrl = await resizeAndCompressImage(file);
      ensureCustomisation(card.id).photo = dataUrl;
      photoPreview.src = dataUrl;
      photoPreview.style.display = "";
    } catch (err) {
      console.error(err);
      showError(`Impossible de charger cette photo : ${err.message}`);
    }
  });

  return div;
}

function renderPersoCards(model) {
  persoCardsContainer.innerHTML = "";
  model.heros.forEach((card) =>
    persoCardsContainer.appendChild(persoCardTemplate(card, "Héros"))
  );
  model.hommesDeMain.forEach((card) =>
    persoCardsContainer.appendChild(persoCardTemplate(card, "Homme de main"))
  );
}

function renderOrphans() {
  if (orphanCustomisations.size === 0) {
    orphansBox.hidden = true;
    return;
  }
  orphansList.innerHTML = [...orphanCustomisations.values()]
    .map((o) => `<li>${o.nom}</li>`)
    .join("");
  orphansBox.hidden = false;
}

// ---------------------------------------------------------------------
// Chargement du roster JSON
// ---------------------------------------------------------------------
async function handleFile(file) {
  clearError();
  if (!file) return;
  if (!file.name.toLowerCase().endsWith(".json")) {
    showError("Merci de déposer un fichier .json (export de roster BattleScribe).");
    return;
  }
  try {
    const text = await file.text();
    const json = JSON.parse(text);
    currentModel = parseRoster(json);
    customisations = {};
    orphanCustomisations = new Map();
    renderPreview(currentModel);
    renderPersoCards(currentModel);
    renderOrphans();
  } catch (err) {
    console.error(err);
    showError(`Impossible de lire ce fichier : ${err.message || "erreur inconnue"}.`);
    previewSection.hidden = true;
    persoUploadSection.hidden = true;
  }
}

dropzone.addEventListener("click", () => fileInput.click());
dropzone.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    fileInput.click();
  }
});
fileInput.addEventListener("change", (e) => handleFile(e.target.files[0]));
["dragenter", "dragover"].forEach((evt) =>
  dropzone.addEventListener(evt, (e) => {
    e.preventDefault();
    dropzone.classList.add("dragover");
  })
);
["dragleave", "drop"].forEach((evt) =>
  dropzone.addEventListener(evt, (e) => {
    e.preventDefault();
    dropzone.classList.remove("dragover");
  })
);
dropzone.addEventListener("drop", (e) => handleFile(e.dataTransfer.files?.[0]));

// ---------------------------------------------------------------------
// Chargement du fichier de personnalisation (optionnel)
// ---------------------------------------------------------------------
async function handlePersoFile(file) {
  if (!file || !currentModel) return;
  try {
    const text = await file.text();
    const importedMap = parsePersonalizationFile(text);
    const orphans = applyPersonalization(currentModel, importedMap);

    // Recharge customisations depuis le modèle mis à jour + conserve les
    // orphelines pour le prochain export.
    customisations = {};
    [...currentModel.heros, ...currentModel.hommesDeMain].forEach((card) => {
      customisations[card.id] = {
        nom: card.nomPersonnalise || "",
        bio: card.bio || "",
        photo: card.photo || null,
      };
    });
    orphanCustomisations = new Map();
    for (const [id, val] of importedMap.entries()) {
      const isOrphan = orphans.some((o) => o.id === id);
      if (isOrphan) {
        orphanCustomisations.set(id, { nom: val.nom || val._label || "(sans nom)", bio: val.bio, photo: val.photo });
      }
    }

    renderPersoCards(currentModel);
    renderOrphans();
    persoLoadedMsg.textContent = `Personnalisation chargée (${
      Object.keys(customisations).filter(
        (id) => customisations[id].nom || customisations[id].bio || customisations[id].photo
      ).length
    } figurine(s) personnalisée(s)).`;
    persoLoadedMsg.hidden = false;
  } catch (err) {
    console.error(err);
    showError(`Fichier de personnalisation invalide : ${err.message}`);
  }
}

persoDropzone.addEventListener("click", () => persoFileInput.click());
persoDropzone.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    persoFileInput.click();
  }
});
persoFileInput.addEventListener("change", (e) => handlePersoFile(e.target.files[0]));
["dragenter", "dragover"].forEach((evt) =>
  persoDropzone.addEventListener(evt, (e) => {
    e.preventDefault();
    persoDropzone.classList.add("dragover");
  })
);
["dragleave", "drop"].forEach((evt) =>
  persoDropzone.addEventListener(evt, (e) => {
    e.preventDefault();
    persoDropzone.classList.remove("dragover");
  })
);
persoDropzone.addEventListener("drop", (e) => handlePersoFile(e.dataTransfer.files?.[0]));

// ---------------------------------------------------------------------
// Génération EPUB + fichier de personnalisation
// ---------------------------------------------------------------------
generateBtn.addEventListener("click", async () => {
  if (!currentModel) return;
  generateBtn.disabled = true;
  generateStatus.textContent = "Génération en cours…";
  try {
    // Applique les personnalisations actuelles (issues des formulaires) au modèle.
    [...currentModel.heros, ...currentModel.hommesDeMain].forEach((card) => {
      const c = customisations[card.id] || {};
      card.nomPersonnalise = c.nom || "";
      card.bio = c.bio || "";
      card.photo = c.photo || null;
    });

    const base = safeBaseName(currentModel.meta.nom);

    const blob = await buildDocx(currentModel);
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${base}.docx`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);

    const activeMap = new Map(Object.entries(customisations));
    const json = serializePersonalization(activeMap, orphanCustomisations, currentModel.meta.nom);
    downloadPersonalizationFile(json, base);

    generateStatus.textContent =
      "Document Word et fichier de personnalisation téléchargés ✓ — gardez ce dernier pour la prochaine fois.";
  } catch (err) {
    console.error(err);
    generateStatus.textContent = `Erreur lors de la génération : ${err.message}`;
  } finally {
    generateBtn.disabled = false;
  }
});
