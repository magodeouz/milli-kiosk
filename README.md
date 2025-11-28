# Milli Kütüphane Ön Yüzleri

Bu repo, Milli Kütüphane için hazırlanan statik HTML ekranlarını içerir. Tüm sayfalar Tailwind CDN üzerinden stillendirildiği için derleme gerektirmez.

## Dizini Çalıştırma

1. Bağımlılıkları kurun:
   ```bash
   npm install
   ```
2. Geliştirme sunucusunu açın:
   ```bash
   npm run dev
   ```
3. Tarayıcıda `http://localhost:3000` adresini açarak `index.html` üzerinden diğer sayfalara geçiş yapabilirsiniz.

Lite-server varsayılan olarak değişiklikleri takip eder ve tarayıcıyı yeniler.

## Sayfalar

- `index.html`: Tüm ekranlara bağlantı veren giriş sayfası.
- `home.html`: Kütüphane giriş ekranı.
- `auth.html`: Kimlik doğrulama seçenekleri.
- `break.html`: Mola takip arayüzü.
- `reservation.html`: Masa rezervasyonu.
- `foreign-register.html`: Yabancı üyelik kaydı.
- `accesswarning.html`: Erişim uyarısı ekranı.
- `settings.html`: Kullanıcı ayarları.
- `help.html`: Yardım ve destek.

## Notlar

- Her sayfa kendi başına açılabilir; Tailwind CDN bağlantıları içindedir.
- Yeni ekran eklerken dosyayı kök dizine koyup `index.html` içerisine bağlantısını eklemeniz yeterlidir.


