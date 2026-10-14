"""
Assemble les noms anglais des données de bandes pour l'interface en anglais.

Usage : python3 -I tools/bsdata/build_en.py tools/bsdata/fr.json tools/bsdata/en.json js/data/bandes-en.js

Les noms anglais d'origine (BSData) sont les clés de fr.json ; en.json
corrige quelques noms, donne les noms officiels des bandes et les résumés
anglais des règles ; « alias » relie les noms français officiels des
compétences et blessures (rosters en français) à leur règle anglaise. Le fichier produit associe chaque nom français de
js/data/bandes.js à son équivalent anglais. Le script s'arrête en listant
toute règle ou bande sans version anglaise.
"""
import json
import re
import sys
from pathlib import Path


def slug(nom):
    return re.sub(r"[^a-z0-9]+", "-", nom.lower().replace("’", "").replace("'", "")).strip("-")


def add_supplements(out, supplements, missing):
    """Noms et résumés anglais des bandes saisies dans tools/bsdata/supplements/."""
    for s in supplements:
        out["bandes"][s["id"]] = s["nomEn"]
        for g in s["guerriers"]:
            out["guerriers"][f"{s['id']}/{slug(g['cle'])}"] = g["cle"]
            for cat in g.get("equipement", []):
                for o in cat["objets"]:
                    out["equipement"].setdefault(o["nom"], o["en"])
        for key, val in s.get("reglesTexte", {}).items():
            if not val.get("en", {}).get("resume"):
                missing.add(f"règle sans résumé anglais : {key}")
            out["regles"].setdefault(key, val["en"])
            out["reglesFr"].setdefault(val["fr"]["nom"], key)
        cs = s.get("competencesSpeciales")
        if cs:
            out["competences"][cs["liste"]] = cs["listeEn"]
            for c in cs["competences"]:
                out["regles"].setdefault(c["en"], {"nom": c["en"], "resume": c["resumeEn"]})
                out["reglesFr"].setdefault(c["nom"], c["en"])


def build(fr, en):
    missing = set()
    out = {
        "bandes": {},
        "guerriers": {},
        "regles": dict(en["regles"]),
        "reglesFr": {},
        "equipement": {},
        "competences": {},
        "categories": {},
    }
    for meta in fr["bandes"].values():
        if meta["id"] not in en["bandes"]:
            missing.add(f"bande : {meta['id']}")
        out["bandes"][meta["id"]] = en["bandes"].get(meta["id"], meta["nom"])
        for key in meta["guerriers"]:
            gid = f"{meta['id']}/{key.lower().replace(' ', '-')}"
            out["guerriers"][gid] = en["guerriers"].get(key, key)
    for key, val in fr["regles"].items():
        if key not in en["regles"]:
            missing.add(f"règle : {key}")
        out["reglesFr"].setdefault(val["nom"], key)
    for nom_fr, key in en.get("alias", {}).items():
        if nom_fr.startswith("_"):
            continue
        if key not in en["regles"]:
            missing.add(f"alias sans règle anglaise : {nom_fr} → {key}")
        out["reglesFr"].setdefault(nom_fr, key)
    for table, dest in (("equipement", "equipement"), ("competences", "competences"), ("categoriesEquipement", "categories")):
        overrides = en.get(table, {})
        for key, nom_fr in fr[table].items():
            out[dest][nom_fr] = overrides.get(key, key)
    return out, missing


if __name__ == "__main__":
    fr_path, en_path, dest = sys.argv[1:]
    fr = json.loads(Path(fr_path).read_text(encoding="utf-8"))
    en = json.loads(Path(en_path).read_text(encoding="utf-8"))
    data, missing = build(fr, en)
    supplements = [json.loads(f.read_text(encoding="utf-8")) for f in sorted((Path(fr_path).parent / "supplements").glob("*.json"))]
    add_supplements(data, supplements, missing)
    if missing:
        print("Versions anglaises manquantes :\n  " + "\n  ".join(sorted(missing)))
        sys.exit(1)
    body = json.dumps(data, ensure_ascii=False, indent=1)
    Path(dest).write_text(
        "// Fichier généré par tools/bsdata/build_en.py : ne pas modifier à la main.\n"
        "// Noms et résumés anglais des données de js/data/bandes.js (voir tools/bsdata/en.json).\n"
        f"export const EN = {body};\n",
        encoding="utf-8",
    )
    print(f"{len(data['bandes'])} bandes, {len(data['guerriers'])} guerriers, {len(data['regles'])} règles → {dest}")
