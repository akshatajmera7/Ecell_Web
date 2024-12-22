import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import teamBgImage from "../../assets/teamBgImage.webp"; // Import the background image
import Sagnik from "../../assets/sagnik.png";
import Manav from "../../assets/manav.jpeg";
import Shoaib from "../../assets/shoaib.png";

const teamMembers = [
  {
    name: "Sagnik Paul",
    role: "Chairman",
    image: Sagnik,
    linkedin: "https://www.linkedin.com/in/johndoe",
    email: "john.doe@example.com",
  },
  {
    name: "Manav Sharma",
    role: "Vice Chairman",
    image: Manav,
    linkedin: "https://www.linkedin.com/in/janesmith",
    email: "jane.smith@example.com",
  },
  {
    name: "Shoaib Khan",
    role: "Tech Head",
    image: Shoaib,
    linkedin: "https://www.linkedin.com/in/janesmith",
    email: "jane.smith@example.com",
  },
  // Add more team members as needed
];

const OurTeam = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger once when the section enters view
    threshold: 0.2, // Trigger when 20% of the section is visible
  });

  const cardControls = useAnimation();
  const [cardRef, cardInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible"); // Start the section title animation when in view
    }
  }, [inView, controls]);

  useEffect(() => {
    if (cardInView) {
      cardControls.start("visible"); // Start the card animations when in view
    }
  }, [cardInView, cardControls]);

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="w-full bg-black text-white">
      {/* Background Image Section */}
      <section
        className="h-screen bg-cover bg-center flex flex-col justify-center items-center text-center"
        style={{ backgroundImage: `url(${teamBgImage})` }}
      >
        <motion.div
          className="animate-fadeIn"
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={sectionVariants}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium mb-8 leading-tight">
            Our Team
          </h1>
        </motion.div>

        <motion.div
          className="text-2xl mt-4 text-gray-300"
          initial="hidden"
          animate={controls}
          variants={sectionVariants}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <p>E Cell 24-25</p>
        </motion.div>
      </section>

      {/* Team Members Section */}
      <section className="py-16">
        <h2 className="text-4xl font-bold text-center mb-12">Meet Our PORs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 max-w-7xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
              ref={cardRef}
              initial="hidden"
              animate={cardControls}
              variants={cardVariants}
              transition={{ duration: 1, delay: index * 0.2 }} // Add a slight delay for each card
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-400">{member.role}</p>
                <div className="flex justify-center mt-4 space-x-4">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-400"
                  >
                    <i className="fab fa-linkedin text-xl"></i>
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-500 hover:text-red-400"
                  >
                    <i className="fas fa-envelope text-xl"></i>
                  </a>
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