import React, { useState, useEffect } from "react";

const EventSchedule = () => {
  const [activeDay, setActiveDay] = useState("day1");
  const [animatedItems, setAnimatedItems] = useState([]);
  const [selectedType, setSelectedType] = useState("all");

  useEffect(() => {
    const timer = setTimeout(() => {
      const newAnimatedItems = scheduleData[activeDay].map((_, index) => index);
      setAnimatedItems(newAnimatedItems);
    }, 100);
    return () => clearTimeout(timer);
  }, [activeDay]);

  const days = [
    { id: "day1", name: "Day 0", date: "20th March" },
    { id: "day2", name: "Day 1", date: "21st March" },
    { id: "day3", name: "Day 2", date: "22nd March" },
    { id: "day4", name: "Day 3", date: "23rd March" },
  ];

  const scheduleData = {
    day1: [
      {
        time: "4:00 PM - 6:00 PM",
        title: "Formal Inauguration",
        location: "Auditorium",
        type: "event",
      },
      {
        time: "5:00 PM",
        title: "Speech by Mr. Jayesh",
        location: "Auditorium",
        type: "speaker",
      },
      {
        time: "5:45 PM",
        title: "Speech by Mr. Suresh Prabhu",
        location: "Auditorium",
        type: "speaker",
      },
      {
        time: "6:30 PM - 12:00 AM",
        title: "Informal Inauguration",
        location: "Auditorium",
        type: "event",
      },
      {
        time: "7:30 PM",
        title: "Special Performance by Gini",
        location: "Auditorium",
        type: "performance",
      },
    ],
    day2: [
      {
        time: "4:00 PM - 5:00 PM",
        title: "Speaker Session by Maheshwar Peri",
        location: "F101",
        type: "speaker",
      },
      {
        time: "5:00 PM - 6:00 PM",
        title: "Speaker Session by Ravi Kabra",
        location: "F101",
        type: "speaker",
      },
      {
        time: "5:00 PM - 7:00 PM",
        title: "Speaker Session by Gen. VK Singh",
        location: "Auditorium",
        type: "speaker",
      },
      {
        time: "7:00 PM - 8:00 PM",
        title: "Speaker Session by Ankur Warikoo",
        location: "Library Lawns",
        type: "speaker",
      },
    ],
    day3: [
      {
        time: "10:00 AM - 8:00 PM",
        title: "Startup Expo",
        location: "Library Lawns",
        type: "event",
      },
      {
        time: "10:00 AM - 8:00 PM",
        title: "Internship Drive",
        location: "I212 , I213 , I221 , I222",
        type: "event",
      },
      {
        time: "12:00 PM - 6:00 PM",
        title: "Pitch Perfect",
        location: "Online",
        type: "event",
      },
      {
        time: "10:00 AM - 6:00 PM",
        title: "Beyond Profits",
        location: "Library Seminar Halls",
        type: "event",
      },
      {
        time: "10:00 AM - 6:00 PM",
        title: "Ground Reality - Semi Finals",
        location: "F201 , F202 , F203",
        type: "event",
      },
      {
        time: "8:00 PM - 10:00 PM",
        title: "Comedy Night",
        location: "Auditorium",
        type: "performance",
      },
      {
        time: "11:00 AM - 12:00 PM",
        title: "Anup Gupta (Founder and CEO of Mathongo)",
        location: "F104",
        type: "speaker",
      },
      {
        time: "12:00 PM - 1:00 PM",
        title: "Big 4 Consulting Panel",
        location: "F104",
        type: "speaker",
      },
      {
        time: "1:00 PM - 2:00 PM",
        title: "CA Sakshi Jain (Social Media Personality and Entrepreneurship Guide)",
        location: "Auditorium",
        type: "speaker",
      },
      {
        time: "2:00 PM - 3:00 PM",
        title: "HireVC Panel (Panel of VCs)",
        location: "Auditorium",
        type: "speaker",
      },
      {
        time: "3:00 PM - 4:00 PM",
        title: "Startup Panel (Ajay Rungta , Bharadwaj , Kirthi Jain)",
        location: "Auditorium",
        type: "speaker",
      },
      {
        time: "10:00 AM - 5:00 PM",
        title: "WORKSHOPS",
        location: "Workshop Hall",
        type: "workshop",
      },
      {
        time: "12:00 PM - 12:00 AM",
        title: "Campus War (LUDO NO 1)",
        location: "online Tournament Code - BITS25",
        type: "event",
      },
      {
        time: "5:00 PM",
        title: "IPL AUCTION (PRIZE MONEY - 10K)",
        location: "G105",
        type: "event",
      },
      {
        time: "7:30 PM",
        title: "Live Screening IPL 2025 (KKR VS RCB)",
        location: "Library Lawns",
        type: "event",
      },
      {
        time: "10:00 AM - 8:00 PM",
        title: "BGMI Tournament (PRIZE POOL - 1L+)",
        location: "https://forms.gle/hhzksTJLgU4UztGG6",
        type: "event",
      },
      
    ],
    day4: [
      {
        time: "10:00 AM - 8:00 PM",
        title: "Startup Expo",
        location: "Library Lawns",
        type: "event",
      },
      {
        time: "10:00 AM - 8:00 PM",
        title: "Internship Drive",
        location: "I212 , I213 , I221 , I222",
        type: "event",
      },
      {
        time: "10:00 AM - 11:00 AM",
        title: "Shashank Randev(CoFounder , 100xVC)",
        location: "Auditorium",
        type: "speaker",
      },
      {
        time: "11:00 PM - 12:00 PM",
        title: "Miheeka Daggubati (Founder of Mudita Tribe)",
        location: "Auditorium",
        type: "speaker",
      },
      {
        time: "12:00 PM - 2:00 PM",
        title: "Meeraj Faheem",
        location: "Auditorium",
        type: "speaker",
      },
      {
        time: "2:00 PM",
        title: "Aman Gupta (Founder and CMO , Boat)",
        location: "Auditorium",
        type: "speaker",
      },
      {
        time: "9:00 AM - 6:00 PM",
        title: "Teen Tycoons (Case Study Competetion for school students)",
        location: "F205 , F206 , F207 , F208",
        type: "event",
      },
      {
        time: "10:00 AM - 6:00 PM",
        title: "Ground Reality - Finals",
        location: "F103",
        type: "event",
      },
      {
        time: "10:00 AM - 6:00 PM",
        title: "Teen Tycoons Jr (Science Exhibition by school students)",
        location: "Library Lawns",
        type: "event",
      },
      {
        time: "7:00 PM - 10:00 PM",
        title: "Pitcher's Pilot (Flagship Fundraising Competetion)",
        location: "Library Lawns",
        type: "event",
      },
      {
        time: "10:00 AM - 6:00 PM",
        title: "Startup Odyssey",
        location: "G105,G106",
        type: "event",
      },
      {
        time: "4:00 PM - 6:00 PM",
        title: "Takeoff",
        location: "F107",
        type: "event",
      },
      {
        time: "10:00 AM - 8:00 PM",
        title: "Valorant Tournament (PRIZE POOL - 1L+)",
        location: "https://forms.gle/LKcDNWanc2kRRV8BA",
        type: "event",
      },

    ],
  };

  const typeColors = {
    speaker: "bg-purple-600",
    performance: "bg-pink-600",
    event: "bg-blue-700",
    workshop: "bg-teal-600",
  };

  const eventTypes = [
    { id: "all", name: "All" },
    { id: "speaker", name: "Speaker Sessions" },
    { id: "performance", name: "Performances" },
    { id: "event", name: "Events" },
    { id: "workshop", name: "Workshops" },
  ];

  const filteredEvents =
    selectedType === "all"
      ? scheduleData[activeDay]
      : scheduleData[activeDay].filter((event) => event.type === selectedType);

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-white py-16 px-4 md:px-8 min-h-screen">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-extrabold text-blue-600 tracking-tight">
            Event Schedule
          </h2>
          <p className="text-lg text-gray-400 mt-2">Launchpad 2025</p>
        </div>

        {/* Day Selection */}
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          {days.map((day) => (
            <button
              key={day.id}
              onClick={() => {
                setActiveDay(day.id);
                setAnimatedItems([]);
              }}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 text-white ${
                activeDay === day.id
                  ? "bg-blue-600 shadow-lg scale-105"
                  : "bg-gray-800 hover:bg-gray-700"
              }`}
            >
              {day.name}
              <br />
              <span className="text-sm text-blue-300">{day.date}</span>
            </button>
          ))}
        </div>

        {/* Event Type Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {eventTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => setSelectedType(type.id)}
              className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedType === type.id
                  ? "bg-blue-500 text-white"
                  : "bg-gray-700 hover:bg-gray-600"
              }`}
            >
              {type.name}
            </button>
          ))}
        </div>

        {/* Schedule List */}
        <div className="space-y-8 max-w-3xl mx-auto">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl shadow-xl text-white transform transition-all duration-500 ${
                  animatedItems.includes(index)
                    ? "opacity-100 translate-y-0 scale-105"
                    : "opacity-0 -translate-y-4 scale-95"
                } ${typeColors[event.type]}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                <p className="text-sm text-gray-200">
                  {event.time} • {event.location}
                </p>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-400">
              No events found for this category.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventSchedule;
