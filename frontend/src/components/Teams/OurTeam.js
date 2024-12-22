import React, { useState, useEffect, useRef } from "react";
import "./OurTeam.css"; // Import the CSS for the "Our Team" page
import "./TeamMembers.css"; // Import the CSS for the team members section
import teamBgImage from "../../assets/teamBgImage.webp"; // Import the background image

// Define the team members array here
const teamMembers = [
  {
    name: "John Doe",
    role: "Team Leader",
    image: require("../../assets/profilePhotos.jpeg"),
    linkedin: "https://www.linkedin.com/in/johndoe",
    email: "john.doe@example.com",
  },
  {
    name: "Jane Smith",
    role: "Developer",
    image: require("../../assets/profilePhotos.jpeg"),
    linkedin: "https://www.linkedin.com/in/janesmith",
    email: "jane.smith@example.com",
  },
  {
    name: "Jane Smith",
    role: "Developer",
    image: require("../../assets/profilePhotos.jpeg"),
    linkedin: "https://www.linkedin.com/in/janesmith",
    email: "jane.smith@example.com",
  },
  {
    name: "Jane Smith",
    role: "Developer",
    image: require("../../assets/profilePhotos.jpeg"),
    linkedin: "https://www.linkedin.com/in/janesmith",
    email: "jane.smith@example.com",
  },
  {
    name: "Jane Smith",
    role: "Developer",
    image: require("../../assets/profilePhotos.jpeg"),
    linkedin: "https://www.linkedin.com/in/janesmith",
    email: "jane.smith@example.com",
  },
  {
    name: "Jane Smith",
    role: "Developer",
    image: require("../../assets/profilePhotos.jpeg"),
    linkedin: "https://www.linkedin.com/in/janesmith",
    email: "jane.smith@example.com",
  },
  {
    name: "Jane Smith",
    role: "Developer",
    image: require("../../assets/profilePhotos.jpeg"),
    linkedin: "https://www.linkedin.com/in/janesmith",
    email: "jane.smith@example.com",
  },
  {
    name: "Jane Smith",
    role: "Developer",
    image: require("../../assets/profilePhotos.jpeg"),
    linkedin: "https://www.linkedin.com/in/janesmith",
    email: "jane.smith@example.com",
  },
  // Add more team members as needed
];

const OurTeam = () => {
  const [isVisible, setIsVisible] = useState(false);
  const teamSectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the section is visible
      }
    );

    if (teamSectionRef.current) {
      observer.observe(teamSectionRef.current);
    }

    return () => {
      if (teamSectionRef.current) {
        observer.unobserve(teamSectionRef.current);
      }
    };
  }, []);

  return (
    <div className="ourteam-container">
      {/* Background Image Section */}
      <section
        className="bgimage"
        style={{
          backgroundImage: `url(${teamBgImage})`,
        }}
      >
        <div className="bgimage-content">
          <h1>Our Team</h1>
          <p>E Cell 24-25</p>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="team-section" ref={teamSectionRef}>
        <h2 className={isVisible ? "appear" : ""}>Meet Our Team</h2>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div className="team-member" key={index}>
              <img
                src={member.image}
                alt={member.name}
                className="team-photo"
              />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
              <div className="team-icons">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin"></i> {/* LinkedIn Icon */}
                </a>
                <a
                  href={`mailto:${member.email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-envelope"></i> {/* Mail Icon */}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default OurTeam;
