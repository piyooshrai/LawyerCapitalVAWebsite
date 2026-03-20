import { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'Intellectual Property Virtual Assistant | Lawyer Capital VA',
  description: 'Patent prosecution support, trademark filing, licensing agreements, and IP portfolio tracking.',
  keywords: 'intellectual property virtual assistant, patent support services',
};

export default function IntellectualPropertyPage() {
  return (
    <main className="bg-ivory min-h-screen">
      <PageHeader
        label="IP Law Support"
        title="The Deadline Was Yesterday. The Patent is Abandoned."
        subtitle="$18,000 in prosecution work gone. Your VA watches 37 patents. One missed deadline costs more than 10 months of VA support."
      />
      <article className="max-w-4xl mx-auto px-16 py-20">
        <h1 className="font-serif text-6xl text-charcoal mb-8 leading-tight">
          IP Law: One Missed Deadline = Abandoned Protection
        </h1>

        <p className="text-lg text-text-mid font-300 mb-12 border-l-4 border-brass pl-6">
          <strong>The real problem:</strong> You have 37 active patent applications. An office action arrives Monday morning. The deadline is 91 days away. You make a note. Work gets busy. The deadline moves. 87 days pass. You check the docket Thursday. The deadline was yesterday. The application is abandoned. $18,000 in prosecution work is gone. Filing fees are gone. Client trust is gone. You are sued. That single missed deadline cost you more than 10 months of a VA.
        </p>

        {/* THE IP DEADLINE CRISIS */}
        <section className="mb-16 py-12 bg-charcoal/5 px-8 rounded-sm border-l-4 border-brass">
          <h2 className="font-serif text-3xl text-charcoal mb-6">The IP Deadline Management Crisis</h2>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            <strong>Patent prosecution is deadline-intensive.</strong> An office action arrives. You have typically 3 months (sometimes 6 months with extension) to respond. Within that window, you need to review the office action, research applicable prior art, draft claim amendments, prepare arguments, and coordinate with the applicant. A single missed deadline = application abandoned and all prior fees/work wasted.
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            <strong>And trademarks require continuous maintenance filing.</strong> Trademark registration requires initial examination (3-6 months), then issuance, then periodic renewals (every 10 years), periodic maintenance filings (1st and 3rd year after registration). Applicants forget renewal deadlines. Maintenance filings get buried on your docket.
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300">
            <strong>Meanwhile, international IP requires managing foreign counsel, priority dates, and overlapping filing deadlines across multiple jurisdictions.</strong> Paris Convention deadlines, Patent Cooperation Treaty deadlines, national phase entry deadlines. Each has different dates. One missed date = loss of priority rights internationally.
          </p>
        </section>

        {/* PAIN POINTS */}
        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-6 mt-12">The Real IP Law Pain Points</h2>

          <div className="space-y-8">
            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-xl text-charcoal mb-2">1. Patent Prosecution Deadline Management (Office Actions Every 3-6 Months)</h3>
              <p className="text-base text-text-mid leading-relaxed font-300">
                A patent application takes 2-5+ years to prosecute. During that time, the USPTO issues office actions at irregular intervals. Each office action has a response deadline (typically 3 or 6 months). You're managing a docket of 20-50 applications, each with its own office action history and upcoming deadlines. One forgotten deadline = application abandoned.
              </p>
            </div>

            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-xl text-charcoal mb-2">2. Trademark Prosecution & Maintenance (Initial Registration + Renewals)</h3>
              <p className="text-base text-text-mid leading-relaxed font-300">
                Trademark registration takes 8-15 months. During examination, office actions require responses on strict deadlines. After registration, renewals are required every 10 years. First and third-year maintenance filings are required. Maintenance filings require declarations of use/intent to use. Applicants often forget dates. Registrations lapse.
              </p>
            </div>

            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-xl text-charcoal mb-2">3. International IP Filing (Paris Convention, PCT, National Phase)</h3>
              <p className="text-base text-text-mid leading-relaxed font-300">
                A US patent application gets priority date. You have 12 months to file in foreign countries (Paris Convention) or file a PCT application. A PCT application gets priority but requires national phase entry within 30 months from priority date. Each country has different national phase entry dates, different requirements, different fees. One missed date = loss of priority in that country.
              </p>
            </div>

            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-xl text-charcoal mb-2">4. Office Action Response Preparation (15-40 Hours Per Action)</h3>
              <p className="text-base text-text-mid leading-relaxed font-300">
                An office action requires detailed response: reviewing the office action, researching prior art cited, comparing claims to prior art, determining patentability strategy, drafting claim amendments, preparing arguments. This is 15-40 hours per office action. At 5-10 office actions per application over prosecution, that's 75-400 hours per application.
              </p>
            </div>

            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-xl text-charcoal mb-2">5. IP Portfolio Organization (20-50+ Active Matters Tracked)</h3>
              <p className="text-base text-text-mid leading-relaxed font-300">
                You're managing a portfolio of 20-50+ patents, trademarks, copyrights across multiple jurisdictions. Each has different filing dates, different status, different upcoming deadlines. You're maintaining dockets, tracking office action responses, coordinating with clients on prosecution decisions. One disorganized portfolio = missed deadlines and lost IP.
              </p>
            </div>
          </div>
        </section>

        {/* ROI SECTION */}
        <section className="mb-16 p-10 bg-brass/15 border-2 border-brass rounded-sm">
          <h2 className="font-serif text-3xl text-charcoal mb-8">The Cost of Lost IP Rights</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="font-serif text-5xl text-brass font-600 mb-2">$5,000-25,000</div>
              <p className="text-sm text-charcoal font-500">per abandoned patent application</p>
              <p className="text-xs text-text-mid mt-2">(all prosecution work + filing fees lost)</p>
            </div>
            <div className="text-center">
              <div className="font-serif text-5xl text-brass font-600 mb-2">$2,000-5,000</div>
              <p className="text-sm text-charcoal font-500">per abandoned trademark</p>
              <p className="text-xs text-text-mid mt-2">(protection and brand loss)</p>
            </div>
            <div className="text-center">
              <div className="font-serif text-5xl text-brass font-600 mb-2">20-50</div>
              <p className="text-sm text-charcoal font-500">active IP matters in portfolio</p>
              <p className="text-xs text-text-mid mt-2">(typical IP firm)</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-sm border-l-4 border-brass">
            <h3 className="font-600 text-charcoal mb-3">Real Firm Math: IP Practice</h3>
            <p className="text-base text-text-mid leading-relaxed font-300">
              <strong>Typical practice:</strong> 20-50 active applications/registrations. Each requires ongoing deadline management (office actions, maintenance filings, renewals). At 10-20 administrative hours per matter per year, that's 200-1,000 hours/year on deadline tracking, docket management, and correspondence.
            </p>
            <p className="text-base text-text-mid leading-relaxed font-300 mt-3">
              <strong>The risk profile:</strong> A single missed deadline = abandoned patent ($5,000-25,000 loss) or trademark ($2,000-5,000 loss). Even one abandoned application per year = $5,000-25,000 malpractice exposure annually. Over a 5-year period, that's $25,000-125,000 in potential claims.
            </p>
            <p className="text-base text-text-mid leading-relaxed font-300 mt-3">
              <strong>With an IP VA:</strong> Maintains master IP docket showing all active matters, filing dates, office action histories, upcoming deadlines. Tracks all deadlines with automated alerts. Prepares office action response packages with prior art organized and initial arguments outlined. Coordinates with clients on prosecution decisions. Manages international filing coordination.
            </p>
            <p className="text-base text-text-mid leading-relaxed font-300 mt-3">
              <strong>VA cost:</strong> $2,500-3,500/month = $30,000-42,000/year.
            </p>
            <p className="font-600 text-charcoal mt-4">
              <strong>Net gain: Zero abandoned applications + malpractice risk mitigation + recovered 200-1,000 hours/year.</strong>
            </p>
          </div>
        </section>

        {/* FAQs */}
        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-6 mt-12">FAQs: IP Law Practice</h2>

          <div className="space-y-6">
            <details className="p-6 bg-white border border-text-light/10 rounded-sm group">
              <summary className="cursor-pointer font-600 text-charcoal flex justify-between items-center">
                How does a VA manage IP dockets and deadline tracking?
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-base text-text-mid leading-relaxed font-300 mt-4">
                Your VA maintains a master IP docket for each matter: filing date, priority date, application/registration number, examiner, office action history, response deadline, next expected action. They monitor USPTO/TEAS systems for office actions. They track all upcoming deadlines. They provide monthly deadline reports. They ensure nothing falls through the cracks.
              </p>
            </details>

            <details className="p-6 bg-white border border-text-light/10 rounded-sm group">
              <summary className="cursor-pointer font-600 text-charcoal flex justify-between items-center">
                Can a VA prepare office action response packages?
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-base text-text-mid leading-relaxed font-300 mt-4">
                Absolutely. Your VA reviews the office action, identifies cited references, organizes prior art by claim element, prepares initial response summaries, and outlines potential claim amendments. They prepare a response package ready for your legal analysis. You focus on patentability strategy and legal arguments; they handle organization and prior art compilation.
              </p>
            </details>

            <details className="p-6 bg-white border border-text-light/10 rounded-sm group">
              <summary className="cursor-pointer font-600 text-charcoal flex justify-between items-center">
                How does a VA manage international IP filings?
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-base text-text-mid leading-relaxed font-300 mt-4">
                Your VA tracks priority dates and Paris Convention/PCT deadlines. They coordinate national phase entry filings in selected countries. They maintain a multi-jurisdictional docket showing filing status in each country. They coordinate with foreign counsel on prosecution. They ensure all priority deadlines and national phase entry dates are met.
              </p>
            </details>

            <details className="p-6 bg-white border border-text-light/10 rounded-sm group">
              <summary className="cursor-pointer font-600 text-charcoal flex justify-between items-center">
                Can a VA manage trademark renewals and maintenance filings?
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-base text-text-mid leading-relaxed font-300 mt-4">
                Yes. Your VA tracks trademark registration dates and renewal dates (every 10 years). They prepare maintenance filings at the 1st and 3rd year. They coordinate with clients on declarations of use and prepare required specimens. They track renewal deadlines to ensure marks don't lapse.
              </p>
            </details>

            <details className="p-6 bg-white border border-text-light/10 rounded-sm group">
              <summary className="cursor-pointer font-600 text-charcoal flex justify-between items-center">
                How much malpractice risk comes from missed IP deadlines?
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-base text-text-mid leading-relaxed font-300 mt-4">
                One missed patent office action deadline = abandoned application = $5,000-25,000 malpractice claim. One missed trademark renewal = loss of trademark rights = $2,000-5,000 claim. Managing 20-50 matters with overlapping deadlines, a single miss is statistically likely. A dedicated IP VA eliminates this risk by maintaining automated deadline tracking and monthly deadline reports.
              </p>
            </details>
          </div>
        </section>

        {/* CTA */}
        <section className="my-16 p-8 bg-charcoal text-white rounded-sm">
          <h2 className="font-serif text-2xl mb-4">Your Clients' Innovations Deserve Flawless Protection</h2>
          <p className="text-base text-white/70 leading-relaxed mb-6 font-300">
            IP law is about protecting innovation. But protection is meaningless if deadlines are missed and rights are abandoned. A dedicated IP VA ensures every deadline is tracked, every office action is answered, every renewal is filed timely, and no application is lost to missed dates. Your clients' innovations get the protection they deserve. Your firm avoids the malpractice exposure of abandoned applications.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-brass text-white text-xs font-600 tracking-wider uppercase hover:bg-brass-light transition-all duration-300"
          >
            Get IP Law Support
          </Link>
        </section>
      </article>
    </main>
  );
}
