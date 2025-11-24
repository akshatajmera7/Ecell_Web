import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { ParticleTextEffect } from './ui/particle-text-effect';

const Loadingscreen = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Check if we are on the home page
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
      // sessionStorage.setItem('hasLoaded', 'true'); // Commented out to ensure visibility for testing
    }, 4500);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-ecell-bg overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <ParticleTextEffect words={["E-CELL"]} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loadingscreen;
