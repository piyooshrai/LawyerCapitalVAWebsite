import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Estate Planning Virtual Assistant | Lawyer Capital VA',
  description: 'Client intake, document prep, trust administration support, and probate coordination.',
  keywords: 'estate planning virtual assistant, probate support services',
};

export default function EstatePlanningPage() {
  return (
    <main className="pt-32 bg-ivory min-h-screen">
      <article className="max-w-4xl mx-auto px-16 py-20">
        <h1 className="font-serif text-6xl text-charcoal mb-8 leading-tight">
          Estate Planning: Incomplete Information = Unexecuted Plans
        </h1>

        <p className="text-lg text-text-mid font-300 mb-12 border-l-4 border-brass pl-6">
          <strong>The real problem:</strong> You draft a comprehensive estate plan. Client signs it. 18 months later, the client dies. Probate begins. You discover: the house was never retitled into the trust. The $400,000 investment account never made it into the trust. The life insurance beneficiary still names the ex-spouse. The old 401k from 1998 is sitting in a custody account nobody remembered. The digital assets (cryptocurrency) are not mentioned in the plan. The estate goes through probate anyway. The trust is useless. The family is fighting. You are liable.
        </p>

        {/* THE ESTATE PLANNING EXECUTION CRISIS */}
        <section className="mb-16 py-12 bg-charcoal/5 px-8 rounded-sm border-l-4 border-brass">
          <h2 className="font-serif text-3xl text-charcoal mb-6">The Estate Planning Execution Gap</h2>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            <strong>A comprehensive estate plan requires complete information.</strong> All assets (real estate, bank accounts, investments, retirement accounts, life insurance). All liabilities (mortgages, debts, obligations). All beneficiaries (spouses, children, grandchildren, charities). All special situations (second marriages, special needs beneficiaries, business interests). Most attorneys gather 60-70% of this information and draft the plan. The remaining 30-40% never gets documented.
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            <strong>Then comes trust funding.</strong> A revocable living trust is created but not funded. Clients need to retitle assets into the trust (homes, investment accounts, business interests). Your clients don't understand what to retitle. They don't complete the process. The trust sits dormant. When death occurs, their estate goes through probate anyway.
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300">
            <strong>And probate administration is chaotic without proper planning.</strong> Estate accounting requires tracking all receipts and disbursements. Court filings have strict deadlines. Beneficiary notifications must be served. Without a VA managing the process, probate takes 18-36 months when it should take 12-18 months.
          </p>
        </section>

        {/* PAIN POINTS */}
        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-6 mt-12">The Real Estate Planning Pain Points</h2>

          <div className="space-y-8">
            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-xl text-charcoal mb-2">1. Comprehensive Asset Discovery (60-80% Never Fully Documented)</h3>
              <p className="text-base text-text-mid leading-relaxed font-300">
                Clients know their house and their bank account. They don't think to mention the cemetery plot, the safe deposit box contents, the old 401k from the 1990s, the small business interest, the life insurance from their former employer, the digital assets. You gather obvious assets but miss 30-40% of total estate value.
              </p>
            </div>

            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-xl text-charcoal mb-2">2. Trust Funding Coordination (60%+ of Plans Never Fully Funded)</h3>
              <p className="text-base text-text-mid leading-relaxed font-300">
                A trust is drafted and executed. But then it must be funded. You prepare a funding checklist showing which assets need retitling. Clients get confused. They don't know how to retitle their brokerage account. The bank won't retitle the mortgage without the client calling personally. Months pass. The plan is never fully funded.
              </p>
            </div>

            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-xl text-charcoal mb-2">3. Beneficiary Designation Coordination (Mismatched Designations)</h3>
              <p className="text-base text-text-mid leading-relaxed font-300">
                IRA beneficiary designations don't match the will. Life insurance designations don't match the trust. POD (payable on death) account designations name ex-spouses. One life insurance policy names an old beneficiary worth $500,000. The plan says the money should go to the spouse, but the designation says otherwise. Litigation results.
              </p>
            </div>

            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-xl text-charcoal mb-2">4. Probate Administration Timeline (12-18 Months Without Support)</h3>
              <p className="text-base text-text-mid leading-relaxed font-300">
                After death, the estate must be probated. Court filings are required. Creditor notices must be published. Estate inventory must be prepared. Assets must be appraised. Taxes must be calculated. Beneficiary statements must be prepared. At 8-15 hours per month of administration, probate is a 18-24 month project without a dedicated person managing it.
              </p>
            </div>

            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-xl text-charcoal mb-2">5. Estate Accounting & Creditor/Beneficiary Management</h3>
              <p className="text-base text-text-mid leading-relaxed font-300">
                The estate must track every penny in and out. You're managing bills paid from the estate, investment gains/losses, distributions to beneficiaries, tax filings. Creditors file claims. Beneficiaries ask questions. One beneficiary always disputes the accounting. You're managing disputes while administering the estate.
              </p>
            </div>
          </div>
        </section>

        {/* ROI SECTION */}
        <section className="mb-16 p-10 bg-brass/15 border-2 border-brass rounded-sm">
          <h2 className="font-serif text-3xl text-charcoal mb-8">The Hidden Cost of Incomplete Estate Planning</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="font-serif text-5xl text-brass font-600 mb-2">30-40%</div>
              <p className="text-sm text-charcoal font-500">of assets never documented</p>
              <p className="text-xs text-text-mid mt-2">(cemetery plots, digital assets, old 401ks)</p>
            </div>
            <div className="text-center">
              <div className="font-serif text-5xl text-brass font-600 mb-2">60%+</div>
              <p className="text-sm text-charcoal font-500">of plans never fully funded</p>
              <p className="text-xs text-text-mid mt-2">(clients don't complete retitling)</p>
            </div>
            <div className="text-center">
              <div className="font-serif text-5xl text-brass font-600 mb-2">18-36 mo</div>
              <p className="text-sm text-charcoal font-500">probate administration time</p>
              <p className="text-xs text-text-mid mt-2">(without dedicated management)</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-sm border-l-4 border-brass">
            <h3 className="font-600 text-charcoal mb-3">Real Firm Math: Solo/Small Estate Planning Practice</h3>
            <p className="text-base text-text-mid leading-relaxed font-300">
              <strong>Typical practice:</strong> 50-80 planning engagements per year, 20-40 probate administrations. Each planning engagement = 8-15 hours (interviews, document prep, follow-up). Each probate = 40-60 hours (court filings, accounting, distributions). That's 400-1,200 hours/year on follow-up and administration that you struggle to bill for.
            </p>
            <p className="text-base text-text-mid leading-relaxed font-300 mt-3">
              <strong>The real impact:</strong> You draft the plan and send it to the client. You never know if it was funded. You discover 18 months later (during probate) that the major assets were never retitled. The plan is incomplete. The client's wishes weren't executed. That's a quality failure and a malpractice exposure.
            </p>
            <p className="text-base text-text-mid leading-relaxed font-300 mt-3">
              <strong>With an estate planning VA:</strong> Ensures complete asset discovery. Prepares detailed funding checklists. Coordinates with clients on trust funding completion. Manages probate administration from start to finish. Tracks beneficiary designations. Prepares all accountings and court filings.
            </p>
            <p className="text-base text-text-mid leading-relaxed font-300 mt-3">
              <strong>VA cost:</strong> $2,500-3,000/month = $30,000-36,000/year.
            </p>
            <p className="font-600 text-charcoal mt-4">
              <strong>Net gain: Complete plans, fully funded trusts, and probate administration that actually works.</strong>
            </p>
          </div>
        </section>

        {/* FAQs */}
        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-6 mt-12">FAQs: Estate Planning Practice</h2>

          <div className="space-y-6">
            <details className="p-6 bg-white border border-text-light/10 rounded-sm group">
              <summary className="cursor-pointer font-600 text-charcoal flex justify-between items-center">
                How does a VA ensure complete asset discovery?
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-base text-text-mid leading-relaxed font-300 mt-4">
                Your VA uses comprehensive questionnaires covering all asset categories: real estate, bank accounts, brokerage accounts, retirement accounts, life insurance, business interests, collectibles, digital assets. They follow up on vague answers. They identify assets the client forgot to mention (old 401ks, safety deposit boxes, stored valuables). They prepare a complete asset inventory that becomes the foundation of the plan.
              </p>
            </details>

            <details className="p-6 bg-white border border-text-light/10 rounded-sm group">
              <summary className="cursor-pointer font-600 text-charcoal flex justify-between items-center">
                Can a VA manage trust funding completion?
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-base text-text-mid leading-relaxed font-300 mt-4">
                Absolutely. Your VA prepares a detailed funding checklist: which assets need to be retitled, what documentation is needed, which institutions need to be contacted, what signatures are required. They follow up with clients on completion. They coordinate with financial institutions on retitling. They track progress until all assets are fully funded into the trust.
              </p>
            </details>

            <details className="p-6 bg-white border border-text-light/10 rounded-sm group">
              <summary className="cursor-pointer font-600 text-charcoal flex justify-between items-center">
                How does a VA coordinate beneficiary designations?
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-base text-text-mid leading-relaxed font-300 mt-4">
                Your VA identifies all assets with beneficiary designations (IRAs, life insurance, POD accounts). They compare designations to the plan. They flag mismatches. They prepare a coordination checklist showing which designations need updating. They coordinate with clients and financial institutions to correct designations so the plan actually works as intended.
              </p>
            </details>

            <details className="p-6 bg-white border border-text-light/10 rounded-sm group">
              <summary className="cursor-pointer font-600 text-charcoal flex justify-between items-center">
                Can a VA manage the entire probate process?
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-base text-text-mid leading-relaxed font-300 mt-4">
                Yes. Your VA manages probate from start to finish: prepares court petitions, tracks all deadlines, sends required notices to creditors and beneficiaries, prepares inventory and appraisals, tracks all estate receipts and disbursements, prepares estate accountings, manages final distributions, and ensures all court filings are completed timely. They reduce probate administration from 18-36 months to 12-18 months.
              </p>
            </details>

            <details className="p-6 bg-white border border-text-light/10 rounded-sm group">
              <summary className="cursor-pointer font-600 text-charcoal flex justify-between items-center">
                How much time does estate administration really consume?
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-base text-text-mid leading-relaxed font-300 mt-4">
                An average probate requires 40-60 hours of attorney/paralegal time spread over 12-36 months. At $200-300/hour, that's $8,000-18,000 per probate. You typically don't bill all of this time due to flat fees or underestimation. A dedicated estate VA reduces your required time from 40-60 hours to 10-15 hours per probate, making each administration profitable while improving quality.
              </p>
            </details>
          </div>
        </section>

        {/* CTA */}
        <section className="my-16 p-8 bg-charcoal text-white rounded-sm">
          <h2 className="font-serif text-2xl mb-4">Your Clients' Legacies Deserve Execution</h2>
          <p className="text-base text-white/70 leading-relaxed mb-6 font-300">
            Estate planning is about protecting family, providing for loved ones, and leaving a legacy. But plans only matter if they're actually funded and executed. A dedicated estate planning VA ensures complete asset discovery, trust funding completion, beneficiary coordination, and probate administration that works. Your clients' intentions get carried out. Your firm avoids the malpractice exposure of incomplete plans.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-brass text-white text-xs font-600 tracking-wider uppercase hover:bg-brass-light transition-all duration-300"
          >
            Get Estate Planning Support
          </Link>
        </section>
      </article>
    </main>
  );
}
