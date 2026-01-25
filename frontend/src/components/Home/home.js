import React from 'react';
import Startup from './startups';

import Initiatives from './initiatives';
import Banner from './banner';
import Launchpad from './launchpad';
import Hero from './hero';

function Home() {
  return (
    <div className="relative">
      <Hero />
      <Startup />
      <Launchpad />
      <Initiatives />
      <Banner />

    </div>
  );
}

export default Home;