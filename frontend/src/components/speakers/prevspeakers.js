import React from 'react';
import { motion } from 'framer-motion';
import img1 from '../../assets/SPEAKER PICS/vp_india_naidu.jpg'; 
import img2 from '../../assets/SPEAKER PICS/piyush-goyal.jpeg'; 
import img3 from '../../assets/SPEAKER PICS/kiran_mazumdar_shaw.jpeg'; 
import img4 from '../../assets/SPEAKER PICS/dham.webp'; 
import img5 from '../../assets/SPEAKER PICS/Nilesh-Kothari1.png'; 
import img6 from '../../assets/SPEAKER PICS/kshitij_khandelwal.jpeg'; 
import img7 from '../../assets/SPEAKER PICS/ANAND-SRINIVASAN.webp'; 
import img8 from '../../assets/SPEAKER PICS/sam.jpg';
import img9 from '../../assets/SPEAKER PICS/TARUN-KATHIYAL.webp';
import img10 from '../../assets/SPEAKER PICS/A_SIVANTHANU.png';
import img11 from '../../assets/SPEAKER PICS/ANKUSH-SINGHLA.jpeg';
import img12 from '../../assets/SPEAKER PICS/kav.png';
import img13 from '../../assets/SPEAKER PICS/greg.webp'; 
import img14 from '../../assets/SPEAKER PICS/pranalimehta.jpeg';
import img15 from '../../assets/SPEAKER PICS/varun.jpeg';
import img16 from '../../assets/SPEAKER PICS/PRANAY-PAI.png';

const PreviousSpeakers = () => {
  const speakers = [
    {
      id: 1,
      name: "SHRI VENKAIAH NAIDU",
      role: "FORMER VICE-PRESIDENT OF INDIA",
      image: img1 // Replace with your image URLs
    },
    {
      id: 2,
      name: "PIYUSH GOYAL",
      role: "UNION CABINET MINISTER",
      image: img2
    },
    {
      id: 3,
      name: "KIRAN MAZUMDAR SHAW",
      role: "CHAIRPERSON BIOCON",
      image: img3
    },
    {
      id: 4,
      name: "VINOD DHAM",
      role: "INDIAN INVENTOR",
      image:img4
    },
    {
      id: 5,
      name: "NILESH KOTHARI",
      role: "CO-FOUNDER TRIFECTA CAPITAL",
      image: img5
    },
    {
      id: 6,
      name: "KSHTIJ KHANDELWAL",
      role: "CTO - PIXXEL",
      image: img6
    },
    {
      id: 7,
      name: "ANAND SRINIVASAN",
      role: "CO FOUNDER AKASA AIR",
      image: img7
    },
    {
      id: 8,
      name: "SAM PITRODA",
      role: "INDIAN INVENTOR ",
      image: img8
    },
    {
      id: 9,
      name: "TARUN KATIYAL",
      role: "FOUNDER COTO EX-CEO ZEE5",
      image:img9
    },
    {
      id: 10,
      name: "DR.A SIVANTHANU PILLAI",
      role: "INDIAN SCIENTIST DRDO AND ISRO",
      image:img10
    },
    {
      id: 11,
      name: "ANKUSH SINGLA",
      role: "CO-FOUNDER CODING NINJAS",
      image: img11
    },
    {
      id: 12,
      name: "KAVITHA SUBRAMANIAN",
      role: "CO FOUNDER UPSTOX",
      image: img12
    },
    {
      id: 13,
      name: "GREG MOORAN",
      role: "CEO ZOOMCAR",
      image: img13
    },
    {
      id: 14,
      name: "PRANALI MEHTA",
      role: "VENTURES AND ACCELERATION ANTHILL",
      image:img14
    },
    {
      id: 15,
      name: "VARUN SRIDHAR",
      role: "CEO PAYTM COMPANY",
      image: img15
    },
    {
      id: 16,
      name: "PRANAY PAI",
      role: "FOUNDING PARTNER 30NE4 CAPITAL",
      image: img16
    }
  ];

  return (
    <div className="relative w-full min-h-screen bg-black py-16 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <h2 className="text-center text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500 mb-16">
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
