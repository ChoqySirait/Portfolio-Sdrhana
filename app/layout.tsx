import type { Metadata } from 'next';
import './globals.css';
import ClientShell from './components/ClientShell';
import { ThemeProvider } from './context/ThemeContext';

export const metadata: Metadata = {
  title: 'Choqy Pananda Sirait | Portfolio',
  description: 'Personal Portfolio of Choqy Pananda Sirait - Information Systems Student at IT Del & Cybersecurity Enthusiast',
  icons: {
    icon: '/icon.jpg',
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
      <body className="bg-[#F8F9FA] dark:bg-[#090D1A] text-slate-800 dark:text-slate-100 font-sans antialiased selection:bg-rose-600 selection:text-white flex flex-col min-h-screen bg-web-grid relative transition-colors duration-300">
        <ThemeProvider>
          <ClientShell>{children}</ClientShell>
        </ThemeProvider>
      </body>
    </html>
  );
}