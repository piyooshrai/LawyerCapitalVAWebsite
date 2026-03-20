import { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'Family Law Virtual Assistant | Lawyer Capital VA',
  description: 'VA support for discovery coordination, parenting plans, financial disclosures, and settlement negotiation.',
  keywords: 'family law virtual assistant, divorce support services, family law case management',
};

export default function FamilyLawPage() {
  return (
    <main className="bg-ivory min-h-screen">
      <PageHeader
        label="Family Law Support"
        title="52% of Family Law Attorneys Are Burned Out"
        subtitle="Emotional labor, financial discovery, and client communication consume 25-40% of your time unbilled. Your VA recovers $200k+ annually."
      />
      <article className="max-w-5xl mx-auto px-16 py-20">
        <p className="text-lg text-text-mid font-300 mb-16 border-l-4 border-brass pl-8 pb-8 border-b border-brass/20">
          <strong>The real problem:</strong> Your client texts at 11:47pm. Their ex posted something on social media. They are having a crisis. You have already billed 10 hours this week on emotional support you cannot charge for. Child support calculations require 6 hours of financial documentation review. Parenting plan negotiation is stalled because the other parent keeps changing their availability. You are losing $3,000-5,000 per case in unbilled work you cannot avoid without abandoning your clients.
        </p>

        {/* THE BURNOUT CRISIS */}
        <section className="mb-16 py-12 bg-charcoal/5 px-8 rounded-sm border-l-4 border-brass">
          <h2 className="font-serif text-3xl text-charcoal mb-6">The Family Law Burnout Crisis</h2>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            <strong>52% of family law attorneys report high burnout.</strong> That's not a preference survey. That's an ABA study showing that more than half of practitioners are struggling. The cause isn't hard cases. It's the impossible combination of emotional labor + administrative burden + calculation complexity.
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            A divorce case involves: financial discovery (8-18 hours), child support calculations (4-8 hours), parenting plan negotiation (8-15 hours), settlement coordination (10-20 hours), plus 10-20 hours of unbilled client hand-holding. That's 40-81 hours of work for a case you bill 30-50 hours on.
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300">
            <strong>The math doesn't work.</strong> You're working 40-81 hours but billing 30-50. At 35% unbilled time, you're losing $200,000-$250,000/year in potential revenue. A dedicated family law VA changes the equation.
          </p>
        </section>

        {/* PAIN POINTS */}
        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-6 mt-12">Where Your Time Actually Goes</h2>

          <div className="space-y-8">
            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-xl text-charcoal mb-2">1. Client Emotional Labor (10-20 Hours Per Case, Unbilled)</h3>
              <p className="text-base text-text-mid leading-relaxed font-300">
                Clients in divorce are in crisis. They're calling about custody anxiety, financial fear, anger at their ex. 40-60% of initial consultation time is emotional support, not legal advice. You're providing therapy you can't bill for.
              </p>
            </div>

            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-xl text-charcoal mb-2">2. Financial Discovery & Support Calculations (12-18 Hours Per Case)</h3>
              <p className="text-base text-text-mid leading-relaxed font-300">
                Child support varies by state. You need W-2s, 1099s, K-1s, business returns. You verify income. You calculate adjustments for parenting time, health insurance, childcare. A single calculation error = client complaint. Contested support = 6-12 hours of recalculation per dispute.
              </p>
            </div>

            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-xl text-charcoal mb-2">3. Parenting Plan Negotiation (8-15 Hours, Often Unpaid)</h3>
              <p className="text-base text-text-mid leading-relaxed font-300">
                Custody is emotional. Parents argue over details: who picks up from soccer? Spring break rotation? What about holidays? You're drafting parenting plans, redlining opposing counsel's versions, managing client expectations. This often happens outside billing hours.
              </p>
            </div>

            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-xl text-charcoal mb-2">4. Caseload Management (40-80+ Active Files)</h3>
              <p className="text-base text-text-mid leading-relaxed font-300">
                Family law firms often carry 40-80+ active cases. Each needs deadline tracking, discovery coordination, client communication. You're not focusing deeply on any one case; you're juggling 80 at once.
              </p>
            </div>

            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-xl text-charcoal mb-2">5. Settlement Negotiation & Boundary Violations</h3>
              <p className="text-base text-text-mid leading-relaxed font-300">
                Clients treat you as their emotional support. They're texting at night. They want to vent about their ex. You can't bill for this, but you can't ignore it (they're paying clients in crisis). Boundary management is exhausting.
              </p>
            </div>
          </div>
        </section>

        {/* ROI SECTION */}
        <section className="mb-16 p-10 bg-brass/15 border-2 border-brass rounded-sm">
          <h2 className="font-serif text-3xl text-charcoal mb-8">The Revenue You're Leaving on the Table</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="font-serif text-5xl text-brass font-600 mb-2">25-40%</div>
              <p className="text-sm text-charcoal font-500">of time is unbilled</p>
              <p className="text-xs text-text-mid mt-2">(emotional labor, admin work, calculations)</p>
            </div>
            <div className="text-center">
              <div className="font-serif text-5xl text-brass font-600 mb-2">$214,250</div>
              <p className="text-sm text-charcoal font-500">annual revenue loss (minimum)</p>
              <p className="text-xs text-text-mid mt-2">(at 30% unbilled, $250/hr average)</p>
            </div>
            <div className="text-center">
              <div className="font-serif text-5xl text-brass font-600 mb-2">$3,000/mo</div>
              <p className="text-sm text-charcoal font-500">VA cost to recover it</p>
              <p className="text-xs text-text-mid mt-2">(handles admin, calculations, scheduling)</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-sm border-l-4 border-brass">
            <h3 className="font-600 text-charcoal mb-3">Real Numbers: Solo/Small Firm Family Law</h3>
            <p className="text-base text-text-mid leading-relaxed font-300">
              <strong>Typical caseload:</strong> 50 active cases/year. Average case = 45-80 hours (uncontested) to 100-250+ hours (contested). At 35% unbilled rate due to emotional labor + admin, you're losing <strong>$200,000-$250,000/year</strong>.
            </p>
            <p className="text-base text-text-mid leading-relaxed font-300 mt-3">
              <strong>With a family law VA:</strong> Handles discovery coordination, support calculations, parenting plan organization, client scheduling. Reduces unbilled time from 35% to 15%. Recovers <strong>$180,000+/year in billable capacity</strong>.
            </p>
            <p className="text-base text-text-mid leading-relaxed font-300 mt-3">
              <strong>VA cost:</strong> $2,500-3,000/month = $30,000-36,000/year.
            </p>
            <p className="font-600 text-charcoal mt-4">
              <strong>Net gain: $144,000-$150,000/year in recovered revenue.</strong>
            </p>
          </div>
        </section>

        {/* FAQs */}
        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-6 mt-12">FAQs: Family Law Practice</h2>

          <div className="space-y-6">
            <details className="p-6 bg-white border border-text-light/10 rounded-sm group">
              <summary className="cursor-pointer font-600 text-charcoal flex justify-between items-center">
                How does a VA handle sensitive financial discovery in divorces?
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-base text-text-mid leading-relaxed font-300 mt-4">
                Your VA receives financial documents under NDA (all sign confidentiality agreements). They organize all financial records (W-2s, 1099s, K-1s, business returns, bank statements, investment accounts) into a structured format. They flag missing documents. They calculate income summaries that you then use for support calculations.
              </p>
            </details>

            <details className="p-6 bg-white border border-text-light/10 rounded-sm group">
              <summary className="cursor-pointer font-600 text-charcoal flex justify-between items-center">
                Can a VA calculate child support and spousal support?
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-base text-text-mid leading-relaxed font-300 mt-4">
                Your VA prepares the calculation framework. They input the financial data into your state's formula (Virginia has specific guidelines). They generate multiple scenarios (actual income, imputed income, variations). You review the output and make the legal determination. This saves you 4-6 hours per support calculation.
              </p>
            </details>

            <details className="p-6 bg-white border border-text-light/10 rounded-sm group">
              <summary className="cursor-pointer font-600 text-charcoal flex justify-between items-center">
                How do we handle client boundary violations (late-night calls, emotional support)?
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-base text-text-mid leading-relaxed font-300 mt-4">
                Your VA fields initial client calls and provides status updates. For emotional crises, the VA responds professionally: "Your attorney is focused on [specific legal work]. Here's what's happening in your case." This reduces your after-hours calls by 40-50% and protects your boundaries while keeping clients informed.
              </p>
            </details>

            <details className="p-6 bg-white border border-text-light/10 rounded-sm group">
              <summary className="cursor-pointer font-600 text-charcoal flex justify-between items-center">
                What about parenting plan drafting and negotiation?
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-base text-text-mid leading-relaxed font-300 mt-4">
                Your VA maintains parenting plan templates. They customize them for your specific client (custody schedule, holiday rotation, decision-making authority). They track redlines from opposing counsel. They calculate custody percentages for support purposes. You focus on negotiating terms; the VA handles the documentation.
              </p>
            </details>

            <details className="p-6 bg-white border border-text-light/10 rounded-sm group">
              <summary className="cursor-pointer font-600 text-charcoal flex justify-between items-center">
                How much does unbilled time actually cost you?
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-base text-text-mid leading-relaxed font-300 mt-4">
                At 35% unbilled time (conservative for family law), you're working 54 hours to bill 35 hours per week. At $250/hr average billing, that's $4,125/week lost. Annually: $214,250+ in lost revenue. A $3,000/month VA reduces unbilled time to 15%, recovering ~$180,000+ annually.
              </p>
            </details>
          </div>
        </section>

        {/* CTA */}
        <section className="my-16 p-8 bg-charcoal text-white rounded-sm">
          <h2 className="font-serif text-2xl mb-4">Stop Absorbing Unbilled Emotional Labor</h2>
          <p className="text-base text-white/70 leading-relaxed mb-6 font-300">
            Family law requires compassion. But compassion doesn't pay your bills. A VA handles the administrative burden and client hand-holding, so you can focus on legal strategy and actually earn what you're worth. Your clients still get the care they need—it just doesn't cost you $200,000/year.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-brass text-white text-xs font-600 tracking-wider uppercase hover:bg-brass-light transition-all duration-300"
          >
            Get Family Law Support
          </Link>
        </section>
      </article>
    </main>
  );
}
