import React from 'react';
import { BookOpen, FileText, Download, Award, Sparkles, ExternalLink, ShieldCheck } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import SpotlightCard from './ui/SpotlightCard';
import Badge from './ui/Badge';

export default function Research() {
  const publications = [
    {
      title: 'An Insight into Impact of Dark Mode on Energy Conservation Across Devices',
      venue: 'National Conference on Communication, Computing and IoT (NCCCI-2025)',
      date: 'February 2025',
      status: 'Published',
      pdfUrl: '/Dark_Mode_Research_Paper.pdf',
      hasPdf: true,
      accent: 'cyan',
      spotlight: 'rgba(0, 229, 255, 0.12)',
      description: 'Investigated OLED/AMOLED display power consumption dynamics under light vs. dark UI themes, establishing quantitative energy efficiency models across mobile and desktop architectures.'
    },
    {
      title: 'The Role of Stimuli-Responsive Materials for Biomedical Challenges',
      venue: 'AICTE - VAANI Conference',
      date: 'September 2025',
      status: 'Published',
      hasPdf: false,
      accent: 'indigo',
      spotlight: 'rgba(99, 102, 241, 0.12)',
      description: 'Surveyed adaptive biomaterial behaviors under physiological stimuli, leveraging computational visualizations and AI-assisted data representations to model material responsiveness.'
    }
  ];

  return (
    <section id="research" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative">
      <SectionHeading
        badge="Academic Research"
        title="Scholarly & Applied"
        highlight="Publications"
        subtitle="Contributing to computer systems, human-computer interaction, and computational biomedical engineering."
      />

      {/* Publications Grid */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {publications.map((paper, idx) => (
          <SpotlightCard 
            key={idx}
            className="p-8 sm:p-10 flex flex-col justify-between"
            spotlightColor={paper.spotlight}
          >
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                  <FileText className="w-5 h-5" />
                </div>
                <Badge variant={paper.accent}>
                  {paper.status}
                </Badge>
              </div>

              <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 dark:text-white leading-snug">
                {paper.title}
              </h3>

              <div className="mt-3 space-y-1 font-mono text-xs text-slate-500 dark:text-slate-400">
                <p className="font-semibold text-slate-700 dark:text-slate-300">{paper.venue}</p>
                <p>Published: {paper.date}</p>
              </div>

              <p className="mt-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                {paper.description}
              </p>
            </div>

            {/* Action */}
            <div className="pt-6 mt-6 border-t border-white/10 dark:border-white/10 border-slate-200 flex items-center justify-between">
              {paper.hasPdf ? (
                <a
                  href={paper.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-glow-cyan transition-all hover:scale-105 active:scale-95 font-mono"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Paper (PDF)</span>
                </a>
              ) : (
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-white/5 dark:bg-white/5 bg-slate-100 text-slate-500 border border-white/10 dark:border-white/10 border-slate-200">
                  <span>Archived in Proceedings</span>
                </span>
              )}
            </div>
          </SpotlightCard>
        ))}
      </div>

      {/* Patent & Recognition Callout Card */}
      <SpotlightCard className="p-8 sm:p-10 border-cyan-500/20" spotlightColor="rgba(0, 229, 255, 0.15)">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-tr from-cyan-500 to-indigo-600 text-white shadow-glow-cyan">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-amber-500/10 text-amber-400 border border-amber-500/20 mb-1">
                <span>Intellectual Property</span>
              </div>
              <h4 className="text-xl font-display font-bold text-slate-900 dark:text-white">
                1 Patent Published & National Presentations
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-1 max-w-2xl font-normal">
                Authored 1 intellectual patent publication and presented scholarly findings across prestigious national stages including <span className="font-semibold text-slate-900 dark:text-white">IIM Calcutta</span> and <span className="font-semibold text-slate-900 dark:text-white">NIT Durgapur</span>.
              </p>
            </div>
          </div>
          
          <div className="flex-shrink-0">
            <Badge variant="emerald" className="text-xs px-3 py-1.5">
              Verified Scholar
            </Badge>
          </div>
        </div>
      </SpotlightCard>

    </section>
  );
}
