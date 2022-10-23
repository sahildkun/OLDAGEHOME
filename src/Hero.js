import React from 'react'
import Carousel from './Carousel'
import Footer2 from './Footer2'
import Founder from './Founder'
import Navbar from './Navbar'

function Hero() {
  return (
    <div>
      <Navbar/>
      <Carousel/>

    <section id='hero'  className='mx-auto'>
       
       <div className='flex flex-col items-center '>

         <h1 className='text-3xl text-bold font-serif'>OLD AGE HOME</h1>
         <h2 className='text-sm max-w-sm text-center font-bold'> SEVA & SHELTER, is a charitable trust founded in the year 2001 with the objective of providing care and succor to the old. Omashram provides residential care with full boarding & lodging facility to the old with medical...</h2>
         <button className='border-4 p-2 max-w-sm'>MORE DETAILS</button>

       </div>
    </section>

    <Founder/>
    <Footer2/>

    </div>
  )
}

export default Hero