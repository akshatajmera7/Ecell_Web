import React from 'react';
import { motion } from 'framer-motion';
import bannerImg from '../../assets/ecell/lp_banner_yellow.png';

const TypographyComponent = () => {
  return (
    <div className="flex items-center justify-center py-20 px-4">
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.9,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        transition={{
          duration: 1.2,
          ease: "easeOut",
        }}
        viewport={{ once: true }}
        className="w-full max-w-6xl"
      >
        <img
          src={bannerImg}
          alt="A Decennial Journey"
          className="w-full h-auto object-contain rounded-[2rem] shadow-2xl"
        />
      </motion.div>
    </div>
  );
};

export default TypographyComponent;