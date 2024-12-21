import React from 'react';
import Startup from './startups';
import Intro from './intro';
import Initiatives from './initiatives';
import Banner from './banner';
import Launchpad from './launchpad';

function Home() {
  return (
    <div>
    <Intro/>
    <Startup/>
    <Initiatives/>
    <Launchpad/>
    <Banner/>
    
    </div>
  );
}

export default Home;