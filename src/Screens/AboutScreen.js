import { React, img } from 'react'
import { PinContainer } from "../components/ui/3d-pin";
import Spline from '@splinetool/react-spline';
import HomeScreen from './HomeScreen';
import JaponPicture from '../assets/Japon.jpg';
import Aymane1 from '../assets/Aymane1.jpg';
import Profil from '../assets/PDP.jpeg';
import Maroc from '../assets/Maroc.jpg';
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



export default function AboutScreen() {
    return (
        <div className='w-full flex flex-col items-center' data-aos="fade-left">

            <div className="flex justify-center items-center text-center w-full mb-4 border-b border-gray-300">
                hello
            </div>


            <div className=" w-full flex flex-row justify-between ">
                <h1 className="text-base font-bold mt-6" style={{ fontFamily: 'SFULTRALIGHT', color: '#a3a8af' }}>Previous Projects</h1>
                <h1 className="text-base font-bold mt-6" style={{ fontFamily: 'SFULTRALIGHT', color: '#a3a8af' }}>2024</h1>
            </div>


        </div>
    )
}

