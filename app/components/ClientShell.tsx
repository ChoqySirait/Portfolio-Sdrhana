'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import SpiderTerminal from './SpiderTerminal';
import { useTheme } from '../context/ThemeContext';

export default function ClientShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { theme, toggleTheme, mounted } = useTheme();
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [ripples, setRipples] = useState<Array<{ x: number; y: number; id: number }>>([]);

  const navItems = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { name: 'PORTFOLIO', path: '/portfolio' },
    { name: 'RESUME', path: '/resume' },
    { name: 'CERTIFICATIONS', path: '/certifications' },
    { name: 'CONTACT', path: '/contact' },
  ];

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

      {/* Header & Navbar */}
      <header className="sticky top-0 z-40 bg-[#F8F9FA]/80 dark:bg-[#090D1A]/80 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Logo Brand */}
          <Link href="/" className="text-xl font-black tracking-tighter text-slate-950 dark:text-white flex items-center gap-1 group">
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
                  className={`text-xs font-extrabold px-4 py-2 rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-rose-600 text-white shadow-md shadow-rose-600/25'
                      : 'text-slate-800 dark:text-slate-200 hover:text-rose-600 dark:hover:text-rose-400 hover:bg-rose-50/60 dark:hover:bg-slate-800/60'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}

            {/* Tombol Toggle Theme Safe Hydration */}
            <button
              onClick={toggleTheme}
              className="ml-2 p-2 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-amber-400 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer border border-slate-300 dark:border-slate-700"
              title={mounted ? `Switch to ${theme === 'light' ? 'Symbiote Dark' : 'Classic Light'} Mode` : 'Toggle Theme'}
              aria-label="Toggle Theme"
            >
              {!mounted ? (
                <div className="w-4 h-4" />
              ) : theme === 'light' ? (
                <svg className="w-4 h-4 text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg>
              ) : (
                <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
              )}
            </button>

            {/* Tombol Terminal Peter's Lab */}
            <button
              onClick={() => setIsTerminalOpen(true)}
              className="ml-2 bg-slate-950 hover:bg-rose-600 text-rose-400 hover:text-white font-mono text-xs font-extrabold px-3.5 py-2 rounded-xl transition-all duration-200 active:scale-95 flex items-center gap-1.5 shadow-sm border border-slate-800 cursor-pointer"
              title="Open Peter's Tech Lab Terminal"
            >
              <span>[&gt;_]</span>
            </button>
          </nav>

          {/* Navigasi Mobile */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-amber-400 border border-slate-300 dark:border-slate-700"
              aria-label="Toggle Theme Mobile"
            >
              {!mounted ? '🌙' : theme === 'light' ? '🌙' : '☀️'}
            </button>

            <button
              onClick={() => setIsTerminalOpen(true)}
              className="bg-slate-950 text-rose-400 font-mono text-xs font-bold px-3 py-2 rounded-xl border border-slate-800"
            >
              [&gt;_]
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-900 dark:text-white focus:outline-none"
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

        {/* Menu Dropdown Mobile */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-6 py-4 space-y-2 animate-in slide-in-from-top-2 duration-200">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block text-xs font-extrabold px-4 py-3 rounded-xl ${
                  pathname === item.path ? 'bg-rose-600 text-white' : 'text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </header>

      {/* Main Content */}
      <div className="flex-1">{children}</div>

      {/* Terminal Modal */}
      <SpiderTerminal isOpen={isTerminalOpen} onClose={() => setIsTerminalOpen(false)} />

    </div>
  );
}