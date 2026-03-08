// Contenu optimisé du fichier sw.js
const CACHE_NAME = 'audios-islam-v2'; // Changé en v2 car on modifie la liste
const urlsToCache = [
  '/',
  '/index.html',
  '/audios-islamique-icon.png',
  'https://cdn.tailwindcss.com',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('Cache ouvert');
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      // Retourne le fichier du cache s'il existe, sinon fait une requête réseau
      return response || fetch(event.request);
    })
  );
});
