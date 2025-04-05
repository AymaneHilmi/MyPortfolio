import { React, } from 'react'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import Aix from '../assets/Aix.jpg';
import Cesiveroo from '../assets/Cesiveroo.png';
import SG from '../assets/Saint-Gobain.png';
import tourSG from '../assets/tourSG.jpg';
import Profil from '../assets/PDP.jpeg';
import { cn } from "../lib/utils";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import { BentoGrid, BentoGridItem } from "../components/ui/bento-grid";
import { AnimatedList } from "../components/ui/Animated-list";
import { useEasterEgg } from '../context/EasterEggContext';
import Footer from '../components/footer';
import VisitedMap from "../components/VisitedMap";
import { NumberTicker } from "../components/ui/NumberTicker"
import * as Popover from "@radix-ui/react-popover";

const cards = [
    {
        title: "Saint-Gobain",
        desc: "SWE at SG Research Labs ",
        src: tourSG,
        route: "saintgobain",
    },
    {
        title: "Cesiveroo",
        desc: "My favorite student project",
        src: Cesiveroo,
        route: "cesiveroo",
    },
    {
        title: "Blog",
        desc: "Blogging like it’s 2005",
        src: Aix,
        route: "aix",
    },
    {
        title: "Coming Soon",
        desc: "A space to show who I am 🌍",
        src: "",
        route: "portfolio",
    },
];

