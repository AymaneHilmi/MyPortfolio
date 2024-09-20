import { React, img } from 'react'
import { PinContainer } from "../components/ui/3d-pin";
import Spline from '@splinetool/react-spline';
import HomeScreen from './HomeScreen';
import JaponPicture from '../assets/Japon.jpg';
import Aymane1 from '../assets/Aymane1.jpg';
import Profil from '../assets/PDP.jpeg';
import SaintGobain from '../assets/Saint-Gobain.png';
import { cn } from "../lib/utils";
import { CardStack } from "../components/ui/card-stack";
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



export default function SaintGobainScreen() {
    const words = ["Aymane HILMI", "حلمي أيمن"];

    return (
        <div className='h-screen w-full flex flex-col items-center'>
            <div className="border-b border-gray-300 w-full h-1/3 flex flex-row justify-center items-center mb-4 bg-[#e6e6e6]">
                <img
                    src={SaintGobain}
                    alt="Image 1"
                    className='md:h-40 h-32 transition-transform transform hover:scale-105 duration-500 ease-in-out'
                />
            </div>
            <div className="flex flex-col w-11/12 mt-4 md:text-sm text-xs">


                <a className="mt-3 text-2xl md:text-4xl" style={{ fontFamily: 'SFBOLD', color: '#3b3d41' }}>Saint-Gobain Research Provence</a>
                <a className="mt-3" style={{ fontFamily: 'SFREGULAR', color: '#a9a5ac' }}>Cavaillon, Provence-Alpes-Côte d'Azur, France</a>

                <div className="border-t border-gray-300 my-4 w-full flex flex-row justify-between " />

                <a style={{ fontFamily: 'SFREGULAR', color: '#3b3d41' }}>
                    I am a software engineer based in Montpellier, France, with a strong passion for programming.
                    Born in Italy, raised in France, of Moroccan heritage and spent a significant part
                    of my life in Spain. These diverse experiences have shaped me today into a polyglot, fluent in five
                    languages (Italian, French, Maroccan, English & Spanish).
                </a>
                <div className="border-t border-gray-300 my-4 w-full flex flex-row" />
                <div className='flex flex-row md:gap-28 gap-11' style={{ fontFamily: "SFREGULAR", color: '#3b3d41' }}>

                    <div className='flex flex-col'>
                        <a>TimeLine</a>
                        <a>August 2022 - September 2025</a>
                    </div>

                    <div className='flex flex-col'>
                        <a >Team</a>
                        <a>LIMS Competency Center</a>
                    </div>

                    <div className='flex flex-col'>
                        <a >Disciplines</a>
                        <a>.NET Automations</a>
                        <a>Data Management</a>
                        <a>Mobile Development</a>
                    </div>

                </div>

            </div>






            {/* <div className=" w-full flex flex-row justify-between ">
                <h1 className="text-base font-bold mt-6" style={{ fontFamily: 'SFULTRALIGHT', color: '#a3a8af' }}>Previous Projects</h1>
                <h1 className="text-base font-bold mt-6" style={{ fontFamily: 'SFULTRALIGHT', color: '#a3a8af' }}>2024</h1>
            </div> */}


        </div >
    )
}

