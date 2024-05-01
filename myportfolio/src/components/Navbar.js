import React from 'react'
import './components.css';


export default function Navbar() {
    return (
        <header class='test' className=' fixed flex w-screen justify-between'>
            <div className='flex flex-row '>
                <div className="logo">
                    My portfolio
                </div>
            </div>
            <div>
                <button class="button">
                    <span class="button_lg">
                        <span class="button_sl"></span>
                        <span class="button_text">My Resume</span>
                    </span>
                </button>
            </div>

        </header>
    )
}
