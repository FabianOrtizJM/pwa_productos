const CACHE_NAME = 'crud-pwa-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/AddCategoria.html',
  '/AddProducto.html',
  '/Categorias.html',
  '/Productos.html',
  '/styles.css', // Si tienes un archivo de estilos
  '/api.js', // Archivo de funciones para interactuar con la API
];

// Instalar el Service Worker y almacenar en caché los recursos
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Abriendo caché');
      return cache.addAll(urlsToCache);
    })
  );
});

// Interceptar solicitudes y servir desde la caché
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Si el recurso está en caché, se sirve desde ahí
      return response || fetch(event.request);
    })
  );
});

// Actualizar la caché
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      )
    )
  );
});
