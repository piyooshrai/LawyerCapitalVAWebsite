import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Civil Litigation Virtual Assistant | Lawyer Capital VA',
  description: 'NDA-protected VA support for discovery management, pleading prep, motion practice, and trial coordination.',
  keywords: 'civil litigation virtual assistant',
};

export default function CivilLitigationPage() {
  return (
    <main className="pt-32 bg-ivory min-h-screen">
      <article className="max-w-4xl mx-auto px-16 py-20">
        <h1 className="font-serif text-6xl text-charcoal mb-8 leading-tight">
          Civil Litigation Virtual Assistant
        </h1>

        <p className="text-lg text-text-mid font-300 mb-12">
          Discovery management. Pleading preparation. Motion practice. Trial coordination. Our VAs are trained in civil litigation workflows, courtroom procedures, and the deadlines that govern case progression.
        </p>

        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-6">VA Support for Civil Litigation</h2>
          <ul className="space-y-3">
            {[
              'Discovery request organization and tracking',
              'Deposition coordination and notice preparation',
              'Pleading formatting and citation verification',
              'Motion brief organization and filing prep',
              'Trial exhibit preparation and indexing',
              'Witness list management',
              'Court rule compliance (federal and state)',
              'Settlement negotiation document preparation',
              'Post-judgment matter tracking',
              'Appeal deadline monitoring',
            ].map((task, idx) => (
              <li key={idx} className="flex gap-3">
                <span className="text-brass font-700">→</span>
                <span className="text-base text-text-mid font-300">{task}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-6">Practice Area Expertise</h2>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            Civil litigation has its own rhythm. Discovery phases. Motions practice. Trial prep. Appellate deadlines. Our VAs understand these workflows and the deadlines that drive them. They learn your court system, the judges you appear before, and local court rule variations.
          </p>
        </section>

        <section>
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
