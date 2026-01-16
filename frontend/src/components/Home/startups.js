import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Import local logos
import sandiskLogo from '../../assets/Bitsian startups/SanDisk Logo.png';
import mplLogo from '../../assets/Bitsian startups/MPL_Logo 1.png';
import bbLogo from '../../assets/Bitsian startups/bb.png';
import redbusLogo from '../../assets/Bitsian startups/redbus.png';
import swiggyLogo from '../../assets/Bitsian startups/Swiggy.png';
import growwLogo from '../../assets/Bitsian startups/groww.png';

const startups = [
  {
    name: 'SanDisk',
    foundedBy: 'Sanjay Mehrotra',
    description: 'Founded in 1988 as SunDisk by Eli Harari, Sanjay Mehrotra, and Jack Yuan, the company was acquired by Western Digital in 2016/',
    logo: sandiskLogo,
    founderImage: '/mehrotra.png',
    color: '#ff0000',
    position: { x: 8, y: 88 },
    logoPos: 'bottom',
    logoHeight: 56,
    logoWidth: 150  // Width in pixels - change this to resize SanDisk logo width
  },
  {
    name: 'MPL',
    foundedBy: 'Shubham Malhotra',
    description: 'Mobile Premier League (MPL) is an Indian online gaming platform based in Bengaluru. It was founded in 2018 by Sai Srinivas Kiran G and Shubham Malhotra.',
    logo: mplLogo,
    founderImage: '/malhotra.png',
    color: '#ff0000',
    position: { x: 21, y: 65 },
    logoPos: 'top',
    logoHeight: 56,
    logoWidth: 120  // Width in pixels - change this to resize MPL logo width
  },
  {
    name: 'bigbasket',
    foundedBy: 'Hari Menon',
    description: 'BigBasket is an Indian online grocer headquartered in Bangalore. It was founded in December 2011 by V.S. Sudhakar, Hari Menon, V.S. Ramesh, Vipul Parekh, and Abhinay Choudhari.',
    logo: bbLogo,
    founderImage: '/menon.png',
    color: '#6bbd45',
    position: { x: 43, y: 77 },
    logoPos: 'bottom',
    logoHeight: 56,
    logoWidth: 100  // Width in pixels - change this to resize BigBasket logo width
  },
  {
    name: 'redBus',
    foundedBy: 'Phanindra Sama',
    description: 'redBus is an Indian multinational online bus ticketing platform founded in 2006 by Phanindra Sama, Sudhakar Pasupunuri, and Charan Padmaraju, all alumni of BITS Pilani.',
    logo: redbusLogo,
    founderImage: '/sama.png',
    color: '#d84e55',
    position: { x: 53, y: 47 },
    logoPos: 'top',
    logoHeight: 80,
    logoWidth: 100  // Width in pixels - change this to resize redBus logo width
  },
  {
    name: 'SWIGGY',
    foundedBy: 'Sriharsha Majety',
    description: 'Swiggy is India\'s leading on-demand delivery platform, founded in 2014 by BITS Pilani alumni Sriharsha Majety and Nandan Reddy, and Rahul Jaimini.',
    logo: swiggyLogo,
    founderImage: '/majety.png',
    color: '#fc8019',
    position: { x: 80, y: 55 },
    logoPos: 'bottom',
    logoHeight: 56,
    logoWidth: 140  // Width in pixels - change this to resize Swiggy logo width
  },
  {
    name: 'Groww',
    foundedBy: 'Ishan Bansal',
    description: 'Groww is a financial services platform founded in 2016 by Lalit Keshre, Harsh Jain, Neeraj Singh, and Ishan Bansal to democratize investing in India.',
    logo: growwLogo,
    founderImage: '/bansal.png',
    color: '#00d09c',
    position: { x: 93, y: 33 },
    logoPos: 'top',
    logoHeight: 56,
    logoWidth: 120, // Width in pixels - change this to resize Groww logo width
    cardAlign: 'left' // Explicitly shift card to the left to avoid screen overflow
  }
];

const StartupCard = ({ startup, isVisible }) => (
  <AnimatePresence>
    {isVisible && (
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 10 }}
        className="absolute z-50 w-80 p-6 bg-[#e0e0e0] rounded-[2rem] shadow-2xl pointer-events-none border border-white/20"
        style={{
          left: startup.cardAlign === 'left' ? 'auto' : startup.cardAlign === 'right' ? '0' : '50%',
          right: startup.cardAlign === 'left' ? '0' : 'auto',
          transform: startup.cardAlign ? 'none' : 'translateX(-50%)',
          bottom: startup.logoPos === 'top' ? 'unset' : '100%',
          top: startup.logoPos === 'top' ? '100%' : 'unset',
          marginTop: startup.logoPos === 'top' ? '20px' : '0',
          marginBottom: startup.logoPos === 'bottom' ? '20px' : '0'
        }}
      >
        <div className="flex flex-col gap-4 text-left">
          <div className="flex justify-start mb-2">
            <img src={startup.logo} alt={startup.name} className="h-10 object-contain" loading="lazy" />
          </div>
          <div className="text-[#666666] font-manrope text-lg">
            Founded By <span className="text-[#f1211e] font-bold">{startup.foundedBy}</span>
          </div>
          <p className="text-[#333333] font-manrope text-sm leading-tight tracking-tight">
            {startup.description}
          </p>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);

