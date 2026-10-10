'use client';

import Link from 'next/link';
import ScrollReveal from './components/ScrollReveal';
import TypewriterLoop from './components/TypewriterLoop';
import SpiderImage from './components/SpiderImage';
import SectionBadge from './components/SectionBadge';

export default function HomePage() {
  const mainSkills = ["System Analysis", "UI/UX Design", "Java & Web Dev", "Database Management"];

  return (
    <main className="max-w-6xl mx-auto px-6 relative overflow-hidden">
      {/* Ambient Red & Blue Spider Glow */}
      <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-gradient-to-tr from-rose-600/25 via-blue-600/15 dark:via-slate-500/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10"></div>

      <section className="py-2 sm:py-6 flex flex-col justify-center min-h-[calc(100vh-80px)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          {/* Sisi Kiri: Teks Hero Utama (Skala Ringkas & Bebas Scrollbar) */}
          <div className="lg:col-span-7 flex flex-col justify-center items-start z-10">
            <ScrollReveal>
              <SectionBadge label="- Hello" className="mb-3" />
            </ScrollReveal>

            <ScrollReveal delayClass="delay-100">
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black leading-tight mb-3 tracking-tight text-white">
                <span className="block text-slate-100 text-lg sm:text-2xl font-bold mb-0.5">I&apos;m</span>
                {/* Height Lock Pas Agar Tidak Melompat Baris */}
                <div className="min-h-[1.25em] flex items-center">
                  <TypewriterLoop text="Choqy Pananda Sirait" />
                </div>
              </h1>
            </ScrollReveal>

            <ScrollReveal delayClass="delay-100">
              <p className="text-slate-200 text-xs sm:text-sm lg:text-base font-bold leading-relaxed mb-4 max-w-lg">
                Information System Student At IT Del. Focused on web development, system analysis, and building modern digital experiences.
              </p>
            </ScrollReveal>

            {/* Quick Skill Badges */}
            <ScrollReveal delayClass="delay-200" className="w-full">
              <div className="flex flex-wrap gap-2 mb-5">
                {mainSkills.map((skill, index) => (
                  <span 
                    key={index} 
                    className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-white bg-gradient-to-r from-[#111A2E] to-[#1A0E1D] dark:from-[#0B0B10] dark:to-[#121218] border border-rose-500/40 dark:border-slate-800 hover:border-blue-400 px-3 py-1.5 rounded-lg shadow-md hover:scale-105 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </ScrollReveal>

            {/* Tombol CTA Compact */}
            <ScrollReveal delayClass="delay-200" className="w-full">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
                <a
                  href="/CV_Choqy_Pananda_Sirait.pdf"
                  download
                  className="w-full sm:w-auto bg-gradient-to-r from-rose-600 via-red-600 to-rose-700 hover:from-rose-500 hover:to-red-500 text-white font-black text-xs uppercase tracking-wider px-6 py-3 rounded-xl shadow-lg shadow-rose-600/50 hover:shadow-rose-500/80 border border-rose-400/40 hover:-translate-y-0.5 active:scale-95 flex items-center justify-center gap-2 text-center transition-all duration-300 cursor-pointer"
                >
                  <span>DOWNLOAD CV</span>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
                </a>
                
                <Link
                  href="/contact"
                  className="w-full sm:w-auto bg-[#0E1628] dark:bg-[#09090E] hover:bg-slate-800 border-2 border-rose-500/60 dark:border-slate-700 hover:border-blue-400 text-white font-black text-xs uppercase tracking-wider px-6 py-2.5 rounded-xl transition-all duration-300 hover:-translate-y-0.5 active:scale-95 text-center shadow-lg shadow-blue-950/50 dark:shadow-none"
                >
                  CONTACT ME
                </Link>
              </div>
            </ScrollReveal>

            {/* Social Links */}
            <ScrollReveal delayClass="delay-300" className="w-full">
              <div className="flex items-center justify-start space-x-5 mt-5 sm:mt-6 text-slate-300 text-[11px] font-black tracking-widest font-mono">
                <a href="https://github.com/ChoqySirait" target="_blank" rel="noreferrer" className="hover:text-rose-400 transition-colors">GITHUB</a>
                <span className="text-rose-500">•</span>
                <a href="https://www.linkedin.com/in/choqypanandasirait" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors">LINKEDIN</a>
                <span className="text-rose-500">•</span>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=choqypenandasirait@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-rose-400 transition-colors">EMAIL</a>
              </div>
            </ScrollReveal>
          </div>

          {/* Sisi Kanan: Spider-Man Hero Stance */}
          <div className="hidden lg:flex lg:col-span-5 justify-center items-center relative overflow-hidden py-2">
            <div className="relative w-full max-w-[380px] sm:max-w-[420px] h-[380px] sm:h-[420px] flex justify-center items-center">
              <div className="absolute inset-0 bg-gradient-to-r from-rose-600/20 via-blue-600/20 dark:via-slate-500/10 rounded-full blur-3xl pointer-events-none"></div>
              <div className="animate-spiderman-hero w-full flex justify-center items-center">
                <SpiderImage
                  lightSrc="/Spiderman.png"
                  darkSrc="/BlackSpider.png"
                  alt="Spider-Man Hero Stance"
                  className="w-full max-w-[340px] sm:max-w-[380px] max-h-[58vh] object-contain drop-shadow-[0_15px_30px_rgba(225,29,72,0.4)] dark:drop-shadow-[0_15px_30px_rgba(255,255,255,0.15)]"
                />
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}