import type { Metadata } from 'next';
import './globals.css';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Choqy Pananda Sirait - Portfolio',
  description: 'Information System Student At IT Del',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navItems = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { name: 'PORTFOLIO', path: '/portfolio' },
    { name: 'RESUME', path: '/resume' },
    { name: 'CONTACT', path: '/contact' },
  ];

  return (
    <html lang="id" className="scroll-smooth">
      <body className="bg-[#F8F9FA] text-slate-800 font-sans antialiased selection:bg-rose-500 selection:text-white flex flex-col min-h-screen">
        
        {/* Navbar Multi-Page Global */}
        <header className="fixed top-0 left-0 right-0 bg-[#F8F9FA]/90 backdrop-blur-md z-50 border-b border-slate-200/80 transition-all duration-300">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            
            {/* Logo Inisial */}
            <Link 
              href="/" 
              className="font-extrabold text-xl tracking-tight text-slate-900 hover:opacity-80 transition-all duration-200 active:scale-95"
            >
              CP<span className="text-rose-600">.</span>
            </Link>

            {/* Navigasi Pindah Halaman dengan Micro-Animation */}
            <nav className="flex space-x-1 sm:space-x-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className="text-xs sm:text-sm font-semibold tracking-wide text-slate-600 hover:text-rose-600 px-3 py-1.5 rounded-full hover:bg-rose-50 transition-all duration-200 active:scale-95"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </header>

        {/* Area Halaman Aktif */}
        <div className="flex-grow pt-20">
          {children}
        </div>

        {/* Footer Global */}
        <footer className="border-t border-slate-200 py-8 text-center text-xs text-slate-500 bg-white/50 mt-auto">
          &copy; {new Date().getFullYear()} Choqy Pananda Sirait.
        </footer>

      </body>
    </html>
  );
}