import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import img1 from '../../assets/car.jpg';

const Memories = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const images = [
    img1, 
    "https://via.placeholder.com/1200x800/ff7c7c", 
    "https://via.placeholder.com/1200x800/7cffc4", 
    "https://via.placeholder.com/1200x800/c47cff", 
    "https://via.placeholder.com/1200x800/7c84ff"
  ];

  const controls = useAnimation();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 3000);

    return () => clearInterval(timer);
  }, [images.length]);

  const getVisibleImages = () => {
    if (isMobile) {
      return [{ src: images[activeIndex], index: activeIndex }];
    }

    const visibleImages = [];
    for (let i = -1; i <= 1; i++) {
      const index = (activeIndex + i + images.length) % images.length;
      visibleImages.push({
        src: images[index],
        index,
      });
    }
    return visibleImages;
  };

  const variants = {
    hidden: { 
      opacity: 0,
      x: isMobile ? 50 : 100,
      scale: 0.9
    },
    visible: { 
      opacity: 1,
      x: 0,
      scale: 1
    },
  };

  return (
    <div className="w-full bg-black py-12">
      <div className="max-w-7xl mx-auto relative overflow-hidden h-[60vh]">
        <div className={`flex justify-center items-center ${isMobile ? 'gap-0' : 'gap-8'} h-full`}>
          {getVisibleImages().map((image, idx) => (
            <motion.div
              key={image.index}
              className={`relative transform transition-all duration-700 rounded-xl overflow-hidden
                ${isMobile
                  ? 'w-[80%] mx-auto'
                  : idx === 0
                  ? 'w-[300px] lg:w-[400px] opacity-50'
                  : idx === 1
                  ? 'w-[400px] lg:w-[500px] opacity-100 scale-105'
                  : 'w-[300px] lg:w-[400px] opacity-50'
                }`}
              initial="hidden"
              animate={controls}
              variants={variants}
              transition={{ 
                duration: 0.7,
                ease: "easeOut"
              }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }} // Entry animation
              whileOutOfView={{ opacity: 0, x: 100, scale: 0.9 }} // Exit animation
              viewport={{ once: false, amount: 0.5 }} // Trigger animation when 50% of the element is in view
            >
              <img
                src={image.src}
                alt={`Slide ${image.index}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>

        {/* Navigation dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 
                ${activeIndex === index 
                  ? 'bg-white w-4' 
                  : 'bg-white/50 hover:bg-white/70'
                }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Memories;