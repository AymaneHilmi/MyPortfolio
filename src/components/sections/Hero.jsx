import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { scrollToTarget } from "../../hooks/useSmoothScroll";
import { SITE } from "../../data/content";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Le contenu s'éloigne et s'estompe au scroll (parallaxe)
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative min-h-[100svh] flex flex-col items-center justify-center px-5 text-center overflow-hidden"
    >
      <motion.div style={{ y, opacity }} className="relative z-10 max-w-3xl">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-line glass text-xs sm:text-sm text-muted uppercase tracking-ultra"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-soft" />
          {SITE.hero.kicker}
        </motion.span>

        <h1 className="mt-7 font-display text-ghost leading-[0.95] tracking-tightest text-[15vw] sm:text-7xl md:text-8xl">
          {SITE.hero.title[0]}
          <br />
          <span className="text-gradient">{SITE.hero.title[1]}</span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-6 mx-auto max-w-xl text-muted text-base sm:text-lg leading-relaxed font-body"
        >
          {SITE.hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <button
            onClick={() => scrollToTarget("#showreel")}
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-accent-gradient text-ink font-medium hover:shadow-glow transition-shadow"
          >
            Voir le showreel
          </button>
          <button
            onClick={() => scrollToTarget("#contact")}
            className="w-full sm:w-auto px-7 py-3.5 rounded-full border border-line text-ghost font-medium hover:border-accent/60 hover:text-accent transition-colors"
          >
            Demander un devis
          </button>
        </motion.div>
      </motion.div>

      {/* Indicateur de scroll */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-[10px] uppercase tracking-ultra text-faint">
          Scroll
        </span>
        <span className="relative w-5 h-8 rounded-full border border-line grid place-items-start justify-center pt-1.5">
          <span className="w-1 h-1.5 rounded-full bg-accent animate-scroll-hint" />
        </span>
      </motion.div>

      {/* Dégradé de transition vers la section suivante */}
      <div className="pointer-events-none absolute bottom-0 inset-x-0 h-40 bg-fade-bottom" />
    </section>
  );
}
