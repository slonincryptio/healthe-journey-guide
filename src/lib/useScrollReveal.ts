import { useEffect } from "react";

/**
 * Adds .reveal-in to elements when they scroll into view.
 * Targets every <section> on the page plus common card/step/stage children
 * (staggered). Honors prefers-reduced-motion.
 */
export function useScrollReveal() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      document.querySelectorAll<HTMLElement>(
        "section, .ll-result-card, .ll-step, .ll-stage, .ll-steps li, .es-program-card, .es-approach-item, .ll-check-list li, .wl-hero-pills span, .es-feature, .es-stat",
      ).forEach((el) => el.classList.add("reveal-in"));
      return;
    }

    const sectionTargets = Array.from(
      document.querySelectorAll<HTMLElement>("section"),
    );
    sectionTargets.forEach((el) => el.classList.add("reveal-section"));

    const itemSelector =
      ".ll-result-card,.ll-step,.ll-stage,.ll-steps > li,.es-program-card,.es-approach-item,.ll-check-list > li,.wl-hero-pills > span,.es-feature,.es-stat";
    const itemTargets = Array.from(
      document.querySelectorAll<HTMLElement>(itemSelector),
    );
    itemTargets.forEach((el, i) => {
      el.classList.add("reveal-item");
      const parent = el.parentElement;
      const siblings = parent
        ? Array.from(parent.querySelectorAll<HTMLElement>(":scope > *")).filter(
            (c) => c.classList.contains("reveal-item"),
          )
        : [];
      const idx = siblings.indexOf(el);
      el.style.transitionDelay = `${Math.min(idx, 6) * 80}ms`;
      void i;
    });

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-in");
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: [0, 0.05, 0.15], rootMargin: "0px 0px -5% 0px" },
    );

    [...sectionTargets, ...itemTargets].forEach((el) => io.observe(el));

    // Failsafe 1: reveal anything already in/above viewport on mount
    const revealVisible = () => {
      const vh = window.innerHeight;
      [...sectionTargets, ...itemTargets].forEach((el) => {
        if (el.classList.contains("reveal-in")) return;
        const r = el.getBoundingClientRect();
        if (r.top < vh * 0.95 && r.bottom > 0) {
          el.classList.add("reveal-in");
          io.unobserve(el);
        }
      });
    };
    requestAnimationFrame(revealVisible);
    // Failsafe 2: scroll/resize handler in case IntersectionObserver misfires on mobile
    const onScroll = () => revealVisible();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    // Failsafe 3: reveal everything after 4s no matter what
    const t = window.setTimeout(() => {
      [...sectionTargets, ...itemTargets].forEach((el) => el.classList.add("reveal-in"));
    }, 4000);

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.clearTimeout(t);
    };
  }, []);
}