/* ============================================================
   جاوبني — بطاقة الآية (فئة «أكمل الآية الكريمة»)
   ------------------------------------------------------------
   ترسم صفحة على هيئة صفحة مصحف: خلفية كحلية، وإطار مزخرف
   يحمل اسم السورة، والآية بخطّ قرآني، وفي آخرها مربّع أزرق
   ونقاط مكان الموضع المطلوب إكماله، ورقم الآية في وردة.

   الاستعمال:
     AyahCard.make({ text: "نص الآية", sura: "البقرة", aya: 2,
                     basmala: true })
       → Promise يُرجع data:image/png

   النص يأتي من بنك الأسئلة كما هو (مجلوب من المصحف العثماني)،
   وهذا الملف لا يغيّر فيه حرفاً — يرسمه فقط.
   ============================================================ */

(function (global) {
  "use strict";

  var W = 900;                 /* عرض البطاقة بالبكسل */
  var PAD = 56;                /* هامش جانبي */
  var FONT = '"Amiri Quran","Amiri","Traditional Arabic","Scheherazade New",serif';

  var INK      = "#07102f";    /* الكحلي الغامق — أرضية الصفحة */
  var LINE     = "#2f6fd0";    /* أزرق الإطار */
  var LINE_2   = "#7fb2f2";    /* أزرق فاتح للخط الداخلي */
  var TEXT     = "#eef4ff";    /* بياض النص */
  var GOLD     = "#e7b740";

  /* ---------- تحميل الخط القرآني مرّة واحدة ---------- */
  var fontReady = null;
  function ensureFont() {
    if (fontReady) return fontReady;
    fontReady = new Promise(function (done) {
      try {
        if (!document.getElementById("amiriQuranFont")) {
          var l = document.createElement("link");
          l.id = "amiriQuranFont";
          l.rel = "stylesheet";
          l.href = "https://fonts.googleapis.com/css2?family=Amiri+Quran&family=Amiri:wght@400;700&display=swap";
          document.head.appendChild(l);
        }
        if (!document.fonts || !document.fonts.load) return done();
        /* ننتظر الخط، وإن تأخّر رسمنا بالخط الاحتياطي بدل أن نُعلّق البطاقة */
        var wait = Promise.all([
          document.fonts.load('64px "Amiri Quran"'),
          document.fonts.load('700 34px "Amiri"')
        ]);
        var cap = new Promise(function (r) { setTimeout(r, 2500); });
        Promise.race([wait, cap]).then(function () { done(); }, function () { done(); });
      } catch (e) { done(); }
    });
    return fontReady;
  }

  /* ---------- أرقام هندية ---------- */
  function ar(n) {
    return String(n).replace(/\d/g, function (d) { return "٠١٢٣٤٥٦٧٨٩"[d]; });
  }

  /* ---------- لفّ النص على أسطر بعرض متاح ---------- */
  function wrap(ctx, text, max) {
    var words = text.split(/\s+/).filter(Boolean);
    var lines = [], cur = "";
    for (var i = 0; i < words.length; i++) {
      var next = cur ? cur + " " + words[i] : words[i];
      if (cur && ctx.measureText(next).width > max) { lines.push(cur); cur = words[i]; }
      else cur = next;
    }
    if (cur) lines.push(cur);
    return lines;
  }

  /* ---------- مستطيل بزوايا دائرية ---------- */
  function rrect(ctx, x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y,     x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x,     y + h, r);
    ctx.arcTo(x,     y + h, x,     y,     r);
    ctx.arcTo(x,     y,     x + w, y,     r);
    ctx.closePath();
  }

  /* ---------- معيّنات صغيرة تزيّن شريط العنوان ---------- */
  function diamond(ctx, cx, cy, r, fill) {
    ctx.beginPath();
    ctx.moveTo(cx, cy - r); ctx.lineTo(cx + r, cy);
    ctx.lineTo(cx, cy + r); ctx.lineTo(cx - r, cy);
    ctx.closePath();
    ctx.fillStyle = fill; ctx.fill();
  }

  /* ---------- وردة رقم الآية ---------- */
  function rosette(ctx, cx, cy, r, label) {
    ctx.save();
    /* وردة ذات ستّة عشر رأساً — أقرب إلى وردة فواصل الآيات في المصحف */
    ctx.beginPath();
    for (var i = 0; i < 16; i++) {
      var a = (Math.PI / 8) * i;
      var p = (i % 2 === 0) ? r : r * 0.82;
      var x = cx + Math.cos(a) * p, y = cy + Math.sin(a) * p;
      if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.fillStyle = "#12245e";
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = LINE_2;
    ctx.stroke();
    ctx.fillStyle = GOLD;
    ctx.font = '700 ' + Math.round(r * 0.78) + 'px ' + FONT;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(label, cx, cy + 1);
    ctx.restore();
  }

  /* ---------- البطاقة ---------- */
  /* البسملة ترد في المصحف العثماني بأكثر من صورة (منها «بِّسْمِ» بشدّة)،
     فنتعرّف عليها بعد تجريد الحركات حتى لا تُرسم مرّتين لو بقيت في النص */
  var DIAC = /[ً-ٰٟۖ-ۭـ]/g;
  function bare(s) {
    return s.replace(DIAC, "").replace(/ٱ/g, "ا").replace(/\s+/g, " ").trim();
  }
  function stripBasmala(text) {
    var TARGET = "بسم الله الرحمن الرحيم";
    if (bare(text).indexOf(TARGET) !== 0) return { text: text, had: false };
    for (var k = 1; k <= text.length; k++) {
      if (bare(text.slice(0, k)) === TARGET) {
        var rest = text.slice(k).replace(/^(?:[ً-ٰٟۖ-ۭ]|\s)+/, "");
        return rest ? { text: rest, had: true } : { text: text, had: false };
      }
    }
    return { text: text, had: false };
  }

  function draw(o) {
    var sura    = String(o.sura || "").trim();
    var aya     = o.aya;
    var cut     = stripBasmala(String(o.text || "").trim());
    var text    = cut.text;
    var basmala = !!o.basmala || cut.had;

    var probe = document.createElement("canvas").getContext("2d");
    var SIZE = 60;
    probe.font = SIZE + 'px ' + FONT;
    var maxW = W - PAD * 2 - 40;
    var lines = wrap(probe, text, maxW);
    /* النص الطويل يصغر خطّه حتى لا تطول الصفحة */
    while (lines.length > 5 && SIZE > 36) {
      SIZE -= 6;
      probe.font = SIZE + 'px ' + FONT;
      lines = wrap(probe, text, maxW);
    }

    var LH      = Math.round(SIZE * 1.85);          /* ارتفاع السطر */
    var headH   = 108;                              /* شريط اسم السورة */
    var basH    = basmala ? Math.round(SIZE * 1.7) : 0;
    var blankH  = Math.round(SIZE * 1.6);           /* سطر الفراغ */
    var topGap  = 46, midGap = 30, botGap = 46;
    var H = topGap + headH + midGap + basH + lines.length * LH + blankH + botGap;

    var dpr = Math.min(2, global.devicePixelRatio || 1);
    var cv = document.createElement("canvas");
    cv.width = Math.round(W * dpr);
    cv.height = Math.round(H * dpr);
    var ctx = cv.getContext("2d");
    ctx.scale(dpr, dpr);

    /* أرضية كحلية مع تدرّج خفيف */
    var g = ctx.createLinearGradient(0, 0, 0, H);
    g.addColorStop(0, "#0b1440");
    g.addColorStop(0.5, INK);
    g.addColorStop(1, "#0a1338");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, W, H);

    /* إطار الصفحة */
    ctx.strokeStyle = "rgba(127,178,242,.45)";
    ctx.lineWidth = 2;
    rrect(ctx, 14, 14, W - 28, H - 28, 16); ctx.stroke();
    ctx.strokeStyle = "rgba(47,111,208,.75)";
    ctx.lineWidth = 5;
    rrect(ctx, 22, 22, W - 44, H - 44, 12); ctx.stroke();

    /* شريط اسم السورة */
    var hx = PAD, hy = topGap, hw = W - PAD * 2, hh = headH;
    var hg = ctx.createLinearGradient(hx, hy, hx, hy + hh);
    hg.addColorStop(0, "#15306f");
    hg.addColorStop(1, "#0e1f4d");
    rrect(ctx, hx, hy, hw, hh, 10);
    ctx.fillStyle = hg; ctx.fill();
    ctx.lineWidth = 3; ctx.strokeStyle = LINE; ctx.stroke();
    rrect(ctx, hx + 9, hy + 9, hw - 18, hh - 18, 6);
    ctx.lineWidth = 1.5; ctx.strokeStyle = "rgba(127,178,242,.6)"; ctx.stroke();
    for (var d = 0; d < 7; d++) {
      diamond(ctx, hx + 26 + d * 16, hy + hh / 2, 4, "rgba(127,178,242,.5)");
      diamond(ctx, hx + hw - 26 - d * 16, hy + hh / 2, 4, "rgba(127,178,242,.5)");
    }
    ctx.fillStyle = TEXT;
    ctx.font = '700 ' + Math.round(hh * 0.42) + 'px ' + FONT;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.direction = "rtl";
    ctx.fillText("سُورَةُ " + sura, W / 2, hy + hh / 2 + 2);

    /* البسملة حين تكون الآية المعروضة أول السورة */
    var y = hy + hh + midGap;
    if (basmala) {
      ctx.fillStyle = "rgba(238,244,255,.92)";
      ctx.font = Math.round(SIZE * 0.86) + 'px ' + FONT;
      ctx.fillText("بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ", W / 2, y + basH / 2);
      y += basH;
    }

    /* نص الآية */
    ctx.fillStyle = TEXT;
    ctx.font = SIZE + 'px ' + FONT;
    ctx.shadowColor = "rgba(90,150,255,.35)";
    ctx.shadowBlur = 10;
    for (var i = 0; i < lines.length; i++) {
      ctx.fillText(lines[i], W / 2, y + LH / 2 + i * LH);
    }
    ctx.shadowBlur = 0;
    y += lines.length * LH;

    /* سطر الفراغ: نقاط ثم مربّع أزرق ثم وردة رقم الآية المطلوبة */
    var bw = Math.round(W * 0.26), bh = Math.round(SIZE * 0.92);
    var rosR = Math.round(SIZE * 0.62);
    var gap = 18;
    var totalW = bw + gap + ctx.measureText("........").width + gap + rosR * 2;
    var startX = (W + totalW) / 2;            /* من اليمين إلى اليسار */

    rrect(ctx, startX - bw, y + (blankH - bh) / 2, bw, bh, 7);
    ctx.fillStyle = "#1b4ea0"; ctx.fill();
    ctx.lineWidth = 2; ctx.strokeStyle = LINE_2; ctx.stroke();

    ctx.fillStyle = "rgba(238,244,255,.95)";
    ctx.font = SIZE + 'px ' + FONT;
    ctx.textAlign = "right";
    ctx.fillText("........", startX - bw - gap, y + blankH / 2);

    if (aya != null) {
      rosette(ctx, startX - bw - gap - ctx.measureText("........").width - gap - rosR,
              y + blankH / 2, rosR, ar(aya));
    }

    return cv.toDataURL("image/png");
  }

  global.AyahCard = {
    make: function (o) {
      return ensureFont().then(function () {
        try { return draw(o); } catch (e) { return null; }
      });
    }
  };
})(window);
