'use client';

import React, { useState, useEffect } from 'react';
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

  // Posisi Custom Cursor Ring
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [cursorVisible, setCursorVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
      if (!cursorVisible) setCursorVisible(true);
    };

    const handleMouseLeave = () => setCursorVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [cursorVisible]);

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
    <div onClick={handleGlobalClick} className="min-h-screen flex flex-col justify-between relative overflow-x-hidden bg-web-grid">
      
      {/* Interactive Custom Cursor Following Ring (Spider-Sense Circle) */}
      {cursorVisible && (
        <div
          className="pointer-events-none fixed z-50 rounded-full border-2 border-rose-500/80 dark:border-slate-300/80 bg-rose-500/10 dark:bg-slate-300/10 transition-transform duration-75 ease-out shadow-lg shadow-rose-500/20 hidden md:block"
          style={{
            width: '38px',
            height: '38px',
            left: `${cursorPos.x}px`,
            top: `${cursorPos.y}px`,
            transform: 'translate(-50%, -50%)',
          }}
        />
      )}

      {/* Efek Klik Ripple */}
      {ripples.map((r) => (
        <span
          key={r.id}
          className="click-ripple"
          style={{ top: `${r.y}px`, left: `${r.x}px` }}
        />
      ))}

      {/* Header & Navbar */}
      <header className="sticky top-0 z-40 bg-[#0B1120]/90 dark:bg-[#050508]/90 backdrop-blur-md border-b border-rose-900/30 dark:border-slate-800/80 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Logo Brand */}
          <Link href="/" className="text-xl font-black tracking-tighter text-white flex items-center gap-1 group">
            <span>CPS</span>
            <span className="w-2 h-2 rounded-full bg-rose-600 dark:bg-slate-300 group-hover:scale-125 transition-transform"></span>
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
                      ? 'bg-rose-600 dark:bg-slate-800 text-white border border-rose-500/50 dark:border-slate-700 shadow-md shadow-rose-600/30'
                      : 'text-slate-200 hover:text-rose-400 dark:hover:text-slate-200 hover:bg-slate-800/60'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}

            {/* Tombol Toggle Theme Clear Icon Guard */}
            <button
              onClick={toggleTheme}
              className="ml-2 p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-amber-400 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer border border-slate-700 shadow-xs flex items-center justify-center w-9 h-9"
              title={mounted ? `Switch to ${theme === 'light' ? 'Symbiote Dark' : 'Classic Suit'} Mode` : 'Toggle Theme'}
              aria-label="Toggle Theme"
            >
              {!mounted ? (
                <div className="w-4 h-4" />
              ) : theme === 'light' ? (
                <svg className="w-4 h-4 text-rose-400 fill-rose-400" viewBox="0 0 24 24"><path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"/></svg>
              ) : (
                <svg className="w-4 h-4 text-amber-400 fill-amber-400" viewBox="0 0 24 24"><path d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"/></svg>
              )}
            </button>

            {/* Tombol Terminal */}
            <button
              onClick={() => setIsTerminalOpen(true)}
              className="ml-2 bg-slate-950 hover:bg-rose-600 dark:hover:bg-slate-800 text-rose-400 dark:text-slate-300 hover:text-white font-mono text-xs font-extrabold px-3.5 py-2 rounded-xl transition-all duration-200 active:scale-95 flex items-center gap-1.5 border border-rose-900/50 dark:border-slate-800 cursor-pointer animate-terminal-pulse"
              title="Open Peter's Tech Lab Terminal"
            >
              <span>[&gt;_]</span>
            </button>
          </nav>

          {/* Mobile Menu Nav */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-slate-800 text-amber-400 border border-slate-700"
              aria-label="Toggle Theme Mobile"
            >
              {!mounted ? '🌙' : theme === 'light' ? '☀️' : '🌙'}
            </button>

            <button
              onClick={() => setIsTerminalOpen(true)}
              className="bg-slate-950 text-rose-400 dark:text-slate-300 font-mono text-xs font-bold px-3 py-2 rounded-xl border border-rose-900/50 dark:border-slate-800"
            >
              [&gt;_]
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-white focus:outline-none"
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

        {/* Mobile Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-slate-900 dark:bg-[#0A0A10] border-b border-slate-800 px-6 py-4 space-y-2 animate-in slide-in-from-top-2 duration-200">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block text-xs font-extrabold px-4 py-3 rounded-xl ${
                  pathname === item.path ? 'bg-rose-600 dark:bg-slate-800 text-white' : 'text-slate-200 hover:bg-slate-800'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </header>

      {/* Content Container */}
      <div className="flex-1 w-full">{children}</div>

      {/* Terminal */}
      <SpiderTerminal isOpen={isTerminalOpen} onClose={() => setIsTerminalOpen(false)} />

    </div>
  );
}