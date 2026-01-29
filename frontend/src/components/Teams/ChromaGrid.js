import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './ChromaGrid.css';

export const ChromaGrid = ({
  items = [],
  className = '',
  radius = 300,
  columns = 3,
  rows = 2,
  damping = 0.45,
  fadeOut = 0.6,
  ease = 'power3.out'
}) => {
  const rootRef = useRef(null);
  const fadeRef = useRef(null);
  const setX = useRef(null);
  const setY = useRef(null);
  const pos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    setX.current = gsap.quickSetter(el, '--x', 'px');
    setY.current = gsap.quickSetter(el, '--y', 'px');
    const { width, height } = el.getBoundingClientRect();
    pos.current = { x: width / 2, y: height / 2 };
    setX.current(pos.current.x);
    setY.current(pos.current.y);

    // Set fade to 0 initially for always bright cards
    if (fadeRef.current) {
      gsap.set(fadeRef.current, { opacity: 0 });
    }
  }, []);

  const moveTo = (x, y) => {
    gsap.to(pos.current, {
      x,
      y,
      duration: damping,
      ease,
      onUpdate: () => {
        setX.current?.(pos.current.x);
        setY.current?.(pos.current.y);
      },
      overwrite: true
    });
  };

  const handleMove = e => {
    const r = rootRef.current.getBoundingClientRect();
    moveTo(e.clientX - r.left, e.clientY - r.top);
    // Fade stays at 0 for always bright cards
  };

  const handleLeave = () => {
    // No fade animation on leave - cards stay bright
  };

  const handleCardClick = url => {
    if (url) window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleCardMove = e => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <div
      ref={rootRef}
      className={`chroma-grid ${className}`}
      style={{
        '--r': `${radius}px`,
        '--cols': columns
      }}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
    >
      {
        items.map((c, i) => (
          <article
            key={i}
            className={`chroma-card ${c.type === 'header' ? 'chroma-header' : ''}`}
            onMouseMove={c.type === 'header' ? undefined : handleCardMove}
            onClick={c.type === 'header' ? undefined : () => handleCardClick(c.url)}
            style={{
              '--card-border': c.borderColor || 'transparent',
              '--card-gradient': c.gradient,
              gridColumn: c.type === 'header' ? `1 / span ${columns}` : 'auto',
              cursor: c.url ? 'pointer' : (c.type === 'header' ? 'default' : 'default'),
              background: c.type === 'header' ? 'transparent' : undefined,
              border: c.type === 'header' ? 'none' : undefined,
            }}
          >
            <div className="chroma-img-wrapper">
              <img src={c.image} alt={c.title} loading="lazy" />
            </div>
            <footer className="chroma-info">
              <h3 className="name">{c.title}</h3>
              {c.handle && <span className="handle">{c.handle}</span>}
              <p className="role">{c.subtitle}</p>
              {c.location && <span className="location">{c.location}</span>}
            </footer>
          </article>
        ))
      }
      < div className="chroma-overlay" />
      <div ref={fadeRef} className="chroma-fade" />
    </div >
  );
};

export default ChromaGrid;
