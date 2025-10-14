import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion'; // For animations
import { useInView } from 'react-intersection-observer'; // To detect if element is in view

const Intro = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, // Animation triggers once when element comes into view
    threshold: 0.2, // Trigger when 20% of the element is visible
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible'); // Start animation when in view
    }
  }, [inView, controls]);

  const variants = {
    hidden: { opacity: 0, y: 50 }, // Start hidden with slight downward shift
    visible: { opacity: 1, y: 0 }, // Fade in and move to original position
  };

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#0C233C', color: '#F5EDE4' }}>
      <motion.div
        className="max-w-6xl mx-auto px-4 py-16 text-center"
        ref={ref} // Attach observer to this element
        initial="hidden" // Start from 'hidden' state
        animate={controls} // Use controls to animate
        variants={variants} // Apply the animation states
        transition={{ duration: 1 }} // Duration of the animation
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium mb-8 leading-tight" style={{ color: '#F5EDE4' }}>
          Our 
          <br />
          Programs and Initiatives
        </h1>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg md:text-xl leading-relaxed" style={{ color: '#F5EDE4', opacity: 0.8 }}>
            Supporting entrepreneurs. Building communities. Driving innovation
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Intro;
