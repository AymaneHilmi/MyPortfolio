import React from "react";
import HomePortfolio from "@/assets/PortfolioHome.png";
import LogoMobile from "@/assets/LogoMobile.png";
import intro from "@/assets/IntroPortfolio.mp4";
import ethanchng from "@/assets/ethanchng.mp4";
import zaid from "@/assets/zaid.mp4";
import Yiko from "@/assets/Yiko-Li.mp4";
import CesiverooSpline from "@/assets/CesiverooSpline.mp4";
import LandingPageSpline from "@/assets/LandingPageSpline.mp4";
import AymanePortfolioV1 from "@/assets/AymanePortfolioV1.mp4";
import ComingSoon from "@/assets/ComingSoon.mp4";
import rework from "@/assets/ReworkPortfolio.jpg";
import { toast } from "react-hot-toast";

import {
  Boxes,
  Box,
  Github,
  FileText,
  Sparkles,
  Lightbulb,
  MousePointerClick,
  Linkedin,
  Image,
  Wand2,
  LayoutDashboard,
} from "lucide-react";
import { NumberTicker } from "../components/ui/NumberTicker";
import { LinkPreview } from "@/components/ui/link-preview";

// Image not used in the following section
import AutoPlayVideo from "../components/ui/autoplayVideo";
import LighthouseSection from "../components/ui/lightHousesection";

import { useEasterEgg } from "@/context/EasterEggContext";

function EggProgress() {
  const { EggList, foundEggs } = useEasterEgg();
  const total = EggList.length;
  const count = foundEggs.length;
  const pct = Math.round((count / Math.max(total, 1)) * 100);

  return (
    <section className="relative mt-6 md:mt-16">
      <div className=" rounded-2xl border border-zinc-200 bg-white shadow-sm p-6">
        <div className="flex items-center gap-4">
          <p className="text-[10px] uppercase tracking-[0.25em] text-zinc-500">Easter Eggs Progress</p>
        </div>

        {/* Progress bar */}
        <div className="mt-4" role="region" aria-label="Easter eggs progress">
          <div
            className="h-2 w-full rounded-full bg-zinc-100"
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={total}
            aria-valuenow={count}
            aria-label="Easter eggs found"
          >
            <div
              className="h-2 rounded-full bg-gradient-to-r from-blue-500 via-orange-400 to-red-500 transition-[width] duration-300"
              style={{ width: `${pct}%` }}
            />
          </div>
          <p className="mt-2 text-xs text-zinc-500 text-center">{count} / {total} found</p>
        </div>
      </div>
    </section>
  );
}

