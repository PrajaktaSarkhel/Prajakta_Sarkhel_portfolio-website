import React, { useState } from 'react';
import { ExternalLink, Github, ChevronLeft, ChevronRight, Trophy, Sparkles, Layers, FileText, Activity } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import SpotlightCard from './ui/SpotlightCard';
import Badge from './ui/Badge';

export default function Projects() {
  const [eunoiaIndex, setEunoiaIndex] = useState(0);
  const [postureIndex, setPostureIndex] = useState(0);

  const eunoiaImages = [
    '/eunoia_1.png',
    '/eunoia_2.png',
    '/eunoia_3.png',
    '/eunoia_4.png',
    '/eunoia_5.png'
  ];

  const postureImages = [
    '/posturepro_1.png',
    '/posturepro_2.png',
  ];

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative">
      <SectionHeading
        badge="Featured Engineering"
        title="Impact-Driven"
        highlight="Projects"
        subtitle="Full-stack systems and hardware-software prototypes designed to solve real-world human problems."
      />

      <div className="space-y-12">
        
        {/* Project 1: Eunoia Wellness */}
        <SpotlightCard className="p-0 overflow-hidden" spotlightColor="rgba(0, 229, 255, 0.12)">
          <div className="grid lg:grid-cols-12 gap-0">
            
            {/* Carousel Column */}
            <div className="lg:col-span-6 relative bg-black/40 min-h-[320px] sm:min-h-[400px] flex items-center justify-center p-4 sm:p-8 overflow-hidden group">
              <div className="relative w-full h-full aspect-video sm:aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#090A10]">
                {eunoiaImages.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`Eunoia Preview ${idx + 1}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-out ${
                      idx === eunoiaIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
                    }`}
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                ))}

                {/* Left/Right Controls */}
                <button
                  onClick={() => setEunoiaIndex((prev) => (prev - 1 + eunoiaImages.length) % eunoiaImages.length)}
                  aria-label="Previous image"
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 text-white hover:bg-black/90 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all active:scale-95"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setEunoiaIndex((prev) => (prev + 1) % eunoiaImages.length)}
                  aria-label="Next image"
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 text-white hover:bg-black/90 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all active:scale-95"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>

                {/* Dot Indicators */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md">
                  {eunoiaImages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setEunoiaIndex(idx)}
                      aria-label={`Slide ${idx + 1}`}
                      className={`h-1.5 rounded-full transition-all ${
                        idx === eunoiaIndex ? 'w-5 bg-cyan-400' : 'w-1.5 bg-white/40 hover:bg-white/70'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-6 p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3 flex-wrap">
                  <Badge variant="cyan">Web Audio App</Badge>
                  <Badge variant="indigo">Mental Wellness</Badge>
                </div>

                <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white">
                  Eunoia
                </h3>
                <p className="text-xs font-mono text-cyan-600 dark:text-cyan-400 mt-0.5">
                  Interactive Soundscape & Mood Modulation Platform
                </p>

                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-4 leading-relaxed font-normal">
                  A personalized mental wellness web application powered by browser-native Web Audio API. Dynamically synthesizes harmonic frequencies and binaural soundscapes calibrated for relaxation, focus, and mindfulness routines.
                </p>

                {/* Architectural Highlights */}
                <ul className="mt-4 space-y-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span>Real-time audio waveform synthesis via Web Audio API nodes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span>Zero-latency local storage state sync for routine timers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span>Responsive, high-aesthetic layout with fluid transitions</span>
                  </li>
                </ul>

                {/* Tech Pills */}
                <div className="mt-6 flex flex-wrap gap-1.5">
                  {['JavaScript', 'HTML5', 'CSS3', 'Web Audio API', 'LocalStorage', 'Vercel'].map((tech) => (
                    <span key={tech} className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/5 dark:bg-white/5 bg-slate-100 text-slate-700 dark:text-slate-300 border border-white/10 dark:border-white/10 border-slate-200">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-8 mt-6 border-t border-white/10 dark:border-white/10 border-slate-200 flex flex-wrap items-center gap-4">
                <a
                  href="https://eunoia-companion.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-glow-cyan transition-all hover:scale-105 active:scale-95"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Launch App</span>
                </a>
                <a
                  href="https://github.com/PrajaktaSarkhel/Eunoia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs bg-white/5 dark:bg-white/5 bg-slate-100 hover:bg-white/10 dark:hover:bg-white/10 hover:bg-slate-200 text-slate-800 dark:text-slate-200 border border-white/10 dark:border-white/10 border-slate-300 transition-all hover:scale-105 active:scale-95"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>Source Code</span>
                </a>
              </div>
            </div>

          </div>
        </SpotlightCard>

        {/* Project 2: PosturePro IoT */}
        <SpotlightCard className="p-0 overflow-hidden" spotlightColor="rgba(16, 185, 129, 0.12)">
          <div className="grid lg:grid-cols-12 gap-0">
            
            {/* Content Column (Left on Desktop) */}
            <div className="lg:col-span-6 p-8 sm:p-10 flex flex-col justify-between order-2 lg:order-1">
              <div>
                <div className="flex items-center gap-2 mb-3 flex-wrap">
                  <Badge variant="emerald">IoT Hardware</Badge>
                  <Badge variant="amber">TSEC @ IIM Calcutta</Badge>
                </div>

                <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white">
                  PosturePro
                </h3>
                <p className="text-xs font-mono text-emerald-600 dark:text-emerald-400 mt-0.5">
                  BLE Ergonomic Posture Correction Wearable System
                </p>

                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-4 leading-relaxed font-normal">
                  An IoT-enabled smart wearable system designed to prevent musculoskeletal strain by actively monitoring spinal curvature in real time. Transmits low-latency BLE haptic feedback and health telemetry to paired devices.
                </p>

                {/* Recognition Badge */}
                <div className="mt-4 p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-500 dark:text-amber-400 flex items-center gap-3">
                  <Trophy className="w-5 h-5 flex-shrink-0" />
                  <p className="text-xs font-medium">
                    Presented at <span className="font-semibold text-slate-900 dark:text-white">TSEC 2025, IIM Calcutta</span> (Sept 2025)
                  </p>
                </div>

                {/* Tech Pills */}
                <div className="mt-6 flex flex-wrap gap-1.5">
                  {['IoT', 'Bluetooth Low Energy', 'Arduino', 'Python', 'Sensors', 'Hardware Architecture'].map((tech) => (
                    <span key={tech} className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/5 dark:bg-white/5 bg-slate-100 text-slate-700 dark:text-slate-300 border border-white/10 dark:border-white/10 border-slate-200">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-8 mt-6 border-t border-white/10 dark:border-white/10 border-slate-200 flex flex-wrap items-center gap-4">
                <a
                  href="/PosturePro.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-glow-emerald transition-all hover:scale-105 active:scale-95"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>View Project Report (PDF)</span>
                </a>
              </div>
            </div>

            {/* Carousel Column (Right on Desktop) */}
            <div className="lg:col-span-6 relative bg-black/40 min-h-[320px] sm:min-h-[400px] flex items-center justify-center p-4 sm:p-8 overflow-hidden group order-1 lg:order-2">
              <div className="relative w-full h-full aspect-video sm:aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#090A10]">
                {postureImages.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`PosturePro Preview ${idx + 1}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-out ${
                      idx === postureIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
                    }`}
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                ))}

                {/* Left/Right Controls */}
                {postureImages.length > 1 && (
                  <>
                    <button
                      onClick={() => setPostureIndex((prev) => (prev - 1 + postureImages.length) % postureImages.length)}
                      aria-label="Previous slide"
                      className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 text-white hover:bg-black/90 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all active:scale-95"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setPostureIndex((prev) => (prev + 1) % postureImages.length)}
                      aria-label="Next slide"
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 text-white hover:bg-black/90 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all active:scale-95"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md">
                      {postureImages.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setPostureIndex(idx)}
                          aria-label={`Slide ${idx + 1}`}
                          className={`h-1.5 rounded-full transition-all ${
                            idx === postureIndex ? 'w-5 bg-emerald-400' : 'w-1.5 bg-white/40 hover:bg-white/70'
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>

          </div>
        </SpotlightCard>

      </div>
    </section>
  );
}
