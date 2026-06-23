import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#121212', // Matches brand-dark roughly
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://heavyhaulers.vercel.app'),
  title: 'Heavy Haulers Moving Company | Professional Movers Las Cruces, NM',
  description: 'Las Cruces premier moving and hauling experts. Big jobs. Small jobs. We haul it all. Reliable residential, commercial, and junk removal services in NM.',
  keywords: ['Las Cruces Moving', 'NM Haulers', 'Heavy Haulers', 'Professional Movers Las Cruces', 'H-Hauler', 'Moving Company', 'Junk Removal', 'Labor Services'],
  authors: [{ name: 'Zachary McPherson' }],
  creator: 'Heavy Haulers Moving Company',
  openGraph: {
    title: 'Heavy Haulers Moving Company | Professional Movers Las Cruces, NM',
    description: 'Las Cruces premier moving and hauling experts. Fast, reliable, and affordable.',
    url: 'https://heavyhaulers.vercel.app',
    siteName: 'Heavy Haulers Moving Company',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Heavy Haulers Moving Company | Las Cruces',
    description: 'Big jobs. Small jobs. We haul it all. You relax. We haul.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
