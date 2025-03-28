# 1. TailwindCSS Paketlerini Kaldır
Write-Host "TailwindCSS ve ilgili paketler kaldırılıyor..."
npm uninstall tailwindcss @tailwindcss/postcss

# 2. Bootstrap'i Yükle
Write-Host "Bootstrap paketi yükleniyor..."
npm install bootstrap

# 3. `postcss.config.cjs` Dosyasını Güncelle
Write-Host "postcss.config.cjs dosyası güncelleniyor..."
$PostCssConfigPath = "C:\Users\soner\ASYP\asyp-vite\postcss.config.cjs"

# Eğer postcss.config.cjs dosyası varsa, onu temizle
if (Test-Path $PostCssConfigPath) {
    Set-Content -Path $PostCssConfigPath -Value @"
module.exports = {
  plugins: [
    require('autoprefixer')  # Bootstrap için autoprefixer ekliyoruz
  ]
}
"@
}

# 4. Tailwind ile İlgili CSS Dosyalarını Temizle
Write-Host "CSS dosyalarındaki Tailwind ile ilgili satırlar temizleniyor..."
$CssFiles = @("C:\Users\soner\ASYP\asyp-vite\src\app.css", "C:\Users\soner\ASYP\asyp-vite\src\index.css")

foreach ($file in $CssFiles) {
    if (Test-Path $file) {
        # Tailwind ile ilgili her şeyi temizle
        (Get-Content $file) | Where-Object {$_ -notmatch "tailwind"} | Set-Content $file
        # Bootstrap CSS dosyasını dahil et
        Add-Content $file "@import 'bootstrap/dist/css/bootstrap.min.css';"
    }
}

# 5. Tailwind Konfigürasyon Dosyasını Kaldır
Write-Host "Tailwind konfigürasyon dosyası siliniyor..."
$TailwindConfigPath = "C:\Users\soner\ASYP\asyp-vite\tailwind.config.ts"

if (Test-Path $TailwindConfigPath) {
    Remove-Item $TailwindConfigPath -Force
}

# 6. Proje Yapılandırma Dosyalarını Kontrol Et ve Temizle
Write-Host "Yapılandırma dosyaları temizleniyor..."

# Vite config dosyasını temizle (Vite config içinde Tailwind ile ilgili satırlar varsa)
$ViteConfigPath = "C:\Users\soner\ASYP\asyp-vite\vite.config.ts"
if (Test-Path $ViteConfigPath) {
    $ViteConfig = Get-Content $ViteConfigPath
    $ViteConfig = $ViteConfig -replace 'tailwindcss', 'bootstrap'
    Set-Content -Path $ViteConfigPath -Value $ViteConfig
}

# 7. node_modules Klasörünü Temizle ve Yeniden Yükle
Write-Host "node_modules klasörü temizleniyor ve bağımlılıklar yeniden yükleniyor..."
Remove-Item -Recurse -Force node_modules
npm install

Write-Host "Bootstrap'e geçiş işlemi tamamlandı."
