'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import SpiderTerminal from './SpiderTerminal';

export default function ClientShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [ripples, setRipples] = useState<Array<{ x: number; y: number; id: number }>>([]);

  // Daftar menu navigasi lengkap termasuk Certifications
  const navItems = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { name: 'PORTFOLIO', path: '/portfolio' },
    { name: 'RESUME', path: '/resume' },
    { name: 'CERTIFICATIONS', path: '/certifications' },
    { name: 'CONTACT', path: '/contact' },
  ];

  // Blok kode ini untuk efek klik ripple di seluruh layar
  const handleGlobalClick = (e: React.MouseEvent) => {
    const newRipple = {
      x: e.clientX,
      y: e.clientY,
      id: Date.now(),
    };
    setRipples((prev) => [...prev, newRipple]);
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 500);
  };

  return (
    <div onClick={handleGlobalClick} className="min-h-screen flex flex-col justify-between relative">
      
      {/* Efek Klik Ripple */}
      {ripples.map((r) => (
        <span
          key={r.id}
          className="click-ripple"
          style={{ top: `${r.y}px`, left: `${r.x}px` }}
        />
      ))}

      {/* Header & Navbar Utama */}
      <header className="sticky top-0 z-40 bg-[#F8F9FA]/80 backdrop-blur-md border-b border-slate-200/60">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Logo Brand */}
          <Link href="/" className="text-xl font-black tracking-tighter text-slate-900 flex items-center gap-1 group">
            <span>CPS</span>
            <span className="w-2 h-2 rounded-full bg-rose-600 group-hover:scale-125 transition-transform"></span>
          </Link>

          {/* Navigasi Desktop */}
          <nav className="hidden md:flex items-center space-x-1 sm:space-x-2">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`text-xs font-bold px-4 py-2 rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-rose-600 text-white shadow-md shadow-rose-600/25'
                      : 'text-slate-600 hover:text-rose-600 hover:bg-rose-50/50'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}

            {/* Tombol Pemicu Terminal Spider-Man */}
            <button
              onClick={() => setIsTerminalOpen(true)}
              className="ml-3 bg-slate-900 hover:bg-rose-600 text-rose-400 hover:text-white font-mono text-xs font-bold px-3.5 py-2 rounded-xl transition-all duration-200 active:scale-95 flex items-center gap-1.5 shadow-sm border border-slate-800 cursor-pointer"
              title="Open Peter's Tech Lab Terminal"
            >
              <span>[&gt;_]</span>
            </button>
          </nav>

          {/* Tombol Mobile Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setIsTerminalOpen(true)}
              className="bg-slate-900 text-rose-400 font-mono text-xs font-bold px-3 py-2 rounded-xl border border-slate-800"
            >
              [&gt;_]
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-800 focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>

        </div>

        {/* Menu Navigasi Mobile Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-6 py-4 space-y-2 animate-in slide-in-from-top-2 duration-200">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block text-xs font-bold px-4 py-3 rounded-xl ${
                  pathname === item.path ? 'bg-rose-600 text-white' : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </header>

      {/* Konten Halaman */}
      <div className="flex-1">{children}</div>

      {/* Modal Terminal Spider-Man */}
      <SpiderTerminal isOpen={isTerminalOpen} onClose={() => setIsTerminalOpen(false)} />

    </div>
  );
}