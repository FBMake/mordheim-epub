/* ------------------------------------------------------------------
   Service worker de la PWA « Fiches de Bande ».

   - À l'installation, met en cache tout ce qu'il faut pour générer un
     PDF hors ligne (page, scripts, gabarits, coordonnées).
   - Fichiers du site : réseau d'abord (on voit toujours la dernière
     version quand on est en ligne), cache en secours hors ligne.
   - Polices Google : cache d'abord (elles ne changent pas).

   Pensez à incrémenter CACHE_VERSION quand la liste PRECACHE change.
   ------------------------------------------------------------------ */

const CACHE_VERSION = "v16";
const APP_CACHE = `fiches-bande-app-${CACHE_VERSION}`;
const FONT_CACHE = "fiches-bande-fonts";

const PRECACHE = [
  "./",
  "index.html",
  "manifest.webmanifest",
  "css/style.css",
  "images/parchemin-haut.webp",
  "images/parchemin-milieu.webp",
  "images/parchemin-bas.webp",
  "images/deco/separateur.webp",
  "images/deco/blason-s.webp",
  "js/app.js",
  "js/i18n.js",
  "js/combats.js",
  "js/blessures.js",
  "js/progression.js",
  "js/experience.js",
  "js/lang/fr.js",
  "js/lang/en.js",
  "js/flags.js",
  "js/parser.js",
  "js/translations.js",
  "js/personalization.js",
  "js/warband-store.js",
  "js/warband-builder.js",
  "js/data/bandes.js",
  "js/data/bandes-en.js",
  "js/donnees-langue.js",
  "js/data/competences.js",
  "js/pdf-builder.js",
  "js/vendor/pdf-lib.esm.min.js",
  "data/templates/fr/bande.png",
  "data/templates/fr/hero.png",
  "data/templates/fr/homme_de_main.png",
  "data/templates/fr/regles-vierge.png",
  "tools/coords/bande-coords.json",
  "tools/coords/hero-coords.json",
  "tools/coords/homme_de_main-coords.json",
  "tools/coords/regles-coords.json",
  "icons/icon-192.png",
  "icons/icon-512.png",
  "icons/apple-touch-icon.png",
  "icons/favicon-32.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(APP_CACHE)
      .then((cache) => cache.addAll(PRECACHE.map((url) => new Request(url, { cache: "reload" }))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(
        keys
          .filter((key) => key.startsWith("fiches-bande-app-") && key !== APP_CACHE)
          .map((key) => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

async function networkFirst(request) {
  const cache = await caches.open(APP_CACHE);
  try {
    const response = await fetch(request);
    if (response.ok) cache.put(request, response.clone());
    return response;
  } catch (err) {
    const cached = await cache.match(request, { ignoreSearch: true });
    if (cached) return cached;
    // Navigation hors ligne vers une URL inconnue : on sert la page d'accueil.
    if (request.mode === "navigate") {
      const home = await cache.match("index.html");
      if (home) return home;
    }
    throw err;
  }
}

async function cacheFirst(request) {
  const cache = await caches.open(FONT_CACHE);
  const cached = await cache.match(request);
  if (cached) return cached;
  const response = await fetch(request);
  if (response.ok || response.type === "opaque") cache.put(request, response.clone());
  return response;
}

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;
  const url = new URL(request.url);

  if (url.origin === self.location.origin) {
    event.respondWith(networkFirst(request));
  } else if (url.hostname === "fonts.googleapis.com" || url.hostname === "fonts.gstatic.com") {
    event.respondWith(cacheFirst(request));
  }
});
