/* ============================================================
   جاوبني — عامل الخدمة (Service Worker)
   ------------------------------------------------------------
   يجعل اللعبة تطبيقاً قابلاً للتثبيت (أندرويد وآيفون) ويعمل بلا إنترنت:
   - هيكل التطبيق (الصفحات والسكربتات) يُخزَّن عند التثبيت، ويُجلب من
     الشبكة أولاً كلما توفّرت (network-first) فتصل التعديلات فوراً.
   - الصور المحلية تُخزَّن عند أول عرض (cache-first) — المجلد كبير
     (أكثر من 80 ميغابايت) فلا نحمّله كله مقدّماً.
   - صور الإنترنت (ويكيميديا…) تُخزَّن عند أول عرض بحدٍّ أقصى للعدد.
   - الصوت والفيديو وطلبات Range لا تُخزَّن.
   عند أي تعديل على قائمة الملفات أو الاستراتيجية: غيّر VERSION.
   ============================================================ */

const VERSION = 'jawabni-v2';
const SHELL   = VERSION + '-shell';
const MEDIA   = VERSION + '-media';
const REMOTE  = VERSION + '-remote';
const REMOTE_MAX = 150;

const SHELL_FILES = [
  './', 'index.html', 'main-page.html', 'question-section.html', 'SelectSections.html',
  'question.html', 'result.html', 'settings.html', 'guide.html', 'balance.html',
  'MyAccount.html', 'MyGame.html', 'online.html', 'signIn.html', 'signUp.html',
  'theme.js', 'questions.js', 'questions-extra.js', 'questions-extra2.js', 'categories.js',
  'images.js', 'powerups.js', 'wheel.js', 'translate.js', 'i18n.js', 'i18n-langs.js',
  'i18n-categories.js', 'sfx.js', 'pwa.js', 'manifest.json', 'mobile.css',
  'image/jawbnny.png', 'image/maps.webp',
  'image/icons/icon-192.png', 'image/icons/icon-512.png'
];

self.addEventListener('install', (event) => {
  /* كل ملف على حدة — ملف مفقود واحد لا يُفشل التثبيت كله */
  event.waitUntil(
    caches.open(SHELL)
      .then((cache) => Promise.all(SHELL_FILES.map((f) => cache.add(f).catch(() => {}))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => !k.startsWith(VERSION)).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

async function trim(cacheName, max) {
  const cache = await caches.open(cacheName);
  const keys = await cache.keys();
  for (let i = 0; i < keys.length - max; i++) await cache.delete(keys[i]);
}

async function networkFirst(req, cacheName) {
  const cache = await caches.open(cacheName);
  try {
    const res = await fetch(req);
    if (res && res.ok) cache.put(req, res.clone()).catch(() => {});
    return res;
  } catch (e) {
    /* بلا إنترنت: الصفحة نفسها ولو اختلفت معاملاتها (question.html?category=…) */
    const hit = await cache.match(req, { ignoreSearch: true });
    if (hit) return hit;
    throw e;
  }
}

async function cacheFirst(req, cacheName, max) {
  const cache = await caches.open(cacheName);
  const hit = await cache.match(req);
  if (hit) return hit;
  const res = await fetch(req);
  if (res && (res.ok || res.type === 'opaque')) {
    cache.put(req, res.clone())
      .then(() => { if (max) return trim(cacheName, max); })
      .catch(() => {});
  }
  return res;
}

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET' || req.headers.has('range')) return;

  const url = new URL(req.url);

  if (url.origin === self.location.origin) {
    if (url.pathname.indexOf('/image/') !== -1) {
      event.respondWith(cacheFirst(req, MEDIA));
    } else {
      event.respondWith(networkFirst(req, SHELL));
    }
    return;
  }

  /* صور من الإنترنت فقط — الواجهات البرمجية والخطوط والصوت تمرّ للشبكة كما هي */
  if (req.destination === 'image') {
    event.respondWith(cacheFirst(req, REMOTE, REMOTE_MAX));
  }
});
