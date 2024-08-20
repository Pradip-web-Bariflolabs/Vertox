import React from 'react'
import './../assets/css/Hero.css'

export default function HeroCard() {
  return (
    <div className='w-[60%] mx-auto flex rounded-md shadow-lg -mt-10'>
        <div className='flex gap-2 bg-sky-200 p-4 py-6 border-r border-white rounded-l-md'>
            <img src="img/certificate.png" alt="image" className='w-10 md:w-20 h-8 md:h-16'/>
            <div>
                <h2 className='text-blue-900 text-sm md:text-2xl font-bold'>Certified Farm</h2>
                <p className='text-black text-xs md:text-sm'>Certified Farm integrates VertoX Labs' state-of-the-art technology.</p>
            </div>
        </div>
        <div className='flex gap-2 bg-sky-200 p-4 py-6 border-r border-white'>
            <img src="img/prawn.png" alt="image" className='w-10 md:w-20 h-8 md:h-16'/>
            <div>
                <h2 className='text-blue-900 text-md md:text-2xl font-bold'>Certified Farm</h2>
                <p className='text-black text-xs md:text-sm'>Our certification underscores our commitment to using advanced solutions for optimal, environmentally responsible aquaculture.</p>
            </div>
        </div>        
        <div className='flex gap-2 bg-sky-200 p-4 py-6 rounded-r-md'>
            <img src="img/guarantee.png" alt="image" className='w-10 md:w-20 h-8 md:h-16'/>
            <div>
                <h2 className='text-blue-900 text-md md:text-2xl font-bold'>Certified Farm</h2>
                <p className='text-black text-xs md:text-sm'> We uphold top standards of innovation and efficiency to deliver reliable, sustainable water management solutions.</p>
            </div>
        </div>
    </div>
  )
}
