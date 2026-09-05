'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import ScrollReveal from '../components/ScrollReveal';

export default function ContactPage() {
  const email = "choqypenandasirait@gmail.com";
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <main className="max-w-5xl mx-auto px-6 py-8 relative overflow-hidden min-h-[70vh] flex items-center justify-center">
      
      {/* BACKGROUND SPIDER-WEB (Layar Luar) */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-between opacity-15 -z-10">
        <svg viewBox="0 0 300 300" className="w-80 h-80 text-rose-600 animate-web-flicker -translate-x-1/3">
          <path d="M150 0 V300 M0 150 H300 M44 44 L256 256 M256 44 L44 256" stroke="currentColor" strokeWidth="1" strokeDasharray="6 6" />
          <circle cx="150" cy="150" r="40" stroke="currentColor" strokeWidth="1" fill="none" />
          <circle cx="150" cy="150" r="90" stroke="currentColor" strokeWidth="1" fill="none" />
          <circle cx="150" cy="150" r="130" stroke="currentColor" strokeWidth="1" fill="none" />
        </svg>
        <svg viewBox="0 0 300 300" className="w-80 h-80 text-rose-600 animate-web-flicker translate-x-1/3">
          <path d="M150 0 V300 M0 150 H300 M44 44 L256 256 M256 44 L44 256" stroke="currentColor" strokeWidth="1" strokeDasharray="6 6" />
          <circle cx="150" cy="150" r="40" stroke="currentColor" strokeWidth="1" fill="none" />
          <circle cx="150" cy="150" r="90" stroke="currentColor" strokeWidth="1" fill="none" />
          <circle cx="150" cy="150" r="130" stroke="currentColor" strokeWidth="1" fill="none" />
        </svg>
      </div>

      {/* Main Midnight Crimson Card */}
      <ScrollReveal className="w-full">
        <div className="w-full bg-gradient-to-br from-slate-900 via-rose-950 to-slate-950 text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden border border-rose-900/40 group">
          
          {/* Ambient Glows */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-rose-600/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Sisi Kiri: Teks & Tombol */}
            <div className="lg:col-span-7 text-left">
              <div className="inline-flex items-center gap-2 bg-rose-500/10 border border-rose-500/30 px-4 py-1.5 rounded-full mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-rose-300 font-mono">
                  [STATUS: AVAILABLE FOR COLLABORATION]
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 tracking-tight text-white leading-tight">
                Mari Berdiskusi &amp; Bekerja Sama
              </h1>
              
              <p className="text-slate-300 text-xs sm:text-sm mb-8 leading-relaxed font-medium max-w-md">
                Terbuka untuk proyek kolaborasi, diskusi teknologi, analisis sistem, maupun peluang karir.
              </p>

              <div className="flex flex-wrap gap-4">
                {/* Tombol Kirim Email */}
                <a
                  href={gmailUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-rose-600 hover:bg-rose-700 text-white font-extrabold text-xs uppercase tracking-wider px-7 py-4 rounded-2xl shadow-lg shadow-rose-600/30 hover:shadow-rose-600/50 hover:-translate-y-1 active:scale-95 transition-all duration-300"
                >
                  <span>Kirim Pesan Email</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                </a>

                {/* Tombol Copy Email */}
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-extrabold text-xs uppercase tracking-wider px-6 py-4 rounded-2xl backdrop-blur-md hover:-translate-y-1 active:scale-95 transition-all duration-300 cursor-pointer"
                >
                  <svg className="w-4 h-4 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>
                  <span>{copied ? "Berhasil Disalin!" : "Salin Email"}</span>
                </button>
              </div>
            </div>

            {/* Sisi Kanan: Gambar Spider-Man Action */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <div className="relative w-56 sm:w-64 lg:w-72 h-auto">
                <div className="absolute inset-0 bg-rose-600/20 rounded-full blur-2xl group-hover:bg-rose-600/35 transition-all duration-500"></div>
                <Image
                  src="/Spaiderman.png"
                  alt="Spider-Man Action"
                  width={300}
                  height={300}
                  priority
                  className="w-full h-auto object-contain relative z-10 hover:scale-105 transition-transform duration-500 drop-shadow-2xl"
                />
              </div>
            </div>

          </div>

        </div>
      </ScrollReveal>

      {/* Floating Toast Notification */}
      {copied && (
        <div className="fixed bottom-6 right-6 bg-slate-900 text-white text-xs font-bold px-5 py-3.5 rounded-2xl shadow-2xl border border-rose-500/40 flex items-center gap-2.5 animate-in fade-in slide-in-from-bottom-5 duration-200 z-50">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping"></span>
          <span>Email disalin: choqypenandasirait@gmail.com</span>
        </div>
      )}
    </main>
  );
}