import React, { useRef, useState, useEffect } from 'react';

/**
 * CarouselReveal
 * Smoothly animates sections and cards with a 3D carousel glide when scrolled into view.
 */
export default function CarouselReveal({ 
  children, 
  className = '', 
  direction = 'up', // 'up', 'left', 'right', 'scale'
  delay = 0,
  stagger = false,
  threshold = 0.12,
  as: Component = 'div',
  ...props 
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else if (entry.boundingClientRect.top > (window.innerHeight || document.documentElement.clientHeight)) {
          // Re-arm when scrolled back up so it re-glides smoothly like a carousel slide
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <Component
      ref={ref}
      className={`carousel-reveal carousel-reveal-${direction} ${
        isVisible ? 'carousel-revealed' : ''
      } ${stagger ? 'carousel-stagger-group' : ''} ${className}`}
      style={{
        transitionDelay: `${delay}ms`
      }}
      {...props}
    >
      {children}
    </Component>
  );
}
