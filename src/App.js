import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Logo from './assets/Logo.svg'
import LogoMobile from './assets/LogoMobile.png'
import React, { useEffect, useState, img } from 'react';
import LandingPage from './components/LandingPage';
import About from './components/About';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AboutScreen from './Screens/AboutScreen';
import ProjectScreen from './Screens/ProjectScreen';
import SaintGobainScreen from './Screens/SaintGobainScreen';


function App() {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the navbar
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router className='flex bg-background'>
      <div className='h-screen'>
        <LandingPage />
      </div>

      {/* Mobile Navbar with Hamburger */}
      <div className='fixed top-0 h-20 bg-transparent w-full z-50 flex md:hidden flex-row justify-between items-center px-6'>
        <a href="/" className='w-20'>
          <img src={LogoMobile} className="w-max" alt="Logo" />
        </a>
        {/* Hamburger Icon */}
        <div id="hamburger" className='cursor-pointer' onClick={toggleNavbar}>
          <svg viewBox="0 0 32 32" width="32" height="32">
            <path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
            <path className="line" d="M7 16 27 16"></path>
          </svg>
        </div>
      </div>


      {/* Sliding Navbar */}
      <div className={`fixed top-0 left-0 w-full h-1/3 bg-black bg-opacity-10 backdrop-blur-sm z-40 flex flex-col items-center justify-center transition-transform duration-300 ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <Link to={"/About"} className='text-xl text-white py-2' onClick={toggleNavbar}>About</Link>
        <Link to={"/SaintGobain"} className='text-xl text-white py-2' onClick={toggleNavbar}>Saint-Gobain</Link>
        <Link to={"ComingSoon"} className='text-xl text-white py-2' onClick={toggleNavbar}>Contact</Link>
        <Link to={""} className='text-xl text-white py-2' onClick={toggleNavbar}>Services</Link>
      </div>

      <div className="flex border-t border-e2e5e9">
        <div className='w-1/6 h-screen sidebar hidden md:flex'>
          <Sidebar />
        </div>
        <Routes>
          <Route path="/" className="h-screen" element={<HomeScreen />} data-aos="fade-left" />
          <Route path="/About" className="h-screen" element={<AboutScreen />} data-aos="fade-left" />
          <Route path="/ComingSoon" className="h-screen" element={<ProjectScreen />} data-aos="fade-left" />
          <Route path="/SaintGobain" className="h-screen" element={<SaintGobainScreen />} data-aos="fade-left" />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
