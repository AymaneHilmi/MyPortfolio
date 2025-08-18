import { React, } from 'react'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEasterEgg } from '../context/EasterEggContext';
import { motion } from "framer-motion";
import Cesiveroo from '../assets/CesiverooLogo.png';
import HomeCesiveroo from '../assets/test.png';
import { ArrowRight } from "lucide-react";
import { LinkPreview } from "../components/ui/link-preview";
import { Briefcase, PenTool, LayoutDashboard, BadgeCheck } from "lucide-react";


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

    const lastProject = {
        logo: Cesiveroo,
        title: "Cesi",
        highlight: "veroo",
        subtitle: "Aix-en-Provence • 2024",
        description: "Une courte description du projet qui explique son but ou ce que tu y as réalisé.",
        image: HomeCesiveroo,
        link: "/work"
    };

    const handleClick = (link) => {
        navigate(`/${link}`);
        if (scrollToRoutes) {
            scrollToRoutes();
        }
    };

    return (
        <div className=" md:px-48 px-6">
            <div className="flex flex-col items-center justify-center h-screen">

                {/* Landing Page */}
                <div className=" text-left">
                    {/* Titre principal */}
                    <motion.h1
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl lg:text-6xl font-sfregular text-darkGray tracking-tight leading-tight"
                    >
                        Hello !<br />
                        This is Aymane{" "}
                        <span className="font-InkBrushArabic bg-gradient-to-r from-blue-500 via-orange-400 to-red-500 bg-clip-text text-transparent">
                            {" "}
                            [ أيمن ]
                        </span>
                        , <br />I am a budding{" "}
                        <span className="font-sfbold ">Software Engineer</span>.
                    </motion.h1>

                    {/* Paragraphe descriptif */}
                    <motion.p
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="mt-8 text-sm md:text-base lg:text-lg font-sfregular leading-relaxed text-darkGray text-justify"
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
                        , where I contributed to digital innovation in a research and
                        development context. After that, I decided to pursue
                        entrepreneurship while traveling around the world, driven by the
                        desire to build meaningful projects, explore diverse cultures, and
                        challenge myself beyond borders.
                    </motion.p>
                </div>
            </div>

            {/* Content Section */}
            <section className="flex flex-col items-center px-4 sm:px-6 pb-6 gap-6">
                <motion.h2
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={0}
                    className="text-5xl md:text-7xl font-ramidots tracking-tight bg-gradient-to-r from-blue-500 via-orange-400 to-red-500 bg-clip-text text-transparent"
                >
                    Last Project
                </motion.h2>

                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={1}
                    className="w-full rounded-3xl bg-gray-50 pt-6 px-6 md:px-0 md:pt-0"
                >
                    <div className="flex flex-col md:flex-row items-stretch justify-between gap-6 ">
                        {/* Partie gauche : logo + titre + sous-titre + description + bouton */}
                        <div className="flex-1 md:max-w-md md:p-8 lg:p-12 flex flex-col gap-4">
                            {/* Logo arrondi */}
                            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden">
                                <img src={lastProject.logo} alt="Project Logo" className="w-full h-full object-cover" />
                            </div>

                            {/* Titre et sous-titre */}
                            <div>
                                <h3 className="text-2xl sm:text-3xl md:text-4xl font-sfbold text-darkGray">
                                    {lastProject.title}<span style={{ color: '#20CFBD' }}>{lastProject.highlight}</span> Project
                                </h3>
                                <p className="text-xs sm:text-sm font-sfregular text-lightGray mt-1">{lastProject.subtitle}</p>
                            </div>

                            {/* Description rapide */}
                            <p className="text-sm sm:text-base font-sfregular text-darkGray">
                                {lastProject.description}
                            </p>

                            {/* Bouton blanc minimaliste */}
                            <button
                                onClick={() => navigate(lastProject.link)}
                                className="px-4 py-2 mt-2 sm:mt-4 rounded-md bg-white text-darkGray font-sfregular text-sm md:text-base transition-all duration-300 w-full md:w-fit hover:bg-gray-50 hover:text-[#20CFBD]"
                            >
                                Read Project →
                            </button>
                        </div>

                        {/* Partie droite : illustration ou aperçu visuel */}
                        <div className="flex-1 rounded-2xl overflow-hidden">
                            {/* Ratio 16/9 sur mobile, hauteur auto sur desktop */}
                            <div className="relative w-full aspect-[11/9] lg:aspect-auto md:h-full">
                                <img
                                    src={lastProject.image}
                                    alt="Project Preview"
                                    className="absolute inset-0 w-full h-full object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.button
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={2}
                    onClick={() => console.log("Voir plus")}
                    className="text-darkGray font-sfregular text-sm underline underline-offset-4 hover:opacity-50 transition-opacity duration-200"
                >
                    All Projects →
                </motion.button>
            </section>
        </div>
    );
}
