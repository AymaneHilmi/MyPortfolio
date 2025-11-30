import React, { useEffect, useState, useMemo } from "react";
import FadeIn from "../components/FadeIn";
import LIMSmobility from "@/assets/LIMSmobility.png";
import { Github, } from "lucide-react";
import { NumberTicker } from "../components/ui/NumberTicker";
import SaintGobainMap from "../components/ui/SaintGobainMap";
import { AnimatedBeamDemo } from "../components/ui/animatedbeam";
import { motion } from "framer-motion";
import SharepointAcrhitecture from "@/assets/ConnectedlabSharepointArchitecture.png";
import { ArcherContainer, ArcherElement } from "react-archer";
import userExample from "@/assets/fiche utilisateur.png";


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
                    <text className="text-transparent bg-clip-text bg-gradient-to-tr from-sky-400 to-blue-600 font-sfbold">Saint-Gobain Research Provence </text> (located in France, Cavaillon) and <text className="text-transparent bg-clip-text bg-gradient-to-tr from-sky-400 to-blue-600 font-sfbold">Saint-Gobain Research Germany</text> (located in Herzogenrath, Germany).
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
                Basically all the GPI's needs was technically doable within the defined constraints a part from one point : the sharepoint archivement.
                technically it was not a problem to implement this functionnality, but from a cybersecurity point of view it wasn't as easy as it seemed.
                <br />
                After several discussions with Saint-Gobain's cybersecurity and IT teams, I got informed that integrating SharePoint with the LIMS system
                would require a main azure service Account with broad access permissions to handle data transfers between the two systems.
                Therefore, to implement this new architecture, it was necessary to open a <a className="underline"> Project Security
                    Assessment Tool ticket (PSAT) </a> to the cybersecurity office for validation and approval.
                This process involved a thorough review of the proposed integration plan, including security assessments and compliance checks,
                to ensure that all data exchanges between SharePoint and the LIMS adhered to Saint-Gobain's stringent security policies.
                <br />
                <br />
                Given the very short timeline of the project and the complexity of obtaining the necessary approvals,
                it was decided to postpone the SharePoint integration to a later improvement phase during the general
                deployment. Due to the response time from the IT department, the mobilization of the necessary teams,
                and the configuration requirements for the service account, meeting the initial deadline would have
                been impossible.
                <br /><br />
            </p>

            <div className="relative w-full flex justify-center my-4">
                {/* Right-side annotation */}
                <motion.div
                    initial={{ opacity: 0, y: 20, rotate: -3 }}
                    whileInView={{ opacity: 1, y: 0, rotate: -3 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="absolute -left-32 top-0 hidden lg:flex flex-col items-end z-50"
                >
                    <p className="text-gray-400 text-base text-center font-handwriting opacity-80 pr-1 mb-4 ">
                        1rst protected environment
                    </p>
                    <svg
                        className="w-10 h-6 text-gray-400 opacity-70 rotate-[-140deg]"
                        viewBox="0 0 220 50"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                    >
                        <path d="M21.489 29.4305C36.9333 31.3498 51.3198 33.0559 65.7063 34.9753C66.7641 35.1885 67.6104 36.4681 69.9376 38.3875C63.1675 39.2406 57.8783 40.3069 52.5892 40.5201C38.6259 40.9467 24.8741 40.9467 10.9107 40.9467C9.21821 40.9467 7.5257 41.1599 5.83317 40.7334C0.332466 39.6671 -1.57164 36.0416 1.39028 31.1365C2.87124 28.7906 4.56377 26.658 6.46786 24.7386C13.6611 17.4876 21.0659 10.4499 28.4707 3.41224C29.7401 2.13265 31.6442 1.49285 34.183 0C34.6061 10.8765 23.8162 13.8622 21.489 22.3927C23.3931 21.9662 25.0856 21.7529 26.5666 21.3264C83.6894 5.54486 140.601 7.25099 197.3 22.606C203.224 24.0988 208.936 26.4447 214.649 28.5773C217.61 29.6437 220.149 31.9896 218.457 35.6151C216.976 39.2406 214.014 39.2406 210.629 37.7477C172.759 20.6866 132.561 18.7672 91.9404 19.407C70.7838 19.6203 50.0504 21.9662 29.5285 26.8713C26.9897 27.5111 24.4509 28.3641 21.489 29.4305Z" />
                    </svg>
                </motion.div>

                {/* Architecture image */}
                <img
                    src={SharepointAcrhitecture}
                    alt="Saint-Gobain Connected Labs Sharepoint Architecture"
                    className="mx-auto w-full max-w-4xl"
                />

                <motion.div
                    initial={{ opacity: 0, y: 20, rotate: -3 }}
                    whileInView={{ opacity: 1, y: 0, rotate: -3 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="absolute -left-32 bottom-0 hidden lg:flex flex-col items-end z-50"
                >
                    <svg
                        className="w-10 h-6 text-gray-400 opacity-70 scale-x-[-1] rotate-[-30deg]"
                        viewBox="0 0 220 50"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                    >
                        <path d="M21.489 29.4305C36.9333 31.3498 51.3198 33.0559 65.7063 34.9753C66.7641 35.1885 67.6104 36.4681 69.9376 38.3875C63.1675 39.2406 57.8783 40.3069 52.5892 40.5201C38.6259 40.9467 24.8741 40.9467 10.9107 40.9467C9.21821 40.9467 7.5257 41.1599 5.83317 40.7334C0.332466 39.6671 -1.57164 36.0416 1.39028 31.1365C2.87124 28.7906 4.56377 26.658 6.46786 24.7386C13.6611 17.4876 21.0659 10.4499 28.4707 3.41224C29.7401 2.13265 31.6442 1.49285 34.183 0C34.6061 10.8765 23.8162 13.8622 21.489 22.3927C23.3931 21.9662 25.0856 21.7529 26.5666 21.3264C83.6894 5.54486 140.601 7.25099 197.3 22.606C203.224 24.0988 208.936 26.4447 214.649 28.5773C217.61 29.6437 220.149 31.9896 218.457 35.6151C216.976 39.2406 214.014 39.2406 210.629 37.7477C172.759 20.6866 132.561 18.7672 91.9404 19.407C70.7838 19.6203 50.0504 21.9662 29.5285 26.8713C26.9897 27.5111 24.4509 28.3641 21.489 29.4305Z" />
                    </svg>
                    <p className="text-gray-400 text-base text-center font-handwriting opacity-80 pr-1 mt-4 ">
                        2nd protected environment
                    </p>
                </motion.div>
            </div>

            <p className="text-justify mt-12">
                As respresented above, we agreed with GPI on an alternative solution that would be just as effective.
                This approach consists of archiving the reports directly on their local server.

                Since the existing architecture already connects Sample Manager to the eight research
                centers worldwide (via an existing PSAT), the only requirement was to open the necessary ports on the server side and GPI side.
            </p>

            <p className="text-[10px] uppercase tracking-[0.25em] text-lightPrimary dark:text-darkPrimary font-sfregular mt-8 mb-4">
                Technical implementation
            </p>

            <div className="mt-4 rounded-2xl border border-amber-300/60 dark:border-amber-400/60 bg-amber-50/70 dark:bg-amber-500/5 px-4 py-3 md:px-5 md:py-4 flex gap-3 items-start">
                {/* Warning / confidentiality icon */}
                <div className="mt-0.5">
                    <svg
                        className="w-5 h-5 text-amber-500 dark:text-amber-400"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                        <line x1="12" y1="9" x2="12" y2="13" />
                        <line x1="12" y1="17" x2="12.01" y2="17" />
                    </svg>
                </div>

                <p className="text-justify text-sm md:text-base text-lightPrimary dark:text-darkPrimary font-sfregular">
                    Due to confidentiality reasons with Saint-Gobain, I cannot share all the technical details of the implementation. However, I can
                    provide an overview of the key components and steps involved in the integration process.
                </p>
            </div>

            <p className="text-justify mt-6">
                Having now a clear understanding of the requirements and constraints, I proceeded to design the new workflow within Sample Manager.
                This involved configuring the system to handle analysis requests, track progress, and manage reporting in line with GPI's needs.
                By leveraging existing custom modules and native LIMS features, I was able to create a streamlined process that improved efficiency
                and traceability while adhering to the project's strict guidelines.
            </p>


            {/* ///////////////////////////////////////////////////////////////////////// */}
            <section className="mt-6">
                <div className="rounded-2xl border border-ultralightGray dark:border-darkBorder bg-lightBG dark:bg-darkContainer px-4 py-4 md:px-5 md:py-4">
                    <p className="text-[10px] uppercase tracking-[0.25em] text-lightPrimary dark:text-darkPrimary font-sfregular mb-4">
                        Static data configuration
                    </p>

                    <ol className="mt-3 space-y-2 text-sm md:text-[15px] text-lightPrimary dark:text-darkPrimary font-sfregular">
                        {/* ///////////////////////////////////   1     ////////////////////////////////////// */}

                        <li className="flex flex-col gap-1">
                            {/* Ligne principale */}
                            <div className="flex gap-2 items-start md:items-center">
                                <div className="h-6 w-6 rounded-lg bg-gradient-to-tr from-sky-400 to-blue-600 
        flex items-center justify-center text-white text-xs font-sfbold flex-shrink-0">
                                    <span className="text-[11px] mt-[2px] font-sfbold">01</span>
                                </div>

                                <span className="text-lightPrimary dark:text-darkPrimary">
                                    Implementation of <span className="font-sfbold">Groups </span>
                                    to manage data confidentiality within GPI.
                                </span>
                            </div>

                            {/* Mini description */}
                            <p className="md:ml-8 text-xs md:text-sm text-lightSecondary dark:text-darkSecondary">
                                Users only see data that belongs to the group they are assigned to.
                                For example, a user assigned to the <span className="font-sfmedium italic">GPI</span> group only has access
                                to analyses, samples, and jobs linked to the same GPI Group, nothing else.
                            </p>


                            {/* Group rectangles */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-4 md:ml-8">
                                {/* GPI Group (visible) */}
                                <div className="rounded-xl border border-sky-400/70 dark:border-sky-300/70 bg-sky-500/5 dark:bg-sky-900/30 p-3">
                                    <p className="text-xs md:text-sm font-sfmedium text-lightPrimary dark:text-darkPrimary mb-2">
                                        GPI Group <span className="text-[10px] md:text-xs text-sky-400 font-normal">(visible)</span>
                                    </p>
                                    <div className="flex flex-wrap gap-1.5 text-[10px] md:text-xs items-end">
                                        <span className="px-2 py-0.5 rounded-lg bg-gradient-to-tr from-sky-400/20 to-blue-600/20 dark:bg-darkContainer">
                                            GPI Samples
                                        </span>
                                        <span className="px-2 py-0.5 rounded-lg bg-gradient-to-tr from-sky-400/20 to-blue-600/20 dark:bg-darkContainer">
                                            GPI Jobs
                                        </span>
                                        <span className="px-2 py-0.5 rounded-lg bg-gradient-to-tr from-sky-400/20 to-blue-600/20 dark:bg-darkContainer">
                                            GPI Results
                                        </span>
                                        <span className="flex items-end text-lightSecondary">
                                            etc.
                                        </span>

                                    </div>
                                </div>

                                {/* Other group 1 (not visible) */}
                                <div className="rounded-xl border border-ultralightGray dark:border-darkBorder border-dashed p-3 opacity-60">
                                    <p className="text-xs md:text-sm font-sfmedium text-lightPrimary dark:text-darkPrimary mb-2">
                                        Other SG Group <span className="text-[10px] md:text-xs text-lightSecondary dark:text-darkSecondary font-normal">(not visible)</span>
                                    </p>
                                    <div className="flex flex-wrap gap-1.5 text-[10px] md:text-xs">
                                        <span className="px-2 py-0.5 rounded-full bg-lightBG/70 dark:bg-darkContainer/70">
                                            Other Samples
                                        </span>
                                        <span className="px-2 py-0.5 rounded-full bg-lightBG/70 dark:bg-darkContainer/70">
                                            Other Jobs
                                        </span>
                                    </div>
                                </div>

                                {/* Other group 2 (not visible) */}
                                <div className="rounded-xl border border-ultralightGray dark:border-darkBorder border-dashed p-3 opacity-60">
                                    <p className="text-xs md:text-sm font-sfmedium text-lightPrimary dark:text-darkPrimary mb-2">
                                        External Group <span className="text-[10px] md:text-xs text-lightSecondary dark:text-darkSecondary font-normal">(not visible)</span>
                                    </p>
                                    <div className="flex flex-wrap gap-1.5 text-[10px] md:text-xs">
                                        <span className="px-2 py-0.5 rounded-full bg-lightBG/70 dark:bg-darkContainer/70">
                                            External Samples
                                        </span>
                                        <span className="px-2 py-0.5 rounded-full bg-lightBG/70 dark:bg-darkContainer/70">
                                            External Jobs
                                        </span>
                                    </div>
                                </div>
                            </div>



                        </li>

                        {/* ///////////////////////////////////   2     ////////////////////////////////////// */}


                        <li className="flex flex-col gap-2">
                            {/* Ligne principale */}
                            <div className="flex gap-2 items-start md:items-center">
                                <div className="h-6 w-6 rounded-lg bg-gradient-to-tr from-sky-400 to-blue-600 flex items-center justify-center text-white text-xs font-sfbold flex-shrink-0">
                                    <span className="text-[11px] mt-[2px] font-sfbold">02</span>
                                </div>

                                <span className="text-lightPrimary dark:text-darkPrimary">
                                    Definition of data templates for <span className="font-sfbold italic">Sample </span>
                                    and <span className="font-sfbold italic">Job </span> entities.
                                </span>
                            </div>

                            {/* Mini description */}
                            <p className="md:ml-8 text-xs md:text-sm text-lightSecondary dark:text-darkSecondary">
                                Templates define the structure of laboratory data inside the LIMS.
                                Each <span className="italic font-sfmedium">Job</span> and <span className="italic font-sfmedium">Sample</span> follows a predefined schema
                                (fields & relationships) as shown below. Each Job can be linked to multiple Samples, but each Sample is linked to only one Job. same logic
                                applies for Samples and Tests.
                            </p>

                            <div className="my-6 w-full md:pl-8">
                                {/* Desktop layout */}
                                <div className="hidden md:flex items-center justify-between gap-4 w-full">
                                    {/* JOB */}
                                    <div className="px-4 py-2 rounded-xl bg-gradient-to-tr from-sky-400 to-blue-600 text-white font-sfbold text-sm whitespace-nowrap text-center">
                                        JOB
                                    </div>

                                    {/* Line + cardinalities */}
                                    <div className="flex flex-1 items-center">
                                        <span className="text-xs text-lightPrimary dark:text-darkPrimary mr-2">1</span>
                                        <div className="flex-1 h-[2px] bg-gradient-to-r from-sky-400 to-blue-600" />
                                        <span className="text-xs text-lightPrimary dark:text-darkPrimary ml-2">n</span>
                                    </div>

                                    {/* SAMPLE */}
                                    <div className="px-4 py-2 rounded-xl bg-gradient-to-tr from-sky-400 to-blue-600 text-white font-sfbold text-sm whitespace-nowrap text-center">
                                        SAMPLE
                                    </div>

                                    {/* Line + cardinalities */}
                                    <div className="flex flex-1 items-center">
                                        <span className="text-xs text-lightPrimary dark:text-darkPrimary mr-2">1</span>
                                        <div className="flex-1 h-[2px] bg-gradient-to-r from-blue-600 to-sky-400" />
                                        <span className="text-xs text-lightPrimary dark:text-darkPrimary ml-2">n</span>
                                    </div>

                                    {/* TEST */}
                                    <div className="px-4 py-2 rounded-xl bg-gradient-to-tr from-sky-400 to-blue-600 text-white font-sfbold text-sm whitespace-nowrap text-center">
                                        TEST
                                    </div>
                                </div>

                                {/* Mobile layout */}
                                <div className="flex flex-col md:hidden items-center gap-3 w-full">
                                    {/* JOB */}
                                    <div className="w-full text-center px-4 py-2 rounded-xl bg-gradient-to-tr from-sky-400 to-blue-600 text-white font-sfbold text-sm">
                                        JOB (Request)
                                    </div>

                                    <div className="flex flex-col items-center gap-1 w-full">
                                        <span className="text-[10px] text-lightPrimary dark:text-darkPrimary">1 → n</span>
                                        <div className="w-12 h-[2px] bg-gradient-to-r from-sky-400 to-blue-600" />
                                    </div>

                                    {/* SAMPLE */}
                                    <div className="w-full text-center px-4 py-2 rounded-xl bg-gradient-to-tr from-sky-400 to-blue-600 text-white font-sfbold text-sm">
                                        SAMPLE
                                    </div>

                                    <div className="flex flex-col items-center gap-1 w-full">
                                        <span className="text-[10px] text-lightPrimary dark:text-darkPrimary">1 → n</span>
                                        <div className="w-12 h-[2px] bg-gradient-to-r from-sky-400 to-blue-600" />
                                    </div>

                                    {/* TEST */}
                                    <div className="w-full text-center px-4 py-2 rounded-xl bg-gradient-to-tr from-sky-400 to-blue-600 text-white font-sfbold text-sm">
                                        TEST (Analysis)
                                    </div>
                                </div>
                            </div>
                            <p className="md:ml-8 text-xs md:text-sm text-lightSecondary dark:text-darkSecondary">
                                So basically this part was about creating differents static templates for the jobs and samples entities.
                                Each template includes a form with specific fields and relationships to ensure that all necessary information is captured accurately.
                                This structured approach allows for better data management and retrieval within the LIMS. The fields was chosen with GPI stakeholders
                                to make sure they align with their operational needs and reporting requirements.
                            </p>

                            <p className="md:ml-8 text-xs md:text-sm text-lightSecondary dark:text-darkSecondary">
                                The next step is to set up workflows that will create instances of these static templates with a unique ID. These are called Job Login and
                                Sample Login in SM. basically when a user creates a new Job Login, they will fill out a form based on the predefined Job template.
                                Similarly, when they create a Sample Login, it will be based on the Sample template. Thanks to this architecture from one Job ID
                                we can retrieve all the linked samples and analysis results.
                            </p>

                            <div className="my-4 w-full md:pl-8">

                                {/* Desktop layout */}
                                <div className="hidden md:flex items-center justify-between gap-4 w-full">
                                    {/* Job template */}
                                    <div className="px-4 py-3 rounded-xl bg-lightContainer dark:bg-[#262626] border border-ultralightGray dark:border-darkBorder min-w-[180px]">
                                        <p className="text-xs font-sfmedium text-lightSecondary dark:text-darkSecondary uppercase tracking-wide mb-1">
                                            Static configuration
                                        </p>
                                        <p className="text-sm font-sfbold text-lightPrimary dark:text-darkPrimary">
                                            Job/Sample template
                                        </p>
                                        <p className="mt-1 text-xs text-lightSecondary dark:text-darkSecondary">
                                            Fields, structure and rules defined once.
                                        </p>
                                    </div>

                                    {/* Job login action */}
                                    <div className="flex flex-col items-center gap-2">
                                        <div className="flex items-center gap-2">
                                            <svg
                                                className="w-5 h-5 text-sky-500"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M5 12h14" />
                                                <path d="M13 5l7 7-7 7" />
                                            </svg>
                                            <div className="px-3 py-1.5 rounded-full bg-gradient-to-tr from-sky-400 to-blue-600 text-white text-xs font-sfmedium whitespace-nowrap" >
                                                Job login
                                            </div>
                                            <svg
                                                className="w-5 h-5 text-sky-500"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M5 12h14" />
                                                <path d="M13 5l7 7-7 7" />
                                            </svg>
                                        </div>

                                        <span className="text-[11px] text-lightSecondary dark:text-darkSecondary text-center max-w-[140px]">
                                            Creates a new job instance based on the template.
                                        </span>
                                    </div>

                                    {/* Job instance */}
                                    <div className="px-4 py-3 rounded-xl bg-lightContainer dark:bg-[#262626] border border-ultralightGray dark:border-darkBorder min-w-[150px] ">
                                        <p className="text-xs font-sfmedium text-lightSecondary dark:text-darkSecondary uppercase tracking-wide mb-1">
                                            Job instance
                                        </p>
                                        <p className="text-sm font-sfbold text-lightPrimary dark:text-darkPrimary">
                                            #JOB-0001
                                        </p>
                                        <p className="mt-1 text-xs text-lightSecondary dark:text-darkSecondary">
                                            One unique job created for a specific request.
                                        </p>
                                    </div>

                                    {/* Sample login action */}
                                    <div className="flex flex-col items-center gap-2">
                                        <div className="flex items-center gap-2">
                                            <svg
                                                className="w-5 h-5 text-sky-500"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M5 12h14" />
                                                <path d="M13 5l7 7-7 7" />
                                            </svg>

                                            <div className="px-3 py-1.5 rounded-full bg-gradient-to-tr from-sky-400 to-blue-600 text-white text-xs font-sfmedium whitespace-nowrap ">
                                                Sample login
                                            </div>
                                            <svg
                                                className="w-5 h-5 text-sky-500"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M5 12h14" />
                                                <path d="M13 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                        <span className="text-[11px] text-lightSecondary dark:text-darkSecondary text-center max-w-[140px]">
                                            Creates samples linked to that job.
                                        </span>
                                    </div>

                                    {/* Sample instances */}
                                    <div className="px-4 py-3 rounded-xl bg-lightContainer dark:bg-[#262626] border border-ultralightGray dark:border-darkBorder min-w-[210px]">
                                        <p className="text-xs font-sfmedium text-lightSecondary dark:text-darkSecondary uppercase tracking-wide mb-1">
                                            Sample instances
                                        </p>
                                        <p className="text-sm font-sfbold text-lightPrimary dark:text-darkPrimary whitespace-nowrap">
                                            #SMP-0001, #SMP-0002,...
                                        </p>
                                        <p className="mt-1 text-xs text-lightSecondary dark:text-darkSecondary">
                                            One job instance can generate multiple samples.
                                        </p>
                                    </div>
                                </div>

                                {/* Mobile layout */}
                                <div className="flex flex-col md:hidden items-stretch gap-4 w-full mt-2">
                                    {/* Job template */}
                                    <div className="w-full px-4 py-3 rounded-xl bg-lightContainer dark:bg-[#262626] border border-ultralightGray dark:border-darkBorder">
                                        <p className="text-[11px] font-sfmedium text-lightSecondary dark:text-darkSecondary uppercase tracking-wide mb-1">
                                            Static configuration
                                        </p>
                                        <p className="text-sm font-sfbold text-lightPrimary dark:text-darkPrimary">
                                            Job template
                                        </p>
                                        <p className="mt-1 text-xs text-lightSecondary dark:text-darkSecondary">
                                            Fields, structure and rules defined once.
                                        </p>
                                    </div>

                                    {/* Vertical arrow + Job login */}
                                    <div className="flex flex-col items-center gap-1">
                                        <svg
                                            className="w-4 h-4 text-sky-500"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M12 5v14" />
                                            <path d="M5 13l7 7 7-7" />
                                        </svg>
                                        <div className="px-3 py-1 rounded-full bg-gradient-to-tr from-sky-400 to-blue-600 text-white text-[11px] font-sfmedium">
                                            Job login
                                        </div>
                                        <span className="text-[11px] text-lightSecondary dark:text-darkSecondary text-center">
                                            Creates a new job instance based on the template.
                                        </span>
                                        <svg
                                            className="w-4 h-4 text-sky-500"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M12 5v14" />
                                            <path d="M5 13l7 7 7-7" />
                                        </svg>
                                    </div>

                                    {/* Job instance */}
                                    <div className="w-full px-4 py-3 rounded-xl bg-lightContainer dark:bg-[#262626] border border-ultralightGray dark:border-darkBorder">
                                        <p className="text-[11px] font-sfmedium text-lightSecondary dark:text-darkSecondary uppercase tracking-wide mb-1">
                                            Job instance
                                        </p>
                                        <p className="text-sm font-sfbold text-lightPrimary dark:text-darkPrimary">
                                            Job #JOB-000123
                                        </p>
                                        <p className="mt-1 text-xs text-lightSecondary dark:text-darkSecondary">
                                            A unique job created from the template.
                                        </p>
                                    </div>

                                    {/* Vertical arrow + Sample login */}
                                    <div className="flex flex-col items-center gap-1">
                                        <svg
                                            className="w-4 h-4 text-sky-500"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M12 5v14" />
                                            <path d="M5 13l7 7 7-7" />
                                        </svg>
                                        <div className="px-3 py-1 rounded-full bg-gradient-to-tr from-sky-400 to-blue-600 text-white text-[11px] font-sfmedium">
                                            Sample login
                                        </div>
                                        <span className="text-[11px] text-lightSecondary dark:text-darkSecondary text-center max-w-[140px]">
                                            Creates samples linked to that job.
                                        </span>
                                        <svg
                                            className="w-4 h-4 text-sky-500"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M12 5v14" />
                                            <path d="M5 13l7 7 7-7" />
                                        </svg>
                                    </div>

                                    {/* Sample instances */}
                                    <div className="w-full px-4 py-3 rounded-xl bg-lightContainer dark:bg-[#262626] border border-ultralightGray dark:border-darkBorder">
                                        <p className="text-[11px] font-sfmedium text-lightSecondary dark:text-darkSecondary uppercase tracking-wide mb-1">
                                            Sample instances
                                        </p>
                                        <p className="text-sm font-sfbold text-lightPrimary dark:text-darkPrimary">
                                            Sample #SMP-0001, #SMP-0002, …
                                        </p>
                                        <p className="mt-1 text-xs text-lightSecondary dark:text-darkSecondary">
                                            Linked to the same job instance.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </li>


                        {/* ///////////////////////////////////   3    ////////////////////////////////////// */}

                        <li className="flex flex-col gap-2">
                            {/* Ligne principale */}
                            <div className="flex gap-2 items-start md:items-center">
                                <div className="h-6 w-6 rounded-lg bg-gradient-to-tr from-sky-400 to-blue-600 flex items-center justify-center text-white text-xs font-sfbold flex-shrink-0">
                                    <span className="text-[11px] mt-[2px] font-sfbold">03</span>
                                </div>
                                <span>
                                    Creation of  the <span className="font-sfbold italic">analysis (versioned analysis)</span> and their associated tests.
                                </span>
                            </div>

                            {/* Mini description */}
                            <p className="md:ml-8 text-xs md:text-sm text-lightSecondary dark:text-darkSecondary text-justify">
                                Using the same logic as for <span className="italic font-sfmedium">Job</span> and <span className="italic font-sfmedium">Sample</span>,
                                each <span className="italic font-sfmedium">Sample</span> can be linked to several tests.
                                The static template that defines how an analysis should be performed is called a
                                <span className="italic font-sfmedium"> versioned analysis</span>, and each individual test result is a dynamic instance of that
                                <span className="italic font-sfmedium"> versioned analysis</span>. The only difference here is that versionned analysis contains
                                results filled by the lab instead of just data fields filled by the requester.
                            </p>


                        </li>

                        {/* ///////////////////////////////////   4     ////////////////////////////////////// */}

                        <li className="flex flex-col gap-2">
                            {/* Ligne principale */}
                            <div className="flex gap-2 items-start md:items-center">
                                <div className="h-6 w-6 rounded-lg bg-gradient-to-tr from-sky-400 to-blue-600 
            flex items-center justify-center text-white text-xs font-sfbold flex-shrink-0">
                                    <span className="text-[11px] mt-[2px] font-sfbold">04</span>
                                </div>

                                <span className="text-lightPrimary dark:text-darkPrimary">
                                    Integration of external data into <span className="font-sfbold">Project info</span> and
                                    <span className="font-sfbold"> Customers</span> tables.
                                </span>
                            </div>

                            {/* Mini description */}
                            <p className="md:ml-8 text-xs md:text-sm text-lightSecondary dark:text-darkSecondary text-justify">
                                This step consisted of importing project-related information (from
                                <span className="font-sfmedium"> Planisware</span>) as well as customer data directly
                                into Sample Manager’s database. Even though it may appear straightforward, the operation had to be performed manually:
                                each record in Sample Manager is structured and follows internal relationships,
                                meaning each record had to be created with respect to the other existing records.
                            </p>

                        </li>

                        {/* ///////////////////////////////////   5     ////////////////////////////////////// */}


                        <li className="flex flex-col gap-2">
                            {/* Ligne principale */}
                            <div className="flex gap-2 items-start md:items-center">
                                <div className="h-6 w-6 rounded-lg bg-gradient-to-tr from-sky-400 to-blue-600 
            flex items-center justify-center text-white text-xs font-sfbold flex-shrink-0">
                                    <span className="text-[11px] mt-[2px] font-sfbold">06</span>
                                </div>

                                <span className="text-lightPrimary dark:text-darkPrimary">
                                    Creation of user accounts for all GPI engineers and technicians.
                                </span>
                            </div>

                            {/* Mini description */}
                            <p className="md:ml-8 text-xs md:text-sm text-lightSecondary dark:text-darkSecondary">
                                Each user account had to be configured with the appropriate access rules. Every profile needed to be associated
                                with the <span className="font-sfmedium"> GPI Group</span> to ensure visibility on GPI-related data.

                                Additionally, users had to be differentiated based on their responsibilities:
                                <span className="font-sfmedium"> laboratory technicians</span> (who perform analyses)
                                versus <span className="font-sfmedium"> requesters / engineers</span> (who create and track analysis requests).
                                <br />
                                In the example below, you can see an example of a Sample Manager profile (in this example my profile), there are
                                8 pages to configure for each user. Groups page, role pages training page SG page etc.
                            </p>

                            <img src={userExample} alt="Job and Sample templates" className=" md:ml-8 mt-2 rounded-xl border border-gray-300" />
                        </li>
                    </ol>
                </div>
            </section >

            <p className="text-[10px] uppercase tracking-[0.25em] text-lightPrimary dark:text-darkPrimary font-sfregular mt-8 mb-4">
                Dynamic Data Configuration
            </p>

            {/* Ligne principale */}
            <div className="flex gap-2 items-start md:items-center text-sm md:text-[15px] text-lightPrimary dark:text-darkPrimary font-sfbold mb-4">
                <div className="h-6 w-6 rounded-lg bg-gradient-to-tr from-sky-400 to-blue-600 
            flex items-center justify-center text-white text-xs font-sfbold flex-shrink-0">
                    <span className="text-[11px] mt-[2px] font-sfbold">07</span>
                </div>

                <span className="text-lightPrimary dark:text-darkPrimary">
                    Workflows Lifecycle & Extended Lifecycle
                </span>
            </div>

            <p className=" text-xs md:text-sm text-lightPrimary dark:text-darkPrimary text-justify">
                The next step was to implement what Sample Manager calls an Extended LifeCycle, specifically designed for GPI and applied to both Job and Sample entities.
                As its name suggests, a LifeCycle is essentially a workflow that enforces predefined rules throughout the entire life of an entity, for example, a Job
                follows a sequence of states such as creation, validation, execution, and completion.
                <br />

                Sample Manager provides a standard LifeCycle out of the box for both job and sample, containing all native, built-in rules of the software.
                On top of this, the Extended LifeCycle, again, as its name implies, acts as an extension of the standard one, allowing us to add custom rules tailored
                to each laboratory’s operational needs. This is what makes the system highly flexible across all Saint-Gobain R&D centers.
            </p>
            <section className="my-6">
                {/* Schema */}
                <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4 md:gap-6 w-full">

                    {/* User layer */}
                    <div className="flex-1 rounded-2xl border border-ultralightGray dark:border-darkBorder bg-lightBG dark:bg-darkContainer overflow-hidden shadow-sm">
                        {/* Header */}
                        <div className="px-4 py-2 bg-gradient-to-r from-sky-400 to-blue-600 text-white text-xs md:text-[11px] font-sfmedium uppercase tracking-wide">
                            User layer
                        </div>
                        {/* Body */}
                        <div className="px-4 py-3 md:px-5 md:py-4 text-xs md:text-sm text-lightPrimary dark:text-darkPrimary font-sfregular">
                            Action performed in the Sample Manager interface
                            (for example: creating or accepting an analysis request).
                        </div>
                    </div>

                    <div className="flex items-center justify-center rotate-90 md:rotate-0">
                        <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-sky-400 to-blue-600 grid place-items-center shadow-md">
                            <svg
                                width="18"
                                height="18"
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

                    {/* Logic layer */}
                    <div className="flex-1 rounded-2xl border border-ultralightGray dark:border-darkBorder bg-lightBG dark:bg-darkContainer overflow-hidden shadow-sm">
                        {/* Header */}
                        <div className="px-4 py-2 bg-gradient-to-r from-blue-600 to-sky-400 text-white text-xs md:text-[11px] font-sfmedium uppercase tracking-wide">
                            Logic layer (LifeCycle)
                        </div>
                        {/* Body */}
                        <div className="px-4 py-3 md:px-5 md:py-4 text-xs md:text-sm text-lightPrimary dark:text-darkPrimary font-sfregular">
                            The LifeCycle and its triggers interpret the user action and apply
                            predefined rules (status changes, validations, workflow transitions, etc.).
                        </div>
                    </div>

                    <div className="flex items-center justify-center rotate-90 md:rotate-0">
                        <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-sky-400 to-blue-600 grid place-items-center shadow-md">
                            <svg
                                width="18"
                                height="18"
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



                    {/* Server / data layer */}
                    <div className="flex-1 rounded-2xl border border-ultralightGray dark:border-darkBorder bg-lightBG dark:bg-darkContainer overflow-hidden shadow-sm">
                        {/* Header */}
                        <div className="px-4 py-2 bg-gradient-to-r from-sky-500 to-blue-700 text-white text-xs md:text-[11px] font-sfmedium uppercase tracking-wide">
                            Server / data layer
                        </div>
                        {/* Body */}
                        <div className="px-4 py-3 md:px-5 md:py-4 text-xs md:text-sm text-lightPrimary dark:text-darkPrimary font-sfregular">
                            Automatic actions are executed on the database (for example: updating the
                            Job status to "Accepted" or sending an email with the new request details
                            ).
                        </div>
                    </div>
                </div>
            </section>
            <p className="md:mb-8 text-xs md:text-sm text-lightPrimary dark:text-darkPrimary text-justify">
                For instance, the automatic email notification triggered when a new analysis request is created was implemented through this mechanism.
                A custom rule was added to the Extended LifeCycle so that, upon Job creation, the system automatically sends an email containing all request details
                to the laboratory.
            </p>

            {/* Ligne principale */}
            <div className="flex gap-2 items-start md:items-center text-sm md:text-[15px] text-lightPrimary dark:text-darkPrimary font-sfbold mt-6 mb-2">
                <div className="h-6 w-6 rounded-lg bg-gradient-to-tr from-sky-400 to-blue-600 
            flex items-center justify-center text-white text-xs font-sfbold flex-shrink-0">
                    <span className="text-[11px] mt-[2px] font-sfbold">08</span>
                </div>

                <span className="text-lightPrimary dark:text-darkPrimary">
                    Modules and interfaces
                </span>
            </div>
            <p className="md:mb-8 text-xs md:text-sm text-lightPrimary dark:text-darkPrimary text-justify">
                The next phase focused on integrating the modules and user interfaces, essential components that allow users to access data and interact with the system.
                Three main modules were required: one for engineers, one for laboratory technicians, and another for local administrators.
                <br />
                <br />

                For the engineer module, after several discussions with Eduardo, we chose a simple and intuitive interface. The primary need was quick access to create analysis requests and an easy way to consult laboratory data.
                This interface was structured into three main sections:

                <ul>
                    <li className="list-disc list-inside mt-2">
                        <span className="font-sfbold">DAT Creation</span>: Allows users to create new analysis requests, with two actions: start a new DAT or add a sample to an existing one.
                    </li>
                    <li className="list-disc list-inside mt-2">
                        <span className="font-sfbold">DAT Management</span>: Provides visibility over ongoing or previously created requests, enabling engineers to track the status and progress of their DATs.
                    </li>
                    <li className="list-disc list-inside mt-2">
                        <span className="font-sfbold">Results</span>: Gives access to completed requests, allowing users to view their own finished DATs as well as all finalized requests within GPI.
                    </li>
                </ul>
            </p>








            <p className="text-[10px] text-center uppercase tracking-[0.25em] text-lightPrimary dark:text-darkPrimary font-sfregular mt-4 mb-4">
                the rest of the content is coming soon...
            </p>
        </div >
    );
};


