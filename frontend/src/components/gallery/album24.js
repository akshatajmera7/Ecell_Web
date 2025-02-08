import React, { useState, useEffect } from 'react';
import img1 from '../../assets/2024_1.JPG'; 
import img2 from '../../assets/2024_2.JPG'; 
import img3 from '../../assets/2024_3.JPG'; 
import img5 from '../../assets/2024_5.JPG'; 
import img6 from '../../assets/2024_6.JPG'; 
import img7 from '../../assets/2024_7.JPG'; 
import img8 from '../../assets/2024_8.JPG';
import img9 from '../../assets/2024_9.JPG';
import img10 from '../../assets/2024_10.JPG'; 
import img11 from '../../assets/2024_11.JPG'; 
import img12 from '../../assets/2024_12.JPG'; 
import img13 from '../../assets/2024_13.JPG';
import img14 from '../../assets/2024_14.JPG';
import img16 from '../../assets/2024_16.JPG'; 
import img17 from '../../assets/2024_17.JPG'; 
import img18 from '../../assets/2024_18.JPG';
import img19 from '../../assets/2024_19.JPG';
import img20 from '../../assets/2024_20.JPG'; 
import img21 from '../../assets/2024_21.JPG'; 
import img22 from '../../assets/2024_22.JPG'; 
import img23 from '../../assets/2024_23.JPG';
import img24 from '../../assets/2024_24.JPG';
import img25 from '../../assets/2024_25.JPG'; 
import img26 from '../../assets/2024_26.JPG'; 
import img27 from '../../assets/2024_27.JPG'; 
import img28 from '../../assets/2024_28.JPG';
import img30 from '../../assets/2024_30.JPG';

const ChevronLeft = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M15 18l-6-6 6-6" />
  </svg>
);

const ChevronRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9 18l6-6-6-6" />
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 6L6 18M6 6l12 12" />
  </svg>
);

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { id: 1, src: img1, alt: "Gallery Image 1" },
    { id: 2, src: img2, alt: "Gallery Image 2" },
    { id: 3, src: img3, alt: "Gallery Image 3" },
    // { id: 4, src: img28, alt: "Gallery Image 4" },
    { id: 5, src: img5, alt: "Gallery Image 5" },
    { id: 6, src: img6, alt: "Gallery Image 6" },
    { id: 7, src: img7, alt: "Gallery Image 7" },
    { id: 8, src: img8, alt: "Gallery Image 8" },
    { id: 9, src: img9, alt: "Gallery Image 9" },
    { id: 10, src: img10, alt: "Gallery Image 10" },
    { id: 11, src: img11, alt: "Gallery Image 11" },
    { id: 12, src: img12, alt: "Gallery Image 12" },
    { id: 13, src: img13, alt: "Gallery Image 13" },
    { id: 14, src: img14, alt: "Gallery Image 14" },
    // { id: 15, src: img30, alt: "Gallery Image 15" },
    { id: 16, src: img16, alt: "Gallery Image 16" },
    { id: 17, src: img17, alt: "Gallery Image 17" },
    { id: 18, src: img18, alt: "Gallery Image 18" },
    { id: 19, src: img19, alt: "Gallery Image 19" },
    // { id: 20, src: img20, alt: "Gallery Image 20" },
    { id: 21, src: img21, alt: "Gallery Image 21" },
    { id: 22, src: img22, alt: "Gallery Image 22" },
    { id: 23, src: img23, alt: "Gallery Image 23" },
    { id: 24, src: img24, alt: "Gallery Image 24" },
    { id: 25, src: img25, alt: "Gallery Image 25" },
    { id: 26, src: img26, alt: "Gallery Image 26" },
    { id: 27, src: img27, alt: "Gallery Image 27" },
  ];

  // Handle next and previous image navigation
  const nextImage = () => {
    setSelectedImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const previousImage = () => {
    setSelectedImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // Close the image modal when escape is pressed
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") previousImage();
      if (e.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  return (
    <div className="relative min-h-screen bg-black font-poppins p-8">
      {/* Heading */}
      <h2 className="text-4xl font-extrabold text-[#7f77f7] mb-8 text-center">
        Launchpad 2024
      </h2>

      {/* Image Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div
            key={image.id}
            className="relative group overflow-hidden rounded-lg cursor-pointer transform transition-all duration-300 "
            onClick={() => setSelectedImage(index)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
        ))}
      </div>

      {/* Fullscreen Image Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center px-16">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full"
              onClick={() => setSelectedImage(null)}
            >
              <CloseIcon />
            </button>

            {/* Previous Image Button */}
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-4 hover:bg-white/10 rounded-full"
              onClick={previousImage}
            >
              <ChevronLeft />
            </button>

            {/* Selected Image */}
            <div className="relative max-w-4xl w-full">
              <img
                src={images[selectedImage].src}
                alt={images[selectedImage].alt}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black/50 px-4 py-2 rounded-full">
                {selectedImage + 1} / {images.length}
              </div>
            </div>

            {/* Next Image Button */}
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-4 hover:bg-white/10 rounded-full"
              onClick={nextImage}
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
