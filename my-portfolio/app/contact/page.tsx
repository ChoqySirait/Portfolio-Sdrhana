export default function ContactPage() {
  const email = "choqypenandasirait@gmail.com";
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;

  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-14 shadow-2xl text-center relative overflow-hidden group">
        
        {/* Glow Effect */}
        <div className="absolute -top-24 -right-24 w-60 h-60 bg-rose-600/20 rounded-full blur-3xl group-hover:bg-rose-600/30 transition-all duration-500"></div>

        <span className="text-xs font-bold uppercase tracking-widest text-rose-400 block mb-3">
          CONTACT
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-4">Mari Berdiskusi &amp; Bekerja Sama</h1>
        <p className="text-slate-400 text-sm max-w-md mx-auto mb-8 leading-relaxed">
          Terbuka untuk proyek kolaborasi, diskusi , maupun peluang karir
        </p>

        {/* Tautan Langsung Buka Tab Gmail Web */}
        <a
          href={gmailUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-rose-600 hover:bg-rose-700 text-white font-semibold text-sm px-8 py-3.5 rounded-md shadow-lg shadow-rose-600/30 hover:-translate-y-1 active:scale-95 transition-all duration-200"
        >
          Kirim Pesan Email
        </a>
      </div>
    </main>
  );
}