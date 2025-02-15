import React from "react";
import { motion } from "framer-motion";
import img1 from "../../assets/SPEAKER PICS/amangupta.jpeg";


const profiles = [
  {
    id: 1,
    name: "AMAN GUPTA",
    role: "Co Founder and CMO at boAt",
    image: img1,
    link: "https://www.linkedin.com/in/aman-gupta-7217a515/",
  },
];

const ProfileGrid = () => {
  return (
    <div className="relative w-full min-h-screen bg-black py-16 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <h1 className="text-5xl font-bold text-blue-500 mb-8 text-center">
          Launchpad 2025 Speakers
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {profiles.map((profile, index) => (
            <motion.a
              key={profile.id}
              href={profile.link}
              className="relative group block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <div className="relative rounded-2xl bg-gradient-to-b from-blue-900/50 to-gray-900/50 p-3 sm:p-4 md:p-5 lg:p-6 backdrop-blur-sm border border-blue-500/20 transform transition-all duration-300 group-hover:scale-105">
                <div className="aspect-square rounded-full overflow-hidden mb-2 sm:mb-3 md:mb-4 border-2 border-blue-500/30">
                  <img
                    src={profile.image}
                    alt={profile.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-1 sm:mb-1.5 md:mb-2">
                  {profile.name}
                </h3>
                <p className="text-xs sm:text-sm text-blue-200/80 leading-tight">
                  {profile.role}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileGrid;

