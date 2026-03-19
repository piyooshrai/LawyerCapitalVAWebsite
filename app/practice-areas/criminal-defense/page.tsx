import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'Criminal Defense Virtual Assistant', description: 'Discovery management, hearing prep, client communication, and case file organization.' };

export default function CriminalDefensePage() {
  return <main className="pt-32 bg-ivory min-h-screen"><article className="max-w-4xl mx-auto px-16 py-20"><h1 className="font-serif text-6xl text-charcoal mb-8">Criminal Defense Virtual Assistant</h1><p className="text-lg text-text-mid font-300 mb-12">Timing is everything in criminal defense. Our VAs manage discovery, coordinate hearings, track bond conditions, and prepare for trial.</p><section className="mb-16"><h2 className="font-serif text-3xl text-charcoal mb-6">VA Support for Criminal Defense</h2><ul className="space-y-3">{['Discovery management and tracking', 'Hearing preparation and coordination', 'Bond condition monitoring', 'Client communication and updates', 'Bail hearing documentation', 'Motions practice support', 'Plea negotiation tracking', 'Sentencing preparation'].map(t => <li key={t} className="flex gap-3"><span className="text-brass font-700">→</span><span className="text-base text-text-mid font-300">{t}</span></li>)}</ul></section><Link href="/contact" className="inline-block px-8 py-3 bg-brass text-white text-xs font-600 tracking-wider uppercase hover:bg-brass-light transition-all">Schedule Consultation</Link></article></main>;
}
