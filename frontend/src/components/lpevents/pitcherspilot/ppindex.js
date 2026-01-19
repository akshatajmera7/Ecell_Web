import React from 'react';
import EventTemplate from '../EventTemplate/EventTemplate';
import ppimg from '../../../assets/lpevents/pitchers pilot.png'
import Manav from "../../../assets/manav.jpeg";

const eventData = {
  title: "Pitcher's Pilot",
  tagline: "Connecting Innovation with Capital",
  bannerImage: ppimg,
  description: `Pitchers Pilot is an initiative that provides budding entrepreneurs with the spotlight they deserve by connecting them directly with top investors. Beyond showcasing their ventures, participants gain invaluable feedback from potential customers and unlock a world of opportunities to accelerate their growth. With a 4-week mentorship cohort, direct access to top VCs and angel investors, and a chance to secure funding for your dream venture, Pitchers Pilot is the place where great ideas come alive.`,
  timeline: [
    { date: "Week 1-4", event: "Mentorship Cohort" },
    { date: "Demo Day", event: "Pitch to Top VCs and Angel Investors" },
    { date: "Post-Event", event: "Funding and Growth Support" }
  ],
  pocs: [
    {
      name: "Manav Sharma",
      role: "Vice Chairman",
      email: "f20221347@hyderabad.bits-pilani.ac.in",
      linkedin: "https://www.linkedin.com/in/manav-sharma-033771247/",
      image: Manav
    }
  ],
  faqs: [
    {
      question: "What is Pitcher's Pilot?",
      answer: "It's a platform for entrepreneurs to pitch their startups to investors after a rigorous mentorship period."
    },
    {
      question: "Who are the mentors?",
      answer: "Industry experts, successful entrepreneurs, and seasoned investors from various sectors."
    }
  ]
};

function PitchersPilot() {
  return (
    <div className="bg-ecell-bg min-h-screen">
      <EventTemplate eventData={eventData} />
    </div>
  );
}

export default PitchersPilot;