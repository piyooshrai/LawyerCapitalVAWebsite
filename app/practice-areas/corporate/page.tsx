import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Corporate Law Virtual Assistant | Lawyer Capital VA',
  description: 'VA support for contract management, M&A, corporate filings, and compliance tracking.',
};

export default function CorporatePage() {
  return (
    <main className="pt-32 bg-ivory min-h-screen">
      <article className="max-w-4xl mx-auto px-16 py-20">
        <h1 className="font-serif text-6xl text-charcoal mb-8">Corporate & Business Law Virtual Assistant</h1>
        <p className="text-lg text-text-mid font-300 mb-12">Contract management, M&A coordination, corporate filings, board meeting prep, and compliance deadline tracking.</p>
        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-6">VA Support for Corporate Practice</h2>
          <ul className="space-y-3">
            {['Contract template management and updates', 'M&A document coordination', 'Corporate filings and submissions', 'Board meeting preparation', 'Entity compliance calendars', 'Filing fee management', 'Corporate minutes and resolutions', 'Shareholder communication'].map((task) => (
              <li key={task} className="flex gap-3"><span className="text-brass font-700">→</span><span className="text-base text-text-mid font-300">{task}</span></li>
            ))}
          </ul>
        </section>
        <Link href="/contact" className="inline-block px-8 py-3 bg-brass text-white text-xs font-600 tracking-wider uppercase hover:bg-brass-light transition-all">Schedule Consultation</Link>
      </article>
    </main>
  );
}
