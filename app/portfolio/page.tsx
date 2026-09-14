'use client';

import React, { useState, useRef } from 'react';
import ScrollReveal from '../components/ScrollReveal';

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
      title: "MSME Parcel Pickup Management System",
      category: "UI/UX Design",
      description: "Integrated Web/Mobile package logging and retrieval application.",
      fullDetail: "Specially designed to streamline MSME operations in managing inbound and outbound package flows. Features real-time recording, pickup identity verification, and automated daily transaction activity reports.",
      impact: "Reduced package pickup verification time by up to 50% and significantly minimized inventory data errors.",
      image: "/ProjekUMKN.png",
      tags: ["Figma", "UI/UX", "System Design"],
      linkType: "figma",
      figmaUrl: "https://www.figma.com/design/jcpu2VvqOW6k8LJdFMYNn8/ANAPRANCIS-A?node-id=0-1&t=R8MBUf5nc0j9vZYJ-1",
    },
    {
      id: 2,
      title: "Travel & Hotel Guide Prototype (TRIPORIA)",
      category: "UI/UX Design",
      description: "Web interface and booking design prototype for Samosir & Lake Toba tour packages.",
      fullDetail: "Triporia is a travel application prototype focusing on helping tourists seamlessly explore Samosir and Lake Toba. Features a modern layout for booking hotels, local tour guides, and intuitive destination navigation.",
      impact: "Increased user usability testing score up to 85% through a user-friendly layout and centralized travel information, while enhancing business strategy for local tourism operators.",
      image: "/ProjekTriporia.png",
      tags: ["Figma", "UI/UX", "User Research"],
      linkType: "figma",
      figmaUrl: "https://www.figma.com/design/sk3lf3VuJE0mLsAoBTPcFp/KEL-2?node-id=0-1&t=4PAzCGVIItE9ahzP-1",
    },
    {
      id: 3,
      title: "Nakama Interactive To-Do List",
      category: "Frontend Web",
      description: "Lightweight web-based daily task management featuring local filtering.",
      fullDetail: "A responsive productivity app built with Vanilla JS and LocalStorage, ensuring tasks remain saved even after closing the browser. Includes categories and progress filtering.",
      impact: "Provides zero-latency task management with 100% secure local browser data persistence. Simple yet highly impactful.",
      image: "/to-do-list.png",
      tags: ["HTML5", "JavaScript", "CSS3"],
      linkType: "github",
      githubUrl: "https://github.com/ChoqySirait/Nakama-To-Do-Listt",
    },
    {
      id: 4,
      title: "SupplySync — Enterprise Warehouse Management System",
      category: "Fullstack Web & Database Engine",
      description: "(In Progress) Enterprise warehouse system featuring Auto-FIFO Engine, batch tracking, and real-time transaction audit logs.",
      fullDetail: "An industrial-grade warehouse management app optimizing inventory rotation via database-isolated Auto-FIFO (First-In, First-Out) logic. Features stock batch expiration tracking, inbound/outbound item modules, automated Audit Trails for fraud prevention, and CSV export capabilities.",
      impact: "Prevents losses from expired inventory, increases physical stock accuracy to 100%, and accelerates warehouse audit reporting.",
      image: "/MMSM.png",
      tags: ["Node.js", "Express.js", "MySQL", "Tailwind CSS", "REST API", "FIFO Engine"],
      linkType: "github",
      githubUrl: "https://github.com/ChoqySirait/SupplySync-Mini-Warehouse-Management-System",
    },
    {
      id: 5,
      title: "Upcoming Project #1",
      category: "System Analysis",
      description: "Architecture development and modeling for digital business information systems.",
      fullDetail: "This slot is prepared for an upcoming system analysis project. It will encompass UML diagrams, database schema designs, and comprehensive user requirement specifications.",
      impact: "Serves as an architectural blueprint for enterprise-scale information system development.",
      image: "/Soon.jpg",
      tags: ["UML", "Database Design", "System Architecture"],
      linkType: "none",
    },
    {
      id: 6,
      title: "Upcoming Project #2",
      category: "Security",
      description: "Research and vulnerability assessment for web interfaces and server infrastructures.",
      fullDetail: "This slot is designated for security audit documentation, vulnerability assessment, and network security protocol implementation.",
      impact: "Enhances application resilience against cyber threats and potential data breaches.",
      image: "/Soon.jpg",
      tags: ["Cybersecurity", "Network Audit", "Data Protection"],
      linkType: "none",
    },
    {
      id: 7,
      title: "Upcoming Project #3",
      category: "UI/UX Design",
      description: "Interactive mobile application prototype grounded in user research.",
      fullDetail: "This slot is set aside for a future mobile UI/UX design project, complete with Design System documentation and a High-Fidelity Figma Prototype.",
      impact: "Delivers an intuitive, modern, and seamless mobile interaction experience.",
      image: "/Soon.jpg",
      tags: ["Figma", "Mobile UI", "Design System"],
      linkType: "none",
    },
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
                My Projects
              </span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">Featured Projects</h1>
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
          <span>Swipe cards to explore more</span>
        </p>
      </ScrollReveal>

      {/* Carousel Container */}
      <ScrollReveal delayClass="delay-100">
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
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>

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
                aria-label="Close Modal"
              >
                ✕
              </button>
            </div>
            
            <div className="p-6 sm:p-8 max-h-[65vh] overflow-y-auto">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-rose-600 bg-rose-50 px-3 py-1 rounded-full font-mono">
                {selectedProject.category}
              </span>
              
              <h2 className="text-xl font-extrabold text-slate-900 mt-3 mb-3">
                {selectedProject.title}
              </h2>
              
              <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed mb-4">
                {selectedProject.fullDetail}
              </p>

              <div className="bg-rose-50/80 border border-rose-100 rounded-2xl p-4 mb-6">
                <h4 className="text-[11px] font-bold text-rose-700 uppercase tracking-wider mb-1 font-mono">System Impact &amp; Solution:</h4>
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

              <div className="flex gap-3 pt-3 border-t border-slate-100">
                {selectedProject.linkType === 'figma' && selectedProject.figmaUrl && (
                  <a
                    href={selectedProject.figmaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-rose-600 hover:bg-rose-700 text-white font-extrabold text-xs uppercase tracking-wider py-3.5 rounded-xl text-center transition-all active:scale-95 shadow-md shadow-rose-600/20"
                  >
                    Open Figma Prototype
                  </a>
                )}

                {selectedProject.linkType === 'github' && selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs uppercase tracking-wider py-3.5 rounded-xl text-center transition-all active:scale-95"
                  >
                    Open GitHub Repo
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