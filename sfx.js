/* ============================================================
   جاوبني — محرّك الصوت (SFX)
   ------------------------------------------------------------
   كل المؤثرات والموسيقى مولّدة داخل المتصفح عبر Web Audio API،
   بدون أي ملفات صوتية خارجية — عدا الضحكة والتصفيق فهما تسجيلان حقيقيان
   حرّان (ملكية عامة) يُجلبان من ويكيميديا كومنز، مع بديل مولّد بلا إنترنت.

   الاستخدام:
     SFX.click()      نقرة زر
     SFX.select()     اختيار بطاقة
     SFX.tick()       تكتكة المؤقّت
     SFX.timeUp()     انتهاء الوقت
     SFX.reveal()     كشف الإجابة
     SFX.correct()    إجابة صحيحة
     SFX.wrong()      إجابة خاطئة / لا أحد
     SFX.penalty()    بطاقة جزاء
     SFX.win()        فوز ونهاية اللعبة
     SFX.coin()       رنّة عملات (شراء مساعدة، مكافأة)

   المؤثرات المرحة (تُطفأ من الإعدادات فتعود الأصوات الكلاسيكية):
     SFX.laugh()          ضحكة شريرة مجنونة (تسجيل حقيقي؛ laughSynth البديل المولّد)
     SFX.applause()       تصفيق وهتاف (تسجيل حقيقي؛ applauseSynth البديل المولّد)
     SFX.sadTrombone()    بوق حزين «واه واه واه واااه»
     SFX.correctAnswer()  إجابة صحيحة: نغمة النجاح + تصفيق
     SFX.wrongAnswer()    لا أحد أجاب: صوت الخطأ
     SFX.stealTurn()      «اسرق الدور»: الضحكة (أو صوت تبديل الدور الكلاسيكي)
     SFX.penaltyCard()    بطاقة جزاء: البوق الحزين (أو الطرقتان الكلاسيكيتان)

     SFX.music.toggle()   تشغيل/إيقاف الموسيقى الخلفية
     SFX.music.tracks     قائمة المقطوعات [{id,name,emoji}]
     SFX.music.setTrack(id)  اختيار مقطوعة (أو "random") وتشغيلها
     SFX.mountControls()  يضيف أزرار الصوت والموسيقى للصفحة

   الإعدادات تُحفظ في localStorage:
     sfxOn   ("1" | "0")   المؤثرات
     musicOn ("1" | "0")   الموسيقى الخلفية
     funSfxOn ("1" | "0")  المؤثرات المرحة (مفعّلة افتراضياً)
     musicTrack            المقطوعة المختارة (calm افتراضياً، أو random)
   ============================================================ */

