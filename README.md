# Milli Kütüphane Ön Yüzleri

Bu repo, Milli Kütüphane için hazırlanan statik HTML ekranlarını içerir. Tüm sayfalar Tailwind CDN üzerinden stillendirildiği için derleme gerektirmez.

## Özellikler

- 🌍 **Çok Dilli Destek**: Türkçe, İngilizce ve Arapça dil desteği
- 🎨 **Modern UI**: Tailwind CSS ile responsive tasarım
- ⚡ **Hızlı Navigasyon**: Client-side routing desteği
- 🎯 **Kiosk Optimizasyonu**: 1024x1280 dikey ekran için optimize edilmiş

## Kurulum ve Çalıştırma

1. Bağımlılıkları kurun:
   ```bash
   npm install
   ```

2. Geliştirme sunucusunu açın:
   ```bash
   npm run dev
   ```

3. Tarayıcıda `http://localhost:8080` adresini açarak projeyi görüntüleyebilirsiniz.

Lite-server varsayılan olarak değişiklikleri takip eder ve tarayıcıyı otomatik olarak yeniler.

## Sayfalar

- `index.html`: Ana giriş sayfası (home.html ile aynı içerik)
- `home.html`: Kütüphane giriş ekranı
- `auth.html`: Kimlik doğrulama seçenekleri
- `break.html`: Mola takip arayüzü
- `reservation.html`: Masa rezervasyonu
- `my-reservations.html`: Rezervasyon geçmişi ve aktif rezervasyonlar
- `reservation-success.html`: Rezervasyon onay ekranı
- `foreign-register.html`: Yabancı üyelik kaydı
- `accesswarning.html`: Erişim uyarısı ekranı
- `settings.html`: Kullanıcı ayarları ve dil seçimi
- `help.html`: Yardım ve destek

## Dosya Yapısı

- `i18n.js`: Çok dilli destek için çeviri dosyası
- `router.js`: Client-side routing için JavaScript dosyası
- `main-logo-affix.png`: Milli Kütüphane logosu

## Dil Değiştirme

Dil değiştirmek için:
1. Herhangi bir sayfadaki dil butonuna tıklayın
2. Açılan modal'dan istediğiniz dili seçin
3. Değişiklik tüm sayfalarda otomatik olarak uygulanır

Dil tercihi `localStorage`'da saklanır ve sonraki ziyaretlerde hatırlanır.

## Notlar

- Her sayfa kendi başına açılabilir; Tailwind CDN bağlantıları içindedir
- Tüm sayfalar responsive tasarıma sahiptir
- Arapça dil seçildiğinde sayfa RTL (sağdan sola) moduna geçer
- Proje kiosk ekranları için optimize edilmiştir (1024x1280)

## Teknolojiler

- HTML5
- Tailwind CSS (CDN)
- Vanilla JavaScript
- Material Symbols (Icons)
