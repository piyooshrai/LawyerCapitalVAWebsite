import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Court Filing Virtual Assistant | Lawyer Capital VA',
  description: 'E-filing preparation, local court rule compliance, hearing scheduling, and proof of service coordination.',
};

export default function CourtFilingPage() {
  return (
    <main className="pt-32 bg-ivory min-h-screen">
      <article className="max-w-4xl mx-auto px-16 py-20">
        <h1 className="font-serif text-6xl text-charcoal mb-8 leading-tight">
          Court Filing & E-Filing Coordination Virtual Assistant
        </h1>

        <p className="text-lg text-text-mid font-300 mb-12">
          Court rules vary. Filing systems differ. Our VAs manage e-filing, local rule compliance, hearing scheduling, and service of process so your documents get filed correctly, on time.
        </p>

        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-6">What We Handle</h2>
          <ul className="space-y-3">
            {[
              'E-filing system management and coordination',
              'Local court rule compliance verification',
              'Filing fee tracking and payment',
              'Proof of service coordination',
              'Hearing scheduling and confirmation',
              'Court calendar management',
              'Judge-specific requirement research',
              'Filing deadline monitoring',
              'Certificate of service preparation',
              'Courtesy copy and courtesy call coordination',
            ].map((task, idx) => (
              <li key={idx} className="flex gap-3">
                <span className="text-brass font-700">→</span>
                <span className="text-base text-text-mid font-300">{task}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-3xl text-charcoal mb-6 mt-12">Court-Specific Expertise</h2>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-8">
            Every court has its own rules. Federal court differs from state court. Local district rules can contradict state rules. Our VA learns your court systems, remembers judge preferences, and flags compliance issues before filing.
          </p>
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
