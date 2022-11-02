import React from 'react'

import {IoClose} from 'react-icons/io5'
function navMobile({setNavMobile}) {
  return (
<nav className='lg:hidden  bg-purple-400  h-full'>
    <IoClose onClick={() => setNavMobile(false)} className='text-3xl absolute left-4 top-6 cursor-pointer' />
    <ul className='flex flex-col items-center
      justify-center space-y-8 h-full  font-secondary'>
        <li className='nav-link'><a href="#">Home</a></li>
        <li className='nav-link'><a href="#">Company</a></li>
        <li className='nav-link'><a href="#">Features</a></li>
        <li className='nav-link'><a href="#" className='btn'>Sign up</a></li>
      </ul>
</nav>


    )
}

export default navMobile