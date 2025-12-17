import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import img1 from '../../assets/LaunchPad.JPG';
import img2 from '../../assets/Speaker_session.png';
import img3 from '../../assets/startup_expo.JPG';
import img4 from '../../assets/MT.png';
import img5 from '../../assets/class.jpg';

// Reusing images from import but swapping for better Bento visual if needed
// Assuming imports exist as per original file

const List = () => {
  const navigate = useNavigate();

  const programs = [
    {
      title: "LAUNCHPAD",
      subtitle: "Startup Accelerator",
      description: "Take your entrepreneurial journey to the next level! LaunchPad offers mentorship, resources, and insights to turn your big idea into a thriving reality.",
      image: img1,
      link: "/launchpad",
      className: "md:col-span-2 md:row-span-2", // Large 2x2
    },
    {
      title: "SPEAKER SESSIONS",
      subtitle: "Industry Insights",
      description: "Gain exclusive access to industry leaders, innovators, and changemakers. Learn from their journeys.",
      image: img2,
      link: "#",
      className: "md:col-span-1 md:row-span-2", // Tall 1x2
    },
    {
      title: "STARTUP SPOTLIGHT",
      subtitle: "Innovation Showcase",
      description: "Discover groundbreaking innovations and be inspired by stories of grit and growth.",
      image: img3,
      link: "#",
      className: "md:col-span-1 md:row-span-1", // Standard 1x1
    },
    {
      title: "MANAGEMENT TEMPTATIONS",
      subtitle: "Strategy Simulation",
      description: "Unleash your strategic genius in this high-pressure simulation of real-world management challenges.",
      image: img4,
      link: "#",
      className: "md:col-span-1 md:row-span-1", // Standard 1x1
    },
    {
      title: "NETWORKING ARENA",
      subtitle: "Connect & Collaborate",
      description: "Connect, collaborate, and create opportunities where ideas meet investors.",
      image: img5,
      link: "#",
      className: "md:col-span-1 md:row-span-1", // Standard 1x1
    },
  ];

  return (
    <section className="min-h-screen py-24 px-4 md:px-8 bg-ecell-bg text-white relative overflow-hidden">
      {/* Background Grain/Noise is handled globally or can be added here if needed */}

      <div className="max-w-7xl mx-auto">
        {/* Bento Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[300px] gap-6">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              className={`group relative overflow-hidden rounded-[1.5rem] glass-dark border border-white/10 ${program.className}`}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
              onClick={() => program.link !== "#" && navigate(program.link)}
            >
              {/* Background Image */}
              <div className="absolute inset-0 w-full h-full">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 filter brightness-[0.8] group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-300 group-hover:opacity-80" />
                <div className="absolute inset-0 bg-ecell-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="transform transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
                  <span className="text-ecell-primary text-xs md:text-sm font-bold tracking-wider uppercase mb-2 block opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {program.subtitle}
                  </span>

                  <h3 className="text-2xl md:text-4xl font-bold text-white mb-3 font-syne leading-tight">
                    {program.title}
                  </h3>

                  <div className="overflow-hidden max-h-0 group-hover:max-h-[150px] transition-all duration-500 ease-in-out">
                    <p className="text-gray-300 text-sm md:text-base mb-6 font-manrope leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200 line-clamp-3">
                      {program.description}
                    </p>
                  </div>

                  <div className="flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-300">
                    <button className="flex items-center gap-2 text-white hover:text-ecell-primary transition-colors text-sm font-bold tracking-wide group/btn">
                      EXPLORE
                      <span className="transform transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default List;
