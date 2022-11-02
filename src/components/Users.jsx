import React from 'react'

import Avatar1 from '../assets/img/avt1.png'
import Avatar2 from '../assets/img/avt2.png'
import Avatar3 from '../assets/img/avt3.png'
import Avatar4 from '../assets/img/avt4.png'

import {BsFillCircleFill} from 'react-icons/bs'
 function Users() {
  return (
    <div className='flex flex-col justify-center items-center lg:flex-row space-x-5 lg:space-y-0 lg:justify-start'>
        <div className='flex flex-row -space-x-2 pb-2'>
            <div>
                <img className='max-w-[40px] '  src={Avatar1} alt="" />
            </div>
            <div>
                <img className='max-w-[40px] ' src={Avatar2} alt="" />
            </div>
            <div>
                <img className='max-w-[40px] ' src={Avatar3} alt="" />
            </div>
            <div>
                <img className='max-w-[40px] ' src={Avatar4} alt="" />
            </div>
        </div>
        <div className='flex flex-row items-center space-x-2 font-secondary font-medium'>
            <BsFillCircleFill className='text-xs text-green-500 animate-pulse'/>
            <div>500K people online</div>
        </div>
    </div>
  )
}

export default Users