import React from 'react'
import founder from '../images/founder.jpg'
function Founder() {
  return (
    <div>
        <section class="text-gray-400 bg-white body-font">
  <div class="container px-5 py-24 mx-auto flex flex-col">
    <div class="lg:w-4/6 mx-auto">
     
      <div class="flex flex-col sm:flex-row mt-10">
        <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
          <div class=" inline-flex items-center justify-center">
            {/* founder logo */}
            <img src={founder} alt="" className='h-36 w-36' />
          </div>
          <div class="flex flex-col items-center text-center justify-center">
            <h2 class="font-medium title-font mt-4 text-white text-lg">Phoebe Caulfield</h2>
            <div class="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
            <p class="text-base text-gray-400">
              <h1 className='font-serif text-xl text-black'>KAMINI DAS</h1>
              <h1>MD & CEO</h1>
              </p>
          </div>
        </div>
        <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-800 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
          <p class=" text-md leading-relaxed md:text-lg mb-4">
            <h1 className='text-3xl mb-10 text-bold text-black'>About the founder</h1>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure iste deleniti ratione! Perferendis nesciunt culpa odit deleniti, repellendus sint asperiores. </p>
          <a class="text-indigo-400 inline-flex items-center">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Founder