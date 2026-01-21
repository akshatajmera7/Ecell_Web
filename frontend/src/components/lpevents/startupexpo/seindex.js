import React from 'react';
import EventTemplate from '../EventTemplate/EventTemplate';
import seimg from "../../../assets/lpevents/startup expo.png";
import Anshul from "../../../assets/Anshul.jpeg";
import Girisha from "../../../assets/Girisha.jpg";
import Prarthana from "../../../assets/Prarthana.jpeg";
const eventData = {
  title: "Startup Expo",
  tagline: "The Ultimate Battlefield for Emerging Innovators",
  bannerImage: seimg,
  description: `The Startup Expo at Launchpad is a key event for entrepreneurs to showcase their companies to investors, customers, and industry experts. Featuring startups from various industries and stages, it offers a dynamic platform for discovering innovative ideas and emerging businesses.`,
  timeline: [
    { date: "Day 1 - 9:00 AM", event: "Stall Setup and Visitor Interaction" },
    { date: "Day 1 - 2:00 PM", event: "Networking Session with Mentors" },
    { date: "Day 2 - 10:00 AM", event: "Investor Walkthrough" },
    { date: "Day 2 - 4:00 PM", event: "Closing and Feedback" }
  ],
  pocs: [
    {
      name: "Anshul Nanwani",
      role: "Senior Associate",
      email: "f20241126@hyderabad.bits-pilani.ac.in",
      linkedin: "https://www.linkedin.com/in/anshul-nanwani-040559322",
      image: Anshul
    },
    {
      name: "Girisha Chalana",
      role: "Senior Associate",
      email: "f20240497@hyderabad.bits-pilani.ac.in",
      linkedin: "https://www.linkedin.com/in/girisha-chalana-703a46323",
      image: Girisha
    },
    {
      name: "Prarthana SIngh",
      role: "Senior Associate",
      email: "f20240587@hyderabad.bits-pilani.ac.in",
      linkedin: "https://www.linkedin.com/in/prarthana-singh-77463a318",
      image: Prarthana
    }
  ],
  faqs: [
    {
      question: "Who can participate in the Startup Expo?",
      answer: "The Startup Expo is open to all registered startups across various industries. Student-led ventures are highly encouraged to apply."
    },
    {
      question: "What is the primary goal of the expo?",
      answer: "To provide a platform for startups to showcase their products, network with industry leaders, and connect with potential investors."
    }
  ]
};

function StartupExpo() {
  return (
    <div className="bg-ecell-bg min-h-screen">
      <EventTemplate eventData={eventData} />
    </div>
  );
}

export default StartupExpo;