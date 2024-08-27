import React from 'react';
import './../assets/css/Team.css';

export default function DedicatedTeam() {
  return (
    <div className='w-full mx-auto text-center py-10 px-4'>
      <h3 className='text-lg text-sky-700 font-bold'>~~ Our Best Dedicated Team ~~</h3>
      <h2 className='text-4xl font-bold mt-5 text-blue-950'>Mission is about people, not projects</h2>
      <p className='w-full md:w-1/2 mx-auto mt-5'>Expert Solutions for Sustainable Water Management. Transforming Aquaculture with Innovative Technology.</p>
      <div className='w-full md:w-[900px] sm:w-auto mx-auto text-center py-20 '>
      <div className='grid  md:grid-cols-2 sm:gr-cols-2: gap-8 mt-14'>
        <div className='relative overflow-hidden team-card cursor-pointer'>
          <img src="img/img/CEO.jpeg" alt="CEOimg" className='w-full h-auto object-cover' />
          <div className='absolute bottom-0 p-8 card-overlay space-y-4 text-left' style={{ background: "rgba(25, 124, 199, 0.9)" }}>
            <h2 className='text-4xl font-semibold text-blue-950'>SALOMI DABRAL</h2>
            <p>I am a sustainability professional with more than 10 years of experience in the domain of urban water-sanitation issues in the area of community-led developments, effectively integrating with Environment Health, Infrastructure, and Education Pillars.</p>
            <p><span>Phone:</span> +91 9599530188</p>
            <p><span>Email:</span> salomi@vertoxlabs.com</p>
          </div>
        </div>
        {/* <div className='relative overflow-hidden team-card cursor-pointer'>
          <img src="img/CTO.jpeg" alt="CTOimg" className='w-full h-auto object-cover' />
          <div className='absolute bottom-0 p-8 card-overlay space-y-4 text-left' style={{ background: "rgba(25, 124, 199, 0.9)" }}>
            <h2 className='text-4xl font-semibold text-blue-950'>MRUTYUNJAYA SAHU</h2>
            <p>Expertise in Prototype to product development. 5 years of experience in Team building, business development, and new market creation.</p>
            <p><span>Phone:</span> +91 7328021033</p>
            <p><span>Email:</span> mrityunjay.sahu@bariflolabs.com</p>
          </div>
        </div> */}
         <div className='relative overflow-hidden team-card cursor-pointer'>
          <img src="img/img/coo.jpeg" alt="CEOimg" className='w-full h-auto object-cover' style={{height:"430px", width:"500px"}} />
          <div className='absolute bottom-0 p-8 card-overlay space-y-4 text-left' style={{ background: "rgba(25, 124, 199, 0.9)" }}>
            <h2 className='text-4xl font-semibold text-blue-950'>SALOMI DABRAL</h2>
            <p>I am a sustainability professional with more than 10 years of experience in the domain of urban water-sanitation issues in the area of community-led developments, effectively integrating with Environment Health, Infrastructure, and Education Pillars.</p>
            <p><span>Phone:</span> +91 9599530188</p>
            <p><span>Email:</span> salomi@vertoxlabs.com</p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
