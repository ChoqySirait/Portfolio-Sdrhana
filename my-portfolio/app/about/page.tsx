import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <div className="flex items-center space-x-3 mb-3">
        <span className="w-8 h-0.5 bg-rose-600"></span>
        <span className="text-xs font-bold uppercase tracking-widest text-rose-600">
          ABOUT ME
        </span>
      </div>

      <h1 className="text-4xl font-extrabold text-slate-900 mb-8">
        Pendidikan &amp; Fokus Karir
      </h1>
      
      <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-rose-200 transition-all duration-300 space-y-5">
        <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
          Saya adalah mahasiswa Sistem Informasi di Institut Teknologi Del yang berfokus pada pengembangan perangkat lunak modern, analisis sistem, dan perancangan antarmuka pengguna.
        </p>
        <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
          [MASUKKAN_DESKRIPSI_TAMBAHAN_TENTANG_DIRIMU_DI_SINI]
        </p>

        <div className="pt-6 border-t border-slate-100 flex flex-wrap gap-4">
          <Link
            href="/portfolio"
            className="bg-rose-600 hover:bg-rose-700 text-white font-semibold text-xs px-6 py-3 rounded-md shadow-md hover:-translate-y-0.5 active:scale-95 transition-all duration-200"
          >
            Lihat Portfolio &rarr;
          </Link>
          <Link
            href="/contact"
            className="border border-slate-300 hover:border-slate-800 text-slate-700 font-semibold text-xs px-6 py-3 rounded-md hover:-translate-y-0.5 active:scale-95 transition-all duration-200"
          >
            Hubungi Saya
          </Link>
        </div>
      </div>
    </main>
  );
}