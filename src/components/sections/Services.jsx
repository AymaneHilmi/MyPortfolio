import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Reveal from "../ui/Reveal";
import { MetaTag } from "../ui/Camera";
import { SERVICES } from "../../data/content";

function ServiceCard({ service, index }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <motion.article
      ref={ref}
      style={{ y: index % 2 === 0 ? y : undefined }}
      className="group relative rounded-2xl border border-hair bg-paper p-7 sm:p-8 hover:shadow-card hover:border-ink/15 transition-all duration-300"
    >
      <div className="flex items-center justify-between">
        <span className="font-mono text-sm text-mute">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="w-8 h-8 grid place-items-center rounded-full border border-hair text-ink group-hover:bg-ink group-hover:text-paper group-hover:border-ink transition-colors">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 17L17 7M17 7H8M17 7v9" />
          </svg>
        </span>
      </div>
      <h3 className="mt-6 font-display text-2xl text-ink tracking-tight">
        {service.title}
      </h3>
      <p className="mt-3 text-ink2 leading-relaxed font-body">{service.desc}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {service.tags.map((t) => (
          <span
            key={t}
            className="px-3 py-1 rounded-full text-xs text-mute border border-hair font-mono"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.article>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32 px-5 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <MetaTag>01 — PRESTATIONS</MetaTag>
          <h2 className="mt-4 font-display text-4xl sm:text-6xl text-ink tracking-tightest max-w-2xl leading-[1.02]">
            Ce que je filme pour vous.
          </h2>
          <p className="mt-5 max-w-xl text-ink2 font-body leading-relaxed">
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
