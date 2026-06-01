import { useEffect } from "react";
import Lenis from "lenis";
import { scrollState } from "../lib/scrollStore";

// Instance Lenis unique, accessible pour le scroll d'ancres (navbar / CTA).
let lenisInstance = null;

export function getLenis() {
  return lenisInstance;
}

// Scroll fluide vers une ancre (#id) ou une position.
export function scrollToTarget(target, options = {}) {
  if (lenisInstance) {
    lenisInstance.scrollTo(target, { offset: -80, duration: 1.2, ...options });
  } else if (typeof target === "string") {
    const el = document.querySelector(target);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }
}

// Initialise le smooth scroll Lenis et alimente scrollState (progress/velocity)
// à chaque frame, sans re-render React.
export function useSmoothScroll(enabled = true) {
  useEffect(() => {
    if (!enabled) return undefined;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.6,
    });
    lenisInstance = lenis;

    lenis.on("scroll", ({ scroll, limit, velocity }) => {
      scrollState.progress = limit > 0 ? scroll / limit : 0;
      scrollState.velocity = velocity;
    });

    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisInstance = null;
    };
  }, [enabled]);
}
