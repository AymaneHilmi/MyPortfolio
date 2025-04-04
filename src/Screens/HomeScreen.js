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

    const stats = [
        { label: 'Founded Easter eggs ', value: `${eggCount}/5` },
        { label: 'Languages spoken', value: '5' },
        { label: 'Coffees this year', value: '+999' },
        { label: 'Number of Visitors', value: visitsTotal },
    ];

    return (
        <div className="overflow-hidden bg-white py-10">
            <div className="mx-auto px-6 lg:px-8">
                <div className="">
                    <h1 className="mt-2 text-4xl font-sfbold tracking-tight text-pretty sm:text-5xl bg-gradient-to-r from-lightGray to-darkGray bg-clip-text text-transparent pb-1">
                        Aymane is a developer who loves to create things.
                    </h1>
                    <p className="mt-6 text-xl/8 font-sfultralight text-gray-700 max-w-4xl font-bold">
                        A budding software engineer who enjoy writing code with clean design with a minimalist touch..
                        My journey started with online games, now I focus on building
                        intuitive digital experiences and solving real-world problems through tech. I’m
                        also that guy who hides easter eggs in his portfolio for fun...
                    </p>
                </div>
                <section className="mt-20 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-20 lg:gap-y-4">
                    <div className="lg:pr-8">
                        <h2 className="text-2xl font-semibold tracking-tight text-pretty text-gray-900">Our mission</h2>
                        <p className="mt-6 text-base/7 text-gray-600">
                            Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet
                            vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque
                            erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper
                            sed amet vitae sed turpis id.
                        </p>
                    </div>
                    <div className="pt-16 lg:row-span-2 lg:-mr-16 xl:mr-auto -mt-14">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 xl:gap-6">
                            {otherCards.map((project, i) => (
                                <div
                                    key={i}
                                    onClick={() => handleClick(project.route)}
                                    className="relative group h-52 w-64 rounded-2xl overflow-hidden shadow-xl border border-gray-200 cursor-pointer hover:shadow-2xl transition-all duration-300"
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
                                </div>
                            ))}
                            <div
                                className="relative group h-52 w-64 overflow-hidden transition-all duration-300 bg-gradient-to-b rounded-2xl from-lightGray via-white to-white"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-lightGray via-white/40 to-white/90 z-0 animate-pulse" />
                                <div className="absolute inset-0 flex flex-col justify-center items-center z-10 text-center px-4">
                                    <h3 className="text-2xl font-sfbold text-gray-800 animate-pulse">Coming Soon</h3>
                                    <p className="text-sm text-gray-500 italic mt-1">
                                        A new project is coming...
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="max-lg:mt-16 lg:col-span-1">
                        <p className="text-base/7 font-semibold text-gray-500 mb-2">Some Stats </p>
                        <dl className="mt-4 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
                            {stats.map((stat) => (
                                <div key={stat.id} className="flex flex-col bg-gray-400/20 p-8">
                                    <div className="order-first text-3xl font-semibold tracking-tight text-gray-900 font-mono">{stat.value}</div>
                                    <dt className="text-xs font-semibold text-gray-600 mt-2">{stat.label}</dt>
                                </div>
                            ))}
                        </dl>
                    </div>
                </section >
            </div >

        </div >

    );
}
