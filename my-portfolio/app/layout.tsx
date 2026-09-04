'use client';

import './globals.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

interface Ripple {
  id: number;
  x: number;
  y: number;
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [ripples, setRipples] = useState<Ripple[]>([]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const newRipple: Ripple = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
      };

      setRipples((prev) => [...prev, newRipple]);

      // Hapus gelembung setelah animasi selesai (500ms)
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
      }, 500);
    };

    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);

  const navItems = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { name: 'PORTFOLIO', path: '/portfolio' },
    { name: 'RESUME', path: '/resume' },
    { name: 'CONTACT', path: '/contact' },
  ];

  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <title>Choqy Pananda Sirait - Portfolio</title>
        <meta name="description" content="Information System Student At IT Del" />
      </head>
      <body className="bg-[#F8F9FA] text-slate-800 font-sans antialiased selection:bg-rose-600 selection:text-white flex flex-col min-h-screen bg-web-grid relative">
        
        {/* Render Efek Gelembung / Ripple saat Diklik */}
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

        {/* Navbar Global */}
        <header className="fixed top-0 left-0 right-0 bg-[#F8F9FA]/85 backdrop-blur-md z-40 border-b border-slate-200/60 transition-all duration-300">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            
            <Link 
              href="/" 
              className="font-black text-xl tracking-wider text-slate-900 hover:opacity-80 transition-all duration-200 active:scale-95 flex items-center gap-1 group"
            >
              <span>CP</span>
              <span className="w-2 h-2 rounded-full bg-rose-600 group-hover:scale-150 transition-transform"></span>
            </Link>

            <nav className="flex space-x-1 sm:space-x-2">
              {navItems.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <Link
                    key={item.name}
                    href={item.path}
                    className={`text-xs sm:text-sm font-bold tracking-wider px-3.5 py-1.5 rounded-full transition-all duration-200 active:scale-95 ${
                      isActive
                        ? 'bg-rose-600 text-white shadow-md shadow-rose-600/20'
                        : 'text-slate-600 hover:text-rose-600 hover:bg-rose-50/80'
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </nav>
          </div>
        </header>

        {/* Content Area dengan Transisi Mulus */}
        <div className="flex-grow pt-24 pb-12 animate-page-entry">
          {children}
        </div>

        {/* Footer Global */}
        <footer className="border-t border-slate-200/60 py-8 text-center text-xs font-semibold text-slate-400 bg-white/40 backdrop-blur-sm mt-auto">
          &copy; {new Date().getFullYear()} Choqy Pananda Sirait. System Analyst &amp; Web Developer.
        </footer>

      </body>
    </html>
  );
}