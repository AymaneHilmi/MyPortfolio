import React, { useEffect, useState, useRef } from 'react';
import Spline from '@splinetool/react-spline';
import './components.css';
import 'aos/dist/aos.css';
import AOS from 'aos';



export default function LandingPage() {
    const [isVisible, setIsVisible] = useState(false);
    const [isTabActive, setIsTabActive] = useState(true);
    const splineRef = useRef(null);

    // Détecte si la section est visible
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        if (splineRef.current) {
            observer.observe(splineRef.current);
        }

        return () => {
            if (splineRef.current) {
                observer.unobserve(splineRef.current);
            }
        };
    }, []);

    // Détecte si l'onglet est actif
    useEffect(() => {
        const handleVisibilityChange = () => {
            setIsTabActive(document.visibilityState === "visible");
        };

        document.addEventListener("visibilitychange", handleVisibilityChange);
        return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
    }, []);

    return (
        <div ref={splineRef} className="h-screen w-full">
            {isVisible && isTabActive && (
                <Spline scene="https://prod.spline.design/3OnoqTOGmJs7Vpxx/scene.splinecode" />
            )}
        </div>
    );
}