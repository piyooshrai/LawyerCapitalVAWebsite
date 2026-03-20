import { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'Legal Reporting & Analytics Service | Lawyer Capital VA',
  description: 'Practice metrics, case analytics, profitability reporting, and performance tracking.',
  keywords: 'legal practice analytics, law firm reporting, case profitability',
};

export default function ReportingAnalyticsPage() {
  return (
    <main className="bg-ivory min-h-screen">
      <PageHeader
        label="Core Services"
        title="Know Which Cases Are Killing You"
        subtitle="Monthly metrics on billable hours, realization rates, unbilled time by practice area, and case profitability. Data-driven pricing and staffing."
      />
      <article className="max-w-4xl mx-auto px-16 py-20">
        <h1 className="font-serif text-6xl text-charcoal mb-8 leading-tight">
          Reporting & Analytics: Know Your Numbers
        </h1>

        <p className="text-lg text-text-mid font-300 mb-12 border-l-4 border-brass pl-6">
          <strong>The reality:</strong> You do not know which of your practice areas is most profitable. You do not know which client relationships are underwater. You do not track unbilled time by matter type. You invoice based on spreadsheets and memory. You have no idea whether you are making money or losing money on specific cases. That is management by hope. It does not work.
        </p>

        <section className="mb-16 py-12 bg-charcoal/5 px-8 rounded-sm border-l-4 border-brass">
          <h2 className="font-serif text-3xl text-charcoal mb-6">Why Solo Attorneys Miss Analytics</h2>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            <strong>Time tracking is painful and incomplete.</strong> You work on a case. You forget to log your time. You estimate later. The estimate is wrong. You merge cases in your memory. You invoice based on guesses. You have no idea whether the case was profitable.
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            <strong>And you are making pricing decisions without data.</strong> You charge a flat fee for estates. But do you know whether $3,000 is profitable? Some estates take 20 hours. Some take 80 hours. Without data, you are guessing. You are undercharging on complex estates and overcharging on simple ones.
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300">
            <strong>Your VA tracks metrics, generates reports, and shows you the numbers.</strong> Which matters are profitable. Which practice areas drive revenue. Where you are losing money. Unbilled time by category. Billable hours per case. You make decisions based on data, not hope.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-6 mt-12">Reporting & Analytics Services</h2>

          <div className="space-y-6">
            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-xl text-charcoal mb-2">Monthly Practice Metrics</h3>
              <p className="text-base text-text-mid leading-relaxed font-300">
                Your VA generates monthly reporting showing: billable hours by attorney, billable hours by practice area, realization rate (billed vs worked), unbilled time by category, average case value, case completion rate. You know your numbers.
              </p>
            </div>

            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-xl text-charcoal mb-2">Case Profitability Analysis</h3>
              <p className="text-base text-text-mid leading-relaxed font-300">
                Your VA tracks profitability by case type. Estate work. Immigration matters. Litigation. Corporate transactions. Which case types generate profit. Which are underwater. You price future work based on actual profitability data.
              </p>
            </div>

            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-xl text-charcoal mb-2">Client Relationship Analytics</h3>
              <p className="text-base text-text-mid leading-relaxed font-300">
                Your VA tracks revenue per client, profitability per client, work hours per client. Which clients are most profitable. Which are high-maintenance for low return. You focus on relationships that matter.
              </p>
            </div>

            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-xl text-charcoal mb-2">Unbilled Time Analysis</h3>
              <p className="text-base text-text-mid leading-relaxed font-300">
                Your VA tracks unbilled time by category: client communication, case research, administrative work, business development. Where is your time really going? Which activities are eating your profit margin without billable output?
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16 p-10 bg-brass/15 border-2 border-brass rounded-sm">
          <h2 className="font-serif text-3xl text-charcoal mb-8">The Power of Knowing Your Numbers</h2>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            <strong>Example: Estate Planning Analytics</strong>
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            You charge $3,500 flat fee for estate plans. Your VA's analysis shows: simple estates (average 15 hours) are profitable at $3,500. Complex estates (average 60 hours) are unprofitable. You adjust: $3,500 for simple, $7,500-10,000 for complex. Immediate profitability improvement.
          </p>
          <p className="font-600 text-charcoal">
            Data-driven pricing + service bundling = $20,000-50,000/year in recovered profitability on the same work volume.
          </p>
        </section>

        <section className="my-16 p-8 bg-charcoal text-white rounded-sm">
          <h2 className="font-serif text-2xl mb-4">Stop Guessing. Start Knowing.</h2>
          <p className="text-base text-white/70 leading-relaxed mb-6 font-300">
            Your VA provides the metrics and analytics that turn a guessing practice into a managed business. You see where money is made. You see where money is lost. You adjust. You profit. It is that simple.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-brass text-white text-xs font-600 tracking-wider uppercase hover:bg-brass-light transition-all duration-300"
          >
            Get Reporting & Analytics Support
          </Link>
        </section>
      </article>
    </main>
  );
}
