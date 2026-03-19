import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'Estate Planning Virtual Assistant', description: 'Client intake, document prep, trust admin support, and probate coordination.' };

export default function EstatePlanningPage() {
  return <main className="pt-32 bg-ivory min-h-screen"><article className="max-w-4xl mx-auto px-16 py-20"><h1 className="font-serif text-6xl text-charcoal mb-8">Estate Planning Virtual Assistant</h1><p className="text-lg text-text-mid font-300 mb-12">Estate planning requires detailed client intake, family tree organization, and ongoing trust/probate administration tracking.</p><section className="mb-16"><h2 className="font-serif text-3xl text-charcoal mb-6">VA Support for Estate Planning</h2><ul className="space-y-3">{['Estate planning intake and family tree organization', 'Asset inventory tracking', 'Beneficiary communication coordination', 'Probate filing support', 'Trust administration tracking', 'Estate distribution documentation', 'Tax return coordination', 'Deed transfer management'].map(t => <li key={t} className="flex gap-3"><span className="text-brass font-700">→</span><span className="text-base text-text-mid font-300">{t}</span></li>)}</ul></section><Link href="/contact" className="inline-block px-8 py-3 bg-brass text-white text-xs font-600 tracking-wider uppercase hover:bg-brass-light transition-all">Schedule Consultation</Link></article></main>;
}