const otherCards = cards.slice(0, cards.length - 1);
const lastCard = cards[cards.length - 1];

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

    const handleClick = (link) => {
        navigate(`/${link}`);
        if (scrollToRoutes) {
            scrollToRoutes();
        }
    };

    return (
        <div className="relative bg-white py-10">
            <div className="mx-auto px-6 lg:px-8">
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible">
                    <h1 className="mt-2 text-4xl md:text-5xl lg:text-5xl 2xl:text-6xl font-sfbold tracking-tight text-pretty  bg-gradient-to-r from-lightGray to-darkGray bg-clip-text text-transparent pb-1">
                        Aymane is a developer who loves to create things.
                    </h1>
                    <p className="mt-6 text-xl/8 2xl:text-3xl font-sfregular text-darkGray max-w-4xl 2xl:max-w-6xl text-justify">
                        A budding software engineer who enjoy writing code with clean design with a minimalist touch.
                        My journey started with online games, now I focus on building
                        intuitive digital experiences and solving real-world problems through tech. I’m
                        also that guy who hides easter eggs (secrets functionnalities) in his portfolio just for fun...
                    </p>
                </motion.div>
                <section className="mt-20 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-20 lg:gap-y-4">
                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        className="lg:pr-8">
                        <h2 className="text-2xl font-semibold tracking-tight text-pretty text-gray-900 ">Our mission</h2>
                        <p className="mt-6 text-base/8 text-darkGray 2xl:text-2xl font-sfregular text-justify ">
                            Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet
                            vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque
                            erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper
                            sed amet vitae sed turpis id.
                        </p>
                    </motion.div>
                    <div className="mt-8 lg:mt-2 lg:row-span-2 mr-0 lg:-mr-16 xl:mr-auto ">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 2xl:gap-10">
                            {otherCards.map((project, i) => (
                                <motion.div
                                    variants={fadeInUp}
                                    initial="hidden"
                                    whileInView="visible"
                                    custom={i}
                                    key={i}
                                    onClick={() => handleClick(project.route)}
                                    className="relative group h-52 2xl:h-60 w-full lg:w-64 2xl:w-80 rounded-2xl overflow-hidden shadow-xl border border-gray-200 cursor-pointer hover:shadow-2xl"
                                >
                                    <img
                                        src={project.src}
                                        alt={project.title}
                                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent z-10" />
                                    <div className="absolute bottom-0 z-20 p-4 text-white">
                                        <h3 className="text-lg font-sfbold">{project.title}</h3>
                                        <p className="text-sm text-gray-200">{project.desc}</p>
                                        <div className="mt-1 flex items-center font-semibold text-sm text-primary">
                                            <span>Learn more</span>
                                            <svg
                                                className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                            <motion.div
                                variants={fadeInUp}
                                initial="hidden"
                                whileInView="visible"
                                custom={4}
                                className="relative group h-52 2xl:h-60 w-full lg:w-64 2xl:w-80 overflow-hidden  bg-gradient-to-b rounded-2xl from-lightGray via-white to-white"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-lightGray via-white/40 to-white/90 z-0 animate-pulse" />
                                <div className="absolute inset-0 flex flex-col justify-center items-center z-10 text-center px-4">
                                    <h3 className="text-2xl font-sfbold text-gray-800 animate-pulse">Coming Soon</h3>
                                    <p className="text-sm text-gray-500 italic mt-1">
                                        A new project is coming...
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                    <div className="max-lg:mt-16 lg:col-span-1">
                        <motion.p
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            className="text-base/7 2xl:text-xl font-semibold text-gray-500 mb-6">Some Stats </motion.p>
                        <dl className="mt-4 2xl:mt-8 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
                            {/* Easter Eggs */}
                            <motion.div
                                variants={fadeInUp}
                                initial="hidden"
                                whileInView="visible"
                                className="flex flex-col bg-gray-400/20 p-8 2xl:p-10"
                            >
                                <span className="order-first text-3xl 2xl:text-4xl font-semibold tracking-tight text-gray-900 font-mono">
                                    {eggCount}/5
                                </span>
                                <dt className="text-xs 2xl:text-sm font-semibold text-gray-600 mt-2">
                                    Founded  Easter eggs
                                </dt>
                            </motion.div>

                            {/* Languages Spoken */}
                            <motion.div
                                variants={fadeInUp}
                                initial="hidden"
                                whileInView="visible"
                                className="flex flex-col bg-gray-400/20 p-8 2xl:p-10"
                            >
                                <NumberTicker
                                    value={5}
                                    className="order-first text-3xl 2xl:text-4xl font-semibold tracking-tight text-gray-900 font-mono"
                                />
                                <dt className="text-xs 2xl:text-sm font-semibold text-gray-600 mt-2">
                                    Languages spoken
                                </dt>
                            </motion.div>

                            {/* Visited Countries */}
                            <motion.div
                                variants={fadeInUp}
                                initial="hidden"
                                whileInView="visible"
                                className="flex flex-col bg-gray-400/20 p-8 2xl:p-10"
                            >
                                <Popover.Root>
                                    <Popover.Trigger asChild>
                                        <button className="order-first text-3xl 2xl:text-4xl font-semibold tracking-tight text-gray-900 font-mono underline hover:opacity-70 transition">
                                            8
                                        </button>
                                    </Popover.Trigger>
                                    <Popover.Portal>
                                        <Popover.Content
                                            side="top"
                                            align="center"
                                            sideOffset={8}
                                            className="rounded-xl bg-white border border-gray-200 shadow-xl max-w-xl w-96 h-[40vh] overflow-hidden z-50"
                                        >
                                            <VisitedMap />
                                        </Popover.Content>
                                    </Popover.Portal>
                                </Popover.Root>
                                <dt className="text-xs 2xl:text-sm font-semibold text-gray-600 mt-2">
                                    Visited Countries
                                </dt>
                            </motion.div>

                            {/* Visitors */}
                            <motion.div
                                variants={fadeInUp}
                                initial="hidden"
                                whileInView="visible"
                                className="flex flex-col bg-gray-400/20 p-8 2xl:p-10"
                            >
                                {typeof visitsTotal !== "number" ? (
                                    <span className="order-first text-sm text-gray-400">Loading...</span>
                                ) : (
                                    <NumberTicker
                                        value={visitsTotal}
                                        className="order-first text-3xl 2xl:text-4xl font-semibold tracking-tight text-gray-900 font-mono"
                                    />
                                )}
                                <dt className="text-xs 2xl:text-sm font-semibold text-gray-600 mt-2">
                                    Total Number of Visitors
                                </dt>
                            </motion.div>
                        </dl>
                    </div>
                </section >
                <Footer />
            </div >
        </div >
    );
}
