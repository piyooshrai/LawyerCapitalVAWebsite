import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Legal Document Preparation Virtual Assistant',
  description: 'VA support for document formatting, motion drafting, discovery organization, contract markup, and filing-ready document assembly.',
};

export default function DocumentPreparationPage() {
  return (
    <main className="pt-32">
      <article className="max-w-4xl mx-auto px-16 py-20">
        <h1 className="font-serif text-6xl text-charcoal mb-8 leading-tight">
          Legal Document Preparation Virtual Assistant
        </h1>

        <p className="text-lg text-text-mid font-300 mb-12">
          Every document reflects your firm's standards. Our VAs handle formatting, motion prep, discovery organization, contract markup, and filing-ready assembly — ensuring quality without consuming your attorney hours.
        </p>

        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-6">What We Handle</h2>
          <ul className="space-y-3">
            {[
              'Pleading formatting and citation verification',
              'Motion drafting support and editing',
              'Discovery document organization and indexing',
              'Contract markup and redlining',
              'Exhibit preparation and labeling',
              'Filing-ready document assembly',
              'Template management and updates',
              'Document comparison and change tracking',
              'E-filing preparation and compliance',
              'PDF management and document optimization',
            ].map((task, idx) => (
              <li key={idx} className="flex gap-3">
                <span className="text-brass font-700">→</span>
                <span className="text-base text-text-mid font-300">{task}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-6">Not Document Writing</h2>
          <p className="text-base text-text-mid leading-relaxed font-300">
            Let's be clear: our VAs don't write legal documents. That requires attorney expertise and judgment. What they do is take your drafts and make them filing-ready, perfectly formatted, properly cited, and organized. They handle the technical work so you can focus on substance.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-3xl text-charcoal mb-6 mt-12">Ready to Delegate Document Work?</h2>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-brass text-white text-xs font-600 tracking-wider uppercase hover:bg-brass-light transition-all"
          >
            Schedule Consultation
          </Link>
        </section>
      </article>
    </main>
  );
}
