import { React, useState } from 'react';
import './screens.css';
import Laptop from '../assets/Laptop.png';
import { FlipWords } from "../components/ui/flip-words";
import { cn } from "../lib/utils";
import Aix from '../assets/Aix.jpg';
import { motion } from "framer-motion";
import { Eye } from 'lucide-react';
import { FaGlobe, FaLanguage, FaLaptopCode, FaMugHot, FaCodeBranch, FaMapMarkedAlt } from "react-icons/fa";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';



const stats = [
    { icon: <FaLanguage size={28} />, label: "Languages Spoken", value: "5" },
    { icon: <FaMapMarkedAlt size={28} />, label: "Countries Visited / Worked In", value: "7+" },
    { icon: <FaLaptopCode size={28} />, label: "Projects Completed", value: "12+" },
    { icon: <FaMugHot size={28} />, label: "Hours Coded", value: "1000+" },
    { icon: <FaCodeBranch size={28} />, label: "VS Code Loyalty", value: "98%" },
    { icon: <FaGlobe size={28} />, label: "Continents Worked From", value: "3" },
];

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
const experiences = [
    {
        title: "Getting my Baccalaureate",
        year: "2020",
        type: "Student",
    },
    {
        title: "Developer at Inetum",
        year: "2021",
        type: "Internship",
    },
    {
        title: "Freelance",
        year: "2022",
        type: "Remote - Part time",
    },
    {
        title: <>SWE at <a href='https://www.saint-gobain.com' className='underline'>Saint-Gobain</a></>,
        year: "2022",
        type: "Apprenticeship",
    },
];

