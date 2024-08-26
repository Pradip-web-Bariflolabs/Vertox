import React from 'react'

export default function Testimonial() {
  return (
  <section className="relative isolate overflow-hidden bg-white px-6  pt-10 pb-32 lg:px-8">
    <div className='mx-auto text-center py-5'>
    <h3 className='text-lg text-sky-700 font-bold'>~~ MENTOR INCUBATOR ~~</h3>
    <div className='flex justify-center items-center gap-4 flex-wrap'>
      <div className='flex-shrink-0'>
        <img src="img/img/logo/86b3e7c5-7e43-4ee9-8ef1-6882c372da5a.jfif" alt="" className='w-24 h-24 object-contain' />
      </div>
      <div className='flex-shrink-0'>
        <img src="img/img/logo/4759c8b9-e628-4ca8-88aa-0ca48ee03773.jfif" alt="" className='w-24 h-24 object-contain' />
      </div>
      <div className='flex-shrink-0'>
        <img src="img/img/logo/20yearsLogoVillgro-2.png" alt="" className='w-24 h-24 object-contain' />
      </div>
      <div className='flex-shrink-0'>
        <img src="img/img/logo/channels4_profile.jpg" alt="" className='w-24 h-24 object-contain' />
      </div>
      <div className='flex-shrink-0'>
        <img src="img/img/logo/ciba.png" alt="" className='w-24 h-24 object-contain' />
      </div>
      <div className='flex-shrink-0'>
        <img src="img/img/logo/DLabs_Logo_Website.png" alt="" className='w-24 h-24 object-contain' />
      </div>
      <div className='flex-shrink-0'>
        <img src="img/img/logo/download.jfif" alt="" className='w-24 h-24 object-contain' />
      </div>
      <div className='flex-shrink-0'>
        <img src="img/img/logo/Logo-500x.jpg" alt="" className='w-24 h-24 object-contain' />
      </div>
      <div className='flex-shrink-0'>
        <img src="img/img/logo/Logo.jpg" alt="" className='w-24 h-24 object-contain' />
      </div>
      <div className='flex-shrink-0'>
        <img src="img/img/logo/MEITY-STARTUP-_Final-File_27092019-768x614.png" alt="" className='w-24 h-24 object-contain' />
      </div>
      <div className='flex-shrink-0'>
        <img src="img/img/logo/OIP.jfif" alt="" className='w-24 h-24 object-contain' />
      </div>
      <div className='flex-shrink-0'>
        <img src="img/img/logo/Orissajobsorg.gif" alt="" className='w-24 h-24 object-contain' />
      </div>
      <div className='flex-shrink-0'>
        <img src="img/img/logo/R (1).png" alt="" className='w-24 h-24 object-contain' />
      </div>
      <div className='flex-shrink-0'>
        <img src="img/img/logo/R (2).png" alt="" className='w-24 h-24 object-contain' />
      </div>
      <div className='flex-shrink-0'>
        <img src="img/img/logo/R.png" alt="" className='w-24 h-24 object-contain' />
      </div>
      <div className='flex-shrink-0'>
        <img src="img/img/logo/startup-portal-new-logo.png" alt="" className='w-24 h-24 object-contain' />
      </div>
      <div className='flex-shrink-0'>
        <img src="img/img/logo/t hub logo.png" alt="" className='w-24 h-24 object-contain' />
      </div>
    </div>
</div>

  <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
  <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
  <div className="mx-auto max-w-2xl lg:max-w-4xl mt-32">
    {/* <img className="mx-auto h-12" src="https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg" alt /> */}
    <figure className="mt-10">
      <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
        <p>"We’re here to transform your water quality management with our advanced robotic technology and data solutions. Our innovative USVs and real-time analytics help you monitor, manage, and improve water quality efficiently, reducing costs and enhancing decision-making. Thank you for choosing us to support your environmental goals."</p>
      </blockquote>
      <figcaption className="mt-10">
        <img className="mx-auto h-10 w-10 rounded-full" src="img/img/CEO.jpeg" alt />
        <div className="mt-4 flex items-center justify-center space-x-3 text-base">
          <div className="font-semibold text-gray-900">SALOMI DABRAL </div>
          <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
            <circle cx={1} cy={1} r={1} />
          </svg>
          <div className="text-gray-600">CEO of Vertox</div>
        </div>
      </figcaption>
    </figure>
  </div>
</section>


  )
}
