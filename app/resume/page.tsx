'use client';

import React, { useRef } from 'react';
import ScrollReveal from '../components/ScrollReveal';

export default function ResumePage() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const experiences = [
    {
      period: "FEB 2026 - PRESENT",
      role: "Member of Student Consultative Assembly",
      organization: "Student Consultative Assembly (MPM)",
      institution: "Del Institute of Technology",
      description: "Actively representing student aspirations, supervising the Student Executive Board (BEM), and contributing to institutional-level student organization policies."
    },
    {
      period: "AUG 2025 - MAY 2026",
      role: "Peer Mentor (Freshmen Advisory)",
      organization: "Campus Mentorship Program",
      institution: "Del Institute of Technology",
      description: "Guiding and mentoring freshmen through academic transition, character building, and dormitory life within the IT Del environment."
    },
    {
      period: "2024 - PRESENT",
      role: "Active Member of Del Programming",
      organization: "DELPRO (Student Activity Unit)",
      institution: "Del Institute of Technology",
      description: "Studying structured programming (Java, C, JS) and participating actively in departmental organization activities."
    },
    {
      period: "2025 - 2026",
      role: "Active Member of Del Data Science",
      organization: "Student Activity Unit",
      institution: "Del Institute of Technology",
      description: "Studying Python and database"
    }
  ];

  return (
    <main className="max-w-6xl mx-auto px-6 py-8">
      {/* Header Section */}
      <ScrollReveal>
        <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center space-x-3 mb-3">
              <span className="w-8 h-0.5 bg-rose-600"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-rose-600 font-mono">
                Resume
              </span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">Experience &amp; Leadership</h1>
          </div>

          {/* Tombol Swipe Desktop */}
          <div className="hidden sm:flex items-center space-x-3">
            <button 
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200 hover:border-rose-600 text-slate-700 hover:text-rose-600 flex items-center justify-center transition-all duration-200 active:scale-90 shadow-md shadow-slate-200/50 hover:shadow-rose-600/20 cursor-pointer group"
              aria-label="Previous Slide"
            >
              <svg className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7"/></svg>
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200 hover:border-rose-600 text-slate-700 hover:text-rose-600 flex items-center justify-center transition-all duration-200 active:scale-90 shadow-md shadow-slate-200/50 hover:shadow-rose-600/20 cursor-pointer group"
              aria-label="Next Slide"
            >
              <svg className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"/></svg>
            </button>
          </div>
        </div>

        {/* Petunjuk Swipe Khusus Mobile */}
        <p className="sm:hidden text-[11px] font-semibold text-rose-600 mb-4 flex items-center gap-1.5 animate-pulse">
          <span>Swipe timeline to explore more</span>
        </p>
      </ScrollReveal>

      {/* Carousel Container */}
      <ScrollReveal delayClass="delay-100">
        <div 
          ref={scrollContainerRef}
          className="flex space-x-6 overflow-x-auto pb-8 pt-2 no-scrollbar snap-x snap-mandatory"
        >
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="flex-none w-[310px] sm:w-[370px] snap-start bg-white/90 backdrop-blur-md p-8 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-rose-300 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-rose-500/5 rounded-bl-full pointer-events-none group-hover:bg-rose-500/10 transition-colors"></div>

              <div>
                <span className="text-[10px] font-extrabold text-rose-600 font-mono bg-rose-50 px-3 py-1.5 rounded-full border border-rose-100">
                  {exp.period}
                </span>

                <h2 className="text-lg font-extrabold text-slate-900 mt-5 mb-1 group-hover:text-rose-600 transition-colors">
                  {exp.role}
                </h2>
                
                <p className="text-xs font-bold text-slate-800">{exp.organization}</p>
                <p className="text-[11px] font-semibold text-slate-400 mb-4">{exp.institution}</p>

                <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
                  {exp.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest font-mono">
                  CARD // 0{index + 1}
                </span>
                <span className="w-2 h-2 rounded-full bg-rose-600"></span>
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </main>
  );
}