import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Logo from './assets/Logo.svg'
import LogoMobile from './assets/LogoMobile.png'
import React, { useEffect, useState, img, useRef } from 'react';
import LandingPage from './components/LandingPage';
import About from './components/About';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AboutScreen from './Screens/AboutScreen';
import ProjectScreen from './Screens/ProjectScreen';
import SaintGobainScreen from './Screens/SaintGobainScreen';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import CvScreen from './Screens/CvScreen';


function App() {
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef(null); // Reference to the navbar
  const checkboxRef = useRef(null); // Reference to the checkbox (hamburger button)
  const routesRef = useRef(null); // Reference to the Routes section

  // Toggle navbar
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  // Scroll to Routes section when a link is clicked
  const scrollToRoutes = () => {
    if (routesRef.current) {
      // Scroll to the Routes section
      routesRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Close navbar without scrolling (when clicking outside)
  const closeNavbar = () => {
    setIsOpen(false);
    if (checkboxRef.current) {
      checkboxRef.current.checked = false; // Uncheck the burger
    }
  };

  // Close navbar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        // If the clicked area is outside the navbar, close it without scrolling
        closeNavbar();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <Router className="flex bg-background">
      <div className="min-h-screen">
        <LandingPage />
      </div>

      {/* Mobile Navbar with Hamburger */}
      <div ref={navbarRef} className="fixed top-0 h-20 bg-transparent w-full z-50 flex md:hidden flex-row justify-between items-center px-6">
        <a href="/" className="w-20 z-50">
          <img src={LogoMobile} className="w-max" alt="Logo" />
        </a>

        <div
          className={`fixed top-0 left-0 w-full h-2/5 bg-gray-600 bg-opacity-10 backdrop-blur-sm z-40 flex flex-col items-center justify-center transition-transform duration-500 ${isOpen ? 'translate-y-0' : '-translate-y-full'
            }`}
        >
          <Link to={""} className="text-xl py-2" style={{ fontFamily: 'SFBOLD', color: '#3b3d41' }} onClick={() => { closeNavbar(); scrollToRoutes(); }}>
            Home
          </Link>
          <Link to={"/About"} className="text-xl py-2" style={{ fontFamily: 'SFBOLD', color: '#3b3d41' }} onClick={() => { closeNavbar(); scrollToRoutes(); }}>
            About
          </Link>
          <Link to={"/CV"} className="text-xl py-2" style={{ fontFamily: 'SFBOLD', color: '#3b3d41' }} onClick={() => { closeNavbar(); scrollToRoutes(); }}>
            Resume
          </Link>
          <Link to={"/SaintGobain"} className="text-xl py-2" style={{ fontFamily: 'SFBOLD', color: '#3b3d41' }} onClick={() => { closeNavbar(); scrollToRoutes(); }}>
            Saint-Gobain
          </Link>
          <a href="https://www.linkedin.com/in/aymanehilmi/" className="text-xl py-2" style={{ fontFamily: 'SFBOLD', color: '#3b3d41' }} onClick={() => { closeNavbar(); scrollToRoutes(); }}>
            Linkedin
          </a>
          <a href="mailto:aymanehilmi1@gmail.com" className="text-xl py-2" style={{ fontFamily: 'SFBOLD', color: '#3b3d41' }} onClick={() => { closeNavbar(); scrollToRoutes(); }}>
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

      {/* Routes Section */}
      <div ref={routesRef} className="flex-grow flex border-t border-e2e5e9">
        <Sidebar />
        <Routes>
          <Route path="/" className="h-screen" element={<HomeScreen />} data-aos="fade-left" />
          <Route path="/About" className="h-screen" element={<AboutScreen />} data-aos="fade-left" />
          <Route path="/ComingSoon" className="h-screen" element={<ProjectScreen />} data-aos="fade-left" />
          <Route path="/SaintGobain" className="h-screen" element={<SaintGobainScreen />} data-aos="fade-left" />
          <Route path="/CV" className="h-screen" element={<CvScreen />} data-aos="fade-left" />
        </Routes>
      </div>
    </Router>
  );
};


export default App;
