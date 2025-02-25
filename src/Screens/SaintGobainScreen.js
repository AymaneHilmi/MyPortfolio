import { React, img } from 'react'
import { AnimatedTooltip } from "../components/ui/animated-tooltip";
import SaintGobain from '../assets/Saint-Gobain.png';
// import CSharp from '../assets/C#.png';
// import SaintGobain from '../assets/Saint-Gobain.png';
// import SaintGobain from '../assets/Saint-Gobain.png';
// import SaintGobain from '../assets/Saint-Gobain.png';
// import SaintGobain from '../assets/Saint-Gobain.png';
// import SaintGobain from '../assets/Saint-Gobain.png';



export default function SaintGobainScreen() {
    const SGDisciplines = [
        {
            id: 1,
            name: " C#",
            designation: "Library",
            image: "https://blog.cellenza.com/wp-content/uploads/2017/02/CSharpLogo.png",
        },
        {
            id: 2,
            name: "ASP .NET & CORE",
            designation: "Framework",
            image:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAAb1BMVEVRK9T///9QKdRNJNNPJ9Q+ANF6Y9zq5/lGFtJYNdZ3X9thQtdIG9KpnedTLtVKH9O9s+z7+v7u6/qvo+mGct/y8PtpTdlxV9pCDNKll+bBuO2Aat1cO9aKd+BnSdnc1/WQf+G0qerHv++bi+TV0POcTBrBAAABJklEQVRIie2T0W6DMAxFY+N0oQ2k0FFCymjp+v/fOANpxiaYUPea8xBdyxwptoIQkUgk8l8QMaSpHAkhtH97lBj0iXAoR4h84LhoJjuANzkknXGgFCbcBQK7ZEWETL0oQksz8UOkaZrzkXOvy9N0cUQWiytc5Ux8NzRMS2T2AAeedk2EDuCmZ+LzZskgLmuTqHooDAZxJxnaIua2grsMYlWWZdXRFtHwsbc/tnreJKK8Qymf4ue5ruscN4loCsia53I0PxfcNCMKfQM4bd4qWUteFPIBhRcvVjN/iNRV1cF4kVoAL7oTk5l1UTcAjfKiUFyV31st7LqI4vHA5OzcKArVH08ac3cc6fVwJefapX8KreUnqZTvacUfo5rQ4zChF4lEIq/yBUTuEHYs2fJIAAAAAElFTkSuQmCC",
        },
        {
            id: 3,
            name: "Sample Manager",
            designation: "Software",
            image:
                "https://careers.astrixinc.com/wp-content/uploads/2021/07/cq5dam.thumbnail.250.250.png"
        },
        {
            id: 4,
            name: "Oracle DB",
            designation: "Data Base",
            image:
                "https://www.gravityer.com/_next/image?url=https%3A%2F%2Fvivid-cow-9924242169.media.strapiapp.com%2Foracle_database_18edd9bd15.jpg&w=2048&q=75"
        },
        {
            id: 5,
            name: "SQL Server",
            designation: "Data Base",
            image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROcY7avil2U_k5wxxhQGXOHK5CH79g0h4R7xY4fgUhqZNuZSNlvkGcw6RYsT29ailWpV8&usqp=CAU",
        },
        {
            id: 6,
            name: "Power Apps",
            designation: "MS Application",
            image:
                "https://amsgcorp.net/wp-content/uploads/2022/08/power-apps-logo.png",
        },
        {
            id: 7,
            name: "Power Automate",
            designation: "MS Application",
            image:
                "https://play-lh.googleusercontent.com/aeXs0qriXwmHVWtq9u4zVUO6SifULKtJOQdtBg6wDQqaNEaaJKl6b2oiABMmHn6yLH8=w240-h480-rw"
        },
        {
            id: 8,
            name: "Azure",
            designation: "Cloud Computing Platform",
            image:
                "https://www.bizstream.com/wp-content/uploads/2022/06/azure-logo-white-circle-1-600x600.png"
        },
    ];


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


                <a className="font-sfbold mt-3 text-2xl md:text-4xl text-darkGray" >Saint-Gobain Research Provence</a>
                <a className="text-base font-sfregular text-lightGray" > Cavaillon, Provence-Alpes-Côte d'Azur, France</a>

                <div className="border-t border-gray-300 my-4 w-full flex flex-row justify-between " />

                <a className='md:text-lg text-base font-sfregular text-darkGray'>
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
                <div className='flex flex-row md:gap-28 gap-11 mb-10 font-sfregular text-darkGray'>

                    <div className='flex flex-col'>
                        <a>Timeline</a>
                        <a>August 2022 - September 2025</a>
                    </div>

                    <div className='flex flex-col'>
                        <a >Team</a>
                        <a>LIMS Competency Center</a>
                    </div>

                    <div className='flex flex-col'>
                        <a className='mb-2'>Disciplines</a>
                        <div className="flex flex-row items-center justify-center mb-10 w-full">
                            <AnimatedTooltip items={SGDisciplines} />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

