/* ============================================================
   سيرفر مزامنة «جاوبني»

   دورُه بسيط: يجمع أجهزةَ الغرفة الواحدة ويمرّر بينها الرسائل. ولا
   يفهم اللعبة ولا يحفظ شيئاً على قرص — المرجعُ هو جهازُ المُنشئ،
   والسيرفر وسيطٌ لا أكثر. فإن أُعيد تشغيله لم يضع شيء: أولُ لقطةٍ
   من المرجع تُعيد بناء الغرفة.

   وما يحفظه في الذاكرة آخرُ لقطةٍ لكل غرفة، ليجد المنضمُّ المتأخّر
   الحالةَ فوراً بلا انتظار بثٍّ جديد.

   التشغيل:  npm install && npm start
   المنفذ:   PORT من البيئة، أو 8787
   ============================================================ */

"use strict";

const http = require("http");
const { WebSocketServer } = require("ws");

const PORT = process.env.PORT || 8787;

/* حدودٌ تمنع إغراق الذاكرة من غرفةٍ واحدة أو رسالةٍ ضخمة */
const MAX_ROOMS        = 500;
const MAX_PEERS_PER_RM = 12;
const MAX_MSG_BYTES    = 256 * 1024;
const IDLE_MS          = 6 * 60 * 60 * 1000;   /* غرفةٌ بلا حركة ستّ ساعات تُنسى */

/** @type {Map<string, {peers:Set<any>, last:any, at:number}>} */
const rooms = new Map();

const server = http.createServer((req, res) => {
  /* فحصُ الحياة — تستعمله منصّاتُ الاستضافة */
  if (req.url === "/health") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify({ ok: true, rooms: rooms.size, up: Math.round(process.uptime()) }));
    return;
  }
  res.writeHead(200, { "content-type": "text/plain; charset=utf-8" });
  res.end("سيرفر مزامنة جاوبني — يعمل");
});

const wss = new WebSocketServer({ server, maxPayload: MAX_MSG_BYTES });

function roomOf(code) {
  let r = rooms.get(code);
  if (!r) {
    if (rooms.size >= MAX_ROOMS) sweep(true);
    r = { peers: new Set(), last: null, at: Date.now() };
    rooms.set(code, r);
  }
  return r;
}

function send(ws, obj) {
  if (ws.readyState === 1) { try { ws.send(JSON.stringify(obj)); } catch (e) {} }
}

/* يمرّر الرسالة إلى بقية أهل الغرفة دون صاحبها */
function relay(code, from, msg) {
  const r = rooms.get(code);
  if (!r) return;
  r.at = Date.now();
  for (const p of r.peers) if (p !== from) send(p, msg);
}

function announce(code) {
  const r = rooms.get(code);
  if (!r) return;
  for (const p of r.peers) send(p, { t: "peers", room: code, n: r.peers.size });
}

wss.on("connection", (ws) => {
  ws.room = null;
  ws.isHost = false;
  ws.alive = true;
  ws.on("pong", () => { ws.alive = true; });

  ws.on("message", (raw) => {
    let m;
    try { m = JSON.parse(raw.toString()); } catch (e) { return; }
    if (!m || typeof m.t !== "string") return;

    /* الانضمام أولاً — وما قبله يُهمَل */
    if (m.t === "join") {
      const code = String(m.room || "").slice(0, 64);
      if (!code) return;
      const r = roomOf(code);
      if (r.peers.size >= MAX_PEERS_PER_RM) { send(ws, { t: "full", room: code }); return; }
      ws.room = code;
      ws.isHost = !!m.host;
      r.peers.add(ws);
      r.at = Date.now();
      /* المنضمُّ الجديد يأخذ آخرَ لقطةٍ محفوظة إن كانت */
      if (!ws.isHost && r.last) send(ws, r.last);
      /* ويُخبَر المرجعُ ليبثّ حالةً طازجة */
      relay(code, ws, { t: "join", room: code });
      announce(code);
      return;
    }

    if (!ws.room) return;

    /* لقطةٌ من المرجع: تُحفظ وتُمرَّر */
    if (m.t === "state" && ws.isHost) {
      const r = rooms.get(ws.room);
      if (r) r.last = m;
      relay(ws.room, ws, m);
      return;
    }

    /* طلبُ تغييرٍ أو طلبُ حالة: يُمرَّر كما هو */
    if (m.t === "set" || m.t === "want") { relay(ws.room, ws, m); return; }
  });

  ws.on("close", () => {
    if (!ws.room) return;
    const r = rooms.get(ws.room);
    if (!r) return;
    r.peers.delete(ws);
    if (r.peers.size === 0) rooms.delete(ws.room);
    else announce(ws.room);
  });
});

/* وصلاتٌ ميّتة لا تُغلق نفسها — تُفحص كلَّ نصف دقيقة */
setInterval(() => {
  for (const ws of wss.clients) {
    if (!ws.alive) { try { ws.terminate(); } catch (e) {} continue; }
    ws.alive = false;
    try { ws.ping(); } catch (e) {}
  }
}, 30000);

/* غرفٌ هجرها أهلُها */
function sweep(force) {
  const now = Date.now();
  for (const [code, r] of rooms) {
    if (r.peers.size === 0 && (force || now - r.at > IDLE_MS)) rooms.delete(code);
  }
}
setInterval(sweep, 10 * 60 * 1000);

server.listen(PORT, () => {
  console.log("سيرفر مزامنة جاوبني يستمع على المنفذ " + PORT);
});
