import Spline from '@splinetool/react-spline';
import React, { useEffect } from 'react';
import { motion } from "framer-motion";
import './components.css';
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function LandingPage() {
    useEffect(() => {
        AOS.init();
    }, []);

    const handleLoad = () => {
        AOS.refresh();
        // Emettre un événement personnalisé à la fin du chargement de Spline
        const event = new CustomEvent('splineLoad');
        window.dispatchEvent(event);
    };

    return (
        <div>
            <Spline scene="https://prod.spline.design/3OnoqTOGmJs7Vpxx/scene.splinecode" onLoad={handleLoad} />
            <div className='flex justify-center mb-20'>
                <div className="scrolldown">
                    <div className="chevrons">
                        <div className="chevrondown"></div>
                        <div className="chevrondown"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
