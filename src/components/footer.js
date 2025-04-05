import { Link } from 'react-router-dom';
import './components.css';
import Logo from '../assets/Logo.png'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { cn } from "../lib/utils";


export default function Footer() {
    return (
        // <div className={cn(" mt-10 w-full flex flex-row text-base font-sfultralight justify-between ")} style={{ color: '#a3a8af' }}>
        //     <div className={cn('flex flex-row gap-4 md:hidden font-bold')}>
        //         <a href="https://www.linkedin.com/in/aymanehilmi/" target="_blank" >Linkedin ↗</a>
        //         <a href="https://github.com/AymaneHilmi" target="_blank" >GitHub ↗</a>
        //         {/* <a href="mailto:aymanehilmi1@gmail.com" target="_blank" rel="noreferrer" >Mail ↗</a>
        //         <Link to="/Comingsoon" className='cursor-pointer' > CV ↗</Link> */}
        //     </div>
        //     <a className={cn("font-bold md:mt-0 mt-6 md:text-right text-center")} > by Aymane HILMI</a>
        // </div>
        <div className={cn("border-t border-gray-300 mt-6 w-full flex flex-row justify-between md:justify-end font-sfultralight ")}>
            <div className={cn('flex flex-row gap-4 md:hidden')}>
                <a href="https://www.linkedin.com/in/aymanehilmi/" target="_blank" className={cn("text-base font-bold mt-6")} style={{ color: '#a3a8af' }}>Linkedin ↗</a>
                <a href="https://github.com/AymaneHilmi" target="_blank" className={cn("text-base font-bold mt-6")} style={{ color: '#a3a8af' }}>GitHub ↗</a>
            </div>

            <a className={cn("text-base font-bold mt-6")} style={{ color: '#a3a8af' }}> <a className='hidden md:inline'>Designed & developed </a>by Aymane HILMI</a>

        </div>
    )
}