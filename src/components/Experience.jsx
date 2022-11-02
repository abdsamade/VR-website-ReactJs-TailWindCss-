import React from 'react'

import Img1 from '../assets/img/exp-img1.png';
import Img2 from '../assets/img/exp-img2.png';

function Experience() {
  return (
    <section className='container max-auto mb-12 lg:mb-24'>
        <div className='flex flex-col min-h-[480px] lg:space-x-20 lg:flex-row'>
            <div data-aos='fade-left' className='flex-1 flex space-x-6 items-center lg:space-x-12'>
                {/* images */}
                <div className='self-start'>
                    <img src={Img1} alt="" />
                </div>
                <div className='self-end'>
                    <img src={Img2}  alt="" />
                </div>
            </div>
            <div data-aos='fade-right' className='flex-1 flex flex-col items-start justify-center mt-6 lg:mt-0 '>
               <h2 className='text-3xl font-bold mb-6'>New Experience In Vertual Mode</h2>
               <p className='font-secondary mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 At sapiente nihil consectetur voluptas repellat quam quae doloribus dicta sit id.</p>
                <button href="#" className='btn '>Get It now</button>
                </div>
        </div>
    </section>
  )
}

export default Experience