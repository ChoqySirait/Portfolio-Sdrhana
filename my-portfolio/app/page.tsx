'use client';

import React, { useState } from 'react';

interface ProjectItem {
  id: number;
  title: string;
  category: string;
  description: string;
  tags: string[];
}

export default function Home() {
  const [activeTab, setActiveTab] = useState<string>('Home');
  const [likes, setLikes] = useState<{ [key: number]: number }>({ 1: 0, 2: 0, 3: 0 });

  const handleLike = (id: number) => {
    setLikes((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const myProjects: ProjectItem[] = [
    {
      id: 1,
      title: "Sistem Manajemen Kasir & Audit",
      category: "Fullstack App",
      description: "Aplikasi pencatatan pesanan dan pelacakan aktivitas transaksi kasir secara terintegrasi.",
      tags: ["React", "Node.js", "Tailwind CSS"],
    },
    {
      id: 2,
      title: "Platform Layanan Wisata Toba",
      category: "UI/UX & Web",
      description: "Desain dan antarmuka web untuk pemesanan paket wisata daerah Samosir dan Danau Toba.",
      tags: ["Next.js", "Figma", "Tailwind CSS"],
    },
    {
      id: 3,
      title: "Aplikasi To-Do List Interaktif",
      category: "Frontend App",
      description: "Manajemen tugas harian berbasis web dengan fitur penyaringan dan penyimpanan lokal.",
      tags: ["React", "JavaScript"],
    },
  ];

  const navItems = ['Home', 'About', 'Portfolio', 'Resume', 'Contact'];

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-slate-800 font-sans selection:bg-rose-500 selection:text-white">
      
      {/* 1. Header / Navbar */}
      <header className="fixed top-0 left-0 right-0 bg-[#F8F9FA]/90 backdrop-blur-md z-50 border-b border-slate-200/80">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-extrabold text-xl tracking-tight text-slate-900">
            CP<span className="text-rose-600">.</span>
          </div>

          <nav className="flex space-x-1 sm:space-x-6">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setActiveTab(item)}
                className={`text-xs sm:text-sm font-medium tracking-wide transition-colors duration-200 px-3 py-1.5 rounded-full ${
                  activeTab === item
                    ? 'text-rose-600 font-semibold bg-rose-50'
                    : 'text-slate-600 hover:text-rose-600'
                }`}
              >
                {item.toUpperCase()}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 pt-24">
        
        {/* 2. Hero Section (HOME) */}
        <section id="home" className="min-h-[85vh] grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-12">
          
          {/* Sisi Kiri: Teks Utama */}
          <div className="lg:col-span-7 flex flex-col justify-center items-start">
            <div className="flex items-center space-x-3 mb-4">
              <span className="w-8 h-0.5 bg-rose-600"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-rose-600">
                HELLO
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 leading-tight mb-4">
              I&apos;m <span className="text-rose-600">Choqy Pananda</span> Sirait
            </h1>

            <p className="text-slate-600 text-base sm:text-lg font-medium leading-relaxed mb-8 max-w-xl">
              Information System Student At IT Del. Focused on web development, system analysis, and building modern digital experiences.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#[LINK_DOWNLOAD_CV_KAMU]"
                className="bg-rose-600 hover:bg-rose-700 text-white font-semibold text-sm px-8 py-3.5 rounded-md shadow-lg shadow-rose-600/20 transition-all duration-200 hover:-translate-y-0.5"
              >
                DOWNLOAD CV
              </a>
              <a
                href="#contact"
                className="border border-slate-300 hover:border-slate-800 text-slate-700 hover:text-slate-900 font-semibold text-sm px-8 py-3.5 rounded-md transition-all duration-200"
              >
                CONTACT ME
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-6 mt-12 text-slate-400 text-sm font-semibold tracking-wider">
              <a href="https://github.com/[USERNAME_GITHUB_KAMU]" target="_blank" rel="noreferrer" className="hover:text-rose-600 transition">GITHUB</a>
              <span>•</span>
              <a href="https://linkedin.com/in/[USERNAME_LINKEDIN_KAMU]" target="_blank" rel="noreferrer" className="hover:text-rose-600 transition">LINKEDIN</a>
              <span>•</span>
              <a href="mailto:[EMAIL_KAMU@gmail.com]" className="hover:text-rose-600 transition">EMAIL</a>
            </div>
          </div>

          {/* Sisi Kanan: Pengganti Foto (Interactive Tech Card) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md bg-slate-900 text-slate-100 rounded-2xl p-6 shadow-2xl border border-slate-800 relative overflow-hidden group">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-4">
                <div className="flex space-x-2">
                  <span className="w-3 h-3 bg-rose-500 rounded-full inline-block"></span>
                  <span className="w-3 h-3 bg-amber-500 rounded-full inline-block"></span>
                  <span className="w-3 h-3 bg-emerald-500 rounded-full inline-block"></span>
                </div>
                <span className="text-xs font-mono text-slate-500">student_profile.ts</span>
              </div>

              <pre className="font-mono text-xs leading-relaxed text-slate-300">
                <code>
                  <span className="text-rose-400">const</span> <span className="text-amber-300">developer</span> = &#123;<br />
                  &nbsp;&nbsp;name: <span className="text-emerald-400">&apos;Choqy Pananda Sirait&apos;</span>,<br />
                  &nbsp;&nbsp;institution: <span className="text-emerald-400">&apos;Institut Teknologi Del&apos;</span>,<br />
                  &nbsp;&nbsp;major: <span className="text-emerald-400">&apos;Information Systems&apos;</span>,<br />
                  &nbsp;&nbsp;skills: [<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-emerald-400">&apos;React.js&apos;</span>, <span className="text-emerald-400">&apos;Next.js&apos;</span>,<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-emerald-400">&apos;Node.js&apos;</span>, <span className="text-emerald-400">&apos;Tailwind CSS&apos;</span><br />
                  &nbsp;&nbsp;],<br />
                  &nbsp;&nbsp;status: <span className="text-rose-400">&apos;Ready for Long-Term Projects&apos;</span><br />
                  &#125;;
                </code>
              </pre>

              <div className="mt-6 pt-4 border-t border-slate-800 flex justify-between items-center text-xs text-slate-500 font-mono">
              <span>{/* Active Learning Mode */}</span>
                <span className="text-rose-400 font-semibold">2026.dev</span>
              </div>
            </div>
          </div>

        </section>

        {/* 3. ABOUT SECTION */}
        <section id="about" className="py-20 border-t border-slate-200">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-rose-600 block mb-2">ABOUT ME</span>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Pendidikan &amp; Fokus Karir</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Saya adalah mahasiswa Sistem Informasi di Institut Teknologi Del yang berfokus pada pengembangan perangkat lunak modern dan analisis sistem. Saya memiliki minat besar dalam membangun aplikasi web yang efisien, terstruktur, dan ramah pengguna.
            </p>
            <p className="text-slate-600 leading-relaxed">
              [MASUKKAN_DESKRIPSI_TAMBAHAN_TENTANG_DIRIMU_DI_SINI]
            </p>
          </div>
        </section>

        {/* 4. PORTFOLIO SECTION */}
        <section id="portfolio" className="py-20 border-t border-slate-200">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-rose-600 block mb-2">PORTFOLIO</span>
            <h2 className="text-3xl font-bold text-slate-900">Proyek Pilihan</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {myProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-rose-600 bg-rose-50 px-2.5 py-1 rounded-md">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 mt-4 mb-2">{project.title}</h3>
                  <p className="text-slate-600 text-xs leading-relaxed mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-mono">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <button
                    onClick={() => handleLike(project.id)}
                    className="flex items-center space-x-1.5 text-xs text-slate-600 hover:text-rose-600 transition"
                  >
                    <span>❤️</span>
                    <span className="font-semibold">{likes[project.id] || 0}</span>
                  </button>
                  <a href="#[LINK_DEMO_PROYEK]" className="text-xs font-semibold text-rose-600 hover:underline">
                    Detail &rarr;
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. RESUME SECTION */}
        <section id="resume" className="py-20 border-t border-slate-200">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-rose-600 block mb-2">RESUME</span>
            <h2 className="text-3xl font-bold text-slate-900">Pendidikan &amp; Pengalaman</h2>
          </div>

          <div className="space-y-8 max-w-3xl">
            <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm">
              <span className="text-xs font-bold text-rose-600 font-mono">[TAHUN_MASUK - SEKARANG]</span>
              <h3 className="text-lg font-bold text-slate-900 mt-1">S1 Sistem Informasi</h3>
              <p className="text-slate-600 text-sm font-medium">Institut Teknologi Del</p>
              <p className="text-slate-500 text-xs mt-2 leading-relaxed">
                [TULISKAN_PENCAPAIAN_KURSUS_ATAU_KEGIATAN_ORGANISASI_DI_SINI]
              </p>
            </div>
          </div>
        </section>

        {/* 6. CONTACT SECTION */}
        <section id="contact" className="py-20 border-t border-slate-200 mb-12">
          <div className="bg-slate-900 text-white rounded-2xl p-8 sm:p-12 shadow-xl text-center max-w-4xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-rose-400 block mb-2">CONTACT</span>
            <h2 className="text-3xl font-bold mb-4">Mari Berdiskusi &amp; Bekerja Sama</h2>
            <p className="text-slate-400 text-sm max-w-md mx-auto mb-8">
              Terbuka untuk proyek kolaborasi, diskusi teknologi, maupun peluang karir.
            </p>
            <a
              href="mailto:[EMAIL_KAMU@gmail.com]"
              className="inline-block bg-rose-600 hover:bg-rose-700 text-white font-semibold text-sm px-8 py-3.5 rounded-md shadow-lg transition duration-200"
            >
              Kirim Pesan Email
            </a>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-8 text-center text-xs text-slate-500">
        &copy; {new Date().getFullYear()} Choqy Pananda Sirait. Built with Next.js, React &amp; Tailwind CSS.
      </footer>

    </div>
  );
}