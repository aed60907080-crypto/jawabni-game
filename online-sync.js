/* ============================================================
   online-sync.js — مزامنةُ الجولة بين الأجهزة

   قبلها كان «أونلاين» رمزاً يحمل الفئات وبذرةً عشوائية، فيبني كلُّ
   جهازٍ الجولةَ نفسها عنده ثم ينفرد بنقاطه وأدواره. فلا أحدَ يرى ما
   يفعله الآخر. وهذه الوحدة تجعل الجولةَ واحدةً على كل الأجهزة.

   ------------------------------------------------------------
   ما يُزامَن (وهو كلُّ ما يتغيّر أثناء اللعب):
     teamScores        نقاط الفرق
     currentTurn       صاحب الدور
     answeredQuestions الأسئلة المُجابة
     frozenTeams       الفرق المجمَّدة
     players           اللاعبون ونقاطهم
   وما عداه ثابتٌ من لحظة الإنشاء (الفئات والأسئلة والأسماء)، فيبنيه
   كلُّ جهازٍ من البذرة كما كان.

   ------------------------------------------------------------
   المرجع: جهازُ المُنشئ (host). فهو وحده يكتب الحالة، وغيرُه يطلب
   منه التغيير. وهذا يحسم التعارض: لو ضغط جهازان «صح» معاً لم تُحتسب
   النقطة مرّتين، ولا تتنازع الأجهزة على الدور.

   ------------------------------------------------------------
   الناقل (transport) مفصولٌ عن منطق المزامنة عمداً، فله صورتان:

     ws        سيرفر WebSocket — للّعب بين أجهزةٍ متباعدة.
               يحتاج عنواناً في online-config.js، وانظر server/.

     channel   BroadcastChannel — بين نوافذ المتصفّح نفسه على الجهاز
               نفسه. لا يحتاج سيرفراً ولا إنترنت، ويصلح للّعب على
               شاشةٍ واحدة بنوافذ متعدّدة، وبه جُرّب منطقُ المزامنة.

   وإن لم يُضبط عنوانُ السيرفر ولم يُطلب ناقلٌ بعينه فلا مزامنة
   أصلاً، وتبقى اللعبة كما كانت تماماً — لا تنكسر ولا تتغيّر.
   ============================================================ */

