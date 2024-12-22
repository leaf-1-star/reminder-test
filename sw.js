self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('reminder-v1').then(function(cache) {
            return cache.addAll([
                'test.html',
                'icon.png'
            ]);
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
}); 