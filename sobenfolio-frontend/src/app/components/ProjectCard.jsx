import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import ImageModal from './ImageModal';

const ProjectCard = ({ imgUrl, title, description, gitUrl, images, tags = [], tech = [] }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };  
    
return (
    <div className='flex flex-col items-center'>
        <div 
            className='h-52 md:h-72 w-[100%] md:w-[50%] rounded-t-xl relative group bg-center'
            style = {{background: `url(${imgUrl})`, backgroundSize: "cover"}}
        >
            <div className='overlay flex items-center justify-center absolute top-0 left-0 w-full h-full bg-[#674516] bg-opacity-0  group-hover:flex group-hover:bg-opacity-80 transition-all duration-500'>
                <Link href ={gitUrl} className='h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link'>
                    <CodeBracketIcon className='h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white'></CodeBracketIcon>
                </Link>
                <a onClick={openModal} className='h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link'>
                    <EyeIcon className='h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white'></EyeIcon>
                </a>
            </div>
            {isModalOpen && <ImageModal images={images} onClose={closeModal} />}
        </div>
        <div className='text-white rounded-b-xl mt-3 w-[100%] md:w-[50%] bg-[#302a23] py-6 px-4'>
            <h5 className='text-xl font-semibold mb-2'>{title}</h5>
            <p className="text-[#ADB7BE]">{description}</p>
            {tags.length > 0 && (
                    <div className="mb-2 flex items-center">
                        <p className="text-[#c0ae7d45] font-semibold text-sm mr-2">Category:</p>
                        <div className="flex flex-wrap gap-1">
                            {tags.map((tag, index) => (
                                <motion.span
                                    key={index}
                                    className="text-[10px] bg-[#423a2f] text-[#c0ae7d] px-1.5 py-0.5 rounded"
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                >
                                    {tag}
                                </motion.span>
                            ))}
                        </div>
                    </div>
                )}
                {tech.length > 0 && (
                    <div className="flex items-center">
                        <p className="text-[#c0ae7d45] font-semibold text-sm mr-2">Technologies:</p>
                        <div className="flex flex-wrap gap-1">
                            {tech.map((item, index) => (
                                <motion.span
                                    key={index}
                                    className="text-[10px] bg-[#4b4335] text-[#d9c7a3] px-1.5 py-0.5 rounded"
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                >
                                    {item}
                                </motion.span>
                            ))}
                        </div>
                    </div>
                )}
        </div>
    </div>
  )
}

export default ProjectCard