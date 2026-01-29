import React from 'react';
import Startup from './startups';

import Initiatives from './initiatives';
import Launchpad from './launchpad';
import Hero from './hero';
import GradientBackground from '../GradientBackground';

function Home() {
  return (
    <div className="relative">
      <Hero />
      <GradientBackground>
        <Startup />
        <Launchpad />
        <Initiatives />
      </GradientBackground>
    </div>
  );
}

export default Home;