import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBento from './components/StatsBento';
import AboutBento from './components/AboutBento';
import Experience from './components/Experience';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import Research from './components/Research';
import ArtGallery from './components/ArtGallery';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
      return true; // Default to dark mode
    }
    return true;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen font-sans selection:bg-cyan-500/20 selection:text-cyan-400 transition-colors duration-300 ${
      darkMode ? 'bg-[#090A10] text-slate-100' : 'bg-[#F8FAFC] text-slate-900'
    }`}>
      
      {/* Background Dot Grid Canvas */}
      <div className="fixed inset-0 pointer-events-none bg-grid-pattern opacity-60 z-0" />

      {/* Floating Pill Navigation */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero />
        <StatsBento />
        <AboutBento />
        <Education />
        <Experience />
        <Projects />
        <TechStack />
        <Research />
        <ArtGallery />
        <Contact />
      </main>

      {/* Modern Luxury Footer */}
      <Footer />

    </div>
  );
}

export default App;