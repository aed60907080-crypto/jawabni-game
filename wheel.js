/* ============================================================
   جاوبني — عجلة السؤال الإضافي
   ------------------------------------------------------------
   ١) كل 1500 نقطة يبلغها فريق (1500، 3000، 4500…) تمنحه سؤالاً
      إضافياً من فئة **خارج الجولة**.
   ٢) عند التعادل في نهاية الجولة: سؤال فاصل للفريقين من فئة أخرى،
      وإن لم يجب أحد تدور العجلة من جديد.

   العجلة تحدد المضاعف: دبل ×1 أو ×2 أو ×3، وقيمة السؤال (100–500)
   عشوائية حسب مستواه، فالنقاط = القيمة × المضاعف.

   السؤال يُفتح في question.html بمعاملات:
     category, points, mult (1–3), bonus ("milestone" | "tie"), team

   التخزين:
     bonusMilestones { sig, team1: 1, team2: 0 }  عدد المحطات المكافأة
                     sig بصمة فئات الجولة — تُصفَّر المحطات مع جولة جديدة
   ============================================================ */

(function (global) {
  "use strict";

  var MILESTONE = 1500;
  /* ست شرائح: كل مضاعف مرتين بالتناوب */
  var SEGMENTS = [1, 2, 3, 1, 2, 3];
  var COLORS   = ["#1f9d6b", "#e7b740", "#ff6b4d", "#2f8fd8", "#9b6ee8", "#e0536e"];
  var SPIN_MS  = 4200;

  function read(k, fb) {
    try { var r = localStorage.getItem(k); return r ? JSON.parse(r) : fb; } catch (e) { return fb; }
  }
  function write(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }

  function scores() { return read("teamScores", null) || { team1: 0, team2: 0 }; }

  /* ترجمة نص عبر قاموس i18n (i18n-langs.js — الدفعة K9) ثم ملء قوالبه
     {team} {n}… — تُترجم أسماء الفئات أيضاً من قاموس الفئات */
  function tr(key, vars) {
    var s = (global.I18N && global.I18N.t) ? global.I18N.t(key) : key;
    Object.keys(vars || {}).forEach(function (k) { s = s.split("{" + k + "}").join(vars[k]); });
    return s;
  }

  /* بصمة الجولة — إن بدأت جولة بفئات أخرى تُصفَّر المحطات تلقائياً */
  function roundSig() {
    var s = localStorage.getItem("selectedCards") || "", h = 5381;
    for (var i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) | 0;
    return String(h);
  }

  function milestones() {
    var m = read("bonusMilestones", null);
    if (!m || m.sig !== roundSig()) m = { sig: roundSig(), team1: 0, team2: 0 };
    return m;
  }

  /* أول فريق بلغ محطة 1500 جديدة لم يُكافأ عليها بعد (أو null) */
  function pendingMilestone() {
    var s = scores(), m = milestones();
    var teams = ["team1", "team2"];
    for (var i = 0; i < teams.length; i++) {
      var t = teams[i];
      if (Math.floor((s[t] || 0) / MILESTONE) > (m[t] || 0)) return t;
    }
    return null;
  }

  /* محطة واحدة لكل عجلة — ومن قفز محطتين دفعة واحدة تأتيه عجلة ثانية بعدها */
  function markMilestone(team) {
    var m = milestones();
    m[team] = (m[team] || 0) + 1;
    write("bonusMilestones", m);
  }

  /* فئة عشوائية خارج الجولة، ومستوى موجود فيها */
  function pickBonus(exclude) {
    var bank = global.questionsData || {};
    var ex = exclude || [];
    var all = (global.CategoryLib && global.CategoryLib.playable)
      ? global.CategoryLib.playable().map(function (c) { return c.name; })
      : Object.keys(bank);
    var has = function (n) { return (bank[n] || []).length > 0; };
    var names = all.filter(function (n) { return ex.indexOf(n) === -1 && has(n); });
    if (!names.length) names = all.filter(has);
    if (!names.length) return null;

    var cat = names[Math.floor(Math.random() * names.length)];
    var levels = [1, 2, 3, 4, 5].filter(function (l) {
      return bank[cat].some(function (q) { return q.l === l; });
    });
    var level = levels.length ? levels[Math.floor(Math.random() * levels.length)] : 3;
    return { category: cat, points: level * 100, names: names };
  }

  function questionUrl(b, mult, reason, team) {
    return "question.html?category=" + encodeURIComponent(b.category) +
      "&points=" + b.points + "&mult=" + mult + "&bonus=" + reason +
      (team ? "&team=" + team : "");
  }

  var CSS = [
    "#bonusWheel{position:fixed;inset:0;z-index:9999;display:flex;align-items:center;justify-content:center;",
    "  background:rgba(3,14,12,.8);backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);padding:18px;animation:bwIn .3s ease}",
    "@keyframes bwIn{from{opacity:0}to{opacity:1}}",
    ".bw-card{width:min(420px,100%);background:linear-gradient(160deg,#0f3a33,#0a2a25);border:1px solid rgba(231,183,64,.45);",
    "  border-radius:22px;padding:22px 20px 20px;text-align:center;box-shadow:0 30px 80px rgba(0,0,0,.5);",
    "  font-family:'Cairo',sans-serif;color:#f4efe2}",
    ".bw-title{margin:0 0 6px;font-size:21px;font-weight:900;color:#f7dd9c}",
    ".bw-sub{margin:0 0 16px;font-size:13.5px;color:rgba(244,239,226,.72);line-height:1.7}",
    ".bw-stage{position:relative;width:250px;height:250px;margin:0 auto 14px}",
    ".bw-wheel{width:100%;height:100%;border-radius:50%;border:6px solid #f7dd9c;box-sizing:border-box;position:relative;",
    "  box-shadow:0 0 0 4px rgba(0,0,0,.25),0 12px 30px rgba(0,0,0,.35) inset}",
    ".bw-lbl{position:absolute;left:50%;top:50%;width:60px;margin:-14px 0 0 -30px;line-height:28px;font-size:22px;",
    "  font-weight:900;color:#fff;text-shadow:0 2px 4px rgba(0,0,0,.45);direction:ltr}",
    ".bw-pointer{position:absolute;top:-10px;left:50%;margin-left:-14px;width:0;height:0;z-index:2;",
    "  border-left:14px solid transparent;border-right:14px solid transparent;border-top:26px solid #fff;",
    "  filter:drop-shadow(0 3px 3px rgba(0,0,0,.4))}",
    ".bw-hub{position:absolute;left:50%;top:50%;width:58px;height:58px;margin:-29px 0 0 -29px;border-radius:50%;z-index:2;",
    "  background:#0a2a25;border:4px solid #f7dd9c;display:flex;align-items:center;justify-content:center;font-size:26px}",
    ".bw-info{min-height:56px;display:flex;flex-direction:column;gap:4px;align-items:center;justify-content:center;margin-bottom:14px}",
    ".bw-cat{font-size:18px;font-weight:800;color:#fff}",
    ".bw-pts{font-size:15px;font-weight:800;color:#f7dd9c;direction:ltr}",
    "#bonusWheel.done .bw-cat{animation:bwPop .5s ease}",
    "@keyframes bwPop{0%{transform:scale(.7)}60%{transform:scale(1.15)}100%{transform:scale(1)}}",
    ".bw-actions{display:flex;flex-direction:column;gap:10px;align-items:center}",
    ".bw-btn{font-family:inherit;font-size:16px;font-weight:900;border:0;border-radius:14px;padding:11px 26px;cursor:pointer;",
    "  background:linear-gradient(135deg,#f7dd9c,#e7b740);color:#3a2a00;box-shadow:0 10px 24px rgba(231,183,64,.35)}",
    ".bw-btn:disabled{opacity:.6;cursor:default}",
    ".bw-skip{background:none;border:0;color:rgba(244,239,226,.6);font-family:inherit;font-size:13px;cursor:pointer;text-decoration:underline}",
    "@media (prefers-reduced-motion: reduce){#bonusWheel,#bonusWheel.done .bw-cat{animation:none}}"
  ].join("\n");

  function injectCss() {
    if (document.getElementById("bonusWheelCss")) return;
    var st = document.createElement("style");
    st.id = "bonusWheelCss";
    st.textContent = CSS;
    document.head.appendChild(st);
  }

  /* يعرض العجلة. opts: { reason: "milestone"|"tie", team, teamName, exclude: [فئات الجولة], onSkip } */
  function open(opts) {
    if (document.getElementById("bonusWheel")) return true;
    var tie = opts.reason === "tie";
    var bonus = pickBonus(opts.exclude);
    if (!bonus) return false;
    injectCss();

    var reached = tie ? 0 : ((milestones()[opts.team] || 0) + 1) * MILESTONE;

    var slices = SEGMENTS.map(function (m, i) {
      return COLORS[i] + " " + (i * 60) + "deg " + ((i + 1) * 60) + "deg";
    }).join(", ");
    var labels = SEGMENTS.map(function (m, i) {
      return '<span class="bw-lbl" style="transform:rotate(' + (i * 60 + 30) + 'deg) translateY(-92px)">×' + m + "</span>";
    }).join("");

    var ov = document.createElement("div");
    ov.id = "bonusWheel";
    ov.setAttribute("role", "dialog");
    ov.setAttribute("aria-modal", "true");
    ov.innerHTML =
      '<div class="bw-card">' +
        '<h3 class="bw-title"></h3>' +
        '<p class="bw-sub"></p>' +
        '<div class="bw-stage">' +
          '<div class="bw-pointer"></div>' +
          '<div class="bw-wheel" style="background:conic-gradient(' + slices + ')">' + labels + "</div>" +
          '<div class="bw-hub">🎡</div>' +
        "</div>" +
        '<div class="bw-info"><span class="bw-cat">؟</span><span class="bw-pts"></span></div>' +
        '<div class="bw-actions">' +
          '<button type="button" class="bw-btn bw-spin"></button>' +
          '<button type="button" class="bw-btn bw-go" hidden></button>' +
          (tie ? "" : '<button type="button" class="bw-skip"></button>') +
        "</div>" +
      "</div>";

    /* النصوص تُكتب مترجمة مباشرة (tr) — أسماء الفرق كما كتبها اللاعبون */
    ov.querySelector(".bw-spin").textContent = tr("أدر العجلة");
    ov.querySelector(".bw-go").textContent   = tr("ابدأ السؤال");
    if (!tie) ov.querySelector(".bw-skip").textContent = tr("تخطَّ السؤال الإضافي");
    ov.querySelector(".bw-title").textContent = tie
      ? "🤝 " + tr("تعادل! سؤال فاصل من العجلة")
      : "🎡 " + tr("{team} بلغ {n} نقطة!", { team: opts.teamName || "", n: reached });
    ov.querySelector(".bw-sub").textContent = tie
      ? tr("سؤال من فئة خارج الجولة للفريقين — من يجب صحيحاً أولاً يأخذ النقاط")
      : tr("سؤال إضافي من فئة خارج الجولة — العجلة تحدد المضاعف: دبل ×1 أو ×2 أو ×3");
    document.body.appendChild(ov);

    var wheel   = ov.querySelector(".bw-wheel");
    var catEl   = ov.querySelector(".bw-cat");
    var ptsEl   = ov.querySelector(".bw-pts");
    var spinBtn = ov.querySelector(".bw-spin");
    var goBtn   = ov.querySelector(".bw-go");
    var skip    = ov.querySelector(".bw-skip");
    var mult = 1;

    spinBtn.onclick = function () {
      spinBtn.disabled = true;
      if (skip) skip.hidden = true;

      /* نختار الشريحة أولاً ثم ندير العجلة لتقف عندها تحت المؤشّر */
      var idx = Math.floor(Math.random() * SEGMENTS.length);
      mult = SEGMENTS[idx];
      var jitter = Math.random() * 30 - 15;
      var deg = 360 * 6 + (360 - (idx * 60 + 30)) + jitter;
      var reduce = global.matchMedia && global.matchMedia("(prefers-reduced-motion: reduce)").matches;
      var ms = reduce ? 600 : SPIN_MS;
      wheel.style.transition = "transform " + ms + "ms cubic-bezier(.12,.72,.14,1)";
      wheel.style.transform = "rotate(" + deg + "deg)";

      /* أسماء الفئات تتقلّب أثناء الدوران */
      var k = 0;
      var iv = setInterval(function () {
        catEl.textContent = tr(bonus.names[k % bonus.names.length]);
        if (k % 2 === 0 && global.SFX && global.SFX.tick) global.SFX.tick(false);
        k++;
      }, 120);

      setTimeout(function () {
        clearInterval(iv);
        catEl.textContent = tr(bonus.category);
        ptsEl.textContent = bonus.points + " × " + mult + " = " + (bonus.points * mult);
        ov.classList.add("done");
        spinBtn.hidden = true;
        goBtn.hidden = false;
        if (global.SFX && global.SFX.coin) global.SFX.coin();
      }, ms + 80);
    };

    goBtn.onclick = function () {
      if (!tie) markMilestone(opts.team);
      global.location.href = questionUrl(bonus, mult, tie ? "tie" : "milestone", tie ? null : opts.team);
    };

    if (skip) skip.onclick = function () {
      markMilestone(opts.team);
      ov.remove();
      if (opts.onSkip) opts.onSkip();
    };

    return true;
  }

  global.BonusWheel = {
    MILESTONE: MILESTONE,
    SEGMENTS: SEGMENTS,
    pendingMilestone: pendingMilestone,
    markMilestone: markMilestone,
    pickBonus: pickBonus,
    open: open,
    tr: tr
  };

})(typeof window !== "undefined" ? window : this);
