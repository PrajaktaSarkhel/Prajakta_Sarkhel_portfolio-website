import React from 'react';
import { Palette, Compass, Lightbulb, Users, Code, Award } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import SpotlightCard from './ui/SpotlightCard';

export default function AboutBento() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative">
      <SectionHeading
        badge="About Me"
        title="Engineering with"
        highlight="Intent & Passion"
        subtitle="Bridging analytical computer science with creative fine arts to build software that is both technically resilient and delightful to use."
      />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        
        {/* Main Narrative Card (Span 8) */}
        <SpotlightCard className="md:col-span-8 p-8 md:p-10" spotlightColor="rgba(0, 229, 255, 0.12)">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
              <Compass className="w-5 h-5" />
            </div>
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Background & Philosophy</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white mb-4">
            Solving complex problems with structured thinking.
          </h3>

          <div className="space-y-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            <p>
              I am a Computer Science Engineering student from <span className="font-semibold text-slate-900 dark:text-white">West Bengal, India</span>. My passion lies in architecting backend systems, scalable APIs, and intuitive full-stack applications.
            </p>
            <p>
              With a strong foundation in <span className="text-cyan-600 dark:text-cyan-400 font-medium">Data Structures & Algorithms</span> and CS core fundamentals, I actively turn theoretical concepts into high-performance production systems.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-8 mt-6 border-t border-white/10 dark:border-white/10 border-slate-200">
            <div>
              <p className="text-xs font-mono text-slate-400">Location</p>
              <p className="text-sm font-semibold text-slate-900 dark:text-white mt-0.5">West Bengal, IN</p>
            </div>
            <div>
              <p className="text-xs font-mono text-slate-400">Undergrad</p>
              <p className="text-sm font-semibold text-slate-900 dark:text-white mt-0.5">B.Tech CSE (2024–28)</p>
            </div>
            <div>
              <p className="text-xs font-mono text-slate-400">Core Focus</p>
              <p className="text-sm font-semibold text-cyan-600 dark:text-cyan-400 mt-0.5">Backend & Full-Stack</p>
            </div>
          </div>
        </SpotlightCard>

        {/* Code × Canvas Card (Span 4) */}
        <SpotlightCard className="md:col-span-4 p-8 flex flex-col justify-between" spotlightColor="rgba(244, 63, 94, 0.12)">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400">
                <Palette className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono text-rose-400 uppercase tracking-widest">Fine Arts Degree</span>
            </div>

            <h4 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-3">
              Code × Canvas
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Pursuing a <span className="font-semibold text-slate-900 dark:text-white">Bachelor of Fine Arts (BFA)</span> alongside Engineering. Practicing traditional painting cultivates deep focus, spatial intuition, and high aesthetic standards for UI engineering.
            </p>
          </div>

          <div className="pt-6 mt-6 border-t border-white/10 dark:border-white/10 border-slate-200">
            <span className="inline-flex items-center gap-2 text-xs font-mono text-rose-400 font-medium">
              <span>✦ Rabindra Bharati Univ. Affiliate</span>
            </span>
          </div>
        </SpotlightCard>

        {/* Mathematics / Analytical Card (Span 6) */}
        <SpotlightCard className="md:col-span-6 p-8" spotlightColor="rgba(99, 102, 241, 0.12)">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
              <Lightbulb className="w-5 h-5" />
            </div>
            <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest">Mindset</span>
          </div>

          <h4 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-2">
            Math as a Playground
          </h4>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            I've always treated mathematics like an engaging puzzle game rather than a chore. This curiosity fuels my passion for algorithm optimization, data structures, and mathematical modeling in research.
          </p>
        </SpotlightCard>

        {/* Leadership Card (Span 6) */}
        <SpotlightCard className="md:col-span-6 p-8" spotlightColor="rgba(16, 185, 129, 0.12)">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
              <Users className="w-5 h-5" />
            </div>
            <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">Leadership</span>
          </div>

          <h4 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-2">
            Community & Collaboration
          </h4>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            Held active leadership positions across top collegiate technical and cultural clubs. I enjoy organizing events, mentoring peers, and driving cross-functional teamwork.
          </p>
        </SpotlightCard>

      </div>
    </section>
  );
}
