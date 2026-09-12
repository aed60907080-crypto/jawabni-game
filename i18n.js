/* ============================================================
   جاوبني — محرّك تعدد اللغات (i18n)
   ------------------------------------------------------------
   يترجم كامل واجهة اللعبة إلى 38 لغة دون الحاجة لتعديل صفحات HTML:
   المحرّك يمشي على عُقد النص في الصفحة ويستبدل العبارات العربية
   المعروفة بترجمتها، ثم يراقب التغييرات الديناميكية ويترجمها أيضاً.

   الاستخدام:
     <script src="i18n.js"></script>
     <script src="i18n-langs.js"></script>
     ثم:  I18N.init();      (أو تُستدعى تلقائياً عند تحميل الصفحة)

   واجهة برمجية:
     I18N.set("en")         تغيير اللغة
     I18N.get()             اللغة الحالية
     I18N.t("الرصيد")       ترجمة عبارة واحدة
     I18N.langs             قائمة اللغات المدعومة
     I18N.mountPicker()     زر اختيار اللغة العائم

   الحفظ في localStorage تحت المفتاح: appLang
   ============================================================ */

(function (global) {
  "use strict";

  /* ---------- سجل اللغات المدعومة ---------- */
  /* code = رمز اللغة | native = الاسم بلغتها | en = بالإنجليزية | dir = اتجاه الكتابة | flag = علم */
  var LANGS = [
    { code: "ar", native: "العربية",           en: "Arabic",     dir: "rtl", flag: "🇸🇦" },
    { code: "en", native: "English",           en: "English",    dir: "ltr", flag: "🇬🇧" },
    { code: "fr", native: "Français",          en: "French",     dir: "ltr", flag: "🇫🇷" },
    { code: "es", native: "Español",           en: "Spanish",    dir: "ltr", flag: "🇪🇸" },
    { code: "pt", native: "Português",         en: "Portuguese", dir: "ltr", flag: "🇵🇹" },
    { code: "de", native: "Deutsch",           en: "German",     dir: "ltr", flag: "🇩🇪" },
    { code: "it", native: "Italiano",          en: "Italian",    dir: "ltr", flag: "🇮🇹" },
    { code: "nl", native: "Nederlands",        en: "Dutch",      dir: "ltr", flag: "🇳🇱" },
    { code: "sv", native: "Svenska",           en: "Swedish",    dir: "ltr", flag: "🇸🇪" },
    { code: "pl", native: "Polski",            en: "Polish",     dir: "ltr", flag: "🇵🇱" },
    { code: "cs", native: "Čeština",           en: "Czech",      dir: "ltr", flag: "🇨🇿" },
    { code: "ro", native: "Română",            en: "Romanian",   dir: "ltr", flag: "🇷🇴" },
    { code: "hu", native: "Magyar",            en: "Hungarian",  dir: "ltr", flag: "🇭🇺" },
    { code: "el", native: "Ελληνικά",          en: "Greek",      dir: "ltr", flag: "🇬🇷" },
    { code: "ru", native: "Русский",           en: "Russian",    dir: "ltr", flag: "🇷🇺" },
    { code: "uk", native: "Українська",        en: "Ukrainian",  dir: "ltr", flag: "🇺🇦" },
    { code: "tr", native: "Türkçe",            en: "Turkish",    dir: "ltr", flag: "🇹🇷" },
    { code: "az", native: "Azərbaycanca",      en: "Azerbaijani",dir: "ltr", flag: "🇦🇿" },
    { code: "fa", native: "فارسی",             en: "Persian",    dir: "rtl", flag: "🇮🇷" },
    { code: "ku", native: "Kurdî",             en: "Kurdish",    dir: "ltr", flag: "🟨" },
    { code: "ur", native: "اردو",              en: "Urdu",       dir: "rtl", flag: "🇵🇰" },
    { code: "ps", native: "پښتو",              en: "Pashto",     dir: "rtl", flag: "🇦🇫" },
    { code: "he", native: "עברית",             en: "Hebrew",     dir: "rtl", flag: "🇮🇱" },
    { code: "hi", native: "हिन्दी",              en: "Hindi",      dir: "ltr", flag: "🇮🇳" },
    { code: "bn", native: "বাংলা",              en: "Bengali",    dir: "ltr", flag: "🇧🇩" },
    { code: "ta", native: "தமிழ்",              en: "Tamil",      dir: "ltr", flag: "🇱🇰" },
    { code: "id", native: "Bahasa Indonesia",  en: "Indonesian", dir: "ltr", flag: "🇮🇩" },
    { code: "ms", native: "Bahasa Melayu",     en: "Malay",      dir: "ltr", flag: "🇲🇾" },
    { code: "zh", native: "中文",               en: "Chinese",    dir: "ltr", flag: "🇨🇳" },
    { code: "ja", native: "日本語",             en: "Japanese",   dir: "ltr", flag: "🇯🇵" },
    { code: "ko", native: "한국어",             en: "Korean",     dir: "ltr", flag: "🇰🇷" },
    { code: "th", native: "ไทย",                en: "Thai",       dir: "ltr", flag: "🇹🇭" },
    { code: "vi", native: "Tiếng Việt",        en: "Vietnamese", dir: "ltr", flag: "🇻🇳" },
    { code: "tl", native: "Filipino",          en: "Filipino",   dir: "ltr", flag: "🇵🇭" },
    { code: "sw", native: "Kiswahili",         en: "Swahili",    dir: "ltr", flag: "🇰🇪" },
    { code: "ha", native: "Hausa",             en: "Hausa",      dir: "ltr", flag: "🇳🇬" },
    { code: "so", native: "Soomaali",          en: "Somali",     dir: "ltr", flag: "🇸🇴" },
    { code: "am", native: "አማርኛ",              en: "Amharic",    dir: "ltr", flag: "🇪🇹" }
  ];

  /* الخطوط المناسبة لكل نظام كتابة */
  var FONT_STACKS = {
    ar: "'Tajawal','Cairo',sans-serif",
    fa: "'Tajawal','Cairo',sans-serif",
    ur: "'Noto Nastaliq Urdu','Tajawal',sans-serif",
    ps: "'Tajawal','Cairo',sans-serif",
    he: "'Noto Sans Hebrew',system-ui,sans-serif",
    zh: "'Noto Sans SC',system-ui,sans-serif",
    ja: "'Noto Sans JP',system-ui,sans-serif",
    ko: "'Noto Sans KR',system-ui,sans-serif",
    th: "'Noto Sans Thai',system-ui,sans-serif",
    hi: "'Noto Sans Devanagari',system-ui,sans-serif",
    bn: "'Noto Sans Bengali',system-ui,sans-serif",
    ta: "'Noto Sans Tamil',system-ui,sans-serif",
    am: "'Noto Sans Ethiopic',system-ui,sans-serif",
    _:  "'Tajawal',system-ui,'Segoe UI',sans-serif"
  };

  /* ---------- قوالب تحمل أرقاماً متغيّرة ---------- */
  /* تُترجم عبر مفتاح فيه {n} و {m} بدل الأرقام */
  var PATTERNS = [
    { re: /^(\d[\d٠-٩,]*)\s*من\s*(\d[\d٠-٩,]*)$/, key: "{n} من {m}" },
    { re: /^(\d[\d٠-٩,]*)\s*نقطة$/,               key: "{n} نقطة" },
    { re: /^(\d[\d٠-٩,]*)\s*نقاط$/,               key: "{n} نقطة" },
    { re: /^(\d[\d٠-٩,]*)\s*أسئلة$/,              key: "{n} أسئلة" },
    { re: /^(\d[\d٠-٩,]*)\s*سؤالاً?$/,            key: "{n} أسئلة" },
    { re: /^(\d[\d٠-٩,]*)\s*ثانية$/,              key: "{n} ثانية" },
    { re: /^(\d[\d٠-٩,]*)\s*دينار$/,              key: "{n} دينار" },
    { re: /^(\d[\d٠-٩,]*)\s*لعبة$/,               key: "{n} لعبة" },
    { re: /^(\d[\d٠-٩,]*)\s*ألعاب$/,              key: "{n} لعبة" }
  ];

  /* ---------- الحالة ---------- */
  var DICT    = {};                 /* تملؤه i18n-langs.js */
  var current = "ar";
  var booted  = false;
  var observer = null;

  /* العناصر التي لا تُترجم */
  var SKIP_TAGS = { SCRIPT: 1, STYLE: 1, CODE: 1, PRE: 1, TEXTAREA: 1, NOSCRIPT: 1, CANVAS: 1 };

  /* الخصائص النصية المترجمة */
  var ATTRS = ["placeholder", "title", "alt", "aria-label", "data-label"];

  /* ---------- أدوات ---------- */
  function norm(s) {
    return String(s == null ? "" : s).replace(/ /g, " ").replace(/\s+/g, " ").trim();
  }

  function langMeta(code) {
    for (var i = 0; i < LANGS.length; i++) if (LANGS[i].code === code) return LANGS[i];
    return LANGS[0];
  }

  function table(code) {
    return DICT[code] || null;
  }

  /* ترجمة عبارة واحدة — تُرجع null إن لم توجد ترجمة */
  function lookup(text, code) {
    if (code === "ar") return null;
    var t = table(code);
    if (!t) return null;
    var key = norm(text);
    if (!key) return null;

    if (Object.prototype.hasOwnProperty.call(t, key)) return t[key];

    /* محاولة القوالب الرقمية */
    for (var i = 0; i < PATTERNS.length; i++) {
      var m = key.match(PATTERNS[i].re);
      if (m && Object.prototype.hasOwnProperty.call(t, PATTERNS[i].key)) {
        return t[PATTERNS[i].key]
          .replace("{n}", m[1])
          .replace("{m}", m[2] || "");
      }
    }

    /* عبارة تنتهي بعلامة ترقيم — نجرّب بدونها */
    var stripped = key.replace(/[:：·.!؟?…]+$/, "").trim();
    if (stripped !== key && Object.prototype.hasOwnProperty.call(t, stripped)) {
      return t[stripped] + key.slice(stripped.length);
    }

    /* والعكس: المفتاح في القاموس ينتهي بثلاث نقاط والنص بدونها */
    if (Object.prototype.hasOwnProperty.call(t, key + "…")) {
      return t[key + "…"].replace(/…$/, "");
    }
    return null;
  }

  /* ---------- الأرقام ---------- */
  /* اللغات التي تُكتب بالأرقام الهندية تبقى كما هي، وما عداها
     تُحوَّل أرقامه إلى الأرقام اللاتينية (٥٤ → 54). */
  var ARABIC_DIGIT_LANGS = { ar: 1, fa: 1, ur: 1, ps: 1 };

  function westernizeDigits(s) {
    return s.replace(/[٠-٩]/g, function (d) { return "٠١٢٣٤٥٦٧٨٩".indexOf(d); })
            .replace(/[۰-۹]/g, function (d) { return "۰۱۲۳۴۵۶۷۸۹".indexOf(d); });
  }

  /* ---------- ترجمة عُقد النص ---------- */
  function translateTextNode(node, code) {
    var original = node.__i18nSrc;
    if (original === undefined) {
      original = node.nodeValue;
      /* نحفظ الأصل فقط إن كان يحتوي حروفاً عربية أو أرقاماً هندية — وإلا نتجاهله */
      if (!/[؀-ۿ]/.test(original)) { node.__i18nSrc = null; return; }
      node.__i18nSrc = original;
    }
    if (original === null) return;

    var out = lookup(original, code);
    if (out === null) {
      /* لا ترجمة — لكن نُعرّب الأرقام إن كانت اللغة لاتينية الأرقام */
      var fixed = ARABIC_DIGIT_LANGS[code] ? original : westernizeDigits(original);
      if (node.nodeValue !== fixed) { node.nodeValue = fixed; node.__i18nOut = fixed; }
      return;
    }
    /* الحفاظ على المسافات المحيطة الأصلية */
    var lead  = (original.match(/^\s*/) || [""])[0];
    var trail = (original.match(/\s*$/) || [""])[0];
    var next  = lead + out + trail;
    /* نحفظ ما كتبناه حتى يميّزه المراقب فلا يعتبره تعديلاً من الصفحة */
    if (node.nodeValue !== next) { node.nodeValue = next; node.__i18nOut = next; }
  }

  function translateAttrs(el, code) {
    for (var i = 0; i < ATTRS.length; i++) {
      var a = ATTRS[i];
      if (!el.hasAttribute || !el.hasAttribute(a)) continue;
      var store = "data-i18n-src-" + a.replace(/[^a-z]/g, "");
      var original = el.getAttribute(store);
      if (original === null) {
        original = el.getAttribute(a);
        if (!/[؀-ۿ]/.test(original || "")) continue;
        el.setAttribute(store, original);
      }
      var out = lookup(original, code);
      el.setAttribute(a, out === null ? original : out);
    }
    /* قيمة أزرار الإدخال */
    if (el.tagName === "INPUT" && /^(button|submit|reset)$/i.test(el.type || "")) {
      var src = el.getAttribute("data-i18n-src-value");
      if (src === null && /[؀-ۿ]/.test(el.value || "")) {
        src = el.value; el.setAttribute("data-i18n-src-value", src);
      }
      if (src !== null) {
        var v = lookup(src, code);
        el.value = v === null ? src : v;
      }
    }
  }

  function walk(root, code) {
    if (!root) return;

    /* الخصائص */
    if (root.nodeType === 1) {
      var els = root.querySelectorAll ? root.querySelectorAll("*") : [];
      translateAttrs(root, code);
      for (var i = 0; i < els.length; i++) {
        if (!els[i].closest || !els[i].closest("[data-no-i18n]")) translateAttrs(els[i], code);
      }
    }

    /* عُقد النص */
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        var p = n.parentNode;
        if (!p || SKIP_TAGS[p.nodeName]) return NodeFilter.FILTER_REJECT;
        if (p.closest && p.closest("[data-no-i18n]")) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    var n, batch = [];
    while ((n = walker.nextNode())) batch.push(n);
    for (var j = 0; j < batch.length; j++) translateTextNode(batch[j], code);

    if (root.nodeType === 3) translateTextNode(root, code);
  }

  /* ---------- تطبيق اتجاه الكتابة والخط ---------- */
  function applyDirection(code) {
    var meta = langMeta(code);
    var html = document.documentElement;
    html.setAttribute("lang", code);
    html.setAttribute("dir", meta.dir);
    html.setAttribute("data-lang", code);
    document.body && document.body.setAttribute("dir", meta.dir);

    var font = FONT_STACKS[code] || FONT_STACKS._;
    var st = document.getElementById("i18nFontFix");
    if (!st) {
      st = document.createElement("style");
      st.id = "i18nFontFix";
      document.head.appendChild(st);
    }
    st.textContent =
      "body,button,input,select,textarea,h1,h2,h3,h4,h5,h6{font-family:" + font + " !important;}" +
      (meta.dir === "ltr" ? "body{letter-spacing:0;}" : "");

    /* خطوط جوجل للكتابات غير اللاتينية */
    ensureFont(code);
  }

  var FONT_URLS = {
    ur: "Noto+Nastaliq+Urdu:wght@400;700",
    he: "Noto+Sans+Hebrew:wght@400;700",
    zh: "Noto+Sans+SC:wght@400;700",
    ja: "Noto+Sans+JP:wght@400;700",
    ko: "Noto+Sans+KR:wght@400;700",
    th: "Noto+Sans+Thai:wght@400;700",
    hi: "Noto+Sans+Devanagari:wght@400;700",
    bn: "Noto+Sans+Bengali:wght@400;700",
    ta: "Noto+Sans+Tamil:wght@400;700",
    am: "Noto+Sans+Ethiopic:wght@400;700"
  };

  function ensureFont(code) {
    var spec = FONT_URLS[code];
    if (!spec) return;
    var id = "i18nFont-" + code;
    if (document.getElementById(id)) return;
    var l = document.createElement("link");
    l.id = id;
    l.rel = "stylesheet";
    l.href = "https://fonts.googleapis.com/css2?family=" + spec + "&display=swap";
    document.head.appendChild(l);
  }

  /* ---------- مراقبة التغييرات الديناميكية ---------- */
  function startObserver() {
    if (observer || !global.MutationObserver) return;
    observer = new MutationObserver(function (muts) {
      if (current === "ar") return;
      for (var i = 0; i < muts.length; i++) {
        var m = muts[i];
        if (m.type === "childList") {
          for (var j = 0; j < m.addedNodes.length; j++) {
            var nd = m.addedNodes[j];
            if (nd.nodeType === 1 || nd.nodeType === 3) walk(nd, current);
          }
        } else if (m.type === "characterData") {
          /* تجاهل التعديلات التي كتبها المحرّك نفسه — وإلا اعتبر
             النصَّ المترجَم أصلاً جديداً وفقدنا الأصل العربي للأبد */
          if (m.target.nodeValue === m.target.__i18nOut) continue;
          m.target.__i18nSrc = undefined;
          translateTextNode(m.target, current);
        }
      }
    });
    observer.observe(document.documentElement, {
      childList: true, subtree: true, characterData: true
    });
  }

  /* ---------- الواجهة العامة ---------- */
  var I18N = {
    langs: LANGS,

    /* تسجيل قاموس لغة (يستدعيه i18n-langs.js) */
    register: function (code, tableObj) {
      DICT[code] = Object.assign(DICT[code] || {}, tableObj);
      return I18N;
    },

    /* دمج قاموس إضافي (مثلاً أسماء الفئات الجديدة) */
    extend: function (code, tableObj) { return I18N.register(code, tableObj); },

    /* تحميل قواميس مضغوطة: قائمة مفاتيح واحدة + مصفوفة قيم لكل لغة
       يوفّر تكرار المفاتيح العربية 38 مرة ويصغّر الملف كثيراً */
    loadPacked: function (keys, packed) {
      Object.keys(packed).forEach(function (code) {
        var vals = packed[code], t = DICT[code] || (DICT[code] = {});
        for (var i = 0; i < keys.length; i++) {
          var v = vals[i];
          if (v !== undefined && v !== null && v !== "") t[keys[i]] = v;
        }
      });
      /* إعادة الترجمة إن كانت الصفحة معروضة بلغة غير عربية */
      if (booted && current !== "ar") { walk(document.body, current); }
      return I18N;
    },

    has: function (code) { return !!DICT[code]; },

    get: function () { return current; },

    meta: function (code) { return langMeta(code || current); },

    t: function (text, code) {
      var out = lookup(text, code || current);
      return out === null ? text : out;
    },

    dir: function () { return langMeta(current).dir; },

    /* ترجمة جزء معيّن من الصفحة (بعد رسم محتوى ديناميكي مثلاً) */
    apply: function (root) {
      if (current === "ar") return;
      walk(root || document.body, current);
    },

    set: function (code) {
      if (!langMeta(code)) code = "ar";
      current = code;
      try { localStorage.setItem("appLang", code); } catch (e) {}
      applyDirection(code);
      walk(document.body, code);
      /* عنوان الصفحة — يُترجم جزءاً جزءاً حول الفواصل */
      if (document.title) {
        if (!document.documentElement.__titleSrc) document.documentElement.__titleSrc = document.title;
        document.title = document.documentElement.__titleSrc
          .split("—")
          .map(function (part) {
            return part.split("،")
                       .map(function (p) { return I18N.t(p.trim(), code); })
                       .join(code === "ar" ? "، " : ", ");
          })
          .join(" — ");
      }
      document.dispatchEvent(new CustomEvent("i18n:change", { detail: { lang: code } }));
      return I18N;
    },

    detect: function () {
      var saved = null;
      try { saved = localStorage.getItem("appLang"); } catch (e) {}
      if (saved && langMeta(saved).code === saved) return saved;
      var nav = (navigator.language || "ar").toLowerCase().split("-")[0];
      for (var i = 0; i < LANGS.length; i++) if (LANGS[i].code === nav) return nav;
      return "ar";
    },

    init: function () {
      if (booted) return I18N;
      booted = true;
      startObserver();
      I18N.set(I18N.detect());
      I18N.mountPicker();
      return I18N;
    },

    /* ---------- زر اختيار اللغة ---------- */
    mountPicker: function () {
      if (document.getElementById("i18nDock")) return;
      if (!document.body) return;

      var css = document.createElement("style");
      css.id = "i18nPickerCss";
      css.textContent = [
        /* يسار الشاشة فعلياً في كل اللغات — أزرار الصوت على اليمين،
           ولو استعملنا inset-inline-start لوقع الزرّان فوق بعضهما في العربية */
        '#i18nDock{position:fixed;bottom:18px;left:18px;right:auto;z-index:900;}',
        '#i18nBtn{display:flex;align-items:center;gap:8px;height:44px;padding:0 14px;border-radius:26px;',
        'border:1px solid rgba(231,183,64,.35);background:linear-gradient(150deg,rgba(21,74,65,.9),rgba(4,18,15,.92));',
        'color:#f7dd9c;font-size:14px;font-weight:700;cursor:pointer;backdrop-filter:blur(10px);',
        'box-shadow:0 10px 26px rgba(0,0,0,.45);transition:transform .18s ease,border-color .18s ease;}',
        '#i18nBtn:hover{transform:translateY(-3px);border-color:rgba(231,183,64,.8);}',
        '#i18nBtn .fl{font-size:17px;line-height:1;}',
        '#i18nSheet{position:fixed;inset:0;z-index:2000;display:none;align-items:center;justify-content:center;',
        'background:rgba(2,11,9,.72);backdrop-filter:blur(6px);padding:20px;}',
        '#i18nSheet.open{display:flex;}',
        '#i18nPanel{width:min(720px,100%);max-height:78vh;display:flex;flex-direction:column;',
        'background:linear-gradient(165deg,#0f3a33,#061a16);border:1px solid rgba(231,183,64,.35);',
        'border-radius:22px;box-shadow:0 40px 90px rgba(0,0,0,.6);overflow:hidden;}',
        '#i18nPanel header{display:flex;align-items:center;gap:12px;padding:16px 20px;',
        'border-bottom:1px solid rgba(231,183,64,.2);}',
        '#i18nPanel header h3{margin:0;flex:1;color:#f7dd9c;font-size:18px;font-weight:800;}',
        '#i18nClose{width:34px;height:34px;border-radius:50%;border:1px solid rgba(231,183,64,.3);',
        'background:transparent;color:#f5f1e6;cursor:pointer;font-size:16px;line-height:1;}',
        '#i18nSearch{margin:14px 20px 4px;padding:11px 14px;border-radius:14px;border:1px solid rgba(231,183,64,.25);',
        'background:rgba(4,18,15,.6);color:#f5f1e6;font-size:15px;outline:none;font-family:inherit;}',
        '#i18nSearch:focus{border-color:rgba(231,183,64,.7);}',
        '#i18nGrid{display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:10px;',
        'padding:16px 20px 22px;overflow-y:auto;}',
        '.i18nItem{display:flex;align-items:center;gap:10px;padding:11px 13px;border-radius:14px;cursor:pointer;',
        'border:1px solid rgba(231,183,64,.18);background:rgba(21,74,65,.35);color:#f5f1e6;text-align:start;',
        'font-size:14px;transition:border-color .15s ease,background .15s ease,transform .15s ease;font-family:inherit;}',
        '.i18nItem:hover{border-color:rgba(231,183,64,.65);background:rgba(21,74,65,.6);transform:translateY(-2px);}',
        '.i18nItem.active{border-color:#e7b740;background:rgba(231,183,64,.16);}',
        '.i18nItem .fl{font-size:19px;}',
        '.i18nItem .nm{display:flex;flex-direction:column;line-height:1.25;}',
        '.i18nItem .nm b{font-weight:700;}',
        '.i18nItem .nm small{opacity:.6;font-size:11px;}',
        '@media (max-width:600px){#i18nDock{bottom:12px;inset-inline-start:12px;}',
        '#i18nBtn{height:40px;padding:0 12px;font-size:13px;}}'
      ].join("");
      document.head.appendChild(css);

      var dock = document.createElement("div");
      dock.id = "i18nDock";
      dock.setAttribute("data-no-i18n", "");
      var meta = langMeta(current);
      dock.innerHTML = '<button id="i18nBtn" type="button" aria-label="Language">' +
                       '<span class="fl">' + meta.flag + '</span><span class="lbl">' + meta.native + '</span></button>';
      document.body.appendChild(dock);

      var sheet = document.createElement("div");
      sheet.id = "i18nSheet";
      sheet.setAttribute("data-no-i18n", "");
      sheet.innerHTML =
        '<div id="i18nPanel" role="dialog" aria-modal="true">' +
          '<header><h3>🌐 Language · اللغة</h3><button id="i18nClose" type="button">✕</button></header>' +
          '<input id="i18nSearch" type="search" placeholder="Search language… / ابحث عن لغة…" />' +
          '<div id="i18nGrid"></div>' +
        '</div>';
      document.body.appendChild(sheet);

      var grid = sheet.querySelector("#i18nGrid");

      function renderGrid(filter) {
        var f = (filter || "").toLowerCase().trim();
        grid.innerHTML = "";
        LANGS.forEach(function (L) {
          if (f && (L.native + " " + L.en + " " + L.code).toLowerCase().indexOf(f) === -1) return;
          var b = document.createElement("button");
          b.type = "button";
          b.className = "i18nItem" + (L.code === current ? " active" : "");
          b.innerHTML = '<span class="fl">' + L.flag + '</span>' +
                        '<span class="nm"><b>' + L.native + '</b><small>' + L.en + '</small></span>';
          b.onclick = function () {
            I18N.set(L.code);
            var btn = document.querySelector("#i18nBtn");
            if (btn) btn.innerHTML = '<span class="fl">' + L.flag + '</span><span class="lbl">' + L.native + '</span>';
            close();
          };
          grid.appendChild(b);
        });
      }

      function open()  { sheet.classList.add("open"); renderGrid(sheet.querySelector("#i18nSearch").value); sheet.querySelector("#i18nSearch").focus(); }
      function close() { sheet.classList.remove("open"); }

      dock.querySelector("#i18nBtn").onclick = open;
      sheet.querySelector("#i18nClose").onclick = close;
      sheet.onclick = function (e) { if (e.target === sheet) close(); };
      sheet.querySelector("#i18nSearch").oninput = function () { renderGrid(this.value); };
      document.addEventListener("keydown", function (e) { if (e.key === "Escape") close(); });

      I18N.openPicker = open;
      renderGrid("");
    }
  };

  global.I18N = I18N;

  /* تشغيل تلقائي */
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () { I18N.init(); });
  } else {
    I18N.init();
  }

})(typeof window !== "undefined" ? window : this);
