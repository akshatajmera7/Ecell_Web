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

const PastSpeakers = () => {
  return (
    <div className="relative w-full bg-[#0a0a0a] py-20 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-syne">
            Past <span className="text-blue-500">Speakers</span>
          </h2>
          <p className="text-gray-400 font-manrope">Visionaries who inspired our journey</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {profiles.map((profile, index) => (
            <motion.a
              key={profile.id}
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative h-[400px] overflow-hidden rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-[0_0_25px_rgba(59,130,246,0.2)]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <div className="h-full w-full relative">
                <img
                  src={profile.image}
                  alt={profile.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-300" />

                <div className="absolute bottom-0 left-0 w-full p-6">
                  <h3 className="text-xl font-bold text-white mb-1 font-syne group-hover:text-blue-400 transition-colors uppercase">
                    {profile.name}
                  </h3>
                  <p className="text-xs text-gray-400 font-manrope font-semibold tracking-wide uppercase">
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

export default PastSpeakers;
