import React from 'react'
import { LogoImage } from '../../../public/svgs'
import { Orbitron, Press_Start_2P, Pixelify_Sans } from 'next/font/google';

const orbitron = Orbitron({
  subsets: ['latin'],
});

const presstart = Press_Start_2P({
  subsets: ['latin'],
  weight: '400',
});

const pixel = Pixelify_Sans({
  subsets: ['latin'],
});

const Footer = () => {
  return (
    <footer className='footer border z-10 border-t-[#3b27167d] border-t-[7px] border-l-transparent border-r-transparent text-white bg-black/10'>
        <div className='container p-12 flex justify-between'>
            <p className={`${pixel.className} text-primary-600 text-xs`}> 
                ALL RIGHTS RESERVED TO ME
            </p>
        </div>
    </footer>
  )
}

export default Footer