import './App.css';
import AOS from 'aos'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import Sidebar from './components/Sidebar';
import React, { useEffect, useState, useRef } from 'react';
import AboutScreen from './Screens/AboutScreen';
import ProjectScreen from './Screens/ProjectScreen';
import SaintGobainScreen from './Screens/SaintGobainScreen';
import CvScreen from './Screens/JourneyScreen';
import Confetti from 'react-confetti';
import CesiverooScreen from './Screens/CesiverooScreen';
import { cn } from "./lib/utils";
import JourneyScreen from './Screens/JourneyScreen';
import SplashCursor from './components/ui/SplashCursor';
import LandingPage from './components/LandingPage';
import { useEasterEgg } from './context/EasterEggContext';





function App() {
  console.log(`Good start, You found the easiest easter eag but I think you can do better. Let me know in my LinkedIn how much you found by clicking here -> https://www.linkedin.com/in/aymanehilmi/ 🤣`)
  const [typedKeys, setTypedKeys] = useState('');
  const routesRef = useRef(null);

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 400,
      easing: 'ease-out',
      once: true,
      mirror: false,
    });
  }, []);


  // Scrool into view when changing page
  const scrollToRoutes = () => {
    if (routesRef.current) {
      routesRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // --------------------------------
  //    Easter Egg #1 : Confettis              
  // --------------------------------

  const { confettiActive } = useEasterEgg();



  // --------------------------------------------
  //    Number of Visitors (Cloudflare Worker) 
  // --------------------------------------------

  const [visitsTotal, setVisitsTotal] = useState(null);

  useEffect(() => {
    // ✅ Pour afficher le total dans le compteur
    fetch("https://visit-counter.aymanehilmi1.workers.dev/api/visits")
      .then(res => res.json())
      .then(data => setVisitsTotal(data.total))
      .catch(() => setVisitsTotal(null));
  }, []);
  return (
    <Router className="flex bg-background">
      <LandingPage />

      <div ref={routesRef} className="flex-grow flex border-t border-gray-300 w-full">
        <Sidebar scrollToRoutes={scrollToRoutes} />
        <Routes>
          <Route path="/" element={<HomeScreen visitsTotal={visitsTotal} />} />
          <Route path="/About" className="h-screen" element={<AboutScreen />} />
          <Route path="/ComingSoon" className="h-screen" element={<ProjectScreen />} />
          <Route path="/SaintGobain" className="h-screen" element={<SaintGobainScreen />} />
          <Route path="/Journey" className="h-screen" element={<JourneyScreen />} />
          {/* <Route path="/Blog" className="h-screen" element={<BlogScreen />} /> */}
          <Route path="/Cesiveroo" className="h-screen" element={<CesiverooScreen />} />
        </Routes>
      </div>
      {/* Confetti Easter Egg */}
      <Confetti
        numberOfPieces={confettiActive ? 200 : 0}
        width={window.innerWidth}
        height={window.innerHeight}
        style={{ position: 'fixed', top: 0, left: 0, zIndex: 9999, pointerEvents: 'none' }}
      />
    </Router>
  );
}

export default App;
