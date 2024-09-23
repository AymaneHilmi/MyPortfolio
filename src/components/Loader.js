import React from 'react';
import './components.css';

const Loader = () => {
    return (
        <div className="flex flex-row justify-center items-center fixed top-0 h-screen w-screen bg-transparent backdrop-blur-xl overflow-hidden z-50 " >
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