import { React, useState, useRef } from "react";
import "./screens.css";
import aymane from "@/assets/PDP.jpeg";
import travel from "@/assets/Aymane.jpg";
import maroc from "@/assets/Maroc.jpg";
import snow from "@/assets/AymaneSnow.JPG";
import mangas from "@/assets/mangas.jpg";
import bike from "@/assets/bike.JPG";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { useEasterEgg } from "@/context/EasterEggContext";
import { CoolMode } from "@/components/ui/cool-particle";
import { LinkPreview } from "@/components/ui/link-preview";
import {
  Briefcase,
  GraduationCap,
  Rocket,
  Target,
  Heart,
  Camera,
  Music,
  Globe2,
  Quote,
  MapPin,
  Flag,
  X,
  Calendar,
  Sparkles,
} from "lucide-react";
import { toast } from "react-hot-toast";
import * as Dialog from "@radix-ui/react-dialog";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";
import SaintGobain from "@/assets/Saint-Gobain.png";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/ToolTip";
import FadeIn from "@/components/FadeIn";

export default function AboutScreen() {
  const navigate = useNavigate();
  const { } = useEasterEgg();
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
  const eggLongPressTimer = useRef(null);
  const egg3Found = Array.isArray(foundEggs) ? foundEggs.includes("#3") : false;

  const items = [
    {
      title: "Travelling",
      image: travel,
    },
    {
      title: "Islam",
      image: maroc,
      className: "absolute top-40 left-[25%] rotate-[-7deg]",
    },
    {
      title: "Snowboarding",
      image: snow,
      className: "absolute top-5 left-[40%] rotate-[8deg]",
    },
    {
      title: "Riding Bikes",
      image: bike,
      className: "absolute top-32 left-[55%] rotate-[10deg]",
    },
    {
      title: "Mangas",
      image: mangas,
      className: "absolute top-20 right-[35%] rotate-[2deg]",
    },
    {
      title: "Nature",
      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      className: "absolute top-8 left-[30%] rotate-[4deg]",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-0 lg:px-8">
      <section className="h-screen w-full flex items-center justify-center">
        <FadeIn className="flex flex-col items-center text-center space-y-4">
          {/* Photo */}
          <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-ultralightGray shadow-md">
            <img
              src={aymane}
              alt="Aymane Hilmi"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Nom principal */}
          <h1 className="text-3xl md:text-5xl font-sfbold tracking-tight text-lightPrimary dark:text-darkPrimary flex flex-col justify-center items-center gap-2">
            Aymane Hilmi
          </h1>

          {/* Nom en arabe + phonétique */}
          <div className="flex items-baseline gap-4">
            <span className="font-InkBrushArabic bg-brandgradient bg-clip-text text-transparent text-2xl md:text-3xl px-1">
              أيمن حلمي
            </span>
            <span className="text-sm md:text-base text-lightPrimary dark:text-darkPrimary font-sfregular">
              / aɪˈmeːn hɪlˈmiː /
            </span>
          </div>

          {/* Description */}
          <p className="text-sm md:text-base lg:text-lg text-lightPrimary dark:text-darkPrimary font-sfregular text-justify md:text-center leading-relaxed ">
            Aymane Hilmi is 22 and a software engineer based in Aix-en-Provence,
            France. As a polyglot, he speaks five languages: Italian, French,
            Moroccan Arabic (Darija), English, and Spanish. Born in{" "}
            <span
              onClick={() => incrementEggs("#2")}
              className="inline italic tracking-[0.5px] text-foreground/90 transition-all duration-300
             font-sfbold hover:bg-gradient-to-r hover:from-[#009246] hover:via-white hover:to-[#CE2B37]
             hover:text-transparent hover:bg-clip-text"
            >
              Italy
            </span>{" "}
            in 2002, he moved to France at age 12, earned a Scientific
            Baccalaureate (math option) with honors, and later a computer
            engineering degree. Today, Aymane has chosen to focus on two things:
            building his own company with his wife and traveling to discover new
            cultures and perspectives.
          </p>
          <div className=" h-1 w-24 bg-brandgradient rounded-full hidden md:flex" />
        </FadeIn>
      </section>

      <section id="journey" className="w-full flex">

        <FadeIn className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12">
          {/* Title & intro */}
          <div className="md:col-span-2" i={0}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-ramidots bg-brandgradient bg-clip-text text-transparent w-fit inline-block">
              My Journey
            </h2>
            <div className="mt-3 h-1 w-24 bg-brandgradient rounded-full" />
            <p className="mt-5 text-lightPrimary dark:text-darkPrimary font-sfregular leading-relaxed text-sm md:text-base lg:text-lg text-justify">
              A look at my recent experiences that had the biggest impact on me,
              both professionally and personally.
            </p>

            {/* "Currently" card */}

            <div
              className="mt-8 w-full text-left rounded-2xl bg-bgLight dark:bg-darkContainer border border-ultralightGray dark:border-darkBorder p-6 shadow-sm hover:shadow-md transition-shadow focus:outline-none"
            >
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center rounded-full bg-ultralightGray dark:bg-bgDark px-3 py-1 text-xs text-lightPrimary dark:text-darkPrimary font-sfregular">
                  Currently
                </span>
                <span className="text-sm text-lightPrimary dark:text-darkPrimary font-sfregular">
                  Aix-en-Provence, FR
                  {/* Kuala Lumpur, MY   */}
                </span>
              </div>
              <h3 className="mt-4 text-2xl md:text-xl text-lightPrimary dark:text-darkPrimary font-sfbold">
                Building my own company
              </h3>
              <p className="mt-2 text-lightPrimary dark:text-darkPrimary font-sfregular text-sm md:text-base">
                I decided to leave Saint-Gobain to focus on building my own
                projects, collaborating with my wife to create meaningful and
                innovative solutions.
              </p>
            </div>
          </div>
          <div className="absolute text-lightSecondary right-48 bottom-12 flex-row items-center gap-2 z-[99999] hidden md:flex">
            <svg
              className="w-10 h-6  opacity-70 -rotate-45 -mb-8"
              viewBox="0 0 220 50"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M21.489 29.4305C36.9333 31.3498 51.3198 33.0559 65.7063 34.9753C66.7641 35.1885 67.6104 36.4681 69.9376 38.3875C63.1675 39.2406 57.8783 40.3069 52.5892 40.5201C38.6259 40.9467 24.8741 40.9467 10.9107 40.9467C9.21821 40.9467 7.5257 41.1599 5.83317 40.7334C0.332466 39.6671 -1.57164 36.0416 1.39028 31.1365C2.87124 28.7906 4.56377 26.658 6.46786 24.7386C13.6611 17.4876 21.0659 10.4499 28.4707 3.41224C29.7401 2.13265 31.6442 1.49285 34.183 0C34.6061 10.8765 23.8162 13.8622 21.489 22.3927C23.3931 21.9662 25.0856 21.7529 26.5666 21.3264C83.6894 5.54486 140.601 7.25099 197.3 22.606C203.224 24.0988 208.936 26.4447 214.649 28.5773C217.61 29.6437 220.149 31.9896 218.457 35.6151C216.976 39.2406 214.014 39.2406 210.629 37.7477C172.759 20.6866 132.561 18.7672 91.9404 19.407C70.7838 19.6203 50.0504 21.9662 29.5285 26.8713C26.9897 27.5111 24.4509 28.3641 21.489 29.4305Z" />
            </svg>

            <p className="text-base font-handwriting opacity-80 pr-1 -mt-4">
              Click for more info
            </p>
          </div>

          {/* Timeline */}
          <div className="md:col-span-3">
            <ol className="relative border-s border-ultralightGray dark:border-darkBorder">
              {/* Item 1 */}
              <li className="ms-6 py-6 first:pt-0 last:pb-0">
                <span
                  className="absolute -start-1.5 mt-2 size-3 rounded-full bg-brandgradient"
                  aria-hidden="true"
                />
                <Dialog.Root>
                  <Dialog.Trigger asChild>
                    <button
                      type="button"
                      className="group w-full text-left rounded-2xl bg-bgLight dark:bg-darkContainer border border-ultralightGray dark:border-darkBorder p-5 
             hover:shadow-lg hover:-translate-y-1 transition-all"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <h4 className="text-lg md:text-xl font-sfbold text-lightPrimary dark:text-darkPrimary flex items-center gap-2">
                          SWE at Saint-Gobain (Work-Study)
                          <span className="inline-flex items-center text-lightPrimary dark:text-darkPrimary font-sfregular transition-transform group-hover:translate-x-1">
                            ↗
                          </span>
                        </h4>
                        <span className="text-xs md:text-sm text-lightPrimary dark:text-darkPrimary font-sfregular">
                          2022 — 2025
                        </span>
                      </div>
                      <p className="mt-2 text-lightPrimary dark:text-darkPrimary font-sfregular text-sm md:text-base text-justify">
                        Software and mobile application development to automate
                        the daily workflows of Saint-Gobain laboratories, making
                        processes faster, more reliable, and user-friendly.
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        <Badge>C#</Badge>
                        <Badge>.NET</Badge>
                        <Badge>SQL</Badge>
                        <Badge>LIMS</Badge>
                        <Badge>Sample Manager</Badge>
                        <Badge>Power Platform</Badge>
                      </div>
                    </button>
                  </Dialog.Trigger>

                  {/* Dialog content */}
                  <Dialog.Portal>
                    <Dialog.Overlay className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm" />

                    <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-[92vw] max-w-3xl -translate-x-1/2 -translate-y-1/2 rounded-2xl  bg-bgLight dark:bg-darkContainer  shadow-xl focus:outline-none">
                      {/* Bouton de fermeture */}
                      <Dialog.Close
                        className="absolute right-5 top-5 inline-flex items-center justify-center text-lightPrimary dark:text-darkPrimary font-sfregular"
                        aria-label="Close"
                      >
                        <X className="size-6" />
                      </Dialog.Close>

                      {/* Contenu scrollable */}
                      <div className="max-h-[85svh] overflow-y-auto p-6 md:p-8">
                        {/* Header */}
                        <div className="grid grid-cols-1 md:grid-cols-[112px,1fr] gap-5 md:gap-7">
                          {/* Logo */}
                          <div className="flex items-start md:items-center">
                            <div className="size-28 shrink-0 overflow-hidden dark:bg-bgLight dark:rounded-xl ">
                              <img
                                src={SaintGobain}
                                alt="Saint-Gobain Research logo"
                                className="h-full w-full object-contain p-3"
                              />
                            </div>
                          </div>

                          {/* Titre & infos */}
                          <div>
                            <Dialog.Title className="text-xl md:text-2xl font-sfbold text-lightPrimary dark:text-darkPrimary">
                              Software Engineer (Work-Study)
                            </Dialog.Title>
                            <Dialog.Description asChild>
                              <div className="mt-1 text-lightPrimary dark:text-darkPrimary font-sfregular">
                                Saint-Gobain Research Provence
                              </div>
                            </Dialog.Description>

                            <div className="mt-3 flex flex-wrap items-center gap-2 text-sm">
                              <span className="inline-flex items-center gap-1 rounded-full bg-bgLight dark:bg-bgDark border border-ultralightGray dark:border-darkBorder px-3 py-1 text-lightPrimary dark:text-darkPrimary font-sfregular">
                                <Calendar
                                  className="size-4"
                                  aria-hidden="true"
                                />
                                2023 — 2025
                              </span>
                              <span className="inline-flex items-center gap-1 rounded-full bg-bgLight dark:bg-bgDark border border-ultralightGray dark:border-darkBorder px-3 py-1 text-lightPrimary dark:text-darkPrimary font-sfregular">
                                <MapPin className="size-4" aria-hidden="true" />
                                Cavaillon, Provence-Alpes-Côte d'Azur
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Divider */}
                        <div className="my-6 h-px w-full bg-gray-100" />

                        {/* Texte */}
                        <div className="space-y-4 text-lightPrimary dark:text-darkPrimary font-sfregular leading-relaxed text-sm md:text-base text-justify">
                          <p>
                            During my apprenticeship at Saint-Gobain Research, I
                            worked within the R&D teams to design and develop
                            internal applications. My focus was on building
                            intuitive user interfaces that allowed engineers and
                            researchers to better manage laboratory data and
                            daily workflows.
                          </p>
                          <p>
                            This experience taught me how to balance technical
                            precision with user-centric design. I collaborated
                            with multidisciplinary teams, improved the
                            performance of critical screens, and contributed to
                            maintaining a consistent design system across
                            multiple applications.
                          </p>
                        </div>
                        {/* Missions & Results */}
                        <div className="space-y-8 mt-10">
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Mission 1 */}
                            <div className="rounded-2xl  bg-bgLight dark:bg-bgDark border border-ultralightGray dark:border-darkBorder p-5 hover:shadow-md transition-shadow">
                              <h5 className="text-base font-sfbold text-lightPrimary dark:text-darkPrimary">
                                Workflow Automations
                              </h5>
                              <p className="mt-2 text-sm text-lightPrimary dark:text-darkPrimary font-sfregular ">
                                Developed internal solutions to streamline
                                laboratory data entry and daily reporting
                                processes
                              </p>
                              <p className="mt-3 text-sm font-sfregular text-green-600">
                                → Reduced manual workload considerably
                              </p>
                            </div>

                            {/* Mission 2 */}
                            <div className="rounded-2xl bg-bgLight dark:bg-bgDark border border-ultralightGray dark:border-darkBorder p-5 hover:shadow-md transition-shadow">
                              <h5 className="text-base font-sfbold text-lightPrimary dark:text-darkPrimary">
                                Mobile Application
                              </h5>
                              <p className="mt-2 text-sm text-lightPrimary dark:text-darkPrimary font-sfregular">
                                Built a LIMS mobile app for technicians to
                                access and update experiment results directly
                                from the labs.
                              </p>
                              <p className="mt-3 text-sm font-sfregular text-green-600">
                                → Increased real-time data availability &
                                traceability
                              </p>
                            </div>

                            {/* Mission 3 */}
                            <div className="rounded-2xl bg-bgLight dark:bg-bgDark border border-ultralightGray dark:border-darkBorder p-5 hover:shadow-md transition-shadow">
                              <h5 className="text-base font-sfbold text-lightPrimary dark:text-darkPrimary">
                                Support & Supervision
                              </h5>
                              <p className="mt-2 text-sm text-lightPrimary dark:text-darkPrimary font-sfregular">
                                Provided support and supervision of the Sample
                                Manager software for end users.
                              </p>
                              <p className="mt-3 text-sm font-sfregular text-green-600">
                                → Improved user adoption and daily efficiency
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Dialog.Content>
                  </Dialog.Portal>
                </Dialog.Root>
              </li>

              {/* item 2 */}

              <li className="ms-6 py-6 first:pt-0 last:pb-0">
                <span
                  className="absolute -start-1.5 mt-2 size-3 rounded-full bg-brandgradient"
                  aria-hidden="true"
                />
                <Dialog.Root>
                  <Dialog.Trigger asChild>
                    <button
                      type="button"
                      className="group w-full text-left rounded-2xl bg-bgLight dark:bg-darkContainer border border-ultralightGray dark:border-darkBorder p-5 
             hover:shadow-lg hover:-translate-y-1 transition-all"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <h4 className="text-lg md:text-xl font-sfbold text-lightPrimary dark:text-darkPrimary flex items-center gap-2">
                          Automation Engineer at INETUM (Internship)
                          <span className="inline-flex items-center text-lightPrimary dark:text-darkPrimary font-sfregular transition-transform group-hover:translate-x-1">
                            ↗
                          </span>
                        </h4>
                        <span className="text-xs md:text-sm text-lightPrimary dark:text-darkPrimary font-sfregular">
                          2021 — 2022
                        </span>
                      </div>
                      <p className="mt-2 text-lightPrimary dark:text-darkPrimary font-sfregular text-sm md:text-base text-justify">
                        My first real IT experience was as an Automation
                        Engineer, where I used UiPath to automate business
                        processes and streamline workflows for various INETUM
                        clients.
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        <Badge>Mentorship</Badge>
                        <Badge>Communication</Badge>
                        <Badge>Teamwork</Badge>
                        <Badge>Event Organization</Badge>
                      </div>
                    </button>
                  </Dialog.Trigger>

                  {/* Dialog content */}
                  <Dialog.Portal>
                    <Dialog.Overlay className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm" />

                    <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-[92vw] max-w-3xl -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-bgLight dark:bg-darkContainer shadow-xl focus:outline-none">
                      {/* Bouton de fermeture */}
                      <Dialog.Close
                        className="absolute right-5 top-5 inline-flex items-center justify-center text-lightPrimary dark:text-darkPrimary font-sfregular"
                        aria-label="Close"
                      >
                        <X className="size-6" />
                      </Dialog.Close>

                      {/* Contenu scrollable */}
                      <div className="max-h-[85svh] overflow-y-auto p-6 md:p-8">
                        {/* Header */}
                        <div className="grid grid-cols-1 md:grid-cols-[112px,1fr] gap-5 md:gap-7">
                          {/* Logo */}
                          <div className="flex items-start md:items-center">
                            <div className="size-32 shrink-0 overflow-hidden dark:bg-bgLight dark:rounded-xl">
                              <img
                                src="https://www.inetum.com/upload/public/styles/opengraph/public/media/image/2021-04/logo%20inetum_0.PNG?itok=DAgdxwUw"
                                alt="INETUM logo"
                                className="h-full w-full object-contain p-3"
                              />
                            </div>
                          </div>

                          {/* Titre & infos */}
                          <div>
                            <Dialog.Title className="text-xl md:text-2xl font-sfbold text-lightPrimary dark:text-darkPrimary">
                              Automation Engineer
                            </Dialog.Title>
                            <Dialog.Description asChild>
                              <div className="mt-1 text-lightPrimary dark:text-darkPrimary font-sfregular">INETUM</div>
                            </Dialog.Description>

                            <div className="mt-3 flex flex-wrap items-center gap-2 text-sm">
                              <span className="inline-flex items-center gap-1 rounded-full bg-bgLight dark:bg-bgDark border border-ultralightGray dark:border-darkBorder px-3 py-1 text-lightPrimary dark:text-darkPrimary font-sfregular">
                                <Calendar
                                  className="size-4"
                                  aria-hidden="true"
                                />
                                2021 — 2022
                              </span>
                              <span className="inline-flex items-center gap-1 rounded-full bg-bgLight dark:bg-bgDark border border-ultralightGray dark:border-darkBorder px-3 py-1 text-lightPrimary dark:text-darkPrimary font-sfregular">
                                <MapPin className="size-4" aria-hidden="true" />
                                Montpellier, France
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Divider */}
                        <div className="my-6 h-px w-full bg-ultralightGray" />

                        {/* Texte */}
                        <div className="space-y-4 text-lightPrimary dark:text-darkPrimary font-sfregular leading-relaxed">
                          <p className="text-sm md:text-base text-lightPrimary dark:text-darkPrimary font-sfregular leading-relaxed">
                            At Inetum, I focused on business process automation
                            using UiPath, transforming manual, repetitive
                            workflows into reliable, maintainable robots and
                            orchestrations across multiple teams.
                            <br />
                            <br />I also served as Incident Manager for the
                            supervision/monitoring platform used by Pôle emploi,
                            coordinating triage and resolution, tracking KPI's,
                            communicating with stakeholders, and driving
                            root-cause analysis to prevent recurrence.
                          </p>
                        </div>
                        {/* Missions & Results */}
                        <div className="space-y-8 mt-10">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Mission 1 */}
                            <div className="rounded-2xl bg-bgLight dark:bg-bgDark border border-ultralightGray dark:border-darkBorder p-5 hover:shadow-md transition-shadow">
                              <h5 className="text-base font-sfbold text-lightPrimary dark:text-darkPrimary">
                                Process Automation
                              </h5>
                              <p className="mt-2 text-sm text-lightPrimary dark:text-darkPrimary font-sfregular">
                                Automated business processes with UiPath,
                                replacing repetitive manual tasks with reliable
                                robots and workflows.
                              </p>
                              <p className="mt-3 text-sm font-sfregular text-green-600">
                                → Increased efficiency and reduced human errors
                              </p>
                            </div>

                            {/* Mission 2 */}
                            <div className="rounded-2xl bg-bgLight dark:bg-bgDark border border-ultralightGray dark:border-darkBorder p-5 hover:shadow-md transition-shadow">
                              <h5 className="text-base font-sfbold text-lightPrimary dark:text-darkPrimary">
                                Incident Management
                              </h5>
                              <p className="mt-2 text-sm text-lightPrimary dark:text-darkPrimary font-sfregular">
                                Managed incidents for the monitoring platform at
                                Pôle emploi, ensuring quick resolution.
                              </p>
                              <p className="mt-3 text-sm font-sfregular text-green-600">
                                → Improved service reliability and client
                                satisfaction
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Dialog.Content>
                  </Dialog.Portal>
                </Dialog.Root>
              </li>

              {/* item 3 */}

              <li className="ms-6 py-6 first:pt-0 last:pb-0">
                <span
                  className="absolute -start-1.5 mt-2 size-3 rounded-full bg-brandgradient"
                  aria-hidden="true"
                />
                <Dialog.Root>
                  <Dialog.Trigger asChild>
                    <button
                      type="button"
                      className="group w-full text-left rounded-2xl bg-bgLight dark:bg-darkContainer border border-ultralightGray dark:border-darkBorder p-5 
             hover:shadow-lg hover:-translate-y-1 transition-all"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <h4 className="text-lg md:text-xl font-sfbold text-lightPrimary dark:text-darkPrimary flex items-center gap-2">
                          Civic Volunteer at "AVEC" association
                          <span className="inline-flex items-center text-lightPrimary dark:text-darkPrimary font-sfregular transition-transform group-hover:translate-x-1">
                            ↗
                          </span>
                        </h4>
                        <span className="text-xs md:text-sm text-lightPrimary dark:text-darkPrimary font-sfregular">
                          2020 — 2021
                        </span>
                      </div>
                      <p className="mt-2 text-lightPrimary dark:text-darkPrimary font-sfregular text-sm md:text-base text-justify">
                        I completed a Voluntary Civic Service as a science
                        mentor, supporting high school and middle school
                        students in scientific subjects. This experience also
                        helped me finance my engineering studies.
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        <Badge>Mentorship</Badge>
                        <Badge>Communication</Badge>
                        <Badge>Teamwork</Badge>
                        <Badge>Event Organization</Badge>
                      </div>
                    </button>
                  </Dialog.Trigger>

                  {/* Dialog content */}
                  <Dialog.Portal>
                    <Dialog.Overlay className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm" />

                    <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-[92vw] max-w-3xl -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-bgLight dark:bg-darkContainer shadow-xl focus:outline-none">
                      {/* Bouton de fermeture */}
                      <Dialog.Close
                        className="absolute right-5 top-5 inline-flex items-center justify-center text-lightPrimary dark:text-darkPrimary font-sfregular"
                        aria-label="Close"
                      >
                        <X className="size-6" />
                      </Dialog.Close>

                      {/* Contenu scrollable */}
                      <div className="max-h-[85svh] overflow-y-auto p-6 md:p-8">
                        {/* Header */}
                        <div className="grid grid-cols-1 md:grid-cols-[112px,1fr] gap-5 md:gap-7">
                          {/* Logo */}
                          <div className="flex items-start md:items-center">
                            <div className="size-28 shrink-0 overflow-hidden dark:bg-bgLight dark:rounded-xl">
                              <img
                                src="https://upload.wikimedia.org/wikipedia/fr/thumb/2/2f/Logo_Service_civique.svg/langfr-2880px-Logo_Service_civique.svg.png"
                                alt="Service Civique logo"
                                className="h-full w-full object-contain p-3"
                              />
                            </div>
                          </div>

                          {/* Titre & infos */}
                          <div>
                            <Dialog.Title className="text-xl md:text-2xl font-sfbold text-lightPrimary dark:text-darkPrimary">
                              Civic Volunteer (Service Civique)
                            </Dialog.Title>
                            <Dialog.Description asChild>
                              <div className="mt-1 text-lightPrimary dark:text-darkPrimary font-sfregular">
                                AVEC association
                              </div>
                            </Dialog.Description>

                            <div className="mt-3 flex flex-wrap items-center gap-2 text-sm">
                              <span className="inline-flex items-center gap-1 rounded-full bg-bgLight dark:bg-bgDark border border-ultralightGray dark:border-darkBorder px-3 py-1 text-lightPrimary dark:text-darkPrimary font-sfregular">
                                <Calendar
                                  className="size-4"
                                  aria-hidden="true"
                                />
                                2021 — 2022
                              </span>
                              <span className="inline-flex items-center gap-1 rounded-full bg-bgLight dark:bg-bgDark border border-ultralightGray dark:border-darkBorder px-3 py-1 text-lightPrimary dark:text-darkPrimary font-sfregular">
                                <MapPin className="size-4" aria-hidden="true" />
                                Montpellier, France
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Divider */}
                        <div className="my-6 h-px w-full bg-gray-100" />

                        {/* Texte */}
                        <div className="space-y-4 text-lightPrimary dark:text-darkPrimary font-sfregular leading-relaxed">
                          <p className="text-sm md:text-base text-lightPrimary dark:text-darkPrimary font-sfregular leading-relaxed">
                            I completed a{" "}
                            <LinkPreview
                              imageSrc="https://www.missionlocalehautperigord.fr/wp-content/uploads/2023/08/Service-Civique-1080x627.jpg"
                              url="https://www.service-civique.gouv.fr/"
                              isStatic
                              className="font-sfbold text-black dark:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-red-500 hover:bg-clip-text hover:text-transparent"
                            >
                              Voluntary Civic Service
                            </LinkPreview>
                            , a French national program that allows young people
                            to engage in meaningful social missions while
                            gaining experience. My role combined academic
                            support and community engagement: I helped high
                            school and middle school students prepare for their
                            Scientific Baccalaureate and Brevet exams by
                            mentoring them in core scientific subjects.
                            <br />
                            <br />I also took part in organizing animations and
                            educational activities during school holidays,
                            fostering social interaction and collective
                            learning. This experience allowed me to grow both as
                            a mentor and an animator, while financing my
                            engineering studies.
                          </p>
                        </div>
                        {/* Missions & Results */}
                        <div className="space-y-8 mt-10">
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Mission 1 */}
                            <div className="rounded-2xl bg-bgLight dark:bg-bgDark border border-ultralightGray dark:border-darkBorder p-5 hover:shadow-md transition-shadow">
                              <h5 className="text-base font-sfbold text-lightPrimary dark:text-darkPrimary">
                                Exam Preparation
                              </h5>
                              <p className="mt-2 text-sm text-lightPrimary dark:text-darkPrimary font-sfregular">
                                Organized official mock sessions and practice
                                tests, preparing tailored subjects in advance to
                                train students for exams.
                              </p>
                              <p className="mt-3 text-sm font-sfregular text-green-600">
                                → Helped students gain confidence for exams
                              </p>
                            </div>

                            {/* Mission 2 */}
                            <div className="rounded-2xl bg-bgLight dark:bg-bgDark border border-ultralightGray dark:border-darkBorder p-5 hover:shadow-md transition-shadow">
                              <h5 className="text-base font-sfbold text-lightPrimary dark:text-darkPrimary">
                                Mentorship
                              </h5>
                              <p className="mt-2 text-sm text-lightPrimary dark:text-darkPrimary font-sfregular">
                                Supported students individually, monitored
                                progress, and developed communication adapted to
                                their needs.
                              </p>
                              <p className="mt-3 text-sm font-sfregular text-green-600">
                                → Strengthened motivation and academic
                                performance
                              </p>
                            </div>

                            {/* Mission 3 */}
                            <div className="rounded-2xl bg-bgLight dark:bg-bgDark border border-ultralightGray dark:border-darkBorder p-5 hover:shadow-md transition-shadow">
                              <h5 className="text-base font-sfbold text-lightPrimary dark:text-darkPrimary">
                                Activities & Planning
                              </h5>
                              <p className="mt-2 text-sm text-lightPrimary dark:text-darkPrimary font-sfregular">
                                Planned and led activities, including vacation
                                programs, to build social bonds and foster
                                collective learning.
                              </p>
                              <p className="mt-3 text-sm font-sfregular text-green-600">
                                → Improved student engagement
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Dialog.Content>
                  </Dialog.Portal>
                </Dialog.Root>
              </li>
            </ol>
          </div>
        </FadeIn>
      </section>

      <section id="philosophy" className=" w-full mt-24">
        <div className="w-full max-w-6xl mx-auto">
          {/* Header */}
          <FadeIn className="" i={0}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-ramidots bg-brandgradient bg-clip-text text-transparent w-fit inline-block">
              My Style & Philosophy
            </h2>
            <div className="mt-3 h-1 w-24 bg-brandgradient rounded-full" />
            <p className="mt-5 text-lightPrimary dark:text-darkPrimary font-sfregular leading-relaxed text-sm md:text-base lg:text-lg text-justify">
              As an entrepreneur, my overarching goal is to invest in myself,
              especially in discipline so I can show up better every day. I want
              to simplify people’s daily lives with automated, practical
              solutions. Additionally, I aim to travel, discover new cultures
              and viewpoints, and form my own understanding of the world.
            </p>
          </FadeIn>

          {/* Cards */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* 1. Invest in myself */}
            <FadeIn
              className="rounded-2xl dark:bg-darkContainer bg-bgLight border border-ultralightGray dark:border-darkBorder p-6 hover:shadow-md transition-shadow"
              i={0.1}
            >
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-full bg-bgLight dark:bg-bgDark border border-ultralightGray dark:border-darkBorder flex items-center justify-center">
                  <Rocket className="size-5 text-lightPrimary dark:text-darkPrimary font-sfregular" aria-hidden="true" />
                </div>
                <h3 className="text-lg md:text-xl font-sfbold text-lightPrimary dark:text-darkPrimary">
                  Invest in Myself
                </h3>
              </div>
              <p className="mt-3 text-lightPrimary dark:text-darkPrimary font-sfregular text-sm md:text-base text-justify">
                As a young entrepreneur, continuous learning and discipline are
                my leverage. I invest time in skills, health, and mindset so I
                can move faster and smarter.
              </p>
            </FadeIn>

            {/* 2. Build solutions that simplify work */}
            <FadeIn
              className="rounded-2xl dark:bg-darkContainer bg-bgLight border border-ultralightGray dark:border-darkBorder p-6 hover:shadow-md transition-shadow"
              i={0.2}
            >
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-full bg-bgLight dark:bg-bgDark border border-ultralightGray dark:border-darkBorder flex items-center justify-center">
                  <Target className="size-5 text-lightPrimary dark:text-darkPrimary font-sfregular" aria-hidden="true" />
                </div>
                <h3 className="text-lg md:text-xl font-sfbold text-lightPrimary dark:text-darkPrimary">
                  Build to Solve Real Needs
                </h3>
              </div>
              <p className="mt-3 text-lightPrimary dark:text-darkPrimary font-sfregular text-sm md:text-base text-justify">
                I want to develop solutions that remove friction and make work
                simpler. Clarity, speed, and utility grounded in real user
                needs.
              </p>
            </FadeIn>

            {/* 3. Travel & broaden perspective */}
            <FadeIn
              className="rounded-2xl dark:bg-darkContainer bg-bgLight border border-ultralightGray dark:border-darkBorder p-6 hover:shadow-md transition-shadow"
              i={0.3}
            >
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-full dark:bg-bgDark bg-bgLight border border-ultralightGray dark:border-darkBorder flex items-center justify-center">
                  <TooltipProvider>
                    {completedMissions.includes("tip#1") &&
                      !completedMissions.includes("tip#2") ? (
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Globe2
                            className="size-5 text-lightPrimary dark:text-darkPrimary font-sfregular"
                            aria-hidden="true"
                          />
                        </TooltipTrigger>
                        <TooltipContent>
                          <div className="flex items-center px-4 py-2 rounded-full bg-bgLight dark:bg-darkContainer shadow-sm w-fit space-x-2">
                            <span className="text-lightPrimary dark:text-darkPrimary font-sfregular">
                              Hidden Tip #2
                            </span>
                            <button
                              onClick={() => completeMission("tip#2")}
                              className="px-3 py-1 text-xs font-sfbold text-lightPrimary dark:text-darkPrimary bg-bgLight dark:bg-bgDark rounded-full hover:bg-gray-200 "
                            >
                              Discover Tip
                            </button>
                          </div>
                        </TooltipContent>
                      </Tooltip>
                    ) : (
                      <Globe2
                        className="size-5 text-lightPrimary dark:text-darkPrimary font-sfregular"
                        aria-hidden="true"
                      />
                    )}
                  </TooltipProvider>
                </div>
                <h3 className="text-lg md:text-xl font-sfbold text-lightPrimary dark:text-darkPrimary">
                  Travel & Expand Perspective
                </h3>
              </div>
              <p className="mt-3 text-lightPrimary dark:text-darkPrimary font-sfregular text-sm md:text-base text-justify">
                I want to travel to discover new cultures and new ways of seeing
                the world.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>
      <section
        id="passions"
        className=" w-full flex flex-col items-center mt-16 min-h-screen "
      >
        <FadeIn
          className="w-full max-w-4xl mx-auto flex flex-col items-center text-center"
          i={0}
        >
          {/* Titre */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-ramidots bg-brandgradient bg-clip-text text-transparent px-1">
            Beyond Code: Things I Love
          </h2>
          <div className="mt-3 h-1 w-24 bg-brandgradient rounded-full" />

          {/* Texte principal */}
          <p className="mt-6 text-lightPrimary dark:text-darkPrimary font-sfregular leading-relaxed max-w-2xl text-sm md:text-base lg:text-lg">
            I’m driven by curiosity and movement. Outside of engineering, I
            recharge by spending time with my wife, watching/reading mangas,
            riding bike or chasing fresh powder in the mountains with my
            brother.
          </p>
        </FadeIn>
        <div className="relative overflow-visible">
          <DraggableCardContainer className="relative flex w-full items-center justify-center overflow-visible">
            {/* Bouton déclencheur */}

            {!egg3Found && (
              <FadeIn
                className="pointer-events-none absolute inset-0 z-20 flex flex-col items-center justify-center text-center font-sfregular"
                i={0.1}
              >
                <h2 className="text-lightPrimary dark:text-darkPrimary text-2xl font-sfbold tracking-tight">
                  Looks like you found something?
                </h2>
                <CoolMode>
                  <button
                    type="button"
                    onMouseDown={() => {
                      eggLongPressTimer.current = setTimeout(() => {
                        incrementEggs("#3");
                        eggLongPressTimer.current = null;
                      }, 1000);
                    }}
                    onMouseUp={() => {
                      if (eggLongPressTimer.current) {
                        clearTimeout(eggLongPressTimer.current);
                        eggLongPressTimer.current = null;
                        toast("Try to hold it", { duration: 4000 });
                      }
                    }}
                    onMouseLeave={() => {
                      if (eggLongPressTimer.current) {
                        clearTimeout(eggLongPressTimer.current);
                        eggLongPressTimer.current = null;
                        toast("Try to hold it", { duration: 4000 });
                      }
                    }}
                    onTouchStart={() => {
                      eggLongPressTimer.current = setTimeout(() => {
                        incrementEggs("#3");
                        eggLongPressTimer.current = null;
                      }, 1000);
                    }}
                    onTouchEnd={() => {
                      if (eggLongPressTimer.current) {
                        clearTimeout(eggLongPressTimer.current);
                        eggLongPressTimer.current = null;
                        toast("Try to hold it", { duration: 4000 });
                      }
                    }}
                    className="pointer-events-auto mt-4 inline-flex items-center gap-2 rounded-full dark:bg-darkContainer bg-bgLight /90 px-4 py-2 text-sm text-lightPrimary dark:text-darkPrimary font-sfregular shadow-sm hover: hover:shadow-md transition-all"
                    data-cursor-icon="egg"
                  >
                    <Sparkles className="size-4" />
                    Reveal Easter Egg
                  </button>
                </CoolMode>
              </FadeIn>
            )}

            {/* Cartes draggable */}
            {items.map((item, idx) => (
              <DraggableCardBody
                className={cn(item.className, "z-20 mt-10")}
                whileDrag={{ zIndex: 50 }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="pointer-events-none relative z-10 h-80 w-80 object-cover"
                />
                <h3 className="mt-4 text-center text-4xl font-ramidots bg-brandgradient bg-clip-text text-transparent w-fit">
                  {item.title}
                </h3>
              </DraggableCardBody>
            ))}
          </DraggableCardContainer>
        </div>
      </section>
    </div>
  );
}

/* ——— Petit composant Badge réutilisable ——— */
function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full bg-ultralightGray dark:bg-bgDark px-3 py-1 text-xs text-lightPrimary dark:text-darkPrimary font-sfregular">
      {children}
    </span>
  );
}
