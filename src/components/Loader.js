import React from 'react';
import './components.css';
import { cn } from "../../lib/utils";

const Loader = () => {
    return (
        <div className={cn("flex flex-row justify-center items-center fixed top-0 h-screen w-screen bg-transparent backdrop-blur-xl overflow-hidden z-50", className)} >
            <div className="dot-spinner">
                <div className="dot-spinner__dot"></div>
                <div className="dot-spinner__dot"></div>
                <div className="dot-spinner__dot"></div>
                <div className="dot-spinner__dot"></div>
                <div className="dot-spinner__dot"></div>
                <div className="dot-spinner__dot"></div>
                <div className="dot-spinner__dot"></div>
                <div className="dot-spinner__dot"></div>
            </div>
        </div>

    );
};

export default Loader;