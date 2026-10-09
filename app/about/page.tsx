import Link from 'next/link';
import ScrollReveal from '../components/ScrollReveal';
import TiltCard from '../components/TiltCard';

export default function AboutPage() {
  const techStacks = [
    { category: "Programming & Web", items: ["Java", "C", "JavaScript", "HTML5", "CSS3", "Next.js", "React", "Tailwind CSS", "Node"] },
    { category: "Design & Prototyping", items: ["Figma", "UI/UX Design", "Wireframing", "User Research", "Bizagi", "Adobe", "Capcut"] },
    { category: "Core Competencies", items: ["System Analysis", "Database Management", "Front-End", "BPMN"] },
  ];

  return (
    <main className="max-w-4xl mx-auto px-6 py-8 relative">
      <div className="absolute top-10 left-0 w-72 h-72 bg-rose-500/10 dark:bg-rose-600/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

      {/* Header Section */}
      <ScrollReveal>
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 bg-rose-500/10 dark:bg-rose-500/20 border border-rose-500/30 px-3.5 py-1.5 rounded-full mb-3">
            <span className="w-2 h-2 rounded-full bg-rose-600"></span>
            <span className="text-[10px] font-black uppercase tracking-widest text-rose-700 dark:text-rose-400 font-mono">
              [PROFILE // BACKGROUND]
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-slate-950 dark:text-white mb-8 tracking-tight">
            Education &amp; Career Focus
          </h1>
        </div>
      </ScrollReveal>
      
      {/* Profil Ringkas */}
      <ScrollReveal delayClass="delay-100">
        <TiltCard className="bg-white/95 dark:bg-slate-900/90 backdrop-blur-md p-8 sm:p-10 rounded-3xl border border-slate-300 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-rose-400 dark:hover:border-rose-900 transition-all duration-300 space-y-6 relative overflow-hidden mb-10 group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/10 rounded-bl-full pointer-events-none"></div>

          <p className="text-slate-900 dark:text-slate-200 leading-relaxed text-base sm:text-lg font-bold">
            I am an Information Systems student at <span className="text-rose-600 dark:text-rose-400 font-black">Del Institute of Technology (IT Del)</span> focusing on Data Management, System Analysis, Software Engineering, User Interface/User Experience (UI/UX) Design, and Business Process Analysis.
          </p>
          
          <p className="text-slate-900 dark:text-slate-200 leading-relaxed text-base sm:text-lg font-bold">
            Currently a 5th-semester student, I possess a strong curiosity regarding modern technology trends, career exploration, and building impactful digital solutions for society.
          </p>

          <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-wrap gap-4">
            <Link
              href="/portfolio"
              className="bg-rose-600 hover:bg-rose-700 text-white font-black text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-md hover:-translate-y-0.5 active:scale-95 transition-all duration-200"
            >
              View Portfolio
            </Link>
            <Link
              href="/contact"
              className="border-2 border-slate-400 dark:border-slate-700 hover:border-slate-950 dark:hover:border-white text-slate-950 dark:text-slate-100 font-black text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl hover:-translate-y-0.5 active:scale-95 transition-all duration-200 bg-white/80 dark:bg-slate-800/80"
            >
              Contact Me
            </Link>
          </div>
        </TiltCard>
      </ScrollReveal>

      {/* Tech Stack & Skills */}
      <ScrollReveal delayClass="delay-200">
        <div className="space-y-6">
          <h2 className="text-xl font-black text-slate-950 dark:text-white tracking-tight flex items-center gap-2">
            <span>Tech Stack &amp; Skills</span>
            <span className="w-2 h-2 rounded-full bg-rose-600"></span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {techStacks.map((stack, idx) => (
              <TiltCard key={idx} className="bg-white/95 dark:bg-slate-900/90 backdrop-blur-md p-6 rounded-2xl border border-slate-300 dark:border-slate-800 shadow-xs hover:border-rose-400 dark:hover:border-rose-800 transition-all">
                <h3 className="text-xs font-black uppercase tracking-wider text-rose-600 dark:text-rose-400 mb-4 font-mono">{stack.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {stack.items.map((item, i) => (
                    <span 
                      key={i} 
                      className="text-xs font-extrabold text-slate-950 dark:text-slate-100 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 hover:border-rose-500 hover:text-rose-600 dark:hover:text-rose-400 hover:-translate-y-0.5 transition-all duration-200 cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </main>
  );
}