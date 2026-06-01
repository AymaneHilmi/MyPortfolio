import { Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/sections/Hero";
import Services from "./components/sections/Services";
import Showreel from "./components/sections/Showreel";
import Equipment from "./components/sections/Equipment";
import Contact from "./components/sections/Contact";
import { useSmoothScroll } from "./hooks/useSmoothScroll";
import { usePointerParallax } from "./hooks/usePointer";

// La scène 3D (three.js) est chargée en différé pour garder un premier
// rendu instantané — le contenu s'affiche, le drone arrive juste après.
const DroneScene = lazy(() => import("./components/three/DroneScene"));

export default function App() {
  useSmoothScroll();
  usePointerParallax();

  return (
    <>
      {/* Couche 3D fixe en arrière-plan de tout le site */}
      <Suspense fallback={<div className="fixed inset-0 -z-10 bg-ink" />}>
        <DroneScene />
      </Suspense>

      <Navbar />

      <main className="relative">
        {/* Hero transparent : le drone est pleinement visible */}
        <Hero />

        {/* Contenu : fond sombre semi-transparent → le drone reste perçu en
            profondeur derrière les sections (parallaxe ambiante au scroll). */}
        <div className="relative bg-ink/85">
          <Services />
          <Showreel />
          <Equipment />
          <Contact />
        </div>
      </main>
    </>
  );
}
