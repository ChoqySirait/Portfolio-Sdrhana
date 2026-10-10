'use client';

import React, { useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import TiltCard from '../components/TiltCard';
import TypewriterTitle from '../components/TypewriterTitle';
import SpiderImage from '../components/SpiderImage';
import SectionBadge from '../components/SectionBadge';

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
      formData.subject || 'Inquiry from Portfolio Website'
    )}&body=${encodeURIComponent(`Name: ${formData.name}\n\nMessage:\n${formData.message}`)}`;
    
    window.open(mailtoLink, '_blank');
  };

  return (
    <main className="max-w-5xl mx-auto px-6 py-8 relative overflow-x-hidden flex flex-col items-center justify-center space-y-8">
      
      <ScrollReveal className="w-full">
        <div className="w-full bg-gradient-to-br from-[#0F172A] via-[#1C0D1B] to-[#0D1527] dark:from-[#08080D] dark:via-[#12121A] dark:to-[#050508] text-white rounded-3xl p-6 sm:p-12 shadow-2xl border-2 border-rose-500/60 dark:border-slate-800 relative overflow-hidden transition-all duration-500 group">
          <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-rose-600/20 to-blue-600/20 rounded-bl-full pointer-events-none"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            <div className="lg:col-span-7 text-left">
              {/* Badge Merah Konsisten */}
              <SectionBadge label="Available For Collaboration" className="mb-6" />

              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black mb-3 tracking-tight text-white leading-tight min-h-[60px]">
                <TypewriterTitle text="Let's Connect & Collaborate" speed={40} />
              </h1>
              
              <p className="text-slate-200 text-xs sm:text-sm mb-6 leading-relaxed font-bold">
                Send a direct message through the form below or copy my email address.
              </p>

              <form onSubmit={handleFormSubmit} className="space-y-4 mb-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <input
                    type="text"
                    placeholder="Full Name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#111B2E] dark:bg-slate-900 border-2 border-rose-500/40 dark:border-slate-700 focus:border-rose-500 rounded-xl px-4 py-3.5 text-xs text-white placeholder-slate-400 focus:outline-none transition-colors font-bold shadow-inner"
                  />
                  <input
                    type="text"
                    placeholder="Subject / Topic"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-[#111B2E] dark:bg-slate-900 border-2 border-rose-500/40 dark:border-slate-700 focus:border-rose-500 rounded-xl px-4 py-3.5 text-xs text-white placeholder-slate-400 focus:outline-none transition-colors font-bold shadow-inner"
                  />
                </div>
                <textarea
                  placeholder="Write your message here..."
                  rows={3}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#111B2E] dark:bg-slate-900 border-2 border-rose-500/40 dark:border-slate-700 focus:border-rose-500 rounded-xl px-4 py-3.5 text-xs text-white placeholder-slate-400 focus:outline-none transition-colors resize-none font-bold shadow-inner"
                ></textarea>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-gradient-to-r from-rose-600 via-red-600 to-rose-700 hover:from-rose-500 hover:to-red-500 text-white font-black text-xs uppercase tracking-wider px-8 py-4 rounded-xl shadow-lg shadow-rose-600/50 hover:shadow-rose-500/80 transition-all duration-200 cursor-pointer border border-rose-400/40"
                  >
                    Send Message
                  </button>

                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="w-full sm:w-auto bg-[#131D33] dark:bg-slate-900 text-white border-2 border-rose-500/50 dark:border-slate-700 font-black text-xs uppercase tracking-wider px-7 py-4 rounded-xl hover:border-blue-400 transition-all duration-200 cursor-pointer shadow-md"
                  >
                    {copied ? "Copied!" : "Copy Email"}
                  </button>
                </div>
              </form>
            </div>

            <div className="hidden lg:flex lg:col-span-5 justify-center items-center">
              <div className="relative w-72 h-auto flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-r from-rose-600/30 to-blue-600/30 dark:from-slate-500/10 rounded-full blur-3xl pointer-events-none"></div>
                <SpiderImage
                  lightSrc="/Spaiderman.png"
                  darkSrc="/ContactSpider.png"
                  alt="Spider-Man Contact"
                  className="w-full h-auto object-contain relative z-10 hover:scale-105 transition-transform duration-500 drop-shadow-[0_20px_35px_rgba(225,29,72,0.5)] dark:drop-shadow-[0_20px_35px_rgba(255,255,255,0.15)]"
                />
              </div>
            </div>

          </div>

        </div>
      </ScrollReveal>

      <ScrollReveal delayClass="delay-100" className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
          
          <TiltCard className="bg-gradient-to-br from-[#0F172A] via-[#1C0D1B] to-[#0D1527] dark:from-[#08080D] dark:via-[#12121A] dark:to-[#050508] p-5 rounded-2xl border-2 border-rose-500/50 dark:border-slate-800 shadow-md flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-rose-600/20 border border-rose-500/50 flex items-center justify-center text-rose-400 font-bold">
              📍
            </div>
            <div>
              <p className="text-[10px] font-black uppercase text-rose-300 font-mono">Location Base</p>
              <p className="text-xs font-black text-white">IT Del, Sumatera Utara</p>
            </div>
          </TiltCard>

          <TiltCard className="bg-gradient-to-br from-[#0F172A] via-[#1C0D1B] to-[#0D1527] dark:from-[#08080D] dark:via-[#12121A] dark:to-[#050508] p-5 rounded-2xl border-2 border-rose-500/50 dark:border-slate-800 shadow-md flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-600/20 border border-emerald-500/50 flex items-center justify-center text-emerald-400 font-bold">
              ⚡
            </div>
            <div>
              <p className="text-[10px] font-black uppercase text-emerald-300 font-mono">Response Rate</p>
              <p className="text-xs font-black text-white">&lt; 24 Hours Reply</p>
            </div>
          </TiltCard>

          <TiltCard className="bg-gradient-to-br from-[#0F172A] via-[#1C0D1B] to-[#0D1527] dark:from-[#08080D] dark:via-[#12121A] dark:to-[#050508] p-5 rounded-2xl border-2 border-rose-500/50 dark:border-slate-800 shadow-md flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/50 flex items-center justify-center text-blue-400 font-bold">
              🕷️
            </div>
            <div>
              <p className="text-[10px] font-black uppercase text-blue-300 font-mono">Spider-Senses Status</p>
              <p className="text-xs font-black text-white">Open for Projects</p>
            </div>
          </TiltCard>

        </div>
      </ScrollReveal>

    </main>
  );
}