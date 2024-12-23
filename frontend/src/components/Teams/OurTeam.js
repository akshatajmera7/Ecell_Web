import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import teamBgImage from "../../assets/teamBgImage.webp";
import Sagnik from "../../assets/PORs/sagnik.jpg";
import Manav from "../../assets/PORs/manav.jpg";
import Shoaib from "../../assets/shoaib.png";
import Shreshth from "../../assets/PORs/shreshth.jpg";
import Surbhit from "../../assets/PORs/surbhit.jpeg";

const teamMembers = [
  {
    name: "Om Sonkusare",
    role: "President",
    image: Sagnik,
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
    name: "Raghav Agarwal",
    role: "Vice President Projects and Learning",
    image: Shoaib,
    linkedin: "https://www.linkedin.com/in/janesmith",
    email: "jane.smith@example.com",
    bio: "Technology enthusiast driving digital transformation",
  },
  {
    name: "Advik Kulkarni",
    role: "Vice President Collaboration and Initiatives",
    image: Sagnik,
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
    name: "Manav Sharma",
    role: "Vice Chairman",
    image: Manav,
    linkedin: "https://www.linkedin.com/in/johndoe",
    email: "john.doe@example.com",
    bio: "Visionary leader passionate about entrepreneurship",
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
    image: Shoaib,
    linkedin: "https://www.linkedin.com/in/janesmith",
    email: "jane.smith@example.com",
    bio: "Technology enthusiast driving digital transformation",
  },
];

const carouselItems = ["Legacy 1", "Legacy 2", "Legacy 3", "Legacy 4"];

const OurTeam = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [ref, inView] = useInView({ threshold: 0.2 });
  const [teamRef, teamInView] = useInView({ threshold: 0.2 });
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % carouselItems.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setActiveIndex((currentIndex) => (currentIndex + 1) % carouselItems.length);
  };

  const handlePrev = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === 0 ? carouselItems.length - 1 : currentIndex - 1
    );
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section - Kept the same */}
      <motion.section
        className="h-screen relative overflow-hidden flex items-center justify-center"
        style={{
          backgroundImage: `url(${teamBgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative z-10 text-center px-4 bg-black bg-opacity-50 p-8 rounded-xl">
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-6"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.8 }}
          >
            Our Team
          </motion.h1>
          <motion.p
            className="text-2xl md:text-3xl text-gray-300"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            E - Cell 24-25
          </motion.p>
        </div>
      </motion.section>

      {/* Enhanced Team Members Section */}
      <motion.section
        ref={ref}
        className="py-24 px-6"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeIn}
        transition={{ duration: 1 }}
      >
        <motion.h2
          className="text-5xl font-bold text-center mb-16"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Meet Our PORs
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeIn}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative h-[500px] rounded-xl overflow-hidden group cursor-pointer">
                {/* Card Background with Gradient Overlay */}
                <div
                  className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black 
                  opacity-60 group-hover:opacity-90 transition-all duration-500"
                />

                {/* Member Image */}
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />

                {/* Content Container */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 transform transition-all duration-500">
                  {/* Name and Role */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="transform group-hover:-translate-y-4 transition-transform duration-500"
                  >
                    <h3 className="text-3xl font-bold mb-2 text-white">
                      {member.name}
                    </h3>
                    <p className="text-xl font-semibold text-gray-200 mb-4">
                      {member.role}
                    </p>
                  </motion.div>

                  {/* Bio - Appears on Hover */}
                  <div
                    className={`transform transition-all duration-500 ${
                      hoveredCard === index
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"
                    }`}
                  >
                    <p className="text-gray-200 mb-6 text-lg">{member.bio}</p>

                    {/* Social Links */}
                    <div className="flex space-x-6">
                      <a
                        href={member.linkedin}
                        className="text-white hover:text-gray-300 transition-colors duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fab fa-linkedin text-2xl transform hover:scale-110 transition-transform duration-300" />
                      </a>
                      <a
                        href={`mailto:${member.email}`}
                        className="text-white hover:text-gray-300 transition-colors duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fas fa-envelope text-2xl transform hover:scale-110 transition-transform duration-300" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Legacy Section - Kept the same */}
      <motion.section
        ref={teamRef}
        className="py-24 px-6 bg-black"
        initial="hidden"
        animate={teamInView ? "visible" : "hidden"}
        variants={fadeIn}
        transition={{ duration: 1 }}
      >
        <h2 className="text-5xl font-bold text-center mb-16">
          The Architects of Our Legacy
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-2xl">
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
                className="p-3 rounded-full bg-white/10 hover:bg-white/20"
              >
                <i className="fas fa-chevron-left text-xl" />
              </button>
              <button
                onClick={handleNext}
                className="p-3 rounded-full bg-white/10 hover:bg-white/20"
              >
                <i className="fas fa-chevron-right text-xl" />
              </button>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default OurTeam;
