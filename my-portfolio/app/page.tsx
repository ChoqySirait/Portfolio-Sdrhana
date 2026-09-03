import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="max-w-6xl mx-auto px-6">
      <section className="min-h-[85vh] grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-12 overflow-hidden">
        
        {/* Sisi Kiri: Teks Hero Utama */}
        <div className="lg:col-span-7 flex flex-col justify-center items-start">
          <div className="flex items-center space-x-3 mb-4">
            <span className="w-8 h-0.5 bg-rose-600"></span>
            <span className="text-xs font-bold uppercase tracking-widest text-rose-600">
              HELLO
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-slate-900 leading-tight mb-4">
            I&apos;m <span className="text-rose-600 hover:underline decoration-rose-300 decoration-wavy transition-all">Choqy Pananda</span> Sirait
          </h1>

          <p className="text-slate-600 text-base sm:text-lg font-medium leading-relaxed mb-8 max-w-xl">
            Information System Student At IT Del. Focused on web development, system analysis, and building modern digital experiences.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#[LINK_DOWNLOAD_CV_KAMU]"
              className="bg-rose-600 hover:bg-rose-700 text-white font-semibold text-sm px-8 py-3.5 rounded-md shadow-lg shadow-rose-600/20 hover:shadow-rose-600/40 transition-all duration-200 hover:-translate-y-1 active:scale-95"
            >
              DOWNLOAD CV
            </a>
            <Link
              href="/contact"
              className="border border-slate-300 hover:border-slate-800 text-slate-700 hover:text-slate-900 font-semibold text-sm px-8 py-3.5 rounded-md transition-all duration-200 hover:-translate-y-1 active:scale-95"
            >
              CONTACT ME
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-6 mt-12 text-slate-400 text-sm font-semibold tracking-wider">
            <a href="https://github.com/ChoqySirait" target="_blank" rel="noreferrer" className="hover:text-rose-600 hover:scale-105 transition-all duration-200">GITHUB</a>
            <span>•</span>
            <a href="https://www.linkedin.com/in/choqypanandasirait" target="_blank" rel="noreferrer" className="hover:text-rose-600 hover:scale-105 transition-all duration-200">LINKEDIN</a>
            <span>•</span>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=choqypenandasirait@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-rose-600 hover:scale-105 transition-all duration-200"
>
  EMAIL
</a>
          </div>
        </div>

        {/* Sisi Kanan: Spider-Man Ditinggikan (Dinaikkan Posisi Atasnya) */}
        <div className="lg:col-span-5 flex justify-center items-start relative -mt-8 sm:-mt-45">
          <div className="relative w-72 sm:w-80 h-[380px] flex justify-center items-start group">
            
            {/* Pendar Merah di Belakang */}
            <div className="absolute inset-0 bg-rose-500/10 rounded-full blur-3xl group-hover:bg-rose-500/25 transition-all duration-500"></div>

            {/* Container Animasi Spider-Man */}
            <div className="animate-spiderman">
              <img
                src="/Spiderman.png"
                alt="Spider-Man"
                className="w-full max-w-[280px] sm:max-w-[300px] h-auto object-contain hover:scale-105 active:scale-95 transition-transform duration-300 cursor-pointer drop-shadow-2xl"
              />
            </div>

          </div>
        </div>

      </section>
    </main>
  );
}