import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
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
        <Link to="/launchpad/passes" className="block w-full h-auto">
          <img
            loading="lazy" src={bannerImg}
            alt="A Decennial Journey"
            className="w-full h-auto object-contain rounded-[2rem] shadow-2xl hover:scale-[1.02] transition-transform duration-500"
          />
        </Link>
      </motion.div>
    </div>
  );
};

export default TypographyComponent;