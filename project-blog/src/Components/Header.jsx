// eslint-disable-next-line no-unused-vars
import React from 'react'
import logo from './../assets/img/logo.png'
import { IoCreate } from "react-icons/io5";

function Header() {
  return (
    <div className='flex justify-between items-center'>
        <img src ={logo} className='w-[180px]'/>
        <ul className='flex gap-4 md:gap-14'>
            <li className='hover:font-bold cursor-pointer'>Home</li>
            <li className='hover:font-bold cursor-pointer'>About</li>
            <li className='hover:font-bold cursor-pointer'>Contact</li>
        </ul>
        <button className='bg-dark-purple rounded-full text-white flex items-center'>Sign Up <IoCreate className='ml-3'/> </button>
    </div>
  )
}

export default Header