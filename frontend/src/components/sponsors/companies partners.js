import React from "react";
import { motion } from "framer-motion";

const ImageGallery = () => {
  const images = [
    { id: 1, src: "/enac.png", alt: "ENACTUS" },
    { id: 2, src: "/thub.png", alt: "T-HUB" },
    { id: 3, src: "/ts.png", alt: "TURBO START" },
    { id: 4, src: "/yss.png", alt: "YOUR STARTUP SOLUTIONS" },
    { id: 5, src: "/rad.png", alt: "RENT A DESK" },
    { id: 6, src: "/ja1.png", alt: "JAARVIS ACCELERATOR" },
    { id: 7, src: "/ss.png", alt: "SUCSEED" },
    { id: 8, src: "/1s.png", alt: "10000 STARTUPS" },
    { id: 9, src: "/ca.png", alt: "CA TECHNOLOGIES" },
    { id: 10, src: "/sc.png", alt: "SCIO FOUNDATION" },
    { id: 11, src: "/50k.png", alt: "50K NETWORK" },
    { id: 12, src: "/vc.png", alt: "VENTURE CATALYSTS" },
    { id: 13, src: "/suh.png", alt: "START UP HYDERABAD" },
    { id: 14, src: "/gc2.png", alt: "GOOGLE CLOUD" },
    { id: 15, src: "/cd1.png", alt: "CLOUDESIGN" },
    { id: 16, src: "/bb.png", alt: "BADA BUSINESS" },
    { id: 17, src: "/lwt.png", alt: "LEARNING WHILE TRAVELLING" },
    { id: 18, src: "/nc.png", alt: "N/CORE" },
    { id: 19, src: "/lemon.png", alt: "LEMON" },
    { id: 20, src: "/ic.png", alt: "IVYCAP VENTURES" },
    { id: 21, src: "/la.png", alt: "LEAD ANGELS" },
    { id: 22, src: "/cos.png", alt: "COSMOS" },
    { id: 23, src: "/eih.png", alt: "ECELL IIIT HYDERABAD" },
  ];

  return (

    <div className="relative w-full bg-black py-16 overflow-hidden">
          <div className="relative max-w-full mx-auto px-4">
            {/* Title */}
            <h3 className="text-center text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 mb-12 tracking-tight">
              Our Past Partners
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