import Reveal from "../ui/Reveal";
import { MetaTag } from "../ui/Camera";
import { SITE } from "../../data/content";

function Social({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="grid place-items-center w-12 h-12 rounded-full border border-hair text-ink2 hover:bg-ink hover:text-paper hover:border-ink transition-colors"
      aria-label={label}
    >
      {children}
    </a>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="relative pt-24 sm:pt-32 px-5 sm:px-8">
      <div className="mx-auto max-w-5xl text-center">
        <Reveal>
          <div className="flex justify-center">
            <MetaTag>04 — CONTACT</MetaTag>
          </div>
          <h2 className="mt-5 font-display text-5xl sm:text-7xl md:text-8xl text-ink tracking-tightest leading-[0.95]">
            Un projet ?
            <br />
            Filmons-le.
          </h2>
          <p className="mt-6 mx-auto max-w-lg text-ink2 font-body leading-relaxed">
            Dites-moi votre idée, votre lieu et votre date. Je vous réponds
            rapidement avec un devis adapté.
          </p>

          <div className="mt-10 flex flex-col items-center gap-6">
            <a
              href={`mailto:${SITE.contact.email}`}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-ink text-paper font-medium hover:bg-ink2 transition-colors text-lg"
            >
              {SITE.contact.email}
            </a>

            <div className="flex items-center gap-3">
              <Social href={SITE.contact.instagram} label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </Social>
              <Social href={SITE.contact.tiktok} label="TikTok">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16.5 3c.3 2 1.6 3.6 3.5 3.9v2.8c-1.3.1-2.6-.3-3.8-1v6.1a5.7 5.7 0 11-5.7-5.7c.3 0 .6 0 .9.1v2.9a2.8 2.8 0 102 2.7V3h3.1z" />
                </svg>
              </Social>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Pied de page */}
      <footer className="mt-24 border-t border-hair">
        <div className="mx-auto max-w-6xl py-8 flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-xs text-mute">
          <p>
            © {new Date().getFullYear()} {SITE.name} — {SITE.role}
          </p>
          <p>PRISES DE VUE AÉRIENNES · FPV · CINÉMA</p>
        </div>
      </footer>
    </section>
  );
}
