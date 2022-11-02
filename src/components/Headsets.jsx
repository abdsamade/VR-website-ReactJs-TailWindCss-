import React from 'react'


// import images
import Headset1 from '../assets/img/headset-1.png';
import Headset2 from '../assets/img/headset-2.png';
import Headset3 from '../assets/img/headset-3.png';
import Headset4 from '../assets/img/headset-4.png';

function Headsets() {
  return (
    <section className='py-12 lg:py-24 '>
        <div className="container max-auto">
            <h2 className='text-3xl font-bold mb-6'>
                Mixed Reality Headsets
            </h2>
            <div  className='grid gap-y-4 lg:grid-cols-2 lg:gap-9  items-center justify-center '>
                <div data-aos-delay='2000' data-aos='zoom-in' className='relative'>
                    <img src={Headset1} alt="" />
                    <div className='absolute bottom-0 bg-white/60 
                    backdrop-blur-sm max-w-[300px]  min-h-[150px] p-6'>
                    <h4 className='font-semibold text-xl mb-2'>Metaverse</h4>
                    <p >Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Provident exercitationem natus in porro nemo amet!
                    </p>
                    </div>
                </div>
                <div data-aos-delay='1000' data-aos='zoom-out' className='relative'>
                    <img src={Headset2} alt="" />
                    <div className='absolute bottom-0 bg-white/60 
                    backdrop-blur-sm max-w-[300px]   min-h-[150px] p-6'>
                    <h4 className='font-semibold text-xl mb-2'>Metaverse</h4>
                    <p >Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Provident exercitationem natus in porro nemo amet!
                    </p>
                    </div>
                </div>
                <div data-aos-delay='1500' data-aos='zoom-in' className='relative'>
                    <img src={Headset3} alt="" />
                    <div className='absolute bottom-0 bg-white/60 
                    backdrop-blur-sm max-w-[300px]  min-h-[150px] p-6'>
                    <h4 className='font-semibold text-xl mb-2'>Metaverse</h4>
                    <p >Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Provident exercitationem natus in porro nemo amet!
                    </p>
                    </div>
                </div>
                <div className='relative' data-aos-delay='2000' data-aos='zoom-out'>
                    <img src={Headset4} alt="" />
                    <div className='absolute bottom-0 bg-white/60 
                    backdrop-blur-sm max-w-[300px]  min-h-[150px] p-6'>
                    <h4 className='font-semibold text-xl mb-2'>Metaverse</h4>
                    <p >Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Provident exercitationem natus in porro nemo amet!
                    </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Headsets