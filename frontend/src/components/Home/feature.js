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
    <div className="mb-16 relative group">
      {/* Glow effect */}
      <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />

      <motion.div
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: getWidth(), opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          width: { duration: 1, delay: index * 0.3, ease: "easeOut" },
          opacity: { duration: 0.5, delay: index * 0.3 },
        }}
        className="relative h-24 bg-gradient-to-r from-blue-900 to-blue-800 flex items-center justify-start pl-8 pr-6 backdrop-blur-sm rounded-lg"
      >
        {/* Animated border */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-20 rounded-lg" />

        {/* Shine effect */}
        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: '200%' }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            delay: index * 0.3,
            ease: "linear",
          }}
          className="absolute inset-y-0 w-1/4 bg-gradient-to-r from-transparent via-blue-400/10 to-transparent transform -skew-x-12"
        />

        {/* Content */}
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
      {/* Animated background patterns */}
      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0.1, scale: 1 }}
            animate={{
              opacity: [0.1, 0.2, 0.1],
              scale: [1, 1.2, 1],
              rotate: [0, 360],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              delay: i * 2,
              ease: "linear",
            }}
            className="absolute w-[40rem] h-[40rem] bg-blue-900/20 rounded-full blur-3xl"
            style={{
              left: `${30 * i}%`,
              top: `${20 * i}%`,
            }}
          />
        ))}
      </div>

      {/* Grid lines */}
      <div className="absolute inset-0">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-full h-px bg-blue-900/30"
            style={{
              top: `${i * 20}%`,
              transform: 'rotate(-12deg)',
              left: '-10%',
              width: '120%',
            }}
          />
        ))}
      </div>

      <div className="relative max-w-5xl w-full">
        {stats.map((stat, index) => (
          <StatBar key={index} value={stat.value} label={stat.label} index={index} />
        ))}
      </div>
    </div>
  );
};

export default StatsDisplay;