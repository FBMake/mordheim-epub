"""
Assemble les données de bandes en français pour l'application.

Usage : python3 -I tools/bsdata/build.py <raw.json (extract.py)> tools/bsdata/fr.json js/data/bandes.js

Seules les bandes et les guerriers présents dans fr.json sont repris. Le
script s'arrête en listant tout nom (règle, équipement, liste de
compétences) qui n'a pas de traduction.
"""
import json
import sys
from pathlib import Path


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
    if missing:
        print("Traductions manquantes :\n  " + "\n  ".join(sorted(missing)))
        sys.exit(1)
    body = json.dumps(bandes, ensure_ascii=False, indent=1)
    Path(dest).parent.mkdir(parents=True, exist_ok=True)
    Path(dest).write_text(
        "// Fichier généré par tools/bsdata/build.py : ne pas modifier à la main.\n"
        "// Données de jeu extraites de BSData/mordheim, traduites dans tools/bsdata/fr.json.\n"
        f"export const BANDES = {body};\n",
        encoding="utf-8",
    )
    print(f"{len(bandes)} bandes, {sum(len(b['guerriers']) for b in bandes)} guerriers → {dest}")
