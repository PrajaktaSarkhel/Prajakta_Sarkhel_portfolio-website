import React, { useState, useEffect } from 'react';
import { ArrowUp, Github, Linkedin, Mail, Twitter, Instagram, Heart, Code2 } from 'lucide-react';

export default function Footer() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateIST = () => {
      const now = new Date();
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };

    updateIST();
    const interval = setInterval(updateIST, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 dark:border-white/10 border-slate-200 bg-[#07080D] dark:bg-[#07080D] bg-slate-50 py-16 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Brand & Tagline */}
        <div className="text-center md:text-left space-y-2">
          <div className="flex items-center justify-center md:justify-start gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-white text-xs font-mono font-bold shadow-glow-cyan">
              PS
            </div>
            <span className="font-display font-bold text-slate-900 dark:text-white text-base tracking-tight">
              Prajakta Sarkhel
            </span>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 font-normal">
            Computer Science Undergrad · SDE Intern & Researcher
          </p>
        </div>

        {/* Live Local Time Badge */}
        <div className="px-4 py-2 rounded-full bg-white/5 dark:bg-white/5 bg-slate-100 border border-white/10 dark:border-white/10 border-slate-200 flex items-center gap-2 text-xs font-mono text-slate-600 dark:text-slate-400">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>IST (UTC+5:30): {time || '12:00:00 PM'}</span>
        </div>

        {/* Back to Top & Socials */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/PrajaktaSarkhel"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2.5 rounded-xl bg-white/5 dark:bg-white/5 bg-slate-100 hover:text-cyan-400 text-slate-500 dark:text-slate-400 border border-white/10 dark:border-white/10 border-slate-200 transition-all hover:scale-105"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/prajakta-sarkhel"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2.5 rounded-xl bg-white/5 dark:bg-white/5 bg-slate-100 hover:text-blue-400 text-slate-500 dark:text-slate-400 border border-white/10 dark:border-white/10 border-slate-200 transition-all hover:scale-105"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="mailto:prajaktasarkhel@gmail.com"
            aria-label="Email"
            className="p-2.5 rounded-xl bg-white/5 dark:bg-white/5 bg-slate-100 hover:text-indigo-400 text-slate-500 dark:text-slate-400 border border-white/10 dark:border-white/10 border-slate-200 transition-all hover:scale-105"
          >
            <Mail className="w-4 h-4" />
          </a>

          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="p-2.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/20 transition-all hover:scale-105 active:scale-95 ml-2"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Copyright */}
      <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-white/5 dark:border-white/5 border-slate-200 text-center text-xs text-slate-500 font-mono">
        <p>© 2026 Prajakta Sarkhel. Crafted with precision & engineering discipline.</p>
      </div>
    </footer>
  );
}
