import React, { useEffect, useState, useMemo, useRef } from "react";
import FadeIn from "@/components/FadeIn";
import LIMSmobility from "@/assets/LIMSmobility.png";
import {
    MousePointerClick, ArrowDown, CheckCircle2, User, RefreshCw, Mail, XCircle, X, Check, Smartphone, Database, FileText,
    FlaskConical, Camera, Monitor, ClipboardCheck, QrCode, FolderUp, FilePlus2,
    PackageCheck,
    BriefcaseBusiness,
    ChevronLeft, ChevronRight
} from "lucide-react";

import { NumberTicker } from "@/components/ui/NumberTicker";
import SaintGobainMap from "@/components/ui/SaintGobainMap";
import { AnimatedBeamDemo } from "@/components/ui/animatedbeam";
import { motion } from "framer-motion";
import SharepointAcrhitecture from "@/assets/ConnectedlabSharepointArchitecture.png";
import { ArcherContainer, ArcherElement } from "react-archer";
import userExample from "@/assets/userExample.png";
import ExtendedLifecycleExample from "@/assets/ExtendedLifecycleExample.png";
import RequesterInterface from "@/assets/RequesterInterface.png";
import TechnicianInterface from "@/assets/TechnicianInterface.png";
import ReadOnlyConnection from "@/assets/ReadOnlyConnection.png";
import UserflowSGRG from "@/assets/UserflowSGRG.png";
import UserflowSGRP from "@/assets/UserflowSGRP.png";
import HomeInterface from "@/assets/HomeInterface.png";
import PhotoAttachment1 from "@/assets/PhotoAttachment1.png";
import PhotoAttachment2 from "@/assets/PhotoAttachment2.png";
import PhotoAttachment3 from "@/assets/PhotoAttachment3.png";
import PhotoAttachment4 from "@/assets/PhotoAttachment4.png";
import OfferForm1 from "@/assets/OfferForm1.png";
import OfferForm2 from "@/assets/OfferForm2.png";
import OfferForm3 from "@/assets/OfferForm3.png";
import OfferForm4 from "@/assets/OfferForm4.png";
import AcceptInterface1 from "@/assets/AcceptInterface1.png";
import AcceptInterface2 from "@/assets/AcceptInterface2.png";
import AcceptInterface3 from "@/assets/AcceptInterface3.png";
import MessageInteraction1 from "@/assets/MessageInteraction1.png";
import MessageInteraction2 from "@/assets/MessageInteraction2.png";
import MessageInteraction3 from "@/assets/MessageInteraction3.png";
import AuthorizationInterface1 from "@/assets/AuthorizationInterface1.png";
import AuthorizationInterface2 from "@/assets/AuthorizationInterface2.png";
import AuthorizationInterface3 from "@/assets/AuthorizationInterface3.png";

import WriteEnabledConnection from "@/assets/WriteEnabledConnection.png";
import FinalArchitecture from "@/assets/FinalArchitecture.png";
import AdminInterface from "@/assets/AdminInterface.png";
import { File, Folder, Tree } from "@/components/ui/file-tree"
import ScrollProgress from "../components/ui/ScrollProgress";
import { AnimatedBeamMultipleOutputDemo } from "../components/ui/animatedbeam";
import Iphone from "../components/ui/iphone";
import { IPhoneMockup } from "react-device-mockup";
import Masonry from "../components/ui/mansory";

