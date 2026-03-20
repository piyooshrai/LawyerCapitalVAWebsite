import { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'Legal VA Resources | Attorney Delegation & ROI Guides | Lawyer Capital VA',
  description: 'Free resources for law firms: delegation playbook, ROI calculator, and guides for hiring legal VAs.',
  keywords: 'law firm delegation guide, legal VA ROI calculator, attorney resources',
};

export default function ResourcesPage() {
  return (
    <main className="bg-ivory min-h-screen">
      <PageHeader
        label="Resources"
        title="Free Resources for Law Firms"
        subtitle="Guides, calculators, and tools to help you understand VA impact on your practice."
      />

      <article className="max-w-5xl mx-auto px-16 py-20">
        <p className="text-lg text-text-mid font-300 mb-16 border-l-4 border-brass pl-8 pb-8 border-b border-brass/20">
          Running a law firm means making smart decisions about where your time goes. These resources help you understand the impact a dedicated VA can have on your practice—without sales hype. Just the data.
        </p>

        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-12">Available Resources</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Delegation Guide */}
            <Link
              href="/resources/delegation-guide"
              className="border-2 border-brass/30 rounded-sm p-8 hover:border-brass hover:bg-white/50 transition-all duration-300 group"
            >
              <h3 className="font-serif text-2xl text-charcoal mb-3">The Attorney's Delegation Playbook</h3>
              <p className="text-sm text-brass font-600 mb-4">Email-gated PDF</p>
              <p className="text-base text-text-mid font-300 mb-6">
                Complete guide to delegating tasks to a VA. Which tasks to delegate. How to hand them off. How to maintain quality. How to avoid common mistakes.
              </p>
              <p className="text-xs text-brass group-hover:translate-x-1 transition-transform inline-block">Download guide →</p>
            </Link>

            {/* ROI Calculator */}
            <Link
              href="/resources/roi-calculator"
              className="border-2 border-brass/30 rounded-sm p-8 hover:border-brass hover:bg-white/50 transition-all duration-300 group"
            >
              <h3 className="font-serif text-2xl text-charcoal mb-3">Legal VA ROI Calculator</h3>
              <p className="text-sm text-brass font-600 mb-4">Interactive tool</p>
              <p className="text-base text-text-mid font-300 mb-6">
                Calculate your actual ROI. Enter your hourly rate and estimated billable hours recovered per week. See exact revenue impact and payback timeline.
              </p>
              <p className="text-xs text-brass group-hover:translate-x-1 transition-transform inline-block">Launch calculator →</p>
            </Link>
          </div>
        </section>

        <section className="mb-16 py-12 bg-charcoal/5 px-8 rounded-sm border-l-4 border-brass">
          <h2 className="font-serif text-3xl text-charcoal mb-6">What You'll Learn</h2>
          <div className="space-y-4">
            <p className="text-base text-text-mid leading-relaxed font-300">
              <strong>The Delegation Playbook covers:</strong> Which administrative tasks drain your time. How to identify high-impact delegation candidates. How to hand off work without micromanaging. How to maintain quality while increasing throughput. Real workflows for solo practices and small firms.
            </p>
            <p className="text-base text-text-mid leading-relaxed font-300">
              <strong>The ROI Calculator shows:</strong> Your exact financial impact. How many billable hours you're currently losing to admin work. What revenue recovery looks like with a VA. Payback timeline and profit impact. Year-1 and multi-year ROI projections.
            </p>
          </div>
        </section>

        <section className="mb-16 p-10 bg-brass/15 border-2 border-brass rounded-sm">
          <h2 className="font-serif text-3xl text-charcoal mb-6">Why These Resources Matter</h2>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            Most law firms dramatically underestimate the value of delegation. Partners think: "I can handle intake, docket management, and billing in my spare time." But "spare time" doesn't exist. That work gets done at midnight. Or it doesn't get done, and opportunities slip away.
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            These resources help you quantify what's actually happening. How many hours per week disappear to administrative work? What revenue are you leaving on the table? What would a VA actually change?
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300">
            Once you see the numbers, the decision becomes obvious.
          </p>
        </section>

        <section className="my-16 p-8 bg-charcoal text-white rounded-sm">
          <h2 className="font-serif text-3xl mb-4">Ready to Explore?</h2>
          <p className="text-base text-white/70 leading-relaxed mb-6 font-300">
            Download the playbook or run your numbers through the calculator. Then schedule a conversation to see what that looks like for your specific practice.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-brass text-charcoal text-xs font-600 tracking-widest uppercase hover:bg-brass-light transition-all duration-300"
          >
            Get Started
          </Link>
        </section>
      </article>
    </main>
  );
}
