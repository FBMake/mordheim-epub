import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { parseRoster } from "../js/parser.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const json = JSON.parse(
  readFileSync(join(__dirname, "../sample-data/exemple.json"), "utf8")
);
const model = parseRoster(json);
console.log(JSON.stringify(model, null, 2));
