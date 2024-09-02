import React from 'react'
import Spline from '@splinetool/react-spline';
import './components.css';
import PersonalPhotos from '../assets/PersonalPhotos.svg'

export default function About() {
    return (
        <div className='w-full'>
            <div className="flex flex-col md:flex-row">

                {/* Left part with the image */}
                <div className="w-full md:w-1/2 p-12">
                    <img className='w-full' src={PersonalPhotos} />
                </div>

                {/* Font Color 3b3d41*/}
                <div className="w-full md:w-1/2 items-center flex justify-center">
                    <div className='pr-10'>
                        <h1 className="text-base font-bold" style={{ fontFamily: 'SFULTRALIGHT', color: '#a3a8af' }}>ABOUT ME</h1>
                        <p className="mt-4 text-xs" style={{ fontFamily: 'SFREGULAR', color: '#3b3d41' }}>
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
                            <br></br>
                            <br></br>
                            Instead of strolling spaces,however, people are now scrolling interfaces more.
                            Architecturehas given me a spatial 'taste' of design in the real world and allows
                            me to bring a systems View to designing interfaces that feel more
                            humane.
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
            <div className='flex flex-col items-center'>
                <div className="border-t-2 border-gray-300 my-4 w-5/6">
                    <h1 className="text-base font-bold mt-6" style={{ fontFamily: 'SFULTRALIGHT', color: '#a3a8af' }}>THE JOURNEY BEGINS</h1>
                    <div className="flex mt-6">
                        <div className="w-full" data-aos="fade-right" data-aos-offset="400" data-aos-anchor-placement="center-center">
                            <h1 className="text-base font-bold" style={{ fontFamily: '  ', color: '#000000' }}>Computer Science</h1>

                            <p className="mt-4 text-xs pr-8" style={{ fontFamily: 'SFREGULAR', color: '#3b3d41' }}>
                                During my sophomore year, I decided to shift my career towards designing for people
                                in computing spaces because of a desire to work at larger and faster scales. While
                                computing and architecture slowly evolve, still, at the heart of these disciplines
                                are what makes design valuable — it improves people's lives holistically through
                                emotion, functionality, and aesthetics                            </p>
                        </div>
                        <div className="w-full" data-aos="fade-left" data-aos-offset="400" data-aos-anchor-placement="center-center">
                            <h1 className="text-base font-bold" style={{ fontFamily: '  ', color: '#000000' }}>Philosophy</h1>

                            <p className="mt-4 text-xs" style={{ fontFamily: 'SFREGULAR', color: '#3b3d41' }}>
                                During my sophomore year, I decided to shift my career towards designing for people
                                in computing spaces because of a desire to work at larger and faster scales. While
                                computing and architecture slowly evolve, still, at the heart of these disciplines
                                are what makes design valuable — it improves people's lives holistically through
                                emotion, functionality, and aesthetics
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
