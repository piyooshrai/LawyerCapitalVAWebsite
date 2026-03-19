import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'Intellectual Property Virtual Assistant', description: 'Patent prosecution support, trademark filing, licensing agreements, and IP portfolio tracking.' };

export default function IPPage() {
  return <main className="pt-32 bg-ivory min-h-screen"><article className="max-w-4xl mx-auto px-16 py-20"><h1 className="font-serif text-6xl text-charcoal mb-8">Intellectual Property Virtual Assistant</h1><p className="text-lg text-text-mid font-300 mb-12">Patents and trademarks require precision deadline management. Our VAs track applications, manage prosecution, and organize IP portfolios.</p><section className="mb-16"><h2 className="font-serif text-3xl text-charcoal mb-6">VA Support for IP Practice</h2><ul className="space-y-3">{['Patent application tracking and deadline management', 'Trademark filing coordination', 'Office action response organization', 'Licensing agreement management', 'IP portfolio maintenance', 'Invention disclosure processing', 'Prosecution communication tracking', 'Renewal deadline monitoring'].map(t => <li key={t} className="flex gap-3"><span className="text-brass font-700">→</span><span className="text-base text-text-mid font-300">{t}</span></li>)}</ul></section><Link href="/contact" className="inline-block px-8 py-3 bg-brass text-white text-xs font-600 tracking-wider uppercase hover:bg-brass-light transition-all">Schedule Consultation</Link></article></main>;
}
