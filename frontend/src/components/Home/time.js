import React, { useEffect, useState } from "react";
import img1 from "../../assets/1.png";
import img2 from "../../assets/2.png";
import img3 from "../../assets/3.png";
import img4 from "../../assets/4.png";
import img5 from "../../assets/5.png";
import img6 from "../../assets/6.png";
import img7 from "../../assets/7.png";

const events = [
  { title: "Startup Expo", description: "Discover endless opportunities at the Startup Expo.", imageUrl: img1, registerLink: "#" },
  { title: "Pitch Perfect", description: "Showcase your ideas, compete with bright minds.", imageUrl: img2, registerLink: "#" },
  { title: "Internship Drive", description: "Engage with startups, earn up to 30K INR.", imageUrl: img3, registerLink: "#" },
  { title: "Beyond Profits", description: "Develop solutions, enhance skills, win prizes.", imageUrl: img4, registerLink: "#" },
  { title: "Teen Tycoons", description: "Transform challenges into opportunities.", imageUrl: img5, registerLink: "#" },
  { title: "Pitcher's Pilot", description: "Pitch your startup, gain mentorship.", imageUrl: img6, registerLink: "#" },
  { title: "Ground Reality", description: "Showcase innovative ideas and craft strategies.", imageUrl: img7, registerLink: "#" },
];

const EventCard = ({ event, index }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 200);

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div className={`transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
     
      <div className="relative aspect-square group cursor-pointer overflow-hidden rounded-xl bg-[#0a0f1f] shadow-[0px_8px_20px_rgba(0,0,50,0.8)] border border-blue-900 transition-all duration-500">
        <img src={event.imageUrl} alt={event.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
        
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-white font-extrabold text-lg md:text-xl">{event.title}</h3>
        </div>

        <div className="absolute inset-0 p-4 flex flex-col justify-between translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <div>
            <h3 className="text-white font-extrabold text-lg md:text-xl mb-2">{event.title}</h3>
            <p className="text-gray-200 text-sm md:text-base font-semibold leading-relaxed mb-4">{event.description}</p>
          </div>
          
          <div className="flex gap-3">
            <a href={event.registerLink} target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white font-bold px-4 py-2 rounded-lg hover:bg-blue-500 transition-colors text-sm">
              Register
            </a>
            <a href={event.registerLink} target="_blank" rel="noopener noreferrer" className="bg-white text-blue-500 font-bold px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors text-sm">
              Explore
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const EventGrid = () => {
  return (
    <div className="bg-black min-h-screen py-16 px-4">
    <div className="max-w-7xl mx-auto"> {/* Removed px-4 here */}
      <h2 className="text-center text-6xl font-bold text-blue-600 mb-16 px-4"> {/* Added heading */}
        Our Events
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 px-4"> {/* Added px-4 here */}
        {events.map((event, index) => (
          <EventCard key={index} event={event} index={index} />
        ))}
      </div>
    </div>
  </div>
);
};


export default EventGrid;
