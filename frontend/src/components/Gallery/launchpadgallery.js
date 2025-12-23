import React from 'react';
import DomeGallery from './DomeGallery';

export default function LaunchpadGallery() {
    // Single image for now as requested - can be customized for Launchpad later
    const images = [{ src: '/ss.JPG', alt: 'Launchpad Gallery Image' }];
    return (
        <div style={{ width: '100vw', height: '100vh', background: '#000' }}>
            <DomeGallery images={images} grayscale={false} />
        </div>
    );
}
