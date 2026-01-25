import React from "react";
import { motion } from "framer-motion";
import img1 from "../../assets/SPEAKER PICS/amangupta.jpeg";
import img2 from "../../assets/SPEAKER PICS/SP.jpeg";
import img4 from "../../assets/SPEAKER PICS/gov_mizo.avif";
import img5 from "../../assets/SPEAKER PICS/gupta_mathongo.jpg";
import img6 from "../../assets/SPEAKER PICS/periperi.png";
import img9 from "../../assets/SPEAKER PICS/jayesh.jpeg";

const profiles = [
  {
    id: 1,
    name: "AMAN GUPTA",
    role: "Co-Founder and CMO at boAt",
    image: img1,
    link: "https://www.linkedin.com/in/aman-gupta-7217a515/",
  },
  {
    id: 2,
    name: "SURESH PRABHU",
    role: "Former Union Minister",
    image: img2,
    link: "https://www.linkedin.com/in/sureshpprabhu/",
  },
  {
    id: 4,
    name: "GENERAL VIJAY KUMAR SINGH",
    role: "Governer of Mizoram",
    image: img4,
  },
  {
    id: 5,
    name: "ANUP GUPTA",
    role: "Founder and CEO - Mathongo",
    image: img5,
    link: "https://www.linkedin.com/in/anup-gupta-8a3a986",
  },
  {
    id: 6,
    name: "MAHESHWAR PERI",
    role: "Founder and CEO - Careers360",
    image: img6,
    link: "https://in.linkedin.com/in/maheshwer-peri-1723ba3b",
  },
  {
    id: 9,
    name: "JAYESH RANJAN",
    role: "SPECIAL CHIEF SECRETARY",
    image: img9,
    link: "https://www.linkedin.com/in/jayesh-ranjan-37415963/",
  },
];

const ProfileCard = ({ profile, index }) => (
  <motion.a
    href={profile.link}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    className="group relative bg-zinc-900/50 border border-zinc-800 rounded-2xl overflow-hidden backdrop-blur-sm hover:border-[#6b5fff]/50 transition-all duration-500"
  >
    <div className="aspect-[4/5] overflow-hidden relative">
      <img
        src={profile.image}
        alt={profile.name}
        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />

      {/* Decorative lines */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#d4ff00] to-transparent" />
    </div>

    <div className="p-4 md:p-6 relative">
      <h3 className="text-base md:text-xl font-black text-white mb-1 md:mb-2 leading-tight font-poppins group-hover:text-[#d4ff00] transition-colors">
        {profile.name}
      </h3>
      <p className="text-[#d4ff00] font-bold text-[8px] md:text-[10px] tracking-[0.1em] uppercase opacity-80 font-poppins">
        {profile.role}
      </p>

      {/* Hover Glow */}
      <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-[#6b5fff]/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
    </div>
  </motion.a>
);

const CurrentSpeakers = () => {
  return (
    <div className="relative w-full bg-black py-12 md:py-24 overflow-hidden font-poppins">
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        {/* Launchpad 2026 Speakers - Coming Soon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-24"
        >
          <h2 className="text-3xl sm:text-4xl md:text-7xl font-black text-white tracking-tighter mb-3 md:mb-4">
            Launchpad 2026 <span className="text-[#d4ff00] drop-shadow-[0_0_20px_rgba(212,255,0,0.3)]">Speakers</span>
          </h2>
          <div className="h-1 md:h-1.5 w-16 md:w-24 bg-gradient-to-r from-[#6b5fff] to-[#d4ff00] mx-auto rounded-full mb-8 md:mb-12" />

          {/* Coming Soon Box with Gradient Border */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-block p-[1px] rounded-2xl md:rounded-3xl bg-gradient-to-r from-[#6b5fff]/50 via-[#d4ff00]/50 to-[#6b5fff]/50"
          >
            <div className="px-8 py-6 md:px-16 md:py-10 rounded-2xl md:rounded-3xl bg-black">
              <p className="text-2xl sm:text-3xl md:text-5xl font-black text-[#6b5fff] tracking-tighter font-poppins">
                Coming Soon
              </p>
              <p className="text-[#d4ff00] mt-3 md:mt-4 text-sm md:text-lg font-poppins font-bold drop-shadow-[0_0_10px_rgba(212,255,0,0.4)]">Stay tuned for exciting announcements!</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Launchpad 2025 Speakers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-7xl font-black text-white tracking-tighter mb-3 md:mb-4">
            Launchpad 2025 <span className="text-[#d4ff00] drop-shadow-[0_0_20px_rgba(212,255,0,0.3)]">Speakers</span>
          </h2>
          <div className="h-1 md:h-1.5 w-16 md:w-24 bg-gradient-to-r from-[#6b5fff] to-[#d4ff00] mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-8 justify-center">
          {profiles.map((profile, index) => (
            <ProfileCard key={profile.id} profile={profile} index={index} />
          ))}
        </div>
      </div>

      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-ecell-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#6b5fff]/5 rounded-full blur-[120px] pointer-events-none" />
    </div>
  );
};

export default CurrentSpeakers;
