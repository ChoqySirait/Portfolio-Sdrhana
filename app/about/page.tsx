import Link from 'next/link';
import ScrollReveal from '../components/ScrollReveal';
import TiltCard from '../components/TiltCard';
import TypewriterTitle from '../components/TypewriterTitle';
import SectionBadge from '../components/SectionBadge';

export default function AboutPage() {
  const techStacks = [
    { category: "Programming & Web", items: ["Java", "C", "JavaScript", "HTML5", "CSS3", "Next.js", "React", "Tailwind CSS", "Node"] },
    { category: "Design & Prototyping", items: ["Figma", "UI/UX Design", "Wireframing", "User Research", "Bizagi", "Adobe", "Capcut"] },
    { category: "Core Competencies", items: ["System Analysis", "Database Management", "Front-End", "BPMN"] },
  ];

  return (
    <main className="max-w-4xl mx-auto px-6 py-8 relative overflow-hidden">
      <div className="absolute top-10 left-0 w-96 h-96 bg-gradient-to-tr from-rose-600/20 via-blue-600/20 dark:via-slate-500/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10"></div>

      <ScrollReveal>
        <div className="mb-6">
          <SectionBadge label="- About Me" className="mb-3" />
          <h1 className="text-3xl sm:text-5xl font-black text-white mb-8 tracking-tight min-h-[50px]">
            <TypewriterTitle text="Education & Career Focus" />
          </h1>
        </div>
      </ScrollReveal>
      
      <ScrollReveal delayClass="delay-100">
        <TiltCard className="bg-gradient-to-br from-[#0F172A] via-[#1C0D1B] to-[#0D1527] dark:from-[#08080D] dark:via-[#12121A] dark:to-[#050508] p-8 sm:p-10 rounded-3xl border-2 border-rose-500/50 dark:border-slate-800 shadow-2xl space-y-6 relative overflow-hidden mb-10 group hover:border-blue-400 transition-all duration-300">
          <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-rose-600/20 to-blue-600/20 rounded-bl-full pointer-events-none"></div>

          <p className="text-slate-100 leading-relaxed text-base sm:text-lg font-bold">
            I am an Information Systems student at <span className="text-rose-400 font-black underline decoration-rose-500/50">Del Institute of Technology (IT Del)</span> focusing on Data Management, System Analysis, Software Engineering, User Interface/User Experience (UI/UX) Design, and Business Process Analysis.
          </p>
          
          <p className="text-slate-100 leading-relaxed text-base sm:text-lg font-bold">
            Currently a 5th-semester student, I possess a strong curiosity regarding modern technology trends, career exploration, and building impactful digital solutions for society.
          </p>

          <div className="pt-6 border-t border-rose-900/40 flex flex-wrap gap-4">
            <Link
              href="/portfolio"
              className="bg-gradient-to-r from-rose-600 via-red-600 to-rose-700 text-white font-black text-xs uppercase tracking-wider px-7 py-3.5 rounded-xl shadow-lg hover:-translate-y-0.5 active:scale-95 transition-all duration-200 border border-rose-400/30"
            >
              View Portfolio
            </Link>
            <Link
              href="/contact"
              className="bg-[#0E1628] hover:bg-slate-800 border-2 border-rose-500/60 text-white font-black text-xs uppercase tracking-wider px-7 py-3.5 rounded-xl hover:-translate-y-0.5 active:scale-95 transition-all duration-200 shadow-md"
            >
              Contact Me
            </Link>
          </div>
        </TiltCard>
      </ScrollReveal>

      <ScrollReveal delayClass="delay-200">
        <div className="space-y-6">
          <h2 className="text-2xl font-black text-white tracking-tight flex items-center gap-2">
            <span>Tech Stack &amp; Skills</span>
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {techStacks.map((stack, idx) => (
              <TiltCard key={idx} className="bg-gradient-to-br from-[#0F172A] via-[#1C0D1B] to-[#0D1527] dark:from-[#08080D] dark:via-[#12121A] dark:to-[#050508] p-6 rounded-2xl border-2 border-rose-500/50 dark:border-slate-800 shadow-xl hover:border-blue-400 transition-all duration-300">
                <h3 className="text-xs font-black uppercase tracking-wider text-rose-400 mb-4 font-mono">{stack.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {stack.items.map((item, i) => (
                    <span 
                      key={i} 
                      className="text-xs font-extrabold text-white bg-[#172033] px-3.5 py-1.5 rounded-lg border border-rose-500/30 transition-all duration-200 cursor-default"
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