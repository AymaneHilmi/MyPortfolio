import React, { useEffect, useState } from 'react';
import Spline from '@splinetool/react-spline';
import './components.css';
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function LandingPage() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        AOS.init();

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            });
        });

        const target = document.querySelector('#landing-page');
        if (target) {
            observer.observe(target);
        }

        return () => {
            if (target) {
                observer.unobserve(target);
            }
        };
    }, []);

    const handleLoad = () => {
        AOS.refresh();
    };

    return (
        <div id="landing-page" className='md:h-auto h-screen scroll pb-10 md:mt-auto'>
            {isVisible && (
                <Spline
                    scene="https://prod.spline.design/3OnoqTOGmJs7Vpxx/scene.splinecode"
                    onLoad={handleLoad}
                />
            )}
            <div className='md:flex justify-center hidden'>
                <div id="scrolldown">
                    <div id="chevrons">
                        <div id="chevrondown"></div>
                        <div id="chevrondown"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
