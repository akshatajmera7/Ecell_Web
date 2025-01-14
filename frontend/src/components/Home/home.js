import React from 'react';
import Startup from './startups';

import Initiatives from './initiatives';
import Banner from './banner';
import Launchpad from './launchpad';
import Hero from './hero';

function Home() {
  return (
    <div>
    <Hero/>
    <Startup/>
    <Initiatives/>
    <Launchpad/>
    <Banner/>
    
    </div>
  );
}

export default Home;