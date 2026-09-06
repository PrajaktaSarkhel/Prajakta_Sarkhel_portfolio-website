import React, { useState } from 'react';
import { 
  SiJavascript, SiTypescript, SiPython, SiCplusplus, SiC,
  SiReact, SiNextdotjs, SiTailwindcss, SiHtml5, SiCss3,
  SiNodedotjs, SiMongodb, SiPostgresql, SiExpress,
  SiGit, SiGithub, SiVercel, SiPostman, SiGo
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { VscCode } from "react-icons/vsc";
import SectionHeading from './ui/SectionHeading';
import SpotlightCard from './ui/SpotlightCard';

export default function TechStack() {
  const [activeTab, setActiveTab] = useState('scroller');

  const categories = [
    { id: 'scroller', label: '✦ Live Infinite Marquee' },
    { id: 'all', label: 'All Grid' },
    { id: 'languages', label: 'Languages' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend & DB' },
    { id: 'tools', label: 'Tools & DevOps' },
  ];

  const row1Skills = [
    { name: 'Go', category: 'languages', icon: SiGo, color: '#00ADD8', level: 'Production' },
    { name: 'React', category: 'frontend', icon: SiReact, color: '#61DAFB', level: 'Advanced' },
    { name: 'TypeScript', category: 'languages', icon: SiTypescript, color: '#3178C6', level: 'Intermediate' },
    { name: 'Next.js', category: 'frontend', icon: SiNextdotjs, isMonochrome: true, level: 'Intermediate' },
    { name: 'Node.js', category: 'backend', icon: SiNodedotjs, color: '#5FA04E', level: 'Proficient' },
    { name: 'JavaScript', category: 'languages', icon: SiJavascript, color: '#F7DF1E', level: 'Advanced' },
    { name: 'Tailwind CSS', category: 'frontend', icon: SiTailwindcss, color: '#06B6D4', level: 'Advanced' },
    { name: 'PostgreSQL', category: 'backend', icon: SiPostgresql, color: '#4169E1', level: 'Intermediate' },
    { name: 'Python', category: 'languages', icon: SiPython, color: '#3776AB', level: 'Proficient' },
    { name: 'GitHub', category: 'tools', icon: SiGithub, isMonochrome: true, level: 'Proficient' },
  ];

  const row2Skills = [
    { name: 'Express.js', category: 'backend', icon: SiExpress, isMonochrome: true, level: 'Proficient' },
    { name: 'C++', category: 'languages', icon: SiCplusplus, color: '#00599C', level: 'DSA & CP' },
    { name: 'MongoDB', category: 'backend', icon: SiMongodb, color: '#47A248', level: 'Intermediate' },
    { name: 'Vercel', category: 'tools', icon: SiVercel, isMonochrome: true, level: 'Deployment' },
    { name: 'Java', category: 'languages', icon: FaJava, color: '#ED8B00', level: 'Proficient' },
    { name: 'HTML5', category: 'frontend', icon: SiHtml5, color: '#E34F26', level: 'Advanced' },
    { name: 'CSS3', category: 'frontend', icon: SiCss3, color: '#1572B6', level: 'Advanced' },
    { name: 'Git', category: 'tools', icon: SiGit, color: '#F05032', level: 'Proficient' },
    { name: 'VS Code', category: 'tools', icon: VscCode, color: '#007ACC', level: 'Daily IDE' },
    { name: 'Postman', category: 'tools', icon: SiPostman, color: '#FF6C37', level: 'API Testing' },
    { name: 'C', category: 'languages', icon: SiC, color: '#00599C', level: 'Core' },
  ];

  const allSkills = [...row1Skills, ...row2Skills];

  const filteredSkills = activeTab === 'all' 
    ? allSkills 
    : allSkills.filter(s => s.category === activeTab);

  const SkillBadge = ({ skill }) => {
    const Icon = skill.icon;
    return (
      <div 
        className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white dark:bg-[#0F131F]/90 border border-slate-200 dark:border-white/10 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-500/40 dark:hover:border-cyan-400/40 group flex-shrink-0 cursor-default"
      >
        <div 
          className={`w-9 h-9 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${
            skill.isMonochrome ? 'text-slate-900 dark:text-white' : ''
          }`}
          style={!skill.isMonochrome ? { color: skill.color } : {}}
        >
          <Icon className="w-5 h-5" />
        </div>
        <div className="text-left">
          <p className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
            {skill.name}
          </p>
          <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400">
            {skill.level}
          </span>
        </div>
      </div>
    );
  };

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative overflow-hidden">
      <SectionHeading
        badge="Technical Arsenal"
        title="Tools &"
        highlight="Technologies"
        subtitle="Languages, frameworks, databases, and tools I use to design, develop, and scale production applications."
      />

      {/* Category Tabs */}
      <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveTab(cat.id)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
              activeTab === cat.id
                ? 'bg-cyan-500 text-slate-950 font-semibold shadow-glow-cyan scale-105'
                : 'bg-white dark:bg-white/5 bg-slate-100 text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-300 dark:border-white/10'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Mode 1: Infinite Marquee Scrollers */}
      {activeTab === 'scroller' ? (
        <div className="space-y-6 relative">
          
          {/* Side fade masks for clean aesthetic */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-[#F8FAFC] dark:from-[#090A10] to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-[#F8FAFC] dark:from-[#090A10] to-transparent z-10" />

          {/* Row 1: Left Scroller */}
          <div className="overflow-hidden flex">
            <div className="animate-marquee-left flex gap-4 pr-4">
              {[...row1Skills, ...row1Skills].map((skill, idx) => (
                <SkillBadge key={`${skill.name}-row1-${idx}`} skill={skill} />
              ))}
            </div>
          </div>

          {/* Row 2: Right Scroller */}
          <div className="overflow-hidden flex">
            <div className="animate-marquee-right flex gap-4 pr-4">
              {[...row2Skills, ...row2Skills].map((skill, idx) => (
                <SkillBadge key={`${skill.name}-row2-${idx}`} skill={skill} />
              ))}
            </div>
          </div>

          <p className="text-center text-xs font-mono text-slate-500 dark:text-slate-400 pt-2">
            ✦ Hover over any tech card to pause marquee
          </p>
        </div>
      ) : (
        /* Mode 2: Filterable Grid View */
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filteredSkills.map((skill) => {
            const Icon = skill.icon;
            return (
              <SpotlightCard 
                key={skill.name}
                className="p-5 flex flex-col items-center justify-center text-center group cursor-default transition-all duration-200 hover:-translate-y-1"
                spotlightColor="rgba(0, 229, 255, 0.12)"
              >
                <div 
                  className={`w-12 h-12 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110 ${
                    skill.isMonochrome ? 'text-slate-900 dark:text-white' : ''
                  }`}
                  style={!skill.isMonochrome ? { color: skill.color } : {}}
                >
                  <Icon className="w-6 h-6 transition-all" />
                </div>
                <h4 className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                  {skill.name}
                </h4>
                <span className="mt-1 text-[11px] font-mono text-slate-500 dark:text-slate-400">
                  {skill.level}
                </span>
              </SpotlightCard>
            );
          })}
        </div>
      )}

    </section>
  );
}
