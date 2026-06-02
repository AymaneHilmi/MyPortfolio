import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { scrollToTarget } from "../../hooks/useSmoothScroll";
import { SITE } from "../../data/content";
import { ViewfinderCorners, RecDot, MetaTag } from "../ui/Camera";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative min-h-[100svh] flex flex-col items-center justify-center px-5 text-center overflow-hidden"
    >
      {/* Cadre de viseur */}
      <ViewfinderCorners className="hidden sm:block" size={26} gap={24} />

      {/* Libellés techniques type caméra (desktop) */}
      <div className="hidden sm:flex absolute top-6 left-8 right-8 items-center justify-between">
        <RecDot />
        <MetaTag>{SITE.hero.meta.format}</MetaTag>
      </div>
      <div className="hidden sm:flex absolute bottom-6 left-8 right-8 items-center justify-between">
        <MetaTag>{SITE.hero.meta.gps}</MetaTag>
        <MetaTag>{SITE.hero.meta.exif}</MetaTag>
      </div>

      <motion.div style={{ y, opacity }} className="relative z-10 max-w-3xl">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 font-mono text-[11px] sm:text-xs text-mute uppercase tracking-ultra"
        >
          <span className="w-5 h-px bg-ink/40" />
          {SITE.hero.kicker}
          <span className="w-5 h-px bg-ink/40" />
        </motion.span>

        <h1 className="mt-7 font-display text-ink leading-[0.95] tracking-tightest text-[15vw] sm:text-7xl md:text-8xl">
          {SITE.hero.title[0]}
          <br />
          {SITE.hero.title[1]}
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-6 mx-auto max-w-xl text-ink2 text-base sm:text-lg leading-relaxed font-body"
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
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-ink text-paper font-medium hover:bg-ink2 transition-colors"
          >
            Voir le showreel
          </button>
          <button
            onClick={() => scrollToTarget("#contact")}
            className="w-full sm:w-auto px-7 py-3.5 rounded-full border border-hair text-ink font-medium hover:border-ink/40 transition-colors"
          >
            Demander un devis
          </button>
        </motion.div>
      </motion.div>

      {/* Indicateur de scroll */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10 sm:hidden"
      >
        <span className="font-mono text-[10px] uppercase tracking-ultra text-faint">
          Scroll
        </span>
        <span className="relative w-5 h-8 rounded-full border border-hair grid place-items-start justify-center pt-1.5">
          <span className="w-1 h-1.5 rounded-full bg-ink animate-scroll-hint" />
        </span>
      </motion.div>
    </section>
  );
}
