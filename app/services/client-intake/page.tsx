import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Legal Client Intake Virtual Assistant | Lawyer Capital VA',
  description: 'NDA-protected virtual assistant support for legal client intake, conflict checks, engagement letters, and onboarding.',
  keywords: 'legal client intake virtual assistant, law firm intake coordinator',
};

export default function ClientIntakePage() {
  return (
    <main className="pt-32">
      <article className="max-w-4xl mx-auto px-16 py-20">
        <h1 className="font-serif text-6xl text-charcoal mb-4 leading-tight">
          Legal Client Intake Virtual Assistant
        </h1>
        <p className="text-lg text-text-mid font-300 mb-12">
          First impressions matter. Our VAs handle new client screening, conflict checks, engagement letter preparation, retainer agreements, and client portal setup — so your intake reflects the caliber of your firm.
        </p>

        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-6 mt-12">What We Handle</h2>
          <ul className="space-y-4">
            {[
              'New client screening and qualification',
              'Conflict of interest checks',
              'Engagement letter preparation and tracking',
              'Retainer agreement processing',
              'Initial document collection and organization',
              'Client portal setup and access',
              'Intake form management and follow-up',
              'Fee disclosure preparation',
              'Consultation scheduling and reminders',
              'Client onboarding packet assembly',
            ].map((task, idx) => (
              <li key={idx} className="flex gap-3">
                <span className="text-brass font-700 flex-shrink-0">→</span>
                <span className="text-base text-text-mid font-300">{task}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-6 mt-12">Why Outsource Intake?</h2>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            Poor intake kills law firms. Clients who wait 48 hours to hear back go elsewhere. Missed conflict checks create malpractice exposure. Incomplete documents slow onboarding.
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300">
            Our VA handles intake like it's their only job — because during their hours, it is. You get consistent, fast, compliant intake. Your Client Manager oversees quality. You focus on selling and practicing law.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-6 mt-12">Tools We Support</h2>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            Our VAs are trained on all major practice management and intake tools:
          </p>
          <div className="grid grid-cols-2 gap-6 mt-6">
            {['Clio', 'MyCase', 'PracticePanther', 'Lawmatics', 'Intake.me', 'Email + Spreadsheets'].map((tool) => (
              <div key={tool} className="p-4 border border-text-light/10 text-center">
                <p className="text-sm font-500 text-charcoal">{tool}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="my-20 p-8 bg-brass/10 border-l-4 border-brass">
          <p className="text-base text-charcoal font-500 italic">
            "Client response time went from 48 hours to 2 hours. The VA handles intake — we just practice law."
          </p>
          <p className="text-sm text-text-mid mt-2">— Immigration law firm, 3 attorneys</p>
        </section>

        <section>
          <h2 className="font-serif text-3xl text-charcoal mb-6 mt-12">Ready to Scale Your Intake?</h2>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-8">
            Schedule a consultation. We'll assess your current intake process and show you how a dedicated VA could transform your client experience.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-brass text-white text-xs font-600 tracking-wider uppercase hover:bg-brass-light transition-all duration-300"
          >
            Schedule Consultation
          </Link>
        </section>
      </article>
    </main>
  );
}
