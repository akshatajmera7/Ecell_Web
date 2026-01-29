import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';

// Import Launchpad event images
import ss1 from '../../assets/ss.JPG';
import ss2 from '../../assets/speaker2.jpg';
import ss3 from '../../assets/Speaker_session.png';
import startup from '../../assets/startup.JPG';
import lp1 from '../../assets/LaunchPad.JPG';
import lp2 from '../../assets/Launchpad1.JPG';

const programs = [
    {
        id: 'pitchers-pilot',
        title: "Pitchers' Pilot",
        subtitle: 'Engaging sessions throughout the year',
        color: '#BCFF2F',
        textColor: 'black',
        type: 'triple',
        images: [ss1, ss2, ss3],
        link: '/launchpad/pitchers_pilot'
    },
    {
        id: 'startup-expo',
        title: 'Start-up Expo',
        subtitle: 'Largest E-Summit of South India',
        color: '#6F66FF',
        textColor: 'white',
        type: 'single',
        image: startup,
        link: '/launchpad/startup_expo'
    },
    {
        id: 'internship-drive',
        title: 'Internship Drive',
        subtitle: 'Connect and grow with startups',
        color: '#BCFF2F',
        textColor: 'black',
        type: 'triple',
        images: [lp1, lp2, ss1],
        link: '/launchpad/internship_drive'
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
        <section className="relative py-16 md:py-24 px-4 md:px-8 text-white overflow-hidden">

            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="max-w-6xl mx-auto mb-12 md:mb-16 text-center relative z-10"
            >
                <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight font-syne">
                    <span className="text-[#BCFF2F]">Launchpad</span> <span className="text-[#6F66FF]">Events</span>
                </h2>
            </motion.div>

            {/* Grid - 2 Column Bento Layout */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 relative z-10 px-2 md:px-0">

                {/* Left Column */}
                <div className="flex flex-col gap-4 md:gap-6">
                    <ProgramCard item={programs[0]} navigate={navigate} />
                    <ProgramCard item={programs[2]} navigate={navigate} />
                </div>

                {/* Right Column */}
                <div className="flex flex-col gap-4 md:gap-6">
                    <ProgramCard item={programs[1]} isTall={true} navigate={navigate} />
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
                ? 'border-2 border-[#BCFF2F] flex flex-col justify-between p-8 md:p-10 min-h-[250px] md:min-h-[300px]'
                : 'bg-[#1a1a1a] flex flex-col h-full'
                } ${isTall ? 'h-full flex-grow' : ''}`}
        >
            {!isCta && (
                <>
                    {/* Header images */}
                    <div className={`${isTall ? 'flex-grow min-h-[300px] md:min-h-[400px]' : 'h-[200px] md:h-[280px]'} overflow-hidden relative`}>
                        {item.type === 'triple' ? (
                            <div className="grid grid-cols-3 h-full gap-0.5 md:gap-1">
                                {item.images.map((img, idx) => (
                                    <img
                                        key={idx}
                                        src={img}
                                        alt=""
                                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                                    />
                                ))}
                            </div>
                        ) : (
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover transition-all duration-700 saturate-[1.1] group-hover:scale-105"
                            />
                        )}
                    </div>

                    {/* Bottom Content */}
                    <div
                        className="p-6 md:p-8 pb-8 md:pb-10 flex flex-col justify-end relative min-h-[160px] md:min-h-[200px]"
                        style={{ backgroundColor: item.color }}
                    >
                        <h3 className="text-3xl md:text-5xl font-bold mb-4 font-syne tracking-tight leading-tight" style={{ color: item.textColor }}>
                            {item.title}
                        </h3>

                        <div className="flex items-center justify-between mt-auto gap-4">
                            <span
                                className={`px-3 md:px-4 py-1.5 md:py-2 rounded-full border-2 text-sm md:text-base font-medium font-manrope whitespace-normal md:whitespace-nowrap flex-grow-0 ${item.textColor === 'black' ? 'border-black' : ''
                                    }`}
                                style={{
                                    borderColor: item.textColor === 'black' ? '#000000' : 'rgba(255,255,255,0.2)',
                                    color: item.textColor
                                }}
                            >
                                {item.subtitle}
                            </span>

                            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center group-hover:rotate-45 transition-transform duration-300 flex-shrink-0">
                                <ArrowDownRight className="text-black w-5 h-5 md:w-6 md:h-6" />
                            </div>
                        </div>
                    </div>
                </>
            )}

            {isCta && (
                <>
                    <div className="flex justify-end">
                        <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-[#BCFF2F] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <ArrowUpRight className="text-[#BCFF2F] w-6 h-6 md:w-8 md:h-8" />
                        </div>
                    </div>
                    <div className="mt-auto">
                        <h3 className="text-4xl md:text-6xl font-bold font-syne leading-[1.1] text-[#BCFF2F]">
                            Explore <br /> All Our <br /> Events
                        </h3>
                    </div>
                </>
            )}
        </motion.div>
    );
};

export default ProgramsSection;