export default function PortfolioScreen({ visitsTotal }) {

  const architectureSteps = [
    {
      num: "1",
      title: "Website Navigation",
      description:
        "The first step was to define the navigation flow, starting with a sidebar to give quick access to all sections.",
    },
    {
      num: "2",
      title: "Landing Page",
      description:
        "Then I focused on designing a strong landing page to try to create a first stunning impression.",
    },
    {
      num: "3",
      title: "Home & Logical Flow",
      description:
        "Finally, I organized the homepage and content flow to make everything intuitive and easy to navigate.",
    }
  ];

  const VisionsSteps = [
    {
      title: "At the beginning",
      subtitle: "A living extension of my resume",
      description:
        "Presenting clearly my journey, projects, and skills with only a professional purpose.",
      icons: [
        <FileText key="cv" className="h-4 w-4" />,
        <Linkedin key="in" className="h-4 w-4" />,
      ],
      image: "",
    },
    {
      title: "The transition",
      subtitle: "Exploring creative freedom",
      description:
        "Starting to use the portfolio as a lab: experimenting with interactions, layouts, pictures, design and ideas.",
      icons: [
        <Wand2 key="wand" className="h-4 w-4" />,
        <LayoutDashboard key="layout" className="h-4 w-4" />,
      ],
      image: "",
    },
    {
      title: "At the end",
      subtitle: "A creative playground",
      description:
        "Bringing the portfolio with subtle touches and micro-animations, hidden easter eggs. Make it feels like my own little world.",
      icons: [
        <Box key="cube" className="h-4 w-4" />,
        <Sparkles key="sprk" className="h-4 w-4" />,
      ],
      image: "",
    },
  ];

  return (
    <div className="lg:mx-auto max-w-5xl px-6">
      <section className="mx-auto py-12 md:py-16 md:mt-32 mt-12 flex justify-center items-center">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12 items-center">
          {/* Left column — Text */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 px-3 py-1 text-sm text-zinc-600">
              <span className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-500 via-orange-400 to-red-500" />
              Process Highlights
            </div>

            <div className="flex flex-row gap-4 items-center">
              {/* <img src={logo} alt="Portfolio logo" className="h-20 w-20" /> */}
              <span className=" font-ramidots tracking-tight text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-blue-500 via-orange-400 to-red-500 bg-clip-text text-transparent w-fit pr-4">
                My Portfolio Project
              </span>
            </div>

            <div className="prose prose-zinc max-w-none text-darkGray text-justify text-sm md:text-base lg:text-lg">
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

      <section className="relative mt-6 overflow-hidden bg-white ">
        <div>
          <div className="text-center">
            <p className="text-[10px] uppercase tracking-[0.25em] text-zinc-500">
              The Trigger
            </p>
            <h2 className="mt-2 text-4xl md:text-5xl lg:text-6xl font-ramidots tracking-tight bg-gradient-to-r from-blue-500 via-orange-400 to-red-500 bg-clip-text text-transparent inline-block">
              More than a resume, a living presence
            </h2>
            <span className="mt-4 block h-[3px] w-24 mx-auto rounded-full bg-gradient-to-r from-blue-500 via-orange-400 to-red-500" />
          </div>

          <div className="relative text-justify mt-4">
            <p className="text-darkGray/90 text-sm md:text-base lg:text-lg leading-relaxed">
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

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-14 items-center ">
            <div className="order-1">
              <p className="text-[10px] text-center uppercase tracking-widest text-zinc-500 mb-2">
                Final Version of the Portfolio
              </p>
              <div className="relative w-full rounded-2xl overflow-hidden border border-zinc-200 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
                {/* Safari top bar */}
                <div className="flex items-center gap-1.5 px-2 py-1.5 bg-zinc-100/80 backdrop-blur-sm border-b border-zinc-200">
                  <span className="h-2 w-2 rounded-full bg-red-500/80" />
                  <span className="h-2 w-2 rounded-full bg-yellow-400/80" />
                  <span className="h-2 w-2 rounded-full bg-emerald-500/80" />
                  <div className="flex-1 flex justify-center">
                    <a
                      className="inline-flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1 ring-1 ring-zinc-300 text-[10px] text-zinc-600 shadow-sm"
                      data-cursor-icon="arrow"
                      href="https://aymanehilmi.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="font-sfregular text-zinc-400">
                        https://
                      </span>
                      <span className="font-sfregular tracking-tight">
                        aymanehilmi.com
                      </span>
                    </a>
                  </div>
                  <span className="hidden sm:inline-block h-2 w-6 rounded bg-zinc-200 " />
                </div>

                <div className="">

                  <AutoPlayVideo src={intro} className="w-full" />
                </div>

                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5 rounded-2xl"
                />
              </div>
            </div>

            <div className="order-2">
              <div className="space-y-5 text-zinc-700 text-sm md:text-base lg:text-lg leading-relaxed">
                <p className="flex items-start gap-3">
                  <Lightbulb className="w-8 text-blue-600 md:mt-1" />
                  <span>
                    At first, I felt the need for more than a static resume to
                    stand out to recruiters.
                  </span>
                </p>
                <p className="flex items-start gap-3">
                  <Sparkles className="w-12 text-orange-600 md:mt-1" />
                  <span>
                    I wanted a space that reflected my personality and skills in
                    a lively way: a place where you don’t just read my journey,
                    but actually see what I can do.
                  </span>
                </p>
                <p className="flex items-start gap-3">
                  <MousePointerClick className="w-6 text-red-600 md:mt-1" />
                  <span>
                    That’s when the idea of creating my own portfolio was born.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section >

      <section className="relative mt-10 md:mt-24 bg-white">
        <div className="">
          <div className="text-center">
            {/* <p className="text-[10px] uppercase tracking-[0.25em] text-zinc-500">
              The Vision
            </p> */}
            {/* <h2 className="mt-2 text-3xl md:text-6xl font-ramidots tracking-tight bg-gradient-to-r from-blue-500 via-orange-400 to-red-500 bg-clip-text text-transparent inline-block">
              From professional tool to creative playground
            </h2> */}
            {/* <span className="mt-4 block h-[3px] w-24 mx-auto rounded-full bg-gradient-to-r from-blue-500 via-orange-400 to-red-500" /> */}

            <div className=" font-sfregular text-zinc-600 text-center text-sm md:text-base lg:text-lg" >
              Over time, the vision for my portfolio has evolved significantly.
              What started as a space focused solely on professional topics has
              gradually become a personal creative outlet where I can express
              myself freely.
            </div>
          </div>
          <div className="mt-16 relative">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-8">
              {VisionsSteps.map((step, idx) => (
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
                      <h3 className="font-ramidots px-2 text-4xl tracking-tight bg-gradient-to-r from-blue-500 via-orange-400 to-red-500 bg-clip-text text-transparent inline-block ">
                        {step.title}
                      </h3>
                      <p className="text-xs uppercase tracking-widest text-zinc-500">
                        {step.subtitle}
                      </p>
                      <div className="flex gap-2 text-zinc-600">
                        {step.icons.map((icon, i) => (
                          <IconBadge key={i}>{icon}</IconBadge>
                        ))}
                      </div>
                      <p className="text-sm text-zinc-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="text-center mt-10">
          <p className="text-[10px] uppercase tracking-[0.25em] text-zinc-500">
            The Conception
          </p>

          {/* <span className="mt-4 block h-[3px] w-24 mx-auto rounded-full bg-gradient-to-r from-blue-500 via-orange-400 to-red-500" /> */}
        </div>

        <figure className=" translate-y-6 transition will-change-transform">
          <div className="relative rounded-2xl overflow-hidden border border-zinc-200 shadow-[0_20px_60px_rgba(0,0,0,0.06)] maw-w-xl">
            <AutoPlayVideo src={ethanchng} className="w-full" />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5 rounded-2xl"
            />
          </div>
          <p className="text-[10px] uppercase tracking-[0.25em] text-zinc-500 mt-2 ml-4">
            Ethan’s Portfolio
          </p>

          <figcaption className="mt-10 md:mt-16 ">
            <p className=" text-zinc-600 leading-relaxed text-sm md:text-base lg:text-lg text-justify">
              One of the sites that inspired me the most was{" "}
              <a
                data-cursor-icon="arrow"
                className="font-bold underline"
                href="https://ethanchng.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ethan Chng’s portfolio
              </a>
              . His monochrome design and subtle mockup line effects perfectly
              matched the style I wanted to create, and they strongly influenced
              the way I envisioned my own portfolio. There were also two other
              websites that inspired me on specific aspects, here they are:
            </p>
          </figcaption>
        </figure>
      </section>

      <section className="relative mt-16 md:mt-24">
        <div className="mx-auto">
          {/* Grid vidéos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Vidéo gauche */}
            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-zinc-500 text-center mb-2">
                Zaid's Portfolio
              </p>
              <figure className="rounded-2xl overflow-hidden border border-zinc-200 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
                <div className="relative aspect-[16/9] w-full">
                  <AutoPlayVideo
                    src={zaid}
                    className="h-full w-full object-cover"
                  />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5"
                  />
                </div>
              </figure>
              <figcaption className="mt-8 md:mt-10">
                <p className="text-zinc-600 leading-relaxed max-w-3xl mx-auto text-sm md:text-base lg:text-lg text-justify">
                  Additionally, I also drew inspiration from{" "}
                  <a
                    data-cursor-icon="arrow"
                    className="font-bold underline"
                    href="https://www.zaidsyed.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Zaid’s portfolio.
                  </a>{" "}
                  I was really inspired by how
                  he manages the cursor. He created a fluid and intuitive
                  interaction where the cursor adapts depending on the type of
                  action the user is making. Without words, this subtle design
                  choice makes the whole experience clearer and more engaging.
                </p>
              </figcaption>
            </div>

            {/* Vidéo droite */}
            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-zinc-500 text-center mb-2">
                Yiko's Portfolio
              </p>
              <figure className="rounded-2xl overflow-hidden border border-zinc-200 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
                <div className="relative aspect-[16/9] w-full">
                  <AutoPlayVideo
                    src={Yiko}
                    className="h-full w-full object-cover"
                  />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5"
                  />
                </div>
              </figure>
              {/* Description (uniquement du texte) */}
              <figcaption className="mt-8 md:mt-10 ">
                <p className="text-zinc-600 leading-relaxed max-w-3xl mx-auto text-sm md:text-base lg:text-lg text-justify">
                  <a
                    className="font-bold underline"
                    href="https://yikodesign.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor-icon="arrow"
                  >
                    Yiko’s portfolio
                  </a>{" "}
                  inspired me with the way she kept things extremely simple,
                  going straight to the essentials without any unnecessary
                  distractions. The way she structured her projects was also
                  clear and effective, influencing how I organized and presented
                  mine in this portfolio.
                </p>
              </figcaption>
            </div>
          </div>
        </div>
      </section>

      <section className="relative mt-6 bg-white">
        <div className=" text-zinc-600 space-y-4 text-sm md:text-base lg:text-lg text-justify">
          <p>
            Unlike many designers, I didn’t really start with Figma mockups or
            detailed wireframes. Instead, I jumped straight into the code. The
            conception happened step by step, I would test an idea, build a
            small piece, then adjust or scrap it if it didn’t feel right. Every
            evening, as a pastime, I was experimenting and iterating directly on
            VS Code.
          </p>
          <p>
            This approach turned the project into a playful lab. It wasn’t just
            about shipping a “perfect” portfolio, but about enjoying the process
            of coding, trying, failing, and improving in an agile, iterative
            way.
            The conception of this portfolio happened in three main steps:
          </p>
        </div>
      </section>

      <section className="relative">

        {/* Timeline */}
        <div className="mt-16 relative">
          {/* Desktop (horizontal) */}
          <div className="hidden md:flex justify-between items-start mx-auto">
            {architectureSteps.map((step, i) => (
              <div key={i} className="relative flex-1 text-center px-4">
                {/* Number circle */}
                <div
                  className="mx-auto flex items-center justify-center h-12  rounded-full 
            text-7xl font-ramidots tracking-tight bg-gradient-to-r from-blue-500 via-orange-400 to-red-500 bg-clip-text text-transparent w-fit mb-4"
                >
                  {step.num}
                </div>
                {/* Title */}
                <h3 className="font-semibold text-zinc-900">{step.title}</h3>
                {/* Description */}
                <p className="mt-2 text-base text-zinc-600">{step.description}</p>
              </div>
            ))}
          </div>

          {/* Mobile (vertical) */}
          <div className="md:hidden space-y-10 max-w-md mx-auto">
            {architectureSteps.map((step, i) => (
              <div key={i} className="relative pl-10 text-left">
                {/* Number circle */}
                <div
                  className="absolute left-0 top-1 flex items-center justify-center rounded-full 
            text-7xl font-ramidots tracking-tight bg-gradient-to-r from-blue-500 via-orange-400 to-red-500 bg-clip-text text-transparent w-fit "
                >
                  {step.num}
                </div>
                {/* Content */}
                <div className="pl-6">
                  <h3 className="font-semibold text-zinc-900">{step.title}</h3>
                  <p className="mt-2 text-sm text-zinc-600">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-10 md:mt-24">
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-start">
          <div className="flex flex-col justify-center items-center text-center md:text-left h-full">
            <div className="flex flex-col justify-center items-center md:items-start h-full">
              <p className="text-[10px] uppercase tracking-[0.25em] text-zinc-500">
                Website Navigation
              </p>
              <h2
                className="mt-2 text-4xl md:text-5xl lg:text-6xl font-ramidots tracking-tight 
                          bg-gradient-to-r from-blue-500 via-orange-400 to-red-500 bg-clip-text text-transparent inline-block">
                Navigation Flow
              </h2>
              <span
                className="mt-4 block h-[3px] w-24 mx-auto md:mx-0 rounded-full 
                          bg-gradient-to-r from-blue-500 via-orange-400 to-red-500"/>

              <div className="mt-6 text-zinc-600 leading-relaxed space-y-4 text-sm md:text-base lg:text-lg text-justify">
                <p>
                  The idea was to start with a clean landing page, and as the
                  user scrolls, the sidebar would gradually appear and then
                  remain fixed for the rest of the navigation.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT — Scrolling mockup */}
          <div className="mx-auto w-full max-w-3xl select-none">
            <p className="text-[10px] uppercase tracking-[0.25em] text-zinc-500 text-center mb-2">
              Scrolling Flow{" "}
            </p>

            <div className="rounded-2xl border border-zinc-200 bg-white shadow-[0_16px_50px_rgba(0,0,0,0.06)] overflow-hidden">
              <div className="relative h-[380px] bg-white">
                {/* Content that scrolls */}
                <div className="absolute inset-0 overflow-hidden">
                  <div className="scroll-track h-[220%]">
                    <div className="p-4 space-y-3">
                      {/* 1) Full width (no sidebar) */}
                      <div className="grid grid-cols-[7rem_1fr] gap-3">
                        <div className="col-span-2 h-80 rounded-lg bg-zinc-50 ring-1 ring-inset ring-zinc-200 flex items-center justify-center text-zinc-400">
                          Landing page
                        </div>
                      </div>

                      {/* 2) With sidebar left */}
                      <div className="grid grid-cols-[7rem_1fr] gap-3">
                        {/* sidebar (mock rectangle) */}
                        <div className="sidebar-appear sticky h-80 rounded-lg bg-zinc-50 ring-1 ring-inset ring-zinc-200 flex items-center justify-center text-zinc-400">
                          Sidebar
                        </div>
                        {/* content */}
                        <div className="h-80 rounded-lg bg-zinc-50 ring-1 ring-inset ring-zinc-200 flex items-center justify-center text-zinc-400">
                          Main Content
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Styles d’animation inline (pas besoin de modifier tailwind.config) */}
            <style>{`
        /* Scroll vertical infini */
        @keyframes navflow-scroll {
          0%   { transform: translateY(0%); }
          100% { transform: translateY(-30%); }
        }
        .scroll-track {
          animation: navflow-scroll 5s linear infinite;
        }

        /* Apparition progressive de la sidebar,
           puis reste visible jusqu'à la fin du cycle */
        @keyframes sidebar-appear-key {
          0%   { opacity: 0; transform: translateX(-14px); }
          35%  { opacity: 0; transform: translateX(-14px); } /* landing d’abord */
          45%  { opacity: 1; transform: translateX(0); }
          100% { opacity: 1; transform: translateX(0); }     /* reste “fixe” */
        }
        .sidebar-appear {
          opacity: 0;
          animation: sidebar-appear-key 5s ease-in-out infinite;
        }

        /* Respecte les préférences utilisateur */
        @media (prefers-reduced-motion: reduce) {
          .scroll-track,
          .sidebar-appear {
            animation: none !important;
          }
        }
      `}</style>
          </div>
        </div>
      </section>

      <div className="mt-24 text-zinc-600 leading-relaxed text-sm md:text-base lg:text-lg text-justify">
        <p>
          When I started developing the sidebar, I chose to follow the same
          design as Ethan’s portfolio as I really loved it. For my version,
          I added a personal touch by placing my name in Arabic on the home
          button.
        </p>
      </div>

      <section className="mt-16 md:mt-32 flex justify-center">
        {/* Two columns that stay side-by-side on mobile but scale down */}
        <div className="grid grid-cols-[minmax(140px,200px)_1fr] sm:grid-cols-[minmax(180px,240px)_1fr] md:grid-cols-[minmax(200px,200px)_1fr] gap-6 md:gap-10 items-stretch">
          {/* SIDEBAR (mock) */}
          <div className=" border border-zinc-200 bg-zinc-50 shadow-[0_24px_40px_rgba(0,0,0,0.06)]  w-full">
            <div className="grid grid-rows-[0.22fr_1fr_1fr] h-full min-w-[140px]">
              {/* Top */}
              {/* Top */}
              <div className="group relative row-span-1 p-5 sm:p-6 border-b border-gray-300 flex flex-col gap-2 text-base sm:text-lg font-bold text-zinc-900 transition-all">
                {/* barre gradient à gauche */}
                <span className="pointer-events-none absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-blue-500 via-orange-400 to-red-500 opacity-0 group-hover:opacity-100 scale-y-50 group-hover:scale-y-100 origin-top transition-all duration-300" />
                {/* voile subtil */}
                <span className="pointer-events-none absolute inset-0 rounded-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-zinc-100/70 to-transparent" />

                <a className="bg-zinc-200 h-16 sm:h-18 w-28 sm:w-32 flex items-center justify-center rounded-xl ring-1 ring-inset ring-zinc-300 transition-all duration-300 group-hover:ring-zinc-400 group-hover:shadow-sm">
                  <img
                    src={LogoMobile}
                    alt="Aymane Logo"
                    className="rounded-[8px] w-20 sm:w-24"
                  />
                </a>

                <a className="mt-3 opacity-90 transform transition-transform duration-300 group-hover:translate-x-[1px] w-fit">
                  About Me
                </a>
                <a className="opacity-90 transform transition-transform duration-300 group-hover:translate-x-[1px] w-fit">
                  Resume
                </a>
              </div>

              {/* Middle */}
              <div className="group relative row-span-1 border-b border-gray-300 p-5 sm:p-6 text-[13px] sm:text-sm text-zinc-700 transition-all">
                {/* barre gradient à gauche */}
                <span className="pointer-events-none absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-blue-500 via-orange-400 to-red-500 opacity-0 group-hover:opacity-100 scale-y-50 group-hover:scale-y-100 origin-top transition-all duration-300" />
                {/* voile subtil */}
                <span className="pointer-events-none absolute inset-0 rounded-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-zinc-100/70 to-transparent" />

                <div className="flex flex-col gap-1">
                  <h1 className="text-[10px] sm:text-xs pb-2 text-zinc-400 tracking-widest">
                    MOBILE APPLICATION
                  </h1>
                  <a className="transform transition-transform duration-300 group-hover:translate-x-[1px] w-fit">
                    Saint-Gobain
                  </a>
                  <a className="transform transition-transform duration-300 group-hover:translate-x-[1px] w-fit">
                    Cesiveroo
                  </a>
                </div>

                <div className="flex flex-col gap-1 mt-5 sm:mt-6">
                  <h1 className="text-[10px] sm:text-xs pb-2 text-zinc-400 tracking-widest">
                    WEB DEVELOPMENT
                  </h1>
                  <a className="transform transition-transform duration-300 group-hover:translate-x-[1px] w-fit">
                    Aymane&apos;s Portfolio
                  </a>
                  <a className="transform transition-transform duration-300 group-hover:translate-x-[1px] w-fit">
                    SAAS project
                  </a>
                </div>
              </div>

              {/* Bottom */}
              <div className="group relative row-span-1 flex flex-col p-5 sm:p-6 text-[13px] sm:text-sm text-zinc-700 transition-all">
                {/* barre gradient à gauche */}
                <span className="pointer-events-none absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-blue-500 via-orange-400 to-red-500 opacity-0 group-hover:opacity-100 scale-y-50 group-hover:scale-y-100 origin-top transition-all duration-300" />
                {/* voile subtil */}
                <span className="pointer-events-none absolute inset-0 rounded-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-zinc-100/70 to-transparent" />

                <h1 className="text-[10px] sm:text-xs pb-2 text-zinc-400 tracking-widest">
                  PERSONAL
                </h1>
                <a className="transform transition-transform duration-300 group-hover:translate-x-[1px] w-fit">
                  Journey
                </a>
                <a className="transform transition-transform duration-300 group-hover:translate-x-[1px] w-fit">
                  Blog
                </a>

                <h1 className="text-[10px] sm:text-xs pb-2 mt-4 text-zinc-400 tracking-widest">
                  CONTACT
                </h1>
                <a
                  data-cursor-icon="mail"
                  className="transform transition-transform duration-300 group-hover:translate-x-[1px] w-fit"
                >
                  Mail
                </a>
                <a
                  data-cursor-icon="arrow"
                  className="transform transition-transform duration-300 group-hover:translate-x-[1px] w-fit"
                >
                  Linkedin
                </a>
                <a
                  data-cursor-icon="arrow"
                  className="transform transition-transform duration-300 group-hover:translate-x-[1px] w-fit"
                >
                  Github
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT — perfectly aligned with the 3 sidebar rows */}
          <div className="flex flex-col justify-around h-full content-stretch">
            {/* Row 1 — Top */}
            <div className="relative flex items-center pl-4 sm:pl-6">
              <div>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-zinc-900 mb-1">
                  Personal section
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-zinc-600">
                  About & Resume — entry point and quick context about me.
                </p>
              </div>
            </div>

            {/* Row 2 — Middle */}
            <div className="relative flex items-center pl-4 sm:pl-6">
              <div>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-zinc-900 mb-1">
                  Projects section
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-zinc-600">
                  Mobile & Web — all current and future projects I develop.
                </p>
              </div>
            </div>

            {/* Row 3 — Bottom */}
            <div className="relative flex items-center pl-4 sm:pl-6">
              <div>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-zinc-900 mb-1">
                  Social section
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-zinc-600">
                  Personal posts & contact — blog and ways to reach me.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-16 md:mt-32 text-zinc-600 leading-relaxed text-sm md:text-base lg:text-lg text-justify ">
        <p>
          After finishing the sidebar, I moved on to the landing page with the
          goal of creating a strong first impression through a clear and
          engaging introduction. To achieve this, I decided to use{" "}
          <LinkPreview
            imageSrc="https://ai.google.dev/static/images/showcase/spline/hero-image.jpg"
            url="https://spline.design/"
            isStatic
            className="font-bold underline hover:bg-gradient-to-r hover:from-blue-500 hover:via-orange-400 hover:to-red-500 hover:bg-clip-text hover:text-transparent transition-colors duration-300"
          >
            Spline
          </LinkPreview>
          , allowing me to bring 3D elements into the portfolio and make the
          landing page more visually dynamic.
        </p>
      </div>

      <section>
        <div className="text-center mt-12">
          <p className="text-[10px] uppercase tracking-[0.25em] text-zinc-500">
            3D Conception
          </p>
        </div>

        <figure className="translate-y-6 transition will-change-transform">
          <div className="relative rounded-2xl overflow-hidden border border-zinc-200 shadow-[0_20px_60px_rgba(0,0,0,0.06)] ">
            <AutoPlayVideo src={LandingPageSpline} className="w-full" />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5 rounded-2xl"
            />
          </div>
          <div className="mt-10 flex flex-col items-center justify-center relative">
            {/* --- Bouton centré --- */}
            <a
              href="https://my.spline.design/portfoliolandingpage-5a9fe475db2ad59c87a47f07a727266f/"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-icon="arrow"
              className="inline-flex items-center gap-2 rounded-xl bg-darkGray px-6 py-3 text-sm font-semibold text-white shadow-md hover:shadow-lg hover:bg-gradient-to-r hover:from-blue-500 hover:via-orange-400 hover:to-red-500 transition-colors"
            >
              View demo
            </a>
            {/* REPRENDRE A PARTIR D'ICI, AVEC LA FLECHE SVG QUI DECONNE SUR MOBILE */}
            {/* --- Version mobile --- */}

            <div className="absolute -bottom-[60%] right-[2%] flex flex-row items-center gap-2 md:hidden">
              <svg
                className="w-10 h-6 text-gray-400 opacity-70 scale-y-[-1] rotate-[30deg]"
                viewBox="0 0 220 50"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M21.489 29.4305C36.9333 31.3498 51.3198 33.0559 65.7063 34.9753C66.7641 35.1885 67.6104 36.4681 69.9376 38.3875C63.1675 39.2406 57.8783 40.3069 52.5892 40.5201C38.6259 40.9467 24.8741 40.9467 10.9107 40.9467C9.21821 40.9467 7.5257 41.1599 5.83317 40.7334C0.332466 39.6671 -1.57164 36.0416 1.39028 31.1365C2.87124 28.7906 4.56377 26.658 6.46786 24.7386C13.6611 17.4876 21.0659 10.4499 28.4707 3.41224C29.7401 2.13265 31.6442 1.49285 34.183 0C34.6061 10.8765 23.8162 13.8622 21.489 22.3927C23.3931 21.9662 25.0856 21.7529 26.5666 21.3264C83.6894 5.54486 140.601 7.25099 197.3 22.606C203.224 24.0988 208.936 26.4447 214.649 28.5773C217.61 29.6437 220.149 31.9896 218.457 35.6151C216.976 39.2406 214.014 39.2406 210.629 37.7477C172.759 20.6866 132.561 18.7672 91.9404 19.407C70.7838 19.6203 50.0504 21.9662 29.5285 26.8713C26.9897 27.5111 24.4509 28.3641 21.489 29.4305Z" />
              </svg>

              <p className="text-gray-400 text-base font-handwriting opacity-80 -mb-3">
                try this, it’s interactive!
              </p>
            </div>

            {/* --- Version desktop (visible ≥ md) --- */}
            <div className="absolute translate-x-[100%] flex-row items-center gap-2 hidden md:flex">
              <svg
                className="w-8 h-5 text-gray-400 opacity-70"
                viewBox="0 0 220 50"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M21.489 29.4305C36.9333 31.3498 51.3198 33.0559 65.7063 34.9753C66.7641 35.1885 67.6104 36.4681 69.9376 38.3875C63.1675 39.2406 57.8783 40.3069 52.5892 40.5201C38.6259 40.9467 24.8741 40.9467 10.9107 40.9467C9.21821 40.9467 7.5257 41.1599 5.83317 40.7334C0.332466 39.6671 -1.57164 36.0416 1.39028 31.1365C2.87124 28.7906 4.56377 26.658 6.46786 24.7386C13.6611 17.4876 21.0659 10.4499 28.4707 3.41224C29.7401 2.13265 31.6442 1.49285 34.183 0C34.6061 10.8765 23.8162 13.8622 21.489 22.3927C23.3931 21.9662 25.0856 21.7529 26.5666 21.3264C83.6894 5.54486 140.601 7.25099 197.3 22.606C203.224 24.0988 208.936 26.4447 214.649 28.5773C217.61 29.6437 220.149 31.9896 218.457 35.6151C216.976 39.2406 214.014 39.2406 210.629 37.7477C172.759 20.6866 132.561 18.7672 91.9404 19.407C70.7838 19.6203 50.0504 21.9662 29.5285 26.8713C26.9897 27.5111 24.4509 28.3641 21.489 29.4305Z" />
              </svg>

              <p className="pr-2 text-gray-400 text-base font-handwriting opacity-80 -mb-3">
                try this, it’s interactive!
              </p>
            </div>
          </div>



          <figcaption className="mt-10 text-center">
            <p className="mt-3 text-zinc-600 leading-relaxed text-sm md:text-base lg:text-lg">
              Here’s what it looked like once I implemented it on the website.
            </p>
          </figcaption>
        </figure>
      </section>

      <section>
        <div className="text-center mt-12">
          <p className="text-[10px] uppercase tracking-[0.25em] text-zinc-500">
            Preview
          </p>
        </div>

        <figure className=" translate-y-6 transition will-change-transform">
          <div className="relative rounded-2xl overflow-hidden border border-zinc-200 shadow-[0_20px_60px_rgba(0,0,0,0.06)] maw-w-xl">
            <AutoPlayVideo src={AymanePortfolioV1} className="w-full" />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5 rounded-2xl"
            />
          </div>

          <figcaption className="mt-16 ">
            <p className="mt-3 text-zinc-600 md:text-lg leading-relaxed"></p>
          </figcaption>
        </figure>
      </section>

      <p className="text-zinc-600 leading-relaxed mx-auto text-sm md:text-base lg:text-lg text-justify">
        I also decided to add 3D scenes to some project pages to make them more engaging and interactive. For example, on the Cesiveroo project page I built a 3D model of the app’s main interface that users can interact with directly. I created another one for the Coming Soon pages, giving them a more dynamic and immersive feel. These additions not only highlight the design work but also make the overall portfolio experience more captivating.
      </p>


      <section className="relative mt-10">
        <div className="mx-auto">
          {/* Grid vidéos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Vidéo gauche */}
            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-zinc-500 text-center mb-2">
                3D Conception - Cesiveroo App
              </p>
              <figure className="rounded-2xl overflow-hidden border border-zinc-200 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
                <div className="relative aspect-[16/9] w-full">
                  <AutoPlayVideo
                    src={CesiverooSpline}
                    className="h-full w-full object-cover"
                  />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5"
                  />
                </div>
              </figure>
              <figcaption className="mt-8 md:mt-10">
                <div className="mt-6 text-center">
                  <a
                    href="https://my.spline.design/animatedphonemockup-934096e2cae61571850f5f387382bd02/"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor-icon="arrow"
                    className="inline-flex items-center gap-2 rounded-xl bg-darkGray px-5 py-3 text-sm font-semibold text-white shadow-md hover:shadow-lg hover:bg-[#1ab3a5] transition"
                  >
                    View demo
                  </a>
                </div>
              </figcaption>
            </div>

            {/* Vidéo droite */}
            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-zinc-500 text-center mb-2">
                3D Conception - Coming Soon
              </p>
              <figure className="rounded-2xl overflow-hidden border border-zinc-200 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
                <div className="relative aspect-[16/9] w-full">
                  <AutoPlayVideo
                    src={ComingSoon}
                    className="h-full w-full object-cover"
                  />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5"
                  />
                </div>
              </figure>
              {/* Description (uniquement du texte) */}
              <figcaption className="mt-8 md:mt-10 ">
                <div className="mt-6 text-center">
                  <a
                    href="https://my.spline.design/particles-751e267f61cbd5b23e5d29c849ef8d38/"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor-icon="arrow"
                    className="inline-flex items-center gap-2 rounded-xl bg-darkGray px-5 py-3 text-sm font-semibold text-white shadow-md hover:shadow-lg hover:bg-gradient-to-r hover:from-blue-500 hover:via-orange-400 hover:to-red-500 transition-colors"
                  >
                    View demo
                  </a>
                </div>
              </figcaption>
            </div>
          </div>
        </div>
      </section>

      <p className="text-zinc-600 leading-relaxed mt-10 md:mt-16 text-sm md:text-base lg:text-lg text-justify">

        I really enjoyed experimenting with 3D, even though my skills in this area were very limited. Discovering this field was exciting and I had a lot of fun at the beginning, but over time I started to enjoy it less as I ran into major performance issues on my website.
      </p>

      <LighthouseSection />

      <p className="text-zinc-600 leading-relaxed mt-8 md:mt-16 text-sm md:text-base lg:text-lg text-justify">

        This issue was a significant challenge because I wanted to maintain a smooth and fast user experience, which is crucial for a portfolio site. After several attempts to optimize the 3D models and scenes, I realized that the performance trade-offs were too high. The loading times were long, and the animations were not as smooth as I wanted them to be, especially on mobile devices.
      </p>
      <p className="text-zinc-600 leading-relaxed mt-4 text-sm md:text-base lg:text-lg text-justify">
        I also realized that I was losing the first idea of simplicity and clarity that I wanted to keep in my portfolio. So I decided to focus more on clean design and smooth interactions rather than adding too many 3D elements that could distract from the main content.
        Which is why I decided to remove the 3D elements and make a complete redesign of the portfolio, refocusing on simplicity and performance.
      </p>

      <section className="relative mt-12 md:mt-24">
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
          {/* LEFT — Image */}
          <figure className="order-1">

            <figcaption className="mb-3 text-[10px] text-zinc-500 text-center uppercase">Redesign preview</figcaption>
            <div className="relative rounded-2xl overflow-hidden border border-zinc-200 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
              <img src={rework} alt="Redesign preview" className="w-full h-auto object-cover" />
              <div aria-hidden className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5 rounded-2xl" />
            </div>
          </figure>

          {/* RIGHT — Content cards (modern & minimal) */}
          <div className="order-2 h-full flex flex-col gap-4">
            {/* Card 1 — Palette & Gradient */}
            <figcaption className=" text-[10px] text-zinc-500 text-center uppercase">Palette & Gradient</figcaption>
            <article className="rounded-2xl border border-zinc-200 bg-white shadow-sm p-5">

              {/* Large preview bar */}
              <div className="h-12 rounded-xl ring-1 ring-zinc-200 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-r from-blue-500 via-orange-400 to-red-500" />
              </div>

              {/* Swatches (illustrative) */}
              <div className="mt-3 flex items-center gap-2">
                {/* Blue */}
                <button
                  data-cursor-icon="copy"
                  type="button"
                  aria-label="Copy hex #3b82f6"
                  onClick={() => navigator.clipboard?.writeText('#3b82f6') & toast('Hex code #3b82f6 copied to clipboard')}
                  onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && navigator.clipboard?.writeText('#3b82f6')}
                  className="group relative inline-flex items-center gap-1.5 rounded-full ring-1 ring-zinc-200 px-2 py-1 text-[11px] bg-white transition 
               hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-300"
                >
                  {/* subtle glow on hover */}
                  <span className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/15 via-blue-400/10 to-transparent opacity-0
                     group-hover:opacity-100 blur-[6px] transition" />
                  <span className="relative h-3 w-3 rounded-full bg-blue-500" />
                  <span className="relative font-medium text-zinc-700">#3b82f6</span>
                </button>

                {/* Orange */}
                <button
                  data-cursor-icon="copy"
                  type="button"
                  aria-label="Copy hex #fb923c"
                  onClick={() => navigator.clipboard?.writeText('#fb923c') & toast('Hex code #fb923c copied to clipboard')}
                  onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && navigator.clipboard?.writeText('#fb923c')}
                  className="group relative inline-flex items-center gap-1.5 rounded-full ring-1 ring-zinc-200 px-2 py-1 text-[11px] bg-white transition 
               hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-300"
                >
                  <span className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-r from-orange-400/20 via-orange-300/10 to-transparent opacity-0
                     group-hover:opacity-100 blur-[6px] transition" />
                  <span className="relative h-3 w-3 rounded-full bg-orange-400" />
                  <span className="relative font-medium text-zinc-700">#fb923c</span>
                </button>

                {/* Red */}
                <button
                  data-cursor-icon="copy"
                  type="button"
                  aria-label="Copy hex #ef4444"
                  onClick={() => navigator.clipboard?.writeText('#ef4444') & toast('Hex code #ef4444 copied to clipboard')}
                  onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && navigator.clipboard?.writeText('#ef4444')}
                  className="group relative inline-flex items-center gap-1.5 rounded-full ring-1 ring-zinc-200 px-2 py-1 text-[11px] bg-white transition 
               hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-300"
                >
                  <span className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-r from-red-500/15 via-red-400/10 to-transparent opacity-0
                     group-hover:opacity-100 blur-[6px] transition" />
                  <span className="relative h-3 w-3 rounded-full bg-red-500" />
                  <span className="relative font-medium text-zinc-700">#ef4444</span>
                </button>
              </div>

              <p className="mt-4 text-sm text-zinc-700 leading-relaxed">
                For the new design, I wanted to add a touch of color, which is why this gradient became a strong visual element throughout the site
              </p>
            </article>

            {/* Card 2 — Typeface demo */}
            {/* Card 2 — Typeface demo */}
            <figcaption className="text-[10px] text-zinc-500 text-center uppercase">
              Typography
            </figcaption>
            <article className="rounded-2xl border border-zinc-200 bg-white shadow-sm p-5">

              <div className=" grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Ramidots */}
                <div className="relative rounded-xl ring-1 ring-zinc-200 p-4 bg-white">
                  <span className="absolute right-3 top-3 text-[10px] rounded-full px-2 py-0.5 ring-1 ring-zinc-200">Accent</span>
                  <p className="text-[10px] uppercase tracking-widest text-zinc-500 mb-1">Display — Titles</p>
                  <h4 className="font-ramidots text-3xl md:text-4xl bg-gradient-to-r from-blue-500 via-orange-400 to-red-500 bg-clip-text text-transparent inline-block w-fit pr-1">
                    Ramidots
                  </h4>
                  <p className="mt-1 text-sm text-zinc-600 leading-relaxed">
                    <span className="font-medium">Ramidots</span> is used for main titles and accents.
                  </p>
                </div>

                {/* SF Family */}
                <div className="rounded-xl ring-1 ring-zinc-200 p-4 bg-zinc-50">
                  <p className="text-[10px] uppercase tracking-widest text-zinc-500 mb-1">Body — Interface</p>
                  <h4 className="text-2xl font-sfbold tracking-tight text-zinc-900">
                    SF Family
                  </h4>
                  <p className="mt-1 text-sm text-zinc-600 leading-relaxed">
                    Inspired by <span className="font-medium">Apple’s San Francisco</span> typeface family
                  </p>
                </div>
              </div>

              <p className="mt-4 text-sm text-zinc-700 leading-relaxed">
                The typography system balances <span className="font-medium">expressive identity</span> (Ramidots)
                with <span className="font-medium">functional readability</span> (SF family).
              </p>
            </article>

            {/* Explanatory paragraph (from your brief) */}
            {/* <div className="mt-6 text-zinc-600 md:text-lg leading-relaxed">
              <p>
                For the new design, I wanted to add a touch of color, which is why
                <span className="mx-1 bg-gradient-to-r from-blue-500 via-orange-400 to-red-500 bg-clip-text text-transparent font-semibold">this gradient</span>
                became a strong visual element throughout the site. I also introduced a new typeface called
                <span className="mx-1 font-ramidots text-2xl bg-gradient-to-r from-blue-500 via-orange-400 to-red-500 bg-clip-text text-transparent tracking-widest">Ramidots</span>
                to give the portfolio a more unique identity. Alongside the visuals, I spent time testing the experience on desktop and mobile to keep the journey consistent across devices.
              </p>
            </div> */}
          </div>
        </div>
      </section>






      <section className="relative mt-14">
        <div className="mx-auto text-justify ">
          {/* <p className="text-[10px] uppercase tracking-[0.25em] text-zinc-500">Navigation Update</p> */}

          <p className="mt-6 text-zinc-600 text-sm md:text-base lg:text-lg text-justify leading-relaxed">
            In this redesign, I decided to remove the sidebar.
            I realized it was taking up too much space and made navigation feel heavier than it should.
            So I replaced it with a centered top navbar.
            It’s simpler, lighter, and just feels more natural to use.
            Everything stays accessible without cluttering the layout, and the whole page breathes much better now.
          </p>
          <p className="mt-6 text-zinc-600 text-sm md:text-base lg:text-lg text-justify leading-relaxed">
            Still in the spirit of navigation, you’ve probably noticed the custom cursor.
            It was inspired by Zaid’s portfolio, which had a really smart way of using motion and feedback
            to guide users without extra UI elements.
            The idea here was the same: keep things simple but meaningful.
            Instead of adding labels or animations everywhere, the cursor itself becomes
            part of the navigation language, showing context about what you can do,
            where you can click, and how the interface reacts.
          </p>

          <p className="mt-4 text-zinc-600 text-sm md:text-base lg:text-lg text-justify leading-relaxed">
            Here are some examples of the different cursor variations
            I implemented in this portfolio :
          </p>

          {/* Mobile-only note */}
          <p className="mt-6 text-center text-xs text-red-500 md:hidden">
            [Cursor demos are only available on desktop devices]
          </p>
        </div>

        {/* Desktop-only grid */}
        <div className="relative mt-16 hidden md:grid grid-cols-3 lg:grid-cols-6 gap-8 text-center">
          {/* --- Flèche + texte "Actions" en haut à droite --- */}
          <div className="absolute -top-10 -right-2 flex flex-row items-center gap-2">
            <svg
              className="w-10 h-6 text-gray-400 opacity-70 -rotate-12"
              viewBox="0 0 220 50"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M21.489 29.4305C36.9333 31.3498 51.3198 33.0559 65.7063 34.9753C66.7641 35.1885 67.6104 36.4681 69.9376 38.3875C63.1675 39.2406 57.8783 40.3069 52.5892 40.5201C38.6259 40.9467 24.8741 40.9467 10.9107 40.9467C9.21821 40.9467 7.5257 41.1599 5.83317 40.7334C0.332466 39.6671 -1.57164 36.0416 1.39028 31.1365C2.87124 28.7906 4.56377 26.658 6.46786 24.7386C13.6611 17.4876 21.0659 10.4499 28.4707 3.41224C29.7401 2.13265 31.6442 1.49285 34.183 0C34.6061 10.8765 23.8162 13.8622 21.489 22.3927C23.3931 21.9662 25.0856 21.7529 26.5666 21.3264C83.6894 5.54486 140.601 7.25099 197.3 22.606C203.224 24.0988 208.936 26.4447 214.649 28.5773C217.61 29.6437 220.149 31.9896 218.457 35.6151C216.976 39.2406 214.014 39.2406 210.629 37.7477C172.759 20.6866 132.561 18.7672 91.9404 19.407C70.7838 19.6203 50.0504 21.9662 29.5285 26.8713C26.9897 27.5111 24.4509 28.3641 21.489 29.4305Z" />
            </svg>

            <p className=" text-gray-400 text-base font-handwriting opacity-80 pr-1 -rotate-6 -mt-4">
              Try to hover these sections
            </p>
          </div>

          {/* --- Grille d’éléments --- */}
          <div>
            <a
              data-cursor-icon="arrow"
              className="group flex items-center justify-center h-28 rounded-xl border border-zinc-200 bg-white shadow-sm hover:shadow-md transition relative overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-orange-400 to-red-500 opacity-0 group-hover:opacity-10 transition" />
              <span className="text-sm text-zinc-600 group-hover:text-zinc-900 transition">
                Link
              </span>
            </a>
            <p className="mt-2 text-xs text-zinc-500">External website</p>
          </div>

          <div>
            <a
              data-cursor-icon="mail"
              className="group flex items-center justify-center h-28 rounded-xl border border-zinc-200 bg-white shadow-sm hover:shadow-md transition relative overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-blue-200/20 opacity-0 group-hover:opacity-30 transition" />
              <span className="text-sm text-zinc-600 group-hover:text-zinc-900 transition">
                Mail
              </span>
            </a>
            <p className="mt-2 text-xs text-zinc-500">Send an email</p>
          </div>

          <div>
            <a
              data-cursor-icon="copy"
              className="group flex items-center justify-center h-28 rounded-xl border border-zinc-200 bg-white shadow-sm hover:shadow-md transition relative overflow-hidden"
            >
              <span className="text-sm text-zinc-600 group-hover:text-zinc-900 transition">
                Copy
              </span>
            </a>
            <p className="mt-2 text-xs text-zinc-500">Copy to clipboard</p>
          </div>

          <div>
            <div
              data-cursor-icon="start"
              className="group flex items-center justify-center h-28 rounded-xl border border-zinc-200 bg-white shadow-sm hover:shadow-md transition relative overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-emerald-300/20 opacity-0 group-hover:opacity-30 transition" />
              <span className="text-sm text-zinc-600 group-hover:text-zinc-900 transition">
                Start
              </span>
            </div>
            <p className="mt-2 text-xs text-zinc-500">Start a Video</p>
          </div>

          <div>
            <div
              data-cursor-icon="stop"
              className="group flex items-center justify-center h-28 rounded-xl border border-zinc-200 bg-white shadow-sm hover:shadow-md transition relative overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-yellow-300/30 to-orange-200/20 opacity-0 group-hover:opacity-40 transition" />
              <span className="text-sm text-zinc-600 group-hover:text-zinc-900 transition">
                Pause
              </span>
            </div>
            <p className="mt-2 text-xs text-zinc-500">Stop a Video</p>
          </div>

          <div>
            <div
              data-cursor-icon="egg"
              className="group flex items-center justify-center h-28 rounded-xl border border-zinc-200 bg-white shadow-sm hover:shadow-md transition relative overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-pink-300/20 to-purple-300/20 opacity-0 group-hover:opacity-40 transition" />
              <span className="text-sm text-zinc-600 group-hover:text-zinc-900 transition">
                Egg
              </span>
            </div>
            <p className="mt-2 text-xs text-zinc-500">Mystery easter egg</p>
          </div>
        </div>

      </section>
      <p className="mt-16 text-zinc-600 leading-relaxed text-sm md:text-base lg:text-lg text-justify">
        The architecture of this portfolio is not complicated. There’s no backend, everything runs on a frontend
        built with React, Vite, and TailwindCSS. The code lives on GitHub, where
        every commit triggers a build pipeline. From there, Cloudflare Pages
        handles the deployment across the network.
        <br></br>
        In short, it’s a streamlined pipeline: I write the code, push to GitHub,
        Cloudflare builds and deploys, and users benefit from it.
      </p>
      <section className="relative w-full mt-14">
        <div className="relative ">
          {/* Grille responsive: cartes larges, mêmes hauteurs */}
          <div className="grid items-stretch gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
            {/* 1 — Frontend */}
            <div className="relative rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm flex flex-col h-full">
              <span className="absolute right-3 top-3 inline-flex h-6 min-w-6 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 via-orange-400 to-red-500 text-[10px] font-medium text-white px-2">
                1
              </span>
              <p className="text-[10px] tracking-[0.25em] uppercase text-zinc-500 mb-1">
                Frontend
              </p>
              <h3 className="text-2xl font-semibold tracking-tight text-zinc-900">
                React App
              </h3>
              <ul className="mt-3 space-y-1.5 text-sm text-zinc-600">
                <li>Vite (bundler)</li>
                <li>TailwindCSS</li>
              </ul>
              <div className="mt-auto pt-4">
                <span className="block h-1 w-16 rounded-full bg-gradient-to-r from-blue-500 via-orange-400 to-red-500" />
              </div>
            </div>

            {/* 2 — GitHub */}
            <div className="relative rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm flex flex-col h-full">
              <span className="absolute right-3 top-3 inline-flex h-6 min-w-6 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 via-orange-400 to-red-500 text-[10px] font-medium text-white px-2">
                2
              </span>
              <p className="text-[10px] tracking-[0.25em] uppercase text-zinc-500 mb-1">
                Source & CI
              </p>
              <h3 className="text-2xl font-semibold tracking-tight text-zinc-900">
                GitHub
              </h3>
              <ul className="mt-3 space-y-1.5 text-sm text-zinc-600">
                <li>Repository</li>
                <li>Build via Cloudflare Pages</li>
              </ul>
              <div className="mt-auto pt-4">
                <span className="block h-1 w-16 rounded-full bg-gradient-to-r from-blue-500 via-orange-400 to-red-500" />
              </div>
            </div>

            {/* 3 — Cloudflare Pages / CDN */}
            <div className="relative rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm flex flex-col h-full">
              <span className="absolute right-3 top-3 inline-flex h-6 min-w-6 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 via-orange-400 to-red-500 text-[10px] font-medium text-white px-2">
                3
              </span>
              <p className="text-[10px] tracking-[0.25em] uppercase text-zinc-500 mb-1">
                Edge / CDN
              </p>
              <h3 className="text-2xl font-semibold tracking-tight text-zinc-900">
                Cloudflare Pages
              </h3>
              <ul className="mt-3 space-y-1.5 text-sm text-zinc-600">
                <li>Deployment </li>
                <li>Workers</li>
              </ul>
              <div className="mt-auto pt-4">
                <span className="block h-1 w-16 rounded-full bg-gradient-to-r from-blue-500 via-orange-400 to-red-500" />
              </div>
            </div>

            {/* 4 — Users */}
            <div className="relative rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm flex flex-col h-full">
              <span className="absolute right-3 top-3 inline-flex h-6 min-w-6 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 via-orange-400 to-red-500 text-[10px] font-medium text-white px-2">
                4
              </span>
              <p className="text-[10px] tracking-[0.25em] uppercase text-zinc-500 mb-1">
                Users
              </p>
              <h3 className="text-2xl font-semibold tracking-tight text-zinc-900">
                Visitors
              </h3>
              <ul className="mt-3 space-y-1.5 text-sm text-zinc-600">
                <li>Desktop - Mobile</li>
              </ul>
              <div className="mt-auto pt-4">
                <span className="block h-1 w-16 rounded-full bg-gradient-to-r from-blue-500 via-orange-400 to-red-500" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <p className="mt-12 md:mt-24 text-zinc-600 leading-relaxed text-sm md:text-base lg:text-lg text-justify">
        There is no database in the architecture by design. However, I implemented a Cloudflare Worker to keep track of the number of visitors and display it directly on the site. Thanks to this Worker, I know that you are visitor number...
      </p>

      <section className="relative overflow-hidden">
        <div className="relative ">
          <div className="group relative flex flex-col items-center text-center py-8">
            <div
              className="
          relative mt-6 inline-flex items-baseline justify-center gap-2 select-none
          transition-all duration-200
          group-hover:scale-[1.02] group-hover:[letter-spacing:0.5px]
        "
              aria-live="polite"
            >
              <span
                className="
            absolute inset-0 translate-y-[2px] blur-[1.2px]
            text-zinc-400/40
            font-ramidots text-8xl lg:text-9xl leading-none
          "
                style={{ WebkitTextStroke: "0 transparent" }}
              >
                <NumberTicker value={visitsTotal} />
              </span>

              <span
                className="
            relative font-ramidots text-8xl lg:text-9xl leading-none
            tracking-tight bg-gradient-to-r from-blue-500 via-orange-400 to-red-500 bg-clip-text text-transparent inline-block 
            transition-transform duration-200
            motion-safe:group-hover:scale-[1.015]
          "
              >
                <NumberTicker value={visitsTotal} />
              </span>
            </div>



          </div>
        </div>
      </section>
      <section className="relative mt-6">
        <div className=" gap-10 md:gap-12 items-start">
          <div className="space-y-4">
            <p className="text-[10px] uppercase tracking-[0.25em] text-zinc-500">
              Easter Eggs
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-ramidots tracking-tight bg-gradient-to-r from-blue-500 via-orange-400 to-red-500 bg-clip-text text-transparent inline-block">
              Easter Eggs Quest
            </h2>
            <span className="block h-[3px] w-24 rounded-full bg-gradient-to-r from-blue-500 via-orange-400 to-red-500" />

            <p className="text-zinc-600 leading-relaxed text-sm md:text-base lg:text-lg text-justify">
              As a competitor, I’ve always loved challenges, which is why the
              Easter Egg quest was born in this website. I created it to challenge my family and
              friends (and you !) to find all the hidden eggs scattered throughout the site.
              Beyond the fun, it also adds a unique touch to my portfolio, since
              I didn’t want it to feel like just another typical portfolio.
              The starting point of this hidden quest can be found right on the homepage.
            </p>
          </div>
        </div>
      </section>
      <EggProgress />
      <section className="flex flex-col justify-center items-center mt-6 md:mt-14  ">
        <p className="text-[10px] uppercase tracking-[0.25em] text-zinc-500">
          MOVING FORWARD
        </p>
        <div className="">
          <p className="mt-4 text-zinc-600 leading-relaxed text-sm md:text-base lg:text-lg text-justify">
            This portfolio is a continuous work in progress, I plan to keep adding new pages, features, and creative
            experiments as I grow as a developer. In the future, I also want to integrate backend functionalities to
            make it more interactive, allowing visitors to engage directly with the site and share feedback or messages.
            if you enjoyed exploring my portfolio, feel free to star the repository on GitHub by {" "}
            <a href="https://github.com/AymaneHilmi/MyPortfolio" target="_blank" rel="noopener noreferrer" className="underline font-bold hover:bg-gradient-to-r hover:from-blue-500 hover:via-orange-400 hover:to-red-500 hover:bg-clip-text hover:text-transparent transition-colors duration-300" data-cursor-icon="arrow">
              clicking here
            </a>.
          </p>

          {/* <div className="mt-8 flex flex-row items-center justify-center gap-4">
            <a
              href="https://github.com/AymaneHilmi/MyPortfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-6 py-3 text-sm font-medium text-zinc-700 shadow-sm hover:shadow-md hover:border-zinc-300 transition"
              data-cursor-icon="star"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="h-4 w-4 text-yellow-500 group-hover:scale-110 transition-transform"
              >
                <path d="M12 .587l3.668 7.568L24 9.75l-6 5.847L19.336 24 12 19.897 4.664 24 6 15.597 0 9.75l8.332-1.595z" />
              </svg>
              Star on GitHub
            </a>

          </div> */}
        </div>
      </section>
    </div >
  );
}

function IconBadge({ children }) {
  return (
    <span className="inline-flex items-center justify-center h-8 w-8 rounded-full border border-zinc-200 bg-white shadow-sm">
      {children}
    </span>
  );
}


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
                    <Image
                      className="h-10 w-10 text-zinc-400 transition-transform duration-300 group-hover:rotate-3 group-hover:scale-110"
                      strokeWidth={1}
                    />
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
                    <Boxes
                      className="h-10 w-10 text-zinc-400 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110"
                      strokeWidth={1}
                    />
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


