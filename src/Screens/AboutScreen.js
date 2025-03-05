import { React, useState } from 'react';
import './screens.css';
import Laptop from '../assets/Laptop.png';
import { FlipWords } from "../components/ui/flip-words";
import { cn } from "../lib/utils";

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
                <div className={cn("border-t border-gray-300 my-6 w-full flex flex-row  justify-between md:justify-end font-sfultralight")}>
                    <div className={cn('flex flex-row gap-4 md:hidden')}>
                        <a href="https://www.linkedin.com/in/aymanehilmi/" className={cn("text-base font-bold mt-6 ")} style={{ color: '#a3a8af' }}>Linkedin ↗</a>
                        <a href="https://github.com/AymaneHilmi" className={cn("text-base font-bold mt-6")} style={{ color: '#a3a8af' }}>GitHub ↗</a>
                    </div>
                    <h1 className={cn("text-base font-bold mt-6")} style={{ color: '#a3a8af' }}>by Aymane HILMI</h1>
                </div>
            </div>
        </div >
    )
}

