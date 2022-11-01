import React from 'react'
import health from './images/health care.png'
import recreation from './images/recreation.png'
import yoga from './images/yoga.png'
function Services() {
  return (
    <div >
        <div className='text-xl text-center  max-w-[21rem] mx-[3rem] md:max-w-[22rem] mt-20 md:mt-44 md:text-3xl  text-blue-900 font-serif md:mx-auto border-b-4 border-blue-800 '>SERVICES WE PROVIDE</div>
        <div className='flex flex-col mt-16 md:mt-28 space-y-10 '>
           <div className='flex flex-auto gap-10   mx-auto md:gap-x-0 md:space-x-[26rem] '>
             <div>
                <img src={health} alt="img" className='h-20 md:h-32' />
                <p className='text-center text-xs font-semibold md:text-lg  my-5 text-slate-400'>HEALTHCARE</p>
             </div>
             <div>
                <img src={recreation} alt="img" className='h-20 md:h-32'/>
                <p className='text-center text-xs font-semibold md:text-lg  my-5 text-slate-400'>RECREATION</p>
             </div>
             <div>
                <img src={yoga} alt="img" className='h-20 md:h-32'/>
                <p className='text-center text-xs font-semibold md:text-lg  my-5 text-slate-400'>YOGA</p>
             </div>
           </div>

           <div className='flex flex-auto gap-10   mx-auto md:gap-x-0 md:space-x-[26rem]'>
           <div>
                <img src={health} alt="img"  className='h-20 md:h-32'/>
                <p className='text-center text-xs font-semibold tmd:ext-lg  my-5 text-slate-400'>HEALTHCARE</p>
             </div>
             <div>
                <img src={recreation} alt="img"  className='h-20 md:h-32'/>
                <p className='text-center text-xs font-semibold tmd:ext-lg  my-5 text-slate-400'>RECREATION</p>
             </div>
             <div>
                <img src={yoga} alt="img" className='h-20 md:h-32'/>
                <p className='text-center text-xs font-semibold md:text-lg  my-5 text-slate-400'>YOGA</p>
             </div>
           </div>
        </div>
    </div>
  )
}

export default Services