export default function ConnectedLabsScreen() {
    // Sticky Back button state and refs
    const [showBackButton, setShowBackButton] = useState(false);
    const lastScrollPositionRef = useRef(null);
    const backButtonTimeoutRef = useRef(null);

    useEffect(() => {
        return () => {
            if (backButtonTimeoutRef.current) {
                clearTimeout(backButtonTimeoutRef.current);
            }
        };
    }, []);


    return (
        <div className="lg:mx-auto max-w-5xl px-6 text-sm md:text-sm lg:text-base font-sfregular overflow-hidden md:overflow-visible">
            <ScrollProgress />
            <section className="mx-auto py-12 md:py-16 md:mt-32 mt-12 flex justify-center items-center">
                {/* Sticky Back button */}
                {showBackButton && (
                    <button
                        type="button"
                        onClick={() => {
                            if (lastScrollPositionRef.current !== null) {
                                window.scrollTo({
                                    top: lastScrollPositionRef.current,
                                    behavior: "smooth",
                                });
                            }
                            setShowBackButton(false);
                        }}
                        className="fixed bottom-10 right-10 xl:bottom-12 xl:right-12 2xl:bottom-16 2xl:right-16 z-[999] flex items-center gap-2 px-4 py-2 rounded-full
                                    bg-lightBG dark:bg-darkContainer border border-ultralightGray dark:border-darkBorder shadow-lg backdrop-blur-sm text-lightPrimary
                                   dark:text-darkPrimary text-xs md:text-sm font-sfmedium hover:-translate-y-1 hover:shadow-xl transition-all duration-200 cursor-pointer">
                        <ArrowDown className="w-4 h-4" />
                        <span>Back</span>
                    </button>
                )}
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

                        <div className="text-justify">
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
            </section >

            {/* About section */}
            <section className="mx-auto py-8 md:py-12 flex justify-center items-center">
                <div className="max-w-5xl mx-auto text-center space-y-4">
                    <p className="text-[10px] uppercase tracking-[0.25em] text-lightPrimary dark:text-darkPrimary font-sfregular">
                        About
                    </p>

                    <h2 className="font-ramidots tracking-tight text-5xl md:text-6xl lg:text-6xl bg-gradient-to-tr from-sky-400 to-blue-600 bg-clip-text text-transparent">
                        Saint-Gobain
                    </h2>

                    <p className="text-justify ">
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
            </section>
            <FadeIn>
                <p className="text-[10px] uppercase tracking-[0.25em] text-LightPrimary dark:text-darkPrimary font-sfregular mb-4">
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

            <p id="sm-process-diagram" className="my-8 text-justify">
                Sample Manager is a progiciel, in other words a packaged software solution built to address a broad set of
                business needs through configurable features, rather than custom development. Unlike a bespoke application, a progiciel
                offers a robust and standardized core while remaining flexible enough to adapt to different laboratory processes.

                Within this, Sample Manager provides end-to-end management of analysis requests:
                from the moment a request is created, through sample reception, preparation, analysis execution, result entry, review, and finally closure (as shown below).
                Each step is tracked, controlled, and automated through built-in workflows, ensuring full traceability and consistent execution across the laboratory.
            </p>

            {/* Sample Managers : Request Steps */}
            <section className="my-10 md:my-14">
                <div className="w-full flex flex-col items-center">

                    <div className="grid grid-cols-3 md:grid-cols-6 gap-8 md:gap-6 w-full">

                        {/* STEP 1 */}
                        <div className="flex flex-col items-center text-center gap-3">
                            <div className="h-16 w-16 rounded-full bg-orange-400 grid place-items-center shadow-sm">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                                    <path d="M14 2H6a2 2 0 0 0-2 2v16l6-4 6 4V4a2 2 0 0 0-2-2z" />
                                </svg>
                            </div>
                            <p className="font-sfbold text-sm md:text-base text-lightPrimary dark:text-darkPrimary">
                                1 - Request Creation
                            </p>
                            <p className="text-xs text-lightSecondary dark:text-darkSecondary">
                                The requester submits a new analysis request.
                            </p>
                        </div>

                        {/* STEP 2 */}
                        <div className="flex flex-col items-center text-center gap-3">
                            <div className="h-16 w-16 rounded-full bg-gradient-to-tr from-sky-400 to-blue-600 grid place-items-center shadow-sm">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                                    <path d="M20 6L9 17l-5-5" />
                                </svg>
                            </div>
                            <p className="font-sfbold text-sm md:text-base text-lightPrimary dark:text-darkPrimary">
                                2 - Reception & Labeling
                            </p>
                            <p className="text-xs text-lightSecondary dark:text-darkSecondary">
                                The lab receives the request and labels the sample.
                            </p>
                        </div>

                        {/* STEP 3 */}
                        <div className="flex flex-col items-center text-center gap-3">
                            <div className="h-16 w-16 rounded-full bg-gradient-to-tr from-sky-400 to-blue-600 grid place-items-center shadow-sm">
                                <svg width="26" height="26" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
                                    <path d="M6 2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" />
                                    <path d="M14 2v6h6" />
                                </svg>
                            </div>
                            <p className="font-sfbold text-sm md:text-base text-lightPrimary dark:text-darkPrimary">
                                3 - Pre-Analysis
                            </p>
                            <p className="text-xs text-lightSecondary dark:text-darkSecondary">
                                The technician performs sample preparation if needed.
                            </p>
                        </div>

                        {/* STEP 4 */}
                        <div className="flex flex-col items-center text-center gap-3">
                            <div className="h-16 w-16 rounded-full bg-gradient-to-tr from-sky-400 to-blue-600 grid place-items-center shadow-sm">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                                    <path d="M9 2v6l-2 2v8a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-8l-2-2V2" />
                                </svg>
                            </div>
                            <p className="font-sfbold text-sm md:text-base text-lightPrimary dark:text-darkPrimary">
                                4 - Analysis
                            </p>
                            <p className="text-xs text-lightSecondary dark:text-darkSecondary">
                                The experiment is planned and executed.
                            </p>
                        </div>

                        {/* STEP 5 */}
                        <div className="flex flex-col items-center text-center gap-3">
                            <div className="h-16 w-16 rounded-full bg-gradient-to-tr from-sky-400 to-blue-600 grid place-items-center shadow-sm">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                                    <path d="M20 6L9 17l-5-5" />
                                </svg>
                            </div>
                            <p className="font-sfbold text-sm md:text-base text-lightPrimary dark:text-darkPrimary">
                                5 - Results Entry
                            </p>
                            <p className="text-xs text-lightSecondary dark:text-darkSecondary">
                                Results are recorded in the LIMS database.
                            </p>
                        </div>

                        {/* STEP 6 */}
                        <div className="flex flex-col items-center text-center gap-3">
                            <div className="h-16 w-16 rounded-full bg-orange-400 grid place-items-center shadow-sm">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                                    <path d="M9 11l3 3L22 4" />
                                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                                </svg>
                            </div>
                            <p className="font-sfbold text-sm md:text-base text-lightPrimary dark:text-darkPrimary">
                                6 - Delivery
                            </p>
                            <p className="text-xs text-lightSecondary dark:text-darkSecondary">
                                Results are delivered back to the requester.
                            </p>
                        </div>
                    </div>

                    {/* LEGEND */}
                    <div className="flex flex-row items-center gap-6 mt-5">
                        <div className="flex items-center gap-2">
                            <div className="h-4 w-4 rounded-full bg-orange-400"></div>
                            <span className="text-xs text-lightPrimary dark:text-darkPrimary font-sfregular">Requester / engineer</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="h-4 w-4 rounded-full bg-gradient-to-tr from-sky-400 to-blue-600"></div>
                            <span className="text-xs text-lightPrimary dark:text-darkPrimary font-sfregular">Laboratory Technician</span>
                        </div>
                    </div>

                </div>
            </section>



            <FadeIn className="my-4 mb-8">
                <p className="text-justify">
                    From this environment my project took place with two main objectives, Integrating a new entity into the Saint-Gobain
                    LIMS (Sample Manager) and Enhancing system accessibility and usability through mobile solutions.

                </p>
                <p className="text-justify">
                    The idea of this approach was to first start with the integration of the system for a new entity and then to improve his accessibility .
                </p>
                <br />

                {/* Projects overview  */}
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
                                <h3 className="text-lg md:text-xl font-sfbold ">
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
                                <h3 className="text-lg md:text-xl font-sfbold ">
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

            {/* Horizontal workflow */}
            <section className="my-6">
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
                              hover:shadow-md hover:shadow-sky-500/10 h-40">
                                            <div className=" shrink-0 mt-1 h-8 w-8 rounded-full 
                              bg-lightPrimary dark:bg-darkBorder
                              absolute -top-5 -left-2 flex text-center items-center justify-center text-white dark:text-sky-200 
                              text-xs font-sfbold">
                                                {i + 1}
                                            </div>

                                            <h3 className=" font-sfbold ">
                                                {s.title}
                                            </h3>

                                            <p className="mt-1 text-xs md:text-sm font-sfregular text-lightSecondary dark:text-darkSecondary leading-relaxed">
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

            {/* Table of requirements  */}
            <div className="w-full mt-10">
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
                                <td className="md:px-5 py-4 font-sfbold ">
                                    Standard-only LIMS usage
                                </td>
                                <td className="md:px-5 py-4 ">
                                    The solution must rely exclusively on native Sample Manager features, ensuring long-term stability.
                                </td>
                            </tr>

                            {/* 2 */}
                            <tr className="bg-lightContainer dark:bg-darkContainer hover:bg-zinc-200/50 dark:hover:bg-white/20 transition">
                                <td className="md:px-5 py-4 text-3xl font-ramidots text-sky-600 dark:text-sky-300 text-center">
                                    02
                                </td>
                                <td className="md:px-5 py-4 font-sfbold ">
                                    Reuse existing customizations
                                </td>
                                <td className="md:px-5 py-4">
                                    Only existing, validated SG custom modules can be reused. No new development allowed.
                                </td>
                            </tr>

                            {/* 3 */}
                            <tr className="bg-lightContainer dark:bg-darkContainer hover:bg-zinc-200/50 dark:hover:bg-white/20 transition">
                                <td className="md:px-5 py-4 text-3xl font-ramidots text-sky-600 dark:text-sky-300 text-center">
                                    03
                                </td>
                                <td className="md:px-5 py-4 font-sfbold">
                                    Limited scope
                                </td>
                                <td className="md:px-5 py-4">
                                    Integration restricted to 3 representative analyses to keep the first version focused and manageable.
                                </td>
                            </tr>

                            {/* 4 */}
                            <tr className="bg-lightContainer dark:bg-darkContainer hover:bg-zinc-200/50 dark:hover:bg-white/20 transition">
                                <td className="md:px-5 py-4 text-3xl font-ramidots text-sky-600 dark:text-sky-300 text-center">
                                    04
                                </td>
                                <td className="md:px-5 py-4 font-sfbold">
                                    POC + 1-month testing
                                </td>
                                <td className="md:px-5 py-4">
                                    A functional POC must be delivered quickly and tested by real users for one full month.
                                </td>
                            </tr>

                            {/* 5 */}
                            <tr className="bg-lightContainer dark:bg-darkContainer hover:bg-zinc-200/50 dark:hover:bg-white/20 transition">
                                <td className="md:px-5 py-4 text-3xl font-ramidots text-sky-600 dark:text-sky-300 text-center">
                                    05
                                </td>
                                <td className="md:px-5 py-4 font-sfbold">
                                    Replicable system
                                </td>
                                <td className="md:px-5 py-4">
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




            {/* Before / After grid */}
            <section className="my-12 md:my-16">
                <div className="mt-8 grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-6 items-stretch max-w-6xl mx-auto">

                    {/* BEFORE */}
                    <div className="rounded-3xl border border-ultralightGray dark:border-darkBorder bg-lightBG dark:bg-darkContainer p-5 md:p-6 shadow-sm">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-xs md:text-sm font-sfmedium uppercase tracking-widest text-lightSecondary dark:text-darkSecondary">
                                Before
                            </span>
                            {/* <span className="h-2 w-2 rounded-full bg-amber-400" /> */}
                        </div>

                        <ul className="space-y-3">
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

                <p className="text-justify text-sm md:text-base font-sfregular">
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


            {/* Static data configuration */}
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

                                <span className="font-sfbold">
                                    Implementation of <span className="italic">Groups </span>
                                    to manage data confidentiality within GPI.
                                </span>
                            </div>

                            {/* Mini description */}
                            <p className="md:ml-8 ">
                                Users only see data that belongs to the group they are assigned to.
                                For example, a user assigned to the <span className="font-sfmedium italic">GPI</span> group only has access
                                to analyses, samples, and jobs linked to the same GPI Group, nothing else.
                            </p>


                            {/* Group rectangles */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-4 md:ml-8">
                                {/* GPI Group (visible) */}
                                <div className="rounded-xl border border-sky-400/70 dark:border-sky-300/70 bg-sky-500/5 dark:bg-sky-900/30 p-3">
                                    <p className=" font-sfmedium text-lightPrimary dark:text-darkPrimary mb-2">
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

                                <span className="font-sfbold">
                                    Definition of data templates for <span className="italic">Sample </span>
                                    and <span className="italic">Job </span> entities.
                                </span>
                            </div>

                            {/* Mini description */}
                            <p className="md:ml-8 ">
                                Templates define the structure of laboratory data inside the LIMS.
                                Each <span className="italic font-sfbold">Job</span> and <span className="italic font-sfbold">Sample</span> follows a predefined schema
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
                                        <span className="mr-2">1</span>
                                        <div className="flex-1 h-[2px] bg-gradient-to-r from-sky-400 to-blue-600" />
                                        <span className="ml-2">n</span>
                                    </div>

                                    {/* SAMPLE */}
                                    <div className="px-4 py-2 rounded-xl bg-gradient-to-tr from-sky-400 to-blue-600 text-white font-sfbold text-sm whitespace-nowrap text-center">
                                        SAMPLE
                                    </div>

                                    {/* Line + cardinalities */}
                                    <div className="flex flex-1 items-center">
                                        <span className="mr-2">1</span>
                                        <div className="flex-1 h-[2px] bg-gradient-to-r from-blue-600 to-sky-400" />
                                        <span className="ml-2">n</span>
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
                                        <span className="text-[10px]">1 → n</span>
                                        <div className="w-12 h-[2px] bg-gradient-to-r from-sky-400 to-blue-600" />
                                    </div>

                                    {/* SAMPLE */}
                                    <div className="w-full text-center px-4 py-2 rounded-xl bg-gradient-to-tr from-sky-400 to-blue-600 text-white font-sfbold text-sm">
                                        SAMPLE
                                    </div>

                                    <div className="flex flex-col items-center gap-1 w-full">
                                        <span className="text-[10px]">1 → n</span>
                                        <div className="w-12 h-[2px] bg-gradient-to-r from-sky-400 to-blue-600" />
                                    </div>

                                    {/* TEST */}
                                    <div className="w-full text-center px-4 py-2 rounded-xl bg-gradient-to-tr from-sky-400 to-blue-600 text-white font-sfbold text-sm">
                                        TEST (Analysis)
                                    </div>
                                </div>
                            </div>
                            <p className="md:ml-8 ">
                                So basically this part was about creating differents static templates for the jobs and samples entities.
                                Each template includes a form with specific fields and relationships to ensure that all necessary information is captured accurately.
                                This structured approach allows for better data management and retrieval within the LIMS. The fields was chosen with GPI stakeholders
                                to make sure they align with their operational needs and reporting requirements.
                            </p>

                            <p className="md:ml-8 ">
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
                                        <p className="text-xs text-lightSecondary dark:text-darkSecondary uppercase tracking-wide mb-1">
                                            Static configuration
                                        </p>
                                        <p className="text-sm font-sfbold">
                                            Job/Sample template
                                        </p>
                                        <p className="mt-1 text-xs ">
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
                                        <p className="text-xs text-lightSecondary dark:text-darkSecondary uppercase tracking-wide mb-1">
                                            Job instance
                                        </p>
                                        <p className="text-sm font-sfbold ">
                                            #JOB-0001
                                        </p>
                                        <p className="mt-1 text-xs ">
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
                                        <p className="text-xs text-lightSecondary dark:text-darkSecondary uppercase tracking-wide mb-1">
                                            Sample instances
                                        </p>
                                        <p className="text-sm font-sfbold whitespace-nowrap">
                                            #SMP-0001, #SMP-0002,...
                                        </p>
                                        <p className="mt-1 text-xs">
                                            One job instance can generate multiple samples.
                                        </p>
                                    </div>
                                </div>

                                {/* Mobile layout */}
                                <div className="flex flex-col md:hidden items-stretch gap-4 w-full mt-2">
                                    {/* Job template */}
                                    <div className="w-full px-4 py-3 rounded-xl bg-lightContainer dark:bg-[#262626] border border-ultralightGray dark:border-darkBorder">
                                        <p className="text-[11px] text-lightSecondary dark:text-darkSecondary uppercase tracking-wide mb-1">
                                            Static configuration
                                        </p>
                                        <p className="text-sm font-sfbold ">
                                            Job template
                                        </p>
                                        <p className="mt-1 text-xs ">
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
                                        <p className="text-[11px] text-lightSecondary dark:text-darkSecondary uppercase tracking-wide mb-1">
                                            Job instance
                                        </p>
                                        <p className="text-sm font-sfbold ">
                                            Job #JOB-000123
                                        </p>
                                        <p className="mt-1 text-xs">
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
                                        <p className="text-[11px] text-lightSecondary dark:text-darkSecondary uppercase tracking-wide mb-1">
                                            Sample instances
                                        </p>
                                        <p className="text-sm font-sfbold ">
                                            Sample #SMP-0001, #SMP-0002, …
                                        </p>
                                        <p className="mt-1 text-xs">
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
                                <span className="font-sfbold">
                                    Creation of  the <span className=" italic">analysis (versioned analysis)</span> and their associated tests.
                                </span>
                            </div>

                            {/* Mini description */}
                            <p className="md:ml-8 text-justify">
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

                                <span className="font-sfbold">
                                    Integration of external data into <span className="italic">Project info</span> and
                                    <span className="italic"> Customers</span> tables.
                                </span>
                            </div>

                            {/* Mini description */}
                            <p className="md:ml-8 text-justify">
                                This step consisted of importing project-related information (from
                                Planisware) as well as customer data directly
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

                                <span className="font-sfbold">
                                    Creation of user accounts for all GPI engineers and technicians.
                                </span>
                            </div>

                            {/* Mini description */}
                            <p className="md:ml-8 ">
                                Each user account had to be configured with the appropriate access rules. Every profile needed to be associated
                                with the <span className="font-sfbold"> GPI Group</span> to ensure visibility on GPI-related data.

                                Additionally, users had to be differentiated based on their responsibilities:
                                <span className="font-sfbold"> laboratory technicians</span> (who perform analyses)
                                versus <span className="font-sfbold"> requesters / engineers</span> (who create and track analysis requests).
                                <br />
                                In the example below, you can see an example of a Sample Manager profile (in this example my profile), there are
                                8 pages to configure for each user. Groups page, role pages training page SG page etc.
                            </p>

                            <div className="md:ml-8">
                                <p className="text-[10px] text-center uppercase tracking-[0.25em] text-lightPrimary dark:text-darkPrimary font-sfregular mt-8">
                                    User Account Example
                                </p>
                                <img src={userExample} alt="Job and Sample templates" className="mt-2 rounded-xl border border-gray-300" />
                            </div>
                        </li>
                    </ol>
                </div>
            </section >

            <p className="text-[10px] uppercase tracking-[0.25em] text-lightPrimary dark:text-darkPrimary font-sfregular mt-8 mb-4">
                Dynamic Data Configuration
            </p>

            {/* Ligne principale */}
            <div className="flex gap-2 items-start md:items-center text-sm md:text-[15px] font-sfbold mb-4">
                <div className="h-6 w-6 rounded-lg bg-gradient-to-tr from-sky-400 to-blue-600 
            flex items-center justify-center text-white text-xs font-sfbold flex-shrink-0">
                    <span className="text-[11px] mt-[2px] font-sfbold">07</span>
                </div>

                <span className="">
                    Workflows Lifecycle & Extended Lifecycle
                </span>
            </div>

            <p className="text-justify">
                The next step was to implement what Sample Manager calls a LifeCycle, specifically designed for GPI and applied to both Job and Sample entities.
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
                        <div className="px-4 py-3 md:px-5 md:py-4 text-xs md:text-sm">
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
                        <div className="px-4 py-3 md:px-5 md:py-4 text-xs md:text-sm ">
                            The Workflow LifeCycle and its triggers apply
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
                        <div className="px-4 py-3 md:px-5 md:py-4 text-xs md:text-sm">
                            Automatic actions are executed on the database (for example: updating the
                            Job status to "Accepted" or sending an email with the new request details
                            ).
                        </div>
                    </div>
                </div>
            </section>
            <p className="md:mb-8 text-justify">
                For example, the automatic email notification triggered when a new analysis request is created was implemented through this mechanism.
                A custom rule was added to the Extended LifeCycle so that, upon Job creation, the system automatically sends an email containing all request details
                to the laboratory.
            </p>

            {/* Ligne principale */}
            <div className="flex gap-2 items-start md:items-center text-sm md:text-[15px] font-sfbold mt-6 mb-2">
                <div className="h-6 w-6 rounded-lg bg-gradient-to-tr from-sky-400 to-blue-600 
            flex items-center justify-center text-white text-xs font-sfbold flex-shrink-0">
                    <span className="text-[11px] mt-[2px] font-sfbold">08</span>
                </div>

                <span className="">
                    Modules and interfaces
                </span>
            </div>
            <p className="md:mb-8  text-justify">
                The next phase focused on integrating the modules and user interfaces, essential components that allow users to access data and interact with the system.
                Three main modules were required: one for engineers, one for laboratory technicians, and another for local administrators.
                <br />
                <br />

                For the engineer module, after several discussions with GPI, we chose a simple and intuitive interface. The primary need was quick access to create analysis requests and an easy way to consult laboratory data.
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

            <p className="text-[10px] text-center uppercase tracking-[0.25em] text-lightPrimary dark:text-darkPrimary font-sfregular mt-8 mb-2">
                Requester / Engineer Interface
            </p>
            <img src={RequesterInterface} alt="Job and Sample templates" className="mt-2 rounded-xl border border-gray-300" />

            <p className="my-8 text-justify">
                Technically, to build an interface like this in Sample Manager, a small internal architecture must be created.
                The first step is to set up what is called a <span className="font-sfbold">cabinet</span> in Sample Manager,
                a main folder that acts as the entry point for the module. This cabinet can then be linked to a user interface,
                referred to as a Form in SM. Once the cabinet is opened, the associated interface is displayed automatically.
                <br />
                <br />
                Each button or action in the interface is then linked to specific functionalities in Sample Manager, such as opening a new form to create a DAT or displaying a list of ongoing or completed DATs.
                These functionalities are implemented using Sample Manager’s workflow engine, which allows the creation of custom actions and their association with interface elements.
                In practice, it works as a low-code tool where custom scripts and logic can be built by dragging and dropping components.
            </p>

            <p className="my-8 text-justify">
                Regarding the laboratory module, the main requirement was to provide a view of all samples, grouped by their status.
                To achieve this, a cabinet was created, similar to the one used for the engineers but this time without an associated interface.
                It contains five subfolders, each representing one request status: created, rejected, in progress, completed, and authorized.
            </p>

            <p className="text-[10px] text-center uppercase tracking-[0.25em] text-lightPrimary dark:text-darkPrimary font-sfregular mt-8 mb-2">
                Laboratory Interface
            </p>

            <img src={TechnicianInterface} alt="Job and Sample templates" className="mt-2 rounded-xl border border-gray-300" />

            <p className="my-8 text-justify">
                Each subfolder contains a list view displaying all samples corresponding to that status. To make this possible,
                an entire confiuration of custom filters named <span className="font-sfbold">Criteria</span> are implemented in Sample Manager is required to automatically
                sort data into the appropriate folders based on their current status.
            </p>

            <p className="my-8 text-justify">
                Finally, for the local administrator module, the goal was to provide access to all configuration settings of the Sample Manager instance.
                Similar to the laboratory module, a cabinet was created without an associated interface, containing multiple subfolders for different configuration areas.
                The idea is to centralize all administrative tasks in one location, allowing the local admin to easily manage user accounts, access rights, data, and other system settings.
            </p>

            <p className="text-[10px] text-center uppercase tracking-[0.25em] text-lightPrimary dark:text-darkPrimary font-sfregular mt-8 mb-2">
                Admin Interface
            </p>

            <img src={AdminInterface} alt="Job and Sample templates" className="mt-2 rounded-xl border border-gray-300" />

            <p className="my-8 text-justify">
                By structuring the modules in this way, each user type has access to the specific tools and information they need, here is an overview of the cabinet structure for each module.
            </p>


            {/* Interactive tree */}
            <div className="flex flex-col md:flex-row w-full gap-8">
                <div className="bg-background relative flex h-[340px] md:w-1/2 flex-row items-center justify-center overflow-hidden rounded-lg border">
                    <div className="absolute top-2 right-2 z-50 flex items-center gap-1 text-[10px] font-sfmedium text-lightPrimary dark:text-darkPrimary">
                        <MousePointerClick className="w-4 h-4" />
                        <span>Interactive</span>
                    </div>

                    <Tree
                        className="bg-background overflow-hidden rounded-md p-2"
                        initialSelectedId="1"
                        initialExpandedItems={["1", "2", "3", "4"]}
                    >
                        <Folder element="Sample Manager" value="1">
                            <Folder value="2" element="GPI - Requesters Cabinets">
                                <File >
                                    <p>Requester interface</p>
                                </File>
                            </Folder>
                            <Folder value="3" element="GPI -Laboratory Cabinets">
                                <File >
                                    <p>GPI - Received DATs </p>
                                </File>
                                <File >
                                    <p>GPI - Rejected DATs </p>
                                </File>
                                <File >
                                    <p>GPI - In Progress DATs</p>
                                </File>
                                <File >
                                    <p>GPI - Completed DATs</p>
                                </File>
                                <File >
                                    <p>GPI - Authorized DATs</p>
                                </File>
                            </Folder>
                            <Folder value="4" element="GPI - Admin Cabinets">
                                <File >
                                    <p>GPI - Operators</p>
                                </File>
                                <File >
                                    <p>GPI - Planisware Projects</p>
                                </File>
                                <File >
                                    <p>GPI - Customers</p>
                                </File>
                            </Folder>
                        </Folder>
                    </Tree>

                </div>
                <p className=" md:w-1/2 text-justify">
                    Each cabinet is linked to a specific Group and Role, which controls who can access it and what actions are available.
                    Laboratory technicians are associated with the Laboratory Group, meaning they can only open and interact with the lab-specific cabinets.
                    Similarly, engineers (requesters) only see the engineering cabinets, and administrators access the administration cabinets.
                </p>

            </div>

            <div className="flex gap-2 items-start md:items-center text-sm md:text-[15px] font-sfbold mt-6 mb-2">
                <div className="h-6 w-6 rounded-lg bg-gradient-to-tr from-sky-400 to-blue-600 flex items-center justify-center text-white text-xs font-sfbold flex-shrink-0">
                    <span className="text-[11px] mt-[2px] font-sfbold">09</span>
                </div>

                <span className="">
                    SM Process : DAT Création
                </span>
            </div>

            <p className="my-8 text-justify">
                If we get a stepback and look the <a
                    className="underline"
                    href="#sm-process-diagram"
                    onClick={(e) => {
                        e.preventDefault();
                        // Save current scroll position
                        lastScrollPositionRef.current = window.scrollY;

                        // Scroll to the diagram smoothly
                        const el = document.getElementById("sm-process-diagram");
                        if (el) {
                            el.scrollIntoView({ behavior: "smooth", block: "start" });
                        }

                        // Show back button for 10 seconds
                        setShowBackButton(true);
                        if (backButtonTimeoutRef.current) {
                            clearTimeout(backButtonTimeoutRef.current);
                        }
                        backButtonTimeoutRef.current = setTimeout(() => {
                            setShowBackButton(false);
                        }, 10000);
                    }}>
                    previous diagram
                </a> of the sample manager process we can see 6 main steps. As asked by GPI each step was implemented one
                by one because of the specifities of their lab processes. This was clearly the phase that required the most
                time and effort throughout this part of the project.
            </p>

            <ul className="list-decimal list-inside mt-2 space-y-1 ">
                <li className="ml-6 font-sfbold mt-4">DAT Creation</li>
                <p className="pb-4 text-justify ">
                    This step allows users to select the type of request and fill in all the
                    required information in a dedicated form. This workflow is what engineers and requesters use each time they
                    initiate a new analysis request.

                    To accelerate development, we reused an existing request-creation workflow already deployed across the group’s
                    eight research centers. This workflow was then adapted to meet the specific needs of GPI.
                    By doing so, I avoided having to rebuild the process from scratch in C#, a development path that had been
                    identified early on as something to avoid by management.
                    <br />
                    <br />
                    Next, using the built-in email-sending module, automatic notifications were enabled after the DAT creation.
                    Each message includes key pieces of information as the request reference, the requester name, its
                    objective so that the laboratory can immediately understand the context of the request.

                    In summary, as presented below once the request is created by the engineer, an event is triggered in the
                    Extended lifecycle, and an email is automatically sent to the laboratory technicians through a distribution
                    list, containing all the essential information about the DAT.
                </p>
                <AnimatedBeamMultipleOutputDemo className="mb-4" />

                <li className="ml-6 font-sfbold mt-4">Request acceptance/rejection and assignment</li>
                <p className="pb-4 text-justify">
                    From this point on, a laboratory member must log into SM and open the DAT Received folder.
                    By checking this folder, they can view all the details of the request and must decide whether
                    to accept or reject it. Depending on this decision, two scenarios occur:
                </p>

                <div className="space-y-1">

                    <div className="flex gap-4">
                        <div className="h-6 w-6 p-1 rounded-lg bg-gradient-to-tr from-emerald-400 to-emerald-600 flex items-center justify-center text-white text-xs font-sfbold flex-shrink-0">
                            <Check className="w-5 h-5 text-white" />
                        </div>
                        If the request is accepted: it is assigned to a laboratory technician, an automatic email
                        is sent to the requester to confirm acceptance and indicate the assigned technician, and the
                        technician also receives a notification informing them of the new request. The “accepted” path
                        follows these four main steps:
                    </div>

                    <section className="mt-8 md:py-6">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-5">
                            {/* Step 1 */}
                            <div className="rounded-2xl border border-ultralightGray dark:border-darkBorder bg-lightBG dark:bg-darkContainer p-4 flex flex-col gap-3">
                                <div className="flex items-center gap-2">
                                    <span className="h-6 w-6 rounded-full bg-gradient-to-tr from-emerald-400 to-emerald-600 flex items-center justify-center text-white text-[11px] font-sfbold">
                                        1
                                    </span>
                                    <p className="text-xs md:text-sm font-sfbold ">
                                        DAT accepted
                                    </p>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="mt-0.5">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                                    </div>
                                    <p className="text-xs md:text-sm ">
                                        The technician validates the request in Sample Manager.
                                    </p>
                                </div>
                            </div>

                            {/* Step 2 */}
                            <div className="rounded-2xl border border-ultralightGray dark:border-darkBorder bg-lightBG dark:bg-darkContainer p-4 flex flex-col gap-3">
                                <div className="flex items-center gap-2">
                                    <span className="h-6 w-6 rounded-full bg-gradient-to-tr from-emerald-400 to-emerald-600 flex items-center justify-center text-white text-[11px] font-sfbold">
                                        2
                                    </span>
                                    <p className="text-xs md:text-sm font-sfbold ">
                                        Technician assignment
                                    </p>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="mt-0.5">
                                        <User className="w-5 h-5 text-emerald-500" />
                                    </div>
                                    <p className="text-xs md:text-sm ">
                                        The DAT is assigned to a specific lab technician.
                                    </p>
                                </div>
                            </div>

                            {/* Step 3 */}
                            <div className="rounded-2xl border border-ultralightGray dark:border-darkBorder bg-lightBG dark:bg-darkContainer p-4 flex flex-col gap-3">
                                <div className="flex items-center gap-2">
                                    <span className="h-6 w-6 rounded-full bg-gradient-to-tr from-emerald-400 to-emerald-600 flex items-center justify-center text-white text-[11px] font-sfbold">
                                        3
                                    </span>
                                    <p className="text-xs md:text-sm font-sfbold">
                                        Status update
                                    </p>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="mt-0.5">
                                        <RefreshCw className="w-5 h-5 text-emerald-500" />
                                    </div>
                                    <p className="text-xs md:text-sm ">
                                        The DAT status is switched to <span className="font-sfmedium">“Accepted”.</span>
                                    </p>
                                </div>
                            </div>

                            {/* Step 4 */}
                            <div className="rounded-2xl border border-ultralightGray dark:border-darkBorder bg-lightBG dark:bg-darkContainer p-4 flex flex-col gap-3">
                                <div className="flex items-center gap-2">
                                    <span className="h-6 w-6 rounded-full bg-gradient-to-tr from-emerald-400 to-emerald-600 flex items-center justify-center text-white text-[11px] font-sfbold">
                                        4
                                    </span>
                                    <p className="text-xs md:text-sm font-sfbold">
                                        Email notifications
                                    </p>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="mt-0.5">
                                        <Mail className="w-5 h-5 text-emerald-500" />
                                    </div>
                                    <p className="text-xs md:text-sm">
                                        Emails are sent to both the requester and the assigned technician.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="flex gap-4">
                        <div className="h-6 w-6 p-1 rounded-lg bg-gradient-to-tr from-red-400 to-rose-600 flex items-center justify-center text-white text-xs font-sfbold flex-shrink-0">
                            <X className="w-5 h-5 text-white" />
                        </div>
                        If the request is rejected: an automatic email is sent to the requester informing them that
                        the request has been declined, along with the reason provided by the laboratory. The rejected path
                        follows these four main steps:
                    </div>

                    <section className="py-4">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-5">
                            {/* Step 1 */}
                            <div className="rounded-2xl border border-ultralightGray dark:border-darkBorder bg-lightBG dark:bg-darkContainer p-4 flex flex-col gap-3">
                                <div className="flex items-center gap-2">
                                    <span className="h-6 w-6 rounded-full bg-gradient-to-tr from-red-400 to-rose-600 flex items-center justify-center text-white text-[11px] font-sfbold">
                                        1
                                    </span>
                                    <p className="text-xs md:text-sm font-sfbold ">
                                        DAT rejected
                                    </p>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="mt-0.5">
                                        <XCircle className="w-5 h-5 text-red-500 dark:text-red-400" />
                                    </div>
                                    <p className="text-xs md:text-sm ">
                                        The technician rejects the DAT after reviewing the request.
                                    </p>
                                </div>
                            </div>

                            {/* Step 2 */}
                            <div className="rounded-2xl border border-ultralightGray dark:border-darkBorder bg-lightBG dark:bg-darkContainer p-4 flex flex-col gap-3">
                                <div className="flex items-center gap-2">
                                    <span className="h-6 w-6 rounded-full bg-gradient-to-tr from-red-400 to-rose-600 flex items-center justify-center text-white text-[11px] font-sfbold">
                                        2
                                    </span>
                                    <p className="text-xs md:text-sm font-sfbold">
                                        Rejection reason
                                    </p>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="mt-0.5">
                                        <User className="w-5 h-5 text-red-500 dark:text-red-400" />
                                    </div>
                                    <p className="text-xs md:text-sm ">
                                        The DAT is assigned to a specific lab technician.
                                    </p>
                                </div>
                            </div>

                            {/* Step 3 */}
                            <div className="rounded-2xl border border-ultralightGray dark:border-darkBorder bg-lightBG dark:bg-darkContainer p-4 flex flex-col gap-3">
                                <div className="flex items-center gap-2">
                                    <span className="h-6 w-6 rounded-full bg-gradient-to-tr from-red-400 to-rose-600 flex items-center justify-center text-white text-[11px] font-sfbold">
                                        3
                                    </span>
                                    <p className="text-xs md:text-sm font-sfbold">
                                        Status update
                                    </p>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="mt-0.5">
                                        <RefreshCw className="w-5 h-5 text-red-500 dark:text-red-400" />
                                    </div>
                                    <p className="text-xs md:text-sm">
                                        The DAT status is switched to <span className="font-sfmedium">“Accepted”.</span>
                                    </p>
                                </div>
                            </div>

                            {/* Step 4 */}
                            <div className="rounded-2xl border border-ultralightGray dark:border-darkBorder bg-lightBG dark:bg-darkContainer p-4 flex flex-col gap-3">
                                <div className="flex items-center gap-2">
                                    <span className="h-6 w-6 rounded-full bg-gradient-to-tr from-red-400 to-rose-600 flex items-center justify-center text-white text-[11px] font-sfbold">
                                        4
                                    </span>
                                    <p className="text-xs md:text-sm font-sfbold ">
                                        Email notifications
                                    </p>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="mt-0.5">
                                        <Mail className="w-5 h-5 text-red-500 dark:text-red-400" />
                                    </div>
                                    <p className="text-xs md:text-sm ">
                                        Emails are sent to both the requester and the assigned technician.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                <p className="pb-4 text-justify ">
                    Similarly to the request creation process, an additional Workflow Action had to be implemented, this time within the Extended LifeCycle
                    associated with the Sample table. Laboratory users mainly operate through an analysis-centric view rather than directly on requests.
                    The objective was therefore to allow a DAT to be accepted directly from a Sample. To achieve this, a join was configured to retrieve
                    the DAT linked to a given Sample, enabling the appropriate Workflow Action responsible for request acceptance to be triggered.
                    As an illustration, the following example show the two (simplified) Workflow Actions that were added to the Extended LifeCycle of the Sample table.
                </p>

                <img src={ExtendedLifecycleExample} alt="Job and Sample templates" className="rounded-xl" />



                <li className="ml-6 font-sfbold pt-4">Results entry and request completion</li>
                <p className="pb-4 text-justify ">
                    Once the DAT is accepted, it is automatically moved to the laboratory folder named “Sample in Progress”. At this stage, the assigned
                    technician is considered to be actively working on the analysis. When the analysis is completed, the technician must enter the results
                    for each test. Since Sample Manager already provides a standard and robust process for result entry, no additional development was
                    required for this step. The only necessary configuration was to assign the appropriate role to all laboratory technicians.
                    From a technical standpoint, the only additional requirement was the creation of a Workflow Action on the Sample entity, allowing the
                    request to be marked as completed. Once this action is triggered, an automatic email is sent to the engineer, including the attached
                    analysis reports.
                </p>


                <li className="ml-6 font-sfbold">Request authorization and reopening process</li>
                <p className="pb-4 text-justify ">
                    After reviewing the results, the engineer can either validate the DAT or request a rework.
                    Validation means that the results are considered compliant and satisfactory.
                    Conversely, requesting a rework indicates that the results do not meet expectations and that additional work is required.

                    In the case of validation, a Workflow Action is triggered to authorize the request at the Sample level.
                    If the DAT is relaunched, its status is automatically set back to “in progress”, and all previously linked samples are
                    cancelled, as new samples are automatically generated for the renewed request. This process also required the implementation
                    of workflow action but with a different logic to handle the reopening of the DAT making it more complex.
                </p>

                {/* sample manager tree */}
                <div className="flex flex-col md:flex-row w-full gap-8">
                    <div className="bg-background relative flex h-[250px] md:w-1/2 flex-col overflow-hidden rounded-lg border pl-2">

                        {/* Label */}
                        <div className="flex justify-between px-4 pt-3">
                            <p className=" text-[10px] uppercase tracking-[0.25em] text-lightSecondary dark:text-darkSecondary font-sfregular">
                                Before rework
                            </p>

                            <div className="text-[10px]  text-lightPrimary dark:text-darkPrimary font-sfregular">
                                Status : Completed
                            </div>
                        </div>

                        {/* Tree */}
                        <div className="flex-1 flex items-center justify-center pl-2">
                            <Tree
                                mode="laboratory"
                                className="bg-background overflow-hidden rounded-md p-2"
                                initialSelectedId="1"
                                initialExpandedItems={["1", "2", "3", "4"]}
                            >
                                <Folder value="1" element="JOB #JOB-0142" kind="job">
                                    <Folder value="2" element="SAMPLE #SMP-01" kind="sample">
                                        <Folder value="3" element="Analysis #01" kind="test">
                                            <File value="4">
                                                <p>Result file</p>
                                            </File>
                                        </Folder>
                                    </Folder>
                                </Folder>
                            </Tree>
                        </div>
                    </div>

                    <div className="bg-background relative flex md:w-1/2 h-[250px] flex-col overflow-hidden rounded-lg border">

                        {/* Label */}
                        <div className="flex justify-between px-4 pt-3">
                            <p className=" text-[10px] uppercase tracking-[0.25em] text-lightSecondary dark:text-darkSecondary font-sfregular">
                                After rework
                            </p>

                            <div className="text-[10px]  text-lightPrimary dark:text-darkPrimary font-sfregular">
                                Status : In Progress
                            </div>
                        </div>

                        {/* Tree */}
                        <div className="flex-1 flex items-center justify-center pl-2">
                            <Tree
                                mode="laboratory"
                                className="bg-background overflow-hidden rounded-md p-2"
                                initialSelectedId="1"
                                initialExpandedItems={["1", "2", "3", "4", "5", "6", "7"]}
                            >
                                <Folder value="1" element="JOB #JOB-0142" kind="job">
                                    <Folder
                                        value="2"
                                        element="SAMPLE #SMP-01"
                                        kind="sample"
                                        textStyle="strikethrough"
                                    >
                                        <Folder
                                            value="3"
                                            element="Analysis #01"
                                            kind="test"
                                            textStyle="strikethrough"
                                        >
                                            <File value="4" className="text-red-600 dark:text-red-400">
                                                <p className="line-through text-red-600 dark:text-red-400">
                                                    Result file
                                                </p>
                                            </File>
                                        </Folder>
                                    </Folder>

                                    <Folder value="5" element="SAMPLE #SMP-02" kind="sample">
                                        <Folder value="6" element="Analysis #01" kind="test">
                                            <File value="7">
                                                <p>Result file</p>
                                            </File>
                                        </Folder>
                                    </Folder>
                                </Folder>
                            </Tree>
                        </div>
                    </div>
                </div>
            </ul >

            <div className="flex gap-2 items-start md:items-center md:text-[15px] font-sfbold mt-6 mb-2">
                <div className="h-6 w-6 rounded-lg bg-gradient-to-tr from-sky-400 to-blue-600 flex items-center justify-center text-white text-xs font-sfbold flex-shrink-0">
                    <span className="text-[11px] mt-[2px] font-sfbold">10</span>
                </div>

                <span className="">
                    Mockup validation
                </span>
            </div>

            <p className="pb-4text-justify ">
                After completing the main functional flow, the solution reached a first stable state where the core process was operational. From that point on,
                the project evolved through several successive mockup versions. Each iteration introduced specific improvements, corrections, and adjustments
                based on functional feedback and real usage expectations. These versions were not simple refinements but meaningful evolutions, each addressing
                identified limitations and bringing the solution closer to operational reality.
                <br />
                <br />
                Throughout this iterative process, demonstrations were organized with GPI to validate design choices and gather feedback. These
                exchanges played a key role in shaping subsequent versions, helping to better align the solution with laboratory practices and user habits. This
                progressive approach ensured that the system evolved in a controlled and coherent way, while remaining adaptable to changing needs.
                <br />
                <br />
                Once the solution reached a sufficient level of maturity, the focus shifted to deployment preparation. This phase included final adjustments,
                stabilization, and the consolidation of all implemented features to ensure a smooth transition into operational use. Particular attention was
                paid to ensuring that the system could be reliably maintained, understood, and reused if needed.
                <br />
                <br />
                After deployment, the project naturally entered a phase of continuous improvement. User feedback collected during real usage led to incremental
                enhancements, mainly focused on usability, clarity, and workflow fluidity. This post-deployment phase confirmed the importance of adopting an
                iterative mindset, allowing the solution to evolve progressively while remaining aligned with operational constraints and user expectations.
                <br />
                <br />
                Overall, the project followed a lifecycle based on iteration, validation, deployment, and continuous enhancement, ensuring both functional
                robustness and long-term adaptability.
            </p>

            <p className="text-[10px] uppercase tracking-[0.25em] font-sfregular mt-8 mb-4">
                Conclusion
            </p>

            <p className=" text-justify ">
                During the final deployment meeting, the proper functioning of version V3 of the mock-up was demonstrated and the solution was made available to
                GPI operators. Management considered the POC a success, both from a technical perspective and in terms of the overall quality of the work delivered,
                and GPI expressed strong satisfaction with the results.
                <br />
                <br />
                Now that the POC phase is complete, the medium-term objective is to extend the solution to cover all laboratory analyses, rather than limiting it to
                the initial three. In the short term, GPI will continue to use the mock-up in parallel with their former process for these analyses, allowing teams
                time to become familiar with the tool while evaluating its effectiveness in real operating conditions.

                In addition, another Saint-Gobain site located in the United States, East Lake, has shown interest in the system. As its laboratory processes are similar
                to those of GPI, this site is considering adopting the same LIMS solution in the future.
            </p>

            {/* Separator */}
            <div className="my-10">
                <div className="h-px w-full bg-ultralightGray dark:bg-darkBorder" />
            </div>

            <p className="text-[10px] uppercase tracking-[0.25em] text-lightPrimary dark:text-darkPrimary font-sfregular mt-8 mb-4">
                Part 2 — Mobile Accessibility
            </p>

            <p className="text-justify ">
                Still aligned with the objectives of the Connected Labs program, this project differs from the previous one as it does
                not aim to integrate the LIMS itself, but rather to enhance its day-to-day usage.
                It builds on a Proof of Concept I carried out during my international mobility in Germany, within SGRG, over a four-month period.
                The goal of that initial POC was to develop a mobile application using Microsoft Power Platform (Power Apps and Power Automate)
                to provide easier and faster access to Sample Manager. This initiative originated from a concrete operational need called “Quick Actions”,
                designed to allow users to perform simple and frequent actions on Sample Manager directly from their professional mobile device, in just a few clicks.
            </p>

            <p className="text-[10px] uppercase tracking-[0.25em] text-lightPrimary dark:text-darkPrimary font-sfregular mt-8 mb-4">
                Objective
            </p>

            <p className="text-justify ">
                In day-to-day laboratory operations, technicians and engineers often need to access the system to perform quick, specific actions, such as
                adding a photo or validating a step in the process.
                <br />
                However, accessing Sample Manager typically requires using a computer workstation.
                In practice, this usually requires leaving the laboratory environment to reach a workstation, which can be located far from the lab depending
                on the site. The information then has to be transferred manually to a computer via a USB drive, email, or other means before it can be entered
                into the LIMS.
                <br />
                <br />
                This workflow is not only time-consuming but also discouraging for users. It negatively impacts the overall user experience and leads to reduced
                data quality within the LIMS. When the tool is less accessible, it is used less frequently, resulting in incomplete data entry, loss of information,
                and reduced traceability on critical steps. This situation directly contradicts the objectives of the Connected Labs program, which aims to bring
                digital tools closer to real field operations and integrate them seamlessly into everyday laboratory activities.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-8 mb-12">
                {/* Simplification d’utilisation */}
                <div className="rounded-3xl border border-ultralightGray dark:border-darkBorder bg-lightBG dark:bg-darkContainer p-5 md:p-6 shadow-sm">
                    <div className="flex items-start gap-3">
                        <div className="shrink-0 h-10 w-10 rounded-2xl bg-gradient-to-tr from-sky-400/20 to-blue-600/20 grid place-items-center">
                            <Smartphone className="w-5 h-5 text-sky-600 dark:text-sky-300" />
                        </div>

                        <div className="space-y-1">
                            <h3 className="text-lg md:text-xl font-sfbold">
                                Simplified LIMS usage
                            </h3>
                            <p className="text-sm md:text-base font-sfregular text-lightPrimary dark:text-darkPrimary leading-relaxed">
                                Enable technicians and engineers to perform quick actions directly in the laboratory
                                (photos, validations, updates) without leaving their work environment.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Amélioration de la donnée */}
                <div className="rounded-3xl border border-ultralightGray dark:border-darkBorder bg-lightBG dark:bg-darkContainer p-5 md:p-6 shadow-sm">
                    <div className="flex items-start gap-3">
                        <div className="shrink-0 h-10 w-10 rounded-2xl bg-gradient-to-tr from-sky-400/20 to-blue-600/20 grid place-items-center">
                            <Database className="w-5 h-5 text-blue-700 dark:text-blue-300" />
                        </div>

                        <div className="space-y-1">
                            <h3 className="text-lg md:text-xl font-sfbold">
                                Improved data quality
                            </h3>
                            <p className="text-sm md:text-base font-sfregular text-lightPrimary dark:text-darkPrimary leading-relaxed">
                                By making the LIMS easier to use in real conditions, data is entered more consistently,
                                improving traceability, reliability, and overall data completeness.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <p className="text-[10px] uppercase tracking-[0.25em] text-lightPrimary dark:text-darkPrimary font-sfregular mt-8 mb-4">
                Context
            </p>

            <p className="text-justify">
                The Proof of Concept carried out at SGRG was conducted within the MAC chemistry laboratory (Material Analysis Center), which faced practical limitations
                in the daily use of Sample Manager. Due to the physical distribution of the laboratories across the site, accessing the LIMS from the field was time-consuming
                and inefficient.

                The objective of this POC was to propose a concrete and pragmatic solution to improve mobility and ease of use. Based on a prior comparative study, Power Apps
                and Power Automate were identified as the most suitable technologies to address these needs within the LIMS Mobility context.

                Despite cybersecurity constraints, a secure architecture was implemented to connect the Microsoft 365 environment with Sample Manager. Once operational, the
                solution was presented to Saint-Gobain management and received very positive feedback. This validation marked the official launch of the project, with the ambition
                to move from a POC to a production deployment across multiple laboratories at SGRG and SGRP.
            </p>

            <p className="text-[10px] uppercase tracking-[0.25em] text-lightPrimary dark:text-darkPrimary font-sfregular mt-8 mb-4">
                Functional requirements
            </p>

            <p className="text-justify">
                The objective was therefore to move toward a production deployment of the application, while expanding its scope to cover the most essential operational needs.
                The targeted actions were identified based on feedback collected from two different research centers :
            </p>

            <div className="flex gap-2 items-start md:items-center md:text-[15px] font-sfbold mt-6 mb-2">
                <div className="h-6 w-6 rounded-lg bg-gradient-to-tr from-sky-400 to-blue-600 flex items-center justify-center text-white text-xs font-sfbold flex-shrink-0">
                    <span className="text-[11px] mt-[2px] font-sfbold">01</span>
                </div>

                <span className="">
                    Attach a photo to an analysis request
                </span>
            </div>

            <p className="md:ml-8 text-justify ">
                This need is particularly strong at SGRG, where nearly one third of the laboratory activity involves optical or microscopic studies
                that require visual monitoring. Until now, this process required leaving the laboratory to reach the office (a walk that can take up to 15 minutes), manually transferring photos from a mobile
                phone to a computer, and then uploading them into Sample Manager, while also storing them on a local file server.

                A similar need also exists at SGRP, although in a more occasional manner (approximately 10% of cases in the LET laboratory). Following
                a shared and standardized approach, this functionality was therefore implemented for both sites.
            </p>

            <PhotoAttachmentWorkflow />

            <div className="flex gap-2 items-start md:items-center md:text-[15px] font-sfbold mt-6 mb-2">
                <div className="h-6 w-6 rounded-lg bg-gradient-to-tr from-sky-400 to-blue-600 flex items-center justify-center text-white text-xs font-sfbold flex-shrink-0">
                    <span className="text-[11px] mt-[2px] font-sfbold">02</span>
                </div>

                <span className="">
                    Quick creation of a commercial offer
                </span>
            </div>

            <p className="text-justify md:ml-8 ">
                Specific to SGRG, this need comes from frequent on-site discussions with customers. When an agreement is reached during a meeting,
                engineers must be able to create an offer immediately, without waiting to return to their desk. In Sample Manager, an “offer” corresponds
                to a dedicated table developed for SGRG, used to record the key information of a validated proposal.
            </p>

            <div className="flex gap-2 items-start md:items-center md:text-[15px] font-sfbold mt-6 mb-2">
                <div className="h-6 w-6 rounded-lg bg-gradient-to-tr from-sky-400 to-blue-600 flex items-center justify-center text-white text-xs font-sfbold flex-shrink-0">
                    <span className="text-[11px] mt-[2px] font-sfbold">03</span>
                </div>

                <span className="">
                    Acceptance and Closure of an Analysis Request
                </span>
            </div>

            <p className="text-justify md:ml-8 ">
                At SGRP, another key requirement was the ability to accept or close an analysis request directly from the mobile application, without
                having to switch back to the desktop interface.

                This functionality aims to simplify day-to-day operations by reducing unnecessary back-and-forth to the office, improving responsiveness, and
                streamlining the overall request processing workflow for users.
            </p>

            <p className="text-[10px] uppercase tracking-[0.25em] text-lightPrimary dark:text-darkPrimary font-sfregular mt-8 mb-4">
                Technical Architecture
            </p>

            <div className="flex gap-2 items-start md:items-center md:text-[15px] font-sfbold mt-6 mb-2">
                <div className="h-6 w-6 rounded-lg bg-gradient-to-tr from-sky-400 to-blue-600 flex items-center justify-center text-white text-xs font-sfbold flex-shrink-0">
                    <span className="text-[11px] mt-[2px] font-sfbold">04</span>
                </div>

                <span className="">
                    Link between Power Apps and Sample Manager
                </span>
            </div>

            <div className="md:ml-8">
                <p className="text-justify">
                    To implement a functional workflow within the Power Apps application, it was first necessary to design a technical architecture
                    capable of connecting Power Apps to Sample Manager. This phase required careful consideration throughout the POC carried out at
                    SGRG. The challenge was to link a Microsoft application with a system running locally on an internal Saint-Gobain server. As a
                    result, two types of connections had to be established: a read-only connection to retrieve data stored in Sample Manager, and a
                    write-enabled connection to allow direct interaction with the system from the mobile application.
                </p>

                <div className="mt-6 space-y-6">
                    {/* Read-only */}
                    <div>
                        <p className="font-sfbold">1) Read-only connection</p>
                        <p className="ml-2 mt-2 text-justify">
                            To enable data reading, the Microsoft Azure environment was used.
                            The team already had an Azure architecture in place, based on a replicated version of the Sample Manager SQL database. This
                            mirrored database is automatically synchronized every hour using Azure Data Factory, ensuring that the data remains sufficiently
                            up to date for the intended usage.
                            <br /><br />
                            The idea was therefore to leverage this replicated database as the data source for the Power Apps application. Since Power
                            Apps and Azure are both part of the Microsoft ecosystem, setting up the connection was relatively straightforward thanks to
                            native connectors, which allow a Power Apps application to directly access a SQL database hosted on Azure.
                        </p>

                        <div className="md:px-20 dark:bg-white rounded-xl">
                            <img src={ReadOnlyConnection} alt="Read-only connection architecture" className="rounded-xl mt-4" />
                        </div>



                    </div>

                    {/* Write-enabled */}
                    <div>
                        <p className="font-sfbold">2) Write-enabled connection</p>
                        <p className="ml-2 mt-2 text-justify">
                            For the write operations, the tests conducted during the POC highlighted the need to implement an on-premises data gateway. An
                            initial installation was carried out on a test server, but deploying the solution in production required a more robust architecture,
                            fully integrated into the local LIMS environments of the concerned sites.
                            <br /><br />

                            This gateway plays a key role in enabling communication between the Microsoft 365 environment and the local LIMS servers. It allows
                            the mobile application to interact with a custom Sample Manager API. Developed in C# in collaboration with a senior external developer
                            (Vincent), who specializes in cross-functional topics within the team, this API enables remote execution of workflows defined in Sample Manager.

                            The workflow receives input parameters, executes the expected actions, and records the results directly in the system. For example,
                            when a user takes a photo via the mobile application, the workflow automatically creates an attachment and links it to the corresponding
                            analysis request.
                        </p>
                        <div className="ml-2 md:px-4 dark:bg-white rounded-xl">
                            <img src={WriteEnabledConnection} alt="Read-only connection architecture" className="rounded-xl mt-4" />
                        </div>

                        <p className="ml-2 mt-2 text-justify">
                            In addition, the gateway ensures the secure transfer of files from Microsoft 365 to local servers. This provides a reliable solution
                            for centralized image storage while fully complying with the group’s cybersecurity constraints.
                        </p>
                    </div>
                    <p className="ml-2 my-6 text-justify">
                        Then finally, the overall architecture can be summarized as follows:
                    </p>

                    <div className="ml-2 md:px-16 md:py-2 dark:bg-white rounded-xl">
                        <img src={FinalArchitecture} alt="Final architecture" className="rounded-xl mt-4" />
                    </div>


                    <p className="ml-2 my-6 text-justify">
                        In this architecture, a temporary storage area called Azure Blob Storage plays a key role. Hosted on Azure, it is used to store images
                        added through the mobile application throughout the entire lifecycle of an analysis request, from its creation to its closure. This
                        approach provides fast and simplified access to files while they are actively used. Once the request is closed, the images are no longer
                        accessed via Azure; users must retrieve them directly from the local LIMS file server associated with their site.
                    </p>


                </div>
            </div>

            <p className="text-[10px] uppercase tracking-[0.25em] text-lightPrimary dark:text-darkPrimary font-sfregular mt-8 mb-4">
                Front-end development
            </p>

            <div className="flex gap-2 items-start md:items-center md:text-[15px] font-sfbold mt-6 mb-2">
                <div className="h-6 w-6 rounded-lg bg-gradient-to-tr from-sky-400 to-blue-600 flex items-center justify-center text-white text-xs font-sfbold flex-shrink-0">
                    <span className="text-[11px] mt-[2px] font-sfbold">05</span>
                </div>

                <span className="">
                    User flows
                </span>
            </div>

            <p className="md:ml-8 text-justify">
                This step consisted of developing the visible logic of the application, namely the front end. To achieve this, discussions were held with the laboratory
                managers from both SGRG and SGRP in order to gather their concrete needs, both in terms of the information to be displayed and the overall organization
                of the application.

                Based on these exchanges, two distinct user flows were designed, each tailored to the specific expectations of the teams at each site.
                <br /><br />
                The following illustrates the SGRG version of the application, which primarily focuses on photo management and commercial offer creation :
            </p>

            <div className=" md:ml-8 md:px-8 dark:bg-white rounded-xl">
                <img src={UserflowSGRG} alt="User flow SGRG" className="rounded-xl mt-4" />
            </div>

            <p className="md:ml-8 my-6 text-justify">
                This one represents the SGRP application, which includes the option to accept or authorize a request in addition to the photo management feature.
            </p>

            <div className=" md:ml-8 md:px-8 dark:bg-white rounded-xl">
                <img src={UserflowSGRP} alt="User flow SGRP" className="rounded-xl mt-4" />
            </div>


            <p className="md:ml-8 text-justify mt-6">
                Since the needs of SGRG and SGRP differed both in terms of usage and data architecture, the decision was made to develop two separate applications.
                The objective was to build, within Power Apps, two Canvas apps grouped into a single solution. This approach made it possible to share the underlying architecture while still addressing the specific requirements of each center.

                It also simplifies maintenance and provides greater flexibility, allowing each application to evolve independently based on feedback from the respective laboratories.
            </p>

            <div className="flex gap-2 items-start md:items-center md:text-[15px] font-sfbold mt-6 mb-2">
                <div className="h-6 w-6 rounded-lg bg-gradient-to-tr from-sky-400 to-blue-600 flex items-center justify-center text-white text-xs font-sfbold flex-shrink-0">
                    <span className="text-[11px] mt-[2px] font-sfbold">06</span>
                </div>

                <span className="">
                    User Interfaces
                </span>
            </div>

            <p className="md:ml-8 text-justify">
                Based on the two user flows presented earlier, the interface of each application could be structured in a concrete way.
                The objective was to transform these user journeys into functional screens that are simple, readable, and well adapted
                to the habits of end users. Each interaction was designed to match the laboratory working context, providing quick
                access to key actions and smooth navigation between screens.


            </p>

            <div className="flex flex-col md:flex-row mt-4">
                <div className=" md:w-[450px] md:ml-8 flex flex-col items-center justify-center md:py-0 py-6 ">
                    <p className="text-[10px] uppercase tracking-[0.25em] text-lightPrimary dark:text-darkPrimary font-sfregular mb-2 text-center">
                        Landing Page
                    </p>

                    <IPhoneMockup
                        screenWidth={200}
                        screenType={"legacy"}
                        hideStatusBar
                        frameColor={"#E0E0E0"}
                    >
                        <img src={HomeInterface} alt="Landing Page Mockup" className="w-full" />
                    </IPhoneMockup>

                </div>

                <p className="md:ml-8 text-justify w-full">
                    From a design perspective, and with the goal of delivering a modern and user-friendly solution, I partially drew
                    inspiration from interface templates available on <span className="underline"> Dribbble </span> . Regarding the visual identity, the design was mainly
                    aligned with the Saint-Gobain corporate guidelines.
                    <br /><br />

                    <p className="mb-2 font-sfbold">Landing Page</p>
                    The first interface developed as part of this project was designed for Saint-Gobain Research Germany (SGRG).
                    As this site served as the testing ground for the initial Proof of Concept, it already benefited from a well-defined
                    functional scope and clearly identified requirements.
                    <br /><br />
                    The application’s home screen, also referred to as the landing page, was designed with a clear focus on simplicity and
                    efficiency. It provides a clean and intuitive interface that allows users to quickly access the two main actions of the
                    tool: adding a photo to an existing request or creating a commercial offer directly from their smartphone.
                    <br /><br />
                    The choice of colors and the visual hierarchy of the elements were carefully designed to enhance readability while
                    delivering a smooth and pleasant user experience. The welcome message reinforces the application’s context of use,
                    highlighting that it was specifically developed for the MAC laboratory at SGRG. The overall objective was to offer
                    a clear, straightforward, and immediately operational entry point for engineers working on the move or directly in
                    the field.
                </p>
            </div>


            <div className="my-12">
                <p className="md:ml-8 font-sfbold">Photo(s) Attachment Interfaces</p>
                <p className="md:ml-8 mt-2 text-justify">
                    If the user selects the “Add picture” option, they are redirected to the main interface.
                    This screen displays a gallery listing all samples available within the research center (corresponding to the first interface below).

                    From this interface, two primary actions are available:


                    If the user selects the “Add picture” option, they are redirected to the main interface.
                    This screen displays a gallery listing all samples available within the research center (corresponding to the first interface below).

                    <ul className="mt-4 list-disc pl-5 space-y-2">
                        <li>
                            Scan a sample QR code, allowing the sample to be automatically identified and
                            selected within the application.
                        </li>
                        <li>
                            Search for a sample manually by entering its unique identifier directly
                            (in this example: <span className="font-medium">1153633</span>).
                        </li>
                    </ul>

                </p>
            </div>

            <div className="md:ml-8 mt-6">
                <PhoneCarousel>
                    <IPhoneMockup
                        screenWidth={200}
                        screenType={"legacy"}
                        hideStatusBar
                        frameColor={"#E0E0E0"}
                    >
                        <img src={PhotoAttachment1} alt="Photo attachment step 1" className="w-full" />
                    </IPhoneMockup>

                    <IPhoneMockup
                        screenWidth={200}
                        screenType={"legacy"}
                        hideStatusBar
                        frameColor={"#E0E0E0"}
                    >
                        <img src={PhotoAttachment2} alt="Photo attachment step 2" className="w-full" />
                    </IPhoneMockup>

                    <IPhoneMockup
                        screenWidth={200}
                        screenType={"legacy"}
                        hideStatusBar
                        frameColor={"#E0E0E0"}
                    >
                        <img src={PhotoAttachment3} alt="Photo attachment step 3" className="w-full" />
                    </IPhoneMockup>

                    <IPhoneMockup
                        screenWidth={200}
                        screenType={"legacy"}
                        hideStatusBar
                        frameColor={"#E0E0E0"}
                    >
                        <img src={PhotoAttachment4} alt="Photo attachment step 4" className="w-full" />
                    </IPhoneMockup>
                </PhoneCarousel>
            </div>

            <p className="md:ml-8 text-justify mt-12">
                Once the sample has been selected, the user is taken to the details page (corresponding to the second interface in the diagram).
                This page gathers all the key information required by the MAC laboratory, giving the teams quick and clear access to the sample
                data whenever needed.

                After verifying the information, the user can proceed to the photo upload screen (corresponding to the third interface in the diagram).
                This interface displays, when applicable, the number of images already associated with the sample, allowing the laboratory to easily
                track the activity related to that sample.
                <br />
                <br />
                The interface also provides five main actions:

            </p>

            <ul className="md:ml-8 list-disc pl-5 space-y-2 text-justify mt-4">
                <li>
                    <span className="font-sfbold">Add an image</span> from the device camera or from the photo gallery.
                    Once an image is selected, a modal opens prompting the user to enter an image name before validation.
                </li>

                <li>
                    <span className="font-sfbold">Delete an image</span> that has not yet been submitted.
                    After being named, the image appears in the gallery but can still be removed using a red cross icon.
                </li>

                <li>
                    <span className="font-sfbold">Rename an image</span> by clicking on it again within the gallery.
                </li>

                <li>
                    <span className="font-sfbold">View previously uploaded images</span> to access a visual history of past actions,
                    including images added by other collaborators, via the <em>“See all”</em> button.
                </li>

                <li>
                    <span className="font-sfbold">Submit the selected images</span> by clicking the <em>“Submit”</em> button.
                    Once validated, the user is redirected back to the main page.
                </li>
            </ul>

            <div className="my-12">
                <p className="md:ml-8 font-sfbold">Offer Creation Interface</p>
                <p className="md:ml-8 mt-2 text-justify">
                    From the home screen, the user can also choose to create an offer by clicking the “Create an Offer” button. They are
                    then redirected to the dedicated offer creation page, which corresponds to the first screen shown below.

                    This interface provides a form that the user must complete. The form includes text fields, dropdown lists connected to
                    Sample Manager data, and a date selection field located at the end of the form.

                </p>
            </div>

            <div className="md:ml-8 mt-6">
                <PhoneCarousel>
                    <IPhoneMockup screenWidth={200} screenType={"legacy"} hideStatusBar frameColor={"#E0E0E0"}>
                        <img src={OfferForm1} alt="Offer form step 1" className="w-full" />
                    </IPhoneMockup>

                    <IPhoneMockup screenWidth={200} screenType={"legacy"} hideStatusBar frameColor={"#E0E0E0"}>
                        <img src={OfferForm2} alt="Offer form step 2" className="w-full" />
                    </IPhoneMockup>

                    <IPhoneMockup screenWidth={200} screenType={"legacy"} hideStatusBar frameColor={"#E0E0E0"}>
                        <img src={OfferForm3} alt="Offer form step 3" className="w-full" />
                    </IPhoneMockup>

                    <IPhoneMockup screenWidth={200} screenType={"legacy"} hideStatusBar frameColor={"#E0E0E0"}>
                        <img src={OfferForm4} alt="Offer form step 4" className="w-full" />
                    </IPhoneMockup>
                </PhoneCarousel>
            </div>

            <p className="md:ml-8 text-justify mt-12">
                Once all required fields have been completed, a validation button becomes visible (corresponding to the second interface
                shown in the diagram above). This button allows the user to confirm the entered information and submit the offer creation
                request to the Sample Manager server. Two outcomes are possible:
            </p>

            <ul className="md:ml-8 mt-4 space-y-3 text-justify">
                <li className="flex gap-4">
                    <div className="h-6 w-6 p-1 rounded-lg bg-gradient-to-tr from-emerald-400 to-emerald-600 flex items-center justify-center text-white text-xs font-sfbold flex-shrink-0">
                        <Check className="w-5 h-5 text-white" />
                    </div>
                    <div>
                        <span className="font-sfbold">Successful offer creation:</span>
                        <p className=" mt-1">
                            The offer is created successfully, and a confirmation page displays the unique offer ID,
                            allowing the user to easily retrieve it later in Sample Manager.
                        </p>
                    </div>
                </li>

                <li className="flex gap-4">
                    <div className="h-6 w-6 p-1 rounded-lg bg-gradient-to-tr from-red-400 to-rose-600 flex items-center justify-center text-white text-xs font-sfbold flex-shrink-0">
                        <X className="w-5 h-5 text-white" />
                    </div>
                    <div>
                        <span className="font-sfbold">Offer creation failure:</span>
                        <p className=" mt-1">
                            An unexpected error occurs and the offer is not created. An error page is displayed,
                            inviting the user to contact an administrator and share the error message shown on screen.
                        </p>
                    </div>
                </li>
            </ul>

            <p className="md:ml-8 text-justify mt-6">
                For consistency purposes, the interfaces developed for SGRP largely reuse the same design principles as those implemented for SGRG, with only minor adjustments.

                Unlike SGRG, SGRP does not include a landing page, as there is no commercial offer creation process to integrate. Users are therefore redirected directly to the main interface.
                <br /><br />
                This design choice aims to simplify the user journey by removing an unnecessary step. While saving a single click may seem insignificant, it has a real impact on comfort and efficiency when the application is used multiple times a day.

                Additionally, since the available workflows are limited, mainly photo attachment and a small number of specific actions, there was no need to introduce additional interface complexity. This approach helps keep the application lightweight, intuitive, and efficient for everyday laboratory use.
            </p>

            <div className="my-12">
                <p className="md:ml-8 font-sfbold">Acceptance Interface</p>
                <p className="md:ml-8 mt-2 text-justify">
                    The main interface is largely similar to the one developed for SGRG, offering the same core actions: scanning a sample QR code or searching for a sample using its unique identifier.
                    The key difference lies in the data displayed, which is here directly linked to SGRP’s local databases.
                    <br /><br />
                    Once a sample is selected, the user is taken to the detail page (corresponding to the second interface in the diagram). The available actions on this page depend on the current status of the request.
                    For requests with a “received” status, a primary action button allows the user to accept the request. When this button is clicked, a confirmation dialog is displayed to validate the decision. After confirmation, the request is accepted and the user is automatically redirected back to the main interface.
                </p>
            </div>

            {/* Acceptance mockups — desktop row + mobile carousel */}
            <div className="md:ml-8 mt-6">
                <PhoneCarousel>
                    <IPhoneMockup
                        screenWidth={200}
                        screenType={"legacy"}
                        hideStatusBar
                        frameColor={"#E0E0E0"}
                    >
                        <img src={AcceptInterface1} alt="Acceptance flow — step 1" className="w-full" />
                    </IPhoneMockup>

                    <IPhoneMockup
                        screenWidth={200}
                        screenType={"legacy"}
                        hideStatusBar
                        frameColor={"#E0E0E0"}
                    >
                        <img src={AcceptInterface2} alt="Acceptance flow — step 2" className="w-full" />
                    </IPhoneMockup>

                    <IPhoneMockup
                        screenWidth={200}
                        screenType={"legacy"}
                        hideStatusBar
                        frameColor={"#E0E0E0"}
                    >
                        <img src={AcceptInterface3} alt="Acceptance flow — step 3" className="w-full" />
                    </IPhoneMockup>
                </PhoneCarousel>
            </div>

            <div className="my-12">
                <p className="md:ml-8 font-sfbold">Authorization Interface</p>
                <p className="md:ml-8 mt-2 text-justify">
                    In the authorization workflow, when a request is in progress, the main action displayed is the photo capture button.
                    This button gives access to the same image upload process implemented for SGRG.

                    At the same time, a secondary button identified by a red arrow is displayed. This button corresponds to the authorization
                    action (shown in the second interface below) and allows the user to formally authorize the request once the
                    required steps have been completed.
                </p>
            </div>

            <div className="md:ml-8 mt-6">
                <PhoneCarousel>
                    <IPhoneMockup
                        screenWidth={200}
                        screenType="legacy"
                        hideStatusBar
                        frameColor="#E0E0E0"
                    >
                        <img
                            src={AuthorizationInterface1}
                            alt="Authorization flow — step 1"
                            className="w-full"
                        />
                    </IPhoneMockup>

                    <IPhoneMockup
                        screenWidth={200}
                        screenType="legacy"
                        hideStatusBar
                        frameColor="#E0E0E0"
                    >
                        <img
                            src={AuthorizationInterface2}
                            alt="Authorization flow — step 2"
                            className="w-full"
                        />
                    </IPhoneMockup>

                    <IPhoneMockup
                        screenWidth={200}
                        screenType="legacy"
                        hideStatusBar
                        frameColor="#E0E0E0"
                    >
                        <img
                            src={AuthorizationInterface3}
                            alt="Authorization flow — step 3"
                            className="w-full"
                        />
                    </IPhoneMockup>
                </PhoneCarousel>
            </div>

            <p className="text-justify mt-12 md:ml-8">
                When this button is clicked, a pop-up window opens to ask the user which furnace was used for the test, while automatically
                displaying the test duration. Once this information has been entered and validated, the user is redirected to the main page
                and the request is authorized on the LIMS server.
            </p>

            <div className="flex gap-2 items-start md:items-center md:text-[15px] font-sfbold mt-6 mb-2">
                <div className="h-6 w-6 rounded-lg bg-gradient-to-tr from-sky-400 to-blue-600 flex items-center justify-center text-white text-xs font-sfbold flex-shrink-0">
                    <span className="text-[11px] mt-[2px] font-sfbold">07</span>
                </div>

                <span className="">
                    User Interactions
                </span>
            </div>

            <p className="text-justify md:ml-8">
                To make the application as smooth and intuitive as possible for users, three key elements were implemented: a system for handling
                error and confirmation messages, animations to guide users through their actions, and loading screens to improve readability and
                avoid any confusion during waiting times.
            </p>

            <div className="my-6">
                <p className="md:ml-8 font-sfbold">Validation or error messages</p>
                <p className="md:ml-8 mt-2 text-justify">
                    To better support users while using the application, the idea was to always keep them informed about what is happening on the
                    screen through pop-up messages displayed at the top of the interface. These messages can be of two types:

                    <ul className="mt-3 space-y-2 list-disc list-inside text-sm md:text-base text-lightPrimary dark:text-darkPrimary font-sfregular leading-relaxed">
                        <li>
                            <span className="font-sfbold">Informational messages</span> — confirm that an action was completed successfully or that a change has been applied.
                        </li>
                        <li>
                            <span className="font-sfbold">Error messages</span> — appear when something goes wrong during an interaction (e.g., a missing required field, a network issue, or a failure while saving a photo).
                        </li>
                    </ul>
                </p>
            </div>

            <div className="md:ml-8 mt-6">
                <PhoneCarousel>
                    <IPhoneMockup
                        screenWidth={200}
                        screenType="legacy"
                        hideStatusBar
                        frameColor="#E0E0E0"
                    >
                        <img src={MessageInteraction1} alt="Message interaction 1" className="w-full" />
                    </IPhoneMockup>

                    <IPhoneMockup
                        screenWidth={200}
                        screenType="legacy"
                        hideStatusBar
                        frameColor="#E0E0E0"
                    >
                        <img src={MessageInteraction2} alt="Message interaction 2" className="w-full" />
                    </IPhoneMockup>

                    <IPhoneMockup
                        screenWidth={200}
                        screenType="legacy"
                        hideStatusBar
                        frameColor="#E0E0E0"
                    >
                        <img src={MessageInteraction3} alt="Message interaction 3" className="w-full" />
                    </IPhoneMockup>
                </PhoneCarousel>
            </div>

            <div className="my-6">
                <p className="md:ml-8 font-sfbold">Animations and loading screens</p>
                <p className="md:ml-8 mt-2 text-justify">
                    Regarding animations, the primary goal was to ensure a smooth and pleasant user experience without making the application heavier.
                    To achieve this, fluid transitions were implemented between the different pages, visually guiding users through each screen change
                    in a natural way. In addition, to avoid any confusion while data is being loaded, a visual loading indicator is systematically
                    displayed whenever a page requires processing time. This lets users know that the application is working in the background, improving
                    clarity and overall understanding of how the system operates.
                </p>
            </div>

            <p className="text-[10px] uppercase tracking-[0.25em] text-lightPrimary dark:text-darkPrimary font-sfregular mt-8 mb-4">
                Test, Integration & Deployment
            </p>

            <div className="my-6">
                <p className=" mt-2 text-justify">
                    Throughout the testing phase, the primary objective was to ensure the overall reliability of the application, both in terms of connectivity
                    between Power Apps and Sample Manager and the correct implementation of the user interfaces.

                    To ensure meaningful results, the tests were conducted on real-life use cases while carefully avoiding any disruption to the production
                    environment. They were carried out in collaboration with end users, using their own profiles and devices.
                    <br />

                    This approach made it possible to validate that the overall process was functioning as expected. However, several minor adjustments were identified, along with two more significant technical constraints that needed to be addressed before considering a final deployment.
                </p>
            </div>

            <div className="flex gap-2 items-start md:items-center md:text-[15px] font-sfbold mt-6 mb-2">
                <div className="h-6 w-6 rounded-lg bg-gradient-to-tr from-sky-400 to-blue-600 flex items-center justify-center text-white text-xs font-sfbold flex-shrink-0">
                    <span className="text-[11px] mt-[2px] font-sfbold">08</span>
                </div>

                <span className="">
                    Specific technical constraints (network, authentication)
                </span>
            </div>

            <div className="my-6">
                <p className="md:ml-8 font-sfbold">1) Network and loading times</p>
                <p className="md:ml-8 mt-2 text-justify">
                    One important aspect that had not been sufficiently anticipated during development was the application’s performance under weak
                    or unstable mobile and/or Wi-Fi network conditions. In laboratory environments, especially during analysis phases, network
                    coverage is often limited, which directly impacts the user experience.

                    During testing, significant loading times were observed when retrieving sample data, sometimes reaching up to 30 seconds. This
                    noticeably slowed down workflows and quickly became a real usability issue in day-to-day operations.
                    <br /><br />

                    The objective was therefore to reduce the average loading time to under two seconds, in order to ensure smooth usage even in
                    degraded network conditions. After analysis, the main bottleneck was identified in the sample table, which contains a large
                    volume of data with more than 300 fields. In practice, however, only a small subset of these fields was actually required by
                    the application, yet all fields were being loaded by default.
                    <br /><br />

                    To address this issue, a collaboration was initiated with a colleague, Florian Pellan, who suggested an effective solution:
                    creating a dedicated SQL view in the Azure database. This view exposes only the fields strictly necessary for the application,
                    significantly reducing the amount of data transferred with each request.
                    Thanks to this optimization, loading times were substantially improved, resulting in a much more responsive and efficient application
                    when used in real laboratory conditions.
                </p>
            </div>

            <div className="my-6">
                <p className="md:ml-8 font-sfbold">2) Authentication</p>
                <p className="md:ml-8 mt-2 text-justify">
                    The second issue identified concerned the authentication process during the first use of the application. By default, Power Apps requires
                    users, upon their initial login, to manually validate permissions for each connector, and in some cases even to select the data gateway
                    being used. This behavior quickly proved to be problematic.
                    <br /><br />

                    On the one hand, end users do not have a technical background and would be completely disoriented by this type of configuration. On the
                    other hand, it would have required the application to be configured manually on each individual device, which was clearly not
                    feasible, especially on sites such as SGRG.
                    <br /><br />

                    The objective was therefore to fully simplify this step by using a shared authentication mechanism, allowing users to access the
                    application without having to perform any technical setup during their first connection.
                    <br /><br />

                    Through research on Power Apps and Power Automate forums, it was discovered that connections could be shared with other users directly
                    via the Power Automate interface. This approach was first validated by manually sharing the required connectors from my own account.
                    <br /><br />

                    Once confirmed, the final step consisted of creating a dedicated generic account specifically for the application. This account now
                    hosts all required connections and automatically shares them with all users. As a result, users can access the application seamlessly,
                    without any manual configuration or technical intervention during onboarding.
                </p>
            </div>

            <div className="flex gap-2 items-start md:items-center md:text-[15px] font-sfbold mt-6 mb-2">
                <div className="h-6 w-6 rounded-lg bg-gradient-to-tr from-sky-400 to-blue-600 flex items-center justify-center text-white text-xs font-sfbold flex-shrink-0">
                    <span className="text-[11px] mt-[2px] font-sfbold">09</span>
                </div>

                <span className="">
                    Deployment
                </span>
            </div>

            <p className="text-justify md:ml-8">
                Once all developments were completed, several meetings were organized with end users to present the overall functionality of the application, the supported use cases, and the different user journeys available depending on their roles. These sessions also provided an opportunity to answer initial questions and collect immediate feedback on usability and first impressions.

                The application was designed to complement the existing LIMS rather than fully replace it. It is currently used alongside Sample Manager: simple and frequent actions such as taking photos, attaching files, or validating requests are handled directly through the mobile application. More complex tasks requiring detailed processing or extensive data entry are still performed using the traditional Sample Manager desktop interface.
                <br /><br />

                Thanks to this complementary approach, and through monitoring tools available in Power Apps and Power Automate, it was possible to observe that several users have already integrated the application into their daily work routines. Its gradual adoption has clearly demonstrated its value in streamlining the use of Sample Manager, particularly for routine and time-sensitive field operations. The application helps save valuable time while improving data quality and team responsiveness.

                As a result, the deployment was successfully carried out on the two targeted sites: Saint-Gobain Research Provence (SGRP) and Saint-Gobain Research Germany (SGRG).
            </p>

            <p className="text-[10px] uppercase tracking-[0.25em] text-lightPrimary dark:text-darkPrimary font-sfregular mt-8 mb-4">
                Conclusion
            </p>

            <p className="text-justify ">
                Following the concrete benefits already observed in the field, the next steps of the project naturally emerged. Encouraged by the initial positive results, the outlook is now focused on extending the application’s usage to additional laboratories, as well as deploying it across other international sites within the group.
                <br />
                In parallel, a local web portal has recently been developed at SGRP to provide browser-based access to certain LIMS functionalities. In the longer term, the objective would be to connect this web portal with the mobile application, offering a dual entry point through both mobile and web interfaces. This approach would further simplify access to Sample Manager functionalities, broaden usage to a wider range of user profiles, and strengthen continuity between existing tools.
                <br />
                Future developments also include expanding the functional scope of the application. Currently, the available actions are centered on clearly identified needs such as photo attachment, offer creation, and request acceptance or validation. In the future, additional features could be integrated, such as voice input for analysis comments, result consultation, or even request creation directly from the mobile application.

                The overall ambition is to establish this solution as a fully-fledged complementary tool to the LIMS, designed for mobile usage and capable of addressing the full range of operational needs encountered in the field.
                <br /><br />
                Today, both proposed solutions (part 1 & part 2 of the project) have been successfully deployed and are fully operational in production. They are now used on a daily basis by Saint-Gobain R&D teams, supporting their workflows and improving efficiency in real laboratory conditions.
            </p>
            {/* Separator */}
            <div className="my-10">
                <div className="h-px w-full bg-ultralightGray dark:bg-darkBorder" />
            </div>






            <p className="text-[10px] uppercase tracking-[0.25em] text-lightPrimary dark:text-darkPrimary font-sfregular mt-8 mb-4">
                Acknowledgements
            </p>


            <p className="text-justify">
                I would like to sincerely thank Saint-Gobain Research Provence for giving me the opportunity to take part in this valuable experience.
                Also, I would like to express my special gratitude to <strong>Céline Wiss</strong>, <strong>Jérôme Maho</strong>, <strong>Florian Pellan</strong> and <strong>Stéphanie Cambon</strong> for their support, guidance, and availability throughout this entire experience.
            </p>


            <Masonry />



        </div >
    );
};

