import React from 'react'
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";


export default function Navbar() {
    return (
        <div className='flex flex-row justify-between w-full p-7 px-8'>
            <div className='flex flex-row'>
                <FaLinkedin color='gray' size={25} className='mr-5' />
                <FaGithub color='gray' size={25} />
                <FaInstagram color='gray' size={25} className='ml-5' />
            </div>
            <div>

            </div>
        </div>
    )
}
