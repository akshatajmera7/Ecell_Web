import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// This component:
// 1) Adds a subtle animated background layer
// 2) On route change, finds top-most hero heading/subheading/button and applies staggered classes
export default function GlobalHeroEffects() {
  const location = useLocation();

  useEffect(() => {
    // Apply a short timeout to ensure page content is in the DOM
    const t = setTimeout(() => {
      const root = document.querySelector('main') || document.body;
      if (!root) return;

      // Heuristics for hero elements
  const h1 = root.querySelector('h1, .hero h1, .hero-title');
  const h2 = root.querySelector('h2, .hero h2, .hero-subtitle');
  const btn = root.querySelector('a.button, button, .btn, .cta');

      // Clear any previous inline styles/classes we added
      [h1, h2, btn].forEach(el => {
        if (!el) return;
        el.style.opacity = '0';
        el.style.transform = 'translateY(16px)';
      });

      // Staggered reveal
      if (h1) {
        // Outline to fill + mask reveal + fade-up (staggered)
        h1.classList.add('text-stroke');
        h1.style.animation = [
          'mask-reveal 1.1s ease-out forwards 0ms',
          'text-fill-in 1.1s ease-out forwards 0ms',
          'fade-up 0.9s ease-out forwards 80ms',
        ].join(', ');
        h1.style.opacity = '1';
        h1.style.transform = 'translateY(0)';
      }
      if (h2) {
        h2.style.animation = 'fade-up 0.9s ease-out forwards 220ms';
        h2.style.opacity = '1';
        h2.style.transform = 'translateY(0)';
      }
      if (btn) {
        btn.style.animation = 'fade-up 0.9s ease-out forwards 360ms';
        btn.style.opacity = '1';
        btn.style.transform = 'translateY(0)';
      }
    }, 0);

    return () => clearTimeout(t);
  }, [location.pathname]);

  // Animated background layer using Tailwind keyframes
  return (
    <>
      {/* Hidden utility to ensure Tailwind emits keyframes */}
      <span className="hidden animate-fade-up animate-mask-reveal animate-text-fill-in" />
      <div
        aria-hidden="true"
        className="subtle-parallax-bg animate-bg-pan-slow"
      />
    </>
  );
}
