import Spline from '@splinetool/react-spline'
import React from 'react'

export default function ProjectScreen() {
    return (
        <div className='h-screen w-screen flex flex-col justify-center items-center'>
            <Spline
                scene="https://prod.spline.design/EweNnmWlIkA9t21J/scene.splinecode"
            />
            <div className=" mb-4 w-11/12 flex flex-row justify-end ">
                <a href="https://www.linkedin.com/in/aymanehilmi/" className="text-base font-bold mt-6" style={{ fontFamily: 'SFULTRALIGHT', color: '#a3a8af' }}> by Aymane Hilmi</a>
            </div>
        </div>
    )
}
