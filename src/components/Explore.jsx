import React from 'react'

function Explore() {
  return (
    <section className='min-h-[400px] mb-16 lg:mb-4'>
      <div className="container max-auto">
        <div className='h-full bg-explore bg-no-repeat bg-cover p-14 flex flex-col items-start justify-center'>
          <h2 className='text-3xl font-semibold mb-8' data-aos='fade-right' data-aos-offset='1000'> Explore Product Now</h2>
          <p 
            
            className='max-w-xs mb-12'
            data-aos='fade-right'data-aos-delay='1000' 
          >Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Provident nesciunt beatae impedit sint excepturi quibusdam 
             </p>
        </div>
        <form className='flex flex-col w-full space-y-4 gap-x-4 lg:flex-row lg:space-y-0'
                      data-aos='fade-out'
                      data-aos-delay='500'
          
        >
          <input  type="text"  placeholder='You Email' className=
          'bg-gradient-to-t from-[#341D38] to-[#271223] h-12 px-4 outline-none rounded-md' />
          <button className='btn'>Start</button>
        </form>
      </div>
    </section>
  )
}

export default Explore