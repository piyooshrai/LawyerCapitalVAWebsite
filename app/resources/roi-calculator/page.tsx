'use client';

import { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import { useState } from 'react';

export default function ROICalculatorPage() {
  const [hourlyRate, setHourlyRate] = useState(250);
  const [recoveredHours, setRecoveredHours] = useState(15);
  const [selectedPlan, setSelectedPlan] = useState('full-time');

  const vaAnnualCost = selectedPlan === 'part-time' ? 8400 : 15600;
  const weeksPerYear = 52;
  const annualRecoveryRevenue = hourlyRate * recoveredHours * weeksPerYear;
  const netGainYear1 = annualRecoveryRevenue - vaAnnualCost;
  const breakEvenWeeks = (vaAnnualCost / (hourlyRate * recoveredHours)) || 0;
  const roiPercentage = ((netGainYear1 / vaAnnualCost) * 100).toFixed(0);

  return (
    <main className="bg-ivory min-h-screen">
      <PageHeader
        label="Free Tool"
        title="Legal VA ROI Calculator"
        subtitle="Calculate your exact return on investment. See revenue impact in real time."
      />

      <article className="max-w-5xl mx-auto px-16 py-20">
        <p className="text-lg text-text-mid font-300 mb-16 border-l-4 border-brass pl-8 pb-8 border-b border-brass/20">
          ROI isn't abstract—it's specific to your practice. Your hourly rate. Your billable capacity. The hours you're currently spending on administration. Use this calculator to see your exact numbers.
        </p>

        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-12">Enter Your Numbers</h2>

          <div className="border-2 border-brass/30 rounded-sm p-8 bg-charcoal/5 mb-8">
            {/* Hourly Rate Input */}
            <div className="mb-8">
              <label className="block text-sm font-600 text-charcoal mb-3">Your Hourly Billing Rate</label>
              <div className="flex items-center gap-4">
                <span className="text-2xl font-serif text-brass">${hourlyRate}</span>
                <input
                  type="range"
                  min="100"
                  max="500"
                  step="25"
                  value={hourlyRate}
                  onChange={(e) => setHourlyRate(Number(e.target.value))}
                  className="flex-1 h-2 bg-brass/20 rounded-sm cursor-pointer"
                />
              </div>
              <p className="text-xs text-text-light mt-2">Adjust to your actual billing rate (100-500/hr)</p>
            </div>

            {/* Recovered Hours Input */}
            <div className="mb-8">
              <label className="block text-sm font-600 text-charcoal mb-3">Billable Hours Recovered Per Week</label>
              <div className="flex items-center gap-4">
                <span className="text-2xl font-serif text-brass">{recoveredHours}</span>
                <input
                  type="range"
                  min="5"
                  max="40"
                  step="1"
                  value={recoveredHours}
                  onChange={(e) => setRecoveredHours(Number(e.target.value))}
                  className="flex-1 h-2 bg-brass/20 rounded-sm cursor-pointer"
                />
              </div>
              <p className="text-xs text-text-light mt-2">How many billable hours per week spent on admin tasks? (5-40)</p>
            </div>

            {/* VA Plan Selection */}
            <div>
              <label className="block text-sm font-600 text-charcoal mb-3">VA Plan</label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => setSelectedPlan('part-time')}
                  className={`px-6 py-3 text-sm font-600 transition-all ${
                    selectedPlan === 'part-time'
                      ? 'bg-brass text-charcoal'
                      : 'bg-white border-2 border-brass/30 text-charcoal hover:border-brass'
                  }`}
                >
                  Part-Time ($700/mo)
                </button>
                <button
                  onClick={() => setSelectedPlan('full-time')}
                  className={`px-6 py-3 text-sm font-600 transition-all ${
                    selectedPlan === 'full-time'
                      ? 'bg-brass text-charcoal'
                      : 'bg-white border-2 border-brass/30 text-charcoal hover:border-brass'
                  }`}
                >
                  Full-Time ($1,300/mo)
                </button>
              </div>
            </div>
          </div>

          <h2 className="font-serif text-3xl text-charcoal mb-8">Your ROI</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Breakeven Card */}
            <div className="border-2 border-brass rounded-sm p-8 bg-brass/15">
              <div className="text-center">
                <p className="text-xs text-brass font-600 uppercase mb-2">Time to Breakeven</p>
                <p className="font-serif text-5xl text-brass mb-1">{breakEvenWeeks.toFixed(1)}</p>
                <p className="text-sm text-charcoal font-500">weeks</p>
              </div>
            </div>

            {/* Year 1 ROI Card */}
            <div className="border-2 border-brass rounded-sm p-8 bg-brass/15">
              <div className="text-center">
                <p className="text-xs text-brass font-600 uppercase mb-2">Year 1 ROI</p>
                <p className="font-serif text-5xl text-brass mb-1">{roiPercentage}%</p>
                <p className="text-sm text-charcoal font-500">return on investment</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Annual Revenue Recovery */}
            <div className="border-l-4 border-brass pl-6">
              <p className="text-xs text-brass font-600 uppercase mb-1">Annual Revenue Recovery</p>
              <p className="font-serif text-3xl text-charcoal">${annualRecoveryRevenue.toLocaleString('en-US', { maximumFractionDigits: 0 })}</p>
              <p className="text-xs text-text-light mt-2">{recoveredHours} hrs/week × {weeksPerYear} weeks × ${hourlyRate}/hr</p>
            </div>

            {/* VA Annual Cost */}
            <div className="border-l-4 border-brass pl-6">
              <p className="text-xs text-brass font-600 uppercase mb-1">VA Annual Cost</p>
              <p className="font-serif text-3xl text-charcoal">${vaAnnualCost.toLocaleString()}</p>
              <p className="text-xs text-text-light mt-2">{selectedPlan === 'part-time' ? '$700' : '$1,300'}/month</p>
            </div>

            {/* Net Gain */}
            <div className="border-l-4 border-brass pl-6 bg-brass/10 p-4">
              <p className="text-xs text-brass font-600 uppercase mb-1">Net Gain Year 1</p>
              <p className="font-serif text-3xl text-brass">${netGainYear1.toLocaleString('en-US', { maximumFractionDigits: 0 })}</p>
              <p className="text-xs text-charcoal mt-2">Pure profit from recovered hours</p>
            </div>
          </div>
        </section>

        <section className="mb-16 py-12 bg-charcoal/5 px-8 rounded-sm border-l-4 border-brass">
          <h2 className="font-serif text-3xl text-charcoal mb-6">What This Means</h2>

          <div className="space-y-4">
            <p className="text-base text-text-mid leading-relaxed font-300">
              <strong>Breakeven Timeline:</strong> You'll recover your VA investment in {breakEvenWeeks.toFixed(1)} weeks. That's before profit. Every hour after that is pure margin.
            </p>
            <p className="text-base text-text-mid leading-relaxed font-300">
              <strong>Year 1 Profit:</strong> ${netGainYear1.toLocaleString('en-US', { maximumFractionDigits: 0 })} in net gain on a ${vaAnnualCost.toLocaleString()} investment. That's a {roiPercentage}% return.
            </p>
            <p className="text-base text-text-mid leading-relaxed font-300">
              <strong>Beyond Year 1:</strong> Your VA doesn't cost more next year. You're not replacing them. So all ${annualRecoveryRevenue.toLocaleString('en-US', { maximumFractionDigits: 0 })} in annual recovery becomes profit. Year 2 ROI is infinite—you paid the VA once; you're collecting revenue forever.
            </p>
          </div>
        </section>

        <section className="mb-16 p-10 bg-brass/15 border-2 border-brass rounded-sm">
          <h2 className="font-serif text-3xl text-charcoal mb-6">Reality Check: Is Your Estimate Conservative?</h2>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            Most firms underestimate billable hours lost to admin work. They think "Oh, I spend maybe 10 hours a week on intake and docket management." In reality, when you include client communication, billing follow-up, and document organization—it's 15-25 hours per week.
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            So if your calculator shows ${netGainYear1.toLocaleString('en-US', { maximumFractionDigits: 0 })} in Year 1 profit, the real number might be 50% higher.
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300">
            These numbers are real. Conservative. Achievable in your first month with a VA.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-8">FAQ</h2>

          <details className="border-l-4 border-brass/30 pl-6 mb-6 group cursor-pointer">
            <summary className="text-lg font-500 text-charcoal py-4 group-open:text-brass transition-colors">
              What if I'm not sure how many hours I lose to admin work?
            </summary>
            <div className="pb-4 text-base text-text-mid font-300 leading-relaxed">
              Time-track for one week. Actually log your hours by category (billable legal work, admin work, client communication, etc.). You'll be shocked. Most solos are shocked. That real number is what you plug into the calculator.
            </div>
          </details>

          <details className="border-l-4 border-brass/30 pl-6 mb-6 group cursor-pointer">
            <summary className="text-lg font-500 text-charcoal py-4 group-open:text-brass transition-colors">
              What if I'm not recovering all those hours immediately?
            </summary>
            <div className="pb-4 text-base text-text-mid font-300 leading-relaxed">
              Conservative. Assume 50% of recovered hours translate to billed hours immediately (some become capacity headroom, some become better client service). Even at 50% recovery, the ROI is still 100%+ in Year 1.
            </div>
          </details>

          <details className="border-l-4 border-brass/30 pl-6 mb-6 group cursor-pointer">
            <summary className="text-lg font-500 text-charcoal py-4 group-open:text-brass transition-colors">
              Does this assume the VA works perfectly from day one?
            </summary>
            <div className="pb-4 text-base text-text-mid font-300 leading-relaxed">
              No. The first 2 weeks are onboarding/training. Some tasks take longer to hand off than others. We build in a 30-day ramp period before full productivity. The calculator assumes full productivity by month 2. Most firms hit it faster.
            </div>
          </details>

          <details className="border-l-4 border-brass/30 pl-6 group cursor-pointer">
            <summary className="text-lg font-500 text-charcoal py-4 group-open:text-brass transition-colors">
              What if my billing rate varies by practice area?
            </summary>
            <div className="pb-4 text-base text-text-mid font-300 leading-relaxed">
              Use your average hourly rate. If you bill immigration at $200/hr and corporate at $350/hr, plug in $275. The VA supports both practice areas, so they're recovering a mix of hours.
            </div>
          </details>
        </section>

        <section className="my-16 p-8 bg-charcoal text-white rounded-sm">
          <h2 className="font-serif text-3xl mb-4">Ready to Make It Real?</h2>
          <p className="text-base text-white/70 leading-relaxed mb-6 font-300">
            You've seen your numbers. Let's talk about how to turn this calculation into a real VA working in your practice. Schedule a consultation to discuss your specific practice needs.
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
