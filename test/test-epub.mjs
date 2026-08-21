import { readFileSync, writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import JSZipLib from "jszip";
globalThis.JSZip = JSZipLib;

import { parseRoster } from "../js/parser.js";
import { buildEpub } from "../js/epub-builder.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const json = JSON.parse(
  readFileSync(join(__dirname, "../sample-data/exemple.json"), "utf8")
);
const model = parseRoster(json);
const blob = await buildEpub(model);
const buf = Buffer.from(await blob.arrayBuffer());
const out = join(__dirname, "../test-output.epub");
writeFileSync(out, buf);
console.log("EPUB généré :", out, "-", buf.length, "octets");
