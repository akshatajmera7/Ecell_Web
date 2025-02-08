import React from "react";
import { motion } from "framer-motion";

const ImageGallery = () => {
  const images = [
    { id: 1, src: "/tn.png", alt: "TIMES NIE" },
    { id: 2, src: "/th.png", alt: "THE HINDU" },
    { id: 3, src: "/times.png", alt: "TIMES NETWORK" },
    { id: 4, src: "/ct.png", alt: "CAMPUS TIMES" },
    { id: 5, src: "/stst.png", alt: "STARTUP STORY" },
    { id: 6, src: "/ed.png", alt: "ED TIMES" },
    { id: 7, src: "/acn.png", alt: "ASIAN COMMUNITY NEWS" },
    { id: 8, src: "/yi1.png", alt: "YOUTH INCORPORATED" },
    { id: 9, src: "/ba.png", alt: "BLOGADDA" },
    { id: 10, src: "/dh.png", alt: "DAILYHUNT" },
    { id: 11, src: "/si.png", alt: "#STARTUPINDIA" },
    { id: 12, src: "/alg.png", alt: "ALGOCS" },
    { id: 13, src: "/kaf.png", alt: "KNOW A FEST" },
    { id: 14, src: "/st.png", alt: "STARTUP TALKY" },
    { id: 15, src: "/sn1.png", alt: "STARTUP NEWS" },
    { id: 16, src: "/bs.png", alt: "BIZ STANDARDS" },
    { id: 17, src: "/tt1.png", alt: "TELANGANA TODAY" },
    { id: 18, src: "/tet.png", alt: "THE EDUCAITON TREE" },
    { id: 19, src: "/fs.png", alt: "FUNDASPRING" },
    { id: 20, src: "/nb1.png", alt: "NOTICEBARD" },
    { id: 21, src: "/jj.png", alt: "JAGRAN JOSH" },
    { id: 22, src: "/cre.png", alt: "CREATIVALS" },
    { id: 23, src: "/pg.png", alt: "PAGALGUY" },
    { id: 24, src: "/gh.png", alt: "THE GLOBAL HUES" },
    { id: 25, src: "/ex.png", alt: "ELYUXEN" },
    { id: 26, src: "/tp2.png", alt: "THE PRINT" },
    { id: 26, src: "/sach1.png", alt: "SACHI SHIKSHA" },
    { id: 26, src: "/sach.png", alt: "SACH KAHUN" },
  ];

  return (

    <div className="relative w-full bg-black py-16 overflow-hidden">
          <div className="relative max-w-full mx-auto px-4">
            {/* Title */}
            <h3 className="text-center text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 mb-12 tracking-tight">
              Our Past Media Sponsors
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