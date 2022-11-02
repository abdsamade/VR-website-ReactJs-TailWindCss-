import React from 'react'
import TestimonialSlider from './TestimonialSlider'

function Tesimonial() {
  return (
    <section className='mb-60 lg:mb-45 '>
      <div className='container max-auto'>
        <div className=' bg-purple-900 max-h-[400px] p-12 
            rounded-lg' >
          <div className='text-center'>
            <h2 data-aos-delay='1000' data-aos='zoom-out' className='text-2xl lg:text-4xl mb-4 font-semibold font-secondary '>What Out Clients Say</h2>
            <p data-aos-delay='500' data-aos='zoom-in' className='max-w-2xl mx-auto mb-12 lg:mb-24 '>Lorem ipsum dolor sit amet consectetur adipisicing
               elit. Commodi, impedit.</p>
          </div>
          <div className='' data-aos-delay='1000' data-aos='zoom-in'>
            <TestimonialSlider />
          </div>
        </div>
      </div>
    </section>
    )
}

export default Tesimonial