import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Initiatives = () => {
  const navigate = useNavigate();

  const portfolioItems = [
    {
      name: 'LaunchPad',
      subtitle: 'Startup Accelerator',
      image: '/lp.png',
      description: 'The ultimate startup accelerator program providing mentorship, funding, and resources.',
      className: 'md:col-span-2 md:row-span-2 min-h-[300px] md:min-h-[400px]', // Large tile
    },
    {
      name: 'Speaker Sessions',
      subtitle: 'Industry Insights',
      image: '/ss.JPG',
      description: 'Interact with and learn from the pioneers of the industry through exclusive sessions.',
      className: 'md:col-span-1 md:row-span-2 min-h-[300px] md:min-h-[400px]', // Tall tile
    },
    {
      name: 'Networking Arena',
      subtitle: 'Connect & Grow',
      image: '/na.png',
      description: 'A dedicated space to connect with like-minded innovators and potential co-founders.',
      className: 'md:col-span-1 md:row-span-1 min-h-[220px] md:min-h-[250px]', // Standard tile
    },
    {
      name: 'Management Temptations',
      subtitle: 'Skill Building',
      image: '/MT2.png',
      description: 'Test your management skills through real-world business simulations and challenges.',
      className: 'md:col-span-2 md:row-span-1 min-h-[220px] md:min-h-[250px]', // Wide tile
    },
  ];

  return (
    <section className="relative min-h-screen py-24 px-4 md:px-8 bg-transparent text-white overflow-hidden">

      {/* Scroll Triggered Header */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-4xl mx-auto mb-20 text-center relative z-10"
      >
        <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-white font-syne">
          Programs & <span className="text-ecell-primary">Initiatives</span>
        </h2>
        <p className="text-lg md:text-xl leading-relaxed text-gray-300 max-w-2xl mx-auto font-manrope font-light">
          Fostering innovation through our curated programs designed to support and accelerate your entrepreneurial journey.
        </p>
      </motion.div>

      {/* Bento Grid Layout - Explicit Heights and Rows */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 auto-rows-[250px] gap-6 relative z-10">
        {portfolioItems.map((item, index) => (
          <motion.div
            key={index}
            className={`group relative overflow-hidden rounded-[2rem] glass-dark border border-white/10 ${item.className}`}
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
          >
            {/* Background Image with Zoom Effect */}
            <div className="absolute inset-0 w-full h-full overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              {/* Refined Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90" />

              {/* Hover highlight overlay */}
              <div className="absolute inset-0 bg-ecell-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />
            </div>

            {/* Content Container */}
            <div className="absolute inset-0 p-8 flex flex-col justify-end">

              <div className="transform transition-transform duration-500 group-hover:translate-y-0 translate-y-4">
                <span className="text-ecell-primary text-sm font-bold tracking-wider uppercase mb-2 block opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {item.subtitle}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 font-syne leading-tight">
                  {item.name}
                </h3>

                <div className="overflow-hidden max-h-0 group-hover:max-h-[100px] transition-all duration-500 ease-in-out">
                  <p className="text-gray-300 text-sm md:text-base mb-6 font-manrope leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                    {item.description}
                  </p>
                </div>

                <div className="flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-300">
                  <button
                    onClick={(e) => { e.stopPropagation(); navigate('/program'); }}
                    className="flex items-center gap-2 text-white hover:text-ecell-primary transition-colors text-sm font-bold tracking-wide group/btn"
                  >
                    EXPLORE
                    <span className="transform transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom CTA */}
      <motion.div
        className="max-w-4xl mx-auto mt-20 text-center relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        viewport={{ once: true }}
      >
        <button
          className="btn-premium px-10 py-4 rounded-full text-lg font-bold tracking-wide uppercase"
          onClick={() => navigate('/program')}
        >
          View All Programs
        </button>
      </motion.div>
    </section>
  );
};

export default Initiatives;
