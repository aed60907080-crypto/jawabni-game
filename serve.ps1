<#
  جاوبني — خادم ملفات ثابت بسيط
  ------------------------------------------------
  المشروع يعمل بفتح main-page.html مباشرة، لكن بعض المتصفحات
  تمنع localStorage وطلبات الشبكة على روابط file://
  فهذا الخادم يشغّل المشروع على http://localhost:8080 بلا أي تثبيت.

  التشغيل:
      powershell -ExecutionPolicy Bypass -File serve.ps1
      powershell -ExecutionPolicy Bypass -File serve.ps1 -Port 9000
#>

param(
  [int]$Port = 0,
  [string]$Root = $PSScriptRoot
)

# المنفذ: الوسيط أولاً، ثم متغيّر البيئة PORT، ثم 8080
if (-not $Port -or $Port -le 0) {
  if ($env:PORT) { $Port = [int]$env:PORT } else { $Port = 8080 }
}

$ErrorActionPreference = 'Stop'

$mime = @{
  '.html' = 'text/html; charset=utf-8'
  '.htm'  = 'text/html; charset=utf-8'
  '.js'   = 'text/javascript; charset=utf-8'
  '.mjs'  = 'text/javascript; charset=utf-8'
  '.css'  = 'text/css; charset=utf-8'
  '.json' = 'application/json; charset=utf-8'
  '.svg'  = 'image/svg+xml'
  '.png'  = 'image/png'
  '.jpg'  = 'image/jpeg'
  '.jpeg' = 'image/jpeg'
  '.gif'  = 'image/gif'
  '.webp' = 'image/webp'
  '.ico'  = 'image/x-icon'
  '.mp3'  = 'audio/mpeg'
  '.wav'  = 'audio/wav'
  '.ogg'  = 'audio/ogg'
  '.mp4'  = 'video/mp4'
  '.webm' = 'video/webm'
  '.woff' = 'font/woff'
  '.woff2'= 'font/woff2'
  '.ttf'  = 'font/ttf'
  '.txt'  = 'text/plain; charset=utf-8'
  '.md'   = 'text/markdown; charset=utf-8'
}

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$Port/")

try {
  $listener.Start()
} catch {
  Write-Host "تعذّر فتح المنفذ $Port — جرّب منفذاً آخر:  -Port 9000" -ForegroundColor Red
  Write-Host $_.Exception.Message
  exit 1
}

Write-Host ""
Write-Host "  جاوبني يعمل الآن" -ForegroundColor Green
Write-Host "  http://localhost:$Port/main-page.html"
Write-Host "  المجلد: $Root"
Write-Host "  للإيقاف: Ctrl+C"
Write-Host ""

$rootFull = (Resolve-Path $Root).Path

while ($listener.IsListening) {
  try {
    $ctx = $listener.GetContext()
  } catch {
    break
  }

  $res = $ctx.Response
  try {
    # فك ترميز المسار (أسماء الملفات العربية) ومنع الخروج خارج المجلد
    $rel = [System.Uri]::UnescapeDataString($ctx.Request.Url.AbsolutePath).TrimStart('/')
    if ([string]::IsNullOrWhiteSpace($rel)) { $rel = 'main-page.html' }
    $rel = $rel -replace '/', '\'

    $path = Join-Path $rootFull $rel
    $full = [System.IO.Path]::GetFullPath($path)

    if (-not $full.StartsWith($rootFull, [StringComparison]::OrdinalIgnoreCase)) {
      $res.StatusCode = 403
      $res.Close()
      continue
    }

    if ((Test-Path $full) -and ((Get-Item $full) -is [System.IO.DirectoryInfo])) {
      $full = Join-Path $full 'main-page.html'
    }

    if (Test-Path $full -PathType Leaf) {
      $ext = [System.IO.Path]::GetExtension($full).ToLower()
      $res.ContentType = if ($mime.ContainsKey($ext)) { $mime[$ext] } else { 'application/octet-stream' }
      $res.Headers.Add('Cache-Control', 'no-cache')
      $bytes = [System.IO.File]::ReadAllBytes($full)
      $res.ContentLength64 = $bytes.Length
      # طلب HEAD يعيد الترويسات فقط بلا محتوى
      if ($ctx.Request.HttpMethod -ne 'HEAD') {
        $res.OutputStream.Write($bytes, 0, $bytes.Length)
      }
      Write-Host ("  200  " + $rel)
    } else {
      $res.StatusCode = 404
      $msg = [System.Text.Encoding]::UTF8.GetBytes("404 - $rel")
      $res.ContentType = 'text/plain; charset=utf-8'
      $res.OutputStream.Write($msg, 0, $msg.Length)
      Write-Host ("  404  " + $rel) -ForegroundColor DarkYellow
    }
  } catch {
    try { $res.StatusCode = 500 } catch {}
  } finally {
    try { $res.Close() } catch {}
  }
}

$listener.Stop()
