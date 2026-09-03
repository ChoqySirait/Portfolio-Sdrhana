import ProjectCard from './components/ProjectCard';

// Menentukan struktur objek proyek
interface ProjectItem {
  id: number;
  title: string;
  category: string;
  description: string;
  tags: string[];
}

export default function Home() {
  const myProjects: ProjectItem[] = [
    {
      id: 1,
      title: "Sistem Manajemen Kasir & Audit",
      category: "Fullstack App",
      description: "Aplikasi pencatatan pesanan dan pelacakan aktivitas transaksi kasir secara terintegrasi.",
      tags: ["React", "Node.js", "Tailwind CSS"],
    },
    {
      id: 2,
      title: "Platform Layanan Wisata Toba",
      category: "UI/UX & Web",
      description: "Desain dan antarmuka web untuk pemesanan paket wisata daerah Samosir dan Danau Toba.",
      tags: ["Next.js", "Figma", "Tailwind CSS"],
    },
    {
      id: 3,
      title: "Aplikasi To-Do List Interaktif",
      category: "Frontend App",
      description: "Manajemen tugas harian berbasis web dengan fitur penyaringan dan penyimpanan lokal.",
      tags: ["React", "JavaScript"],
    }
  ];

  return (
    <main className="min-h-screen bg-slate-900 text-slate-100 p-8 font-sans">
      <div className="max-w-5xl mx-auto">
        <header className="mb-10 text-center">
          <h1 className="text-3xl font-extrabold text-white sm:text-4xl">Portofolio Proyek</h1>
          <p className="text-slate-400 mt-2">Daftar aplikasi dan karya yang telah dikembangkan.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {myProjects.map((project: ProjectItem) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              category={project.category}
              description={project.description}
              tags={project.tags}
            />
          ))}
        </div>
      </div>
    </main>
  );
}