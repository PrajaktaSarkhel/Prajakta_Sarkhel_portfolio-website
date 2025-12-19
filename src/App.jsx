import React, { useState, useEffect, useRef } from 'react';
import { Moon, Sun, Github, Linkedin, Mail, FileText, Award, Code, 
  Briefcase, Calendar, Trophy, BookOpen, Zap, Send, Sparkles, 
  Lightbulb, Target, Rocket, Heart, Coffee, Palette, Image as ImageIcon } from 'lucide-react';

import { 
  SiJavascript, SiTypescript, SiPython, SiCplusplus, SiC,
  SiReact, SiNextdotjs, SiTailwindcss, SiHtml5, SiCss3,
  SiNodedotjs, SiMongodb, SiPostgresql, SiExpress,
  SiGit, SiGithub, SiVisualstudiocode, SiVercel, SiPostman
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('');
  const [visibleCards, setVisibleCards] = useState([]);
  
  const journeyRefs = useRef([]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Scroll animation for journey cards
  useEffect(() => {
    const observers = journeyRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleCards(prev => [...new Set([...prev, index])]);
            }, index * 200); // Stagger animation
          }
        },
        { threshold: 0.2 }
      );
      
      if (ref) observer.observe(ref);
      return observer;
    });

    return () => observers.forEach(observer => observer.disconnect());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:prajaktasarkhel@gmail.com?subject=Message from ${formData.name}&body=${formData.message}%0D%0A%0D%0AFrom: ${formData.email}`;
    window.location.href = mailtoLink;
    setFormStatus('Opening your email client... 📧');
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setFormStatus('');
    }, 2000);
  };

  // Section Divider Component
  const SectionDivider = ({ icon: Icon, text }) => (
    <div className="relative py-12 flex items-center justify-center">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t-2 border-gray-300 dark:border-gray-700"></div>
      </div>
      <div className="relative flex items-center gap-3 px-6 bg-white dark:bg-gray-900">
        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center animate-pulse">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <span className="text-2xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          {text}
        </span>
      </div>
    </div>
  );

  const journeyItems = [
    { date: 'September 2025', title: 'Presented at TSEC 2025, IIM Calcutta', desc: 'Led team presentation for PosturePro at a national-level tech event, showcasing hardware-software integration to industry experts.', color: 'blue', icon: Trophy },
    { date: 'February - September 2025', title: 'Published 2 Research Papers', desc: 'Published research on dark mode energy conservation (NCCCI-2025) and biomedical materials (AICTE-VAANI).', color: 'purple', icon: BookOpen },
    { date: 'May - June 2025', title: 'Built Eunoia Wellness App', desc: 'Developed a mental wellness application using Web Audio API with mood-based audio generation.', color: 'green', icon: Code },
    { date: '2024 - Present', title: 'Started B.Tech Journey', desc: 'Began CS studies at Asansol Engineering College, maintaining 8.68 SGPA while solving 100+ LeetCode problems.', color: 'pink', icon: Rocket }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>

      {/* Enhanced Navigation */}
      <nav className="fixed top-0 w-full backdrop-blur-md bg-white/90 dark:bg-gray-900/90 z-50 border-b border-gray-200 dark:border-gray-800 shadow-lg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-black bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            PS
          </h1>
          <div className="flex items-center gap-6">
            <a href="#about" className="text-sm font-medium hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400 transition-all hidden sm:block">About</a>
            <a href="#journey" className="text-sm font-medium hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400 transition-all hidden sm:block">Journey</a>
            <a href="#projects" className="text-sm font-medium hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400 transition-all hidden sm:block">Projects</a>
            <a href="#art" className="text-sm font-medium hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400 transition-all hidden sm:block">Art</a>
            <a href="#contact" className="text-sm font-medium hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400 transition-all hidden sm:block">Contact</a>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-pink-500 transition-all hover:scale-110 hover:rotate-180 duration-500"
            >
              {darkMode ? <Sun className="w-4 h-4 text-white" /> : <Moon className="w-4 h-4 text-white" />}
            </button>
          </div>
        </div>
      </nav>


      {/* Enhanced Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
          <div className="flex-1 space-y-6">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full">
              <span className="text-sm text-blue-600 dark:text-blue-400 font-bold flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Available for Internships
              </span>
            </div>
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-black dark:text-white leading-tight">
              Hi, I'm <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Prajakta</span>
            </h2>
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed font-medium">
              I'm a CSE undergrad exploring full-stack development. Published two research papers, presented at IIM Calcutta.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <a href="#projects" className="group px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-xl hover:shadow-2xl hover:scale-105 transition-all text-center font-bold flex items-center justify-center gap-2">
                <Rocket className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                Explore Projects
              </a>
              <a 
                href="/Prajakta_Sarkhel_resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gray-900 dark:bg-white dark:text-gray-900 text-white rounded-xl hover:shadow-2xl hover:scale-105 transition-all text-center flex items-center justify-center gap-2 font-bold"
              >
                <FileText className="w-5 h-5" />
                Resume
              </a>
            </div>
          </div>
          
          {/* PS Logo/Avatar - replace this div with an image */}
          <div className="flex-1 flex justify-center">
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl opacity-40 animate-pulse"></div>
              {/* Replace this div with: <img src="/ps-avatar.png" alt="PS" className="..." /> */}
              <div className="absolute inset-12 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-7xl font-black shadow-2xl hover:scale-110 transition-all duration-500">
                PS
              </div>
              <div className="absolute top-0 right-0 p-3 bg-blue-500 rounded-full animate-bounce">
                <Code className="w-6 h-6 text-white" />
              </div>
              <div className="absolute bottom-0 left-0 p-3 bg-purple-500 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}>
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* SECTION DIVIDER */}
      <SectionDivider icon={Sparkles} text="Get to Know Me" />

      {/* Enhanced About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">About Me</h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Combining technical innovation with creative expression
            </p>
          </div>
          
          {/* ENHANCED EDUCATION SECTION */}
          <div className="mb-16">
            <h4 className="text-3xl font-bold mb-10 text-gray-800 dark:text-white flex items-center justify-center gap-3">
              <BookOpen className="w-8 h-8 text-blue-500" />
              <span style={{paddingBottom: '4px'}}>Education</span>
            </h4>
            <div className="space-y-8">
              {/* Main B.Tech Card */}
              <div className="group relative p-8 rounded-3xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white hover:shadow-2xl transition-all hover:scale-[1.02] overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 group-hover:scale-150 transition-transform duration-700"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full -ml-24 -mb-24 group-hover:scale-150 transition-transform duration-700"></div>
      
                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                    <div>
                      <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur rounded-full mb-4">
                        <span className="text-sm font-bold">Current</span>
                      </div>
                      <h5 className="text-3xl font-black mb-3">B.Tech in Computer Science</h5>
                      <p className="text-blue-100 text-lg font-medium">Asansol Engineering College, West Bengal</p>
                    </div>
                    <span className="px-6 py-3 bg-white/30 backdrop-blur rounded-full text-lg font-black shadow-lg">2024-2028</span>
                  </div>
                  <div className="flex items-center gap-4 p-6 bg-white/20 backdrop-blur rounded-2xl">
                    <Trophy className="w-10 h-10" />
                    <div>
                      <p className="text-sm text-blue-100 mb-1">Semester GPA</p>
                      <p className="text-4xl font-black">8.68/10</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Secondary Education Cards */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="group relative p-8 rounded-3xl bg-white dark:bg-gray-800 border-2 border-purple-200 dark:border-purple-800 hover:shadow-xl hover:border-purple-400 dark:hover:border-purple-600 transition-all hover:scale-105 overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                        <Award className="w-6 h-6 text-white" />
                      </div>
                      <span className="px-4 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full text-sm font-bold">2021-23</span>
                    </div>
                    <h5 className="text-2xl font-bold dark:text-white mb-2">Higher Secondary</h5>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">Auxilium Convent School</p>
                    <div className="text-4xl font-black text-purple-600 dark:text-purple-400">92.25%</div>
                  </div>
                </div>

                <div className="group relative p-8 rounded-3xl bg-white dark:bg-gray-800 border-2 border-green-200 dark:border-green-800 hover:shadow-xl hover:border-green-400 dark:hover:border-green-600 transition-all hover:scale-105 overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                        <Award className="w-6 h-6 text-white" />
                      </div>
                      <span className="px-4 py-1 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 rounded-full text-sm font-bold">2009-21</span>
                    </div>
                    <h5 className="text-2xl font-bold dark:text-white mb-2">Secondary</h5>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">Mount Carmel School</p>
                    <div className="text-4xl font-black text-green-600 dark:text-green-400">96.4%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Skills */}
          <div className="mb-12">
            <h4 className="text-2xl font-semibold mb-8 text-gray-800 dark:text-gray-200 flex items-center gap-2">
              <Zap className="w-6 h-6 text-yellow-500" />
              Technical Skills
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="group p-6 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:scale-105 transition-all">
                <Code className="w-8 h-8 text-blue-500 mb-4" />
                <h5 className="font-bold mb-3 dark:text-white text-lg">Languages</h5>
                <div className="flex flex-wrap gap-2">
                  {['C', 'C++', 'Python', 'JavaScript', 'Java'].map(lang => (
                    <span key={lang} className="px-3 py-1 bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 rounded-full text-xs font-medium">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="group p-6 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:scale-105 transition-all">
                <Briefcase className="w-8 h-8 text-purple-500 mb-4" />
                <h5 className="font-bold mb-3 dark:text-white text-lg">Web Tech</h5>
                <div className="flex flex-wrap gap-2">
                  {['HTML5', 'CSS3', 'Tailwind', 'JavaScript', 'React'].map(tech => (
                    <span key={tech} className="px-3 py-1 bg-purple-500/10 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400 rounded-full text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="group p-6 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:scale-105 transition-all">
                <Award className="w-8 h-8 text-green-500 mb-4" />
                <h5 className="font-bold mb-3 dark:text-white text-lg">Learning</h5>
                <div className="flex flex-wrap gap-2">
                  {['Next.js', 'MongoDB', 'TypeScript'].map(tech => (
                    <span key={tech} className="px-3 py-1 bg-green-500/10 dark:bg-green-500/20 text-green-600 dark:text-green-400 rounded-full text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-8 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-200 dark:border-blue-900 hover:scale-105 transition-all">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">100+</div>
              <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">LeetCode Solved</div>
            </div>
            <div className="text-center p-8 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-200 dark:border-purple-900 hover:scale-105 transition-all">
              <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">2</div>
              <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">Research Papers</div>
            </div>
            <div className="text-center p-8 rounded-xl bg-gradient-to-br from-green-500/10 to-blue-500/10 border border-green-200 dark:border-green-900 hover:scale-105 transition-all">
              <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">8.68</div>
              <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">SGPA</div>
            </div>
            <div className="text-center p-8 rounded-xl bg-gradient-to-br from-pink-500/10 to-orange-500/10 border border-pink-200 dark:border-pink-900 hover:scale-105 transition-all">
              <div className="text-4xl font-bold text-pink-600 dark:text-pink-400 mb-2">4</div>
              <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">Open Source PRs</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION DIVIDER */}
      <SectionDivider icon={Calendar} text="Building My Path" />

      {/* NEW: Journey Timeline Section */}
      <section id="journey" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">My Journey</h3>
            <p className="text-gray-600 dark:text-gray-300">Key milestones that shaped my path 🚀</p>
          </div>
          
          <div className="space-y-12">
            {journeyItems.map((item, idx) => (
              <div 
                key={idx}
                ref={el => journeyRefs.current[idx] = el}
                className={`flex gap-8 group transition-all duration-1000 ${
                  visibleCards.includes(idx) 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 -translate-x-20'
                }`}
              >
                <div className="flex flex-col items-center">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br from-${item.color}-500 to-${item.color}-600 flex items-center justify-center text-white shadow-lg group-hover:scale-125 group-hover:rotate-12 transition-all duration-500`}>
                    <item.icon className="w-8 h-8" />
                  </div>
                  {idx !== journeyItems.length - 1 && (
                    <div className="w-1 h-full bg-gradient-to-b from-gray-300 to-gray-100 dark:from-gray-700 dark:to-gray-800"></div>
                  )}
                </div>
                <div className="flex-1 pb-12">
                  <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl border-2 border-gray-200 dark:border-gray-700 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500">
                    <span className={`text-sm font-bold text-${item.color}-600 dark:text-${item.color}-400 bg-${item.color}-100 dark:bg-${item.color}-900 px-4 py-2 rounded-full`}>
                      {item.date}
                    </span>
                    <h4 className="text-2xl font-black mt-4 mb-3 dark:text-white">{item.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* SECTION DIVIDER */}
      <SectionDivider icon={Rocket} text="Featured Work" />

      {/* Enhanced Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">Featured Projects</h3>
            <p className="text-gray-600 dark:text-gray-300">Building solutions that matter</p>
          </div>
          
          <div className="space-y-16">
            {/* Eunoia Project */}
            <div className="group rounded-2xl overflow-hidden bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-80 md:h-auto overflow-hidden bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="relative text-white text-5xl font-bold drop-shadow-lg">Eunoia</div>
                </div>
                <div className="p-8 sm:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-4 flex-wrap">
                    <span className="px-3 py-1 bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 rounded-full text-xs font-semibold">Web App</span>
                    <span className="px-3 py-1 bg-purple-500/10 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400 rounded-full text-xs font-semibold">Wellness</span>
                  </div>
                  <h4 className="text-3xl font-bold mb-4 dark:text-white">Eunoia</h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    A mental wellness application that generates mood-based audio tones using Web Audio API. Features responsive design, local storage for user preferences, interactive timers, and dynamic state management for a personalized wellness experience.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {['HTML5', 'CSS3', 'JavaScript', 'Web Audio API'].map(tech => (
                      <span key={tech} className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a href="https://github.com/PrajaktaSarkhel" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors font-medium group">
                      <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* PosturePro Project */}
            <div className="group rounded-2xl overflow-hidden bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-80 md:h-auto overflow-hidden bg-gradient-to-br from-green-500 via-teal-500 to-blue-500 flex items-center justify-center md:order-2">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="relative text-white text-5xl font-bold drop-shadow-lg">PosturePro</div>
                </div>
                <div className="p-8 sm:p-10 md:order-1 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-4 flex-wrap">
                    <span className="px-3 py-1 bg-green-500/10 dark:bg-green-500/20 text-green-600 dark:text-green-400 rounded-full text-xs font-semibold">IoT</span>
                    <span className="px-3 py-1 bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 rounded-full text-xs font-semibold">Hardware</span>
                  </div>
                  <h4 className="text-3xl font-bold mb-4 dark:text-white">PosturePro</h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    IoT-based posture correction wearable system designed to send real-time BLE notifications to smartphones and smartwatches. Combines hardware sensors with planned software integration for seamless health monitoring.
                  </p>
                  <div className="mb-6 p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 rounded-xl border-l-4 border-blue-500">
                    <p className="text-sm text-blue-700 dark:text-blue-300 font-semibold flex items-center gap-2">
                      <Trophy className="w-5 h-5" />
                      Presented at TSEC 2025, IIM Calcutta (Sept 2025)
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {['IoT', 'BLE', 'Arduino', 'Python', 'Hardware'].map(tech => (
                      <span key={tech} className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a href="https://github.com/PrajaktaSarkhel" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors font-medium group">
                      <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION DIVIDER */}
      <SectionDivider icon={BookOpen} text="Research" />

      {/* Research Section */}
      <section id="research" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">Research Publications</h3>
            <p className="text-xl text-gray-600 dark:text-gray-300">Contributing to academic knowledge 📚</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">

            {/* Dark Mode Paper - WITH DOWNLOAD */}
            <div className="group p-6 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 border-2 border-blue-200 dark:border-blue-700 hover:shadow-2xl hover:scale-[1.02] transition-all">
              <div className="flex items-start justify-between mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <span className="px-4 py-2 bg-blue-500/20 text-blue-600 dark:text-blue-400 rounded-full text-sm font-bold">Published</span>
              </div>
              <h4 className="text-xl font-bold mb-3 dark:text-white">
                An Insight into Impact of Dark Mode on Energy Conservation Across Devices
              </h4>
              <p className="text-gray-600 dark:text-gray-300 mb-3 font-medium">
                National Conference on Communication, Computing and IoT (NCCCI-2025)
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">
                Published: February 2025
              </p>

              <a 
                href="/Dark_Mode_Research_Paper.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-bold hover:shadow-lg hover:scale-105 transition-all"
              >
                <FileText className="w-5 h-5" />
                Download PDF
              </a>
            </div>

            {/* Biomedical Paper */}
            <div className="group p-6 rounded-xl bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-900 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all hover:scale-[1.02]">
              <div className="flex items-start justify-between mb-4">
                <FileText className="w-8 h-8 text-green-600 dark:text-green-400" />
                <span className="px-4 py-2 bg-green-500/20 text-green-600 dark:text-green-400 rounded-full text-sm font-bold">Published</span>
              </div>
              <h4 className="text-xl font-bold mb-3 dark:text-white">
                The Role of Stimuli-Responsive Materials for Biomedical Challenges
              </h4>
              <p className="text-gray-600 dark:text-gray-300 mb-3 font-medium">
                AICTE - VAANI Conference
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                Published: September 2025
              </p>
              <p className="text-xs text-blue-600 dark:text-blue-400 mb-6">
                Utilized AI-generated visualizations for data representation
              </p>
              <button className="flex items-center gap-2 px-4 py-2 bg-gray-300 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-lg cursor-not-allowed text-sm">
                <FileText className="w-4 h-4" />
                PDF Coming Soon
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION DIVIDER */}
      <SectionDivider icon={Palette} text="Art & Creativity" />

      {/* NEW: ART & PAINTING SECTION */}
      <section id="art" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-pink-50 to-orange-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">Art & Painting</h3>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Helps me breathe, live, create and inspire 🎨
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="p-8 bg-white dark:bg-gray-800 rounded-3xl border-2 border-pink-200 dark:border-pink-800 hover:shadow-2xl transition-all">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-orange-500 rounded-2xl flex items-center justify-center">
                    <Palette className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold dark:text-white">Fine Arts Journey</h4>
                    <p className="text-gray-600 dark:text-gray-300">Pursuing Bachelor's Degree</p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Currently pursuing Bachelor's in Fine Arts from Bangiya Sangeet Parishad (affiliated to Rabindra Bharati University). 
                  Expected graduation: April 2026.
                </p>
                <div className="flex items-center gap-2 text-sm text-pink-600 dark:text-pink-400 font-semibold">
                  <Trophy className="w-5 h-5" />
                  Diploma in Fine Arts (2019)
                </div>
              </div>

              <div className="p-8 bg-white dark:bg-gray-800 rounded-3xl border-2 border-orange-200 dark:border-orange-800 hover:shadow-2xl transition-all">
                <h5 className="text-xl font-bold mb-4 dark:text-white flex items-center gap-2">
                  <Sparkles className="w-6 h-6 text-orange-500" />
                  Why Art + Tech?
                </h5>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  My Fine Arts background gives me a unique perspective in tech. I approach UI/UX with an artist's eye for color, 
                  composition, and user emotion—creating interfaces that are not just functional, but beautiful and intuitive.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-orange-500 rounded-3xl blur-2xl opacity-20 animate-pulse"></div>
              <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-8 border-2 border-pink-200 dark:border-pink-800 hover:shadow-2xl transition-all">
                <div className="aspect-square bg-gradient-to-br from-pink-100 to-orange-100 dark:from-gray-700 dark:to-gray-600 rounded-2xl flex items-center justify-center mb-6">
                  <ImageIcon className="w-32 h-32 text-pink-400 dark:text-pink-500" />
                  <p className="absolute text-gray-500 dark:text-gray-400 font-medium">Art Gallery Coming Soon</p>
                </div>
                <h5 className="text-lg font-bold mb-2 dark:text-white">Exploring Multiple Mediums</h5>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  From traditional painting to digital art, I love experimenting with different forms of creative expression.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION DIVIDER */}
      <SectionDivider icon={Send} text="Get In Touch" />

      {/* CONTACT SECTION - ORIGINAL DESIGN WITH AVATAR */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-5xl font-black mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Let's Connect</h3>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Excited to connect with fellow developers, mentors, and companies! 🚀
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Contact Buttons */}
            <div className="space-y-6">
              <a
                href="mailto:prajaktasarkhel@gmail.com"
                className="flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl hover:shadow-2xl hover:scale-105 transition-all font-bold"
              >
                <Mail className="w-6 h-6" />
                Email Me
              </a>
              <a
                href="https://www.linkedin.com/in/prajakta-sarkhel"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-8 py-4 border-2 border-gray-300 dark:border-gray-700 rounded-xl hover:border-blue-500 dark:hover:border-blue-500 hover:scale-105 transition-all dark:text-white font-bold"
              >
                <Linkedin className="w-6 h-6" />
                LinkedIn
              </a>
              <a
                href="https://github.com/PrajaktaSarkhel"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-8 py-4 border-2 border-gray-300 dark:border-gray-700 rounded-xl hover:border-blue-500 dark:hover:border-blue-500 hover:scale-105 transition-all dark:text-white font-bold"
              >
                <Github className="w-6 h-6" />
                GitHub
              </a>

              {/* Animated Avatar */}
              <div className="relative mt-8">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-2xl opacity-30 animate-pulse"></div>
                <div className="relative bg-gradient-to-br from-blue-500 to-purple-500 rounded-3xl p-8 text-center">
                  <div className="w-48 h-48 mx-auto mb-4 bg-white rounded-full flex items-center justify-center">
                    <div className="text-6xl">👋</div>
                  </div>
                  <p className="text-white font-bold text-lg">Hey there!</p>
                  <p className="text-blue-100 text-sm mt-2">Looking forward to connecting with you!</p>
                </div>
              </div>
            </div>

            {/* Message Form */}
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 rounded-3xl p-8 border-2 border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all">
              <h4 className="text-2xl font-bold mb-6 dark:text-white flex items-center gap-2">
                <Send className="w-6 h-6 text-blue-500" />
                Send a Message
              </h4>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:border-blue-500 dark:focus:border-blue-400 focus:outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Your Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:border-blue-500 dark:focus:border-blue-400 focus:outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Message</label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows="4"
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:border-blue-500 dark:focus:border-blue-400 focus:outline-none transition-colors resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-bold hover:shadow-lg hover:scale-105 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
                {formStatus && (
                  <p className="text-center text-green-600 dark:text-green-400 font-bold animate-pulse">{formStatus}</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* THANK YOU SECTION WITH AVATAR HOLDING CARD */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 relative overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Avatar */}
            <div className="relative">
              <div className="w-64 h-64 bg-white/20 backdrop-blur rounded-full flex items-center justify-center animate-bounce">
                <div className="text-9xl">👋</div>
              </div>
            </div>

            {/* Thank You Card */}
            <div className="flex-1 bg-white dark:bg-gray-800 rounded-3xl p-10 shadow-2xl transform hover:scale-105 transition-all">
              <div className="text-center">
                <Heart className="w-16 h-16 text-red-500 mx-auto mb-6 animate-pulse" />
                <h3 className="text-4xl font-black mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Thank You!
                </h3>
                <p className="text-xl text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  I appreciate you taking the time to explore my work. Whether you're here to collaborate, hire, or just browse—your visit means a lot! 💙
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                  Let's build something amazing together! 🚀
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="#contact" className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-bold hover:shadow-lg hover:scale-105 transition-all">
                    Get In Touch
                  </a>
                  <a href="#" className="px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl font-bold hover:scale-105 transition-all">
                    Back to Top
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-16 px-4 bg-gradient-to-b from-gray-900 to-black border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          {/* Name with Glow Effect */}
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-black mb-6 hover:scale-105 transition-transform duration-500">
              <span 
                className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent cursor-default inline-block"
                style={{
                  filter: 'drop-shadow(0 0 20px rgba(139, 92, 246, 0.6)) drop-shadow(0 0 40px rgba(59, 130, 246, 0.4))',
                  animation: 'glow 3s ease-in-out infinite'
                }}
              >
                PRAJAKTA SARKHEL
              </span>
            </h2>
            <p className="text-gray-400 text-lg flex items-center justify-center gap-2 flex-wrap">
              Crafted with <Heart className="w-5 h-5 text-red-500 animate-pulse" /> and <Coffee className="w-5 h-5 text-orange-500" />
            </p>
          </div>

          {/* Social Links - Better Design */}
          <div className="flex justify-center gap-6 mb-12">
            <a 
              href="https://github.com/PrajaktaSarkhel" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group p-4 bg-gray-800 hover:bg-gray-700 rounded-2xl transition-all hover:scale-110 hover:shadow-lg hover:shadow-green-500/50"
            >
              <Github className="w-8 h-8 text-gray-400 group-hover:text-white transition-colors" />
            </a>
            <a 
              href="https://www.linkedin.com/in/prajakta-sarkhel" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group p-4 bg-gray-800 hover:bg-gray-700 rounded-2xl transition-all hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50"
            >
              <Linkedin className="w-8 h-8 text-gray-400 group-hover:text-white transition-colors" />
            </a>
            <a 
              href="mailto:prajaktasarkhel@gmail.com" 
              className="group p-4 bg-gray-800 hover:bg-gray-700 rounded-2xl transition-all hover:scale-110 hover:shadow-lg hover:shadow-purple-500/50"
            >
              <Mail className="w-8 h-8 text-gray-400 group-hover:text-white transition-colors" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-gray-500 text-sm">
              © 2025 Prajakta Sarkhel. All rights reserved.
            </p>
            <p className="text-gray-600 text-xs mt-2">
              Designed, developed, and thoughtfully engineered ✨
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes glow {
          0%, 100% {
            filter: drop-shadow(0 0 20px rgba(139, 92, 246, 0.6)) drop-shadow(0 0 40px rgba(59, 130, 246, 0.4));
          }
          50% {
            filter: drop-shadow(0 0 30px rgba(139, 92, 246, 0.8)) drop-shadow(0 0 60px rgba(59, 130, 246, 0.6));
          }
        }
      `}</style>

    </div>
  );
}

export default App;