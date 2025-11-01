import React from 'react';
import DomeGallery from './DomeGallery';

export default function Gallery() {
  // Single image for now as requested
  const images = [{ src: '/ss.JPG', alt: 'E-Cell Gallery Image' }];
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <DomeGallery images={images} grayscale={false} />
    </div>
  );
}
