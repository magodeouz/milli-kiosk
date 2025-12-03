// 30 saniyelik geri sayım timer'ı
(function () {
  // Ana sayfa hariç diğer sayfalarda çalışsın
  const currentPage = window.location.pathname.split('/').pop();
  if (currentPage === 'home.html' || currentPage === 'index.html' || currentPage === '') {
    return;
  }

  let timeLeft = 30;
  let timerInterval = null;

  // Geri sayım container'ı oluştur
  const createCountdown = () => {
    const countdown = document.createElement('div');
    countdown.id = 'auto-return-countdown';
    countdown.className = 'fixed top-4 right-4 w-14 h-14 bg-primary/90 text-white rounded-full shadow-lg z-50 flex items-center justify-center';
    countdown.innerHTML = `
      <span id="countdown-time" class="text-lg font-bold">${timeLeft}</span>
    `;
    document.body.appendChild(countdown);
    return countdown;
  };

  // Geri sayımı başlat
  const startCountdown = () => {
    const countdown = createCountdown();
    const timeElement = document.getElementById('countdown-time');

    timerInterval = setInterval(() => {
      timeLeft--;
      if (timeElement) {
        timeElement.textContent = timeLeft;
      }

      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        window.location.href = './home.html';
      }
    }, 1000);
  };

  // Kullanıcı etkileşiminde timer'ı sıfırla
  const resetTimer = () => {
    timeLeft = 30;
    const timeElement = document.getElementById('countdown-time');
    if (timeElement) {
      timeElement.textContent = timeLeft;
    }
  };

  // Sayfa yüklendiğinde başlat
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', startCountdown);
  } else {
    startCountdown();
  }

  // Kullanıcı etkileşimlerini dinle
  ['click', 'keydown', 'mousemove', 'touchstart'].forEach(eventType => {
    document.addEventListener(eventType, resetTimer, { passive: true });
  });
})();

