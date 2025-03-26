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
import Colisée from '../assets/Colisée.jpg'
import Mecque from '../assets/mosquée.webp'
import { cn } from "../lib/utils";
import AOS from 'aos'


{/* <div className={cn("flex flex-row justify-center items-center fixed top-0 h-screen w-screen bg-transparent backdrop-blur-xl overflow-hidden z-50")} >
                <img src={zorro} className="w-44" />
        </div> */}




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
                            className="text-3xl md:text-5xl font-sfbold tracking-tight text-darkGray lg:text-6xl"
                        >
                            Hi, I'm Aymane <span className='font-InkBrushArabic'> [ أيمن ]</span>
                        </motion.h1>
                        <motion.p
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={0}
                            className="mt-4 text-xs md:text-base font-medium text-lightGray lg:text-xl"
                        >
                            Welcome to my portfolio! I’m a polyglot Software Engineer who loves developing, finding solutions, and magically enhancing
                            people’s daily work life. Passionate about this AMAZING world of computer science and online business, I aim to leave
                            a personal mark on this world… <br />[إن شاء الله]
                        </motion.p>
                    </div>

                    {/* Images autour du texte */}
                    <div className="absolute w-full h-full">
                        <div className="absolute w-full h-full">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5, duration: 0.5 }} className="absolute w-28 md:w-44 lg:w-64 top-1/4 left-5 md:-left-20 lg:-left-1/4 transform lg:-translate-x-1/2 -translate-y-1/2 -rotate-12  md:block">
                                <img alt="Colisée" src={Colisée} className="w-full rounded-xl filter grayscale transition-all duration-300 hover:grayscale-0 hover:scale-105 " />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5, duration: 0.5 }} className="absolute w-14 md:w-20 lg:w-24 top-[20%] right-[43%] md:top-1/2 md:-left-28 lg:-left-1/2 transform -translate-y-1/2 md:rotate-12 md:block ">
                                <img alt="Oslo" src={oslo} className="w-full rounded-xl object-cover shadow-lg filter grayscale transition-all duration-300 hover:grayscale-0 hover:scale-105 " />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5, duration: 0.5 }} className="absolute w-24 left-16 md:w-44 lg:w-52 bottom-1/4 md:-left-4 lg:-left-1/4 transform -translate-x-1/2 translate-y-1/2 rotate-12">
                                <img alt="Paris" src={Paris} className="w-full rounded-xl object-cover shadow-lg filter grayscale transition-all duration-300 hover:grayscale-0 hover:scale-105 md:block" />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5, duration: 0.5 }} className="absolute w-20 md:w-24 lg:w-44 top-1/4 right-16 md:-right-10 lg:-right-1/4 transform translate-x-1/2 -translate-y-1/2 rotate-12 md:block">
                                <img alt="Amsterdam" src={Amsterdam} className="w-full rounded-xl object-cover shadow-lg filter grayscale transition-all duration-300 hover:grayscale-0 hover:scale-105 " />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5, duration: 0.5 }} className="absolute w-20  md:w-20 lg:w-24 top-1/2 md:-right-28 lg:-right-1/2 transform translate-x-1 -translate-y-1/2 -rotate-12 hidden md:block">
                                <img alt="Maroc" src={Maroc} className="w-full rounded-xl object-cover shadow-lg filter grayscale transition-all duration-300 hover:grayscale-0 hover:scale-105 " />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5, duration: 0.5 }} className="absolute w-24 md:w-48 lg:w-52 bottom-1/4 right-16 md:-right-4 lg:-right-1/4 transform translate-x-1/2 translate-y-1/2 -rotate-12 md:block">
                                <img alt="Aymane Hilmi" src={Aymane} className="w-full rounded-xl object-cover shadow-lg filter grayscale transition-all duration-300 hover:grayscale-0 hover:scale-105 " />
                            </motion.div>
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
                </div>
            </main >
        </div >
    )
}