import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, Star, Rocket, Users } from 'lucide-react';

const PassCard = ({ title, price, perks, isPopular, icon: Icon, delay, position }) => {
  // Determine border glow color based on position
  const getBorderGlowClass = () => {
    if (position === 'center') {
      return 'border-[#BCFF2F] shadow-[0_0_15px_rgba(188,255,47,0.3)] hover:shadow-[0_0_25px_rgba(188,255,47,0.45)]';
    }
    return 'border-[#6F66FF] shadow-[0_0_15px_rgba(111,102,255,0.3)] hover:shadow-[0_0_25px_rgba(111,102,255,0.45)]';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className={`relative glass p-8 rounded-[2.5rem] border-2 flex flex-col h-full transition-all duration-500 group ${getBorderGlowClass()} ${isPopular ? 'bg-ecell-primary/5' : ''}`}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-ecell-primary text-black text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-[0_0_20px_rgba(212,255,0,0.4)]">
          Most Popular
        </div>
      )}

      <div className="mb-8">
        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-500 ${isPopular ? 'bg-ecell-primary text-black' : 'bg-white/5 text-ecell-primary group-hover:bg-ecell-primary group-hover:text-black'}`}>
          <Icon size={28} />
        </div>
        <h3 className="text-3xl font-syne font-bold text-white mb-2">{title}</h3>
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-bold text-white font-manrope">₹{price}</span>
          <span className="text-white/40 text-sm">/ person</span>
        </div>
      </div>

      <div className="space-y-4 mb-10 flex-grow">
        {perks.map((perk, idx) => (
          <div key={idx} className="flex items-start gap-3">
            <div className={`mt-1 shrink-0 ${perk.included ? 'text-ecell-primary' : 'text-red-500'}`}>
              {perk.included ? <Check size={18} /> : <X size={18} />}
            </div>
            <span className={`text-sm font-manrope ${perk.included ? 'text-white/80' : 'text-red-500'}`}>
              {perk.text}
            </span>
          </div>
        ))}
      </div>

      <a
        href="/launchpad/passes-soon"
        className={`w-full py-4 rounded-xl font-bold text-center transition-all duration-300 transform font-manrope flex items-center justify-center gap-2 ${isPopular
          ? 'bg-ecell-primary text-black hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(212,255,0,0.5)]'
          : 'bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-white/20'
          }`}
      >
        Get Started <Rocket size={18} />
      </a>
    </motion.div>
  );
};

const Passes = () => {
  const tiers = [
    {
      title: "Delegate",
      price: "300",
      icon: Users,
      delay: 0.1,
      position: 'left',
      perks: [
        { text: "Startup expo (viewing rights)", included: true },
        { text: "Pitchers pilot, BP (GR), T3 (Viewing Audience)", included: true },
        { text: "Speaker sessions (audience)", included: true },
        { text: "Internship drive (external participants)", included: false },
        { text: "Hackathons + Workshop", included: false },
        { text: "Highlight speaker sessions", included: false },
        { text: "Comedy Night + performances", included: false },
        { text: "Networking lunch * ARENA", included: false },
      ]
    },
    {
      title: "Executive",
      price: "749 + Workshop cost (subsidized)",
      icon: Rocket,
      isPopular: true,
      delay: 0.2,
      position: 'center',
      perks: [
        { text: "Startup expo (viewing rights)", included: true },
        { text: "Pitchers pilot, BP (GR), T3 (VIEWING Audience)", included: true },
        { text: "Speaker sessions (audience)", included: true },
        { text: "E-Cell in house workshop", included: true },
        { text: "Highlight speaker sessions", included: true },
        { text: "Internship drive (external participants)", included: true },
        { text: "Workshop (in house free)", included: true },
        { text: "Comedy Night", included: true },
        { text: "Networking lunch * ARENA", included: false },
      ]
    },
    {
      title: "Nexus",
      price: "1399 + Workshop cost (subsidized)",
      icon: Star,
      delay: 0.3,
      position: 'right',
      perks: [
        { text: "Startup expo (viewing rights)", included: true },
        { text: "Pitchers pilot, BP (GR) (competitions Audience)", included: true },
        { text: "Speaker sessions (audience)", included: true },
        { text: "E-Cell in house workshop", included: true },
        { text: "Highlight speaker sessions", included: true },
        { text: "Internship drive (external participants)", included: true },
        { text: "Hackathons + Workshop", included: true },
        { text: "Comedy Night", included: true },
        { text: "Networking lunch arena * ARENA", included: true },
        { text: "Freebies", included: true },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-ecell-bg py-32 px-6 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-[-10%] right-[10%] w-[500px] h-[500px] bg-ecell-primary/30 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] left-[10%] w-[500px] h-[500px] bg-ecell-primary/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-ecell-primary font-bold tracking-[0.3em] uppercase text-sm mb-4 block"
          >
            Launchpad 2026
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-syne font-bold text-white mb-6 uppercase tracking-tighter"
          >
            CHOOSE YOUR <span className="text-ecell-primary">PATH</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/60 max-w-2xl mx-auto text-lg font-manrope"
          >
            Select the tier that best fits your journey. Whether you are an aspiring student or a budding entrepreneur, we have a pass for you.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {tiers.map((tier, idx) => (
            <PassCard key={idx} {...tier} />
          ))}
        </div>

        {/* Contingent Pass Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="glass p-10 md:p-16 rounded-[3rem] border border-white/5 relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 p-12 opacity-5 -rotate-12 group-hover:rotate-0 transition-transform duration-700">
            <Users size={200} className="text-ecell-primary" />
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:max-w-xl text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-syne font-bold text-white mb-6">Contingent <span className="text-ecell-primary">Pass</span></h2>
              <p className="text-white/60 text-lg font-manrope mb-8">
                Coming in a group? Experience Launchpad with your team. Our Contingent Pass offers exclusive bulk benefits, discounted rates, and collective networking opportunities for college delegations.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-ecell-primary/10 flex items-center justify-center text-ecell-primary">
                    <Check size={20} />
                  </div>
                  <span className="text-white font-medium">Flat 20% Discount</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-ecell-primary/10 flex items-center justify-center text-ecell-primary">
                    <Check size={20} />
                  </div>
                  <span className="text-white font-medium">Dedicated Manager</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-ecell-primary/10 flex items-center justify-center text-ecell-primary">
                    <Check size={20} />
                  </div>
                  <span className="text-white font-medium">Group Workshops</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-ecell-primary/10 flex items-center justify-center text-ecell-primary">
                    <Check size={20} />
                  </div>
                  <span className="text-white font-medium">Team Certificates</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center p-8 rounded-[2rem] bg-white/5 border border-white/10 min-w-[280px]">
              <span className="text-white/40 uppercase tracking-[0.2em] text-xs font-bold mb-4">Starting at</span>
              <span className="text-6xl font-bold text-white mb-2 italic tracking-tighter">Custom</span>
              <span className="text-ecell-primary font-manrope font-bold mb-8">Tailored for Groups</span>
              <a
                href="/launchpad/contact"
                className="px-10 py-4 rounded-xl bg-white text-black font-bold hover:bg-ecell-primary transition-all duration-300 transform hover:scale-105"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Passes;
