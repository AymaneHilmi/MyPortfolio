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
        <div className="grid grid-rows-3 h-full border-r border-e2e5e9 " data-aos="fade-right">
            <div className="row-span-1 p-8 border-b border-e2e5e9 flex flex-col justify-around text-xl" style={{ fontFamily: 'SFBOLD', color: '#3b3d41' }}>
                <Link to="" className='w-20'>
                    <img src={Logo} className="bg-[#DBDBDB] rounded-[10px] w-max" />
                </Link>
                <Link to="/About">About Me</Link>
                <Link to="/Project" >Activities</Link>
                <p>CV</p>
            </div>
            <div className="row-span-1 justify-around border-b border-e2e5e9 p-8">
                <div className='flex flex-col'>
                    <a style={{ fontFamily: 'SFREGULAR', color: '#a9a5ac' }} className='text-xs pb-2'>MOBILE APPLICATION</a>
                    <Link href="#" style={{ fontFamily: 'SFREGULAR', color: '#3b3d41' }} className='text-sm '>Cesiveroo</Link>
                    <Link to="/SaintGobain" style={{ fontFamily: 'SFREGULAR', color: '#3b3d41' }} className='text-sm '>Saint-Gobain</Link>
                </div>
                <div className='flex flex-col mt-4'>
                    <a style={{ fontFamily: 'SFREGULAR', color: '#a9a5ac' }} className='text-xs pb-2'>WEB DEVELOPMENT</a>
                    <a href="#" style={{ fontFamily: 'SFREGULAR', color: '#3b3d41' }} className='text-sm'>My Portfolio</a>
                    <a href="#" style={{ fontFamily: 'SFREGULAR', color: '#3b3d41' }} className='text-sm'>Blog</a>
                </div>
            </div>
            <div className="row-span-1 flex flex-col border-b border-e2e5e9 p-8">
                <p style={{ fontFamily: 'SFREGULAR', color: '#a9a5ac' }} className='text-sm pb-2'>Contact</p>
                <p style={{ fontFamily: 'SFREGULAR', color: '#3b3d41' }} className='text-sm'>Mail</p>
                <p style={{ fontFamily: 'SFREGULAR', color: '#3b3d41' }} className='text-sm'>Linkedin</p>
                <p style={{ fontFamily: 'SFREGULAR', color: '#3b3d41' }} className='text-sm'>Github</p>
            </div>
        </div>





    );
}