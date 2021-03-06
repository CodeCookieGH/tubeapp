var CACHE_NAME = 'tubeapp';
	var urlsToCache = [
	  '/tubeapp/',
	  '/tubeapp/favicon.png',
	  '/tubeapp/icon.png',
	  '/tubeapp/maskable_icon.png',
	  '/tubeapp/apple-icon.png',
	  '/tubeapp/css/reset.css'
	];

	self.addEventListener('install', function(event) {
	  // Perform install steps
	  event.waitUntil(
		caches.open(CACHE_NAME)
		  .then(function(cache) {
			console.log('Opened cache');
			return cache.addAll(urlsToCache);
		  })
	  );
	});


self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});