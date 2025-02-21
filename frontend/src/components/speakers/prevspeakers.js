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
  {
    id: 1,
    name: "SHRI VENKAIAH NAIDU",
    role: "FORMER VICE-PRESIDENT OF INDIA",
    image: img1,
    link: "https://x.com/mvenkaiahnaidu?lang=en&mx=2",
  },
  {
    id: 2,
    name: "PIYUSH GOYAL",
    role: "UNION CABINET MINISTER",
    image: img2,
    link: "https://www.linkedin.com/in/piyushgoyalofficial/?originalSubdomain=in",
  },
  {
    id: 3,
    name: "KIRAN MAZUMDAR SHAW",
    role: "CHAIRPERSON BIOCON",
    image: img3,
    link: "https://www.linkedin.com/in/kmazumdarshaw/",
  },
  { id: 4, name: "VINOD DHAM", role: "INDIAN INVENTOR", image: img4, link: "https://www.linkedin.com/in/vinod-vin-dham-b07a7935/" },
  {
    id: 5,
    name: "NILESH KOTHARI",
    role: "CO-FOUNDER TRIFECTA CAPITAL",
    image: img5,
    link: "https://www.linkedin.com/in/nilesh-kothari-9126588/",
  },
  {
    id: 6,
    name: "KSHTIJ KHANDELWAL",
    role: "CTO - PIXXEL",
    image: img6,
    link: "https://www.linkedin.com/in/khandelwalkshitij/",
  },
  {
    id: 7,
    name: "ANAND SRINIVASAN",
    role: "CO FOUNDER AKASA AIR",
    image: img7,
    link: "https://www.linkedin.com/in/anandakasa/?originalSubdomain=in",
  },
  {
    id: 8,
    name: "SAM PITRODA",
    role: "INDIAN INVENTOR",
    image: img8,
    link: "https://www.linkedin.com/in/sampitroda/",
  },
  {
    id: 9,
    name: "TARUN KATIYAL",
    role: "FOUNDER COTO EX-CEO ZEE5",
    image: img9,
    link: "https://www.linkedin.com/in/tarunkatial/?originalSubdomain=in",
  },
  {
    id: 10,
    name: "DR.A SIVANTHANU PILLAI",
    role: "INDIAN SCIENTIST DRDO AND ISRO",
    image: img10,
    link: "https://www.linkedin.com/in/a-sivathanu-pillai-2b014576/?originalSubdomain=in",
  },
  {
    id: 11,
    name: "ANKUSH SINGLA",
    role: "CO-FOUNDER CODING NINJAS",
    image: img11,
    link: "https://www.linkedin.com/in/ankushsingla/?originalSubdomain=in",
  },
  {
    id: 12,
    name: "KAVITHA SUBRAMANIAN",
    role: "CO FOUNDER UPSTOX",
    image: img12,
    link: "https://www.linkedin.com/in/kavitha-subramanian-6a761411/?originalSubdomain=in",
  },
  { id: 13, name: "GREG MOORAN", role: "CEO ZOOMCAR", image: img13, link: "https://www.linkedin.com/in/greg-moran-45b9a27/" },
  {
    id: 14,
    name: "PRANALI MEHTA",
    role: "VENTURES AND ACCELERATION ANTHILL",
    image: img14,
    link: "https://www.linkedin.com/in/pranalimehta99/",
  },
  {
    id: 15,
    name: "VARUN SRIDHAR",
    role: "CEO PAYTM COMPANY",
    image: img15,
    link: "https://www.linkedin.com/in/varun-sridhar-639146a/?originalSubdomain=in",
  },
  {
    id: 16,
    name: "PRANAY PAI",
    role: "FOUNDING PARTNER 30NE4 CAPITAL",
    image: img16,
    link: "https://www.linkedin.com/in/pranavpai/?originalSubdomain=in",
  },
];

const ProfileGrid = () => {
  return (
    <div className="relative w-full min-h-screen bg-black py-16 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <h1 className="text-5xl font-bold text-blue-500 mb-8 text-center">
          Past Speakers
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

