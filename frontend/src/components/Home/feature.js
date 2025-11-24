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

const StatCard = ({ title, value, className }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.2, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className={`bg-ecell-bg-light/60 backdrop-blur-md rounded-xl p-8 border-2 border-ecell-secondary 
                 shadow-[0px_0px_30px_rgba(107,95,255,0.3)] transition-all duration-300 
                 hover:shadow-[0px_0px_50px_rgba(212,255,0,0.5)] hover:border-ecell-primary group relative overflow-hidden flex flex-col justify-center ${className}`}
    >
      <div className="absolute top-0 right-0 w-20 h-20 bg-ecell-primary/20 blur-[40px] rounded-full group-hover:bg-ecell-primary/40 transition-all duration-500" />

      <motion.h3 className="text-xl font-bold text-white mb-2 tracking-wider">{title}</motion.h3>
      <motion.div
        className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-ecell-primary via-white to-ecell-secondary drop-shadow-sm"
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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[200px]">
          {/* Bento Grid Items */}
          <div className="md:col-span-2 md:row-span-2">
            <StatCard title="ATTENDEES" value="25000+" className="h-full" />
          </div>
          <div className="md:col-span-2 md:row-span-1">
            <StatCard title="STARTUPS" value="1000+" className="h-full" />
          </div>
          <div className="md:col-span-1 md:row-span-1">
            <StatCard title="EVENTS" value="20+" className="h-full" />
          </div>
          <div className="md:col-span-1 md:row-span-1">
            <StatCard title="SPEAKERS" value="50+" className="h-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyFeatures;
