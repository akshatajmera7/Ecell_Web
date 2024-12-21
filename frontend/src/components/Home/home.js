import React from 'react';
import Startup from './startups';
import Intro from './intro';
import Initiatives from './initiatives';
import Banner from './banner';

function Home() {
  return (
    <div>
    <Intro/>
    <Startup/>
    <Initiatives/>
    <Banner/>
    
    </div>
  );
}

export default Home;