export default function AboutScreen() {
    const words = ["Aymane HILMI", "حلمي أيمن"];
    const [italianClickCount, setItalianClickCount] = useState(0);
    const [showItalyText, setShowItalyText] = useState(false);

    const handleItalianClick = () => {
        setItalianClickCount(prev => prev + 1);
        if (italianClickCount + 1 === 5) {
            setShowItalyText(true);
        }
    };

    const originalText = (
        <>
            I'm 22 years old, and I am a software engineer based in Montpellier, France, with a strong passion for programming.
            Born in <span onClick={handleItalianClick}>Italy</span>, raised in France, of Moroccan heritage and spent a significant part
            of my life in Spain. These diverse experiences have shaped me today into a polyglot, fluent in five
            languages (Italian, French, Moroccan, English & Spanish).
            <br />
            <br />
            My journey in the world of programming began in childhood when I first encountered the website agar.io.
            It may sound trivial, but that moment sparked a fascination within me for the world of technology.
            I became captivated by the incredible things that can be created with computers and their potential for efficiency.
            While many of my classmates were still exploring their career paths, I was already certain of mine:
            I wanted to immerse myself in computer science.
            <br />
            <br />
            After earning my scientific baccalaureate with a specialization in mathematics, I chose to pursue a degree in
            computer science engineering. This allowed me to delve deeper into the inner workings of this captivating field.
            I quickly realized that programming was not just a skill but a passion, especially when it serves to enhance
            people's lives and simplify their work. I am driven by the belief that technology can empower individuals,
            streamline processes, and foster innovation.
        </>
    );

    const replacedText = (
        <div>
            <h1
                style={{
                    background: 'linear-gradient(270deg, #005B30, #EAEAE8, #A00024)',
                    backgroundSize: '300% 300%',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                    animation: 'gradientAnimation 5s ease infinite',
                }}
            >
                I'm 22 years old, and I am a software engineer based in Montpellier, France, with a strong passion for programming.
                Born in <span onClick={handleItalianClick}>Italy</span>, raised in France, of Moroccan heritage and spent a significant part
                of my life in Spain. These diverse experiences have shaped me today into a polyglot, fluent in five
                languages (Italian, French, Moroccan, English & Spanish).
                <br />
                <br />
                My journey in the world of programming began in childhood when I first encountered the website agar.io.
                It may sound trivial, but that moment sparked a fascination within me for the world of technology.
                I became captivated by the incredible things that can be created with computers and their potential for efficiency.
                While many of my classmates were still exploring their career paths, I was already certain of mine:
                I wanted to immerse myself in computer science.
                <br />
                <br />
                After earning my scientific baccalaureate with a specialization in mathematics, I chose to pursue a degree in
                computer science engineering. This allowed me to delve deeper into the inner workings of this captivating field.
                I quickly realized that programming was not just a skill but a passion, especially when it serves to enhance
                people's lives and simplify their work. I am driven by the belief that technology can empower individuals,
                streamline processes, and foster innovation.
            </h1>

            <style>
                {`
                    @keyframes gradientAnimation {
                        0% {
                            background-position: 0% 50%;
                        }
                        50% {
                            background-position: 100% 50%;
                        }
                        100% {
                            background-position: 0% 50%;
                        }
                    }   
                `}
            </style>
        </div>
    );

    const triggerEmojis = (event) => {
        let emojielement;
        let container;

        if (event == "smile") {
            container = document.getElementById("smiling-emoji");
            emojielement = "😊"
        }
        else if (event == "spontaneus") {
            container = document.getElementById("spontaneus-emoji");
            emojielement = "😜"
        }
        else if (event == "competitive") {
            container = document.getElementById("competitive-emoji");
            emojielement = "🚀"
        }

        for (let i = 0; i < 50; i++) {
            const emoji = document.createElement("div");
            emoji.innerHTML = emojielement;
            emoji.classList.add("emoji");

            emoji.style.left = `${Math.random() * 100}%`;
            emoji.style.top = `${Math.random() * 100}%`;


            const size = Math.random() * 20 + 20;
            emoji.style.fontSize = `${size}px`;

            container.appendChild(emoji);

            setTimeout(() => {
                emoji.remove();
            }, 1500);
        }
    };


    return (
        <div className={cn('w-full h-full flex flex-col items-center justify-center')} data-aos="fade-up">

            <div className={cn("border-b border-gray-300 w-full flex flex-row justify-center items-end mb-4 bg-[#e6e6e6] pt-16 md:pt-0")}>
                <img
                    src={Laptop}
                    alt="Laptop"
                    className='md:h-96 h-30'
                />
            </div>
            <div className="flex flex-col w-11/12 mt-4 ">
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
                    {/* Your timeline content here */}
                    <div className="relative ml-6 mt-4">
                        {/* Timeline vertical line */}
                        <div className="absolute -left-[3.1px] top-1 bottom-5 w-0.5 bg-gray-300" />
                        {experiences.map((exp, index) => (
                            <div key={index} className="mb-4 relative">
                                {/* Timeline dot */}
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
                    <div className='absolute bottom-10 w-full text-center z-50 text-3xl font-AutomnBrush text-darkGray' > Aix-en-Provence</div>
                    <div className='absolute bottom-6 w-full text-center z-50 text-sm font-sfultralight font-bold text-lightGray tracking-widest' > France</div>
                    <div className='absolute bottom-2 w-full text-center z-50 text-xs font-sfultralight font-bold text-lightGray' > 43.5297° N, 5.4474° E</div>
                </motion.div>

                {/* <motion.div
                    className="relative bg-white rounded-3xl shadow-md w-full border border-gray-200 overflow-hidden"
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={1}
                >
                    <h2 className="absolute text-sm font-semibold ml-2 mt-2 px-2 py-1 rounded-full bg-white text-center z-50 shadow-lg">Map</h2>
                    <img src={Cesiveroo} className='w-full h-full' />
                    <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent via-white to-white  pointer-events-none z-40 " />
                    <div className='absolute bottom-10 w-full text-center z-50 text-3xl font-sfregular text-darkGray tracking-wide' > Aix-en-Provence</div>
                    <div className='absolute bottom-6 w-full text-center z-50 text-sm font-sfultralight font-bold text-lightGray tracking-widest' > France</div>
                    <div className='absolute bottom-2 w-full text-center z-50 text-xs font-sfultralight font-bold text-lightGray' > 43.5297° N, 5.4474° E</div>
                </motion.div> */}

            </div>
        </div >
    )
}

