import React from 'react'
import { useState } from 'react'
import { IoChevronBackOutline } from "react-icons/io5";

function Sidebar() {

  const [open, setOpen] = useState(true)

  return (
    <div className='flex'>
        
      <div className={`${open ? "w-72" : "w-20" } duration-300 h-screen bg-dark-purple relative`}>Sidebar
        
      <IoChevronBackOutline className={`absolute cursor-pointer rounded-full -right-3 top-9 w-7 border-2 border-white ${!open && "rotate-180"}`} 
        onClick={() => setOpen(!open)}/>

        </div>       
        
    </div>

  )
}

export default Sidebar