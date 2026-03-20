import { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'Law Firm Efficiency Assessment | Lawyer Capital VA',
  description: 'Evaluate your firm efficiency and identify opportunities.',
  keywords: 'law firm efficiency, practice metrics, productivity assessment',
};

export default function EfficiencyAssessmentPage() {
  return (
    <main className="bg-ivory min-h-screen">
      <PageHeader
        label="Assessment Tools"
        title="Efficiency Assessment"
        subtitle="You think 80% billable. Reality: 40-50% admin, 20-30% client communication, 10% meetings, 10-20% billable. Find your actual breakdown."
      />
      <article className="max-w-4xl mx-auto px-16 py-20">
        <h1 className="font-serif text-6xl text-charcoal mb-8 leading-tight">
          Law Firm Efficiency Assessment: Where Time Really Goes
        </h1>

        <p className="text-lg text-text-mid font-300 mb-12 border-l-4 border-brass pl-6">
          Most attorneys have no idea where their time actually goes. You think you spend 80% of your time on billable legal work. In reality, you probably spend 40-50% on administrative work, client management, and email. This assessment reveals your actual time allocation and identifies your biggest efficiency opportunity.
        </p>

        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-6">Where Does Your Week Go?</h2>

          <p className="text-base text-text-mid leading-relaxed font-300 mb-6">
            Track your time for one full week. Put actual hours in each category. Be honest. Do not estimate. Actually track your time.
          </p>

          <div className="space-y-6">
            <div>
              <label className="block font-600 text-charcoal mb-3">Billable Legal Work (research, writing, case analysis, court prep)</label>
              <input type="number" placeholder="30" className="w-full px-4 py-3 border border-text-light/20 rounded" />
              <p className="text-sm text-text-mid mt-2">Hours per week you spend on legal work you bill for</p>
            </div>

            <div>
              <label className="block font-600 text-charcoal mb-3">Client Communication (emails, calls, status updates, reassurance)</label>
              <input type="number" placeholder="8" className="w-full px-4 py-3 border border-text-light/20 rounded" />
              <p className="text-sm text-text-mid mt-2">Hours per week on client-facing communication</p>
            </div>

            <div>
              <label className="block font-600 text-charcoal mb-3">Administrative Work (deadline tracking, document organization, file management)</label>
              <input type="number" placeholder="10" className="w-full px-4 py-3 border border-text-light/20 rounded" />
              <p className="text-sm text-text-mid mt-2">Hours per week on case administration</p>
            </div>

            <div>
              <label className="block font-600 text-charcoal mb-3">Meeting & Coordination (staff meetings, court calls, opposing counsel coordination)</label>
              <input type="number" placeholder="5" className="w-full px-4 py-3 border border-text-light/20 rounded" />
              <p className="text-sm text-text-mid mt-2">Hours per week in meetings and coordination</p>
            </div>

            <div>
              <label className="block font-600 text-charcoal mb-3">Business Development (networking, referral calls, marketing)</label>
              <input type="number" placeholder="3" className="w-full px-4 py-3 border border-text-light/20 rounded" />
              <p className="text-sm text-text-mid mt-2">Hours per week on business development</p>
            </div>

            <button className="w-full px-8 py-3 bg-brass text-white font-600 tracking-wider uppercase rounded hover:bg-brass-light transition">
              Calculate Efficiency Breakdown
            </button>
          </div>
        </section>

        <section className="mb-16 p-10 bg-brass/15 border-2 border-brass rounded-sm">
          <h2 className="font-serif text-3xl text-charcoal mb-8">Your Time Allocation</h2>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-6">
            <strong>Billable Legal Work: [CALCULATED]%</strong> - This is the only time you should be doing. Everything else is support work.
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-6">
            <strong>Administrative Work + Client Communication: [CALCULATED]%</strong> - This is the time a VA should handle. This is not your highest-value work.
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300">
            <strong>Opportunity:</strong> A VA handling your administrative work + managing routine client communication could free [CALCULATED] hours per week = [CALCULATED] in recovered billable capacity per week.
          </p>
        </section>

        <section className="my-16 p-8 bg-charcoal text-white rounded-sm">
          <h2 className="font-serif text-2xl mb-4">Know Your Numbers. Fix Your Time.</h2>
          <p className="text-base text-white/70 leading-relaxed mb-6 font-300">
            The assessment above is an eye-opener for most attorneys. You discover you are spending 40-50% of your time on work that could be delegated. That is $50,000-100,000+ per year in opportunity cost. A VA costs $30,000-42,000 and frees up most of that time. The ROI is immediate.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-brass text-white text-xs font-600 tracking-wider uppercase hover:bg-brass-light transition-all duration-300"
          >
            Calculate Your Opportunity
          </Link>
        </section>
      </article>
    </main>
  );
}
