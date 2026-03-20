import { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'VA vs Hiring a Paralegal | Lawyer Capital VA',
  description: 'Compare hiring a VA vs hiring a full-time paralegal for your law firm.',
  keywords: 'VA vs paralegal, legal virtual assistant, paralegal costs',
};

export default function VsParalegalPage() {
  return (
    <main className="bg-ivory min-h-screen">
      <PageHeader
        label="Comparison"
        title="VA vs Paralegal: $91,000-190,000 in Annual Savings"
        subtitle="Paralegal: $133k-220k/year (salary, benefits, taxes, management time). VA: $30k-42k/year. Same work. One-third the cost. No management."
      />
      <article className="max-w-4xl mx-auto px-16 py-20">
        <h1 className="font-serif text-6xl text-charcoal mb-8 leading-tight">
          VA vs Paralegal: Why Hiring One Person Doesn't Fix Your Problem
        </h1>

        <p className="text-lg text-text-mid font-300 mb-12 border-l-4 border-brass pl-6">
          <strong>You are thinking:</strong> "I need help. I will hire a paralegal. They will manage my cases, track deadlines, organize documents." You hire at 40 hours/week. You train for 4 weeks. You pay salary + benefits + taxes. One month in, your paralegal is managing paralegals. One crisis and they are overwhelmed. Your problem is not solved. Your overhead is higher.
        </p>

        <section className="mb-16 py-12 bg-charcoal/5 px-8 rounded-sm border-l-4 border-brass">
          <h2 className="font-serif text-3xl text-charcoal mb-6">The Paralegal Problem</h2>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            <strong>Paralegal salary: $50,000-65,000/year. Benefits: $10,000-15,000. Taxes: $8,000-10,000. Total cost: $68,000-90,000/year.</strong> For 40 hours per week, 52 weeks per year = 2,080 billable hours. But paralegals take vacation (2 weeks = 80 hours lost). They are sick (5 days = 40 hours lost). They leave mid-year after you trained them (6 weeks wasted). Your actual billable capacity from a paralegal is closer to 1,600-1,800 hours/year.
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            <strong>But that is only if they are efficient.</strong> New paralegals make mistakes. They need constant oversight. You spend 5-10 hours per week managing them. That is 260-520 hours per year of your time managing staff. At $250/hour, that is $65,000-130,000 in lost attorney time managing one paralegal.
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300">
            <strong>And they cannot scale.</strong> Case volume goes up 20%? You still only have one paralegal. They are overwhelmed. You hire another. Now you are managing two paralegals and drowning in payroll. Your flexibility is gone. Your fixed costs are locked in.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-6 mt-12">VA vs Paralegal Comparison</h2>

          <div className="space-y-8 mb-12">
            <div className="bg-white p-6 border border-text-light/10 rounded-sm">
              <h3 className="font-600 text-charcoal mb-4">Cost Comparison</h3>
              <p className="text-base text-text-mid leading-relaxed font-300 mb-3">
                <strong>Paralegal:</strong> $68,000-90,000/year (salary + benefits + taxes) + 5-10 hours/week management overhead (another $65,000-130,000) = $133,000-220,000/year total cost.
              </p>
              <p className="text-base text-text-mid leading-relaxed font-300">
                <strong>VA:</strong> $2,500-3,500/month = $30,000-42,000/year. No benefits. No taxes. No management overhead. Full capacity.
              </p>
            </div>

            <div className="bg-white p-6 border border-text-light/10 rounded-sm">
              <h3 className="font-600 text-charcoal mb-4">Capacity Comparison</h3>
              <p className="text-base text-text-mid leading-relaxed font-300 mb-3">
                <strong>Paralegal:</strong> 1,600-1,800 actual billable hours/year (after vacation, sick time, training, mistakes, management overhead).
              </p>
              <p className="text-base text-text-mid leading-relaxed font-300">
                <strong>VA:</strong> Specialized support. Can handle 40-50 hours/week on administrative tasks. Scales with your caseload. No slack periods.
              </p>
            </div>

            <div className="bg-white p-6 border border-text-light/10 rounded-sm">
              <h3 className="font-600 text-charcoal mb-4">Flexibility Comparison</h3>
              <p className="text-base text-text-mid leading-relaxed font-300 mb-3">
                <strong>Paralegal:</strong> Full-time commitment. Fixed overhead. Cannot scale down. If case volume drops, you are still paying salary. Employee issues. Turnover. Retraining.
              </p>
              <p className="text-base text-text-mid leading-relaxed font-300">
                <strong>VA:</strong> Scale up or down as needed. Slow month? Reduce hours. Busy month? Increase hours. No commitment. No employee issues. No turnover impact.
              </p>
            </div>

            <div className="bg-white p-6 border border-text-light/10 rounded-sm">
              <h3 className="font-600 text-charcoal mb-4">Specialization Comparison</h3>
              <p className="text-base text-text-mid leading-relaxed font-300 mb-3">
                <strong>Paralegal:</strong> Generalist. Trained in your specific processes. Good at some tasks, mediocre at others. Limited knowledge across practice areas.
              </p>
              <p className="text-base text-text-mid leading-relaxed font-300">
                <strong>VA:</strong> Specialized. Immigration VAs know immigration deadlines. Litigation VAs know discovery. Corporate VAs know M&A process. You get expertise, not generalism.
              </p>
            </div>
          </div>

          <div className="bg-brass/20 p-8 rounded-sm border-l-4 border-brass">
            <h3 className="font-600 text-charcoal mb-3 text-xl">The Bottom Line</h3>
            <p className="text-base text-text-mid leading-relaxed font-300">
              <strong>Paralegal Total Annual Cost: $133,000-220,000</strong> (including management overhead and opportunity cost)
            </p>
            <p className="text-base text-text-mid leading-relaxed font-300 mt-3">
              <strong>VA Total Annual Cost: $30,000-42,000</strong> (no hidden costs, no management overhead)
            </p>
            <p className="text-base text-text-mid leading-relaxed font-300 mt-3">
              <strong>Annual Savings: $91,000-190,000</strong>
            </p>
          </div>
        </section>

        <section className="my-16 p-8 bg-charcoal text-white rounded-sm">
          <h2 className="font-serif text-2xl mb-4">Stop Hiring. Start Scaling.</h2>
          <p className="text-base text-white/70 leading-relaxed mb-6 font-300">
            A paralegal made sense 10 years ago. Today, a VA is cheaper, more flexible, more specialized, and scales with your business. You do not need to hire staff. You need targeted support. A VA provides it at a fraction of the cost.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-brass text-white text-xs font-600 tracking-wider uppercase hover:bg-brass-light transition-all duration-300"
          >
            Talk to Lawyer Capital VA
          </Link>
        </section>
      </article>
    </main>
  );
}
