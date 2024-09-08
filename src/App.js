import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import React, { useEffect, useState } from 'react';
import LandingPage from './components/LandingPage';
import About from './components/About';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AboutScreen from './Screens/AboutScreen';
import ProjectScreen from './Screens/ProjectScreen';


function App() {
  const [isSticky, setIsSticky] = useState(false);
  const [sidebarTop, setSidebarTop] = useState(0);

  const updateSidebarPosition = () => {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) {
      const sidebarTopPosition = sidebar.getBoundingClientRect().top + window.scrollY;
      setSidebarTop(sidebarTopPosition);
    }
  };

  useEffect(() => {
    updateSidebarPosition();

    const handleScroll = () => {
      const offset = 10; // Offset de 10px pour rendre le passage plus doux
      if (window.scrollY > sidebarTop - offset) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', updateSidebarPosition);
    window.addEventListener('splineLoad', updateSidebarPosition);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateSidebarPosition);
      window.removeEventListener('splineLoad', updateSidebarPosition);
    };
  }, [sidebarTop]);

  return (
    <Router className=' flex bg-background'>
      <div className='h-screen'>
        <LandingPage />
      </div>
      <div className="flex border-t border-e2e5e9">
        <div className={`w-1/6 h-screen sidebar ${isSticky ? 'sticky-sidebar' : ''}`} >
          <Sidebar />
        </div>
        <Routes>
          <Route path="" className="h-screen" element={<HomeScreen />} data-aos="fade-left" />
          <Route path="/About" className="h-screen" element={<AboutScreen />} data-aos="fade-left" />
          <Route path="/Project" className="h-screen" element={<ProjectScreen />} data-aos="fade-left" />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
