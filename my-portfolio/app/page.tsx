import Link from 'next/link';

export default function HomePage() {
  const mainSkills = ["System Analysis", "UI/UX Design", "Java & Web Dev", "Database Management"];

  return (
    <main className="max-w-6xl mx-auto px-6">
      <section className="min-h-[75vh] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-6">
        
        {/* Sisi Kiri: Teks Hero Utama */}
        <div className="lg:col-span-7 flex flex-col justify-center items-start z-10">
          <div className="flex items-center space-x-3 mb-4">
            <span className="w-8 h-0.5 bg-rose-600"></span>
            <span className="text-xs font-bold uppercase tracking-widest text-rose-600 font-mono">
              Hello
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-slate-900 leading-tight mb-4 tracking-tight">
            I&apos;m <span className="text-rose-600 hover:underline decoration-rose-300 decoration-wavy transition-all duration-300 cursor-pointer">Choqy Pananda</span> Sirait
          </h1>

          <p className="text-slate-600 text-base sm:text-lg font-medium leading-relaxed mb-6 max-w-xl">
            Information System Student At IT Del. Focused on web development, system analysis, and building modern digital experiences.
          </p>

          {/* Quick Skill Badges */}
          <div className="flex flex-wrap gap-2 mb-8">
            {mainSkills.map((skill, index) => (
              <span key={index} className="text-[10px] font-bold uppercase tracking-wider text-slate-700 bg-white/80 border border-slate-200/80 px-3 py-1 rounded-md shadow-2xs">
                {skill}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4">
            {/* Tombol Download CV */}
            <a
              href="/CV_Choqy_Pananda_Sirait.pdf"
              download
              className="bg-rose-600 hover:bg-rose-700 text-white font-extrabold text-xs uppercase tracking-wider px-8 py-4 rounded-xl shadow-lg shadow-rose-600/25 hover:shadow-rose-600/40 transition-all duration-300 hover:-translate-y-1 active:scale-95 flex items-center gap-2"
            >
              <span>DOWNLOAD CV</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
            </a>
            
            <Link
              href="/contact"
              className="border-2 border-slate-200 hover:border-slate-800 text-slate-700 hover:text-slate-900 font-extrabold text-xs uppercase tracking-wider px-8 py-3.5 rounded-xl transition-all duration-300 hover:-translate-y-1 active:scale-95"
            >
              CONTACT ME
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-6 mt-12 text-slate-400 text-xs font-bold tracking-widest">
            <a href="https://github.com/ChoqySirait" target="_blank" rel="noreferrer" className="hover:text-rose-600 hover:scale-105 transition-all duration-200">GITHUB</a>
            <span>•</span>
            <a href="https://www.linkedin.com/in/choqypanandasirait" target="_blank" rel="noreferrer" className="hover:text-rose-600 hover:scale-105 transition-all duration-200">LINKEDIN</a>
            <span>•</span>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=choqypenandasirait@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-rose-600 hover:scale-105 transition-all duration-200">EMAIL</a>
          </div>
        </div>

        {/* Sisi Kanan: Spider-Man Mengayun Konsisten */}
        <div className="lg:col-span-5 flex justify-center items-start relative -mt-4 sm:-mt-16 lg:-mt-24">
          <div className="relative w-64 sm:w-80 h-[320px] sm:h-[380px] flex justify-center items-start group">
            
            {/* Glow Pendar Merah */}
            <div className="absolute inset-0 bg-rose-500/15 rounded-full blur-3xl group-hover:bg-rose-500/30 transition-all duration-500"></div>

            {/* Container Animasi Ayunan Halus */}
            <div className="animate-spiderman">
              <img
                src="/Spiderman.png"
                alt="Spider-Man"
                className="w-full max-w-[240px] sm:max-w-[300px] h-auto object-contain hover:scale-105 active:scale-95 transition-transform duration-300 drop-shadow-2xl"
              />
            </div>

          </div>
        </div>

      </section>
    </main>
  );
}