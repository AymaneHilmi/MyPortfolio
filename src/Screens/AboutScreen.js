import { React, img } from 'react'
import { PinContainer } from "../components/ui/3d-pin";
import Spline from '@splinetool/react-spline';
import HomeScreen from './HomeScreen';
import JaponPicture from '../assets/Japon.jpg';
import Lab from '../assets/AymanePhilipp.jpeg';
import Maroc from '../assets/Laptop.gif';
import { ContainerScroll } from "../components/ui/container-scroll-animation";
import { cn } from "../lib/utils";
import { CardStack } from "../components//ui/card-stack";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import { twMerge } from "tailwind-merge";
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
import { TracingBeam } from "../components/ui/tracing-beam";



export default function AboutScreen() {
    const words = ["Aymane HILMI", "حلمي أيمن"];
    return (
        <div className='w-full h-full flex flex-col items-center justify-center' data-aos="fade-up">
            <div className=" border-b border-gray-300 w-full flex flex-row justify-center items-end mb-4 bg-[#e6e6e6] pt-16 md:pt-0">
                <img
                    src={Maroc}
                    alt="Image 1"
                    className='md:h-96 h-30'
                />
            </div>
            <div className="flex flex-col w-11/12 mt-4 ">
                <FlipWords words={words} className="text-4xl max-h-10" />
                <a className="mt-3" style={{ fontFamily: 'SFREGULAR', color: '#a9a5ac' }}>Software Engineer</a>
                <div className="border-t border-gray-300 my-4 w-full flex flex-row justify-between scroll-smooth focus:scroll-auto" />
                <a style={{ fontFamily: 'SFREGULAR', color: '#3b3d41' }}>
                    I'm 22 years old, and I am a software engineer based in Montpellier, France, with a strong passion for programming.
                    Born in Italy, raised in France, of Moroccan heritage and spent a significant part
                    of my life in Spain. These diverse experiences have shaped me today into a polyglot, fluent in five
                    languages (Italian, French, Maroccan, English & Spanish).
                    <br></br>
                    <br></br>
                    My journey in the world of programming began in childhood when I first encountered the website agar.io.
                    It may sound trivial, but that moment sparked a fascination within me for the world of technology.
                    I became captivated by the incredible things that can be created with computers and their potential for efficiency.
                    While many of my classmates were still exploring their career paths, I was already certain of mine:
                    I wanted to immerse myself in computer science.
                    <br></br>
                    <br></br>
                    After earning my scientific baccalaureate with a specialization in mathematics, I chose to pursue a degree in
                    computer science engineering. This allowed me to delve deeper into the inner workings of this captivating field.
                    I quickly realized that programming was not just a skill but a passion, especially when it serves to enhance
                    people's lives and simplify their work. I am driven by the belief that technology can empower individuals,
                    streamline processes, and foster innovation.
                </a>
                <div className="border-t border-gray-300 mt-4 w-full flex flex-row justify-start ">
                </div>


            </div>
        </div >
    )
}

