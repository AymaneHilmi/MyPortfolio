import Reveal from "../ui/Reveal";
import { SITE } from "../../data/content";

function Social({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="grid place-items-center w-12 h-12 rounded-full border border-line text-muted hover:text-accent hover:border-accent/60 transition-colors"
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
          <p className="text-accent text-sm uppercase tracking-ultra font-medium">
            Contact
          </p>
          <h2 className="mt-5 font-display text-5xl sm:text-7xl md:text-8xl text-ghost tracking-tightest leading-[0.95]">
            Un projet ?
            <br />
            <span className="text-gradient">Filmons-le.</span>
          </h2>
          <p className="mt-6 mx-auto max-w-lg text-muted font-body leading-relaxed">
            Dites-moi votre idée, votre lieu et votre date. Je vous réponds
            rapidement avec un devis adapté.
          </p>

          <div className="mt-10 flex flex-col items-center gap-6">
            <a
              href={`mailto:${SITE.contact.email}`}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-accent-gradient text-ink font-medium hover:shadow-glow transition-shadow text-lg"
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
      <footer className="mt-24 border-t border-line/60">
        <div className="mx-auto max-w-6xl py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-faint">
          <p>
            © {new Date().getFullYear()} {SITE.name} — {SITE.role}
          </p>
          <p className="text-faint">Prises de vue aériennes · FPV · Cinéma</p>
        </div>
      </footer>
    </section>
  );
}
