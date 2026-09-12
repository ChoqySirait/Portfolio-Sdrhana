'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

interface Ripple {
  id: number;
  x: number;
  y: number;
}

const navItems = [
  { name: 'HOME', path: '/' },
  { name: 'ABOUT', path: '/about' },
  { name: 'PORTFOLIO', path: '/portfolio' },
  { name: 'RESUME', path: '/resume' },
  { name: 'CONTACT', path: '/contact' },
];

export default function ClientShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const newRipple: Ripple = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
      };

      setRipples((prev) => [...prev, newRipple]);

      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
      }, 500);
    };

    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);

  return (
    <>
      {/* Render Efek Gelembung / Ripple */}
      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className="click-ripple"
          style={{ left: `${ripple.x}px`, top: `${ripple.y}px` }}
        />
      ))}

      {/* Ambient Glows Spider-Man Halus */}
      <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-rose-500/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      <div className="fixed bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      {/* Navbar Global Floating Glassmorphism */}
      <header className="fixed top-0 left-0 right-0 bg-[#F8F9FA]/90 backdrop-blur-xl z-40 border-b border-rose-500/10 shadow-md shadow-slate-200/60 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link 
            href="/" 
            className="font-black text-xl tracking-wider text-slate-900 hover:opacity-80 transition-all duration-200 active:scale-95 flex items-center gap-1 group"
          >
            <span>CPS</span>
            <span className="w-2 h-2 rounded-full bg-rose-600 group-hover:scale-150 transition-transform"></span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-1 sm:space-x-2">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`text-xs sm:text-sm font-bold tracking-wider px-3.5 py-1.5 rounded-full transition-all duration-200 active:scale-95 ${
                    isActive
                      ? 'bg-rose-600 text-white shadow-md shadow-rose-600/30'
                      : 'text-slate-600 hover:text-rose-600 hover:bg-rose-50/80'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-slate-800 hover:text-rose-600 hover:bg-rose-50 focus:outline-none transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Drawer Menu Mobile */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-2xl border-b border-rose-100 px-6 py-4 shadow-xl animate-in fade-in slide-in-from-top-4 duration-200">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <Link
                    key={item.name}
                    href={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-xs font-bold tracking-wider px-4 py-3 rounded-xl transition-all ${
                      isActive
                        ? 'bg-rose-600 text-white shadow-md shadow-rose-600/30'
                        : 'text-slate-700 hover:bg-rose-50 hover:text-rose-600'
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </nav>
          </div>
        )}
      </header>

      {/* Content Area */}
      <div className="flex-grow pt-28 pb-12 animate-page-entry">
        {children}
      </div>

      {/* Footer Global */}
      <footer className="border-t border-slate-200/60 py-8 text-center text-xs font-semibold text-slate-400 bg-white/40 backdrop-blur-sm mt-auto">
        &copy; {new Date().getFullYear()} Choqy Pananda Sirait.
      </footer>
    </>
  );
}