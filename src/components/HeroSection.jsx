import React from 'react'
import './../assets/css/Home.css'

export default function HeroSection() {
  return (
    <div className='max-h-max'>
        <img src="img/banner-1.jpg" alt="banner" className='w-full'/>
        <div className="text-overlay text-center">
          <h1 className=" text-3xl font-bold">Aqua fish farming for the aqua fish lover</h1>
          <p className=" text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel neque nec nisi tincidunt ornare. Nulla facilisi. Donec sed facilisis dui. Nulla facilisi.</p>
        </div>
    </div>
  )
}
