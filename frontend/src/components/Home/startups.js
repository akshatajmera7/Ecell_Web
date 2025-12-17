import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Startup = () => {

  const scrollContainer = useRef(null);

  useEffect(() => {
    const scrollEffect = () => {
      if (scrollContainer.current) {
        const container = scrollContainer.current;
        container.scrollLeft += 1; // Slightly slower for better visibility
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0; // Reset to loop
        }
      }
    };

    const interval = setInterval(scrollEffect, 20);
    return () => clearInterval(interval);
  }, []);

  const designers = [
    {
      name: 'Swiggy',
      role: 'Founded by Sriharsha Majety',
      image: '/majety.png',
    },
    {
      name: 'Sandisk',
      role: 'Co-Founded by Sanjay Mehrotra',
      image: '/mehrotra.png',
    },
    {
      name: 'BigBasket',
      role: 'Co-Founded by Hari Menon',
      image: '/menon.png',
    },
    {
      name: 'Groww',
      role: 'Co-Founded by Ishan Bansal',
      image: '/bansal.png',
    },
    {
      name: 'RedBus',
      role: 'Founded by Phanindra Sama',
      image: '/sama.png',
    },
    {
      name: 'MPL',
      role: 'Founded by Shubh Malhotra',
      image: '/malhotra.png',
    },
  ];

  return (
    <div className="relative min-h-[50vh] py-20 bg-ecell-bg text-ecell-text" style={{ pointerEvents: 'auto', zIndex: 1 }}>
      {/* Decorative particles background (pointer-events disabled) */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 4 + 1 + 'px',
              height: Math.random() * 4 + 1 + 'px',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: `rgba(107, 95, 255, ${Math.random() * 0.3})`, // ecell-secondary tint
              animation: `twinkle ${Math.random() * 3 + 2}s infinite ${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
        {/* Header Section */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight text-white font-syne">
            BITS Pilani: Fueling the <span className="text-ecell-secondary">Next Wave</span> of Innovation.
          </h1>
          <p className="text-lg max-w-3xl mx-auto text-gray-300 opacity-90 font-manrope">
            Our university has a rich history of fostering innovation and entrepreneurship, as
            evidenced by the success of several notable startups founded by our alumni.
          </p>
        </motion.div>

        {/* Scrollable Section */}
        <motion.div
          className="relative w-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {/* Left Grayscale & Fade Overlay */}
          <div className="absolute top-0 left-0 w-32 md:w-48 h-full z-20 pointer-events-none"
            style={{
              background: 'linear-gradient(to right, rgba(26,26,26,1) 0%, transparent 100%)',
              backdropFilter: 'grayscale(100%)',
              WebkitBackdropFilter: 'grayscale(100%)',
              maskImage: 'linear-gradient(to right, black, transparent)',
              WebkitMaskImage: 'linear-gradient(to right, black, transparent)'
            }} >
          </div>

          {/* Right Grayscale & Fade Overlay */}
          <div className="absolute top-0 right-0 w-32 md:w-48 h-full z-20 pointer-events-none"
            style={{
              background: 'linear-gradient(to left, rgba(26,26,26,1) 0%, transparent 100%)',
              backdropFilter: 'grayscale(100%)',
              WebkitBackdropFilter: 'grayscale(100%)',
              maskImage: 'linear-gradient(to left, black, transparent)',
              WebkitMaskImage: 'linear-gradient(to left, black, transparent)'
            }} >
          </div>

          {/* Scrolling Content */}
          <div className="overflow-hidden whitespace-nowrap px-2 sm:px-4 lg:px-6" ref={scrollContainer}>
            <div className="flex space-x-8">
              {designers.concat(designers).map((designer, index) => (
                <div
                  key={index}
                  className="group rounded-2xl overflow-hidden min-w-[240px] md:min-w-[280px] lg:min-w-[320px] transform hover:scale-105 transition-all duration-300 bg-white/5 border border-white/10 hover:border-ecell-secondary glass-dark"
                >
                  <div className="aspect-w-1 aspect-h-1 relative">
                    <img
                      src={designer.image}
                      alt={designer.name}
                      style={{ width: '320px', height: '320px', objectFit: 'cover' }}
                      className="w-full h-full object-cover transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                  </div>
                  <div className="p-6 absolute bottom-0 left-0 w-full">
                    <h3 className="font-bold text-2xl text-white font-syne">{designer.name}</h3>
                    <p className="text-sm text-ecell-secondary font-manrope font-semibold tracking-wide">{designer.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Keyframes for twinkle animation */}
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.1; transform: scale(0.6); }
          50% { opacity: 0.6; transform: scale(1); }
        }
      `}</style>
    </div>
  );
};

export default Startup;
