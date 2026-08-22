import { readFileSync, writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import JSZipLib from "jszip";
globalThis.JSZip = JSZipLib;

import { parseRoster } from "../js/parser.js";
import { buildEpub } from "../js/epub-builder.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const json = JSON.parse(readFileSync(join(__dirname, "../sample-data/exemple.json"), "utf8"));
const model = parseRoster(json);

// Simule une personnalisation manuelle (nom, bio, photo factice 1x1 px JPEG)
const tinyJpegBase64 = "/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAj/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=";
model.heros[0].nomPersonnalise = "Gaspard le Balafré";
model.heros[0].bio = "Ancien artilleur devenu instructeur après l'incident du canon de Marienburg.";
model.heros[0].photo = "data:image/jpeg;base64," + tinyJpegBase64;

const blob = await buildEpub(model);
const buf = Buffer.from(await blob.arrayBuffer());
const out = join(__dirname, "../test-output-photo.epub");
writeFileSync(out, buf);
console.log("EPUB avec photo généré :", out, "-", buf.length, "octets");
