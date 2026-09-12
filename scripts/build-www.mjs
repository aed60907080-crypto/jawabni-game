/* يجمع ملفات الموقع في مجلد www/ ليأخذها Capacitor إلى تطبيقي أندرويد و iOS.
   التشغيل: npm run build   (يُستدعى تلقائياً من npm run sync / android / ios) */
import { cpSync, rmSync, mkdirSync, readdirSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const out = join(root, "www");

/* ما لا يدخل التطبيق: أدوات التطوير، ومجلدات المنصّات، والتوثيق */
const SKIP = new Set([
  "www", "node_modules", "android", "ios", "scripts", "tools",
  "package.json", "package-lock.json", "capacitor.config.json", "serve.ps1"
]);

rmSync(out, { recursive: true, force: true });
mkdirSync(out);

for (const name of readdirSync(root)) {
  if (SKIP.has(name) || name.startsWith(".") || name.endsWith(".md")) continue;
  cpSync(join(root, name), join(out, name), { recursive: true });
}

console.log("✔ www/ جاهز — شغّل الآن: npx cap sync");
