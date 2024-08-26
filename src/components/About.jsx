import React from 'react'

export default function About() {
  return (
    <div className='my-10 pt-31'>
            { /*<img src="img/banner-1.jpg" alt="..." className='w-full' />*/ }
        <div className='flex flex-col md:flex-row max-w-[1260px] mx-auto gap-8'>
        <div className='w-1/2 shadow-xl p-0'>
            <img src="img/img/new_banner.jpg" alt="banner"  className='w-full h-full rounded-md shadow-lg'/>
        </div>
        <div className='w-1/2 space-y-6'>
            <h3 className='text-sky-700 text-xl font-bold'>About Us ~</h3>
            <h2 className='text-4xl font-bold text-blue-950'>Ensuring Clean Water for a Sustainable Future</h2>
            <p>VertoX Labs manufactures robotic unmanned surface vehicles (USVs) for efficient water sampling and data collection. Our technology enables accurate measurement, remote monitoring, and reporting of water quality, reducing costs by 30%.</p>
            <p>We use satellite imaging for validated mapping and predictions of water quality changes. Our solutions enhance carbon trapping in water bodies and offer innovative financing through carbon credits. Our robotic devices also help remove plastic waste, biomass, and organic matter, promoting water ecosystem sustainability.</p>
            <div className=' grid grid-cols-2 gap-6 '>
            <div>
                <span className='flex items-center text-xl gap-2 text-gray-600'>
                <i className="fa-regular fa-circle-right text-sky-600 text-2xl"></i>
                <h3>Water Monitizer</h3>
                </span>
            </div>
            <div>
                <span className='flex items-center text-xl gap-2 text-gray-600'>
                <i className="fa-regular fa-circle-right text-sky-600 text-2xl"></i>
                <h3>Prown Feeding</h3>
                </span>
            </div>
            <div>
                <span className='flex items-center text-xl gap-2 text-gray-600'>
                <i className="fa-regular fa-circle-right text-sky-600 text-2xl"></i>
                <h3>Live Weather</h3>
                </span>
            </div>
            <div>
                <span className='flex items-center text-xl gap-2 text-gray-600'>
                <i className="fa-regular fa-circle-right text-sky-600 text-2xl"></i>
                <h3>Automatic monitoring</h3>
                </span>
            </div>
            </div>
            {/* <button className='bg-sky-600 text-white p-4 px-8 rounded-md outline-none'>Learn More <i class="fa-solid fa-arrow-right"></i></button> */}
        </div>
        </div>
    </div>
  )
}