const Startup = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Curved Path for SVG - adjusted to match Image 1
  // Curved Path for SVG - adjusted to match reference image exactly
  const pathData = "M 8 88 C 13 88, 17 65, 21 65 S 35 82, 43 77 S 48 47, 53 47 S 70 60, 80 55 S 88 33, 93 33";

  return (
    <div className="relative min-h-screen py-20 bg-black text-white overflow-hidden flex flex-col items-center justify-center">
      {/* Header */}
      <div className="text-center mb-16 md:mb-24 px-4 z-10">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold font-syne leading-tight">
          <span className="text-[#6b5fff]">BITS Pilani:</span> Fueling the <span className="text-[#d4ff00]">Next Wave</span> of <br className="hidden md:block" /> Innovation.
        </h1>
      </div>

      {/* Timeline Container */}
      <div className="relative w-full max-w-7xl h-[400px] md:h-[600px] px-4 md:px-20">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full overflow-visible"
          preserveAspectRatio="none"
        >
          <defs>
            <mask id="pathMask">
              <motion.path
                d={pathData}
                fill="none"
                stroke="white"
                strokeWidth="5"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 3, ease: "easeInOut" }}
                viewport={{ once: true }}
              />
            </mask>
          </defs>

          {/* Masked Dashed Line */}
          <path
            d={pathData}
            fill="none"
            stroke="#d4ff00"
            strokeWidth="3"
            strokeDasharray="12 12"
            strokeLinecap="round"
            strokeLinejoin="round"
            mask="url(#pathMask)"
            style={{ vectorEffect: 'non-scaling-stroke' }}
          />
        </svg>

        {/* HTML Layer for Logos and Cards */}
        {startups.map((startup, index) => (
          <div
            key={index}
            className="absolute flex flex-col items-center"
            style={{
              left: `${startup.position.x}%`,
              top: `${startup.position.y}%`,
              transform: 'translate(-50%, -50%)',
              zIndex: hoveredIndex === index ? 50 : 20
            }}
          >
            {/* Circular Node dot - Perfect circle in HTML */}
            <div
              className={`w-3.5 h-3.5 md:w-5 md:h-5 bg-[#d4ff00] rounded-full shadow-[0_0_15px_rgba(212,255,0,0.6)] cursor-pointer transition-transform duration-300 ${hoveredIndex === index ? 'scale-125' : 'scale-100'}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            />

            {/* Logo Wrapper */}
            <div
              className={`absolute flex flex-col items-center cursor-pointer transition-all duration-300 ${hoveredIndex === index ? 'scale-110' : 'scale-100'}`}
              style={{
                top: startup.logoPos === 'top' ? 'auto' : '100%',
                bottom: startup.logoPos === 'top' ? '100%' : 'auto',
                paddingTop: startup.logoPos === 'top' ? '0' : '20px',
                paddingBottom: startup.logoPos === 'top' ? '20px' : '0',
                pointerEvents: 'none'
              }}
            >
              <div className="flex items-center pointer-events-auto"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {startup.name === 'bigbasket' ? (
                  <img
                    src={startup.logo}
                    alt={startup.name}
                    style={{
                      height: `${startup.logoHeight}px`,
                      width: startup.logoWidth ? `${startup.logoWidth}px` : 'auto'
                    }}
                    className="object-contain rounded-xl bg-[#98cb4b] p-2 flex-shrink-0"
                    loading="lazy"
                  />
                ) : startup.name === 'redBus' ? (
                  <img
                    src={startup.logo}
                    alt={startup.name}
                    style={{
                      height: `${startup.logoHeight}px`,
                      width: startup.logoWidth ? `${startup.logoWidth}px` : 'auto'
                    }}
                    className="object-contain rounded-2xl bg-[#d84e55] p-3 flex-shrink-0 shadow-lg"
                    loading="lazy"
                  />
                ) : (
                  <div className="flex items-center flex-shrink-0 h-fit">
                    <img
                      src={startup.logo}
                      alt={startup.name}
                      style={{
                        height: `${startup.logoHeight}px`,
                        width: startup.logoWidth ? `${startup.logoWidth}px` : 'auto'
                      }}
                      className="object-contain flex-shrink-0"
                      loading="lazy"
                    />
                  </div>
                )}
              </div>

              {/* Hover Card */}
              <div className="absolute left-1/2 -translate-x-1/2" style={{
                top: startup.logoPos === 'top' ? 'auto' : '100%',
                bottom: startup.logoPos === 'top' ? '100%' : 'auto',
              }}>
                <StartupCard startup={startup} isVisible={hoveredIndex === index} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Decorative background if any */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="stars"></div>
      </div>
    </div>
  );
};

export default Startup;
