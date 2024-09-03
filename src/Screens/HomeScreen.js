import React, { useState, useEffect, useRef } from 'react';
import LandingPage from '../components/LandingPage';
import About from '../components/About';
import Sidebar from '../components/Sidebar';
import './screens.css';
import '../App.css';
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function HomeScreen() {
    AOS.init();
    return (
        <div className='h-full '>
            <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
            <LandingPage />
            <div data-aos="fade-up"
                data-aos-offset="300"
                data-aos-anchor-placement="center-center" className=" justify-center items-center text-center w-full space-x-4 mt-40">
                <h1
                    style={{ fontFamily: 'SFBOLD' }}
                    className='text-5xl font-bold leading-[1.2] bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent'
                >
                    Innovating With Code and Design
                </h1>

                <br></br>

                <h1 style={{ fontFamily: 'SFMEDIUM', color: '#a0a5ac' }} className='text-xl text-neutral-700 pb-28 border-b border-e2e5e9'>
                    Welcome to my portfolio ! Here, you'll see who I am,
                    <br></br>
                    my works and my creativity. Passionate about computer science and online business
                    <br></br>
                    <a className='underline-offset-'>i aim to leave  a personal mark in this world...</a> ✌️</h1>
            </div>
            <div className="flex">
                <div className='w-1/6 h-screen' data-aos="fade-right" data-aos-anchor-placement="center-center">
                    <Sidebar />
                </div>
                <div className="w-screen" data-aos="fade-left" data-aos-anchor-placement="center-center">
                    <About />
                </div>
            </div>
        </div>
    );

};