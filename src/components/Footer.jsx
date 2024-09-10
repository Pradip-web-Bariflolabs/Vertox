import './../assets/css/Footer.css';

export default function Footer() {
  return (
    <div className='bg-blue-800 pt-14 pb-6 px-4'>
      <div className='w-full md:w-[1280px] mx-10px grid grid-cols-1 md:grid-cols-3 gap-8'>
        <div className='w-full'>
          <img src="/brand.png" alt="logo" className='w-20' />
          <h3 className='text-md text-white font-bold mt-4'>
            VertoX Labs provides cutting-edge robotic and data solutions to enhance water quality management and sustainability.
          </h3>
          <div className='flex gap-3 mt-8 text-lg'>
            <span className='bg-white p-2 px-3 text-xl text-sky-600 rounded-md hover:bg-sky-600 hover:text-white cursor-pointer transition delay-150 ease-in-out'>
              <i className="fa-brands fa-facebook"></i>
            </span>
            <span className='bg-white p-2 px-3 text-xl text-sky-600 rounded-md hover:bg-sky-600 hover:text-white cursor-pointer transition delay-150 ease-in-out'>
              <i className="fa-brands fa-twitter"></i>
            </span>
            <span className='bg-white p-2 px-3 text-xl text-sky-600 rounded-md hover:bg-sky-600 hover:text-white cursor-pointer transition delay-150 ease-in-out'>
              <i className="fa-brands fa-linkedin"></i>
            </span>
            <span className='bg-white p-2 px-3 text-xl text-sky-600 rounded-md hover:bg-sky-600 hover:text-white cursor-pointer transition delay-150 ease-in-out'>
              <i className="fa-brands fa-youtube"></i>
            </span>
          </div>
        </div>
        <div className='w-full text-white'>
          <h2 className='text-xl font-bold mb-6 half-underline'>Our Services</h2>
          <ul className='flex flex-col gap-4 '>
            <li className='ml-0'>Rejuvenation Of Biodiversity</li>
            <li className='ml-0'>Carbon Sequestration</li>
            <li className='ml-0'>Increased Fisheries</li>
            <li className='ml-0'>Better Livelihood</li>
          </ul>
        </div>
        <div className='space-y-3 text-white ml-0'>
          <h2 className='text-xl font-bold mb-6 half-underline'>Contact Info</h2>
          <span className='flex gap-3' style={{width:"fit-content", marginLeft:"0px"}}>
            <i className="fa-solid fa-location-dot text-lg"></i>
            <p>
              304A, TBI #2, KIIT CAMPUS #11
              PATIA, BHUBANESWAR
              ODISHA – 751024
            </p>
          </span>
          <span className='flex gap-3 ' style={{width:"fit-content", marginLeft:"0px"}}>
            <i className="fa-solid fa-envelope-open-text"></i>
            <p>admin@vertoxlabs.com</p>
          </span>
          <span className='flex gap-3'style={{width:"fit-content", marginLeft:"0px"}}>
            <i className="fa-solid fa-phone-volume"></i>
            <p>+91 9777171033</p>
          </span>
          <span className='flex gap-3'style={{width:"fit-content", marginLeft:"0px"}}>
            <i className="fa-solid fa-clock"></i>
            <p>Office: 09:00 am - 10.00 pm</p>
          </span>
        </div>
      </div>
      <div className='text-white text-center my-4 mt-14'>
        <p className='font-semibold mx-auto'>
          Copyright &copy; 2024, Vertoxlabs All Rights Reserved
        </p>
      </div>
    </div>
  );
}
