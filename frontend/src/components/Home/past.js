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

const ProfileGrid = () => {
  const profiles = [
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
    <div className="min-h-screen bg-black p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-blue-500 mb-8 text-center">
          Past Speakers
        </h1>
        
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {profiles.map((profile, index) => (
            <motion.a
              key={index} 
              href={`/profile/${profile.id}`} 
              className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 border border-blue-700 p-6 flex flex-col items-center"
            >
              <div className="w-full h-48 overflow-hidden shadow-md mb-4">
                <img
                  src={profile.image}
                  alt={profile.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {profile.name}
                </h3>
                <p className="text-blue-500 font-medium text-sm">{profile.role}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileGrid;


