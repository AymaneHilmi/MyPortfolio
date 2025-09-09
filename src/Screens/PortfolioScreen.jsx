import React, { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";
import HomePortfolio from "@/assets/PortfolioHome.png";
import MobilePortfolio from "@/assets/MobilePortfolio.png";
import LogoMobile from '@/assets/LogoMobile.png';
import { motion } from "framer-motion";
import intro from '@/assets/IntroPortfolio.mp4';
import {
  MonitorSmartphone,
  ShieldCheck,
  Boxes,
  Box,
  Database,
  Wrench,
  Activity,
  Github,
  Calendar,
  Users,
  Briefcase,
  FileText,
  Sparkles,
  Lightbulb,
  MousePointerClick,
  Linkedin,
  Rocket,
  Gamepad2,
  Palette,
  Image,
  Wand2,
  LayoutDashboard,
} from "lucide-react";
import { NumberTicker } from "../components/ui/NumberTicker";
import { LinkPreview } from "@/components/ui/link-preview";

// Image not used in the following section
import logo from "@/assets/Logo.png";
import IconSwitcher from "../components/ui/IconSwitcherSection";
import ConceptionScroller from "../components/ui/conceptionScroller";
import TechniqueSection from "@/components/ui/TechniqueSection";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import AutoPlayVideo from "../components/ui/autoplayVideo";

export default function PortfolioScreen({ visitsTotal }) {
  const { number, suffix } = getOrdinalParts(visitsTotal);

  const stats = [
    {
      label: "???",
      value: "??",
      icon: Calendar,
    },
    {
      label: "???",
      value: "??",
      icon: Users,
    },
    {
      label: "???",
      value: "??",
      icon: Briefcase,
    },
    {
      label: "???",
      value: "??",
      icon: FileText,
    },
  ];

  const STEPS = [
    {
      title: "At the beginning",
      subtitle: "A living extension of my resume",
      description:
        "Presenting clearly my journey, projects, and skills with only a professional purpose.",
      icons: [<FileText key="cv" className="h-4 w-4" />, <Linkedin key="in" className="h-4 w-4" />],
      image: "",
    },
    {
      title: "The transition",
      subtitle: "Exploring creative freedom",
      description:
        "Starting to use the portfolio as a lab: experimenting with interactions, layouts, pictures, design and ideas.",
      icons: [
        <Wand2 key="wand" className="h-4 w-4" />,
        <LayoutDashboard key="layout" className="h-4 w-4" />
      ],
      image: "",
    },
    {
      title: "At the end",
      subtitle: "A creative playground",
      description:
        "Bringing the portfolio with subtle 3D touches and micro-animations, hiding playful easter eggs. Make it feels like my own little world.",
      icons: [
        <Box key="cube" className="h-4 w-4" />,
        <Sparkles key="sprk" className="h-4 w-4" />
      ],
      image: "",
    },
  ];

  return (
    <div className="md:mx-auto max-w-6xl mx-6">
      <section className="mx-auto py-12 md:py-16 mt-32 flex justify-center items-center">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12 items-center">
          {/* Left column — Text */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 px-3 py-1 text-sm text-zinc-600">
              <span className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-500 via-orange-400 to-red-500" />
              Process Highlights
            </div>

            <div className="flex flex-row gap-4 items-center">
              {/* <img src={logo} alt="Portfolio logo" className="h-20 w-20" /> */}
              <span className="text-4xl font-ramidots tracking-tight md:text-7xl bg-gradient-to-r from-blue-500 via-orange-400 to-red-500 bg-clip-text text-transparent w-fit pr-4">
                My Portfolio Project
              </span>
            </div>

            <div className="prose prose-zinc max-w-none text-darkGray text-justify">
              <p>
                This portfolio is a personal project where I share my journey,
                projects, resume, and passion for technology. It’s built to be
                interactive and engaging, showcasing the work I’m proud of and
                reflecting my personal approach to development.
              </p>
              <p>
                In addition to showcase my projects and experience, this
                portfolio will also include (soon) a blog where I regularly
                share my work, ideas, and lessons learned throughout my journey.
                For the curious ones, I’ve also integrated an entire hidden
                easter eggs quest inside the website...
              </p>
            </div>
            <div className="mt-8">
              <a
                href="https://github.com/AymaneHilmi/MyPortfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-darkGray px-5 py-3 text-sm font-semibold text-white shadow-md hover:shadow-lg hover:bg-gradient-to-r hover:from-blue-500 hover:via-orange-400 hover:to-red-500 transition-colors"
                data-cursor-icon="arrow"
              >
                <Github size={18} />
                View on GitHub
              </a>
            </div>
          </div>
          <div className="relative">
            <figure className="relative mx-auto w-full max-w-[640px] overflow-hidden rounded-2xl ">
              <img
                src={HomePortfolio}
                alt="Cesiveroo illustration with shopping bags and spheres"
                className="block h-auto w-full object-contain "
                loading="eager"
                decoding="async"
              />
            </figure>
          </div>
        </div>
      </section>

      <section className="relative mt-24 overflow-hidden bg-white ">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="text-[10px] uppercase tracking-[0.25em] text-zinc-500">
              Section 1 — The Trigger
            </p>
            <h2 className="mt-2 text-3xl md:text-6xl font-ramidots tracking-tight bg-gradient-to-r from-blue-500 via-orange-400 to-red-500 bg-clip-text text-transparent inline-block">
              More than a resume, a living presence
            </h2>
            <span className="mt-4 block h-[3px] w-24 mx-auto rounded-full bg-gradient-to-r from-blue-500 via-orange-400 to-red-500" />
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-14 items-center ">
            <div className="order-1">
              <div className="relative w-full rounded-2xl overflow-hidden border border-zinc-200 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
                {/* Safari top bar */}
                <div className="flex items-center gap-1.5 px-2 py-1.5 bg-zinc-100/80 backdrop-blur-sm border-b border-zinc-200">
                  <span className="h-2 w-2 rounded-full bg-red-500/80" />
                  <span className="h-2 w-2 rounded-full bg-yellow-400/80" />
                  <span className="h-2 w-2 rounded-full bg-emerald-500/80" />
                  <div className="flex-1 flex justify-center">
                    <a className="inline-flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1 ring-1 ring-zinc-300 text-[10px] text-zinc-600 shadow-sm"
                      data-cursor-icon="arrow"
                      href="https://aymanehilmi.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="font-sfregular text-zinc-400">https://</span>
                      <span className="font-sfregular tracking-tight">aymanehilmi.com</span>
                    </a>
                  </div>
                  <span className="hidden sm:inline-block h-2 w-6 rounded bg-zinc-200 " />
                </div>

                <div className="">
                  <AutoPlayVideo
                    src={intro}
                    poster="/images/poster.jpg"
                    className="w-full"
                  />
                </div>

                <div aria-hidden className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5 rounded-2xl" />
              </div>


            </div>

            <div className="order-2">
              <div className="space-y-5 text-zinc-700 md:text-lg leading-relaxed">
                <p className="flex items-start gap-3">
                  <Lightbulb className="w-8 text-blue-600 mt-1" />
                  <span>
                    At first, I felt the need for more than a static resume to
                    stand out to recruiters.
                  </span>
                </p>
                <p className="flex items-start gap-3">
                  <Sparkles className="w-12 text-orange-600 mt-1" />
                  <span>
                    I wanted a space that reflected my personality and skills in
                    a lively way: a place where you don’t just read my journey,
                    but actually see what I can do.
                  </span>
                </p>
                <p className="flex items-start gap-3">
                  <MousePointerClick className="w-6 text-red-600 mt-1" />
                  <span>
                    That’s when the idea of creating my own portfolio was born.
                  </span>
                </p>
              </div>


            </div>
          </div>
        </div>
      </section>


      <section className="relative mt-24 bg-white">
        <div className="">
          <div className="text-center">
            <p className="text-[10px] uppercase tracking-[0.25em] text-zinc-500">Section 2 — The Vision</p>
            <h2 className="mt-2 text-3xl md:text-6xl font-ramidots tracking-tight bg-gradient-to-r from-blue-500 via-orange-400 to-red-500 bg-clip-text text-transparent inline-block">
              From professional tool to creative playground
            </h2>
            <span className="mt-4 block h-[3px] w-24 mx-auto rounded-full bg-gradient-to-r from-blue-500 via-orange-400 to-red-500" />
          </div>
          <div className="mt-16 relative">

            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-8">
              {STEPS.map((step, idx) => (
                <div key={idx} className="relative">
                  <article className="md:h-full overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm md:pl-0">
                    <div className="relative aspect-[16/10] md:aspect-[4/3] overflow-hidden rounded-t-2xl">

                      {idx === 0 && <StackVisual variant="cv" />}
                      {idx === 1 && <StackVisual variant="image" />}
                      {idx === 2 && <StackVisual variant="image3d" />}


                      {/* <img src={step.image} alt={step.subtitle} className="h-full w-full object-cover" /> */}
                      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5 rounded-t-2xl" />
                    </div>
                    <div className="p-5 space-y-3">
                      <h3 className="font-ramidots px-2 text-xl md:text-4xl tracking-tight bg-gradient-to-r from-blue-500 via-orange-400 to-red-500 bg-clip-text text-transparent inline-block ">{step.title}</h3>
                      <p className="text-xs uppercase tracking-widest text-zinc-500">{step.subtitle}</p>
                      <div className="flex gap-2 text-zinc-600">
                        {step.icons.map((icon, i) => (
                          <IconBadge key={i}>{icon}</IconBadge>
                        ))}
                      </div>
                      <p className="text-sm text-zinc-600 leading-relaxed">{step.description}</p>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* <ConceptionScroller steps={[
        { id: "s1", layout: "left", title: "Wireframe — navigation & layout", description: "Esquisser rapidement la structure : header, menu, zones de contenu.", image: "/images/wireframe-1.jpg", caption: "Low-fi #1" },
        { id: "s2", layout: "right", title: "Wireframe — flows & priorités", description: "Valider les parcours clés et la hiérarchie visuelle.", image: "/images/wireframe-2.jpg", caption: "Low-fi #2" },
        { id: "s3", layout: "full", title: "Mood & Direction visuelle", description: "Inspirations, micro-interactions : une image full-width pour marquer l’étape.", image: "/images/mood.jpg" },
        { id: "s4", layout: "left", title: "Post-its — organisation", description: "Clusteriser les idées, prioriser ce qui compte vraiment.", image: "/images/postits.jpg", caption: "Workshop notes" },
      ]} />

      <TechniqueSection />
      <MacbookScroll
        title={
          <span>
            This Macbook is built with Tailwindcss. <br /> No kidding.
          </span>
        }
        badge={
          <a href="https://peerlist.io/manuarora">
            <Badge className="h-10 w-10 -rotate-12 transform" />
          </a>
        }
        src={`/linear.webp`}
        showGradient={false}
      /> */}



      {/* <section className="relative mt-24 overflow-hidden bg-white">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
            Objective
          </p>
          <h3 className="mt-3 text-3xl md:text-6xl font-ramidots bg-gradient-to-r from-blue-500 via-orange-400 to-red-500 bg-clip-text text-transparent inline-block">
            Details & Objectives
          </h3>
          <span className="mt-4 block h-[3px] w-24 mx-auto rounded-full bg-gradient-to-r from-blue-500 via-orange-400 to-red-500" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="group rounded-2xl border border-zinc-200 bg-white p-5 text-center shadow-sm transition hover:shadow-md"
              >
                <div className="mx-auto mb-2 grid h-10 w-10 place-items-center rounded-full ring-1 ring-zinc-200">
                  <Icon
                    className="h-5 w-5 text-zinc-700 group-hover:text-zinc-900 transition"
                    strokeWidth={2}
                  />
                </div>
                <p className="text-base md:text-4xl font-ramidots text-zinc-900 tracking-tight">
                  {stat.value}
                </p>
                <p className="text-xs text-zinc-500 mt-1">{stat.label}</p>

                <span className="mt-3 block h-1 w-10 mx-auto rounded-full bg-gradient-to-r from-blue-500 via-orange-400 to-red-500 opacity-60" />
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-10 items-start">
          <div className="md:col-span-3">
            <h3 className="text-lg font-semibold text-zinc-900">Objectives</h3>
            <ul className="mt-3 space-y-2 text-sm text-zinc-700">
              {[
                "?????????????????????????????????????????????????????????????",
                "?????????????????????????????????????????????????????????????",
                "?????????????????????????????????????????????????????????????",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue-500 via-orange-400 to-red-500" />
                  <span dangerouslySetInnerHTML={{ __html: item }} />
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold text-zinc-900">
              Stack & outils
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {[
                "React",
                "???????",
                "???????",
                "???????",
                "???????",
                "???????",
                "???????",
                "???????",
                "???????",
                "???????",
              ].map((chip) => (
                <span
                  key={chip}
                  className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs text-zinc-700 shadow-sm"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue-500 via-orange-400 to-red-500" />
                  {chip}
                </span>
              ))}
            </div>
            <p className="mt-4 text-xs text-zinc-500">
              Focus&nbsp;: performance, accessibilité, DX propre, CI simplifiée.
            </p>
          </div>
        </div>
      </section>
      <section
        className="mx-auto py-16 sm:py-20"
        aria-label="Why building this portfolio"
      >
        <div className="text-center">
          <p className="text-xs uppercase tracking-widest text-zinc-500">
            Objective
          </p>
          <h3 className="mt-3 text-3xl md:text-6xl font-ramidots bg-gradient-to-r from-blue-500 via-orange-400 to-red-500 bg-clip-text text-transparent inline-block">
            Why building this portfolio?
          </h3>
          <div className="relative mx-auto max-w-5xl text-center mt-4">
            <p className="text-darkGray/90 text-base md:text-lg leading-relaxed">
              When I first discovered the world of computing online, especially
              through{" "}
              <LinkPreview
                imageSrc="https://play-lh.googleusercontent.com/ZRfghwQudJzza7Zb7k1tlc7aXd3WpnVb48AGg_kP-r84kiOcsLKpeM5goGkAQVT16P0=w526-h296-rw"
                url="https://agar.io"
                isStatic
                className="font-bold text-black hover:bg-gradient-to-r hover:from-blue-500 hover:via-orange-400 hover:to-red-500 hover:bg-clip-text hover:text-transparent transition-colors duration-300"
              >
                Agar.io
              </LinkPreview>
              . I instantly fell in love with websites, particularly the ones
              that felt impressive to build. From that point, I set myself the
              goal of creating one that truly reflects my own universe. This
              portfolio isn’t about selling myself to recruiters or chasing
              opportunities. I’m building it purely{" "}
              <span className="italic">for the joy and passion of it</span>.
            </p>
          </div>
          <span className="mt-6 inline-block h-1 w-24 rounded-full bg-gradient-to-r from-blue-500 via-orange-400 to-red-500" />
        </div>
      </section>
      <section className="relative">
        <div
          aria-hidden
          className="absolute inset-0 flex items-center justify-center opacity-20"
        >
          <span
            className="font-ramidots text-[20vw] md:text-[16vw] leading-none tracking-tight bg-gradient-to-r
             from-blue-500 via-orange-400 to-red-500 bg-clip-text text-transparent select-none py-20 px-32"
          >
            PORTFOLIO
          </span>
        </div>

        <div className="relative mx-auto max-w-6xl px-6 text-center">
          

          <div className="mt-10 md:mt-14 flex justify-center gap-8">
            <PhoneFrame>
              <img
                src={MobilePortfolio}
                alt="App preview"
                className="h-full w-full object-cover"
              />
            </PhoneFrame>
            <PhoneFrame>
              <img
                src={MobilePortfolio}
                alt="App preview"
                className="h-full w-full object-cover"
              />
            </PhoneFrame>
            <PhoneFrame>
              <img
                src={MobilePortfolio}
                alt="App preview"
                className="h-full w-full object-cover"
              />
            </PhoneFrame>
            
          </div>
        </div>
      </section>
      <section className="relative mt-24 overflow-hidden">
        
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center opacity-15"
        >
          <span
            className="font-ramidots text-[22vw] md:text-[28vw] leading-none tracking-tight
      bg-gradient-to-r from-blue-500 via-orange-400 to-red-500 bg-clip-text text-transparent select-none"
          >
            VISITOR
          </span>
        </div>

        <div className="relative px-8 py-16 flex flex-col items-center text-center gap-8">
          
          <div className="space-y-3">
            <p className="text-[10px] uppercase tracking-[0.25em] text-zinc-500">
              Live Counter
            </p>
            <h3
              className="text-3xl md:text-7xl font-ramidots tracking-tight
        bg-gradient-to-r from-blue-500 via-orange-400 to-red-500 bg-clip-text text-transparent w-fit"
            >
              You are the
            </h3>
          </div>

          
          <div className="relative">
           
            <div
              className="absolute -inset-6 md:-inset-10 rounded-full blur-3xl
        bg-gradient-to-r from-blue-500/25 via-orange-400/20 to-red-500/25 animate-pulse"
            />

            
            <span
              className="relative inline-flex items-baseline justify-center gap-2
          font-ramidots text-[4.5rem] md:text-[12rem] leading-none tracking-tight
          bg-gradient-to-r from-blue-500 via-orange-400 to-red-500 bg-clip-text text-transparent
          drop-shadow-sm select-none"
              aria-live="polite"
            >
              <NumberTicker value={visitsTotal} />
              <sup className="align-super text-[0.28em] tracking-wide font-ramidots text-red-500">
                {suffix}
              </sup>
            </span>

            
            <span
              className="relative mt-4 block h-1 w-28 md:w-40 mx-auto rounded-full
        bg-gradient-to-r from-blue-500 via-orange-400 to-red-500"
            />
          </div>

          
          <h3
            className="text-3xl md:text-7xl font-ramidots tracking-tight
      bg-gradient-to-r from-blue-500 via-orange-400 to-red-500 bg-clip-text text-transparent w-fit"
          >
            visitor of this Portfolio.
          </h3>

           mini note optionnelle 
           <p className="max-w-xl text-sm md:text-base text-gray-600 leading-relaxed">
      Every visit helps me iterate and add more hidden layers. Thanks for being part of the timeline.
    </p> 
        </div>
      </section> */}
      {/* <IconSwitcher/> */}
    </div>
  );
}

function getOrdinalParts(n) {
  const j = n % 10,
    k = n % 100;
  let suffix = "th";
  if (j === 1 && k !== 11) suffix = "st";
  else if (j === 2 && k !== 12) suffix = "nd";
  else if (j === 3 && k !== 13) suffix = "rd";

  return { number: n, suffix };
}

function PhoneFrame({ children }) {
  return (
    <div className="relative h-[520px] w-[260px] md:h-[660px] md:w-[320px]">
      {/* device body */}
      <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-b from-zinc-900 to-zinc-800 shadow-[0_20px_60px_rgba(0,0,0,0.35)]" />
      <div className="absolute inset-[10px] rounded-[2.5rem] bg-black overflow-hidden">
        {children}
      </div>

      {/* side buttons (decorative) */}
      <div className="absolute -left-1 top-24 h-16 w-1.5 rounded-r bg-zinc-700" />
      <div className="absolute -right-1 top-40 h-10 w-1.5 rounded-l bg-zinc-700" />

      {/* notch */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[10px] h-6 w-36 rounded-b-2xl bg-black" />

      {/* lens / speakers subtle gloss */}
      <div className="pointer-events-none absolute inset-0 rounded-[3rem] ring-2 ring-black/5" />
    </div>
  );
}

function IconBadge({ children }) {
  return (
    <span className="inline-flex items-center justify-center h-8 w-8 rounded-full border border-zinc-200 bg-white shadow-sm">
      {children}
    </span>
  );
}

const Badge = ({ className }) => {
  return (
    <div className=" bg-white rounded-full" data-cursor-icon="arrow">

      < img src={LogoMobile} className="w-10 h-10" alt="Logo" />
    </div>
  );
};



function StackVisual({ variant }) {
  return (
    <div className="absolute inset-0 bg-white group">
      {/* stack container */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[78%] max-w-sm h-[78%]">
        {/* sheet 3 (back) */}
        <div className="absolute inset-0 translate-x-[-10px] translate-y-[10px] rounded-xl bg-white border border-zinc-200 shadow-sm transition-transform duration-300 group-hover:-rotate-6 group-hover:-translate-x-3 group-hover:translate-y-3" />
        {/* sheet 2 */}
        <div className="absolute inset-0 translate-x-[-6px] translate-y-[6px] rounded-xl bg-white border border-zinc-200 shadow-sm transition-transform duration-300 group-hover:-rotate-3 group-hover:-translate-x-1.5 group-hover:translate-y-1.5" />
        {/* sheet 1 (top) */}
        <div className="absolute inset-0 rounded-xl bg-white border border-zinc-200 shadow-sm overflow-hidden transition-transform duration-300 group-hover:scale-[1.02]">
          {/* inner content by variant */}
          {variant === "cv" && (
            <div className="p-4 space-y-2">
              <div className="h-3 w-24 rounded bg-zinc-200" />
              <div className="h-2 w-40 rounded bg-zinc-100" />
              <div className="h-2 w-36 rounded bg-zinc-100" />
              <div className="mt-2 space-y-1.5">
                <div className="h-2 w-48 rounded bg-zinc-100" />
                <div className="h-2 w-44 rounded bg-zinc-100" />
                <div className="h-2 w-40 rounded bg-zinc-100" />
              </div>
              <div className="mt-2 space-y-1.5">
                <div className="h-2 w-48 rounded bg-zinc-100" />
                <div className="h-2 w-44 rounded bg-zinc-100" />
                <div className="h-2 w-40 rounded bg-zinc-100" />
              </div>
              <div className="mt-2 space-y-1.5">
                <div className="h-2 w-48 rounded bg-zinc-100" />
                <div className="h-2 w-44 rounded bg-zinc-100" />
                <div className="h-2 w-40 rounded bg-zinc-100" />
              </div>
            </div>
          )}

          {variant === "image" && (
            <div className="h-full w-full p-4">
              <div className="grid h-full w-full grid-cols-3 grid-rows-3 gap-3">
                {/* Big hero tile */}
                <div className="col-span-2 row-span-2 rounded-lg bg-zinc-50 ring-1 ring-inset ring-zinc-200 overflow-hidden transition-transform duration-300 group-hover:scale-[1.02]">
                  <div className="h-full w-full grid place-items-center">
                    <Image className="h-10 w-10 text-zinc-400 transition-transform duration-300 group-hover:rotate-3 group-hover:scale-110" strokeWidth={1} />
                  </div>
                </div>
                {/* Small square */}
                <div className="col-span-1 row-span-1 rounded-lg bg-zinc-50 ring-1 ring-inset ring-zinc-200 grid place-items-center transition-transform duration-300 group-hover:-rotate-1">
                  <Image className="h-6 w-6 text-zinc-400" strokeWidth={1} />
                </div>
                {/* Tall tile with caption bars */}
                <div className="col-span-1 row-span-2 rounded-lg bg-zinc-50 ring-1 ring-inset ring-zinc-200 p-3 flex flex-col justify-between transition-transform duration-300 group-hover:translate-y-0.5">
                  <div className="grid place-items-center py-4">
                    <Image className="h-7 w-7 text-zinc-400" strokeWidth={1} />
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 w-5/6 rounded bg-zinc-200" />
                    <div className="h-2 w-4/6 rounded bg-zinc-100" />
                  </div>
                </div>
                {/* Wide caption strip */}
                <div className="col-span-2 row-span-1 rounded-lg bg-zinc-50 ring-1 ring-inset ring-zinc-200 p-3 flex items-center gap-3 transition-transform duration-300 group-hover:translate-x-0.5">
                  <div className="h-8 w-8 grid place-items-center rounded bg-white ring-1 ring-zinc-200">
                    <Image className="h-4 w-4 text-zinc-400" strokeWidth={1} />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="h-2 w-4/5 rounded bg-zinc-200" />
                    <div className="h-2 w-3/5 rounded bg-zinc-100" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {variant === "image3d" && (
            <div className="relative h-full w-full">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid place-items-center rounded-lg ring-1 ring-inset ring-zinc-200 bg-zinc-50 w-[78%] h-[64%]">
                  <div className="flex items-center gap-2 text-zinc-600">
                    <Boxes className="h-10 w-10 text-zinc-400 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110" strokeWidth={1} />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}