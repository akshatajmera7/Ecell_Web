import React from 'react';
import EventTemplate from '../EventTemplate/EventTemplate';
import ttimg from '../../../assets/lpevents/teen tycoons.png'
import Raghav from "../../../assets/raghav.jpeg";

const eventData = {
  title: "Teen Tycoons",
  tagline: "Nurturing the Next Generation of Business Leaders",
  bannerImage: ttimg,
  description: `Teen Tycoons is a case-based business plan competition that nurtures entrepreneurial talent through a structured, multi-stage process. Participants solve analytical guesstimates, tailored problem statements according to their selected ventures, and finalists undergo a skill-building bootcamp with expert mentorship. The event culminates in the Grand Finale, where teams pitch innovative solutions to a distinguished panel, showcasing creativity, critical thinking, and business acumen. With a prize pool of more than 50L INR, Teen Tycoons offers unparalleled opportunities for aspiring entrepreneurs to bring their ideas to life.`,
  timeline: [
    { date: "Stage 1", event: "Analytical Guesstimates & Problem Solving" },
    { date: "Stage 2", event: "Skill-building Bootcamp" },
    { date: "Finale", event: "Grand Pitch to Distinguished Panel" }
  ],
  pocs: [
    {
      name: "Raghav Agarwal",
      role: "Vice President Projects and Learning",
      email: "f20220892@hyderabad.bits-pilani.ac.in",
      linkedin: "https://www.linkedin.com/in/raghav-agarwal-984b44266/",
      image: Raghav
    }
  ],
  faqs: [
    {
      question: "Who can participate in Teen Tycoons?",
      answer: "It is primarily aimed at high school and early college students looking to test their business acumen."
    },
    {
      question: "What is the format of the competition?",
      answer: "It consists of multiple rounds including case studies, problem-solving, and a final pitch."
    }
  ]
};

function TeenTycoons() {
  return (
    <div className="bg-ecell-bg min-h-screen">
      <EventTemplate eventData={eventData} />
    </div>
  );
}

export default TeenTycoons;