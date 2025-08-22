import { React, useState } from "react";
import "./screens.css";
import aymane from "../assets/PDP.jpeg";
import travel from "../assets/Aymane.jpg";
import maroc from "../assets/Maroc.jpg";
import snow from "../assets/AymaneSnow.JPG";
import mangas from "../assets/mangas.jpg";
import bike from "../assets/bike.JPG";
import { cn } from "../lib/utils";
import { useNavigate } from "react-router-dom";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { useEasterEgg } from "../context/EasterEggContext";
import { CoolMode } from "../components/ui/cool-particle";
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
import * as Dialog from "@radix-ui/react-dialog";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "../components/ui/draggable-card";
import { AnimatedTooltip } from "../components/ui/animated-tooltip";
import SaintGobain from "../assets/Saint-Gobain.png";

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

  const SGDisciplines = [
    {
      id: 1,
      name: " C#",
      designation: "Library",
      image:
        "https://blog.cellenza.com/wp-content/uploads/2017/02/CSharpLogo.png",
    },
    {
      id: 2,
      name: "ASP .NET & CORE",
      designation: "Framework",
      image:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAAb1BMVEVRK9T///9QKdRNJNNPJ9Q+ANF6Y9zq5/lGFtJYNdZ3X9thQtdIG9KpnedTLtVKH9O9s+z7+v7u6/qvo+mGct/y8PtpTdlxV9pCDNKll+bBuO2Aat1cO9aKd+BnSdnc1/WQf+G0qerHv++bi+TV0POcTBrBAAABJklEQVRIie2T0W6DMAxFY+N0oQ2k0FFCymjp+v/fOANpxiaYUPea8xBdyxwptoIQkUgk8l8QMaSpHAkhtH97lBj0iXAoR4h84LhoJjuANzkknXGgFCbcBQK7ZEWETL0oQksz8UOkaZrzkXOvy9N0cUQWiytc5Ux8NzRMS2T2AAeedk2EDuCmZ+LzZskgLmuTqHooDAZxJxnaIua2grsMYlWWZdXRFtHwsbc/tnreJKK8Qymf4ue5ruscN4loCsia53I0PxfcNCMKfQM4bd4qWUteFPIBhRcvVjN/iNRV1cF4kVoAL7oTk5l1UTcAjfKiUFyV31st7LqI4vHA5OzcKArVH08ac3cc6fVwJefapX8KreUnqZTvacUfo5rQ4zChF4lEIq/yBUTuEHYs2fJIAAAAAElFTkSuQmCC",
    },
    {
      id: 3,
      name: "Sample Manager",
      designation: "Software",
      image:
        "https://careers.astrixinc.com/wp-content/uploads/2021/07/cq5dam.thumbnail.250.250.png",
    },
    {
      id: 4,
      name: "Oracle DB",
      designation: "Data Base",
      image:
        "https://www.gravityer.com/_next/image?url=https%3A%2F%2Fvivid-cow-9924242169.media.strapiapp.com%2Foracle_database_18edd9bd15.jpg&w=2048&q=75",
    },
    {
      id: 5,
      name: "SQL Server",
      designation: "Data Base",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROcY7avil2U_k5wxxhQGXOHK5CH79g0h4R7xY4fgUhqZNuZSNlvkGcw6RYsT29ailWpV8&usqp=CAU",
    },
    {
      id: 6,
      name: "Power Apps",
      designation: "MS Application",
      image:
        "https://amsgcorp.net/wp-content/uploads/2022/08/power-apps-logo.png",
    },
    {
      id: 7,
      name: "Power Automate",
      designation: "MS Application",
      image:
        "https://play-lh.googleusercontent.com/aeXs0qriXwmHVWtq9u4zVUO6SifULKtJOQdtBg6wDQqaNEaaJKl6b2oiABMmHn6yLH8=w240-h480-rw",
    },
    {
      id: 8,
      name: "Azure",
      designation: "Cloud Computing Platform",
      image:
        "https://www.bizstream.com/wp-content/uploads/2022/06/azure-logo-white-circle-1-600x600.png",
    },
  ];

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
            <span className="font-InkBrushArabic bg-gradient-to-r from-blue-500 via-orange-400 to-red-500 bg-clip-text text-transparent text-2xl md:text-3xl px-1">
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

      <section id="journey" className="w-full flex px-6 h-screen">
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

            <div
              type="button"
              className="mt-8 w-full text-left rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow focus:outline-none"
            >
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center rounded-full border border-gray-200 px-3 py-1 text-xs font-medium text-gray-700">
                  Currently
                </span>
                <span className="text-sm text-gray-500">
                  Aix-en-Provence, FR
                </span>
              </div>
              <h3 className="mt-4 text-2xl md:text-xl font-semibold text-gray-900">
                Building my own company
              </h3>
              <p className="mt-2 text-gray-600">
                I decided to leave Saint-Gobain to focus on building my own
                projects, collaborating with my{" "}
                <span data-cursor-icon="wife">wife</span> to create meaningful
                and innovative solutions.
              </p>
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
                      className="group w-full text-left rounded-2xl border border-gray-200 p-5 
             hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <h4 className="text-lg md:text-xl font-semibold text-gray-900 flex items-center gap-2">
                          SWE at Saint-Gobain (Work-Study)
                          <span className="inline-flex items-center text-gray-900 transition-transform group-hover:translate-x-1">
                            ↗
                          </span>
                        </h4>
                        <span className="text-xs md:text-sm text-gray-500">
                          2022 — 2025
                        </span>
                      </div>
                      <p className="mt-2 text-gray-600">
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

                    <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-[92vw] max-w-3xl -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-gray-200 bg-white shadow-xl focus:outline-none">
                      {/* Bouton de fermeture */}
                      <Dialog.Close
                        className="absolute right-5 top-5 inline-flex items-center justify-center text-gray-600"
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
                            <div className="size-28 shrink-0 overflow-hidden bg-white">
                              <img
                                src={SaintGobain}
                                alt="Saint-Gobain Research logo"
                                className="h-full w-full object-contain p-3"
                              />
                            </div>
                          </div>

                          {/* Titre & infos */}
                          <div>
                            <Dialog.Title className="text-xl md:text-2xl font-semibold text-gray-900">
                              Software Engineer (Work-Study)
                            </Dialog.Title>
                            <Dialog.Description asChild>
                              <div className="mt-1 text-gray-700">
                                Saint-Gobain Research Provence
                              </div>
                            </Dialog.Description>

                            <div className="mt-3 flex flex-wrap items-center gap-2 text-sm">
                              <span className="inline-flex items-center gap-1 rounded-full border border-gray-200 px-3 py-1 text-gray-700">
                                <Calendar
                                  className="size-4"
                                  aria-hidden="true"
                                />
                                2023 — 2025
                              </span>
                              <span className="inline-flex items-center gap-1 rounded-full border border-gray-200 px-3 py-1 text-gray-700">
                                <MapPin className="size-4" aria-hidden="true" />
                                Cavaillon, Provence-Alpes-Côte d'Azur
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Divider */}
                        <div className="my-6 h-px w-full bg-gray-100" />

                        {/* Texte */}
                        <div className="space-y-4 text-gray-700 leading-relaxed">
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
                            <div className="rounded-2xl border border-gray-200 p-5 hover:shadow-md transition-shadow">
                              <h5 className="text-base font-semibold text-gray-900">
                                Workflow Automations
                              </h5>
                              <p className="mt-2 text-sm text-gray-600">
                                Developed internal solutions to streamline
                                laboratory data entry and daily reporting
                                processes
                              </p>
                              <p className="mt-3 text-sm font-medium text-green-600">
                                → Reduced manual workload considerably
                              </p>
                            </div>

                            {/* Mission 2 */}
                            <div className="rounded-2xl border border-gray-200 p-5 hover:shadow-md transition-shadow">
                              <h5 className="text-base font-semibold text-gray-900">
                                Mobile Application
                              </h5>
                              <p className="mt-2 text-sm text-gray-600">
                                Built a LIMS mobile app for technicians to
                                access and update experiment results directly
                                from the labs.
                              </p>
                              <p className="mt-3 text-sm font-medium text-green-600">
                                → Increased real-time data availability &
                                traceability
                              </p>
                            </div>

                            {/* Mission 3 */}
                            <div className="rounded-2xl border border-gray-200 p-5 hover:shadow-md transition-shadow">
                              <h5 className="text-base font-semibold text-gray-900">
                                Support & Supervision
                              </h5>
                              <p className="mt-2 text-sm text-gray-600">
                                Provided support and supervision of the Sample
                                Manager software for end users.
                              </p>
                              <p className="mt-3 text-sm font-medium text-green-600">
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
                  className="absolute -start-1.5 mt-2 size-3 rounded-full bg-gradient-to-r from-blue-500 via-orange-400 to-red-500"
                  aria-hidden="true"
                />
                <Dialog.Root>
                  <Dialog.Trigger asChild>
                    <button
                      type="button"
                      className="group w-full text-left rounded-2xl border border-gray-200 p-5 
             hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <h4 className="text-lg md:text-xl font-semibold text-gray-900 flex items-center gap-2">
                          Automation Engineer at INETUM (Internship)
                          <span className="inline-flex items-center text-gray-900 transition-transform group-hover:translate-x-1">
                            ↗
                          </span>
                        </h4>
                        <span className="text-xs md:text-sm text-gray-500">
                          2021 — 2022
                        </span>
                      </div>
                      <p className="mt-2 text-gray-600">
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

                    <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-[92vw] max-w-3xl -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-gray-200 bg-white shadow-xl focus:outline-none">
                      {/* Bouton de fermeture */}
                      <Dialog.Close
                        className="absolute right-5 top-5 inline-flex items-center justify-center text-gray-600"
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
                            <div className="size-32 shrink-0 overflow-hidden bg-white">
                              <img
                                src="https://www.inetum.com/upload/public/styles/opengraph/public/media/image/2021-04/logo%20inetum_0.PNG?itok=DAgdxwUw"
                                alt="INETUM logo"
                                className="h-full w-full object-contain p-3"
                              />
                            </div>
                          </div>

                          {/* Titre & infos */}
                          <div>
                            <Dialog.Title className="text-xl md:text-2xl font-semibold text-gray-900">
                              Automation Engineer
                            </Dialog.Title>
                            <Dialog.Description asChild>
                              <div className="mt-1 text-gray-700">INETUM</div>
                            </Dialog.Description>

                            <div className="mt-3 flex flex-wrap items-center gap-2 text-sm">
                              <span className="inline-flex items-center gap-1 rounded-full border border-gray-200 px-3 py-1 text-gray-700">
                                <Calendar
                                  className="size-4"
                                  aria-hidden="true"
                                />
                                2021 — 2022
                              </span>
                              <span className="inline-flex items-center gap-1 rounded-full border border-gray-200 px-3 py-1 text-gray-700">
                                <MapPin className="size-4" aria-hidden="true" />
                                Montpellier, France
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Divider */}
                        <div className="my-6 h-px w-full bg-gray-100" />

                        {/* Texte */}
                        <div className="space-y-4 text-gray-700 leading-relaxed">
                          <p className="text-sm md:text-base text-gray-600 leading-relaxed">
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
                            <div className="rounded-2xl border border-gray-200 p-5 hover:shadow-md transition-shadow">
                              <h5 className="text-base font-semibold text-gray-900">
                                Process Automation
                              </h5>
                              <p className="mt-2 text-sm text-gray-600">
                                Automated business processes with UiPath,
                                replacing repetitive manual tasks with reliable
                                robots and workflows.
                              </p>
                              <p className="mt-3 text-sm font-medium text-green-600">
                                → Increased efficiency and reduced human errors
                              </p>
                            </div>

                            {/* Mission 2 */}
                            <div className="rounded-2xl border border-gray-200 p-5 hover:shadow-md transition-shadow">
                              <h5 className="text-base font-semibold text-gray-900">
                                Incident Management
                              </h5>
                              <p className="mt-2 text-sm text-gray-600">
                                Managed incidents for the monitoring platform at
                                Pôle emploi, ensuring quick resolution.
                              </p>
                              <p className="mt-3 text-sm font-medium text-green-600">
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
                  className="absolute -start-1.5 mt-2 size-3 rounded-full bg-gradient-to-r from-blue-500 via-orange-400 to-red-500"
                  aria-hidden="true"
                />
                <Dialog.Root>
                  <Dialog.Trigger asChild>
                    <button
                      type="button"
                      className="group w-full text-left rounded-2xl border border-gray-200 p-5 
             hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <h4 className="text-lg md:text-xl font-semibold text-gray-900 flex items-center gap-2">
                          Civic Volunteer at "AVEC" association
                          <span className="inline-flex items-center text-gray-900 transition-transform group-hover:translate-x-1">
                            ↗
                          </span>
                        </h4>
                        <span className="text-xs md:text-sm text-gray-500">
                          2020 — 2021
                        </span>
                      </div>
                      <p className="mt-2 text-gray-600">
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

                    <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-[92vw] max-w-3xl -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-gray-200 bg-white shadow-xl focus:outline-none">
                      {/* Bouton de fermeture */}
                      <Dialog.Close
                        className="absolute right-5 top-5 inline-flex items-center justify-center text-gray-600"
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
                            <div className="size-28 shrink-0 overflow-hidden bg-white">
                              <img
                                src="https://upload.wikimedia.org/wikipedia/fr/thumb/2/2f/Logo_Service_civique.svg/langfr-2880px-Logo_Service_civique.svg.png"
                                alt="Service Civique logo"
                                className="h-full w-full object-contain p-3"
                              />
                            </div>
                          </div>

                          {/* Titre & infos */}
                          <div>
                            <Dialog.Title className="text-xl md:text-2xl font-semibold text-gray-900">
                              Civic Volunteer (Service Civique)
                            </Dialog.Title>
                            <Dialog.Description asChild>
                              <div className="mt-1 text-gray-700">
                                AVEC association
                              </div>
                            </Dialog.Description>

                            <div className="mt-3 flex flex-wrap items-center gap-2 text-sm">
                              <span className="inline-flex items-center gap-1 rounded-full border border-gray-200 px-3 py-1 text-gray-700">
                                <Calendar
                                  className="size-4"
                                  aria-hidden="true"
                                />
                                2021 — 2022
                              </span>
                              <span className="inline-flex items-center gap-1 rounded-full border border-gray-200 px-3 py-1 text-gray-700">
                                <MapPin className="size-4" aria-hidden="true" />
                                Montpellier, France
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Divider */}
                        <div className="my-6 h-px w-full bg-gray-100" />

                        {/* Texte */}
                        <div className="space-y-4 text-gray-700 leading-relaxed">
                          <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                            I completed a Voluntary Civic Service, a French
                            national program that allows young people to engage
                            in meaningful social missions while gaining
                            experience. My role combined academic support and
                            community engagement: I helped high school and
                            middle school students prepare for their Scientific
                            Baccalaureate and Brevet exams by mentoring them in
                            core scientific subjects.
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
                            <div className="rounded-2xl border border-gray-200 p-5 hover:shadow-md transition-shadow">
                              <h5 className="text-base font-semibold text-gray-900">
                                Exam Preparation
                              </h5>
                              <p className="mt-2 text-sm text-gray-600">
                                Organized official mock sessions and practice
                                tests, preparing tailored subjects in advance to
                                train students for exams.
                              </p>
                              <p className="mt-3 text-sm font-medium text-green-600">
                                → Helped students gain confidence for exams
                              </p>
                            </div>

                            {/* Mission 2 */}
                            <div className="rounded-2xl border border-gray-200 p-5 hover:shadow-md transition-shadow">
                              <h5 className="text-base font-semibold text-gray-900">
                                Mentorship
                              </h5>
                              <p className="mt-2 text-sm text-gray-600">
                                Supported students individually, monitored
                                progress, and developed communication adapted to
                                their needs.
                              </p>
                              <p className="mt-3 text-sm font-medium text-green-600">
                                → Strengthened motivation and academic
                                performance
                              </p>
                            </div>

                            {/* Mission 3 */}
                            <div className="rounded-2xl border border-gray-200 p-5 hover:shadow-md transition-shadow">
                              <h5 className="text-base font-semibold text-gray-900">
                                Activities & Planning
                              </h5>
                              <p className="mt-2 text-sm text-gray-600">
                                Planned and led activities, including vacation
                                programs, to build social bonds and foster
                                collective learning.
                              </p>
                              <p className="mt-3 text-sm font-medium text-green-600">
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
        </div>
      </section>

      <section id="philosophy" className=" w-full px-6 pb-44">
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
        className=" w-full flex flex-col items-center px-6 py-16 min-h-screen "
      >
        <div className="w-full max-w-4xl mx-auto flex flex-col items-center text-center">
          {/* Titre */}
          <h2 className="text-3xl md:text-7xl font-ramidots bg-gradient-to-r from-blue-500 via-orange-400 to-red-500 bg-clip-text text-transparent px-1">
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
        <div className="relative overflow-visible">
          <DraggableCardContainer className="relative flex w-full items-center justify-center overflow-visible">
            {/* Bouton déclencheur */}
            <div className="pointer-events-none absolute inset-0 z-20 flex flex-col items-center justify-center text-center font-sfregular">
              <h2 className="text-darkGray text-2xl font-sfbold tracking-tight">
                Looks like you found something?
              </h2>
              <CoolMode>
                <button
                  type="button"
                  onClick={() => incrementEggs("#3")}
                  className="pointer-events-auto mt-4 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/90 px-4 py-2 text-sm font-medium text-gray-800 shadow-sm hover:bg-white hover:shadow-md transition-all"
                  data-cursor-icon="egg"
                >
                  <Sparkles className="size-4" />
                  Reveal Hidden Layers
                </button>
              </CoolMode>
            </div>

            {/* Cartes draggable */}
            {items.map((item) => (
              <DraggableCardBody
                key={item.title}
                className={cn(item.className, "z-20 mt-10")}
                whileDrag={{ zIndex: 50 }}
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
        </div>
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

