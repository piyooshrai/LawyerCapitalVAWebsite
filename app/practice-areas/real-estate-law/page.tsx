import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'Real Estate Law Virtual Assistant', description: 'Transaction coordination, closing document prep, title research, and escrow management.' };

export default function RealEstatePage() {
  return <main className="pt-32 bg-ivory min-h-screen"><article className="max-w-4xl mx-auto px-16 py-20"><h1 className="font-serif text-6xl text-charcoal mb-8">Real Estate Law Virtual Assistant</h1><p className="text-lg text-text-mid font-300 mb-12">Transactions require precision. Our VAs coordinate closings, prepare documents, manage title research, and track escrow timelines so transactions close on time.</p><section className="mb-16"><h2 className="font-serif text-3xl text-charcoal mb-6">VA Support for Real Estate</h2><ul className="space-y-3">{['Transaction coordination and tracking', 'Closing document preparation', 'Title research and abstraction', 'Escrow account management', 'Deed and survey management', 'Mortgage and lien tracking', 'HOA document collection', 'Closing checklist management'].map(t => <li key={t} className="flex gap-3"><span className="text-brass font-700">→</span><span className="text-base text-text-mid font-300">{t}</span></li>)}</ul></section><Link href="/contact" className="inline-block px-8 py-3 bg-brass text-white text-xs font-600 tracking-wider uppercase hover:bg-brass-light transition-all">Schedule Consultation</Link></article></main>;
}
