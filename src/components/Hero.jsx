import React from 'react';
import { ArrowRight, FileText, Github, Linkedin, Mail, Sparkles, Terminal, Code2, Layers, Cpu } from 'lucide-react';
import SpotlightCard from './ui/SpotlightCard';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[92vh] pt-32 sm:pt-40 pb-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center overflow-hidden">
      {/* Ambient background glow orbs */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/10 dark:bg-cyan-500/10 blur-[130px] rounded-full" />
      <div className="pointer-events-none absolute top-1/3 right-1/4 w-[400px] h-[300px] bg-indigo-500/10 dark:bg-indigo-500/10 blur-[120px] rounded-full" />

      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Column: Headline & Action */}
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium border bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Available for SDE Roles & Internships</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-6xl xl:text-7xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.1]">
            Engineering robust systems with an{' '}
            <span className="text-gradient-cyan">
              artist's eye.
            </span>
          </h1>

          {/* Subtitle / Bio */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-300 max-w-2xl font-normal leading-relaxed mx-auto lg:mx-0">
            Hi, I'm <span className="font-semibold text-slate-900 dark:text-white">Prajakta Sarkhel</span>, a Computer Science undergrad, <span className="text-cyan-600 dark:text-cyan-400 font-medium">SDE Intern at Hunt Digital Media</span>, and <span className="text-indigo-600 dark:text-indigo-400 font-medium">LinkedIn CoachIn Mentee</span>. I specialize in backend scalability, full-stack web applications, and applied software research.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
            <a
              href="#projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-glow-cyan transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="/Prajakta_Sarkhel_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm bg-white dark:bg-white/10 hover:bg-slate-50 dark:hover:bg-white/15 text-slate-900 dark:text-white border-2 border-slate-800 dark:border-white/20 shadow-md transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              <FileText className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              <span>View Resume</span>
            </a>
          </div>

          {/* Social Quick Links */}
          <div className="flex items-center justify-center lg:justify-start gap-3 pt-2">
            <a
              href="https://github.com/PrajaktaSarkhel"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-xl bg-white dark:bg-white/5 bg-slate-100 hover:bg-cyan-500/10 hover:text-cyan-600 dark:hover:text-cyan-400 text-slate-700 dark:text-slate-400 border border-slate-300 dark:border-white/10 transition-all hover:scale-105 shadow-sm"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/prajakta-sarkhel"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-xl bg-white dark:bg-white/5 bg-slate-100 hover:bg-blue-500/10 hover:text-blue-600 dark:hover:text-blue-400 text-slate-700 dark:text-slate-400 border border-slate-300 dark:border-white/10 transition-all hover:scale-105 shadow-sm"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:prajaktasarkhel@gmail.com"
              aria-label="Email Contact"
              className="p-2.5 rounded-xl bg-white dark:bg-white/5 bg-slate-100 hover:bg-indigo-500/10 hover:text-indigo-600 dark:hover:text-indigo-400 text-slate-700 dark:text-slate-400 border border-slate-300 dark:border-white/10 transition-all hover:scale-105 shadow-sm"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Right Column: Hero Profile Bento Card */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-sm sm:max-w-md">
            
            {/* Ambient backlight */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 via-indigo-500/20 to-emerald-500/20 rounded-3xl blur-2xl opacity-60" />

            <SpotlightCard className="p-6 md:p-8" spotlightColor="rgba(0, 229, 255, 0.15)">
              <div className="flex flex-col items-center text-center">
                
                {/* Clean Circular Avatar without outer rectangular frame */}
                <div className="relative mb-5">
                  <img
                    src="/prajakta_image.png"
                    alt="Prajakta Sarkhel"
                    className="w-36 h-36 sm:w-44 sm:h-44 rounded-full object-cover shadow-xl transition-transform duration-500 hover:scale-105"
                    onError={(e) => {
                      e.target.src = '/prajakta_avatar.png';
                    }}
                  />
                </div>

                {/* Profile Card Meta */}
                <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white">
                  Prajakta Sarkhel
                </h3>
                <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
                  West Bengal, India · UTC+5:30
                </p>

                {/* Live Role Pill */}
                <div className="mt-4 w-full p-3 rounded-xl bg-white/5 dark:bg-white/5 bg-slate-50 border border-white/10 dark:border-white/10 border-slate-200 flex items-center justify-between text-left">
                  <div>
                    <p className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Current Focus</p>
                    <p className="text-xs font-semibold text-slate-800 dark:text-slate-200">Agentic Workflow · Multi-Agent System · AI Engineering</p>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                </div>
              </div>
            </SpotlightCard>
          </div>
        </div>

      </div>
    </section>
  );
}
