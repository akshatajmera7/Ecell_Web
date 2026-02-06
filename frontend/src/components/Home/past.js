import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import img1 from '../../assets/SPEAKER PICS/home_speaker_1_v2.jpg';
import img2 from '../../assets/SPEAKER PICS/home_speaker_2_v2.jpg';
import img3 from '../../assets/SPEAKER PICS/home_speaker_3.jpg';
import img4 from '../../assets/SPEAKER PICS/home_speaker_4.jpg';

const profiles = [
  { id: 1, name: "AMAN GUPTA", role: "CO-FOUNDER AND CMO AT BOAT", image: img1, link: "https://www.linkedin.com/in/aman-gupta-7217a515/", objectPosition: "80% 50%" },
  { id: 2, name: "SHRI VENKAIAH NAIDU", role: "FORMER VICE-PRESIDENT OF INDIA", image: img2, link: "https://x.com/mvenkaiahnaidu?lang=en&mx=2" },
  { id: 3, name: "ANKUR WARIKOO", role: "ENTREPRENEUR & CONTENT CREATOR", image: img3, link: "https://www.linkedin.com/in/warikoo/" },
  { id: 4, name: "GEN. V.K. SINGH", role: "GOVERNOR OF MIZORAM", image: img4 },
];

const ProfileCard = ({ profile }) => (
  <motion.a
    href={profile.link}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="group relative bg-zinc-900/50 border border-zinc-800 rounded-2xl overflow-hidden backdrop-blur-sm hover:border-[#6b5fff]/50 transition-all duration-500"
  >
    <div className="aspect-[4/5] overflow-hidden relative">
      <img
        src={profile.image}
        alt={profile.name}
        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
        style={{ objectPosition: profile.objectPosition || 'center' }}
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />

      {/* Decorative lines */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#6b5fff] to-transparent" />
    </div>

    <div className="p-6 relative">
      <h3 className="text-lg font-black text-white mb-2 leading-tight font-poppins group-hover:text-[#d4ff00] transition-colors">
        {profile.name}
      </h3>
      <p className="text-[#d4ff00] font-bold text-[10px] tracking-[0.1em] uppercase opacity-80 font-poppins">
        {profile.role}
      </p>

      {/* Hover Glow */}
      <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-[#d4ff00]/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
    </div>
  </motion.a>
);

const ProfileGrid = () => {
  return (
    <div className="py-24 px-6 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#6b5fff]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-4 font-poppins"
          >
            Past <span className="text-[#d4ff00] drop-shadow-[0_0_20px_rgba(212,255,0,0.3)]">Speakers</span>
          </motion.h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-[#6b5fff] to-[#d4ff00] mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {profiles.map((profile) => (
            <ProfileCard key={profile.id} profile={profile} />
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              to="/launchpad/speakers"
              className="group relative px-12 py-4 bg-zinc-900 border border-zinc-800 text-white font-black rounded-full transition-all duration-500 font-poppins flex items-center gap-4 hover:border-[#d4ff00] hover:shadow-[0_0_50px_rgba(212,255,0,0.2)] hover:scale-105"
            >
              <span className="tracking-[0.2em] text-sm group-hover:text-[#d4ff00] transition-colors duration-300">VIEW ALL SPEAKERS</span>
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center group-hover:bg-white transition-colors duration-500">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:rotate-45 transition-transform duration-500">
                  <path d="M7 7L17 17M17 17V7M17 17H7" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProfileGrid;
