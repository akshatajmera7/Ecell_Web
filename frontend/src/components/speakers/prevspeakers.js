import React from "react";
import { motion } from "framer-motion";
import img1 from "../../assets/SPEAKER PICS/vp_india_naidu.jpg";
import img2 from "../../assets/SPEAKER PICS/piyush-goyal.jpeg";
import img3 from "../../assets/SPEAKER PICS/kiran_mazumdar_shaw.jpeg";
import img4 from "../../assets/SPEAKER PICS/dham.webp";
import img5 from "../../assets/SPEAKER PICS/Nilesh-Kothari1.png";
import img6 from "../../assets/SPEAKER PICS/kshitij_khandelwal.jpeg";
import img7 from "../../assets/SPEAKER PICS/ANAND-SRINIVASAN.webp";
import img8 from "../../assets/SPEAKER PICS/sam.jpg";
import img9 from "../../assets/SPEAKER PICS/TARUN-KATHIYAL.webp";
import img10 from "../../assets/SPEAKER PICS/A_SIVANTHANU.png";
import img11 from "../../assets/SPEAKER PICS/ANKUSH-SINGHLA.jpeg";
import img12 from "../../assets/SPEAKER PICS/kav.png";
import img13 from "../../assets/SPEAKER PICS/greg.webp";
import img14 from "../../assets/SPEAKER PICS/pranalimehta.jpeg";
import img15 from "../../assets/SPEAKER PICS/varun.jpeg";
import img16 from "../../assets/SPEAKER PICS/PRANAY-PAI.png";

const profiles = [
  { id: 1, name: "SHRI VENKAIAH NAIDU", role: "FORMER VICE-PRESIDENT OF INDIA", image: img1, link: "https://x.com/mvenkaiahnaidu?lang=en&mx=2" },
  { id: 2, name: "PIYUSH GOYAL", role: "UNION CABINET MINISTER", image: img2, link: "https://www.linkedin.com/in/piyushgoyalofficial/?originalSubdomain=in" },
  { id: 3, name: "KIRAN MAZUMDAR SHAW", role: "CHAIRPERSON BIOCON", image: img3, link: "https://www.linkedin.com/in/kmazumdarshaw/" },
  { id: 4, name: "VINOD DHAM", role: "INDIAN INVENTOR", image: img4, link: "https://www.linkedin.com/in/vinod-vin-dham-b07a7935/" },
  { id: 5, name: "NILESH KOTHARI", role: "CO-FOUNDER TRIFECTA CAPITAL", image: img5, link: "https://www.linkedin.com/in/nilesh-kothari-9126588/" },
  { id: 6, name: "KSHTIJ KHANDELWAL", role: "CTO - PIXXEL", image: img6, link: "https://www.linkedin.com/in/khandelwalkshitij/" },
  { id: 7, name: "ANAND SRINIVASAN", role: "CO FOUNDER AKASA AIR", image: img7, link: "https://www.linkedin.com/in/anandakasa/?originalSubdomain=in" },
  { id: 8, name: "SAM PITRODA", role: "INDIAN INVENTOR", image: img8, link: "https://www.linkedin.com/in/sampitroda/" },
  { id: 9, name: "TARUN KATIYAL", role: "FOUNDER COTO EX-CEO ZEE5", image: img9, link: "https://www.linkedin.com/in/tarunkatial/?originalSubdomain=in" },
  { id: 10, name: "DR.A SIVATHANU PILLAI", role: "INDIAN SCIENTIST DRDO AND ISRO", image: img10, link: "https://www.linkedin.com/in/a-sivathanu-pillai-2b014576/?originalSubdomain=in" },
  { id: 11, name: "ANKUSH SINGLA", role: "CO-FOUNDER CODING NINJAS", image: img11, link: "https://www.linkedin.com/in/ankushsingla/?originalSubdomain=in" },
  { id: 12, name: "KAVITHA SUBRAMANIAN", role: "CO FOUNDER UPSTOX", image: img12, link: "https://www.linkedin.com/in/kavitha-subramanian-6a761411/?originalSubdomain=in" },
  { id: 13, name: "GREG MOORAN", role: "CEO ZOOMCAR", image: img13, link: "https://www.linkedin.com/in/greg-moran-45b9a27/" },
  { id: 14, name: "PRANALI MEHTA", role: "VENTURES AND ACCELERATION ANTHILL", image: img14, link: "https://www.linkedin.com/in/pranalimehta99/" },
  { id: 15, name: "VARUN SRIDHAR", role: "CEO PAYTM COMPANY", image: img15, link: "https://www.linkedin.com/in/varun-sridhar-639146a/?originalSubdomain=in" },
  { id: 16, name: "PRANAY PAI", role: "FOUNDING PARTNER 30NE4 CAPITAL", image: img16, link: "https://www.linkedin.com/in/pranavpai/?originalSubdomain=in" },
];

const ProfileCard = ({ profile, index }) => (
  <motion.a
    href={profile.link}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.05 }}
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
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#6b5fff] to-transparent" />
    </div>

    <div className="p-6 relative">
      <h3 className="text-lg font-black text-white mb-2 leading-tight font-poppins group-hover:text-[#d4ff00] transition-colors">
        {profile.name}
      </h3>
      <p className="text-[#6b5fff] font-bold text-[10px] tracking-[0.1em] uppercase opacity-80 font-poppins">
        {profile.role}
      </p>

      {/* Hover Glow */}
      <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-[#d4ff00]/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
    </div>
  </motion.a>
);

const PastSpeakers = () => {
  return (
    <div className="relative w-full bg-[#0a0a0a] py-24 overflow-hidden font-poppins">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-4">
            Past <span className="text-[#d4ff00] drop-shadow-[0_0_20px_rgba(212,255,0,0.3)]">Speakers</span>
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-[#6b5fff] to-[#d4ff00] mx-auto rounded-full" />
          <p className="text-gray-400 mt-6 tracking-widest uppercase text-xs font-bold opacity-60">Visionaries who inspired our journey</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {profiles.map((profile, index) => (
            <ProfileCard key={profile.id} profile={profile} index={index} />
          ))}
        </div>
      </div>

      {/* Background Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#6b5fff]/5 blur-[120px] rounded-full pointer-events-none" />
    </div>
  );
};

export default PastSpeakers;
