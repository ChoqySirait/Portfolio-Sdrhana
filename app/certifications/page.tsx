'use client';

import React from 'react';
import ScrollReveal from '../components/ScrollReveal';
import TiltCard from '../components/TiltCard';

interface CertificationItem {
  id: number;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  description: string;
  skills: string[];
  verifyUrl?: string;
}

export default function CertificationsPage() {
  const certifications: CertificationItem[] = [
    {
      id: 1,
      title: "JavaScript Programming Certification",
      issuer: "Dicoding Indonesia",
      date: "Feb 2026",
      credentialId: "DICODING-JS-2026",
      description: "Validated proficiency in core JavaScript ES6+, asynchronous programming, object-oriented principles, and clean code standards.",
      skills: ["JavaScript ES6+", "Async/Await", "OOP", "Data Structures"],
      verifyUrl: "https://www.dicoding.com",
    },
    {
      id: 2,
      title: "Advanced SQL & Database Security",
      issuer: "Del Institute of Technology (Academic Lab)",
      date: "Sep 2026",
      credentialId: "ITDEL-SQL-2026",
      description: "Demonstrated advanced mastery in SQL Server triggers, stored procedures, JSON snapshots, and transactional database integrity.",
      skills: ["SQL Server", "Database Triggers", "Stored Procedures", "Data Security"],
    },
    {
      id: 3,
      title: "Network Packet Inspection & Analysis",
      issuer: "Cybersecurity Practical Course",
      date: "May 2026",
      credentialId: "CYBER-WIRE-2026",
      description: "Hands-on analysis of network traffic, HTTP/TCP protocol inspection, malware traffic triage, and Wireshark forensic packet capturing.",
      skills: ["Wireshark", "Packet Analysis", "HTTP/TCP Protocols", "Traffic Forensics"],
    },
  ];

  return (
    <main className="max-w-6xl mx-auto px-6 py-8 relative">
      <div className="absolute top-10 left-10 w-80 h-80 bg-rose-500/10 dark:bg-rose-600/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

      {/* Header Section */}
      <ScrollReveal>
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 bg-rose-500/10 dark:bg-rose-500/20 border border-rose-500/30 px-3.5 py-1.5 rounded-full mb-3">
            <span className="w-2 h-2 rounded-full bg-rose-600"></span>
            <span className="text-[10px] font-black uppercase tracking-widest text-rose-700 dark:text-rose-400 font-mono">
              [CREDENTIALS // BADGES]
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-950 dark:text-white tracking-tight">
            Certifications &amp; Badges
          </h1>
        </div>
      </ScrollReveal>

      {/* Grid Sertifikasi */}
      <ScrollReveal delayClass="delay-100">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <TiltCard
              key={cert.id}
              className="bg-white/95 dark:bg-slate-900/90 backdrop-blur-md p-7 rounded-3xl border border-slate-300 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-rose-400 dark:hover:border-rose-800 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-black uppercase tracking-wider text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-slate-800 border border-rose-200 dark:border-slate-700 px-3 py-1 rounded-full font-mono">
                    {cert.date}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-rose-600"></span>
                </div>

                <h2 className="text-lg font-black text-slate-950 dark:text-white mb-1 group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
                  {cert.title}
                </h2>

                <p className="text-xs font-black text-slate-950 dark:text-slate-100 mb-3">{cert.issuer}</p>

                <p className="text-slate-800 dark:text-slate-200 text-xs sm:text-sm font-bold leading-relaxed mb-4">
                  {cert.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {cert.skills.map((skill, idx) => (
                    <span key={idx} className="text-[10px] font-extrabold bg-slate-100 dark:bg-slate-800 text-slate-950 dark:text-slate-100 px-2.5 py-1 rounded-md font-mono">
                      #{skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <span className="text-[10px] font-mono font-black text-slate-500 dark:text-slate-400">
                  ID: {cert.credentialId}
                </span>
                {cert.verifyUrl ? (
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-black text-rose-600 dark:text-rose-400 hover:text-rose-700 transition-colors"
                  >
                    Verify →
                  </a>
                ) : (
                  <span className="text-[10px] font-black text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2.5 py-1 rounded-md">
                    Verified Academic
                  </span>
                )}
              </div>
            </TiltCard>
          ))}
        </div>
      </ScrollReveal>
    </main>
  );
}