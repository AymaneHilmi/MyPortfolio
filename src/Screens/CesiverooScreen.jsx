import React, { img, useEffect, useState, useRef } from "react";
import Step1 from "@/assets/CesiverooStep1.png";
import Step2 from "@/assets/CesiverooStep2.png";
import Step3 from "@/assets/CesiverooStep3.png";
import Step4 from "@/assets/CesiverooStep4.png";
import Step5 from "@/assets/CesiverooStep5.png";
import HomeCesiveroo from "@/assets/CesiverooHome.png";
import HomeCesiverooCompleted from "@/assets/CesiverooHomeComplete.png";
import GraphiChart from "@/assets/CesiverooIpadChart.png";
import WireFrames from "@/assets/CesiverooWireFrames.png";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { useEasterEgg } from "@/context/EasterEggContext";
import {
  MonitorSmartphone,
  ShieldCheck,
  Boxes,
  Database,
  Wrench,
  Activity,
  Github,
  Calendar,
  Users,
  Briefcase,
  FileText,
  Target,
  CircuitBoard,
  CalendarDays
} from "lucide-react";
import { FaMoon } from "react-icons/fa";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/ToolTip";

export default function CesiverooScreen() {
  const {
    foundEggs,
    eggsFounded,
    incrementEggs,
    resetEggs,
    eggsTotal,
    eggMission,
    completedMissions,
    completeMission,
  } = useEasterEgg();

  // project details
  const stats = [
    {
      label: "weeks",
      value: "4",
      icon: Calendar,
    },
    {
      label: "developers",
      value: "3",
      icon: Users,
    },
    {
      label: "Role",
      value: "Software Engineer",
      icon: Briefcase,
    },
    {
      label: "Deliverables",
      value: "MVP, docs, demo",
      icon: FileText,
    },
  ];
  // architecture legend
  const legend = [
    {
      title: "Client (Web & Mobile)",
      desc: "React app (web) + mobile. Auth, state, routing.",
      items: ["React", "TailwindCSS", "Auth tokens", "ExtraIgnored"],
      icon: MonitorSmartphone,
    },
    {
      title: "API Gateway",
      desc: "Single entry point: aggregation, routing, auth, rate-limiting.",
      items: ["Reverse proxy", "Logs", "Versioning", "Security"],
      icon: ShieldCheck,
    },
    {
      title: "Microservices",
      desc: "Decoupled Node/Express services, domain‑oriented.",
      items: [
        "Auth",
        "Catalog",
        "Orders",
        "Payments (mock)",
        "Notifications",
        "Webhooks",
      ],
      icon: Boxes,
    },
    {
      title: "Data Stores",
      desc: "Polyglot storage depending on use.",
      items: [
        "MongoDB (real‑time)",
        "MS SQL (reporting)",
        "Redis",
        "Elasticsearch",
      ],
      icon: Database,
    },
    {
      title: "Back-Office & Dev Tools",
      desc: "Admin panels, CI/CD tooling, observability.",
      items: ["Admin UI", "Pipelines", "Monitoring", "Docs"],
      icon: Wrench,
    },
    {
      title: "Observability & Monitoring",
      desc: "Visibility, logs, metrics, and alerts.",
      items: ["Grafana", "Prometheus", "Alertmanager", "ELK"],
      icon: Activity,
    },
  ];

  const ProjectSteps = [
    {
      num: 1,
      title: "Needs Reassessment",
      desc: "Key objectives defined to meet expectations",
      Icon: Target,
      accent: "#20CFBD",
    },
    {
      num: 2,
      title: "Risk Analysis",
      desc: "Challenges identified and mitigation plans outlined",
      Icon: ShieldCheck,
      accent: "from-emerald-500 via-teal-400 to-cyan-500",
    },
    {
      num: 3,
      title: "Architecture Diagram",
      desc: "Visual overview of the technical solution",
      Icon: CircuitBoard,
      accent: "from-fuchsia-500 via-purple-400 to-indigo-500",
    },
    {
      num: 4,
      title: "Projected Timeline",
      desc: "Schedule of major project milestones",
      Icon: CalendarDays,
      accent: "from-amber-500 via-orange-400 to-rose-500",
    },
  ];
  return (
    <div className="md:mx-auto max-w-5xl mx-6">
      <section className="mx-auto py-12 md:py-16 mt-16 md:mt-32 flex justify-center items-center">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12 items-center">
          {/* colonne de gauche — Texte */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 px-3 py-1 text-sm text-zinc-600">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Process Highlights
            </div>

            <h1 className="text-4xl font-sfbold tracking-tight text-darkGray md:text-5xl">
              Cesi<span className="text-[#20CFBD]">veroo</span> Project
            </h1>

            <div className="text-darkGray text-sm md:text-base lg:text-lg text-justify ">
              <p>
                This project was part of an academic assignment during my time
                in engineering school. The challenge was to create an Uber-like
                application with different types of users: customers,
                restaurants, delivery personnel, third-party developers, and
                service teams, all within 4 weeks.
              </p>
              <p>
                This solution involves managing asynchronous communication, load
                balancing, microservice integration, and real-time updates. The
                project also includes handling ambiguous requirements and
                working with limited prior experience, making it a practical
                exercise in problem-solving and collaboration within our team of
                3 developers.
              </p>
            </div>
            <div className="mt-8">
              <a
                href="https://github.com/AymaneHilmi/Cesiveroo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-darkGray px-5 py-3 text-sm font-semibold text-white shadow-md hover:shadow-lg hover:bg-[#1ab3a5] transition"
                data-cursor-icon="arrow"
              >
                <Github size={18} />
                View on GitHub
              </a>
            </div>
          </div>

          {/* colonne de droite - Image */}
          <div className="relative">
            <figure className="relative mx-auto w-full max-w-[640px] overflow-hidden rounded-2xl">
              <div className="relative w-full aspect-[909/768]">
                <img
                  src={
                    foundEggs.includes("#4")
                      ? HomeCesiverooCompleted
                      : HomeCesiveroo
                  }
                  alt="Cesiveroo illustration with shopping bags and spheres"
                  className="absolute inset-0 h-full w-full object-contain"
                  loading="eager"
                  decoding="async"
                />
                {!foundEggs.includes("#4") && (
                  <FaMoon
                    className="absolute left-[69%] top-[63%] -translate-x-1/2 -translate-y-1/2 text-[#4b8747] text-xl opacity-100 transition duration-500 hover:scale-150 hover:text-yellow-400"
                    aria-hidden="true"
                    onClick={() => incrementEggs("#4")}
                  />
                )}
              </div>
            </figure>
          </div>
        </div>
      </section>

      {/*  Project details */}
      <section
        className="mx-auto "
        aria-label="Cesiveroo project details"
      >
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-widest text-lightGray">
            Project overview
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl font-sfbold tracking-tight text-darkGray">
            Details & Objectives
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="rounded-xl ring-1 ring-zinc-700 bg-[#3a3a3a] p-5 text-center shadow-sm hover:shadow-md transition"
              >
                <div className="flex justify-center mb-2">
                  <Icon className="h-5 w-5 text-[#20CFBD]" strokeWidth={2} />
                </div>
                <p className="text-base md:text-2xl font-sfbold text-white">
                  {stat.value}
                </p>
                <p className="text-xs text-zinc-400 mt-1">{stat.label}</p>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-10 items-start">
          <div className="md:col-span-3">
            <h3 className="text-lg font-semibold text-gray-900">Objectives</h3>
            <ul className="mt-3 space-y-2 text-sm md:text-base lg:text-lg   text-gray-700">
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#20CFBD] " />
                <span>
                  Design a smooth experience inspired by Deliveroo, adapted to an academic context.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#20CFBD]" />
                <span>
                  Structure a simple <em>microservices</em> architecture, deployable in containers.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#20CFBD]" />
                <span>
                  Deliver a testable MVP with a database and a dashboard.
                </span>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold text-gray-900">
              Stack & tools
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {[
                "React / React Native",
                "Express.js",
                "MongoDB",
                "MS SQL",
                "Docker",
                "TailwindCSS",
                "Playwright (tests)",
              ].map((chip) => (
                <span
                  key={chip}
                  className="inline-flex items-center rounded-full border border-gray-200 bg-white px-3 py-1 text-sm md:text-base lg:text-lg text-justify text-gray-700 shadow-sm"
                >
                  {chip}
                </span>
              ))}
            </div>
            <p className="mt-4 text-xs text-gray-500">
              Focus: performance, accessibility, clean DX, simplified CI.
            </p>
          </div>
        </div>

        <p className="text-darkGray mt-12 text-sm md:text-base lg:text-lg text-justify">
          In this page you will basically find an overview with all the mains steps we did during the project development.
          As we had a deadline of 4 weeks, we tried to be as efficient as possible and focus on the most important aspects
          of the project. We didn't had time to develope all the functionalities we wanted but we managed to deliver a MVP
          that was functional and met the requirements.
        </p>

        <section className="mx-auto max-w-6xl py-16">
          <h3 className="text-lg font-semibold text-gray-900 text-center">
            5‑step process
          </h3>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-5 gap-6">
            {[
              {
                img: Step1,
                title: "Research",
                desc: "Needs Assessment\nStudy of Solutions",
              },
              {
                img: Step2,
                title: "Wireframes & UI",
                desc: "Mockups\nUX/UI design",
              },
              {
                img: Step3,
                title: "Development",
                desc: "Architecture Setup\nBackend & Frontend",
              },
              {
                img: Step4,
                title: "Dev & Tests",
                desc: "Integration, Tests",
              },
              {
                img: Step5,
                title: "Documentation",
                desc: "README,\n Documentation",
              },
            ].map((step, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center p-6 rounded-2xl   transition"
              >
                <img
                  src={step.img}
                  alt={`Step ${idx + 1}`}
                  className="w-28 h-28 object-contain"
                />
                <p className="mt-4 text-base font-medium text-gray-900">
                  {step.title}
                </p>
                <p className="text-sm text-gray-600 mt-1">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="relative mt-6">
          <div className="text-center">
            <p className="text-[10px] uppercase tracking-[0.25em] text-zinc-500">
              Project Overview
            </p>
            <h2 className="mt-2 text-3xl md:text-4xl font-sfbold text-darkGray">
              Four Key Steps
            </h2>
            <span className="mt-4 block h-[3px] w-24 mx-auto rounded-full bg-[#20CFBD]" />
          </div>

          {/* Mobile timeline */}
          <div className="md:hidden relative mt-10 max-w-2xl mx-auto">
            {/* Ligne verticale */}
            <span className="absolute left-4 top-0 bottom-0 w-[2px] bg-zinc-200" />
            <ul className="space-y-6">
              {ProjectSteps.map(({ num, title, desc, Icon, accent }) => (
                <li key={num} className="relative pl-12">
                  {/* pastille numérotée */}
                  <span className="absolute left-0 top-1 grid place-items-center h-8 w-8 rounded-full bg-white ring-1 ring-zinc-200 shadow-sm">
                    <span className={`text-xs font-ramidots text-[#20CFBD] `}>
                      {num}
                    </span>
                  </span>
                  <div className="rounded-2xl border border-zinc-200 bg-white shadow-sm p-4">
                    <div className="flex items-start gap-3">
                      <div className="shrink-0 grid place-items-center h-9 w-9 rounded-xl bg-zinc-50 ring-1 ring-zinc-200">
                        <Icon className="h-5 w-5 text-zinc-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-zinc-900">{title}</h3>
                        <p className="mt-1 text-sm text-zinc-600 leading-relaxed">
                          {desc}
                        </p>
                      </div>
                    </div>
                    <span className={`mt-4 block h-[2px] w-16 rounded-full bg-[#20CFBD]`} />
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Desktop grid */}
          <div className="hidden md:grid mt-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ProjectSteps.map(({ num, title, desc, Icon, accent }) => (
              <article
                key={num}
                className="relative rounded-2xl border border-zinc-200 bg-white shadow-sm p-5 flex flex-col"
              >
                {/* badge numéro */}
                <span className="absolute right-3 top-3 inline-flex h-6 min-w-6 items-center justify-center rounded-full text-[10px] text-white px-2 shadow-sm bg-[#20CFBD]">
                  {num}
                </span>

                <div className="flex items-start gap-3">
                  <div className="shrink-0 grid place-items-center h-10 w-10 rounded-xl bg-zinc-50 ring-1 ring-zinc-200">
                    <Icon className="h-5 w-5 text-zinc-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-900 leading-tight">
                      {title}
                    </h3>
                    <p className="mt-2 text-sm text-zinc-600 leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </div>

                <div className="mt-auto pt-5">
                  <span className={`block h-[3px] w-20 rounded-full bg-[#20CFBD]`} />
                </div>
              </article>
            ))}
          </div>
        </section>

        <div className="flex flex-col overflow-hidden">
          <ContainerScroll
            titleComponent={
              <>
                <div>
                  <p className="text-base uppercase tracking-widest text-sfregular text-gray-500 flex flex-row gap-2 items-center justify-center mt-20 md:mt-0">
                    <img src={Step2} className="h-10 w-10" />
                    Design
                  </p>
                  <br />
                  <span className="text-4xl md:text-7xl  font-sfbold leading-none">
                    Graphic Chart
                  </span>
                </div>
              </>
            }
          >
            <img
              src={GraphiChart}
              alt="hero"
              height={1848}
              width={1350}
              className="mx-auto rounded-2xl object-cover h-full object-left-top"
              draggable={false}
            />
          </ContainerScroll>
        </div>

        {/* Wireframes  */}
        <section
          className="flex items-center "
          aria-label="Wireframes — Overview"
        >
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* left column — Text */}
            <div className="order-1 lg:order-1 text-left">
              <header className="mb-6">
                <p className="text-base uppercase tracking-widest text-sfregular text-gray-500 flex flex-row items-center gap-2">
                  <img src={Step2} className="h-10 w-10" />
                  Design
                </p>
                <h2 className="text-2xl md:text-5xl font-sfbold tracking-tight">
                  Wireframes & User Flows
                </h2>
              </header>
              <p className="mt-4 text-sm md:text-base lg:text-lg text-justify  leading-relaxed text-zinc-700 max-w-prose">
                Definition of key journeys, screen prioritization, and component structuring for a clear MVP that’s quick to iterate on. The wireframes served as a visual contract to align the team and de‑risk product decisions.
              </p>
              <ul className="mt-6 space-y-2 text-sm md:text-base lg:text-lg text-zinc-700">
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#20CFBD]" />
                  <span>Consistent zoning and visual hierarchy.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#20CFBD]" />
                  <span>Reusable components to speed up development.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#20CFBD]" />
                  <span>Pre‑validation of interactions and edge cases.</span>
                </li>
              </ul>
            </div>

            {/* right column — Image */}
            <div className="order-2 lg:order-2">
              <figure className="relative mx-auto w-full max-w-[720px] overflow-hidden ">
                <img
                  src={WireFrames}
                  alt="Wireframes Cesiveroo"
                  className="relative block w-full h-auto object-cover md:object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </figure>
            </div>
          </div>
        </section>

        {/* Architecture — Overview */}
        <section className="py-16" aria-label="Architecture — Overview">
          <div className="relative overflow-hidden rounded-3xl bg-[#3a3a3a] ring-1 ring-zinc-700 shadow-sm">
            <div className="relative px-6 py-10 sm:px-12 sm:py-14">
              {/* Header */}
              <div className="">
                <header className="mb-6">
                  <p className="text-base uppercase tracking-widest text-sfregular text-white flex flex-row items-center gap-2">
                    <img src={Step3} className="h-10 w-10" />
                    <img src={Step4} className="h-10 w-10" />
                    Development
                  </p>
                  <h2 className="text-2xl md:text-5xl font-sfbold text-white tracking-tight">
                    Application Architecture
                  </h2>
                </header>

                <p className="mt-3 text-sm md:text-base lg:text-lg text-justify leading-relaxed text-zinc-300 ">
                  Service‑oriented architecture: a React frontend, an API gateway centralizing access, and decoupled Node/Express microservices. Polyglot storage depending on use.
                </p>
              </div>

              {/* content */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
                {legend.map((col, idx) => {
                  const Icon = col.icon;
                  return (
                    <div
                      key={col.title}
                      className="rounded-2xl border border-zinc-700 bg-zinc-800/70 p-5 md:p-6"
                    >
                      <div className="flex items-start gap-3">
                        <Icon className="h-10 w-10" color="#20CFBD" />
                        <div className="min-w-0">
                          <h3 className="text-sm md:text-base lg:text-lg text-justify  font-semibold text-white leading-tight">
                            {col.title}
                          </h3>
                          <p className="mt-1 text-sm text-zinc-300">
                            {col.desc}
                          </p>
                        </div>
                      </div>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {col.items.map((chip) => (
                          <span
                            key={chip}
                            className="inline-flex items-center rounded-full border border-zinc-600 bg-zinc-700 px-2.5 py-1 text-[11px] text-zinc-200"
                          >
                            {chip}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="pt-20 bg-white" aria-label="Conclusion">
          {/* Header */}
          <header className="mb-6">
            <p className="text-base uppercase tracking-widest text-sfregular text-gray-500 flex flex-row items-center gap-2">
              <img src={Step5} className="h-10 w-10" />
              Documentation
            </p>
            <h2 className="text-2xl md:text-5xl font-sfbold tracking-tight">
              Conclusion
            </h2>
          </header>
          {/* Text */}
          <p className="mt-4 leading-relaxed text-zinc-600 text-sm md:text-base lg:text-lg text-justify ">
            This project was actually one of the first I worked on that resulted
            in something real and concrete. That's why I decided to put it on
            this portfolio. After this project, I started having interest in
            developing technical projects during my personal time (like this
            portfolio, leetcode problems etc…)
            {!completedMissions.includes("tip#1") ? (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span>. </span>
                  </TooltipTrigger>
                  <TooltipContent>
                    <div className="flex items-center px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm w-fit space-x-2">
                      <span className="text-gray-600 font-medium">
                        Hidden Tip #1
                      </span>
                      <button
                        onClick={() => completeMission("tip#1")}
                        className="px-3 py-1 text-xs font-semibold text-gray-600 bg-gray-100 rounded-full hover:bg-gray-200 "
                      >
                        Discover Tip
                      </button>
                    </div>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ) : (
              <span>. </span>
            )}
            I'll invite you to check the documentation on github
          </p>

          {/* CTA */}
          <div className="mt-8">
            <a
              href="https://github.com/AymaneHilmi/Cesiveroo" // remplace par ton lien GitHub
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-darkGray px-5 py-3 text-sm font-semibold text-white shadow-md hover:shadow-lg hover:bg-[#1ab3a5] transition"
              data-cursor-icon="arrow"
            >
              <Github size={18} />
              View on GitHub
            </a>
          </div>
        </section>
      </section>
    </div>
  );
}
