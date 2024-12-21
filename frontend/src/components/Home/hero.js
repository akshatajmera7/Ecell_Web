import React from 'react';
import videohp from '../../assets/videohp.mp4';
import './Hero.css';

const Hero = () => {
    return (
        <div className='main'>
            <video src={videohp} autoPlay loop muted />
            <div className="content">
                <h1 className='vidint'>E-Cell BITS Pilani Hyderabad Campus</h1>
                <p className="subheading">Empowering Entrepreneurs, Inspiring Innovation</p>
            </div>
        </div>
    );
}

export default Hero;