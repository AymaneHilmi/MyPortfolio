import { motion } from 'framer-motion';
import { useState } from 'react'
import './components.css'
import { color } from 'framer-motion'
import Aymane from '../assets/Aymane.jpg'
import Maroc from '../assets/Maroc.jpg'
import oslo from '../assets/Oslo.jpeg'
import Amsterdam from '../assets/Amsterdam.JPG'
import Paris from '../assets/Paris.webp'
import zorro from '../assets/zorro.jpg'
import Rome from '../assets/Rome.jpg'
import { cn } from "../lib/utils";
import AOS from 'aos'
import { LinkPreview } from "./ui/link-preview";





export default function LandingPage({ scrollToRoutes }) {
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
    return (
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
            {/* 
            <main className="isolate flex flex-col items-center justify-center h-full">
 
                <svg
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 -z-10 h-screen w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
                >
                    <defs>
                        <pattern
                            x="50%"
                            y={-1}
                            id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
                            width={100}
                            height={100}
                            patternUnits="userSpaceOnUse"
                        >
                            <path d="M.5 200V.5H200" fill="none" />
                        </pattern>
                    </defs>
                    <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
                        <path
                            d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                            strokeWidth={0}
                        />
                    </svg>
                    <rect fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)" width="100%" height="100%" strokeWidth={0} />
                </svg>
                <div className="relative flex items-center justify-center w-full h-full">

                    <div className="text-center px-4 max-w-2xl flex flex-col items-center justify-center relative z-10">
                        <motion.h1
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={0}
                            className="text-3xl md:text-5xl font-sfbold tracking-tight lg:text-6xl bg-gradient-to-r from-lightGray to-darkGray bg-clip-text text-transparent"
                        >
                            Hi, I'm Aymane <span className='font-InkBrushArabic'> [ أيمن ]</span>
                        </motion.h1>
                        <motion.p
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={0}
                            className="mt-4 text-xs md:text-base font-bold text-lightGray lg:text-xl font-sfultralight"
                        >
                            Welcome to my portfolio! I’m a polyglot Software Engineer who loves developing, finding solutions, and magically enhancing
                            people’s daily work life. Passionate about computer science and online business, I aim to leave
                            a personal mark on this world. <br />[إن شاء الله]
                        </motion.p>
                    </div>


                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className="absolute w-22 md:w-44 top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-80"
                    >
                        <img src={zorro} className="w-24 md:w-44 " />
                    </motion.div>
                </div>
            </main > */}
        </div >
    )
}