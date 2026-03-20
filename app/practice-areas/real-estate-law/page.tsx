import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Real Estate Law Virtual Assistant | Lawyer Capital VA',
  description: 'Transaction coordination, closing document prep, title research, and escrow management.',
  keywords: 'real estate law virtual assistant, real estate transaction support',
};

export default function RealEstateLawPage() {
  return (
    <main className="pt-32 bg-ivory min-h-screen">
      <article className="max-w-4xl mx-auto px-16 py-20">
        <h1 className="font-serif text-6xl text-charcoal mb-8 leading-tight">
          Virtual Assistant Support for Real Estate Law
        </h1>

        <p className="text-lg text-text-mid font-300 mb-12 border-l-4 border-brass pl-6">
          Real estate transactions are document-intensive, deadline-driven, and require flawless coordination. Title reviews, title insurance, closing document preparation, escrow coordination — these are the operational backbone of real estate practice. Our real estate VAs manage the back-office so you manage the clients and closings.
        </p>

        <section className="mb-16 py-12 bg-white px-8 rounded-sm border-l-4 border-brass">
          <h2 className="font-serif text-3xl text-charcoal mb-6">Real Estate Practice Demands</h2>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            A real estate transaction requires 20+ documents. The purchase agreement, title insurance commitment, survey, appraisal, loan documents, closing disclosure, deed, promissory note, deed of trust, title company endorsements. Each document must be reviewed, customized, and tracked.
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300">
            A dedicated real estate VA means nothing is missed and closing day is smooth.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-6 mt-12">What Real Estate Law VAs Handle</h2>

          <h3 className="font-serif text-xl text-charcoal mb-4 mt-8">Title Review & Title Insurance Coordination</h3>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            Title review begins when you receive the title insurance commitment. Your VA reviews the commitment against the property deed, notes any exceptions or title issues, and flags potential problems for your analysis. They coordinate with the title company on exception removal, document ordering, and final policy issuance. They prepare a title review summary for the closing.
          </p>

          <h3 className="font-serif text-xl text-charcoal mb-4 mt-8">Survey & Appraisal Coordination</h3>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            The purchase agreement typically requires a survey and appraisal. Your VA orders surveys and appraisals, tracks their progress, reviews them when received, and flags any issues (property line discrepancies, appraisal below purchase price). They organize survey and appraisal documents in the transaction file.
          </p>

          <h3 className="font-serif text-xl text-charcoal mb-4 mt-8">Loan & Financing Documentation</h3>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            Most transactions involve lender financing. Your VA coordinates with lenders, collects all required loan documents, reviews loan terms for accuracy, and organizes loan documents for closing. They prepare a loan summary showing loan amount, rate, term, and lender contact information.
          </p>

          <h3 className="font-serif text-xl text-charcoal mb-4 mt-8">Closing Document Assembly</h3>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            A closing requires multiple documents in a specific order. Deed of trust, promissory note, closing disclosure, deed, title insurance policy, loan documents. Your VA assembles all documents, verifies they're complete and accurate, and creates a closing binder showing the order of execution. They prepare a closing checklist ensuring nothing is missed.
          </p>

          <h3 className="font-serif text-xl text-charcoal mb-4 mt-8">Escrow Coordination & Closing Logistics</h3>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            Closing coordination requires escrow arrangement. Your VA schedules the closing, coordinates with escrow, organizes parties (buyer, seller, agents, lenders), confirms attendance, and prepares a closing agenda. They ensure funds are received by escrow and all documents are executed and recorded.
          </p>

          <h3 className="font-serif text-xl text-charcoal mb-4 mt-8">HOA & Property Management Documentation</h3>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            If the property is in an HOA, documents are required: CC&Rs, bylaws, current financials, meeting minutes, assessment schedule. Your VA collects HOA documents, organizes them, and prepares an HOA summary for the buyer.
          </p>

          <h3 className="font-serif text-xl text-charcoal mb-4 mt-8">Boundary & Ownership Verification</h3>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            Property description accuracy is critical. Your VA verifies legal descriptions against the deed and survey, ensures property boundaries match the purchase agreement, and confirms ownership is clear and marketable.
          </p>

          <h3 className="font-serif text-xl text-charcoal mb-4 mt-8">Recording & Post-Closing Follow-Up</h3>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            After closing, documents must be recorded. Your VA ensures recording happens promptly, tracks recording status, confirms the deed is properly recorded, and provides recorded copies to all parties.
          </p>

          <h3 className="font-serif text-xl text-charcoal mb-4 mt-8">Multi-Property & Portfolio Transactions</h3>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            For investors or developers handling multiple properties, your VA tracks all properties, maintains individual closing files, and ensures each transaction closes on schedule.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-6 mt-12">Real Estate Practice Areas We Support</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {['Residential Sales & Purchases', 'Commercial Real Estate', 'Investment Properties', 'Refinancing', 'Title Work & Review', 'Construction Financing', 'Lease Negotiation', 'Property Management'].map((area) => (
              <div key={area} className="p-4 border border-text-light/10 bg-white">
                <p className="font-500 text-charcoal">{area}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="my-16 p-8 bg-charcoal text-white rounded-sm">
          <h2 className="font-serif text-2xl mb-4">Flawless Closing Coordination</h2>
          <p className="text-base text-white/70 leading-relaxed">
            Real estate closing day is the culmination of weeks of preparation. Your VA ensures all documents are organized, all signatures are ready, and all funding is confirmed. You manage the closing with confidence knowing nothing has been missed.
          </p>
        </section>

        <section className="text-center">
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-brass text-white text-xs font-600 tracking-wider uppercase hover:bg-brass-light transition-all duration-300"
          >
            Get Real Estate Law Support
          </Link>
        </section>
      </article>
    </main>
  );
}
