import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLinkedin, FaPhone, FaEnvelope } from 'react-icons/fa';
import { Mail, Phone, Calendar, MapPin, ChevronDown, MessageCircle } from 'lucide-react';
import './EventTemplate.css';

const EventTemplate = ({ eventData }) => {
    const [activeFaq, setActiveFaq] = useState(null);

    if (!eventData) return <div className="text-white text-center py-20">Loading Event Data...</div>;

    const {
        title,
        tagline,
        bannerImage,
        description,
        timeline,
        pocs,
        faqs
    } = eventData;

    return (
        <div className="event-template-container overflow-hidden">
            {/* 1. HERO BANNER */}
            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 z-0 scale-110"
                    style={{
                        backgroundImage: `url(${bannerImage || 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80'})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        filter: 'brightness(0.4)'
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ecell-bg/60 to-ecell-bg z-1" />

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="relative z-10 text-center px-4"
                >
                    <h1 className="text-6xl md:text-8xl font-futuristic-header text-ecell-primary mb-4 uppercase tracking-tighter">
                        {title}
                    </h1>
                    <p className="text-xl md:text-2xl font-futuristic-box text-white/80 max-w-2xl mx-auto">
                        {tagline}
                    </p>
                </motion.div>

                {/* Decorative elements */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
                    <span className="text-xs uppercase tracking-[0.3em]">Scroll to Explore</span>
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="w-[1px] h-12 bg-gradient-to-b from-ecell-primary to-transparent"
                    />
                </div>
            </section>

            {/* 2. DESCRIPTION SECTION */}
            <section className="py-20 px-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl font-futuristic-header text-white mb-6">About the <span className="text-ecell-primary">Event</span></h2>
                        <div className="prose prose-invert max-w-none">
                            <p className="text-lg text-white/70 leading-relaxed font-futuristic-body whitespace-pre-line">
                                {description}
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="glass p-8 rounded-3xl border-ecell-primary/20 relative group overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Calendar size={120} className="text-ecell-primary" />
                        </div>
                        <h3 className="text-2xl font-futuristic-header text-ecell-primary mb-6">Quick Info</h3>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-ecell-primary/10 flex items-center justify-center text-ecell-primary shrink-0">
                                    <Calendar size={20} />
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold">Date</h4>
                                    <p className="text-white/60">Check Timeline Below</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-ecell-primary/10 flex items-center justify-center text-ecell-primary shrink-0">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold">Venue</h4>
                                    <p className="text-white/60">BITS Pilani Hyderabad Campus</p>
                                </div>
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </section>

            {/* 3. TIMELINE SECTION */}
            <section className="py-24 bg-ecell-bg-light/30">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-futuristic-header text-white mb-4 uppercase">Event <span className="text-ecell-primary">Timeline</span></h2>
                        <div className="w-24 h-1 bg-ecell-primary mx-auto rounded-full" />
                    </div>

                    <div className="relative border-l-2 border-ecell-primary/20 ml-4 md:ml-0 md:left-1/2">
                        {timeline && timeline.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className={`relative mb-12 flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                    }`}
                            >
                                {/* Dots */}
                                <div className="absolute left-[-9px] md:left-1/2 md:-ml-2 w-4 h-4 rounded-full bg-ecell-primary shadow-[0_0_15px_#d4ff00]" />

                                {/* Content Area */}
                                <div className={`w-full md:w-1/2 px-8 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                    <div className="glass p-6 rounded-2xl border-white/5 hover:border-ecell-primary/30 transition-colors group">
                                        <span className="text-ecell-primary font-futuristic-box text-sm font-bold tracking-widest uppercase mb-2 block">
                                            {item.date}
                                        </span>
                                        <h3 className="text-xl font-futuristic-header text-white group-hover:text-ecell-primary transition-colors">
                                            {item.event}
                                        </h3>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. POCs SECTION */}
            <section className="py-24 px-6 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-futuristic-header text-white mb-4 uppercase">Points of <span className="text-ecell-primary">Contact</span></h2>
                    <p className="text-white/60 font-futuristic-body">Feel free to reach out for any queries!</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {pocs && pocs.map((poc, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -10 }}
                            className="glass p-6 rounded-[2rem] border-white/5 relative overflow-hidden group"
                        >
                            <div className="aspect-square rounded-2xl overflow-hidden mb-6 relative">
                                <img
                                    src={poc.image || `https://api.dicebear.com/7.x/avataaars/svg?seed=${poc.name}`}
                                    alt={poc.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-ecell-bg to-transparent opacity-0 group-hover:opacity-60 transition-opacity" />
                            </div>

                            <h3 className="text-2xl font-futuristic-header text-white mb-1">{poc.name}</h3>
                            <p className="text-ecell-primary text-sm font-bold tracking-widest uppercase mb-6">{poc.role || 'Event Coordinator'}</p>

                            <div className="flex flex-wrap gap-3">
                                <a
                                    href={`tel:${poc.contact}`}
                                    className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-ecell-primary text-white hover:text-ecell-bg rounded-xl transition-all text-sm font-medium"
                                >
                                    <Phone size={14} /> Contact
                                </a>
                                <a
                                    href={poc.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 flex items-center justify-center bg-white/5 hover:bg-[#0077B5] text-white rounded-xl transition-all"
                                >
                                    <FaLinkedin size={20} />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* 5. FAQs SECTION */}
            <section className="py-24 px-6 max-w-4xl mx-auto mb-20">
                <div className="flex items-center gap-4 mb-16">
                    <div className="p-4 rounded-3xl bg-ecell-primary/10 text-ecell-primary">
                        <MessageCircle size={32} />
                    </div>
                    <div>
                        <h2 className="text-4xl font-futuristic-header text-white uppercase">Frequently Asked <span className="text-ecell-primary">Questions</span></h2>
                    </div>
                </div>

                <div className="space-y-4">
                    {faqs && faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`glass rounded-2xl border-white/5 transition-all overflow-hidden ${activeFaq === index ? 'border-ecell-primary/30 ring-1 ring-ecell-primary/30' : ''
                                }`}
                        >
                            <button
                                onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                                className="w-full px-8 py-6 flex items-center justify-between text-left group"
                            >
                                <span className={`text-lg font-futuristic-header transition-colors ${activeFaq === index ? 'text-ecell-primary' : 'text-white group-hover:text-white/80'
                                    }`}>
                                    {faq.question}
                                </span>
                                <motion.div
                                    animate={{ rotate: activeFaq === index ? 180 : 0 }}
                                    className="text-ecell-primary"
                                >
                                    <ChevronDown size={24} />
                                </motion.div>
                            </button>

                            <AnimatePresence>
                                {activeFaq === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-8 pb-8 text-white/60 font-futuristic-body leading-relaxed border-t border-white/5 pt-4">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default EventTemplate;
