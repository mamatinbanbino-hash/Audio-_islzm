// Contenu du fichier sw.js
const CACHE_NAME = 'audios-islam-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/audios-islamique-icon.png'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache)));
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
