import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'PracticePanther VA Support', description: 'Virtual assistant integration with PracticePanther practice management.' };

export default function PPPage() {
  return <main className="pt-32 bg-ivory min-h-screen"><article className="max-w-4xl mx-auto px-16 py-20"><h1 className="font-serif text-5xl text-charcoal mb-8">PracticePanther Virtual Assistant</h1><p className="text-lg text-text-mid font-300 mb-12">Affordable and powerful. Our VAs use PracticePanther for intake, documents, and billing. Especially popular with solos and small firms.</p><section className="mb-16"><h2 className="font-serif text-2xl text-charcoal mb-6">PracticePanther VA Tasks</h2><ul className="space-y-3">{['Client intake workflow management','Document assembly and filing','Billing and invoice processing','Calendar and deadline tracking','Client communication templates'].map(t => <li key={t} className="flex gap-3"><span className="text-brass font-700">→</span><span className="text-base text-text-mid font-300">{t}</span></li>)}</ul></section><Link href="/contact" className="inline-block px-8 py-3 bg-brass text-white text-xs font-600 tracking-wider uppercase hover:bg-brass-light transition-all">Schedule Consultation</Link></article></main>;
}
