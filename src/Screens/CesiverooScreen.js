import { React, img, useEffect, useState } from 'react'
import Spline from '@splinetool/react-spline';
import { AnimatedTooltip } from "../components/ui/animated-tooltip";
import { CodeBlock } from "../components/ui/code-block";
import Cesiveroo from '../assets/LogoCesiveroo.png';
import Step1 from '../assets/CesiverooStep1.png';
import Step2 from '../assets/CesiverooStep2.png';
import Step3 from '../assets/CesiverooStep3.png';
import Step4 from '../assets/CesiverooStep4.png';
import Step5 from '../assets/CesiverooStep5.png';
import GraphiChart from '../assets/CesiverooIpadChart.png';
import WireFrames from '../assets/CesiverooWireFrames.png';
import Architecture from '../assets/CesiverooArchitecture.png';
import NeedSchema from '../assets/NeedsAssesment.png';
import Footer from '../components/footer';
import AOS from 'aos'
import { cn } from "../lib/utils";
import PropTypes from "prop-types";



export default function CesiverooScreen() {

    // const [isVisible, setIsVisible] = useState(false);

    // useEffect(() => {
    //     const observer = new IntersectionObserver((entries) => {
    //         entries.forEach((entry) => {
    //             if (entry.isIntersecting) {
    //                 setIsVisible(true);
    //                 observer.disconnect();
    //             }
    //         });
    //     });

    //     const target = document.querySelector('#landing-page');
    //     if (target) {
    //         observer.observe(target);
    //     }

    //     return () => {
    //         if (target) {
    //             observer.unobserve(target);
    //         }
    //     };
    // }, []);

    // const handleLoad = () => {
    //     AOS.refresh();
    // };

    // const people = [
    //     {
    //         id: 1,
    //         name: "Clement Fornes",
    //         designation: "Software Engineer",
    //         image: "https://media.licdn.com/dms/image/v2/D4D03AQHJVCZM9XWnyA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1710451743776?e=1741824000&v=beta&t=f5LejpCDWFVriiozl44PDamTStnrmrb4AcgIrRj2NFg",
    //     },
    //     {
    //         id: 2,
    //         name: "Teo Emirot",
    //         designation: "IT Engineer",
    //         image: "https://media.licdn.com/dms/image/v2/C4D03AQHk1JDj31er8A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1657905707102?e=1741824000&v=beta&t=bwgN7AnDXWT9NrCR8OuUU1pU2v6KOlPtMq4yUGq5wx0",
    //     }
    // ];

    // const Disciplines = [
    //     {
    //         id: 1,
    //         name: "React Native",
    //         designation: "Library",
    //         image:
    //             "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz34OmNVyIMh1rguNfXC3MBk7Qq3DTduJVVg&s",
    //     },
    //     {
    //         id: 2,
    //         name: "Microsoft SQL",
    //         designation: "Data Base",
    //         image:
    //             "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROcY7avil2U_k5wxxhQGXOHK5CH79g0h4R7xY4fgUhqZNuZSNlvkGcw6RYsT29ailWpV8&usqp=CAU",
    //     },
    //     {
    //         id: 3,
    //         name: "Express JS",
    //         designation: "Framework",
    //         image:
    //             "https://e7.pngegg.com/pngimages/925/447/png-clipart-express-js-node-js-javascript-mongodb-node-js-text-trademark-thumbnail.png",
    //     },
    //     {
    //         id: 4,
    //         name: "Mongo DB",
    //         designation: "Data Base",
    //         image:
    //             "https://www.svgrepo.com/show/331488/mongodb.svg",
    //     },
    //     {
    //         id: 5,
    //         name: "Docker",
    //         designation: "Application",
    //         image:
    //             "https://img-0.journaldunet.com/FdWFphLk__fpZlVrdZArGSxwfyg=/1500x/smart/4cfbed5bddb0467bbecad96ca168bbe3/ccmcms-jdn/11507000.jpg"

    //     }
    // ];

    return (
        <>
            <section className="relative mx-auto max-w-6xl px-6 py-14 sm:py-20 mt-28" aria-label="Cesiveroo – Split intro section">
                <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-12">
                    <div className="w-full text-left">
                        <p className="text-xs uppercase tracking-widest text-gray-500">Process Highlights</p>
                        <h2 className="mt-2 text-3xl sm:text-4xl font-semibold text-gray-900">Cesiveroo Project</h2>
                        <p className="mt-3 text-sm font-medium text-gray-400">Challenge</p>
                        <p className="mt-4 text-base sm:text-lg leading-relaxed text-gray-600 text-justify">
                            This project was part of an academic assignment during my time in engineering school. The challenge was to create an Uber-like application with different types of users: customers, restaurants, delivery personnel, third-party developers, and service teams, all within 4 weeks. This solution involves managing asynchronous communication, load balancing, microservice integration, and real-time updates. The project also includes handling ambiguous requirements and working with limited prior experience, making it a practical exercise in problem-solving and collaboration within our team of 3 developers. 3 very cool developers.
                        </p>
                    </div>

                    <div className="w-full md:w-[48%]">
                        <div className="relative aspect-[16/11] rounded-2xl ring-1 ring-gray-200 bg-white overflow-hidden grid place-items-center">

                            <div className="text-center">
                                <div className="mx-auto h-24 w-24 rounded-xl bg-gray-50 ring-1 ring-gray-200 grid place-items-center">
                                    <span className="text-xs text-gray-400">Image / Spline</span>
                                </div>
                                <p className="mt-2 text-xs text-gray-400">Ajoute ta scène ici (iframe / canvas)</p>
                            </div>

                            {/* si je met l'element 3D spline /}

                                {/* <iframe
                                    title="Cesiveroo 3D"
                                    src=""
                                    className="absolute inset-0 h-full w-full border-0"
                                    allow="autoplay; fullscreen; xr-spatial-tracking"
                                    allowFullScreen
                                /> */}
                        </div>
                    </div>
                </div>
            </section>

            {/*  Détails du projet */}
            <section
                className="mx-auto max-w-5xl px-6 py-16 sm:py-20"
                aria-label="Détails du projet Cesiveroo"
            >
                <div className="text-center mb-10">
                    <p className="text-xs uppercase tracking-widest text-gray-500">Aperçu du projet</p>
                    <h2 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">Détails & Objectifs</h2>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
                    <div className="rounded-xl ring-1 ring-gray-200 p-4 text-center">
                        <p className="text-3xl font-semibold text-gray-900">4</p>
                        <p className="text-xs text-gray-500 mt-1">semaines</p>
                    </div>
                    <div className="rounded-xl ring-1 ring-gray-200 p-4 text-center">
                        <p className="text-3xl font-semibold text-gray-900">3</p>
                        <p className="text-xs text-gray-500 mt-1">développeurs</p>
                    </div>
                    <div className="rounded-xl ring-1 ring-gray-200 p-4 text-center">
                        <p className="text-sm font-medium text-gray-900">Rôle</p>
                        <p className="text-xs text-gray-500 mt-1">Lead Front & UX</p>
                    </div>
                    <div className="rounded-xl ring-1 ring-gray-200 p-4 text-center">
                        <p className="text-sm font-medium text-gray-900">Livrables</p>
                        <p className="text-xs text-gray-500 mt-1">MVP, docs, démo</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-10 items-start">
                    <div className="md:col-span-3">
                        <h3 className="text-lg font-semibold text-gray-900">Objectifs</h3>
                        <ul className="mt-3 space-y-2 text-sm text-gray-700">
                            <li className="flex gap-3"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#20CFBD]" /><span>Concevoir une expérience fluide inspirée de Deliveroo, adaptée au contexte académique.</span></li>
                            <li className="flex gap-3"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#20CFBD]" /><span>Structurer une architecture <em>microservices</em> simple, déployable en conteneurs.</span></li>
                            <li className="flex gap-3"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#20CFBD]" /><span>Livrer un MVP testable avec une base de données et un tableau de bord.</span></li>
                        </ul>
                    </div>

                    <div className="md:col-span-2">
                        <h3 className="text-lg font-semibold text-gray-900">Stack & outils</h3>
                        <div className="mt-3 flex flex-wrap gap-2">
                            {[
                                "React / React Native",
                                "Express.js",
                                "MongoDB",
                                "MS SQL",
                                "Docker",
                                "TailwindCSS",
                                "Playwright (tests)",
                            ].map((chip) => (
                                <span key={chip} className="inline-flex items-center rounded-full border border-gray-200 bg-white px-3 py-1 text-xs text-gray-700 shadow-sm">
                                    {chip}
                                </span>
                            ))}
                        </div>
                        <p className="mt-4 text-xs text-gray-500">Focus: performance, accessibilité, DX propre, CI simplifiée.</p>
                    </div>
                </div>

                <div className="mt-14">
                    <h3 className="text-lg font-semibold text-gray-900 text-center">Processus en 5 étapes</h3>
                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
                        <div className="rounded-2xl ring-1 ring-gray-200 p-4">
                            <img src={NeedSchema} alt="Étude du besoin" className="w-full h-40 object-cover rounded-lg" />
                            <p className="mt-3 text-sm font-medium text-gray-900">1. Étude du besoin</p>
                            <p className="text-xs text-gray-600">Interviews, cadrage des users & parcours.</p>
                        </div>
                        <div className="rounded-2xl ring-1 ring-gray-200 p-4">
                            <img src={WireFrames} alt="Wireframes" className="w-full h-40 object-cover rounded-lg" />
                            <p className="mt-3 text-sm font-medium text-gray-900">2. Wireframes & UI</p>
                            <p className="text-xs text-gray-600">Zoning, composants, hiérarchie visuelle.</p>
                        </div>
                        <div className="rounded-2xl ring-1 ring-gray-200 p-4">
                            <img src={Architecture} alt="Architecture" className="w-full h-40 object-cover rounded-lg" />
                            <p className="mt-3 text-sm font-medium text-gray-900">3. Architecture</p>
                            <p className="text-xs text-gray-600">Microservices, schémas de données, APIs.</p>
                        </div>
                    </div>

                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="rounded-2xl ring-1 ring-gray-200 p-4">
                            <img src={Step4} alt="Développement & tests" className="w-full h-40 object-cover rounded-lg" />
                            <p className="mt-3 text-sm font-medium text-gray-900">4. Dev & Tests</p>
                            <p className="text-xs text-gray-600">Itérations rapides, validation des scénarios clés.</p>
                        </div>
                        <div className="rounded-2xl ring-1 ring-gray-200 p-4">
                            <img src={Step5} alt="Démo & retours" className="w-full h-40 object-cover rounded-lg" />
                            <p className="mt-3 text-sm font-medium text-gray-900">5. Démo & Retex</p>
                            <p className="text-xs text-gray-600">Présentation, métriques, axes d’amélioration.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>


    )
}

