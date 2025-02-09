import React from 'react';
import { motion } from 'framer-motion';

const StatBar = ({ value, label, index }) => {
  // Calculate width based on relative values
  const getWidth = () => {
    if (label.includes('ATTENDEES')) return '100%';
    if (label.includes('STARTUPS')) return '80%';
    return '60%';
  };

  return (
    <div className="mb-12 relative">
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        whileInView={{
          width: getWidth(),
          opacity: 1
        }}
        transition={{
          width: { duration: 1, delay: index * 0.3, ease: "easeOut" },
          opacity: { duration: 0.5, delay: index * 0.3 },
        }}
        className="relative h-24 bg-gradient-to-r from-blue-900 to-blue-800 flex items-center justify-start pl-8 pr-6 backdrop-blur-sm rounded-lg"
      >
        <div className="flex items-center gap-4 relative">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.3 + 0.5 }}
            className="text-5xl font-bold bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent"
          >
            {value}
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: index * 0.3 + 0.7 }}
            className="text-blue-100 text-xl tracking-wider"
          >
            {label}
          </motion.span>
        </div>
      </motion.div>
    </div>
  );
};

const StatsDisplay = () => {
  const stats = [
    { value: '50000+', label: 'ATTENDEES' },
    { value: '1000+', label: 'STARTUPS' },
    { value: '30+', label: 'EVENTS' },
  ];

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-8 relative overflow-hidden">
      <div className="relative max-w-5xl w-full">
        {stats.map((stat, index) => (
          <StatBar key={index} value={stat.value} label={stat.label} index={index} />
        ))}
      </div>
    </div>
  );
};

export default StatsDisplay;