import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Intro = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, 
    threshold: 0.2, 
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [inView, controls]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <motion.div
        className="max-w-6xl mx-auto px-4 py-16 text-center"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={variants}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium mb-8 leading-tight">
          E - Cell
          <br />
          BITS Pilani Hyderabad Campus
        </h1>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
          Leading force in fostering a vibrant entrepreneurial ecosystem within our institution and beyond.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Intro;