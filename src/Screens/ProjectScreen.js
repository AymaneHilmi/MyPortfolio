import React, { useEffect, useState } from 'react';
import Spline from '@splinetool/react-spline';
import './screens.css';
import { cn } from "../lib/utils";

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
        <div id="project-screen" className={cn('h-screen w-screen flex flex-col justify-center items-center')}>
            {isVisible && (
                <Spline
                    scene="https://prod.spline.design/EweNnmWlIkA9t21J/scene.splinecode"
                />
            )}

        </div>
    );
}
