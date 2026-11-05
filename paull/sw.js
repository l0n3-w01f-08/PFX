const CACHE_NAME = 'PFX-trade-cache-v1';
const assetsToCache = [
  'PAUL TRADE J.html',
  'calender.html',
  'script.js',
  'LOGO.png'
];

// Install Event
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(assetsToCache);
    })
  );
});

// Fetch Event (Serve from cache when offline)
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});