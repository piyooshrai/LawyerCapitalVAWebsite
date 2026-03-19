import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'Lawmatics VA Support', description: 'Virtual assistant integration with Lawmatics legal CRM.' };

export default function LawmaticsPage() {
  return <main className="pt-32 bg-ivory min-h-screen"><article className="max-w-4xl mx-auto px-16 py-20"><h1 className="font-serif text-5xl text-charcoal mb-8">Lawmatics Virtual Assistant</h1><p className="text-lg text-text-mid font-300 mb-12">Lead capture and client relationship management. Our VAs use Lawmatics for intake automation, client communication, and lead follow-up.</p><section className="mb-16"><h2 className="font-serif text-2xl text-charcoal mb-6">Lawmatics VA Tasks</h2><ul className="space-y-3">{['Lead intake and qualification','Client communication workflows','Automation setup and management','Follow-up communication','Lead scoring and pipeline management'].map(t => <li key={t} className="flex gap-3"><span className="text-brass font-700">→</span><span className="text-base text-text-mid font-300">{t}</span></li>)}</ul></section><Link href="/contact" className="inline-block px-8 py-3 bg-brass text-white text-xs font-600 tracking-wider uppercase hover:bg-brass-light transition-all">Schedule Consultation</Link></article></main>;
}
