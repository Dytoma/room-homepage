import Hero1 from '../images/desktop-image-hero-1.jpg'
import Hero2 from '../images/desktop-image-hero-2.jpg'
import Hero3 from '../images/desktop-image-hero-3.jpg'
import Hero1Mobile from '../images/mobile-image-hero-1.jpg'
import Hero2Mobile from '../images/mobile-image-hero-2.jpg'
import Hero3Mobile from '../images/mobile-image-hero-3.jpg'

export const images = [
    {
        id: 1,
        img: Hero1,
        imgMobile: Hero1Mobile,
        itemHeader: 'furniture 1'
    },
    {
        id: 2,
        img: Hero2,
        imgMobile: Hero2Mobile,
        itemHeader: 'furniture 2'
    },
    {
        id: 3,
        img: Hero3,
        imgMobile: Hero3Mobile,
        itemHeader: 'furniture 3'
    },
]

export const items = [
    {
        image: Hero1,
        imageMobile: Hero1Mobile,
        itemHeader: "We are available all across the globe",
        itemDesc: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
    },
    {
        image: Hero2,
        imageMobile: Hero2Mobile,
        itemHeader: "Discover innovative ways to decorate",
        itemDesc: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."
    },
    {
        image: Hero3,
        imageMobile: Hero3Mobile,
        itemHeader: "Manufactured with the best materials",
        itemDesc: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
    }
]

export const activeState = 'flex animation gap-[5.75rem] items-center justify-center md:text-white fixed md:static h-[112px] left-0 right-0 md:h-fit bg-white md:bg-inherit pt-6 md:pt-0';
export const unActiveState = 'md:flex gap-16 hidden items-center justify-center md:text-white absolute md:static h-[112px] left-0 right-0 md:h-fit bg-white md:bg-inherit z-20 pt-6 md:pt-0'