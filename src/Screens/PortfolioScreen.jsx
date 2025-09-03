import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import HomePortfolio from "@/assets/PortfolioHome.png";
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
  Sparkles,
} from "lucide-react";
import { NumberTicker } from "../components/ui/NumberTicker";
import { LinkPreview } from "@/components/ui/link-preview";

// Image not used in the following section
import logo from "@/assets/Logo.png";

export default function PortfolioScreen({ visitsTotal }) {
  const { number, suffix } = getOrdinalParts(visitsTotal);

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

            <div className="flex flex-row gap-4 items-center">
              {/* <img src={logo} alt="Portfolio logo" className="h-20 w-20" /> */}
              <span className="text-4xl font-ramidots tracking-tight md:text-7xl bg-gradient-to-r from-blue-500 via-orange-400 to-red-500 bg-clip-text text-transparent w-fit pr-4">
                My Portfolio Project
              </span>
            </div>

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
                href="https://github.com/AymaneHilmi/MyPortfolio"
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
          <div className="relative">
            <figure className="relative mx-auto w-full max-w-[640px] overflow-hidden rounded-2xl ">
              <img
                src={HomePortfolio}
                alt="Cesiveroo illustration with shopping bags and spheres"
                className="block h-auto w-full object-contain "
                loading="eager"
                decoding="async"
              />
            </figure>
          </div>
        </div>
      </section>

      {/* <section>
        <div className="text-center mb-12">

        <p className="text-xs uppercase tracking-widest text-zinc-500">Objective</p>
          <h3 className="mt-3 text-3xl md:text-6xl font-ramidots bg-gradient-to-r from-blue-500 via-orange-400 to-red-500 bg-clip-text text-transparent inline-block">
            Details & Objectives
          </h3>
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
      </section> */}



      <section
        className="mx-auto py-16 sm:py-20"
        aria-label="Why building this portfolio"
      >
        <div className="text-center">
          <p className="text-xs uppercase tracking-widest text-zinc-500">Objective</p>
          <h3 className="mt-3 text-3xl md:text-6xl font-ramidots bg-gradient-to-r from-blue-500 via-orange-400 to-red-500 bg-clip-text text-transparent inline-block">
            Why building this portfolio?
          </h3>
          <div className="relative mx-auto max-w-5xl text-center mt-4">
            <p className="text-darkGray/90 text-base md:text-lg leading-relaxed">
              When I first discovered the world of computing online, especially through {" "}
              <LinkPreview
                imageSrc="https://play-lh.googleusercontent.com/ZRfghwQudJzza7Zb7k1tlc7aXd3WpnVb48AGg_kP-r84kiOcsLKpeM5goGkAQVT16P0=w526-h296-rw"
                url="https://agar.io"
                isStatic
                className="font-bold text-black hover:bg-gradient-to-r hover:from-blue-500 hover:via-orange-400 hover:to-red-500 hover:bg-clip-text hover:text-transparent transition-colors duration-300"
              >
                Agar.io
              </LinkPreview>
              . I instantly fell in love with websites,
              particularly the ones that felt impressive to build. From that point, I set myself the goal
              of creating one that truly reflects <span className="font-semibold">my own universe</span>.
              This portfolio isn’t about selling myself to recruiters or chasing opportunities.
              I’m building it purely <span className="italic">for the joy and passion of it</span>.
            </p>
          </div>
          <span className="mt-6 inline-block h-1 w-24 rounded-full bg-gradient-to-r from-blue-500 via-orange-400 to-red-500" />
        </div>
      </section>
      page in construction....

     





        <section className="mt-24">
        <div className="relative px-8 py-16 flex flex-col items-center text-center gap-8">
          <div className="space-y-4">
           
            <h3 className="text-3xl md:text-7xl font-ramidots tracking-tight bg-gradient-to-r from-blue-500 via-orange-400 to-red-500 bg-clip-text text-transparent w-fit -rotate-12 pr-2">
              You are the
            </h3>
          </div>

          <div className="relative">
            <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-blue-500/30 via-orange-400/20 to-red-500/30 animate-pulse" />

            <span className="relative inline-block font-ramidots text-[4.5rem] md:text-[12rem] leading-none tracking-tight bg-gradient-to-r from-blue-500 via-orange-400 to-red-500 bg-clip-text text-transparent w-fit drop-shadow-sm select-none">
              <NumberTicker value={visitsTotal} />
              <sup className="align-super text-[0.3em] tracking-wide font-ramidots text-red-500">
                {suffix}
              </sup>
            </span>
          </div>

          <h3 className="text-3xl md:text-7xl font-ramidots tracking-tight bg-gradient-to-r from-blue-500 via-orange-400 to-red-500 bg-clip-text text-transparent w-fit">
            visitor of this website.
          </h3>

          {/* <p className="max-w-xl text-sm md:text-base text-gray-600 leading-relaxed">
            Every visit helps me iterate, refine and add more hidden layers.
            Your presence is now part of this project’s timeline. If you restart
            the quest, the counter will keep evolving for future adventurers.
          </p> */}
        </div>
      </section> 




        


    </div>
  );
}

function getOrdinalParts(n) {
  const j = n % 10,
    k = n % 100;
  let suffix = "th";
  if (j === 1 && k !== 11) suffix = "st";
  else if (j === 2 && k !== 12) suffix = "nd";
  else if (j === 3 && k !== 13) suffix = "rd";

  return { number: n, suffix };
}
