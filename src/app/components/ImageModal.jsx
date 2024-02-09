import React, { useState } from 'react';
import {XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

const ImageModal = ({ images, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70" onClick={onClose}></div>
      <div className="relative z-10">
        <button className="absolute top-4 right-4 text-white" onClick={onClose}>
          <XMarkIcon className="h-6 w-6" />
        </button>
        <div className="flex items-center justify-center">
          <button className="text-white mr-4" onClick={handlePrev}>
            <ChevronLeftIcon className="h-8 w-8" />
          </button>
          <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} className="max-h-96" />
          <button className="text-white ml-4" onClick={handleNext}>
            <ChevronRightIcon className="h-8 w-8" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;