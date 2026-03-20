import { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'Unbilled Time Calculator | Lawyer Capital VA',
  description: 'Calculate your hidden unbilled time costs and revenue loss.',
  keywords: 'unbilled time, legal profitability, practice analysis',
};

export default function UnbilledTimeCalculatorPage() {
  return (
    <main className="bg-ivory min-h-screen">
      <PageHeader
        label="Assessment Tools"
        title="Unbilled Time Calculator"
        subtitle="Work 60 hours. Bill 40. That 20 hours of unbilled time = $100k-300k annually in lost revenue."
      />
      <article className="max-w-4xl mx-auto px-16 py-20">
        <h1 className="font-serif text-6xl text-charcoal mb-8 leading-tight">
          Unbilled Time Calculator: What Is Your Time Really Costing You?
        </h1>

        <p className="text-lg text-text-mid font-300 mb-12 border-l-4 border-brass pl-6">
          You bill 30-40 hours per week. But you work 50-60 hours. The 10-30 hours of unbilled work is invisible. It is also expensive. Calculate your unbilled time cost and see the real revenue loss.
        </p>

        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-6">Calculate Your Unbilled Time</h2>

          <div className="bg-white p-8 border border-text-light/10 rounded-sm space-y-6">
            <div>
              <label className="block font-600 text-charcoal mb-3">Average hours worked per week</label>
              <input type="number" placeholder="55" className="w-full px-4 py-3 border border-text-light/20 rounded" />
              <p className="text-sm text-text-mid mt-2">Include all work hours (billable + admin + client management)</p>
            </div>

            <div>
              <label className="block font-600 text-charcoal mb-3">Average hours billed per week</label>
              <input type="number" placeholder="35" className="w-full px-4 py-3 border border-text-light/20 rounded" />
              <p className="text-sm text-text-mid mt-2">Only hours you invoice to clients</p>
            </div>

            <div>
              <label className="block font-600 text-charcoal mb-3">Average billing rate per hour</label>
              <div className="flex items-center">
                <span className="mr-2">$</span>
                <input type="number" placeholder="250" className="w-full px-4 py-3 border border-text-light/20 rounded" />
              </div>
              <p className="text-sm text-text-mid mt-2">Your average hourly billing rate</p>
            </div>

            <button className="w-full px-8 py-3 bg-brass text-white font-600 tracking-wider uppercase rounded hover:bg-brass-light transition">
              Calculate
            </button>
          </div>

          <div className="mt-12 p-10 bg-brass/15 border-2 border-brass rounded-sm">
            <h3 className="font-6xl text-charcoal mb-6 text-2xl">Your Results</h3>
            <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
              <strong>Unbilled hours per week:</strong> [CALCULATED]
            </p>
            <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
              <strong>Unbilled time cost per week:</strong> $[CALCULATED]
            </p>
            <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
              <strong>Annual unbilled revenue loss:</strong> $[CALCULATED]
            </p>
            <p className="font-600 text-charcoal text-lg mt-6">
              That is the revenue you are leaving on the table every year. A VA costs $30,000-42,000/year and frees up most of those unbilled hours, recovering $100,000+ in annual revenue.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-6 mt-12">Typical Unbilled Time Categories</h2>

          <div className="space-y-4">
            <div className="border-l-4 border-brass pl-6">
              <p className="font-600 text-charcoal">Email & Communication: 5-10 hours/week</p>
              <p className="text-sm text-text-mid">Client emails, status updates, coordination</p>
            </div>
            <div className="border-l-4 border-brass pl-6">
              <p className="font-600 text-charcoal">Admin & Case Management: 5-15 hours/week</p>
              <p className="text-sm text-text-mid">Document organization, deadline tracking, file management</p>
            </div>
            <div className="border-l-4 border-brass pl-6">
              <p className="font-600 text-charcoal">Emotional Labor (Family Law): 10-20 hours/week</p>
              <p className="text-sm text-text-mid">Client crisis calls, reassurance, boundary management</p>
            </div>
            <div className="border-l-4 border-brass pl-6">
              <p className="font-600 text-charcoal">Business Development: 3-8 hours/week</p>
              <p className="text-sm text-text-mid">Networking, referral calls, business planning</p>
            </div>
          </div>
        </section>

        <section className="my-16 p-8 bg-charcoal text-white rounded-sm">
          <h2 className="font-serif text-2xl mb-4">See The Real Numbers</h2>
          <p className="text-base text-white/70 leading-relaxed mb-6 font-300">
            Most attorneys are shocked when they calculate their actual unbilled time. The calculator above puts numbers to work you already know you are doing. See the real revenue loss. Understand why a VA is an investment, not a cost.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-brass text-white text-xs font-600 tracking-wider uppercase hover:bg-brass-light transition-all duration-300"
          >
            Discuss Your Numbers
          </Link>
        </section>
      </article>
    </main>
  );
}
