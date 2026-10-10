'use client';

import React from 'react';

interface SectionBadgeProps {
  label: string;
  className?: string;
}

export default function SectionBadge({ label, className = '' }: SectionBadgeProps) {
  return (
    <div className={`inline-flex items-center gap-2 bg-gradient-to-r from-rose-600/20 to-blue-600/20 dark:from-slate-800 dark:to-slate-900 border border-rose-500/50 dark:border-slate-700 px-4 py-1.5 rounded-full shadow-lg shadow-rose-950/40 ${className}`}>
      <span className="relative flex h-2.5 w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-rose-500"></span>
      </span>
      <span className="text-[11px] font-black uppercase tracking-widest text-rose-300 dark:text-slate-300 font-mono">
        {label}
      </span>
    </div>
  );
}