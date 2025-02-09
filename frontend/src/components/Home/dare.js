import React from 'react';
import { motion } from 'framer-motion';

const TypographyComponent = () => {
  return (
    <div className="flex items-center justify-center min-h-[50vh] bg-black m-0 p-0">
      <motion.h1
        initial={{
          opacity: 0,
          scale: 0.8,
          rotateX: 15,
          rotateY: 15,
          y: 50,
        }}  // Initial state: faded out, slightly rotated, and zoomed out
        whileInView={{
          opacity: 1,
          scale: 1,
          rotateX: 0,
          rotateY: 0,
          y: 0,
        }}    // On entry: fades in, zooms in, and rotates to normal position
        exit={{
          opacity: 0,
          scale: 0.8,
          rotateX: -15,
          rotateY: -15,
          y: 50,
        }}    // On exit: fades out, zooms out, and rotates in the opposite direction
        transition={{
          duration: 1.5,
          ease: "easeOut",
          type: "spring",
          stiffness: 120,
        }}
        viewport={{ once: false }}    // Triggers animation on both entry and exit on scroll
        className="text-center text-5xl sm:text-6xl lg:text-7xl font-extrabold"
      >
        <span className="text-white">We</span>{' '}
        <span className="text-blue-600">Dare</span>{' '}
        <span className="text-blue-600">to</span>{' '}
        <span className="text-white">Disrupt</span>
      </motion.h1>
    </div>
  );
};

export default TypographyComponent;