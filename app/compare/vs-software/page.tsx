import { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'VA vs Legal Software | Lawyer Capital VA',
  description: 'Compare virtual assistant vs legal practice software and e-discovery tools.',
  keywords: 'VA vs software, legal technology, case management software',
};

export default function VsSoftwarePage() {
  return (
    <main className="bg-ivory min-h-screen">
      <PageHeader
        label="Comparison"
        title="VA vs Software: Software Has No Judgment"
        subtitle="Software: $500-1,500/month + 20-40 hours setup + training. 30-50% usage rate. No context. No flexibility. Your VA: all-in, immediate, smart."
      />
      <article className="max-w-4xl mx-auto px-16 py-20">
        <h1 className="font-serif text-6xl text-charcoal mb-8 leading-tight">
          VA vs Software: Automation Cannot Replace Judgment
        </h1>

        <p className="text-lg text-text-mid font-300 mb-12 border-l-4 border-brass pl-6">
          <strong>You are thinking:</strong> "I will buy e-discovery software. It will organize my documents automatically. I will buy practice management software. It will track my deadlines." You spend $500-1,500/month on software. You implement it. You realize: software organizes documents but does not understand your cases. Software tracks deadlines but does not understand which ones matter. Software is a tool. It is not a person.
        </p>

        <section className="mb-16 py-12 bg-charcoal/5 px-8 rounded-sm border-l-4 border-brass">
          <h2 className="font-serif text-3xl text-charcoal mb-6">The Software Problem</h2>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            <strong>Software requires setup, configuration, and ongoing maintenance.</strong> You spend 20-40 hours setting up your case structure. You train your staff on the system. Then nobody uses it consistently. Documents do not get uploaded. Deadlines do not get entered. The software sits unused.
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            <strong>Software is dumb. It does what you tell it to do. Nothing more.</strong> It cannot prioritize. It cannot understand context. It cannot make judgment calls. A deadline reminder that goes off at the wrong time is worse than no reminder. A document organized incorrectly creates more confusion.
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300">
            <strong>Your VA + your current software is perfect.</strong> Your VA uses your existing tools to organize your cases intelligently. Your VA makes judgment calls. Your VA prioritizes. Your VA understands context. The software becomes useful because a person is running it.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-6 mt-12">VA vs Software Comparison</h2>

          <div className="space-y-6 mb-12">
            <div className="bg-white p-6 border border-text-light/10 rounded-sm">
              <h3 className="font-600 text-charcoal mb-4">Implementation</h3>
              <p className="text-base text-text-mid leading-relaxed font-300 mb-3">
                <strong>Software:</strong> 20-40 hours setup. Training for each staff member. Ongoing maintenance. Annual updates. Integration issues with other tools.
              </p>
              <p className="text-base text-text-mid leading-relaxed font-300">
                <strong>VA:</strong> Day one productive. Works with your existing software. No setup required. No training needed.
              </p>
            </div>

            <div className="bg-white p-6 border border-text-light/10 rounded-sm">
              <h3 className="font-600 text-charcoal mb-4">Judgment & Context</h3>
              <p className="text-base text-text-mid leading-relaxed font-300 mb-3">
                <strong>Software:</strong> No judgment. No context. Executes exactly what you program. Cannot prioritize. Cannot make exceptions. Cannot understand nuance.
              </p>
              <p className="text-base text-text-mid leading-relaxed font-300">
                <strong>VA:</strong> Understands context. Prioritizes intelligently. Makes judgment calls. Flags exceptions. Understands nuance.
              </p>
            </div>

            <div className="bg-white p-6 border border-text-light/10 rounded-sm">
              <h3 className="font-600 text-charcoal mb-4">Adoption Rate</h3>
              <p className="text-base text-text-mid leading-relaxed font-300 mb-3">
                <strong>Software:</strong> 30-50% actual usage rate. Staff bypasses the system for easier solutions. Data entry is inconsistent. System becomes a data graveyard.
              </p>
              <p className="text-base text-text-mid leading-relaxed font-300">
                <strong>VA:</strong> 100% adoption. Your VA ensures data is entered consistently. Your VA ensures system is used correctly.
              </p>
            </div>

            <div className="bg-white p-6 border border-text-light/10 rounded-sm">
              <h3 className="font-600 text-charcoal mb-4">Flexibility</h3>
              <p className="text-base text-text-mid leading-relaxed font-300 mb-3">
                <strong>Software:</strong> Limited to what the software can do. Want a custom report? Submit a feature request. Wait 6 months. Feature may never come.
              </p>
              <p className="text-base text-text-mid leading-relaxed font-300">
                <strong>VA:</strong> Completely flexible. Want a custom report? Get it tomorrow. Want to change your workflow? Done immediately.
              </p>
            </div>
          </div>

          <div className="bg-brass/20 p-8 rounded-sm border-l-4 border-brass">
            <h3 className="font-600 text-charcoal mb-3 text-xl">Cost Comparison</h3>
            <p className="text-base text-text-mid leading-relaxed font-300 mb-3">
              <strong>Software:</strong> $500-1,500/month = $6,000-18,000/year. Plus setup (20-40 hours at $250/hr = $5,000-10,000). Plus training. Plus maintenance. Total: $15,000-35,000/year.
            </p>
            <p className="text-base text-text-mid leading-relaxed font-300 mb-3">
              <strong>VA + Existing Software:</strong> $30,000-42,000/year. Your VA maximizes your existing software. No setup. No training. No maintenance.
            </p>
            <p className="text-base text-text-mid leading-relaxed font-300">
              <strong>Net Difference:</strong> Pay slightly more for someone who actually uses your systems correctly.
            </p>
          </div>
        </section>

        <section className="my-16 p-8 bg-charcoal text-white rounded-sm">
          <h2 className="font-serif text-2xl mb-4">Tools Need People. Get Both.</h2>
          <p className="text-base text-white/70 leading-relaxed mb-6 font-300">
            You do not need more software. You have plenty. You need someone to use it intelligently. Your VA works within your existing tech stack, maximizes your current tools, and produces results. Software + person = actually working system.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-brass text-white text-xs font-600 tracking-wider uppercase hover:bg-brass-light transition-all duration-300"
          >
            Get VA Support Instead
          </Link>
        </section>
      </article>
    </main>
  );
}
