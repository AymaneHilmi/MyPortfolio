import React, { useEffect, useState } from 'react';
import Spline from '@splinetool/react-spline';
import './screens.css';

export default function ProjectScreen() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            });
        });

        const target = document.querySelector('#project-screen');
        if (target) {
            observer.observe(target);
        }

        return () => {
            if (target) {
                observer.unobserve(target);
            }
        };
    }, []);

    return (
        <div id="project-screen" className='h-screen w-screen flex flex-col justify-center items-center'>
            {isVisible && (
                <Spline
                    scene="https://prod.spline.design/EweNnmWlIkA9t21J/scene.splinecode"
                />
            )}
            <div className="border-t border-gray-300 my-6 w-11/12 flex flex-row justify-between md:justify-end">
                <div className='flex flex-row gap-4 md:hidden'>
                    <a href="https://www.linkedin.com/in/aymanehilmi/" className="text-base font-bold mt-6" style={{ fontFamily: 'SFULTRALIGHT', color: '#a3a8af' }}>Linkedin ↗</a>
                    <a href="https://github.com/AymaneHilmi" className="text-base font-bold mt-6" style={{ fontFamily: 'SFULTRALIGHT', color: '#a3a8af' }}>GitHub ↗</a>
                </div>
                <a className="text-base font-bold mt-6" style={{ fontFamily: 'SFULTRALIGHT', color: '#a3a8af' }}>by Aymane HILMI</a>
            </div>
        </div>
    );
}
