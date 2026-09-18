/* ============================================================
   جاوبني — الفرق (٢ أو ٤ أو ٦ فرق)
   ------------------------------------------------------------
   مصدر واحد لكل ما يخص الفرق: عددها، أسماؤها، ألوانها، ترتيب الدور.
   عدد الفرق يُختار من الإعدادات، ويُثبَّت عند بدء الجولة حتى لا يتغيّر
   أثناء لعبة جارية.

   التخزين في localStorage:
     teamCount       ("2"|"4"|"6")  اختيار الإعدادات للجولات القادمة
     gameTeamCount   ("2"|"4"|"6")  عدد فرق الجولة الجارية (يُكتب عند البدء)
     team1 … team6   أسماء الفرق
     teamMembers     { team1: ["أحمد", "سارة"], … }  أسماء اللاعبين في كل فريق
     savedTeams      [{ name, members }]  الفرق الثابتة — تبقى دائماً لإعادة استعمالها
     players         [{ name, points, total, absent }]  اللاعبون ونقاطهم — ٣ نقاط لكل إجابة صحيحة؛
                     points = نقاط الجولة الجارية (تُصفَّر عند بدء اللعب)
                     total  = المجموع التراكمي (يُجمع إليه points عند انتهاء اللعب)
                     absent = غير حاضر، فلا يدخل في تقسيم اللاعبين على الفرق
     playersCommitted "1" إن جُمعت نقاط الجولة الجارية إلى المجموع (حتى لا تُجمع مرتين)
     teamScores      { team1: 0, team2: 0, … }
   ============================================================ */

