import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'Smokeball VA Support', description: 'Virtual assistant integration with Smokeball practice management.' };

export default function SmokballPage() {
  return <main className="pt-32 bg-ivory min-h-screen"><article className="max-w-4xl mx-auto px-16 py-20"><h1 className="font-serif text-5xl text-charcoal mb-8">Smokeball Virtual Assistant</h1><p className="text-lg text-text-mid font-300 mb-12">Strong case management and document assembly. Our VAs leverage Smokeball's templates and automation for efficient document prep and filing coordination.</p><section className="mb-16"><h2 className="font-serif text-2xl text-charcoal mb-6">Smokeball VA Integration</h2><ul className="space-y-3">{['Template and document assembly','Case tracking and organization','Document filing preparation','Client matter organization','Deadline and task management'].map(t => <li key={t} className="flex gap-3"><span className="text-brass font-700">→</span><span className="text-base text-text-mid font-300">{t}</span></li>)}</ul></section><Link href="/contact" className="inline-block px-8 py-3 bg-brass text-white text-xs font-600 tracking-wider uppercase hover:bg-brass-light transition-all">Learn More</Link></article></main>;
}
