import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <div id ='grad'>
       {/* NAVBAR */}
       <nav class="relative container mx-auto p-5">
          {/* FLEX CONTAINER */}
            <div class="flex items-center justify-between">
               {/* logo */}
             <div>
              <Link to='/'>
              <img src="" alt="logo-img" />
              </Link>
                  
             </div>
             {/* menu */}
            <div class="hidden space-x-3 md:flex text-white font-bold text-xl">
                <button className='lg:mx-1 bg-gradient-to-br lg:px-3 lg:py-2 lg:rounded-md text-white
                 hover:from-[#8b98c9] hover:to-[#8b98c9]'><Link to='/about'>HOME</Link></button>
                <button className='lg:mx-1 bg-gradient-to-br lg:px-3 lg:py-2 lg:rounded-md text-white
                 hover:from-[#8b98c9] hover:to-[#8b98c9]'><Link to='/about'>ABOUT US</Link></button>
                <button className='lg:mx-1 bg-gradient-to-br lg:px-3 lg:py-2 lg:rounded-md text-white
                 hover:from-[#8b98c9] hover:to-[#8b98c9]'><Link to='/about'>INITIATIVES</Link></button>
                <button className='lg:mx-1 bg-gradient-to-br lg:px-3 lg:py-2 lg:rounded-md text-white
                 hover:from-[#8b98c9] hover:to-[#8b98c9]'><Link to='/about'>GALLERY</Link></button>
                <button className='lg:mx-1 bg-gradient-to-br lg:px-3 lg:py-2 lg:rounded-md text-white
                 hover:from-[#8b98c9] hover:to-[#8b98c9]'><Link to='/about'>GET INVOLVED</Link></button>
                <button className='lg:mx-1 bg-gradient-to-br lg:px-3 lg:py-2 lg:rounded-md text-white
                 hover:from-[#8b98c9] hover:to-[#8b98c9]'><Link to='/about'>CONTACT US</Link></button>
                
              
               
            </div>

            </div>
       </nav>
    </div>
  )
}

export default Navbar