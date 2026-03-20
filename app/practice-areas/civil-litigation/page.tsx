import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Civil Litigation Virtual Assistant | Lawyer Capital VA',
  description: 'NDA-protected VA support for discovery management, pleading prep, motion practice, and trial coordination.',
  keywords: 'civil litigation virtual assistant, litigation support services, civil litigation support',
};

export default function CivilLitigationPage() {
  return (
    <main className="pt-32 bg-ivory min-h-screen">
      <article className="max-w-4xl mx-auto px-16 py-20">
        <h1 className="font-serif text-6xl text-charcoal mb-8 leading-tight">
          Civil Litigation is Now a Battle of Evidence Management
        </h1>

        <p className="text-lg text-text-mid font-300 mb-12 border-l-4 border-brass pl-6">
          <strong>The real problem:</strong> The defendant's door camera caught 47 hours of video. The police have 6 body cameras from the scene. Text messages span 2,400+ exchanges across 8 months. You have a 12-drawer filing cabinet just for this one case. Manual review is physically impossible. Your competitor with organized discovery wins at summary judgment. You lose.
        </p>

        {/* THE MULTIMEDIA EVIDENCE PROBLEM */}
        <section className="mb-16 py-12 bg-charcoal/5 px-8 rounded-sm border-l-4 border-brass">
          <h2 className="font-serif text-3xl text-charcoal mb-6">The Multimedia Evidence Crisis</h2>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            <strong>One case. Thousands of hours of video.</strong> Defendants in your cases are providing discovery in formats that didn't exist five years ago: Ring doorbell footage, surveillance video from multiple cameras, digital communications across WhatsApp, Signal, iMessage. A single incident may produce 50+ hours of video that needs review, redaction, and analysis.
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            <strong>Manual review is dead.</strong> According to <a href="https://www.americanbar.org/groups/litigation/resources/litigation-news/2026/winter/50-year-progress-how-ai-is-elevating-litigation/" className="text-brass font-500 hover:underline">ABA litigation research (2026)</a>, the explosion in multimedia evidence has forced firms to rethink discovery entirely. Attorneys can no longer personally review all evidence. Something has to triage, organize, and flag what matters.
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300">
            <strong>Your alternative:</strong> A dedicated litigation VA who specializes in organizing this chaos. They're not doing the legal analysis (that's you). They're doing the triage that makes your analysis possible.
          </p>
        </section>

        {/* THE REAL PAIN POINTS */}
        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-6 mt-12">The Real Pain Points Litigators Face</h2>

          <div className="space-y-8">
            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-xl text-charcoal mb-2">1. Discovery Management Eats 30-40% of Your Time</h3>
              <p className="text-base text-text-mid leading-relaxed font-300">
                You're not in court. You're managing discovery requests, organizing responses, tracking what's been produced and what hasn't, flagging privilege issues, and building a searchable database of thousands of documents. This isn't legal work. It's administrative work that feels like it takes forever because you have to context-switch from legal thinking to file management constantly.
              </p>
              <p className="text-base text-text-mid leading-relaxed font-300 mt-3">
                <strong>Your VA handles:</strong> Creating discovery schedules, organizing received documents, flagging privilege issues, maintaining a searchable database, tracking what's outstanding, coordinating with opposing counsel on responses.
              </p>
            </div>

            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-xl text-charcoal mb-2">2. Vendor Management Complexity (54% of Firms Report This as a Top Challenge)</h3>
              <p className="text-base text-text-mid leading-relaxed font-300">
                According to <a href="https://www.rev.com/blog/legal-technology-trends" className="text-brass font-500 hover:underline">2026 legal tech research</a>, 54% of litigation firms identified vendor management as their top administrative challenge. You're juggling court reporters, document retrieval services, trial support vendors, expert witnesses, and IT specialists. Each vendor has different processes, different invoicing, different communication protocols.
              </p>
              <p className="text-base text-text-mid leading-relaxed font-300 mt-3">
                <strong>Your VA handles:</strong> Maintaining vendor contact lists, coordinating scheduling, managing invoices, tracking services rendered, ensuring you have reliable rosters of trusted vendors.
              </p>
            </div>

            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-xl text-charcoal mb-2">3. Motion Practice Consumes 20-30% of Billable Hours (But You Only Bill Half of It)</h3>
              <p className="text-base text-text-mid leading-relaxed font-300">
                You write motions. But before you write, you hunt for your motion template. You compile the exhibit list. You organize prior case law. You create a motion binder. You check formatting against local rules (which vary by court and judge). You prepare a reply brief in case the other side responds. This is 5-10 hours of non-billable work for every motion you file.
              </p>
              <p className="text-base text-text-mid leading-relaxed font-300 mt-3">
                <strong>Your VA handles:</strong> Pulling motion templates, organizing exhibits, compiling case law, checking local rule compliance, preparing motion binders, creating visual timelines for summary judgment motions.
              </p>
            </div>

            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-xl text-charcoal mb-2">4. Deposition Logistics Are Tedious but Critical</h3>
              <p className="text-base text-text-mid leading-relaxed font-300">
                Scheduling a deposition sounds simple. It's not. You're coordinating location, time, court reporter, video recording, opposing counsel availability, your client's availability, and expert witness availability. Then you have to prepare deposition outlines, organize key documents for questioning, and track what testimony you need to lock down.
              </p>
              <p className="text-base text-text-mid leading-relaxed font-300 mt-3">
                <strong>Your VA handles:</strong> Coordinating schedules, ordering court reporters, organizing deposition materials, preparing witness outlines, tracking key testimony, ordering transcripts.
              </p>
            </div>

            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-xl text-charcoal mb-2">5. AI Adoption is Growing (26% of Firms, Up from 13%)</h3>
              <p className="text-base text-text-mid leading-relaxed font-300">
                <a href="https://www.rev.com/blog/legal-technology-trends" className="text-brass font-500 hover:underline">AI usage in litigation doubled year-over-year (2025-2026)</a>. But using AI effectively requires someone who understands how to prompt it, organize its output, and validate its results. Your VA can integrate AI tools into your workflow, managing the triage so you review only what matters.
              </p>
            </div>
          </div>
        </section>

        {/* ROI SECTION - VISIBLE NUMBERS */}
        <section className="mb-16 p-10 bg-brass/15 border-2 border-brass rounded-sm">
          <h2 className="font-serif text-3xl text-charcoal mb-8">The Financial Reality: What Your Time is Actually Worth</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="font-serif text-5xl text-brass font-600 mb-2">40-50%</div>
              <p className="text-sm text-charcoal font-500">of your week on non-billable admin</p>
              <p className="text-xs text-text-mid mt-2">(discovery, motions, depositions, trial prep)</p>
            </div>
            <div className="text-center">
              <div className="font-serif text-5xl text-brass font-600 mb-2">25-40 hrs/week</div>
              <p className="text-sm text-charcoal font-500">recovered billing capacity</p>
              <p className="text-xs text-text-mid mt-2">(with a dedicated litigation VA)</p>
            </div>
            <div className="text-center">
              <div className="font-serif text-5xl text-brass font-600 mb-2">$7,500-12,000</div>
              <p className="text-sm text-charcoal font-500">per week in recovered revenue</p>
              <p className="text-xs text-text-mid mt-2">(at $300/hr billing rate)</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-sm border-l-4 border-brass">
            <h3 className="font-600 text-charcoal mb-3">Annual Impact (Solo/Small Firm)</h3>
            <p className="text-base text-text-mid leading-relaxed font-300">
              <strong>Current state:</strong> 40-50% of your time on administrative work = ~$390,000-$624,000/year in lost billable capacity (based on 2,000 annual billable hours at $300/hr).
            </p>
            <p className="text-base text-text-mid leading-relaxed font-300 mt-3">
              <strong>With a litigation VA:</strong> Reduces to 10-15% of your time = recover 25-40 hours/week = <strong>$390,000-$624,000/year in recovered billable capacity</strong>.
            </p>
            <p className="text-base text-text-mid leading-relaxed font-300 mt-3">
              <strong>VA cost:</strong> $2,500-3,500/month = $30,000-42,000/year.
            </p>
            <p className="font-600 text-charcoal mt-4">
              <strong>Net gain: $348,000-582,000/year in first year alone.</strong>
            </p>
          </div>
        </section>

        {/* COMMON FAQs */}
        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-6 mt-12">FAQs: Civil Litigation Practice</h2>

          <div className="space-y-6">
            <details className="p-6 bg-white border border-text-light/10 rounded-sm group">
              <summary className="cursor-pointer font-600 text-charcoal flex justify-between items-center">
                How does a litigation VA organize discovery when documents are in different formats?
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-base text-text-mid leading-relaxed font-300 mt-4">
                Your VA creates a unified database regardless of source format. Documents from opposing counsel, emails, images, video—everything gets catalogued with consistent naming, date, party, and issue tags. This is tedious work, but once organized, you can search "Q3 communications between Johnson and Smith about the contract" and have everything in 10 seconds instead of 3 days hunting through folders.
              </p>
            </details>

            <details className="p-6 bg-white border border-text-light/10 rounded-sm group">
              <summary className="cursor-pointer font-600 text-charcoal flex justify-between items-center">
                Can a VA check local court rules for compliance?
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-base text-text-mid leading-relaxed font-300 mt-4">
                Yes. Your VA maintains a local rules library for each court you practice in, plus judge-specific rules for judges you appear before. Before your motion goes to court, your VA checks every page: margins, font, spacing, caption format, page numbering, signature block. They catch formatting errors before they become filing rejections.
              </p>
            </details>

            <details className="p-6 bg-white border border-text-light/10 rounded-sm group">
              <summary className="cursor-pointer font-600 text-charcoal flex justify-between items-center">
                How much time does a litigation VA actually save?
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-base text-text-mid leading-relaxed font-300 mt-4">
                Discovery management alone typically consumes 30-40% of litigation time. Add motion preparation, deposition logistics, and trial prep, and you're looking at 40-50% of your week spent on non-billable administrative work. A dedicated litigation VA reduces this to 10-15% of your week, freeing 25-40 billable hours per week. At $300/hour billing rate, that's $7,500-12,000/week of recovered capacity.
              </p>
            </details>

            <details className="p-6 bg-white border border-text-light/10 rounded-sm group">
              <summary className="cursor-pointer font-600 text-charcoal flex justify-between items-center">
                What if we use e-discovery software?
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-base text-text-mid leading-relaxed font-300 mt-4">
                E-discovery software is a tool, not a VA. Software organizes documents. A VA decides what matters, flags inconsistencies, identifies smoking guns, and prepares your case summary. Software + VA = you focus on strategy, not mechanics.
              </p>
            </details>

            <details className="p-6 bg-white border border-text-light/10 rounded-sm group">
              <summary className="cursor-pointer font-600 text-charcoal flex justify-between items-center">
                Can a VA prepare witness summaries from depositions?
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-base text-text-mid leading-relaxed font-300 mt-4">
                Absolutely. Your VA receives the deposition transcript, reads it, prepares a summary highlighting key testimony, flags contradictions with prior statements, and organizes witness statements by issue. Instead of you reading 80 pages of testimony, you review a 3-page summary with flagged items.
              </p>
            </details>
          </div>
        </section>

        {/* CTA */}
        <section className="my-16 p-8 bg-charcoal text-white rounded-sm">
          <h2 className="font-serif text-2xl mb-4">The Litigator with the Best-Organized Case Wins</h2>
          <p className="text-base text-white/70 leading-relaxed mb-6 font-300">
            Legal skill is necessary. Case organization is what separates winners from everyone else. Your VA ensures every document is catalogued, every deadline is tracked, every exhibit is indexed, and every motion is compliance-checked. You focus on legal strategy and courtroom presence. We handle the organization.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-brass text-white text-xs font-600 tracking-wider uppercase hover:bg-brass-light transition-all duration-300"
          >
            Get Litigation Support
          </Link>
        </section>
      </article>
    </main>
  );
}
