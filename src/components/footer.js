import { Link } from 'react-router-dom';
import './components.css';
import Logo from '../assets/Logo.png'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { cn } from "../lib/utils";


export default function Footer() {
    return (
        <div className={cn("border-t border-gray-300 mt-6 py-6 w-full flex flex-col text-base font-sfultralight", className)} style={{ color: '#a3a8af' }}>
            <div className={cn('flex flex-row gap-4 justify-center md:hidden font-bold', className)}>
                <a href="https://www.linkedin.com/in/aymanehilmi/" target="_blank" >Linkedin ↗</a>
                <a href="https://github.com/AymaneHilmi" target="_blank" >GitHub ↗</a>
                <a href="mailto:aymanehilmi1@gmail.com" target="_blank" rel="noreferrer" >Mail ↗</a>
                <Link to="/Comingsoon" className='cursor-pointer' > CV ↗</Link>
            </div>
            <a className={cn("font-bold md:mt-0 mt-6 md:text-right text-center", className)} >Designed & Developed by Aymane HILMI</a>
        </div>
    )
}