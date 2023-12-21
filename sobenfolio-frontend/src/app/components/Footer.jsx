import React from 'react'
import { LogoImage } from '../../../public/svgs'
const Footer = () => {
  return (
    <footer className='footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white'>
        <div className='container p-12 flex justify-between'>
            <span>
                <LogoImage/>
            </span>
            <p className='text-primary-600 text-xs'> 
                ALL RIGHTS RESERVED
            </p>
        </div>
    </footer>
  )
}

export default Footer