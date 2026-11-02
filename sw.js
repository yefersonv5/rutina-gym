// Rutina de gym: guarda la app en el teléfono para que abra sin internet.
const CACHE = 'rutina-gym-v7';
const FILES = [
  './', './index.html', './manifest.webmanifest',
  './icon-192.png', './icon-512.png', './icon-maskable.png', './apple-touch-icon.png',
  './fonts/jakarta-400.woff2', './fonts/jakarta-500.woff2', './fonts/jakarta-600.woff2',
  './fonts/jakarta-700.woff2', './fonts/jakarta-800.woff2'
];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
// Primero la copia guardada (abre al instante y sin señal); en segundo plano trae la versión nueva si hay internet.
self.addEventListener('fetch', e => {
  const u = new URL(e.request.url);
  if (e.request.method !== 'GET' || u.origin !== location.origin) return;
  e.respondWith(caches.open(CACHE).then(async c => {
    const hit = await c.match(e.request, { ignoreSearch: true });
    const net = fetch(e.request).then(r => { if (r.ok) c.put(e.request, r.clone()); return r; }).catch(() => null);
    if (hit) { e.waitUntil(net); return hit; }
    return (await net) || (e.request.mode === 'navigate' ? c.match('./index.html') : Response.error());
  }));
});
