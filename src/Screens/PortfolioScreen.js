import React, { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import HomePortfolio from "../assets/PortfolioHome.png";
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

export default function PortfolioScreen() {
  const stats = [
    {
      label: "Context",
      value: "Personal Project",
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
  return (
    <div className="md:mx-auto max-w-6xl mx-6">
      <section className="mx-auto py-12 md:py-16 mt-32 flex justify-center items-center">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12 items-center">
          {/* Left column — Text */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 px-3 py-1 text-sm text-zinc-600">
              <span className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-500 via-orange-400 to-red-500" />
              Process Highlights
            </div>

            <h1 className="text-4xl font-ramidots tracking-tight md:text-7xl bg-gradient-to-r from-blue-500 via-orange-400 to-red-500 bg-clip-text text-transparent w-fit">
              My Portfolio Project
            </h1>

            <div className="prose prose-zinc max-w-none text-darkGray text-justify">
              <p>
                This portfolio is a personal project where I share my journey,
                projects, resume, and passion for technology. It’s built to be
                interactive and engaging, showcasing the work I’m proud of and
                reflecting my personal approach to development.
              </p>
              <p>
                In addition to showcase my projects and experience, this
                portfolio will also include (soon) a blog where I regularly
                share my work, ideas, and lessons learned throughout my journey.
                For the curious ones, I’ve also integrated an entire hidden
                easter eggs quest inside the website...
              </p>
            </div>
            <div className="mt-8">
              <a
                href="https://github.com/AymaneHilmi/MyPortfolio" // remplace par ton lien GitHub
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-darkGray px-5 py-3 text-sm font-semibold text-white shadow-md hover:shadow-lg hover:bg-gradient-to-r hover:from-blue-500 hover:via-orange-400 hover:to-red-500 transition-colors"
                data-cursor-icon="arrow"
              >
                <Github size={18} />
                View on GitHub
              </a>
            </div>
          </div>

          {/* Right column — Image "incrustée" on white bg */}
          <div className="relative">
            <figure className="relative mx-auto w-full max-w-[640px] overflow-hidden rounded-2xl ">
              {/* Replace the src below with your image path */}
              <img
                src={HomePortfolio}
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
          <h2 className="mt-2 text-2xl sm:text-6xl font-ramidots tracking-tight bg-gradient-to-r from-blue-500 via-orange-400 to-red-500 bg-clip-text text-transparent w-fit inline-block px-1">
            Details & Objectives
          </h2>
        </div>
        coming soon....
      </section>
    </div>
  );
}
