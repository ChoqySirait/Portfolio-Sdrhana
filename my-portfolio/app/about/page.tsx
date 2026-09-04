import Link from 'next/link';

export default function AboutPage() {
  const techStacks = [
    { category: "Programming & Web", items: ["Java", "C", "JavaScript", "HTML5", "CSS3", "Next.js", "React", "Tailwind CSS", "Node"] },
    { category: "Design & Prototyping", items: ["Figma", "UI/UX Design", "Wireframing", "User Research", "Bizagi", "Adobe", "Capcut"] },
    { category: "Core Competencies", items: ["System Analysis", "Database Management", "Front-End", "BPMN"] },
  ];

  return (
    <main className="max-w-4xl mx-auto px-6 py-8">
      <div className="flex items-center space-x-3 mb-3">
        <span className="w-8 h-0.5 bg-rose-600"></span>
        <span className="text-xs font-bold uppercase tracking-widest text-rose-600">
          ABOUT ME
        </span>
      </div>

      <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-8 tracking-tight">
        Pendidikan &amp; Fokus Karir
      </h1>
      
      {/* Profil Ringkas */}
      <div className="bg-white/80 backdrop-blur-md p-8 sm:p-10 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-rose-200 transition-all duration-300 space-y-6 relative overflow-hidden mb-10 group">
        <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/5 rounded-bl-full pointer-events-none"></div>

        <p className="text-slate-600 leading-relaxed text-base sm:text-lg font-medium">
          Saya adalah mahasiswa Sistem Informasi di <span className="text-slate-900 font-bold">Institut Teknologi Del</span> yang berfokus pada Manajemen data, Analisis sistem, Pemrograman, Perancangan antarmuka pengguna (UI/UX), dan Analisis Business.
        </p>
        
        <p className="text-slate-600 leading-relaxed text-base sm:text-lg font-medium">
          Saat ini saya adalah mahasiswa semester 5 yang memiliki rasa keingintahuan tinggi terkait perkembangan teknologi terkini, eksplorasi peluang karir, dan pengembangan solusi digital yang relevan bagi masyarakat.
        </p>

        <div className="pt-6 border-t border-slate-100 flex flex-wrap gap-4">
          <Link
            href="/portfolio"
            className="bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-md hover:-translate-y-0.5 active:scale-95 transition-all duration-200"
          >
            Lihat Portfolio
          </Link>
          <Link
            href="/contact"
            className="border-2 border-slate-200 hover:border-slate-800 text-slate-700 font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl hover:-translate-y-0.5 active:scale-95 transition-all duration-200"
          >
            Hubungi Saya
          </Link>
        </div>
      </div>

      {/* Tech Stack & Skills Section */}
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
          <span>Tech Stack &amp; Keahlian</span>
          <span className="w-2 h-2 rounded-full bg-rose-600"></span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {techStacks.map((stack, idx) => (
            <div key={idx} className="bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-slate-200/80 shadow-xs hover:border-rose-300 transition-all">
              <h3 className="text-xs font-bold uppercase tracking-wider text-rose-600 mb-4">{stack.category}</h3>
              <div className="flex flex-wrap gap-2">
                {stack.items.map((item, i) => (
                  <span key={i} className="text-xs font-semibold text-slate-700 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200/50">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}