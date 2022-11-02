import React from 'react'


import Img from '../assets/img/banner-img.png';
import Users from './Users';

function Banner() {
  return (
    <section className='min-h-[600px] pt-24 pb-12  lg:pt-3 8 text-center lg:pb-0 relative lg:text-left'>
        <div className="container mx-auto ">
            <div className='flex flex-col lg:flex-row items-center'>
                <div>
                    <h1 data-aos='fade-down' className='text-3xl font-bold mb-8 lg:text-5xl lg:leading-snug'>Let's Explore <br /> Three Dimentional Visually</h1>
                    <p data-aos='fade-left' className='font-secondary mb-12 max-w-[440px] mx-auto lg:mx-0'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet, minus.</p>
                    {/* btn */}
                    <div data-aos='fade-left' className='flex items-center justify-around 
                                    max-w-[320px] lg:max-w-none mb-12 lg-space-x-8 mx-auto lg:mx-left space-x-2
                                    lg:justify-start'>
                        <button className='btn'>Get It</button>
                        <a href="#" className='border-b-2 border-transparent hover:border-white transition ease-in-out'>Explore More</a>
                    </div>
                <Users />
                </div>
                <div>
                    <img data-aos='fade-right' className='lg:w-[500px] lg:ml-[20px]'  src={Img} alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Banner