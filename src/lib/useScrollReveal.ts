import { useEffect, useLayoutEffect } from "react";

const useIsomorphicLayoutEffect =
  typeof window === "undefined" ? useEffect : useLayoutEffect;

/**
 * Adds .reveal-in to elements when they scroll into view.
 * Targets every <section> on the page plus common card/step/stage children
 * (staggered). Honors prefers-reduced-motion.
 */
export function useScrollReveal() {
  useIsomorphicLayoutEffect(() => {
    if (typeof window === "undefined") return;
    const revealSelector =
      "section, .es-hero-left, .es-hero-right, .ll-hero-text, .ll-hero-photo-wrap, .es-section-inner, .es-about-photo-wrap, .es-about-inner > div:last-child, .ll-forwhom-text, .ll-forwhom-photo, .ll-result-card, .ll-step, .ll-stage, .ll-steps li, .es-program-card, .es-approach-item, .ll-check-list li, .wl-hero-pills span, .wl-cgm, .ll-pricing-included, .ll-pricing-price, .es-cta-inner, .es-feature, .es-stat";
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      document.querySelectorAll<HTMLElement>(revealSelector).forEach((el) => el.classList.add("reveal-in"));
      return;
    }

    const sectionTargets = Array.from(
      document.querySelectorAll<HTMLElement>("section"),
    );
    sectionTargets.forEach((el) => el.classList.add("reveal-section"));

    const itemSelector =
      ".es-hero-left,.es-hero-right,.ll-hero-text,.ll-hero-photo-wrap,.es-section-inner,.es-about-photo-wrap,.es-about-inner > div:last-child,.ll-forwhom-text,.ll-forwhom-photo,.ll-result-card,.ll-step,.ll-stage,.ll-steps > li,.es-program-card,.es-approach-item,.ll-check-list > li,.wl-hero-pills > span,.wl-cgm,.ll-pricing-included,.ll-pricing-price,.es-cta-inner,.es-feature,.es-stat";
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
      { threshold: [0, 0.01, 0.1], rootMargin: "0px 0px -8% 0px" },
    );

    [...sectionTargets, ...itemTargets].forEach((el) => io.observe(el));

    // Failsafe 1: reveal anything already in/above viewport on mount
    const revealVisible = () => {
      const vh = window.innerHeight;
      [...sectionTargets, ...itemTargets].forEach((el) => {
        if (el.classList.contains("reveal-in")) return;
        const r = el.getBoundingClientRect();
        if (r.top < vh * 0.88 && r.bottom > 0) {
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
    const t = window.setTimeout(revealVisible, 250);

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.clearTimeout(t);
    };
  }, []);
}