import React from "react";
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

const TeamSection = () => {
  const teamMembers = [
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
  ];

  return (
    <div className="relative h-full w-full bg-black overflow-hidden py-16 px-8">
      {/* Particle and Glow Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: `hsl(${220 + Math.random() * 40}, 85%, 75%)`,
              opacity: Math.random() * 0.5 + 0.1,
              transform: `scale(${Math.random() * 0.5 + 0.5})`,
              animation: `twinkle ${2 + Math.random() * 4}s infinite ${
                Math.random() * 5
              }s`,
            }}
          />
        ))}
      </div>

      {/* Section Header */}
      <div className="text-center space-y-6 z-10 relative">
        <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-blue-200 to-indigo-300 animate-text-shimmer">
          Meet Our Team
        </h2>
        <p className="text-lg text-gray-400">
          Discover the incredible people driving innovation and creativity
          behind the scenes.
        </p>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 z-10 relative">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="group p-4 rounded-lg bg-gradient-to-br from-gray-800 via-gray-900 to-black hover:bg-gradient-to-r hover:from-indigo-500 hover:via-blue-500 hover:to-indigo-500 transition-all duration-500"
          >
            {/* Image */}
            <div className="w-full h-64 relative overflow-hidden rounded-lg">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            {/* Name and Role */}
            <h3 className="mt-4 text-lg font-semibold text-indigo-300 group-hover:text-white">
              {member.name}
            </h3>
            <p className="text-sm text-gray-400 group-hover:text-gray-200">
              {member.role}
            </p>
            <div className="flex justify-center space-x-4 mt-4">
              {/* LinkedIn Button */}
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-300 hover:text-indigo-400"
              >
                <svg
                  className="w-6 h-6" // Adjust size
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.23 0H1.77C.79 0 0 .77 0 1.75v20.5C0 23.23.77 24 1.77 24h20.5c.98 0 1.73-.77 1.73-1.75V1.75C24 .77 23.25 0 22.23 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.58a2.07 2.07 0 110-4.14 2.07 2.07 0 010 4.14zM20.45 20.45h-3.56v-5.6c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.7h-3.56V9h3.42v1.56h.05c.48-.9 1.66-1.85 3.42-1.85 3.65 0 4.33 2.4 4.33 5.5v6.24z" />
                </svg>
              </a>
              {/* Instagram Button */}
              <a
                href={member.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-300 hover:text-indigo-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6" // Uniform size
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;

// Required Styles for Twinkle and Shimmer
const styles = `
  @keyframes twinkle {
    0%, 100% { opacity: 0.1; transform: scale(0.6); }
    50% { opacity: 0.6; transform: scale(1); }
  }

  @keyframes text-shimmer {
    0% { background-position: 200% 50%; }
    100% { background-position: -200% 50%; }
  }

  .animate-text-shimmer {
    background-size: 400% auto;
    animation: text-shimmer 8s linear infinite;
  }
`;

const styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
