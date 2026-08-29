import React from 'react';

export default function Badge({ 
  children, 
  variant = 'default',
  icon: Icon,
  className = '' 
}) {
  const variants = {
    default: 'bg-white/5 dark:bg-white/5 bg-slate-100 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-white/10',
    cyan: 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20',
    indigo: 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20',
    emerald: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
    amber: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20',
    coral: 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20',
  };

  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium border font-mono transition-all duration-200 ${variants[variant] || variants.default} ${className}`}>
      {Icon && <Icon className="w-3.5 h-3.5" />}
      {children}
    </span>
  );
}
