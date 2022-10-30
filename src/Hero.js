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
       
       <div className='flex flex-col items-center mt-8 mb-8'>

         <h1 className='text-3xl text-bold font-serif text-slate-600'>OLD AGE CARE </h1>
         <h1 className='text-6xl text-bold font-serif text-black'>SEVA AND SHELTER CHARITABLE TRUST </h1>
         <h1 className='text-2xl max-w-4xl text-center font-bold text-slate-700 mt-5'> SEVA & SHELTER, is a charitable trust founded in the year 2001 with the objective of providing care and succor to the old. Seva and Shelter charitable trust provides residential care with full boarding & lodging facility to the old with medical...</h1>
         <button className='border-4 p-2 max-w-sm mt-3 border-teal-600 text-teal-600 font-extrabold'>LEARN MORE </button>

       </div>
    </section>

    <Founder/>
    <Footer2/>

    </div>
  )
}

export default Hero