import React from 'react'
import  Logo from '../assets/img/logo.svg';
import Nav from './Nav';
import {HiMenu} from 'react-icons/hi'
function Header({setNavMobile,navMobile}) {
  return (
    <header className='py-6'
    
    data-aos='fade-down'
    data-aos-duration='2000'
    data-aos-delay='900'>
        <div className="container max-auto">
             <div className='flex items-center justify-between container max-auto'>
              <a href="#">
                <img className='lg:h-[30px] h-[20px]' src={Logo} alt="" />
                </a>
                <Nav />  
                <HiMenu onClick={() => setNavMobile(!navMobile)} className='lg:hidden text-2xl text-white cursor-pointer' />
              </div>    
            
         </div>    
    </header>
  )
}

export default Header