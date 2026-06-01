import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { scrollToTarget } from "../hooks/useSmoothScroll";
import { SITE } from "../data/content";

const LINKS = [
  { label: "Services", href: "#services" },
  { label: "Showreel", href: "#showreel" },
  { label: "Matériel", href: "#materiel" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (href) => (e) => {
    e.preventDefault();
    setOpen(false);
    scrollToTarget(href);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div
        className={`mx-auto max-w-6xl px-5 sm:px-8 flex items-center justify-between rounded-2xl transition-all duration-500 ${
          scrolled ? "glass border border-line/60 py-3 shadow-glowSoft" : "py-1"
        }`}
        style={scrolled ? { marginLeft: 16, marginRight: 16 } : {}}
      >
        {/* Logo */}
        <a
          href="#top"
          onClick={go("#top")}
          className="flex items-center gap-2 group"
        >
          <span className="grid place-items-center w-8 h-8 rounded-full border border-accent/50 text-accent shadow-glow">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <circle cx="6" cy="6" r="2.4" />
              <circle cx="18" cy="6" r="2.4" />
              <circle cx="6" cy="18" r="2.4" />
              <circle cx="18" cy="18" r="2.4" />
              <rect x="9.5" y="9.5" width="5" height="5" rx="1.2" />
              <path d="M8 8l1.6 1.6M16 8l-1.6 1.6M8 16l1.6-1.6M16 16l-1.6-1.6" />
            </svg>
          </span>
          <span className="font-display text-ghost text-sm tracking-tight">
            {SITE.name}
            <span className="text-accent"> · {SITE.tagline}</span>
          </span>
        </a>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-1">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={go(l.href)}
              className="px-4 py-2 text-sm text-muted hover:text-ghost transition-colors font-medium"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={go("#contact")}
            className="ml-2 px-4 py-2 text-sm font-medium text-ink bg-accent-gradient rounded-full hover:shadow-glow transition-shadow"
          >
            Devis
          </a>
        </nav>

        {/* Burger mobile */}
        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden grid place-items-center w-10 h-10 rounded-full border border-line text-ghost"
        >
          <div className="relative w-5 h-3">
            <span
              className={`absolute left-0 top-0 w-5 h-0.5 bg-current transition-transform duration-300 ${
                open ? "translate-y-[6px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 bottom-0 w-5 h-0.5 bg-current transition-transform duration-300 ${
                open ? "-translate-y-[6px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Menu mobile */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="md:hidden mx-4 mt-2 glass border border-line/60 rounded-2xl p-2"
          >
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={go(l.href)}
                className="block px-4 py-3 text-ghost/90 hover:text-accent transition-colors text-lg font-medium"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={go("#contact")}
              className="block mt-1 px-4 py-3 text-center text-ink bg-accent-gradient rounded-xl font-medium"
            >
              Demander un devis
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
