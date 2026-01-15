import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import lpLogo from '../../assets/ecell/LP\'26.png';

const Launchpad = () => {
  const navigate = useNavigate();
  const [currentImg, setCurrentImg] = useState(0);

  const events = [
    "PITCHERS PILOT",
    "INTERNSHIP DRIVE",
    "GROUND REALITY",
    "NETWORKING ARENA"
  ];

  const carouselImages = [
    "/ss.JPG",
    "/na.png",
    "/lp.png",
    "/na1.png"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % carouselImages.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [carouselImages.length]);

  return (
    <section className="relative py-16 md:py-24 px-4 md:px-8 bg-black text-white overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-1/4 left-0 w-full max-w-[600px] aspect-square bg-[#6F66FF]/10 rounded-full blur-[120px] -translate-x-1/2" />
        <div className="absolute bottom-1/4 right-0 w-full max-w-[600px] aspect-square bg-[#BCFF2F]/5 rounded-full blur-[120px] translate-x-1/2" />
      </div>

      <div className="max-w-7xl mx-auto flex flex-col items-center">

        {/* Launchpad Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-bold font-syne text-[#6F66FF] mb-12 md:mb-20 text-center"
        >
          Launchpad
        </motion.h2>

        {/* Logo & Description Row */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 items-center mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex justify-center md:justify-end"
          >
            <div className="w-[180px] md:w-[280px]">
              <img src={lpLogo} alt="LP'26" className="w-full h-auto object-contain" />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left px-4 md:px-0"
          >
            <p className="text-[#BCFF2F] text-lg md:text-3xl font-manrope font-light leading-snug md:max-w-xl">
              Ignite entrepreneurial passion at our 3-day summit featuring industry leaders, innovative startups, and knowledge-sharing for the next generation.
            </p>
          </motion.div>
        </div>

        {/* Our Events Section */}
        <div className="w-full flex flex-col items-center mb-24 md:mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="px-10 py-3 rounded-full border border-[#6F66FF]/30 mb-12 bg-[#6F66FF]/5"
          >
            <span className="text-[#6F66FF] text-xl md:text-2xl font-bold font-syne uppercase tracking-widest">Our Events</span>
          </motion.div>
          <div className="flex flex-col items-center gap-2 md:gap-4 overflow-hidden">
            {events.map((event, idx) => (
              <motion.h3
                key={event}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="text-4xl md:text-8xl font-bold font-syne text-gray-700/60 hover:text-white transition-all duration-500 cursor-default tracking-tighter text-center"
              >
                {event}
              </motion.h3>
            ))}
          </div>
        </div>

        {/* Bottom Bento Grid - Reduced size max-w-5xl */}
        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8 min-h-[300px] md:min-h-[400px]">
          {/* Carousel Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-3 relative rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border border-white/10 glass-dark group aspect-video md:aspect-auto h-[300px] md:h-full"
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImg}
                src={carouselImages[currentImg]}
                alt=""
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>

            {/* Explore Events Button */}
            <div className="absolute bottom-6 right-6 z-10">
              <button
                onClick={() => navigate('/launchpad/events')}
                className="bg-white/95 backdrop-blur-sm text-black px-6 py-2.5 rounded-full font-bold flex items-center gap-2 hover:bg-[#BCFF2F] transition-all duration-300 shadow-xl scale-90 md:scale-100"
              >
                Explore Events <ArrowDownRight className="w-4 h-4" />
              </button>
            </div>
            {/* Dark overlay for contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
          </motion.div>

          {/* Explore More Card - Reduced and more compact */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onClick={() => navigate('/launchpad')}
            className="md:col-span-2 border-2 border-[#BCFF2F] rounded-[2rem] md:rounded-[2.5rem] p-8 flex flex-col justify-between cursor-pointer group hover:bg-[#BCFF2F]/5 transition-all duration-300 min-h-[250px] md:min-h-full"
          >
            <div className="flex justify-end">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-[#BCFF2F] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#BCFF2F] transition-all duration-300">
                <ArrowUpRight className="text-[#BCFF2F] group-hover:text-black w-5 h-5 md:w-6 md:h-6" />
              </div>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold font-syne text-[#BCFF2F] leading-[1.1]">
              Explore <br /> More About <br /> Launchpad
            </h3>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Launchpad;


