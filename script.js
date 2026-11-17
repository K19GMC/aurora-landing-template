// Aurora — small enhancements, no dependencies.
(function () {
  "use strict";

  // ---- Mobile navigation ------------------------------------------------
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("primary-nav");

  if (toggle && nav) {
    const setOpen = (open) => {
      toggle.setAttribute("aria-expanded", String(open));
      nav.classList.toggle("is-open", open);
    };

    toggle.addEventListener("click", () => {
      setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });

    nav.addEventListener("click", (event) => {
      if (event.target.closest("a")) setOpen(false);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") setOpen(false);
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 720) setOpen(false);
    });
  }

  // ---- Current year ------------------------------------------------------
  document.querySelectorAll("[data-year]").forEach((el) => {
    el.textContent = String(new Date().getFullYear());
  });

  // ---- Copy-to-clipboard buttons ----------------------------------------
  document.querySelectorAll("[data-copy]").forEach((button) => {
    const label = button.querySelector("[data-copy-label]");
    const original = label ? label.textContent : button.textContent;
    let timer;

    button.addEventListener("click", async () => {
      const text = button.getAttribute("data-copy") || "";
      try {
        await navigator.clipboard.writeText(text);
        if (label) label.textContent = "Copied: " + text;
      } catch (error) {
        if (label) label.textContent = text;
      }
      clearTimeout(timer);
      timer = setTimeout(() => {
        if (label) label.textContent = original;
      }, 2000);
    });
  });

  // ---- Scroll reveal -----------------------------------------------------
  const targets = document.querySelectorAll(".card, .steps li, .faq details");
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!reduced && "IntersectionObserver" in window && targets.length) {
    targets.forEach((el) => el.classList.add("reveal"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );

    targets.forEach((el) => observer.observe(el));
  }
})();