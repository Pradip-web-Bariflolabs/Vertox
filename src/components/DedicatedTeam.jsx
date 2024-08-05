import React from 'react'
import './../assets/css/Team.css'

export default function DedicatedTeam() {
  return (
    <div className='w-full md:w-[1280px] mx-auto text-center py-20'>
      <h3 className='text-lg text-sky-700 font-bold'>~~ Our Best Dedicated Team ~~</h3>
      <h2 className='text-4xl font-bold mt-5 text-blue-950'>Aqua Farming Starts with Us</h2>
      <p className='w-1/2 mx-auto mt-5'>Expert Solutions for Sustainable Water Management.
      Transforming Aquaculture with Innovative Technology.</p>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-14'>
        <div className='relative overflow-hidden team-card cursor-pointer'>
            <img src="img/CEO.jpeg" alt="CEOimg" style={{height:"100%"}} />
            <div className='absolute bottom-0 p-8 card-overlay space-y-4 text-left' style={{background:"rgba(25, 124, 199, 0.9)"}}>
                <h2 className='text-4xl font-semibold text-blue-950'>SALOMI DABRAL </h2>
                <p>I am a sustainability professional with more than 10 years of experience domain of urban water-sanitation issues in the area of community-led developments, effectively integrating with Environment Health, Infrastructure and Education Pillars. </p>
                <p><span>Phone :</span>+91 9599530188</p>
                <p><span>email :</span>care@bariflolabs.com</p>
            </div>
        </div>
        <div className='relative overflow-hidden team-card cursor-pointer'>
            <img src="img/CTO.jpeg" alt="CTOimg" style={{height:"100%"}} />
            <div className='absolute bottom-0 p-8 card-overlay space-y-4 text-left' style={{background:"rgba(25, 124, 199, 0.9)"}}>
                <h2 className='text-4xl font-semibold text-blue-950'>MRUTYUNJAYA SAHU </h2>
                <p>Expertise in Prototype to product development. 5 years experience of Team building, business development, New market creation.</p>
                <p><span>Phone :</span>+91 7328021033</p>
                <p><span>email :</span>mrityunjay.sahu@bariflolabs.com</p>
            </div>
        </div>
        <div className='relative overflow-hidden team-card cursor-pointer'>
            <img src="img/coo.jpeg" alt="agent" style={{height:"100%"}} />
            <div className='absolute bottom-0 p-8 card-overlay space-y-4 text-left' style={{background:"rgba(25, 124, 199, 0.9)"}}>
                <h2 className='text-4xl font-semibold text-blue-950'>SHEETAL PRIYADARSHINI </h2>
                <p> HR professional basically involved in technical & non- technical recruitment, inhouse operations, payroll processing with compensation & benefits. In the last 4 years I am associated with Bariflo Cybernetics Private Limited where I am implementing HR strategies that align with organizational.</p>
                <p><span>Phone :</span>+91 8249855536</p>
                <p><span>email :</span>sheetal@bariflolabs.com</p>
            </div>
        </div>
      </div>
    </div>
  )
}
