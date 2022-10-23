import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <div>
       {/* NAVBAR */}
       <nav class="relative container mx-auto p-6">
          {/* FLEX CONTAINER */}
            <div class="flex items-center justify-between">
               {/* logo */}
             <div>
              <Link to='/'>
              <img src="" alt="logo-img" />
              </Link>
                  
             </div>
             {/* menu */}
            <div class="hidden space-x-6 md:flex">
                <Link to='/about'>ABOUT US</Link>
                <Link to='/about'>DONATE</Link>
                <Link to='/about'>CONTACT US</Link>
                
              
               
            </div>

            </div>
       </nav>
    </div>
  )
}

export default Navbar