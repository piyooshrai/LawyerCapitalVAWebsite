import { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'Client Intake & Onboarding Service | Lawyer Capital VA',
  description: 'New client intake, initial questionnaires, information gathering, and file setup.',
  keywords: 'client intake service, legal onboarding, client questionnaire',
};

export default function IntakeOnboardingPage() {
  return (
    <main className="bg-ivory min-h-screen">
      <PageHeader
        label="Core Services"
        title="Gather Complete Information the First Time"
        subtitle="3-4 hours of your time per new client becomes 45 minutes. Comprehensive questionnaires, gap identification, organized file setup."
      />
      <article className="max-w-4xl mx-auto px-16 py-20">
        <h1 className="font-serif text-6xl text-charcoal mb-8 leading-tight">
          Client Intake: Gather Complete Information the First Time
        </h1>

        <p className="text-lg text-text-mid font-300 mb-12 border-l-4 border-brass pl-6">
          <strong>The problem:</strong> New client onboarding takes 3-4 hours of your time. Intake interview. Questionnaire review. Information organization. File setup. Follow-up on missing information. You discover 6 months into the engagement that they never mentioned a key asset. Now your planning is incomplete. Your advice is incomplete. Your plan is incomplete.
        </p>

        <section className="mb-16 py-12 bg-charcoal/5 px-8 rounded-sm border-l-4 border-brass">
          <h2 className="font-serif text-3xl text-charcoal mb-6">Why Intake Fails</h2>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            <strong>You are not a great interviewer when you are billing.</strong> Client is slow to answer. Client does not understand the question. Client forgets information. You are watching the clock. You rush. Critical information gets missed. Questionnaire goes incomplete.
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            <strong>And incomplete intake leads to incomplete planning.</strong> Estate planning: one asset category missed = one asset passes outside the plan. Immigration: one employment history gap = I-485 rejection. Corporate: one shareholder interest unidentified = deal structure problem. Incomplete intake = incomplete work.
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300">
            <strong>Your VA conducts thorough intake while you focus on case strategy.</strong> Your VA guides clients through detailed questionnaires. They ask follow-up questions. They identify gaps. They organize information. They prepare a complete intake summary for you.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-6 mt-12">Intake & Onboarding Services</h2>

          <div className="space-y-6">
            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-xl text-charcoal mb-2">Comprehensive Intake Questionnaires</h3>
              <p className="text-base text-text-mid leading-relaxed font-300">
                Your VA uses detailed, practice-specific questionnaires that gather complete information. Estate planning? Asset inventory, beneficiary information, guardianship preferences. Immigration? Full employment history, international travel, family information. Immigration? All relevant business interests, shareholder information, deal history. Clients complete thorough intake the first time.
              </p>
            </div>

            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-xl text-charcoal mb-2">Follow-Up Information Requests</h3>
              <p className="text-base text-text-mid leading-relaxed font-300">
                Client left a question blank? Your VA follows up. Clarifies. Gathers additional detail. No information gaps. No missing documents. Complete file from day one.
              </p>
            </div>

            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-xl text-charcoal mb-2">Document Organization & File Setup</h3>
              <p className="text-base text-text-mid leading-relaxed font-300">
                Once information is gathered, your VA organizes documents. Creates case files. Sets up case folders. Scans documents. Creates a searchable case archive. File is ready for you to begin substantive work.
              </p>
            </div>

            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-xl text-charcoal mb-2">Intake Summary & Recommendations</h3>
              <p className="text-base text-text-mid leading-relaxed font-300">
                Your VA prepares a comprehensive intake summary: all information organized, all documents catalogued, identified gaps flagged, preliminary recommendations noted. You review the summary and move to substantive planning immediately.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16 p-10 bg-brass/15 border-2 border-brass rounded-sm">
          <h2 className="font-serif text-3xl text-charcoal mb-8">The Intake Time Cost</h2>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            <strong>Average attorney intake time per new client: 3-5 hours</strong> (interview, questionnaire review, follow-up, file setup).
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            <strong>At $250/hour:</strong> $750-1,250 per new client in attorney time.
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            <strong>With a VA:</strong> Attorney time reduced to 30-45 minutes (reviewing VA summary + case strategy discussion).
          </p>
          <p className="font-600 text-charcoal">
            20 new clients per year = $15,000-25,000 in recovered attorney time per year (plus more complete intake = fewer future problems).
          </p>
        </section>

        <section className="my-16 p-8 bg-charcoal text-white rounded-sm">
          <h2 className="font-serif text-2xl mb-4">Complete Intake. Complete Work. Complete Client Satisfaction.</h2>
          <p className="text-base text-white/70 leading-relaxed mb-6 font-300">
            Intake is where your case begins. Complete intake information leads to complete planning and better outcomes. Your VA gathers the complete picture so you can focus on strategy and advice. No surprises 6 months later. No incomplete plans. Just thorough, effective representation.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-brass text-white text-xs font-600 tracking-wider uppercase hover:bg-brass-light transition-all duration-300"
          >
            Get Client Intake Support
          </Link>
        </section>
      </article>
    </main>
  );
}
