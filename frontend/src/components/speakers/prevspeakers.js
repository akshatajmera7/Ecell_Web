import React from 'react';
import { motion } from 'framer-motion';

const PreviousSpeakers = () => {
  const speakers = [
    {
      id: 1,
      name: "Sonam Wangchuck",
      role: "Innovator, Engineer and Education Reformist",
      image: "/api/placeholder/200/200" // Replace with your image URLs
    },
    {
      id: 2,
      name: "Vishal Gondal",
      role: "Founder & CEO, GOQii",
      image: "/api/placeholder/200/200"
    },
    {
      id: 3,
      name: "Vipul Joshi",
      role: "Co-founder and CFO, IdeaForge",
      image: "/api/placeholder/200/200"
    },
    {
      id: 4,
      name: "Aviral Bhatnagar",
      role: "Founder and Managing Partner, A Junior VC",
      image: "/api/placeholder/200/200"
    },
    {
      id: 5,
      name: "Ritu Verma",
      role: "Co-Founder and Managing Partner, Ankur Capital",
      image: "/api/placeholder/200/200"
    },
    {
      id: 6,
      name: "Nitin Jain",
      role: "Co-founder & CBO, OfBusiness",
      image: "/api/placeholder/200/200"
    },
    {
      id: 7,
      name: "Gaurav Chaudhary",
      role: "Content Creator, Technical guruji",
      image: "/api/placeholder/200/200"
    },
    {
      id: 8,
      name: "Viraj Bahl",
      role: "Shark at SharkTank India and Co-Founder, VEEBA",
      image: "/api/placeholder/200/200"
    }
  ];

  return (
    <div className="relative w-full min-h-screen bg-black py-16 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <h2 className="text-center text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 mb-16">
          Previous Speakers
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {speakers.map((speaker, index) => (
            <motion.a
              key={speaker.id}
              href={`/speaker/${speaker.id}`} // Replace with your actual link structure
              className="relative group block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="relative rounded-2xl bg-gradient-to-b from-blue-900/50 to-gray-900/50 p-3 sm:p-4 md:p-5 lg:p-6 backdrop-blur-sm border border-blue-500/20 transform transition-all duration-300 group-hover:scale-105">
                <div className="aspect-square rounded-full overflow-hidden mb-2 sm:mb-3 md:mb-4 border-2 border-blue-500/30">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-1 sm:mb-1.5 md:mb-2">
                  {speaker.name}
                </h3>
                <p className="text-xs sm:text-sm text-blue-200/80 leading-tight">
                  {speaker.role}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PreviousSpeakers;
