import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'Ruby Receptionists vs Lawyer Capital VA', description: 'Generic receptionist service vs legal-specialized VA.' };

export default function RubyPage() {
  return <main className="pt-32 bg-ivory min-h-screen"><article className="max-w-4xl mx-auto px-16 py-20"><h1 className="font-serif text-5xl text-charcoal mb-8">Ruby Receptionists vs Lawyer Capital VA</h1><p className="text-lg text-text-mid font-300 mb-12">Ruby: professional, established, general-purpose. We: legal-specialized, dedicated, multi-function.</p><section className="mb-16"><h2 className="font-serif text-2xl text-charcoal mb-6">What Ruby Does Well</h2><p className="text-base text-text-mid font-300">Professional brand. 20+ year track record. Multi-language support. If you need a generic receptionist, Ruby is reliable.</p></section><section className="mb-16"><h2 className="font-serif text-2xl text-charcoal mb-6">What Ruby Can't Do</h2><p className="text-base text-text-mid font-300 mb-4">Legal training. Document prep. Case management. Clio integration. Attorney-client privilege expertise.</p><p className="text-base text-text-mid font-300">Ruby answers phones. We become your operations partner.</p></section><Link href="/contact" className="inline-block px-8 py-3 bg-brass text-white text-xs font-600 tracking-wider uppercase hover:bg-brass-light transition-all">Learn More</Link></article></main>;
}
