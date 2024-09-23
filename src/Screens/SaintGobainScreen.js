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

                <a style={{ fontFamily: 'SFREGULAR', color: '#3b3d41' }} className='text-sm'>
                    As a Software Engineer at Saint-Gobain Research Provence, I lead projects aimed
                    at enhancing laboratory workflows. My primary responsibility is automating processes
                    and adding key functionalities to our local Laboratory Information Management System
                    (LIMS), Sample Manager, using .NET (C#). This initiative has streamlined operations and
                    improved efficiency within the lab.
                    <br></br>
                    <br></br>
                    Additionally, I am developing mobile solutions to increase accessibility by integrating web
                    applications and Power Platform tools. This mobile-first approach enables lab personnel to
                    manage the software from their personal and professional devices, ensuring critical functions
                    are always within reach. My role also includes providing technical support, troubleshooting
                    software issues, and maintaining operational continuity within the laboratory.
                </a>
                <div className="border-t border-gray-300 my-4 w-full flex flex-row" />
                <div className='flex flex-row md:gap-28 gap-11 mb-10' style={{ fontFamily: "SFREGULAR", color: '#3b3d41' }}>

                    <div className='flex flex-col'>
                        <a>Timeline</a>
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

