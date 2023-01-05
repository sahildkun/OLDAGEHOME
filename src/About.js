import React from 'react'

// href="tel:+919556100564"
function About() {
  return (
    <>
     
     <div className=' mx-5 p-5 md:mx-16 md:p-10 flex flex-col space-y-7'>

      <h1 className='text-5xl font-serif text-center'>
        ABOUT US
      </h1>
      <p className=' text-sm md:text-2xl  text-justify'>
        SEVA and SHELTER CHARITABLE TRUST- Living away from an loving family can be really harsh. But coping with the demands of a fast paced life is not easy in the twilight years. To find a middle way JRP and MasterPace has started a peace home for our Senior Citizen called "SEVA AND SHELTER CHARITABLE TRUST".
        </p>
      <p className='text-sm md:text-2xl   text-start'>
        These days many senior citizens are opting for the old "PAY & STAY" facilities to live securely and spend the rest  of their lifetime in peace and harmony. SEVA & SHELTER CHARITABLE TRUST is probably the best facility in BHUBANESWAR,ODISHA to offer older a brief stay
        </p>
        <div className='text-sm md:text-2xl  text-center flex flex-col'>
        <p className=''>if you or anay of your relatives intrested to live in a peaceful stay visit</p> <a href='https://goo.gl/maps/DbrND1AucTPbXzg8A' className='text-blue-700  hover:text-red-700 hover:underline'>SEVA AND SHELTER CHARITABLE TRUST</a> <p>OR</p>  CALL US AT <a href="tel:+919556100564" className='text-blue-700  hover:text-red-700 hover:underline'>9556100564</a>
        </div>  
     </div>
    </>
    
  )
}

export default About