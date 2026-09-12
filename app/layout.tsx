import type { Metadata } from 'next';
import './globals.css';
import ClientShell from './components/ClientShell'; // Sesuaikan path folder jika kamu menaruhnya di tempat lain

export const metadata: Metadata = {
  title: 'Choqy Pananda Sirait | Portfolio',
  description: 'Personal Portfolio of Choqy Pananda Sirait - Information Systems Student at IT Del & Cybersecurity Enthusiast',
  icons: {
    icon: '/icon.jpg', // Otomatis memakai logo Spider-Man kamu!
  },
  openGraph: {
    title: 'Choqy Pananda Sirait | Portfolio',
    description: 'Personal Portfolio of Choqy Pananda Sirait - Information Systems Student at IT Del',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="bg-[#F8F9FA] text-slate-800 font-sans antialiased selection:bg-rose-600 selection:text-white flex flex-col min-h-screen bg-web-grid relative">
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}