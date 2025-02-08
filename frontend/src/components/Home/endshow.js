import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import logo from '../../assets/launchpad25.JPG';

const ImageComponent = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.2, // Trigger when the image is 20% visible
    triggerOnce: true, // Trigger the animation only once
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [inView, controls]);

  const containerStyle = {
    backgroundColor: 'black',
    height: '100vh', // Full screen height
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  };

  const imageStyle = {
    width: '70%',
    height: 'auto',
  };

  return (
    <div style={containerStyle} className='pt-40'>
      <motion.img
        ref={ref}
        src={logo}
        alt="Description"
        style={imageStyle}
        initial={{ opacity: 0, y: 50 }} // Start slightly below the position
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0, // Move to the original position
            transition: {
              duration: 1.2,
              ease: 'easeOut',
            },
          },
        }}
      />
    </div>
  );
};

export default ImageComponent;
