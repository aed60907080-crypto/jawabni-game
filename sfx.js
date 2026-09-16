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
     SFX.wrongAnswer()    لا أحد أجاب: الضحكة (أو صوت الخطأ الكلاسيكي)
     SFX.penaltyCard()    بطاقة جزاء: البوق الحزين (أو الطرقتان الكلاسيكيتان)

     SFX.music.toggle()   تشغيل/إيقاف الموسيقى الخلفية
     SFX.mountControls()  يضيف أزرار الصوت والموسيقى للصفحة

   الإعدادات تُحفظ في localStorage:
     sfxOn   ("1" | "0")   المؤثرات
     musicOn ("1" | "0")   الموسيقى الخلفية
     funSfxOn ("1" | "0")  المؤثرات المرحة (مفعّلة افتراضياً)
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

    /* لا أحد أجاب في اللعبة: الضحكة، أو صوت الخطأ الكلاسيكي */
    wrongAnswer: function () {
      state.fun ? SFX.laugh() : SFX.wrong();
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
  /* حلقة هادئة مولّدة: باد + أربيجيو على سلّم خماسي */
  var music = (function () {
    var timer = null;
    var step = 0;
    var nextTime = 0;
    var TEMPO = 0.42;                 // ثانية لكل خطوة
    var SCALE = [220, 261.63, 293.66, 329.63, 392, 440, 523.25, 587.33];
    var PATTERN = [0, 2, 4, 6, 4, 2, 3, 5];
    var pad = null, padGain = null;

    function startPad() {
      if (pad) return;
      pad = [];
      padGain = ctx.createGain();
      padGain.gain.value = 0.35;
      var flt = ctx.createBiquadFilter();
      flt.type = "lowpass"; flt.frequency.value = 700;
      padGain.connect(flt); flt.connect(musicGain);

      [110, 164.81, 220].forEach(function (f, i) {
        var o = ctx.createOscillator();
        o.type = "sine";
        o.frequency.value = f;
        var g = ctx.createGain();
        g.gain.value = i === 0 ? 0.10 : 0.05;
        o.connect(g); g.connect(padGain);
        o.start();
        pad.push(o);
      });
    }

    function stopPad() {
      if (!pad) return;
      pad.forEach(function (o) { try { o.stop(); } catch (e) {} });
      pad = null;
    }

    function note(freq, t) {
      var o = ctx.createOscillator();
      var g = ctx.createGain();
      o.type = "triangle";
      o.frequency.value = freq;
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(0.09, t + 0.03);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 0.55);
      o.connect(g); g.connect(musicGain);
      o.start(t); o.stop(t + 0.6);
    }

    function schedule() {
      if (!ctx) return;
      while (nextTime < ctx.currentTime + 0.6) {
        var idx = PATTERN[step % PATTERN.length];
        note(SCALE[idx], nextTime);
        if (step % 8 === 0) note(SCALE[idx] / 2, nextTime);
        nextTime += TEMPO;
        step++;
      }
    }

    return {
      start: function () {
        if (!ensure()) return;
        state.music = true;
        localStorage.setItem("musicOn", "1");
        startPad();
        musicGain.gain.cancelScheduledValues(now());
        musicGain.gain.setValueAtTime(Math.max(0.0001, musicGain.gain.value), now());
        musicGain.gain.exponentialRampToValueAtTime(0.16, now() + 1.2);
        if (!timer) {
          nextTime = ctx.currentTime + 0.1;
          schedule();
          timer = setInterval(schedule, 250);
        }
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
        setTimeout(stopPad, 800);
        updateControls();
      },
      toggle: function () { state.music ? music.stop() : music.start(); },
      get on() { return state.music; }
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

    /* تشغيل الموسيقى بعد أول تفاعل إذا كانت مفعّلة (سياسة المتصفحات) */
    if (opts.music !== false && state.music) {
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
