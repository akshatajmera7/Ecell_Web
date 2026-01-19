import React from "react";
import { motion } from "framer-motion";
import ChromaGrid from "../Teams/ChromaGrid";

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
    title: "Launchpad Executives",
    members: [
      {
        name: "Sagnik Paul",
        role: "Chairman",
        image: Sagnik,
        linkedin: "https://www.linkedin.com/in/sagnik-paul-7a0656275/",
        email: "f20220852@hyderabad.bits-pilani.ac.in",
      },
      {
        name: "Om Sonkusare",
        role: "President",
        image: Om,
        linkedin: "https://www.linkedin.com/in/omsonkusare/",
        email: "f20221703@hyderabad.bits-pilani.ac.in",
      },
      {
        name: "Manav Sharma",
        role: "Vice Chairman",
        image: Manav,
        linkedin: "https://www.linkedin.com/in/manav-sharma-033771247/",
        email: "f20221347@hyderabad.bits-pilani.ac.in",
      },
      {
        name: "Advik Kulkarni",
        role: "Vice President Collaboration and Initiatives",
        image: Advik,
        linkedin: "https://www.linkedin.com/in/advik-kulkarni-3386461b7/",
        email: "f20221632@hyderabad.bits-pilani.ac.in",
      },
      {
        name: "Raghav Agarwal",
        role: "Vice President Projects and Learning",
        image: Raghav,
        linkedin: "https://www.linkedin.com/in/raghav-agarwal-984b44266/",
        email: "f20220892@hyderabad.bits-pilani.ac.in",
      },
      {
        name: "Shreshth Borkar",
        role: "Treasurer",
        image: Shreshth,
        linkedin: "https://www.linkedin.com/in/shreshth-borkar-46abaa2a9/",
        email: "f20221650@hyderabad.bits-pilani.ac.in",
      },
      {
        name: "Surbhit Jain",
        role: "Operations Coordinator",
        image: Surbhit,
        linkedin: "https://www.linkedin.com/in/surbhit-jain-b04b72259/",
        email: "f20220868@hyderabad.bits-pilani.ac.in",
      },
      {
        name: "Shoaib Khan",
        role: "Tech Head",
        image: Shoaib,
        linkedin: "https://www.linkedin.com/in/shoaibkhan1501/",
        email: "f20220573@hyderabad.bits-pilani.ac.in",
      },
      {
        name: "Vaishnavi K",
        role: "Media Head",
        image: Vaishnavi,
        linkedin: "https://www.linkedin.com/in/vaishnavi-katragadda-9b62a3268/",
        email: "f20220783@hyderabad.bits-pilani.ac.in",
      },
      {
        name: "Ananya Agarwal",
        role: "Technical Coordinator",
        image: Ananya,
        linkedin: "https://www.linkedin.com/in/ananya-agrawal-797687243",
        email: "f20221697@hyderabad.bits-pilani.ac.in",
      },
      {
        name: "Siddhant",
        role: "Editorial Head",
        image: Siddhant,
        linkedin: "https://www.linkedin.com/in/ananya-agrawal-797687243",
        email: "f20221655@hyderabad.bits-pilani.ac.in",
      },
      {
        name: "Ishika",
        role: "Internship Coordinator",
        image: Ishika,
        linkedin:
          "https://www.linkedin.com/in/ishika-ratnawat?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        email: "f20221462@hyderabad.bits-pilani.ac.in",
      },
    ],
  },
  {
    title: "Launchpad Heads",
    members: [
      {
        name: "Mohana Varshith Bolloju",
        role: "Publicity Head",
        image: Varshith,
        linkedin: "https://www.linkedin.com/in/mohana-varshith-bolloju-18821b256/",
      },
      {
        name: "Dev Sahu",
        role: "Operations Head",
        image: Dev,
        linkedin: "https://www.linkedin.com/in/dev-sahu-41422a1aa/",
      },
      {
        name: "Purushotam Gupta",
        role: "Operations Head",
        image: Purushotam,
        linkedin: "https://www.linkedin.com/in/purushotam-gupta-62574b250/",
      },
      {
        name: "Riddhi Khandelwal",
        role: "Design Head",
        image: Riddhi,
        linkedin: "https://www.linkedin.com/in/riddhi-khandelwal-496947254/",
      },
      {
        name: "Sreenandan MS",
        role: "Videography Head",
        image: Sreenandan,
        linkedin: "https://www.linkedin.com/in/sreenandan-m-s-783902279/",
      },
      {
        name: "Utkarsh Pandey",
        role: "Hospitality Head",
        image: Utkarsh,
        linkedin: "https://www.linkedin.com/in/utkarsh-pandey-98a51327b/",
      },
    ],
  },
];

const ContactSection = () => {
  return (
    <div className="relative w-full min-h-screen bg-ecell-bg py-16 flex flex-col items-center justify-center">
      {teams.map((team) => (
        <div key={team.title} className="w-full text-center mb-12 px-4 sm:px-6 lg:px-12">
          <motion.h2
            className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-ecell-primary to-ecell-secondary text-center mb-12 font-syne"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {team.title}
          </motion.h2>

          <div className="max-w-7xl mx-auto flex justify-center">
            <ChromaGrid
              columns={3}
              rows={Math.ceil(team.members.length / 3)}
              radius={300}
              damping={0.45}
              fadeOut={0.6}
              items={team.members.map((m) => {
                const handle = m.linkedin
                  ? m.linkedin.split("/").filter(Boolean).pop()
                  : m.name.replace(/\s/g, "").toLowerCase();

                const role = (m.role || "").toLowerCase();
                let gradient = "linear-gradient(135deg, rgba(107,95,255,0.2), rgba(212,255,0,0.2))";
                let borderColor = "#6b5fff";

                if (role.includes("chairman") || role.includes("president") || role.includes("chairman")) {
                  gradient = "linear-gradient(135deg, rgba(212,255,0,0.28), rgba(107,95,255,0.24))";
                  borderColor = "#d4ff00";
                } else if (role.includes("tech") || role.includes("technical") || role.includes("design") || role.includes("videography")) {
                  gradient = "linear-gradient(135deg, rgba(107,95,255,0.26), rgba(212,255,0,0.18))";
                  borderColor = "#8b7fff";
                } else if (role.includes("media") || role.includes("publicity")) {
                  gradient = "linear-gradient(135deg, rgba(107,95,255,0.22), rgba(212,255,0,0.22))";
                  borderColor = "#6b5fff";
                } else if (role.includes("treasurer") || role.includes("operations") || role.includes("hospitality")) {
                  gradient = "linear-gradient(135deg, rgba(212,255,0,0.22), rgba(107,95,255,0.18))";
                  borderColor = "#a1ff33";
                }

                return {
                  title: m.name,
                  subtitle: m.role,
                  image: m.image,
                  handle: handle ? `@${handle.substring(0, 15)}` : undefined,
                  url: m.linkedin,
                  gradient,
                  borderColor,
                };
              })}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactSection;

