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




function App() {
  console.log(`Good start, You found the easiest easter eag but I think you can do better. Let me know in my LinkedIn how much you found by clicking here -> https://www.linkedin.com/in/aymanehilmi/ 🤣`)
  const [confettiActive, setConfettiActive] = useState(false);
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


  // Scrool into view
  const scrollToRoutes = () => {
    if (routesRef.current) {
      routesRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // --------------------------------
  //    Easter Egg #1 : Confettis              
  // --------------------------------

  // if the user types the correct word, the confetti will be activated

  useEffect(() => {
    let typedText = "";
    const correctText = "aymane";

    const handleKeydown = (event) => {
      typedText += event.key.toLowerCase();

      if (typedText === correctText) {
        setConfettiActive(true);
        setTimeout(() => {
          setConfettiActive(false);
        }, 5000);
        typedText = "";
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



  // --------------------------------------------
  //    Number of Visitors (Cloudflare Worker) 
  // --------------------------------------------

  const [visitsTotal, setVisitsTotal] = useState(null);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    // ✅ Pour afficher le total dans le compteur
    fetch("https://visit-counter.aymanehilmi1.workers.dev/api/visits")
      .then(res => res.json())
      .then(data => setVisitsTotal(data.total))
      .catch(() => setVisitsTotal(null));
  }, []);

  useEffect(() => {
    // ✅ Pour les données du graphe
    fetch("https://visit-counter.aymanehilmi1.workers.dev/api/stats")
      .then(res => res.json())
      .then(data => {
        const formatted = Object.entries(data).map(([date, visits]) => ({
          date,
          visits,
        }));
        setChartData(formatted);
      })
      .catch(() => setChartData([]));
  }, []);
  return (
    <Router className="flex bg-background">
      <LandingPage />

      <div ref={routesRef} className="flex-grow flex border-t border-gray-300 w-full">
        <Sidebar scrollToRoutes={scrollToRoutes} />
        <Routes>
          <Route path="/" element={<HomeScreen visitsTotal={visitsTotal} chartData={chartData} />} />
          <Route path="/About" className="h-screen" element={<AboutScreen />} />
          <Route path="/ComingSoon" className="h-screen" element={<ProjectScreen />} />
          <Route path="/SaintGobain" className="h-screen" element={<SaintGobainScreen />} />
          <Route path="/Journey" className="h-screen" element={<JourneyScreen />} />
          {/* <Route path="/Blog" className="h-screen" element={<BlogScreen />} /> */}
          <Route path="/Cesiveroo" className="h-screen" element={<CesiverooScreen />} />
        </Routes>
      </div>
      {/* Confetti Easter Egg */}
      <Confetti numberOfPieces={confettiActive ? 200 : 0} width={window.innerWidth} height={window.innerHeight}
        style={{ position: "fixed", top: 0, left: 0, zIndex: 9999, pointerEvents: "none" }}
      />
    </Router>
  );
}

export default App;
