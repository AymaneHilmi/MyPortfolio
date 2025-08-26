import React, { img, useEffect, useState, useRef } from "react";
import Spline from "@splinetool/react-spline";
import { AnimatedTooltip } from "../components/ui/animated-tooltip";
import { CodeBlock } from "../components/ui/code-block";
import Cesiveroo from "../assets/LogoCesiveroo.png";
import Step1 from "../assets/CesiverooStep1.png";
import Step2 from "../assets/CesiverooStep2.png";
import Step3 from "../assets/CesiverooStep3.png";
import Step4 from "../assets/CesiverooStep4.png";
import Step5 from "../assets/CesiverooStep5.png";
import HomeCesiveroo from "../assets/CesiverooHome.png";
import GraphiChart from "../assets/CesiverooIpadChart.png";
import WireFrames from "../assets/CesiverooWireFrames.png";
import Architecture from "../assets/CesiverooArchitecture.png";
import NeedSchema from "../assets/NeedsAssesment.png";
import Footer from "../components/footer";
import AOS from "aos";
import { cn } from "../lib/utils";
import PropTypes from "prop-types";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";
import { ContainerScroll } from "../components/ui/container-scroll-animation";
import CesiverooStack from "../components/ui/CesiverooStack";

export default function CesiverooScreen() {
  // const [isVisible, setIsVisible] = useState(false);

  // useEffect(() => {
  //     const observer = new IntersectionObserver((entries) => {
  //         entries.forEach((entry) => {
  //             if (entry.isIntersecting) {
  //                 setIsVisible(true);
  //                 observer.disconnect();
  //             }
  //         });
  //     });

  //     const target = document.querySelector('#landing-page');
  //     if (target) {
  //         observer.observe(target);
  //     }

  //     return () => {
  //         if (target) {
  //             observer.unobserve(target);
  //         }
  //     };
  // }, []);

  // const handleLoad = () => {
  //     AOS.refresh();
  // };

  // const people = [
  //     {
  //         id: 1,
  //         name: "Clement Fornes",
  //         designation: "Software Engineer",
  //         image: "https://media.licdn.com/dms/image/v2/D4D03AQHJVCZM9XWnyA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1710451743776?e=1741824000&v=beta&t=f5LejpCDWFVriiozl44PDamTStnrmrb4AcgIrRj2NFg",
  //     },
  //     {
  //         id: 2,
  //         name: "Teo Emirot",
  //         designation: "IT Engineer",
  //         image: "https://media.licdn.com/dms/image/v2/C4D03AQHk1JDj31er8A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1657905707102?e=1741824000&v=beta&t=bwgN7AnDXWT9NrCR8OuUU1pU2v6KOlPtMq4yUGq5wx0",
  //     }
  // ];

  // const Disciplines = [
  //     {
  //         id: 1,
  //         name: "React Native",
  //         designation: "Library",
  //         image:
  //             "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz34OmNVyIMh1rguNfXC3MBk7Qq3DTduJVVg&s",
  //     },
  //     {
  //         id: 2,
  //         name: "Microsoft SQL",
  //         designation: "Data Base",
  //         image:
  //             "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROcY7avil2U_k5wxxhQGXOHK5CH79g0h4R7xY4fgUhqZNuZSNlvkGcw6RYsT29ailWpV8&usqp=CAU",
  //     },
  //     {
  //         id: 3,
  //         name: "Express JS",
  //         designation: "Framework",
  //         image:
  //             "https://e7.pngegg.com/pngimages/925/447/png-clipart-express-js-node-js-javascript-mongodb-node-js-text-trademark-thumbnail.png",
  //     },
  //     {
  //         id: 4,
  //         name: "Mongo DB",
  //         designation: "Data Base",
  //         image:
  //             "https://www.svgrepo.com/show/331488/mongodb.svg",
  //     },
  //     {
  //         id: 5,
  //         name: "Docker",
  //         designation: "Application",
  //         image:
  //             "https://img-0.journaldunet.com/FdWFphLk__fpZlVrdZArGSxwfyg=/1500x/smart/4cfbed5bddb0467bbecad96ca168bbe3/ccmcms-jdn/11507000.jpg"

  //     }
  // ];

  const [active, setActive] = useState(1);

  // Contenu lié aux 4 étapes
  const steps = [
    {
      id: 1,
      label: "Needs Reassesment",
      title: "1. Découvrir le besoin",
      body: "Cadrage des objectifs, personas et parcours clés pour aligner la valeur et le scope.",
      color: "#E0F7F5", // pastel turquoise très clair
    },
    {
      id: 2,
      label: "Risk Analysis",
      title: "2. Concevoir les solutions",
      body: "Wireframes, design system Cesiveroo et prototypage rapide pour valider l’ergonomie.",
      color: "#E0F7F5", // mint clair
    },
    {
      id: 3,
      label: "Architecture Diagram",
      title: "3. Construire & intégrer",
      body: "Dev modulaire, APIs, tests clés, intégration continue et petites boucles de feedback.",
      color: "#E0F7F5", // teal pastel
    },
    {
      id: 4,
      label: "Projected Timeline",
      title: "4. Lancer & apprendre",
      body: "Métriques d’usage, collecte des retours et plan d’amélioration continue.",
      color: "#E0F7F5", // turquoise accent
    },
  ];

  const activeIndex = steps.findIndex((s) => s.id === active);

  return (
    <div className="mx-auto max-w-6xl">
      <section className="mx-auto py-12 md:py-16 mt-32 flex justify-center items-center">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12 items-center">
          {/* Left column — Text */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 px-3 py-1 text-sm text-zinc-600">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Process Highlights
            </div>

            <h1 className="text-3xl font-sfbold tracking-tight text-darkGray md:text-5xl">
              Cesi<span className="text-[#20CFBD]">veroo</span> Project
            </h1>

            <div className="prose prose-zinc max-w-none text-darkGray text-justify">
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
                3 developers. 3 very cool developers.
              </p>
            </div>
          </div>

          {/* Right column — Image "incrustée" on white bg */}
          <div className="relative">
            {/* TODO Proposition de gpt, voir si je laisse ou pas ????  */}
            {/* Subtle backdrop elements to blend the image into white site bg */}
            {/* <div
              className="absolute -left-6 -top-6 h-28 w-28 rounded-full bg-gradient-to-br from-emerald-100 to-transparent blur-xl"
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-gradient-to-tr from-zinc-100 to-transparent blur-xl"
              aria-hidden="true"
            /> */}

            <figure className="relative mx-auto w-full max-w-[640px] overflow-hidden rounded-2xl ">
              {/* Replace the src below with your image path */}
              <img
                src={HomeCesiveroo}
                alt="Cesiveroo illustration with shopping bags and spheres"
                className="block h-auto w-full object-contain "
                loading="eager"
                decoding="async"
              />

              {/* A soft inner shadow to "embed" it into the page */}
            </figure>
          </div>
        </div>
      </section>

      {/*  Détails du projet */}
      <section
        className="mx-auto py-16 sm:py-20"
        aria-label="Détails du projet Cesiveroo"
      >
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-500">
            Aperçu du projet
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">
            Détails & Objectifs
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
          <div className="rounded-xl ring-1 ring-gray-200 p-4 text-center">
            <p className="text-3xl font-semibold text-gray-900">4</p>
            <p className="text-xs text-gray-500 mt-1">semaines</p>
          </div>
          <div className="rounded-xl ring-1 ring-gray-200 p-4 text-center">
            <p className="text-3xl font-semibold text-gray-900">3</p>
            <p className="text-xs text-gray-500 mt-1">développeurs</p>
          </div>
          <div className="rounded-xl ring-1 ring-gray-200 p-4 text-center">
            <p className="text-sm font-medium text-gray-900">Rôle</p>
            <p className="text-xs text-gray-500 mt-1">Lead Front & UX</p>
          </div>
          <div className="rounded-xl ring-1 ring-gray-200 p-4 text-center">
            <p className="text-sm font-medium text-gray-900">Livrables</p>
            <p className="text-xs text-gray-500 mt-1">MVP, docs, démo</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-10 items-start">
          <div className="md:col-span-3">
            <h3 className="text-lg font-semibold text-gray-900">Objectifs</h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-700">
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#20CFBD]" />
                <span>
                  Concevoir une expérience fluide inspirée de Deliveroo, adaptée
                  au contexte académique.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#20CFBD]" />
                <span>
                  Structurer une architecture <em>microservices</em> simple,
                  déployable en conteneurs.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#20CFBD]" />
                <span>
                  Livrer un MVP testable avec une base de données et un tableau
                  de bord.
                </span>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold text-gray-900">
              Stack & outils
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
                  className="inline-flex items-center rounded-full border border-gray-200 bg-white px-3 py-1 text-xs text-gray-700 shadow-sm"
                >
                  {chip}
                </span>
              ))}
            </div>
            <p className="mt-4 text-xs text-gray-500">
              Focus: performance, accessibilité, DX propre, CI simplifiée.
            </p>
          </div>
        </div>

        <section className="mx-auto max-w-6xl py-16">
          <h3 className="text-lg font-semibold text-gray-900 text-center">
            Processus en 5 étapes
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
                className="flex flex-col items-center text-center p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition"
              >
                <img
                  src={step.img}
                  alt={`Step ${idx + 1}`}
                  className="w-24 h-24 object-contain"
                />
                <p className="mt-4 text-sm font-medium text-gray-900">
                  {step.title}
                </p>
                <p className="text-xs text-gray-600 mt-1">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="flex flex-col justify-center items-center py-12">
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-widest text-sfregular text-gray-500">
              Research
            </p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-sfbold tracking-tight text-darkGray">
              Needs Assessment
            </h2>
          </div>

          <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Panneau texte lié à l’étape active */}
            <div className="self-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 px-3 py-1 text-sm text-zinc-600">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                How it works (style dessin)
              </div>
              <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-900">
                Pile 3D minimaliste — sans ombres
              </h2>
              <p className="mt-3 text-zinc-600">
                Arêtes <code>border-zinc-200</code>, angles vifs, couleurs
                plates. Cliquez un layer pour le mettre en avant (léger lift) et
                changer le contenu.
              </p>

              <div className="mt-8 rounded-none border border-zinc-200 p-6 sm:p-8">
                <div className="text-xs text-zinc-600">
                  Étape <span className="font-medium">{active}</span> / 4 —{" "}
                  {steps[activeIndex].label}
                </div>
                <h3 className="mt-2 text-xl font-semibold text-zinc-900">
                  {steps[activeIndex].title}
                </h3>
                <p className="mt-2 text-zinc-700">{steps[activeIndex].body}</p>
              </div>
            </div>

            {/* Stack 3D */}
            <CesiverooStack
              steps={steps}
              active={active}
              setActive={setActive}
            />
          </div>
        </section>

        <div className="flex flex-col overflow-hidden">
          <ContainerScroll
            titleComponent={
              <>
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-sm text-zinc-600">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    Design
                  </div>
                  <br />
                  <span className="text-4xl md:text-8xl text-[#20CFBD] font-sfbold mt-1 leading-none">
                    Graphic Chart
                  </span>
                </div>
              </>
            }
          >
            <img
              src={WireFrames}
              alt="hero"
              height={720}
              width={1400}
              className="mx-auto rounded-2xl object-cover h-full object-left-top"
              draggable={false}
            />
          </ContainerScroll>
        </div>

        {/* Full‑screen — Wireframes presentation */}
        <section
          className="flex items-center py-16"
          aria-label="Wireframes — Présentation"
        >
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: text */}
            <div className="order-2 lg:order-1 text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-sm text-zinc-600">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Design
              </div>
              <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-sfbold tracking-tight text-zinc-900">
                Wireframes & User Flows
              </h2>
              <p className="mt-4 text-base sm:text-lg leading-relaxed text-zinc-700 max-w-prose">
                Définition des parcours clés, priorisation des écrans et
                structuration des composants pour un MVP clair et rapide à
                itérer. Les wireframes ont servi de contrat visuel pour aligner
                l’équipe et sécuriser les décisions produit.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-zinc-700">
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#20CFBD]" />
                  <span>Zoning et hiérarchie visuelle cohérente.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#20CFBD]" />
                  <span>Composants réutilisables pour accélérer le dev.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#20CFBD]" />
                  <span>Pré‑validation des interactions et bords de cas.</span>
                </li>
              </ul>
            </div>

            {/* Right: image */}
            <div className="order-1 lg:order-2">
              <figure className="relative mx-auto w-full max-w-[720px] overflow-hidden rounded-2xl ring-1 ring-zinc-200 bg-white shadow-sm">
                {/* Subtle decorative backdrop */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute -top-16 -left-16 h-40 w-40 rounded-full bg-emerald-100/50 blur-2xl"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute -bottom-12 -right-12 h-48 w-48 rounded-full bg-zinc-100/70 blur-2xl"
                />

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

        {/* Architecture — Présentation */}
        <section className="py-16" aria-label="Architecture — Présentation">
          <div className="relative overflow-hidden rounded-3xl bg-white ring-1 ring-zinc-200 shadow-sm">
            <div className="relative px-6 py-10 sm:px-12 sm:py-14">
              {/* Header */}
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-sm text-zinc-600">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  Tech • Architecture
                </div>
                <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-sfbold tracking-tight text-zinc-900">
                  Application Architecture
                </h2>
                {/* Description – laissée telle quelle */}
                <p className="mt-3 text-base sm:text-lg leading-relaxed text-zinc-700 max-w-prose">
                  Architecture orientée services : un front React, une gateway
                  d’API qui centralise l’accès et des microservices Node/Express
                  découplés. Stockage polyglotte suivant l’usage.
                </p>
              </div>

              {/* Body content updated */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
                  <p className="text-xs uppercase tracking-widest text-zinc-500">
                    Client
                  </p>
                  <h3 className="mt-1 text-lg font-semibold text-zinc-900">
                    Front React
                  </h3>
                  <p className="mt-2 text-sm text-zinc-600">
                    UI, routing, state, auth tokens
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {["React", "TailwindCSS", "Playwright"].map((chip) => (
                      <span
                        key={chip}
                        className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-2.5 py-1 text-[11px] text-zinc-700"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
                  <p className="text-xs uppercase tracking-widest text-zinc-500">
                    Edge
                  </p>
                  <h3 className="mt-1 text-lg font-semibold text-zinc-900">
                    API Gateway
                  </h3>
                  <ul className="mt-2 space-y-1.5 text-sm text-zinc-600">
                    <li>Aggregation & routing</li>
                    <li>Auth, rate‑limit, logs</li>
                    <li>Versioning</li>
                  </ul>
                </div>
                <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
                  <p className="text-xs uppercase tracking-widest text-zinc-500">
                    Services & Data
                  </p>
                  <div className="mt-2 grid grid-cols-2 gap-2 text-sm">
                    {[
                      "Auth",
                      "Catalogue",
                      "Commandes",
                      "Paiements (mock)",
                      "Notifications",
                      "Webhooks",
                    ].map((s) => (
                      <div
                        key={s}
                        className="rounded-lg border border-zinc-200 bg-white px-3 py-2 text-zinc-700"
                      >
                        {s}
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
                    {["MongoDB (temps réel)", "MS SQL (reporting)"].map(
                      (db) => (
                        <div
                          key={db}
                          className="rounded-lg border border-zinc-200 bg-white px-3 py-2 text-zinc-700"
                        >
                          {db}
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>

              {/* Bottom: big architecture image */}
              <figure className="mt-10 relative mx-auto w-full overflow-hidden rounded-2xl ring-1 ring-zinc-200 bg-white">
                <img
                  src={Architecture}
                  alt="Architecture Cesiveroo"
                  className="block w-full h-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </figure>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
