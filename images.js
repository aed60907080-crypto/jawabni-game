/* ============================================================
   جاوبني — محرّك صور الأسئلة
   ------------------------------------------------------------
   يضمن أن لكل سؤال صورة تظهر معه، حتى لو لم تُكتب له صورة يدوياً.

   ترتيب المصادر (يتوقف عند أول نتيجة ناجحة):
     1) الحقل img المكتوب في السؤال (صورة محلية أو رابط)
     2) الذاكرة المؤقتة في المتصفح (localStorage) من بحث سابق
     3) بحث الصور من جوجل — يعمل إذا أدخلت مفتاح Google
        Custom Search في صفحة الكتيّب (guide.html)
     4) ويكيبيديا العربية  (صورة الصفحة الرئيسية للمصطلح)
     5) ويكيبيديا الإنجليزية
     6) ويكيميديا كومنز (صور حرّة)
     7) Openverse (مكتبة صور مفتوحة الرخصة)
     8) صورة الفئة المحلية من مجلد image/ (تعمل بلا إنترنت)
     9) بطاقة صورة مولّدة داخل المتصفح (SVG) — إن لم يكن للفئة صورة

   كل الصور تمرّ على مرشّح يستبعد ما يحمل كتابة (شعارات، خرائط معنونة،
   مخططات، أغلفة، لقطات شاشة، ملفات SVG) حتى لا تكشف الصورة الإجابة.

   عبارة البحث تُؤخذ من:  item.iq  ثم  item.a  ثم كلمات السؤال.

   الاستخدام:
     Images.resolve(item, category).then(function (url) { ... });
     Images.mountInto(element, item, category);   // يرسم الصورة مباشرة

   إعداد جوجل (اختياري):
     localStorage.googleCseKey = "مفتاح API"
     localStorage.googleCseCx  = "معرّف محرّك البحث"
   ============================================================ */

