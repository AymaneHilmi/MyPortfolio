import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import Sidebar from './components/Sidebar';
import Loader from './components/Loader';
import LogoMobile from './assets/LogoMobile.png';
import React, { useEffect, useState, useRef } from 'react';
import LandingPage from './components/LandingPage';
import AboutScreen from './Screens/AboutScreen';
import ProjectScreen from './Screens/ProjectScreen';
import SaintGobainScreen from './Screens/SaintGobainScreen';
import CvScreen from './Screens/CvScreen';
import Confetti from 'react-confetti';

function App() {
  console.log(`Good start, but I think you can do better. You found the easiest one... Let me know in my LinkedIn post if you find it 🤣`); // Add this line

  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [confettiActive, setConfettiActive] = useState(false);
  const [typedKeys, setTypedKeys] = useState('');
  const navbarRef = useRef(null);
  const checkboxRef = useRef(null);
  const routesRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const scrollToRoutes = () => {
    if (routesRef.current) {
      routesRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const closeNavbar = () => {
    setIsOpen(false);
    if (checkboxRef.current) {
      checkboxRef.current.checked = false;
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
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

  useEffect(() => {
    let typedText = "";
    const correctText = "aymane";

    const handleKeydown = (event) => {
      typedText += event.key.toLowerCase();

      if (typedText === correctText) {
        setConfettiActive(true);
        setTimeout(() => {
          setConfettiActive(false);
        }, 30000);
      }


      if (!correctText.startsWith(typedText)) {
        typedText = event.key.toLowerCase();
      }
    };

    window.addEventListener("keydown", handleKeydown);
    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  return (
    <Router className="flex bg-background">
      {loading && <Loader />}

      <div className="min-h-screen">
        {confettiActive && (
          <div className='fixed z-50'>
            <Confetti />
          </div>
        )}
        <LandingPage />
      </div>

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
          <Link to={"/Resume"} className="text-xl py-2" style={{ fontFamily: 'SFBOLD', color: '#3b3d41' }} onClick={() => { closeNavbar(); scrollToRoutes(); }}>
            Resume
          </Link>
          <Link to={"/SaintGobain"} className="text-xl py-2" style={{ fontFamily: 'SFBOLD', color: '#3b3d41' }} onClick={() => { closeNavbar(); scrollToRoutes(); }}>
            Saint-Gobain
          </Link>
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
      <div ref={routesRef} className="flex-grow flex border-t border-gray-300">
        <Sidebar scrollToRoutes={scrollToRoutes} />
        <Routes>
          <Route path="/" className="h-screen" element={<HomeScreen scrollToRoutes={scrollToRoutes} />} data-aos="fade-left" />
          <Route path="/About" className="h-screen" element={<AboutScreen />} data-aos="fade-left" />
          <Route path="/ComingSoon" className="h-screen" element={<ProjectScreen />} data-aos="fade-left" />
          <Route path="/SaintGobain" className="h-screen" element={<SaintGobainScreen />} data-aos="fade-left" />
          <Route path="/Resume" className="h-screen" element={<CvScreen />} data-aos="fade-left" />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
