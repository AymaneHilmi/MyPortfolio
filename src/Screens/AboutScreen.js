import { React, useState } from "react";
import "./screens.css";
import Laptop from "../assets/Laptop.png";
import { FlipWords } from "../components/ui/flip-words";
import { cn } from "../lib/utils";

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

export default function AboutScreen() {
  const words = ["Aymane HILMI", "حلمي أيمن"];
  return (
    <div className={cn(" max-w-6xl mx-auto px-6 mt-36")}>
      <div className="grid grid-cols-4 grid-rows-2 gap-4">
        <div className="w-80">
          <h2 className="text-3xl md:text-4xl font-sfbold text-gray-900 leading-tight ">
            Hi <span className="font-sfbold text-gray-500">Again, </span> it's
          </h2>
          <FlipWords words={words} className={cn("text-4xl max-h-10 mb-4")} />
        </div>
        <div className="col-span-3 ">
          <div className="rounded-3xl bg-white border border-gray-200 shadow-sm p-5 md:p-6">
            <div className="flex items-start gap-4">
              {/* Avatar / visuel rond */}
              <div className="h-16 w-16 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center shrink-0">
                <span className="text-xs text-gray-500">IMG</span>
              </div>

              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 justify-between">
                  <h3 className="text-lg md:text-xl font-sfbold text-gray-900">
                    Inner latent behave
                  </h3>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Accessible",
                      "Collaborative",
                      "Empathetic",
                      "Iterative",
                    ].map((b) => (
                      <span
                        key={b}
                        className="inline-flex items-center rounded-full border border-gray-300 bg-white px-3 py-1 text-xs text-gray-700"
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="mt-3 text-sm text-gray-600 leading-relaxed font-sfregular">
                  Ensuring the latest technology keeps me updated and that users
                  get new experiences and interface convenience. Clean formats
                  to understand, easily navigable, and responsive for various
                  devices.
                </p>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed font-sfregular">
                  I bring a creative and insightful approach while aiming to be
                  reliable. Curious about how to serve best and build meaningful
                  work.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row-start-2 bg-red-600">3</div>
        <div className="row-start-2 bg-red-600">4</div>
        <div className="row-start-2 bg-red-600">5</div>
        <div className="row-start-2 bg-red-600">6</div>
      </div>

      {/* <div className={cn("border-b border-gray-300 w-full flex flex-row justify-center items-end mb-4 bg-[#e6e6e6] pt-16 md:pt-0")}>
                <img
                    src={Laptop}
                    alt="Laptop"
                    className='md:h-96 h-30'
                />
            </div>
            <div className="flex flex-col w-11/12 mt-4 text-justify">
                <div id="smiling-emoji" className={cn("fixed top-0 left-0 w-full h-full pointer-events-none z-50")}></div>
                <div id="spontaneus-emoji" className={cn("fixed top-0 left-0 w-full h-full pointer-events-none z-50")}></div>
                <div id="competitive-emoji" className={cn("fixed top-0 left-0 w-full h-full pointer-events-none z-50")}></div>
                <FlipWords words={words} className={cn("text-4xl max-h-10")} />
                <h1 className={cn("mt-3 font-sfregular text-lightGray")}>Software Engineer</h1>
                <div className={cn("border-t border-gray-300 my-4 w-full flex flex-row justify-between scroll-smooth focus:scroll-auto")} />
                <h1 className={cn('font-sfregular text-darkGray')}>
                    {showItalyText ? replacedText : originalText}
                </h1>

            </div>
            <div className="flex flex-row gap-4 max-h-64">
                <motion.div
                    className="relative bg-white rounded-3xl pl-2 shadow-md min-w-64  border border-gray-200 py-4 px-2 overflow-hidden"
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={0}
                >
                    <h2 className="absolute text-sm font-semibold ml-2 px-2 py-1 rounded-full bg-white shadow-lg text-center z-50">My Experience</h2>
                    <div className="relative ml-6 mt-4">
                        <div className="absolute -left-[3.1px] top-1 bottom-5 w-0.5 bg-gray-300" />
                        {experiences.map((exp, index) => (
                            <div key={index} className="mb-4 relative">
                                <div className="absolute -left-2 top-1 w-3 h-3 bg-black rounded-full" />
                                <div className="pl-4">
                                    <h3 className="text-sm font-semibold">{exp.title}</h3>
                                    <p className="text-xs text-gray-500">{exp.year} – {exp.type}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-white to-transparent pointer-events-none z-40 " />
                </motion.div>
                <motion.div
                    className="relative bg-white rounded-3xl shadow-md w-64 h-64 border border-gray-200 overflow-hidden"
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={1}
                >
                    <h2 className="absolute text-sm font-semibold ml-2 mt-2 px-2 py-1 rounded-full bg-white text-center z-50 shadow-lg">Map</h2>
                    <img src={Aix} className='w-full h-full' />
                    <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent via-white to-white  pointer-events-none z-40 " />
                    <div className='absolute bottom-10 w-full text-center z-50 text-2xl font-sfregular text-darkGray' > Aix-en-Provence</div>
                    <div className='absolute bottom-6 w-full text-center z-50 text-sm font-sfultralight font-bold text-lightGray tracking-widest' > France</div>
                    <div className='absolute bottom-2 w-full text-center z-50 text-xs font-sfultralight font-bold text-lightGray' > 43.5297° N, 5.4474° E</div>
                </motion.div> 

            </div> */}
    </div>
  );
}
