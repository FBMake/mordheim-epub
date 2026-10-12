import sys
from PIL import Image
import numpy as np
src, outdir = sys.argv[1], sys.argv[2]
a = np.asarray(Image.open(src).convert('RGBA')).astype(float)
H = a.shape[0]
TOP_END, TOP_FADE = 460, 40      # haut : lignes 0..460, fondu sur les 40 dernières
MID, MID_LEN, K = 420, 300, 60   # motif : lignes 420..720, raccord sur 60 lignes
BOT_START, BOT_FADE = 800, 50    # bas : lignes 800..fin, fondu sur les 50 premières

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
