// Large Font Mode Handler
(function () {
  // Load saved preference on page load
  const loadLargeFont = () => {
    const isLargeFont = localStorage.getItem("mk-large-font") === "true";
    if (isLargeFont) {
      document.documentElement.classList.add("large-font");
    }
  };

  // Initialize on page load
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", loadLargeFont);
  } else {
    loadLargeFont();
  }
})();

