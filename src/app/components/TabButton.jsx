import React from 'react'
import {motion} from 'framer-motion'
import { Cog8ToothIcon } from '@heroicons/react/24/solid';
const variants = {
    hover: {
      rotate: 180, // Set the desired rotation in degrees
      transition: {
        type: 'spring', // Set the type of animation to spring
        stiffness: 650, // Set the stiffness of the spring
        damping: 10,
        mass: 2
      },
    },
  };
  
const TabButton = ({ active, selectTab, children }) => {
    const buttonClasses = active ? '' : '';
  
    return (

      <button onClick={selectTab}>
        <motion.div
          whileHover="hover" // Use the 'hover' variant when the mouse is over the element
          variants={variants}
        >
            {children}
        </motion.div>
      </button>
    );
  };

export default TabButton