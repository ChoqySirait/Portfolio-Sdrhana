'use client';

import Link from 'next/link';
import ScrollReveal from './components/ScrollReveal';
import { useTheme } from './context/ThemeContext';

export default function HomePage() {
  const { theme } = useTheme();
  const mainSkills = ["System Analysis", "UI/UX Design", "Java & Web Dev", "Database Management"];

  const spiderImage = theme === 'dark' ? '/BlackSpider.png' : '/Spiderman.png';

  return (
    <main className="max-w-6xl mx-auto px-6 relative">
      {/* Red Ambient Backdrop Glow untuk Kejelasan Teks di Light Mode */}
      <div className="absolute -top-10 -left-10 w-96 h-96 bg-rose-500/10 dark:bg-rose-600/15 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <section className="min-h-[75vh] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-6 sm:py-10">
        
        {/* Sisi Kiri: Teks Hero Utama */}
        <div className="lg:col-span-7 flex flex-col justify-center items-start z-10">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 bg-rose-500/10 dark:bg-rose-500/20 border border-rose-500/30 px-3.5 py-1.5 rounded-full mb-3 sm:mb-4">
              <span className="w-2 h-2 rounded-full bg-rose-600 animate-ping"></span>
              <span className="text-[10px] font-black uppercase tracking-widest text-rose-700 dark:text-rose-400 font-mono">
                [SYSTEM // HERO SECTION]
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal delayClass="delay-100">
            <h1 className="text-4xl sm:text-6xl font-black leading-tight mb-4 tracking-tight">
              <span className="text-slate-950 dark:text-white">I&apos;m </span>
              <span className="text-rose-600 dark:text-rose-500 glow-neon-bright cursor-pointer">Choqy Pananda </span>
              <span className="text-slate-950 dark:text-white">Sirait</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delayClass="delay-100">
            <p className="text-slate-800 dark:text-slate-200 text-base sm:text-lg font-bold leading-relaxed mb-6 max-w-xl">
              Information System Student At IT Del. Focused on web development, system analysis, and building modern digital experiences.
            </p>
          </ScrollReveal>

          {/* Quick Skill Badges */}
          <ScrollReveal delayClass="delay-200" className="w-full">
            <div className="flex flex-wrap gap-2 mb-8">
              {mainSkills.map((skill, index) => (
                <span 
                  key={index} 
                  className="text-[10px] font-extrabold uppercase tracking-wider text-slate-950 dark:text-slate-100 bg-white/95 dark:bg-slate-800/90 border border-slate-300 dark:border-slate-700 px-3.5 py-1.5 rounded-lg shadow-xs hover:border-rose-500 hover:text-rose-600 dark:hover:text-rose-400 transition-all duration-200 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </ScrollReveal>

          {/* Tombol CTA */}
          <ScrollReveal delayClass="delay-200" className="w-full">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 w-full sm:w-auto">
              <a
                href="/CV_Choqy_Pananda_Sirait.pdf"
                download
                className="w-full sm:w-auto bg-rose-600 hover:bg-rose-700 text-white font-black text-xs uppercase tracking-wider px-8 py-4 rounded-xl shadow-lg shadow-rose-600/25 hover:shadow-rose-600/40 transition-all duration-300 hover:-translate-y-0.5 active:scale-95 flex items-center justify-center gap-2 text-center"
              >
                <span>DOWNLOAD CV</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
              </a>
              
              <Link
                href="/contact"
                className="w-full sm:w-auto border-2 border-slate-400 dark:border-slate-700 hover:border-slate-950 dark:hover:border-white text-slate-950 dark:text-slate-100 font-black text-xs uppercase tracking-wider px-8 py-3.5 rounded-xl transition-all duration-300 hover:-translate-y-0.5 active:scale-95 text-center bg-white/80 dark:bg-slate-800/80"
              >
                CONTACT ME
              </Link>
            </div>
          </ScrollReveal>

          {/* Social Links Clean */}
          <ScrollReveal delayClass="delay-300" className="w-full">
            <div className="flex items-center justify-start space-x-6 mt-8 sm:mt-10 text-slate-800 dark:text-slate-300 text-xs font-black tracking-widest font-mono">
              <a href="https://github.com/ChoqySirait" target="_blank" rel="noreferrer" className="hover:text-rose-600 dark:hover:text-rose-400 transition-colors">GITHUB</a>
              <span>•</span>
              <a href="https://www.linkedin.com/in/choqypanandasirait" target="_blank" rel="noreferrer" className="hover:text-rose-600 dark:hover:text-rose-400 transition-colors">LINKEDIN</a>
              <span>•</span>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=choqypenandasirait@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-rose-600 dark:hover:text-rose-400 transition-colors">EMAIL</a>
            </div>
          </ScrollReveal>
        </div>

        {/* Sisi Kanan: Spider-Man (Ketinggian Pas & Presisi) */}
        <div className="hidden lg:flex lg:col-span-5 justify-center items-center relative py-6 lg:py-0">
          <div className="relative w-72 sm:w-80 lg:w-[420px] h-[360px] sm:h-[420px] lg:h-[480px] flex justify-center items-start group">
            <div className="absolute inset-0 bg-rose-500/20 dark:bg-rose-600/25 rounded-full blur-3xl group-hover:bg-rose-500/35 transition-all duration-500"></div>
            <div className="animate-spiderman w-full flex justify-center">
              <img
                key={spiderImage}
                src={spiderImage}
                alt="Spider-Man"
                className={`w-full h-auto object-contain transition-all duration-300 drop-shadow-2xl ${
                  theme === 'dark' 
                    ? 'max-w-[360px] sm:max-w-[400px] lg:max-w-[440px] scale-125' 
                    : 'max-w-[290px] sm:max-w-[330px] lg:max-w-[370px]'
                }`}
              />
            </div>
          </div>
        </div>

      </section>
    </main>
  );
}