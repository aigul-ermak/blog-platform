/* eslint-disable no-unused-vars */
import React from 'react'
import { useState } from 'react'
import { IoChevronBackOutline, IoReorderThreeOutline } from "react-icons/io5";

function Sidebar() {

  const [open, setOpen] = useState(true)
  const Menus = [
    {
      id:1,
      name:'All'
    },
    {
      id:2,
      name: 'React'
    },
    {
      id:3,
      name:'Ruby on Rails'
    },
    {
      id:4,
      name:'Angular'
    },
    {
      id:5,
      name:'UI/UX'
    },
  ]

  return (
    <div className='flex'>
        
      <div className={`${open ? "w-72" : "w-20" } duration-300 h-screen bg-dark-purple relative`}>
        
      <IoChevronBackOutline className={`absolute cursor-pointer rounded-full -right-3 top-9 w-7 border-2 border-white ${!open && "rotate-180"}`} 
        onClick={() => setOpen(!open)}/>

        <div className='flex gap-x-4 items-center'>

          <img src = "./src/assets/img/Logo-Lobo-PNG.png" className='w-20 h-20'/>
        {/*<IoReorderThreeOutline className='w-10 h-10 ml-3 cursor-pointer duration-500'/>*/}       

        <h1 className={`origin-left font-medium text-xl duration-300 ${!open && "scale-0"}`}>Designer</h1>

        </div>

        <ul className='pt-6 ml-5'>
          {Menus.map((menu, index) => (
            <li key={index} className='text-sm gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md' > {menu.name}</li>))}
        </ul>


        </div>       
        
    </div>

  )
}

export default Sidebar