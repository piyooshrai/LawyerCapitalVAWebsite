import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'Immigration Law Virtual Assistant', description: 'Multi-jurisdictional case tracking, visa application coordination, and immigration deadline management.' };

export default function ImmigrationPage() {
  return <main className="pt-32 bg-ivory min-h-screen"><article className="max-w-4xl mx-auto px-16 py-20"><h1 className="font-serif text-6xl text-charcoal mb-8">Immigration Law Virtual Assistant</h1><p className="text-lg text-text-mid font-300 mb-12">Cases span jurisdictions. Deadlines vary by visa type. Our VAs manage multi-jurisdictional tracking, visa application coordination, and government correspondence across agencies.</p><section className="mb-16"><h2 className="font-serif text-3xl text-charcoal mb-6">VA Support for Immigration Practice</h2><ul className="space-y-3">{['Multi-jurisdictional case tracking', 'Visa application coordination', 'Form I-140, I-130, I-485 prep', 'Immigration deadline calendars', 'Government correspondence management', 'USCIS portal monitoring', 'Embassy/consulate communication', 'Family petition tracking'].map(t => <li key={t} className="flex gap-3"><span className="text-brass font-700">→</span><span className="text-base text-text-mid font-300">{t}</span></li>)}</ul></section><Link href="/contact" className="inline-block px-8 py-3 bg-brass text-white text-xs font-600 tracking-wider uppercase hover:bg-brass-light transition-all">Schedule Consultation</Link></article></main>;
}
