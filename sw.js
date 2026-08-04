const CACHE_NAME = 'tca4shop-cache-v5';
const urlsToCache = [
  './',
  './index.html',
  './productos.html',
  './producto.html',
  './mayoristas.html',
  './resenas.html',
  './css/styles.css',
  './js/script.js',
  './manifest.json',
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Montserrat:wght@600;700;800&display=swap'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});
