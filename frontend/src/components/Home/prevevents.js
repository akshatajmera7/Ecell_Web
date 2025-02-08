import React, { useState, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const DisruptImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
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

  const controls = useAnimation();
  const ref = React.useRef(null);
  const isInView = useInView(ref, { threshold: 0.2 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, isInView]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [slides.length]); // Include slides.length as a dependency

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full bg-black py-16 overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-4">
        <motion.h3
          ref={ref}
          className="text-center text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 mb-12 tracking-tight"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={controls}
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: { opacity: 1, scale: 1, transition: { duration: 0.6, delay: 0.2 } },
          }}
        >
        Revisiting the Glorious Chapters
        </motion.h3>

        <motion.div
          className="relative overflow-hidden rounded-lg"
          initial={{ opacity: 0, x: 100 }}
          animate={controls}
          variants={{
            hidden: { opacity: 0, x: 100 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.4 } },
          }}
        >
          <div className="aspect-video relative">
            <motion.div
              className="flex w-full h-full"
              animate={{
                x: `-${currentIndex * 100}%`,
              }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
            >
              {slides.map((slide, index) => (
                <div key={index} className="w-full flex-shrink-0 relative">
                  <img
                    src={slide.imageUrl}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent flex flex-col items-center justify-center">
                    <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
                      {slide.title}
                    </h2>
                    <p className="text-xl text-gray-300 mt-2">{slide.subtitle}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Navigation buttons */}
            <div className="absolute inset-0 flex items-center justify-between p-4">
              <button
                onClick={prevSlide}
                className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Gradient overlays */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black/50 to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black/50 to-transparent z-10" />

            {/* Dots navigation */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex 
                      ? 'bg-gradient-to-r from-blue-400 to-purple-400' 
                      : 'bg-white/50 hover:bg-white/75'
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