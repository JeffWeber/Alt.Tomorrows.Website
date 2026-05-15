// ─────────────────────────────────────────────────────────────────
// Alternate Tomorrows — homepage JS
// Tag filtering, staggered entry animations.
// ─────────────────────────────────────────────────────────────────

(function () {
  "use strict";

  // ── Theme toggle ────────────────────────────────────────────────
  const root = document.documentElement;

  // Persist theme in localStorage
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

  // ── Tag filtering ────────────────────────────────────────────────
  let activeTag = "All";

  function applyFilter() {
    const storiesCol = document.getElementById("stories-col");
    const vignettesCol = document.getElementById("vignettes-col");
    const countEl = document.getElementById("filter-count");

    let storyCount = 0;
    let vignetteCount = 0;

    // Filter story rows
    storiesCol.querySelectorAll("[data-tags]").forEach((el) => {
      const tags = el.dataset.tags.split(",");
      const visible = activeTag === "All" || tags.includes(activeTag);
      el.style.display = visible ? "" : "none";
      if (visible) storyCount++;
    });

    // Filter vignette rows
    vignettesCol.querySelectorAll("[data-tags]").forEach((el) => {
      const tags = el.dataset.tags.split(",");
      const visible = activeTag === "All" || tags.includes(activeTag);
      el.style.display = visible ? "" : "none";
      if (visible) vignetteCount++;
    });

    // Update column headers count
    const sCount = document.getElementById("stories-count");
    const vCount = document.getElementById("vignettes-count");
    if (sCount) sCount.textContent = String(storyCount).padStart(2, "0") + " entries";
    if (vCount) vCount.textContent = String(vignetteCount).padStart(2, "0") + " entries";

    // Update filter bar count
    if (countEl) countEl.textContent = String(storyCount + vignetteCount).padStart(2, "0") + " ENTRIES";

    // Update active button state
    document.querySelectorAll(".filterbar__group button").forEach((btn) => {
      btn.setAttribute("aria-pressed", btn.dataset.tag === activeTag ? "true" : "false");
      btn.querySelector(".pill-dot").style.background =
        btn.dataset.tag === activeTag ? "var(--accent)" : "";
    });
  }

  // Wire up filter buttons
  document.querySelectorAll(".filterbar__group button").forEach((btn) => {
    btn.addEventListener("click", () => {
      activeTag = btn.dataset.tag;
      applyFilter();
    });
  });

  // ── Tag chip clicks inside rows ──────────────────────────────────
  document.querySelectorAll(".ledger-row__tag, .ledger-vrow__tag").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      const t = btn.dataset.tag;
      activeTag = activeTag === t ? "All" : t;
      applyFilter();
    });
  });

  // ── Staggered entry animation ────────────────────────────────────
  const enterEls = document.querySelectorAll(".enter");
  enterEls.forEach((el, i) => {
    el.style.animationDelay = Math.min(i, 11) * 40 + "ms";
  });

  // Initial filter state
  applyFilter();
})();
