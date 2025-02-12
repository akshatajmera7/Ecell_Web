import React from 'react';
import { motion, useInView } from 'framer-motion';

const StatCard = ({ title, value }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, {
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="bg-blue-600/40 backdrop-blur-sm rounded-xl p-8 hover:bg-blue-600/50 transition-all duration-300 group shadow-lg hover:shadow-2xl border border-blue-600"
    >
      <motion.h3
        className="text-lg text-blue-200 mb-2"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.2 }}
      >
        {title}
      </motion.h3>
      <motion.div
        className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ type: 'spring', stiffness: 100, delay: 0.3 }}
      >
        {value}
      </motion.div>
    </motion.div>
  );
};

const KeyFeatures = () => {
  return (
    <div className="w-full bg-black py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StatCard title="Investors" value="15+" />
          <StatCard title="Total Investment" value="6cr+" />
          <StatCard title="Startups" value="40+" />
        </div>
      </div>
    </div>
  );
};

export default KeyFeatures;
