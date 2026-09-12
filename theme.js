/* ============================================================
   جاوبني — خلفيات الواجهة
   ------------------------------------------------------------
   كل صفحات اللعبة تضع خلفيتها في العنصر ‎.bg-fx‎ (تدرّجات لونية
   وكرتان ضبابيتان). هذا الملف يستبدل تدرّجات ‎.bg-fx‎ بخلفية أخرى
   يختارها اللاعب من صفحة الإعدادات، ويُحفظ الاختيار في المتصفح.

   الاستعمال: ضع <script src="theme.js"></script> في أي صفحة —
   يُطبَّق فوراً قبل الرسم فلا يحدث وميض.

     Theme.list()      قائمة الخلفيات {id, name, colors}
     Theme.get()       معرّف الخلفية الحالية
     Theme.set(id)     تغييرها وحفظها وتطبيقها في الحال
     Theme.apply()     إعادة التطبيق (تُستدعى تلقائياً)

   التخزين: bgTheme
   ============================================================ */

(function (global) {
  "use strict";

  var KEY = "bgTheme";

  /* كل خلفية: ثلاث بقع ضوئية + تدرّج القاعدة + لونا الكرتين */
  var THEMES = [
    {
      id: "emerald", name: "زمردي (الافتراضي)", swatch: ["#1f7d68", "#0d332d"],
      base: "radial-gradient(1000px 600px at 85% -10%, #145145 0%, transparent 60%)," +
            "radial-gradient(900px 620px at 10% 5%,  #123f37 0%, transparent 58%)," +
            "radial-gradient(700px 700px at 50% 110%, #1a5b4d 0%, transparent 60%)," +
            "linear-gradient(180deg, #061814 0%, #04120f 55%, #030d0b 100%)",
      orbA: "#1f7d68", orbB: "#c9962f"
    },
    {
      id: "night", name: "ليل صافٍ", swatch: ["#2b3a7a", "#070b1c"],
      base: "radial-gradient(1000px 600px at 80% -10%, #24306b 0%, transparent 60%)," +
            "radial-gradient(900px 620px at 12% 8%,  #1a2350 0%, transparent 58%)," +
            "radial-gradient(760px 760px at 50% 112%, #2d3a86 0%, transparent 60%)," +
            "linear-gradient(180deg, #0a1030 0%, #070b1c 55%, #04060f 100%)",
      orbA: "#3b4fa8", orbB: "#8a6fd0"
    },
    {
      id: "sand", name: "رمال وذهب", swatch: ["#a8792a", "#241606"],
      base: "radial-gradient(1000px 600px at 82% -8%, #6b4a16 0%, transparent 60%)," +
            "radial-gradient(900px 620px at 10% 6%,  #4d3410 0%, transparent 58%)," +
            "radial-gradient(720px 720px at 50% 110%, #7d5a1f 0%, transparent 60%)," +
            "linear-gradient(180deg, #2e1d08 0%, #241606 55%, #150d03 100%)",
      orbA: "#a8792a", orbB: "#e7b740"
    },
    {
      id: "sea", name: "أزرق بحري", swatch: ["#1f6fa5", "#04141f"],
      base: "radial-gradient(1000px 600px at 84% -10%, #14506e 0%, transparent 60%)," +
            "radial-gradient(900px 620px at 10% 5%,  #0f3c55 0%, transparent 58%)," +
            "radial-gradient(700px 700px at 50% 110%, #1a6a8f 0%, transparent 60%)," +
            "linear-gradient(180deg, #06202e 0%, #04141f 55%, #020c13 100%)",
      orbA: "#1f6fa5", orbB: "#3fc0c9"
    },
    {
      id: "plum", name: "بنفسجي ملكي", swatch: ["#6a3fa0", "#150920"],
      base: "radial-gradient(1000px 600px at 84% -10%, #4a2775 0%, transparent 60%)," +
            "radial-gradient(900px 620px at 10% 5%,  #371c58 0%, transparent 58%)," +
            "radial-gradient(700px 700px at 50% 110%, #5c3390 0%, transparent 60%)," +
            "linear-gradient(180deg, #200e30 0%, #150920 55%, #0c0514 100%)",
      orbA: "#6a3fa0", orbB: "#c060a0"
    },
    {
      id: "crimson", name: "عنّابي دافئ", swatch: ["#8a3030", "#1c0707"],
      base: "radial-gradient(1000px 600px at 84% -10%, #6b2020 0%, transparent 60%)," +
            "radial-gradient(900px 620px at 10% 5%,  #4d1717 0%, transparent 58%)," +
            "radial-gradient(700px 700px at 50% 110%, #7d2a2a 0%, transparent 60%)," +
            "linear-gradient(180deg, #2a0c0c 0%, #1c0707 55%, #100404 100%)",
      orbA: "#8a3030", orbB: "#e07a4a"
    },
    {
      id: "ink", name: "رمادي هادئ", swatch: ["#44515c", "#0d1114"],
      base: "radial-gradient(1000px 600px at 84% -10%, #2f3a44 0%, transparent 60%)," +
            "radial-gradient(900px 620px at 10% 5%,  #232c34 0%, transparent 58%)," +
            "radial-gradient(700px 700px at 50% 110%, #38444f 0%, transparent 60%)," +
            "linear-gradient(180deg, #151b20 0%, #0d1114 55%, #07090b 100%)",
      orbA: "#44515c", orbB: "#7d8a95"
    }
  ];

  function find(id) {
    for (var i = 0; i < THEMES.length; i++) if (THEMES[i].id === id) return THEMES[i];
    return THEMES[0];
  }

  function stored() {
    try { return localStorage.getItem(KEY) || THEMES[0].id; }
    catch (e) { return THEMES[0].id; }
  }

  function apply() {
    var t = find(stored());
    var el = document.getElementById("bgThemeStyle");
    if (!el) {
      el = document.createElement("style");
      el.id = "bgThemeStyle";
      (document.head || document.documentElement).appendChild(el);
    }
    /* نغلب قواعد الصفحة نفسها لأن الوسم يأتي بعدها في <head> */
    el.textContent =
      ".bg-fx{ background:" + t.base + " !important; }" +
      ".bg-fx .orb.a{ background:" + t.orbA + " !important; }" +
      ".bg-fx .orb.b{ background:" + t.orbB + " !important; }";
    document.documentElement.setAttribute("data-bg", t.id);
  }

  global.Theme = {
    list: function () { return THEMES.slice(); },
    get: stored,
    set: function (id) {
      try { localStorage.setItem(KEY, find(id).id); } catch (e) {}
      apply();
      return find(id).id;
    },
    apply: apply
  };

  apply();
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", apply);
  }
})(window);
