import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './components.css';
import { BiFontFamily } from 'react-icons/bi';
import Logo from '../assets/Logo.svg'
import AOS from 'aos'
import 'aos/dist/aos.css'
import ProjectScreen from '../Screens/ProjectScreen';



export default function Sidebar() {
    AOS.init();
    return (
        <div className="md:grid sticky top-0 grid-rows-3 border-r border-e2e5e9 h-screen hidden min-w-52 " data-aos="fade-right">
            <div className="row-span-1 p-8 border-b border-e2e5e9 flex flex-col justify-around text-xl" style={{ fontFamily: 'SFBOLD', color: '#3b3d41' }}>
                <Link to="" className='w-24'>
                    <img src={Logo} className="bg-[#DBDBDB] rounded-[10px] w-max" />
                </Link>
                <Link to="/About">About Me</Link>
                <Link to="/About">Resume</Link>
                <Link to="/CV">CV</Link>
            </div>
            <div className="row-span-1 justify-around border-b border-e2e5e9 p-8">
                <div className='flex flex-col'>
                    <a style={{ fontFamily: 'SFREGULAR', color: '#a9a5ac' }} className='text-xs pb-2'>MOBILE APPLICATION</a>
                    <Link to="/SaintGobain" style={{ fontFamily: 'SFREGULAR', color: '#3b3d41' }} className='text-sm '>Saint-Gobain</Link>
                    <Link to="/Comingsoon" style={{ fontFamily: 'SFREGULAR', color: '#3b3d41' }} className='text-sm '>Cesiveroo</Link>
                </div>
                <div className='flex flex-col mt-4'>
                    <a style={{ fontFamily: 'SFREGULAR', color: '#a9a5ac' }} className='text-xs pb-2'>WEB DEVELOPMENT</a>
                    <Link to="Comingsoon" style={{ fontFamily: 'SFREGULAR', color: '#3b3d41' }} className='text-sm'>Aymane's Portfolio</Link>
                    <Link to="/Comingsoon" style={{ fontFamily: 'SFREGULAR', color: '#3b3d41' }} className='text-sm'>Blog</Link>
                </div>
            </div>
            <div className="row-span-1 flex flex-col border-b border-e2e5e9 p-8">
                <p style={{ fontFamily: 'SFREGULAR', color: '#a9a5ac' }} className='text-sm pb-2'>Contact</p>
                <a href="mailto:aymanehilmi1@gmail.com" target="_blank" style={{ fontFamily: 'SFREGULAR', color: '#3b3d41' }} className='text-sm'>Mail</a>
                <a href="https://www.linkedin.com/in/aymanehilmi/" target="_blank" style={{ fontFamily: 'SFREGULAR', color: '#3b3d41' }} className='text-sm'>Linkedin</a>
                <a href="https://github.com/AymaneHilmi" target="_blank" style={{ fontFamily: 'SFREGULAR', color: '#3b3d41' }} className='text-sm'>Github</a>
            </div>
        </div>





    );
}