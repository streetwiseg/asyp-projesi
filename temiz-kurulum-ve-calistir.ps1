# temiz-kurulum-ve-calistir.ps1

# 1. node_modules klasörünü sil
try {
    rm -r .\node_modules -Force -ErrorAction Stop
    Write-Host "✅ node_modules klasörü silindi."
} catch {
    Write-Host "❌ node_modules silinemedi. Hata: $_" -ForegroundColor Red
}

# 2. package-lock.json dosyasını sil
try {
    rm .\package-lock.json -Force -ErrorAction Stop
    Write-Host "✅ package-lock.json silindi."
} catch {
    Write-Host "❌ package-lock.json silinemedi. Hata: $_" -ForegroundColor Red
}

# 3. Bağımlılıkları yükle
try {
    npm install
    Write-Host "✅ npm install tamamlandı."
} catch {
    Write-Host "❌ Bağımlılıklar yüklenemedi. Hata: $_" -ForegroundColor Red
}

# 4. Geliştirme sunucusunu başlat
try {
    npm run dev
} catch {
    Write-Host "❌ Sunucu başlatılamadı. Hata: $_" -ForegroundColor Red
}
