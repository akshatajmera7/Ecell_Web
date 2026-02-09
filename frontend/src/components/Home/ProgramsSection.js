import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';

// Import Launchpad event images

import startup from '../../assets/new_startup.jpg';
import lp2 from '../../assets/lpevents/id/id1.jpeg'
import pp_stage from '../../assets/lpevents/pitcherspilot/new_memory_stage.png';

const programs = [
    {
        id: 'pitchers-pilot',
        title: "Pitchers' Pilot",
        subtitle: 'Connecting Innovation with Capital',
        color: '#BCFF2F',
        textColor: 'black',
        type: 'single', // ✅ changed from triple
        image: pp_stage, // ✅ only second image
        link: '/launchpad/pitchers_pilot',
        registerLink: "https://unstop.com/competitions/pitchers-pilot-launchpad-26-bits-1631551"
    },
    {
        id: 'startup-expo',
        title: 'Start-up Expo',
        subtitle: 'The Ultimate Battlefield for Emerging Innovators',
        color: '#6F66FF',
        textColor: 'white',
        type: 'single',
        image: startup,
        link: '/launchpad/startup_expo',
        registerLink: "https://unstop.com/competitions/startup-expo-launchpad-26-bits-1631560"
    },
    {
        id: 'internship-drive',
        title: 'Internship Drive',
        subtitle: 'Connect and grow with startups',
        color: '#BCFF2F',
        textColor: 'black',
        type: 'single',
        image: lp2,
        link: '/launchpad/internship_drive',
        registerLink: ""
    },
    {
        id: 'explore',
        title: 'Explore All Our Events',
        subtitle: '',
        color: 'transparent',
        borderColor: '#BCFF2F',
        textColor: '#BCFF2F',
        type: 'cta',
        link: '/launchpad/events'
    }
];

const ProgramsSection = () => {
    const navigate = useNavigate();

    return (
        <section className="relative py-12 md:py-24 px-4 md:px-8 text-white overflow-hidden">

            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="max-w-6xl mx-auto mb-10 md:mb-16 text-center relative z-10"
            >
                <h2 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight font-syne uppercase">
                    <span className="text-[#BCFF2F]">Launchpad</span>{' '}
                    <span className="text-[#6F66FF]">Events</span>
                </h2>
            </motion.div>

            {/* Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 relative z-10 px-0">

                {/* Left Column */}
                <div className="flex flex-col gap-4 md:gap-6">
                    <ProgramCard item={programs[0]} navigate={navigate} />
                    <ProgramCard item={programs[2]} navigate={navigate} />
                </div>

                {/* Right Column */}
                <div className="flex flex-col gap-4 md:gap-6">
                    <ProgramCard item={programs[1]} isTall navigate={navigate} />
                    <ProgramCard item={programs[3]} navigate={navigate} />
                </div>

            </div>
        </section>
    );
};

const ProgramCard = ({ item, isTall, navigate }) => {
    const isCta = item.type === 'cta';

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            onClick={() => navigate(item.link)}
            className={`group relative overflow-hidden rounded-[2rem] md:rounded-[2.5rem] cursor-pointer transition-all duration-500 hover:scale-[1.01] ${isCta
                ? 'border-2 border-[#BCFF2F] flex flex-col justify-between p-6 md:p-10 min-h-[200px] md:min-h-[300px]'
                : 'bg-[#1a1a1a] flex flex-col h-full'
                } ${isTall ? 'h-full flex-grow' : ''}`}
        >
            {!isCta && (
                <>
                    {/* Image Section */}
                    <div className={`${isTall ? 'flex-grow min-h-[250px] md:min-h-[400px]' : 'h-[180px] md:h-[280px]'} overflow-hidden relative`}>
                        {item.type === 'triple' ? (
                            <div className="grid grid-cols-3 h-full gap-0.5 md:gap-1">
                                {item.images.map((img, idx) => (
                                    <img
                                        key={idx}
                                        src={img}
                                        alt=""
                                        loading="lazy"
                                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                                    />
                                ))}
                            </div>
                        ) : (
                            <img
                                src={item.image}
                                alt={item.title}
                                loading="lazy"
                                className="w-full h-full object-cover transition-all duration-700 saturate-[1.1] group-hover:scale-105"
                            />
                        )}
                    </div>

                    {/* Content */}
                    <div
                        className="p-6 md:p-8 pb-8 md:pb-10 flex flex-col justify-end min-h-[140px] md:min-h-[200px]"
                        style={{ backgroundColor: item.color }}
                    >
                        <h3
                            className="text-2xl md:text-5xl font-bold mb-4 font-syne uppercase tracking-tight"
                            style={{ color: item.textColor }}
                        >
                            {item.title}
                        </h3>

                        <div className="flex items-center justify-between gap-4 mt-auto">
                            <span
                                className="px-3 md:px-4 py-1 md:py-2 rounded-full border-2 text-[10px] md:text-base font-manrope"
                                style={{
                                    borderColor: item.textColor === 'black' ? '#000' : 'rgba(255,255,255,0.2)',
                                    color: item.textColor
                                }}
                            >
                                {item.subtitle}
                            </span>

                            <div className="flex items-center gap-3">
                                {item.registerLink && (
                                    <a
                                        href={item.registerLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={(e) => e.stopPropagation()} // Prevent card click
                                        className="px-4 py-2 rounded-full bg-black text-white text-sm font-bold font-manrope hover:bg-white hover:text-black transition-colors border-2 border-black"
                                    >
                                        Register
                                    </a>
                                )}
                                <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                                    <ArrowDownRight className="text-black w-4 h-4 md:w-6 md:h-6" />
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}

            {isCta && (
                <>
                    <div className="flex justify-end">
                        <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-[#BCFF2F] flex items-center justify-center group-hover:scale-110 transition-transform">
                            <ArrowUpRight className="text-[#BCFF2F] w-6 h-6 md:w-8 md:h-8" />
                        </div>
                    </div>

                    <h3 className="text-4xl md:text-6xl font-bold font-syne leading-tight text-[#BCFF2F] mt-auto">
                        Explore <br /> All Our <br /> Events
                    </h3>
                </>
            )}
        </motion.div>
    );
};

export default ProgramsSection;
