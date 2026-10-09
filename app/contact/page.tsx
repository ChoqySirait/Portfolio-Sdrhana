'use client';

import React, { useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import TiltCard from '../components/TiltCard';
import { useTheme } from '../context/ThemeContext';

export default function ContactPage() {
  const { theme } = useTheme();
  const email = "choqypenandasirait@gmail.com";
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', subject: '', message: '' });

  const contactSpiderImage = theme === 'dark' ? '/ContactSpider.png' : '/Spaiderman.png';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(
      formData.subject || 'Inquiry from Portfolio Website'
    )}&body=${encodeURIComponent(`Name: ${formData.name}\n\nMessage:\n${formData.message}`)}`;
    
    window.open(mailtoLink, '_blank');
  };

  return (
    <main className="max-w-5xl mx-auto px-6 py-8 relative overflow-hidden flex flex-col items-center justify-center space-y-8">
      
      {/* Background Spider Web Ambient */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-between opacity-15 dark:opacity-25 -z-10">
        <svg viewBox="0 0 300 300" className="w-80 h-80 text-rose-600 animate-web-flicker -translate-x-1/3">
          <path d="M150 0 V300 M0 150 H300 M44 44 L256 256 M256 44 L44 256" stroke="currentColor" strokeWidth="1" strokeDasharray="6 6" />
          <circle cx="150" cy="150" r="40" stroke="currentColor" strokeWidth="1" fill="none" />
          <circle cx="150" cy="150" r="90" stroke="currentColor" strokeWidth="1" fill="none" />
          <circle cx="150" cy="150" r="130" stroke="currentColor" strokeWidth="1" fill="none" />
        </svg>
      </div>

      {/* Main Crimson / Symbiote Card */}
      <ScrollReveal className="w-full">
        <div className="w-full bg-gradient-to-br from-slate-900 via-rose-950 to-slate-950 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 text-white rounded-3xl p-6 sm:p-12 shadow-2xl relative overflow-hidden border border-rose-900/40 dark:border-slate-800 group">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Sisi Kiri: Form */}
            <div className="lg:col-span-7 text-left">
              <div className="inline-flex items-center gap-2 bg-rose-500/10 border border-rose-500/30 px-4 py-1.5 rounded-full mb-4 sm:mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-[10px] font-black uppercase tracking-widest text-rose-300 font-mono">
                  [STATUS: AVAILABLE FOR COLLABORATION]
                </span>
              </div>

              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black mb-3 tracking-tight text-white leading-tight">
                Let&apos;s Connect &amp; Collaborate
              </h1>
              
              <p className="text-slate-300 text-xs sm:text-sm mb-6 leading-relaxed font-bold">
                Send a direct message through the form below or copy my email address.
              </p>

              {/* Form Pesan Cepat */}
              <form onSubmit={handleFormSubmit} className="space-y-3.5 mb-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="Full Name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-rose-500 transition-colors font-bold"
                  />
                  <input
                    type="text"
                    placeholder="Subject / Topic"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-rose-500 transition-colors font-bold"
                  />
                </div>
                <textarea
                  placeholder="Write your message here..."
                  rows={3}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white/10 border border-white/15 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-rose-500 transition-colors resize-none font-bold"
                ></textarea>

                <div className="flex flex-col sm:flex-row gap-3 pt-1">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-rose-600 hover:bg-rose-700 text-white font-black text-xs uppercase tracking-wider px-7 py-3.5 rounded-xl shadow-lg shadow-rose-600/30 hover:-translate-y-0.5 active:scale-95 transition-all duration-200 cursor-pointer"
                  >
                    <span>Send Message</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-black text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl backdrop-blur-md hover:-translate-y-0.5 active:scale-95 transition-all duration-200 cursor-pointer"
                  >
                    <span>{copied ? "Copied!" : "Copy Email"}</span>
                  </button>
                </div>
              </form>
            </div>

            {/* Sisi Kanan: Spider-Man Action */}
            <div className="hidden lg:flex lg:col-span-5 justify-center items-center">
              <div className="relative w-60 sm:w-72 lg:w-80 h-auto flex items-center justify-center">
                <div className="absolute inset-0 bg-rose-600/20 dark:bg-rose-500/20 rounded-full blur-3xl"></div>
                <img
                  key={contactSpiderImage}
                  src={contactSpiderImage}
                  alt="Spider-Man Contact"
                  className={`w-full h-auto object-contain relative z-10 hover:scale-105 transition-transform duration-500 drop-shadow-2xl ${
                    theme === 'dark' ? 'remove-white-bg' : ''
                  }`}
                />
              </div>
            </div>

          </div>

        </div>
      </ScrollReveal>

      {/* Interactive High-Tech Quick Info Widgets (Penambahan agar Halaman Kontak Tidak Polos) */}
      <ScrollReveal delayClass="delay-100" className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
          
          <TiltCard className="bg-white/95 dark:bg-slate-900/90 backdrop-blur-md p-5 rounded-2xl border border-slate-300 dark:border-slate-800 shadow-xs flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-rose-50 dark:bg-slate-800 border border-rose-200 dark:border-slate-700 flex items-center justify-center text-rose-600 dark:text-rose-400 font-bold">
              📍
            </div>
            <div>
              <p className="text-[10px] font-black uppercase text-slate-500 dark:text-slate-400 font-mono">Location Base</p>
              <p className="text-xs font-black text-slate-950 dark:text-white">IT Del, Sumatera Utara</p>
            </div>
          </TiltCard>

          <TiltCard className="bg-white/95 dark:bg-slate-900/90 backdrop-blur-md p-5 rounded-2xl border border-slate-300 dark:border-slate-800 shadow-xs flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-slate-800 border border-emerald-200 dark:border-slate-700 flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-bold">
              ⚡
            </div>
            <div>
              <p className="text-[10px] font-black uppercase text-slate-500 dark:text-slate-400 font-mono">Response Rate</p>
              <p className="text-xs font-black text-slate-950 dark:text-white">&lt; 24 Hours Reply</p>
            </div>
          </TiltCard>

          <TiltCard className="bg-white/95 dark:bg-slate-900/90 backdrop-blur-md p-5 rounded-2xl border border-slate-300 dark:border-slate-800 shadow-xs flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-slate-800 border border-blue-200 dark:border-slate-700 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold">
              🕷️
            </div>
            <div>
              <p className="text-[10px] font-black uppercase text-slate-500 dark:text-slate-400 font-mono">Spider-Senses Status</p>
              <p className="text-xs font-black text-slate-950 dark:text-white">Open for Projects</p>
            </div>
          </TiltCard>

        </div>
      </ScrollReveal>

    </main>
  );
}