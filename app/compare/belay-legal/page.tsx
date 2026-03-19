import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'Belay vs Lawyer Capital VA', description: 'US-based general VA vs legal-specialized dedicated VA.' };

export default function BelayPage() {
  return <main className="pt-32 bg-ivory min-h-screen"><article className="max-w-4xl mx-auto px-16 py-20"><h1 className="font-serif text-5xl text-charcoal mb-8">Belay Solutions vs Lawyer Capital VA</h1><p className="text-lg text-text-mid font-300 mb-12">Belay: $1,380+/month US-based VA. 6-month minimum. General support. We: $700–$1,300, month-to-month, legal-specialized.</p><section className="mb-16"><h2 className="font-serif text-2xl text-charcoal mb-6">The Lock-In Problem</h2><p className="text-base text-text-mid font-300 mb-4">Belay requires 6-month minimum commitment. If the VA doesn't fit, you're locked in.</p><p className="text-base text-text-mid font-300">We're month-to-month. No lock-in. Your VA earns your business every month.</p></section><section className="mb-16"><h2 className="font-serif text-2xl text-charcoal mb-6">Legal Specialization</h2><p className="text-base text-text-mid font-300">Belay is general. We're legal-specialized. NDA training. Legal terminology. Court procedures. Clio/MyCase/PP training. That difference matters.</p></section><Link href="/contact" className="inline-block px-8 py-3 bg-brass text-white text-xs font-600 tracking-wider uppercase hover:bg-brass-light transition-all">Schedule Consultation</Link></article></main>;
}
