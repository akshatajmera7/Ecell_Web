import React from 'react';
import { motion } from 'framer-motion';

const SpeakersHero = () => {
  return (
    <div className="relative bg-black flex items-center justify-center pt-24 md:pt-40 pb-12 md:pb-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 w-full h-full">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-ecell-primary/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-8xl font-extrabold text-white mb-4 md:mb-8 font-syne tracking-tight"
        >
          Our <span className="bg-gradient-to-r from-blue-500 to-ecell-primary bg-clip-text text-transparent">Speakers</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base md:text-2xl text-gray-400 font-manrope max-w-2xl mx-auto"
        >
          Igniting conversations, sparking change.
        </motion.p>
      </div>
    </div>
  );
};

export default SpeakersHero;