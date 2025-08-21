import { React, useState } from "react";
import "./screens.css";
import aymane from "../assets/PDP.jpeg";
import travel from "../assets/Aymane.jpg";
import maroc from "../assets/Maroc.jpg";
import snow from "../assets/AymaneSnow.JPG";
import { cn } from "../lib/utils";
import { useNavigate } from "react-router-dom";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { useEasterEgg } from "../context/EasterEggContext";
import { Briefcase, GraduationCap, Rocket, Target, Heart, Camera, Music, Globe2, Quote, MapPin, Flag } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "../components/ui/draggable-card";
import { BackgroundLines } from "../components/ui/background-lines";

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

  const items = [
    {
      title: "Tyler Durden",
      image: travel,
    },
    {
      title: "The Narrator",
      image:
        "https://images.unsplash.com/photo-1697909623564-3dae17f6c20b?q=80&w=2667&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      className: "absolute top-40 left-[25%] rotate-[-7deg]",
    },
    {
      title: "Iceland",
      image:
        "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=2600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      className: "absolute top-5 left-[40%] rotate-[8deg]",
    },
    {
      title: "Japan",
      image:
        "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&w=3648&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      className: "absolute top-32 left-[55%] rotate-[10deg]",
    },
    {
      title: "Norway",
      image:
        "https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      className: "absolute top-20 right-[35%] rotate-[2deg]",
    },
    {
      title: "New Zealand",
      image:
        "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      className: "absolute top-24 left-[45%] rotate-[-7deg]",
    },
    {
      title: "Canada",
      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      className: "absolute top-8 left-[30%] rotate-[4deg]",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-0 lg:px-8">
      <section className="h-screen w-full flex items-center justify-center">
        <div className=" flex flex-col items-center text-center space-y-6">
          {/* Photo */}
          <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-gray-200 shadow-md">
            <img
              src={aymane}
              alt="Aymane Hilmi"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Nom principal */}
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 flex flex-col justify-center items-center gap-2">
            Aymane Hilmi
          </h1>

          {/* Nom en arabe + phonétique */}
          <div className="flex items-baseline gap-4">
            <span className="font-InkBrushArabic bg-gradient-to-r from-blue-500 via-orange-400 to-red-500 bg-clip-text text-transparent text-2xl md:text-3xl">
              أيمن حلمي
            </span>
            <span className="text-sm md:text-base text-gray-500">
              / aɪˈmeːn hɪlˈmiː /
            </span>
          </div>

          {/* Description */}
          <p className="text-sm md:text-lg text-darkGray text-justify md:text-center leading-relaxed ">
            Aymane Hilmi is a 22-year-old software engineer based in
            Aix-en-Provence, France. Born in Italy, raised in France, with
            Moroccan roots and years spent in Spain, he grew up as a polyglot
            fluent in five languages. His fascination for technology began in
            childhood and led him to pursue computer science with determination.
            Today, he sees programming not only as a skill but as a way to
            empower people, simplify work, and foster innovation.
          </p>
          <div className=" h-1 w-24 bg-gradient-to-r from-blue-500 via-orange-400 to-red-500 rounded-full" />
        </div>
      </section>

      <section id="journey" className="w-full flex px-6">
        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12">
          {/* Title & intro */}
          <header className="md:col-span-2">
            <h2 className="text-3xl md:text-7xl font-ramidots bg-gradient-to-r from-blue-500 via-orange-400 to-red-500 bg-clip-text text-transparent w-fit inline-block">
              My Journey
            </h2>
            <div className="mt-3 h-1 w-24 bg-gradient-to-r from-blue-500 via-orange-400 to-red-500 rounded-full" />
            <p className="mt-5 text-gray-600 leading-relaxed">
              From studies to hands-on projects, here are the milestones that
              shaped me — and what I’m doing now.
            </p>

            {/* "Currently" card */}
            <div className="mt-8 rounded-2xl border border-gray-200 p-6 shadow-sm">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center rounded-full border border-gray-200 px-3 py-1 text-xs font-medium text-gray-700">
                  Currently
                </span>
                <span className="text-sm text-gray-500">
                  Aix-en-Provence, FR
                </span>
              </div>
              <h3 className="mt-4 text-xl md:text-2xl font-semibold text-gray-900">
                Software Engineer • Frontend & UI Design
              </h3>
              <p className="mt-2 text-gray-600">
                I design and build modern interfaces with React & Tailwind,
                focusing on user experience, performance, and accessibility.
              </p>
              <ul className="mt-4 space-y-2 text-gray-700 text-sm">
                <li>• React, TypeScript, TailwindCSS</li>
                <li>• Design systems & reusable components</li>
                <li>• E2E testing & UI/UX best practices</li>
              </ul>
            </div>
          </header>

          {/* Timeline */}
          <div className="md:col-span-3">
            <ol className="relative border-s border-gray-200">
              {/* Item 1 */}
              <li className="ms-6 py-6 first:pt-0 last:pb-0">
                <span
                  className="absolute -start-1.5 mt-2 size-3 rounded-full bg-gradient-to-r from-blue-500 via-orange-400 to-red-500"
                  aria-hidden="true"
                />
                <Dialog.Root>
                  <Dialog.Trigger asChild>
                    <button
                      type="button"
                      className="w-full text-left rounded-2xl border border-gray-200 p-5 hover:shadow-md transition-shadow cursor-pointer"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <h4 className="text-lg md:text-xl font-semibold text-gray-900">
                          Software Engineering (Studies)
                        </h4>
                        <span className="text-xs md:text-sm text-gray-500">
                          2022 — 2025
                        </span>
                      </div>
                      <p className="mt-2 text-gray-600">
                        Deepened core CS (algorithms, architecture, patterns),
                        specialized in modern Frontend, shipped team projects
                        with a product & quality mindset.
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        <Badge>React</Badge>
                        <Badge>TypeScript</Badge>
                        <Badge>Clean Architecture</Badge>
                      </div>
                    </button>
                  </Dialog.Trigger>

                  {/* Dialog content */}
                  <Dialog.Portal>
                    <Dialog.Overlay className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50" />
                    <Dialog.Content
                      className="fixed left-1/2 top-1/2 z-50 w-[95vw] max-w-3xl -translate-x-1/2 -translate-y-1/2
                           rounded-3xl border border-gray-200 bg-white p-6 shadow-xl focus:outline-none"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <Dialog.Title className="text-xl md:text-2xl font-sfbold text-gray-900">
                          Software Engineering (Studies)
                        </Dialog.Title>
                        <Dialog.Close
                          className="rounded-lg border border-gray-200 px-2 py-1 text-sm text-gray-600 hover:bg-gray-50"
                          aria-label="Close"
                        >
                          Close
                        </Dialog.Close>
                      </div>

                      <div className="mt-4 space-y-4 text-gray-700">
                        <p>
                          Strong foundations in algorithms, data structures,
                          systems, and software design. Focus on modern frontend
                          engineering and product thinking.
                        </p>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>
                            Team projects with delivery cadence and code reviews
                          </li>
                          <li>Designing reusable, accessible UI components</li>
                          <li>
                            Performance budgets, a11y checks, testing strategy
                          </li>
                        </ul>
                        <div className="pt-2 flex flex-wrap gap-2">
                          <Badge>React</Badge>
                          <Badge>TypeScript</Badge>
                          <Badge>Tailwind</Badge>
                          <Badge>Unit & E2E</Badge>
                        </div>
                      </div>
                    </Dialog.Content>
                  </Dialog.Portal>
                </Dialog.Root>
              </li>

              {/* Item 2 */}
              <li className="ms-6 py-6">
                <span
                  className="absolute -start-1.5 mt-2 size-3 rounded-full bg-gradient-to-r from-blue-500 via-orange-400 to-red-500"
                  aria-hidden="true"
                />
                <Dialog.Root>
                  <Dialog.Trigger asChild>
                    <button
                      type="button"
                      className="w-full text-left rounded-2xl border border-gray-200 p-5 hover:shadow-md transition-shadow cursor-pointer"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <h4 className="text-lg md:text-xl font-semibold text-gray-900">
                          Experience & Projects
                        </h4>
                        <span className="text-xs md:text-sm text-gray-500">
                          2023 — 2025
                        </span>
                      </div>
                      <p className="mt-2 text-gray-600">
                        Built dashboards, a design system, API integrations, UI
                        test automation (Playwright + Cucumber), plus
                        performance and accessibility optimizations.
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        <Badge>Design System</Badge>
                        <Badge>Tailwind</Badge>
                        <Badge>Playwright</Badge>
                        <Badge>UX</Badge>
                      </div>
                    </button>
                  </Dialog.Trigger>

                  <Dialog.Portal>
                    <Dialog.Overlay className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50" />
                    <Dialog.Content
                      className="fixed left-1/2 top-1/2 z-50 w-[95vw] max-w-3xl -translate-x-1/2 -translate-y-1/2
                           rounded-3xl border border-gray-200 bg-white p-6 shadow-xl focus:outline-none"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <Dialog.Title className="text-xl md:text-2xl font-sfbold text-gray-900">
                          Experience & Projects
                        </Dialog.Title>
                        <Dialog.Close
                          className="rounded-lg border border-gray-200 px-2 py-1 text-sm text-gray-600 hover:bg-gray-50"
                          aria-label="Close"
                        >
                          Close
                        </Dialog.Close>
                      </div>

                      <div className="mt-4 space-y-4 text-gray-700">
                        <p>
                          Hands-on building: dashboards, internal tools,
                          component libraries, and testing pipelines. Focus on
                          reliability and delightful UI.
                        </p>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Design system with tokens & theming</li>
                          <li>API integrations & data-fetching patterns</li>
                          <li>Playwright + Cucumber E2E scenarios</li>
                          <li>Perf & a11y audits (Lighthouse, axe)</li>
                        </ul>
                        <div className="pt-2 flex flex-wrap gap-2">
                          <Badge>React</Badge>
                          <Badge>TanStack Query</Badge>
                          <Badge>Playwright</Badge>
                          <Badge>CI/CD</Badge>
                        </div>
                      </div>
                    </Dialog.Content>
                  </Dialog.Portal>
                </Dialog.Root>
              </li>

              {/* Item 3 */}
              <li className="ms-6 py-6">
                <span
                  className="absolute -start-1.5 mt-2 size-3 rounded-full bg-gradient-to-r from-blue-500 via-orange-400 to-red-500"
                  aria-hidden="true"
                />
                <Dialog.Root>
                  <Dialog.Trigger asChild>
                    <button
                      type="button"
                      className="w-full text-left rounded-2xl border border-gray-200 p-5 hover:shadow-md transition-shadow cursor-pointer"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <h4 className="text-lg md:text-xl font-semibold text-gray-900">
                          Polyglot & Tech Culture
                        </h4>
                        <span className="text-xs md:text-sm text-gray-500">
                          Personal Path
                        </span>
                      </div>
                      <p className="mt-2 text-gray-600">
                        Born in Italy, raised in France, Moroccan roots, years
                        in Spain — five languages powering inclusive, global
                        products.
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        <Badge>FR • EN • ES • IT • AR</Badge>
                        <Badge>International Mindset</Badge>
                      </div>
                    </button>
                  </Dialog.Trigger>

                  <Dialog.Portal>
                    <Dialog.Overlay className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50" />
                    <Dialog.Content
                      className="fixed left-1/2 top-1/2 z-50 w-[95vw] max-w-3xl -translate-x-1/2 -translate-y-1/2
                           rounded-3xl border border-gray-200 bg-white p-6 shadow-xl focus:outline-none"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <Dialog.Title className="text-xl md:text-2xl font-sfbold text-gray-900">
                          Polyglot & Tech Culture
                        </Dialog.Title>
                        <Dialog.Close
                          className="rounded-lg border border-gray-200 px-2 py-1 text-sm text-gray-600 hover:bg-gray-50"
                          aria-label="Close"
                        >
                          Close
                        </Dialog.Close>
                      </div>

                      <div className="mt-4 space-y-4 text-gray-700">
                        <p>
                          Languages and cultures shape how I think and build.
                          It’s about empathy, nuance, and inclusive products.
                        </p>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>
                            Native/Fluent: FR, EN, ES — Comfortable: IT, AR
                          </li>
                          <li>Global mindset in UX & content</li>
                          <li>Bridge between teams & stakeholders</li>
                        </ul>
                        <div className="pt-2 flex flex-wrap gap-2">
                          <Badge>Communication</Badge>
                          <Badge>Inclusive Design</Badge>
                          <Badge>Localization</Badge>
                        </div>
                      </div>
                    </Dialog.Content>
                  </Dialog.Portal>
                </Dialog.Root>
              </li>
            </ol>
          </div>
        </div>
      </section>

      <section id="philosophy" className=" w-full px-6 py-16 md:pt-36">
        <div className="w-full max-w-6xl mx-auto">
          {/* Header */}
          <header className="max-w-3xl">
            <h2 className="text-3xl md:text-7xl font-ramidots bg-gradient-to-r from-blue-500 via-orange-400 to-red-500 bg-clip-text text-transparent w-fit inline-block">
              My Style & Philosophy
            </h2>
            <div className="mt-3 h-1 w-24 bg-gradient-to-r from-blue-500 via-orange-400 to-red-500 rounded-full" />
            <p className="mt-5 text-gray-600 leading-relaxed">
              I keep things simple, intentional, and user-first. These three
              principles guide how I build and grow—both as an engineer and as
              an entrepreneur.
            </p>
          </header>

          {/* Cards */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* 1. Invest in myself */}
            <div className="rounded-2xl border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-full border border-gray-200 flex items-center justify-center">
                  <Rocket className="size-5 text-gray-700" aria-hidden="true" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                  Invest in Myself
                </h3>
              </div>
              <p className="mt-3 text-gray-600">
                As a young entrepreneur, continuous learning and discipline are
                my leverage. I invest time in skills, health, and mindset—so I
                can move faster and smarter.
              </p>
            </div>

            {/* 2. Build solutions that simplify work */}
            <div className="rounded-2xl border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-full border border-gray-200 flex items-center justify-center">
                  <Target className="size-5 text-gray-700" aria-hidden="true" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                  Build to Solve Real Needs
                </h3>
              </div>
              <p className="mt-3 text-gray-600">
                I design solutions that remove friction and make work simpler.
                Clarity, speed, and utility—grounded in real user needs.
              </p>
            </div>

            {/* 3. Travel & broaden perspective */}
            <div className="rounded-2xl border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-full border border-gray-200 flex items-center justify-center">
                  <Globe2 className="size-5 text-gray-700" aria-hidden="true" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                  Travel & Expand Perspective
                </h3>
              </div>
              <p className="mt-3 text-gray-600">
                I travel to discover new cultures and new ways of seeing the
                world. Diversity fuels empathy—and better product decisions.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        id="passions"
        className=" w-full flex items-center px-6 py-16 md:pt-36"
      >
        <div className="w-full max-w-4xl mx-auto flex flex-col items-center text-center">
          {/* Titre */}
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
            Beyond Code: Things I Love
          </h2>
          <div className="mt-3 h-1 w-24 bg-gradient-to-r from-blue-500 via-orange-400 to-red-500 rounded-full" />

          {/* Texte principal */}
          <p className="mt-6 text-gray-600 leading-relaxed max-w-2xl">
            I’m driven by curiosity and movement. Outside of engineering, I
            recharge by spending time with animals, staying active, and chasing
            fresh powder in the mountains.
          </p>
        </div>
      </section>
      <section className="relative overflow-visible">
        <DraggableCardContainer className="relative flex min-h-screen w-full items-center justify-center overflow-visible">
          {/* Texte en surcouche mais non interactif */}
          <div className="pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center text-center">
            <h2 className="text-darkGray text-2xl font-sfbold py-2 md:py-10 tracking-tight">
              Hidden Layers Easter Egg, <br />
            </h2>
            <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700">
              it's important to keep things simple, intentional, and user-first.
            </p>
          </div>
          {items.map((item) => (
            <DraggableCardBody
              key={item.title}
              className={cn(item.className, "z-20")} // cartes au-dessus du texte au repos
              whileDrag={{ zIndex: 50 }} // et encore au-dessus pendant le drag
            >
              <img
                src={item.image}
                alt={item.title}
                className="pointer-events-none relative z-10 h-80 w-80 object-cover"
              />
              <h3 className="mt-4 text-center text-4xl font-ramidots bg-gradient-to-r from-blue-500 via-orange-400 to-red-500 bg-clip-text text-transparent w-fit">
                {item.title}
              </h3>
            </DraggableCardBody>
          ))}
        </DraggableCardContainer>
      </section>
    </div>
  );
}

/* ——— Petit composant Badge réutilisable ——— */
function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-gray-200 px-3 py-1 text-xs font-medium text-gray-700">
      {children}
    </span>
  );
}

