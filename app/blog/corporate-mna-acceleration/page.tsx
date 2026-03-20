import { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'Accelerate M&A Closing Timeline | Corporate Law Insights | Lawyer Capital VA',
  description: 'How to reduce M&A closing time from 4 months to 6 weeks.',
  keywords: 'M&A acceleration, deal closing, corporate law efficiency',
};

export default function CorporateMnABlogPost() {
  return (
    <main className="bg-ivory min-h-screen">
      <PageHeader
        label="Corporate Law"
        title="M&A Acceleration"
        subtitle="Expected: 6 weeks. Reality: 4 months. One coordinator tracking signatures and schedules changes everything."
      />
      <article className="max-w-4xl mx-auto px-16 py-20">
        <h1 className="font-serif text-6xl text-charcoal mb-8 leading-tight">
          M&A Timeline Acceleration: From 4 Months to 6 Weeks
        </h1>

        <p className="text-lg text-text-mid font-300 mb-12 border-l-4 border-brass pl-6">
          You have a purchase agreement signed. Closing is supposed to be 6 weeks away. It is now 4 months later. Documents are still circulating. Signatures are missing. Conditions are not being met. Your deal is stalled because nobody is actively managing the closing process. Here is how to accelerate.
        </p>

        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-6">Why M&A Closing Slips</h2>

          <div className="space-y-6 mb-12">
            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-xl text-charcoal mb-2">1. No Closing Coordinator</h3>
              <p className="text-base text-text-mid leading-relaxed font-300">
                Nobody is assigned to manage the closing. You are managing it while handling other matters. Documents circulate slowly. Signatures are forgotten. Progress is invisible.
              </p>
            </div>

            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-xl text-charcoal mb-2">2. No Closing Checklist</h3>
              <p className="text-base text-text-mid leading-relaxed font-300">
                You have 82 closing documents. Nobody has a checklist. Documents are completed randomly. Some are missing signatures. Some have been redlined and sent back. Chaos.
              </p>
            </div>

            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-xl text-charcoal mb-2">3. No Milestone Tracking</h3>
              <p className="text-base text-text-mid leading-relaxed font-300">
                No one is tracking which conditions are satisfied. Is the environmental report complete? Has the buyer received rep and warranty insurance? Has the seller's counsel reviewed title? Nobody knows.
              </p>
            </div>

            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-xl text-charcoal mb-2">4. No Signature Deadline</h3>
              <p className="text-base text-text-mid leading-relaxed font-300">
                Documents circulate. One party sits on them for 2 weeks. Another party redlines them. Two more weeks pass. Closing that should happen in 6 weeks is now 4 months away.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16 p-10 bg-brass/15 border-2 border-brass rounded-sm">
          <h2 className="font-serif text-3xl text-charcoal mb-8">How to Accelerate</h2>

          <p className="text-base text-text-mid leading-relaxed font-300 mb-6">
            <strong>Step 1: Assign a Closing Manager</strong> - One person responsible for closing coordination. That person tracks documents, signatures, conditions, and timeline.
          </p>

          <p className="text-base text-text-mid leading-relaxed font-300 mb-6">
            <strong>Step 2: Create Closing Checklist</strong> - All 82 documents listed. Status for each: drafted, circulated, signed, filed. Signature requirements clear. Deadline for each: 7 days, 5 days, 3 days.
          </p>

          <p className="text-base text-text-mid leading-relaxed font-300 mb-6">
            <strong>Step 3: Daily Closing Status Call</strong> - Every morning, 15 minutes. What is done. What is pending. What is at risk. Everyone knows the status.
          </p>

          <p className="text-base text-text-mid leading-relaxed font-300">
            <strong>Step 4: Weekly Timeline Review</strong> - Is closing still on track for the target date? If not, what needs to accelerate? What needs a hard deadline?
          </p>
        </section>

        <section className="my-16 p-8 bg-charcoal text-white rounded-sm">
          <h2 className="font-serif text-2xl mb-4">Manage Closings Like Projects</h2>
          <p className="text-base text-white/70 leading-relaxed mb-6 font-300">
            M&A closing is project management, not legal work. You cannot manage it casually. Assign a coordinator. Create a checklist. Track progress. Hold people to deadlines. Closing accelerates from months to weeks.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-brass text-white text-xs font-600 tracking-wider uppercase hover:bg-brass-light transition-all duration-300"
          >
            Get M&A Closing Support
          </Link>
        </section>
      </article>
    </main>
  );
}
