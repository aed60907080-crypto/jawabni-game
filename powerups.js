/* ============================================================
   جاوبني — المفاجآت والمساعدات
   ------------------------------------------------------------
   نظامان يضافان فوق نقاط الأسئلة:

   ١) المفاجآت (Surprises)
      تُوزَّع **عشوائياً** على بطاقات اللوحة عند بدء الجولة — عشر مفاجآت
      على ثلاثين بطاقة — ولا يعرف أحد أين هي ولا ما هي حتى تُفتح،
      فالحظ جزء من اللعبة.

      تنكشف عند فتح البطاقة، ويُحسم أثرها **عند الإجابة الصحيحة فقط**:
      المكافأة لمن أجاب، والعقوبة على من **لم** يجب.
      وإن لم يُجب أحد فلا يحدث شيء إطلاقاً.
      ومع أكثر من فريقين تقع العقوبة على أقوى خصم (الأعلى نقاطاً).

        🕸️ فخ          تسحب قيمة السؤال من الفريق الذي لم يجب وتُضاف لك
        🕳️ حفرة        خصم نصف القيمة من الفريق الذي لم يجب
        💣 قنبلة       خصم كامل القيمة من الفريق الذي لم يجب
        🧊 تجميد الدور  الفريق الذي لم يجب يفقد دوره القادم
        💎 كنز         +٥٠٠ نقطة إضافية للفريق الذي أجاب
        ✌️ دبل ×٢      نقاط السؤال تتضاعف لمن أجاب
        🔥 دبل ×٤      نقاط السؤال في أربعة لمن أجاب

   ٢) المساعدات (Lifelines) — للفريق صاحب الدور

        🅰️ جوابين      يعرض إجابتين إحداهما الصحيحة        (١٠ نقاط)
        📞 مكالمة      ٣٠ ثانية اتصال، ومؤقّت السؤال متوقف   (١٥ نقطة)
        🔀 اسرق الدور  الفريق الآخر يجيب بدلاً منك           (٢٥ نقطة)

      ومساعدات تُشترى من المتجر فقط (shop: true) — لا تأتي مجاناً:
        💰 اسرق النقاط      تسحب من الخصم نقاطاً بقيمة السؤال   (٤٠ نقطة) مرة واحدة
        ❄️ جمّد دور الخصم   الخصم يفقد دوره القادم               (٣٠ نقطة)
        🚫 امنع الخصم       لا يحق للخصم أخذ نقاط السؤال         (٣٠ نقطة)
        🔎 البحث            ٣٠ ثانية بحث، ومؤقّت السؤال متوقف    (٢٠ نقطة)
        📉 خفّض نقاط الخصم  خصم عشوائي ١٠٠–٥٠٠ من الخصم          (٣٥ نقطة) مرة واحدة
      «مرة واحدة» (once: true): نسخة واحدة لكل فريق في الجولة مهما اشتُري.

      كل فريق يبدأ الجولة بواحدة من كل مساعدة افتراضية. ويستطيع اللاعب أن **يشتري**
      المزيد بنقاط حسابه من متجر المساعدات (balance.html)، وما يشتريه
      يصير **ملكاً دائماً** يبدأ معه كل جولة جديدة.

   التخزين في localStorage:
     tilePowers   { "الفئة_300": { t:"bomb", by:"random" } }   موزّعة عشوائياً
     teamPowers   { team1:{trap:1,…}, team2:{…}, … }   لكل فريق (٢ أو ٤ أو ٦ — teams.js)
     teamHelps    { team1:{two:1,call:1,steal:1}, team2:{…}, … }
     frozenTeams  { team1:0, team2:1, … }     عدد الأدوار المتبقية للتجميد
     ownedHelps   { two:2, steal:1 }          المساعدات المشتراة — دائمة
     points       نقاط الحساب (مفتاح موجود أصلاً) — بها يُشترى
   ============================================================ */

