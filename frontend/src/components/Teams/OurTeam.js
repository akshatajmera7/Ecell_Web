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

const carouselItems = ["Legacy 1", "Legacy 2", "Legacy 3", "Legacy 4"];

const OurTeam = () => {
  const [, setActiveIndex] = useState(0);
  const [ref, inView] = useInView({ threshold: 0.2 });
  const [, setHoveredCard] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % carouselItems.length);
    }, 4000);

    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      clearInterval(interval);
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-12 max-w-7xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial="hidden"
              animate={inView && !isMobile ? "visible" : "visible"}
              variants={fadeIn}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative rounded-lg overflow-hidden group cursor-pointer">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-72 sm:h-80 md:h-96 object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black opacity-60 group-hover:opacity-90 transition-all duration-500" />
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 text-white">
                    {member.name}
                  </h3>
                  <p className="text-sm sm:text-base font-semibold text-gray-300">
                    {member.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default OurTeam;
