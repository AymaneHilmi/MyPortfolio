import { React, img } from 'react'
import SaintGobain from '../assets/Saint-Gobain.png';



export default function SaintGobainScreen() {
    const words = ["Aymane HILMI", "حلمي أيمن"];

    return (
        <div className='h-screen w-full flex flex-col items-center' data-aos="fade-up">
            <div className="border-b border-gray-300 w-full h-1/3 flex flex-row justify-center items-center mb-4 bg-[#e6e6e6]">
                <img
                    src={SaintGobain}
                    alt="Saint-Gobain"
                    className='md:h-40 h-32 transition-transform transform hover:scale-105 duration-500 ease-in-out'
                />
            </div>
            <div className="flex flex-col w-11/12 mt-4 md:text-sm text-xs">


                <a className="mt-3 text-2xl md:text-4xl" style={{ fontFamily: 'SFBOLD', color: '#3b3d41' }}>Saint-Gobain Research Provence</a>
                <a style={{ fontFamily: 'SFREGULAR', color: '#a9a5ac' }}> Cavaillon, Provence-Alpes-Côte d'Azur, France</a>

                <div className="border-t border-gray-300 my-4 w-full flex flex-row justify-between " />

                <a style={{ fontFamily: 'SFREGULAR', color: '#3b3d41' }}>
                    I’m currently working as a Software Engineer at Saint-Gobain Research Provence,
                    where I lead projects focused on enhancing laboratory workflows. One of my main
                    responsibilities is automating processes and adding key functionalities to the LIMS
                    (Laboratory Information Management System) local software, Sample Manager, with
                    .NET (C#). This enables smoother operations and greater efficiency.
                    <br></br>
                    <br></br>
                    In addition to software improvements, I’m also developing mobile solutions to expand accessibility.
                    By integrating web applications and Power Platform solutions, we’re making it possible for lab personnel
                    to access and manage the software directly from their personal/professional devices. This mobile-first approach ensures
                    that critical functions are always within reach, improving the overall user experience.
                    <br></br>
                    <br></br>
                    My role at the center also involves providing support services, meaning I handle tickets and troubleshoot
                    various issues. Whether it’s resolving software problems or ensuring the smooth functioning of tools, we are
                    the go-to team for technical support, ensuring that laboratory operations continue without disruption.
                </a>
                <div className="border-t border-gray-300 my-4 w-full flex flex-row" />
                <div className='flex flex-row md:gap-28 gap-11 mb-10' style={{ fontFamily: "SFREGULAR", color: '#3b3d41' }}>

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
                        <a>.NET</a>
                        <a>LIMS</a>
                        <a>Mobile Development</a>
                    </div>
                </div>
            </div>
        </div >
    )
}

