"use client";
import React, { useTransition, useState } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { Cog8ToothIcon } from '@heroicons/react/24/solid';
import { Orbitron, Press_Start_2P, Pixelify_Sans } from 'next/font/google';
import TabButton from './TabButton';

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

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className='list-disc pl-2'>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>Python</li>
        <li>C++/C/C#</li>
        <li>Html</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className='list-disc pl-2'>
        <li>Vanderbilt University - (2022-2026) Bachelor's in CS</li>
      </ul>
    ),
  },
  {
    title: "Hobbies",
    id: "hobbies",
    content: (
      <ul className='list-disc pl-2'>
        <li>Gym</li>
        <li>Reading</li>
        <li>Terraria</li>
        <li>Watcing Streams</li>
        <li>Learning</li>
      </ul>
    ),
  },
];

const textVariants = {
  initial: { opacity: 0, x: '-100%' },
  animate: { opacity: 1, x: 0 },
};

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isHovered, setIsHovered] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [hoveredCog, setHoveredCog] = useState(null);
  const [selectedTabTitle, setSelectedTabTitle] = useState(""); // Track the selected tab title
  
  const handleHover = (cogId) => {
    setHoveredCog(cogId);
    setIsHovered(true);
  };
  
  const handleUnhover = () => {
    setHoveredCog(null);
    setIsHovered(false);
  };

  

  const handleTabChange = (id, title) => {
    startTransition(() => {
      setTab(id);
      setSelectedTabTitle(title);
    });
  };

  return (
    <section className='text-white' id='about'>
      <div className='md:grid md:grid-cols-4 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <div className={`${orbitron.className} mt-8 flex flex-col col-span-1`}>
            <AnimatePresence>
                {selectedTabTitle && (
                    <motion.p
                    key={selectedTabTitle}
                    className={`${orbitron.className} md:text-lg text-center`}
                    variants={textVariants}
                    initial="initial"
                    animate="animate"
                    exit="initial"
                    >
                    {selectedTabTitle}
                    </motion.p>
                )}
            </AnimatePresence>
            {TAB_DATA.find((t) => t.id === tab).content}
        </div>
        <div className='mt-4 md:mt-0 flex flex-row h-full col-span-3'>
                    
          <div className='flex flex-col justify-start mt-8 mr-8'>
   
            {TAB_DATA.map((tabItem) => (
                <div key={tabItem.id} className='flex flex-row items-center justify-end'>
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -100 }}
                        transition={{ duration: 0.3 }}
                    >
                        {hoveredCog === tabItem.id && <p className={`${pixel.className}`}>{tabItem.title}</p>}
                    </motion.div>
                    <TabButton
                        key={tabItem.id}
                        selectTab={() => handleTabChange(tabItem.id, tabItem.title)}
                        active={tab === tabItem.id}
                    >
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            onHoverStart={() => handleHover(tabItem.id)}
                            onHoverEnd={handleUnhover}
                        >
                            <Cog8ToothIcon className="text-[rgb(192,174,125)] w-[100px] aspect-square" />
                        </motion.div>
                    </TabButton>
                </div>
                ))}

          </div>
          <div>
            <h2 className={`${pixel.className} text-4xl text-center text-white mb-4`}>
              About Me
            </h2>
            <p className={`${orbitron.className} md:text-lg text-center`}>
                            I am Sobenna. A computer science student currently studying at Vanderbilt University. I believe greatly in the power of creativity, and hope to breathe that life into my projects!
            </p>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection