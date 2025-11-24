import React, { useEffect, useState, useMemo } from "react";
import FadeIn from "../components/FadeIn";
import LIMSmobility from "@/assets/LIMSmobility.png";
import { Github, } from "lucide-react";
import { NumberTicker } from "../components/ui/NumberTicker";
import SaintGobainMap from "../components/ui/SaintGobainMap";
import { AnimatedBeamDemo } from "../components/ui/animatedbeam";
import { motion } from "framer-motion";
import SharepointAcrhitecture from "@/assets/ConnectedlabSharepointArchitecture.png";


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

                <p className="text-justify">
                    Today, to continuously improve the performance of its materials and solutions, Saint-Gobain relies on 8 R&D centers located across the world.
                    Each center is specialized in a specific domain and contributes its own expertise to the Group’s global innovation strategy.
                    This project took place across two of these centers:{" "}
                    <text className="text-transparent bg-clip-text bg-gradient-to-tr from-sky-400 to-blue-600 font-bold">Saint-Gobain Research Provence </text> (located in France, Cavaillon) and <text className="text-transparent bg-clip-text bg-gradient-to-tr from-sky-400 to-blue-600 font-bold">Saint-Gobain Research Germany</text> (located in Herzogenrath, Germany).
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
                <p className="text-justify">
                    To improve effiency and collaboration between these centers, Saint-Gobain is undertaking the Connected Labs program,
                    an initiative aimed at unifying and modernizing laboratory data management across all its R&D centers worldwide.
                    The program's primary objective is to implement a centralized Laboratory Information Management System (LIMS) that facilitates seamless data sharing,
                    enhances collaboration among researchers, and optimizes laboratory workflows.To meet this ambition, Saint-Gobain selected Sample Manager, a leading LIMS solution developed by Thermo Fisher Scientific.
                </p>
                <br />
                <p className="text-justify">
                    Thanks to this system as we can see on the diagram below, all Saint-Gobain laboratories data is centralized and
                    accessible in real-time from any R&D center around the world.
                </p>
            </FadeIn>
            <AnimatedBeamDemo />
            <FadeIn className="my-4 mb-8">
                <p className="text-justify">
                    From this environment my project took place with two main objectives, Integrating a new entity into the Saint-Gobain
                    LIMS (Sample Manager) and Enhancing system accessibility and usability through mobile solutions.

                </p>
                <p className="text-justify">
                    The idea of this approach was to first start with the integration of the system for a new entity and then to improve his accessibility .
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
                <p className="text-[10px] uppercase tracking-[0.25em] text-lightPrimary dark:text-darkPrimary font-sfregular mt-8 mb-4">
                    project management
                </p>
                <p className="text-justify">
                    In terms of project management, the work followed a structured waterfall approach between the clients and my team as they always worked with this method. Clearly defined phases was planned: requirements analysis, specification, development, testing, and deployment.
                    Each step was validated before moving to the next.
                    <br />
                    <br />
                    Additionnaly, I worked with Gantt charts to visualize the project timeline and key milestones to keep the project clear.
                    During all the phases of the project I maintained close communication with the Saint-Gobain cybersecurity service and IT teams to ensure compliance with Saint-Gobain's security policies and standards with the development I'm leading. As LIMS systems handle sensitive laboratory data, it was crucial to address any security concerns from the outset.
                </p>
            </FadeIn>
            {/* <p className="text-[10px] text-left uppercase tracking-[0.25em] text-lightPrimary dark:text-darkPrimary font-sfregular mt-8 mb-4">
                the rest of the content is coming soon...
            </p> */}
            <p className="text-[10px] uppercase tracking-[0.25em] text-lightPrimary dark:text-darkPrimary font-sfregular mt-8 mb-4">
                Part 1 - LIMS Integration
            </p>
            <p className="text-justify">
                A concrete need emerged directly from the field:
                the GPI (Gypsum Process Innovation) laboratories, the Saint-Gobain entity that produces plasterboard worldwide needed
                a standardized, reliable way to structure and manage their analyses inside the LIMS (Sample Manager).
                <br />
                <br />
                Actually , their laboratory process was largely manual, relying on emails and informal channels for analysis requests and reporting.
                This led to inefficiencies, lack of traceability, and difficulties in tracking analysis status.
            </p >

            <section className="my-6">
                {/* Horizontal workflow */}
                <div >
                    {/* Container avec ton look */}
                    <div className="relative rounded-3xl md:p-6">

                        {/* Steps in one line */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative">
                            {[
                                {
                                    title: "Analysis Request (DAT)",
                                    desc: "Requests are created manually and shared through emails or informal channels.",
                                    pains: ["Manual emails", "No official form"],
                                },
                                {
                                    title: "Analysis",
                                    desc: "Technicians process analyses without centralized tracking or real-time visibility.",
                                    pains: ["No traceability", "No status tracking"],
                                },
                                {
                                    title: "Reporting",
                                    desc: "Results are sent and archived manually, often via Microsoft Teams or email attachments.",
                                    pains: ["Email attachments", "Local archiving"],
                                },
                            ].map((s, i) => (
                                <div key={i} className="relative">

                                    {/* Connector ONLY md+ (bleu doux, cohérent thème) */}


                                    <div className="flex gap-4 items-start">

                                        {/* Dot avec ton gradient bleu */}


                                        {/* Card */}
                                        <div className="w-full rounded-2xl ml-2 dark:bg-darkContainer
                              border border-ultralightGray dark:border-darkBorder 
                              p-4 transition-shadow duration-300
                              hover:shadow-md hover:shadow-sky-500/10">
                                            <div className=" shrink-0 mt-1 h-8 w-8 rounded-full 
                              bg-lightPrimary dark:bg-darkBorder
                              absolute -top-5 -left-2 flex text-center items-center justify-center text-white dark:text-sky-200 
                              text-xs font-sfbold">
                                                {i + 1}
                                            </div>

                                            <h3 className="text-base md:text-lg font-sfbold text-lightPrimary dark:text-darkPrimary">
                                                {s.title}
                                            </h3>

                                            <p className="mt-1 text-sm md:text-base text-lightSecondary dark:text-darkSecondary font-sfregular leading-relaxed">
                                                {s.desc}
                                            </p>

                                            {/* Pain tags (garde le rose pour pain point) */}
                                            <div className="mt-3 flex flex-row gap-2">
                                                {s.pains.map((p, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="text-[10px] md:text-xs text-center px-2 py-1 rounded-full font-sfmedium
                                 bg-rose-500/10 text-rose-700 dark:text-rose-300
                                 border border-rose-500/20"
                                                    >
                                                        {p}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <p className="text-justify">

                During early discussions between GPI and my R&D team at SGR Provence, the need became clear, leading to the creation of
                a strict specifications document I had to follow from day one :
            </p >

            <div className="w-full mt-10">
                {/* Wrapper for horizontal scroll on mobile */}
                <div className="overflow-x-auto">
                    <table className="min-w-full border-collapse rounded-3xl overflow-hidden">
                        <thead>
                            <tr className="bg-gradient-to-t from-sky-400 to-blue-600/80 text-left">
                                <th className="px-5 py-4 text-xs md:text-sm font-sfmedium text-white uppercase tracking-wide">
                                    ID
                                </th>
                                <th className="px-5 py-4 text-xs md:text-sm font-sfmedium text-white uppercase tracking-wide">
                                    Requirement
                                </th>
                                <th className="px-5 py-4 text-xs md:text-sm font-sfmedium text-white uppercase tracking-wide">
                                    Description
                                </th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-ultralightGray dark:divide-darkBorder ">

                            {/* 1 */}
                            <tr className="bg-lightContainer dark:bg-darkContainer hover:bg-zinc-200/50 dark:hover:bg-white/20 transition">
                                <td className="md:px-5 py-4 text-3xl font-ramidots text-sky-600 dark:text-sky-300 text-center">
                                    01
                                </td>
                                <td className="md:px-5 py-4 text-sm md:text-base font-sfbold text-lightPrimary dark:text-darkPrimary">
                                    Standard-only LIMS usage
                                </td>
                                <td className="md:px-5 py-4 text-sm md:text-base text-lightSecondary dark:text-darkSecondary">
                                    The solution must rely exclusively on native Sample Manager features, ensuring long-term stability.
                                </td>
                            </tr>

                            {/* 2 */}
                            <tr className="bg-lightContainer dark:bg-darkContainer hover:bg-zinc-200/50 dark:hover:bg-white/20 transition">
                                <td className="md:px-5 py-4 text-3xl font-ramidots text-sky-600 dark:text-sky-300 text-center">
                                    02
                                </td>
                                <td className="md:px-5 py-4 text-sm md:text-base font-sfbold text-lightPrimary dark:text-darkPrimary">
                                    Reuse existing customizations
                                </td>
                                <td className="md:px-5 py-4 text-sm md:text-base text-lightSecondary dark:text-darkSecondary">
                                    Only existing, validated SG custom modules can be reused. No new development allowed.
                                </td>
                            </tr>

                            {/* 3 */}
                            <tr className="bg-lightContainer dark:bg-darkContainer hover:bg-zinc-200/50 dark:hover:bg-white/20 transition">
                                <td className="md:px-5 py-4 text-3xl font-ramidots text-sky-600 dark:text-sky-300 text-center">
                                    03
                                </td>
                                <td className="md:px-5 py-4 text-sm md:text-base font-sfbold text-lightPrimary dark:text-darkPrimary">
                                    Limited scope
                                </td>
                                <td className="md:px-5 py-4 text-sm md:text-base text-lightSecondary dark:text-darkSecondary">
                                    Integration restricted to 3 representative analyses to keep the first version focused and manageable.
                                </td>
                            </tr>

                            {/* 4 */}
                            <tr className="bg-lightContainer dark:bg-darkContainer hover:bg-zinc-200/50 dark:hover:bg-white/20 transition">
                                <td className="md:px-5 py-4 text-3xl font-ramidots text-sky-600 dark:text-sky-300 text-center">
                                    04
                                </td>
                                <td className="md:px-5 py-4 text-sm md:text-base font-sfbold text-lightPrimary dark:text-darkPrimary">
                                    POC + 1-month testing
                                </td>
                                <td className="md:px-5 py-4 text-sm md:text-base text-lightSecondary dark:text-darkSecondary">
                                    A functional POC must be delivered quickly and tested by real users for one full month.
                                </td>
                            </tr>

                            {/* 5 */}
                            <tr className="bg-lightContainer dark:bg-darkContainer hover:bg-zinc-200/50 dark:hover:bg-white/20 transition">
                                <td className="md:px-5 py-4 text-3xl font-ramidots text-sky-600 dark:text-sky-300 text-center">
                                    05
                                </td>
                                <td className="md:px-5 py-4 text-sm md:text-base font-sfbold text-lightPrimary dark:text-darkPrimary">
                                    Replicable system
                                </td>
                                <td className="md:px-5 py-4 text-sm md:text-base text-lightSecondary dark:text-darkSecondary">
                                    The entire setup must be documented and designed for duplication across other Saint-Gobain entities.
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>

            <p className="mt-16 text-justify">
                So basically the idea was to work on a solution that would address the specific pain points of the GPI laboratories while adhering
                to these strict constraints. After a big step of analysis of the existing process with GPI stakeholders,
                key areas got identified for improvement, leading to the definition of clear before-and-after scenarios.
            </p>




            <section className="my-12 md:my-16">
                {/* Title */}
                {/* <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-xl md:text-3xl font-sfbold bg-gradient-to-tr from-sky-400 to-blue-600 bg-clip-text text-transparent">
                        From Lab Pain Points to a Connected Workflow
                    </h2>
                    <p className="mt-3 text-sm md:text-base text-lightSecondary dark:text-darkSecondary font-sfregular leading-relaxed">
                        The kickoff meeting with GPI revealed concrete operational friction in the
                        existing laboratory process. These issues directly shaped the project’s
                        priorities and solution design.
                    </p>
                </div> */}

                {/* Before / After grid */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-6 items-stretch max-w-6xl mx-auto">

                    {/* BEFORE */}
                    <div className="rounded-3xl border border-ultralightGray dark:border-darkBorder bg-lightBG dark:bg-darkContainer p-5 md:p-6 shadow-sm">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-xs md:text-sm font-sfmedium uppercase tracking-widest text-lightSecondary dark:text-darkSecondary">
                                Before
                            </span>
                            {/* <span className="h-2 w-2 rounded-full bg-amber-400" /> */}
                        </div>

                        <ul className="space-y-3 text-sm md:text-base text-lightPrimary dark:text-darkPrimary font-sfregular">
                            {[
                                "Lack of harmonization between engineers and technicians on the official process",
                                "Communication not automated, causing delays and information gaps",
                                "No official procedure to reopen an Analysis Request (DAT)",
                                "No global view of laboratory activity",
                                "Limited visibility on DAT progress and status",
                                "Reports manually archived on SharePoint",
                                "Manual, long, repetitive request workflow",
                            ].map((item, i) => (
                                <li key={i} className="flex gap-3">
                                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500 shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Middle arrow (hidden on mobile, shown on lg) */}
                    <div className="flex items-center justify-center px-2 rotate-90 md:rotate-0">
                        <div className="h-12 w-12 rounded-full bg-gradient-to-tr from-sky-400 to-blue-600 grid place-items-center shadow-md">
                            <svg
                                width="22"
                                height="22"
                                viewBox="0 0 24 24"
                                fill="none"
                                className="stroke-white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M5 12h14" />
                                <path d="M13 5l7 7-7 7" />
                            </svg>
                        </div>
                    </div>

                    <div className="relative h-full rounded-3xl dark:bg-darkContainer border border-ultralightGray dark:border-darkBorder 
    backdrop-blur-lg p-5 md:p-6 hover:shadow-[0_20px_70px_rgba(59,130,246,0.35)] dark:hover:shadow-[0_20px_70px_rgba(59,130,246,0.25)] overflow-hidden duration-300">

                        {/* Header */}
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-xs md:text-sm font-sfmedium uppercase tracking-widest 
        text-lightSecondary dark:text-darkSecondary">
                                After (Target)
                            </span>
                        </div>

                        {/* List */}
                        <ul className="space-y-3 text-sm md:text-base text-lightPrimary dark:text-darkPrimary font-sfregular">
                            {[
                                "Standardized and unified workflow inside Sample Manager",
                                "Automated notifications and clearer communication loop",
                                "Official, controlled DAT reopening process",
                                "Centralized overview of lab activity",
                                "End-to-end traceability of DAT status and progress",
                                "Structured reporting integrated in the LIMS & SharePoint archiving",
                                "Faster, less repetitive request handling through guided flows",
                            ].map((item, i) => (
                                <li key={i} className="flex gap-3">
                                    <span className="mt-1 h-1.5 w-1.5 rounded-full 
            bg-gradient-to-t from-sky-400 to-blue-600 
            dark:from-sky-300 dark:to-blue-500 shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
            <p className="text-justify">
                The next step was to translate these insights into a concrete solution within the defined constraints. By leveraging existing
                LIMS features and custom modules, I was able to design a tailored workflow that addressed the specific needs of GPI laboratories.
                <br /><br />
                Basically all the GPI's needs was technically feasible within the defined constraints a part from one point : The sharepoint archivement.
                technically it was not a problem to implement this functionnality, but from a security point of view it wasn't as easy as it seemed.
                <br />
                After several discussions with Saint-Gobain's cybersecurity and IT teams, I got informed that integrating SharePoint with the LIMS system
                would introduce potential vulnerabilities as it would require to link to different protected systems.
                Therefore, to comply with Saint-Gobain's stringent security policies, I had to find an alternative solution that would maintain data security.
                <br /><br />
            </p>
            <div>

                <motion.div
                    initial={{ opacity: 0, y: 20, rotate: -3 }}
                    whileInView={{ opacity: 1, y: 0, rotate: -3 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="absolute flex-col items-center z-50 hidden md:flex">

                    <p className=" text-gray-400 text-base text-center  font-handwriting opacity-80 pr-1 mb-4">
                        1rst protected environment
                    </p>
                    <svg
                        className="w-10 h-6 text-gray-400 opacity-70 -rotate-90"
                        viewBox="0 0 220 50"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                    >
                        <path d="M21.489 29.4305C36.9333 31.3498 51.3198 33.0559 65.7063 34.9753C66.7641 35.1885 67.6104 36.4681 69.9376 38.3875C63.1675 39.2406 57.8783 40.3069 52.5892 40.5201C38.6259 40.9467 24.8741 40.9467 10.9107 40.9467C9.21821 40.9467 7.5257 41.1599 5.83317 40.7334C0.332466 39.6671 -1.57164 36.0416 1.39028 31.1365C2.87124 28.7906 4.56377 26.658 6.46786 24.7386C13.6611 17.4876 21.0659 10.4499 28.4707 3.41224C29.7401 2.13265 31.6442 1.49285 34.183 0C34.6061 10.8765 23.8162 13.8622 21.489 22.3927C23.3931 21.9662 25.0856 21.7529 26.5666 21.3264C83.6894 5.54486 140.601 7.25099 197.3 22.606C203.224 24.0988 208.936 26.4447 214.649 28.5773C217.61 29.6437 220.149 31.9896 218.457 35.6151C216.976 39.2406 214.014 39.2406 210.629 37.7477C172.759 20.6866 132.561 18.7672 91.9404 19.407C70.7838 19.6203 50.0504 21.9662 29.5285 26.8713C26.9897 27.5111 24.4509 28.3641 21.489 29.4305Z" />
                    </svg>
                </motion.div>
                <img src={SharepointAcrhitecture} alt="Saint-Gobain Connected Labs Sharepoint Architecture" className="mx-auto" />
            </div>





        </div>
    );
};

