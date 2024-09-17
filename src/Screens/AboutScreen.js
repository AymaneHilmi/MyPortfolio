import { React, img } from 'react'
import { PinContainer } from "../components/ui/3d-pin";
import Spline from '@splinetool/react-spline';
import HomeScreen from './HomeScreen';
import JaponPicture from '../assets/Japon.jpg';
import Aymane1 from '../assets/Aymane1.jpg';
import Profil from '../assets/PDP.jpeg';
import Maroc from '../assets/Laptop.gif';
import { cn } from "../lib/utils";
import { CardStack } from "../components//ui/card-stack";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import { BentoGrid, BentoGridItem } from "../components/ui/bento-grid";
import {
    IconBoxAlignRightFilled,
    IconClipboardCopy,
    IconFileBroken,
    IconSignature,
    IconTableColumn,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import { FlipWords } from "../components/ui/flip-words";
import Aymane from '../assets/MarocBanner.jpg';
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";



export default function AboutScreen() {
    const words = ["Aymane HILMI", "حلمي أيمن"];

    const testimonials = [
        {
            quote:
                "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
            name: "Charles Dickens",
            title: "A Tale of Two Cities",
        },
        {
            quote:
                "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
            name: "William Shakespeare",
            title: "Hamlet",
        },
        {
            quote: "All that we see or seem is but a dream within a dream.",
            name: "Edgar Allan Poe",
            title: "A Dream Within a Dream",
        },
        {
            quote:
                "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
            name: "Jane Austen",
            title: "Pride and Prejudice",
        },
        {
            quote:
                "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
            name: "Herman Melville",
            title: "Moby-Dick",
        },
    ];
    return (
        <div className='w-full flex flex-col items-center justify-center'>
            <div className=" border-b border-gray-300 w-full flex flex-row justify-center items-end mb-4 bg-[#e6e6e6]">
                <img
                    src={Maroc}
                    alt="Image 1"
                    className='md:h-96 h-30'
                />
            </div>
            <div className="flex flex-col h-screen w-11/12 my-4 ">

                <FlipWords words={words} className="text-4xl max-h-10" />
                <a className="mt-3" style={{ fontFamily: 'SFREGULAR', color: '#a9a5ac' }}>Software Engineer</a>

                <div className="border-t border-gray-300 my-4 w-full flex flex-row justify-between " />

                <a style={{ fontFamily: 'SFREGULAR', color: '#3b3d41' }}>
                    I am a software engineer living in Montpellier, France, with a deep enthusiasm for programming.
                    <br></br>
                    <br></br>

                    My journey in the world of programming began in childhood when I first encountered the website agar.io.
                    It may sound trivial, but that moment sparked a fascination within me for the world of technology.
                    I became captivated by the incredible things that can be created with computers and their potential for efficiency.
                    <br></br>
                    <br></br>

                    While many of my classmates were still exploring their career paths, I was already certain of mine:
                    I wanted to immerse myself in computer science. I found myself particularly drawn to beautifully designed websites
                    and modern interfaces—those that not only looked stunning but also provided seamless, enjoyable experiences for
                    users. This passion inspired me to learn  how these digital solutions in general come to life and motivated me to
                    develop websites like this portfolio.
                    <br></br>
                    <br></br>

                    After earning my scientific baccalaureate with a specialization in mathematics, I chose to pursue a degree in
                    computer science engineering. This allowed me to delve deeper into the inner workings of this captivating field.
                    I quickly realized that programming was not just a skill but a passion, especially when it serves to enhance
                    people's lives and simplify their work. I am driven by the belief that technology can empower individuals,
                    streamline processes, and foster innovation.
                </a>
                <div className="border-t border-gray-300 my-4 w-full flex flex-row justify-between " />

                <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
                    <InfiniteMovingCards
                        items={testimonials}
                        direction="right"
                        speed="slow"
                    />
                </div>
            </div>





            {/* <div className=" w-full flex flex-row justify-between ">
                <h1 className="text-base font-bold mt-6" style={{ fontFamily: 'SFULTRALIGHT', color: '#a3a8af' }}>Previous Projects</h1>
                <h1 className="text-base font-bold mt-6" style={{ fontFamily: 'SFULTRALIGHT', color: '#a3a8af' }}>2024</h1>
            </div> */}


        </div >
    )
}

