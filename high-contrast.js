// High Contrast Mode Handler
(function () {
  // Load saved preference on page load
  const loadHighContrast = () => {
    const isHighContrast = localStorage.getItem("mk-high-contrast") === "true";
    if (isHighContrast) {
      document.documentElement.classList.add("high-contrast");
    }
  };

  // Initialize on page load
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", loadHighContrast);
  } else {
    loadHighContrast();
  }
})();

