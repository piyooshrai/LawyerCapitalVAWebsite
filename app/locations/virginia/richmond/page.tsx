import { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'Legal Virtual Assistant Services in Richmond, VA | Lawyer Capital VA',
  description: 'Specialized VA services for Richmond law firms. Immigration, family law, litigation, corporate, real estate, and more.',
  keywords: 'virtual assistant Richmond VA, law firm support Richmond, legal VA services Richmond Virginia',
};

export default function RichmondPage() {
  return (
    <main className="bg-ivory min-h-screen">
      <PageHeader
        label="Richmond, Virginia"
        title="Specialized Legal VA Support for Richmond Attorneys"
        subtitle="Immigration, family law, civil litigation, corporate, real estate, criminal defense, estate planning, and IP law. All practice areas. All supported."
      />

      <article className="max-w-5xl mx-auto px-16 py-20">
        <p className="text-lg text-text-mid font-300 mb-16 border-l-4 border-brass pl-8 pb-8 border-b border-brass/20">
          Richmond's legal market is competitive. Solos and small firms compete with larger practices for clients and cases. The difference: administrative efficiency. Your VA handles deadlines, discovery, client communication, and billing—while you focus on legal work and client relationships.
        </p>

        <section className="mb-16 py-12 bg-charcoal/5 px-8 rounded-sm border-l-4 border-brass">
          <h2 className="font-serif text-3xl text-charcoal mb-6">Why Richmond Firms Need a VA</h2>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            Richmond has 3,000+ attorneys competing for clients. Document management. Deadline tracking. Client coordination. These aren't optional—they're competitive advantages. Firms with organized operations win clients. Firms with fast discovery wins cases. Firms with professional communication keep clients.
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300">
            Your VA handles all of it. You focus on the law. Your competitors are still juggling administrative chaos.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-8">Practice Areas We Support in Richmond</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-xl text-charcoal mb-3">Immigration Law</h3>
              <p className="text-base text-text-mid font-300">USCIS deadline management, RFE coordination, international filing deadlines. Richmond has significant immigration practices managing visa cases, family petitions, and deportation defense.</p>
            </div>

            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-xl text-charcoal mb-3">Family Law</h3>
              <p className="text-base text-text-mid font-300">Discovery coordination, unbilled time recovery, client communication. Richmond family law practices handle high-volume divorce, custody, and support cases with emotional complexity.</p>
            </div>

            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-xl text-charcoal mb-3">Civil Litigation</h3>
              <p className="text-base text-text-mid font-300">Discovery management, document organization, evidence tracking. Richmond civil litigation—contract disputes, personal injury, employment—generates complex discovery that needs organization.</p>
            </div>

            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-xl text-charcoal mb-3">Corporate Law</h3>
              <p className="text-base text-text-mid font-300">M&A coordination, closing management, due diligence. Richmond has growing corporate sector with M&A deals requiring coordination across multiple parties and jurisdictions.</p>
            </div>

            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-xl text-charcoal mb-3">Real Estate</h3>
              <p className="text-base text-text-mid font-300">Transaction coordination, email management, closing logistics. Richmond's real estate market is active—coordination VAs reduce closing timelines by weeks.</p>
            </div>

            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-xl text-charcoal mb-3">Criminal Defense</h3>
              <p className="text-base text-text-mid font-300">Discovery organization, multimedia evidence management, high-volume caseload support. Richmond public defenders and criminal practices manage 80-150+ cases with complex discovery.</p>
            </div>

            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-xl text-charcoal mb-3">Estate Planning</h3>
              <p className="text-base text-text-mid font-300">Trust funding coordination, beneficiary tracking, probate management. Richmond estate planning practices handle asset documentation and trust funding follow-up.</p>
            </div>

            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-xl text-charcoal mb-3">IP & Patents</h3>
              <p className="text-base text-text-mid font-300">Patent prosecution deadline management, trademark maintenance, portfolio tracking. Richmond tech and manufacturing companies generate IP protection work.</p>
            </div>
          </div>
        </section>

        <section className="mb-16 p-10 bg-brass/15 border-2 border-brass rounded-sm">
          <h2 className="font-serif text-3xl text-charcoal mb-6">The Richmond Law Market Reality</h2>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            Richmond attorneys bill $150-350/hour depending on practice area and experience. Your VA costs $30-42k/year but recovers 20-40 billable hours per week. At Richmond rates, that's $150k-300k+ in recovered billable capacity annually.
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            A solo immigration attorney in Richmond recovering 10 hours/week at $250/hr = $130k annually in recovered revenue. Your VA pays for itself within the first month.
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300">
            The question isn't whether you can afford a VA. The question is whether you can afford not to have one while your competitors do.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-8">What You Get With Lawyer Capital VA</h2>

          <div className="space-y-6">
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full bg-brass text-charcoal flex items-center justify-center flex-shrink-0 font-serif font-600">1</div>
              <div>
                <h3 className="font-serif text-xl text-charcoal mb-2">Specialized Training</h3>
                <p className="text-base text-text-mid font-300">Your VA understands Virginia law, court procedures, USCIS deadlines, local court rules, and the specific requirements of your practice area.</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full bg-brass text-charcoal flex items-center justify-center flex-shrink-0 font-serif font-600">2</div>
              <div>
                <h3 className="font-serif text-xl text-charcoal mb-2">Confidentiality & Security</h3>
                <p className="text-base text-text-mid font-300">NDA-protected, Checkr background-verified, encrypted communication. Your clients' confidential information stays confidential.</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full bg-brass text-charcoal flex items-center justify-center flex-shrink-0 font-serif font-600">3</div>
              <div>
                <h3 className="font-serif text-xl text-charcoal mb-2">Dedicated Support</h3>
                <p className="text-base text-text-mid font-300">Same VA every day. They learn your practice, your clients, your workflows. No turnover. No retraining. No continuity loss.</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full bg-brass text-charcoal flex items-center justify-center flex-shrink-0 font-serif font-600">4</div>
              <div>
                <h3 className="font-serif text-xl text-charcoal mb-2">Month-to-Month Flexibility</h3>
                <p className="text-base text-text-mid font-300">No long-term contracts. No lock-in. Scale up during busy seasons, scale down when needed. Your VA earns your business every month.</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full bg-brass text-charcoal flex items-center justify-center flex-shrink-0 font-serif font-600">5</div>
              <div>
                <h3 className="font-serif text-xl text-charcoal mb-2">Flat Rate Pricing</h3>
                <p className="text-base text-text-mid font-300">$700-1,300/month depending on your needs. No surprises. No per-hour overages. Budget predictably.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="my-16 p-8 bg-charcoal text-white rounded-sm">
          <h2 className="font-serif text-3xl mb-4">Ready to Scale Your Richmond Practice?</h2>
          <p className="text-base text-white/70 leading-relaxed mb-6 font-300">
            Your VA is waiting. Same VA every day. Specialized training. Confidential. Dedicated to your practice growth.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-brass text-charcoal text-xs font-600 tracking-widest uppercase hover:bg-brass-light transition-all duration-300"
          >
            Schedule Consultation
          </Link>
        </section>
      </article>
    </main>
  );
}
