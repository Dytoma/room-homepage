import React, { useState } from 'react';
import { Fade } from "react-awesome-reveal";
import Logo from './images/logo.svg';
import Hamburger from './images/icon-hamburger.svg';
import IconClose from './images/icon-close.svg';

const activeState = 'flex animation space-x-16 items-center justify-center md:text-white fixed md:static h-[112px] left-0 right-0 md:h-fit bg-white md:bg-inherit pt-6 md:pt-0';
const unActiveState = 'md:flex hidden space-x-16 items-center justify-center md:text-white absolute md:static h-[112px] left-0 right-0 md:h-fit bg-white md:bg-inherit z-20 pt-6 md:pt-0'

const Navbar = () => {
    const [active, setActive] = useState(false)

    const menu = () => {
    setActive(!active);
  }
  return (
    <div className='flex absolute top-0 left-0 md:top-16 md:left-16 items-center md:space-x-14 w-full md:w-fit'>
        <div className='flex flex-row justify-center mt-6 md:mt-0 mx-auto w-full md:w-fit'>
            <Fade left>
                <img src={Hamburger} alt="" className='md:hidden inline-block absolute left-6' onClick={menu}/>

            </Fade>
            <Fade up>
                <img src={Logo} alt="" />

            </Fade>
        </div>
        <div className={active ? activeState : unActiveState}>
            <div className='md:hidden'>
                <img src={IconClose} alt="" className='md:hidden inline-block' onClick={menu}/>
            </div>
            <div className='space-x-8'>
                <a href="#home" className='links relative'>home</a>
                <a href="#shop" className='links relative'>shop</a>
                <a href="#about" className='links relative'>about</a>
                <a href="#contact" className='links relative'>contact</a>
            </div>
        </div>
    </div>
  )
}

export default Navbar