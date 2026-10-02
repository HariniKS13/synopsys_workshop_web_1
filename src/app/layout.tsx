import type { Metadata } from 'next';
import './globals.css';
import ScrollObserver from '@/components/ScrollObserver';
import ScrollProgress from '@/components/ScrollProgress';

export const metadata: Metadata = {
  title: '1-Credit Industry-Oriented Hands-On Training on VLSI Front-End Design Using Synopsys EDA Tools | Sri Shakthi Institute of Engineering and Technology',
  description: '1-Credit Industry-Oriented Hands-On Training on VLSI Front-End Design Using Synopsys EDA Tools at Sri Shakthi Institute of Engineering and Technology, Dept of EE (VDT). October 23 & 24, 2026. 30 Dedicated 1:1 CAD Workstations.',
  keywords: [
    'VLSI Workshop',
    'Synopsys EDA',
    'Sri Shakthi Institute of Engineering and Technology',
    'Design Compiler',
    'Synopsys VCS',
    'Verdi Waveform',
    'SpyGlass CDC',
    'Front-End VLSI Design',
    'MeitY C2S'
  ],
  authors: [{ name: 'Sri Shakthi Institute of Engineering and Technology' }],
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased selection:bg-purple-100 selection:text-purple-900 bg-white text-slate-900 min-h-screen">
        <ScrollProgress />
        <ScrollObserver />
        {children}
      </body>
    </html>
  );
}
