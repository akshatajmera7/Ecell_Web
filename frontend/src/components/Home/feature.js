import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const AnimatedCounter = ({ targetValue, isInView }) => {
  const [count, setCount] = useState(0);
  const rafRef = useRef();
  const startTimeRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;

    const end = parseInt(targetValue.replace(/\D/g, ""), 10);
    const duration = 2000;

    const step = (timestamp) => {
      if (startTimeRef.current == null) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const t = Math.min(elapsed / duration, 1);
      const value = Math.floor(end * t);
      setCount(value);
      if (t < 1) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        setCount(end);
        hasAnimated.current = true;
      }
    };

    rafRef.current = requestAnimationFrame(step);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className={`bg-[#0a0a0a]/80 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-ecell-secondary/30 
                 shadow-[0px_0px_30px_rgba(107,95,255,0.15)] transition-all duration-500 
                 hover:shadow-[0px_0px_50px_rgba(212,255,0,0.3)] hover:border-[#d4ff00] group relative overflow-hidden flex flex-col justify-center ${className}`}
    >
      <div className="absolute top-0 right-0 w-24 h-24 bg-ecell-primary/10 blur-[50px] rounded-full group-hover:bg-ecell-primary/20 transition-all duration-700" />

      <motion.h3 className="text-sm md:text-lg font-bold text-zinc-400 mb-2 tracking-[0.2em] uppercase font-poppins">{title}</motion.h3>
      <motion.div
        className="text-4xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#d4ff00] via-white to-[#6b5fff] drop-shadow-[0_0_15px_rgba(212,255,0,0.2)] font-poppins"
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <AnimatedCounter targetValue={value} isInView={isInView} />
      </motion.div>
    </motion.div>
  );
};

const KeyFeatures = () => {
  return (
    <div className="w-full bg-black py-20 md:py-32 relative overflow-hidden font-poppins">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[160px] md:auto-rows-[220px]">
          {/* Bento Grid Items */}
          <div className="md:col-span-2 md:row-span-2">
            <StatCard title="ATTENDEES" value="25000+" className="h-full" />
          </div>
          <div className="md:col-span-2 md:row-span-1">
            <StatCard title="STARTUPS" value="1000+" className="h-full" />
          </div>
          <div className="md:col-span-1 md:row-span-1">
            <StatCard title="WORKSHOPS" value="20+" className="h-full" />
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
