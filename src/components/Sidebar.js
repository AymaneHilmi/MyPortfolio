import { Link } from 'react-router-dom';
import './components.css';
import Logo from '../assets/Logo.png'
import AOS from 'aos'
import 'aos/dist/aos.css'



export default function Sidebar({ scrollToRoutes }) {
    AOS.init();
    return (
        <div className="md:grid sticky top-0 grid-rows-[0.2fr_1fr_1fr] border-r border-gray-300 h-screen hidden min-w-52 " data-aos="fade-right">
            <div className="row-span-1 p-8 border-b border-gray-300 flex flex-col gap-1 text-xl" style={{ fontFamily: 'SFBOLD', color: '#"3b3d41"' }}>
                <Link to="" className='w-24'>
                    <img src={Logo} alt='Aymane Logo' className=" rounded-[10px]" />
                </Link>
                <Link to="/About" onClick={scrollToRoutes} className='mt-4'>About Me</Link>
                <Link to="/Resume" onClick={scrollToRoutes}>Resume</Link>
            </div>
            <div className="row-span-1 justify-around border-b border-gray-300 p-8">
                <div className='flex flex-col'>
                    <h1 style={{ fontFamily: 'SFREGULAR', color: '#a9a5ac' }} className='text-xs pb-2'>MOBILE APPLICATION</h1>
                    <Link to="/SaintGobain" style={{ fontFamily: 'SFREGULAR', color: '#3b3d41' }} className='text-sm' onClick={scrollToRoutes}>Saint-Gobain</Link>
                    <Link to="/Comingsoon" style={{ fontFamily: 'SFREGULAR', color: '#3b3d41' }} className='text-sm' onClick={scrollToRoutes}>Cesiveroo</Link>
                </div>
                <div className='flex flex-col mt-4'>
                    <h1 style={{ fontFamily: 'SFREGULAR', color: '#a9a5ac' }} className='text-xs pb-2'>WEB DEVELOPMENT</h1>
                    <Link to="Comingsoon" style={{ fontFamily: 'SFREGULAR', color: '#3b3d41' }} className='text-sm' onClick={scrollToRoutes}>Aymane's Portfolio</Link>
                    <Link to="/Comingsoon" style={{ fontFamily: 'SFREGULAR', color: '#3b3d41' }} className='text-sm' onClick={scrollToRoutes}>Blog</Link>
                </div>
                <div className='flex flex-col mt-4'>
                    <h1 style={{ fontFamily: 'SFREGULAR', color: '#a9a5ac' }} className='text-xs pb-2'>SERVICES</h1>
                    <Link to="Comingsoon" style={{ fontFamily: 'SFREGULAR', color: '#3b3d41' }} className='text-sm' onClick={scrollToRoutes}>Video editor</Link>
                </div>
            </div>
            <div className="row-span-1 flex flex-col border-b border-gray-300 p-8">
                <h1 style={{ fontFamily: 'SFREGULAR', color: '#a9a5ac' }} className='text-sm pb-2'>Contact</h1>
                <a href="mailto:aymanehilmi1@gmail.com" target="_blank" rel="noreferrer" style={{ fontFamily: 'SFREGULAR', color: '#3b3d41' }} className='text-sm'>Mail</a>
                <a href="https://www.linkedin.com/in/aymanehilmi/" target="_blank" rel="noreferrer" style={{ fontFamily: 'SFREGULAR', color: '#3b3d41' }} className='text-sm'>Linkedin</a>
                <a href="https://github.com/AymaneHilmi" target="_blank" rel="noreferrer" style={{ fontFamily: 'SFREGULAR', color: '#3b3d41' }} className='text-sm'>Github</a>
                <Link to="/Comingsoon" style={{ fontFamily: 'SFREGULAR', color: '#3b3d41' }} className='text-sm' onClick={scrollToRoutes}>Download CV </Link>
            </div>
        </div>





    );
}