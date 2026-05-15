// ─────────────────────────────────────────────────────────────────
// Alternate Tomorrows — story page JS
// Topbar hide-on-scroll-down, theme persistence.
// ─────────────────────────────────────────────────────────────────

(function () {
  "use strict";

  // ── Theme (persisted across pages) ──────────────────────────────
  const root = document.documentElement;
  const savedTheme = localStorage.getItem("at-theme") || "dark";
  root.setAttribute("data-theme", savedTheme);

  const themeBtn = document.getElementById("theme-toggle");
  if (themeBtn) {
    themeBtn.textContent = savedTheme === "dark" ? "Light" : "Dark";
    themeBtn.addEventListener("click", () => {
      const current = root.getAttribute("data-theme");
      const next = current === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      localStorage.setItem("at-theme", next);
      themeBtn.textContent = next === "dark" ? "Light" : "Dark";
    });
  }

  // ── Topbar hide-on-scroll-down ───────────────────────────────────
  const topbar = document.querySelector(".topbar");
  if (topbar) {
    let lastY = 0;
    window.addEventListener(
      "scroll",
      () => {
        const y = window.scrollY;
        if (y < 80) {
          topbar.classList.remove("is-hidden");
          lastY = y;
          return;
        }
        const dy = y - lastY;
        if (Math.abs(dy) < 6) return;
        topbar.classList.toggle("is-hidden", dy > 0);
        lastY = y;
      },
      { passive: true }
    );
  }
})();
