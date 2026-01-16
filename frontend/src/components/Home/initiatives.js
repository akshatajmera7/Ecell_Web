import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';

const initiatives = [
  {
    id: 'speaker-sessions',
    title: 'Speaker Sessions',
    subtitle: 'Engaging sessions throughout the year',
    color: '#BCFF2F',
    textColor: 'black',
    type: 'triple',
    images: ['/ss.JPG', '/ss1.png', '/majety.png'],
    link: '/program'
  },
  {
    id: 'launchpad',
    title: 'Launchpad',
    subtitle: 'Largest E-Summit of South India',
    color: '#6F66FF',
    textColor: 'white',
    type: 'single',
    image: '/lp.png',
    link: '/launchpad'
  },
  {
    id: 'networking-arena',
    title: 'Networking Arena',
    subtitle: 'Lorem Ipsum Dolor Sit Amet',
    color: '#6F66FF',
    textColor: 'white',
    type: 'triple',
    images: ['/na.png', '/na1.png', '/ss.JPG'],
    link: '/program'
  },
  {
    id: 'explore',
    title: 'Explore All Our Programs',
    subtitle: '',
    color: 'transparent',
    borderColor: '#BCFF2F',
    textColor: '#BCFF2F',
    type: 'cta',
    link: '/program'
  }
];

const Initiatives = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen py-16 md:py-24 px-4 md:px-8 bg-transparent text-white overflow-hidden">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto mb-16 text-center relative z-10"
      >
        <h2 className="text-5xl md:text-8xl font-bold tracking-tight mb-8 font-syne">
          <span className="text-[#BCFF2F]">Programs &</span> <span className="text-[#6F66FF]">Initiatives</span>
        </h2>
        <p className="text-lg md:text-xl leading-relaxed text-gray-300 max-w-2xl mx-auto font-manrope font-light px-4">
          Fostering innovation through our curated programs designed to support and accelerate your entrepreneurial journey.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 relative z-10 px-2 md:px-0">

        {/* Left Column: Speaker Sessions & Networking Arena */}
        <div className="flex flex-col gap-4 md:gap-6">
          <Card item={initiatives[0]} navigate={navigate} />
          <Card item={initiatives[2]} navigate={navigate} />
        </div>

        {/* Right Column: Launchpad & Explore All */}
        <div className="flex flex-col gap-4 md:gap-6">
          <Card item={initiatives[1]} isTall={true} navigate={navigate} />
          <Card item={initiatives[3]} navigate={navigate} />
        </div>

      </div>

      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#BCFF2F]/5 rounded-full blur-[120px]" />
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-[#6F66FF]/10 rounded-full blur-[100px]" />
      </div>

    </section>
  );
};

const Card = ({ item, isTall, navigate }) => {
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
                    className="w-full h-full object-cover transition-all duration-700"
                  />
                ))}
              </div>
            ) : (
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-all duration-700 saturate-[1.1]"
              />
            )}
            {/* Subtle overlay to blend top with bottom if needed, though here it's a hard cut in the design */}
          </div>

          {/* Bottom Content */}
          <div
            className="p-6 md:p-8 pb-8 md:pb-10 flex flex-col justify-end relative min-h-[160px] md:min-h-[200px]"
            style={{ backgroundColor: item.color }}
          >
            <h3 className={`text-3xl md:text-5xl font-bold mb-4 font-syne tracking-tight leading-tight`} style={{ color: item.textColor }}>
              {item.title}
            </h3>

            <div className="flex items-center justify-between mt-auto gap-4">
              <span
                className={`px-3 md:px-4 py-1.5 md:py-2 rounded-full border text-xs md:text-sm font-medium font-manrope whitespace-normal md:whitespace-nowrap flex-grow-0`}
                style={{
                  borderColor: item.textColor === 'black' ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.2)',
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
              Explore <br /> All Our <br /> Programs
            </h3>
          </div>
        </>
      )}
    </motion.div>
  );
};

export default Initiatives;

