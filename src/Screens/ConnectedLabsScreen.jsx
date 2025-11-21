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
                    accessible in real-time from any R&D center around the world:
                </p>
            </FadeIn>
            <AnimatedBeamDemo />
            <FadeIn className="mt-4">
                <p>
                    From this environmet my project took place with two main objectives, Integrating a new entity into the Saint-Gobain
                    LIMS (Sample Manager) and Enhancing system accessibility and usability through mobile solutions.
                    The idea of this approach was to first start with the integration of the system for a new entity and then to improve his accessibility .
                </p>
                <br />
                <p>

                </p>
            </FadeIn>

            The rest of the page is coming soon...
        </div>
    );
};