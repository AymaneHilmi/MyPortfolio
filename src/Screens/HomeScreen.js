import { React, } from 'react'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEasterEgg } from '../context/EasterEggContext';
import { motion } from "framer-motion";
import Aix from '../assets/Aix.jpg';
import logo from '../assets/LogoMobile.png';
import { ArrowRight } from "lucide-react";
import { LinkPreview } from "../components/ui/link-preview";
import { Briefcase, PenTool, LayoutDashboard, BadgeCheck  } from "lucide-react";


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

export default function HomeScreen({ scrollToRoutes, visitsTotal }) {
  const navigate = useNavigate();
  const { eggCount } = useEasterEgg();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleClick = (link) => {
    navigate(`/${link}`);
    if (scrollToRoutes) {
      scrollToRoutes();
    }
  };

  return (
    <div className="mx-48">
      <div className="flex flex-col items-center justify-center px-6 h-screen">

        {/* Landing Page */}
        <div className="max-w-4xl text-left">
          {/* Titre principal */}
          <motion.h1
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl md:text-5xl lg:text-6xl font-sfregular text-darkGray tracking-tight leading-tight"
          >
            Hello !<br />
            This is Aymane{" "}
            <span className="font-InkBrushArabic bg-gradient-to-r from-blue-500 via-orange-400 to-red-500 bg-clip-text text-transparent">
              {" "}
              [ أيمن ]
            </span>
            , <br />I am a budding{" "}
            <span className="font-sfbold ">Software Engineer</span>.
          </motion.h1>

          {/* Paragraphe descriptif */}
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-8 text-sm md:text-base lg:text-lg font-sfregular leading-relaxed text-darkGray text-justify"
          >
            Recently, I’ve completed my apprenticeship at{" "}
            <LinkPreview
              imageSrc="https://www.verreetprotections.com/wp-content/uploads/2016/06/logoSGG2016.jpg"
              url="/saintgobain"
              isStatic
              onClick={scrollToRoutes}
              className="font-bold underline underline-offset-4 text-black hover:bg-gradient-to-r hover:from-blue-500 hover:via-orange-400 hover:to-red-500 hover:bg-clip-text hover:text-transparent transition-colors duration-300"
            >
              Saint-Gobain Research Provence
            </LinkPreview>
            , where I contributed to digital innovation in a research and
            development context. After that, I decided to pursue
            entrepreneurship while traveling around the world, driven by the
            desire to build meaningful projects, explore diverse cultures, and
            challenge myself beyond borders.
          </motion.p>
        </div>
      </div>

      {/* Content Section */}
      <section className="flex flex-col items-center justify-center px-4 sm:px-6 py-16 bg-white">
        {/* Mobile: 1 col ; md+: 2 cols / 4 rows */}
        <div className="grid gap-6 md:grid-cols-2 md:grid-rows-4">
          {/* Bloc titre (haut-gauche) */}
          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}    
            className="rounded-3xl"
          >
            <div className="flex flex-col justify-center max-w-sm">
              <h2 className="text-3xl md:text-5xl font-sfbold leading-tight text-darkGray">
                My latest {" "}
                <span className="font-ramidots text-8xl bg-gradient-to-r from-blue-500 via-orange-400 to-red-500 bg-clip-text text-transparent">
                  Projects
                </span>
              </h2>
            </div>
          </motion.div>


          {/* Carte 1 (grande en haut à droite) */}
          <motion.div 
          variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          className="relative overflow-hidden rounded-[3rem] aspect-square w-96 max-w-sm sm:max-w-md md:max-w-full md:row-span-2">
            <img
              src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=1200&auto=format&fit=crop"
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-white/90 via-zinc-100/85 to-zinc-200/70" />

            <div className="relative z-10 h-full p-5 flex flex-col">
              <span className="self-start rounded-full bg-zinc-900 text-white text-[11px] px-3 py-1 tracking-wide">
                UI·UX DESIGN
              </span>
              <h3 className="mt-4 text-xl md:text-2xl font-sfbold text-zinc-900 leading-snug">
                Crafting Intuitive Interfaces for Seamless Experiences.
              </h3>
              <div className="mt-auto flex flex-wrap gap-2">
                {["Figma", "XD", "PSD", "Sketch", "Prototype"].map((t) => (
                  <span
                    key={t}
                    className="text-xs rounded-full border border-zinc-300 px-2.5 py-1 bg-white/85 backdrop-blur-sm text-zinc-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            
          </motion.div>

          {/* Carte 2 (bas-gauche) */}
          <motion.div 
          variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          className="relative overflow-hidden rounded-[3rem] aspect-square w-96 max-w-sm sm:max-w-md md:max-w-full md:row-span-2">
            <img
              src="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop"
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-white/90 via-zinc-100/85 to-zinc-200/70" />

            <div className="relative z-10 h-full p-5 flex flex-col">
              <span className="self-start rounded-full bg-zinc-900 text-white text-[11px] px-3 py-1 tracking-wide">
                WEB DESIGN
              </span>
              <h3 className="mt-4 text-xl md:text-2xl font-sfbold text-zinc-900 leading-snug">
                Building Your Perfect Visions into Stunning Websites.
              </h3>
              <div className="mt-auto flex flex-wrap gap-2">
                {["HTML", "CSS", "SCSS", "Bootstrap", "Tailwind"].map((t) => (
                  <span
                    key={t}
                    className="text-xs rounded-full border border-zinc-300 px-2.5 py-1 bg-white/85 backdrop-blur-sm text-zinc-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Carte 3 (bas-droite) */}
          <motion.div className="relative overflow-hidden rounded-[3rem] aspect-square w-96 max-w-sm sm:max-w-md md:max-w-full md:row-span-2 md:col-start-2 md:row-start-3">
            <img
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8e2?q=80&w=1200&auto=format&fit=crop"
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-white/90 via-zinc-100/85 to-zinc-200/70" />

            <div className="relative z-10 h-full p-5 flex flex-col">
              <span className="self-start rounded-full bg-zinc-900 text-white text-[11px] px-3 py-1 tracking-wide">
                FRONT-END DEVELOPMENT
              </span>
              <h3 className="mt-4 text-xl md:text-2xl font-sfbold text-zinc-900 leading-snug">
                Connect Design with Function & Dynamic Meets Emotion.
              </h3>
              <div className="mt-auto flex flex-wrap gap-2">
                {["Next JS", "React", "API’s", "HTML/CSS", "Laravel"].map((t) => (
                  <span
                    key={t}
                    className="text-xs rounded-full border border-zinc-300 px-2.5 py-1 bg-white/85 backdrop-blur-sm text-zinc-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