const PhoneCarousel = ({ children }) => {
    const slides = React.Children.toArray(children);
    const [index, setIndex] = useState(0);

    const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
    const next = () => setIndex((i) => (i + 1) % slides.length);

    return (
        <div className="w-full">
            {/* Mobile carousel */}
            <div className="relative md:hidden">
                <div className="w-full overflow-visible">
                    <div
                        className="flex items-center gap-4 transition-transform duration-300 ease-out"
                        style={{
                            // 220px slide width + 16px gap, center active slide
                            transform: `translateX(calc(50% - ${index} * (220px + 16px) - 110px))`,
                        }}
                    >
                        {slides.map((slide, i) => {
                            const dist = Math.abs(i - index);
                            const isActive = i === index;

                            return (
                                <div
                                    key={i}
                                    className="shrink-0"
                                    style={{
                                        width: 220,
                                        transform: `scale(${isActive ? 1 : dist === 1 ? 0.92 : 0.86})`,
                                        opacity: isActive ? 1 : dist === 1 ? 0.55 : 0.25,
                                        transition: "transform 300ms ease-out, opacity 300ms ease-out",
                                    }}
                                >
                                    {slide}
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Arrows */}
                <div className="mt-4 flex items-center justify-center gap-3">
                    <button
                        type="button"
                        onClick={prev}
                        aria-label="Previous"
                        className="h-9 w-9 rounded-full border border-ultralightGray dark:border-darkBorder bg-lightBG dark:bg-darkContainer grid place-items-center"
                    >
                        <ChevronLeft className="h-5 w-5" />
                    </button>

                    <div className="text-[10px] uppercase tracking-[0.25em] text-lightSecondary dark:text-darkSecondary font-sfregular">
                        {index + 1} / {slides.length}
                    </div>

                    <button
                        type="button"
                        onClick={next}
                        aria-label="Next"
                        className="h-9 w-9 rounded-full border border-ultralightGray dark:border-darkBorder bg-lightBG dark:bg-darkContainer grid place-items-center"
                    >
                        <ChevronRight className="h-5 w-5" />
                    </button>
                </div>
            </div>

            {/* Desktop row */}
            <div className="hidden md:flex justify-between">
                {slides}
            </div>
        </div>
    );
};


const Step = ({ color = "blue", title, desc, icon: Icon }) => {
    const isOrange = color === "orange";

    return (
        <div className="flex flex-col items-center text-center gap-3 h-full">
            {/* Icon */}
            <div
                className={[
                    "h-16 w-16 rounded-full grid place-items-center shadow-sm shrink-0",
                    isOrange
                        ? "bg-orange-400"
                        : "bg-gradient-to-tr from-sky-400 to-blue-600",
                ].join(" ")}
            >
                <Icon className="w-7 h-7 text-white" strokeWidth={2} />
            </div>

            {/* Text block (fixed heights to align across steps) */}
            <div className="flex flex-col items-center w-full">
                <p className="font-sfbold text-sm md:text-base text-lightPrimary dark:text-darkPrimary min-h-[40px] md:min-h-[44px] leading-snug flex items-center justify-center">
                    {title}
                </p>
                <p className="text-xs text-lightSecondary dark:text-darkSecondary mt-2 max-w-[220px] min-h-[48px] md:min-h-[56px] leading-snug">
                    {desc}
                </p>
            </div>
        </div>
    );
};

function PhotoAttachmentWorkflow() {
    const previousSteps = [
        {
            color: "orange",
            title: "1 - Request creation",
            desc: "The requester creates a new analysis request (DAT).",
            icon: FilePlus2,
        },
        {
            color: "blue",
            title: "2 - Sample reception",
            desc: "The lab receives the sample and validates the request.",
            icon: PackageCheck,
        },
        {
            color: "blue",
            title: "3 - Experiment",
            desc: "The technician performs the experiment.",
            icon: FlaskConical,
        },
        {
            color: "blue",
            title: "4 - Photo + description",
            desc: "A photo is taken and described for visual tracking.",
            icon: Camera,
        },
        {
            color: "blue",
            title: "5 - Go back to the office",
            desc: "The technician must leave the lab to access a computer.",
            icon: BriefcaseBusiness,
        },
        {
            color: "blue",
            title: "6 - Upload to local file server",
            desc: "The photo is manually transferred and stored locally.",
            icon: FolderUp,
        },
        {
            color: "blue",
            title: "7 - Send an email",
            desc: "The photo/report is sent by email to the requester/client.",
            icon: Mail,
        },
        {
            color: "blue",
            title: "8 - Results entry",
            desc: "Results are then entered into the LIMS (Sample Manager).",
            icon: Database,
        },
    ];

    const newSteps = [
        {
            color: "orange",
            title: "1 - Request creation",
            desc: "The requester creates a new analysis request (DAT).",
            icon: FilePlus2,
        },
        {
            color: "blue",
            title: "2 - Sample reception",
            desc: "The lab receives the sample and validates the request.",
            icon: PackageCheck,
        },
        {
            color: "blue",
            title: "3 - Experiment",
            desc: "The technician performs the experiment.",
            icon: FlaskConical,
        },
        {
            color: "blue",
            title: "4 - Scan QR code",
            desc: "Scan the QR code to instantly access the sample context.",
            icon: QrCode,
        },
        {
            color: "blue",
            title: "5 - Take photo",
            desc: "The photo is captured and automatically linked to the sample.",
            icon: Camera,
        },
        {
            color: "blue",
            title: "8 - Results entry",
            desc: "Results are then entered into the LIMS (Sample Manager).",
            icon: Database,
        },
    ];

    return (
        <section className="my-6 md:ml-8">
            <div className="w-full flex flex-col items-center">
                {/* PREVIOUS PROCESS */}
                <p className="text-[11px] uppercase tracking-[0.25em] text-lightSecondary dark:text-darkSecondary font-sfregular mb-6">
                    Previous process
                </p>

                <div className="w-full">
                    {/* Mobile: stack / Desktop: row */}
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 md:gap-0">
                        {previousSteps.map((s, i) => (
                            <React.Fragment key={s.title}>
                                <div className="md:flex-1">
                                    <Step {...s} />
                                </div>

                                {[1, 6].includes(i) && (
                                    <div className="w-px mx-4 self-stretch bg-lightSecondary dark:bg-darkSecondary" />
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                    <div className="flex flex-row items-center justify-center gap-6 mt-8">
                        <div className="flex items-center gap-2">
                            <div className="h-4 w-4 rounded-full bg-orange-400" />
                            <span className="text-xs text-lightPrimary dark:text-darkPrimary font-sfregular">
                                Requester / engineer
                            </span>
                        </div>

                        <div className="flex items-center gap-2">
                            <div className="h-4 w-4 rounded-full bg-gradient-to-tr from-sky-400 to-blue-600" />
                            <span className="text-xs text-lightPrimary dark:text-darkPrimary font-sfregular">
                                Laboratory technician
                            </span>
                        </div>
                    </div>

                    <p className="text-justify py-8">
                        The idea of this new process is to leverage mobile technology to streamline photo attachment directly from the laboratory environment.
                        By scanning a QR code associated with the sample, technicians can quickly access the relevant context and upload photos directly from their mobile device.
                        This eliminates the need to leave the lab, significantly reducing time and effort while improving data accuracy and traceability within Sample Manager.
                    </p>

                    {/* NEW PROCESS */}
                    <p className="text-[11px] text-center uppercase tracking-[0.25em] text-lightSecondary dark:text-darkSecondary font-sfregular mb-6">
                        New process
                    </p>


                    <div className="w-full max-w-5xl">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-6 md:gap-0 mx-auto mt-8">
                            {newSteps.map((s, i) => (
                                <React.Fragment key={s.title}>

                                    <div className="md:flex-1">
                                        <Step {...s} />
                                    </div>
                                    {[1, 4].includes(i) && (
                                        <div className="w-px mx-4 self-stretch bg-lightSecondary dark:bg-darkSecondary" />
                                    )}

                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>






                {/* LEGEND */}
                <div className="flex flex-row items-center gap-6 mt-8">
                    <div className="flex items-center gap-2">
                        <div className="h-4 w-4 rounded-full bg-orange-400" />
                        <span className="text-xs text-lightPrimary dark:text-darkPrimary font-sfregular">
                            Requester / engineer
                        </span>
                    </div>

                    <div className="flex items-center gap-2">
                        <div className="h-4 w-4 rounded-full bg-gradient-to-tr from-sky-400 to-blue-600" />
                        <span className="text-xs text-lightPrimary dark:text-darkPrimary font-sfregular">
                            Laboratory technician
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}