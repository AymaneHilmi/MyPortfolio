import Reveal from "../ui/Reveal";
import { MetaTag } from "../ui/Camera";
import { EQUIPMENT } from "../../data/content";

function DroneGlyph() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round">
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
          <MetaTag>03 — LE MATÉRIEL</MetaTag>
          <h2 className="mt-4 font-display text-4xl sm:text-6xl text-ink tracking-tightest leading-[1.02] max-w-2xl">
            Le bon drone pour chaque plan.
          </h2>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-3 gap-5 sm:gap-6">
          {EQUIPMENT.map((d, i) => (
            <Reveal key={d.id} delay={i * 0.1}>
              <div className="group relative h-full rounded-2xl border border-hair bg-paper p-7 hover:shadow-card hover:border-ink/15 transition-all duration-300">
                <div className="flex items-start justify-between">
                  <span className="text-ink">
                    <DroneGlyph />
                  </span>
                  <MetaTag>0{i + 1}</MetaTag>
                </div>
                <h3 className="mt-6 font-display text-2xl text-ink tracking-tight">
                  {d.name}
                </h3>
                <p className="mt-1 font-mono text-xs text-mute uppercase tracking-widest">
                  {d.type}
                </p>
                <p className="mt-4 text-ink2 font-body leading-relaxed">{d.accent}</p>
                <ul className="mt-6 space-y-2.5 pt-5 border-t border-hair">
                  {d.specs.map((s) => (
                    <li key={s} className="flex items-center gap-2.5 text-sm text-ink2">
                      <span className="w-1 h-1 rounded-full bg-ink" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
