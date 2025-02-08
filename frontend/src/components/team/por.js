import React from "react";
import { motion } from "framer-motion";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { FaLinkedin } from "react-icons/fa";
import Sagnik from "../../assets/sagnik.png";
import Advik from "../../assets/advik.png";
import Manav from "../../assets/manav.jpeg";
import Shoaib from "../../assets/shoaib.png";
import Shreshth from "../../assets/shreshth.jpg";
import Surbhit from "../../assets/surbhit.jpeg";
import Vaishnavi from "../../assets/vaishnavi.png";
import Raghav from "../../assets/raghav.jpeg";
import Om from "../../assets/om.jpeg";
import Dev from "../../assets/dev.jpg";
import Varshith from "../../assets/varshith.jpg";
import Riddhi from "../../assets/riddhi.jpg";
import Sreenandan from "../../assets/nandan.jpg";
import Purushotam from "../../assets/purushotam.jpeg";
import Utkarsh from "../../assets/utkarsh.jpeg";
import Ananya from "../../assets/ananya.jpeg";
import Siddhant from "../../assets/siddhant.jpeg";
import Ishika from "../../assets/ishika.jpeg";

const teams = [
  {
    title: "E - Cell Office",
    members: [
      {
        id: 1,
        name: "Prathamesh Yeole",
        role: "Guest Relations Head",
        image: Shoaib,
        email: "mailto:prathamesh@example.com",
        linkedin: "https://linkedin.com/in/prathamesh",
      },
      {
        id: 2,
        name: "Advait Kulkarni",
        role: "Guest Relations Head",
        image: "/api/placeholder/200/200",
        email: "mailto:advait@example.com",
        linkedin: "https://linkedin.com/in/advait",
      },
    ],
  },
  {
    title: "Launchpad Heads",
    members: [
      {
        id: 3,
        name: "Rahul Sharma",
        role: "Sponsorship Head",
        image: Shoaib,
        email: "mailto:rahul@example.com",
        linkedin: "https://linkedin.com/in/rahul",
      },
    ],
  },
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
          <img src={person.image} alt={person.name} className="w-full h-full object-cover" />
        </div>
        <div className="text-center mt-4">
          <h3 className="text-lg font-semibold text-white">{person.name}</h3>
          <p className="text-sm text-blue-400">{person.role}</p>

          <div className="flex gap-4 justify-center mt-3">
            <a href={person.email} className="text-blue-400 hover:text-blue-300">
              <EnvelopeIcon className="w-5 h-5" />
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

const ContactSection = () => {
  return (
    <div className="relative w-full min-h-screen bg-black py-16 flex flex-col items-center justify-center">
      {teams.map((team) => (
        <div key={team.title} className="w-full text-center mb-12">
          <motion.h1
            className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500 text-center mb-8"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {team.title}
          </motion.h1>

          <section className="w-full flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {team.members.map((person) => (
                <ContactCard key={person.id} person={person} />
              ))}
            </div>
          </section>
        </div>
      ))}
    </div>
  );
};

export default ContactSection;
