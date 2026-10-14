"""
Assemble les données de bandes en français pour l'application.

Usage : python3 -I tools/bsdata/build.py <raw.json (extract.py)> tools/bsdata/fr.json js/data/bandes.js

Seules les bandes et les guerriers présents dans fr.json sont repris. Le
script s'arrête en listant tout nom (règle, équipement, liste de
compétences) qui n'a pas de traduction.

Les bandes absentes de BSData (suppléments, Town Cryer) sont saisies à la
main dans tools/bsdata/supplements/<id>.json, déjà en français, d'après
mordheimer.net : elles sont ajoutées après celles de BSData, avec leurs
listes de compétences spéciales et leurs maximums de race.
"""
import json
import re
import sys
from pathlib import Path


def charger_supplements(dossier):
    return [json.loads(f.read_text(encoding="utf-8")) for f in sorted(Path(dossier).glob("*.json"))]


def slug(nom):
    return re.sub(r"[^a-z0-9]+", "-", nom.lower().replace("’", "").replace("'", "")).strip("-")


def build_supplements(supplements, fr, missing):
    """Bandes des suppléments, listes de compétences spéciales, races."""
    textes = {}
    for s in supplements:
        for key, val in s.get("reglesTexte", {}).items():
            textes.setdefault(key, val["fr"])

    def regle(key):
        if key in fr["regles"]:
            return fr["regles"][key]
        if key in textes:
            return textes[key]
        missing.add(f"règle sans résumé : {key}")
        return {"nom": key, "resume": ""}

    bandes, listes, races = [], {}, {}
    for s in supplements:
        guerriers = []
        for g in s["guerriers"]:
            regles = list(g.get("regles", []))
            if g["categorie"] == "heros" and g["min"] >= 1 and "Leader" not in regles:
                regles.insert(0, "Leader")
            guerriers.append(
                {
                    "id": f"{s['id']}/{slug(g['cle'])}",
                    "nom": g["nom"],
                    "categorie": g["categorie"],
                    "cout": g["cout"],
                    "min": g["min"],
                    "max": g["max"],
                    "xp": g["xp"],
                    "profil": g["profil"],
                    "regles": [regle(r) for r in regles],
                    "competences": g.get("competences", []),
                    "equipement": [
                        {"categorie": c["categorie"], "objets": [{"nom": o["nom"], "cout": o["cout"]} for o in c["objets"]]}
                        for c in g.get("equipement", [])
                    ],
                    "race": g.get("race"),
                    "sansProgression": bool(g.get("sansProgression")),
                }
            )
        guerriers.sort(key=lambda g: (g["categorie"] != "heros", -g["min"], -g["cout"]))
        bandes.append(
            {
                "id": s["id"],
                "nom": s["nom"],
                "tresor": s["tresor"],
                "effectifMax": s["effectifMax"],
                "regles": [regle(r) for r in s.get("regles", [])],
                "guerriers": guerriers,
                "source": f"mordheimer.net · {s['nomEn']}",
            }
        )
        cs = s.get("competencesSpeciales")
        if cs:
            listes[cs["liste"]] = [[c["en"], c["nom"], c["resume"], c.get("condition")] for c in cs["competences"]]
        races.update(s.get("races", {}))
    return bandes, listes, races


def build(raw, fr):
    missing = set()

    def tr(table, key):
        if key not in fr[table]:
            missing.add(f"{table}: {key}")
            return key
        return fr[table][key]

    def regle(key):
        val = tr("regles", key)
        return val if isinstance(val, dict) else {"nom": key, "resume": ""}

    by_source = {b["source"]: b for b in raw}
    bandes = []
    for source, meta in fr["bandes"].items():
        b = by_source.get(source)
        if not b:
            missing.add(f"catalogue absent : {source}")
            continue
        guerriers = []
        for w in b["guerriers"]:
            wfr = meta["guerriers"].get(w["nom"])
            if not wfr:
                continue  # figurine non recrutable à la création (ex. zombie relevé en cours de partie)
            # « remplacer » précise une règle ambiguë des données (ex. Wizard → domaine de magie).
            remplacer = wfr.get("remplacer", {})
            regles = [remplacer.get(r, r) for r in w["regles"]]
            if w["categorie"] == "heros" and w["min"] >= 1 and "Leader" not in regles:
                regles.insert(0, "Leader")
            regles += [r for r in wfr.get("regles", []) if r not in regles]
            equipement = []
            for cat, items in w["equipement"].items():
                equipement.append(
                    {
                        "categorie": tr("categoriesEquipement", cat),
                        "objets": [{"nom": tr("equipement", i["nom"]), "cout": i["cout"]} for i in items],
                    }
                )
            guerriers.append(
                {
                    "id": f"{meta['id']}/{w['nom'].lower().replace(' ', '-')}",
                    "nom": wfr["nom"],
                    "categorie": w["categorie"],
                    "cout": w["cout"],
                    "min": w["min"],
                    "max": w["max"],
                    "xp": w["xp"],
                    "profil": w["profil"],
                    "regles": [regle(r) for r in regles],
                    "competences": [tr("competences", c) for c in w["competences"]],
                    "equipement": equipement,
                }
            )
        for name in meta["guerriers"]:
            if name not in {w["nom"] for w in b["guerriers"]}:
                missing.add(f"guerrier absent du catalogue {source} : {name}")
        # Héros d'abord (chef en tête), puis hommes de main, par coût décroissant.
        guerriers.sort(key=lambda g: (g["categorie"] != "heros", -g["min"], -g["cout"]))
        bandes.append(
            {
                "id": meta["id"],
                "nom": meta["nom"],
                "tresor": meta["tresor"],
                "effectifMax": meta["effectifMax"],
                "regles": [regle(r) for r in meta["regles"]],
                "guerriers": guerriers,
                "source": f"BSData/mordheim · {b['nom']} (révision {b['revision']})",
            }
        )
    return bandes, missing


if __name__ == "__main__":
    raw_path, fr_path, dest = sys.argv[1:]
    raw = json.loads(Path(raw_path).read_text(encoding="utf-8"))
    fr = json.loads(Path(fr_path).read_text(encoding="utf-8"))
    bandes, missing = build(raw, fr)
    supp, listes, races = build_supplements(charger_supplements(Path(fr_path).parent / "supplements"), fr, missing)
    bandes += supp
    if missing:
        print("Traductions manquantes :\n  " + "\n  ".join(sorted(missing)))
        sys.exit(1)
    body = json.dumps(bandes, ensure_ascii=False, indent=1)
    Path(dest).parent.mkdir(parents=True, exist_ok=True)
    Path(dest).write_text(
        "// Fichier généré par tools/bsdata/build.py : ne pas modifier à la main.\n"
        "// Données de jeu extraites de BSData/mordheim, traduites dans tools/bsdata/fr.json,\n"
        "// et bandes des suppléments saisies dans tools/bsdata/supplements/.\n"
        f"export const BANDES = {body};\n"
        "// Listes de compétences spéciales des suppléments : [anglais, français, résumé, condition].\n"
        f"export const COMPETENCES_SUPPLEMENTS = {json.dumps(listes, ensure_ascii=False, indent=1)};\n"
        "// Maximums de caractéristiques des races des suppléments.\n"
        f"export const RACES_SUPPLEMENTS = {json.dumps(races, ensure_ascii=False, indent=1)};\n",
        encoding="utf-8",
    )
    print(f"{len(bandes)} bandes, {sum(len(b['guerriers']) for b in bandes)} guerriers → {dest}")
