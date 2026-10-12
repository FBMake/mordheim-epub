"""
Extrait les données de jeu des catalogues BSData/mordheim (fichiers .cat)
en JSON compact, en anglais : guerriers (profil, coût, effectifs, XP de
départ, règles, accès aux compétences), listes d'équipement avec leurs
coûts, règles de bande.

Usage : python3 -I tools/bsdata/extract.py <dossier du dépôt BSData> <sortie.json> [Catalogue.cat ...]

Seules les données de jeu sont extraites (noms, chiffres, listes) : les
textes de règles ne sont pas repris, ils sont résumés en français dans
tools/bsdata/fr.json (voir README). Sans catalogue nommé, toutes les bandes
sont extraites (hors data.cat et Characters.cat).
"""
import json
import sys
import xml.etree.ElementTree as ET
from pathlib import Path

NS = "{http://www.battlescribe.net/schema/catalogueSchema}"
STATS = {"M": "M", "WS": "CC", "BS": "CT", "S": "F", "T": "E", "W": "PV", "I": "I", "A": "A", "LD": "Cd", "Ld": "Cd"}


def tag(e):
    return e.tag.replace(NS, "")


def costs(e):
    out = {}
    for c in e.findall(f"{NS}costs/{NS}cost"):
        try:
            out[c.get("typeId")] = float(c.get("value"))
        except (TypeError, ValueError):
            pass
    return out


def num(v):
    return int(v) if v == int(v) else v


class Index:
    def __init__(self, roots):
        self.by_id = {}
        for root in roots:
            for e in root.iter():
                i = e.get("id")
                if i and tag(e) in ("selectionEntry", "selectionEntryGroup", "rule", "profile"):
                    self.by_id.setdefault(i, e)

    def target(self, link):
        return self.by_id.get(link.get("targetId"))


def constraint(e, kind, scopes):
    for c in e.findall(f"{NS}constraints/{NS}constraint"):
        if c.get("type") == kind and c.get("scope") in scopes and c.get("field") == "selections":
            value = int(float(c.get("value")))
            # Limite relevée sous condition (ex. ours dressé : 0, ou 1 avec un dresseur).
            for m in e.iter(f"{NS}modifier"):
                if m.get("field") == c.get("id") and m.get("type") == "set":
                    value = max(value, int(float(m.get("value"))))
            return value
    return None


def model_profile(e):
    for p in e.iter(f"{NS}profile"):
        chars = {c.get("name"): (c.text or "").strip() for c in p.iter(f"{NS}characteristic")}
        if "M" in chars and ("WS" in chars or "CC" in chars):
            return {STATS.get(k, k): v for k, v in chars.items() if STATS.get(k)}
    return None


def equipment_list(group_entry, idx):
    """Liste d'équipement d'un guerrier : {catégorie: [{nom, cout}]}."""
    out = {}
    for grp in group_entry.findall(f"{NS}selectionEntryGroups/{NS}selectionEntryGroup"):
        items = []
        for link in grp.findall(f"{NS}entryLinks/{NS}entryLink"):
            t = idx.target(link)
            base = costs(t) if t is not None else {}
            over = costs(link)
            cout = over.get("points", base.get("points"))
            items.append({"nom": link.get("name"), "cout": num(cout) if cout is not None else None})
        for se in grp.findall(f"{NS}selectionEntries/{NS}selectionEntry"):
            items.append({"nom": se.get("name"), "cout": num(costs(se).get("points", 0))})
        if items:
            out[grp.get("name")] = items
    return out


def warrior(e, idx):
    cats = [c.get("name") for c in e.iter(f"{NS}categoryLink")]
    categorie = "heros" if "Heroes" in cats else "hdm" if "Henchmen" in cats else None
    if not categorie:
        return None
    w = {
        "nom": e.get("name"),
        "categorie": categorie,
        "cout": num(costs(e).get("points") or 0),
        "min": constraint(e, "min", ("roster", "force")) or 0,
        "max": constraint(e, "max", ("roster", "force")),
        "profil": model_profile(e),
        "xp": 0,
        "regles": [],
        "competences": [],
        "equipement": {},
    }
    # Hommes de main : coût et effectif maximum sont portés par la figurine
    # contenue dans le groupe (type « model »).
    for child in e.findall(f"{NS}selectionEntries/{NS}selectionEntry"):
        if child.get("type") == "model" or child.get("name") == e.get("name"):
            w["cout"] = num(costs(child).get("points") or w["cout"])
            w["max"] = constraint(child, "max", ("force", "roster")) or w["max"]
    for link in e.findall(f"{NS}entryLinks/{NS}entryLink"):
        t = idx.target(link)
        name = link.get("name")
        if name == "Experience":
            w["xp"] = constraint(link, "min", ("parent",)) or 0
        elif t is not None and tag(t) == "selectionEntry" and t.find(f"{NS}rules") is not None:
            w["regles"].append(name)
    for r in e.findall(f"{NS}rules/{NS}rule"):
        w["regles"].append(r.get("name"))
    for il in e.findall(f"{NS}infoLinks/{NS}infoLink"):
        if il.get("type") == "rule":
            w["regles"].append(il.get("name"))
    # Accès aux compétences : listes non masquées par défaut (les autres ne
    # s'ouvrent qu'avec un objet trouvé, ex. manuel d'entraînement).
    skills = e.findall(f"{NS}selectionEntryGroups/{NS}selectionEntryGroup") + e.findall(
        f"{NS}selectionEntries/{NS}selectionEntry"
    )
    for grp in skills:
        if grp.get("name") == "Skills":
            w["competences"] = [
                l.get("name") for l in grp.findall(f"{NS}entryLinks/{NS}entryLink") if l.get("hidden") != "true"
            ]
    for se in e.iter(f"{NS}selectionEntry"):
        if se.get("name", "").startswith("Starting Equipment"):
            w["equipement"] = equipment_list(se, idx)
            break
    w["regles"] = sorted(set(w["regles"]), key=w["regles"].index)
    return w


def extract(repo, cat_name):
    data = ET.parse(repo / "data.cat").getroot()
    cat = ET.parse(repo / cat_name).getroot()
    idx = Index([cat, data])
    out = {
        "source": cat_name,
        "nom": cat.get("name"),
        "revision": cat.get("revision"),
        "regles": [r.get("name") for r in cat.findall(f"{NS}rules/{NS}rule")]
        + [l.get("name") for l in cat.findall(f"{NS}infoLinks/{NS}infoLink") if l.get("type") == "rule"],
        "guerriers": [],
    }
    for e in cat.findall(f"{NS}selectionEntries/{NS}selectionEntry"):
        w = warrior(e, idx)
        if w:
            out["guerriers"].append(w)
    return out


if __name__ == "__main__":
    repo, dest, *cats = sys.argv[1:]
    repo = Path(repo)
    cats = cats or sorted(p.name for p in repo.glob("*.cat") if p.name not in ("data.cat", "Characters.cat"))
    result = [extract(repo, c) for c in cats]
    Path(dest).write_text(json.dumps(result, ensure_ascii=False, indent=1), encoding="utf-8")
    print(f"{len(result)} bandes, {sum(len(b['guerriers']) for b in result)} guerriers")
