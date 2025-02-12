import React from "react";
import { motion } from "framer-motion";
import img1 from "../../assets/spons/times nie.png";
import img2 from "../../assets/spons/startupindia.png";
import img3 from "../../assets/spons/algocs.jpg";
import img4 from "../../assets/spons/acn.jpg";
import img5 from "../../assets/spons/knowafest.jpg";
import img6 from "../../assets/spons/startuptalky.jpg";
import img7 from "../../assets/spons/bizstandards.png";
import img8 from "../../assets/spons/timesnetwork.png";
import img9 from "../../assets/spons/blogadda.jpg";
import img10 from "../../assets/spons/HINDU.png";
import img11 from "../../assets/spons/startupstory.jpg";
import img12 from "../../assets/spons/educationtree.png";
import img13 from "../../assets/spons/campustimes.png";
import img14 from "../../assets/spons/fundaspring.jpg";
import img15 from "../../assets/spons/noticebard.jpg";
import img16 from "../../assets/spons/edtimes.jpg";
import img17 from "../../assets/spons/dailyhunt.jpg";
import img18 from "../../assets/jagran_josh.png";
import img19 from "../../assets/spons/creativals.jpg";
import img20 from "../../assets/spons/pagalgyu.png";
import img21 from "../../assets/spons/elyuxen.jpg";
import img22 from "../../assets/spons/campustimes.png";
import img23 from "../../assets/spons/youthincorporated.png";
import img24 from "../../assets/spons/theprint.png";

const MediaAssociates = () => {
  const associates = [
    {
      name: "Startup India",
      image: img2,
      link: "https://www.startupindia.gov.in/",
    },
    { name: "Times Network", image: img8, link: "https://timesnetwork.in/" },
    { name: "The Hindu", image: img10, link: "https://www.thehindu.com/" },
    { name: "Jagran Josh", image: img18, link: "https://www.jagranjosh.com/" },
    { name: "DailyHunt", image: img17, link: "https://www.dailyhunt.in/" },
    { name: "The Print", image: img24, link: "https://theprint.in/" },

    { name: "Times NIE", image: img1, link: "https://www.timesnie.com/" },
    { name: "ACN", image: img4, link: "https://www.asiancommunitynews.com/" },
    {
      name: "Campus Times",
      image: img13,
      link: "https://www.campustimespune.com/",
    },
    { name: "ED Times", image: img16, link: "https://www.edtimes.in/" },

    {
      name: "AlgoCS",
      image: img3,
      link: "https://www.instagram.com/algocs.in//",
    },
    { name: "KnowaFest", image: img5, link: "https://www.knowafest.com/" },
    { name: "StartupTalky", image: img6, link: "https://startuptalky.com/" },
    {
      name: "Biz Standards",
      image: img7,
      link: "https://www.instagram.com/bizstandards/",
    },
    { name: "BlogAdda", image: img9, link: "https://www.blogadda.com/" },
    {
      name: "Startup Story",
      image: img11,
      link: "https://thestartupstory.co.in/",
    },
    {
      name: "Education Tree",
      image: img12,
      link: "https://www.theeducationtree.com/",
    },

    { name: "FundaSpring", image: img14, link: "https://fundaspring.com/" },
    { name: "NoticeBard", image: img15, link: "https://www.noticebard.com/" },
    { name: "Creativals", image: img19, link: "https://creativals.com/" },
    { name: "PagalGuy", image: img20, link: "https://www.pagalguy.com/" },
    { name: "Elyuxen", image: img21, link: "https://elyuxen.com/" },
    {
      name: "Campus Times",
      image: img22,
      link: "https://www.campustimespune.com/",
    },
    {
      name: "Youth Incorporated",
      image: img23,
      link: "https://youthincmag.com/",
    },
  ];

  return (
    <div className="relative w-full min-h-screen bg-black py-16 overflow-hidden">
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
          className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500 mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          // transition={{ duration: 0.6 }}
        >
          PAST MEDIA PARTNERS
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
              <div className="relative rounded-2xl bg-gradient-to-b from-neutral-800/50 to-neutral-900/50 backdrop-blur-sm border border-blue-700/30 p-2 md:p-3 lg:p-4 transform transition-all duration-300 group-hover:scale-105 group-hover:border-blue-500/40">
                <div className="aspect-square rounded-xl overflow-hidden bg-white mb-2 md:mb-3 lg:mb-4">
                  <img
                    src={associate.image}
                    alt={associate.name}
                    className="w-full h-full object-contain p-1 md:p-2"
                  />
                </div>
                <div className="text-center">
                  <p className="text-xs md:text-sm lg:text-base text-blue-400 font-medium tracking-wider">
                    {associate.category}
                  </p>
                </div>
                <div className="absolute inset-0 rounded-2xl bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
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
