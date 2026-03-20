import { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'The Attorney\'s Delegation Playbook | Lawyer Capital VA',
  description: 'Free email-gated PDF guide: Complete delegation framework for law firms delegating to virtual assistants.',
  keywords: 'attorney delegation guide, law firm delegation framework, delegation checklist',
};

export default function DelegationGuidePage() {
  return (
    <main className="bg-ivory min-h-screen">
      <PageHeader
        label="Free Resource"
        title="The Attorney's Delegation Playbook"
        subtitle="Complete guide to delegating administrative work to a VA without losing control or quality."
      />

      <article className="max-w-5xl mx-auto px-16 py-20">
        <p className="text-lg text-text-mid font-300 mb-16 border-l-4 border-brass pl-8 pb-8 border-b border-brass/20">
          Most attorneys know they should delegate. But knowing and doing are different. How do you hand off work? What happens if quality drops? How do you maintain control? This guide answers every question.
        </p>

        <section className="mb-16 py-12 bg-charcoal/5 px-8 rounded-sm border-l-4 border-brass">
          <h2 className="font-serif text-3xl text-charcoal mb-6">What's Inside</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-serif text-lg text-charcoal mb-2">Part 1: The Delegation Audit</h3>
              <p className="text-base text-text-mid font-300">
                Time-tracking framework to identify which tasks are eating your hours. How to categorize work (billable vs non-billable). Which tasks have the highest ROI if delegated. Worksheet to analyze your practice.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-lg text-charcoal mb-2">Part 2: Task Selection Strategy</h3>
              <p className="text-base text-text-mid font-300">
                Decision matrix for choosing which tasks to delegate. Client-facing vs administrative. High-risk vs low-risk tasks. High-volume vs low-volume. Framework for getting the highest impact delegation.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-lg text-charcoal mb-2">Part 3: Handoff Protocol</h3>
              <p className="text-base text-text-mid font-300">
                Step-by-step process for handing off a task. Documentation. Templates. Quality checkpoints. How to catch errors before they become problems. How to refine processes over time.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-lg text-charcoal mb-2">Part 4: Quality Control</h3>
              <p className="text-base text-text-mid font-300">
                Maintaining quality without micromanaging. Spot-check schedules. When to escalate. How to give feedback. Building trust and autonomy.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-lg text-charcoal mb-2">Part 5: Common Mistakes</h3>
              <p className="text-base text-text-mid font-300">
                Patterns that fail. Unclear instructions. No documentation. Too much delegation too fast. How successful firms avoid these pitfalls.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-lg text-charcoal mb-2">Part 6: Real Workflows</h3>
              <p className="text-base text-text-mid font-300">
                Complete delegation frameworks for: client intake, docket management, document preparation, billing administration, client communication. Copy-paste-ready templates.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16 p-10 bg-brass/15 border-2 border-brass rounded-sm">
          <h2 className="font-serif text-3xl text-charcoal mb-6">Who Should Read This</h2>
          <ul className="space-y-3">
            <li className="text-base text-text-mid font-300 flex items-start gap-3">
              <span className="text-brass font-bold">•</span>
              Solo practitioners drowning in admin work
            </li>
            <li className="text-base text-text-mid font-300 flex items-start gap-3">
              <span className="text-brass font-bold">•</span>
              Partners at 2-10 attorney firms who need to scale
            </li>
            <li className="text-base text-text-mid font-300 flex items-start gap-3">
              <span className="text-brass font-bold">•</span>
              Managing partners hiring their first VA
            </li>
            <li className="text-base text-text-mid font-300 flex items-start gap-3">
              <span className="text-brass font-bold">•</span>
              Practice managers needing delegation frameworks
            </li>
            <li className="text-base text-text-mid font-300 flex items-start gap-3">
              <span className="text-brass font-bold">•</span>
              Anyone who wants to work fewer hours and earn more
            </li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-8">Download the PDF</h2>
          <div className="border-2 border-brass/30 rounded-sm p-10 bg-charcoal/5">
            <p className="text-base text-text-mid font-300 mb-6">
              Get instant access to "The Attorney's Delegation Playbook." We'll email you a PDF download link immediately.
            </p>

            {/* Email Capture Form */}
            <form action="/api/email-signup" method="POST" className="max-w-md">
              <div className="mb-4">
                <label className="block text-sm font-600 text-charcoal mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="your@firm.com"
                  className="w-full px-4 py-3 border border-brass/20 rounded-sm focus:outline-none focus:border-brass bg-white"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-600 text-charcoal mb-2">Firm Name</label>
                <input
                  type="text"
                  name="firmName"
                  placeholder="Your Firm Name"
                  className="w-full px-4 py-3 border border-brass/20 rounded-sm focus:outline-none focus:border-brass bg-white"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full px-8 py-3 bg-brass text-charcoal text-xs font-600 tracking-widest uppercase hover:bg-brass-light transition-all duration-300"
              >
                Get the PDF
              </button>
            </form>

            <p className="text-xs text-text-light mt-4">
              We respect your privacy. No spam. Just the guide and occasional practice management insights.
            </p>
          </div>
        </section>

        <section className="mb-16 py-12 bg-charcoal/5 px-8 rounded-sm border-l-4 border-brass">
          <h2 className="font-serif text-3xl text-charcoal mb-6">What Successful Firms Do</h2>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            Successful law firms don't work harder. They delegate better. They have systems. They have people managing those systems. They focus their personal time on high-value work: client relationships, legal strategy, practice development.
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300">
            This playbook isn't theory. It's a distillation of what works. Use it to build your delegation system.
          </p>
        </section>

        <section className="my-16 p-8 bg-charcoal text-white rounded-sm">
          <h2 className="font-serif text-3xl mb-4">Ready to Delegate?</h2>
          <p className="text-base text-white/70 leading-relaxed mb-6 font-300">
            After reading the playbook, you'll know exactly what to delegate and how. Let's talk about how a Lawyer Capital VA fits into your delegation strategy.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-brass text-charcoal text-xs font-600 tracking-widest uppercase hover:bg-brass-light transition-all duration-300"
          >
            Schedule Consultation
          </Link>
        </section>
      </article>
    </main>
  );
}
