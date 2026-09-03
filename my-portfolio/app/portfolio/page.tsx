'use client';

import React, { useState } from 'react';

interface ProjectItem {
  id: number;
  title: string;
  category: string;
  description: string;
  tags: string[];
}

export default function PortfolioPage() {
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

  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <div className="mb-12">
        <div className="flex items-center space-x-3 mb-3">
          <span className="w-8 h-0.5 bg-rose-600"></span>
          <span className="text-xs font-bold uppercase tracking-widest text-rose-600">
            PORTFOLIO
          </span>
        </div>
        <h1 className="text-4xl font-extrabold text-slate-900">Proyek Pilihan</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {myProjects.map((project) => (
          <div 
            key={project.id} 
            className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:border-rose-200 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-rose-600 bg-rose-50 px-3 py-1 rounded-full">
                {project.category}
              </span>
              <h2 className="text-lg font-bold text-slate-900 mt-4 mb-2 group-hover:text-rose-600 transition-colors">
                {project.title}
              </h2>
              <p className="text-slate-600 text-xs leading-relaxed mb-6">{project.description}</p>
              
              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.tags.map((tag, i) => (
                  <span key={i} className="text-[10px] bg-slate-100 text-slate-600 px-2.5 py-1 rounded font-mono">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <button
                type="button"
                onClick={() => handleLike(project.id)}
                className="flex items-center space-x-1.5 text-xs text-slate-600 hover:text-rose-600 transition active:scale-90 cursor-pointer"
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
    </main>
  );
}