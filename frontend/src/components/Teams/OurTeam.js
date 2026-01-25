import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Sagnik from "../../assets/PORs/sagnik.jpg";
import Advik from "../../assets/PORs/advik.png";
import Manav from "../../assets/PORs/manav.jpg";
import Shoaib from "../../assets/shoaib.png";
import Shreshth from "../../assets/PORs/shreshth.jpg";
import Surbhit from "../../assets/PORs/surbhit.jpeg";
import Vaishnavi from "../../assets/PORs/vaishnavi.png";
import Raghav from "../../assets/PORs/raghav.jpeg";
import Om from "../../assets/PORs/om.jpeg";
import Ananya from "../../assets/PORs/ananya.jpeg";
import Siddhant from "../../assets/PORs/siddhant.jpeg";
import Ishika from "../../assets/PORs/ishika.jpeg";
import ChromaGrid from "./ChromaGrid";

const teamMembers = [
  {
    name: "Om Sonkusare",
    role: "President",
    image: Om,
    linkedin: "https://www.linkedin.com/in/johndoe",
    email: "john.doe@example.com",
    bio: "Visionary leader passionate about entrepreneurship",
  },
  {
    name: "Sagnik Paul",
    role: "Launchpad Chairman",
    image: Sagnik,
    linkedin: "https://www.linkedin.com/in/janesmith",
    email: "jane.smith@example.com",
    bio: "Strategic thinker with a focus on innovation",
  },
  {
    name: "Advik Kulkarni",
    role: "Vice President Collaboration and Initiatives",
    image: Advik,
    linkedin: "https://www.linkedin.com/in/johndoe",
    email: "john.doe@example.com",
    bio: "Visionary leader passionate about entrepreneurship",
  },
  {
    name: "Raghav Agarwal",
    role: "Vice President Projects and Learning",
    image: Raghav,
    linkedin: "https://www.linkedin.com/in/janesmith",
    email: "jane.smith@example.com",
    bio: "Technology enthusiast driving digital transformation",
  },
  {
    name: "Manav Sharma",
    role: "Vice Chairman",
    image: Manav,
    linkedin: "https://www.linkedin.com/in/johndoe",
    email: "john.doe@example.com",
    bio: "Visionary leader passionate about entrepreneurship",
  },
  {
    name: "Shreshth Borkar",
    role: "Treasurer",
    image: Shreshth,
    linkedin: "https://www.linkedin.com/in/janesmith",
    email: "jane.smith@example.com",
    bio: "Strategic thinker with a focus on innovation",
  },
  {
    name: "Surbhit Jain",
    role: "Operations Coordinator",
    image: Surbhit,
    linkedin: "https://www.linkedin.com/in/janesmith",
    email: "jane.smith@example.com",
    bio: "Technology enthusiast driving digital transformation",
  },
  {
    name: "Shoaib Khan",
    role: "Tech Head",
    image: Shoaib,
    linkedin: "https://www.linkedin.com/in/janesmith",
    email: "jane.smith@example.com",
    bio: "Strategic thinker with a focus on innovation",
  },
  {
    name: "Vaishnavi K",
    role: "Media Head",
    image: Vaishnavi,
    linkedin: "https://www.linkedin.com/in/janesmith",
    email: "jane.smith@example.com",
    bio: "Technology enthusiast driving digital transformation",
  },
  {
    name: "Ananya Agarwal",
    role: "Technical Coordinator",
    image: Ananya,
    linkedin: "https://www.linkedin.com/in/ananya-agrawal-797687243",
    email: "jane.smith@example.com",
    bio: "Technology enthusiast driving digital transformation",
  },
  {
    name: "Siddhant",
    role: "Editorial Head",
    image: Siddhant,
    linkedin: "https://www.linkedin.com/in/ananya-agrawal-797687243",
    email: "jane.smith@example.com",
    bio: "Technology enthusiast driving digital transformation",
  },
  {
    name: "Ishika",
    role: "Internship Coordinator",
    image: Ishika,
    linkedin:
      "https://www.linkedin.com/in/ishika-ratnawat?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    email: "jane.smith@example.com",
    bio: "Technology enthusiast driving digital transformation",
  },
];

