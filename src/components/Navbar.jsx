import React, { useState } from 'react';
import { Fade } from "react-awesome-reveal";
import Logo from '../images/logo.svg';
import Hamburger from '../images/icon-hamburger.svg';
import IconClose from '../images/icon-close.svg';

const activeState = 'flex animation gap-6 items-center justify-center md:text-white fixed md:static h-[112px] left-0 right-0 md:h-fit bg-white md:bg-inherit pt-6 md:pt-0';
const unActiveState = 'md:flex gap-16 hidden items-center justify-center md:text-white absolute md:static h-[112px] left-0 right-0 md:h-fit bg-white md:bg-inherit z-20 pt-6 md:pt-0'

const Navbar = () => {
    const [active, setActive] = useState(false)

    const menu = () => {
        setActive(!active);
    }
    return (
        <div className='flex absolute z-10 top-0 left-0 md:top-16 md:left-8 lg:left-16 items-center md:space-x-8 lg:space-x-14 w-full md:w-fit'>
            <div className='flex flex-row justify-center mt-6 md:mt-0 mx-auto w-full md:w-fit'>
                <Fade left>
                    <img src={Hamburger} alt="Logo" className='md:hidden inline-block absolute left-6' onClick={menu} />

                </Fade>
                <Fade up>
                    <img src={Logo} alt="Logo" />
                </Fade>
            </div>
            <div className={active ? activeState : unActiveState}>
                <div className='md:hidden'>
                    <img src={IconClose} alt="close" className='md:hidden inline-block' onClick={menu} />
                </div>
                <Fade up delay={500}>
                    <ul className='gap-4 md:gap-5 lg:gap-8 flex'>
                        <li><a href="#home" className='links relative'>home</a></li>
                        <li><a href="#shop" className='links relative'>shop</a></li>
                        <li><a href="#about" className='links relative'>about</a></li>
                        <li><a href="#contact" className='links relative'>contact</a></li>
                    </ul>
                </Fade>
            </div>
        </div>
    )
}

export default Navbar