import { React, useState } from "react";
import "./screens.css";
import aymane from "../assets/PDP.jpeg";
import { FlipWords } from "../components/ui/flip-words";
import { cn } from "../lib/utils";
import { useNavigate } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import EasterEggsList from "../context/EasterEggsList";
import { useEasterEgg } from "../context/EasterEggContext";


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




  return (
    <div className={cn(" max-w-6xl mx-auto px-6 md:px-10 mt-12 md:mt-28")}>
      <section className="py-12">
        {/* En‑tête : avatar + titre compact */}
        <div className="flex items-start gap-4">
          <div className="h-16 w-16 rounded-full overflow-hidden ring-1 ring-black/10 bg-gray-100 shadow-sm shrink-0">
            <img
              src={aymane}
              alt="Aymane"
              className="h-full w-full object-cover"
            />
          </div>


          <div className="flex flex-col">
            <h1 className="text-2xl md:text-3xl font-sfbold text-gray-900 tracking-tight">
              Aymane Hilmi
            </h1>
            <p className="text-sm md:text-base text-gray-500 ">
              <div className=" flex items-baseline gap-4">
                <span className="font-InkBrushArabic bg-gradient-to-r from-blue-500 via-orange-400 to-red-500 bg-clip-text text-transparent">
                  أيمن حلمي
                </span>
                <span className="text-sm md:text-base text-neutral-400">
                  / aɪˈmeːn hɪlˈmiː /
                </span>
              </div>
            </p>
          </div>
        </div>

        {/* Corps du texte */}
        <div className="flex flex-row justify-between mt-6 ">
          <div className=" text-gray-700 font-sfregular text-[15px] leading-7 md:leading-8 text-justify">
            Aymane Hilmi is a 22-year-old software engineer based in Aix-en-Provence, France.
            Born in Italy, raised in France, with Moroccan roots and years spent in Spain, he grew up as a polyglot fluent in five languages.

            His fascination for technology began in childhood and led him to pursue computer science with determination.
            Today, he sees programming not only as a skill but as a way to empower people, simplify work, and foster innovation.
          </div>
        </div>
        {/* séparateur soft */}
        <div className="mt-8 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

        {/* Dashboard minimaliste */}


      </section>

      <div className="mt-6 text-center">

      </div>
    </div>
  );
}
