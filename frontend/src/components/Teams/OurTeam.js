import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion"; // Fixed: added useAnimation import
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

  const [activeIndex, setActiveIndex] = useState(0);
  const carouselItems = [
    "Placeholder 1",
    "Placeholder 2",
    "Placeholder 3",
  ];

  // Initialize section title and card animations
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  useEffect(() => {
    if (cardInView) {
      cardControls.start("visible");
    }
  }, [cardInView, cardControls]);

  // Automatic sliding of the carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
    }, 3000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const handlePrevClick = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
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
          variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
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
          variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
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
              variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 1, delay: index * 0.2 }}
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

      {/* Placeholder Carousel Section */}
      <section className="py-16">
        <h2 className="text-4xl font-bold text-center mb-12">E cell Team Photo</h2>
        <div className="relative flex justify-center items-center w-3/4 mx-auto bg-gray-800 rounded-lg overflow-hidden shadow-lg">
          <button
            onClick={handlePrevClick}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <img
            src={`https://via.placeholder.com/600x400?text=${carouselItems[activeIndex]}`}
            alt={carouselItems[activeIndex]}
            className="w-full h-96 object-cover transition-all duration-300 ease-in-out"
          />
          <button
            onClick={handleNextClick}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </section>
    </div>
  );
};

export default OurTeam;
