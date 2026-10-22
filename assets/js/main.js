// Sudora site: small progressive enhancements. Every page works without this script.
(function () {
  "use strict";

  var root = document.documentElement;
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Reveal-on-scroll (skipped for reduced motion or missing IntersectionObserver).
  var revealables = document.querySelectorAll(".reveal");
  if (!reduceMotion && "IntersectionObserver" in window && revealables.length) {
    root.classList.add("js");
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -10% 0px" });
    revealables.forEach(function (el) { io.observe(el); });
  }

  // Back-to-top button.
  var backToTop = document.querySelector(".back-to-top");
  if (backToTop) {
    var toggle = function () { backToTop.classList.toggle("show", window.scrollY > 600); };
    window.addEventListener("scroll", toggle, { passive: true });
    toggle();
    backToTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
      var target = document.getElementById("main");
      if (target) target.focus({ preventScroll: true });
    });
  }

  // Highlight the policy section currently in view in the table of contents.
  var tocLinks = document.querySelectorAll(".toc a[href^='#']");
  if (tocLinks.length && "IntersectionObserver" in window) {
    var byId = {};
    tocLinks.forEach(function (a) { byId[a.getAttribute("href").slice(1)] = a; });
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        tocLinks.forEach(function (a) { a.classList.remove("active"); a.removeAttribute("aria-current"); });
        var link = byId[entry.target.id];
        if (link) { link.classList.add("active"); link.setAttribute("aria-current", "location"); }
      });
    }, { rootMargin: "-20% 0px -70% 0px" });
    Object.keys(byId).forEach(function (id) {
      var section = document.getElementById(id);
      if (section) spy.observe(section);
    });
  }

  // Close the mobile table of contents after choosing a section.
  document.querySelectorAll(".toc-mobile a[href^='#']").forEach(function (a) {
    a.addEventListener("click", function () {
      var details = a.closest("details");
      if (details) details.open = false;
    });
  });
})();
