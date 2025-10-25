import { Link, useLocation } from 'react-router-dom';
import "./components.css";
import LogoMobile from '@/assets/LogoMobile.png';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { cn } from "@/lib/utils";
import React, { useEffect, useState, useRef } from 'react';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "./ui/ToolTip"

import { useEasterEgg } from "@/context/EasterEggContext";

export default function Navbar({ scrollToRoutes }) {
    const [isOpen, setIsOpen] = useState(false);
    const navbarRef = useRef(null);
    const checkboxRef = useRef(null);

    const [copied, setCopied] = useState(false);
    const email = "contact@aymanehilmi.com";

    const handleCopy = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

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
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        // Remove event listener when the navbar is closed
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
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

    const location = useLocation();

    // links dynamiques

    const { links } = useEasterEgg();
    return (
        <div className="fixed top-0 left-0 w-full z-40">
            <nav className="md:flex items-center justify-around px-6 py-10 hidden bg-white/60 backdrop-blur-md">
                <div
                    className="flex items-center gap-6 text-darkGray font-sfregular"
                >
                    {links.map((link) => (
                        <div
                            key={link.name}
                            className="inline-flex h-8 items-center"
                        >
                            {(() => {
                                // Cas spécial : Email -> Tooltip
                                if (link.name === "Email") {
                                    return (
                                        <TooltipProvider delayDuration={0}>
                                            <Tooltip>
                                                <TooltipTrigger asChild>
                                                    <a
                                                        href={link.path}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        data-cursor-icon="mail"
                                                        className={cn(
                                                            "relative transition-colors duration-300 ease-out hover:text-black"
                                                        )}
                                                    >
                                                        {link.name}
                                                        <span
                                                            className={cn(
                                                                "absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-blue-500 via-orange-400 to-red-500 rounded-full transition-all duration-300 ease-out origin-left",
                                                                "w-0 scale-x-0 group-hover:w-full group-hover:scale-x-100"
                                                            )}
                                                        />
                                                    </a>
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <div className="flex items-center px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm w-fit space-x-2">
                                                        <span className="text-gray-600 font-medium">
                                                            {email}
                                                        </span>
                                                        <button
                                                            onClick={handleCopy}
                                                            className="px-3 py-1 text-xs font-semibold text-gray-600 bg-gray-100 rounded-full hover:bg-gray-200 transition-all"
                                                            data-cursor-icon="copy"
                                                        >
                                                            {copied ? "COPIED" : "COPY"}
                                                        </button>
                                                    </div>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    );
                                }

                                // Liens externes standards
                                if (link.external) {
                                    return (
                                        <a
                                            href={link.path}
                                            target="_blank"
                                            rel="noreferrer"
                                            className={cn(
                                                "relative transition-colors duration-300 ease-out hover:text-black",
                                                location.pathname === link.path && "text-black"
                                            )}
                                            data-cursor-icon="arrow"
                                        >
                                            {link.name}
                                            <span
                                                className={cn(
                                                    "absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-blue-500 via-orange-400 to-red-500 rounded-full transition-all duration-300 ease-out origin-left",
                                                    location.pathname === link.path
                                                        ? "w-full scale-x-100"
                                                        : "w-0 scale-x-0"
                                                )}
                                            />
                                        </a>
                                    );
                                }

                                // Liens internes
                                return (
                                    <Link
                                        to={link.path}
                                        className={cn(
                                            "relative transition-colors duration-300 ease-out hover:text-black",
                                            location.pathname === link.path && "text-black"
                                        )}
                                    >
                                        {link.name}
                                        <span
                                            className={cn(
                                                "absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-blue-500 via-orange-400 to-red-500 rounded-full transition-all duration-300 ease-out origin-left",
                                                location.pathname === link.path
                                                    ? "w-full scale-x-100"
                                                    : "w-0 scale-x-0"
                                            )}
                                        />
                                    </Link>
                                );
                            })()}
                        </div>
                    ))}
                </div>
            </nav>
            <div
                ref={navbarRef}
                className={cn(
                    "fixed -top-1 h-20 bg-transparent w-full z-50 flex md:hidden flex-row justify-between items-center px-6"
                )}
            >
                <div
                    className={cn(
                        `absolute inset-0 transition-all duration-500 ease-in-out ${!isOpen
                            ? "bg-background/75 blur-sm backdrop-blur-sm opacity-100"
                            : "opacity-0 pointer-events-none"
                        }`
                    )}
                    style={{ zIndex: 1 }}
                ></div>
                <a href="/" className="w-20 z-50">
                    <img src={LogoMobile} className="w-max" alt="Logo" />
                </a>

                <div
                    className={cn(`font-sfbold text-darkGray fixed top-0 left-0 w-full h-2/5 bg-baground/75 bg-opacity-10 
            backdrop-blur-sm z-40 flex flex-col items-center justify-center transition-transform 
            duration-500 ${isOpen ? "translate-y-0" : "-translate-y-full"}`)}
                >
                    <Link
                        to={""}
                        className="text-xl py-2"
                        onClick={() => {
                            closeNavbar();

                        }}
                    >
                        Home
                    </Link>
                    <Link
                        to={"/About"}
                        className="text-xl py-2"
                        onClick={() => {
                            closeNavbar();
                        }}
                    >
                        About
                    </Link>
                    <Link
                        to={"/Resume"}
                        className="text-xl py-2"
                        onClick={() => {
                            closeNavbar();
                        }}
                    >
                        Resume
                    </Link>
                    <Link
                        to={"/SaintGobain"}
                        className="text-xl py-2"
                        onClick={() => {
                            closeNavbar();
                        }}
                    >
                        Saint-Gobain
                    </Link>
                    <a
                        href="mailto:contact@aymanehilmi.com"
                        className="text-xl py-2"
                        onClick={() => {
                            closeNavbar();
                        }}
                    >
                        Email
                    </a>
                </div>

                <label id="hamburger" className="z-50">
                    <input ref={checkboxRef} type="checkbox" onChange={toggleNavbar} />
                    <svg viewBox="0 0 32 32">
                        <path
                            className="line line-top-bottom"
                            d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                        ></path>
                        <path className="line" d="M7 16 27 16"></path>
                    </svg>
                </label>
            </div>
        </div>
    );
}

{/* <div className='flex flex-col'>
                        <h1 className='text-xs pb-2 text-lightGray'>MOBILE APPLICATION</h1>
                        <div><Link to="/SaintGobain" className={cn('text-sm transition-opacity duration-300 hover:opacity-30 text-darkGray')} onClick={scrollToRoutes}>Saint-Gobain</Link></div>
                        <div><Link to="/Cesiveroo" className={cn('text-sm transition-opacity duration-300 hover:opacity-30 text-darkGray')} onClick={scrollToRoutes}>Cesiveroo</Link></div>
                    </div>
                    <div className='flex flex-col mt-4'>
                        <h1 className='text-xs pb-2 text-lightGray'>WEB DEVELOPMENT</h1>
                        <div><Link to="Comingsoon" className={cn('text-sm transition-opacity duration-300 hover:opacity-30 text-darkGray')} onClick={scrollToRoutes}>Aymane's Portfolio</Link></div>
                        <div><Link to="/Comingsoon" className={cn('text-sm transition-opacity duration-300 hover:opacity-30 text-darkGray')} onClick={scrollToRoutes}>Blog</Link></div>
                    </div> */}
