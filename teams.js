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
     players         [{ name, points }]   اللاعبون ونقاطهم — ٣ نقاط لكل إجابة صحيحة (الإعدادات)
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
     players: [{ name: "أحمد", points: 12 }, …] — تبقى دائماً.
     كل إجابة صحيحة = PLAYER_POINTS نقاط للاعب الذي أجاب. */
  var PLAYER_POINTS = 3;

  function players() {
    var v = readJSON("players", []);
    return Array.isArray(v) ? v.filter(function (p) { return p && p.name; })
      .map(function (p) { return { name: String(p.name), points: Number(p.points) || 0 }; }) : [];
  }

  function savePlayers(list) { set("players", JSON.stringify(list)); }

  function addPlayers(names) {
    var list = players(), have = {};
    list.forEach(function (p) { have[p.name] = 1; });
    var added = 0;
    (names || []).forEach(function (n) {
      n = String(n).trim().slice(0, 30);
      if (n && !have[n]) { list.push({ name: n, points: 0 }); have[n] = 1; added++; }
    });
    if (added) savePlayers(list);
    return added;
  }

  function removePlayer(name) {
    savePlayers(players().filter(function (p) { return p.name !== name; }));
  }

  function addPlayerPoints(name, n) {
    var list = players(), p = null;
    list.forEach(function (x) { if (x.name === name) p = x; });
    if (!p) { p = { name: name, points: 0 }; list.push(p); }
    p.points += (n == null ? PLAYER_POINTS : n);
    savePlayers(list);
    return p.points;
  }

  function playerPoints(name) {
    var p = players().filter(function (x) { return x.name === name; })[0];
    return p ? p.points : 0;
  }

  function resetPlayerPoints() {
    savePlayers(players().map(function (p) { return { name: p.name, points: 0 }; }));
  }

  /* اللاعبون مرتّبون من الأعلى نقاطاً */
  function playerRanking() {
    return players().sort(function (a, b) { return (b.points - a.points) || a.name.localeCompare(b.name, "ar"); });
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

  /* بداية جولة: تثبيت عدد الفرق وتصفير النقاط والدور */
  function startRound() {
    var n = setting();
    set("gameTeamCount", String(n));
    saveScores(zeroScores(n));
    set("currentTurn", "team1");
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
    resetPlayerPoints: resetPlayerPoints,
    playerRanking: playerRanking,
    saved: saved,
    saveTeam: saveTeam,
    deleteSaved: deleteSaved,
    baseCategories: baseCategories,
    maxCategories: maxCategories,
    startRound: startRound,
    storageKeys: storageKeys
  };
})(typeof window !== "undefined" ? window : this);
