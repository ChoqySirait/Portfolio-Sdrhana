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
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-rose-600/30 via-blue-600/20 dark:via-slate-500/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10"></div>

      <section className="py-8 sm:py-12 flex flex-col justify-center min-h-[calc(100vh-100px)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7 flex flex-col justify-center items-start z-10">
            <ScrollReveal>
              <SectionBadge label="- Hallo" className="mb-4" />
            </ScrollReveal>

            <ScrollReveal delayClass="delay-100">
              <h1 className="text-3xl sm:text-6xl font-black leading-tight mb-4 tracking-tight text-white">
                <span className="block text-slate-100 mb-1">I&apos;m</span>
                <div className="min-h-[2.4em] sm:min-h-[1.3em] flex items-center">
                  <TypewriterLoop text="Choqy Pananda Sirait" />
                </div>
              </h1>
            </ScrollReveal>

            <ScrollReveal delayClass="delay-100">
              <p className="text-slate-200 text-base sm:text-lg font-bold leading-relaxed mb-6 max-w-xl">
                Information System Student At IT Del. Focused on web development, system analysis, and building modern digital experiences.
              </p>
            </ScrollReveal>

            <ScrollReveal delayClass="delay-200" className="w-full">
              <div className="flex flex-wrap gap-2 mb-8">
                {mainSkills.map((skill, index) => (
                  <span 
                    key={index} 
                    className="text-[11px] font-extrabold uppercase tracking-wider text-white bg-gradient-to-r from-[#111A2E] to-[#1A0E1D] dark:from-[#0B0B10] dark:to-[#121218] border border-rose-500/40 dark:border-slate-800 hover:border-blue-400 px-4 py-2 rounded-xl shadow-md hover:scale-105 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delayClass="delay-200" className="w-full">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                <a
                  href="/CV_Choqy_Pananda_Sirait.pdf"
                  download
                  className="w-full sm:w-auto bg-gradient-to-r from-rose-600 via-red-600 to-rose-700 hover:from-rose-500 hover:to-red-500 text-white font-black text-xs uppercase tracking-wider px-8 py-4 rounded-xl shadow-lg shadow-rose-600/50 hover:shadow-rose-500/80 border border-rose-400/40 hover:-translate-y-0.5 active:scale-95 flex items-center justify-center gap-2.5 text-center transition-all duration-300 cursor-pointer"
                >
                  <span>DOWNLOAD CV</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
                </a>
                
                <Link
                  href="/contact"
                  className="w-full sm:w-auto bg-[#0E1628] dark:bg-[#09090E] hover:bg-slate-800 border-2 border-rose-500/60 dark:border-slate-700 hover:border-blue-400 text-white font-black text-xs uppercase tracking-wider px-8 py-3.5 rounded-xl transition-all duration-300 hover:-translate-y-0.5 active:scale-95 text-center shadow-lg shadow-blue-950/50 dark:shadow-none"
                >
                  CONTACT ME
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delayClass="delay-300" className="w-full">
              <div className="flex items-center justify-start space-x-6 mt-8 sm:mt-10 text-slate-300 text-xs font-black tracking-widest font-mono">
                <a href="https://github.com/ChoqySirait" target="_blank" rel="noreferrer" className="hover:text-rose-400 transition-colors">GITHUB</a>
                <span className="text-rose-500">•</span>
                <a href="https://www.linkedin.com/in/choqypanandasirait" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors">LINKEDIN</a>
                <span className="text-rose-500">•</span>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=choqypenandasirait@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-rose-400 transition-colors">EMAIL</a>
              </div>
            </ScrollReveal>
          </div>

          <div className="hidden lg:flex lg:col-span-5 justify-center items-center relative overflow-hidden py-4">
            <div className="relative w-full max-w-[420px] sm:max-w-[460px] h-[440px] sm:h-[480px] flex justify-center items-center">
              <div className="absolute inset-0 bg-gradient-to-r from-rose-600/20 via-blue-600/20 dark:via-slate-500/10 to-transparent rounded-full blur-3xl pointer-events-none"></div>
              <div className="animate-spiderman-hero w-full flex justify-center items-center">
                <SpiderImage
                  lightSrc="/Spiderman.png"
                  darkSrc="/BlackSpider.png"
                  alt="Spider-Man Hero Stance"
                  className="w-full max-w-[380px] sm:max-w-[420px] max-h-[65vh] object-contain drop-shadow-[0_20px_35px_rgba(225,29,72,0.4)] dark:drop-shadow-[0_20px_35px_rgba(255,255,255,0.15)]"
                />
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}