const CACHE_NAME = 'mathflow-v2';
const ASSETS = [
    './',
    './index.html',
    './manifest.json',
    './assets/img/gears.png',
    './assets/img/favicon.ico',
    './assets/js/main.js',
    './assets/js/math_data.js',
    './assets/js/economics_data.js',
    './login/index.html',
    './login/script.js'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS);
        })
    );
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
