"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, AnimatePresence } from "framer-motion";
import { WrenchIcon } from "@heroicons/react/24/solid";
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/solid'
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

const projectsData = [
  {
    id: 1,
    title: "Bandwith Battlegrounds",
    description: "A 2D Platformer game created with Unity",
    image: "/images/projects/1.png",
    tag: ["All", "Game"],
    gitUrl: "/",
    projectImages : [
      '/images/projects/Bandwith1.png',
      '/images/projects/Bandwith2.png',
      '/images/projects/Bandwith3.png',
      '/images/projects/Bandwith4.png',
    ]
  },
  {
    id: 2,
    title: "CAN Data Visualizer",
    description: "A Data Visualizer created with Python",
    image: "/images/projects/2.png",
    tag: ["All"],
    gitUrl: "https://github.com/jmscslgroup/drivesummary",
    projectImages : [
      '/images/projects/Datavis1.png',
      '/images/projects/Datavis2.png',
      '/images/projects/Datavis3.png'
    ]
  },
  {
    id: 3,
    title: "Ekreb",
    description: "A Word-guessing game made with React and Vite.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/SobennaStory/ekreb",
    projectImages : [
      '/images/projects/Ekreb1.png',
      '/images/projects/Ekreb2.png',
      '/images/projects/Ekreb3.png'
    ]
  },
  {
    id: 4,
    title: "SobStore",
    description: "A inventory management app. Only frontend. Does not persist between reloads.",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    gitUrl: "https://sobstore.vercel.app/",
    projectImages : [
      '/images/projects/sobstore1.png',
      '/images/projects/sobstore2.png',
      '/images/projects/sobstore3.png'
    ]
  },
];

const ProjectsSection = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const ref = useRef(null);
  const [wrenchClicked, setWrenchClicked] = useState(false);

  const handleWrenchClick = () => {
    // Increment the current card index and loop back to the beginning if needed
    setWrenchClicked(true)
    setCurrentCardIndex((prevIndex) =>
      prevIndex === projectsData.length - 1 ? 0 : prevIndex + 1
    );
    setTimeout(() => { 
      setWrenchClicked(false);
  }, 2000);
  };

  const variants = {
    hover: {
      rotate: 30, // Set the desired rotation in degrees
      transition: {
        type: 'spring', // Set the type of animation to spring
        stiffness: 700, // Set the stiffness of the spring
        damping: 10,
        mass: 5
      },
    },
    click: {
      rotate: 90, // Set the desired rotation in degrees
      transition: {
        type: 'spring', // Set the type of animation to spring
        stiffness: 800, // Set the stiffness of the spring
        damping: 20,
        mass: 5
      },
    },
    base: {
      rotate: 0, // Set the desired rotation in degrees
      transition: {
        type: 'spring', // Set the type of animation to spring
        stiffness: 500, // Set the stiffness of the spring
        damping: 10,
        mass: 5
      },

    }
  };
  const cardVariants = {
    initial: { opacity: 0, rotate: -30},
    animate: { opacity: 1, rotate: 0},
    exit: { opacity: 0, rotate: 30},
  };

  return (
    <section id='projects'>
      <div className="md:grid md:grid-cols-8 items-center my-12">
        <motion.div
            whileHover="hover"
            animate={wrenchClicked ? 'click' : 'base'}
            variants={variants}
            initial="base"
            className="col-span-1"
            style={{ originX: 0.2, originY: 0.8 }}
        >
            <WrenchIcon
              className="text-[rgb(76,72,62)] cursor-pointer "
              onClick={handleWrenchClick}
            />
          </motion.div>
          <div className="col-span-7 items-center justify-center">
            <h2 className={`${pixel.className} text-4xl text-center text-white mt-4`}>
                Projects
              </h2>
            <p className={`${orbitron.className} text-[#ADB7BE] text-center text-base sm:text-lg mb-6 lg:text-xl`}>
              (Click the Wrench!)
            </p>
            <p className={`${orbitron.className} text-[#ADB7BE] text-center text-sm sm:text-sm mb-6 lg:text-sm`}>
              <CodeBracketIcon className="inline-block w-8 h-8"/> To see code or project.
            </p>
            <p className={`${orbitron.className} text-[#ADB7BE] text-center text-sm sm:text-sm mb-6 lg:text-sm`}>
              <EyeIcon className="inline-block w-8 h-8"/> To see fun pictures. 
            </p>

              <motion.div
                key={currentCardIndex}
                variants={cardVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                style={{ originX: 1 }}
              >
                <ProjectCard
                  key={projectsData[currentCardIndex].id}
                  title={projectsData[currentCardIndex].title}
                  description={projectsData[currentCardIndex].description}
                  imgUrl={projectsData[currentCardIndex].image}
                  tags={projectsData[currentCardIndex].tag}
                  gitUrl={projectsData[currentCardIndex].gitUrl}
                  images={projectsData[currentCardIndex].projectImages}
                />
              </motion.div>
     
          </div>
      </div>
    </section>
  );
};

export default ProjectsSection;