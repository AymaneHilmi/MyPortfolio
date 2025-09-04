import { useState } from "react";
import { Video, Play, Radio, PlusCircle, UserRound } from "lucide-react";
import HomePortfolio from "@/assets/PortfolioHome.png";


// Section with white site background, centered image (no phone mockup)
export default function IconSwitcher() {
  const FEATURES = [
    {
      id: "reels",
      label: "Reels",
      eyebrow: "REELS",
      title: "Des vidéos courtes qui captent l'attention",
      description:
        "Crée, édite et partage des formats courts. Préchargement léger, micro-interactions soignées.",
      cta: { text: "Explorer les Reels", href: "#reels" },
      imageSrc: HomePortfolio,
      Icon: Video,
    },
    {
      id: "play",
      label: "Lecture",
      eyebrow: "LECTURE",
      title: "Lecture fluide, interactions instantanées",
      description:
        "Transitions rapides, gestion d'état minimale côté client et rendu serveur quand c'est utile.",
      cta: { text: "Voir la lecture", href: "#play" },
      imageSrc: "/images/feature-play.jpg",
      Icon: Play,
    },
    {
      id: "live",
      label: "Live",
      eyebrow: "LIVE",
      title: "Allez en direct sans friction",
      description:
        "Latence réduite et UI claire pour se concentrer sur le contenu, pas sur l'interface.",
      cta: { text: "Découvrir le Live", href: "#live" },
      imageSrc: "/images/feature-live.jpg",
      Icon: Radio,
    },
    {
      id: "create",
      label: "Créer",
      eyebrow: "CRÉER",
      title: "Des outils créatifs, sans lourdeur",
      description:
        "Composants accessibles, presets réutilisables et design system cohérent.",
      cta: { text: "Commencer à créer", href: "#create" },
      imageSrc: "/images/feature-create.jpg",
      Icon: PlusCircle,
    },
    {
      id: "profile",
      label: "Profil",
      eyebrow: "PROFIL",
      title: "Mettez vos actus au premier plan",
      description:
        "Un fil propre pour partager vos moments préférés. Typo ramidots, hiérarchie nette.",
      cta: { text: "Explorer le profil", href: "#profile" },
      imageSrc: "/images/feature-profile.jpg",
      Icon: UserRound,
    },
  ];

  const [active, setActive] = useState(0);
  const A = FEATURES[active];

  return (
    <section className="relative mt-24 max-w-4xl">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-12 gap-8 items-center">
          {/* Icons rail (left) */}
          <nav
            aria-label="Fonctionnalités"
            role="tablist"
            aria-orientation="vertical"
            className="col-span-12 md:col-span-1 flex md:flex-col gap-4 md:gap-6 justify-center md:justify-start"
          >
            {FEATURES.map((f, i) => (
              <button
                key={f.id}
                role="tab"
                aria-selected={active === i}
                aria-controls={`panel-${f.id}`}
                id={`tab-${f.id}`}
                onClick={() => setActive(i)}
                className={`group relative grid place-items-center h-11 w-11  transition-all duration-200  ${
                  active === i
                    ? "border-from-blue-500 via-orange-400 to-red-500" 
                    : "border-zinc-200 "
                }`}
                title={f.label}
              >
                <f.Icon
                  className={`h-5 w-5 transition-colors ${
                    active === i ? "text-pink-600" : "text-zinc-500 group-hover:text-zinc-700"
                  }`}
                  aria-hidden
                />
                
              </button>
            ))}
          </nav>

          {/* Center image (no phone) */}
          <div className="col-span-12 md:col-span-6">
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-zinc-200 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
              {/* subtle gradient ring to pop on white */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-zinc-900/5" aria-hidden />
              <img
                key={A.imageSrc}
                src={A.imageSrc}
                alt="Feature preview"
                className="h-full w-full object-cover transition-opacity duration-300"
              />
            </div>
          </div>

          {/* Text (right) */}
          <div className="col-span-12 md:col-span-5">
            <div
              id={`panel-${A.id}`}
              role="tabpanel"
              aria-labelledby={`tab-${A.id}`}
              className="space-y-5"
            >
              <p className="text-xs uppercase tracking-[0.25em] text-pink-600/80">{A.eyebrow}</p>
              <h3 className="font-ramidots text-3xl md:text-5xl tracking-tight text-zinc-900">
                {A.title}
              </h3>
              <p className="text-zinc-600 md:text-lg leading-relaxed">{A.description}</p>
              <div>
                <a
                  href={A.cta.href}
                  className="inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold tracking-wide transition-colors border-pink-500 text-pink-700 hover:bg-pink-50"
                >
                  {A.cta.text}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
