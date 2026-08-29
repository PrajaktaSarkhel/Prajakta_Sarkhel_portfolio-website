import React from 'react';

export default function SectionHeading({ 
  badge, 
  title, 
  highlight, 
  subtitle, 
  align = 'center',
  className = '' 
}) {
  const isCenter = align === 'center';

  return (
    <div className={`mb-12 md:mb-16 ${isCenter ? 'text-center' : 'text-left'} ${className}`}>
      {badge && (
        <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 border bg-cyan-500/10 text-cyan-400 border-cyan-500/20 dark:bg-cyan-500/10 dark:text-cyan-400 dark:border-cyan-500/20 bg-sky-50 text-sky-700 border-sky-200`}>
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 dark:bg-cyan-400 bg-sky-500 animate-pulse" />
          {badge}
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
        {title}{' '}
        {highlight && (
          <span className="text-gradient-cyan">
            {highlight}
          </span>
        )}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl font-normal leading-relaxed mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
