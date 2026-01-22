import React from "react";
import { motion } from "framer-motion";
import { PhoneIcon } from "@heroicons/react/24/outline";
import { FaLinkedin } from "react-icons/fa";
import Divvij from "../../../assets/Divvij.jpeg";
import Ramya from "../../../assets/Ramya.jpeg";
import sonakshi from "../../../assets/sonakshi.jpeg";
const ContactSection = () => {
  const guestRelationsContacts = [
    {
      id: 1,
      name: "Divvij Chichra",
      image: Divvij,
      phone: "+91 9313135129",
      linkedin: "https://in.linkedin.com/in/divvij-chichra-3ab7b4327",
    },
    {
      id: 2,
      name: "Ramya S",
      image: Ramya,
      phone: "+91 6382757845",
      linkedin: "https://www.linkedin.com/in/ramya-s-88514422a",
    },
    {
      id: 3,
      name: "Sonakshi Bhaumik",
      image: sonakshi,
      phone: "+91 9902536008",
      linkedin: "https://www.linkedin.com/in/sonakshi-bhaumik-761525311",
    }
  ];

  const ContactCard = ({ person }) => (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="relative rounded-2xl bg-gradient-to-b from-blue-900/50 to-gray-900/50 backdrop-blur-sm border border-blue-700/30 p-4 transform transition-all duration-300 group-hover:scale-105">
        <div className="flex flex-col items-center">
          <div className="w-full h-48 rounded-xl overflow-hidden border border-blue-700/50">
            <img
              src={person.image}
              alt={person.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center mt-4">
            <h3 className="text-lg font-semibold text-white">{person.name}</h3>
            <p className="text-sm text-blue-400">{person.role}</p>

            {/* Social Links */}
            <div className="flex gap-4 justify-center mt-3">
              <a href={`tel:${person.phone}`} className="text-blue-400 hover:text-blue-300 flex items-center gap-2">
                <PhoneIcon className="w-5 h-5" />
                <span className="text-sm">{person.phone}</span>
              </a>
              <a href={person.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                <FaLinkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="relative w-full bg-black py-4 flex flex-col items-center justify-center">
      {/* Overall Heading */}
      <motion.h1
        className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500 text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Ground Reality Handled By
      </motion.h1>

      {/* Guest Relations Section */}
      <section className="w-full flex justify-center items-center">
        <div className="grid place-items-center">
          {guestRelationsContacts.map((person) => (
            <ContactCard key={person.id} person={person} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ContactSection;