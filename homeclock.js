/* ============================================================
   جاوبني — ساعة «البث مباشر» في الصفحة الرئيسية
   ------------------------------------------------------------
   أشكال الساعة تُختار من الإعدادات (homeClockStyle):
     classic  كلاسيكية — وجه عاجي وأرقام 3 6 9 12
     arabic   أرقام عربية — ٣ ٦ ٩ ١٢
     dark     داكنة — وجه أخضر داكن وعلامات ذهبية
     minimal  بسيطة — حلقة ذهبية وعقارب فقط
     digital  رقمية — الوقت مكتوباً 10:45
   HomeClock.mount(canvas, digitalEl) يرسم كل ثانية ويتبع الإعداد،
   وHomeClock.preview(canvas, digitalEl, style) لمعاينة شكل بعينه.
   ============================================================ */

(function (global) {
  "use strict";

  var STYLES = [
    { id: "classic", label: "كلاسيكية" },
    { id: "arabic",  label: "أرقام عربية" },
    { id: "dark",    label: "داكنة" },
    { id: "minimal", label: "بسيطة" },
    { id: "digital", label: "رقمية" }
  ];

  var THEMES = {
    classic: { face: "#f5f1e6", rim: "#e7b740", num: "#04120f", hand: "#04120f", sec: "#ff6b4d", nums: ["12", "3", "6", "9"] },
    arabic:  { face: "#f5f1e6", rim: "#e7b740", num: "#04120f", hand: "#04120f", sec: "#ff6b4d", nums: ["١٢", "٣", "٦", "٩"] },
    dark:    { face: "#0a2a25", rim: "#e7b740", num: null, ticks: "#f7dd9c", hand: "#f7dd9c", sec: "#ff6b4d" },
    minimal: { face: null, rim: "#e7b740", num: null, dots: "#e7b740", hand: "#f5f1e6", sec: "#ff6b4d" }
  };

  function get() {
    var v = null;
    try { v = localStorage.getItem("homeClockStyle"); } catch (e) {}
    return (THEMES[v] || v === "digital") ? v : "classic";
  }

  function hand(ctx, pos, length, width, color) {
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.strokeStyle = color;
    ctx.moveTo(0, 0);
    ctx.rotate(pos);
    ctx.lineTo(0, -length);
    ctx.stroke();
    ctx.rotate(-pos);
  }

  /* يرسم الساعة على canvas مربّع بالشكل المطلوب */
  function draw(canvas, style, now) {
    var t = THEMES[style] || THEMES.classic;
    var ctx = canvas.getContext("2d");
    var size = canvas.width, r = size / 2 * 0.9;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, size, size);
    ctx.translate(size / 2, size / 2);

    /* الوجه والإطار */
    ctx.beginPath();
    ctx.arc(0, 0, r, 0, 2 * Math.PI);
    if (t.face) { ctx.fillStyle = t.face; ctx.fill(); }
    ctx.strokeStyle = t.rim;
    ctx.lineWidth = r * (t.face ? 0.1 : 0.12);
    ctx.stroke();

    /* الأرقام */
    if (t.nums) {
      ctx.font = "bold " + r * 0.24 + "px Cairo, arial";
      ctx.fillStyle = t.num;
      ctx.textBaseline = "middle";
      ctx.textAlign = "center";
      t.nums.forEach(function (n, i) {
        var ang = i * Math.PI / 2;
        ctx.fillText(n, Math.sin(ang) * r * 0.74, -Math.cos(ang) * r * 0.74);
      });
    }
    /* علامات الساعات */
    if (t.ticks) {
      for (var k = 0; k < 12; k++) {
        var a = k * Math.PI / 6, big = k % 3 === 0;
        ctx.beginPath();
        ctx.strokeStyle = t.ticks;
        ctx.lineWidth = r * (big ? 0.08 : 0.04);
        ctx.moveTo(Math.sin(a) * r * (big ? 0.66 : 0.74), -Math.cos(a) * r * (big ? 0.66 : 0.74));
        ctx.lineTo(Math.sin(a) * r * 0.86, -Math.cos(a) * r * 0.86);
        ctx.stroke();
      }
    }
    /* أربع نقاط فقط */
    if (t.dots) {
      for (var d = 0; d < 4; d++) {
        var b = d * Math.PI / 2;
        ctx.beginPath();
        ctx.arc(Math.sin(b) * r * 0.72, -Math.cos(b) * r * 0.72, r * 0.07, 0, 2 * Math.PI);
        ctx.fillStyle = t.dots;
        ctx.fill();
      }
    }

    /* العقارب */
    now = now || new Date();
    var h = now.getHours() % 12, m = now.getMinutes(), s = now.getSeconds();
    hand(ctx, (h * Math.PI / 6) + (m * Math.PI / 360) + (s * Math.PI / 21600), r * 0.5, r * 0.09, t.hand);
    hand(ctx, (m * Math.PI / 30) + (s * Math.PI / 1800), r * 0.75, r * 0.07, t.hand);
    hand(ctx, s * Math.PI / 30, r * 0.85, r * 0.03, t.sec);

    ctx.beginPath();
    ctx.arc(0, 0, r * 0.1, 0, 2 * Math.PI);
    ctx.fillStyle = t.hand;
    ctx.fill();
  }

  function two(n) { return (n < 10 ? "0" : "") + n; }

  function paint(canvas, digitalEl, style) {
    var digital = style === "digital";
    canvas.hidden = digital;
    if (digitalEl) digitalEl.hidden = !digital;
    var now = new Date();
    if (digital) {
      if (digitalEl) digitalEl.textContent = two(now.getHours()) + ":" + two(now.getMinutes()) + ":" + two(now.getSeconds());
    } else {
      draw(canvas, style, now);
    }
  }

  /* الساعة الحيّة: تتبع الإعداد (ويتغيّر شكلها فوراً إن تغيّر من نافذة أخرى) */
  function mount(canvas, digitalEl) {
    if (!canvas) return;
    var tick = function () { paint(canvas, digitalEl, get()); };
    tick();
    return setInterval(tick, 1000);
  }

  /* معاينة شكل محدّد (الإعدادات) — تعيد دالة لتغيير الشكل */
  function preview(canvas, digitalEl, style) {
    var cur = style;
    var tick = function () { paint(canvas, digitalEl, cur); };
    tick();
    setInterval(tick, 1000);
    return function (s) { cur = s; tick(); };
  }

  global.HomeClock = { STYLES: STYLES, get: get, draw: draw, mount: mount, preview: preview };
})(typeof window !== "undefined" ? window : this);
