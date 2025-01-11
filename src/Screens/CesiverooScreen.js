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




export default function CesiverooScreen() {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            });
        });

        const target = document.querySelector('#landing-page');
        if (target) {
            observer.observe(target);
        }

        return () => {
            if (target) {
                observer.unobserve(target);
            }
        };
    }, []);

    const handleLoad = () => {
        AOS.refresh();
    };

    const people = [
        {
            id: 1,
            name: "Clement Fornes",
            designation: "Software Engineer",
            image: "https://media.licdn.com/dms/image/v2/D4D03AQHJVCZM9XWnyA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1710451743776?e=1741824000&v=beta&t=f5LejpCDWFVriiozl44PDamTStnrmrb4AcgIrRj2NFg",
        },
        {
            id: 2,
            name: "Teo Emirot",
            designation: "IT Engineer",
            image: "https://media.licdn.com/dms/image/v2/C4D03AQHk1JDj31er8A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1657905707102?e=1741824000&v=beta&t=bwgN7AnDXWT9NrCR8OuUU1pU2v6KOlPtMq4yUGq5wx0",
        }
    ];

    const Disciplines = [
        {
            id: 1,
            name: "React Native",
            designation: "Library",
            image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz34OmNVyIMh1rguNfXC3MBk7Qq3DTduJVVg&s",
        },
        {
            id: 2,
            name: "Microsoft SQL",
            designation: "Data Base",
            image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROcY7avil2U_k5wxxhQGXOHK5CH79g0h4R7xY4fgUhqZNuZSNlvkGcw6RYsT29ailWpV8&usqp=CAU",
        },
        {
            id: 3,
            name: "Express JS",
            designation: "Framework",
            image:
                "https://e7.pngegg.com/pngimages/925/447/png-clipart-express-js-node-js-javascript-mongodb-node-js-text-trademark-thumbnail.png",
        },
        {
            id: 4,
            name: "Mongo DB",
            designation: "Data Base",
            image:
                "https://www.svgrepo.com/show/331488/mongodb.svg",
        },
        {
            id: 5,
            name: "Docker",
            designation: "Application",
            image:
                "https://img-0.journaldunet.com/FdWFphLk__fpZlVrdZArGSxwfyg=/1500x/smart/4cfbed5bddb0467bbecad96ca168bbe3/ccmcms-jdn/11507000.jpg"

        }
    ];

    return (
        <div className='w-full flex flex-col items-center text-justify' data-aos="fade-up">
            <div className="border-b border-gray-300 w-full h-screen flex flex-col justify-center items-center mb-4 bg-[#e6e6e6]">
                <Spline scene="https://prod.spline.design/DGj8qhSyZN4FmvR1/scene.splinecode" onLoad={handleLoad} />
            </div>
            <div className="flex flex-col w-11/12 mt-4 md:text-lg text-xs">

                <div className='flex flex-col' data-aos="fade-up">

                    <a className='mt-3' style={{ fontFamily: 'SFREGULAR', color: '#a9a5ac' }}> Process Highlights</a>
                    <a className="text-2xl md:text-4xl mt-1" style={{ fontFamily: 'SFBOLD', color: '#3b3d41' }}>
                        Cesi<span style={{ color: '#20CFBD' }}>veroo</span> Project
                    </a>

                    <div className="border-t border-gray-300 my-4 w-full flex flex-row justify-between" />


                    <div>
                        <a style={{ fontFamily: 'SFBOLD', color: '#3b3d41' }}
                            className="md:text-lg text-base">
                            Challenge
                            <br />
                            <br />
                            <span style={{ fontFamily: 'SFREGULAR', color: '#3b3d41', textAlign: 'right' }}>
                                This project was part of an academic assignment during my time in engineering school.
                                The challenge was to create an Uber-like application with different types of users:
                                customers, restaurants, delivery personnel, third-party developers, and service teams,
                                all within 4 weeks. This solution will needs to involves managing asynchronous communication,
                                load balancing, microservice integration, and real-time updates. The project also includes handling
                                ambiguous requirements and working with limited prior experience, making it a practical
                                exercise in problem-solving and collaboration within our team of 3 developers. 3 very cool
                                developers.
                            </span>
                        </a>
                    </div>

                    <div className="border-t border-gray-300 my-4 w-full flex flex-row" />
                    <div className='flex flex-row md:gap-28 gap-12 ' style={{ fontFamily: "SFREGULAR", color: '#3b3d41' }}>

                        <div className='flex flex-col'>
                            <a>Timeline</a>
                            <a>March 2024 -<br /> April 2024</a>
                        </div>

                        <div className='flex flex-col'>
                            <a className='mb-2'>Team</a>
                            <div className="flex flex-row items-center justify-center mb-10 w-full">
                                <AnimatedTooltip items={people} />
                            </div>
                        </div>
                        <div className='flex flex-col'>
                            <a className='mb-2'>Disciplines</a>
                            <div className="flex flex-row items-center justify-center mb-10 w-full">
                                <AnimatedTooltip items={Disciplines} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col' data-aos="fade-up">
                    <a className='mt-6' style={{ fontFamily: 'SFREGULAR', color: '#a9a5ac' }}>  Background</a>
                    <a className="text-2xl md:text-xl mt-1" style={{ fontFamily: 'SFBOLD', color: '#3b3d41' }}>
                        Executive Summary
                    </a>

                    <div className="border-t border-gray-300 my-4 w-full flex flex-row justify-between " />


                    <div className=" items-start">
                        <a style={{ fontFamily: 'SFBOLD', color: '#3b3d41' }}
                            className="md:text-lg text-base">
                            <span style={{ fontFamily: 'SFREGULAR', color: '#3b3d41', textAlign: 'justify', }} >
                                <>
                                    On our class we were 3 groups, each of the three groups had to design a separate application,
                                    to make it more funny and competitive we choosed to inspire our application from existing
                                    delivery services in France to make us "competitors".
                                    One group chose Uber Eats, naming their platform <strong>Ces'</strong><strong className='text-[#7AC356]'>Eats</strong>, another took inspiration from
                                    Just Eat, calling it <strong className='text-[#FF8515]'>Cesi Eat</strong>, while our group decided as you propably already guessed to base our platform on Deliveroo,
                                    naming it <strong>CESI</strong><strong className=' text-[#20CFBD]'>VEROO</strong><strong >!</strong>
                                </>
                            </span>
                        </a>
                    </div>
                </div>
                <div className='flex flex-col' data-aos="fade-up">

                    <a className="text-2xl md:text-xl mt-14" style={{ fontFamily: 'SFBOLD', color: '#3b3d41' }}>
                        The Process
                    </a>

                    <div className="border-t border-gray-300 my-4 w-full flex flex-row justify-around" />


                    <div className="flex flex-wrap justify-around gap-6 w-full mt-6">
                        {[
                            { src: Step1, title: "Research", description: <><strong>Needs</strong> Assessment <br />Study of <strong>Solutions</strong></> },
                            { src: Step2, title: "Design", description: <>Mockups <br /><strong>UX/UI</strong> design</> },
                            { src: Step3, title: "Development", description: <><strong>Architecture</strong> Setup <br />Backend & Frontend</> },
                            { src: Step4, title: "Tests", description: <>Integration <br /><strong>Testing</strong></> },
                            { src: Step5, title: "Documentation", description: <><strong>Git</strong> README.md <br /><strong>Technical</strong> Doc</> },
                        ].map((step, index) => (
                            <div key={index} className="flex flex-col items-center text-center flex-none w-[calc(33.333%)] md:w-[calc(15%)]">
                                <img
                                    src={step.src}
                                    alt={step.title}
                                    className="w-24 h-24 transition-transform transform hover:scale-105 duration-500 ease-in-out"
                                />
                                <p className="font-bold mt-2 text-xs md:text-sm" style={{ fontFamily: 'SFREGULAR', color: '#3b3d41' }}>
                                    {step.title}
                                </p>
                                <p className="mt-2 text-xs md:text-sm" style={{ fontFamily: 'SFREGULAR', color: '#3b3d41' }}>
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='flex flex-col' data-aos="fade-up">
                    <a className='mt-16 flex flex-row' style={{ fontFamily: 'SFREGULAR', color: '#a9a5ac' }}>
                        <a>
                            Research
                        </a>
                    </a>
                    <div className='flex flex-row justify-between align-middle'>
                        <a className="text-2xl md:text-xl mt-1" style={{ fontFamily: 'SFBOLD', color: '#3b3d41' }}>
                            Needs Assessment
                        </a>
                        <img src={Step1} className='w-10 h-10' />
                    </div>
                    <div className="border-t border-gray-300 my-2 w-full flex flex-row justify-between " />
                    <div className=" flex flex-col justify-center items-center">
                        <a style={{ fontFamily: 'SFBOLD', color: '#3b3d41' }}
                            className="md:text-lg text-base">
                            <span style={{ fontFamily: 'SFREGULAR', color: '#3b3d41', textAlign: 'justify', }} >
                                The first step was to clearly analyze what needed to be done and gather all the functional
                                requirements of the application. This phase included studying the various “risks” we might
                                encounter and starting to think about which solutions to choose to address all the needs.
                                These steps helped us plan and project how we would proceed over the course of the 4 weeks.
                            </span>
                        </a>
                        <img src={NeedSchema} className="md:max-w-[80%] mt-8" />

                    </div>
                </div>

                <div className='flex flex-col' data-aos="fade-up">

                    <a className='mt-20 flex flex-row' style={{ fontFamily: 'SFREGULAR', color: '#a9a5ac' }}>
                        <a>
                            Design
                        </a>
                    </a>
                    <div className='flex flex-row justify-between align-middle'>
                        <a className="text-2xl md:text-xl mt-1" style={{ fontFamily: 'SFBOLD', color: '#3b3d41' }}>
                            Graphic Chart
                        </a>
                        <img src={Step2} className='w-10 h-10' />
                    </div>

                    <div className="border-t border-gray-300 my-2 w-full flex flex-row justify-between " />


                    <div className=" flex flex-col justify-center items-center">
                        <a style={{ fontFamily: 'SFBOLD', color: '#3b3d41' }}
                            className="md:text-lg text-base">
                            <span style={{ fontFamily: 'SFREGULAR', color: '#3b3d41', textAlign: 'justify', }} >
                                For the design part, firtsly we go to make a graphic chart, it wasn't very diffucult haha we just ctrl+C & Ctrl+V the Deeliveroo one.
                                After that we started making our logos and starting designing our interfaces. For the interfaces and the logo we
                                fully customized them, having only the visual identity similar to Deliveroo.
                            </span>
                        </a>

                        <img src={GraphiChart} className="mt-14 md:max-w-[70%]" />
                    </div>
                </div>
                <div className='flex flex-col' data-aos="fade-up">
                    <a className='mt-20 flex flex-row' style={{ fontFamily: 'SFREGULAR', color: '#a9a5ac' }}>
                        <a>
                            Design
                        </a>
                    </a>
                    <div className='flex flex-row justify-between align-middle'>
                        <a className="text-2xl md:text-xl mt-1" style={{ fontFamily: 'SFBOLD', color: '#3b3d41' }}>
                            Mockups Interfaces
                        </a>
                        <img src={Step2} className='w-10 h-10' />
                    </div>

                    <div className="border-t border-gray-300 my-2 w-full flex flex-row justify-between " />


                    <div className=" flex flex-col justify-center">
                        <a style={{ fontFamily: 'SFBOLD', color: '#3b3d41' }}
                            className="md:text-lg text-base  items-start text-start">
                            <span style={{ fontFamily: 'SFREGULAR', color: '#3b3d41', textAlign: 'justify', }} >
                                As you can see below, we went throught an intensive design phases (as a developer it was a long,
                                long, long, long, long... process). In this phase we had to design all the interfaces of our application, for each
                                type of user. We had to make sure that the interfaces were user-friendly and that they were in line with the functionalities
                                we wanted to implement.
                            </span>
                        </a>
                        <div className="flex flex-row justify-center items-center">
                            <img src={WireFrames} className="mt-14 md:max-w-[70%] items-center" />
                        </div>
                    </div>
                </div>

                <div className='flex flex-col' data-aos="fade-up">
                    <a className='mt-20 flex flex-row' style={{ fontFamily: 'SFREGULAR', color: '#a9a5ac' }}>
                        <a>
                            Development
                        </a>
                    </a>
                    <div className='flex flex-row justify-between align-middle'>
                        <a className="text-2xl md:text-xl mt-1" style={{ fontFamily: 'SFBOLD', color: '#3b3d41' }}>
                            Architecture
                        </a>
                        <img src={Step3} className='w-10 h-10' />
                    </div>

                    <div className="border-t border-gray-300 my-2 w-full flex flex-row justify-between " />
                    <div className=" flex flex-col justify-center items-center">
                        <a style={{ fontFamily: 'SFBOLD', color: '#3b3d41' }}
                            className="md:text-lg text-base">
                            <span style={{ fontFamily: 'SFREGULAR', color: '#3b3d41', textAlign: 'justify', }} >
                                As the specifications required implementing a microservice architecture, we had to design a scalable and robust system.
                                Ensuring that the application could handle a large number of users was a key priority. The most challenging part was
                                implementing the developer service functionalities. These functionalities were designed to allow interaction with the
                                application, enabling real-time modifications and maintenance of its features.
                            </span>
                        </a>

                        <img src={Architecture} />
                    </div>
                </div>

                <div className='flex flex-col' data-aos="fade-up">
                    <a className=' flex flex-row' style={{ fontFamily: 'SFREGULAR', color: '#a9a5ac' }}>
                        <a>
                            Technical Informations
                        </a>
                    </a>
                    <div className='flex flex-row justify-between align-middle'>
                        <a className="text-2xl md:text-xl mt-1" style={{ fontFamily: 'SFBOLD', color: '#3b3d41' }}>
                            Conclusion
                        </a>
                        <div className='flex flex-row gap-2'>
                            <img src={Step4} className='w-10 h-10' />
                            <img src={Step5} className='w-10 h-10' />
                        </div>
                    </div>

                    <div className="border-t border-gray-300 my-2 w-full flex flex-row justify-between " />


                    <div className=" flex flex-col justify-center md:textlg text-base" style={{ fontFamily: 'SFREGULAR', color: '#3b3d41' }}>
                        To conclude, this project was actually one of the first I worked on that resulted in something real and concrete. After this project, I started having interest in developing technical projects during my personal time (like this portfolio, leetcode problems etc.....).
                        <span >
                            To see the technicals informations of the entire project i'll invite you to click <a className="underline" href='https://github.com/AymaneHilmi/Cesiveroo' target="_blank">here</a> to visit our repos project on Github.
                        </span>
                    </div>
                </div>
                <Footer />
            </div>
        </div >
    )
}

