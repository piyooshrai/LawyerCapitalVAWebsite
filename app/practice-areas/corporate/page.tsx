import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Corporate Law Virtual Assistant | Lawyer Capital VA',
  description: 'VA support for corporate transactions, document management, due diligence coordination, and contract administration.',
  keywords: 'corporate law virtual assistant, corporate transaction support',
};

export default function CorporateLawPage() {
  return (
    <main className="pt-32 bg-ivory min-h-screen">
      <article className="max-w-4xl mx-auto px-16 py-20">
        <h1 className="font-serif text-6xl text-charcoal mb-8 leading-tight">
          Virtual Assistant Support for Corporate Law
        </h1>

        <p className="text-lg text-text-mid font-300 mb-12 border-l-4 border-brass pl-6">
          Corporate transactions require meticulous documentation, coordination across multiple parties, and tracking dozens of moving parts simultaneously. Our corporate law VAs handle due diligence, document assembly, closing coordination, and corporate maintenance so you focus on deal structure and negotiation.
        </p>

        <section className="mb-16 py-12 bg-white px-8 rounded-sm border-l-4 border-brass">
          <h2 className="font-serif text-3xl text-charcoal mb-6">Why Corporate Work Consumes Attorney Hours</h2>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            A merger requires weeks of preparation. Due diligence must be coordinated. Reps and warranties must be organized. Purchase agreements must be drafted. Closing checklists must be prepared. On closing day, 20 documents must be executed in the correct order with the correct signatures and notarizations.
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300">
            The legal work — structuring the deal, negotiating terms, managing liability — is what you do. Everything else is administrative. A corporate law VA eliminates the administrative burden.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-6 mt-12">What Corporate Law VAs Handle</h2>

          <h3 className="font-serif text-xl text-charcoal mb-4 mt-8">Transaction Management & Coordination</h3>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            A transaction begins. Your VA creates a transaction binder with all documents organized by type and phase. They maintain a closing checklist: all documents needed, who's signing, what notarizations are required, what conditions must be satisfied. They track all critical dates: LOI due, due diligence period, signing, closing. They coordinate with all parties: seller's counsel, buyer's counsel, lenders, title companies, escrow agents. Nothing falls through the cracks.
          </p>

          <h3 className="font-serif text-xl text-charcoal mb-4 mt-8">Due Diligence Coordination</h3>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            Your VA prepares due diligence lists: documents needed from the seller, topics to investigate, questions for management. They track what's been received, what's outstanding, and follow up on missing items. They organize received documents into a virtual data room. They prepare due diligence summaries highlighting key findings and issues for your review.
          </p>

          <h3 className="font-serif text-xl text-charcoal mb-4 mt-8">Corporate Document Assembly & Closing Coordination</h3>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            A closing requires 15-25 documents. Purchase agreement, stock/asset certificates, seller representations certificate, representations and warranties insurance documents, IRS documentation, corporate resolutions, opinion letters, UCC searches, title insurance documents, deed or bill of sale. Your VA gathers all documents, ensures they're all properly executed (or prepared for execution), creates a closing binder organized by signatory, and prepares a closing agenda showing the order of execution.
          </p>

          <h3 className="font-serif text-xl text-charcoal mb-4 mt-8">Corporate Governance & Maintenance</h3>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            Your business clients need corporate maintenance: annual meeting minutes, board resolutions, shareholder consents, certificate updates. Your VA tracks corporate compliance requirements for each entity, reminds you when filings are due, and prepares the documents. They maintain a corporate record book for each client showing all resolutions, amendments, and critical corporate events.
          </p>

          <h3 className="font-serif text-xl text-charcoal mb-4 mt-8">Contract Management & Renewal Tracking</h3>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            Your client has 30 contracts: service agreements, leases, licenses, vendor agreements, employment agreements. Your VA maintains a contract register: contract name, parties, term, renewal dates, key obligations. They alert clients before renewal dates so decisions can be made. They organize all contracts in a searchable database. They prepare contract summaries when needed.
          </p>

          <h3 className="font-serif text-xl text-charcoal mb-4 mt-8">Securities & Compliance Documentation</h3>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            For securities transactions, your VA manages all compliance documentation: confidentiality agreements, subscription agreements, investment representations, accreditation verification, and SEC-required filings. They track offering deadlines and investor commitments. They prepare investor reports and update investor registers.
          </p>

          <h3 className="font-serif text-xl text-charcoal mb-4 mt-8">Franchise & Licensing Documentation</h3>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            For franchise and licensing transactions, your VA prepares franchise agreements, operating manuals, disclosure documents, and franchise applications. They track licensing requirements by jurisdiction and ensure compliance with franchise laws in each state where the franchise operates.
          </p>

          <h3 className="font-serif text-xl text-charcoal mb-4 mt-8">Corporate Restructuring Documentation</h3>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            Mergers, reorganizations, spin-offs, and complex restructurings require extensive documentation. Your VA prepares all required documents, tracks shareholder and board approvals, and ensures all filings are completed correctly and timely.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-6 mt-12">Corporate Law Practice Areas We Support</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {['M&A & Business Sales', 'Securities & Capital Raises', 'Entity Formation', 'Commercial Contracts', 'Franchise Law', 'IP Transactions', 'Real Estate Transactions', 'Partnership Agreements'].map((area) => (
              <div key={area} className="p-4 border border-text-light/10 bg-white">
                <p className="font-500 text-charcoal">{area}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="my-16 p-8 bg-charcoal text-white rounded-sm">
          <h2 className="font-serif text-2xl mb-4">Closing Day Confidence</h2>
          <p className="text-base text-white/70 leading-relaxed">
            When closing day arrives, you want to know nothing has been forgotten. Your VA has prepared every document, verified every signature, and organized every item. You can focus on advising your clients. We handle the execution.
          </p>
        </section>

        <section className="text-center">
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-brass text-white text-xs font-600 tracking-wider uppercase hover:bg-brass-light transition-all duration-300"
          >
            Get Corporate Law Support
          </Link>
        </section>
      </article>
    </main>
  );
}
