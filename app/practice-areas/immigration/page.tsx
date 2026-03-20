import { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'Immigration Law Virtual Assistant | Lawyer Capital VA',
  description: 'Multi-jurisdictional case tracking, visa application coordination, and immigration deadline management.',
  keywords: 'immigration law virtual assistant, USCIS coordination, visa processing support',
};

export default function ImmigrationPage() {
  return (
    <main className="bg-ivory min-h-screen">
      <PageHeader
        label="Immigration Law Support"
        title="One Missed Deadline = Case Denial"
        subtitle="Your client's visa application sits in a queue. One day after the RFE deadline passes, the application is automatically denied. Your VA manages the timeline."
      />
      <article className="max-w-4xl mx-auto px-16 py-20">
        <h1 className="font-serif text-6xl text-charcoal mb-8 leading-tight">
          Immigration Law: One Missed Deadline = Case Denial
        </h1>

        <p className="text-lg text-text-mid font-300 mb-12 border-l-4 border-brass pl-6">
          <strong>The real problem:</strong> Your client's visa application sits in a queue. You are the only person who knows the deadline exists. USCIS will not email. Your client will not track it. One day after the 84-90 day RFE deadline passes, the application is automatically denied. No second chance. No appeal. No recovery. Your client loses their job offer, their family immigration plan, everything. And you are sued.
        </p>

        <section className="mb-16 py-12 bg-charcoal/5 px-8 rounded-sm border-l-4 border-brass">
          <h2 className="font-serif text-3xl text-charcoal mb-6">The RFE Response Deadline Crisis</h2>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            <strong>35-50% of employment-based cases receive an RFE.</strong> That is a Request for Evidence from USCIS. You have 84-90 days to respond. That sounds like time. It is not.
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            You receive the RFE. You need to gather documents from your client. They are slow. You need to contact their employer. The employer is slow. You need international documents from their home country. That takes 3-4 weeks just to arrive. You now have 40 days left to prepare a response that often requires 15-25 hours of work.
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300">
            <strong>And 15-25% of RFE responses still get denied.</strong> Which means the case goes to appeal, requiring another 40+ hours of work. A solo immigration attorney managing 20-30 cases cannot handle this math. One missed deadline. One slow client. One international shipping delay. Case denied.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-6 mt-12">The Real Immigration Law Pain Points</h2>

          <div className="space-y-8">
            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-xl text-charcoal mb-2">1. Deadline Management Across Multiple Agencies (84-90 Days Is the Real Timeline)</h3>
              <p className="text-base text-text-mid leading-relaxed font-300">
                USCIS does not send you a reminder email. Your client does not track deadlines. You do. Employment cases involve USCIS, DOL, DOS (consular), and sometimes OPIC. Each has different deadlines. One spreadsheet will not cut it.
              </p>
            </div>

            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-xl text-charcoal mb-2">2. Form Complexity and 30-35% Initial Rejection Rate</h3>
              <p className="text-base text-text-mid leading-relaxed font-300">
                I-485, I-140, I-130, I-751 each has 40+ fields. A single error equals rejection equals 1-2 weeks wasted. Small firms see 30-35% initial rejection rates on first submissions.
              </p>
            </div>

            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-xl text-charcoal mb-2">3. RFE Response Preparation (15-25 Hours Per RFE)</h3>
              <p className="text-base text-text-mid leading-relaxed font-300">
                RFE responses require finding missing documents, explaining employment, verifying income, gathering international documents. At 15-25 hours per RFE, and 35-50% of cases getting RFEs, that is 10-15 RFEs per year you are managing. That is 150-375 hours of RFE work annually.
              </p>
            </div>

            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-xl text-charcoal mb-2">4. International Coordination Nightmare</h3>
              <p className="text-base text-text-mid leading-relaxed font-300">
                You need police certificates from 5 countries. Consular processing requires coordination with embassies. Visa bulletin changes affect priority dates. You are managing multiple time zones, multiple agencies, multiple countries.
              </p>
            </div>

            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-xl text-charcoal mb-2">5. Case Status Visibility Is Non-Existent</h3>
              <p className="text-base text-text-mid leading-relaxed font-300">
                USCIS PAIR portal does not always update in real-time. You are checking manually. Your client is checking and emailing you. You do not know if their case is in queue or stuck. Nobody knows.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16 p-10 bg-brass/15 border-2 border-brass rounded-sm">
          <h2 className="font-serif text-3xl text-charcoal mb-8">The Cost of One Missed Deadline</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="font-serif text-5xl text-brass font-600 mb-2">$2,500-8,000</div>
              <p className="text-sm text-charcoal font-500">lost per missed deadline</p>
              <p className="text-xs text-text-mid mt-2">(case value + rework costs)</p>
            </div>
            <div className="text-center">
              <div className="font-serif text-5xl text-brass font-600 mb-2">30-35%</div>
              <p className="text-sm text-charcoal font-500">initial form rejection rate</p>
              <p className="text-xs text-text-mid mt-2">(small firms average)</p>
            </div>
            <div className="text-center">
              <div className="font-serif text-5xl text-brass font-600 mb-2">$195,000-390,000</div>
              <p className="text-sm text-charcoal font-500">annual revenue impact</p>
              <p className="text-xs text-text-mid mt-2">(across all error types)</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-sm border-l-4 border-brass">
            <h3 className="font-600 text-charcoal mb-3">Real Firm Math: Solo Immigration Attorney</h3>
            <p className="text-base text-text-mid leading-relaxed font-300">
              <strong>Cases handled/year:</strong> 30-50. Average case value: $2,500-8,000. With 2-8% missed deadline rate (industry average for manual tracking) and 30-35% initial rejection rate, you are losing <strong>$195,000-390,000 annually</strong> in rework, rejections, and deadline misses.
            </p>
            <p className="text-base text-text-mid leading-relaxed font-300 mt-3">
              <strong>With an immigration VA:</strong> Automated deadline tracking, form verification before submission, RFE response coordination, client document management. Reduces missed deadline rate to 0-1% and rejection rate to <strong>&lt;5%</strong>.
            </p>
            <p className="text-base text-text-mid leading-relaxed font-300 mt-3">
              <strong>VA cost:</strong> $2,500-3,000/month = $30,000-36,000/year.
            </p>
            <p className="font-600 text-charcoal mt-4">
              <strong>Net gain: $159,000-360,000/year in eliminated rework and recovered cases.</strong>
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-6 mt-12">FAQs: Immigration Law Practice</h2>

          <div className="space-y-6">
            <details className="p-6 bg-white border border-text-light/10 rounded-sm group">
              <summary className="cursor-pointer font-600 text-charcoal flex justify-between items-center">
                How can a VA track USCIS case status across 30-50 cases?
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-base text-text-mid leading-relaxed font-300 mt-4">
                Your VA maintains a master case tracker with USCIS PAIR status for every case. They check status weekly, note any changes, and alert you to updates. They track RFE dates, response deadlines, and next expected action. No manual checking needed.
              </p>
            </details>

            <details className="p-6 bg-white border border-text-light/10 rounded-sm group">
              <summary className="cursor-pointer font-600 text-charcoal flex justify-between items-center">
                Can a VA reduce form rejection rates from 30% to 5% or less?
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-base text-text-mid leading-relaxed font-300 mt-4">
                Yes. Your VA verifies every form against USCIS requirements before submission. They check field completeness, verify supporting documents are included, confirm formatting meets requirements. They maintain a compliance checklist for every form type. This catches errors before USCIS rejects them.
              </p>
            </details>

            <details className="p-6 bg-white border border-text-light/10 rounded-sm group">
              <summary className="cursor-pointer font-600 text-charcoal flex justify-between items-center">
                How do we manage RFE responses with 84-90 day deadlines?
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-base text-text-mid leading-relaxed font-300 mt-4">
                Your VA receives the RFE, immediately identifies what documents are missing, and coordinates with your client and their employer to gather them. They prepare an RFE response framework so you can focus on the legal explanation. They manage the 84-90 day timeline with milestone alerts (60 days, 30 days, 7 days).
              </p>
            </details>

            <details className="p-6 bg-white border border-text-light/10 rounded-sm group">
              <summary className="cursor-pointer font-600 text-charcoal flex justify-between items-center">
                What about international document gathering (police certificates, credentials)?
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-base text-text-mid leading-relaxed font-300 mt-4">
                Your VA maintains a checklist of required documents by country. They coordinate with your client to request documents from abroad (police certificates, education credentials, work history verification). They track timelines and flag delays. They know which documents need apostilles and which need translation.
              </p>
            </details>

            <details className="p-6 bg-white border border-text-light/10 rounded-sm group">
              <summary className="cursor-pointer font-600 text-charcoal flex justify-between items-center">
                Can a VA handle employment-based cases with DOL coordination?
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-base text-text-mid leading-relaxed font-300 mt-4">
                Employment-based cases require Labor Certification coordination with DOL (PERM). Your VA tracks PERM timelines (prevailing wage requests, job posting dates, recruitment documentation). They organize all employment verification documents and maintain a master employment timeline for each case.
              </p>
            </details>
          </div>
        </section>

        <section className="my-16 p-8 bg-charcoal text-white rounded-sm">
          <h2 className="font-serif text-2xl mb-4">Your Clients Visas Depend on Deadline Precision</h2>
          <p className="text-base text-white/70 leading-relaxed mb-6 font-300">
            One missed deadline. One slow client response. One international shipping delay. And your client loses their visa. A dedicated immigration VA eliminates the deadline chaos, manages RFE responses, and ensures every case stays on track. Your clients get their visas. You do not get sued.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-brass text-white text-xs font-600 tracking-wider uppercase hover:bg-brass-light transition-all duration-300"
          >
            Get Immigration Law Support
          </Link>
        </section>
      </article>
    </main>
  );
}
