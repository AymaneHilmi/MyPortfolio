import React, { useEffect, useState, useMemo } from "react";
import FadeIn from "../components/FadeIn";
import LIMSmobility from "@/assets/LIMSmobility.png";
import { Github, } from "lucide-react";
import { NumberTicker } from "../components/ui/NumberTicker";


export default function ConnectedLabsScreen() {
    return (
        <div className="lg:mx-auto max-w-5xl px-6">

            <section className="mx-auto py-12 md:py-16 md:mt-32 mt-12 flex justify-center items-center">
                <FadeIn className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12 items-center">
                    {/* Left column — Text */}
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 px-3 py-1 text-sm text-zinc-600">
                            <span className="h-2 w-2 rounded-full bg-brandgradient" />
                            Process Highlights
                        </div>

                        <div className="flex flex-row gap-4 items-center">
                            {/* <img src={logo} alt="Portfolio logo" className="h-20 w-20" /> */}
                            <span className=" font-ramidots tracking-tight text-5xl md:text-6xl lg:text-7xl bg-gradient-to-tr from-sky-400 to-blue-600 bg-clip-text text-transparent w-fit pr-4">
                                Connected Labs
                            </span>
                        </div>

                        <div className="prose prose-zinc max-w-none text-lightPrimary dark:text-darkPrimary text-justify text-sm md:text-base lg:text-lg">
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
                                className="inline-flex items-center gap-2 rounded-xl bg-lightPrimary px-5 py-3 text-sm font-sfbold text-white shadow-md hover:shadow-lg hover:bg-gradient-to-r hover:from-blue-500 hover:via-orange-400 hover:to-red-500 transition-colors"
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
        </div>
    );
};