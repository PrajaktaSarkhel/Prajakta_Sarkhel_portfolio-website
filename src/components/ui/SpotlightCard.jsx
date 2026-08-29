import React, { useRef, useState } from 'react';

/**
 * SpotlightCard
 * A luxurious Bento card that smoothly renders a dynamic cursor-following spotlight glow.
 */
export default function SpotlightCard({ 
  children, 
  className = '', 
  spotlightColor = 'rgba(0, 229, 255, 0.12)',
  onClick,
  ...props 
}) {
  const cardRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      className={`relative overflow-hidden rounded-2xl md:rounded-3xl border border-white/[0.08] dark:border-white/[0.08] border-slate-200/80 bg-[#0F131F]/70 dark:bg-[#0F131F]/70 bg-white/90 backdrop-blur-xl shadow-bento dark:shadow-bento shadow-bento-light transition-all duration-300 ${className}`}
      {...props}
    >
      {/* Dynamic Cursor Spotlight Layer */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 40%)`,
        }}
      />
      {/* Top subtle highlight rim */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 dark:via-white/20 via-slate-900/10 to-transparent" />
      
      {/* Card Content */}
      <div className="relative z-10 h-full">
        {children}
      </div>
    </div>
  );
}
