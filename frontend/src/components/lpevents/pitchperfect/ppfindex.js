import React from 'react';
import EventTemplate from '../EventTemplate/EventTemplate';
import pptimg from "../../../assets/lpevents/pitch perfect.png";
import Manav from "../../../assets/manav.jpeg";

const eventData = {
  title: "Pitch Perfect",
  tagline: "The Art of the Deal",
  bannerImage: pptimg,
  description: `Pitch Perfect brings entrepreneurship to life, offering a stage for founders to present their ideas, negotiate deals, and secure investments. It not only entertains viewers but also serves as a practical demonstration of the intricacies of securing investment in the business. With a 50K INR prize pool, the event's success lies in its ability to provide a platform for both entrepreneurs and investors to connect and grow in a competitive environment.`,
  timeline: [
    { date: "Day 1", event: "Pitch Presentations & Initial Negotiations" },
    { date: "Day 2", event: "Final Deal Making & Investment Offers" }
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
      question: "Is this event similar to Shark Tank?",
      answer: "Yes, it follows a similar format where founders pitch their businesses to a panel of investors for equity or investment."
    },
    {
      question: "What is the prize pool?",
      answer: "In addition to potential investments, there is a designated prize pool of 50K INR for the top performers."
    }
  ]
};

function PitchPerfect() {
  return (
    <div className="bg-ecell-bg min-h-screen">
      <EventTemplate eventData={eventData} />
    </div>
  );
}

export default PitchPerfect;