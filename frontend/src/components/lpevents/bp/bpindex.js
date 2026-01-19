import React from 'react';
import EventTemplate from '../EventTemplate/EventTemplate';
import bpimg from '../../../assets/lpevents/beyond profits.png'
import Sagnik from "../../../assets/sagnik.jpg";

const eventData = {
  title: "Beyond Profits",
  tagline: "Empowering Socially Conscious Innovation",
  bannerImage: bpimg,
  description: `Beyond Profits is an annual competition that empowers socially conscious entrepreneurs to pitch their ventures and drive social change. The event encourages social entrepreneurship among students, with prizes worth INR 250K, along with mentorship, legal services, web development, and incubation space. It stands as one of Telangana’s most sought-after events for aspiring changemakers.`,
  timeline: [
    { date: "Elimination", event: "Case Study & Social Impact Assessment" },
    { date: "Workshop", event: "Social Business Model Canvas Training" },
    { date: "Grand Finale", event: "Pitch to Impact Investors & Social Entrepreneurs" }
  ],
  pocs: [
    {
      name: "Sagnik Paul",
      role: "Chairman",
      email: "f20220852@hyderabad.bits-pilani.ac.in",
      linkedin: "https://www.linkedin.com/in/sagnik-paul-7a0656275/",
      image: Sagnik
    }
  ],
  faqs: [
    {
      question: "What is the focus of Beyond Profits?",
      answer: "It specifically focuses on startups that have a primary goal of creating social or environmental impact alongside financial sustainability."
    },
    {
      question: "What support do social entrepreneurs receive?",
      answer: "Mentorship, legal aid, tech support, and direct access to social impact funds."
    }
  ]
};

function BeyondProfits() {
  return (
    <div className="bg-ecell-bg min-h-screen">
      <EventTemplate eventData={eventData} />
    </div>
  );
}

export default BeyondProfits;