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

export default function HomeScreen({ scrollToRoutes }) {
    const words = `Welcome to my portfolio, I'm Aymane HILMI [أيمن] .
    Passionate about computer Science and online business I aim to leave a personal mark in this world... [إن شاء الله] `
    const navigate = useNavigate();

    const handleClick = (link) => {
        navigate(`/${link}`);
        if (scrollToRoutes) {
            scrollToRoutes();
        }
    };

    const SkeletonOne = () => {
        return (
            <motion.div
                initial="initial"
                animate="animate"
                className={cn("flex flex-1 w-full h-full min-h-[10rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2", className)}
                style={{
                    backgroundImage: `url(${Aymane})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <motion.div className={cn("h-full w-full rounded-lg", className)}></motion.div>
            </motion.div>
        );
    };

    const SkeletonThree = () => {

        return (
            <motion.div
                initial="initial"
                animate="animate"
                className={cn("flex flex-1 w-full h-full min-h-[10rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2", className)}
                style={{
                    backgroundImage: `url(${Cesiveroo})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <motion.div className={cn("h-full w-full rounded-lg", className)}></motion.div>
            </motion.div>
        );
    };

    const SkeletonTwo = () => {
        return (
            <motion.div
                initial="initial"
                animate="animate"
                className={cn("flex flex-1 w-full h-full min-h-[10rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2", className)}
                style={{
                    backgroundImage: `url(${SG})`,
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundColor: "#EEEEEE",
                }}
            >
                <motion.div className={cn("h-full w-full rounded-lg", className)}></motion.div>
            </motion.div>
        );
    };
    const SkeletonFour = () => {
        return (
            <motion.div
                initial="initial"
                animate="animate"
                whileHover="hover"
                className={cn("flex flex-1 w-full h-full min-h-[8rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2", className)}
            >
                <motion.div
                    className={cn("h-full w-1/3 rounded-2xl bg-[#eeeeee] p-4 border border-neutral-400 flex flex-col items-center justify-center", className)}
                >
                    <img
                        src="https://june-changelog.s3.eu-central-1.amazonaws.com/spline_icon_twitter_removebg_preview_db2832210b.png"
                        alt="avatar"
                        height="100"
                        width="100"
                        className={cn("h-10 w-10", className)}
                    />
                    <p className={cn("sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4", className)}>
                        Spline
                    </p>
                    <p className={cn("border border-red-500 bg-red-100 dark:bg-red-900/20 text-red-600 text-xs rounded-full px-2 py-0.5 mt-4", className)}>
                        3D
                    </p>
                </motion.div>
                <motion.div className={cn("h-full relative z-20 w-1/3 rounded-2xl bg-[#eeeeee] p-4   border  border-neutral-400 flex flex-col items-center justify-center", className)}>
                    <img
                        src="https://static.vecteezy.com/system/resources/previews/027/127/463/original/javascript-logo-javascript-icon-transparent-free-png.png"
                        alt="avatar"
                        height="100"
                        width="100"
                        className=" h-10 w-10"
                    />
                    <p className={cn("sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4", className)}>
                        JavaScript
                    </p>
                    <p className={cn("border border-green-500 bg-green-100 dark:bg-green-900/20 text-green-600 text-xs rounded-full px-2 py-0.5 mt-4", className)}>
                        Interactions
                    </p>
                </motion.div>
                <motion.div
                    className={cn("h-full w-1/3 rounded-2xl bg-[#eeeeee] p-4  border border-neutral-400 flex flex-col items-center justify-center", className)}
                >
                    <img
                        src="https://www.svgrepo.com/show/327388/logo-react.svg"
                        alt="avatar"
                        height="100"
                        width="100"
                        className=" h-10 w-10"
                    />
                    <p className={cn("sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4", className)}>
                        React JS
                    </p>
                    <p className={cn("border border-orange-500 bg-orange-100 dark:bg-orange-900/20 text-orange-600 text-xs rounded-full px-2 py-0.5 mt-4", className)}>
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
                className={cn("flex flex-1 w-full h-full min-h-[10rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2", className)}
            >
                <motion.div
                    className={cn("flex flex-row rounded-2xl border border-neutral-400 p-2  items-start space-x-2 bg-[#eeeeee]", className)}
                >
                    <img
                        src={Profil}
                        alt="avatar"
                        height="100"
                        width="100"
                        className={cn("rounded-full h-10 w-10", className)}
                    />
                    <p className={cn("text-xs text-neutral-500", className)}>
                        I’ve worked on some pretty cool projects! It’s been an awesome journey.
                    </p>
                </motion.div>
                <motion.div
                    className={cn("flex flex-row rounded-full border border-neutral-400 bg-[#eeeeee] p-2 pl-6 items-center justify-end space-x-2 w-3/4 ml-auto ", className)}
                >
                    <p className={cn("text-xs text-neutral-500", className)}>Like getting coffee? That’s impressive!</p>
                    <div className={cn("h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0", className)} />
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
            className: "lg:col-span-1",
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
            className: "lg:col-span-1",
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
            className: "lg:col-span-1",
            link: "Cesiveroo",
        },

        {
            title: "Aymane's Portfolio",
            description: (
                <span className="text-sm">
                    Discover how I coded my portfolio from scratch and the tools I used.
                </span>
            ),
            header: <SkeletonFour />,
            className: "lg:col-span-2",
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
            className: "md:col-span-2 lg:col-span-1",
            link: "Resume",
        },
    ];
    return (
        <div className={cn('w-full flex flex-col items-center p-6', className)}>

            <div className={cn("flex justify-center items-center text-center  space-x-4 mb-4", className)} data-aos="fade-up">
                <TextGenerateEffect duration={1} words={words} className="w-5/6 font-sfultralight" />
            </div>
            <div className={cn(" w-11/12 flex flex-row justify-between ", className)}></div>


            <div className={cn("border-t border-gray-300 my-4", className)} data-aos="fade-up">
                <BentoGrid className="mx-auto lg:auto-rows-[22rem] mt-8 " >
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
            <div className={cn("border-t border-gray-300 mt-6 w-full flex flex-row justify-between md:justify-end font-sfultralight ", className)}>
                <div className={cn('flex flex-row gap-4 md:hidden', className)}>

                    <a href="https://www.linkedin.com/in/aymanehilmi/" target="_blank" className={cn("text-base font-bold mt-6", className)} style={{ color: '#a3a8af' }}>Linkedin ↗</a>
                    <a href="https://github.com/AymaneHilmi" target="_blank" className={cn("text-base font-bold mt-6", className)} style={{ color: '#a3a8af' }}>GitHub ↗</a>
                </div>

                <a className={cn("text-base font-bold mt-6", className)} style={{ color: '#a3a8af' }}>by Aymane HILMI</a>

            </div>


        </div>
    )
}



