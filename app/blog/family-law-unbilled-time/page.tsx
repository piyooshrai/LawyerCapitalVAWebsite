import { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'Family Law Unbilled Time: Recovery Strategies | Lawyer Capital VA',
  description: 'Recover unbilled family law time and protect your profit margins.',
  keywords: 'family law profitability, unbilled time, law practice management',
};

export default function FamilyLawBlogPost() {
  return (
    <main className="bg-ivory min-h-screen">
      <PageHeader
        label="Family Law"
        title="Unbilled Time Recovery"
        subtitle="Emotional labor, discovery, negotiation. 25-40% unbilled. Recover $200k+ annually. Delegate what you can't bill for."
      />
      <article className="max-w-4xl mx-auto px-16 py-20">
        <h1 className="font-serif text-6xl text-charcoal mb-8 leading-tight">
          Family Law Unbilled Time: Recover $200,000+ Per Year
        </h1>

        <p className="text-lg text-text-mid font-300 mb-12 border-l-4 border-brass pl-6">
          Family law clients are in crisis. They call at night. They want reassurance. They have questions about custody. They are emotionally vulnerable. You provide emotional support you cannot bill for. One case: 10-20 hours of unbilled work. 50 cases/year: $200,000-250,000 in lost revenue. You cannot abandon clients. You can delegate the unbilled work.
        </p>

        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-6">Unbilled Time Categories in Family Law</h2>

          <div className="space-y-6">
            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-xl text-charcoal mb-2">Emotional Labor & Client Crisis Management</h3>
              <p className="text-base text-text-mid leading-relaxed font-300">
                Client texts at 11pm because they are freaking out about custody. You respond. You listen. You provide reassurance. This is 2-3 hours per client per case. You cannot bill for it. But you cannot ignore it. This is unbilled emotional support.
              </p>
            </div>

            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-xl text-charcoal mb-2">Financial Discovery & Calculation Review</h3>
              <p className="text-base text-text-mid leading-relaxed font-300">
                Gathering W-2s, tax returns, bank statements, investment statements. Organizing financial documents. Running preliminary child support calculations. This is 6-12 hours per case. Much of this time is not billable work that clients understand.
              </p>
            </div>

            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-xl text-charcoal mb-2">Parenting Plan Drafting (Uncompensated Negotiation)</h3>
              <p className="text-base text-text-mid leading-relaxed font-300">
                Drafting parenting plan. Redlining opposing counsel's version. Managing client expectations on custody. This happens outside billing hours. Hours: 4-10 per case.
              </p>
            </div>

            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-xl text-charcoal mb-2">Settlement Coordination & Client Hand-Holding</h3>
              <p className="text-base text-text-mid leading-relaxed font-300">
                Negotiating settlement. Client is scared. They need reassurance. They want to vent. You are managing emotions while negotiating. Hours: 5-15 per case.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16 p-10 bg-brass/15 border-2 border-brass rounded-sm">
          <h2 className="font-serif text-3xl text-charcoal mb-8">Recovery Strategies</h2>

          <h3 className="font-600 text-charcoal mb-4 text-lg">Strategy 1: Delegate Client Communication</h3>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-6">
            Routine client inquiries should not come to you. Your assistant answers: "Your attorney is focused on [specific legal work]. Here is your case status..." This simple filter reduces your unbilled communication time by 40-50%.
          </p>

          <h3 className="font-600 text-charcoal mb-4 text-lg">Strategy 2: Systematize Financial Discovery</h3>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-6">
            Create a checklist of financial documents needed. Have your assistant collect them from the client. Have your assistant organize and summarize. You spend 1 hour reviewing a summary instead of 6 hours collecting documents.
          </p>

          <h3 className="font-600 text-charcoal mb-4 text-lg">Strategy 3: Parenting Plan Templates</h3>
          <p className="text-base text-text-mid leading-relaxed font-300">
            Build parenting plan templates. Have your assistant customize them for specific client situations. You review and finalize. Assembly time reduced from 6 hours to 2 hours per plan.
          </p>
        </section>

        <section className="my-16 p-8 bg-charcoal text-white rounded-sm">
          <h2 className="font-serif text-2xl mb-4">Stop Bleeding Invisible Revenue</h2>
          <p className="text-base text-white/70 leading-relaxed mb-6 font-300">
            Family law unbilled time is killing your profit margin. You cannot bill for emotional support. But you can have a dedicated person manage client communication so that emotional support does not consume your billable time. Recover $200,000+ annually by delegating the unbilled work.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-brass text-white text-xs font-600 tracking-wider uppercase hover:bg-brass-light transition-all duration-300"
          >
            Recover Your Time
          </Link>
        </section>
      </article>
    </main>
  );
}
