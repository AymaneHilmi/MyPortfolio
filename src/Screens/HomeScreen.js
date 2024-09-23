import { React } from 'react'
import { useNavigate } from 'react-router-dom';
import Aymane from '../assets/Aymane.jpg';
import Cesiveroo from '../assets/Cesiveroo.png';
import SG from '../assets/Saint-Gobain.png';
import Profil from '../assets/PDP.jpeg';
import { cn } from "../lib/utils";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import { BentoGrid, BentoGridItem } from "../components/ui/bento-grid";
import { motion } from "framer-motion";

export default function AboutScreen() {
    const words = `Welcome to my portfolio, I'm Aymane HILMI [أيمن] .
    Passionate about computer Science and online business I aim to leave a personal mark in this world... [إن شاء الله] `
    const navigate = useNavigate();

    const handleClick = (link) => {
        navigate(`/${link}`);
    };

    const SkeletonOne = () => {
        return (
            <motion.div
                initial="initial"
                animate="animate"
                className="flex flex-1 w-full h-full min-h-[10rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2"
                style={{
                    backgroundImage: `url(${Aymane})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <motion.div className="h-full w-full rounded-lg"></motion.div>
            </motion.div>
        );
    };

    const SkeletonThree = () => {

        return (
            <motion.div
                initial="initial"
                animate="animate"
                className="flex flex-1 w-full h-full min-h-[10rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2"
                style={{
                    backgroundImage: `url(${Cesiveroo})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <motion.div className="h-full w-full rounded-lg"></motion.div>
            </motion.div>
        );
    };

    const SkeletonTwo = () => {
        return (
            <motion.div
                initial="initial"
                animate="animate"
                className="flex flex-1 w-full h-full min-h-[10rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2"
                style={{
                    backgroundImage: `url(${SG})`,
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundColor: "#EEEEEE",
                }}
            >
                <motion.div className="h-full w-full rounded-lg"></motion.div>
            </motion.div>
        );
    };
    const SkeletonFour = () => {
        return (
            <motion.div
                initial="initial"
                animate="animate"
                whileHover="hover"
                className="flex flex-1 w-full h-full min-h-[8rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2"
            >
                <motion.div
                    className="h-full w-1/3 rounded-2xl bg-[#eeeeee] p-4 border border-neutral-400 flex flex-col items-center justify-center"
                >
                    <img
                        src="https://june-changelog.s3.eu-central-1.amazonaws.com/spline_icon_twitter_removebg_preview_db2832210b.png"
                        alt="avatar"
                        height="100"
                        width="100"
                        className=" h-10 w-10"
                    />
                    <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
                        Spline
                    </p>
                    <p className="border border-red-500 bg-red-100 dark:bg-red-900/20 text-red-600 text-xs rounded-full px-2 py-0.5 mt-4">
                        3D
                    </p>
                </motion.div>
                <motion.div className="h-full relative z-20 w-1/3 rounded-2xl bg-[#eeeeee] p-4   border  border-neutral-400 flex flex-col items-center justify-center">
                    <img
                        src="https://static.vecteezy.com/system/resources/previews/027/127/463/original/javascript-logo-javascript-icon-transparent-free-png.png"
                        alt="avatar"
                        height="100"
                        width="100"
                        className=" h-10 w-10"
                    />
                    <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
                        JavaScript
                    </p>
                    <p className="border border-green-500 bg-green-100 dark:bg-green-900/20 text-green-600 text-xs rounded-full px-2 py-0.5 mt-4">
                        Interactions
                    </p>
                </motion.div>
                <motion.div
                    className="h-full w-1/3 rounded-2xl bg-[#eeeeee] p-4  border border-neutral-400 flex flex-col items-center justify-center"
                >
                    <img
                        src="https://www.svgrepo.com/show/327388/logo-react.svg"
                        alt="avatar"
                        height="100"
                        width="100"
                        className=" h-10 w-10"
                    />
                    <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
                        React JS
                    </p>
                    <p className="border border-orange-500 bg-orange-100 dark:bg-orange-900/20 text-orange-600 text-xs rounded-full px-2 py-0.5 mt-4">
                        Library
                    </p>
                </motion.div>
            </motion.div>
        );
    };
    const SkeletonFive = () => {
        return (
            <motion.div
                initial="initial"
                whileHover="animate"
                className="flex flex-1 w-full h-full min-h-[10rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
            >
                <motion.div
                    className="flex flex-row rounded-2xl border border-neutral-400 p-2  items-start space-x-2 bg-[#eeeeee]"
                >
                    <img
                        src={Profil}
                        alt="avatar"
                        height="100"
                        width="100"
                        className="rounded-full h-10 w-10"
                    />
                    <p className="text-xs text-neutral-500">
                        I’ve worked on some pretty cool projects! It’s been an awesome journey.
                    </p>
                </motion.div>
                <motion.div
                    className="flex flex-row rounded-full border border-neutral-400 bg-[#eeeeee] p-2 pl-6 items-center justify-end space-x-2 w-3/4 ml-auto "
                >
                    <p className="text-xs text-neutral-500">Like getting coffee? That’s impressive!</p>
                    <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
                </motion.div>
            </motion.div>
        );
    };
    const items = [
        {
            title: "About Me",
            description: (
                <span className="text-sm">
                    Discover Aymane's personality, and his journey in tech innovation.
                </span>
            ),
            header: <SkeletonOne />,
            className: "md:col-span-1",
            link: "About",
        },
        {
            title: "Saint-Gobain Research Provence",
            description: (
                <span className="text-sm">
                    Discover my Work-Study journey as a Software Engineer at Saint-Gobain.
                </span>
            ),
            header: <SkeletonTwo />,
            className: "md:col-span-1",
            link: "Saintgobain",
        },
        {
            title: "Cesiveroo Project",
            description: (
                <span className="text-sm">
                    Development of a mobile application in React Native for food delivery.
                </span>
            ),
            header: <SkeletonThree />,
            className: "md:col-span-1",
            link: "Comingsoon",
        },

        {
            title: "Aymane's Portfolio",
            description: (
                <span className="text-sm">
                    Discover how I coded my portfolio from scratch and the tools I used.
                </span>
            ),
            header: <SkeletonFour />,
            className: "md:col-span-2",
            link: "Comingsoon",
        },

        {
            title: "Aymane's Resume",
            description: (
                <span className="text-sm">
                    Explore my journey since moving from Italy to France !.
                </span>
            ),
            header: <SkeletonFive />,
            className: "md:col-span-1",
            link: "Resume",
        },
    ];
    return (
        <div className='w-full flex flex-col items-center p-6'>

            <div className="flex justify-center items-center text-center  space-x-4 mb-4" data-aos="fade-up">
                <TextGenerateEffect duration={1} words={words} className="w-5/6" style={{ fontFamily: 'SFULTRALIGHT', color: '#a3a8af' }} />
            </div>
            <div className=" w-11/12 flex flex-row justify-between "></div>


            <div className="border-t border-gray-300 my-4 w-11/12" data-aos="fade-up">
                <BentoGrid className="mx-auto md:auto-rows-[18rem] mt-8 " >
                    {items.map((item, i) => (
                        <BentoGridItem
                            key={i}
                            title={item.title}
                            description={item.description}
                            header={item.header}
                            className={cn("[&>p:text-lg]", item.className)}
                            onClick={() => handleClick(item.link)}
                        />
                    ))}
                </BentoGrid>

            </div>
            <div data-aos="fade-up">


            </div>
            <div className="border-t border-gray-300 mt-6 w-full flex flex-row  justify-between md:justify-end ">
                <div className='flex flex-row gap-4 md:hidden'>

                    <a href="https://www.linkedin.com/in/aymanehilmi/" className="text-base font-bold mt-6" style={{ fontFamily: 'SFULTRALIGHT', color: '#a3a8af' }}>Linkedin ↗</a>
                    <a href="https://github.com/AymaneHilmi" className="text-base font-bold mt-6" style={{ fontFamily: 'SFULTRALIGHT', color: '#a3a8af' }}>GitHub ↗</a>
                </div>

                <a className="text-base font-bold mt-6" style={{ fontFamily: 'SFULTRALIGHT', color: '#a3a8af' }}>by Aymane HILMI</a>

            </div>


        </div>
    )
}



