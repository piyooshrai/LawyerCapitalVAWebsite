import type { Metadata } from 'next';
import { Cormorant_Garamond, Outfit } from 'next/font/google';
import './globals.css';
import ExcellenceAgent from '@/components/ui/ExcellenceAgent';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
});

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Lawyer Capital VA | Legal Virtual Assistants for Law Firms',
  description: 'Dedicated, NDA-protected virtual assistants for law firms. Handle client intake, document prep, case management, and billing so attorneys can focus on billable hours.',
  openGraph: {
    title: 'Lawyer Capital VA | Legal Virtual Assistants for Law Firms',
    description: 'Dedicated, NDA-protected virtual assistants for law firms.',
    url: 'https://lawyercapitalva.com',
    siteName: 'Lawyer Capital VA',
    images: [
      {
        url: 'https://lawyercapitalva.com/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lawyer Capital VA',
    description: 'Legal virtual assistants for law firms.',
    creator: '@LawyerCapitalVA',
  },
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${outfit.variable}`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://lawyercapitalva.com" />
      </head>
      <body className="font-sans">
        <Navigation />
        <main>{children}</main>
        <Footer />
        <ExcellenceAgent />
      </body>
    </html>
  );
}
