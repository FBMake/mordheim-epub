import sys
from PIL import Image
import numpy as np
src, outdir = sys.argv[1], sys.argv[2]
c = np.asarray(Image.open(src).convert('RGBA')).astype(float)

# Raccord rouleaux / papier : dans l'image d'origine, un vide sépare le papier
# des rouleaux. On remonte le papier de 25 px et le rouleau du bas de 50 px :
# les rouleaux (dessinés par-dessus) recouvrent alors les bords du papier.
TOP_ROLL_END, BOT_ROLL_START, DT, DB = 154, 1050, 25, 25
H = c.shape[0] - DT - DB
a = np.zeros((H,) + c.shape[1:])
def over(dst, src_rows, y):
    d = dst[y:y+len(src_rows)]
    sa, da = src_rows[..., 3:] / 255, d[..., 3:] / 255
    oa = sa + da * (1 - sa)
    d[..., :3] = (src_rows[..., :3] * sa + d[..., :3] * da * (1 - sa)) / np.maximum(oa, 1e-6)
    d[..., 3:] = oa * 255
paper = c[TOP_ROLL_END:BOT_ROLL_START]
a[TOP_ROLL_END-DT:BOT_ROLL_START-DT] = paper
over(a, c[:TOP_ROLL_END], 0)
over(a, c[BOT_ROLL_START:], BOT_ROLL_START - DT - DB)
TOP_END, TOP_FADE = 435, 40      # haut : lignes 0..435, fondu sur les 40 dernières
MID, MID_LEN, K = 395, 300, 60   # motif : lignes 395..695, raccord sur 60 lignes
BOT_START, BOT_FADE = 775, 50    # bas : lignes 775..fin, fondu sur les 50 premières

top = a[:TOP_END].copy()
top[TOP_END-TOP_FADE:, :, 3] *= np.linspace(1, 0, TOP_FADE)[:, None]

mid = a[MID:MID+MID_LEN].copy()
w = np.linspace(0, 1, K)[:, None, None]
mid[MID_LEN-K:] = mid[MID_LEN-K:] * (1 - w) + a[MID-K:MID] * w

bot = a[BOT_START:].copy()
bot[:BOT_FADE, :, 3] *= np.linspace(0, 1, BOT_FADE)[:, None]

for name, arr in [('haut', top), ('milieu', mid), ('bas', bot)]:
    img = Image.fromarray(arr.round().clip(0, 255).astype(np.uint8), 'RGBA')
    img.save(f'{outdir}/parchemin-{name}.webp', 'WEBP', quality=78, method=6)
print('H', H)
