import React from 'react';
import { motion } from 'framer-motion';
import img1 from '../../assets/spons/50knetwork.jpeg'; 
import img2 from '../../assets/spons/10000startup.png'; 
import img3 from '../../assets/spons/venturecatalysts.png'; 
import img4 from '../../assets/spons/startuphyderabad.jpeg'; 
import img5 from '../../assets/spons/thub.png'; 
import img6 from '../../assets/spons/turbostart.jpeg'; 
import img7 from '../../assets/spons/googlecloud.png'; 
import img8 from '../../assets/spons/cloudesign.png';
import img9 from '../../assets/spons/catechnologies.jpeg';
import img10 from '../../assets/spons/sciofoundation.png';
import img11 from '../../assets/spons/badabuisness.png';
import img12 from '../../assets/spons/learnngwhile travelling.jpeg';
import img13 from '../../assets/spons/ncore.png'; 
import img14 from '../../assets/spons/enactus.png';
import img15 from '../../assets/spons/lemon.png';
import img16 from '../../assets/spons/fundsindia.png';
import img17 from '../../assets/spons/jaarvis.png';
import img18 from '../../assets/spons/sucseed.png';
import img19 from '../../assets/spons/leada.png';
import img20 from '../../assets/spons/yourstartupol.jpeg';
import img21 from '../../assets/spons/cosmos.png';
import img22 from '../../assets/spons/nirmaan.png';
import img23 from '../../assets/spons/ecell.jpeg';

const MediaAssociates = () => {
  const associates = [
    { name: "Innovation", image: img1 },
    { name: "Technology", image: img2 },
    { name: "Future", image: img3 },
    { name: "Revolution", image: img4 },
    { name: "Progress", image: img5 },
    { name: "Progress", image: img6 },
    { name: "Progress", image: img7 },
    { name: "Progress", image: img8 },
    { name: "Progress", image: img9 },
    { name: "Progress", image: img10 },
    { name: "Progress", image: img11 },
    { name: "Progress", image: img12 },
    { name: "Progress", image: img13 },
    { name: "Progress", image: img14 },
    { name: "Progress", image: img15 },
    { name: "Progress", image: img16 },
    { name: "Progress", image: img17 },
    { name: "Progress", image: img18 },
    { name: "Progress", image: img19 },
    { name: "Progress", image: img20 },
    { name: "Progress", image: img21 },
    { name: "Progress", image: img22 },
    { name: "Progress", image: img23 },
  ];

  return (
    <div className="relative w-full min-h-screen bg-black py-16 overflow-hidden">
      <div className="absolute inset-0">
        {/* No gradient background, keeping it pure black */}
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 4 + 1 + 'px',
              height: Math.random() * 4 + 1 + 'px',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: `rgba(63, 81, 181, ${Math.random() * 0.3})`,
              animation: `twinkle ${Math.random() * 3 + 2}s infinite ${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <motion.h2
          className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500 mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          // transition={{ duration: 0.6 }}
        >
          PAST PARTNERS
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {associates.map((associate, index) => (
            <motion.a
              href={associate.link}
              key={associate.id}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              // transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="relative rounded-2xl bg-gradient-to-b from-neutral-800/50 to-neutral-900/50 backdrop-blur-sm border border-blue-700/30 p-2 md:p-3 lg:p-4 transform transition-all duration-300 group-hover:scale-105 group-hover:border-blue-500/40">
                <div className="aspect-square rounded-xl overflow-hidden bg-white mb-2 md:mb-3 lg:mb-4">
                  <img
                    src={associate.image}
                    alt={associate.name}
                    className="w-full h-full object-contain p-1 md:p-2"
                  />
                </div>
                <div className="text-center">
                  <p className="text-xs md:text-sm lg:text-base text-blue-400 font-medium tracking-wider">
                    {associate.category}
                  </p>
                </div>
                <div className="absolute inset-0 rounded-2xl bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.1; transform: scale(0.6); }
          50% { opacity: 0.6; transform: scale(1); }
        }
      `}</style>
    </div>
  );
};

export default MediaAssociates;