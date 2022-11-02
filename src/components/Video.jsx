import React, { useState } from 'react'

import ModalVideo from 'react-modal-video'
// import '../modalVideo.scss'; 

import {BsPlayCircleFill} from 'react-icons/bs';
function Video() {
 const [isOpen,setIsOpen] = useState(false);
    return (
    <div data-aos='fade-left' className=' py-6  bg-purple-600'>
           <div className="container max-auto">
            <div className='flex flex-col lg:flex-row justify-center lg:items-center text-center lg:justify-around'>
                <h3 className='text-2xl font-semibold mb-8 lg-mb-0
                '>Awesome Experiece With VR world</h3>
                
            <div  data-aos='fade-right' className='bg-videoBg bg-no-repeat bg-cover
             w-[270px] h-[180px] flex items-center justify-center '>
                <div className='cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
                    <BsPlayCircleFill className=' text-4xl cursor-pointer text-white/80 hover:scale-100  hover:text-white transition ease-out' />
                </div>
            </div>
            
            </div>
             
            </div> 
    </div>
    )
}

export default Video