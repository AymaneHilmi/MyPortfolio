import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "../ui/Reveal";
import { MetaTag, ViewfinderCorners } from "../ui/Camera";
import { SHOWREEL } from "../../data/content";

function PlayIcon({ className = "" }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

function Tile({ item, onOpen }) {
  return (
    <button
      onClick={() => item.src && onOpen(item)}
      className={`group relative w-full aspect-[4/5] sm:aspect-square rounded-2xl overflow-hidden border border-hair bg-paper2 text-left ${
        item.src ? "cursor-pointer" : "cursor-default"
      }`}
    >
      {item.src ? (
        <video
          src={item.src}
          muted
          loop
          playsInline
          preload="none"
          poster={item.poster}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          onMouseEnter={(e) => e.currentTarget.play()}
          onMouseLeave={(e) => {
            e.currentTarget.pause();
            e.currentTarget.currentTime = 0;
          }}
        />
      ) : (
        <div className="absolute inset-0 bg-paper2" />
      )}

      {/* Encadrement viseur au survol */}
      <ViewfinderCorners
        className="opacity-0 group-hover:opacity-100 transition-opacity text-ink"
        size={16}
        gap={10}
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <span className="grid place-items-center w-12 h-12 rounded-full bg-paper/80 backdrop-blur-sm border border-hair text-ink group-hover:bg-ink group-hover:text-paper group-hover:scale-110 transition-all">
          <PlayIcon className="translate-x-[1px]" />
        </span>
      </div>

      <div className="absolute bottom-0 inset-x-0 p-4">
        <MetaTag className="text-ink/60">{item.category}</MetaTag>
        <p className="mt-1 font-medium text-ink">{item.title}</p>
        {!item.src && <p className="mt-0.5 text-xs text-faint">Bientôt en ligne</p>}
      </div>
    </button>
  );
}

export default function Showreel() {
  const [active, setActive] = useState(null);

  return (
    <section id="showreel" className="relative py-24 sm:py-32 px-5 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <MetaTag>02 — SHOWREEL</MetaTag>
              <h2 className="mt-4 font-display text-4xl sm:text-6xl text-ink tracking-tightest leading-[1.02]">
                Mes images.
              </h2>
            </div>
            <p className="max-w-sm text-ink2 font-body leading-relaxed">
              Une sélection de plans aériens et FPV. Survolez pour prévisualiser,
              cliquez pour voir en grand.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
          {SHOWREEL.map((item, i) => (
            <Reveal key={item.id} delay={(i % 3) * 0.08}>
              <Tile item={item} onOpen={setActive} />
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[60] grid place-items-center bg-ink/85 backdrop-blur-md p-4"
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ type: "spring", damping: 26, stiffness: 260 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-soft"
            >
              <video
                src={active.src}
                controls
                autoPlay
                playsInline
                className="w-full h-full object-cover bg-black"
              />
            </motion.div>
            <button
              onClick={() => setActive(null)}
              aria-label="Fermer"
              className="absolute top-5 right-5 grid place-items-center w-11 h-11 rounded-full border border-paper/30 text-paper hover:bg-paper hover:text-ink transition-colors"
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
