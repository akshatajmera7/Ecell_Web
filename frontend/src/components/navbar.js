import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Phone } from "lucide-react";
import "./Navbar.css";
import logo from "../assets/navbarlogo.png";
import lplogo from "../assets/lplogo.jpeg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar-new ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-container-new">
        <div className="nav-logo-box">
          <Link to="/" className="navbar-logo-link">
            <img src={logo} alt="E-CELL" className="nav-logo-img" />
          </Link>
        </div>

        <div className="nav-main-content">
          <div className="nav-row-top">
            <NavLink
              to="/program"
              className={({ isActive }) => `nav-link-new ${isActive ? "active" : ""}`}
            >
              Programs & Initiatives
            </NavLink>
            <NavLink
              to="/team"
              className={({ isActive }) => `nav-link-new ${isActive ? "active" : ""}`}
            >
              Our Team
            </NavLink>
            <NavLink
              to="/na"
              className={({ isActive }) => `nav-link-new ${isActive ? "active" : ""}`}
            >
              Networking Arena
            </NavLink>
          </div>
          <div className="nav-row-bottom">
            <div className="nav-cell-bottom border-right">
              <NavLink
                to="/launchpad"
                className={({ isActive }) => `nav-link-new ${isActive ? "active" : ""}`}
              >
                <img src={lplogo} alt="LP" className="lp-icon-nav" />
                Launchpad
              </NavLink>
            </div>
            <div className="nav-cell-bottom">
              <NavLink
                to="/contact"
                className={({ isActive }) => `nav-link-new ${isActive ? "active" : ""}`}
              >
                <Phone size={14} className="nav-icon-phone" />
                Contact Us
              </NavLink>
            </div>
          </div>
        </div>

        <div className="nav-hamburger-box" onClick={toggleMenu}>
          <div className={`hamburger-new ${isOpen ? "active" : ""}`}>
            <div className="h-bar"></div>
            <div className="h-bar"></div>
            <div className="h-bar"></div>
          </div>
        </div>
      </div>

      <div className={`mobile-overlay ${isOpen ? "active" : ""}`}>
        <ul className="mobile-links">
          <li><NavLink to="/program" onClick={toggleMenu}>Programs & Initiatives</NavLink></li>
          <li><NavLink to="/team" onClick={toggleMenu}>Our Team</NavLink></li>
          <li><NavLink to="/na" onClick={toggleMenu}>Networking Arena</NavLink></li>
          <li><NavLink to="/launchpad" onClick={toggleMenu}>Launchpad</NavLink></li>
          <li><NavLink to="/contact" onClick={toggleMenu}>Contact Us</NavLink></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

