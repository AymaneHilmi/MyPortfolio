import './App.css';
import AOS from 'aos'
import { BrowserRouter as Router, Route, Routes, Link, useNavigate, useLocation } from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import Navbar from './components/Navbar';
import React, { useEffect, useState, useRef } from 'react';
import AboutScreen from './Screens/AboutScreen';
import ProjectScreen from './Screens/ProjectScreen';
import SaintGobainScreen from './Screens/SaintGobainScreen';
import CvScreen from './Screens/JourneyScreen';
import Confetti from 'react-confetti';
import CesiverooScreen from './Screens/CesiverooScreen';
import { cn } from "./lib/utils";
import JourneyScreen from "./Screens/JourneyScreen";
import { useEasterEgg } from './context/EasterEggContext';
import Footer from './components/footer';
import { SmoothCursor } from './components/ui/smooth-cursor';
import EasterEggsScreen from './Screens/EasterEggsScreen';






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

  // useEffect(() => {
  //   // ✅ Pour afficher le total dans le compteur
  //   fetch("https://visit-counter.aymanehilmi1.workers.dev/api/visits")
  //     .then(res => res.json())
  //     .then(data => setVisitsTotal(data.total))
  //     .catch(() => setVisitsTotal(null));
  // }, []);


  // pop up pour les projets
  const location = useLocation();
  const state = location.state && location.state.backgroundLocation ? location.state : null;

  return (

    <div className="flex flex-col bg-background cursor-none w-full">
      <SmoothCursor />
      <Navbar scrollToRoutes={scrollToRoutes} />
      <Routes >
        <Route path="/" element={<HomeScreen visitsTotal={visitsTotal} scrollToRoutes={scrollToRoutes} />} />
        <Route path="/About" className="h-screen" element={<AboutScreen scrollToRoutes={scrollToRoutes} />} />
        <Route path="/ComingSoon" className="h-screen" element={<ProjectScreen />} scrollToRoutes={scrollToRoutes} />
        <Route path="/SaintGobain" className="h-screen" element={<SaintGobainScreen scrollToRoutes={scrollToRoutes} />} />
        <Route path="/Journey" className="h-screen" element={<JourneyScreen />} scrollToRoutes={scrollToRoutes} />
        {/* <Route path="/Blog" className="h-screen" element={<BlogScreen />} /> */}
        <Route path="/Cesiveroo" className="h-screen" element={<CesiverooScreen />} scrollToRoutes={scrollToRoutes} />
        <Route path="/easter-eggs" className="h-screen" element={<EasterEggsScreen />} scrollToRoutes={scrollToRoutes} />
      </Routes>
      <Footer />

      {/* Confetti Easter Egg */}
      <Confetti
        numberOfPieces={confettiActive ? 200 : 0}
        width={window.innerWidth}
        height={window.innerHeight}
        style={{ position: 'fixed', top: 0, left: 0, zIndex: 9999, pointerEvents: 'none' }}
      />
    </div>
  );
}

export default App;
