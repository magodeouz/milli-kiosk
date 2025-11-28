(function () {
  const navigate = (target) => {
    if (!target) {
      return;
    }
    window.location.href = target;
  };

  const wireRoutes = () => {
    document.querySelectorAll("[data-route]").forEach((el) => {
      const to = el.getAttribute("data-route");
      if (!to) {
        return;
      }

      // Skip anchors that already have a non-placeholder href
      if (
        el.tagName.toLowerCase() === "a" &&
        el.getAttribute("href") &&
        el.getAttribute("href") !== "#"
      ) {
        return;
      }

      el.addEventListener("click", (event) => {
        event.preventDefault();
        navigate(to);
      });
    });
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", wireRoutes);
  } else {
    wireRoutes();
  }
})();


