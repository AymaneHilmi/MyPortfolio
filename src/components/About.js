import React from 'react'
import Spline from '@splinetool/react-spline';
import './components.css';
import PersonalPhoto from '../assets/PersonalPhoto.svg'

export default function About() {
    return (

        <div className="flex flex-col md:flex-row h-screen">
            {/* Left part with the image */}
            <div className="pl-20 pt-20">
                <img
                    src={PersonalPhoto}
                />
            </div>

            {/* Font Color 3b3d41*/}
            <div className="w-full md:w-1/2 flex items-center justify-center">
                <div className='pr-10'>
                    <h1 className="text-4xl font-bold">Info</h1>
                    <p className="mt-4 text-sm">
                        Ilm a designer living in Berkeley, California. Previously, an architect
                        from Singapore.

                        For a long time, l've been designing spaces that people can enjoy
                        strolling around, always striving to curate an engaging human
                        experience as they navigate the built environment.
                        <br></br>
                        <br></br>
                        Throughout this journey, l've been curious about understanding human
                        interaction to build more intuitive things — there are many
                        complexities in human relationships with nature and architecture
                        with so much still to explore.
                        <br></br>
                        <br></br>
                        During my sophomore year, I decided to shift my career towards
                        designing for people in computing spaces because of a desire to
                        work at larger and faster scales. While computing and architecture
                        slowly evolve, still, at the heart of these disciplines are what makes
                        design valuable — it improves people's lives holistically through
                        emotion, functionality, and aesthetics.
                        <br></br>
                        <br></br>
                        Instead of strolling spaces,however, people are now scrolling interfaces more.
                        Architecturehas given me a spatial 'taste' of design in the real world and allows
                        me to bring a systems View to designing interfaces that feel more
                        humane.
                    </p>
                </div>
            </div>
        </div>

    )
}
