import React from 'react'
import Navbar from './components/Navbar'
import { useForm, ValidationError } from '@formspree/react';

function Contact() {
  const [state, handleSubmit] = useForm("xjvzaoan");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
    <div>
     
     <div class="min-h-screen flex items-center justify-center py-10" id='contact'>
  
  <div class="bg-gray-100 flex rounded-2xl  shadow-inner max-w-3xl p-5 items-center">
  
    <div class="md:w-1/2 px-8 md:px-16">
      <h2 class="font-bold text-2xl text-[#002D74]">CONTACT US</h2>
      <p class="text-xs mt-4 text-[#002D74]">Please add your details </p>

      <form action="" class="flex flex-col gap" onSubmit={handleSubmit}>
        <input class="p-2 mt-8 rounded-xl border" type="text" name="name" placeholder="Enter your name"/>
        <input class="p-2 mt-8 rounded-xl border" type="email" name="email" placeholder="Enter your email"/> 
        <input class="p-2 mt-8 rounded-xl border" type="number" name="number" placeholder="Enter your number"/> 
        <textarea class="p-2 my-8 rounded-xl border" type="text" name="query" placeholder="Enter your query"/>
        
        <button class="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300" disabled={state.submitting}>Submit</button> 
        <a class="bg-red-700 rounded-xl text-white py-2 mt-5 text-center font-bold hover:scale-105 duration-300" href="tel:+919556100564">Call us now</a> 
      </form>

     
    </div>

    
    <div class="md:block hidden w-1/2">
      
    <iframe className='rounded-2xl shadow-xl' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3740.6461684413093!2d85.83113971478257!3d20.356230886366525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19094179fd7f9b%3A0x3ff1d5bb5daec167!2sGreenpark%20Rd%2C%20Patia%2C%20Bhubaneswar%2C%20Odisha%20751024!5e0!3m2!1sen!2sin!4v1669288374428!5m2!1sen!2sin'height='700' ></iframe>
    </div>
  </div>
  
</div>
       
    </div>
  )
}

export default Contact