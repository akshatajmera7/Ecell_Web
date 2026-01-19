import React from 'react';
import EventTemplate from '../EventTemplate/EventTemplate';
import seimg from "../../../assets/lpevents/startup expo.png";
import Sagnik from "../../../assets/sagnik.jpg";

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
      name: "Sagnik Paul",
      role: "Chairman",
      email: "f20220852@hyderabad.bits-pilani.ac.in",
      linkedin: "https://www.linkedin.com/in/sagnik-paul-7a0656275/",
      image: Sagnik
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