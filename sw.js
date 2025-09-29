const CACHE_NAME = "rh-seguros-cache-v1";
const URLS_TO_CACHE = [
  "/",
  "/index.html",
  "/logoMain.png"
];

// Instalación del Service Worker (se ejecuta una vez al instalar)
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Archivos cacheados ✅");
      return cache.addAll(URLS_TO_CACHE);
    })
  );
});

// Activación del Service Worker (se ejecuta cuando se actualiza)
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      )
    )
  );
  console.log("Service Worker activo 🟢");
});

// Interceptar peticiones y servir desde caché si no hay conexión
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
