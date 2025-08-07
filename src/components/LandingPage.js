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




export default function LandingPage() {
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
        <div className="bg-white w-screen h-screen flex items-center justify-center">
            <main className="isolate flex flex-col items-center justify-center h-full">
                {/* Landing Section */}
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
                    {/* Texte centré */}
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
            </main >
        </div >
    )
}

    // <div className="flex items-center justify-center min-h-screen bg-white px-6">
    //   <div className="max-w-4xl text-lefttext-3xl md:text-5xl font-sfbold tracking-tight lg:text-6xl bg-gradient-to-r from-lightGray to-darkGray bg-clip-text text-transparent">
    //     {/* Header */}
    //     <h1 className="text-5xl font-light text-gray-800 leading-tight">
    //       <span className="block">Hello!</span>
    //       <span className="block">This is <span className="font-semibold">Yiko</span>,</span>
    //       <span className="block">
    //         I am an <span className="font-bold text-gray-900">AI-Human Interaction</span> designer.
    //       </span>
    //     </h1>

    //     {/* Paragraph */}
    //     <p className="mt-8 text-lg text-gray-700 font-serif leading-relaxed">
    //       Recently, I’ve been incubating agentic product, and defining AI-human behavior paradigm with <span className="font-bold underline">MIT-IBM Watson AI Lab & MIT Media Lab</span>.
    //       Prior to this, I streamlined the genetic engineering workflow with <span className="font-bold">IBM Ventures</span>; and helped millions of businesses stay engaged with their customers through <span className="font-bold underline">Meta Business</span>.
    //     </p>
    //   </div>
    // </div>