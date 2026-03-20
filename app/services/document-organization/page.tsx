import { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'Legal Document Organization Service | Lawyer Capital VA',
  description: 'Case file organization, document management, discovery organization, and evidence cataloging.',
  keywords: 'legal document organization, case management, discovery management',
};

export default function DocumentOrganizationPage() {
  return (
    <main className="bg-ivory min-h-screen">
      <PageHeader
        label="Core Services"
        title="Find Any Document in 30 Seconds. Not 2 Hours."
        subtitle="2,400 document case. Unified database. Consistent naming. Issue tagging. Your VA organizes discovery once. You search forever faster."
      />
      <article className="max-w-4xl mx-auto px-16 py-20">
        <h1 className="font-serif text-6xl text-charcoal mb-8 leading-tight">
          Document Organization: Find Evidence in Seconds, Not Days
        </h1>

        <p className="text-lg text-text-mid font-300 mb-12 border-l-4 border-brass pl-6">
          <strong>The problem you face:</strong> Litigation case: 2,400 documents. Real estate transaction: 47 document versions. Immigration matter: 89 required forms + supporting documents. You need to find one specific email about the contract amendment 3 weeks ago. You know it exists. You have no idea which folder. You spend 2 hours searching. That is $500-700 in lost billable time for one search.
        </p>

        <section className="mb-16 py-12 bg-charcoal/5 px-8 rounded-sm border-l-4 border-brass">
          <h2 className="font-serif text-3xl text-charcoal mb-6">Why Manual Organization Fails</h2>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            <strong>You cannot manually organize thousands of documents.</strong> One client sends 300 pages. Opposing counsel provides 2,000 documents. Social media printouts are 45 pages. Police reports are 80 pages. Digital communications are 500+ messages. Without a system, you have chaos. With chaos, you miss key evidence.
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            <strong>Version control is impossible without structure.</strong> Contract V1, Contract V2, Contract V3 (with redlines), Contract Final (not really final), Contract Revised Final. Which version is current? Which is signed? Which is the baseline? 15 minutes of searching for each version update.
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300">
            <strong>Your VA creates a searchable, indexed document library where you find anything in 30 seconds.</strong> All documents catalogued. All versions tracked. All evidence indexed by relevance, date, party, and issue. One search query. One answer.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-6 mt-12">Document Organization Services</h2>

          <div className="space-y-6">
            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-xl text-charcoal mb-2">Case File Organization</h3>
              <p className="text-base text-text-mid leading-relaxed font-300">
                Your VA receives all case documents. They organize into folders by type (contracts, correspondence, discovery, exhibits, court filings). They number sequentially. They create a master index. You have a clean, searchable case file.
              </p>
            </div>

            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-xl text-charcoal mb-2">Discovery Organization (Litigation)</h3>
              <p className="text-base text-text-mid leading-relaxed font-300">
                Your VA receives discovery from multiple sources. They create a unified database with consistent naming and metadata. They tag documents by relevance, party, date, and issue. One search finds all communications between specific parties about specific topics across 2,000+ documents.
              </p>
            </div>

            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-xl text-charcoal mb-2">Version Control & Tracking</h3>
              <p className="text-base text-text-mid leading-relaxed font-300">
                Multiple contract versions? Your VA maintains a version history showing draft dates, revisions, who changed what, and which version is current. No confusion. Clear audit trail.
              </p>
            </div>

            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-xl text-charcoal mb-2">Evidence Cataloging</h3>
              <p className="text-base text-text-mid leading-relaxed font-300">
                Criminal case evidence? Civil litigation exhibits? Your VA catalogs all physical and digital evidence with descriptions, dates, relevance tags, and storage location. Complete inventory. Complete accountability.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16 p-10 bg-brass/15 border-2 border-brass rounded-sm">
          <h2 className="font-serif text-3xl text-charcoal mb-8">The Time Cost of Disorganization</h2>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            <strong>Average document search time: 2-4 hours per search</strong> (across 2,000+ documents in multiple folders and formats).
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            <strong>At $250/hour average billing rate:</strong> One search = $500-1,000 in lost billable time.
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            <strong>With a VA:</strong> 30-second search. Same billable result. Time freed for case strategy.
          </p>
          <p className="font-600 text-charcoal">
            One organized case file saves 50-100 hours of search time over the case lifecycle. That is $12,500-25,000 in recovered billable capacity per case.
          </p>
        </section>

        <section className="my-16 p-8 bg-charcoal text-white rounded-sm">
          <h2 className="font-serif text-2xl mb-4">Stop Searching. Start Finding.</h2>
          <p className="text-base text-white/70 leading-relaxed mb-6 font-300">
            Document organization is not glamorous. It is essential. Your VA ensures every document is indexed, every version is tracked, and every piece of evidence is findable in seconds. You build cases. We organize them.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-brass text-white text-xs font-600 tracking-wider uppercase hover:bg-brass-light transition-all duration-300"
          >
            Get Document Organization Support
          </Link>
        </section>
      </article>
    </main>
  );
}
