import { Link } from 'react-router-dom';
import './components.css';
import Logo from '../assets/Logo.png'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { cn } from "../lib/utils";


export default function Sidebar({ scrollToRoutes }) {
    return (
        <div className={cn("md:grid sticky top-0 grid-rows-[0.2fr_1fr_1fr] border-r border-gray-300 h-screen hidden min-w-52 ")} data-aos="fade-right">
            <div className={cn("font-sfbold row-span-1 p-8 border-b border-gray-300 flex flex-col gap-1 text-xl")} style={{ color: '#"3b3d41"' }}>
                <Link to="" className='w-24'>
                    <img src={Logo} alt='Aymane Logo' className=" rounded-[10px]" />
                </Link>
                <div className='mt-4'><Link to="/About" onClick={scrollToRoutes} className={cn(' z-10 transition-opacity duration-300 hover:opacity-30')}>About Me</Link></div>
                <div><Link to="/Resume" className={cn("transition-opacity duration-300 hover:opacity-30")} onClick={scrollToRoutes}>Resume</Link></div>
            </div>
            <div className={cn("font-sfregular row-span-1 justify-around border-b border-gray-300 p-8")}>
                <div className='flex flex-col'>
                    <h1 className='text-xs pb-2 text-lightGray'>MOBILE APPLICATION</h1>
                    <div><Link to="/SaintGobain" className={cn('text-sm transition-opacity duration-300 hover:opacity-30 text-darkGray')} onClick={scrollToRoutes}>Saint-Gobain</Link></div>
                    <div><Link to="/Cesiveroo" className={cn('text-sm transition-opacity duration-300 hover:opacity-30 text-darkGray')} onClick={scrollToRoutes}>Cesiveroo</Link></div>
                </div>
                <div className='flex flex-col mt-4'>
                    <h1 className='text-xs pb-2 text-lightGray'>WEB DEVELOPMENT</h1>
                    <div><Link to="Comingsoon" className={cn('text-sm transition-opacity duration-300 hover:opacity-30 text-darkGray')} onClick={scrollToRoutes}>Aymane's Portfolio</Link></div>
                    <div><Link to="/Comingsoon" className={cn('text-sm transition-opacity duration-300 hover:opacity-30 text-darkGray')} onClick={scrollToRoutes}>Blog</Link></div>
                </div>

            </div>
            <div className="font-sfregular row-span-1 flex flex-col border-b border-gray-300 p-8">
                <h1 className='text-sm pb-2'>Personal</h1>
                <div><Link to="/Journey" className='text-sm transition-opacity duration-300 hover:opacity-30 text-darkGray'>Journey</Link ></div>
                <div><Link to="/Blog" className='text-sm transition-opacity duration-300 hover:opacity-30 text-darkGray'>Blog</Link ></div>
                <h1 className='text-sm pb-2 mt-4 text-lightGray'>Contact</h1>
                <div><a href="mailto:contact@aymanehilmi.com" target="_blank" rel="noreferrer" className={cn('text-sm transition-opacity duration-300 hover:opacity-30 text-darkGray')}>Mail</a></div>
                <div><a href="https://www.linkedin.com/in/aymanehilmi/" target="_blank" rel="noreferrer" className={cn('text-sm transition-opacity duration-300 hover:opacity-30 text-darkGray')}>Linkedin</a></div>
                <div><a href="https://github.com/AymaneHilmi" target="_blank" rel="noreferrer" className={cn('text-sm transition-opacity duration-300 hover:opacity-30 text-darkGray')}>Github</a></div>
                {/* <div><Link to="/Comingsoon" className={cn('text-sm transition-opacity duration-300 hover:opacity-30 text-darkGray')} onClick={scrollToRoutes}>Download CV </Link></div> */}
            </div>
        </div>
    );
}