(function (global) {
  "use strict";

  /* المفاتيح المُزامَنة، وقيمتُها الافتراضية إن غابت */
  var KEYS = {
    teamScores:        "{}",
    currentTurn:       "team1",
    answeredQuestions: "[]",
    frozenTeams:       "{}",
    players:           "[]"
  };

  var state = {
    on: false,       /* هل المزامنة عاملة؟ */
    host: false,     /* هل هذا الجهاز هو المرجع؟ */
    room: "",
    tx: null,        /* الناقل */
    seq: 0,          /* رقمُ النسخة — يمنع ارتدادَ حالةٍ قديمة */
    applying: false, /* لئلّا يرتدّ ما نكتبه نحن */
    peers: 0,
    onchange: null
  };

  function log() {
    if (!global.ONLINE_DEBUG) return;
    try { console.log.apply(console, ["[sync]"].concat([].slice.call(arguments))); } catch (e) {}
  }

  function get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }

  /* لقطةُ الحالة المُزامَنة */
  function snapshot() {
    var s = { seq: state.seq, v: {} };
    for (var k in KEYS) s.v[k] = get(k) === null ? KEYS[k] : get(k);
    return s;
  }

  /* كتابةُ لقطةٍ واردة. تُتجاهَل الأقدم: الشبكةُ قد تعكس الترتيب. */
  function applySnapshot(s) {
    if (!s || typeof s.seq !== "number" || s.seq <= state.seq) return false;
    state.seq = s.seq;
    state.applying = true;
    for (var k in KEYS) if (typeof s.v[k] === "string") set(k, s.v[k]);
    state.applying = false;
    log("طُبّقت لقطة", s.seq);
    if (typeof state.onchange === "function") state.onchange();
    return true;
  }

  /* المرجع يبثّ حالته */
  function broadcast() {
    if (!state.on || !state.host) return;
    state.seq++;
    state.tx.send({ t: "state", room: state.room, s: snapshot() });
    log("بُثّت", state.seq);
  }

  /* ------------------------------------------------------------
     الناقل الأول: BroadcastChannel — نوافذُ المتصفّح نفسه
     ------------------------------------------------------------ */
  function channelTransport(room, onMessage) {
    if (typeof BroadcastChannel === "undefined") return null;
    var ch = new BroadcastChannel("jawabni-" + room);
    ch.onmessage = function (e) { onMessage(e.data); };
    return {
      kind: "channel",
      send: function (m) { try { ch.postMessage(m); } catch (e) {} },
      close: function () { try { ch.close(); } catch (e) {} }
    };
  }

  /* ------------------------------------------------------------
     الناقل الثاني: WebSocket — أجهزةٌ متباعدة (انظر server/)
     ويُعيد الوصلَ من نفسه إن انقطع، بتباعدٍ متزايد حتى عشر ثوانٍ.
     ------------------------------------------------------------ */
  function wsTransport(url, room, onMessage, onOpen) {
    var ws = null, closed = false, tries = 0, timer = null;

    function connect() {
      if (closed) return;
      try { ws = new WebSocket(url); } catch (e) { return retry(); }
      ws.onopen = function () {
        tries = 0;
        log("اتّصل بالسيرفر");
        send({ t: "join", room: room, host: state.host });
        if (onOpen) onOpen();
      };
      ws.onmessage = function (e) {
        var m; try { m = JSON.parse(e.data); } catch (x) { return; }
        onMessage(m);
      };
      ws.onclose = function () { ws = null; retry(); };
      ws.onerror  = function () { try { ws.close(); } catch (e) {} };
    }

    function retry() {
      if (closed) return;
      var wait = Math.min(10000, 500 * Math.pow(2, tries++));
      log("انقطع — إعادة الوصل بعد", wait);
      clearTimeout(timer);
      timer = setTimeout(connect, wait);
    }

    function send(m) {
      if (ws && ws.readyState === 1) { try { ws.send(JSON.stringify(m)); } catch (e) {} }
    }

    connect();
    return {
      kind: "ws",
      send: send,
      close: function () { closed = true; clearTimeout(timer); if (ws) try { ws.close(); } catch (e) {} }
    };
  }

  /* ------------------------------------------------------------
     الرسائل الواردة
     ------------------------------------------------------------ */
  function handle(m) {
    if (!m || m.room && m.room !== state.room) return;

    /* لقطةٌ من المرجع */
    if (m.t === "state") {
      if (state.host) return;             /* المرجعُ لا يأخذ من غيره */
      applySnapshot(m.s);
      return;
    }

    /* لاعبٌ انضمّ — المرجعُ يُطلعه على الحالة فوراً */
    if (m.t === "join" || m.t === "want") {
      if (state.host) { state.seq++; state.tx.send({ t: "state", room: state.room, s: snapshot() }); }
      return;
    }

    /* طلبُ تغييرٍ من لاعبٍ — المرجعُ وحده ينفّذه ثم يبثّ */
    if (m.t === "set") {
      if (!state.host || !m.v) return;
      for (var k in m.v) if (KEYS.hasOwnProperty(k) && typeof m.v[k] === "string") set(k, m.v[k]);
      broadcast();
      if (typeof state.onchange === "function") state.onchange();
      return;
    }

    if (m.t === "peers") { state.peers = m.n || 0; }
  }

  /* ------------------------------------------------------------
     الرصد التلقائي

     مواضعُ الكتابة في المفاتيح المُزامَنة متفرّقةٌ في الصفحات
     (Teams.saveScores و switchTurn و finishAward وغيرها)، ووضعُ نداءٍ
     في كل موضعٍ يُنسى أحدُه اليوم أو غداً. فبدل ذلك يُلفّ setItem
     مرّةً واحدة: أيُّ كتابةٍ في مفتاحٍ مُزامَن تُرسَل من نفسها.

     واللفُّ لا يقع إلا مع المزامنة، ويُفكّ عند إيقافها. والدفعُ
     مؤجَّلٌ قليلاً فتُجمع الكتاباتُ المتتابعة في رسالةٍ واحدة
     (النقاطُ والدور يُكتبان معاً عند احتساب إجابة). */
  var origSet = null, pushTimer = null;

  function schedulePush() {
    clearTimeout(pushTimer);
    pushTimer = setTimeout(function () { API.push(); }, 60);
  }

  function hook() {
    if (origSet) return;
    origSet = localStorage.setItem.bind(localStorage);
    try {
      localStorage.setItem = function (k, v) {
        origSet(k, v);
        if (!state.applying && KEYS.hasOwnProperty(k)) schedulePush();
      };
    } catch (e) { origSet = null; }   /* بعض المتصفّحات تمنع اللفّ */
  }

  function unhook() {
    clearTimeout(pushTimer);
    if (!origSet) return;
    try { localStorage.setItem = origSet; } catch (e) {}
    origSet = null;
  }

  /* ------------------------------------------------------------
     الواجهة
     ------------------------------------------------------------ */
  var API = {
    KEYS: KEYS,

    /* هل المزامنة عاملة الآن؟ */
    active: function () { return state.on; },
    isHost: function () { return state.host; },
    roomCode: function () { return state.room; },
    transport: function () { return state.tx ? state.tx.kind : ""; },

    /* البدء. opts: { room, host, mode:"ws"|"channel"|"auto", onchange }
       تُعيد true إن قامت المزامنة. */
    start: function (opts) {
      opts = opts || {};
      API.stop();

      var room = String(opts.room || get("onlineRoom") || "").trim();
      if (!room) return false;

      var url  = global.ONLINE_SERVER || "";
      var mode = opts.mode || "auto";
      if (mode === "auto") mode = url ? "ws" : "channel";

      state.room = room;
      state.host = !!opts.host;
      state.seq  = 0;
      state.onchange = opts.onchange || null;

      if (mode === "ws") {
        if (!url) return false;
        state.tx = wsTransport(url, room, handle, function () { if (state.host) broadcast(); });
      } else {
        state.tx = channelTransport(room, handle);
        if (!state.tx) return false;
        /* المنضمُّ يطلب الحالة، والمرجعُ يبثّها */
        if (state.host) setTimeout(broadcast, 0);
        else state.tx.send({ t: "want", room: room });
      }

      state.on = true;
      hook();
      log("بدأت —", state.tx.kind, state.host ? "(مرجع)" : "(لاعب)", room);
      return true;
    },

    stop: function () {
      unhook();
      if (state.tx) state.tx.close();
      state.tx = null; state.on = false; state.host = false;
      state.room = ""; state.seq = 0; state.onchange = null;
    },

    /* يبدأ من تلقائه إن كانت الصفحة داخل جولةٍ أونلاين.
       تستدعيه الصفحاتُ بسطرٍ واحد، ولا يفعل شيئاً خارج الأونلاين. */
    auto: function (onchange) {
      if (!get("onlineRoom")) return false;
      return API.start({
        room: get("onlineRoom"),
        host: get("onlineHost") === "1",
        onchange: onchange
      });
    },

    /* يُستدعى بعد أيّ تغييرٍ محلّي في المفاتيح المُزامَنة.
       المرجعُ يبثّ، وغيرُه يرفع طلباً إلى المرجع. */
    push: function () {
      if (!state.on || state.applying) return;
      if (state.host) { broadcast(); return; }
      var v = {};
      for (var k in KEYS) v[k] = get(k) === null ? KEYS[k] : get(k);
      state.tx.send({ t: "set", room: state.room, v: v });
    }
  };

  global.OnlineSync = API;
})(window);
