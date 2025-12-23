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

const CurrentSpeakers = () => {
  return (
    <div className="relative w-full bg-black py-20 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-ecell-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 font-syne">
            Launchpad 2025 <span className="text-ecell-primary">Speakers</span>
          </h1>
          <div className="h-1 w-24 bg-ecell-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 justify-center">
          {profiles.map((profile, index) => (
            <motion.a
              key={profile.id}
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative h-[450px] overflow-hidden rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(212,255,0,0.1)]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Image Container */}
              <div className="h-full w-full relative">
                <img
                  src={profile.image}
                  alt={profile.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />

                {/* Text Content */}
                <div className="absolute bottom-0 left-0 w-full p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-bold text-white mb-2 font-syne uppercase tracking-wide leading-tight group-hover:text-ecell-primary transition-colors">
                    {profile.name}
                  </h3>
                  <p className="text-base text-gray-300 font-manrope font-medium leading-normal border-l-2 border-ecell-primary pl-3">
                    {profile.role}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CurrentSpeakers;
