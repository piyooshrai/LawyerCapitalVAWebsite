import { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'Case Profitability Calculator | Lawyer Capital VA',
  description: 'Understand which cases are actually profitable and why.',
  keywords: 'case profitability, law practice profitability, case analysis',
};

export default function CaseProfitabilityPage() {
  return (
    <main className="bg-ivory min-h-screen">
      <PageHeader
        label="Assessment Tools"
        title="Case Profitability Calculator"
        subtitle="Simple estate: $3,500 fee, 15 hours = $233/hr. Complex estate: $3,500 fee, 80 hours = $43/hr. Your pricing is probably wrong."
      />
      <article className="max-w-4xl mx-auto px-16 py-20">
        <h1 className="font-serif text-6xl text-charcoal mb-8 leading-tight">
          Case Profitability Calculator: Which Cases Are Actually Profitable?
        </h1>

        <p className="text-lg text-text-mid font-300 mb-12 border-l-4 border-brass pl-6">
          You charge a flat fee for estates. But do you know if they are profitable? Some estates take 20 hours (profitable at $3,500). Some take 80 hours (underwater at $3,500). Without data, you are pricing in the dark. Calculate your actual case profitability and adjust your pricing.
        </p>

        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-6">Case Profitability Analysis</h2>

          <div className="space-y-8">
            <div className="bg-white p-6 border border-text-light/10 rounded-sm">
              <h3 className="font-600 text-charcoal mb-4">Example: Estate Planning Cases</h3>

              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-600 text-charcoal mb-2">Simple Estate Fee</label>
                  <div className="flex items-center">
                    <span className="mr-2">$</span>
                    <input type="number" placeholder="3500" className="w-full px-4 py-2 border border-text-light/20 rounded" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-600 text-charcoal mb-2">Avg Hours for Simple Estate</label>
                  <input type="number" placeholder="15" className="w-full px-4 py-2 border border-text-light/20 rounded" />
                </div>

                <div>
                  <label className="block text-sm font-600 text-charcoal mb-2">Complex Estate Fee</label>
                  <div className="flex items-center">
                    <span className="mr-2">$</span>
                    <input type="number" placeholder="3500" className="w-full px-4 py-2 border border-text-light/20 rounded" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-600 text-charcoal mb-2">Avg Hours for Complex Estate</label>
                  <input type="number" placeholder="60" className="w-full px-4 py-2 border border-text-light/20 rounded" />
                </div>

                <div>
                  <label className="block text-sm font-600 text-charcoal mb-2">Your Hourly Rate</label>
                  <div className="flex items-center">
                    <span className="mr-2">$</span>
                    <input type="number" placeholder="250" className="w-full px-4 py-2 border border-text-light/20 rounded" />
                  </div>
                </div>
              </div>

              <button className="w-full px-6 py-2 bg-brass text-white font-600 rounded hover:bg-brass-light transition">
                Calculate Profitability
              </button>
            </div>

            <div className="bg-brass/20 p-6 rounded-sm border-l-4 border-brass">
              <h3 className="font-600 text-charcoal mb-4">Results</h3>
              <p className="text-base text-text-mid leading-relaxed font-300 mb-3">
                <strong>Simple Estate:</strong> $3,500 fee ÷ 15 hours = $233/hour (PROFITABLE at $250/hour rate)
              </p>
              <p className="text-base text-text-mid leading-relaxed font-300 mb-3">
                <strong>Complex Estate:</strong> $3,500 fee ÷ 60 hours = $58/hour (UNDERWATER at $250/hour rate)
              </p>
              <p className="text-base text-text-mid leading-relaxed font-300">
                <strong>Action:</strong> Charge $3,500 for simple estates. Charge $10,000-15,000 for complex estates. Or use a VA to reduce complex estate hours to 25-30 (making them profitable at $5,000-7,500).
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-6 mt-12">Why This Matters</h2>

          <div className="space-y-4">
            <p className="text-base text-text-mid leading-relaxed font-300">
              <strong>You cannot price without data.</strong> If you do not know how many hours each case type actually takes, you are guessing. You are undercharging some cases and overcharging others.
            </p>

            <p className="text-base text-text-mid leading-relaxed font-300">
              <strong>A VA can change the math.</strong> A complex estate that takes 60 hours now could take 25-30 hours with a VA doing asset inventory, document organization, and correspondence. Suddenly a $3,500 fee is profitable.
            </p>

            <p className="text-base text-text-mid leading-relaxed font-300">
              <strong>The real opportunity: Track, analyze, adjust.</strong> Start tracking hours per case type. Build a database. Analyze profitability. Adjust your pricing and processes based on data, not hope.
            </p>
          </div>
        </section>

        <section className="my-16 p-8 bg-charcoal text-white rounded-sm">
          <h2 className="font-serif text-2xl mb-4">Price Based on Data, Not Guesses</h2>
          <p className="text-base text-white/70 leading-relaxed mb-6 font-300">
            Calculate your actual case profitability. See which cases are underwater. Decide: raise fees, reduce hours with a VA, or stop taking unprofitable cases. A VA helps you do the second option. Let us help you build a profitable practice.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-brass text-white text-xs font-600 tracking-wider uppercase hover:bg-brass-light transition-all duration-300"
          >
            Analyze Your Profitability
          </Link>
        </section>
      </article>
    </main>
  );
}
