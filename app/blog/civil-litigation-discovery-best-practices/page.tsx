import { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'Civil Litigation Discovery Management Best Practices | Lawyer Capital VA',
  description: 'How to organize multimedia discovery and manage evidence efficiently.',
  keywords: 'litigation discovery, evidence management, civil litigation',
};

export default function CivilLitigationBlogPost() {
  return (
    <main className="bg-ivory min-h-screen">
      <PageHeader
        label="Civil Litigation"
        title="Discovery Best Practices"
        subtitle="2,400 documents, 47 hours of video. Find any piece in 30 seconds. That's the difference between winning and losing."
      />
      <article className="max-w-4xl mx-auto px-16 py-20">
        <h1 className="font-serif text-6xl text-charcoal mb-8 leading-tight">
          Civil Litigation Discovery: Managing 2,000+ Documents Without Drowning
        </h1>

        <p className="text-lg text-text-mid font-300 mb-12 border-l-4 border-brass pl-6">
          One case. 47 hours of video. 2,400 text messages. 300 emails. 500 social media screenshots. 80 police reports. You need to find the one email about the contract that was sent 6 weeks ago. You have no idea which folder. You spend 2 hours searching. That is $500 in lost time for one document search. Better system needed.
        </p>

        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-6">Discovery Organization Best Practices</h2>

          <div className="space-y-8">
            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-xl text-charcoal mb-2">1. Unified Database from Day One</h3>
              <p className="text-base text-text-mid leading-relaxed font-300">
                Do not organize discovery by source. Organize by evidence. Create one unified database where all documents (emails, videos, screenshots, police reports) are catalogued with consistent metadata: date, party, subject, evidence type, relevance tag. One search finds all relevant evidence.
              </p>
            </div>

            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-xl text-charcoal mb-2">2. Consistent Naming Convention</h3>
              <p className="text-base text-text-mid leading-relaxed font-300">
                Do not have files named: Email from Smith about contract, Email from Smith (2), Email from Smith Final. Use consistent naming: DISC_001_Email_Smith_Contract_2024-01-15. Add date prefix so files sort chronologically automatically.
              </p>
            </div>

            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-xl text-charcoal mb-2">3. Evidence Tagging by Issue</h3>
              <p className="text-base text-text-mid leading-relaxed font-300">
                Tag documents by issue: Liability, Damages, Character, Impeachment, Inconsistency. One document can have multiple tags. When you need to prepare a liability argument, one search shows all liability-tagged documents.
              </p>
            </div>

            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-xl text-charcoal mb-2">4. Video Evidence Summary Protocol</h3>
              <p className="text-base text-text-mid leading-relaxed font-300">
                Do not watch 47 hours of video yourself. Have someone watch it and prepare a timeline summary: What happens at 1:35, 2:14, 5:47, etc. Highlight the 15-20 minutes of video that matter. You watch the relevant portions instead of all 47 hours.
              </p>
            </div>

            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-xl text-charcoal mb-2">5. Inconsistency Flagging</h3>
              <p className="text-base text-text-mid leading-relaxed font-300">
                As discovery is reviewed, flag inconsistencies: "Smith testified he was at office on 1/15. Email shows he was in Boston on 1/15." Create an inconsistency log. You reference this log during depositions and trial.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16 p-10 bg-brass/15 border-2 border-brass rounded-sm">
          <h2 className="font-serif text-3xl text-charcoal mb-8">The Real Problem</h2>
          <p className="text-base text-text-mid leading-relaxed font-300">
            Discovery is not complex. It is tedious. You need a system that: organizes documents consistently, tags documents by relevance, summarizes video evidence, flags inconsistencies, and makes every piece of evidence findable in 30 seconds.
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300 mt-4">
            Most litigators organize discovery manually. That is why they spend 2 hours finding one document. Better system. Same case. Same evidence. Different outcome.
          </p>
        </section>

        <section className="my-16 p-8 bg-charcoal text-white rounded-sm">
          <h2 className="font-serif text-2xl mb-4">Stop Searching. Start Finding.</h2>
          <p className="text-base text-white/70 leading-relaxed mb-6 font-300">
            Case organization is what separates winners from everyone else. The attorney with organized evidence wins at summary judgment, wins at trial, settles from strength. Get your discovery organized from day one.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-brass text-white text-xs font-600 tracking-wider uppercase hover:bg-brass-light transition-all duration-300"
          >
            Get Discovery Organization Support
          </Link>
        </section>
      </article>
    </main>
  );
}
