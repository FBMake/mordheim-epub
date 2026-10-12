import sys
from PIL import Image, ImageDraw, ImageFilter
import numpy as np
src, out = sys.argv[1], sys.argv[2]
im = Image.open(src).convert('RGB')
a = np.asarray(im).astype(float)
sat = a.max(2) - a.min(2); lum = a.mean(2)
cand = (sat <= 6) & (lum >= 228)
m = Image.fromarray(np.where(cand, 255, 0).astype(np.uint8)).copy()
W, H = m.size
for p in [(0,0),(W-1,0),(0,H-1),(W-1,H-1),(W//2,0),(W//2,H-1),(0,H//2),(W-1,H//2),(W//2,160),(W//2,1043)]:
    if m.getpixel(p) == 255:
        ImageDraw.floodfill(m, p, 128)
bg = np.asarray(m) == 128          # fond réellement extérieur
# Les petites bandes entre les rouleaux et le papier : flood depuis tout pixel candidat connecté à une ligne entière blanche
fg = ~bg
fgimg = Image.fromarray((fg*255).astype(np.uint8))
dil = np.asarray(fgimg.filter(ImageFilter.MaxFilter(5))) > 0
ero = np.asarray(fgimg.filter(ImageFilter.MinFilter(5))) > 0
band = dil & ~ero
soft = np.clip(np.maximum((sat - 3) / 22, (238 - lum) / 30), 0, 1)
alpha = np.where(ero, 1.0, np.where(band, soft, 0.0))
alpha = np.where(fg & ~band, 1.0, alpha)
# décontamination du blanc
aa = np.maximum(alpha, 1e-3)[..., None]
rgb = np.clip((a - (1 - aa) * 255) / aa, 0, 255)
rgba = np.dstack([rgb, alpha * 255]).round().astype(np.uint8)
Image.fromarray(rgba, 'RGBA').save(out)
print('fg ratio', fg.mean())
