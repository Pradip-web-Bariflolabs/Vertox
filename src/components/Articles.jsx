import React, { useState } from 'react';
import './../assets/css/NewsCard.css';

export default function Articles() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const cards = [
        {
            img: "img/aeration device.png",
            title: "AERATION SYSTEM",
            description: "Our patented sediment aeration device diffuses air at the sediment level where the majority of waste and aquatic species are, helping to maintain dissolved oxygen at the sediment boundary layer."
        },
        {
            img: "img/Remote sensing.jpg",
            title: "REMOTE SENSING",
            description: "We use Digital Twin technology, integrating remote sensing and sensor-based water quality monitoring."
        },
        {
            img: "img/Monitoring device isometric view.png",
            title: "MONITORING SYSTEM",
            description: "An AI-based system integrated with a Water Sampling Unit and various sensors such as DO, Ammonia, nitrate, Nitrite, ORP, pH, temperature at different places in the water body."
        },
      
        // {
        //     img: "Weed harvestor.png",
        //     title: "WEED HARVESTOR",
        //     description: "An aquatic weed harvester is designed for inland watercourse management to cut and harvest underwater weeds, reeds, and other aquatic plant life."
        // },
      
    ];

    const handleSlide = (direction) => {
        if (direction === 'left') {
            setCurrentIndex((prevIndex) => (prevIndex === 0 ? cards.length - 3 : prevIndex - 1));
        } else {
            setCurrentIndex((prevIndex) => (prevIndex === cards.length - 3 ? 0 : prevIndex + 1));
        }
    };

    return (
        <div className='bg-gray-50'>
            <div className='w-full md:w-[1280px] mx-auto text-center py-20'>
                <h3 className='text-lg text-sky-700 font-bold'>~~ Our Products ~~</h3>
                <h2 className='text-4xl font-bold mt-5 text-blue-950'>Our Latest Top Products</h2>
                <div className='relative mt-14'>
                    <div className='overflow-hidden'>
                        <div
                            className='flex transition-transform duration-500 ease-in-out'
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }} // Slide by 100% to move one card width
                        >
                            {cards.map((card, index) => (
                                <div className='w-[33.33%] flex-shrink-0 bg-white rounded-md p-4 shadow-md news-card' key={index}>
                                    <div className='relative news-img'>
                                        <img src={card.img} alt={card.title} style={{ width: "100%", height: "100%" }} />
                                        <span className='p-2 px-4 bg-sky-700 rounded-full text-white absolute left-2 bottom-5'>{card.title}</span>
                                    </div>
                                    <div className='p-8 pt-10 space-y-4'>
                                        <h3 className='text-2xl text-blue-950 font-semibold'>{card.title}</h3>
                                        <p className='text-sm text-gray-700'>{card.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <button
                        className='absolute left-0 top-1/2 transform -translate-y-1/2 bg-sky-600 text-white p-4 rounded-full text-lg font-semibold hover:bg-sky-500'
                        onClick={() => handleSlide('left')}
                    >
                        <i className="fa-solid fa-arrow-left"></i>
                    </button>
                    <button
                        className='absolute right-0 top-1/2 transform -translate-y-1/2 bg-sky-600 text-white p-4 rounded-full text-lg font-semibold hover:bg-sky-500'
                        onClick={() => handleSlide('right')}
                    >
                        <i className="fa-solid fa-arrow-right"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}
