import React, { useState, useRef, useEffect } from 'react';

/**
 * LazyImage - A performance-optimized image component
 * - Uses IntersectionObserver to load images only when near viewport
 * - Smooth fade-in transition on load
 * - Sets loading="lazy" and decoding="async" for browser-native optimization
 * - Drop-in replacement for <img> tags
 */
const LazyImage = ({ src, alt, className, style, ...props }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(false);
    const imgRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.disconnect();
                }
            },
            { rootMargin: '200px' } // Start loading 200px before visible
        );

        if (imgRef.current) {
            observer.observe(imgRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={imgRef}
            className={className}
            style={{
                ...style,
                overflow: 'hidden',
                position: style?.position || 'relative',
            }}
        >
            {isInView && (
                <img
                    src={src}
                    alt={alt || ''}
                    loading="lazy"
                    decoding="async"
                    onLoad={() => setIsLoaded(true)}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: style?.objectFit || 'cover',
                        opacity: isLoaded ? 1 : 0,
                        transition: 'opacity 0.4s ease-in-out',
                    }}
                    {...props}
                />
            )}
            {/* Placeholder shown until image loads */}
            {!isLoaded && (
                <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundColor: '#1a1a2e',
                        transition: 'opacity 0.4s ease-in-out',
                        opacity: isLoaded ? 0 : 1,
                    }}
                />
            )}
        </div>
    );
};

export default LazyImage;
