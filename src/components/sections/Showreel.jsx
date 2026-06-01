import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "../ui/Reveal";
import { SHOWREEL } from "../../data/content";

function PlayIcon({ className = "" }) {
  return (
    <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

function Tile({ item, onOpen }) {
  return (
    <button
      onClick={() => item.src && onOpen(item)}
      className={`group relative w-full aspect-[4/5] sm:aspect-square rounded-2xl overflow-hidden border border-line bg-surface2 text-left ${
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
          className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
          onMouseEnter={(e) => e.currentTarget.play()}
          onMouseLeave={(e) => {
            e.currentTarget.pause();
            e.currentTarget.currentTime = 0;
          }}
        />
      ) : (
        <div className="absolute inset-0 grain bg-gradient-to-br from-surface2 to-ink" />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-transparent" />

      <div className="absolute inset-0 flex items-center justify-center">
        <span className="grid place-items-center w-12 h-12 rounded-full border border-ghost/30 text-ghost/90 backdrop-blur-sm group-hover:border-accent group-hover:text-accent group-hover:scale-110 transition-all">
          <PlayIcon />
        </span>
      </div>

      <div className="absolute bottom-0 inset-x-0 p-4">
        <p className="text-[11px] uppercase tracking-widest text-accent/90">
          {item.category}
        </p>
        <p className="mt-1 font-medium text-ghost">{item.title}</p>
        {!item.src && (
          <p className="mt-0.5 text-xs text-faint">Bientôt en ligne</p>
        )}
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
              <p className="text-accent text-sm uppercase tracking-ultra font-medium">
                Showreel
              </p>
              <h2 className="mt-4 font-display text-4xl sm:text-6xl text-ghost tracking-tightest leading-[1.02]">
                Mes images.
              </h2>
            </div>
            <p className="max-w-sm text-muted font-body leading-relaxed">
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
            className="fixed inset-0 z-[60] grid place-items-center bg-ink/90 backdrop-blur-md p-4"
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ type: "spring", damping: 26, stiffness: 260 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden border border-line shadow-glow"
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
              className="absolute top-5 right-5 grid place-items-center w-11 h-11 rounded-full border border-line text-ghost hover:text-accent hover:border-accent transition-colors"
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
