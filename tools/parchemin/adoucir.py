"""Adoucit le bord déchiré du parchemin.

Lit les images brutes (tools/parchemin/brut/, sorties de split.py) et écrit
les images du site (images/). Le contour est légèrement fondu, et le papier
à peine assombri sur ses tout derniers pixels (réglages ci-dessous : plus
LARGEUR est grand et SOMBRE petit, plus le bord paraît roussi).

    python3 tools/parchemin/adoucir.py tools/parchemin/brut images
"""
import sys
import numpy as np
from PIL import Image

src, dst = sys.argv[1], sys.argv[2]

LARGEUR = 6         # px (image de 1305 px) sur lesquels le bord est à peine assombri
SOMBRE = 0.88       # luminosité restante tout au bord
TEINTE = np.array([0.97, 0.93, 0.88])  # léger brun vers lequel tire le bord
FONDU = 3           # px de contour rendus semi-transparents


def distance_au_bord(opaque, maxi):
    """Distance (en px, approchée) de chaque pixel opaque au vide le plus proche."""
    d = np.zeros(opaque.shape, float)
    m = opaque.copy()
    for i in range(1, maxi + 1):
        p = np.pad(m, 1, constant_values=False)
        # Alternance croix / carré : distance octogonale, proche de l'euclidienne.
        e = p[1:-1, 1:-1] & p[:-2, 1:-1] & p[2:, 1:-1] & p[1:-1, :-2] & p[1:-1, 2:]
        if i % 2 == 0:
            e &= p[:-2, :-2] & p[:-2, 2:] & p[2:, :-2] & p[2:, 2:]
        d[m & ~e] = i
        m = e
    d[m] = maxi + 1
    return d


def traiter(nom, haut=0, bas=0, boucle=False, liseres=()):
    img = np.asarray(Image.open(f"{src}/parchemin-{nom}.webp").convert("RGBA")).astype(float)
    # Lignes claires laissées par le raccord rouleau / papier : remplacées
    # par un dégradé entre la ligne du dessus et celle du dessous.
    for y0, y1 in liseres:
        avant, apres = img[y0 - 1].copy(), img[y1 + 1].copy()
        for i, y in enumerate(range(y0, y1 + 1), 1):
            w = i / (y1 - y0 + 2)
            img[y] = avant * (1 - w) + apres * w
    alpha = img[..., 3]
    # Les raccords entre morceaux (lignes en fondu) ne sont pas des bords :
    # on prolonge le contour au-delà pour ne pas les brunir.
    pad = LARGEUR + 2
    if boucle:
        ext = np.concatenate([alpha[-pad:], alpha, alpha[:pad]])
    else:
        top = np.repeat(alpha[haut:haut + 1], pad, 0) if haut else np.zeros((pad, alpha.shape[1]))
        bot = np.repeat(alpha[-bas - 1:alpha.shape[0] - bas], pad, 0) if bas else np.zeros((pad, alpha.shape[1]))
        a2 = alpha.copy()
        if haut:
            a2[:haut] = alpha[haut]
        if bas:
            a2[-bas:] = alpha[-bas - 1]
        ext = np.concatenate([top, a2, bot])
    d = distance_au_bord(ext > 128, LARGEUR + 1)[pad:-pad]

    t = np.clip(d / LARGEUR, 0, 1)
    t = t * t * (3 - 2 * t)  # smoothstep
    lum = SOMBRE + (1 - SOMBRE) * t
    teinte = TEINTE + (1 - TEINTE) * t[..., None]
    img[..., :3] *= lum[..., None] * teinte
    img[..., 3] *= np.clip((d - 0.5) / FONDU, 0.35, 1)
    Image.fromarray(img.round().clip(0, 255).astype(np.uint8), "RGBA").save(
        f"{dst}/parchemin-{nom}.webp", "WEBP", quality=78, method=6
    )


# Fondus de raccord de split.py : 40 dernières lignes du haut, 50 premières du bas.
traiter("haut", bas=40, liseres=[(152, 153)])
traiter("milieu", boucle=True)
traiter("bas", haut=50)
