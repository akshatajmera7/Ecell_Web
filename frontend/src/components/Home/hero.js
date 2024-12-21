import React from 'react';
import videohp from '../../assets/videohp.mp4';
import '././Hero.css';

const Hero = () =>{
    return (
        <div className='main'>
            <video src={videohp} autoPlay loop muted />
            <div className="content">
                <h1>E-Cell</h1>
            </div>
        </div>
    )
}

export default Hero