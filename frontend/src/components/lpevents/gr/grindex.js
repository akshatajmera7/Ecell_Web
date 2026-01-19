import React from 'react';
import EventTemplate from '../EventTemplate/EventTemplate';
import Grimg from '../../../assets/lpevents/gr.jpg'
import Manav from "../../../assets/manav.jpeg";

const eventData = {
  title: "Ground Reality",
  tagline: "The Foremost B-Plan Competition",
  bannerImage: Grimg,
  description: `Ground Reality is a prestigious annual competition giving start-ups and aspiring entrepreneurs the chance to pitch their ideas to top venture capitalists and angel investors. With over 20 mentors guiding 200+ participants, it bridges the gap between students, industry, and market needs. The winners receive a prize pool of Rs. 4 Lakhs, along with legal services, mentoring vouchers, cloud space, accelerator programs, and incubation support, offering invaluable resources for business growth.`,
  timeline: [
    { date: "Elimination", event: "Initial Pitch Deck Screening" },
    { date: "Mentorship", event: "One-on-one sessions with Industry Experts" },
    { date: "Grand Finale", event: "Final Pitch to Top VCs and Angel Investors" }
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
      question: "Who is eligible for Ground Reality?",
      answer: "Early-stage startups and students with a solid business plan are eligible."
    },
    {
      question: "What are the judging criteria?",
      answer: "Judging is based on innovation, market viability, scalability, and the strength of the team."
    }
  ]
};

function GroundReality() {
  return (
    <div className="bg-ecell-bg min-h-screen">
      <EventTemplate eventData={eventData} />
    </div>
  );
}

export default GroundReality;