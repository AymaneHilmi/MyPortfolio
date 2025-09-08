import { useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";

export default function ConceptionScroller({
  steps = DEFAULT_STEPS,
}) {
  return (
    <section className="relative mt-24 bg-white">
      <div className="">
        {/* Header */}
        <div className="text-center">
          <p className="text-[10px] uppercase tracking-[0.25em] text-zinc-500">Section 3 — La Conception</p>
          <h2 className="mt-2 text-3xl md:text-6xl font-ramidots tracking-tight bg-gradient-to-r from-blue-500 via-orange-400 to-red-500 bg-clip-text text-transparent inline-block">
            Croquis, maquettes & coulisses
          </h2>
          <span className="mt-4 block h-[3px] w-24 mx-auto rounded-full bg-gradient-to-r from-blue-500 via-orange-400 to-red-500" />
        </div>

        {/* Steps */}
        <div className="mt-14 space-y-16 md:space-y-24">
          {steps.map((step, i) => (
            <div key={step.id || i}>
              <StepBlock {...step} index={i} />
              {i < steps.length - 1 && <NextArrow />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StepBlock({ index, layout = "left", title, description, image, caption }) {
  // layout: left | right | center | full
  const ref = useRef(null);
  useReveal(ref);

  if (layout === "full") {
    return (
      <figure ref={ref} className="opacity-0 translate-y-6 transition will-change-transform">
        <div className="relative rounded-2xl overflow-hidden border border-zinc-200 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
          <img src={image} alt={title} className="w-full h-[40vh] md:h-[60vh] object-cover" />
          <div aria-hidden className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5 rounded-2xl" />
        </div>
        {(title || description) && (
          <figcaption className="mt-4 text-center">
            {title && <h3 className="font-ramidots text-2xl md:text-3xl text-zinc-900 tracking-tight">{title}</h3>}
            {description && <p className="mt-2 text-zinc-600 md:text-lg leading-relaxed max-w-3xl mx-auto">{description}</p>}
          </figcaption>
        )}
      </figure>
    );
  }

  return (
    <div ref={ref} className="opacity-0 translate-y-6 transition will-change-transform">
      <div className={`grid items-center gap-8 md:gap-12 ${layout === "right" ? "md:grid-cols-[1fr_0.8fr]" : "md:grid-cols-[0.8fr_1fr]"}`}>
        {/* Image */}
        {layout !== "right" && (
          <Media image={image} caption={caption} />
        )}

        {/* Text */}
        <div className="order-2 md:order-none">
          {title && (
            <h3 className="font-ramidots text-2xl md:text-3xl text-zinc-900 tracking-tight">{title}</h3>
          )}
          {description && (
            <p className="mt-3 text-zinc-600 md:text-lg leading-relaxed">{description}</p>
          )}
        </div>

        {/* Image (right layout) */}
        {layout === "right" && (
          <Media image={image} caption={caption} />
        )}
      </div>
    </div>
  );
}

function Media({ image, caption }) {
  return (
    <figure className="order-1 md:order-none">
      <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-zinc-200 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
        <img src={image} alt={caption || "Visual"} className="h-full w-full object-cover" />
        <div aria-hidden className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5 rounded-2xl" />
      </div>
      {caption && <figcaption className="mt-2 text-sm text-zinc-500">{caption}</figcaption>}
    </figure>
  );
}

function NextArrow() {
  return (
    <div className="flex items-center justify-center mt-10">
      <div className="flex items-center gap-3 text-zinc-400">
        <span className="h-[1px] w-12 bg-gradient-to-r from-blue-500 via-orange-400 to-red-500" />
        <ArrowDown className="h-5 w-5" />
        <span className="h-[1px] w-12 bg-gradient-to-r from-blue-500 via-orange-400 to-red-500" />
      </div>
    </div>
  );
}

function useReveal(ref) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.remove("opacity-0", "translate-y-6");
            el.classList.add("opacity-100", "translate-y-0");
            el.style.transition = "opacity 500ms ease, transform 500ms ease";
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.18 }
    );
    el.classList.add("opacity-0", "translate-y-6");
    io.observe(el);
    return () => io.disconnect();
  }, [ref]);
}

const DEFAULT_STEPS = [
  {
    id: "s1",
    layout: "left",
    title: "Wireframe — navigation & layout",
    description:
      "Esquisser rapidement la structure : header, menu, zones de contenu. Aller à l'essentiel sans fioritures.",
    image: "/images/wireframe-1.jpg", // remplace par ton image
    caption: "Low‑fi sketch #1",
  },
  {
    id: "s2",
    layout: "right",
    title: "Wireframe — flows & priorités",
    description:
      "Valider les parcours clés : arrivée, découverte, interaction. Mettre la hiérarchie visuelle au service de l'usage.",
    image: "/images/wireframe-2.jpg",
    caption: "Low‑fi sketch #2",
  },
  {
    id: "s3",
    layout: "full",
    title: "Mood & Direction visuelle",
    description:
      "Inspirations, réponses UI, micro‑interactions. Une image ‘full width’ pour marquer la transition vers la maquette.",
    image: "/images/mood-full.jpg",
  },
  {
    id: "s4",
    layout: "left",
    title: "Post‑its — organisation & brainstorming",
    description:
      "Clusteriser les idées, prioriser, garder ce qui sert vraiment l'expérience finale.",
    image: "/images/postits-1.jpg",
    caption: "Workshop notes",
  },
];
