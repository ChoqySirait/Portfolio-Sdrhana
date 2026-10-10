'use client';

import React, { useState, useRef } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import TiltCard from '../components/TiltCard';
import TypewriterTitle from '../components/TypewriterTitle';

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
  const [activeCategory, setActiveCategory] = useState<string>('All');
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
      title: "SecurAI — Intelligent SOC L1 Incident Triage & Threat Intelligence Assistant",
      category: "Cybersecurity & AI",
      description: "AI-powered cybersecurity assistant using Hybrid Engine (Local Heuristic + Gemini AI) for URL triage and threat analysis.",
      fullDetail: "An intelligent security assistant built for SOC Level 1 incident triage. Combines Anti-SSRF inspection, incognito screenshot OCR, and LLM reasoning to analyze phishing links, trojan APKs, and malicious domains while mapping tactics directly to the MITRE ATT&CK framework.",
      impact: "Automates level-1 threat triage, URL defanging, and incident report generation, reducing analysis time while accurately distinguishing benign piracy from active malicious intents.",
      image: "/SecurAI.png",
      tags: ["FastAPI", "Python", "Gemini AI", "Cybersecurity", "MITRE ATT&CK"],
      linkType: "github",
      githubUrl: "https://github.com/ChoqySirait/Chatbot",
    },
    {
      id: 2,
      title: "MSME Parcel Pickup Management System",
      category: "UI/UX & Product Design",
      description: "Integrated Web/Mobile package logging and retrieval application.",
      fullDetail: "Specially designed to streamline MSME operations in managing inbound and outbound package flows. Features real-time recording, pickup identity verification, and automated daily transaction activity reports.",
      impact: "Reduced package pickup verification time by up to 50% and significantly minimized inventory data errors.",
      image: "/ProjekUMKN.png",
      tags: ["Figma", "UI/UX", "System Design"],
      linkType: "figma",
      figmaUrl: "https://www.figma.com/design/jcpu2VvqOW6k8LJdFMYNn8/ANAPRANCIS-A?node-id=0-1&t=R8MBUf5nc0j9vZYJ-1",
    },
    {
      id: 3,
      title: "Travel & Hotel Guide Prototype (TRIPORIA)",
      category: "UI/UX & Product Design",
      description: "Web interface and booking design prototype for Samosir & Lake Toba tour packages.",
      fullDetail: "Triporia is a travel application prototype focusing on helping tourists seamlessly explore Samosir and Lake Toba. Features a modern layout for booking hotels, local tour guides, and intuitive destination navigation.",
      impact: "Increased user usability testing score up to 85% through a user-friendly layout and centralized travel information, while enhancing business strategy for local tourism operators.",
      image: "/ProjekTriporia.png",
      tags: ["Figma", "UI/UX", "User Research"],
      linkType: "figma",
      figmaUrl: "https://www.figma.com/design/sk3lf3VuJE0mLsAoBTPcFp/KEL-2?node-id=0-1&t=4PAzCGVIItE9ahzP-1",
    },
    {
      id: 4,
      title: "Nakama Interactive To-Do List",
      category: "Fullstack & Systems",
      description: "Lightweight web-based daily task management featuring local filtering.",
      fullDetail: "A responsive productivity app built with Vanilla JS and LocalStorage, ensuring tasks remain saved even after closing the browser. Includes categories and progress filtering.",
      impact: "Provides zero-latency task management with 100% secure local browser data persistence. Simple yet highly impactful.",
      image: "/to-do-list.png",
      tags: ["HTML5", "JavaScript", "CSS3"],
      linkType: "github",
      githubUrl: "https://github.com/ChoqySirait/Nakama-To-Do-Listt",
    },
    {
      id: 5,
      title: "SupplySync — Enterprise Warehouse Management System",
      category: "Fullstack & Systems",
      description: "(In Progress) Enterprise warehouse system featuring Auto-FIFO Engine, batch tracking, and real-time transaction audit logs.",
      fullDetail: "An industrial-grade warehouse management app optimizing inventory rotation via database-isolated Auto-FIFO (First-In, First-Out) logic. Features stock batch expiration tracking, inbound/outbound item modules, automated Audit Trails for fraud prevention, and CSV export capabilities.",
      impact: "Prevents losses from expired inventory, increases physical stock accuracy to 100%, and accelerates warehouse audit reporting.",
      image: "/MMSM.png",
      tags: ["Node.js", "Express.js", "MySQL", "Tailwind CSS", "REST API", "FIFO Engine"],
      linkType: "github",
      githubUrl: "https://github.com/ChoqySirait/SupplySync-Mini-Warehouse-Management-System",
    },
    {
      id: 6,
      title: "Upcoming Project #1",
      category: "Fullstack & Systems",
      description: "Architecture development and modeling for digital business information systems.",
      fullDetail: "This slot is prepared for an upcoming system analysis project. It will encompass UML diagrams, database schema designs, and comprehensive user requirement specifications.",
      impact: "Serves as an architectural blueprint for enterprise-scale information system development.",
      image: "/Soon.jpg",
      tags: ["UML", "Database Design", "System Architecture"],
      linkType: "none",
    },
  ];

  const categories = ['All', 'Cybersecurity & AI', 'UI/UX & Product Design', 'Fullstack & Systems'];

  const filteredProjects = activeCategory === 'All' 
    ? myProjects 
    : myProjects.filter(p => p.category === activeCategory);

  return (
    <main className="max-w-6xl mx-auto px-6 py-8 relative overflow-hidden">
      <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-tr from-rose-600/20 via-blue-600/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10"></div>

      {/* Header Section */}
      <ScrollReveal>
        <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-600/20 to-blue-600/20 border border-rose-500/40 px-4 py-1.5 rounded-full mb-3 shadow-md">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
              <span className="text-[11px] font-black uppercase tracking-widest text-rose-300 font-mono">
               - My Project
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight min-h-[50px]">
              <TypewriterTitle text="Featured Projects" />
            </h1>
          </div>

          {/* Tombol Swipe Carousel */}
          <div className="hidden sm:flex items-center space-x-3">
            <button 
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-2xl bg-[#0E1628] hover:bg-slate-800 border-2 border-rose-500/60 hover:border-blue-400 text-white hover:text-rose-400 flex items-center justify-center transition-all duration-200 active:scale-90 shadow-md cursor-pointer group"
              aria-label="Previous Slide"
            >
              <svg className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7"/></svg>
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-2xl bg-[#0E1628] hover:bg-slate-800 border-2 border-rose-500/60 hover:border-blue-400 text-white hover:text-rose-400 flex items-center justify-center transition-all duration-200 active:scale-90 shadow-md cursor-pointer group"
              aria-label="Next Slide"
            >
              <svg className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"/></svg>
            </button>
          </div>
        </div>

        {/* Filter Kategori */}
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-xs font-black px-4 py-2 rounded-xl border transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-rose-600 via-red-600 to-rose-700 text-white border-rose-400 shadow-lg shadow-rose-600/40'
                  : 'bg-[#0E1628] dark:bg-[#08080D] text-slate-100 border-rose-500/40 dark:border-slate-800 hover:border-blue-400 hover:text-rose-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </ScrollReveal>

      {/* Carousel Container */}
      <ScrollReveal delayClass="delay-100">
        <div 
          ref={scrollContainerRef}
          className="flex space-x-6 overflow-x-auto pb-8 pt-2 no-scrollbar snap-x snap-mandatory"
        >
          {filteredProjects.map((project) => (
            <TiltCard 
              key={project.id} 
              className="flex-none w-[310px] sm:w-[360px] snap-start bg-gradient-to-br from-[#0F172A] via-[#1C0D1B] to-[#0D1527] dark:from-[#08080D] dark:via-[#12121A] dark:to-[#050508] backdrop-blur-md rounded-3xl border-2 border-rose-500/50 dark:border-slate-800 shadow-xl hover:shadow-2xl hover:border-blue-400 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="h-48 w-full overflow-hidden relative bg-slate-900">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 text-[10px] font-black uppercase tracking-wider text-rose-300 bg-[#0E1628]/90 border border-rose-500/50 px-3.5 py-1 rounded-full shadow-md font-mono">
                    {project.category}
                  </span>
                </div>

                <div className="p-6">
                  <h2 className="text-lg font-black text-white mb-2 group-hover:text-rose-400 transition-colors line-clamp-2">
                    {project.title}
                  </h2>
                  <p className="text-slate-200 text-xs sm:text-sm font-bold leading-relaxed mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-[10px] font-extrabold bg-[#172033] text-white px-2.5 py-1 rounded-md font-mono border border-rose-500/30">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-rose-900/40 mt-2">
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="w-full mt-4 bg-gradient-to-r from-rose-600 via-red-600 to-rose-700 hover:from-rose-500 hover:to-red-500 text-white font-black text-xs uppercase tracking-wider py-3.5 rounded-xl shadow-lg shadow-rose-600/40 hover:shadow-rose-500/70 border border-rose-400/30 transition-all duration-200 active:scale-95 cursor-pointer"
                >
                  View Details
                </button>
              </div>
            </TiltCard>
          ))}
        </div>
      </ScrollReveal>

      {/* Modal Detail Proyek */}
      {selectedProject && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-[#0F172A] via-[#1C0D1B] to-[#0D1527] rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border-2 border-rose-500 animate-in fade-in zoom-in-95 duration-200">
            <div className="h-56 w-full relative bg-slate-900">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title} 
                className="w-full h-full object-cover"
              />
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-rose-600 text-white rounded-full w-9 h-9 flex items-center justify-center font-black text-sm shadow-md transition-all active:scale-90 cursor-pointer"
                aria-label="Close Modal"
              >
                ✕
              </button>
            </div>
            
            <div className="p-6 sm:p-8 max-h-[65vh] overflow-y-auto">
              <span className="text-[10px] font-black uppercase tracking-wider text-rose-300 bg-[#0E1628] border border-rose-500/40 px-3 py-1 rounded-full font-mono">
                {selectedProject.category}
              </span>
              
              <h2 className="text-xl font-black text-white mt-3 mb-3">
                {selectedProject.title}
              </h2>
              
              <p className="text-slate-200 text-xs sm:text-sm font-bold leading-relaxed mb-4">
                {selectedProject.fullDetail}
              </p>

              <div className="bg-[#111B2E] border border-rose-500/40 rounded-2xl p-4 mb-6">
                <h4 className="text-[11px] font-black text-rose-400 uppercase tracking-wider mb-1 font-mono">System Impact &amp; Solution:</h4>
                <p className="text-xs text-white font-extrabold leading-relaxed">
                  {selectedProject.impact}
                </p>
              </div>

              <div className="flex gap-3 pt-3 border-t border-rose-900/40">
                {selectedProject.linkType === 'figma' && selectedProject.figmaUrl && (
                  <a
                    href={selectedProject.figmaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-rose-600 via-red-600 to-rose-700 text-white font-black text-xs uppercase tracking-wider py-3.5 rounded-xl text-center shadow-lg shadow-rose-600/40"
                  >
                    Open Figma Prototype
                  </a>
                )}

                {selectedProject.linkType === 'github' && selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-rose-600 via-red-600 to-rose-700 text-white font-black text-xs uppercase tracking-wider py-3.5 rounded-xl text-center shadow-lg shadow-rose-600/40"
                  >
                    Open GitHub Repo
                  </a>
                )}

                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-6 bg-[#0E1628] text-white font-black text-xs uppercase tracking-wider py-3.5 rounded-xl border border-rose-500/50 cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}