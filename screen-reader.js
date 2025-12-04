// Screen Reader / Voice Guidance System
(function () {
  let isEnabled = false;
  let currentUtterance = null;
  let listenersAdded = false;

  // Check if browser supports speech synthesis
  const speechSupported = 'speechSynthesis' in window;

  // Log for debugging
  console.log('Screen Reader initialized. Speech supported:', speechSupported);

  // Load saved preference
  const loadScreenReader = () => {
    isEnabled = localStorage.getItem("mk-screen-reader") === "true";
    console.log('Loading screen reader state:', isEnabled);
    if (isEnabled && speechSupported) {
      announceCurrentPage();
      if (!listenersAdded) {
        addInteractionListeners();
        listenersAdded = true;
      }
    }
  };

  // Speak text function
  const speak = (text, interrupt = true) => {
    console.log('Speak called:', text, 'isEnabled:', isEnabled, 'speechSupported:', speechSupported);
    
    if (!speechSupported) {
      console.error('Speech synthesis not supported in this browser');
      return;
    }

    if (!isEnabled) {
      console.warn('Screen reader is not enabled');
      return;
    }

    // Cancel previous speech if interrupt is true
    if (interrupt) {
      window.speechSynthesis.cancel();
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = localStorage.getItem("mk-lang") || "tr-TR";
    utterance.rate = 0.9;
    utterance.pitch = 1;
    utterance.volume = 1;

    utterance.onstart = () => console.log('Speech started:', text);
    utterance.onend = () => console.log('Speech ended');
    utterance.onerror = (e) => console.error('Speech error:', e);

    currentUtterance = utterance;
    window.speechSynthesis.speak(utterance);
  };

  // Enable screen reader
  const enableScreenReader = () => {
    console.log('Enabling screen reader');
    isEnabled = true;
    localStorage.setItem("mk-screen-reader", "true");
    
    // Announce immediately
    speak("Ekran okuyucu açıldı. Sesli rehberlik aktif.");
    
    // Then announce page
    setTimeout(() => {
      announceCurrentPage();
    }, 2000);
    
    // Add event listeners for interactions
    if (!listenersAdded) {
      addInteractionListeners();
      listenersAdded = true;
    }
  };

  // Disable screen reader
  const disableScreenReader = () => {
    console.log('Disabling screen reader');
    speak("Ekran okuyucu kapatıldı.");
    setTimeout(() => {
      isEnabled = false;
      localStorage.setItem("mk-screen-reader", "false");
      if (speechSupported) {
        window.speechSynthesis.cancel();
      }
    }, 2000);
  };

  // Announce current page
  const announceCurrentPage = () => {
    const currentPage = window.location.pathname.split('/').pop();
    let announcement = "";

    switch (currentPage) {
      case "home.html":
      case "index.html":
      case "":
        announcement = "Ana sayfaya hoş geldiniz. Seçenekler: Kimlik kartınızı okutun, e-Devlet ile giriş, Hesap bilgileri ile giriş, Yardım ve destek, Dil seçimi, Erişilebilirlik ayarları.";
        break;
      case "reservation.html":
        announcement = "Rezervasyon oluşturma sayfasındasınız. Tarih, saat ve salon seçimi yaparak rezervasyonunuzu oluşturabilirsiniz.";
        break;
      case "my-reservations.html":
        announcement = "Rezervasyonlarım sayfasındasınız. Aktif ve geçmiş rezervasyonlarınızı görüntüleyebilirsiniz.";
        break;
      case "break.html":
        announcement = "Mola takibi sayfasındasınız. Mola sürenizi başlatabilir ve takip edebilirsiniz.";
        break;
      case "settings.html":
        announcement = "Ayarlar sayfasındasınız. Dil ve erişilebilirlik ayarlarınızı değiştirebilirsiniz.";
        break;
      case "help.html":
        announcement = "Yardım ve destek sayfasındasınız. Talep oluşturabilir ve kullanım kılavuzunu görüntüleyebilirsiniz.";
        break;
      case "auth.html":
        announcement = "Kimlik doğrulama sayfasındasınız. Giriş bilgilerinizi giriniz.";
        break;
      case "reservation-success.html":
        announcement = "Rezervasyon başarılı. Rezervasyon bilgileriniz gösterilmektedir.";
        break;
      case "accesswarning.html":
        announcement = "Giriş yapılamadı. Gecikmiş kitap iadeniz bulunmaktadır. Lütfen en yakın kütüphane şubesine başvurunuz.";
        break;
      default:
        announcement = "Sayfa yüklendi.";
    }

    setTimeout(() => speak(announcement), 500);
  };

  // Add interaction listeners
  const addInteractionListeners = () => {
    // Button clicks
    document.addEventListener("click", (e) => {
      if (!isEnabled) return;
      
      const target = e.target.closest("button, a");
      if (!target) return;

      let text = target.textContent.trim();
      const ariaLabel = target.getAttribute("aria-label");
      
      if (ariaLabel) {
        text = ariaLabel;
      }

      if (text) {
        speak(text + " düğmesine basıldı");
      }
    });

    // Focus events
    document.addEventListener("focus", (e) => {
      if (!isEnabled) return;
      
      const target = e.target;
      let announcement = "";

      if (target.tagName === "INPUT") {
        const label = document.querySelector(`label[for="${target.id}"]`);
        const labelText = label ? label.textContent.trim() : "Giriş alanı";
        const type = target.type;
        announcement = `${labelText}. ${type === "text" ? "Metin" : type} girişi`;
      } else if (target.tagName === "TEXTAREA") {
        announcement = "Metin alanı. Açıklama yazabilirsiniz";
      } else if (target.tagName === "SELECT") {
        announcement = "Açılır menü. Seçim yapabilirsiniz";
      } else if (target.tagName === "BUTTON") {
        const ariaLabel = target.getAttribute("aria-label");
        announcement = ariaLabel || target.textContent.trim() + " düğmesi";
      }

      if (announcement) {
        speak(announcement, false);
      }
    }, true);

    // Form submissions
    document.addEventListener("submit", (e) => {
      if (!isEnabled) return;
      speak("Form gönderiliyor");
    });
  };

  // Export functions for external use immediately
  window.screenReader = {
    isEnabled: () => isEnabled,
    enable: enableScreenReader,
    disable: disableScreenReader,
    speak: speak
  };

  // Make speak function globally available
  window.screenReaderSpeak = speak;

  console.log('window.screenReader exported:', window.screenReader);

  // Initialize on page load
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", loadScreenReader);
  } else {
    loadScreenReader();
  }
})();

