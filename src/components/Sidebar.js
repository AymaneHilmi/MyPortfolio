import { Link } from 'react-router-dom';
import './components.css';
import Logo from '../assets/Logo.png'
import LogoMobile from '../assets/LogoMobile.png';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { cn } from "../lib/utils";
import React, { useEffect, useState, useRef } from 'react';



export default function Sidebar({ scrollToRoutes }) {
    const [isOpen, setIsOpen] = useState(false);
    const navbarRef = useRef(null);
    const checkboxRef = useRef(null);

    // --------------------------------
    //             Navbar               
    // --------------------------------

    // if the user clicks outside call the closeNavbar function 
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navbarRef.current && !navbarRef.current.contains(event.target)) {
                closeNavbar();
            }
        };

        // Add event listener when the navbar is open
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        // Remove event listener when the navbar is closed
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    // CloseNavbar function
    const closeNavbar = () => {
        setIsOpen(false);
        if (checkboxRef.current) {
            checkboxRef.current.checked = false;
        }
    };

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div>


            <div className={cn("md:grid sticky top-0 grid-rows-[0.2fr_1fr_1fr] border-r border-gray-300 h-screen hidden min-w-52 ")} data-aos="fade-right">
                <div className={cn("font-sfbold row-span-1 p-8 border-b border-gray-300 flex flex-col gap-1 text-xl")} style={{ color: '#"3b3d41"' }}>
                    <Link to="" className='w-24'>
                        <img src={Logo} alt='Aymane Logo' className=" rounded-[10px]" />
                    </Link>
                    <div className='mt-4'><Link to="/About" onClick={scrollToRoutes} className={cn(' z-10 transition-opacity duration-300 hover:opacity-30')}>About Me</Link></div>
                    <div><Link to="/Resume" className={cn("transition-opacity duration-300 hover:opacity-30")} onClick={scrollToRoutes}>Resume</Link></div>
                </div>
                <div className={cn("font-sfregular row-span-1 justify-around border-b border-gray-300 p-8")}>
                    <div className='flex flex-col'>
                        <h1 className='text-xs pb-2 text-lightGray'>MOBILE APPLICATION</h1>
                        <div><Link to="/SaintGobain" className={cn('text-sm transition-opacity duration-300 hover:opacity-30 text-darkGray')} onClick={scrollToRoutes}>Saint-Gobain</Link></div>
                        <div><Link to="/Cesiveroo" className={cn('text-sm transition-opacity duration-300 hover:opacity-30 text-darkGray')} onClick={scrollToRoutes}>Cesiveroo</Link></div>
                    </div>
                    <div className='flex flex-col mt-4'>
                        <h1 className='text-xs pb-2 text-lightGray'>WEB DEVELOPMENT</h1>
                        <div><Link to="Comingsoon" className={cn('text-sm transition-opacity duration-300 hover:opacity-30 text-darkGray')} onClick={scrollToRoutes}>Aymane's Portfolio</Link></div>
                        <div><Link to="/Comingsoon" className={cn('text-sm transition-opacity duration-300 hover:opacity-30 text-darkGray')} onClick={scrollToRoutes}>Blog</Link></div>
                    </div>

                </div>
                <div className="font-sfregular row-span-1 flex flex-col border-b border-gray-300 p-8">
                    <h1 className='text-sm pb-2'>Personal</h1>
                    <div><Link to="/Journey" className='text-sm transition-opacity duration-300 hover:opacity-30 text-darkGray'>Journey</Link ></div>
                    <div><Link to="/Blog" className='text-sm transition-opacity duration-300 hover:opacity-30 text-darkGray'>Blog</Link ></div>
                    <h1 className='text-sm pb-2 mt-4 text-lightGray'>Contact</h1>
                    <div><a href="mailto:contact@aymanehilmi.com" target="_blank" rel="noreferrer" className={cn('text-sm transition-opacity duration-300 hover:opacity-30 text-darkGray')}>Mail</a></div>
                    <div><a href="https://www.linkedin.com/in/aymanehilmi/" target="_blank" rel="noreferrer" className={cn('text-sm transition-opacity duration-300 hover:opacity-30 text-darkGray')}>Linkedin</a></div>
                    <div><a href="https://github.com/AymaneHilmi" target="_blank" rel="noreferrer" className={cn('text-sm transition-opacity duration-300 hover:opacity-30 text-darkGray')}>Github</a></div>
                    {/* <div><Link to="/Comingsoon" className={cn('text-sm transition-opacity duration-300 hover:opacity-30 text-darkGray')} onClick={scrollToRoutes}>Download CV </Link></div> */}
                </div>
            </div>

            <div ref={navbarRef} className={cn("fixed -top-1 h-20 bg-transparent w-full z-50 flex md:hidden flex-row justify-between items-center px-6")}>
                <div
                    className={cn(`absolute inset-0 transition-all duration-500 ease-in-out ${!isOpen ? 'bg-background/75 blur-sm backdrop-blur-sm opacity-100' : 'opacity-0 pointer-events-none'}`)}
                    style={{ zIndex: 1 }}
                ></div>
                <a href="/" className="w-20 z-50">
                    <img src={LogoMobile} className="w-max" alt="Logo" />
                </a>

                <div className={cn(`font-sfbold text-darkGray fixed top-0 left-0 w-full h-2/5 bg-baground/75 bg-opacity-10 
            backdrop-blur-sm z-40 flex flex-col items-center justify-center transition-transform 
            duration-500 ${isOpen ? 'translate-y-0' : '-translate-y-full'}`)}>
                    <Link to={""} className="text-xl py-2" onClick={() => { closeNavbar(); scrollToRoutes(); }}>
                        Home
                    </Link>
                    <Link to={"/About"} className="text-xl py-2" onClick={() => { closeNavbar(); scrollToRoutes(); }}>
                        About
                    </Link>
                    <Link to={"/Resume"} className="text-xl py-2" onClick={() => { closeNavbar(); scrollToRoutes(); }}>
                        Resume
                    </Link>
                    <Link to={"/SaintGobain"} className="text-xl py-2" onClick={() => { closeNavbar(); scrollToRoutes(); }}>
                        Saint-Gobain
                    </Link>
                    <a href="mailto:contact@aymanehilmi.com" className="text-xl py-2" onClick={() => { closeNavbar(); scrollToRoutes(); }}>
                        Email
                    </a>
                </div>

                <label id="hamburger" className="z-50">
                    <input ref={checkboxRef} type="checkbox" onChange={toggleNavbar} />
                    <svg viewBox="0 0 32 32">
                        <path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
                        <path className="line" d="M7 16 27 16"></path>
                    </svg>
                </label>
            </div>
        </div>
    );
}