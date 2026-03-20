import { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'Corporate Law Virtual Assistant | Lawyer Capital VA',
  description: 'M&A coordination, closing management, contract drafting support, and deal documentation.',
  keywords: 'corporate law virtual assistant, M&A support, corporate transaction support',
};

export default function CorporateLawPage() {
  return (
    <main className="bg-ivory min-h-screen">
      <PageHeader
        label="Corporate Law Support"
        title="M&A Closing Slips 4 Months When There's No Coordinator"
        subtitle="82 disclosure schedules, 23 customer consents, 8 parties in 3 time zones. Your VA tracks every deadline, signature, and exception."
      />
      <article className="max-w-4xl mx-auto px-16 py-20">
        <h1 className="font-serif text-6xl text-charcoal mb-8 leading-tight">
          Corporate Law: 60% of M&A Time is Administrative
        </h1>

        <p className="text-lg text-text-mid font-300 mb-12 border-l-4 border-brass pl-6">
          <strong>The real problem:</strong> The purchase agreement is signed. 47 days to closing. You are managing: 3 financial audits (one delayed), 82 disclosure schedules (buyer keeps questioning exceptions), 2 real property schedules (title issues in 4 parcels), equipment inventory (buyer wants recount), customer contracts (consent needed from 23 customers), and signature coordination across 8 parties across 3 time zones. One party missing a signature delays everything 48 hours. You are now 4 months into what should be 6 weeks.
        </p>

        {/* THE M&A COORDINATION CRISIS */}
        <section className="mb-16 py-12 bg-charcoal/5 px-8 rounded-sm border-l-4 border-brass">
          <h2 className="font-serif text-3xl text-charcoal mb-6">The M&A Coordination Crisis</h2>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            <strong><a href="https://corpgov.law.harvard.edu/2026/01/20/m-a-predictions-and-guidance-for-2026" className="text-brass font-500 hover:underline">According to Harvard Law's M&A research (2026)</a>,</strong> the period between signing and closing has expanded dramatically. Buyers are conducting deeper due diligence. Sellers are negotiating longer. Financial audits take 6-8 weeks. You're not in the courtroom. You're managing spreadsheets, tracking document circulation, coordinating calls across time zones, and chasing the same signature from the CFO's assistant for the third time.
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            A mid-market acquisition involves 50-100+ closing documents. Each requires review, revision, signature, and filing. You have title companies, financial advisors, tax counsel, and the opposing firm all asking for different versions. One closing calendar manages signing dates, document exchanges, fund disbursement, and post-closing deliverables.
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300">
            <strong>And 40-60% of your time on the deal is spent on administrative coordination, not legal analysis.</strong> That's not valuable legal work. That's project management that you're billing at attorney rates because nobody else on the team knows which document belongs where.
          </p>
        </section>

        {/* PAIN POINTS */}
        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-6 mt-12">The Real Corporate Law Pain Points</h2>

          <div className="space-y-8">
            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-xl text-charcoal mb-2">1. M&A Coordination: Signing to Closing (40-60 Days of Pure Admin)</h3>
              <p className="text-base text-text-mid leading-relaxed font-300">
                Between signing and closing, you're managing closing documents, coordinating signatures, tracking conditions precedent, organizing financial statements, preparing tax certificates, coordinating with title companies, and tracking down missing board resolutions. A deal with 50-100+ closing documents means 50-100+ review cycles. One party missing a signature delays everything 24-48 hours.
              </p>
            </div>

            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-xl text-charcoal mb-2">2. Due Diligence Organization (Financial, Legal, Environmental)</h3>
              <p className="text-base text-text-mid leading-relaxed font-300">
                A buyer's due diligence request list is 50-80 items. Seller's counsel needs to gather contracts, financial statements, litigation records, environmental reports, board minutes, lease agreements, employment agreements, insurance policies. You're tracking what's been requested, what's been provided, what's been redacted, what's pending. That's 20-30 hours of pure document management.
              </p>
            </div>

            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-xl text-charcoal mb-2">3. Representation & Warranty (R&W) Organization & Tracking</h3>
              <p className="text-base text-text-mid leading-relaxed font-300">
                The purchase agreement has 30-50+ representations and warranties. You need to track which party is responsible for satisfying each one. You need to organize schedules and exceptions for each representation. You're managing back-and-forth on disclosure schedules that are 100+ pages. This coordination alone is 15-25 hours per deal.
              </p>
            </div>

            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-xl text-charcoal mb-2">4. Asset Schedule Management & Inventory</h3>
              <p className="text-base text-text-mid leading-relaxed font-300">
                Real property? Equipment? Intellectual property? Customer contracts? You need detailed schedules of everything. Seller provides initial list. Buyer questions items. Valuation disputes arise. You're updating spreadsheets, negotiating what's included/excluded, tracking changes through 5-10 revision cycles.
              </p>
            </div>

            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-xl text-charcoal mb-2">5. Post-Closing Deliverables & Escrow Management</h3>
              <p className="text-base text-text-mid leading-relaxed font-300">
                Closing involves escrow accounts, indemnification baskets, survival periods, and post-closing adjustments. You're tracking earn-out calculations, managing escrow agent communications, preparing release letters, and handling indemnification claims that arrive 3-6 months later.
              </p>
            </div>
          </div>
        </section>

        {/* ROI SECTION */}
        <section className="mb-16 p-10 bg-brass/15 border-2 border-brass rounded-sm">
          <h2 className="font-serif text-3xl text-charcoal mb-8">The Revenue Impact of M&A Coordination Chaos</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="font-serif text-5xl text-brass font-600 mb-2">40-60%</div>
              <p className="text-sm text-charcoal font-500">of your M&A time on admin</p>
              <p className="text-xs text-text-mid mt-2">(document management, coordination, tracking)</p>
            </div>
            <div className="text-center">
              <div className="font-serif text-5xl text-brass font-600 mb-2">$50,000-100,000</div>
              <p className="text-sm text-charcoal font-500">per deal in lost admin time</p>
              <p className="text-xs text-text-mid mt-2">(at $350/hr average, 140+ hours per deal)</p>
            </div>
            <div className="text-center">
              <div className="font-serif text-5xl text-brass font-600 mb-2">2-3 deals/year</div>
              <p className="text-sm text-charcoal font-500">lost capacity</p>
              <p className="text-xs text-text-mid mt-2">(inability to take new matters due to admin burden)</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-sm border-l-4 border-brass">
            <h3 className="font-600 text-charcoal mb-3">Real Firm Math: Mid-Market Corporate</h3>
            <p className="text-base text-text-mid leading-relaxed font-300">
              <strong>Typical practice:</strong> 4-6 M&A deals per year. Average deal = 300-400 billable hours at $350/hr = $105,000-140,000 per deal. At 40-60% administrative time, you're spending 120-240 hours on administrative coordination that you <strong>cannot delegate to paralegals without constant oversight</strong>.
            </p>
            <p className="text-base text-text-mid leading-relaxed font-300 mt-3">
              <strong>The real impact:</strong> Those 120-240 hours per deal = <strong>$42,000-84,000 in unrecovered administrative time per deal</strong>. At 4-6 deals/year, that's <strong>$168,000-504,000/year</strong> in billable capacity you can't recover because you're doing admin triage.
            </p>
            <p className="text-base text-text-mid leading-relaxed font-300 mt-3">
              <strong>With a corporate M&A VA:</strong> Reduces administrative coordination from 40-60% to 10-15% of your time. You focus on legal strategy. The VA handles closing calendars, document management, signature tracking, and schedule updates.
            </p>
            <p className="text-base text-text-mid leading-relaxed font-300 mt-3">
              <strong>VA cost:</strong> $3,000-4,000/month = $36,000-48,000/year.
            </p>
            <p className="font-600 text-charcoal mt-4">
              <strong>Net gain: $120,000-456,000/year in recovered billable capacity.</strong>
            </p>
          </div>
        </section>

        {/* FAQs */}
        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-6 mt-12">FAQs: Corporate Law Practice</h2>

          <div className="space-y-6">
            <details className="p-6 bg-white border border-text-light/10 rounded-sm group">
              <summary className="cursor-pointer font-600 text-charcoal flex justify-between items-center">
                How does a VA manage closing documents and signature tracking?
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-base text-text-mid leading-relaxed font-300 mt-4">
                Your VA maintains a closing document checklist showing all 50-100+ documents, their status (drafted, circulated, signed, filed), who needs to sign, and when signatures are needed. They track signature requests, flag missing signatures, and coordinate with closing agents. They maintain a master closing timeline tracking all key dates and deliverables.
              </p>
            </details>

            <details className="p-6 bg-white border border-text-light/10 rounded-sm group">
              <summary className="cursor-pointer font-600 text-charcoal flex justify-between items-center">
                Can a VA organize due diligence responses without missing items?
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-base text-text-mid leading-relaxed font-300 mt-4">
                Yes. Your VA receives a due diligence request list (50-80 items), creates a tracking spreadsheet, coordinates with sellers/clients to gather documents, flags items that are missing/incomplete, redacts sensitive information per your instructions, and confirms delivery to buyer's counsel. They maintain an organized data room so you can find any document in seconds.
              </p>
            </details>

            <details className="p-6 bg-white border border-text-light/10 rounded-sm group">
              <summary className="cursor-pointer font-600 text-charcoal flex justify-between items-center">
                How does a VA manage R&W schedules and disclosure updates?
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-base text-text-mid leading-relaxed font-300 mt-4">
                Your VA creates a representation and warranty schedule template. They organize exceptions by representation type. They track back-and-forth revisions with opposing counsel. They flag when information changes and updates are needed. They maintain version control so you know which version is current and who made the last edit.
              </p>
            </details>

            <details className="p-6 bg-white border border-text-light/10 rounded-sm group">
              <summary className="cursor-pointer font-600 text-charcoal flex justify-between items-center">
                Can a VA manage asset schedules and prepare inventory lists?
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-base text-text-mid leading-relaxed font-300 mt-4">
                Absolutely. Your VA prepares initial asset inventories, maintains schedules of real property (with descriptions, values, titles), equipment lists, customer contracts, IP registrations, and key agreements. They track changes through negotiation cycles. They organize assets by category so schedules are clear and complete before closing.
              </p>
            </details>

            <details className="p-6 bg-white border border-text-light/10 rounded-sm group">
              <summary className="cursor-pointer font-600 text-charcoal flex justify-between items-center">
                How much time does closing coordination actually consume?
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-base text-text-mid leading-relaxed font-300 mt-4">
                Closing coordination consumes 40-60% of your M&A time—typically 120-240 hours per deal at $350/hour billing rate. That's $42,000-84,000 in unrecovered administrative time per transaction. A dedicated M&A VA reduces this to 10-15% of your time, freeing 100-200+ hours per deal that you can focus on legal strategy and client relationships instead of signature chasing.
              </p>
            </details>
          </div>
        </section>

        {/* CTA */}
        <section className="my-16 p-8 bg-charcoal text-white rounded-sm">
          <h2 className="font-serif text-2xl mb-4">Your Legal Analysis Deserves Your Time</h2>
          <p className="text-base text-white/70 leading-relaxed mb-6 font-300">
            M&A deals require strategic thinking about deal structure, tax implications, and risk allocation. You don't do that while managing closing calendars and chasing signatures. A dedicated corporate VA handles the administrative triage, so you can focus on what makes you valuable: legal judgment. Your clients pay for your expertise, not your ability to track spreadsheets.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-brass text-white text-xs font-600 tracking-wider uppercase hover:bg-brass-light transition-all duration-300"
          >
            Get Corporate Law Support
          </Link>
        </section>
      </article>
    </main>
  );
}
