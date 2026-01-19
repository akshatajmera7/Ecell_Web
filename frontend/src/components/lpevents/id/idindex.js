import React from 'react';
import EventTemplate from '../EventTemplate/EventTemplate';
import Companies from "./companies";
import idimg from '../../../assets/lpevents/internship drive.png'
import Ishika from "../../../assets/ishika.jpeg";

const eventData = {
  title: "Internship Drive",
  tagline: "Bridging Academics and Industry",
  bannerImage: idimg,
  description: `Internship Drive connects enthusiastic students with 50+ start-ups, offering stipends up to 125K INR. With 75% of the opportunities being remote, this initiative provides students with the chance to gain hands-on experience in a variety of industries while working from home. It also offers valuable exposure to the selection processes and interviews of leading companies, helping students develop the skills and confidence needed to step into the corporate world.`,
  timeline: [
    { date: "Registration", event: "Applications Open for Various Profiles" },
    { date: "Shortlisting", event: "Resume Screening by Startups" },
    { date: "Interviews", event: "One-on-one Selection Rounds" },
    { date: "Results", event: "Final Offer Letters and Onboarding" }
  ],
  pocs: [
    {
      name: "Ishika Ratnawat",
      role: "Internship Coordinator",
      email: "f20221462@hyderabad.bits-pilani.ac.in",
      linkedin: "https://www.linkedin.com/in/ishika-ratnawat/",
      image: Ishika
    }
  ],
  faqs: [
    {
      question: "Is the internship drive open to all branches?",
      answer: "Yes, we have roles ranging from Technical, Management, Design, to Content and Sales."
    },
    {
      question: "Are these paid internships?",
      answer: "Most roles offer a competitive stipend, with some going up to 1.25 Lakhs INR."
    }
  ]
};

function InternshipDrive() {
  return (
    <div className="bg-ecell-bg min-h-screen">
      <EventTemplate eventData={eventData} />
      <div className="bg-[#1a1a1a]">
        <Companies />
      </div>
    </div>
  );
}

export default InternshipDrive;
