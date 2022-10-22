import React from 'react'

function Navbar() {
  return (
    <div>
       {/* NAVBAR */}
       <nav class="relative container mx-auto p-6">
          {/* FLEX CONTAINER */}
            <div class="flex items-center justify-between">
               {/* logo */}
             <div>
                  <img src="" alt="logo-img" />
             </div>
             {/* menu */}
            <div class="hidden space-x-6 md:flex">
                <div href="#" class="hover:text-darkGrayishBlue">Pricing</div>
                <div href="#" class="hover:text-darkGrayishBlue">Product</div>
                <div href="#" class="hover:text-darkGrayishBlue">About Us</div>
                <div href="#" class="hover:text-darkGrayishBlue">Careers</div>
                <div href="#" class="hover:text-darkGrayishBlue">Community</div>
            </div>

            </div>
       </nav>
    </div>
  )
}

export default Navbar