import { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'Deadline Management for Law Firms | Lawyer Capital VA',
  description: 'Automated deadline tracking, calendar coordination, and milestone alerts across all legal matters.',
  keywords: 'legal deadline management, case calendar, deadline tracking software',
};

export default function DeadlineManagementPage() {
  return (
    <main className="bg-ivory min-h-screen">
      <PageHeader
        label="Core Services"
        title="Master Docket: Deadline Management That Works"
        subtitle="One forgotten deadline costs $2,500-25,000. Your VA maintains a master docket with automated alerts at 60, 30, 14, and 7 days. Nothing falls through."
      />
      <article className="max-w-4xl mx-auto px-16 py-20">
        <h1 className="font-serif text-6xl text-charcoal mb-8 leading-tight">
          Deadline Management: Your Most Expensive Mistake
        </h1>

        <p className="text-lg text-text-mid font-300 mb-12 border-l-4 border-brass pl-6">
          <strong>The reality:</strong> You have 47 matters active. Patent office actions arrive quarterly. RFE deadlines are 84-90 days. Trust funding deadlines are moving. Opposition briefs are due in 14 days. One forgotten deadline costs $2,500-25,000. You are tracking this in spreadsheets, calendar notes, and your brain. That is not a system. That is a lawsuit waiting to happen.
        </p>

        <section className="mb-16 py-12 bg-charcoal/5 px-8 rounded-sm border-l-4 border-brass">
          <h2 className="font-serif text-3xl text-charcoal mb-6">Why Deadline Management Fails</h2>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            <strong>Spreadsheets don't send alerts.</strong> Calendar entries get buried. Outlook reminders go unnoticed. One crisis week. One deadline gets buried. One client loses their case, their visa, their patent protection. The cost: $2,500-25,000 per missed deadline + malpractice claim.
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            <strong>And you cannot manually track multiple practice areas.</strong> Patent deadlines are 90 days. Immigration deadlines are 84-90 days. RFE deadlines are 90 days. Trial dates vary. Court filing deadlines vary. Each has different notification protocols. Each has different response requirements. One system cannot manage all of them reliably.
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300">
            <strong>Your VA maintains a master deadline docket that actually works.</strong> Every matter. Every deadline. Automated alerts at 60 days, 30 days, 14 days, and 7 days. Color-coded by practice area. Searchable by type. Nothing falls through the cracks.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-6 mt-12">How Deadline Management Works</h2>

          <div className="space-y-8">
            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-xl text-charcoal mb-2">Master Docket System</h3>
              <p className="text-base text-text-mid leading-relaxed font-300">
                Your VA maintains a master deadline docket showing every matter, every deadline, current status, and upcoming milestones. Color-coded by practice area. Sortable by deadline date, matter type, or assigned attorney. You see at a glance what is due this week.
              </p>
            </div>

            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-xl text-charcoal mb-2">Automated Alerts & Notifications</h3>
              <p className="text-base text-text-mid leading-relaxed font-300">
                Your VA sends deadline alerts at 60 days, 30 days, 14 days, and 7 days before each deadline. Email alerts. Calendar invites. Weekly deadline reports. No deadline is forgotten.
              </p>
            </div>

            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-xl text-charcoal mb-2">Practice Area Customization</h3>
              <p className="text-base text-text-mid leading-relaxed font-300">
                Patent prosecution deadlines are different from immigration deadlines are different from civil litigation deadlines. Your VA understands each practice area's unique timeline and urgency requirements.
              </p>
            </div>

            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-xl text-charcoal mb-2">Status Updates & Milestone Tracking</h3>
              <p className="text-base text-text-mid leading-relaxed font-300">
                Your VA tracks deadline status. When the deadline passes, they confirm completion. When work is pending, they flag it. You always know the status of every deadline.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16 p-10 bg-brass/15 border-2 border-brass rounded-sm">
          <h2 className="font-serif text-3xl text-charcoal mb-8">The Cost of One Missed Deadline</h2>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-6">
            One patent office action deadline missed = $5,000-25,000 lost (application abandoned + all prosecution work wasted). One immigration RFE deadline missed = $2,500-8,000 lost (case denied). One civil litigation brief deadline missed = case dismissed. One trademark renewal deadline missed = $2,000-5,000 lost (trademark rights abandoned).
          </p>
          <p className="font-600 text-charcoal">
            A deadline management VA prevents this. Cost: $2,500-3,000/month. ROI: Infinite (prevents catastrophic losses).
          </p>
        </section>

        <section className="my-16 p-8 bg-charcoal text-white rounded-sm">
          <h2 className="font-serif text-2xl mb-4">Stop Hoping Deadlines Get Done</h2>
          <p className="text-base text-white/70 leading-relaxed mb-6 font-300">
            Deadline management is not optional. It is the minimum. Your VA ensures every deadline is tracked, every alert is sent, and every deadline is met. You focus on legal work. The system handles deadline precision.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-brass text-white text-xs font-600 tracking-wider uppercase hover:bg-brass-light transition-all duration-300"
          >
            Get Deadline Management Support
          </Link>
        </section>
      </article>
    </main>
  );
}
