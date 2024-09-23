import Spline from '@splinetool/react-spline';
import React, { useEffect } from 'react';
import './components.css';
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function LandingPage() {
    useEffect(() => {
        AOS.init();
    }, []);

    const handleLoad = () => {
        AOS.refresh();
    };

    return (
        <div className='md:h-auto h-screen scroll pb-10 md:mt-auto'>
            <Spline scene="https://prod.spline.design/3OnoqTOGmJs7Vpxx/scene.splinecode" onLoad={handleLoad} />
        </div>
    );
}
