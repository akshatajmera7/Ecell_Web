import React from "react";
import { motion } from "framer-motion";

const ImageGallery = () => {


  
  const images = [
    { id: 1, src: "https://i.pinimg.com/736x/db/28/30/db283077a53b657013fe97e60f217643.jpg", alt: "Coca-Cola" },
    { id: 2, src: "https://steamuserimages-a.akamaihd.net/ugc/786354729790105128/69ABFC2B1B24CB2A019DDC47934B77C03A15137C/?imw=268&imh=268&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true", alt: "AMD" },
    { id: 3, src: "/bhve.png", alt: "BHARAT VERSITY" },
    { id: 4, src: "/campa.png", alt: "CAMPA" },
    { id: 5, src: "/sg1.png", alt: "SKILLIGENCE" },
    { id: 6, src: "/fb.png", alt: "FLYBERRY" },
    { id: 7, src: "/hh.png", alt: "HACKER" },
    { id: 8, src: "/mt.png", alt: "MOTOTEK" },
    { id: 9, src: "/rb1.png", alt: "ROYAL BROTHERS" },
    { id: 10, src: "/kg.png", alt: "KURO GAMING" },
    { id: 11, src: "/nestle.png", alt: "NESTLE" },
    { id: 12, src: "/unstop.png", alt: "UNSTOP" },
    { id: 13, src: "/plum.png", alt: "PLUM BODY LOVIN" },
    { id: 14, src: "/fab.png", alt: "FABLABS" },
    { id: 15, src: "/dec.png", alt: "DECATHLON" },
    { id: 16, src: "/act.png", alt: "ACT FIBERNET" },
    { id: 17, src: "/ff.png", alt: "FITNESS FUNDAS" },
    { id: 18, src: "/2iim.png", alt: "2IIM" },
    { id: 19, src: "/tpf.png", alt: "THE PRODUCT FOLKS" },
    { id: 20, src: "/instax.png", alt: "INSTAX" },
    { id: 21, src: "/switch1.png", alt: "SWITCHEKO" },
    { id: 22, src: "/altair1.png", alt: "ALTAIR" },
    { id: 23, src: "/huddle.png", alt: "HUDDLE" },
    { id: 24, src: "/bk.png", alt: "BUSINESS KEEDA" },
   
    

  ];

  return (

    <div className="relative w-full bg-black py-16 overflow-hidden">
      <div className="relative max-w-full mx-auto px-4">
        {/* Title */}
        <h3 className="text-center text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 mb-12 tracking-tight">
          Our Past Sponsors
        </h3>
      </div>


    <div className="relative bg-black min-h-screen w-full flex flex-col items-center py-10 overflow-hidden">
      {/* Particle and Glow Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: `hsl(${220 + Math.random() * 40}, 85%, 75%)`,
              opacity: Math.random() * 0.5 + 0.1,
              transform: `scale(${Math.random() * 0.5 + 0.5})`,
              animation: `twinkle ${2 + Math.random() * 4}s infinite ${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Gallery Content */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 px-8 z-10 relative">
        {images.map((image, index) => (
          <motion.div
            key={image.id}
            className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-48 object-cover rounded-lg"
            />
          </motion.div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default ImageGallery;

// Required Styles for Twinkle and Shimmer
const styles = `
  @keyframes twinkle {
    0%, 100% { opacity: 0.1; transform: scale(0.6); }
    50% { opacity: 0.6; transform: scale(1); }
  }

  @keyframes text-shimmer {
    0% { background-position: 200% 50%; }
    100% { background-position: -200% 50%; }
  }

  .animate-text-shimmer {
    background-size: 400% auto;
    animation: text-shimmer 8s linear infinite;
  }
`;

const styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);