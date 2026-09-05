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
      period: "FEB 2026 - SEKARANG",
      role: "Anggota Divisi Kesejahteraan Mahasiswa",
      organization: "Majelis Permusyawaratan Mahasiswa (MPM)",
      institution: "Institut Teknologi Del",
      description: "Aktif mengawal aspirasi mahasiswa, mengelola program kesejahteraan kampus, serta berkontribusi dalam perumusan kebijakan organisasi mahasiswa tingkat institut."
    },
    {
      period: "AGU 2025 - MEI 2026",
      role: "Abang Asuh (Mentor Mahasiswa Baru)",
      organization: "Program Mentorship Kampus",
      institution: "Institut Teknologi Del",
      description: "Membimbing dan mendampingi mahasiswa baru dalam proses adaptasi akademik, pembentukan karakter, serta kehidupan asrama di lingkungan IT Del."
    },
    {
      period: "2024 - SEKARANG",
      role: "Mahasiswa S1 Sistem Informasi",
      organization: "Akademik",
      institution: "Institut Teknologi Del",
      description: "Mempelajari analisis sistem, pemodelan data, pemrograman terstruktur (Java, C, JS), dan riset strategi bisnis digital."
    },
    {
      period: "2025 - 2026",
      role: "Pengembang Utama & UI/UX Designer",
      organization: "Proyek Akademia",
      institution: "Institut Teknologi Del",
      description: "Memimpin perancangan antarmuka Triporia dan pengembangan sistem manajemen aplikasi kasir/audit terintegrasi."
    }
  ];

  return (
    <main className="max-w-6xl mx-auto px-6 py-8">
      {/* Header Section */}
      <ScrollReveal>
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center space-x-3 mb-3">
              <span className="w-8 h-0.5 bg-rose-600"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-rose-600 font-mono">
                [SYS_RESUME // 02]
              </span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">Pengalaman &amp; Organisasi</h1>
          </div>

          {/* Tombol Swipe */}
          <div className="flex items-center space-x-3">
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