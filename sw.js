const cacheNameInitial = 'serviceworker-'
const cacheName = cacheNameInitial + 'v' + Math.floor(Math.random() * 10);

self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request)
        .then((response) => {
          return response || fetch(event.request);
        })
    );
  });

self.addEventListener('activate', function (event) {
    event.waitUntil(caches.keys()
            .then( (cacheNames) => {
                return Promise.all(
                    cacheNames.filter(function (cache) {
                        return cache.startsWith(cacheNameInitial) && cache != cacheName;
                    }).map(function (cache) {
                        return caches.delete(cache);
                    })
                );
            })
        );
});  

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName)
      .then( (cache) => {
        return cache.addAll(
            [
                './',
                'index.html',
                'restaurant.html',
                './css/styles.css',
                './css/responsive.css',
                './js/main.js',
                './js/sw-register.js',
                './js/dbhelper.js',
                './js/restaurant_info.js',
                './data/restaurants.json',
                'https://unpkg.com/leaflet@1.3.1/dist/leaflet.css',
                './img/1.jpg',
                './img/2.jpg',
                './img/3.jpg',
                './img/4.jpg',
                './img/5.jpg',
                './img/6.jpg',
                './img/7.jpg',
                './img/8.jpg',
                './img/9.jpg',
                './img/10.jpg',
                './img/restaurant.ico',
                'restaurant.html?id=1',
                'restaurant.html?id=2',
                'restaurant.html?id=3',
                'restaurant.html?id=4',
                'restaurant.html?id=5',
                'restaurant.html?id=6',
                'restaurant.html?id=7',
                'restaurant.html?id=8',
                'restaurant.html?id=9',
                'restaurant.html?id=10'
              ]
        );
      })
  );
});