(function (global) {
  "use strict";

  var CACHE_KEY   = "questionImageCacheV3";   /* v3: بعد مرشّح النصوص والأبعاد */
  var CACHE_LIMIT = 900;          /* أقصى عدد صور محفوظة */
  var TIMEOUT_MS  = 7000;

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
        /* نحذف أقدم النصف عند الامتلاء */
        keys.slice(0, keys.length - CACHE_LIMIT).forEach(function (k) { delete c[k]; });
      }
      localStorage.setItem(CACHE_KEY, JSON.stringify(c));
    } catch (e) { /* الذاكرة ممتلئة — نتجاهل */ }
  }

  function cacheGet(k) { var v = loadCache()[k]; return v === undefined ? null : v; }
  function cacheSet(k, v) { loadCache()[k] = v; saveCache(); }

  /* ---------- تنظيف عبارة البحث ---------- */
  var STRIP_PATTERNS = [
    /\s*\((?:[^)]*)\)\s*/g,                        /* ما بين قوسين */
    /(?:رضي الله عنه[ما]?|عليه السلام|عليهم السلام|عليهما السلام|صلى الله عليه وسلم)/g,
    /\s*[«»"”“]\s*/g
  ];

  var STOP_WORDS = ["ما", "هو", "هي", "من", "اسم", "أي", "كم", "في", "على", "التي", "الذي",
                    "عدد", "أين", "متى", "هذا", "هذه", "يُسمى", "يسمى", "تُسمى", "الذين", "ماذا"];

  function cleanTerm(text) {
    var t = String(text || "");
    STRIP_PATTERNS.forEach(function (re) { t = t.replace(re, " "); });
    t = t.replace(/\s+/g, " ").trim();

    /* إجابة طويلة جداً → نأخذ أول ٤ كلمات فقط */
    var words = t.split(" ");
    if (words.length > 4) t = words.slice(0, 4).join(" ");
    return t;
  }

  /* إجابة رقمية بحتة أو قصيرة جداً لا تصلح للبحث */
  function usableTerm(t) {
    if (!t) return false;
    if (t.length < 3) return false;
    if (/^[\d٠-٩\s.,:%+-]+$/.test(t)) return false;
    return true;
  }

  /* اشتقاق عبارة بحث من نصّ السؤال حين تفشل الإجابة */
  function termFromQuestion(q) {
    var words = String(q || "")
      .replace(/[؟?.,!:«»"”“()]/g, " ")
      .split(/\s+/)
      .filter(function (w) { return w.length > 2 && STOP_WORDS.indexOf(w) === -1; });
    return words.slice(0, 4).join(" ");
  }

  /* عبارة البحث النهائية لسؤال ما */
  function searchTerm(item, category) {
    if (!item) return category || "";
    if (item.iq) return item.iq;

    var fromAnswer = cleanTerm(item.a);
    if (usableTerm(fromAnswer)) return fromAnswer;

    var fromQuestion = termFromQuestion(item.q);
    if (usableTerm(fromQuestion)) return fromQuestion;

    return category || "";
  }

  /* ---------- جلب بمهلة زمنية ---------- */
  function fetchJSON(url) {
    if (!global.fetch) return Promise.reject(new Error("no fetch"));
    var ctrl = global.AbortController ? new AbortController() : null;
    var timer = setTimeout(function () { ctrl && ctrl.abort(); }, TIMEOUT_MS);
    return fetch(url, ctrl ? { signal: ctrl.signal } : undefined)
      .then(function (r) {
        clearTimeout(timer);
        if (!r.ok) throw new Error("HTTP " + r.status);
        return r.json();
      })
      .catch(function (e) { clearTimeout(timer); throw e; });
  }

  /* ---------- المصادر ---------- */

  /* 1) بحث صور جوجل (يتطلّب مفتاحاً من المستخدم) */
  function fromGoogle(term) {
    var key, cx;
    try {
      key = localStorage.getItem("googleCseKey");
      cx  = localStorage.getItem("googleCseCx");
    } catch (e) { return Promise.resolve(null); }
    if (!key || !cx) return Promise.resolve(null);

    var url = "https://www.googleapis.com/customsearch/v1" +
              "?key="  + encodeURIComponent(key) +
              "&cx="   + encodeURIComponent(cx) +
              "&searchType=image&num=1&safe=active" +
              "&q="    + encodeURIComponent(term);

    return fetchJSON(url).then(function (d) {
      var items = (d && d.items) || [];
      return firstClean(items.map(function (i) { return i.link; }));
    }).catch(function () { return null; });
  }

  /* ---------- فحص الصلة ----------
     بحث ويكيبيديا يعيد نتيجة «قريبة» حتى لو لم توجد المقالة أصلاً،
     فنرفض الصفحة التي لا يشترك عنوانها في أي كلمة مع عبارة البحث. */
  function tokens(s) {
    return String(s || "")
      .toLowerCase()
      .replace(/[ـً-ْ]/g, "")            /* التشكيل والتطويل */
      .replace(/[^\p{L}\p{N}]+/gu, " ")
      .split(" ")
      .filter(function (w) { return w.length > 2; });
  }

  function relevant(title, term) {
    var a = tokens(title), b = tokens(term);
    if (!a.length || !b.length) return true;            /* لا نستطيع الحكم — نقبل */
    for (var i = 0; i < b.length; i++) {
      for (var j = 0; j < a.length; j++) {
        /* تطابق كامل أو أن إحداهما بداية الأخرى (للسوابق واللواحق العربية) */
        if (a[j] === b[i] || a[j].indexOf(b[i]) === 0 || b[i].indexOf(a[j]) === 0) return true;
      }
    }
    return false;
  }

  /* 2) ويكيبيديا — صورة الصفحة الرئيسية */
  function fromWikipedia(term, lang) {
    var base = "https://" + lang + ".wikipedia.org/w/api.php";
    var url = base +
      "?action=query&format=json&origin=*&redirects=1" +
      "&prop=pageimages&piprop=thumbnail&pithumbsize=700" +
      "&generator=search&gsrlimit=5&gsrsearch=" + encodeURIComponent(term);

    return fetchJSON(url).then(function (d) {
      var pages = d && d.query && d.query.pages;
      if (!pages) return null;
      /* مرتّبة حسب ترتيب البحث، ونستبعد غير الوثيق الصلة وما يحمل كتابة */
      var list = Object.keys(pages).map(function (k) { return pages[k]; });
      list.sort(function (a, b) { return (a.index || 99) - (b.index || 99); });
      return firstClean(list
        .filter(function (p) { return relevant(p.title, term); })
        .map(function (p) {
          var t = p.thumbnail;
          return t && { url: t.source, w: t.width, h: t.height };
        }));
    }).catch(function () { return null; });
  }

  /* 3) ويكيميديا كومنز — بحث في ملفات الصور */
  function fromCommons(term) {
    var url = "https://commons.wikimedia.org/w/api.php" +
      "?action=query&format=json&origin=*" +
      "&prop=imageinfo&iiprop=url&iiurlwidth=700" +
      "&generator=search&gsrnamespace=6&gsrlimit=6&gsrsearch=" +
      encodeURIComponent("filetype:bitmap " + term);

    return fetchJSON(url).then(function (d) {
      var pages = d && d.query && d.query.pages;
      if (!pages) return null;
      var list = Object.keys(pages).map(function (k) { return pages[k]; });
      list.sort(function (a, b) { return (a.index || 99) - (b.index || 99); });
      return firstClean(list.map(function (p) {
        var ii = p.imageinfo && p.imageinfo[0];
        return ii && { url: ii.thumburl || ii.url, w: ii.thumbwidth, h: ii.thumbheight };
      }));
    }).catch(function () { return null; });
  }

  /* 4) Openverse — صور مفتوحة الرخصة */
  function fromOpenverse(term) {
    var url = "https://api.openverse.org/v1/images/?page_size=5&q=" + encodeURIComponent(term);
    return fetchJSON(url).then(function (d) {
      var list = (d && d.results) || [];
      return firstClean(list.map(function (i) {
        return { url: i.thumbnail || i.url, w: i.width, h: i.height };
      }));
    }).catch(function () { return null; });
  }

  /* 5) الاحتياط — صورة الفئة المحلية من مجلد image/، وإن غابت
     فبطاقة مولّدة داخل المتصفح.
     مهم: كلاهما بلا أي كتابة حتى لا تكشف الإجابة أو تُربك اللاعب. */
  function localCategoryImage(category) {
    var lib = global.CategoryLib;
    if (!lib || !category) return null;
    var c = lib.find(category);
    return (c && c.img) ? c.img : null;
  }

  function generatedCard(term, category) {
    /* صورة الفئة من مجلد image/ أولى من أي بطاقة مولّدة */
    var local = localCategoryImage(category);
    if (local) return local;

    var emoji = "🎲", tint = "#1f7d68";
    var lib = global.CategoryLib;
    if (lib && category) {
      var c = lib.find(category);
      if (c) { emoji = c.emoji || emoji; tint = c.tint || tint; }
    }
    var svg =
      '<svg xmlns="http://www.w3.org/2000/svg" width="640" height="400" viewBox="0 0 640 400">' +
        '<defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">' +
          '<stop offset="0%" stop-color="' + tint + '"/>' +
          '<stop offset="100%" stop-color="#04120f"/>' +
        '</linearGradient>' +
        '<radialGradient id="gl" cx="50%" cy="50%" r="50%">' +
          '<stop offset="0%" stop-color="#ffffff" stop-opacity=".18"/>' +
          '<stop offset="100%" stop-color="#ffffff" stop-opacity="0"/>' +
        '</radialGradient></defs>' +
        '<rect width="640" height="400" rx="24" fill="url(#bg)"/>' +
        '<rect width="640" height="400" rx="24" fill="url(#gl)"/>' +
        '<circle cx="320" cy="200" r="118" fill="#04120f" fill-opacity=".3"/>' +
        '<circle cx="320" cy="200" r="118" fill="none" stroke="#e7b740" stroke-opacity=".5" stroke-width="3"/>' +
        '<text x="320" y="200" font-size="128" text-anchor="middle" dominant-baseline="central">' + xml(emoji) + '</text>' +
      '</svg>';
    return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
  }

  /* ---------- استبعاد الصور التي تحمل كتابة ----------
     الرسوم البيانية والخرائط المعنونة والشعارات والأغلفة تحمل نصاً
     يكشف الإجابة أو يشوّش السؤال، فنتجاهلها ونجرّب المصدر التالي. */
  var TEXTY = new RegExp([
    "\\.svg($|\\?)",            /* الرسوم المتجهة غالباً مخططات معنونة */
    "logo", "wordmark", "banner", "poster", "cover", "titlecard",
    "map", "chart", "graph", "diagram", "plot", "timeline", "infographic",
    "sign", "signage", "plaque", "inscription", "manuscript", "document",
    "stamp", "banknote", "certificate", "newspaper", "screenshot",
    "titre", "caption", "label", "table", "scheme", "schema",
    "coat_of_arms", "emblem", "flag_of", "seal_of",
    /* صور الحروف والخطوط — تظهر كثيراً عند البحث عن أسماء أجنبية */
    "kanji", "hanzi", "hiragana", "katakana", "calligraph", "typograph",
    "font", "typeface", "lettering", "alphabet", "writing", "handwrit",
    "quote", "\\btext\\b", "wordart",
    /* صفحات المصاحف والكتب والوثائق — تكشف الإجابة مكتوبةً */
    "sura", "surah", "surat", "quran", "koran", "bible", "torah",
    "folio", "\\bpage\\b", "page\\d", "\\.pdf", "treaty", "charter",
    "_name\\.svg", "pagina"
  ].join("|"), "i");

  function looksTexty(url) {
    if (!url) return true;
    /* اسم الملف فقط — لا نفحص المسار كله حتى لا نستبعد صوراً بريئة */
    var name = String(url).split("?")[0].split("/").pop();
    return TEXTY.test(name);
  }

  /* الشعارات والأشرطة النصية عريضة جداً أو طويلة جداً،
     أما الصور الفوتوغرافية فنسبتها قريبة من 4:3 أو 16:9 */
  var MAX_RATIO = 2.1;

  function badShape(w, h) {
    if (!w || !h) return false;                 /* لا نعرف الأبعاد — نقبل */
    var r = w / h;
    return r > MAX_RATIO || r < 1 / MAX_RATIO;
  }

  /* يختار أول صورة غير نصّية من قائمة مرشّحين
     كل عنصر: رابط، أو { url, w, h } */
  function firstClean(items) {
    for (var i = 0; i < items.length; i++) {
      var it = items[i];
      if (!it) continue;
      var url = typeof it === "string" ? it : it.url;
      if (!url || looksTexty(url)) continue;
      if (typeof it === "object" && badShape(it.w, it.h)) continue;
      return url;
    }
    return null;
  }

  function xml(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  /* ---------- المحرّك ---------- */

  /* هل البحث عبر الإنترنت مسموح؟ (يمكن للاعب إطفاؤه) */
  function onlineAllowed() {
    try { return localStorage.getItem("autoImages") !== "0"; }
    catch (e) { return true; }
  }

  function chain(term) {
    /* ترتيب المصادر يتبع لغة عبارة البحث:
       عبارة لاتينية لا معنى للبحث عنها في ويكيبيديا العربية —
       البحث هناك يعيد نتيجة «قريبة» لا علاقة لها بالسؤال. */
    var isArabic = /[؀-ۿ]/.test(term);

    var wikis = isArabic
      ? [function () { return fromWikipedia(term, "ar"); },
         function () { return fromWikipedia(term, "en"); }]
      : [function () { return fromWikipedia(term, "en"); }];

    var providers = [function () { return fromGoogle(term); }]
      .concat(wikis)
      .concat([
        function () { return fromCommons(term); },
        function () { return fromOpenverse(term); }
      ]);

    return providers.reduce(function (p, next) {
      return p.then(function (found) { return found || next(); });
    }, Promise.resolve(null));
  }

  /* ---------- صورة الإجابة: مطابقة تامة لعنوان مقال، أو لا شيء ----------
     البحث الحر (generator=search) يعيد أحياناً صورة بعيدة عن الجواب
     (خطّ «الله» لسؤال «كينيا» مثلاً). هنا نطلب المقال الذي عنوانه هو
     الجواب نفسه في ويكيبيديا (مع التحويلات)، ونرفض صفحات التوضيح، ونأخذ
     صورة المقال — وإن لم تكن له صورة نجرّب المقال المقابل بالإنجليزية.
     إن لم نجد شيئاً فلا صورة: غياب الصورة أفضل من صورة خاطئة. */
  function answerTerm(a) {
    var t = String(a || "")
      .replace(/\([^)]*\)/g, " ")
      .replace(/(عليه|عليها|عليهما|عليهم) السلام|رضي الله (عنه|عنها|عنهما|عنهم)|صلى الله عليه وسلم/g, " ")
      .replace(/[«»"“”]/g, "")
      .replace(/\s+/g, " ").trim();
    /* الأعوام والأرقام والنسب لا صورة لها */
    var bare = t.replace(/^(عام|سنة|القرن)\s*/, "");
    if (!t || /^[\d٠-٩\s.,%×\-–]+$/.test(bare)) return "";
    if (t.length > 40) return "";          /* عبارة طويلة وليست اسماً */
    return t;
  }

  function exactPage(title, lang) {
    var url = "https://" + lang + ".wikipedia.org/w/api.php?action=query&format=json&origin=*" +
      "&redirects=1&prop=pageimages|pageprops|langlinks&piprop=thumbnail&pithumbsize=700" +
      "&ppprop=disambiguation&lllang=en&titles=" + encodeURIComponent(title);
    return fetchJSON(url).then(function (d) {
      var pages = (d && d.query && d.query.pages) || {};
      var p = pages[Object.keys(pages)[0]];
      if (!p || p.missing !== undefined || p.invalid !== undefined) return null;
      if (p.pageprops && p.pageprops.disambiguation !== undefined) return null;
      return {
        img: p.thumbnail ? p.thumbnail.source : null,
        en:  p.langlinks && p.langlinks[0] ? p.langlinks[0]["*"] : null
      };
    }).catch(function () { return null; });
  }

  var SIGNATURE = /signature|autograph|توقيع/i;

  function answerImage(term) {
    var arabic = /[؀-ۿ]/.test(term);
    return exactPage(term, arabic ? "ar" : "en").then(function (r) {
      if (!r) return null;
      if (r.img && !SIGNATURE.test(r.img)) return r.img;
      if (arabic && r.en) {
        return exactPage(r.en, "en").then(function (e) {
          return e && e.img && !SIGNATURE.test(e.img) ? e.img : null;
        });
      }
      return null;
    });
  }

  var Images = {

    /* صورة الإجابة الموثوقة: مقال ويكيبيديا الذي عنوانه الجواب تماماً، أو null */
    resolveAnswer: function (item) {
      var term = answerTerm(item && item.a);
      if (!term) return Promise.resolve(null);
      var key = "a:" + term;
      var hit = cacheGet(key);
      if (hit) return Promise.resolve(hit);
      if (hit === "") return Promise.resolve(null);      /* بحث سابق لم يجد */
      if (!onlineAllowed() || !global.fetch) return Promise.resolve(null);
      return answerImage(term).then(function (url) {
        cacheSet(key, url || "");
        return url || null;
      }).catch(function () { return null; });
    },

    /* عبارة البحث المستخدمة لسؤال ما — مفيدة للتشخيص */
    term: searchTerm,

    /* الصورة الاحتياطية: صورة الفئة المحلية ثم البطاقة المولّدة */
    placeholder: generatedCard,

    /* صورة الفئة من مجلد image/ إن وُجدت */
    categoryImage: localCategoryImage,

    /* هل للسؤال صورة مكتوبة يدوياً؟ */
    hasOwn: function (item) { return !!(item && item.img); },

    /* الحل النهائي: يعيد وعداً برابط صورة — لا يفشل أبداً */
    resolve: function (item, category) {
      if (item && item.img) return Promise.resolve(item.img);

      var term = searchTerm(item, category);
      var fallback = generatedCard(term, category);

      if (!term) return Promise.resolve(fallback);

      var key = "q:" + term;
      var hit = cacheGet(key);
      if (hit) return Promise.resolve(hit);
      if (hit === "") return Promise.resolve(fallback);   /* بحث سابق فشل */

      if (!onlineAllowed() || !global.fetch) return Promise.resolve(fallback);

      return chain(term).then(function (url) {
        cacheSet(key, url || "");
        return url || fallback;
      }).catch(function () {
        return fallback;
      });
    },

    /* يرسم الصورة داخل عنصر — يعرض البطاقة المولّدة فوراً ثم يستبدلها */
    mountInto: function (holder, item, category, opts) {
      opts = opts || {};
      if (!holder) return Promise.resolve(null);

      var term = searchTerm(item, category);
      var img = document.createElement("img");
      img.alt = "صورة السؤال";
      img.className = opts.className || "";
      img.src = (item && item.img) ? item.img : generatedCard(term, category);
      holder.appendChild(img);

      /* إن فشل تحميل الصورة اليدوية نرجع للبحث التلقائي */
      img.onerror = function () {
        img.onerror = null;
        img.src = generatedCard(term, category);
        if (item) { var copy = Object.assign({}, item); delete copy.img;
                    Images.resolve(copy, category).then(function (u) { if (u) img.src = u; }); }
      };

      if (item && item.img) return Promise.resolve(item.img);

      return Images.resolve(item, category).then(function (url) {
        if (url && url !== img.src) {
          var probe = new Image();
          probe.onload  = function () { img.src = url; img.classList.add("img-live"); };
          probe.onerror = function () { /* نُبقي البطاقة المولّدة */ };
          probe.src = url;
        }
        return url;
      });
    },

    /* بحث مباشر عن عبارة واحدة بلا طابور — للتجهيز بالجملة
       (يُستعمل في سكربت تثبيت روابط الصور داخل بنك الأسئلة) */
    lookup: function (term) {
      if (!term || !global.fetch) return Promise.resolve(null);
      return chain(term).catch(function () { return null; });
    },

    /* تفريغ الذاكرة المؤقتة */
    clearCache: function () {
      cache = {};
      try { localStorage.removeItem(CACHE_KEY); } catch (e) {}
    },

    cacheSize: function () { return Object.keys(loadCache()).length; },

    /* تشغيل / إطفاء البحث التلقائي */
    setAuto: function (on) {
      try { localStorage.setItem("autoImages", on ? "1" : "0"); } catch (e) {}
    },
    getAuto: onlineAllowed,

    /* حفظ مفاتيح جوجل */
    setGoogle: function (key, cx) {
      try {
        if (key) localStorage.setItem("googleCseKey", key.trim());
        else localStorage.removeItem("googleCseKey");
        if (cx) localStorage.setItem("googleCseCx", cx.trim());
        else localStorage.removeItem("googleCseCx");
      } catch (e) {}
    },
    getGoogle: function () {
      try {
        return {
          key: localStorage.getItem("googleCseKey") || "",
          cx:  localStorage.getItem("googleCseCx")  || ""
        };
      } catch (e) { return { key: "", cx: "" }; }
    },

    /* تحميل مسبق لصور جولة كاملة حتى تظهر فوراً عند فتح السؤال */
    prefetchRound: function (round) {
      if (!round || !onlineAllowed()) return;
      var entries = Object.keys(round);
      var i = 0;
      (function step() {
        if (i >= entries.length) return;
        var k = entries[i++];
        var cat = k.slice(0, k.lastIndexOf("_"));
        Images.resolve(round[k], cat).then(function () {
          setTimeout(step, 120);           /* تباعد بسيط حتى لا نُثقل المصادر */
        });
      })();
    }
  };

  global.Images = Images;

})(typeof window !== "undefined" ? window : this);
