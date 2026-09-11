'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import ScrollReveal from '../components/ScrollReveal';

export default function ContactPage() {
  const email = "choqypenandasirait@gmail.com";
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', subject: '', message: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(
      formData.subject || 'Pesan dari Portofolio Web'
    )}&body=${encodeURIComponent(`Nama: ${formData.name}\n\nPesan:\n${formData.message}`)}`;
    
    window.open(mailtoLink, '_blank');
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

      {/* Main Crimson Card */}
      <ScrollReveal className="w-full">
        <div className="w-full bg-gradient-to-br from-slate-900 via-rose-950 to-slate-950 text-white rounded-3xl p-6 sm:p-12 shadow-2xl relative overflow-hidden border border-rose-900/40 group">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Sisi Kiri: Form Pesan Cepat & Tombol Action */}
            <div className="lg:col-span-7 text-left">
              <div className="inline-flex items-center gap-2 bg-rose-500/10 border border-rose-500/30 px-4 py-1.5 rounded-full mb-4 sm:mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-rose-300 font-mono">
                  [STATUS: AVAILABLE FOR COLLABORATION]
                </span>
              </div>

              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black mb-3 tracking-tight text-white leading-tight">
                Mari Berdiskusi &amp; Bekerja Sama
              </h1>
              
              <p className="text-slate-300 text-xs sm:text-sm mb-6 leading-relaxed font-medium">
                Kirimkan pesan langsung melalui formulir di bawah ini atau salin alamat email saya.
              </p>

              {/* Form Pesan Cepat */}
              <form onSubmit={handleFormSubmit} className="space-y-3.5 mb-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="Nama Lengkap"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-rose-500 transition-colors"
                  />
                  <input
                    type="text"
                    placeholder="Subjek / Topik"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-rose-500 transition-colors"
                  />
                </div>
                <textarea
                  placeholder="Tuliskan pesan kamu di sini..."
                  rows={3}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-rose-500 transition-colors resize-none"
                ></textarea>

                <div className="flex flex-col sm:flex-row gap-3 pt-1">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-rose-600 hover:bg-rose-700 text-white font-extrabold text-xs uppercase tracking-wider px-7 py-3.5 rounded-xl shadow-lg shadow-rose-600/30 hover:-translate-y-0.5 active:scale-95 transition-all duration-200 cursor-pointer"
                  >
                    <span>Kirim Pesan</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                  </button>

                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-extrabold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl backdrop-blur-md hover:-translate-y-0.5 active:scale-95 transition-all duration-200 cursor-pointer"
                  >
                    <svg className="w-4 h-4 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>
                    <span>{copied ? "Berhasil Disalin!" : "Salin Email"}</span>
                  </button>
                </div>
              </form>
            </div>

            {/* Sisi Kanan: Spider-Man (HANYA TAMPIL DI DESKTOP/LAPTOP) */}
            <div className="hidden lg:flex lg:col-span-5 justify-center items-center">
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

      {/* Toast Notification */}
      {copied && (
        <div className="fixed bottom-6 right-6 bg-slate-900 text-white text-xs font-bold px-5 py-3.5 rounded-2xl shadow-2xl border border-rose-500/40 flex items-center gap-2.5 animate-in fade-in slide-in-from-bottom-5 duration-200 z-50">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping"></span>
          <span>Email disalin: choqypenandasirait@gmail.com</span>
        </div>
      )}
    </main>
  );
}