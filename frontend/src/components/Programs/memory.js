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
    }, 4000); // Slower for better viewing
    return () => clearInterval(interval);
  }, [images.length]);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
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
      scale: 0.8,
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
    <div className="w-full py-20 bg-ecell-bg relative overflow-hidden">
      {/* Background Textural Element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-ecell-secondary/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white text-center mb-16 font-syne"
        >
          Memory <span className="text-ecell-secondary">Lane</span>
        </motion.h2>

        <div className="h-[60vh] md:h-[70vh] relative overflow-hidden rounded-[2rem] glass-dark border border-white/5">
          <div className="flex justify-center items-center h-full relative p-8">
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute w-full md:w-3/4 h-3/4 md:h-4/5 rounded-3xl overflow-hidden shadow-2xl border border-white/10"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.4 },
                  scale: { duration: 0.4 },
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation and Indicators */}
          <div className="absolute bottom-6 left-0 w-full flex justify-center items-center gap-4 z-10">
            <button
              onClick={() => paginate(-1)}
              className="p-3 rounded-full bg-black/20 text-white backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors"
            >
              ←
            </button>
            <div className="flex space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > activeIndex ? 1 : -1);
                    setActiveIndex(index);
                  }}
                  className={`h-1.5 rounded-full transition-all duration-300 ${activeIndex === index ? "w-8 bg-ecell-secondary" : "w-2 bg-white/30"
                    }`}
                />
              ))}
            </div>
            <button
              onClick={() => paginate(1)}
              className="p-3 rounded-full bg-black/20 text-white backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Memories;
