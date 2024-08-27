import React from 'react'

export default function Sidebar() {
    return (
        <nav className='sticky bg-black w-15 h-screen' >
            <ul className="flex flex-col justify-start pt-3">
                <li className='py-5 rotate-90 text-gray-500 hover:text-white cursor-pointer'>Home</li>
                <li className='py-5 rotate-90 text-gray-500 hover:text-white cursor-pointer'>About</li>
                <li className='py-5 rotate-90 text-gray-500 hover:text-white cursor-pointer'>Projects</li>
                <li className='py-5 rotate-90 text-gray-500 hover:text-white cursor-pointer'>Contact</li>
            </ul>
        </nav>
    )
}
