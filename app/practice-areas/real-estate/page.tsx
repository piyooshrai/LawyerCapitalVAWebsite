import { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'Real Estate Virtual Assistant | Lawyer Capital VA',
  description: 'Transaction coordination, closing management, document preparation, and title coordination.',
  keywords: 'real estate virtual assistant, transaction support, real estate closing support',
};

export default function RealEstateLawPage() {
  return (
    <main className="bg-ivory min-h-screen">
      <PageHeader
        label="Real Estate Support"
        title="67 Emails Before Noon = 3 Hours of Legal Work"
        subtitle="12 live transactions. 67 emails by 5pm. Your VA triages them, you handle what matters. That's how to bill 40 hours a week in real estate."
      />
      <article className="max-w-4xl mx-auto px-16 py-20">
        <h1 className="font-serif text-6xl text-charcoal mb-8 leading-tight">
          Real Estate: Context Switching Kills Your Profit Margin
        </h1>

        <p className="text-lg text-text-mid font-300 mb-12 border-l-4 border-brass pl-6">
          <strong>The real problem:</strong> Monday morning: 12 transactions live. Title company sends preliminary report (3 exceptions need attention). Lender emails new conditions. Opposing counsel submits updated closing statement. Inspector finds water damage. Client asks 4 questions. You are 90 minutes into administrative triage before opening your first case file. Your brain is task-switching between 12 different transaction problems. By noon, you have received 67 emails. By 5pm, you have checked closing dates, tracked title issues, managed conditions, scheduled calls, reviewed documents—and billed 3 hours of actual legal work. That is the real estate practice.
        </p>

        {/* THE ADMINISTRATIVE BURDEN CRISIS */}
        <section className="mb-16 py-12 bg-charcoal/5 px-8 rounded-sm border-l-4 border-brass">
          <h2 className="font-serif text-3xl text-charcoal mb-6">The Real Estate Administrative Burden</h2>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            <strong>A typical real estate transaction generates 40-80 emails during the closing timeline.</strong> Title company sends preliminary report. Lender has document requirements. Inspector finds issues. Opposing counsel redlines the contract. Homeowner has questions. Title company issues document requests. Lender changes terms. You're responding to fragments of information across multiple platforms.
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            <strong>Research shows that transaction coordinators save 10-20 hours per transaction</strong> by managing this administrative burden. They organize documents, track deadlines, coordinate schedules, manage checklists, and respond to routine inquiries. Without a coordinator, you're the bottleneck managing every fragment of information.
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300">
            <strong>And context switching is destroying your profit margins.</strong> You bill hourly. But you're not spending those hours on billable legal work. You're switching between email, spreadsheets, the title company portal, your document management system, and the client call line. That's inefficiency at your hourly rate.
          </p>
        </section>

        {/* PAIN POINTS */}
        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-6 mt-12">The Real Real Estate Pain Points</h2>

          <div className="space-y-8">
            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-xl text-charcoal mb-2">1. Email Coordination Across Multiple Parties (40-80 Emails Per Transaction)</h3>
              <p className="text-base text-text-mid leading-relaxed font-300">
                Title company. Lender. Opposing counsel. Home inspector. Appraiser. Client. Realtor. County assessor. Insurance agent. They all communicate simultaneously with document requests, deadline updates, schedule changes, and questions. You're the only person tracking all of it. One missed email = one missed deadline.
              </p>
            </div>

            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-xl text-charcoal mb-2">2. Document Management & Circulation (30-50 Document Versions)</h3>
              <p className="text-base text-text-mid leading-relaxed font-300">
                Contract. Addendum. Inspection report. Appraisal. Title commitment. Title insurance binder. Loan estimate. Note. Mortgage. Closing disclosure. Walk-through checklist. Settlement statement. You're managing version control: which version is current, who has which version, what's been signed, what's pending, what's been delivered to whom.
              </p>
            </div>

            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-xl text-charcoal mb-2">3. Closing Checklist & Deadline Management</h3>
              <p className="text-base text-text-mid leading-relaxed font-300">
                Inspection deadline. Appraisal deadline. Radon test deadline. Walk-through date. Final walkthrough. Lender clearance. Title commitment review deadline. Closing disclosure delivery (3-day requirement). Funding deadline. Closing date. Post-closing filing deadlines. You're tracking 15-25 distinct deadlines across multiple parties.
              </p>
            </div>

            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-xl text-charcoal mb-2">4. Title Issues & Commitment Review</h3>
              <p className="text-base text-text-mid leading-relaxed font-300">
                Title company issues preliminary commitment. You review exceptions. Some are acceptable. Some require lender approval. Some require seller clearance. You're managing back-and-forth with title company on status, coordinating approval from lender, and tracking title insurance endorsements needed at closing.
              </p>
            </div>

            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-xl text-charcoal mb-2">5. Closing Preparation & Settlement Statement Review</h3>
              <p className="text-base text-text-mid leading-relaxed font-300">
                Title company prepares settlement statement. You verify numbers. Lender provides closing disclosure. Numbers must match. You're coordinating wire instructions, preparing closing agendas, organizing closing documents in closing binders, and preparing client closing instruction packets.
              </p>
            </div>
          </div>
        </section>

        {/* ROI SECTION */}
        <section className="mb-16 p-10 bg-brass/15 border-2 border-brass rounded-sm">
          <h2 className="font-serif text-3xl text-charcoal mb-8">The Hidden Cost of Real Estate Coordination</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="font-serif text-5xl text-brass font-600 mb-2">10-20 hrs</div>
              <p className="text-sm text-charcoal font-500">per transaction in admin</p>
              <p className="text-xs text-text-mid mt-2">(email, document coordination, scheduling)</p>
            </div>
            <div className="text-center">
              <div className="font-serif text-5xl text-brass font-600 mb-2">$2,000-4,000</div>
              <p className="text-sm text-charcoal font-500">lost per transaction</p>
              <p className="text-xs text-text-mid mt-2">(at $200-300/hr average billing rate)</p>
            </div>
            <div className="text-center">
              <div className="font-serif text-5xl text-brass font-600 mb-2">30-40 closings/yr</div>
              <p className="text-sm text-charcoal font-500">typical real estate firm</p>
              <p className="text-xs text-text-mid mt-2">(multiplying the impact)</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-sm border-l-4 border-brass">
            <h3 className="font-600 text-charcoal mb-3">Real Firm Math: Small Real Estate Practice</h3>
            <p className="text-base text-text-mid leading-relaxed font-300">
              <strong>Typical practice:</strong> 30-40 transactions per year. Average transaction = $3,000-5,000 in attorney fees. At 10-20 hours of administrative burden per transaction (email coordination, document management, deadline tracking), you're spending 300-800 hours/year on administrative work that you cannot efficiently delegate.
            </p>
            <p className="text-base text-text-mid leading-relaxed font-300 mt-3">
              <strong>The financial impact:</strong> 300-800 hours × $250/hr average = <strong>$75,000-200,000/year in unrecovered administrative time</strong>. Even at 50% efficiency loss, that's $37,500-100,000/year in lost revenue.
            </p>
            <p className="text-base text-text-mid leading-relaxed font-300 mt-3">
              <strong>With a real estate VA:</strong> Handles email coordination, document management, deadline tracking, title company coordination, and client communication. Reduces administrative burden by 70-80%. Recovers 210-640 hours/year of billable capacity.
            </p>
            <p className="text-base text-text-mid leading-relaxed font-300 mt-3">
              <strong>VA cost:</strong> $2,000-2,500/month = $24,000-30,000/year.
            </p>
            <p className="font-600 text-charcoal mt-4">
              <strong>Net gain: $45,000-170,000/year in recovered transaction revenue.</strong>
            </p>
          </div>
        </section>

        {/* FAQs */}
        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-6 mt-12">FAQs: Real Estate Practice</h2>

          <div className="space-y-6">
            <details className="p-6 bg-white border border-text-light/10 rounded-sm group">
              <summary className="cursor-pointer font-600 text-charcoal flex justify-between items-center">
                How does a VA manage email coordination across title company, lender, and buyer?
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-base text-text-mid leading-relaxed font-300 mt-4">
                Your VA is copied on all transaction emails. They maintain a transaction summary showing key updates from each party. They flag urgent items for your attention. They respond to routine questions (document status, timeline updates, schedule confirmations) on your behalf. They keep clients informed so you don't receive the same question 5 times.
              </p>
            </details>

            <details className="p-6 bg-white border border-text-light/10 rounded-sm group">
              <summary className="cursor-pointer font-600 text-charcoal flex justify-between items-center">
                Can a VA manage version control on 30-50 transaction documents?
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-base text-text-mid leading-relaxed font-300 mt-4">
                Yes. Your VA maintains a document tracker showing every transaction document (contract, addendum, disclosures, appraisal, title commitment, insurance binder, loan documents, closing disclosure, settlement statement). They track which version is current, who needs to review/sign it, and its delivery status. They organize everything in a structured folder so you find the right document in seconds.
              </p>
            </details>

            <details className="p-6 bg-white border border-text-light/10 rounded-sm group">
              <summary className="cursor-pointer font-600 text-charcoal flex justify-between items-center">
                How does a VA manage closing timelines and deadline tracking?
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-base text-text-mid leading-relaxed font-300 mt-4">
                Your VA maintains a transaction timeline showing all critical dates: inspection deadline, appraisal deadline, radon testing, walk-through, final walkthrough, closing disclosure delivery (3-day requirement), lender clearance, closing date. They track when dates pass, alert you to upcoming deadlines, and confirm completion of each milestone.
              </p>
            </details>

            <details className="p-6 bg-white border border-text-light/10 rounded-sm group">
              <summary className="cursor-pointer font-600 text-charcoal flex justify-between items-center">
                Can a VA review and organize title commitments and exceptions?
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-base text-text-mid leading-relaxed font-300 mt-4">
                Your VA receives the preliminary title commitment, creates an exceptions list, flags items requiring attention, coordinates with title company on items needed for closing, confirms lender approval of exceptions, and tracks title insurance endorsements needed. They prepare a summary so you see at a glance what matters and what's on track.
              </p>
            </details>

            <details className="p-6 bg-white border border-text-light/10 rounded-sm group">
              <summary className="cursor-pointer font-600 text-charcoal flex justify-between items-center">
                How much time does administrative coordination actually consume per transaction?
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-base text-text-mid leading-relaxed font-300 mt-4">
                Research shows transaction coordinators save 10-20 hours per transaction. At $250/hour average billing rate, that's $2,500-5,000 in recovered time per deal. Across 30-40 transactions/year, that's $75,000-200,000 in unrecovered administrative time. A dedicated real estate VA reduces this by 70-80%, freeing 210-640 hours/year for billable legal work.
              </p>
            </details>
          </div>
        </section>

        {/* CTA */}
        <section className="my-16 p-8 bg-charcoal text-white rounded-sm">
          <h2 className="font-serif text-2xl mb-4">Stop Managing Spreadsheets at Your Hourly Rate</h2>
          <p className="text-base text-white/70 leading-relaxed mb-6 font-300">
            Real estate law is about understanding contract terms and protecting client interests. You don't do that while managing closing timelines and coordinating 40 emails per transaction. A dedicated real estate VA handles the administrative coordination, so you focus on the legal work that justifies your billing rate. Your clients pay for your expertise, not your ability to organize documents.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-brass text-white text-xs font-600 tracking-wider uppercase hover:bg-brass-light transition-all duration-300"
          >
            Get Real Estate Support
          </Link>
        </section>
      </article>
    </main>
  );
}