(function (global) {
  "use strict";

  var ctx = null;
  var master = null;
  var musicGain = null;

  var state = {
    sfx:   localStorage.getItem("sfxOn")   !== "0",   // مفعّلة افتراضياً
    music: localStorage.getItem("musicOn") === "1",   // مطفأة افتراضياً
    fun:   localStorage.getItem("funSfxOn") !== "0"   // المؤثرات المرحة مفعّلة افتراضياً
  };

  /* ---------- تهيئة السياق الصوتي (بعد أول تفاعل من المستخدم) ---------- */
  function ensure() {
    if (ctx) {
      if (ctx.state === "suspended") ctx.resume();
      return ctx;
    }
    var AC = global.AudioContext || global.webkitAudioContext;
    if (!AC) return null;
    try {
      ctx = new AC();
      master = ctx.createGain();
      master.gain.value = 0.9;
      master.connect(ctx.destination);

      musicGain = ctx.createGain();
      musicGain.gain.value = 0;
      musicGain.connect(master);
    } catch (e) {
      ctx = null;
    }
    return ctx;
  }

  function now() { return ctx ? ctx.currentTime : 0; }

  /* ---------- لبنة أساسية: نغمة ---------- */
  function tone(opt) {
    if (!state.sfx || !ensure()) return;
    var o = ctx.createOscillator();
    var g = ctx.createGain();
    var t = now() + (opt.delay || 0);
    var dur = opt.dur || 0.18;
    var vol = (opt.vol == null ? 0.18 : opt.vol);

    o.type = opt.type || "sine";
    o.frequency.setValueAtTime(opt.freq, t);
    if (opt.to) o.frequency.exponentialRampToValueAtTime(Math.max(20, opt.to), t + dur);

    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(vol, t + Math.min(0.03, dur * 0.3));
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);

    o.connect(g);
    if (opt.filter) {
      var f = ctx.createBiquadFilter();
      f.type = "lowpass";
      f.frequency.value = opt.filter;
      g.connect(f); f.connect(master);
    } else {
      g.connect(master);
    }
    o.start(t);
    o.stop(t + dur + 0.05);
  }

  /* ---------- ضجيج قصير (وشوشة/صفير) ---------- */
  function noise(opt) {
    if (!state.sfx || !ensure()) return;
    var dur = opt.dur || 0.3;
    var buf = ctx.createBuffer(1, Math.ceil(ctx.sampleRate * dur), ctx.sampleRate);
    var d = buf.getChannelData(0);
    for (var i = 0; i < d.length; i++) d[i] = (Math.random() * 2 - 1);

    var src = ctx.createBufferSource(); src.buffer = buf;
    var f = ctx.createBiquadFilter();
    f.type = "bandpass";
    var t = now() + (opt.delay || 0);
    f.frequency.setValueAtTime(opt.from || 600, t);
    f.frequency.exponentialRampToValueAtTime(opt.toFreq || 3000, t + dur);
    f.Q.value = 1.2;

    var g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(opt.vol == null ? 0.12 : opt.vol, t + 0.04);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);

    src.connect(f); f.connect(g); g.connect(master);
    src.start(t); src.stop(t + dur + 0.05);
  }

  /* ---------- مقطع صوتي بشري مولّد (للضحكة) ----------
     موجة منشارية بنبرة الصوت تمرّ في مرشّحات «مُكوِّنات» تحاكي حرف
     العلّة «آ»، فيخرج صوت يشبه «هاا». */
  function voiced(opt) {
    if (!state.sfx || !ensure()) return;
    var t = now() + (opt.delay || 0);
    var dur = opt.dur;
    var vol = opt.vol == null ? 0.5 : opt.vol;

    var o = ctx.createOscillator();
    o.type = "sawtooth";
    o.frequency.setValueAtTime(opt.f0, t);
    o.frequency.exponentialRampToValueAtTime(Math.max(40, opt.f1 || opt.f0), t + dur);

    if (opt.vib) {
      var lfo = ctx.createOscillator();
      var lfoGain = ctx.createGain();
      lfo.frequency.value = opt.vib.rate;
      lfoGain.gain.value = opt.vib.depth;
      lfo.connect(lfoGain); lfoGain.connect(o.frequency);
      lfo.start(t); lfo.stop(t + dur + 0.05);
    }

    var g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(vol, t + 0.02);
    g.gain.setValueAtTime(vol, t + dur * 0.6);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);

    /* مُكوِّنات حرف «آ»: [التردد، الحدّة Q، الكسب] */
    [[750, 6, 2.2], [1150, 8, 1.4], [2600, 10, 0.5]].forEach(function (fm) {
      var bp = ctx.createBiquadFilter();
      bp.type = "bandpass";
      bp.frequency.value = fm[0];
      bp.Q.value = fm[1];
      var fg = ctx.createGain();
      fg.gain.value = fm[2];
      g.connect(bp); bp.connect(fg); fg.connect(master);
    });
    /* جسم الصوت: مسار منخفض خفيف */
    var body = ctx.createBiquadFilter();
    body.type = "lowpass";
    body.frequency.value = 900;
    var bodyGain = ctx.createGain();
    bodyGain.gain.value = 0.15;
    g.connect(body); body.connect(bodyGain); bodyGain.connect(master);

    o.connect(g);
    o.start(t);
    o.stop(t + dur + 0.05);
  }

  /* ---------- نغمة بوق (للبوق الحزين) ---------- */
  function brass(freq, dur, delay, vib) {
    if (!state.sfx || !ensure()) return;
    var t = now() + (delay || 0);

    var o = ctx.createOscillator();
    o.type = "sawtooth";
    o.frequency.setValueAtTime(freq * 1.03, t);
    o.frequency.exponentialRampToValueAtTime(freq, t + 0.08);
    if (vib) {
      var lfo = ctx.createOscillator();
      var lfoGain = ctx.createGain();
      lfo.frequency.value = 5;
      lfoGain.gain.value = freq * 0.035;
      lfo.connect(lfoGain); lfoGain.connect(o.frequency);
      lfo.start(t + 0.2); lfo.stop(t + dur + 0.05);
    }

    /* «واه»: المرشّح ينفتح ثم ينغلق */
    var lp = ctx.createBiquadFilter();
    lp.type = "lowpass";
    lp.Q.value = 4;
    lp.frequency.setValueAtTime(350, t);
    lp.frequency.exponentialRampToValueAtTime(1600, t + 0.12);
    lp.frequency.exponentialRampToValueAtTime(600, t + dur);

    var g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(0.17, t + 0.05);
    g.gain.setValueAtTime(0.17, t + dur * 0.7);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);

    o.connect(lp); lp.connect(g); g.connect(master);
    o.start(t);
    o.stop(t + dur + 0.05);
  }

  /* ---------- تسجيلات حقيقية (ضحكة/تصفيق) ----------
     ملفات حرّة من ويكيميديا كومنز (ملكية عامة) تُجلب عند الحاجة وتُحفظ في
     الذاكرة؛ وإن تعذّر جلبها (بلا إنترنت) يُستخدم الصوت المولّد بدلاً منها.
     start/dur: المقطع المستخدم من التسجيل بالثواني. */
  var CLIPS = {
    /* «Evil laughter» — stilgar، PDSounds، ملكية عامة */
    laugh: {
      url: "https://upload.wikimedia.org/wikipedia/commons/transcoded/f/fb/Evil_laughter.ogg/Evil_laughter.ogg.mp3",
      start: 0, dur: 3.7, vol: 0.85
    },
    /* «Clapping hurray (cropped)» — Starlite، ملكية عامة */
    applause: {
      url: "https://upload.wikimedia.org/wikipedia/commons/transcoded/1/1b/Clapping_hurray_%28cropped%29.oga/Clapping_hurray_%28cropped%29.oga.mp3",
      start: 0, dur: 4.2, vol: 0.6
    }
  };
  var clipBuf = {};      /* name -> AudioBuffer */
  var clipLoad = {};     /* name -> Promise */

  function loadClip(name) {
    if (clipLoad[name]) return clipLoad[name];
    var AC = global.OfflineAudioContext || global.webkitOfflineAudioContext;
    if (!AC || !global.fetch) return Promise.reject();
    clipLoad[name] = fetch(CLIPS[name].url)
      .then(function (r) { if (!r.ok) throw r.status; return r.arrayBuffer(); })
      .then(function (data) {
        var dec = new AC(1, 1, 44100);
        return new Promise(function (res, rej) { dec.decodeAudioData(data, res, rej); });
      })
      .then(function (buf) { clipBuf[name] = buf; return buf; })
      .catch(function (e) { delete clipLoad[name]; throw e; });
    return clipLoad[name];
  }

  /* يشغّل التسجيل إن كان جاهزاً ويعيد true؛ وإلا يبدأ تحميله ويعيد false */
  function playClip(name, delay) {
    if (!state.sfx || !ensure()) return true;
    var buf = clipBuf[name];
    if (!buf) { loadClip(name).catch(function () {}); return false; }
    var c = CLIPS[name];
    var t = now() + (delay || 0);
    var dur = Math.min(c.dur, buf.duration - c.start);
    var src = ctx.createBufferSource(); src.buffer = buf;
    var g = ctx.createGain();
    var fade = Math.min(0.8, dur * 0.3);
    g.gain.setValueAtTime(c.vol, t);
    g.gain.setValueAtTime(c.vol, t + dur - fade);
    g.gain.linearRampToValueAtTime(0.0001, t + dur);
    src.connect(g); g.connect(master);
    src.start(t, c.start, dur);
    return true;
  }

  function preloadClips() {
    if (!state.sfx || !state.fun) return;
    Object.keys(CLIPS).forEach(function (n) { loadClip(n).catch(function () {}); });
  }

  /* ============ المؤثرات ============ */
  var SFX = {
    /* نقرة زر خفيفة */
    click: function () {
      tone({ freq: 780, to: 620, dur: 0.07, vol: 0.10, type: "triangle" });
    },

    /* اختيار بطاقة — نغمتان صاعدتان */
    select: function () {
      tone({ freq: 660, dur: 0.10, vol: 0.12, type: "sine" });
      tone({ freq: 990, dur: 0.14, vol: 0.10, type: "sine", delay: 0.07 });
    },

    /* إلغاء الاختيار */
    deselect: function () {
      tone({ freq: 520, to: 380, dur: 0.11, vol: 0.09, type: "sine" });
    },

    /* تكتكة المؤقّت في الثواني الأخيرة */
    tick: function (urgent) {
      tone({
        freq: urgent ? 1180 : 900,
        dur: 0.05,
        vol: urgent ? 0.13 : 0.07,
        type: "square",
        filter: 2600
      });
    },

    /* جرس انتهاء الوقت */
    timeUp: function () {
      tone({ freq: 420, to: 130, dur: 0.75, vol: 0.20, type: "sawtooth", filter: 1400 });
      tone({ freq: 210, to: 90,  dur: 0.85, vol: 0.14, type: "square",  filter: 900, delay: 0.05 });
    },

    /* كشف الإجابة */
    reveal: function () {
      noise({ from: 400, toFreq: 4200, dur: 0.35, vol: 0.09 });
      tone({ freq: 620, dur: 0.16, vol: 0.10, type: "sine", delay: 0.10 });
      tone({ freq: 930, dur: 0.22, vol: 0.09, type: "sine", delay: 0.20 });
    },

    /* إجابة صحيحة — أربع نغمات صاعدة */
    correct: function () {
      [523.25, 659.25, 783.99, 1046.5].forEach(function (f, i) {
        tone({ freq: f, dur: 0.22, vol: 0.16, type: "sine", delay: i * 0.085 });
      });
    },

    /* لا أحد أجاب */
    wrong: function () {
      tone({ freq: 300, to: 180, dur: 0.30, vol: 0.15, type: "sawtooth", filter: 1200 });
      tone({ freq: 150, to: 100, dur: 0.36, vol: 0.10, type: "square", filter: 700, delay: 0.06 });
    },

    /* بطاقة جزاء — طرقتان منخفضتان */
    penalty: function () {
      tone({ freq: 190, to: 120, dur: 0.16, vol: 0.18, type: "square", filter: 800 });
      tone({ freq: 160, to: 95,  dur: 0.22, vol: 0.16, type: "square", filter: 700, delay: 0.16 });
    },

    /* ضحكة شريرة مجنونة — تسجيل حقيقي، وإن لم يتوفر فضحكة مولّدة */
    laugh: function () {
      if (!playClip("laugh")) SFX.laughSynth();
    },

    /* الضحكة المولّدة «ها ها ها ها… هاااا» — تتسارع وترتفع ثم تنتهي
       بـ«هاااا» طويلة نازلة مرتعشة. */
    laughSynth: function () {
      var syl = [
        [230, 0.14], [260, 0.13], [290, 0.12], [315, 0.11],
        [330, 0.10], [340, 0.10], [320, 0.11], [300, 0.12]
      ];
      var t = 0;
      syl.forEach(function (s, i) {
        noise({ from: 1400, toFreq: 2000, dur: 0.05, vol: 0.05, delay: t });      /* «هـ» */
        voiced({ f0: s[0], f1: s[0] * 0.84, dur: s[1], vol: 0.3, delay: t + 0.03 });
        t += 0.03 + s[1] + (i < 4 ? 0.07 : 0.05);                                   /* تتسارع */
      });
      noise({ from: 1400, toFreq: 2000, dur: 0.06, vol: 0.05, delay: t });
      voiced({ f0: 360, f1: 165, dur: 0.85, vol: 0.33, delay: t + 0.04, vib: { rate: 7, depth: 14 } });
    },

    /* تصفيق وهتاف — تسجيل حقيقي، وإن لم يتوفر فتصفيق مولّد */
    applause: function (delay) {
      if (!playClip("applause", delay == null ? 0.25 : delay)) SFX.applauseSynth();
    },

    /* التصفيق المولّد — نقرات ضجيج متفرقة تخفت تدريجياً */
    applauseSynth: function () {
      for (var i = 0; i < 46; i++) {
        var p = Math.random();
        noise({
          from: 1300 + Math.random() * 1500,
          toFreq: 2400 + Math.random() * 2400,
          dur: 0.04 + Math.random() * 0.04,
          vol: 0.26 * (1 - p * 0.7),
          delay: 0.25 + p * p * 1.5
        });
      }
    },

    /* بوق حزين «واه واه واه واااه» */
    sadTrombone: function () {
      brass(293.66, 0.36, 0);
      brass(277.18, 0.36, 0.40);
      brass(261.63, 0.36, 0.80);
      brass(246.94, 1.15, 1.20, true);
    },

    /* إجابة صحيحة في اللعبة: نغمة النجاح + تصفيق (إن كانت المرحة مفعّلة) */
    correctAnswer: function () {
      SFX.correct();
      if (state.fun) SFX.applause();
    },

    /* لا أحد أجاب في اللعبة */
    wrongAnswer: function () {
      SFX.wrong();
    },

    /* «اسرق الدور» — الخصم سرق السؤال: الضحكة، أو صوت تبديل الدور الكلاسيكي */
    stealTurn: function () {
      state.fun ? SFX.laugh() : SFX.turn();
    },

    /* بطاقة جزاء من المقدّم: البوق الحزين، أو الطرقتان الكلاسيكيتان */
    penaltyCard: function () {
      state.fun ? SFX.sadTrombone() : SFX.penalty();
    },

    /* رنّة عملات */
    coin: function () {
      [1046.5, 1318.5, 1568].forEach(function (f, i) {
        tone({ freq: f, dur: 0.18, vol: 0.13, type: "triangle", delay: i * 0.06 });
      });
    },

    /* تبديل الدور */
    turn: function () {
      tone({ freq: 500, to: 760, dur: 0.16, vol: 0.11, type: "triangle" });
    },

    /* فانفير الفوز */
    win: function () {
      var mel = [523.25, 659.25, 783.99, 1046.5, 783.99, 1046.5, 1318.5];
      mel.forEach(function (f, i) {
        tone({ freq: f, dur: 0.30, vol: 0.16, type: "triangle", delay: i * 0.13 });
        tone({ freq: f / 2, dur: 0.30, vol: 0.07, type: "sine", delay: i * 0.13 });
      });
      noise({ from: 800, toFreq: 6000, dur: 0.5, vol: 0.07, delay: 0.05 });
    },

    /* تعادل */
    draw: function () {
      [523.25, 493.88, 523.25].forEach(function (f, i) {
        tone({ freq: f, dur: 0.26, vol: 0.13, type: "sine", delay: i * 0.16 });
      });
    }
  };

  /* ============ الموسيقى الخلفية ============ */
  /* عدة مقطوعات مولّدة (بلا ملفات) يختار اللاعب إحداها من الإعدادات، أو
     «عشوائي» فتُختار واحدة في كل جلسة. كل مقطوعة: سرعة الخطوة، عدد الخطوات
     في المازورة، ودالة play تجدول نغمات الخطوة. */
  var music = (function () {
    var timer = null;
    var clipTimer = null;   /* مؤقّت أغنية مقطع الهدف (clip) */
    var step = 0;
    var nextTime = 0;
    var bus = null;                   /* مسار المقطوعة الحالية (يُخفَت عند التبديل) */
    var noiseBuf = null;
    var current = null;               /* المقطوعة التي تعمل الآن */

    function midi(n) { return 440 * Math.pow(2, (n - 69) / 12); }

    /* نغمة عامة: نقر (يخفت بسرعة) أو باد (دخول وخروج ناعمان) */
    function mNote(o) {
      var t = o.t, dur = o.dur, a = o.attack || 0.01, vol = o.vol;
      var osc = ctx.createOscillator();
      osc.type = o.type || "sine";
      osc.frequency.setValueAtTime(o.f, t);
      if (o.to) osc.frequency.exponentialRampToValueAtTime(o.to, t + (o.glide || dur));
      if (o.vib) {
        var lfo = ctx.createOscillator(), lg = ctx.createGain();
        lfo.frequency.value = o.vib[0]; lg.gain.value = o.vib[1];
        lfo.connect(lg); lg.connect(osc.frequency);
        lfo.start(t); lfo.stop(t + dur + 0.05);
      }
      var g = ctx.createGain();
      g.gain.setValueAtTime(0.0001, t);
      if (o.pad) {
        var rel = Math.min(o.release || a, dur * 0.5);
        g.gain.linearRampToValueAtTime(vol, t + Math.min(a, dur - rel));
        g.gain.setValueAtTime(vol, t + dur - rel);
        g.gain.linearRampToValueAtTime(0.0001, t + dur);
      } else {
        g.gain.exponentialRampToValueAtTime(vol, t + a);
        g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
      }
      osc.connect(g);
      var out = g;
      if (o.filter) {
        var f = ctx.createBiquadFilter();
        f.type = "lowpass"; f.frequency.value = o.filter; f.Q.value = o.q || 0.7;
        g.connect(f); out = f;
      }
      out.connect(bus);
      osc.start(t); osc.stop(t + dur + 0.05);
    }

    /* ضجيج مرشّح قصير (صنج/طبلة) */
    function mNoise(o) {
      if (!noiseBuf) {
        noiseBuf = ctx.createBuffer(1, ctx.sampleRate, ctx.sampleRate);
        var d = noiseBuf.getChannelData(0);
        for (var i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
      }
      var src = ctx.createBufferSource(); src.buffer = noiseBuf;
      var f = ctx.createBiquadFilter();
      f.type = o.kind || "highpass"; f.frequency.value = o.freq; f.Q.value = o.q || 0.8;
      var g = ctx.createGain();
      g.gain.setValueAtTime(o.vol, o.t);
      g.gain.exponentialRampToValueAtTime(0.0001, o.t + o.dur);
      src.connect(f); f.connect(g); g.connect(bus);
      src.start(o.t, Math.random() * 0.5, o.dur + 0.05);
    }

    /* الإيقاع */
    function kick(t, v)  { mNote({ t: t, f: 150, to: 45, glide: 0.12, dur: 0.3, vol: v, attack: 0.003 }); }
    function hat(t, v, d) { mNoise({ t: t, freq: 7000, dur: d || 0.04, vol: v }); }
    function clap(t, v)  {
      mNoise({ t: t, kind: "bandpass", freq: 1800, dur: 0.14, vol: v });
      mNote({ t: t, f: 190, type: "triangle", dur: 0.08, vol: v * 0.4, attack: 0.003 });
    }
    function doum(t, v)  { mNote({ t: t, f: 105, to: 62, glide: 0.2, dur: 0.38, vol: v, attack: 0.004 }); }
    function tak(t, v)   {
      mNoise({ t: t, kind: "bandpass", freq: 3200, q: 1.5, dur: 0.06, vol: v });
      mNote({ t: t, f: 720, to: 520, dur: 0.05, type: "triangle", vol: v * 0.4, attack: 0.002 });
    }

    /* ---------- المقطوعات ---------- */
    var TRACKS = [
      { id: "calm", name: "هدوء", emoji: "🌙", dt: 0.42, steps: 8, gain: 1,
        play: function (s, t, dt) {
          var SCALE = [220, 261.63, 293.66, 329.63, 392, 440, 523.25, 587.33];
          var PATTERN = [0, 2, 4, 6, 4, 2, 3, 5];
          var f = SCALE[PATTERN[s]];
          mNote({ t: t, f: f, type: "triangle", dur: 0.55, vol: 0.09, attack: 0.03 });
          if (s === 0) {
            mNote({ t: t, f: f / 2, type: "triangle", dur: 0.55, vol: 0.09, attack: 0.03 });
            [110, 164.81, 220].forEach(function (p, i) {
              mNote({ t: t, f: p, dur: dt * 8 + 0.3, vol: i === 0 ? 0.035 : 0.018,
                      attack: 0.4, release: 0.4, pad: true, filter: 700 });
            });
          }
        } },

      { id: "oriental", name: "شرقي", emoji: "🪘", dt: 0.3, steps: 8, gain: 0.85,
        /* إيقاع المقسوم: دُم تَك – تَك دُم – تَك – ، ولحن «عود» على مقام الحجاز */
        play: function (s, t, dt, bar) {
          var RHY = ["D", "T", 0, "T", "D", 0, "T", 0];
          if (RHY[s] === "D") doum(t, 0.22);
          if (RHY[s] === "T") tak(t, 0.09);
          var MEL = [
            [69, 70, 69, 66, 67, 66, 63, 62],
            [62, 63, 66, 67, 69, 0, 70, 69],
            [72, 70, 69, 67, 69, 70, 69, 0],
            [67, 66, 63, 66, 62, 0, 0, 0]
          ];
          var n = MEL[bar % 4][s];
          if (n) mNote({ t: t, f: midi(n), type: "sawtooth", dur: 0.38, vol: 0.05, attack: 0.004, filter: 1700 });
          if (s === 0) mNote({ t: t, f: midi(38), dur: dt * 8 + 0.2, vol: 0.05, attack: 0.3, release: 0.3, pad: true });
        } },

      { id: "gameshow", name: "حماس", emoji: "⚡", dt: 60 / 128 / 4, steps: 16, gain: 1,
        /* إيقاع راقص سريع: C – Am – F – G */
        play: function (s, t, dt, bar) {
          var ROOT = [36, 33, 29, 31][bar % 4];
          var CH = [[60, 64, 67, 72], [57, 60, 64, 69], [53, 57, 60, 65], [55, 59, 62, 67]][bar % 4];
          if (s % 4 === 0) kick(t, 0.24);
          if (s % 4 === 2) hat(t, 0.05, 0.09);
          if (s === 4 || s === 12) clap(t, 0.09);
          if ([0, 3, 6, 8, 11, 14].indexOf(s) >= 0)
            mNote({ t: t, f: midi(ROOT + (s === 6 || s === 14 ? 12 : 0)), type: "square", dur: 0.16, vol: 0.06, attack: 0.005, filter: 420 });
          mNote({ t: t, f: midi(CH[s % 4] + 12), type: "triangle", dur: 0.11, vol: 0.04, attack: 0.004 });
        } },

      { id: "suspense", name: "تشويق", emoji: "🕵️", dt: 60 / 90 / 4, steps: 16, gain: 1.8,
        /* نبض منخفض ونبضة قلب وتكتكة */
        play: function (s, t, dt, bar) {
          var ROOT = [38, 38, 39, 37][bar % 4];
          if (s % 2 === 0) mNote({ t: t, f: midi(ROOT), type: "sawtooth", dur: 0.16, vol: 0.07, attack: 0.005, filter: 320 });
          if (s === 0) kick(t, 0.22);
          if (s === 3) kick(t, 0.14);
          if (s === 4 || s === 12) mNote({ t: t, f: 2000, type: "square", dur: 0.03, vol: 0.02, attack: 0.002, filter: 4000 });
          if (s === 0 && bar % 2 === 0) {
            mNote({ t: t, f: midi(74), dur: dt * 32, vol: 0.012, attack: 1.2, release: 1.2, pad: true, vib: [0.3, 3] });
            mNote({ t: t, f: midi(75), dur: dt * 32, vol: 0.009, attack: 1.8, release: 1.2, pad: true });
          }
        } },

      { id: "arcade", name: "أركيد", emoji: "👾", dt: 60 / 140 / 4, steps: 16, gain: 2.2,
        /* ألعاب الفيديو القديمة ٨-بت */
        play: function (s, t, dt, bar) {
          var MEL = [
            [72, 0, 76, 0, 79, 0, 76, 0, 81, 0, 79, 0, 76, 0, 74, 0],
            [72, 0, 74, 0, 76, 0, 72, 0, 67, 0, 0, 0, 67, 0, 0, 0],
            [69, 0, 72, 0, 76, 0, 72, 0, 77, 0, 76, 0, 74, 0, 72, 0],
            [71, 0, 74, 0, 79, 0, 77, 0, 76, 0, 74, 0, 72, 0, 0, 0]
          ];
          var ROOT = [36, 33, 29, 31][bar % 4];
          var n = MEL[bar % 4][s];
          if (n) mNote({ t: t, f: midi(n), type: "square", dur: dt * 1.8, vol: 0.03, attack: 0.004, filter: 3200 });
          if (s % 4 === 0) mNote({ t: t, f: midi(ROOT + (s % 8 ? 12 : 0) + 12), type: "triangle", dur: 0.18, vol: 0.1, attack: 0.004 });
          if (s % 2 === 0) hat(t, s % 4 === 2 ? 0.04 : 0.02, 0.03);
        } },

      { id: "lounge", name: "جاز", emoji: "🎷", dt: 60 / 84 / 2, steps: 8, gain: 1.8,
        /* لاونج جاز متأرجح: Dm7 – G7 – Cmaj7 – A7 */
        play: function (s, t, dt, bar) {
          if (s % 2 === 1) t += dt * 0.33;                        /* التأرجح */
          var b = bar % 4;
          var CH = [[65, 69, 72, 76], [65, 69, 71, 76], [64, 67, 71, 74], [61, 64, 67, 73]][b];
          var BASS = [[38, 41, 45, 42], [43, 47, 50, 49], [36, 40, 43, 44], [45, 49, 52, 39]][b];
          if (s === 0 || s === 5) CH.forEach(function (n) {
            mNote({ t: t, f: midi(n), dur: s === 0 ? 1.3 : 0.5, vol: 0.022, attack: 0.01 });
            mNote({ t: t, f: midi(n + 12), type: "triangle", dur: s === 0 ? 0.6 : 0.3, vol: 0.006, attack: 0.01 });
          });
          if (s % 2 === 0) mNote({ t: t, f: midi(BASS[s / 2]), type: "triangle", dur: 0.5, vol: 0.13, attack: 0.01, filter: 600 });
          if (s % 2 === 0 || s === 3 || s === 7) hat(t, 0.02, s % 2 ? 0.05 : 0.09);
        } },

      { id: "desert", name: "صحراء", emoji: "🐪", dt: 0.43, steps: 8, gain: 0.8,
        /* ليالي الصحراء: ناي طويل النغمات فوق قرار ودفّ هادئ */
        play: function (s, t, dt, bar) {
          var MEL = [
            [[0, 69, 3], [3, 70, 1], [4, 69, 2], [6, 66, 2]],
            [[0, 67, 4], [4, 66, 2], [6, 63, 2]],
            [[0, 62, 3], [3, 63, 1], [4, 66, 2], [6, 67, 2]],
            [[0, 69, 7]]
          ][bar % 4];
          MEL.forEach(function (m) {
            if (m[0] !== s) return;
            var d = m[2] * dt;
            mNote({ t: t, f: midi(m[1]), dur: d + 0.1, vol: 0.05, attack: 0.08, release: 0.15, pad: true, vib: [5, 4] });
            mNoise({ t: t, kind: "bandpass", freq: midi(m[1]) * 2, q: 6, dur: Math.min(0.5, d), vol: 0.02 });
          });
          if (s === 0) [50, 57].forEach(function (n) {
            mNote({ t: t, f: midi(n), dur: dt * 8 + 0.3, vol: 0.03, attack: 0.6, release: 0.6, pad: true, filter: 500 });
          });
          if (s === 0 || s === 5) doum(t, 0.13);
          if (s === 3 || s === 6) tak(t, 0.04);
        } }
    ];

    function byId(id) {
      for (var i = 0; i < TRACKS.length; i++) if (TRACKS[i].id === id) return TRACKS[i];
      return null;
    }

    /* الاختيار المحفوظ: معرّف مقطوعة أو "random" */
    function chosen() { return localStorage.getItem("musicTrack") || "calm"; }

    /* المقطوعة الفعلية: في «عشوائي» تُختار مرة لكل جلسة */
    function resolve() {
      var c = chosen();
      if (c !== "random") return byId(c) || TRACKS[0];
      var pick = null;
      try { pick = byId(sessionStorage.getItem("musicRandomPick")); } catch (e) {}
      if (!pick) {
        pick = TRACKS[Math.floor(Math.random() * TRACKS.length)];
        try { sessionStorage.setItem("musicRandomPick", pick.id); } catch (e) {}
      }
      return pick;
    }

    function newBus() {
      if (bus) {
        var old = bus;
        old.gain.setValueAtTime(old.gain.value, now());
        old.gain.linearRampToValueAtTime(0.0001, now() + 0.35);
        setTimeout(function () { try { old.disconnect(); } catch (e) {} }, 1500);
      }
      bus = ctx.createGain();
      bus.gain.value = current ? current.gain : 1;
      bus.connect(musicGain);
    }

    function schedule() {
      if (!ctx || !current) return;
      while (nextTime < ctx.currentTime + 0.6) {
        current.play(step % current.steps, nextTime, current.dt, Math.floor(step / current.steps));
        nextTime += current.dt;
        step++;
      }
    }

    function begin(track) {
      current = track;
      newBus();
      step = 0;
      nextTime = ctx.currentTime + 0.1;
      schedule();
      if (!timer) timer = setInterval(schedule, 200);
    }

    return {
      start: function () {
        if (!ensure()) return;
        state.music = true;
        localStorage.setItem("musicOn", "1");
        musicGain.gain.cancelScheduledValues(now());
        musicGain.gain.setValueAtTime(Math.max(0.0001, musicGain.gain.value), now());
        musicGain.gain.exponentialRampToValueAtTime(0.16, now() + 1.2);
        var tr = resolve();
        if (!timer || current !== tr) begin(tr);
        updateControls();
      },
      stop: function () {
        state.music = false;
        localStorage.setItem("musicOn", "0");
        if (ctx && musicGain) {
          musicGain.gain.cancelScheduledValues(now());
          musicGain.gain.setValueAtTime(Math.max(0.0001, musicGain.gain.value), now());
          musicGain.gain.exponentialRampToValueAtTime(0.0001, now() + 0.6);
        }
        if (timer) { clearInterval(timer); timer = null; }
        current = null;
        updateControls();
      },
      toggle: function () { state.music ? music.stop() : music.start(); },
      get on() { return state.music; },

      /* أغنية مقطع الهدف: تُشغَّل مع الفيديو الصامت (بلا تعليق) مدة sec ثانية
         ثم تخفت — لا تغيّر إعداد الموسيقى المحفوظ (musicOn) */
      clip: function (sec, id) {
        if (!ensure()) return;
        clearTimeout(clipTimer);
        musicGain.gain.cancelScheduledValues(now());
        musicGain.gain.setValueAtTime(Math.max(0.0001, musicGain.gain.value), now());
        musicGain.gain.exponentialRampToValueAtTime(0.3, now() + 0.4);
        begin(byId(id || "gameshow") || TRACKS[0]);
        clipTimer = setTimeout(function () { music.endClip(); }, Math.max(1, sec || 20) * 1000);
      },
      endClip: function () {
        clearTimeout(clipTimer);
        if (!ctx || !musicGain) return;
        musicGain.gain.cancelScheduledValues(now());
        musicGain.gain.setValueAtTime(Math.max(0.0001, musicGain.gain.value), now());
        musicGain.gain.exponentialRampToValueAtTime(0.0001, now() + 0.8);
        setTimeout(function () {
          if (timer) { clearInterval(timer); timer = null; }
          current = null;
        }, 850);
      },

      /* قائمة المقطوعات للواجهة */
      tracks: TRACKS.map(function (t) { return { id: t.id, name: t.name, emoji: t.emoji }; }),
      /* الاختيار المحفوظ ("random" أو معرّف) */
      get track() { return chosen(); },
      /* المقطوعة التي تعمل الآن (أو ستعمل) */
      get playing() { return (current || resolve()).id; },
      /* تغيير المقطوعة وتشغيلها فوراً */
      setTrack: function (id) {
        if (id !== "random" && !byId(id)) return;
        localStorage.setItem("musicTrack", id);
        if (id === "random") {
          var prev = current ? current.id : null, pick;
          do { pick = TRACKS[Math.floor(Math.random() * TRACKS.length)]; } while (pick.id === prev);
          try { sessionStorage.setItem("musicRandomPick", pick.id); } catch (e) {}
        }
        if (state.music && timer && ensure()) begin(resolve());
        else music.start();
      }
    };
  })();

  SFX.music = music;

  /* ============ التحكم بالمؤثرات ============ */
  SFX.setSfx = function (on) {
    state.sfx = !!on;
    localStorage.setItem("sfxOn", on ? "1" : "0");
    if (on) { ensure(); SFX.click(); }
    updateControls();
  };
  SFX.toggleSfx = function () { SFX.setSfx(!state.sfx); };
  Object.defineProperty(SFX, "sfxOn", { get: function () { return state.sfx; } });

  /* المؤثرات المرحة (ضحكة/تصفيق/بوق حزين) */
  SFX.setFun = function (on) {
    state.fun = !!on;
    localStorage.setItem("funSfxOn", on ? "1" : "0");
    preloadClips();
  };
  SFX.preloadClips = preloadClips;
  Object.defineProperty(SFX, "funOn", { get: function () { return state.fun; } });

  /* ============ أزرار التحكم في الصفحة ============ */
  function updateControls() {
    var s = document.getElementById("sfxBtn");
    var m = document.getElementById("musicBtn");
    if (s) {
      s.classList.toggle("off", !state.sfx);
      s.title = state.sfx ? "إيقاف المؤثرات الصوتية" : "تشغيل المؤثرات الصوتية";
      s.innerHTML = '<i class="fa-solid ' + (state.sfx ? "fa-volume-high" : "fa-volume-xmark") + '"></i>';
    }
    if (m) {
      m.classList.toggle("off", !state.music);
      m.title = state.music ? "إيقاف الموسيقى" : "تشغيل الموسيقى";
      m.innerHTML = '<i class="fa-solid ' + (state.music ? "fa-music" : "fa-music") + '"></i>';
    }
  }

  SFX.mountControls = function (opts) {
    opts = opts || {};
    if (document.getElementById("sfxControls")) return;

    var css = document.createElement("style");
    css.textContent =
      '#sfxControls{position:fixed;bottom:18px;right:18px;z-index:900;display:flex;gap:8px;}' +
      '#sfxControls button{width:44px;height:44px;border-radius:50%;border:1px solid rgba(231,183,64,.35);' +
      'background:linear-gradient(150deg,rgba(21,74,65,.85),rgba(4,18,15,.9));color:#f7dd9c;' +
      'font-size:16px;cursor:pointer;display:flex;align-items:center;justify-content:center;' +
      'backdrop-filter:blur(10px);box-shadow:0 10px 26px rgba(0,0,0,.45);' +
      'transition:transform .18s ease,border-color .18s ease,color .18s ease,opacity .18s ease;}' +
      '#sfxControls button:hover{transform:translateY(-3px);border-color:rgba(231,183,64,.75);}' +
      '#sfxControls button.off{color:#7f9d97;opacity:.65;}' +
      '#sfxControls button.off::after{content:"";position:absolute;width:26px;height:2px;background:currentColor;' +
      'transform:rotate(-45deg);border-radius:2px;}' +
      '#sfxControls button{position:relative;}' +
      '@media (max-width:600px){#sfxControls{bottom:12px;right:12px;}' +
      '#sfxControls button{width:40px;height:40px;font-size:14px;}}';
    document.head.appendChild(css);

    var box = document.createElement("div");
    box.id = "sfxControls";
    box.innerHTML =
      '<button id="sfxBtn" type="button" aria-label="المؤثرات الصوتية"></button>' +
      (opts.music === false ? "" : '<button id="musicBtn" type="button" aria-label="الموسيقى"></button>');
    document.body.appendChild(box);

    document.getElementById("sfxBtn").addEventListener("click", function () { SFX.toggleSfx(); });
    var mb = document.getElementById("musicBtn");
    if (mb) mb.addEventListener("click", function () { SFX.music.toggle(); });

    updateControls();

    /* تشغيل الموسيقى إذا كانت مفعّلة: فوراً إن سمح المتصفح (كالعودة للوحة
       بعد السؤال)، وإلا بعد أول تفاعل (سياسة المتصفحات) */
    if (opts.music !== false && state.music) {
      SFX.music.start();
      var kick = function () {
        SFX.music.start();
        document.removeEventListener("pointerdown", kick);
        document.removeEventListener("keydown", kick);
      };
      document.addEventListener("pointerdown", kick, { once: true });
      document.addEventListener("keydown", kick, { once: true });
    }
  };

  /* فتح السياق الصوتي عند أول تفاعل */
  document.addEventListener("pointerdown", function once() {
    ensure();
    document.removeEventListener("pointerdown", once);
  }, { once: true });

  /* تجهيز الضحكة والتصفيق مسبقاً لتُسمع فوراً وقت الحاجة */
  preloadClips();

  global.SFX = SFX;
})(window);
