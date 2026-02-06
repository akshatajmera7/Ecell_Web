import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, Star, Rocket, Users } from 'lucide-react';
import { useNavigate } from "react-router-dom";


const PassCard = ({ title, price, perks, isPopular, icon: Icon, delay, position, onGetStarted }) => {
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
            <div className="flex flex-col">
              <span className={`text-sm font-manrope font-bold ${perk.included ? 'text-ecell-primary' : 'text-red-500/80'}`}>
                {perk.text}
              </span>
              {perk.subtext && (
                <span className={`text-xs font-manrope ${perk.included ? 'text-white/50' : 'text-red-500/50'}`}>
                  {perk.subtext}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={onGetStarted}
        className={`w-full py-4 rounded-xl font-bold text-center transition-all duration-300 transform font-manrope flex items-center justify-center gap-2 ${isPopular
          ? 'bg-ecell-primary text-black hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(212,255,0,0.5)]'
          : 'bg-transparent text-ecell-primary border-2 border-ecell-primary hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(188,255,47,0.4)]'
          }`}
      >
        Get Started <Rocket size={18} />
      </button>
    </motion.div >
  );
};

const Passes = () => {
  const navigate = useNavigate();

  const handleGetStarted = (tier) => {
    const encodedUrl = encodeURIComponent(tier.paymentUrl);
    navigate(`/launchpad/payment?url=${encodedUrl}&tier=${encodeURIComponent(tier.title)}`);
  };

  const tiers = [
    {
      title: "Delegate",
      price: "299",
      icon: Users,
      delay: 0.1,
      position: 'left',
      paymentUrl: "https://konfhub.com/widget/launchpad-2026?desc=true&secondaryBg=F7F7F7&ticketBg=F7F7F7&borderCl=F7F7F7&bg=FFFFFF&fontColor=1e1f24&ticketCl=1e1f24&btnColor=002E6E&fontFamily=Hind&borderRadius=10&widget_type=quick&screen=1&tickets=74038&ticketId=74038%7C1",
      perks: [
        { text: "Startup Expo Access", subtext: "Explore live startups & innovations", included: true },
        { text: "Competition Viewing Access", subtext: "Pitchers Pilot · Ground Reality · Teen Tycoons", included: true },
        { text: "Speaker Sessions Access", subtext: "Talks by founders & industry leaders", included: true },
        { text: "Internship Drive Access", subtext: "Tap into internship opportunities", included: false },
        { text: "E-Cell In-House Workshops", subtext: "Hands-on learning sessions", included: false },
        { text: "Highlight Speaker Session Access", subtext: "Flagship Talks by Founders & Industry Leaders", included: false },
        { text: "Comedy Night Entry", subtext: "Live stand-up entertainment", included: false },
        { text: "Networking Lunch", subtext: "Founder & peer networking", included: false },
        { text: "Event Freebies & Swag", subtext: "Merch, goodies & partner giveaways", included: false },
      ]
    },
    {
      title: "Executive",
      price: "749",
      icon: Rocket,
      isPopular: true,
      delay: 0.2,
      position: 'center',
      paymentUrl: "https://konfhub.com/widget/launchpad-2026?desc=true&secondaryBg=F7F7F7&ticketBg=F7F7F7&borderCl=F7F7F7&bg=FFFFFF&fontColor=1e1f24&ticketCl=1e1f24&btnColor=002E6E&fontFamily=Hind&borderRadius=10&widget_type=quick&screen=1&tickets=74242&ticketId=74242%7C1",
      perks: [
        { text: "Startup Expo Access", subtext: "Explore live startups & innovations", included: true },
        { text: "Competition Viewing Access", subtext: "Pitchers Pilot · Ground Reality · Teen Tycoons", included: true },
        { text: "Speaker Sessions Access", subtext: "Talks by founders & industry leaders", included: true },
        { text: "Internship Drive Access", subtext: "Tap into internship opportunities", included: true },
        { text: "E-Cell In-House Workshops", subtext: "Hands-on learning sessions", included: true },
        { text: "Highlight Speaker Session Access", subtext: "Flagship Talks by Founders & Industry Leaders", included: true },
        { text: "Comedy Night Entry", subtext: "Live stand-up entertainment", included: true },
        { text: "Networking Lunch", subtext: "Founder & peer networking", included: false },
        { text: "Event Freebies & Swag", subtext: "Merch, goodies & partner giveaways", included: false },
      ]
    },
    {
      title: "Nexus",
      price: "1399",
      icon: Star,
      delay: 0.3,
      position: 'right',
      paymentUrl: "https://konfhub.com/widget/launchpad-2026?desc=true&secondaryBg=F7F7F7&ticketBg=F7F7F7&borderCl=F7F7F7&bg=FFFFFF&fontColor=1e1f24&ticketCl=1e1f24&btnColor=002E6E&fontFamily=Hind&borderRadius=10&widget_type=standard&tickets=74243&ticketId=74243%7C1&screen=1",
      perks: [
        { text: "Startup Expo Access", subtext: "Explore live startups & innovations", included: true },
        { text: "Competition Viewing Access", subtext: "Pitchers Pilot · Ground Reality · Teen Tycoons", included: true },
        { text: "Speaker Sessions Access", subtext: "Talks by founders & industry leaders", included: true },
        { text: "Internship Drive Access", subtext: "Tap into internship opportunities", included: true },
        { text: "E-Cell In-House Workshops", subtext: "Hands-on learning sessions", included: true },
        { text: "Highlight Speaker Session Access", subtext: "Flagship Talks by Founders & Industry Leaders", included: true },
        { text: "Comedy Night Entry", subtext: "Live stand-up entertainment", included: true },
        { text: "Networking Lunch", subtext: "Founder & peer networking", included: true },
        { text: "Event Freebies & Swag", subtext: "Merch, goodies & partner giveaways", included: true },
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
            <PassCard
              key={idx}
              {...tier}
              onGetStarted={() => handleGetStarted(tier)}
            />
          ))}
        </div>

        {/* Contingent Pass Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="glass p-8 md:p-12 rounded-[2.5rem] border border-white/5 relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 p-8 opacity-5 -rotate-12 group-hover:rotate-0 transition-transform duration-700">
            <Users size={160} className="text-ecell-primary" />
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:max-w-xl text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-syne font-bold text-white mb-4">Contingent <span className="text-ecell-primary">Pass</span></h2>
              <p className="text-white/60 text-base font-manrope mb-6">
                Coming in a group? Experience Launchpad with your team. Our Contingent Pass offers exclusive bulk benefits, discounted rates, and collective networking opportunities for college delegations.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-ecell-primary/10 flex items-center justify-center text-ecell-primary">
                    <Check size={16} />
                  </div>
                  <span className="text-white text-sm font-medium">Dedicated Manager</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-ecell-primary/10 flex items-center justify-center text-ecell-primary">
                    <Check size={16} />
                  </div>
                  <span className="text-white text-sm font-medium">Group Workshops</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-ecell-primary/10 flex items-center justify-center text-ecell-primary">
                    <Check size={16} />
                  </div>
                  <span className="text-white text-sm font-medium">Team Certificates</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center p-6 rounded-[2rem] bg-white/5 border border-white/10 min-w-[270px]">
              <span className="text-white/40 uppercase tracking-[0.2em] text-[10px] font-bold mb-3">Starting at</span>
              <span className="text-5xl font-bold text-white mb-1 italic tracking-tighter">Custom</span>
              <span className="text-ecell-primary text-xs font-manrope font-bold mb-6 tracking-wide">Tailored for Groups</span>

              <div className="w-full space-y-2.5">
                <span className="text-white/40 uppercase tracking-[0.1em] text-[9px] font-bold block text-center mb-0.5">Direct Contacts</span>
                <a
                  href="tel:+917992350341"
                  className="w-full py-3 px-5 rounded-xl bg-white/5 border border-white/10 text-white flex flex-col items-center hover:scale-105 transition-all duration-300"
                >
                  <span className="font-bold text-[11px] opacity-60 mb-0.5">Sujoy</span>
                  <span className="text-base font-bold text-ecell-primary">+91 79923 50341</span>
                </a>
                <a
                  href="tel:+918667088026"
                  className="w-full py-3 px-5 rounded-xl bg-white/5 border border-white/10 text-white flex flex-col items-center hover:scale-105 transition-all duration-300"
                >
                  <span className="font-bold text-[11px] opacity-60 mb-0.5">Cris</span>
                  <span className="text-base font-bold text-ecell-primary">+91 866 708 8026</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

    </div>
  );
};

export default Passes;
