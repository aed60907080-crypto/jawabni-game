/* جاوبني — تسجيل عامل الخدمة (sw.js) ليصير الموقع تطبيقاً قابلاً للتثبيت
   على أندرويد وآيفون، ويعمل بلا إنترنت بعد أول زيارة.
   يحتاج https (أو localhost)، ولا يعمل عند فتح الملفات مباشرة (file://). */
(function () {
  if (!("serviceWorker" in navigator)) return;
  if (!/^https?:$/.test(location.protocol)) return;
  window.addEventListener("load", function () {
    navigator.serviceWorker.register("sw.js").catch(function () { /* المتصفح رفض — تعمل اللعبة كموقع عادي */ });
  });
})();
