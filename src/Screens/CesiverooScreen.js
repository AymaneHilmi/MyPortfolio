import React, { img, useEffect, useState, useRef } from "react";
import Step1 from "../assets/CesiverooStep1.png";
import Step2 from "../assets/CesiverooStep2.png";
import Step3 from "../assets/CesiverooStep3.png";
import Step4 from "../assets/CesiverooStep4.png";
import Step5 from "../assets/CesiverooStep5.png";
import HomeCesiveroo from "../assets/CesiverooHome.png";
import GraphiChart from "../assets/CesiverooIpadChart.png";
import WireFrames from "../assets/CesiverooWireFrames.png";
import { ContainerScroll } from "../components/ui/container-scroll-animation";
import InteractiveStepsSection from "../components/ui/interactivesteps";
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
} from "lucide-react";

export default function CesiverooScreen() {
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
            label: "Rôle",
            value: "Software Engineer",
            icon: Briefcase,
        },
        {
            label: "Livrables",
            value: "MVP, docs, démo",
            icon: FileText,
        },
    ];

    const legend = [
        {
            title: "Client (Web & Mobile)",
            desc: "App React (web) + mobile. Auth, state, routing.",
            items: ["React", "TailwindCSS", "Auth tokens", "ExtraIgnored"],
            icon: MonitorSmartphone,
        },
        {
            title: "API Gateway",
            desc: "Entrée unique : agrégation, routing, auth, rate-limit.",
            items: ["Reverse proxy", "Logs", "Versioning", "Security"],
            icon: ShieldCheck,
        },
        {
            title: "Microservices",
            desc: "Services Node/Express découplés, orientés métier.",
            items: [
                "Auth",
                "Catalogue",
                "Commandes",
                "Paiements (mock)",
                "Notifications",
                "Webhooks",
            ],
            icon: Boxes,
        },
        {
            title: "Data Stores",
            desc: "Stockage polyglotte selon l’usage.",
            items: [
                "MongoDB (temps réel)",
                "MS SQL (reporting)",
                "Redis",
                "Elasticsearch",
            ],
            icon: Database,
        },
        {
            title: "Back-Office & Dev Tools",
            desc: "Panneaux admin, tooling CI/CD, observabilité.",
            items: ["Admin UI", "Pipelines", "Monitoring", "Docs"],
            icon: Wrench,
        },
        {
            title: "Observabilité & Monitoring",
            desc: "Visibilité, logs, métriques et alertes.",
            items: ["Grafana", "Prometheus", "Alertmanager", "ELK"],
            icon: Activity,
        },
    ];

    return (
        <div className="md:mx-auto max-w-6xl mx-6">
            <section className="mx-auto py-12 md:py-16 mt-32 flex justify-center items-center">
                <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12 items-center">
                    {/* Left column — Text */}
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 px-3 py-1 text-sm text-zinc-600">
                            <span className="h-2 w-2 rounded-full bg-emerald-500" />
                            Process Highlights
                        </div>

                        <h1 className="text-4xl font-sfbold tracking-tight text-darkGray md:text-5xl">
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
                    </div>


                    {/* Right column — Image "incrustée" on white bg */}
                    <div className="relative">
                        {/* TODO Proposition de gpt, voir si je laisse ou pas ????  */}
                        {/* Subtle backdrop elements to blend the image into white site bg */}
                        {/* <div
              className="absolute -left-6 -top-6 h-60 w-60 rounded-full bg-gradient-to-br from-[#A7F3EB] to-transparent blur-xl"
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-8 -right-8 h-60 w-60 rounded-full bg-gradient-to-tr from-[#A7F3EB] to-transparent blur-xl"
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
                    <p className="text-base uppercase tracking-widest text-lightGray">
                        Aperçu du projet
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

                <InteractiveStepsSection />

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
                            height={848}
                            width={1235}
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
                        <div className="order-2 lg:order-2">
                            <figure className="relative mx-auto w-full max-w-[720px] overflow-hidden ">
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
                    <div className="relative overflow-hidden rounded-3xl bg-[#3a3a3a] ring-1 ring-zinc-700 shadow-sm">
                        <div className="relative px-6 py-10 sm:px-12 sm:py-14">
                            {/* Header */}
                            <div className="max-w-3xl">
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

                                <p className="mt-3 text-base sm:text-lg leading-relaxed text-zinc-300 max-w-prose">
                                    Architecture orientée services : un front React, une gateway
                                    d’API qui centralise l’accès et des microservices Node/Express
                                    découplés. Stockage polyglotte suivant l’usage.
                                </p>
                            </div>

                            {/* Body content */}
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
                                                    <h3 className="text-base font-semibold text-white leading-tight">
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
                    <p className="mt-4 text-lg leading-relaxed text-zinc-600">
                        This project was actually one of the first I worked on
                        that resulted in something real and concrete. That's why I decided
                        to put it on this portfolio. After this project, I started having
                        interest in developing technical projects during my personal time
                        (like this portfolio, leetcode problems etc…). I'll invite you to
                        check the documentation on github
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
