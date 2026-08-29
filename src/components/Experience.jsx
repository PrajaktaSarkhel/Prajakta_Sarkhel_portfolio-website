import React from 'react';
import { Briefcase, Calendar, MapPin, Linkedin, CheckCircle2, ArrowUpRight, ShieldCheck, Zap } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import SpotlightCard from './ui/SpotlightCard';
import Badge from './ui/Badge';

export default function Experience() {
  const experiences = [
    {
      role: 'SDE Intern',
      company: 'Hunt Digital Media',
      type: 'Internship',
      period: 'Feb 2026 – Present',
      location: 'Remote',
      isCurrent: true,
      accentColor: 'cyan',
      spotlight: 'rgba(0, 229, 255, 0.12)',
      highlights: [
        'Engineered core CRM workflows processing high-volume Meta Ads leads, ensuring seamless lead distribution, deduplication, and pipeline tracking.',
        'Optimized backend architecture using Go microservices, boosting throughput from ~1K to 20K+ leads/day with enhanced fault tolerance.',
        'Implemented secure enterprise authentication via Google OAuth & automated SMS/Email OTP verification pipelines.',
        'Developed automation modules using Selenium to streamline operations and eliminate manual processing overhead.',
        'Collaborated directly with engineering leads across requirement grooming, system design, QA, and production deployments.'
      ],
      skills: ['Go', 'RESTful APIs', 'Google OAuth', 'Selenium', 'Backend Architecture', 'CRM Pipelines']
    },
    {
      role: 'CoachIn Mentee',
      company: 'LinkedIn',
      type: 'Technical Apprenticeship',
      period: 'Feb 2026 – Jul 2026 (6 mos)',
      location: 'Remote',
      isCurrent: true,
      accentColor: 'indigo',
      spotlight: 'rgba(99, 102, 241, 0.12)',
      companyIcon: Linkedin,
      highlights: [
        'Selected for the prestigious 6-month LinkedIn CoachIn Apprenticeship program, receiving 1:1 mentorship from Staff & Senior LinkedIn Engineers.',
        'Underwent comprehensive training in advanced Data Structures, Algorithms, Distributed System Design principles, and concurrency patterns.',
        'Qualified among the Top 20 Teams nationally in the LinkedIn CoachIn Hackathon 2026 by architecting and pitching a full-stack engineering solution.',
        'Engaged in weekly code reviews and mock design interviews with industry experts.'
      ],
      skills: ['Data Structures & Algorithms', 'System Design', 'Scalable Architecture', 'Code Review', 'Distributed Systems']
    }
  ];

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative">
      <SectionHeading
        badge="Experience & Mentorship"
        title="Engineering"
        highlight="At Scale"
        subtitle="Hands-on industry experience building high-throughput backend services and training with world-class engineering mentors."
      />

      <div className="space-y-8">
        {experiences.map((exp, idx) => (
          <SpotlightCard 
            key={idx}
            className="p-8 sm:p-10 transition-all duration-300 hover:border-white/20"
            spotlightColor={exp.spotlight}
          >
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10 dark:border-white/10 border-slate-200">
              <div>
                <div className="flex items-center gap-2.5 flex-wrap mb-2">
                  <Badge variant={exp.accentColor}>
                    {exp.type}
                  </Badge>
                  {exp.isCurrent && (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Active
                    </span>
                  )}
                </div>

                <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  {exp.role}
                </h3>
                <p className="text-base font-semibold text-cyan-600 dark:text-cyan-400 mt-1 flex items-center gap-1.5">
                  {exp.companyIcon && <exp.companyIcon className="w-4 h-4 text-[#0A66C2]" />}
                  <span>{exp.company}</span>
                </p>
              </div>

              <div className="text-left md:text-right">
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/5 dark:bg-white/5 bg-slate-100 border border-white/10 dark:border-white/10 border-slate-200 text-xs font-mono text-slate-700 dark:text-slate-300">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  <span>{exp.period}</span>
                </div>
                <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1 flex items-center md:justify-end gap-1">
                  <MapPin className="w-3 h-3" />
                  {exp.location}
                </p>
              </div>
            </div>

            {/* Bullet Points */}
            <ul className="mt-6 space-y-3.5 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              {exp.highlights.map((bullet, bIdx) => (
                <li key={bIdx} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            {/* Tech Tags */}
            <div className="mt-8 pt-6 border-t border-white/10 dark:border-white/10 border-slate-200 flex flex-wrap gap-2">
              {exp.skills.map((skill, sIdx) => (
                <span 
                  key={sIdx}
                  className="px-3 py-1 rounded-lg text-xs font-mono bg-white/5 dark:bg-white/5 bg-slate-100 text-slate-700 dark:text-slate-300 border border-white/5 dark:border-white/10 border-slate-200 hover:border-cyan-500/30 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </SpotlightCard>
        ))}
      </div>
    </section>
  );
}
