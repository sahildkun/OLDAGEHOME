import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <div  class='bg-teal-600'>
       {/* NAVBAR */}
       <nav class="relative container mx-auto p-7">
          {/* FLEX CONTAINER */}
            <div class="flex items-center justify-between">
               {/* logo */}
             <div>
              <Link to='/'>
              <img src="" alt="logo-img" />
              </Link>
                  
             </div>
             {/* menu */}
            <button class="hidden space-x-6 md:flex text-white font-bold text-xl">
                <Link to='/about'>HOME</Link>
                <Link to='/about'>ABOUT US</Link>
                <Link to='/about'>INITIATIVES</Link>
                <Link to='/about'>GALLERY</Link>
                <Link to='/about'>GET INVOLVED</Link>
                <Link to='/about'>CONTACT US</Link>
                
              
               
            </button>

            </div>
       </nav>
    </div>
  )
}

export default Navbar