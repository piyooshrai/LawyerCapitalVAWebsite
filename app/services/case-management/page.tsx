import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Legal Case Management Virtual Assistant',
  description: 'VA support for docket tracking, deadline management, statute of limitations monitoring, and case file organization.',
};

export default function CaseManagementPage() {
  return (
    <main className="pt-32 bg-ivory min-h-screen">
      <article className="max-w-4xl mx-auto px-16 py-20">
        <h1 className="font-serif text-6xl text-charcoal mb-8 leading-tight">
          Legal Case Management Virtual Assistant
        </h1>

        <p className="text-lg text-text-mid font-300 mb-12">
          Nothing missed. Nothing late. Our VAs track deadlines, monitor statutes of limitations, organize case files, and flag critical dates so you can practice law without admin overhead.
        </p>

        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-6">What We Handle</h2>
          <ul className="space-y-3">
            {[
              'Docket tracking and deadline monitoring',
              'Statute of limitations calendar management',
              'Case file organization and retrieval',
              'Matter status reporting and updates',
              'Court date tracking and reminders',
              'Discovery deadline management',
              'Document indexing and tagging',
              'Case timeline maintenance',
              'Opposing counsel communication logging',
              'Continuance and extension tracking',
            ].map((task, idx) => (
              <li key={idx} className="flex gap-3">
                <span className="text-brass font-700">→</span>
                <span className="text-base text-text-mid font-300">{task}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-6">Why This Matters</h2>
          <p className="text-base text-text-mid leading-relaxed font-300">
            Missed deadlines. Forgotten discovery cutoffs. Statute of limitations issues. These are malpractice claims waiting to happen. A dedicated VA managing case timelines eliminates these risks. They become your second brain for dates, deadlines, and critical case milestones.
          </p>
        </section>

        <section className="mt-12">
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
