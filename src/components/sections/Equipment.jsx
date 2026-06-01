import Reveal from "../ui/Reveal";
import { EQUIPMENT } from "../../data/content";

function DroneGlyph() {
  return (
    <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
      <circle cx="5" cy="5" r="2.6" />
      <circle cx="19" cy="5" r="2.6" />
      <circle cx="5" cy="19" r="2.6" />
      <circle cx="19" cy="19" r="2.6" />
      <path d="M7 7l3 3M17 7l-3 3M7 17l3-3M17 17l-3-3" />
      <rect x="9" y="9" width="6" height="6" rx="1.5" />
    </svg>
  );
}

export default function Equipment() {
  return (
    <section id="materiel" className="relative py-24 sm:py-32 px-5 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-accent text-sm uppercase tracking-ultra font-medium">
            Le matériel
          </p>
          <h2 className="mt-4 font-display text-4xl sm:text-6xl text-ghost tracking-tightest leading-[1.02] max-w-2xl">
            Le bon drone pour chaque plan.
          </h2>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-3 gap-5 sm:gap-6">
          {EQUIPMENT.map((d, i) => (
            <Reveal key={d.id} delay={i * 0.1}>
              <div className="group relative h-full rounded-3xl border border-line bg-surface/70 p-7 overflow-hidden hover:border-accent/40 transition-colors">
                <div className="absolute inset-x-0 -bottom-24 h-48 bg-radial-glow opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative flex flex-col h-full">
                  <span className="text-accent group-hover:scale-110 origin-left transition-transform">
                    <DroneGlyph />
                  </span>
                  <h3 className="mt-6 font-display text-2xl text-ghost tracking-tight">
                    {d.name}
                  </h3>
                  <p className="text-sm text-accent/80 mt-1 uppercase tracking-wider">
                    {d.type}
                  </p>
                  <p className="mt-4 text-muted font-body leading-relaxed">
                    {d.accent}
                  </p>
                  <ul className="mt-6 space-y-2 pt-5 border-t border-line">
                    {d.specs.map((s) => (
                      <li key={s} className="flex items-center gap-2.5 text-sm text-ghost/90">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent shadow-glow" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
