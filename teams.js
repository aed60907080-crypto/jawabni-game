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
    var k = ["gameTeamCount"];
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
    startRound: startRound,
    storageKeys: storageKeys
  };
})(typeof window !== "undefined" ? window : this);
