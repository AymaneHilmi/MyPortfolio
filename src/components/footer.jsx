import { Link } from 'react-router-dom';
import "./components.css";
import AOS from 'aos'
import 'aos/dist/aos.css'
import { cn } from "@/lib/utils";
import ThemeToggle from './ui/ThemeToggle';


export default function Footer() {
  return (
    <footer className="mt-10 w-full py-6 flex flex-col md:flex-row items-center justify-center font-sfregular text-sm md:text-base text-lightSecondary">

      {/* Signature */}
      <span className="text-lightSecondary">
        Designed & Developed by <a href="https://www.linkedin.com/in/aymanehilmi/" target="_blank" data-cursor-icon="arrow" className='bg-brandgradient bg-clip-text text-transparent'> Aymane HILMI </a>
      </span>
    </footer>
  );
}
