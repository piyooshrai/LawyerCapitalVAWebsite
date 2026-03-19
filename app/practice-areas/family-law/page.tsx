import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'Family Law Virtual Assistant | Lawyer Capital VA', description: 'VA support for discovery coordination, parenting plans, financial disclosures, and settlement negotiation.' };

export default function FamilyLawPage() {
  return <main className="pt-32 bg-ivory min-h-screen"><article className="max-w-4xl mx-auto px-16 py-20"><h1 className="font-serif text-6xl text-charcoal mb-8">Family Law Virtual Assistant</h1><p className="text-lg text-text-mid font-300 mb-12">Discovery coordination, parenting plan prep, financial disclosure organization, settlement support, and sensitive document management with complete confidentiality.</p><section className="mb-16"><h2 className="font-serif text-3xl text-charcoal mb-6">VA Support for Family Law</h2><ul className="space-y-3">{['Discovery request coordination', 'Parenting plan drafting support', 'Financial disclosure organization', 'Settlement negotiation documentation', 'Child support worksheet prep', 'Property division tracking', 'Restraining order management', 'Modification request tracking'].map(t => <li key={t} className="flex gap-3"><span className="text-brass font-700">→</span><span className="text-base text-text-mid font-300">{t}</span></li>)}</ul></section><Link href="/contact" className="inline-block px-8 py-3 bg-brass text-white text-xs font-600 tracking-wider uppercase hover:bg-brass-light transition-all">Schedule Consultation</Link></article></main>;
}
