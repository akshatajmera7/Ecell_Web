import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const AnimatedCounter = ({ targetValue, isInView }) => {
  const [count, setCount] = useState(0);
  const rafRef = useRef();
  const startTimeRef = useRef(null);

  useEffect(() => {
    if (!isInView) return;

    const end = parseInt(targetValue.replace(/\D/g, ""), 10);
    const duration = 2000; // 2 seconds — all counters share the same duration

    const step = (timestamp) => {
      if (startTimeRef.current == null) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const t = Math.min(elapsed / duration, 1); // linear progress 0..1
      const value = Math.floor(end * t);
      setCount(value);
      if (t < 1) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    rafRef.current = requestAnimationFrame(step);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      startTimeRef.current = null;
    };
  }, [isInView, targetValue]);

  return <span>{count.toLocaleString()}+</span>;
};

const StatCard = ({ title, value }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.2, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="bg-blue-600/40 backdrop-blur-sm rounded-xl p-8 border border-blue-600 
                 shadow-[0px_0px_20px_rgba(255,255,255,0.5)] transition-all duration-300 
                 hover:shadow-[0px_0px_30px_rgba(255,255,255,0.7)] group"
    >
      <motion.h3 className="text-lg text-blue-200 mb-2">{title}</motion.h3>
      <motion.div
        className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600"
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
      >
        <AnimatedCounter targetValue={value} isInView={isInView} />
      </motion.div>
    </motion.div>
  );
};

const KeyFeatures = () => {
  return (
    <div className="w-full bg-black py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StatCard title="ATTENDEES" value="25000+" />
          <StatCard title="STARTUPS" value="1000+" />
          <StatCard title="EVENTS" value="20+" />
        </div>
      </div>
    </div>
  );
};

export default KeyFeatures;
