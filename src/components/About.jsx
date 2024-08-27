import React from 'react';

export default function About() {
  return (
    <div className='my-10 pt-31'>
<div className='flex flex-col sm:flex-row lg:flex-row max-w-full sm:max-w-[640px] md:max-w-[960px] lg:max-w-[1260px] mx-auto gap-4 sm:gap-6 md:gap-8 lg:gap-8'>
<div className='w-full md:w-1/2 shadow-xl p-0'>
          <img src="img/img/new_banner.jpg" alt="..." className='w-full h-full rounded-md shadow-lg'/>
        </div>
        <div className='w-full md:w-1/2 space-y-6'>
          <h3 className='text-sky-700 text-xl font-bold'>About Us ~</h3>
          <h2 className='text-4xl font-bold text-blue-950'>Ensuring Clean Water for a Sustainable Future</h2>
          <p>Aspire to be market leader in water body management in the direction Of aquafarming by Focusing on employment generation & creation Of wealth by leveraging developed technology utilizing surface water reserve.</p>
          <p>Develop sustainable technology and processes for aquaculture farming by solving critical water issue and disease issues Which will benefit traditional to institutional farming.</p>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 ' style={{marginLeft:"0px"}}>
            <div>
              <span className='flex items-center text-xl' style={{width:"fit-content", margin:"intial"}}>
                <i className="fa-regular fa-circle-right text-sky-600 text-xl"></i>
                <h3 className='ml-2'>TEAM</h3>
              </span>
              <p className='text-sm text-gray-600'>Domain expert team of enthusiast professionals</p>
            </div>
            <div>
              <span className='flex items-center text-xl' style={{width:"fit-content", margin:"intial"}}>
                <i className="fa-regular fa-circle-right text-sky-600 text-xl"></i>
                <h3 className='ml-2'>SOLUTION</h3>
              </span>
              <p className='text-sm text-gray-600'>Offers turnkey solutions</p>
            </div>
            <div>
              <span className='flex items-center text-xl gap-2' style={{width:"fit-content", margin:"intial"}}>
                <i className="fa-regular fa-circle-right text-sky-600 text-2xl"></i>
                <h3 className='ml-2'>R&D</h3>
              </span>
              <p className='text-sm text-gray-600'>Groundbreaking research in multidisciplinary fields</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
