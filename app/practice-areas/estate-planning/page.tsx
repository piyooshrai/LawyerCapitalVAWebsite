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
      <article className="max-w-4xl mx-16 py-20">
        <h1 className="font-serif text-6xl text-charcoal mb-8 leading-tight">
          Virtual Assistant Support for Estate Planning & Probate
        </h1>

        <p className="text-lg text-text-mid font-300 mb-12 border-l-4 border-brass pl-6">
          Estate planning requires meticulous client interviews, detailed asset inventories, beneficiary coordination, and precise document drafting. Probate administration requires estate accounting, court filings, and beneficiary distributions. Our estate planning VAs manage the administrative complexity so you focus on the plan.
        </p>

        <section className="mb-16 py-12 bg-white px-8 rounded-sm border-l-4 border-brass">
          <h2 className="font-serif text-3xl text-charcoal mb-6">The Estate Planning Workload</h2>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            An estate plan requires comprehensive information: all assets (real estate, bank accounts, investments, retirement accounts), all beneficiaries, guardianship preferences, executor designation, trust structure, tax planning. Gathering this information takes time. Organizing it takes more time.
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300">
            A dedicated estate planning VA means client interviews are efficient, assets are completely inventoried, and documents are drafted based on accurate information.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-6 mt-12">What Estate Planning VAs Handle</h2>

          <h3 className="font-serif text-xl text-charcoal mb-4 mt-8">Estate Planning Intake & Asset Inventory</h3>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            Your VA prepares comprehensive estate planning questionnaires and walks clients through complete asset inventory. They document all assets (real estate with descriptions and values, bank accounts with institutions and balances, investment accounts, retirement accounts, business interests, personal property). They track liabilities (mortgages, loans, debts). They prepare an asset summary for your review.
          </p>

          <h3 className="font-serif text-xl text-charcoal mb-4 mt-8">Beneficiary & Family Information Organization</h3>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            Estate plans name beneficiaries and guardians. Your VA documents all family information (children, grandchildren, spouses, ex-spouses), identifies guardianship preferences, and records all contact information. They prepare a family tree showing all relationships.
          </p>

          <h3 className="font-serif text-xl text-charcoal mb-4 mt-8">Will & Trust Document Preparation</h3>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            Based on the plan design you've determined, your VA prepares wills and trusts. They customize templates with specific asset distributions, guardian designations, executor appointments, and trustee provisions. They organize documents for your review and client execution.
          </p>

          <h3 className="font-serif text-xl text-charcoal mb-4 mt-8">Tax Planning & Valuation Documentation</h3>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            Estate tax planning requires asset valuations. Your VA tracks asset values, documents special valuations (business interests, real estate appraisals), and prepares valuation summaries. They maintain updated asset values for tax planning and estate administration.
          </p>

          <h3 className="font-serif text-xl text-charcoal mb-4 mt-8">Trust Funding & Asset Retitling</h3>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            A trust is created but assets must be transferred into it (retitled). Your VA prepares a trust funding checklist showing which assets need to be retitled and which documents are needed. They track progress as assets are transferred.
          </p>

          <h3 className="font-serif text-xl text-charcoal mb-4 mt-8">Probate Administration Support</h3>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            After death, an estate must be probated. Your VA manages the probate process: court filings, notice service, inventory preparation, accounting, beneficiary distributions. They track the probate timeline and ensure all court requirements are met.
          </p>

          <h3 className="font-serif text-xl text-charcoal mb-4 mt-8">Estate Accounting & Beneficiary Reporting</h3>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            Estate administration requires accounting. Your VA tracks all estate receipts and disbursements, prepares annual estate accountings, and reports to beneficiaries. They prepare detailed schedules of income, expenses, and distributions.
          </p>

          <h3 className="font-serif text-xl text-charcoal mb-4 mt-8">Trust Administration & Distributions</h3>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            After a settlor dies, the trust continues. Your VA assists the trustee with trust administration: managing trust assets, making distributions to beneficiaries, preparing trust accountings, and handling trustee correspondence with beneficiaries.
          </p>

          <h3 className="font-serif text-xl text-charcoal mb-4 mt-8">Court Filings & Probate Deadlines</h3>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            Probate has strict deadlines for filings, notices, and final accountings. Your VA tracks all probate deadlines, prepares court filings, ensures notices are served on beneficiaries, and manages deadlines for final accounting and estate closure.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-6 mt-12">Estate Planning Practice Areas We Support</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {['Wills & Trusts', 'Probate Administration', 'Trust Administration', 'Tax Planning', 'Business Succession', 'Guardianship Planning', 'Special Needs Planning', 'Asset Protection'].map((area) => (
              <div key={area} className="p-4 border border-text-light/10 bg-white">
                <p className="font-500 text-charcoal">{area}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="my-16 p-8 bg-charcoal text-white rounded-sm">
          <h2 className="font-serif text-2xl mb-4">Peace of Mind for Your Clients</h2>
          <p className="text-base text-white/70 leading-relaxed">
            Estate planning is about legacy and family protection. Your clients need to know their wishes will be carried out. Your VA ensures every detail is documented, every asset is accounted for, and every intention is protected.
          </p>
        </section>

        <section className="text-center">
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
