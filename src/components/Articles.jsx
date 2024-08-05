import React from 'react'
import './../assets/css/NewsCard.css'

export default function Articles() {
    return (
        <div className='bg-gray-50'>
            <div className='w-full md:w-[1280px] mx-auto text-center py-20 '>
                <h3 className='text-lg text-sky-700 font-bold'>~~ News & Blogs ~~</h3>
                <h2 className='text-4xl font-bold mt-5 text-blue-950'>Our Latest Top Activities</h2>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-14'>
                    <div className='bg-white rounded-md p-4 shadow-md news-card overflow-hidden'>
                        <div className='relative news-img'>
                            <img src="img/post.9.jpeg" alt="monittoring image"  style={{width:"100%" ,height:"100%"}} />
                            <span className='p-2 px-4 bg-sky-700 rounded-full text-white absolute left-2 bottom-5'>Automatic monitoring</span>
                            {/* <span className='p-2 py-4 w-14 text-white flex flex-wrap absolute -bottom-8 right-3 bg-blue-800'>23 Aug</span> */}
                        </div>
                        <div className='p-8 pt-10 space-y-4'>
                            <h3 className='text-2xl text-blue-950 font-semibold'>Deploying Advanced Robotics</h3>
                            <p className='text-sm text-gray-700'>Implementing cutting-edge unmanned surface vehicles for real-time monitoring of water quality.</p>
                            {/* <p className='text-sky-700 font-semibold'>Read More <i className="fa-solid fa-arrow-right"></i></p> */}
                        </div>
                    </div>
                    <div className='bg-white rounded-md p-4 shadow-md news-card overflow-hidden'>
                        <div className='relative news-img'>
                            <img src="img/banner-3.jpg" alt="..."  style={{width:"100%" ,height:"100%"}} />
                            <span className='p-2 px-4 bg-sky-700 rounded-full text-white absolute left-2 bottom-5'>Satellite Imaging</span>
                        {/* <span className='p-2 py-4 w-14 text-white flex flex-wrap absolute -bottom-8 right-3 bg-blue-800'>23 Aug</span> */}
                        </div>
                        <div className='p-8 pt-10 space-y-4'>
                            <h3 className='text-2xl text-blue-950 font-semibold'>Utilizing Satellite Imaging</h3>
                            <p className='text-sm text-gray-700'>Leveraging satellite-based imaging and data analytics for accurate environmental assessments and predictions.</p>
                            {/* <p className='text-sky-700 font-semibold'>Read More <i className="fa-solid fa-arrow-right"></i></p> */}
                        </div>
                    </div>
                    <div className='bg-white rounded-md p-4 shadow-md news-card overflow-hidden'>
                        <div className='relative news-img'>
                            <img src="img/POST-8.jpeg" alt="..." style={{width:"100%" ,height:"100%"}} />
                            <span className='p-2 px-4 bg-sky-700 rounded-full text-white absolute left-2 bottom-5'>Lower Cost</span>
                            {/* <span className='p-2 py-4 w-14 text-white flex flex-wrap absolute -bottom-8 right-3 bg-blue-800'>23 Aug</span> */}
                        </div>
                        <div className='p-8 pt-10 space-y-4'>
                            <h3 className='text-2xl text-blue-950 font-semibold'>Innovative Cost Reduction</h3>
                            <p className='text-sm text-gray-700'> Implementing solutions to lower operational costs while enhancing water body conservation and management.</p>
                            {/* <p className='text-sky-700 font-semibold'>Read More <i className="fa-solid fa-arrow-right"></i></p> */}
                        </div>
                    </div>
                </div>
                {/* <button className='bg-sky-600 text-white p-4 px-5 mt-10 rounded-md text-lg font-semibold hover:bg-sky-500'>See More <i className="fa-solid fa-arrow-right"></i></button> */}
            </div>
        </div>
    )
}
