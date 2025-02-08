import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'framer-motion';

const TimelineEvent = ({ date, title, description, index }) => {
  const controls = useAnimation();
  const ref = React.useRef(null);
  const isInView = useInView(ref, { threshold: 0.2, once: true });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  return (
    <motion.div
      ref={ref}
      className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
        visible: {
          opacity: 1,
          x: 0,
          transition: { duration: 0.8, delay: index * 0.3 }
        }
      }}
    >
      <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="space-y-4"
        >
          <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-indigo-400">{date}</h3>
          <h4 className="text-2xl font-semibold text-white">{title}</h4>
          <p className="text-blue-200/90 text-lg">{description}</p>
        </motion.div>
      </div>

      <div className="relative flex flex-col items-center">
        <div className="w-5 h-5 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 shadow-lg shadow-blue-500/50" />
        <div className="w-1 h-32 bg-gradient-to-b from-blue-400 to-transparent" />
      </div>

      <div className="flex-1" />
    </motion.div>
  );
};

const Timeline = () => {
  const events = [
    {
      date: '21 - 23 March 2025',
      title: 'Pitchers Pilot',
      description: 'Premium platform for startups to pitch,network,and secure funding,turning visions into successful ventures'
    },
    {
      date: '21 -23 March 2025',
      title: 'Startup Expo',
      description: 'Showcase Innovation.Connect with Investors.Drive Impact'
    },
    {
      date: ' 21-23 March 2025',
      title: 'Ground Reality',
      description: 'Our annual Business Plan Competition'
    },
    {
      date: '21-23 March 2025',
      title: 'Pitch Perfect:Young Innovators Edition',
      description: 'Igniting the Entrepreneurial spirit in Tomorrow\'s Leaders'
    },
    {
      date: '21-23 March 2025',
      title: 'Teen Tycoons',
      description:'Case-study based business tournament for highschool students'
    },
  ];

  return (
    <div className="w-full bg-black py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-indigo-400 to-purple-400"
        >
          Our Events
        </motion.h2>
        
        <div className="space-y-12">
          {events.map((event, index) => (
            <TimelineEvent key={index} {...event} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;