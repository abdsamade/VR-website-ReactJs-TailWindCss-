import React from 'react'

function Nav() {
  return (
    <nav   className='lg:flex hidden'>
      <ul className='flex items-center space-x-12 font-secondary'>
        <li className='nav-link'><a href="#">Home</a></li>
        <li className='nav-link'><a href="#">Company</a></li>
        <li className='nav-link'><a href="#">Features</a></li>
        <li className='nav-link'><a href="#" className='btn'>Sign up</a></li>
      </ul>
    </nav>
  )
}

export default Nav