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
    ],
  },
  {
    title: "Launchpad Heads",
    members: [
      {
      name: "Sagnik Paul",
      role: "Launchpad Chairman",
      image: Sagnik,
      linkedin: "https://www.linkedin.com/in/sagnik-paul-7a0656275/",
      instagram: "https://www.instagram.com/__sagnik__paul__",
      bio: "Strategic thinker with a focus on innovation",
    },
    {
      name: "Om Sonkusare",
      role: "President",
      image: Om,
      linkedin: "https://www.linkedin.com/in/omsonkusare/",
      instagram: "https://www.instagram.com/omaniac_02",
      bio: "Visionary leader passionate about entrepreneurship",
    },
    {
      name: "Manav Sharma",
      role: "Vice Chairman",
      image: Manav,
      linkedin: "https://www.linkedin.com/in/manav-sharma-033771247/",
      instagram: "https://www.instagram.com/im_manav_weee",
      bio: "Visionary leader passionate about entrepreneurship",
    },
    {
      name: "Raghav Agarwal",
      role: "Vice President Projects and Learning",
      image: Raghav,
      linkedin: "https://www.linkedin.com/in/raghav-agarwal-984b44266/",
      instagram: "https://www.instagram.com/agarwal._raghav",
      bio: "Technology enthusiast driving digital transformation",
    },
    {
      name: "Advik Kulkarni",
      role: "Vice President Collaboration and Initiatives",
      image: Advik,
      linkedin: "https://www.linkedin.com/in/advik-kulkarni-3386461b7/",
      instagram: "https://www.instagram.com/advik_kulkarni",
      bio: "Visionary leader passionate about entrepreneurship",
    },
    {
      name: "Shreshth Borkar",
      role: "Treasurer",
      image: Shreshth,
      linkedin: "https://www.linkedin.com/in/shreshth-borkar-46abaa2a9/",
      instagram: "https://www.instagram.com/shreshthborkar",
      bio: "Strategic thinker with a focus on innovation",
    },
    {
      name: "Surbhit Jain",
      role: "Operations Coordinator",
      image: Surbhit,
      linkedin: "https://www.linkedin.com/in/surbhit-jain-b04b72259/",
      instagram: "https://www.instagram.com/surbhit.jjj",
      bio: "Technology enthusiast driving digital transformation",
    },
    {
      name: "Shoaib Khan",
      role: "Tech Head",
      image: Shoaib,
      linkedin: "https://www.linkedin.com/in/shoaibkhan1501/",
      instagram: "https://www.instagram.com/shoaib_khan_1501",
      bio: "Strategic thinker with a focus on innovation",
    },
    {
      name: "Vaishnavi K",
      role: "Media Head",
      image: Vaishnavi,
      linkedin: "https://www.linkedin.com/in/vaishnavi-katragadda-9b62a3268/",
      instagram: "https://www.instagram.com/vaishh.naviiii",
      bio: "Technology enthusiast driving digital transformation",
    },
    {
      name: "Mohana Varshith Bolloju",
      role: "Publicity Head",
      image: Varshith,
      linkedin:
        "https://www.linkedin.com/in/mohana-varshith-bolloju-18821b256/",
      instagram: "https://www.instagram.com/varshith_304",
      bio: "Technology enthusiast driving digital transformation",
    },
    {
      name: "Dev Sahu",
      role: "Operations Head",
      image: Dev,
      linkedin: "https://www.linkedin.com/in/dev-sahu-41422a1aa/",
      instagram: "https://www.instagram.com/__.dev1.__",
      bio: "Technology enthusiast driving digital transformation",
    },
    {
      name: "Purushotam Gupta",
      role: "Operations Head",
      image: Purushotam,
      linkedin: "https://www.linkedin.com/in/purushotam-gupta-62574b250/",
      instagram: "https://www.instagram.com/purushotam_g_007",
      bio: "Technology enthusiast driving digital transformation",
    },
    {
      name: "Riddhi Khandelwal",
      role: "Design Head",
      image: Riddhi,
      linkedin: "https://www.linkedin.com/in/riddhi-khandelwal-496947254/",
      instagram: "https://www.instagram.com/krid.___",
      bio: "Technology enthusiast driving digital transformation",
    },
    {
      name: "Sreenandan MS",
      role: "Videography Head",
      image: Sreenandan,
      linkedin: "https://www.linkedin.com/in/sreenandan-m-s-783902279/",
      instagram: "https://www.instagram.com/iinsominar",
      bio: "Technology enthusiast driving digital transformation",
    },
    {
      name: "Utkarsh Pandey",
      role: "Hospitality Head",
      image: Utkarsh,
      linkedin: "https://www.linkedin.com/in/utkarsh-pandey-98a51327b/",
      instagram: "https://www.instagram.com/utkarshpandey_183",
      bio: "Technology enthusiast driving digital transformation",
    },
    {
      name: "Ananya Agarwal",
      role: "Training Coordinator",
      image: Ananya,
      linkedin: "https://www.linkedin.com/in/ananya-agrawal-797687243",
      instagram: "https://www.instagram.com/ananyagrawal26?igsh=MWQ1dGJ4eGVvYnpnZA==",
      bio: "Technology enthusiast driving digital transformation",
    },
    {
      name: "Ishika Ratnawat",
      role: "Internship Coordinator",
      image: Ishika,
      linkedin: "https://www.linkedin.com/in/ishika-ratnawat?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      instagram: "https://www.instagram.com/ishika_ratnawat?igsh=MXZibDVqcHUyejVxNA%3D%3D&utm_source=qr",
      bio: "Technology enthusiast driving digital transformation",
    },
    {
      name: "Siddhant",
      role: "Editorial Head",
      image: Siddhant,
      instagram:"https://www.instagram.com/sid._2401?igsh=MTFyYzQyMG52ZjA2OA==",
      bio: "Technology enthusiast driving digital transformation",
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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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
