import { Link } from 'react-router-dom';
import './components.css';
import Logo from '../assets/Logo.png'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { cn } from "../lib/utils";


export default function Footer() {
  return (
    <footer className="mt-10 w-full py-6 flex flex-col md:flex-row items-center justify-center font-sfultralight text-sm md:text-base text-gray-400">

      {/* Signature */}
      <span className="font-bold text-center text_darkGray">
        Designed & Developed by <a  href="https://www.linkedin.com/in/aymanehilmi/" target="_blank" data-cursor-icon="arrow" className='underline underline-offset-4 bg-gradient-to-r from-blue-500 via-orange-400 to-red-500 bg-clip-text text-transparent'> Aymane HILMI </a> 
      </span>
    </footer>
  );
}
