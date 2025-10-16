import React from "react";
import { motion } from "framer-motion";
import img1 from "../../assets/spons/50knetwork.jpeg";
import img2 from "../../assets/spons/10000startup.png";
import img3 from "../../assets/spons/venturecatalysts.png";
import img4 from "../../assets/spons/startuphyderabad.jpeg";
import img5 from "../../assets/spons/thub.png";
import img6 from "../../assets/spons/turbostart.jpeg";
import img7 from "../../assets/spons/googlecloud.png";
import img8 from "../../assets/spons/cloudesign.png";
import img9 from "../../assets/spons/catechnologies.jpeg";
import img10 from "../../assets/spons/sciofoundation.png";
import img11 from "../../assets/spons/badabuisness.png";
import img12 from "../../assets/spons/learnngwhile travelling.jpeg";
import img13 from "../../assets/spons/ncore.png";
import img14 from "../../assets/spons/enactus.png";
import img15 from "../../assets/spons/lemon.png";
import img16 from "../../assets/spons/fundsindia.png";
import img17 from "../../assets/spons/jaarvis.png";
import img18 from "../../assets/spons/sucseed.png";
import img19 from "../../assets/spons/leada.png";
import img20 from "../../assets/spons/yourstartupol.jpeg";
import img21 from "../../assets/spons/cosmos.png";
import img22 from "../../assets/spons/nirmaan.png";
import img23 from "../../assets/spons/ecell.jpeg";

const MediaAssociates = () => {
  const associates = [
    { name: "Google Cloud", image: img7, link: "https://cloud.google.com/" },
    { name: "T-Hub", image: img5, link: "https://www.t-hub.co/" },
    { name: "TurboStart", image: img6, link: "https://www.turbostart.co/" },
    { name: "Cloudesign", image: img8, link: "https://cloudesign.com/" },
    {
      name: "Venture Catalysts",
      image: img3,
      link: "https://venturecatalysts.in/",
    },
    {
      name: "Startup Hyderabad",
      image: img4,
    },
    { name: "Enactus", image: img14, link: "https://enactus.org/" },
    { name: "Lemon Ideas", image: img15, link: "https://lemonideas.in/" },
    {
      name: "SucSEED Ventures",
      image: img18,
      link: "https://sucseed-indovation.com/",
    },
    {
      name: "Nirmaan Organization",
      image: img22,
      link: "https://nirmaan.org/",
    },
    { name: "E-Cell", image: img23, link: "https://ecell.iiit.ac.in/" },

    { name: "50K Network", image: img1 },
    {
      name: "10,000 Startups",
      image: img2,
      link: "https://www.10000startups.com/",
    },

    { name: "TurboStart", image: img6, link: "https://www.turbostart.co/" },
    { name: "FundsIndia", image: img16, link: "https://www.fundsindia.com/" },

    {
      name: "Scio Foundation",
      image: img10,
      link: "https://www.sciofoundation.org/",
    },
    {
      name: "Learning While Travelling",
      image: img12,
      link: "https://learningwhiletravelling.com/",
    },
    {
      name: "CA Technologies",
      image: img9,
      link: "https://www.broadcom.com/",
    },
    {
      name: "Bada Business",
      image: img11,
      link: "https://www.badabusiness.com/",
    },

    { name: "nCore Games", image: img13 },
    {
      name: "Jaarvis Accelerator",
      image: img17,
    },

    { name: "Leada", image: img19, link: "https://leadangels.in/" },
    {
      name: "Your Startup",
      image: img20,
    },
    { name: "Cosmos", image: img21 },
  ];

  return (
  <div className="relative w-full min-h-screen py-16 overflow-hidden" style={{ backgroundColor: '#0C233C', color: '#F5EDE4' }}>
      <div className="absolute inset-0">
        {/* No gradient background, keeping it pure black */}
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 4 + 1 + "px",
              height: Math.random() * 4 + 1 + "px",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: `rgba(63, 81, 181, ${Math.random() * 0.3})`,
              animation: `twinkle ${Math.random() * 3 + 2}s infinite ${
                Math.random() * 2
              }s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <motion.h2
          className="text-5xl font-bold mb-16 text-center"
          style={{ color: '#F5EDE4', textShadow: '0 0 14px rgba(0,0,0,0.35)' }}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          // transition={{ duration: 0.6 }}
        >
          PAST PARTNERS
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {associates.map((associate, index) => (
            <motion.a
              href={associate.link}
              key={associate.id}
              target="_blank"
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              // transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="relative rounded-2xl p-2 md:p-3 lg:p-4 transform transition-all duration-300 group-hover:scale-105" style={{ backgroundColor: 'rgba(12,35,60,0.85)', border: '1px solid rgba(245,237,228,0.12)' }}>
                <div className="aspect-square rounded-xl overflow-hidden bg-white mb-2 md:mb-3 lg:mb-4">
                  <img
                    src={associate.image}
                    alt={associate.name}
                    className="w-full h-full object-contain p-1 md:p-2"
                  />
                </div>
                <div className="text-center">
                  <p className="text-xs md:text-sm lg:text-base font-medium tracking-wider" style={{ color: 'rgba(245,237,228,0.7)' }}>
                    {associate.category}
                  </p>
                </div>
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ backgroundColor: 'rgba(253, 137, 22, 0.08)' }} />
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes twinkle {
          0%,
          100% {
            opacity: 0.1;
            transform: scale(0.6);
          }
          50% {
            opacity: 0.6;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default MediaAssociates;
