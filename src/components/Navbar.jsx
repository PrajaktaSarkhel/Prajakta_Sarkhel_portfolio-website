import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, FileText, Sparkles } from 'lucide-react';

export default function Navbar({ darkMode, setDarkMode }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Research', href: '#research' },
    { name: 'Art', href: '#art' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'education', 'experience', 'projects', 'skills', 'research', 'art', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 sm:pt-6 pointer-events-none">
      <nav 
        className={`pointer-events-auto w-full max-w-5xl transition-all duration-300 rounded-full px-5 py-3 flex items-center justify-between border ${
          scrolled 
            ? 'bg-[#090A10]/85 dark:bg-[#090A10]/85 bg-white/85 backdrop-blur-xl border-white/10 dark:border-white/10 border-slate-200/80 shadow-2xl' 
            : 'bg-[#0F131E]/60 dark:bg-[#0F131E]/60 bg-white/70 backdrop-blur-lg border-white/[0.06] dark:border-white/[0.06] border-slate-200/50'
        }`}
      >
        {/* Logo */}
        <a 
          href="#hero" 
          className="group flex items-center gap-2 text-slate-900 dark:text-white font-display font-bold text-lg tracking-tight"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-white text-xs font-mono font-bold shadow-glow-cyan transition-transform group-hover:scale-105">
            PS
          </div>
          <span className="hidden sm:inline font-semibold">Prajakta<span className="text-cyan-400">.</span></span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1 bg-white/5 dark:bg-white/5 bg-slate-100/80 p-1 rounded-full border border-white/[0.04] dark:border-white/[0.04] border-slate-200/50">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-cyan-500/15 text-cyan-400 dark:text-cyan-300 font-semibold shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/5 dark:hover:bg-white/5'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2.5">
          <a
            href="/Prajakta_Sarkhel_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 hover:from-cyan-500/20 hover:to-indigo-500/20 text-cyan-500 dark:text-cyan-300 border border-cyan-500/30 hover:border-cyan-500/50 transition-all hover:scale-105"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </a>

          {/* Theme Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            className="p-2 rounded-full text-slate-400 hover:text-slate-100 dark:text-slate-400 dark:hover:text-white hover:bg-white/10 transition-all active:scale-95"
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            className="md:hidden p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto md:hidden fixed inset-x-4 top-20 bg-[#0F131E]/95 dark:bg-[#0F131E]/95 bg-white/95 backdrop-blur-2xl p-6 rounded-3xl border border-white/10 shadow-2xl flex flex-col gap-3 animate-in fade-in slide-in-from-top-4 duration-200">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-cyan-400 hover:bg-white/5 transition-colors flex items-center justify-between"
            >
              <span>{link.name}</span>
              <span className="text-xs text-slate-500 font-mono">0{navLinks.indexOf(link) + 1}</span>
            </a>
          ))}
          <div className="pt-3 mt-1 border-t border-white/10 flex gap-2">
            <a
              href="/Prajakta_Sarkhel_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center py-2.5 px-4 rounded-xl text-xs font-semibold bg-cyan-500 text-slate-950 font-mono flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4" />
              Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
