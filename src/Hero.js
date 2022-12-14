import React from 'react'
import Banner from './components/Banner'
import Carousel from './Carousel'
import Footer2 from './components/Footer2'
import Founder from './components/Founder'
import Navbar from './components/Navbar'
import Services from './Services'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div>
      {/* <Navbar/> */}
     <Banner/>

    <section id='hero'  className='mx-auto'>
       
       <div className='flex flex-col items-center mt-8 mb-8'>

         <h1 className='pb-3  md:text-lg text-bold font-serif text-slate-600'>OLD AGE CARE </h1>
         <h1 className='text-xl text-center md:text-5xl text-bold  mb-5 text-[#110364]  ' id='title'>SEVA AND SHELTER CHARITABLE TRUST </h1>
         <h1 className='text-xs mx-auto md:text-lg max-w-xl text-center font-thin mb-10 text-slate-700 md:mt-5 drop-shadow-2xl'> SEVA & SHELTER, is a charitable trust founded in the year 2001 with the objective of providing care and succor to the old. Seva and Shelter charitable trust provides residential care with full boarding & lodging facility to the old with medical...</h1>
       <Link to={'/about'}><button  className='text-sm p-2 md:mx-4 my-6 bg-gradient-to-br from-[#04094b] to-[#04094b] md:px-5 md:py-3 md:space-x-3 rounded-md text-white 
         hover:from-[#5f5de9] hover:to-[#5f5de9] shadow-xl hover:shadow-indigo-700 '>LEARN MORE</button></Link>
        
       </div>
    </section>
    <Services/>
    <Founder/>
    <Footer2/>

    </div>
  )
}

export default Hero