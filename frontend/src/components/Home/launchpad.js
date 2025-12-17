import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '../../assets/launchpad25.JPG';


const BrandSprintContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 80px;
  background-color: transparent; /* Updated theme background */
  color: #ffffff; /* Updated theme text */
  position: relative;
  z-index: 1;
  pointer-events: auto;

  @media (max-width: 768px) {
    flex-direction: column; /* Stack items vertically */
    padding: 40px;
  }
`;

const ImageContainer = styled(motion.div)`
  flex: 1;
  max-width: 50%;

  img {
    max-width: 100%;
    height: auto;
    display: block;
    border-radius: 20px; /* Smooth rounded corners */
    box-shadow: 0 20px 40px rgba(0,0,0,0.5); /* Deep shadow */
  }

  @media (max-width: 768px) {
    max-width: 100%;
    margin-bottom: 30px; /* Add spacing for mobile */
  }
`;

const TextContainer = styled(motion.div)`
  flex: 1;
  max-width: 50%;
  padding-left: 60px;

  @media (max-width: 768px) {
    max-width: 100%;
    padding-left: 0;
    text-align: center; /* Center-align text on smaller screens */
  }
`;

const Title = styled.h1`
  font-size: 4rem; /* Large font for desktop */
  margin-bottom: 20px;
  color: #ffffff; /* Updated theme text */
  text-transform: uppercase; /* Stylish uppercase title */
  font-weight: 800; /* Bold title */
  letter-spacing: -0.02em;
  font-family: 'Syne', sans-serif;
  line-height: 0.9;

  @media (max-width: 768px) {
    font-size: 2.5rem; /* Reduce size for mobile */
  }
`;

const Description = styled.p`
  line-height: 1.8;
  margin-bottom: 30px;
  font-size: 1.25rem;
  color: #e0e0e0; /* Updated theme text */
  font-family: 'Manrope', sans-serif;
  font-weight: 300;

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.6; /* Adjust spacing for mobile */
  }
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    text-align: center;
    display: inline-block;
    text-align: left;
  }
`;

const ListItem = styled(motion.li)`
  margin-bottom: 12px;
  position: relative;
  padding-left: 25px;
  font-size: 1.1rem;
  color: #d1d5db; /* Updated theme text */
  font-family: 'Manrope', sans-serif;

  &::before {
    content: '→'; /* Bullet point */
    position: absolute;
    left: 0;
    color: #d4ff00; /* Updated primary color */
    font-size: 1.2rem;
    font-weight: bold;
  }
`;


const SpotsLeft = styled.span`
  font-size: 0.9rem;
  margin-left: 20px;
  color: #ffffff;
  opacity: 0.6;
  font-family: 'Manrope', sans-serif;

  @media (max-width: 768px) {
    margin-left: 0;
    display: block;
    margin-top: 15px; /* Add spacing for mobile */
    text-align: center;
  }
`;

const Launchpad = () => {
  const navigate = useNavigate();

  return (
    <div className="relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-ecell-primary/5 blur-3xl rounded-full translate-x-1/2 -z-10" />

      <BrandSprintContainer
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2
            }
          }
        }}
      >
        <ImageContainer variants={{
          hidden: { opacity: 0, x: -50, rotate: -2 },
          visible: { opacity: 1, x: 0, rotate: 0, transition: { duration: 0.8, ease: "easeOut" } }
        }}>
          <img src={logo} alt="Launchpad Example" />
        </ImageContainer>
        <TextContainer variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
        }}>
          <Title>Launchpad</Title>
          <Description>
            Ignite entrepreneurial passion at our 3-day summit featuring industry leaders, innovative startups, and knowledge-sharing for the next generation.
          </Description>
          <List>
            <ListItem variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0 } }}>Pitcher's Pilot</ListItem>
            <ListItem variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0 } }}>Internship Drive</ListItem>
            <ListItem variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0 } }}>Ground Reality</ListItem>
            <ListItem variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0 } }}>Networking Arena</ListItem>
          </List>
          <div style={{ position: 'relative', zIndex: 20 }}>
            <button
              className="btn-premium px-8 py-4 rounded-full text-lg uppercase tracking-wide"
              onClick={() => navigate('/launchpad')}
            >
              Explore Launchpad
            </button>
            <SpotsLeft>Annual Entrepreneurial Summit</SpotsLeft>
          </div>
        </TextContainer>
      </BrandSprintContainer>
    </div>
  );
};

export default Launchpad;
