import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import img1 from '../../assets/LaunchPad.JPG';
import img2 from '../../assets/Speaker_session.png';
import img3 from '../../assets/startup_expo.JPG';
import img4 from '../../assets/MT.png';
import img5 from '../../assets/class.jpg';

const List = () => {
  const programs = [
    {
      title: "LAUNCHPAD",
      description: "Take your entrepreneurial journey to the next level! LaunchPad offers mentorship, resources, and insights to turn your big idea into a thriving reality.",
      image:img1,
      link: "#",
    },
    {
      title: "SPEAKERS SESSIONS",
      description: "Gain exclusive access to industry leaders, innovators, and changemakers. Learn from their journeys, challenges, and strategies for success.",
      image:img2,
      link: "#",
    },
    {
      title: "STARTUP SPOTLIGHT",
      description: "Discover groundbreaking innovations as startups take the stage to showcase their visionary ideas. Be inspired by stories of grit, growth, and groundbreaking achievements.",
      image: img3,
      link: "#",
    },
    {
      title: "MANAGEMENT TEMPTATIONS",
      description: "Unleash your strategic genius in this high-pressure simulation of real-world management challenges. Test your skills, compete with the best, and emerge as the ultimate problem-solver.",
      image: img4,
      link: "#",
    },
    {
      title: "NETWORKING ARENA",
      description: "Connect, collaborate, and create opportunities. This is where ideas meet investors, teams find co-founders, and partnerships are forged.",
      image:img5,
      link: "#",
    }
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

export default List;