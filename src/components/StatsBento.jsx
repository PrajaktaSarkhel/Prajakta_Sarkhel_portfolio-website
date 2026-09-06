import React from 'react';
import { Terminal, BookOpen, Award, Trophy, GitPullRequest, GraduationCap } from 'lucide-react';
import SpotlightCard from './ui/SpotlightCard';

export default function StatsBento() {
  const stats = [
    {
      label: 'LeetCode Solved',
      value: '400+',
      sub: 'DSA, Patterns & Optimization',
      icon: Terminal,
      color: 'text-cyan-400',
      bg: 'bg-cyan-500/10 border-cyan-500/20',
      spotlight: 'rgba(0, 229, 255, 0.12)'
    },
    {
      label: 'Research & Patents',
      value: '3 Papers · 1 Patent',
      sub: 'NCCCI-2025 & AICTE VAANI',
      icon: BookOpen,
      color: 'text-indigo-400',
      bg: 'bg-indigo-500/10 border-indigo-500/20',
      spotlight: 'rgba(99, 102, 241, 0.12)'
    },
    {
      label: 'Academic Standing',
      value: '8.68 CGPA',
      sub: 'B.Tech CSE (2024-2028)',
      icon: GraduationCap,
      color: 'text-emerald-400',
      bg: 'bg-emerald-500/10 border-emerald-500/20',
      spotlight: 'rgba(16, 185, 129, 0.12)'
    },
    {
      label: 'Open Source Contributions',
      value: '4+ PRs merged',
      sub: 'Hacktoberfest 2024',
      icon: Trophy,
      color: 'text-amber-400',
      bg: 'bg-amber-500/10 border-amber-500/20',
      spotlight: 'rgba(245, 158, 11, 0.12)'
    }
  ];

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <SpotlightCard 
              key={idx} 
              className="p-6 transition-transform duration-300 hover:-translate-y-1"
              spotlightColor={stat.spotlight}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  {stat.label}
                </span>
                <div className={`p-2 rounded-xl border ${stat.bg}`}>
                  <Icon className={`w-4 h-4 ${stat.color}`} />
                </div>
              </div>
              <div className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
                {stat.value}
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 font-medium">
                {stat.sub}
              </p>
            </SpotlightCard>
          );
        })}
      </div>
    </section>
  );
}
