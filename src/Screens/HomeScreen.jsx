import { React, } from 'react'
import { cn } from "@/lib/utils";
import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import { useEasterEgg } from "@/context/EasterEggContext";
import { motion, useAnimation } from "framer-motion";
import Cesiveroo from "@/assets/CesiverooLogo.png";
import HomeCesiverooCompleted from "@/assets/CesiverooHomeComplete.png";
import HomePortfolio from "@/assets/PortfolioHome.png";
import LIMSmobility from "@/assets/LIMSmobility.png";
import logo from "@/assets/Logo.png";
import sg from "@/assets/Saint-Gobain.png";
import { ArrowRight, ScreenShare } from "lucide-react";
import { LinkPreview } from "@/components/ui/link-preview";
import { Briefcase, PenTool, LayoutDashboard, BadgeCheck } from "lucide-react";
import "./screens.css";
import * as Dialog from "@radix-ui/react-dialog";
import { X, Lock, Check, Search, Puzzle, Crown } from "lucide-react";
import EasterEggsCard from "@/context/EasterEggCard";
import style from "react-syntax-highlighter/dist/esm/styles/hljs/a11y-dark";

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

export default function HomeScreen({ visitsTotal }) {
  const navigate = useNavigate();
  const {
    foundEggs,
    eggsFounded,
    incrementEggs,
    resetEggs,
    eggsTotal,
    eggMission,
    isMissionCompleted,
  } = useEasterEgg();

  const Projects = [
    // {
    //   logo: sg,
    //   title: "Connected Labs",
    //   subtitle: "Cavaillon • 2025",
    //   style: "font-sfbold text-2xl md:text-4xl",
    //   description:
    //     "Une courte description du projet qui explique son but ou ce que tu y as réalisé.",
    //   image: LIMSmobility,
    //   link: "Portfolio",
    // },
    {
      logo: logo,
      title: "My Portfolio",
      subtitle: "Montpellier • 2024",
      style:
        "font-ramidots text-4xl md:text-6xl bg-gradient-to-r from-blue-500 via-orange-400 to-red-500 bg-clip-text text-transparent w-fit inline-block",
      description:
        "Une courte description du projet qui explique son but ou ce que tu y as réalisé.",
      image: HomePortfolio,
      link: "Portfolio",
    },
    {
      logo: Cesiveroo,
      title: "Cesi",
      highlight: "veroo",
      color: "#20CFBD",
      subtitle: "Aix-en-Provence • 2023",
      style: "font-sfbold text-2xl md:text-4xl",
      description:
        "Description du deuxième projet qui met en avant ses objectifs et réalisations.",
      image: HomeCesiverooCompleted,
      link: "Cesiveroo",
      cursor: "cesiveroo",
    },
  ];
  return (
    <div className="max-w-6xl mx-auto px-6">
      <div className="relative flex flex-col items-center justify-center min-h-screen">
        {/* Landing Page */}
        <section className="text-left pb-32 pt-32">
          {" "}
          {/* pt-32 et pb-32 pour la position du texte au centre avec le chevron */}
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
            Recently, I’ve completed my work-study program at{" "}
            <LinkPreview
              imageSrc="https://www.verreetprotections.com/wp-content/uploads/2016/06/logoSGG2016.jpg"
              url="https://www.saint-gobain.com/"
              isStatic
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
        </section>

        {/* Indicateur de scroll fixé en bas, hors du flux */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="scrolldown"
          style={{ "--color": "darkGray" }}
        >
          <div className="chevrons">
            <div className="chevrondown"></div>
            <div className="chevrondown"></div>
          </div>
        </motion.div>
      </div>

      {/* Content Section */}
      <section className="flex flex-col items-center px-4 sm:px-6 pb-6 gap-6">
        <section className="w-full mx-auto  px-6 md:px-10 py-16 md:py-24">
          {/* Titre + sous-titre */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-8xl font-ramidots tracking-tight bg-gradient-to-r from-blue-500 via-orange-400 to-red-500 bg-clip-text text-transparent w-fit inline-block px-1">
              Welcome to my portfolio
            </h2>
            <p className="mt-3 md:mt-4 text-sm md:text-base font-sfregular text-lightGray">
              Here you'll find three things about me: my academic & personal
              projects, a (slightly) complicated easter-eggs quest, and who I am and what I like to do.
            </p>
          </div>

          {/* 3 cartes inclinées */}
          <div className="relative flex flex-col lg:flex-row items-stretch lg:items-end justify-center gap-6 lg:gap-8">
            {/* 1 — Projects */}
            <motion.div
              initial={{ opacity: 0, y: 20, rotate: -3 }}
              whileInView={{ opacity: 1, y: 0, rotate: -3 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative shrink-0 w-full lg:w-[320px] rounded-3xl bg-white border border-gray-200 shadow-sm p-5 md:p-6"
            >
              <span className="absolute -top-3 -left-3 h-7 w-7 rounded-full bg-gray-900 text-white text-xs font-sfbold grid place-items-center">
                1
              </span>

              {/* Aperçu visuel (placeholder) */}
              <div className="aspect-[4/3] rounded-2xl bg-gray-50 border border-gray-200 shadow-inner overflow-hidden mb-4" />

              <div className="space-y-1">
                <h3 className="text-lg lg:text-xl font-sfbold text-darkGray">
                  Explore my projects
                </h3>
                <p className="text-sm font-sfregular text-lightGray">
                  Academic & personal work — clean, pragmatic, and shipped.
                </p>
              </div>
            </motion.div>

            {/* 2 — Egg quest */}

            <EasterEggsCard />

            {/* 3 — About me */}
            <motion.div
              initial={{ opacity: 0, y: 28, rotate: 3 }}
              whileInView={{ opacity: 1, y: 0, rotate: 3 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative shrink-0 w-full lg:w-[320px] rounded-3xl bg-white border border-gray-200 shadow-sm p-5 lg:p-6"
            >
              <span className="absolute -top-3 -left-3 h-7 w-7 rounded-full bg-gray-900 text-white text-xs font-sfbold grid place-items-center">
                3
              </span>

              {/* “Calendrier” / grid placeholder */}
              <div className="rounded-2xl bg-gray-50 border border-gray-200 p-3 mb-4">
                <div className="grid grid-cols-7 gap-2">
                  {Array.from({ length: 21 }).map((_, i) => (
                    <div
                      key={i}
                      className="h-6 rounded-md bg-white border border-gray-200"
                    />
                  ))}
                </div>
              </div>

              <div className="space-y-1">
                <h3 className="text-lg lg:text-xl font-sfbold text-darkGray">
                  Learn about me
                </h3>
                <p className="text-sm font-sfregular text-lightGray">
                  Who I am, where I come from, and what I like to do.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* <Dialog.Root>
          <Dialog.Trigger asChild>
            <motion.a
            //   animate={controls}
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

              <PillMeter
                className="mt-4"
                total={eggsTotal}
                filled={eggsFounded}
              />
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
        </Dialog.Root> */}

        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          className="text-5xl md:text-7xl font-ramidots tracking-tight bg-gradient-to-r from-blue-500 via-orange-400 to-red-500 bg-clip-text text-transparent px-1"
        >
          Projects
        </motion.h2>

        {Projects.map((project) => (
          <motion.a
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            onClick={() => navigate(project.link)}
            className="w-full rounded-3xl bg-gray-50 pt-6 px-6 md:px-0 md:pt-0 hover:shadow-lg"
            role="button"
            tabIndex={0}
            data-cursor-icon={project.cursor}
          >
            <div className="flex flex-col md:flex-row items-stretch justify-between gap-6 ">
              {/* Partie gauche : logo + titre + sous-titre + description + bouton */}
              <div className="flex-1 md:max-w-md md:p-8 lg:p-12 flex flex-col gap-4">
                {/* Logo arrondi */}
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden">
                  <img
                    src={project.logo}
                    alt="Project Logo"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Titre et sous-titre */}
                <div>
                  <h3
                    className={cn(
                      "text-2xl sm:text-3xl text-darkGray",
                      project.style
                    )}
                  >
                    {project.title}
                    <span style={{ color: project.color }}>
                      {project.highlight}
                    </span>
                  </h3>
                  <p className="text-xs sm:text-sm font-sfregular text-lightGray mt-1">
                    {project.subtitle}
                  </p>
                </div>

                {/* Description rapide */}
                <p className="text-sm sm:text-base font-sfregular text-darkGray">
                  {project.description}
                </p>
              </div>

              {/* Partie droite : illustration ou aperçu visuel */}
              <div className="flex-1 rounded-2xl overflow-hidden">
                {/* Ratio 16/9 sur mobile, hauteur auto sur desktop */}
                <div className="relative w-full aspect-[11/9] lg:aspect-auto md:h-full">
                  <img
                    src={project.image}
                    alt="Project Preview"
                    className="absolute inset-0 w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </motion.a>
        ))}
      </section>
    </div>
  );
}
