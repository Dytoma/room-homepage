import './App.css';
import Navbar from './Navbar'

import Hero1 from './images/desktop-image-hero-1.jpg'
import Hero2 from './images/desktop-image-hero-2.jpg'
import Hero3 from './images/desktop-image-hero-3.jpg'
import Hero1Mobile from './images/mobile-image-hero-1.jpg'
import Hero2Mobile from './images/mobile-image-hero-2.jpg'
import Hero3Mobile from './images/mobile-image-hero-3.jpg'
import Arrow from './images/icon-arrow.svg'
import ArrowLeft from './images/icon-angle-left.svg'
import ArrowRight from './images/icon-angle-right.svg'
import AboutDark from './images/image-about-dark.jpg'
import AboutLight from './images/image-about-light.jpg'
import { useState } from 'react';
import { Slide, Fade } from "react-awesome-reveal";

function App() {
  const [item, setItem] = useState(1)

  const items = [
    {image: Hero1, 
     imageMobile: Hero1Mobile,
     itemHeader: "We are available all across the globe",
     itemDesc: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
    },
    {image: Hero2,
     imageMobile: Hero2Mobile,  
     itemHeader: "Discover innovative ways to decorate",
     itemDesc: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."
    },
    {image: Hero3,
     imageMobile: Hero3Mobile, 
     itemHeader: "Manufactured with the best materials",
     itemDesc: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
    }
  ]

  const nextItem = () => {
    setItem((prevState) => { if(prevState === 2)  { return prevState + 0} else { return prevState + 1}});
  }
  const prevItem = () => {
    setItem((prevState) => { if(prevState === 0)  { return prevState + 0} else { return prevState - 1}});
  }

  return (
    <div className="App min-h-full font-leagueSpartan grid md:grid-rows-[2fr_1fr] lg:grid-rows-[534px_1fr]">

      <div className='md:grid md:grid-cols-[2fr_1fr] lg:grid-cols-[840px_1fr] flex flex-col'>

        <div className='hero-section relative w-full h-full'>
          <Slide left>
            <img src={items[item].image} alt="" className='hidden md:inline-block object-fill'/>
            <img src={items[item].imageMobile} alt="" className='md:hidden inline-block w-full object-fill'/>
          </Slide>

          <Fade down>
            <Navbar />
          </Fade>

          <div className='bg-black absolute bottom-0 right-0 z-10 md:hidden inline-block'>
            <button aria-label='Left item' className='py-3 px-6 hover:bg-veryDarkGray transition-all duration-300 ease-in-out' onClick={prevItem}>
              <img src={ArrowLeft} alt="" aria-hidden='true'/>
            </button>

            <button aria-label='right item' className='py-4 px-6 hover:bg-veryDarkGray transition-all duration-300 ease-in-out' onClick={nextItem}>
              <img src={ArrowRight} alt="" aria-hidden="true" />
            </button>
          </div>
          
        </div>
        <div className='relative'>
          <Slide right>
            <div className='lg:pt-[120px] md:py-20  md:px-8 lg:pl-[100px] lg:pr-[45px] lg:pb-20 pb-20 md:pb-10 pt-12 px-6'>
              <h1 className='text-4xl md:text-5xl font-semibold tracking-tighter'>{items[item].itemHeader}</h1>
              <p className='text-base leading-6 tracking-tight font medium mt-5 text-darkGray'>{items[item].itemDesc}</p>

              <div className=' mt-7'>
                <a href="#shop" className='flex md:space-x-5 lg:space-x-8 hover:text-darkGray transition-all duration-300 ease-in-out'>
                  <h3 className='text-base font-medium tracking-[0.735em] leading-4'>SHOP NOW</h3>
                  <img src={Arrow} alt="" aria-hidden='true' className=''/>
                </a>
              </div>
            </div>
          </Slide>

          <div className='bg-black absolute bottom-0 left-0 hidden md:inline-block'>
            <button aria-label='Left item' className='lg:py-7 lg:px-8 md:px-5 md:py-4 hover:bg-veryDarkGray transition-all duration-300 ease-in-out' onClick={prevItem}>
              <img src={ArrowLeft} alt="" aria-hidden='true'/>
            </button>

            <button aria-label='right item' className='lg:py-7 lg:px-8 md:px-5 md:py-4 hover:bg-veryDarkGray transition-all duration-300 ease-in-out' onClick={nextItem}>
              <img src={ArrowRight} alt="" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      <div className='md:grid md:grid-cols-[1fr_1fr_1fr] lg:grid-cols-[420px_1fr_440px] flex flex-col'>
        <Slide left>
          <div>
            <img src={AboutDark} alt="" className='w-full'/>
          </div>
        </Slide>
        <Fade up delay={1000}>
          <div className='px-8 md:px-6 lg:pl-12 md:pt-[68px] lg:pr-11 py-16 md:pb-0'>
            <h3 className='text-base font-semibold uppercase tracking-[0.3em] md:tracking-[0.425em] leading-4 mb-4'>
              About our furniture
            </h3>
            <p className='text-base font-medium text-darkGray leading-6 tracking-tight'>
              Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.  Coded by <a href="https://www.frontendmentor.io/profile/Dytoma" style={{color: 'hsl(243, 100%, 62%)'}}>Dytoma</a>
            </p>
          </div>
        </Fade>
        <Slide right>
          <div>
            <img src={AboutLight} alt="" className='w-full'/>
          </div>
        </Slide>
      </div>
    </div>
  );
}

export default App;
