import React from "react";
<<<<<<< Updated upstream
import "./OurTeam.css"; // Import the CSS for the "Our Team" page
import teamBgImage from "../../assets/teamBgImage.webp"; // Import the background image
=======
import "././OurTeam.css"; // Import the CSS for the "Our Team" page
>>>>>>> Stashed changes

const OurTeam = () => {
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
          <h1>Our Team</h1> {/* Main heading for the bgimage section */}
          <p>E Cell 24-25</p> {/* Subheading for the bgimage section */}
        </div>
      </section>
    </div>
  );
};

export default OurTeam;