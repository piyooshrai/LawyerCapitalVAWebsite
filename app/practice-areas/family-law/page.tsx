import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Family Law Virtual Assistant | Lawyer Capital VA',
  description: 'VA support for discovery coordination, parenting plans, financial disclosures, and settlement negotiation.',
  keywords: 'family law virtual assistant, divorce support services',
};

export default function FamilyLawPage() {
  return (
    <main className="pt-32 bg-ivory min-h-screen">
      <article className="max-w-4xl mx-auto px-16 py-20">
        <h1 className="font-serif text-6xl text-charcoal mb-8 leading-tight">
          Virtual Assistant Support for Family Law
        </h1>

        <p className="text-lg text-text-mid font-300 mb-12 border-l-4 border-brass pl-6">
          Family law cases are emotionally intense and administratively heavy. Financial discovery, child support calculations, parenting plan coordination, and client communication consume half your time. Our family law VAs handle the paperwork so you handle the people.
        </p>

        <section className="mb-16 py-12 bg-white px-8 rounded-sm border-l-4 border-brass">
          <h2 className="font-serif text-3xl text-charcoal mb-6">The Family Law Practice Reality</h2>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            Family law clients need hand-holding. A custody modification requires reassurance. A divorce discovery asks for intimate financial details. A child support dispute demands accuracy. Meanwhile, you're managing financial statements, calculating support, organizing parenting schedules, and preparing settlement agreements.
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300">
            A family law VA isn't a luxury. It's essential. They manage the administrative chaos so you can focus on client psychology and negotiation strategy.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-6 mt-12">What Family Law VAs Handle</h2>

          <h3 className="font-serif text-xl text-charcoal mb-4 mt-8">Financial Discovery & Disclosure Management</h3>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            Financial disclosure is the foundation of every family law case. Your VA prepares financial disclosure forms (AAML, state-specific, or custom). They help clients organize financial documents: tax returns, pay stubs, bank statements, investment accounts, retirement accounts, property deeds. They follow up if documents are missing. They organize all financial information into a comprehensive summary for your review.
          </p>

          <h3 className="font-serif text-xl text-charcoal mb-4 mt-8">Child Support & Spousal Support Calculations</h3>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            Every state has child support guidelines. Your VA knows your state's formula. They input the financial data (income, custody percentage, insurance costs, daycare) into the formula and generate support calculations. They prepare multiple scenarios (actual income, imputed income, income variations) so you can advise clients on different outcomes. They maintain a support calculation summary showing all income components and assumptions.
          </p>

          <h3 className="font-serif text-xl text-charcoal mb-4 mt-8">Parenting Plan & Custody Schedule Development</h3>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            Parenting plans require detail: weekly schedule, holiday schedule, vacation allocation, transportation, decision-making authority. Your VA maintains parenting plan templates and customizes them for each case. They prepare visual custody calendars showing exact parenting time. They calculate custody percentages. They prepare parenting plan alternatives for negotiation.
          </p>

          <h3 className="font-serif text-xl text-charcoal mb-4 mt-8">Property Division & Asset Inventory</h3>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            Community property divisions require accounting. Your VA maintains an asset inventory: real property, personal property, vehicles, retirement accounts, investments, business interests. They list values, current status (joint, separate, encumbered), and proposed division. They prepare a property division summary showing each party's proposed allocation.
          </p>

          <h3 className="font-serif text-xl text-charcoal mb-4 mt-8">Settlement Agreement Coordination</h3>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            A settlement is reached. Your VA prepares the agreement incorporating all terms: custody schedule, support amounts, property division, insurance obligations, tax filing status, and post-divorce modifications procedures. They prepare a settlement checklist showing all open issues and confirming all have been addressed.
          </p>

          <h3 className="font-serif text-xl text-charcoal mb-4 mt-8">Post-Judgment Modification Tracking</h3>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            A judgment is entered. But later, circumstances change. Jobs are lost. Income increases. Custody arrangements shift. Your VA tracks modification deadlines, coordinates with clients on changed circumstances, and prepares modification petitions with supporting documentation showing the material change.
          </p>

          <h3 className="font-serif text-xl text-charcoal mb-4 mt-8">Contempt & Enforcement Documentation</h3>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            A parent isn't paying support. Custody isn't being honored. Your VA documents violations: missed payments (with dates and amounts), custody violations (with dates and times), and failure to comply with order terms. They prepare an enforcement petition with all supporting documentation.
          </p>

          <h3 className="font-serif text-xl text-charcoal mb-4 mt-8">Client Communication & Updates</h3>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            Family law clients need reassurance. Your VA sends regular updates: discovery status, upcoming deadlines, settlement progress, next steps. They answer routine questions (tax filing status, insurance obligations, parenting schedule clarifications). They reduce your communication load while keeping clients informed and reassured.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-6 mt-12">Family Law Practice Areas We Support</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {['Divorce & Dissolution', 'Custody & Parenting Plans', 'Child & Spousal Support', 'Property Division', 'Prenuptial Agreements', 'Modification & Enforcement', 'Adoption', 'Collaborative Divorce'].map((area) => (
              <div key={area} className="p-4 border border-text-light/10 bg-white">
                <p className="font-500 text-charcoal">{area}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="my-16 p-8 bg-charcoal text-white rounded-sm">
          <h2 className="font-serif text-2xl mb-4">The Family Law VA Difference</h2>
          <p className="text-base text-white/70 leading-relaxed">
            Family law clients are vulnerable. They need to feel heard. They need accurate information. They need a firm that's organized and professional. Your VA provides that stability while you provide legal strategy.
          </p>
        </section>

        <section className="text-center">
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