const OurTeam = () => {
  const [ref, inView] = useInView({ threshold: 0.2 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <motion.section
        className="h-screen relative overflow-hidden flex items-center justify-center"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative z-10 text-center px-4 bg-black bg-opacity-50 p-8 rounded-xl">
          <motion.h1
            className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.8 }}
          >
            Our Team
          </motion.h1>
          <motion.p
            className="text-lg sm:text-2xl md:text-3xl text-gray-300"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            E - Cell 24-25
          </motion.p>
        </div>
      </motion.section>

      {/* Team Members Section */}
      <section ref={ref} className="py-12 sm:py-24 px-4 sm:px-6 lg:px-12">
        <motion.h2
          className="text-3xl sm:text-5xl font-bold text-center mb-8 sm:mb-16"
          initial="hidden"
          animate={inView && !isMobile ? "visible" : "visible"}
          variants={fadeIn}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Meet Our PORs
        </motion.h2>
        {/* ChromaGrid for PORs */}
        <div className="max-w-7xl mx-auto flex justify-center">
          <ChromaGrid
            columns={isMobile ? 1 : 3}
            rows={Math.ceil(teamMembers.length / (isMobile ? 1 : 3))}
            radius={300}
            damping={0.45}
            fadeOut={0.6}
            items={teamMembers.map((m) => {
              // derive a simple handle from linkedin or name
              const handle = m.linkedin
                ? m.linkedin.split("/").filter(Boolean).pop()
                : m.name.replace(/\s/g, "").toLowerCase();

              // themed gradient & border by role
              const role = (m.role || "").toLowerCase();
              let gradient =
                "linear-gradient(135deg, rgba(107,95,255,0.2), rgba(212,255,0,0.2))";
              let borderColor = "#6b5fff";

              if (role.includes("president") || role.includes("chair")) {
                gradient =
                  "linear-gradient(135deg, rgba(212,255,0,0.28), rgba(107,95,255,0.24))";
                borderColor = "#d4ff00";
              } else if (role.includes("tech") || role.includes("technical")) {
                gradient =
                  "linear-gradient(135deg, rgba(107,95,255,0.26), rgba(212,255,0,0.18))";
                borderColor = "#8b7fff";
              } else if (role.includes("media") || role.includes("editorial")) {
                gradient =
                  "linear-gradient(135deg, rgba(107,95,255,0.22), rgba(212,255,0,0.22))";
                borderColor = "#6b5fff";
              } else if (role.includes("treasurer") || role.includes("operations")) {
                gradient =
                  "linear-gradient(135deg, rgba(212,255,0,0.22), rgba(107,95,255,0.18))";
                borderColor = "#a1ff33";
              }

              return {
                title: m.name,
                subtitle: m.role,
                image: m.image,
                handle: handle ? `@${handle}` : undefined,
                url: m.linkedin,
                gradient,
                borderColor,
              };
            })}
          />
        </div>
        {/* Carousel Section
      <motion.section
        ref={teamRef}
        className="py-12 sm:py-24 px-4 sm:px-6 bg-black"
        initial="hidden"
        animate={teamInView ? "visible" : "hidden"}
        variants={fadeIn}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl sm:text-5xl font-bold text-center mb-8 sm:mb-16">
          The Architects of Our Legacy
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-xl">
            <motion.img
              src={`https://via.placeholder.com/1920x1080?text=${carouselItems[activeIndex]}`}
              alt={`Carousel item ${activeIndex}`}
              key={activeIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 flex items-center justify-between p-4">
              <button
                onClick={handlePrev}
                className="p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20"
              >
                <i className="fas fa-chevron-left text-sm sm:text-xl" />
              </button>
              <button
                onClick={handleNext}
                className="p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20"
              >
                <i className="fas fa-chevron-right text-sm sm:text-xl" />
              </button>
            </div>
          </div>
        </div>
        
      </motion.section> */}
      </section>
    </div>
  );
};

export default OurTeam;

