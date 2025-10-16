import React from "react";
import { motion } from "framer-motion";
import img1 from "../../assets/spons/decathlon.jpg";
import img2 from "../../assets/spons/plum.avif";
import img3 from "../../assets/spons/ACT.jpg";
import img4 from "../../assets/spons/AMD33.png";
import img5 from "../../assets/spons/altair.jpg";
import img6 from "../../assets/spons/nestle.jpg";
import img7 from "../../assets/spons/coke.jpg";
import img8 from "../../assets/spons/bharatversity.png";
import img9 from "../../assets/spons/FAB.jpg";
import img10 from "../../assets/spons/campa.png";
import img11 from "../../assets/spons/unstop.avif";
import img12 from "../../assets/spons/cornitos.jpg";
import img13 from "../../assets/spons/fitness_fundas.jpg";
import img14 from "../../assets/spons/switcheko.jpg";
import img15 from "../../assets/spons/skilligence.png";
import img16 from "../../assets/spons/2iim.png";
import img17 from "../../assets/spons/huddle-logo.png";
import img18 from "../../assets/spons/flyberrygourmet.jpg";
import img19 from "../../assets/spons/hackerthehouse.png";
import img20 from "../../assets/spons/royalbrothers.png";
import img21 from "../../assets/spons/mototek.jpg";
import img22 from "../../assets/spons/instax.png";
import img23 from "../../assets/spons/businesskeeda.png";
import img24 from "../../assets/spons/kurogaming.jpg";
import img25 from "../../assets/spons/productfolks.png";
import img26 from "../../assets/spons/novatechsolar.png";
import img27 from "../../assets/spons/Lawseek.png";

const MediaAssociates = () => {
  const associates = [
    { name: "Decathlon", image: img1, link: "https://www.decathlon.in/" },
    { name: "ACT", image: img3, link: "https://www.actcorp.in/" },
    { name: "AMD", image: img4, link: "https://www.amd.com/" },
    { name: "Coca-Cola", image: img7, link: "https://www.coca-cola.com/" },
    { name: "Nestlé", image: img6, link: "https://www.nestle.in/" },
    { name: "Cornitos", image: img12, link: "https://www.cornitos.in/" },
    { name: "Campa", image: img10, link: "https://campabeverages.com/" },
    { name: "Altair", image: img5, link: "https://www.altair.com/" },
    { name: "Bharatversity", image: img8, link: "https://bharatversity.com/" },
    { name: "Unstop", image: img11, link: "https://unstop.com/" },
    { name: "Lawseek", image: img27, link: "https://www.lawseek.ai/" },
  { name: "Instax", image: img22, link: "https://www.instax.com/" },
    {
      name: "Product Folks",
      image: img25,
      link: "https://www.theproductfolks.com/",
    },
    { name: "Fablabs", image: img9, link: "https://www.fablabs.io//" },

    { name: "Plum", image: img2, link: "https://plumgoodness.com/" },

    { name: "Kuro Gaming", image: img24, link: "https://kurogaming.com/" },

    {
      name: "Fitness Fundas",
      image: img13,
      link: "https://www.fitnessfundas.in//",
    },
    { name: "Switcheko", image: img14, link: "https://www.switcheko.com/" },
    { name: "Skilligence", image: img15, link: "https://www.skilligence.in/" },
    { name: "2IIM", image: img16, link: "https://www.2iim.com/" },
    { name: "Huddle", image: img17, link: "https://www.huddle.com/" },
    {
      name: "Flyberry Gourmet",
      image: img18,
      link: "https://flyberry.in/",
    },
    {
      name: "Hacker The House",
      image: img19,
    },
    {
      name: "Royal Brothers",
      image: img20,
      link: "https://www.royalbrothers.com/",
    },
    { name: "Mototek", image: img21, link: "https://www.mototek.in/" },
    {
      name: "Business Keeda",
      image: img23,
      link: "https://www.businesskeeda.com/",
    },

    {
      name: "Novatech Solar",
      image: img26,
    },
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
          transition={{ duration: 0.6 }}
        >
          PAST SPONSORS
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
