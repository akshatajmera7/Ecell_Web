import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom'; 

const Initiatives = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const slideDuration = 2000; // ms
  const startXRef = useRef(0);
  const pointerDownRef = useRef(false);
  // Dots pagination – no per-segment fill needed

  const portfolioItems = [
    {
      name: 'Speaker Sessions',
      image: '/ss.JPG',
    },
    {
      name: 'Networking Arena',
      image: '/na.png',
    },
    {
      name: 'LaunchPad',
      image: '/lp.png',
    },
    {
      name: 'Management Temptations',
      image: '/MT2.png',
    },
  ];
  
  
  const navigate = useNavigate();
  // Setup auto carousel
  useEffect(() => {
    if (paused) return; // do not advance when paused
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % portfolioItems.length);
    }, slideDuration);
  
    return () => clearInterval(interval); // Cleanup on unmount
  }, [portfolioItems.length, paused]); // depend on paused so we can pause/resume

  // no progress bar animation when using dots

  // Swipe / drag navigation (pointer events)
  const onPointerDown = (e) => {
    pointerDownRef.current = true;
    startXRef.current = e.clientX ?? (e.touches && e.touches[0]?.clientX) ?? 0;
    setPaused(true);
  };

  const onPointerUp = (e) => {
    if (!pointerDownRef.current) return;
    const endX = e.clientX ?? (e.changedTouches && e.changedTouches[0]?.clientX) ?? startXRef.current;
    const delta = endX - startXRef.current;
    pointerDownRef.current = false;
    const threshold = 50; // px
    if (Math.abs(delta) > threshold) {
      setActiveIndex((prev) => {
        if (delta < 0) {
          // swipe left -> next
          return (prev + 1) % portfolioItems.length;
        }
        // swipe right -> prev
        return (prev - 1 + portfolioItems.length) % portfolioItems.length;
      });
    }
    setPaused(false);
  };

  const onPointerLeave = () => {
    pointerDownRef.current = false;
  };

  return (
    <div className="relative min-h-screen p-8 bg-ecell-bg text-ecell-text" style={{ pointerEvents: 'auto', zIndex: 1 }}>
      {/* Header Section */}
      <div
        className="max-w-4xl mx-auto mb-16 text-center"
      >
        <h1 className="text-6xl font-extrabold tracking-tight mb-6 text-ecell-text">
          Our Initiatives and Programs
        </h1>
        <p className="text-xl leading-relaxed text-ecell-text opacity-80">
        We believe in the power of entrepreneurship to transform lives and communities. Our programs and initiatives provide the necessary support, resources, and mentorship to help aspiring entrepreneurs turn their dreams into reality, fostering innovation and driving economic growth.
        </p>
      </div>
      
      {/* Filter Button */}
      <div className="max-w-4xl mx-auto mb-12 flex justify-center" style={{ position: 'relative', zIndex: 20 }}>
      <button 
        className="px-6 py-2 rounded-full border-2 border-ecell-primary text-ecell-text bg-transparent hover:bg-ecell-primary hover:text-ecell-dark transition-colors font-semibold cursor-pointer"
        onClick={() => navigate('/program')}
        style={{ pointerEvents: 'auto', position: 'relative', zIndex: 20 }}
      >
        Explore
      </button>
      </div>

      {/* Portfolio Carousel */}
      <div
        className="max-w-6xl mx-auto relative overflow-hidden"
      >
        <div
          className="flex transition-transform duration-700 select-none"
          style={{ transform: `translateX(-${activeIndex * 100}%)`, touchAction: 'pan-y' }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerLeave}
          onPointerLeave={onPointerLeave}
        >
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="min-w-full px-4"
            >
              <div className="rounded-xl shadow-lg overflow-hidden hover:scale-105 transform transition-transform duration-2412 bg-ecell-dark border-2 border-ecell-secondary">
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ width: '1150px', height: '400px', objectFit: 'cover' }}
                  className="w-full h-96 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-3xl font-bold text-ecell-text">{item.name}</h3>
                  {/* Optional subtitle / description can go here */}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modern controls: 4 small dots (one filled for active) */}
        <div className="mt-6 w-full flex justify-center" style={{ position: 'relative', zIndex: 20 }}>
          <div className="flex items-center gap-3">
            {portfolioItems.map((item, i) => {
              const isActive = i === activeIndex;
              return (
                <button
                  key={`dot-${i}`}
                  onClick={() => setActiveIndex(i)}
                  className={
                    `w-3 h-3 rounded-full border transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-ecell-primary/60 ` +
                    (isActive
                      ? 'bg-ecell-primary border-ecell-primary shadow'
                      : 'bg-transparent border-ecell-secondary/60 hover:border-ecell-primary hover:bg-ecell-primary/10')
                  }
                  title={item.name}
                  aria-label={`Go to ${item.name}`}
                  aria-pressed={isActive}
                />
              );
            })}
          </div>
        </div>
      </div>


    </div>
  );
};

export default Initiatives;
