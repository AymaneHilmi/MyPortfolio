import { React, } from 'react'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEasterEgg } from '../context/EasterEggContext';
import { motion } from "framer-motion";
import Aix from '../assets/Aix.jpg';
import { ArrowRight } from "lucide-react";
import { LinkPreview } from "../components/ui/link-preview";



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

export default function HomeScreen({ scrollToRoutes, visitsTotal }) {
    const navigate = useNavigate();
    const { eggCount } = useEasterEgg();
    const [hoveredIndex, setHoveredIndex] = useState(null);


    const handleClick = (link) => {
        navigate(`/${link}`);
        if (scrollToRoutes) {
            scrollToRoutes();
        }
    };

    return (
        <div className=" h-screen">
            <div className="bg-white w-screen flex items-center justify-center px-6 min-h-screen ">
                <div className="max-w-5xl text-left">
                    {/* Titre principal */}
                    <motion.h1
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl lg:text-6xl font-sfregular text-darkGray tracking-tight leading-tight"
                    >
                        Hello !<br />
                        This is Aymane <span className='font-InkBrushArabic bg-gradient-to-r from-blue-500 via-orange-400 to-red-500 bg-clip-text text-transparent'> [ أيمن ]</span>, <br />
                        I am a budding <span className="font-sfbold ">Software Engineer</span>.
                    </motion.h1>

                    {/* Paragraphe descriptif */}
                    <motion.p
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="mt-8 text-sm md:text-base lg:text-lg font-sfregular leading-relaxed text-darkGray"
                    >
                        Recently, I’ve completed my apprenticeship at{" "}
                        <LinkPreview
                            imageSrc="https://www.verreetprotections.com/wp-content/uploads/2016/06/logoSGG2016.jpg"
                            url="/saintgobain"
                            isStatic
                            onClick={scrollToRoutes}
                            className="font-bold underline underline-offset-4 text-black hover:bg-gradient-to-r hover:from-blue-500 hover:via-orange-400 hover:to-red-500 hover:bg-clip-text hover:text-transparent transition-colors duration-300"
                        >
                            Saint-Gobain Research Provence
                        </LinkPreview>
                        , where I contributed to digital innovation in a research and development context. After that, I decided to pursue entrepreneurship
                        while traveling around the world, driven by the desire to build meaningful projects, explore diverse cultures, and challenge myself beyond borders.
                    </motion.p>
                </div>
            </div >

            <section className="relative mx-auto max-w-6xl px-6 py-14 md:py-20 bg-white">
                {/* Header row */}
                <div className="mb-8 flex items-center justify-between">
                    <h2 className="font-sfbold text-darkGray uppercase tracking-wide">
                        My Latest Project
                    </h2>
                    <a
                        href="#projects"
                        className="font-sfbold text-darkGray hover:underline inline-flex items-center gap-1"
                    >
                        View all projects
                        <ArrowRight className="h-4 w-4" />
                    </a>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="grid items-stretch gap-10 rounded-3xl border border-zinc-200/60 bg-gradient-to-b from-white to-zinc-50 p-6 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.25)] md:grid-cols-2 md:p-10"
                >
                    {/* Left content */}
                    <div className="flex flex-col justify-center">
                        {/* Tiny app badge */}
                        <div className="mb-6 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-600/10 ring-1 ring-emerald-600/20">
                            <span className="text-xl">🌲</span>
                        </div>

                        <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 md:text-4xl">
                            Suggested Jobs
                        </h1>

                        <p className="mt-2 text-sm font-medium uppercase tracking-[0.14em] text-zinc-500">
                            UX/UI DESIGN · 2020
                        </p>

                        <p className="mt-4 max-w-prose text-zinc-600 md:text-lg">
                            Redesigning job recommendations based on job seeker activity.
                        </p>

                        <div className="mt-8">
                            <button
                                className="group inline-flex items-center gap-2 rounded-xl border border-zinc-200 bg-white px-5 py-3 text-sm font-medium text-zinc-900 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md active:translate-y-0"
                            >
                                Read the Case Study
                                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                            </button>
                        </div>
                    </div>

                    {/* Right: single image placeholder */}
                    <div className="relative">
                        <div className="pointer-events-none  -z-10 rounded-3xl bg-gradient-to-tr from-zinc-200 to-transparent blur-2xl" />
                        <div className="relative overflow-hidden rounded-2xl ring-1 ring-zinc-200/70 shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=1920&auto=format&fit=crop"
                                alt="Case study preview"
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </div>
                </motion.div>
            </section>


        </div >
    );
}
