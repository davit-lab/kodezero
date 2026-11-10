import type { Metadata } from 'next';
import './globals.css';
import './learning.css';
import './purple.css';
import './academy-tools.css';
import './fx.css';
import './learning-redesign.css';

export const metadata: Metadata = {
  title: 'Firstlight — ისწავლე პროგრამირება ქართულად',
  description: 'ინტერაქტიული ქართულენოვანი სასწავლო სივრცე HTML-ის, CSS-ისა და JavaScript-ის შესასწავლად.',
  icons: { icon: '/favicon.svg' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="ka"><body>{children}</body></html>;
}
