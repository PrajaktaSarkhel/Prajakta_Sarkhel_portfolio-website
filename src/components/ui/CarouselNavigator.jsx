import React, { useState, useEffect } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

const slides = [
  { id: 'hero', name: 'Intro', num: '01' },
  { id: 'stats', name: 'Metrics', num: '02' },
  { id: 'about', name: 'About', num: '03' },
  { id: 'education', name: 'Education', num: '04' },
  { id: 'experience', name: 'Experience', num: '05' },
  { id: 'skills', name: 'Tech Stack', num: '06' },
  { id: 'projects', name: 'Projects', num: '07' },
  { id: 'research', name: 'Research', num: '08' },
  { id: 'art', name: 'Fine Arts', num: '09' },
  { id: 'contact', name: 'Contact', num: '10' }
];

export default function CarouselNavigator() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight * 0.35;
      
      for (let i = slides.length - 1; i >= 0; i--) {
        const el = document.getElementById(slides[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setCurrentSlideIndex(i);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const goToSlide = (idx) => {
    if (idx < 0 || idx >= slides.length) return;
    const targetEl = document.getElementById(slides[idx].id);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <aside 
      aria-label="Carousel Slide Navigation"
      className="fixed right-4 xl:right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-2 p-2 rounded-2xl bg-slate-900/40 dark:bg-[#0A0D16]/70 backdrop-blur-xl border border-white/10 shadow-2xl transition-all duration-300"
    >
      {/* Up Quick Button */}
      <button
        onClick={() => goToSlide(currentSlideIndex - 1)}
        disabled={currentSlideIndex === 0}
        aria-label="Previous Slide"
        className="p-1 rounded-lg text-slate-400 hover:text-cyan-400 disabled:opacity-25 disabled:cursor-not-allowed hover:bg-white/5 transition-all"
      >
        <ChevronUp className="w-3.5 h-3.5" />
      </button>

      {/* Slide Counter Indicator */}
      <div className="text-[10px] font-mono font-bold text-cyan-400 tracking-wider px-1 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20">
        {slides[currentSlideIndex].num}
      </div>

      {/* Slide Dots */}
      <div className="flex flex-col items-center gap-1.5 py-1">
        {slides.map((slide, idx) => {
          const isActive = idx === currentSlideIndex;
          return (
            <div key={slide.id} className="relative group/dot flex items-center">
              <button
                onClick={() => goToSlide(idx)}
                aria-label={`Go to slide ${slide.num}: ${slide.name}`}
                className={`transition-all duration-300 rounded-full focus:outline-none ${
                  isActive
                    ? 'w-2 h-5 bg-gradient-to-b from-cyan-400 to-indigo-500 shadow-[0_0_8px_rgba(0,229,255,0.7)]'
                    : 'w-2 h-2 bg-slate-400/40 hover:bg-slate-300 dark:hover:bg-white hover:scale-125'
                }`}
              />

              {/* Tooltip on hover */}
              <div className="absolute right-full mr-3.5 px-2.5 py-1 rounded-lg bg-slate-900/90 dark:bg-black/90 text-white text-[11px] font-mono tracking-wide whitespace-nowrap opacity-0 pointer-events-none group-hover/dot:opacity-100 group-hover/dot:pointer-events-auto transition-all duration-200 border border-white/10 shadow-xl -translate-x-1 group-hover/dot:translate-x-0">
                <span className="text-cyan-400 font-bold mr-1.5">{slide.num}</span>
                <span>{slide.name}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Down Quick Button */}
      <button
        onClick={() => goToSlide(currentSlideIndex + 1)}
        disabled={currentSlideIndex === slides.length - 1}
        aria-label="Next Slide"
        className="p-1 rounded-lg text-slate-400 hover:text-cyan-400 disabled:opacity-25 disabled:cursor-not-allowed hover:bg-white/5 transition-all"
      >
        <ChevronDown className="w-3.5 h-3.5" />
      </button>
    </aside>
  );
}
