import React from 'react';
import { BestServiceData } from '../bestServicedata';

export default function BestService() {
  return (
    <div className='w-full mx-auto text-center py-20 px-4'>
      <h3 className='text-lg text-sky-700 font-bold'>~~ How we works ~~</h3>
      <h2 className='text-4xl font-bold mt-5 text-blue-950'>WaterBody Rejuvenation Starts with Us</h2>
      <p className='w-full md:w-1/2 mx-auto mt-5'>Transforming Water Management with Advanced Robotics and Data Analytics</p>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-14'>
        {BestServiceData.map((item, index) => (
          <div 
            key={index} 
            className={`w-full rounded-md shadow-lg flex flex-col ${index === 0 || index === 2 || index === 3 || index === 5 ? 'md:flex-col-reverse' : 'md:flex-col'}`}
          >
            <img 
              src={item.img} 
              alt={item.title} 
              className={`w-full h-64 object-cover ${index === 0 || index === 2 || index === 3 || index === 5 ? 'rounded-b-md' : 'rounded-t-md'}`}
            />
            <div className='p-4 flex flex-col gap-4'>
              <h3 className='text-xl font-bold text-blue-950 mt-4'>{item.title}</h3>
              <p>{item.desc}</p> 
            </div>
          </div>
        ))}
      </div>
      <div className='flex justify-center items-center '>
        <img 
          src="img/solution design-01.png" 
          alt="image" 
          className='object-contain max-w-full h-auto py-5' 
          style={{  width:"80%"}} 
        />
      </div>
    </div>
  );
}