(function (global) {
  "use strict";

  /* ---------- التعريفات ---------- */
  /* كل المفاجآت تنتظر الإجابة الصحيحة:
       tone "bad"  → عقوبة تقع على الفريق الذي **لم** يجب
       tone "good" → مكافأة للفريق الذي أجاب
     ولا شيء منها يعمل إن لم يُجب أحد. */
  var POWERS = [
    { key: "trap",     name: "فخ",           emoji: "🕸️", tone: "bad",
      desc: "تسحب قيمة السؤال من الفريق الذي لم يجب وتُضاف لك فوق نقاطك",
      onAnswer: "الفريق الذي لم يجب يخسر قيمة السؤال، وأنت تكسبها مضاعفة" },
    { key: "pit",      name: "حفرة",         emoji: "🕳️", tone: "bad",
      desc: "خصم نصف قيمة السؤال من الفريق الذي لم يجب",
      onAnswer: "يُخصم نصف قيمة السؤال من الفريق الذي لم يجب" },
    { key: "bomb",     name: "قنبلة",        emoji: "💣", tone: "bad",
      desc: "خصم كامل قيمة السؤال من الفريق الذي لم يجب",
      onAnswer: "تُخصم قيمة السؤال كاملة من الفريق الذي لم يجب" },
    { key: "freeze",   name: "تجميد الدور",  emoji: "🧊", tone: "bad",
      desc: "الفريق الذي لم يجب يفقد دوره القادم",
      onAnswer: "الفريق الذي لم يجب يفقد دوره القادم" },
    { key: "treasure", name: "كنز",          emoji: "💎", tone: "good",
      desc: "‎+٥٠٠ نقطة إضافية للفريق الذي أجاب",
      onAnswer: "‎+٥٠٠ نقطة إضافية فوق قيمة السؤال" },
    { key: "x2",       name: "دبل ×٢",       emoji: "✌️", tone: "good",
      desc: "نقاط السؤال تتضاعف للفريق الذي أجاب",
      onAnswer: "نقاط السؤال تتضاعف" },
    { key: "x4",       name: "دبل ×٤",       emoji: "🔥", tone: "good",
      desc: "نقاط السؤال في أربعة للفريق الذي أجاب",
      onAnswer: "نقاط السؤال في أربعة" }
  ];

  var HELPS = [
    { key: "two",   name: "جوابين",      emoji: "🅰️", price: 10,
      desc: "يعرض إجابتين إحداهما الصحيحة" },
    { key: "call",  name: "مكالمة",      emoji: "📞", price: 15,
      desc: "٣٠ ثانية اتصال، ومؤقّت السؤال متوقف" },
    { key: "steal", name: "اسرق الدور",  emoji: "🔀", price: 25,
      desc: "الفريق الآخر يجيب بدلاً منك على هذا السؤال" },

    /* مساعدات المتجر — لا تأتي مجاناً، تظهر لمن اشتراها فقط (shop).
       once: نسخة واحدة لكل فريق في الجولة، ولا تُشترى أكثر من مرة. */
    { key: "stealPts",  name: "اسرق النقاط",     emoji: "💰", price: 40, shop: true, once: true,
      desc: "تسحب من الخصم نقاطاً بقيمة السؤال وتضيفها لك — مرة واحدة في الجولة" },
    { key: "freezeOpp", name: "جمّد دور الخصم",  emoji: "❄️", price: 30, shop: true,
      desc: "الخصم يفقد دوره القادم" },
    { key: "block",     name: "امنع الخصم",      emoji: "🚫", price: 30, shop: true,
      desc: "إن لم تجب فلا يحق للخصم أخذ نقاط هذا السؤال" },
    { key: "search",    name: "البحث",           emoji: "🔎", price: 20, shop: true,
      desc: "يفتح بحث جوجل عن السؤال، ومؤقّت السؤال متوقف ٣٠ ثانية" },
    { key: "cutPts",    name: "خفّض نقاط الخصم", emoji: "📉", price: 35, shop: true, once: true,
      desc: "خصم عشوائي من ١٠٠ إلى ٥٠٠ نقطة من الخصم — مرة واحدة في الجولة" }
  ];

  /* المخزون الافتراضي لكل فريق في بداية الجولة */
  var DEFAULT_POWERS = { trap: 1, pit: 1, bomb: 1, freeze: 1, treasure: 1, x2: 1, x4: 1 };
  var DEFAULT_HELPS  = { two: 1, call: 1, steal: 1 };

  var TREASURE_BONUS = 500;

  /* قيم النقاط الستّ على كل بطاقة فئة */
  var POINT_VALUES = [100, 200, 300, 400, 500, 600];

  /* كم مفاجأة تُوزَّع على اللوحة (من أصل 36 بطاقة) */
  var DEFAULT_SCATTER = 10;

  /* خلط عشوائي (فيشر–ييتس) */
  function shuffle(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = arr[i]; arr[i] = arr[j]; arr[j] = t;
    }
    return arr;
  }

  /* ---------- تخزين ---------- */
  function read(key, fallback) {
    try {
      var raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : JSON.parse(JSON.stringify(fallback));
    } catch (e) { return JSON.parse(JSON.stringify(fallback)); }
  }
  function write(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) {}
  }

  /* معرّفات فرق الجولة (teams.js) — فريقان إن لم يُحمَّل */
  function teamIds() {
    return global.Teams ? global.Teams.ids() : ["team1", "team2"];
  }
  /* كائن فيه قيمة لكل فريق */
  function perTeam(make) {
    var o = {};
    teamIds().forEach(function (t) { o[t] = make(); });
    return o;
  }

  function tiles()      { return read("tilePowers", {}); }
  function powers()     { return read("teamPowers", perTeam(function () { return DEFAULT_POWERS; })); }
  function helps()      { return read("teamHelps",  perTeam(function () { return DEFAULT_HELPS; })); }
  function frozen()     { return read("frozenTeams", perTeam(function () { return 0; })); }

  /* المساعدات المشتراة بالنقاط — دائمة، لا تُصفَّر مع الجولات */
  function owned()      { return read("ownedHelps", {}); }

  function tileKey(category, points) { return category + "_" + points; }

  /* ---------- نقاط الحساب ---------- */
  function accountPoints() {
    try { return parseInt(localStorage.getItem("points"), 10) || 0; }
    catch (e) { return 0; }
  }

  function setAccountPoints(n) {
    try { localStorage.setItem("points", Math.max(0, n)); } catch (e) {}
  }

  /* مخزون بداية الجولة = الافتراضي + ما اشتراه اللاعب */
  function startingHelps() {
    var out = Object.assign({}, DEFAULT_HELPS);
    var own = owned();
    Object.keys(own).forEach(function (k) {
      out[k] = (out[k] || 0) + (own[k] || 0);
    });
    /* مساعدات «مرة واحدة»: نسخة واحدة في الجولة مهما اشتُري منها */
    HELPS.forEach(function (d) { if (d.once && out[d.key] > 1) out[d.key] = 1; });
    return out;
  }

  /* ---------- الواجهة ---------- */
  var Powerups = {

    POWERS: POWERS,
    HELPS: HELPS,
    TREASURE_BONUS: TREASURE_BONUS,
    DEFAULT_SCATTER: DEFAULT_SCATTER,

    def: function (key) {
      for (var i = 0; i < POWERS.length; i++) if (POWERS[i].key === key) return POWERS[i];
      return null;
    },
    helpDef: function (key) {
      for (var i = 0; i < HELPS.length; i++) if (HELPS[i].key === key) return HELPS[i];
      return null;
    },

    /* تصفير كل شيء عند بدء جولة جديدة */
    reset: function () {
      write("tilePowers", {});
      write("teamPowers", perTeam(function () { return Object.assign({}, DEFAULT_POWERS); }));
      /* المساعدات المشتراة تُضاف لكل جولة جديدة — فهي ملك دائم للاعب */
      write("teamHelps",  perTeam(startingHelps));
      write("frozenTeams", perTeam(function () { return 0; }));
    },

    /* ---------- متجر المساعدات ----------
       يشتري اللاعب مساعدات بنقاط حسابه، وتُضاف إلى مجموعته الدائمة
       فتبدأ معه كل جولة جديدة إلى جانب المساعدات الافتراضية. */
    points: accountPoints,

    owned: owned,

    price: function (key) {
      var d = Powerups.helpDef(key);
      return d ? d.price : 0;
    },

    canBuy: function (key) {
      var p = Powerups.price(key);
      if (Powerups.isMaxed(key)) return false;
      return p > 0 && accountPoints() >= p;
    },

    /* مساعدة «مرة واحدة» سبق شراؤها — لا فائدة من شرائها ثانية */
    isMaxed: function (key) {
      var d = Powerups.helpDef(key);
      return !!(d && d.once && (owned()[key] || 0) >= 1);
    },

    /* هل تظهر المساعدة في شاشة السؤال؟ الافتراضية دائماً، ومساعدات المتجر لمن اشتراها */
    isOffered: function (key) {
      var d = Powerups.helpDef(key);
      if (!d) return false;
      return !d.shop || (owned()[key] || 0) > 0;
    },

    /* يشتري مساعدة — يعيد كائن النتيجة { ok, points, owned, reason } */
    buyHelp: function (key) {
      var def = Powerups.helpDef(key);
      if (!def) return { ok: false, reason: "unknown" };
      if (Powerups.isMaxed(key)) return { ok: false, reason: "once" };

      var have = accountPoints();
      if (have < def.price) {
        return { ok: false, reason: "points", points: have, need: def.price };
      }

      setAccountPoints(have - def.price);

      var own = owned();
      own[key] = (own[key] || 0) + 1;
      write("ownedHelps", own);

      /* تُضاف فوراً لمخزون كل الفرق إن كانت هناك جولة جارية */
      var h = helps();
      Object.keys(h).forEach(function (t) {
        if (h[t]) h[t][key] = def.once ? 1 : (h[t][key] || 0) + 1;
      });
      write("teamHelps", h);

      return { ok: true, points: accountPoints(), owned: own[key] };
    },

    /* مخزون بداية الجولة (افتراضي + مشترى) */
    startingHelps: startingHelps,

    /* لإعادة ضبط المشتريات (للاختبار أو مسح الحساب) */
    clearOwned: function () {
      write("ownedHelps", {});
    },

    /* ---------- التوزيع العشوائي ----------
       المفاجآت تُوزَّع عشوائياً على بطاقات اللوحة عند بدء الجولة،
       فلا يعرف أحد — ولا حتى من وزّعها — أين هي ولا ما هي.
       تُبنى القائمة بحيث يظهر كل نوع مرة على الأقل، ثم تُملأ البقية
       بأنواع عشوائية، ثم تُخلط وتُوزَّع على بطاقات مختارة عشوائياً. */
    scatter: function (categoryTitles, count) {
      var cats = categoryTitles || [];
      if (!cats.length) return {};

      /* كل البطاقات المتاحة */
      var slots = [];
      cats.forEach(function (cat) {
        POINT_VALUES.forEach(function (p) { slots.push({ c: cat, p: p }); });
      });

      var n = count == null ? DEFAULT_SCATTER : count;
      n = Math.max(0, Math.min(n, slots.length));
      if (!n) { write("tilePowers", {}); return {}; }

      /* قائمة الأنواع: واحد من كل نوع ثم أنواع عشوائية حتى العدد المطلوب */
      var picks = POWERS.map(function (d) { return d.key; });
      shuffle(picks);
      while (picks.length < n) picks.push(POWERS[Math.floor(Math.random() * POWERS.length)].key);
      picks = picks.slice(0, n);
      shuffle(picks);

      shuffle(slots);

      var out = {};
      for (var i = 0; i < n; i++) {
        out[tileKey(slots[i].c, slots[i].p)] = { t: picks[i], by: "random" };
      }
      write("tilePowers", out);
      return out;
    },

    /* كم مفاجأة ما زالت مخبّأة على اللوحة؟ */
    remaining: function (answered) {
      var t = tiles(), done = answered || [];
      return Object.keys(t).filter(function (k) { return done.indexOf(k) === -1; }).length;
    },

    /* ---------- المخزون ---------- */
    inventory: function (team)     { return powers()[team] || {}; },
    helpInventory: function (team) { return helps()[team]  || {}; },

    countLeft: function (team) {
      var inv = Powerups.inventory(team), n = 0;
      Object.keys(inv).forEach(function (k) { n += inv[k]; });
      return n;
    },

    /* ---------- الزرع ---------- */
    planted: function (category, points) {
      return tiles()[tileKey(category, points)] || null;
    },

    /* هل على هذه البطاقة مفاجأة؟ (دون كشف نوعها) */
    isPlanted: function (category, points) {
      return !!Powerups.planted(category, points);
    },

    allPlanted: function () { return tiles(); },

    /* يزرع رمزاً — يعيد true عند النجاح */
    plant: function (team, key, category, points) {
      var inv = powers();
      if (!inv[team] || !inv[team][key]) return false;

      var t = tiles();
      var k = tileKey(category, points);
      if (t[k]) return false;                       /* البطاقة محجوزة مسبقاً */

      t[k] = { t: key, by: team };
      inv[team][key] -= 1;

      write("tilePowers", t);
      write("teamPowers", inv);
      return true;
    },

    /* يزيل الزرع (للتراجع) ويعيد الرمز للمخزون */
    unplant: function (category, points) {
      var t = tiles(), k = tileKey(category, points);
      var entry = t[k];
      if (!entry) return false;

      var inv = powers();
      if (inv[entry.by]) inv[entry.by][entry.t] = (inv[entry.by][entry.t] || 0) + 1;

      delete t[k];
      write("tilePowers", t);
      write("teamPowers", inv);
      return true;
    },

    /* ---------- التجميد ---------- */
    isFrozen: function (team) { return (frozen()[team] || 0) > 0; },

    freeze: function (team, turns) {
      var f = frozen();
      f[team] = (f[team] || 0) + (turns || 1);
      write("frozenTeams", f);
    },

    /* الدور التالي مع تخطّي كل فريق مجمّد (ويُستهلك تجميده).
       إن كانت الفرق الأخرى كلها مجمّدة يبقى الدور مع الفريق الحالي. */
    nextTurn: function (current) {
      var list = teamIds(), f = frozen(), changed = false;
      var i = Math.max(0, list.indexOf(current));
      for (var k = 1; k < list.length; k++) {
        var t = list[(i + k) % list.length];
        if ((f[t] || 0) > 0) { f[t] -= 1; changed = true; continue; }
        if (changed) write("frozenTeams", f);
        return t;
      }
      if (changed) write("frozenTeams", f);
      return current;                   /* الخصوم مجمّدون — الدور يبقى معك */
    },

    /* ---------- المساعدات ---------- */
    canUseHelp: function (team, key) {
      var h = helps();
      return !!(h[team] && h[team][key] > 0);
    },

    useHelp: function (team, key) {
      var h = helps();
      if (!h[team] || !h[team][key]) return false;
      h[team][key] -= 1;
      write("teamHelps", h);
      return true;
    },

    /* ---------- نقاط الفرق — لمساعدات المتجر ---------- */
    teamScore: function (team) {
      return read("teamScores", {})[team] || 0;
    },

    /* ينقل نقاطاً من فريق لآخر، ولا يأخذ أكثر مما يملكه — يعيد المنقول فعلاً */
    transferPoints: function (from, to, amount) {
      var s = read("teamScores", {});
      var n = Math.max(0, Math.min(amount, s[from] || 0));
      s[from] = (s[from] || 0) - n;
      s[to]   = (s[to]   || 0) + n;
      write("teamScores", s);
      return n;
    },

    /* يخصم من فريق دون أن ينزل تحت الصفر — يعيد المخصوم فعلاً */
    deductPoints: function (team, amount) {
      var s = read("teamScores", {});
      var n = Math.max(0, Math.min(amount, s[team] || 0));
      s[team] = (s[team] || 0) - n;
      write("teamScores", s);
      return n;
    },

    /* خصم عشوائي لمساعدة «خفّض نقاط الخصم»: ١٠٠ أو ٢٠٠ … أو ٥٠٠ */
    randomCut: function () {
      return POINT_VALUES[Math.floor(Math.random() * POINT_VALUES.length)];
    },

    /* إجابة مضلّلة من نفس الفئة ونفس المستوى — لمساعدة «جوابين» */
    decoyFor: function (item, category) {
      var bank = (global.questionsData || {})[category] || [];
      var pool = bank.filter(function (q) {
        return q.a && q.a !== item.a && q.l === item.l;
      });
      if (!pool.length) {
        pool = bank.filter(function (q) { return q.a && q.a !== item.a; });
      }
      if (!pool.length) return null;
      return pool[Math.floor(Math.random() * pool.length)].a;
    },

    /* ---------- الأثر ---------- */
    /* يُطبَّق فور فتح البطاقة (حفرة / قنبلة / تجميد) */
    /* تُكشف المفاجأة عند فتح البطاقة — قبل الإجابة — ولا يُطبَّق أي أثر بعد.
       كل الآثار تنتظر الإجابة الصحيحة وتُحسم في settle(). */
    reveal: function (category, points) {
      var p = Powerups.planted(category, points);
      if (!p) return null;
      var def = Powerups.def(p.t);
      return {
        key: p.t,
        by: p.by,
        def: def,
        /* ما الذي سيحدث عند الإجابة الصحيحة */
        outcome: def ? def.onAnswer : ""
      };
    },

    /* يحسب النقاط النهائية عند الإجابة الصحيحة
       يعيد { to: "team1"…"team6", amount: n, note: "…" } */
    /* يحسم المفاجأة بعد الإجابة الصحيحة ويعيد خطة التطبيق:
         to      : الفريق الذي يأخذ نقاط السؤال
         amount  : كم يأخذ
         penalty : { team, amount } خصم يقع على الفريق الذي لم يجب
         freeze  : اسم الفريق الذي يفقد دوره التالي
       القاعدة: المكافآت للفريق الذي أجاب، والعقوبات على الفريق الذي لم يجب.
       ولا يُستدعى هذا إطلاقاً إن لم يُجب أحد — عندها لا يحدث شيء. */
    settle: function (category, points, answeringTeam) {
      var p = Powerups.planted(category, points);
      /* «الفريق الذي لم يجب»: في لعبة فريقين هو الخصم، ومع أكثر من فريقين
         تقع العقوبة على أقوى خصم (الأعلى نقاطاً بين الفرق الأخرى) */
      var other = global.Teams ? global.Teams.leader(answeringTeam)
                               : (answeringTeam === "team1" ? "team2" : "team1");
      var base = { to: answeringTeam, amount: points, penalty: null, freeze: null, note: "" };

      if (!p) return base;

      switch (p.t) {
        case "bomb":
          base.penalty = { team: other, amount: points };
          base.note = "قنبلة! خُصمت " + points + " من الفريق الذي لم يجب";
          return base;

        case "pit":
          base.penalty = { team: other, amount: Math.round(points / 2) };
          base.note = "حفرة! خُصم نصف القيمة من الفريق الذي لم يجب";
          return base;

        case "freeze":
          base.freeze = other;
          base.note = "تجميد! الفريق الذي لم يجب يفقد دوره القادم";
          return base;

        case "trap":
          /* نقل مزدوج: الخصم يخسر قيمة السؤال وأنت تكسبها فوق نقاطك */
          base.amount = points * 2;
          base.penalty = { team: other, amount: points };
          base.note = "فخ! سحبت " + points + " من الفريق الذي لم يجب";
          return base;

        case "treasure":
          base.amount = points + TREASURE_BONUS;
          base.note = "كنز! ‎+" + TREASURE_BONUS + " نقطة إضافية";
          return base;

        case "x2":
          base.amount = points * 2;
          base.note = "دبل ×٢";
          return base;

        case "x4":
          base.amount = points * 4;
          base.note = "دبل ×٤";
          return base;

        default:
          return base;
      }
    },

    /* يطبّق خطة settle على النتائج والتجميد */
    apply: function (plan) {
      if (!plan) return;
      var s = read("teamScores", {});

      s[plan.to] = (s[plan.to] || 0) + plan.amount;
      if (plan.penalty) {
        s[plan.penalty.team] = Math.max(0, (s[plan.penalty.team] || 0) - plan.penalty.amount);
      }
      write("teamScores", s);

      if (plan.freeze) Powerups.freeze(plan.freeze, 1);
    },

    /* تُستهلك المفاجأة بعد انتهاء السؤال */
    consume: function (category, points) {
      var t = tiles(), k = tileKey(category, points);
      if (t[k]) { delete t[k]; write("tilePowers", t); }
    }
  };

  global.Powerups = Powerups;

})(typeof window !== "undefined" ? window : this);
