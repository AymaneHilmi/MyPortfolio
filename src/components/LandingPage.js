import React, { useEffect, useState, useRef, useCallback } from 'react';
import Spline from '@splinetool/react-spline';
import './components.css';
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function LandingPage() {
  const [shouldRenderSpline, setShouldRenderSpline] = useState(false);
  const containerRef = useRef(null);
  const splineRef = useRef(null); 
  

  const checkVisibility = useCallback(() => {
    if (document.hidden || !containerRef.current) {
      setShouldRenderSpline(false);
      return;
    }

    const rect = containerRef.current.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
    setShouldRenderSpline(isVisible);
  }, []);

  useEffect(() => {
    checkVisibility(); 

    window.addEventListener('scroll', checkVisibility, { passive: true });
    window.addEventListener('resize', checkVisibility);
    document.addEventListener('visibilitychange', checkVisibility);

    return () => {
      window.removeEventListener('scroll', checkVisibility);
      window.removeEventListener('resize', checkVisibility);
      document.removeEventListener('visibilitychange', checkVisibility);
    };
  }, [checkVisibility]);

  return (
    <div ref={containerRef} className="h-screen w-full overflow-hidden">
      {shouldRenderSpline && (
        <Spline
          scene="https://prod.spline.design/3OnoqTOGmJs7Vpxx/scene.splinecode"
          onLoad={(splineApp) => {
            splineRef.current = splineApp;

            // Optionnel : ajuster la scène ici
            // splineApp.setZoom(1); // si tu veux forcer un zoom
            // splineApp.requestRender(); // si tu veux forcer un render à l’arrivée
          }}
        />
      )}
    </div>
  );
}
