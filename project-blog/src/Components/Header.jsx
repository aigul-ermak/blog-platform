// eslint-disable-next-line no-unused-vars
import React from 'react'
import logo from './../assets/img/logo.png'

function Header() {
  return (
    <div className='flex justify-between items-center '>
        <img src ={logo} className='w-[180px]'/>
        <ul className='flex gap-4 md:gap-14'>
            <li className='hover:font-bold cursor-pointer'>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <button>Sign Up</button>
    </div>
  )
}

export default Header