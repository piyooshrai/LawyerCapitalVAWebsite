import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Law Firm Administration Virtual Assistant',
  description: 'Time entry support, invoice preparation, trust accounting, CLE monitoring, and firm administrative management.',
};

export default function FirmAdministrationPage() {
  return (
    <main className="pt-32 bg-ivory min-h-screen">
      <article className="max-w-4xl mx-auto px-16 py-20">
        <h1 className="font-serif text-6xl text-charcoal mb-8 leading-tight">
          Law Firm Administration & Billing Virtual Assistant
        </h1>

        <p className="text-lg text-text-mid font-300 mb-12">
          The back-office runs your practice. Our VAs handle time entry, billing, trust accounting, compliance deadlines, and firm administration so attorneys bill time instead of doing admin.
        </p>

        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-6">What We Handle</h2>
          <ul className="space-y-3">
            {[
              'Time entry support and billing reconciliation',
              'Invoice preparation and tracking',
              'Trust account reconciliation oversight',
              'Expense management and categorization',
              'Vendor coordination and ordering',
              'Office supply and tech procurement',
              'Bar association deadline tracking',
              'CLE credit monitoring and renewal',
              'Firm calendar management',
              'Conflict database maintenance and updates',
            ].map((task, idx) => (
              <li key={idx} className="flex gap-3">
                <span className="text-brass font-700">→</span>
                <span className="text-base text-text-mid font-300">{task}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-6">More Billable Hours</h2>
          <p className="text-base text-text-mid leading-relaxed font-300">
            Time tracking and billing admin might seem minor, but it adds up. 2-3 hours weekly on billing, compliance, ordering. Over a year, that's 100+ hours. At billable rates, outsourcing that work pays for the VA completely — and you gain profitability.
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
