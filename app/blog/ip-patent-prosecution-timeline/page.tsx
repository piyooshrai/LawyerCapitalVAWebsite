import { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'IP Patent Prosecution Timeline Management | Lawyer Capital VA',
  description: 'Manage patent office action deadlines and prevent missed prosecution dates.',
  keywords: 'patent prosecution, IP law, deadline management',
};

export default function IPBlogPost() {
  return (
    <main className="bg-ivory min-h-screen">
      <PageHeader
        label="Intellectual Property"
        title="Patent Prosecution Timeline Management"
        subtitle="37 patents. Office actions every 3-6 months. One missed deadline = one abandoned patent = $18,000 loss. Your VA never misses one."
      />
      <article className="max-w-4xl mx-auto px-16 py-20">
        <h1 className="font-serif text-6xl text-charcoal mb-8 leading-tight">
          Patent Prosecution Timeline: Tracking Office Actions Without Missing Deadlines
        </h1>

        <p className="text-lg text-text-mid font-300 mb-12 border-l-4 border-brass pl-6">
          You have 37 patent applications. Office actions arrive irregularly. Each one has a 3-6 month response deadline. One application is forgotten. The deadline passes. The application is abandoned. $18,000 in prosecution work is gone. Client trust is gone. You are sued. All because one deadline was missed.
        </p>

        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-6">Patent Prosecution Deadline Tracking</h2>

          <div className="space-y-8">
            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-xl text-charcoal mb-2">Create Master Patent Docket</h3>
              <p className="text-base text-text-mid leading-relaxed font-300">
                For each patent application, maintain: application number, filing date, applicant, examiner, office action history, current status, response deadline, last action taken. One master docket shows every application and current status.
              </p>
            </div>

            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-xl text-charcoal mb-2">Monitor USPTO PAIR System Weekly</h3>
              <p className="text-base text-text-mid leading-relaxed font-300">
                Check the USPTO PAIR system weekly. Does any application have a new office action? Has the response deadline changed? Has the application's status changed? Log all updates to the master docket.
              </p>
            </div>

            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-xl text-charcoal mb-2">Automated Deadline Alerts (60/30/7 Days)</h3>
              <p className="text-base text-text-mid leading-relaxed font-300">
                Build automated alerts into your system. 60 days before deadline: note that response work needs to begin. 30 days before: confirm response draft is started. 7 days before: confirm response is ready to file. The deadline does not surprise you.
              </p>
            </div>

            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-xl text-charcoal mb-2">Prior Art Documentation</h3>
              <p className="text-base text-text-mid leading-relaxed font-300">
                When you receive an office action, immediately organize and summarize the cited prior art references. What are the examiner's rejections? What are your strongest arguments? Prepare a summary that lets you draft the response efficiently.
              </p>
            </div>

            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-xl text-charcoal mb-2">International Filing Coordination</h3>
              <p className="text-base text-text-mid leading-relaxed font-300">
                For Paris Convention filings: track priority dates (12 months from US filing). For PCT filings: track priority dates and national phase entry dates (30 months from priority date). International deadlines are less forgiving than US deadlines.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16 p-10 bg-brass/15 border-2 border-brass rounded-sm">
          <h2 className="font-serif text-3xl text-charcoal mb-8">The Cost of One Missed Deadline</h2>

          <p className="text-base text-text-mid leading-relaxed font-300 mb-6">
            One abandoned patent application = $5,000-25,000 lost (all prosecution work + filing fees + future value).
          </p>

          <p className="text-base text-text-mid leading-relaxed font-300 mb-6">
            At 20-50 active applications, you are playing Russian roulette with $100,000-1,250,000 in portfolio value.
          </p>

          <p className="text-base text-text-mid leading-relaxed font-300">
            A proper deadline management system eliminates this risk. The cost is minimal. The protection is enormous.
          </p>
        </section>

        <section className="my-16 p-8 bg-charcoal text-white rounded-sm">
          <h2 className="font-serif text-2xl mb-4">Protect Your IP Portfolio</h2>
          <p className="text-base text-white/70 leading-relaxed mb-6 font-300">
            Patent prosecution is deadline-driven. One missed date costs $5,000-25,000. Your firm's IP portfolio protection depends on flawless deadline management. Implement a system that works. Your clients' innovations deserve it.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-brass text-white text-xs font-600 tracking-wider uppercase hover:bg-brass-light transition-all duration-300"
          >
            Get IP Deadline Management Support
          </Link>
        </section>
      </article>
    </main>
  );
}
