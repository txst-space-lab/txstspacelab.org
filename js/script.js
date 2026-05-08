/* =========================================================
   Texas State University Space Lab
   script.js — minimal progressive enhancement
   ========================================================= */

(function () {
  "use strict";

  /* ----- Mobile nav toggle ----- */
  const toggle = document.querySelector(".nav-toggle");
  const navList = document.getElementById("nav-list");

  if (toggle && navList) {
    toggle.addEventListener("click", function () {
      const expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!expanded));
      navList.classList.toggle("open");
    });

    // Close menu when a link is clicked (mobile UX)
    navList.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        toggle.setAttribute("aria-expanded", "false");
        navList.classList.remove("open");
      });
    });

    // Close menu on Escape
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && navList.classList.contains("open")) {
        toggle.setAttribute("aria-expanded", "false");
        navList.classList.remove("open");
        toggle.focus();
      }
    });
  }

  /* ----- Auto-update footer year ----- */
  const yearEl = document.getElementById("current-year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  /* ----- Auto-populate team preview from /team/ -----
     Any element with [data-team-preview="N"] gets its first N children replaced
     with the first N .team-card blocks scraped from /team/. The static cards
     already in place serve as a fallback if this fetch fails or JS is disabled.
  */
  const previewGrid = document.querySelector("[data-team-preview]");
  if (previewGrid && typeof fetch === "function") {
    const count = parseInt(previewGrid.getAttribute("data-team-preview"), 10) || 4;
    fetch("/team/", { credentials: "same-origin" })
      .then(function (res) { return res.ok ? res.text() : null; })
      .then(function (html) {
        if (!html) return;
        const doc = new DOMParser().parseFromString(html, "text/html");
        const cards = doc.querySelectorAll(".team-card");
        if (cards.length < count) return;
        const slice = Array.from(cards).slice(0, count);
        previewGrid.innerHTML = slice.map(function (c) { return c.outerHTML; }).join("\n");
      })
      .catch(function () { /* keep fallback */ });
  }
})();
