import { React, } from 'react'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Aix from '../assets/Aix.jpg';
import Cesiveroo from '../assets/Cesiveroo.png';
import SG from '../assets/Saint-Gobain.png';
import Profil from '../assets/PDP.jpeg';
import { cn } from "../lib/utils";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import { BentoGrid, BentoGridItem } from "../components/ui/bento-grid";
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
        transition: { delay: i * 0.1, duration: 0.6 },
    }),
};

export default function HomeScreen({ scrollToRoutes }) {
    const [visitsTotal, setVisitsTotal] = useState(null);
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        // ✅ Pour afficher le total dans le compteur
        fetch("https://visit-counter.aymanehilmi1.workers.dev/api/visits")
            .then(res => res.json())
            .then(data => setVisitsTotal(data.total))
            .catch(() => setVisitsTotal(null));
    }, []);

    useEffect(() => {
        // ✅ Pour les données du graphe
        fetch("https://visit-counter.aymanehilmi1.workers.dev/api/stats")
            .then(res => res.json())
            .then(data => {
                const formatted = Object.entries(data).map(([date, visits]) => ({
                    date,
                    visits,
                }));
                setChartData(formatted);
            })
            .catch(() => setChartData([]));
    }, []);

    const navigate = useNavigate();

    const handleClick = (link) => {
        navigate(`/${link}`);
        if (scrollToRoutes) {
            scrollToRoutes();
        }
    };
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
    return (
        <div className="w-full px-6 py-12">
            <div className='h-1/3'>

            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

                <motion.div
                    className="relative bg-white rounded-3xl pl-2 shadow-md w-full max-w-64 max-h-64 border border-gray-200 py-4 px-2 overflow-hidden"
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
                    className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6 hover:shadow-md transition-shadow duration-300"
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={2}
                >
                    <p className="text-sm text-gray-500">Book</p>
                </motion.div>

                <motion.div
                    className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6 hover:shadow-md transition-shadow duration-300"
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={4}
                >
                    <p className="text-sm text-gray-500">How I work</p>
                </motion.div>
                <motion.div
                    className="relative bg-white rounded-3xl shadow-md w-full max-w-64 min-h-64 border border-gray-200 overflow-hidden"
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={1}
                >
                    <h2 className="absolute text-sm font-semibold ml-2 mt-2 px-2 py-1 rounded-full bg-white text-center z-50 shadow-lg">Map</h2>
                    <img src={Aix} className='w-full h-full' />
                    <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent via-white to-white  pointer-events-none z-40 " />
                    <div className='absolute bottom-10 w-full text-center z-50 text-3xl font-sfregular text-darkGray tracking-wide' > Aix-en-Provence</div>
                    <div className='absolute bottom-6 w-full text-center z-50 text-sm font-sfultralight font-bold text-lightGray tracking-widest' > France</div>
                    <div className='absolute bottom-2 w-full text-center z-50 text-xs font-sfultralight font-bold text-lightGray' > 43.5297° N, 5.4474° E</div>
                </motion.div>
                <motion.div
                    className="rounded-2xl bg-white col-span-2 border border-gray-100 p-6 shadow-lg"
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={5}
                >
                    <h2 className="text-base font-medium text-gray-800 mb-4">By the Numbers</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                className="flex flex-col items-center text-sm text-gray-700"
                                variants={fadeInUp}
                                custom={index}
                            >
                                <div className="mb-1 text-gray-500">{stat.icon}</div>
                                <div className="font-semibold text-lg">{stat.value}</div>
                                <div className="text-xs text-gray-500">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
                <motion.div
                    className="relative overflow-hidden rounded-2xl border-gray-200 shadow-md p-6 w-full max-w-sm hover:shadow-lg transition-all duration-300 "
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={3}
                >


                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-500">Visitors </p>
                            <h3 className="text-4xl font-semibold text-gray-900 mt-1">
                                {visitsTotal}
                            </h3>
                            <p className="text-xs text-gray-400 mt-1">since the deployment</p>
                        </div>
                    </div>
                    <div className="absolute bottom-0 left-0 h-32 w-full mt-4">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={chartData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                                <defs>
                                    <linearGradient id="visitsGradient" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#22c55e" stopOpacity={0.4} />
                                        <stop offset="95%" stopColor="#0e0e10" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <XAxis className='hidden' dataKey="date" tick={{ fill: "#a1a1aa", fontSize: 12 }} />
                                <Tooltip
                                    contentStyle={{ border: "none", borderRadius: "0.5rem" }}
                                    labelStyle={{ color: "#000000" }}
                                    itemStyle={{ color: "#22c55e" }}
                                />
                                <Area
                                    type="monotone"
                                    dataKey="visits"
                                    stroke="#22c55e"
                                    fillOpacity={1}
                                    fill="url(#visitsGradient)"
                                    strokeWidth={2}
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </motion.div>


            </div>

        </div>
    )
}
