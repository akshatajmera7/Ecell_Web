import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import img1 from "../../assets/Launchpad1.JPG";
import img2 from "../../assets/speaker2.jpg";
import img3 from "../../assets/startup.JPG";
import img4 from "../../assets/auction.jpg";
import img5 from "../../assets/class.jpg";
import img6 from "../../assets/pitch.jpg";

const Memories = () => {
  const images = [img1, img2, img3, img4, img5, img6];
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [images.length]);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.6,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      zIndex: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
      scale: 0.6,
      zIndex: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setActiveIndex(
      (prevIndex) => (prevIndex + newDirection + images.length) % images.length
    );
  };

  return (
    <div className="w-full py-12" style={{ backgroundColor: '#0C233C' }}>
      <div className="max-w-6xl mx-auto h-[70vh] relative overflow-hidden">
        <div className="flex justify-center items-center h-full relative">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute w-1/2 h-3/4 rounded-lg overflow-hidden shadow-lg"
              transition={{
                x: {
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                  duration: 2.5,
                }, // Increased slide time to 2.5 seconds
                opacity: { duration: 0.2 }, // Keep opacity transition as it was
                scale: { duration: 0.2 }, // Keep scale transition as it was
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(_, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);
                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
            >
              <img
                src={images[activeIndex]}
                alt={`Carousel Slide ${activeIndex}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Side previews */}
        <div className="absolute top-1/2 -translate-y-1/2 left-4 w-1/4 h-3/4 opacity-40 scale-75">
          <img
            src={images[(activeIndex - 1 + images.length) % images.length]}
            alt="Previous"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 right-4 w-1/4 h-3/4 opacity-40 scale-75">
          <img
            src={images[(activeIndex + 1) % images.length]}
            alt="Next"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Navigation dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > activeIndex ? 1 : -1);
                setActiveIndex(index);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeIndex === index ? "scale-125" : ""
              }`}
              style={{ 
                backgroundColor: activeIndex === index ? '#FD8916' : '#296685',
                opacity: activeIndex === index ? 1 : 0.5
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Memories;
