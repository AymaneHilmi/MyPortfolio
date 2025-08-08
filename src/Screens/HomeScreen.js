import { React, } from 'react'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import Aix from '../assets/Aix.jpg';
import Cesiveroo from '../assets/Cesiveroo.png';
import SG from '../assets/Saint-Gobain.png';
import tourSG from '../assets/tourSG.jpg';
import Profil from '../assets/PDP.jpeg';
import { cn } from "../lib/utils";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import { BentoGrid, BentoGridItem } from "../components/ui/bento-grid";
import { AnimatedList } from "../components/ui/Animated-list";
import { useEasterEgg } from '../context/EasterEggContext';
import Footer from '../components/footer';
import VisitedMap from "../components/VisitedMap";
import { NumberTicker } from "../components/ui/NumberTicker"
import * as Popover from "@radix-ui/react-popover";
import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import EasterEggsList from '../context/EasterEggsList';
import { Link } from "react-router-dom";


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

export default function HomeScreen({ scrollToRoutes, visitsTotal }) {
    const navigate = useNavigate();
    const { eggCount } = useEasterEgg();
     const [hoveredIndex, setHoveredIndex] = useState(null);


    const handleClick = (link) => {
        navigate(`/${link}`);
        if (scrollToRoutes) {
            scrollToRoutes();
        }
    };

    return (
        <div className="relative bg-white py-10">
           
        </div >
    );
}
