import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 relative overflow-hidden">
      {/* Starry Background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-[2px] h-[2px] bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: `${0.5 + Math.random() * 0.5}`,
              animation: `twinkle ${1.5 + Math.random() * 2}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Celestial Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-500/30 to-blue-800/40 blur-[100px]"
      ></motion.div>

      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto flex flex-col items-center space-y-4 relative z-10">
        {/* Footer Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-lg font-semibold opacity-80 tracking-wide"
        >
          Connect with us on social media
        </motion.p>

        {/* Social Media Icons */}
        <div className="flex space-x-6">
          <motion.a
            href="https://www.facebook.com/groups/158307448076754/?ref=share&mibextid=NSMWBT"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-white hover:text-blue-500 transition-colors duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <i className="fab fa-facebook"></i>
          </motion.a>
          <motion.a
            href="https://x.com/ecell_bphc?t=1KAgGwoLWyXLe5-li71adA&s=08"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-white hover:text-blue-500 transition-colors duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <i className="fab fa-twitter"></i>
          </motion.a>
          <motion.a
            href="https://www.instagram.com/ecell_bphc?igsh=MXI5OGhld2lwMzMzNQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-white hover:text-blue-500 transition-colors duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <i className="fab fa-instagram"></i>
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/company/e-cell-bphc/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-white hover:text-blue-500 transition-colors duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.1 }}
          >
            <i className="fab fa-linkedin"></i>
          </motion.a>
        </div>

        {/* Copyright */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="text-sm opacity-60 mt-4"
        >
          &copy; 2025 E-Cell BITS Pilani Hyderabad Campus. All Rights Reserved.
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;