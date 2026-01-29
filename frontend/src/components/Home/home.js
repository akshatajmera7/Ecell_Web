import React from 'react';
import Startup from './startups';
import Initiatives from './initiatives';
import Launchpad from './launchpad';
import Hero from './hero';
import Intro from './intro';
import Banner from './banner';
import GradientBackground from '../GradientBackground';

function Home() {
  return (
    <div className="relative">
      <Hero />
      <Intro />
      <GradientBackground>
        <Startup />
        <Launchpad />
        <Initiatives />
        <Banner />
      </GradientBackground>
    </div>
  );
}

export default Home;