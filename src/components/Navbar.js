import React from 'react'
import { Link } from 'react-router-dom'
import { Twirl as Hamburger } from 'hamburger-react'
import { useState } from 'react'
function Navbar() {
  const [isOpen, setOpen] = useState(false)

  function handleToggle(){

    setOpen((prevState) => (!prevState));
  }

  return (
    <div id ='grad'>
       {/* NAVBAR */}
       <nav class="relative container mx-auto p-3 ">
          {/* FLEX CONTAINER */}
            <div class={`flex ${isOpen ? 'flex-col' : 'flex-row'} items-center md: justify-between`}>
               {/* logo */}
             <div className='py-0 mx-auto md:mx-0 flex items-center space-x-7'>
              <Link to='/'>
              <img src="" alt="logo-img" className=' w-72 md:w-80'/>
              </Link>
              <div className='block hamburger md:hidden '>
          <Hamburger color="#FFFFFF"   onToggle={handleToggle}/>
          </div>
                  
             </div>
             {/* menu */}
            <div class={`flex ${isOpen ? 'flex-col text-md' : 'hidden  md:text-xl'} space-y-2  md:flex  md:items-center text-white font-medium font-serif `}>
                
        
                <Link to='/'></Link>
                <Link to='/'><button className='lg:mx-1 bg-gradient-to-br lg:px-3 lg:py-2 lg:rounded-md text-white
                 hover:from-[#8b98c9] hover:to-[#8b98c9]'>HOME</button></Link>
                <Link to='/about'><button className='lg:mx-1 bg-gradient-to-br lg:px-3 lg:py-2 lg:rounded-md text-white
                 hover:from-[#8b98c9] hover:to-[#8b98c9]'>ABOUT US</button></Link>
                <Link to='/about'><button className='lg:mx-1 bg-gradient-to-br lg:px-3 lg:py-2 lg:rounded-md text-white
                 hover:from-[#8b98c9] hover:to-[#8b98c9]'>GALLERY</button></Link>
                <Link to='/contact'><button className='lg:mx-1 bg-gradient-to-br lg:px-3 lg:py-2 lg:rounded-md text-white
                 hover:from-[#8b98c9] hover:to-[#8b98c9]'>CONTACT US</button></Link>
                
              
               
            </div>
            
          
            </div>
         
         
       </nav>
    </div>
  )
}

export default Navbar