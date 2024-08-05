import React from 'react'
import About from '../components/About'
import BestService from '../components/BestService'
import DedicatedTeam from '../components/DedicatedTeam'
import Articles from '../components/Articles'
import Testimonial from '../components/Testimonial'
import Footer from '../components/Footer'
import Form from '../components/Form'

export default function Home() {
  return (
    <div id="home">
      <div className="relative w-full" style={{ width: "100vw", height: "75vh" }}>
      <img 
        src="img/chilika-lake1.jpg" 
        alt="banner" 
        className="w-full h-full object-cover"
        style={{ width: "100vw", height: "75vh" }}
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20">
        <p className="text-white text-2xl font-serif text-left ">
          "Transforming India's 
          Water Bodies through 
          Innovative Robotics and Sustainable Solutions"
        </p>
      </div>
    </div>
      <div id="about"><About /></div>
      <div id="services"><BestService /></div>
      <div id="dedicated-team"><DedicatedTeam /></div>
      <div id="articles"><Articles /></div>
      <div id="testimonial"><Testimonial /></div>
      <div id="contact"><Form/></div>
      <div ><Footer /></div>
    </div>
  )
}