(function (global) {
  "use strict";

  var ALLOWED = [2, 4, 6];

  /* لون مميّز لكل فريق — الأول أزرق والثاني مرجاني كما كانا */
  var COLORS = [
    { main: "#4a9bff", soft: "#8ec5ff" },
    { main: "#ff6b4d", soft: "#ff9c89" },
    { main: "#3fc47a", soft: "#8fe0b3" },
    { main: "#b27cff", soft: "#d4b5ff" },
    { main: "#ff5fa2", soft: "#ffa8cd" },
    { main: "#2ec5c9", soft: "#8ee3e5" }
  ];

  var ORDINALS = ["الأول", "الثاني", "الثالث", "الرابع", "الخامس", "السادس"];

  function get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }

  function valid(n) { n = parseInt(n, 10); return ALLOWED.indexOf(n) >= 0 ? n : 0; }

  /* اختيار الإعدادات (للجولة القادمة) */
  function setting() { return valid(get("teamCount")) || 2; }

  /* عدد فرق الجولة الجارية — وإن لم تبدأ جولة فاختيار الإعدادات */
  function count() { return valid(get("gameTeamCount")) || setting(); }

  function ids(n) {
    n = n || count();
    var out = [];
    for (var i = 1; i <= n; i++) out.push("team" + i);
    return out;
  }

  function num(id) { return parseInt(String(id).replace("team", ""), 10) || 1; }

  function name(id) { return get(id) || ("الفريق " + num(id)); }

  function color(id) { return COLORS[(num(id) - 1) % COLORS.length]; }

  function ordinal(id) { return ORDINALS[num(id) - 1] || String(num(id)); }

  /* الفريق التالي في الدور */
  function next(id) {
    var list = ids(), i = list.indexOf(id);
    return list[(i + 1) % list.length];
  }

  /* بقية الفرق بترتيب الدور بدءاً من الفريق التالي */
  function others(id) {
    var list = ids(), i = list.indexOf(id), out = [];
    for (var k = 1; k < list.length; k++) out.push(list[(i + k + list.length) % list.length]);
    return out;
  }

  function scores() {
    var s;
    try { s = JSON.parse(get("teamScores") || "{}") || {}; } catch (e) { s = {}; }
    ids().forEach(function (t) { s[t] = Number(s[t]) || 0; });
    return s;
  }

  function saveScores(s) { set("teamScores", JSON.stringify(s)); }

  function zeroScores(n) {
    var s = {};
    ids(n).forEach(function (t) { s[t] = 0; });
    return s;
  }

  /* الفرق مرتّبة من الأعلى نقاطاً (والتعادل بترتيب الفرق) */
  function ranking() {
    var s = scores();
    return ids().slice().sort(function (a, b) { return (s[b] - s[a]) || (num(a) - num(b)); });
  }

  /* أقوى خصم: صاحب أعلى نقاط بين الفرق الأخرى (والتعادل لأقربهم في الدور) */
  function leader(except) {
    var s = scores(), best = null;
    others(except).forEach(function (t) { if (best === null || s[t] > s[best]) best = t; });
    return best;
  }

  /* الفرق المتعادلة في الصدارة (مصفوفة من فريقين أو أكثر) — أو [] */
  function tiedLeaders() {
    var s = scores(), list = ids();
    var top = Math.max.apply(null, list.map(function (t) { return s[t]; }));
    var tied = list.filter(function (t) { return s[t] === top; });
    return tied.length > 1 ? tied : [];
  }

  /* ---------- أسماء اللاعبين في كل فريق ---------- */
  function readJSON(k, fb) {
    try { var v = JSON.parse(get(k) || "null"); return v == null ? fb : v; } catch (e) { return fb; }
  }

  /* يقسم نصاً فيه أكثر من اسم (فاصلة عربية/إنجليزية أو سطر جديد) */
  function splitNames(text) {
    return String(text || "").split(/[,،\n]+/)
      .map(function (s) { return s.trim(); })
      .filter(function (s) { return s; });
  }

  function members(id) {
    var all = readJSON("teamMembers", {});
    return Array.isArray(all[id]) ? all[id] : [];
  }

  function setMembers(id, list) {
    var all = readJSON("teamMembers", {});
    var seen = {};
    all[id] = (list || []).map(function (s) { return String(s).trim().slice(0, 30); })
      .filter(function (s) { if (!s || seen[s]) return false; seen[s] = 1; return true; });
    set("teamMembers", JSON.stringify(all));
    addPlayers(all[id]);                /* كل لاعب في فريق يدخل قائمة اللاعبين */
    return all[id];
  }

  /* ---------- قائمة اللاعبين ونقاطهم (تُدار من الإعدادات) ----------
     players: [{ name: "أحمد", points: 5, total: 42 }, …] — تبقى دائماً.
     كل إجابة صحيحة = PLAYER_POINTS نقاط للاعب الذي أجاب.
     points نقاط الجولة الجارية: تُصفَّر عند بدء اللعب (startRound) وتُجمع
     إلى total عند انتهاء اللعب (commitPlayerPoints في صفحة النتيجة). */
  var PLAYER_POINTS = 3;

  /* absent: لاعب غير حاضر اليوم — لا يدخل في تقسيم الفرق */
  function players() {
    var v = readJSON("players", []);
    return Array.isArray(v) ? v.filter(function (p) { return p && p.name; })
      .map(function (p) {
        /* بيانات قديمة بلا total: كانت points مجموعاً تراكمياً — تنتقل إلى total */
        var legacy = p.total == null;
        return {
          name: String(p.name),
          points: legacy ? 0 : (Number(p.points) || 0),
          total: legacy ? (Number(p.points) || 0) : (Number(p.total) || 0),
          absent: !!p.absent
        };
      }) : [];
  }

  function setPresent(name, present) {
    savePlayers(players().map(function (p) {
      if (p.name === name) p.absent = !present;
      return p;
    }));
  }

  /* تقسيم اللاعبين الحاضرين على الفرق بالتساوي:
       mode "random"   — ترتيب عشوائي
       mode "balanced" — حسب النقاط بطريقة الثعبان (1،2،3،3،2،1…) فتتقارب قوة الفرق
     يكتب أسماء لاعبي كل فريق (teamMembers) ويعيد مصفوفة لكل فريق */
  function splitPlayers(mode, n) {
    n = n || setting();
    var list = players().filter(function (p) { return !p.absent; });
    /* خلط أولاً، ثم (في المتوازن) ترتيب ثابت بالنقاط — فالمتساوون يتوزعون عشوائياً */
    for (var i = list.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = list[i]; list[i] = list[j]; list[j] = t;
    }
    if (mode === "balanced") list.sort(function (a, b) { return (b.total + b.points) - (a.total + a.points); });
    var groups = [];
    for (var g = 0; g < n; g++) groups.push([]);
    list.forEach(function (p, k) {
      var round = Math.floor(k / n), pos = k % n;
      var idx = (mode === "balanced" && round % 2 === 1) ? n - 1 - pos : pos;
      groups[idx].push(p.name);
    });
    var all = readJSON("teamMembers", {});
    ids(n).forEach(function (id, g) { all[id] = groups[g]; });
    set("teamMembers", JSON.stringify(all));
    return groups;
  }

  function savePlayers(list) { set("players", JSON.stringify(list)); }

  function addPlayers(names) {
    var list = players(), have = {};
    list.forEach(function (p) { have[p.name] = 1; });
    var added = 0;
    (names || []).forEach(function (n) {
      n = String(n).trim().slice(0, 30);
      if (n && !have[n]) { list.push({ name: n, points: 0, total: 0 }); have[n] = 1; added++; }
    });
    if (added) savePlayers(list);
    return added;
  }

  /* حذف لاعب: من القائمة ومن الفرق التي هو فيها */
  function removePlayer(name) {
    savePlayers(players().filter(function (p) { return p.name !== name; }));
    var all = readJSON("teamMembers", {}), changed = false;
    Object.keys(all).forEach(function (t) {
      if (!Array.isArray(all[t])) return;
      var kept = all[t].filter(function (m) { return m !== name; });
      if (kept.length !== all[t].length) { all[t] = kept; changed = true; }
    });
    if (changed) set("teamMembers", JSON.stringify(all));
  }

  function addPlayerPoints(name, n) {
    var list = players(), p = null;
    list.forEach(function (x) { if (x.name === name) p = x; });
    if (!p) { p = { name: name, points: 0, total: 0 }; list.push(p); }
    p.points += (n == null ? PLAYER_POINTS : n);
    savePlayers(list);
    return p.points;
  }

  function playerPoints(name) {
    var p = players().filter(function (x) { return x.name === name; })[0];
    return p ? p.points : 0;
  }

  /* المجموع التراكمي للاعب (بلا نقاط الجولة الجارية) */
  function playerTotal(name) {
    var p = players().filter(function (x) { return x.name === name; })[0];
    return p ? p.total : 0;
  }

  /* تغيير اسم لاعب: في القائمة، وفي الفرق، وفي الفرق الثابتة */
  function renamePlayer(oldName, newName) {
    newName = String(newName || "").trim().slice(0, 30);
    if (!newName || newName === oldName) return false;
    var list = players();
    if (list.some(function (p) { return p.name === newName; })) return false;   /* الاسم مستعمل */
    savePlayers(list.map(function (p) {
      if (p.name === oldName) p.name = newName;
      return p;
    }));

    var all = readJSON("teamMembers", {}), changed = false;
    Object.keys(all).forEach(function (t) {
      if (!Array.isArray(all[t])) return;
      all[t] = all[t].map(function (m) {
        if (m === oldName) { changed = true; return newName; }
        return m;
      });
    });
    if (changed) set("teamMembers", JSON.stringify(all));

    var fixed = saved(), touched = false;
    fixed.forEach(function (t) {
      t.members = (t.members || []).map(function (m) {
        if (m === oldName) { touched = true; return newName; }
        return m;
      });
    });
    if (touched) set("savedTeams", JSON.stringify(fixed));
    return true;
  }

  /* بدء اللعب: تصفير نقاط الجولة وحدها — المجموع التراكمي يبقى */
  function zeroPlayerPoints() {
    savePlayers(players().map(function (p) { p.points = 0; return p; }));
    set("playersCommitted", "");
  }

  /* انتهاء اللعب: تُجمع نقاط الجولة إلى مجموع كل لاعب — مرة واحدة فقط
     (صفحة النتيجة قد تُفتح أو تُحدَّث أكثر من مرة).
     تعيد [{ name, gained, total }] لمن كسب في هذه الجولة. */
  function commitPlayerPoints() {
    if (get("playersCommitted") === "1") return readJSON("lastRoundGains", []);
    var list = players();
    var gained = list.filter(function (p) { return p.points > 0; })
      .map(function (p) { return { name: p.name, gained: p.points, total: p.total + p.points }; })
      .sort(function (a, b) { return (b.gained - a.gained) || a.name.localeCompare(b.name, "ar"); });
    /* نقاط الجولة انتقلت إلى المجموع فتُصفَّر، وتُحفظ للعرض إن حُدِّثت الصفحة */
    savePlayers(list.map(function (p) { p.total += p.points; p.points = 0; return p; }));
    set("lastRoundGains", JSON.stringify(gained));
    set("playersCommitted", "1");
    return gained;
  }

  /* تصفير كامل: نقاط الجولة والمجموع التراكمي (زرّ الإعدادات) */
  function resetPlayerPoints() {
    savePlayers(players().map(function (p) { p.points = 0; p.total = 0; return p; }));
    set("playersCommitted", "");
  }

  /* اللاعبون مرتّبون من الأعلى نقاطاً (المجموع ثم نقاط الجولة) */
  function playerRanking() {
    return players().sort(function (a, b) {
      return ((b.total + b.points) - (a.total + a.points)) || a.name.localeCompare(b.name, "ar");
    });
  }

  /* ---------- الفرق الثابتة (محفوظة دائماً لإعادة استعمالها) ----------
     savedTeams: [{ name: "النسور", members: ["أحمد", "سارة"] }, …] */
  function saved() {
    var v = readJSON("savedTeams", []);
    return Array.isArray(v) ? v.filter(function (t) { return t && t.name; }) : [];
  }

  function saveTeam(name, list) {
    name = String(name || "").trim();
    if (!name) return false;
    var all = saved().filter(function (t) { return t.name !== name; });
    all.push({ name: name, members: (list || []).slice(0, 30) });
    all.sort(function (a, b) { return a.name.localeCompare(b.name, "ar"); });
    set("savedTeams", JSON.stringify(all));
    return true;
  }

  function deleteSaved(name) {
    set("savedTeams", JSON.stringify(saved().filter(function (t) { return t.name !== name; })));
  }

  /* سقف الفئات يكبر مع عدد الفرق حتى يبقى لكل فريق عدد الأسئلة نفسه:
     الإعدادات تحدد السقف لفريقين (٦ أو ٨)، ومع ٤ فرق يتضاعف (١٢ أو ١٦)،
     ومع ٦ فرق ثلاثة أضعاف (١٨ أو ٢٤). n = عدد الفرق (الافتراضي: اختيار الإعدادات) */
  function baseCategories() { return parseInt(get("maxCategories"), 10) === 8 ? 8 : 6; }
  function maxCategories(n) { return baseCategories() * ((n || setting()) / 2); }

  /* بداية جولة: تثبيت عدد الفرق وتصفير النقاط والدور،
     وتصفير نقاط اللاعبين لهذه الجولة (مجاميعهم تبقى)،
     وإتاحة عجلة التعادل مرة واحدة في الجولة الجديدة */
  function startRound() {
    var n = setting();
    set("gameTeamCount", String(n));
    saveScores(zeroScores(n));
    set("currentTurn", "team1");
    zeroPlayerPoints();
    set("tieWheelUsed", "");
    return n;
  }

  /* مفاتيح الفرق كلها (لمسح بيانات الجولة) */
  function storageKeys() {
    var k = ["gameTeamCount", "teamMembers"];
    for (var i = 1; i <= 6; i++) k.push("team" + i);
    return k;
  }

  global.Teams = {
    ALLOWED: ALLOWED,
    setting: setting,
    count: count,
    ids: ids,
    num: num,
    name: name,
    color: color,
    ordinal: ordinal,
    next: next,
    others: others,
    scores: scores,
    saveScores: saveScores,
    zeroScores: zeroScores,
    ranking: ranking,
    leader: leader,
    tiedLeaders: tiedLeaders,
    splitNames: splitNames,
    members: members,
    setMembers: setMembers,
    PLAYER_POINTS: PLAYER_POINTS,
    players: players,
    addPlayers: addPlayers,
    removePlayer: removePlayer,
    addPlayerPoints: addPlayerPoints,
    playerPoints: playerPoints,
    playerTotal: playerTotal,
    renamePlayer: renamePlayer,
    zeroPlayerPoints: zeroPlayerPoints,
    commitPlayerPoints: commitPlayerPoints,
    resetPlayerPoints: resetPlayerPoints,
    playerRanking: playerRanking,
    setPresent: setPresent,
    splitPlayers: splitPlayers,
    saved: saved,
    saveTeam: saveTeam,
    deleteSaved: deleteSaved,
    baseCategories: baseCategories,
    maxCategories: maxCategories,
    startRound: startRound,
    storageKeys: storageKeys
  };
})(typeof window !== "undefined" ? window : this);
