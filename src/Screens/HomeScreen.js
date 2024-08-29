import React from 'react'
import LandingPage from '../components/LandingPage'
import About from '../components/About'


export default function HomeScreen() {
    return (
        <div className='h-full'>
            <LandingPage />
            <About />
        </div>
    )
}
