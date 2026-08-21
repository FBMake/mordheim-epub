import { parseRoster } from "./parser.js";
import { buildEpub } from "./epub-builder.js";

const dropzone = document.getElementById("dropzone");
const fileInput = document.getElementById("file-input");
const fileError = document.getElementById("file-error");
const previewSection = document.getElementById("preview-section");
const generateBtn = document.getElementById("generate-btn");
const generateStatus = document.getElementById("generate-status");

let currentModel = null;

function showError(msg) {
  fileError.textContent = msg;
  fileError.hidden = false;
}
function clearError() {
  fileError.hidden = true;
  fileError.textContent = "";
}

function renderPreview(model) {
  document.getElementById("preview-nom").textContent = model.meta.nom;
  document.getElementById("preview-gc").textContent = `${model.meta.gc} po`;
  document.getElementById("preview-wr").textContent = model.meta.warbandRating;
  document.getElementById("preview-magot").textContent = model.bande.magotOr;
  document.getElementById("preview-xp").textContent = model.bande.xpTotal;

  document.getElementById("count-heros").textContent = model.heros.length;
  document.getElementById("count-hdm").textContent = model.hommesDeMain.length;

  const listHeros = document.getElementById("list-heros");
  listHeros.innerHTML = model.heros
    .map((h) => `<li>${h.nom} <em>(${h.xp} xp)</em></li>`)
    .join("");

  const listHdm = document.getElementById("list-hdm");
  listHdm.innerHTML = model.hommesDeMain
    .map((h) => `<li>${h.nom} <em>(${h.xp} xp)</em></li>`)
    .join("");

  const warningBox = document.getElementById("warning-box");
  const warningList = document.getElementById("warning-list");
  if (model.nonTraduits.length) {
    warningList.innerHTML = model.nonTraduits
      .map((w) => `<li>${w}</li>`)
      .join("");
    warningBox.hidden = false;
  } else {
    warningBox.hidden = true;
  }

  previewSection.hidden = false;
  generateStatus.textContent = "";
}

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
    renderPreview(currentModel);
  } catch (err) {
    console.error(err);
    showError(
      `Impossible de lire ce fichier : ${err.message || "erreur inconnue"}.`
    );
    previewSection.hidden = true;
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
dropzone.addEventListener("drop", (e) => {
  const file = e.dataTransfer.files?.[0];
  handleFile(file);
});

generateBtn.addEventListener("click", async () => {
  if (!currentModel) return;
  generateBtn.disabled = true;
  generateStatus.textContent = "Génération de l'EPUB en cours…";
  try {
    const blob = await buildEpub(currentModel);
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    const safeName = (currentModel.meta.nom || "bande")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-zA-Z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .toLowerCase();
    a.href = url;
    a.download = `${safeName || "bande"}.epub`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
    generateStatus.textContent = "EPUB généré et téléchargé ✓";
  } catch (err) {
    console.error(err);
    generateStatus.textContent = `Erreur lors de la génération : ${err.message}`;
  } finally {
    generateBtn.disabled = false;
  }
});
