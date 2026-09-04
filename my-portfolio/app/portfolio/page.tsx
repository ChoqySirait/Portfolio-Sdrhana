'use client';

import React, { useState, useRef } from 'react';

interface ProjectItem {
  id: number;
  title: string;
  category: string;
  description: string;
  fullDetail: string;
  impact: string;
  image: string;
  tags: string[];
  linkType: 'github' | 'figma' | 'none';
  githubUrl?: string;
  figmaUrl?: string;
}

export default function PortfolioPage() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const myProjects: ProjectItem[] = [
    {
      id: 1,
      title: "Sistem Manajemen Pengambilan Paket UMKM",
      category: "Web App",
      description: "Aplikasi pencatatan dan pengambilan paket terintegrasi berbasis Web/Mobile.",
      fullDetail: "Sistem ini dirancang khusus untuk mempermudah operasional UMKM dalam mengelola arus paket masuk dan keluar. Dilengkapi fitur pencatatan real-time, verifikasi identitas pengambilan, serta laporan aktivitas transaksi harian secara otomatis.",
      impact: "Memangkas waktu verifikasi pengambilan paket hingga 50% dan meminimalisir risiko kesalahan pendataan inventaris secara signifikan.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
      tags: ["React", "Node.js", "Tailwind CSS"],
      linkType: "github",
      githubUrl: "https://github.com/ChoqySirait",
    },
    {
      id: 2,
      title: "Prototype Guide Travel & Hotel (TRIPORIA)",
      category: "UI/UX Design",
      description: "Desain dan antarmuka web pemesanan paket wisata Samosir & Danau Toba.",
      fullDetail: "Triporia adalah prototipe aplikasi travel yang berfokus pada kemudahan wisatawan menjelajahi keindahan Samosir dan Danau Toba. Desain dibuat modern dengan alur pemesanan hotel, pemandu wisata lokal, serta navigasi destinasi yang intuitif.",
      impact: "Meningkatkan skor usability testing pengguna hingga 85% melalui tata letak antarmuka yang ramah pengguna dan akses informasi wisata terpusat.",
      image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80",
      tags: ["Figma", "UI/UX", "User Research"],
      linkType: "figma",
      figmaUrl: "https://www.figma.com",
    },
    {
      id: 3,
      title: "Nakama To-Do List Interaktif",
      category: "Frontend Web",
      description: "Manajemen tugas harian berbasis web dengan fitur penyaringan lokal.",
      fullDetail: "Aplikasi produktivitas harian yang ringan dan responsif. Menggunakan Vanilla JS dan penyimpanan LocalStorage sehingga tugas-tugas pengguna tidak akan hilang saat browser ditutup. Dilengkapi fitur kategori dan filter progres kerja.",
      impact: "Menyediakan alat manajemen tugas tanpa latensi server dengan persistensi data lokal 100% aman di sisi browser pengguna.",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=800&q=80",
      tags: ["HTML5", "JavaScript", "CSS3"],
      linkType: "github",
      githubUrl: "https://github.com/ChoqySirait",
    },
    {
      id: 4,
      title: "Sistem Kasir & Audit Ada Halomo",
      category: "Java Desktop",
      description: "Sistem audit transaksi dan manajemen pemesanan kafe/outlet.",
      fullDetail: "Aplikasi pengelolaan transaksi kasir dan pencatatan riwayat keuangan secara terstruktur. Memudahkan owner dalam memantau stok bahan, laporan penjualan harian, dan verifikasi hak akses pengguna secara aman.",
      impact: "Mengoptimalkan akurasi laporan keuangan harian outlet dan mempercepat alur transaksi kasir pada jam sibuk.",
      image: "https://images.unsplash.com/photo-1556742049-0a67dd60f9dd?auto=format&fit=crop&w=800&q=80",
      tags: ["Java", "OOP", "MySQL"],
      linkType: "none", // Contoh proyek tanpa link eksternal
    },

    /* --- SLOT PROYEK TAMBAHAN --- */
    {
      id: 5,
      title: "Proyek Mendatang #1 (System Analysis)",
      category: "System Analysis",
      description: "Pengembangan arsitektur dan pemodelan sistem informasi bisnis digital.",
      fullDetail: "Slot ini disiapkan untuk proyek analisis sistem mendatang. Akan mencakup alur UML, rancangan skema basis data, dan analisis kebutuhan pengguna secara komprehensif.",
      impact: "Menjadi acuan cetak biru (blueprint) dalam pengembangan sistem informasi berskala enterprise.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
      tags: ["UML", "Database Design", "System Architecture"],
      linkType: "none",
    },
    {
      id: 6,
      title: "Proyek Mendatang #2 (Cybersecurity Audit)",
      category: "Security",
      description: "Riset dan pengujian celah keamanan pada antarmuka web dan server.",
      fullDetail: "Slot ini disiapkan untuk dokumentasi pengujian keamanan, analisis kerentanan sistem, serta implementasi standar keamanan data jaringan.",
      impact: "Meningkatkan daya tahan aplikasi terhadap celah keamanan siber dan potensi kebocoran data.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
      tags: ["Cybersecurity", "Network Audit", "Data Protection"],
      linkType: "none",
    },
    {
      id: 7,
      title: "Proyek Mendatang #3 (UI/UX Mobile App)",
      category: "UI/UX Design",
      description: "Inovasi prototipe aplikasi mobile interaktif berbasis studi pengguna.",
      fullDetail: "Slot ini disiapkan untuk proyek desain antarmuka aplikasi seluler mendatang lengkap dengan Design System dan High-Fidelity Prototype di Figma.",
      impact: "Menghadirkan pengalaman interaksi seluler yang intuitif, modern, dan mudah digunakan.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
      tags: ["Figma", "Mobile UI", "Design System"],
      linkType: "figma",
      figmaUrl: "https://www.figma.com",
    },
  ];

  return (
    <main className="max-w-6xl mx-auto px-6 py-8">
      <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="flex items-center space-x-3 mb-3">
            <span className="w-8 h-0.5 bg-rose-600"></span>
            <span className="text-xs font-bold uppercase tracking-widest text-rose-600">
              MY WORKS
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">Proyek Pilihan</h1>
        </div>

        {/* Tombol Swipe Modern & Besar */}
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

      {/* Carousel Container */}
      <div 
        ref={scrollContainerRef}
        className="flex space-x-6 overflow-x-auto pb-8 pt-2 no-scrollbar snap-x snap-mandatory"
      >
        {myProjects.map((project) => (
          <div 
            key={project.id} 
            className="flex-none w-[310px] sm:w-[360px] snap-start bg-white/90 backdrop-blur-md rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-rose-300 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
          >
            <div>
              <div className="h-48 w-full overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 text-[10px] font-extrabold uppercase tracking-wider text-rose-600 bg-white/90 backdrop-blur-md px-3.5 py-1 rounded-full shadow-sm">
                  {project.category}
                </span>
              </div>

              <div className="p-6">
                <h2 className="text-lg font-extrabold text-slate-900 mb-2 group-hover:text-rose-600 transition-colors line-clamp-2">
                  {project.title}
                </h2>
                <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-[10px] font-bold bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md font-mono">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-6 pt-0 border-t border-slate-100/80 mt-2">
              <button
                type="button"
                onClick={() => setSelectedProject(project)}
                className="w-full mt-4 bg-slate-900 hover:bg-rose-600 text-white font-extrabold text-xs uppercase tracking-wider py-3.5 rounded-xl transition-all duration-200 active:scale-95 shadow-sm cursor-pointer"
              >
                Lihat Detail Proyek
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pop-Up Modal Detail Proyek */}
      {selectedProject && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-rose-100 animate-in fade-in zoom-in-95 duration-200">
            <div className="h-56 w-full relative">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title} 
                className="w-full h-full object-cover"
              />
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-white/90 hover:bg-white text-slate-800 rounded-full w-9 h-9 flex items-center justify-center font-bold text-sm shadow-md transition-all active:scale-90 cursor-pointer"
              >
                ✕
              </button>
            </div>
            
            <div className="p-6 sm:p-8 max-h-[65vh] overflow-y-auto">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-rose-600 bg-rose-50 px-3 py-1 rounded-full">
                {selectedProject.category}
              </span>
              
              <h2 className="text-xl font-extrabold text-slate-900 mt-3 mb-3">
                {selectedProject.title}
              </h2>
              
              <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed mb-4">
                {selectedProject.fullDetail}
              </p>

              {/* Dampak Proyek */}
              <div className="bg-rose-50/80 border border-rose-100 rounded-2xl p-4 mb-6">
                <h4 className="text-[11px] font-bold text-rose-700 uppercase tracking-wider mb-1">Dampak &amp; Solusi Sistem:</h4>
                <p className="text-xs text-slate-700 font-semibold leading-relaxed">
                  {selectedProject.impact}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 mb-6">
                {selectedProject.tags.map((tag, i) => (
                  <span key={i} className="text-[10px] font-bold bg-slate-100 text-slate-700 px-3 py-1 rounded-md font-mono">
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Tombol Dinamis: Figma / GitHub / In Development */}
              <div className="flex gap-3 pt-3 border-t border-slate-100">
                {selectedProject.linkType === 'figma' && selectedProject.figmaUrl && (
                  <a
                    href={selectedProject.figmaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-rose-600 hover:bg-rose-700 text-white font-extrabold text-xs uppercase tracking-wider py-3.5 rounded-xl text-center transition-all active:scale-95 shadow-md shadow-rose-600/20"
                  >
                    Buka Figma Prototype
                  </a>
                )}

                {selectedProject.linkType === 'github' && selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs uppercase tracking-wider py-3.5 rounded-xl text-center transition-all active:scale-95"
                  >
                    Buka GitHub Repo
                  </a>
                )}

                {selectedProject.linkType === 'none' && (
                  <span className="flex-1 bg-slate-100 text-slate-400 font-bold text-[11px] uppercase tracking-wider py-3.5 rounded-xl text-center border border-slate-200 select-none">
                    Internal / In Development
                  </span>
                )}

                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-6 bg-slate-100 hover:bg-slate-200 text-slate-700 font-extrabold text-xs uppercase tracking-wider py-3.5 rounded-xl transition-all active:scale-95 cursor-pointer"
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}