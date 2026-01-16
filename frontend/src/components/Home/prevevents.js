import React, { useState, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const slides = [
  {
    title: "Innovation",
    subtitle: "Shaping the Future",
    imageUrl: "/api/placeholder/800/400"
  },
  {
    title: "Technology",
    subtitle: "Advancing Human Potential",
    imageUrl: "/api/placeholder/800/400"
  },
  {
    title: "Future",
    subtitle: "Paving the Path Forward",
    imageUrl: "/api/placeholder/800/400"
  },
  {
    title: "Revolution",
    subtitle: "Transforming Industries",
    imageUrl: "/api/placeholder/800/400"
  }
];

const DisruptImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const controls = useAnimation();
  const ref = React.useRef(null);
  const isInView = useInView(ref, { threshold: 0.2 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden"); // Optional: reset if you want it to animate every time
    }
  }, [controls, isInView]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 4000); // 4 seconds for better readability
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full bg-black py-24 overflow-hidden">
      {/* Grain overlay for this specific section can be implied by global css, but added here if component isolated */}
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.h3
          ref={ref}
          className="text-center text-5xl md:text-6xl font-bold mb-16 font-syne text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
          }}
        >
          Revisiting the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">Glorious Chapters</span>
        </motion.h3>

        <motion.div
          className="relative rounded-3xl overflow-hidden glass-dark border border-white/10 shadow-2xl"
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 50, scale: 0.95 },
            visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, delay: 0.2, ease: "easeOut" } },
          }}
        >
          <div className="aspect-video relative group">
            <motion.div
              className="flex w-full h-full"
              animate={{
                x: `-${currentIndex * 100}%`,
              }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1], // Custom bezier for premium feel
              }}
            >
              {slides.map((slide, index) => (
                <div key={index} className="w-full flex-shrink-0 relative">
                  {/* Darkened overlay for better text contrast */}
                  <img
                    src={slide.imageUrl}
                    alt={slide.title}
                    className="w-full h-full object-cover filter brightness-75 transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex flex-col justify-end p-12">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <h2 className="text-5xl font-bold text-white font-syne mb-2">
                        {slide.title}
                      </h2>
                      <p className="text-xl text-gray-200 font-manrope font-light tracking-wide">{slide.subtitle}</p>
                    </motion.div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Navigation buttons */}
            <div className="absolute inset-0 flex items-center justify-between p-8 pointer-events-none">
              <button
                onClick={prevSlide}
                className="pointer-events-auto p-4 rounded-full bg-white/5 backdrop-blur-md text-white hover:bg-white/20 transition-all transform hover:scale-110 border border-white/10"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="pointer-events-auto p-4 rounded-full bg-white/5 backdrop-blur-md text-white hover:bg-white/20 transition-all transform hover:scale-110 border border-white/10"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Pagination Lines instead of dots for modern look */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2 z-20">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${index === currentIndex
                    ? 'w-12 bg-ecell-primary shadow-[0_0_10px_rgba(212,255,0,0.5)]'
                    : 'w-6 bg-white/30 hover:bg-white/50'
                    }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DisruptImageCarousel;
