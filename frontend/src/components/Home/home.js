import React from 'react';
import Startup from './startups';
import Intro from './intro';
import Initiatives from './initiatives';

function Home() {
  return (
    <div>
    <Intro/>
    <Startup/>
    <Initiatives/>
    
    </div>
  );
}

export default Home;