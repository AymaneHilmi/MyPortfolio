import React, { useEffect, useState, useMemo } from "react";
import FadeIn from "../components/FadeIn";
import LIMSmobility from "@/assets/LIMSmobility.png";
import { Github, } from "lucide-react";
import { NumberTicker } from "../components/ui/NumberTicker";
import SaintGobainMap from "../components/ui/SaintGobainMap";
import { AnimatedBeamDemo } from "../components/ui/animatedbeam";


export default function ConnectedLabsScreen() {
    return (
        <div className="lg:mx-auto max-w-5xl px-6">
            <section className="mx-auto py-12 md:py-16 md:mt-32 mt-12 flex justify-center items-center">
                <FadeIn className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12 items-center">
                    {/* Left column — Text */}
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 rounded-full border border-ultralightGray dark:border-darkBorder dark:bg-darkContainer px-3 py-1 text-sm text-lightPrimary dark:text-darkPrimary font-sfregular ">
                            <span className="h-2 w-2 rounded-full bg-gradient-to-tr from-sky-400 to-blue-600" />
                            Process Highlights
                        </div>

                        <div className="flex flex-row gap-4 items-center">
                            {/* <img src={logo} alt="Portfolio logo" className="h-20 w-20" /> */}
                            <span className=" font-ramidots tracking-tight text-5xl md:text-6xl lg:text-7xl bg-gradient-to-tr from-sky-400 to-blue-600 bg-clip-text text-transparent w-fit pr-4">
                                Connected Labs
                            </span>
                        </div>

                        <div className="text-lightPrimary dark:text-darkPrimary font-sfregular text-justify text-sm md:text-base lg:text-lg">
                            <p>
                                As part of my final-year engineering project carried out at Saint-Gobain Research Provence I contributed to the Connected
                                Labs program, an initiative aimed at unifying and modernizing laboratory data management across the group’s global R&D centers.
                            </p>
                            <p>
                                My work focused on two main goals: integrating a new entity into the Saint-Gobain LIMS (Laboratory Information Management System)
                                and enhancing system accessibility and usability through mobile solutions. From requirements analysis to production
                                deployment, I designed prototypes, implemented them, and supported the system’s continuous improvement.
                            </p>
                        </div>
                    </div>
                    <div className="relative">
                        <figure className="relative mx-auto w-full max-w-[640px] overflow-hidden rounded-2xl ">
                            <img
                                src={LIMSmobility}
                                alt="Cesiveroo illustration with shopping bags and spheres"
                                className="block h-auto w-full object-contain "
                                loading="eager"
                                decoding="async"
                            />
                        </figure>
                    </div>
                </FadeIn>
            </section>
            <section className="mx-auto py-8 md:py-12 flex justify-center items-center">
                <div className="max-w-5xl mx-auto text-center space-y-4">
                    <p className="text-[10px] uppercase tracking-[0.25em] text-lightPrimary dark:text-darkPrimary font-sfregular">
                        About
                    </p>

                    <h2 className="font-ramidots tracking-tight text-5xl md:text-6xl lg:text-6xl bg-gradient-to-tr from-sky-400 to-blue-600 bg-clip-text text-transparent">
                        Saint-Gobain
                    </h2>

                    <p className="text-lightPrimary dark:text-darkPrimary font-sfregular text-sm md:text-base lg:text-lg">
                        Saint-Gobain is a global leader in light and sustainable construction, designing and delivering
                        high-performance materials and solutions that shape the future of buildings, transportation,
                        and industry.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 pt-4">

                        <div className="rounded-2xl border border-ultralightGray dark:border-darkBorder bg-lightBG dark:bg-darkContainer px-4 py-5 flex flex-col items-center gap-1">
                            <span className="text-xs font-sfmedium text-lightSecondary dark:text-darkSecondary uppercase tracking-wide">
                                Countries
                            </span>
                            <span className="text-2xl md:text-3xl font-sfbold bg-gradient-to-tr from-sky-400 to-blue-600 bg-clip-text text-transparent">
                                <NumberTicker value={76} />+
                            </span>
                        </div>

                        <div className="rounded-2xl border border-ultralightGray dark:border-darkBorder bg-lightBG dark:bg-darkContainer px-4 py-5 flex flex-col items-center gap-1">
                            <span className="text-xs font-sfmedium text-lightSecondary dark:text-darkSecondary uppercase tracking-wide">
                                Employees
                            </span>
                            <span className="text-2xl md:text-3xl font-sfbold bg-gradient-to-tr from-sky-400 to-blue-600 bg-clip-text text-transparent">
                                <NumberTicker value={159000} />+
                            </span>
                        </div>

                        <div className="rounded-2xl border border-ultralightGray dark:border-darkBorder bg-lightBG dark:bg-darkContainer px-4 py-5 flex flex-col items-center gap-1">
                            <span className="text-xs font-sfmedium text-lightSecondary dark:text-darkSecondary uppercase tracking-wide">
                                Focus
                            </span>
                            <span className="text-sm text-lightPrimary dark:text-darkPrimary text-center">
                                Sustainable construction &amp; high-performance materials.
                            </span>
                        </div>

                    </div>
                </div>
            </section>

            <FadeIn>

                <p>
                    Today, to continuously improve the performance of its materials and solutions, Saint-Gobain relies on 8 R&D centers located across the world.
                    Each center is specialized in a specific domain and contributes its own expertise to the Group’s global innovation strategy.
                    This project took place across two of these centers: <text className="text-[#2563eb] font-bold">Saint-Gobain Research Provence </text> (located in France, Cavaillon) and <text className="text-[#2563eb] font-bold">Saint-Gobain Research Germany</text> (located in Herzogenrath, Germany).
                </p>
            </FadeIn>
            <section className=" flex justify-center items-center">
                <FadeIn className="w-full">
                    <SaintGobainMap />
                </FadeIn>
                {/* TODO: legende map couleur bleu */}
            </section>
            <FadeIn>
                <p className="text-[10px] uppercase tracking-[0.25em] text-lightPrimary dark:text-darkPrimary font-sfregular mb-4">
                    Context
                </p>
                <p>
                    To improve effiency and collaboration between these centers, Saint-Gobain is undertaking the Connected Labs program,
                    an initiative aimed at unifying and modernizing laboratory data management across all its R&D centers worldwide.
                    The program's primary objective is to implement a centralized Laboratory Information Management System (LIMS) that facilitates seamless data sharing,
                    enhances collaboration among researchers, and optimizes laboratory workflows.To meet this ambition, Saint-Gobain selected Sample Manager, a leading LIMS solution developed by Thermo Fisher Scientific.
                </p>
                <br />
                <p>
                    Thanks to this system as we can see on the diagram below, all Saint-Gobain laboratories data is centralized and
                    accessible in real-time from any R&D center around the world.
                </p>
            </FadeIn>
            <AnimatedBeamDemo />
            <FadeIn className="my-4 mb-8">
                <p>
                    From this environment my project took place with two main objectives, Integrating a new entity into the Saint-Gobain
                    LIMS (Sample Manager) and Enhancing system accessibility and usability through mobile solutions.

                </p>
                <br />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-8 mb-12">
                    <div className="rounded-3xl border border-ultralightGray dark:border-darkBorder bg-lightBG dark:bg-darkContainer p-5 md:p-6 shadow-sm">
                        <div className="flex items-start gap-3">
                            <div className="shrink-0 h-10 w-10 rounded-2xl bg-gradient-to-tr from-sky-400/20 to-blue-600/20 grid place-items-center">
                                {/* tiny icon */}
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="stroke-sky-600 dark:stroke-sky-300" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="3" y="3" width="18" height="14" rx="2" />
                                    <path d="M7 21h10" />
                                    <path d="M12 17v4" />
                                </svg>
                            </div>

                            <div className="space-y-1">
                                <h3 className="text-lg md:text-xl font-sfbold text-lightPrimary dark:text-darkPrimary">
                                    Part 1 — LIMS Integration
                                </h3>
                                <p className="text-sm md:text-base font-sfregular text-lightPrimary dark:text-darkPrimary leading-relaxed">
                                    Integrate a new entity into Saint-Gobain’s LIMS (Sample Manager), ensuring alignment with the global Connected Labs standards.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-3xl border border-ultralightGray dark:border-darkBorder bg-lightBG dark:bg-darkContainer p-5 md:p-6 shadow-sm">
                        <div className="flex items-start gap-3">
                            <div className="shrink-0 h-10 w-10 rounded-2xl bg-gradient-to-tr from-sky-400/20 to-blue-600/20 grid place-items-center">
                                {/* tiny icon */}
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="stroke-blue-700 dark:stroke-blue-300" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="7" y="2" width="10" height="20" rx="2" />
                                    <path d="M11 18h2" />
                                </svg>
                            </div>

                            <div className="space-y-1">
                                <h3 className="text-lg md:text-xl font-sfbold text-lightPrimary dark:text-darkPrimary">
                                    Part 2 — Mobile Accessibility
                                </h3>
                                <p className="text-sm md:text-base font-sfregular text-lightPrimary dark:text-darkPrimary leading-relaxed">
                                    Improve system usability and accessibility through mobile solutions, built on top of the new integrated setup.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <p >
                    The idea of this approach was to first start with the integration of the system for a new entity and then to improve his accessibility .
                </p>
                <p className="text-[10px] uppercase tracking-[0.25em] text-lightPrimary dark:text-darkPrimary font-sfregular mt-8 mb-4">
                    project management
                </p>
                <p>
                    In terms of project management, the work followed a structured waterfall approach between the clients and my team as they always worked with this method. Clearly defined phases was planned: requirements analysis, specification, development, testing, and deployment.
                    Each step was validated before moving to the next.

                    Additionnaly, I introduced several management tools to keep the project clear, predictable, and measurable:
                    <ul className="list-disc list-inside my-4">
                        <li>Gantt charts to visualize the project timeline and key milestones.</li>
                        <li>Risk management plans to identify potential challenges and mitigation strategies.</li>
                        <li>Regular progress reports to track achievements against planned objectives.</li>
                    </ul>
                    During all the phases of the project I maintained close communication with the Saint-Gobain cybersecurity service and IT teams to ensure compliance with Saint-Gobain's security policies and standards with the development I'm leading. As LIMS systems handle sensitive laboratory data, it was crucial to address any security concerns from the outset.
                </p>
            </FadeIn>
            <p className="text-[10px] text-center uppercase tracking-[0.25em] text-lightPrimary dark:text-darkPrimary font-sfregular mt-8 mb-4">
                the rest of the content is coming soon...
            </p>
            {/* <p className="text-[10px] uppercase tracking-[0.25em] text-lightPrimary dark:text-darkPrimary font-sfregular mt-8 mb-4">
                Part 1 - LIMS Integration
            </p>
            <p>
                In terms of project management, the work followed a structured waterfall approach between the clients and my team as they always worked with this method. Clearly defined phases was planned: requirements analysis, specification, development, testing, and deployment.
                Each step was validated before moving to the next.
            </p > */}
        </div>
    );
};