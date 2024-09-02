import React from 'react'
import Spline from '@splinetool/react-spline';
import './components.css';
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function LandingPage() {
    AOS.init()
    return (
        <div className='h-4/6'>
            <Spline scene="https://prod.spline.design/3OnoqTOGmJs7Vpxx/scene.splinecode" >
            </Spline>
            <div className='flex justify-center'>
                <div class="scrolldown">
                    <div class="chevrons">
                        <div class="chevrondown"></div>
                        <div class="chevrondown"></div>
                    </div>
                </div>
            </div>
        </div >
    )
}
