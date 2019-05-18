const FILES_TO_CACHE = ['offline.html',];
const CACHE_NAME = 'static-cache-v1';

// Iniciar caché
self.addEventListener('install', (event)=>{
    console.log('[ServiceWorker] Instalado');

    event.waitUntil(
        caches.open(CACHE_NAME).then((cache)=>{
            console.log('[ServiceWorker] Pre-Caché');
            return cache.addAll(FILES_TO_CACHE);
        })
    )

    self.skipWaiting();
})


self.addEventListener('activate', (event)=>{
    console.log('[ServiceWorker] Activado');

    event.waitUntil(
        caches.keys().then((keyList)=>{
            return Promise.all(keyList.map((key)=>{
                if (key!= CACHE_NAME){
                    console.log('[ServiceWorker] Sacando el viejo cache', key);
                    return caches.delete(key);
                }
            })
            )
        })
    )

    self.clients.claim()
})


self.addEventListener('fetch', (event)=>{
    console.log('[ServiceWorker] Espera', event.request.url);

    event.respondWith(
        fetch(event.request)
            .catch(()=>{
                return caches.open(CACHE_NAME)
                    .then((cache)=>{
                        return cache.match('offline.html');
                    })
            })
    )


})

