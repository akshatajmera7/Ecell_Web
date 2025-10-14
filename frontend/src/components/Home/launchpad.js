import React, { useEffect } from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';
import logo from '../../assets/launchpad25.JPG';


const BrandSprintContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 80px;
  background-color: #0C233C; /* E-Cell theme background */
  color: #F5EDE4; /* E-Cell theme text */

  @media (max-width: 768px) {
    flex-direction: column; /* Stack items vertically */
    padding: 40px;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  max-width: 50%;

  img {
    max-width: 100%;
    height: auto;
    display: block;
    border-radius: 15px; /* Smooth rounded corners */
    box-shadow: 0 8px 16px rgba(41, 102, 133, 0.3); /* E-Cell theme shadow */
  }

  @media (max-width: 768px) {
    max-width: 100%;
    margin-bottom: 20px; /* Add spacing for mobile */
  }
`;

const TextContainer = styled.div`
  flex: 1;
  max-width: 50%;
  padding-left: 40px;

  @media (max-width: 768px) {
    max-width: 100%;
    padding-left: 0;
    text-align: center; /* Center-align text on smaller screens */
  }
`;

const Title = styled.h1`
  font-size: 3.5rem; /* Large font for desktop */
  margin-bottom: 20px;
  color: #F5EDE4; /* E-Cell theme text */
  text-transform: uppercase; /* Stylish uppercase title */
  font-weight: 700; /* Bold title */
  letter-spacing: 2px;

  @media (max-width: 768px) {
    font-size: 2.5rem; /* Reduce size for mobile */
  }
`;

const Description = styled.p`
  line-height: 1.8;
  margin-bottom: 30px;
  font-size: 1.2rem;
  color: #F5EDE4; /* E-Cell theme text */

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.6; /* Adjust spacing for mobile */
  }
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const ListItem = styled.li`
  margin-bottom: 15px;
  position: relative;
  padding-left: 25px;
  font-size: 1.2rem;
  color: #F5EDE4; /* E-Cell theme text */

  &::before {
    content: '•'; /* Bullet point */
    position: absolute;
    left: 0;
    color: #FD8916; /* E-Cell secondary color */
    font-size: 1.5rem;
  }
`;

const Button = styled.button`
  background-color: #296685; /* E-Cell primary color */
  color: #F5EDE4; /* E-Cell text color */
  padding: 15px 30px;
  border: none;
  border-radius: 30px; /* Full-rounded button */
  cursor: pointer;
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: bold;
  transition: all 0.3s ease;

  &:hover {
    background-color: #FD8916; /* E-Cell secondary color on hover */
    transform: translateY(-5px); /* Lift effect */
    box-shadow: 0 8px 16px rgba(253, 137, 22, 0.3); /* Hover shadow */
  }

  @media (max-width: 768px) {
    width: 100%; /* Full width button on mobile */
  }
`;

const SpotsLeft = styled.span`
  font-size: 0.9rem;
  margin-left: 20px;
  color: #F5EDE4;
  opacity: 0.8;

  @media (max-width: 768px) {
    margin-left: 0;
    display: block;
    margin-top: 10px; /* Add spacing for mobile */
    text-align: center;
  }
`;

const Launchpad = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);



  return (
    <BrandSprintContainer>
      <ImageContainer data-aos="fade-right">
        <img src={logo} alt="Launchpad Example" />
      </ImageContainer>
      <TextContainer data-aos="fade-left">
        <Title>Launchpad</Title>
        <Description>
          Ignite entrepreneurial passion at our 3-day summit featuring industry leaders, innovative startups, and knowledge-sharing for the next generation.
        </Description>
        <List>
          <ListItem>Pitcher's Pilot</ListItem>
          <ListItem>Internship Drive</ListItem>
          <ListItem>Ground Reality</ListItem>
          <ListItem>Networking Arena</ListItem>
        </List>
        <div>
  <Button onClick={() => window.location.href = '/launchpad'}>
    Explore Launchpad
  </Button>
  <SpotsLeft>Annual Entrepreneurial Summit</SpotsLeft>
</div>
      </TextContainer>
    </BrandSprintContainer>
  );
};

export default Launchpad;
