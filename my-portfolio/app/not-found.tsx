import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="max-w-4xl mx-auto px-6 min-h-[65vh] flex flex-col items-center justify-center text-center">
      <div className="relative mb-6">
        <span className="text-8xl sm:text-9xl font-black text-rose-600/20 font-mono select-none">
          404
        </span>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xl sm:text-2xl font-extrabold text-slate-900 bg-white/80 backdrop-blur-md px-6 py-2 rounded-2xl border border-rose-200 shadow-lg">
            Sinyal Terputus di Multiverse!
          </span>
        </div>
      </div>

      <p className="text-slate-600 text-sm sm:text-base font-medium max-w-md mb-8 leading-relaxed">
        Halaman yang kamu cari tidak ditemukan atau telah berpindah dimensi. Silakan kembali ke jalur utama.
      </p>

      <Link
        href="/"
        className="bg-rose-600 hover:bg-rose-700 text-white font-extrabold text-xs uppercase tracking-wider px-8 py-4 rounded-xl shadow-lg shadow-rose-600/25 hover:shadow-rose-600/40 transition-all duration-300 hover:-translate-y-1 active:scale-95 flex items-center gap-2"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        <span>Kembali ke Beranda</span>
      </Link>
    </main>
  );
}