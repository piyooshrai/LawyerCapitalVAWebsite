import { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import { pricing, salaryComparison } from '@/lib/legal-data';

export const metadata: Metadata = {
  title: 'Legal Virtual Assistant Pricing | Lawyer Capital VA',
  description: 'Transparent pricing for legal VA services. Part-time $700/mo, Full-time $1,300/mo. No contracts. Month-to-month. Compare to paralegal costs.',
  keywords: 'legal virtual assistant pricing, VA cost for law firms, paralegal vs virtual assistant cost',
};

export default function PricingPage() {
  return (
    <main className="bg-ivory min-h-screen">
      <PageHeader
        label="Pricing"
        title="Simple, Transparent Legal VA Pricing"
        subtitle="No hidden fees. No contracts. No surprises. What you see is what you pay."
      />

      <article className="max-w-5xl mx-auto px-16 py-20">
        <p className="text-lg text-text-mid font-300 mb-16 border-l-4 border-brass pl-8 pb-8 border-b border-brass/20">
          Legal VA pricing should be simple. It is at Lawyer Capital. Two tiers. Transparent features. Month-to-month. No lock-in. And ROI that becomes obvious in week one.
        </p>

        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-12">Our Pricing Plans</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Part-Time Plan */}
            <div className="border-2 border-brass/30 rounded-sm p-8">
              <h3 className="font-serif text-2xl text-charcoal mb-2">{pricing.partTime.name}</h3>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="font-serif text-4xl text-brass">${pricing.partTime.price}</span>
                <span className="text-base text-text-mid">{pricing.partTime.period}</span>
              </div>
              <p className="text-sm text-brass font-600 mb-8">{pricing.partTime.hours}</p>

              <div className="border-t border-brass/20 pt-6 mb-6">
                <p className="text-sm font-600 text-charcoal mb-4">What's Included</p>
                <ul className="space-y-3">
                  {pricing.partTime.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-text-mid flex items-start gap-3">
                      <span className="text-brass font-bold mt-0.5">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/contact"
                className="w-full inline-block text-center px-8 py-3 bg-brass text-charcoal text-xs font-600 tracking-widest uppercase hover:bg-brass-light transition-all duration-300"
              >
                Start Part-Time
              </Link>
            </div>

            {/* Full-Time Plan */}
            <div className="border-2 border-brass rounded-sm p-8 relative bg-charcoal/5">
              <div className="absolute top-0 right-0 px-4 py-2 bg-brass text-charcoal text-xs font-600 tracking-widest uppercase">
                Most Popular
              </div>
              <h3 className="font-serif text-2xl text-charcoal mb-2">{pricing.fullTime.name}</h3>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="font-serif text-4xl text-brass">${pricing.fullTime.price}</span>
                <span className="text-base text-text-mid">{pricing.fullTime.period}</span>
              </div>
              <p className="text-sm text-brass font-600 mb-8">{pricing.fullTime.hours}</p>

              <div className="border-t border-brass/20 pt-6 mb-6">
                <p className="text-sm font-600 text-charcoal mb-4">Everything in Part-Time, plus</p>
                <ul className="space-y-3">
                  {pricing.fullTime.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-text-mid flex items-start gap-3">
                      <span className="text-brass font-bold mt-0.5">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/contact"
                className="w-full inline-block text-center px-8 py-3 bg-brass text-charcoal text-xs font-600 tracking-widest uppercase hover:bg-brass-light transition-all duration-300"
              >
                Start Full-Time
              </Link>
            </div>
          </div>
        </section>

        <section className="mb-16 py-12 bg-charcoal/5 px-8 rounded-sm border-l-4 border-brass">
          <h2 className="font-serif text-3xl text-charcoal mb-6">The Real Cost Comparison</h2>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-6">
            Legal VA pricing isn't about what you pay—it's about what you recover. Let's be specific.
          </p>

          <div className="space-y-6">
            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-xl text-charcoal mb-3">Lawyer Capital VA vs Paralegal</h3>
              <div className="grid grid-cols-2 gap-6 mb-4">
                <div>
                  <p className="text-sm text-brass font-600 mb-2">Paralegal (Annual)</p>
                  <p className="text-2xl font-serif text-charcoal">${salaryComparison.paralegal.min.toLocaleString()}</p>
                  <p className="text-xs text-text-mid mt-1">to ${salaryComparison.paralegal.max.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-sm text-brass font-600 mb-2">Lawyer Capital VA (Annual)</p>
                  <p className="text-2xl font-serif text-charcoal">$8,400 - $15,600</p>
                  <p className="text-xs text-text-mid mt-1">$700-$1,300/mo</p>
                </div>
              </div>
              <p className="text-base text-text-mid font-300">
                <strong>Annual Savings:</strong> $30,000-$57,600. You're getting dedicated administrative support at 70-80% less cost than hiring a paralegal, with zero overhead, zero turnover, zero benefits costs.
              </p>
            </div>

            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-xl text-charcoal mb-3">ROI Calculation (Immigration Practice)</h3>
              <div className="space-y-3 mb-4">
                <p className="text-base text-text-mid font-300">
                  <strong>Assumption:</strong> Solo immigration attorney, $250/hour average billing rate, 40 hour/week capacity.
                </p>
                <p className="text-base text-text-mid font-300">
                  <strong>Current State:</strong> Spending 12 hours/week on intake, docket management, RFE tracking, client communication. Lost revenue: 12 hours × $250 × 52 weeks = <span className="text-brass font-600">$156,000 annually</span>.
                </p>
                <p className="text-base text-text-mid font-300">
                  <strong>With Full-Time VA:</strong> Cost = $15,600/year. Recovered billable hours: 12/week. Annual revenue recovery: $156,000.
                </p>
                <p className="text-base text-text-mid font-300">
                  <strong>Net Gain Year 1:</strong> $140,400. Your VA pays for itself in 4 weeks. Everything after that is pure margin.
                </p>
              </div>
            </div>

            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-xl text-charcoal mb-3">ROI Calculation (Corporate Practice)</h3>
              <div className="space-y-3 mb-4">
                <p className="text-base text-text-mid font-300">
                  <strong>Assumption:</strong> 3-attorney corporate firm, $300/hour average billing rate, 160 billable hour/month target per attorney.
                </p>
                <p className="text-base text-text-mid font-300">
                  <strong>Current State:</strong> Collectively spending 20 hours/week on contract management, document preparation, billing, client communication. Lost revenue: 20 hours × $300 × 52 weeks = <span className="text-brass font-600">$312,000 annually</span>.
                </p>
                <p className="text-base text-text-mid font-300">
                  <strong>With Full-Time VA:</strong> Cost = $15,600/year. Recovered billable hours: 18/week (conservative estimate). Annual revenue recovery: $280,800.
                </p>
                <p className="text-base text-text-mid font-300">
                  <strong>Net Gain Year 1:</strong> $265,200. The VA becomes your most profitable hire.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16 p-10 bg-brass/15 border-2 border-brass rounded-sm">
          <h2 className="font-serif text-3xl text-charcoal mb-6">What's NOT Included</h2>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-6">
            Transparency means being clear about what we don't do. Here's what you handle:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-serif text-lg text-charcoal mb-3">Legal Work</h3>
              <ul className="space-y-2 text-sm text-text-mid">
                <li>• Legal research or analysis</li>
                <li>• Legal advice to clients</li>
                <li>• Court appearances</li>
                <li>• Depositions or testimony</li>
                <li>• Substantive legal writing</li>
              </ul>
            </div>
            <div>
              <h3 className="font-serif text-lg text-charcoal mb-3">Strategic Work</h3>
              <ul className="space-y-2 text-sm text-text-mid">
                <li>• Practice strategy</li>
                <li>• Client development</li>
                <li>• Settlement negotiations</li>
                <li>• Partner/client decisions</li>
                <li>• Confidential strategy calls</li>
              </ul>
            </div>
          </div>
          <p className="text-base text-text-mid leading-relaxed font-300 mt-6">
            Your VA handles everything else: the mechanics, the organization, the coordination. You do the legal work and client relationships.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-8">Pricing FAQ</h2>

          <details className="border-l-4 border-brass/30 pl-6 mb-6 group cursor-pointer">
            <summary className="text-lg font-500 text-charcoal py-4 group-open:text-brass transition-colors">
              Can I start part-time and upgrade to full-time later?
            </summary>
            <div className="pb-4 text-base text-text-mid font-300 leading-relaxed">
              Yes. Many firms start with 20 hours/week and scale to 40 as they see the ROI. Your VA stays the same—we just increase hours. No retraining. No new person. You already have continuity.
            </div>
          </details>

          <details className="border-l-4 border-brass/30 pl-6 mb-6 group cursor-pointer">
            <summary className="text-lg font-500 text-charcoal py-4 group-open:text-brass transition-colors">
              Do I need a contract?
            </summary>
            <div className="pb-4 text-base text-text-mid font-300 leading-relaxed">
              No. Month-to-month. You can cancel anytime with 2 weeks notice. We've never had someone leave because the price wasn't working—they leave because their practice reached a new size and they needed a second VA, not a replacement.
            </div>
          </details>

          <details className="border-l-4 border-brass/30 pl-6 mb-6 group cursor-pointer">
            <summary className="text-lg font-500 text-charcoal py-4 group-open:text-brass transition-colors">
              What if I need more than 40 hours/week?
            </summary>
            <div className="pb-4 text-base text-text-mid font-300 leading-relaxed">
              We can add a second VA to your team. Each VA is dedicated to you. If you need 60 hours/week, that's two full-time VAs = $2,600/month. Still less than hiring one paralegal.
            </div>
          </details>

          <details className="border-l-4 border-brass/30 pl-6 mb-6 group cursor-pointer">
            <summary className="text-lg font-500 text-charcoal py-4 group-open:text-brass transition-colors">
              Do you offer discounts for annual payment?
            </summary>
            <div className="pb-4 text-base text-text-mid font-300 leading-relaxed">
              Not on monthly pricing—we keep it simple. But if you want to prepay 3, 6, or 12 months, we offer 5-10% discounts. Most firms stick with month-to-month because the ROI justifies the flexibility.
            </div>
          </details>

          <details className="border-l-4 border-brass/30 pl-6 mb-6 group cursor-pointer">
            <summary className="text-lg font-500 text-charcoal py-4 group-open:text-brass transition-colors">
              What if my practice is seasonal?
            </summary>
            <div className="pb-4 text-base text-text-mid font-300 leading-relaxed">
              We can flex hours month-to-month. January needs 30 hours? March needs 45? Your VA scales with your work. No penalties. No long-term commitments. Just billing for hours worked.
            </div>
          </details>

          <details className="border-l-4 border-brass/30 pl-6 group cursor-pointer">
            <summary className="text-lg font-500 text-charcoal py-4 group-open:text-brass transition-colors">
              Are there any hidden fees?
            </summary>
            <div className="pb-4 text-base text-text-mid font-300 leading-relaxed">
              No. Zero hidden fees. You pay $700 or $1,300 per month. That's it. No onboarding fees, no platform fees, no surprise charges. We invoice on the 1st. You pay on whatever terms work for you.
            </div>
          </details>
        </section>

        <section className="my-16 p-8 bg-charcoal text-white rounded-sm">
          <h2 className="font-serif text-3xl mb-4">Ready to Calculate Your ROI?</h2>
          <p className="text-base text-white/70 leading-relaxed mb-6 font-300">
            Most law firms see ROI in the first month. Some in the first week. Let's talk about what that looks like for your practice.
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
