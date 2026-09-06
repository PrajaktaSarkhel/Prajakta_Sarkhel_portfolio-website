import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import SpotlightCard from './ui/SpotlightCard';

export default function Experience() {
  const experiences = [
    {
      role: 'Software Development Engineer',
      company: 'Hunt Digital Media',
      employmentType: 'Full-time & Internship',
      period: 'Feb 2026 – Present',
      location: 'Mumbai, IN · Remote',
      isCurrent: true,
      spotlight: 'rgba(0, 229, 255, 0.14)',
      logo: '/hunt_digital_media_logo.png',
      highlights: [
        'Promoted to full-time SDE following a successful 6-month internship.',
        'Scaled Meta Ads lead processing from ~1K to 20K+/day using Go microservices.',
        'Engineered enterprise auth flows with Google OAuth and SMS/Email OTP verification.',
        'Developed full-stack features across React, Laravel, Go, MySQL, and Selenium.'
      ],
      skills: ['Go', 'React', 'Laravel', 'MySQL', 'Google OAuth', 'Selenium', 'Microservices']
    },
    {
      role: 'CoachIn Mentee',
      company: 'LinkedIn',
      employmentType: 'Apprenticeship',
      period: 'Feb 2026 – Jul 2026 (6 mos)',
      location: 'Remote',
      isCurrent: false,
      spotlight: 'rgba(99, 102, 241, 0.14)',
      logo: '/linkedin_logo.png',
      highlights: [
        'Selected for 6-month CoachIn program with 1:1 mentorship from Senior LinkedIn Engineers.',
        'Trained in advanced DSA, Distributed System Design, and Concurrency patterns.',
        'Ranked in Top 20 Teams nationally in the LinkedIn CoachIn Hackathon 2026.',
        'Participated in weekly production-grade code reviews and architecture design sessions.'
      ],
      skills: ['DSA', 'Distributed Systems', 'System Design', 'Scalable Architecture', 'Concurrency', 'Code Review']
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
        {experiences.map((exp, idx) => (
          <SpotlightCard 
            key={idx}
            className="p-6 sm:p-8 flex flex-col justify-between h-full transition-all duration-300 hover:border-cyan-500/30"
            spotlightColor={exp.spotlight}
          >
            <div>
              {/* Header with Company Logo */}
              <div className="flex items-start gap-4 pb-5 border-b border-slate-200 dark:border-white/10">
                <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-white p-1 border border-slate-200 dark:border-white/10 shadow-sm flex-shrink-0 flex items-center justify-center overflow-hidden">
                  <img 
                    src={exp.logo} 
                    alt={exp.company} 
                    className="w-full h-full object-contain rounded-xl"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 dark:text-white leading-tight">
                      {exp.role}
                    </h3>
                    {exp.isCurrent && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 flex-shrink-0">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        Active
                      </span>
                    )}
                  </div>

                  <p className="text-sm sm:text-base font-semibold text-cyan-600 dark:text-cyan-400 mt-0.5">
                    {exp.company}
                  </p>
                  
                  {/* Employment type below company name as text (not badges) */}
                  <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-0.5">
                    {exp.employmentType}
                  </p>
                </div>
              </div>

              {/* Period & Location Metadata Bar */}
              <div className="flex items-center justify-between gap-2 py-2.5 border-b border-slate-200/60 dark:border-white/5 text-xs font-mono text-slate-600 dark:text-slate-400">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-slate-800 dark:text-slate-300">
                  <Calendar className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
                  <span>{exp.period}</span>
                </div>
                <p className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-slate-400" />
                  {exp.location}
                </p>
              </div>

              {/* Reduced, crisp Bullet Points */}
              <ul className="mt-4 space-y-2.5 text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                {exp.highlights.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 dark:bg-cyan-400 mt-2 flex-shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Tags Pinned at Bottom */}
            <div className="mt-6 pt-5 border-t border-slate-200 dark:border-white/10 flex flex-wrap gap-2">
              {exp.skills.map((skill, sIdx) => (
                <span 
                  key={sIdx}
                  className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-white/15 hover:border-cyan-500/50 dark:hover:border-cyan-400/40 hover:text-cyan-600 dark:hover:text-cyan-400 shadow-sm transition-all"
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
