import React from 'react';
import { GraduationCap, Award, Calendar, MapPin, Trophy } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import SpotlightCard from './ui/SpotlightCard';
import Badge from './ui/Badge';

export default function Education() {
  const educationItems = [
    {
      step: '01',
      degree: 'B.Tech in Computer Science & Engineering',
      institution: 'Asansol Engineering College',
      location: 'West Bengal, India',
      period: '2024 – 2028',
      grade: '8.68 SGPA',
      gradeLabel: 'Semester GPA',
      isCurrent: true,
      accent: 'cyan',
      icon: GraduationCap,
      spotlight: 'rgba(0, 229, 255, 0.15)',
      details: 'Specializing in Computer Science fundamentals: Advanced Data Structures & Algorithms, Object-Oriented System Design, Operating Systems, Database Systems, and scalable backend architecture.'
    },
    {
      step: '02',
      degree: 'Higher Secondary Education (Class XII)',
      institution: 'Auxilium Convent School',
      location: 'West Bengal, India',
      period: '2021 – 2023',
      grade: '92.25%',
      gradeLabel: 'Board Score',
      isCurrent: false,
      accent: 'indigo',
      icon: Award,
      spotlight: 'rgba(99, 102, 241, 0.15)',
      details: 'Graduated with high distinction in Pure Sciences with a focus on Mathematics, Physics, and Computer Science fundamentals.'
    },
    {
      step: '03',
      degree: 'Secondary Education (Class X)',
      institution: 'Mount Carmel School',
      location: 'West Bengal, India',
      period: '2009 – 2021',
      grade: '96.40%',
      gradeLabel: 'Board Score',
      isCurrent: false,
      accent: 'emerald',
      icon: Trophy,
      spotlight: 'rgba(16, 185, 129, 0.15)',
      details: 'Achieved outstanding academic standing across school cohorts with top marks in Mathematics and General Sciences.'
    }
  ];

  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative">
      <SectionHeading
        badge="Academic Journey"
        title="Education &"
        highlight="Milestones"
        subtitle="Consistent academic excellence and disciplined foundation across Computer Science and STEM."
      />

      <div className="space-y-6">
        {educationItems.map((edu) => {
          const Icon = edu.icon;
          return (
            <SpotlightCard 
              key={edu.step}
              className="p-7 sm:p-9 transition-all duration-300 hover:border-cyan-500/30"
              spotlightColor={edu.spotlight}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-white/10">
                <div className="flex items-start gap-4">
                  
                  {/* Step Index Box */}
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-300 dark:border-white/10 flex flex-col items-center justify-center shadow-sm">
                    <span className="text-xs font-mono font-bold text-cyan-600 dark:text-cyan-400">
                      {edu.step}
                    </span>
                    <Icon className="w-4 h-4 text-slate-600 dark:text-slate-400 mt-0.5" />
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                      <Badge variant={edu.accent}>
                        {edu.gradeLabel}: {edu.grade}
                      </Badge>
                      {edu.isCurrent && (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          Current Degree
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 dark:text-white">
                      {edu.degree}
                    </h3>
                    <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mt-0.5">
                      {edu.institution}
                    </p>
                  </div>
                </div>

                <div className="text-left md:text-right pl-16 md:pl-0">
                  <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-xs font-mono font-medium text-slate-800 dark:text-slate-300 shadow-sm">
                    <Calendar className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
                    <span>{edu.period}</span>
                  </div>
                  <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1 flex items-center md:justify-end gap-1">
                    <MapPin className="w-3 h-3" />
                    {edu.location}
                  </p>
                </div>
              </div>

              <p className="mt-5 text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                {edu.details}
              </p>
            </SpotlightCard>
          );
        })}
      </div>
    </section>
  );
}
