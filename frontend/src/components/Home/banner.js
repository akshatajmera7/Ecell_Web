import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex items-center justify-center h-screen text-white overflow-hidden bg-ecell-bg" style={{ pointerEvents: 'auto', zIndex: 1 }}>
      {/* Main Content */}
      <div className="relative text-center space-y-10" style={{ zIndex: 20, pointerEvents: 'auto' }}>
        {/* Text */}
        <motion.h1
          className="text-4xl md:text-7xl font-bold transition-all duration-700 text-white font-syne leading-tight"
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          Embrace Innovation, <br />
          <span className="text-ecell-secondary">Achieve Extraordinary</span>
        </motion.h1>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <button
            className="btn-premium px-12 py-5 text-xl font-bold rounded-full transition-all tracking-wider uppercase"
            onClick={() => navigate('/contact')}
            style={{ pointerEvents: 'auto', zIndex: 30 }}
          >
            Let's Connect
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
