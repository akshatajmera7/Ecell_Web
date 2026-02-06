import React from "react";
import { motion } from "framer-motion";
import { PhoneIcon } from "@heroicons/react/24/outline";
import { FaLinkedin } from "react-icons/fa";
import Anshul from "../../../assets/Anshul.jpeg";
import Girisha from "../../../assets/Girisha.jpg";
import Prarthana from "../../../assets/Prarthana.jpeg";
const ContactSection = () => {
  const guestRelationsContacts = [
    {
      id: 1,
      name: "Anshul Nanwani",
      role: "Senior Associate",
      image: Anshul,
      phone: "+91 9552586398",
      linkedin: "https://www.linkedin.com/in/anshul-nanwani-040559322",
    },
    {
      id: 2,
      name: "Girisha Chalana",
      role: "Senior Associate",
      image: Girisha,
      phone: "+91 9352293509",
      linkedin: "https://www.linkedin.com/in/girisha-chalana-703a46323",
    },
    {
      id: 3,
      name: "Prarthana SIngh",
      role: "Senior Associate",
      image: Prarthana,
      phone: "+91 9369641454",
      linkedin: "https://www.linkedin.com/in/prarthana-singh-77463a318",
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
              loading="lazy" src={person.image}
              alt={person.name}
              className="w-full h-full object-contain rounded-lg"
            />
          </div>
          <div className="text-center mt-4">
            <h3 className="text-lg font-semibold text-white">{person.name}</h3>


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
  console.log("Curernt contact", guestRelationsContacts)
  return (
    <div className="relative w-full min-h-screen bg-black py-16 flex flex-col items-center justify-center">
      {/* Overall Heading */}
      <motion.h1
        className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500 text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Startup Expo Handled By
      </motion.h1>

      {/* Guest Relations Section */}
      <section className="w-full flex justify-center items-center">
        <div className="flex flex-wrap justify-center gap-8">
          {guestRelationsContacts.map((person) => (
            <ContactCard key={person.id} person={person} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ContactSection;
