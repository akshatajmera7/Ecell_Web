import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ProgramShowcase = () => {
  const programs = [
    {
      title: "Startup Accelerator",
      description: "A 12-week intensive program helping early-stage startups scale their business with mentorship and resources.",
      image: "/api/placeholder/600/400",
      link: "#",
    },
    {
      title: "Innovation Lab",
      description: "Access cutting-edge technology and expertise to bring your innovative ideas to life.",
      image: "/api/placeholder/600/400",
      link: "#",
    },
    {
      title: "Community Hub",
      description: "A collaborative space where entrepreneurs can connect, learn, and grow together.",
      image: "/api/placeholder/600/400",
      link: "#",
    },
    {
      title: "Startup Accelerator",
      description: "A 12-week intensive program helping early-stage startups scale their business with mentorship and resources.",
      image: "/api/placeholder/600/400",
      link: "#",
    },
    {
      title: "Innovation Lab",
      description: "Access cutting-edge technology and expertise to bring your innovative ideas to life.",
      image: "/api/placeholder/600/400",
      link: "#",
    },
    {
      title: "Community Hub",
      description: "A collaborative space where entrepreneurs can connect, learn, and grow together.",
      image: "/api/placeholder/600/400",
      link: "#",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      y: 50,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: 50,
      transition: {
        duration: 0.4,
        ease: "easeIn",
      },
    },
  };

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen bg-black text-white py-20 px-4">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        exit="exit"
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {programs.map((program, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="group relative bg-zinc-900 rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="aspect-video overflow-hidden">
              <img
                src={program.image}
                alt={program.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-medium mb-3">{program.title}</h3>
              <p className="text-gray-400">{program.description}</p>
              {/*
              <a
                href={program.link}
                className="inline-flex items-center gap-2 text-white bg-zinc-800 hover:bg-purple-600 focus:bg-purple-700 px-4 py-2 rounded-lg transition-colors duration-200"
              >
                Explore
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </a>
              */}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ProgramShowcase;