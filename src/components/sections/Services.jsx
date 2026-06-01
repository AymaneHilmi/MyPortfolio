import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Reveal from "../ui/Reveal";
import { SERVICES } from "../../data/content";

function ServiceCard({ service, index }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  // Léger décalage vertical = effet parallaxe entre les cartes
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <motion.article
      ref={ref}
      style={{ y: index % 2 === 0 ? y : undefined }}
      className="group relative rounded-3xl border border-line bg-surface/70 p-7 sm:p-8 overflow-hidden hover:border-accent/40 transition-colors"
    >
      <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-accent/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative">
        <span className="font-medium text-5xl text-line group-hover:text-accent/60 transition-colors">
          0{index + 1}
        </span>
        <h3 className="mt-4 font-display text-2xl text-ghost tracking-tight">
          {service.title}
        </h3>
        <p className="mt-3 text-muted leading-relaxed font-body">{service.desc}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {service.tags.map((t) => (
            <span
              key={t}
              className="px-3 py-1 rounded-full text-xs text-muted border border-line/80"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32 px-5 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-accent text-sm uppercase tracking-ultra font-medium">
            Prestations
          </p>
          <h2 className="mt-4 font-display text-4xl sm:text-6xl text-ghost tracking-tightest max-w-2xl leading-[1.02]">
            Ce que je filme pour vous.
          </h2>
          <p className="mt-5 max-w-xl text-muted font-body leading-relaxed">
            Du plan FPV nerveux au survol cinématique, chaque prestation est
            pensée pour vos réseaux et vos supports de communication.
          </p>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 gap-5 sm:gap-6">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.id} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
