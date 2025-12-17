import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const Loadingscreen = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Check if we are on the home page or launchpad
    const isHomePage = location.pathname === '/' || location.pathname === '/launchpad';

    if (!isHomePage) {
      setLoading(false);
      return;
    }

    // Ensure loading is true initially if conditions are met
    setLoading(true);

    // Set loading to false after a delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#1a1a1a] overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Background Grid Effect */}
          <div className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }}
          />

          {/* Main Container */}
          <div className="relative flex flex-col items-center justify-center">

            {/* Outer Rotating Ring */}
            <motion.div
              className="absolute w-48 h-48 border-2 border-ecell-primary/30 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              style={{ borderTopColor: 'transparent', borderBottomColor: 'transparent' }}
            />

            {/* Inner Rotating Ring (Reverse) */}
            <motion.div
              className="absolute w-32 h-32 border-2 border-ecell-secondary/50 rounded-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              style={{ borderLeftColor: 'transparent', borderRightColor: 'transparent' }}
            />

            {/* Core Pulsing Cell */}
            <motion.div
              className="relative w-16 h-16 bg-ecell-primary rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(212,255,0,0.6)]"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.8, 1, 0.8],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Inner Core Detail */}
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                <span className="text-ecell-primary font-bold text-xl font-syne">E</span>
              </div>
            </motion.div>

            {/* Loading Text */}
            <motion.div
              className="mt-12 text-ecell-text font-syne tracking-widest text-lg uppercase"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Initializing
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 0.1 }}
              >.</motion.span>
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 0.2 }}
              >.</motion.span>
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 0.3 }}
              >.</motion.span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loadingscreen;
