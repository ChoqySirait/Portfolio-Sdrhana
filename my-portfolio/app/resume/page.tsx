export default function ResumePage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <div className="mb-12">
        <div className="flex items-center space-x-3 mb-3">
          <span className="w-8 h-0.5 bg-rose-600"></span>
          <span className="text-xs font-bold uppercase tracking-widest text-rose-600">
            RESUME
          </span>
        </div>
        <h1 className="text-4xl font-extrabold text-slate-900">Pendidikan &amp; Pengalaman</h1>
      </div>

      <div className="space-y-8">
        <div className="p-8 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-rose-200 transition-all duration-300">
          <span className="text-xs font-bold text-rose-600 font-mono bg-rose-50 px-3 py-1 rounded-full">
            [TAHUN_MASUK - SEKARANG]
          </span>
          <h2 className="text-xl font-bold text-slate-900 mt-4">S1 Sistem Informasi</h2>
          <p className="text-slate-600 text-sm font-semibold mt-1">Institut Teknologi Del</p>
          <p className="text-slate-500 text-xs mt-3 leading-relaxed">
            [TULISKAN_PENCAPAIAN_KURSUS_ATAU_KEGIATAN_ORGANISASI_DI_SINI]
          </p>
        </div>
      </div>
    </main>
  );
}