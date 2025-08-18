import { React, useState } from "react";
import "./screens.css";
import aymane from "../assets/PDP.jpeg";
import { FlipWords } from "../components/ui/flip-words";
import { cn } from "../lib/utils";
import { useNavigate } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import EasterEggsList from "../context/EasterEggsList";
import { useEasterEgg } from "../context/EasterEggContext";


function PillMeter({ total, filled, className = "" }) {
  return (
    <div className={`flex gap-1.5 ${className}`}>
      {Array.from({ length: total }).map((_, i) => (
        <span
          key={i}
          className={`h-2.5 w-6 rounded-full transition-colors ${i < filled ? "bg-gray-800" : "bg-gray-200"
            }`}
        />
      ))}
    </div>
  );
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};





export default function AboutScreen() {
  const navigate = useNavigate();
  const { eggsFounded, incrementEggs, resetEggs, eggsTotal } = useEasterEgg();

  const words = ["Aymane HILMI", "حلمي أيمن"];



  const controls = useAnimation();
  const [eggAnimationEnabled, setEggAnimationEnabled] = useState(true);

  useEffect(() => {
    if (!eggAnimationEnabled) return;

    const interval = setInterval(() => {
      controls.start({
        rotate: [0, -5, 5, -3, 3, 0],
        transition: {
          duration: 0.8,
          ease: "easeInOut",
        },
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [controls, eggAnimationEnabled]);

  return (
    <div className={cn(" max-w-6xl mx-auto px-6 md:px-10 mt-12 md:mt-28")}>
      <section className="py-12">
        {/* En‑tête : avatar + titre compact */}
        <div className="flex items-start gap-4">
          <div className="h-16 w-16 rounded-full overflow-hidden ring-1 ring-black/10 bg-gray-100 shadow-sm shrink-0">
            <img
              src={aymane}
              alt="Aymane"
              className="h-full w-full object-cover"
            />
          </div>


          <div className="flex flex-col">
            <h1 className="text-2xl md:text-3xl font-sfbold text-gray-900 tracking-tight">
              Aymane Hilmi
            </h1>
            <p className="text-sm md:text-base text-gray-500 ">
              <div className=" flex items-baseline gap-4">
                <span className="font-InkBrushArabic bg-gradient-to-r from-blue-500 via-orange-400 to-red-500 bg-clip-text text-transparent">
                  أيمن حلمي
                </span>
                <span className="text-sm md:text-base text-neutral-400">
                  / aɪˈmeːn hɪlˈmiː /
                </span>
              </div>
            </p>
          </div>
        </div>

        {/* Corps du texte */}
        <div className="flex flex-row justify-between mt-6 ">
          <div className=" text-gray-700 font-sfregular text-[15px] leading-7 md:leading-8 text-justify">
            Aymane Hilmi is a 22-year-old software engineer based in Aix-en-Provence, France.
            Born in Italy, raised in France, with Moroccan roots and years spent in Spain, he grew up as a polyglot fluent in five languages.

            His fascination for technology began in childhood and led him to pursue computer science with determination.
            Today, he sees programming not only as a skill but as a way to empower people, simplify work, and foster innovation.
          </div>
        </div>
        {/* séparateur soft */}
        <div className="mt-8 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

        {/* Dashboard minimaliste */}
        <section className="mt-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Colonne gauche : titre + description + CTA */}
            <div className="rounded-3xl bg-white border border-gray-200 shadow-sm p-6">
              <h3 className="text-3xl md:text-4xl font-sfbold text-gray-900 leading-tight">
                Effective <span className="text-gray-500">Facts</span>
              </h3>
              <p className="mt-3 text-sm text-gray-600">
                A few metrics and quick notes that sketch the bigger picture.
              </p>
              <button className="mt-5 inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-2 text-sm text-gray-800 hover:bg-gray-50 transition">
                Let’s talk
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" /><path d="M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Panneau info en haut à droite (2 colonnes) */}
            <div className="md:col-span-2 rounded-3xl bg-white border border-gray-200 shadow-sm p-6">
              <div className="flex items-start gap-4">
                <div className="h-14 w-14 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-[10px] text-gray-500">IMG</div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h4 className="text-lg md:text-xl font-sfbold text-gray-900">Inner latent behave</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Accessible", "Collaborative", "Empathetic", "Iterative"].map((b) => (
                        <span key={b} className="inline-flex items-center rounded-full border border-gray-300 bg-white px-3 py-1 text-xs text-gray-700">{b}</span>
                      ))}
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                    Ensuring the latest technology keeps me updated and that users get clean, understandable and responsive interfaces. Curious and reliable by design.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Stat cards */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="rounded-2xl bg-white border border-gray-200 shadow-sm p-5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-gray-500">YEARS OF EXPERIENCE</span>
                <div className="h-6 w-6 rounded-full border border-gray-300 bg-white flex items-center justify-center text-[10px] text-gray-500">✓</div>
              </div>
              <div className="mt-3 text-3xl font-sfbold text-gray-900">8</div>
              <PillMeter className="mt-4" total={8} filled={7} />
            </div>

            {/* Card 2 */}
            <div className="rounded-2xl bg-white border border-gray-200 shadow-sm p-5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-gray-500">TOTAL WORKING HOURS</span>
                <div className="h-6 w-6 rounded-full border border-gray-300 bg-white flex items-center justify-center text-[10px] text-gray-500">⏱</div>
              </div>
              <div className="mt-3 text-3xl font-sfbold text-gray-900">17 564</div>
              <PillMeter className="mt-4" total={8} filled={7} />
            </div>

            {/* Card 3 */}
            <Dialog.Root>
              <Dialog.Trigger asChild>
                <motion.a
                  animate={controls}
                  className="rounded-2xl bg-white border border-gray-200 shadow-sm p-5"
                  data-cursor-icon="egg"
                  onClick={() => setEggAnimationEnabled(false)}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-gray-500">
                      EASTER EGGS FOUND
                    </span>
                    <div className="h-6 w-6 rounded-full border border-gray-300 bg-white flex items-center justify-center text-[12px]">
                      🥚
                    </div>
                  </div>

                  <div className="mt-3 text-3xl font-sfbold text-gray-900">
                    {eggsFounded} / {eggsTotal}
                  </div>

                  <PillMeter className="mt-4" total={eggsTotal} filled={eggsFounded} />
                </motion.a>
              </Dialog.Trigger>

              <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40" />
                <Dialog.Content
                  className="fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                     bg-white border border-gray-200 rounded-2xl shadow-xl 
                     w-[95%] max-w-2xl h-[75vh] overflow-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden p-8"
                >
                  <div className="relative">
                    <Dialog.Close asChild>
                      <button className="absolute top-2 right-2 text-gray-400 hover:text-gray-600">
                        <X className="w-5 h-5" />
                      </button>
                    </Dialog.Close>
                    <EasterEggsList />
                  </div>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>

            {/* Card 4 */}
            <div className="rounded-2xl bg-white border border-gray-200 shadow-sm p-5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-gray-500">HAPPY CUSTOMERS</span>
                <div className="h-6 w-6 rounded-full border border-gray-300 bg-white flex items-center justify-center text-[10px] text-gray-500">☺</div>
              </div>
              <div className="mt-3 text-3xl font-sfbold text-gray-900">590</div>
              <PillMeter className="mt-4" total={8} filled={7} />
            </div>
          </div>
        </section>

      </section>

      <div className="mt-6 text-center">

      </div>
    </div>
  );
}
