import React from 'react'

import {Swiper,SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import {Pagination} from 'swiper';
import {slider} from '../data';

function TestimonialSlider() {
  return (
    <Swiper breakpoints={{
        320: {
            slidesPerView : 1,
            spaceBetween : 15
        },
        768: {
            slidesPerView : 2,
            spaceBetween:20
        },
        1024: {
            slidesPerView : 3,
            spaceBetween:24
        }
    }}>
        {slider.map((slide,index) => {
            
            return (
                <SwiperSlide className='rounded-lg p-4 lg:p-4
                 min-h-[240px] space-y-10 text-15px bg-gradient-to-t from-[#692169] via-[#6e1f64] to-[#8b248b]'>
                     <p className=''>
                        {slide.message}
                     </p>
                     <div className='flex flex-col gap-x-4 md:flex-row lg:items-center lg:bottom-1'>
                        <div className='w-14'>
                            <img className='mb-3 md:mb-0' src={slide.image} alt="" />
                        </div>
                        <div className='lg:mb-0'>
                            <div className='font-medium text-base'>{slide.name}</div>
                             <div className='font-medium   text-black'>{slide.email}</div>
                        </div>
                     </div>
                </SwiperSlide>
            )    
        })}
    </Swiper>
  )
}

export default TestimonialSlider