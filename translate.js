/* ============================================================
   جاوبني — ترجمة نصوص الأسئلة
   ------------------------------------------------------------
   واجهة اللعبة مترجمة يدوياً في i18n-langs.js، أما نصوص الأسئلة
   والإجابات (أكثر من 3400 سؤال) فتُترجم آلياً عند العرض حسب
   اللغة المختارة، وتُحفظ الترجمة في المتصفح فلا تتكرر.

   المزوّد: MyMemory — مجاني وبلا مفتاح ويدعم كل لغات اللعبة.
     الحصة اليومية المجهولة محدودة، ويمكن رفعها بإضافة بريدك
     الإلكتروني من صفحة الكتيّب (يُرسَل للمزوّد فقط لرفع الحصة).

   الاستخدام:
     Translate.item(item, lang)   →  Promise<{ q, a }>
     Translate.text(str, lang)    →  Promise<string>
     Translate.prefetchRound(round, lang)
     Translate.enabled()          هل الترجمة الآلية مفعّلة؟

   التخزين:
     questionTranslations   الذاكرة المؤقتة
     autoTranslate          "0" لإطفاء الترجمة الآلية
     translateEmail         بريد اختياري لرفع حصة المزوّد
   ============================================================ */

(function (global) {
  "use strict";

  var CACHE_KEY   = "questionTranslationsV2";
  var CACHE_LIMIT = 4000;
  var TIMEOUT_MS  = 9000;
  var GAP_MS      = 160;          /* تباعد بين الطلبات حتى لا نُثقل المزوّد */
  var MAX_LEN     = 480;          /* أقصى طول نص يقبله المزوّد مرة واحدة */

  /* ---------- الذاكرة المؤقتة ---------- */
  var cache = null;

  function loadCache() {
    if (cache) return cache;
    try { cache = JSON.parse(localStorage.getItem(CACHE_KEY) || "{}"); }
    catch (e) { cache = {}; }
    return cache;
  }

  function saveCache() {
    try {
      var c = loadCache();
      var keys = Object.keys(c);
      if (keys.length > CACHE_LIMIT) {
        keys.slice(0, keys.length - CACHE_LIMIT).forEach(function (k) { delete c[k]; });
      }
      localStorage.setItem(CACHE_KEY, JSON.stringify(c));
    } catch (e) { /* الذاكرة ممتلئة — نتجاهل */ }
  }

  /* مفتاح مختصر: اللغة + بصمة النص */
  function hash(s) {
    var h = 2166136261 >>> 0;
    for (var i = 0; i < s.length; i++) {
      h ^= s.charCodeAt(i);
      h = Math.imul(h, 16777619) >>> 0;
    }
    return h.toString(36);
  }

  function key(text, lang) { return lang + ":" + hash(text); }

  /* الفاصل بين السؤال والإجابة في الطلب المشترك — يبقى بعد الترجمة */
  var SEP = " — ";

  /* يفصل النتيجة المترجمة إلى سؤال وإجابة، ويرجع للأصل عند الفشل */
  function splitPair(translated, origQ, origA) {
    if (!translated) return { q: origQ, a: origA };
    var parts = translated.split(/\s*—\s*/);
    if (parts.length < 2) return { q: origQ, a: origA };
    var q = parts[0].trim();
    var a = parts.slice(1).join(" — ").trim();
    if (!q || !a) return { q: origQ, a: origA };
    return { q: q, a: a };
  }

  /* ---------- الإعدادات ---------- */
  function enabled() {
    try { return localStorage.getItem("autoTranslate") !== "0"; }
    catch (e) { return true; }
  }

  function email() {
    try { return (localStorage.getItem("translateEmail") || "").trim(); }
    catch (e) { return ""; }
  }

  /* ---------- طابور الطلبات ---------- */
  /* نُسلسل الطلبات بتباعد بسيط بدل إرسالها دفعة واحدة */
  var chain = Promise.resolve();

  function queued(fn) {
    var run = chain.then(fn);
    chain = run.then(
      function () { return delay(GAP_MS); },
      function () { return delay(GAP_MS); }
    );
    return run;
  }

  function delay(ms) { return new Promise(function (r) { setTimeout(r, ms); }); }

  /* ---------- المزوّد ---------- */
  function fetchTimeout(url) {
    var ctrl = global.AbortController ? new AbortController() : null;
    var t = setTimeout(function () { ctrl && ctrl.abort(); }, TIMEOUT_MS);
    return fetch(url, ctrl ? { signal: ctrl.signal } : undefined)
      .then(function (r) {
        clearTimeout(t);
        if (!r.ok) throw new Error("HTTP " + r.status);
        return r.json();
      })
      .catch(function (e) { clearTimeout(t); throw e; });
  }

  function fromMyMemory(text, lang) {
    var url = "https://api.mymemory.translated.net/get" +
              "?q=" + encodeURIComponent(text) +
              "&langpair=" + encodeURIComponent("ar|" + lang);
    var mail = email();
    if (mail) url += "&de=" + encodeURIComponent(mail);

    return fetchTimeout(url).then(function (d) {
      var out = d && d.responseData && d.responseData.translatedText;
      if (!out) return null;
      /* المزوّد يعيد رسائل خطأ كنصّ مترجم أحياناً */
      if (/^(MYMEMORY WARNING|PLEASE SELECT|INVALID|QUERY LENGTH)/i.test(out)) return null;
      /* لم يترجم شيئاً */
      if (out.trim() === text.trim()) return null;
      return decodeEntities(out);
    }).catch(function () { return null; });
  }

  /* المزوّد يُرجع أحياناً كيانات HTML */
  function decodeEntities(s) {
    return String(s)
      .replace(/&quot;/g, '"').replace(/&#39;/g, "'")
      .replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
  }

  /* ---------- الترجمة ---------- */
  function translateText(text, lang) {
    text = String(text == null ? "" : text).trim();

    if (!text) return Promise.resolve("");
    if (!lang || lang === "ar") return Promise.resolve(text);
    if (!global.fetch) return Promise.resolve(text);

    var k = key(text, lang);
    var c = loadCache();
    if (c[k] !== undefined) return Promise.resolve(c[k] || text);

    if (!enabled()) return Promise.resolve(text);
    if (text.length > MAX_LEN) return Promise.resolve(text);

    return queued(function () {
      /* ربما وصلت من طلب متزامن آخر بينما كنا في الطابور */
      if (loadCache()[k] !== undefined) return loadCache()[k] || text;

      return fromMyMemory(text, lang).then(function (out) {
        loadCache()[k] = out || "";     /* "" = محاولة فاشلة، لا نكررها */
        saveCache();
        return out || text;
      });
    });
  }

  var Translate = {

    enabled: enabled,

    setEnabled: function (on) {
      try { localStorage.setItem("autoTranslate", on ? "1" : "0"); } catch (e) {}
    },

    getEmail: email,

    setEmail: function (v) {
      try {
        if (v && v.trim()) localStorage.setItem("translateEmail", v.trim());
        else localStorage.removeItem("translateEmail");
      } catch (e) {}
    },

    text: translateText,

    /* هل النص مترجم فعلاً (موجود في الذاكرة بترجمة غير فارغة)؟ */
    isTranslated: function (text, lang) {
      if (!lang || lang === "ar") return false;
      var v = loadCache()[key(String(text || "").trim(), lang)];
      return !!v;
    },

    /* ترجمة سؤال كامل — السؤال والإجابة في طلب واحد.
       مهم: الإجابات كلمة أو كلمتان، وترجمتها وحدها تُخطئ كثيراً
       («المشتري» تصير Purchase بدل Jupiter). لذلك نرسل السؤال
       والإجابة معاً مفصولين بشَرطة، فيفهم المترجم السياق،
       ثم نفصلهما بعد الترجمة. */
    item: function (item, lang) {
      if (!item) return Promise.resolve({ q: "", a: "" });
      if (!lang || lang === "ar") return Promise.resolve({ q: item.q, a: item.a });

      var q = String(item.q || "").trim();
      var a = String(item.a || "").trim();
      if (!q || !a) {
        return Promise.all([translateText(q, lang), translateText(a, lang)])
          .then(function (r) { return { q: r[0], a: r[1] }; });
      }

      var joined = q + SEP + a;
      var k = key(joined, lang);
      var c = loadCache();

      if (c[k] !== undefined) return Promise.resolve(splitPair(c[k], q, a));
      if (!enabled() || !global.fetch) return Promise.resolve({ q: q, a: a });
      if (joined.length > MAX_LEN) {
        /* أطول من طاقة المزوّد — نترجم كلاً على حدة */
        return Promise.all([translateText(q, lang), translateText(a, lang)])
          .then(function (r) { return { q: r[0], a: r[1] }; });
      }

      return queued(function () {
        if (loadCache()[k] !== undefined) return splitPair(loadCache()[k], q, a);

        return fromMyMemory(joined, lang).then(function (out) {
          /* نقبل الترجمة فقط إن بقي الفاصل — وإلا لا نستطيع فصل الحقلين */
          var ok = out && out.indexOf("—") !== -1;
          loadCache()[k] = ok ? out : "";
          saveCache();
          return splitPair(ok ? out : "", q, a);
        });
      });
    },

    /* تحميل مسبق لكل أسئلة الجولة أثناء وجود اللاعبين على اللوحة */
    prefetchRound: function (round, lang) {
      if (!round || !lang || lang === "ar" || !enabled()) return;
      Object.keys(round).forEach(function (k) {
        if (round[k]) Translate.item(round[k], lang);
      });
    },

    clearCache: function () {
      cache = {};
      try { localStorage.removeItem(CACHE_KEY); } catch (e) {}
    },

    cacheSize: function () { return Object.keys(loadCache()).length; }
  };

  global.Translate = Translate;

})(typeof window !== "undefined" ? window : this);
