import React, { useState, useEffect } from 'react';

const EventSchedule = () => {
  const [activeDay, setActiveDay] = useState('day1');
  const [animatedItems, setAnimatedItems] = useState([]);
  const [selectedType, setSelectedType] = useState('all');

  useEffect(() => {
    const timer = setTimeout(() => {
      const newAnimatedItems = scheduleData[activeDay].map((_, index) => index);
      setAnimatedItems(newAnimatedItems);
    }, 100);
    return () => clearTimeout(timer);
  }, [activeDay]);

  const days = [
    { id: 'day1', name: 'Day 0', date: '20th March' },
    { id: 'day2', name: 'Day 1', date: '21st March' },
    { id: 'day3', name: 'Day 2', date: '22nd March' },
    { id: 'day4', name: 'Day 3', date: '23rd March' }
  ];

  const scheduleData = {
    day1: [
      { time: '4:00 PM - 6:00 PM', title: 'Formal Inauguration', location: 'Main Hall', type: 'event' },
      { time: '6:30 PM - 12:00 AM', title: 'Informal Inauguration', location: 'Event Space', type: 'event' }
    ],
    day2: [
      { time: '4:00 PM - 7:00 PM', title: 'Speaker Sessions', location: 'Auditorium', type: 'speaker' }
    ],
    day3: [
      { time: '10:00 AM - 5:00 PM', title: 'Workshops', location: 'Workshop Hall', type: 'workshop' },
      { time: '8:00 PM - 9:00 PM', title: 'Comedy Night', location: 'Main Stage', type: 'performance' }
    ],
    day4: [
      { time: '11:00 AM - 6:00 PM', title: 'Speaker Sessions', location: 'Auditorium', type: 'speaker' }
    ]
  };

  const typeColors = {
    speaker: 'bg-purple-600',
    performance: 'bg-pink-600',
    event: 'bg-blue-700',
    workshop: 'bg-teal-600',
  };

  const eventTypes = [
    { id: 'all', name: 'All' },
    { id: 'speaker', name: 'Speaker Sessions' },
    { id: 'performance', name: 'Performances' },
    { id: 'event', name: 'Events' },
    { id: 'workshop', name: 'Workshops' }
  ];

  const filteredEvents = selectedType === 'all' 
    ? scheduleData[activeDay] 
    : scheduleData[activeDay].filter(event => event.type === selectedType);

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-white py-16 px-4 md:px-8 min-h-screen">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-extrabold text-blue-600 tracking-tight">Event Schedule</h2>
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
                activeDay === day.id ? 'bg-blue-600 shadow-lg scale-105' : 'bg-gray-800 hover:bg-gray-700'
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
                selectedType === type.id ? 'bg-blue-500 text-white' : 'bg-gray-700 hover:bg-gray-600'
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
                  animatedItems.includes(index) ? 'opacity-100 translate-y-0 scale-105' : 'opacity-0 -translate-y-4 scale-95'
                } ${typeColors[event.type]}`} 
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                <p className="text-sm text-gray-200">{event.time} • {event.location}</p>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-400">No events found for this category.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventSchedule;