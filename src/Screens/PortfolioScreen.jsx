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

      {/* <div className=" mx-auto max-w-6xl px-6 h-screen flex flex-col justify-center">
        <p className="-rotate-12 text-darkGray/60 text-sm md:text-base tracking-widest uppercase text-left">
          live counter
        </p>
        <h2 className="-rotate-12 font-ramidots leading-none text-[11vw] md:text-[9vw] text-darkGray ">
          you are the
        </h2>

        <div className="mt-2 text-center">
          <NumberTicker className="font-ramidots text-[22vw] md:text-[12vw] leading-none bg-gradient-to-r from-blue-500 via-orange-400 to-red-500 bg-clip-text text-transparent" value={1234} startValue={0} delay={0.2} />
        </div>

        <h3 className="mt-4 font-ramidots text-[10vw] md:text-[7vw] leading-none text-darkGray text-right ">
          visitors of this portfolio
        </h3>

        <div className="mt-6 flex items-center justify-center gap-3 -rotate-12">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
          <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
          <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
        </div>





        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 via-orange-400 to-red-500 text-white">
                <ShieldCheck size={18} />
              </span>
              <h3 className="text-base font-semibold text-darkGray">Clarity</h3>
            </div>
            <p className="mt-3 text-sm text-darkGray/80">
              Simple layouts, readable content, and a focus on signal over noise.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 via-orange-400 to-red-500 text-white">
                <Activity size={18} />
              </span>
              <h3 className="text-base font-semibold text-darkGray">Substance</h3>
            </div>
            <p className="mt-3 text-sm text-darkGray/80">
              Emphasis on decisions, code, and results — what’s behind the UI.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 via-orange-400 to-red-500 text-white">
                <Wrench size={18} />
              </span>
              <h3 className="text-base font-semibold text-darkGray">Iteration</h3>
            </div>
            <p className="mt-3 text-sm text-darkGray/80">
              Always evolving with new experiments, notes, and improvements.
            </p>
          </div>
        </div>




        
      </div> */}


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
