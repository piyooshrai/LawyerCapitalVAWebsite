import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Legal Case Management | Virtual Assistant Services | Lawyer Capital VA',
  description: 'NDA-protected VA support for docket tracking, deadline management, statute of limitations monitoring, and case organization.',
  keywords: 'legal case management, legal case management software, law firm case management virtual assistant',
};

export default function CaseManagementPage() {
  return (
    <main className="pt-32">
      <article className="max-w-4xl mx-auto px-16 py-20">
        <h1 className="font-serif text-6xl text-charcoal mb-4 leading-tight">
          Legal Case Management & Docket Management
        </h1>
        <p className="text-lg text-text-mid font-300 mb-12 border-l-4 border-brass pl-6">
          Missing a deadline costs clients. Missing a statute of limitations costs your firm everything — your reputation, a malpractice claim, disciplinary action. Our VAs handle docket tracking, deadline management, case organization, and statute monitoring so nothing falls through the cracks.
        </p>

        {/* THE PROBLEM */}
        <section className="mb-16 py-12 bg-charcoal/3 px-8 rounded-sm border-l-4 border-brass">
          <h2 className="font-serif text-3xl text-charcoal mb-6">The Cost of a Missed Deadline</h2>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            You're managing 40 active cases. Each case has 3-5 upcoming deadlines. That's 120-200 deadlines across your active files at any given time.
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            A federal motion deadline is 30 days. A state discovery deadline is 45 days. A statute of limitations is 2 years, and it expires on a Tuesday. You miss one. Not because you're negligent. Because you were focused on trial prep in another case, and the reminder email got buried in 400 other messages.
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            That missed deadline costs you: (1) the client's case, potentially, (2) a malpractice claim, (3) disciplinary action from the bar, (4) reputational damage. In a small firm, one missed deadline can be catastrophic.
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300">
            A dedicated case management VA isn't a luxury. It's a liability shield. It's the most important hire you'll make because they're the person who makes sure none of your cases fall through the cracks.
          </p>
        </section>

        {/* WHAT WE HANDLE */}
        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-6 mt-12">What Our Case Management VA Handles</h2>

          <h3 className="font-serif text-xl text-charcoal mb-4 mt-8">Docket Tracking & Deadline Management</h3>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            Every case has critical dates: filing deadlines, motion deadlines, discovery cut-offs, trial dates, hearing dates. Your VA maintains a master docket for every open case. They monitor deadlines religiously. They send you alerts at 30 days, 14 days, and 3 days before each deadline. They track responsive deadlines (if the other side files a motion, what's your deadline to respond?). They understand local rule variations — what's 30 days in federal court is different from state court, and both are different from your jurisdictional variation.
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            You never ask "when is that due?" again. You know, because your VA has told you already, three times, with escalating urgency.
          </p>

          <h3 className="font-serif text-xl text-charcoal mb-4 mt-8">Statute of Limitations Monitoring</h3>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            A statute of limitations is the hard deadline. Once it passes, you lose the case. Your VA tracks every statute that applies to every open matter. They know that statute of limitations for personal injury is three years, but only if the defendant was properly served. They know that filing a claim tolls the statute. They know that each state has different rules.
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            Your VA maintains a statute tracking spreadsheet. They flag any statute that's approaching expiration. They alert you with a written summary of the matter, the original facts, the deadline, and the required action. No guessing. No missed statutes. No malpractice claims.
          </p>

          <h3 className="font-serif text-xl text-charcoal mb-4 mt-8">Court & Hearing Deadline Coordination</h3>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            A hearing is scheduled. That triggers a cascade of deadlines: pre-hearing brief due 7 days before, exhibits due 5 days before, witness list due 3 days before. Your VA pulls the hearing order, extracts every deadline embedded in it, and adds them all to your master docket. They send reminders. They prepare a hearing preparation checklist 2 weeks before the hearing. They ensure nothing is forgotten.
          </p>

          <h3 className="font-serif text-xl text-charcoal mb-4 mt-8">Discovery Deadline & Obligation Tracking</h3>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            Discovery is complex. Initial disclosures are due 30 days after the case is served (or modified by the parties). Responses to interrogatories are due 30 days after service. Requests for production responses are due 30 days after service. Expert disclosures are due 90 days before trial. Your VA tracks all of these. They know when your discovery obligations are due and when you're entitled to receive responses from the other side. They flag missed deadlines from opposing counsel and alert you to leverage or enforcement opportunities.
          </p>

          <h3 className="font-serif text-xl text-charcoal mb-4 mt-8">Case File Organization & Retrieval</h3>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            A case file with 100 documents is useless if you can't find the one you need. Your VA organizes every case file by document type and date. Pleadings folder. Discovery folder. Evidence folder. Correspondence folder. Each document is named consistently (date_documenttype_party). Your case is organized so you can pull any document in 30 seconds.
          </p>

          <h3 className="font-serif text-xl text-charcoal mb-4 mt-8">Case Summary & Status Reports</h3>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            When you need a case summary quickly (for a client call, for a judge inquiry, for a colleague), your VA has it. They maintain a one-page case summary for every open matter: key dates, parties, claims, current status, upcoming deadlines. You can review the summary in 2 minutes instead of hunting through the file.
          </p>

          <h3 className="font-serif text-xl text-charcoal mb-4 mt-8">Continuance & Extension Management</h3>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            A deadline gets extended. Your VA updates the master docket immediately. A hearing gets continued to a new date. Your VA updates the calendar and notifies all parties (if required). A continuance request is agreed to. Your VA tracks the new deadline and notifies you. No missed deadline because an extension was granted.
          </p>

          <h3 className="font-serif text-xl text-charcoal mb-4 mt-8">Settlement & Closure Management</h3>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            A case settles. Your VA removes it from the active docket, creates a settlement summary file, and preserves all settlement documents (release, payment proof, dismissal order). A case is dismissed. Your VA tracks the dismissal order and ensures no outstanding obligations remain. A case is closed. Your VA archives the entire file and maintains it per your retention policy.
          </p>
        </section>

        {/* TOOLS */}
        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-6 mt-12">Case Management Tools & Systems We Master</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {[
              { name: 'Clio', desc: 'Matter management, docket tracking, deadline alerts, document management' },
              { name: 'MyCase', desc: 'Case timeline, deadline tracking, task management, communication logging' },
              { name: 'PracticePanther', desc: 'Matter tracking, deadline automation, task management, client portal' },
              { name: 'Lawmatics', desc: 'Lead tracking, matter pipeline, deadline management, automation' },
              { name: 'Excel/Google Sheets', desc: 'Master docket spreadsheets, statute tracking, deadline calendars' },
              { name: 'Outlook/Google Calendar', desc: 'Deadline reminders, hearing scheduling, calendar synchronization' },
            ].map((tool) => (
              <div key={tool.name} className="p-6 border border-text-light/10 bg-ivory rounded-sm">
                <h4 className="font-serif text-base font-600 text-charcoal mb-2">{tool.name}</h4>
                <p className="text-sm text-text-mid font-300">{tool.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* IMPACT */}
        <section className="my-20 p-10 bg-brass/12 border-l-4 border-brass rounded-sm">
          <h3 className="font-serif text-2xl text-charcoal mb-4">Real Firm, Real Protection</h3>
          <p className="text-base text-charcoal leading-relaxed mb-4">
            Family law firm, 2 attorneys, 35 active cases (custody matters, divorces, modifications). Before case management VA: Two missed discovery deadlines in one year (both resulting in extensions that were eventually granted, but created client panic and added work). One statute of limitations approaching expiration on a 10-year-old matter that was reopened (saved by 3 days). No centralized docket. Deadlines were tracked in emails, on sticky notes, and in individual attorney calendars.
          </p>
          <p className="text-base text-charcoal leading-relaxed mb-4">
            After VA: Zero missed deadlines for 18 months straight. All statutes tracked proactively. All case files organized consistently. Client calls result in 2-minute case summaries instead of 15-minute file hunts. The attorneys report feeling less stress because they trust that deadlines are managed. Estimated risk avoidance: at least one malpractice claim that would have cost $25,000+ to defend.
          </p>
          <p className="text-base text-charcoal font-600">
            — Family Law Firm, Virginia
          </p>
        </section>

        {/* ADVANTAGES */}
        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-6 mt-12">What Changes With Dedicated Case Management</h2>

          <div className="space-y-6">
            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-lg text-charcoal mb-2">No More Missed Deadlines</h3>
              <p className="text-base text-text-mid font-300">
                Every deadline is tracked, every statute is monitored, every hearing is prepared for. You have a safety net.
              </p>
            </div>

            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-lg text-charcoal mb-2">Case Accessibility: 15-minute hunt → 30-second pull</h3>
              <p className="text-base text-text-mid font-300">
                You need a document or case summary. It's ready because your files are organized by someone who does it every day.
              </p>
            </div>

            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-lg text-charcoal mb-2">Client Communication: Reactive → Proactive</h3>
              <p className="text-base text-text-mid font-300">
                You know what's coming next in every case. You're never scrambling. You're always prepared.
              </p>
            </div>

            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-lg text-charcoal mb-2">Stress Reduction: High → Manageable</h3>
              <p className="text-base text-text-mid font-300">
                You don't carry the deadline anxiety. Your VA does. You can focus on legal strategy, not deadline management.
              </p>
            </div>

            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-lg text-charcoal mb-2">Malpractice Risk: Elevated → Virtually Eliminated</h3>
              <p className="text-base text-text-mid font-300">
                A systematic docket, a statute tracker, and proactive deadline alerts eliminate the most common source of malpractice claims.
              </p>
            </div>
          </div>
        </section>

        {/* ECONOMICS */}
        <section className="mb-16 bg-charcoal/3 px-8 py-12 rounded-sm">
          <h2 className="font-serif text-3xl text-charcoal mb-8">The Value of Never Paying a Malpractice Claim</h2>

          <div className="space-y-4">
            <div className="flex gap-6 items-start">
              <div className="font-serif text-4xl text-brass min-w-fit">$100,000+</div>
              <div>
                <h4 className="font-600 text-charcoal mb-1">Cost of defending a malpractice claim (win or lose)</h4>
                <p className="text-sm text-text-mid">Defense attorney, expert witnesses, depositions, settlement</p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="font-serif text-4xl text-brass min-w-fit">$250,000+</div>
              <div>
                <h4 className="font-600 text-charcoal mb-1">Average malpractice settlement (missed deadline cases)</h4>
                <p className="text-sm text-text-mid">One deadline. One settlement that exceeds annual revenue for a solo firm.</p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="font-serif text-4xl text-brass min-w-fit">$3,500/month</div>
              <div>
                <h4 className="font-600 text-charcoal mb-1">Cost of dedicated case management VA</h4>
                <p className="text-sm text-text-mid">Insurance against every malpractice claim related to deadlines</p>
              </div>
            </div>

            <div className="border-t border-text-light/20 pt-6 mt-6">
              <h4 className="font-serif text-xl text-charcoal mb-3">The Simple Equation</h4>
              <p className="text-base text-text-mid font-300">
                If a dedicated case management VA prevents even ONE missed deadline in a 10-year career, and that missed deadline would have resulted in a $100,000+ claim, the VA has paid for themselves 30 times over. This isn't an overhead expense. This is insurance.
              </p>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-6 mt-12">How Case Management Works With Your VA</h2>

          <ol className="space-y-8">
            <li className="flex gap-4">
              <span className="font-serif text-2xl text-brass font-600 min-w-fit">01</span>
              <div>
                <h4 className="font-600 text-charcoal mb-2">Case File Audit</h4>
                <p className="text-base text-text-mid font-300">We review every open case file, extract all critical dates, identify the statute of limitations, and create a master docket.</p>
              </div>
            </li>

            <li className="flex gap-4">
              <span className="font-serif text-2xl text-brass font-600 min-w-fit">02</span>
              <div>
                <h4 className="font-600 text-charcoal mb-2">Docket System Setup</h4>
                <p className="text-base text-text-mid font-300">We set up your docket tracking system (Clio, MyCase, or custom spreadsheet), create a statute of limitations tracker, and establish reminder protocols.</p>
              </div>
            </li>

            <li className="flex gap-4">
              <span className="font-serif text-2xl text-brass font-600 min-w-fit">03</span>
              <div>
                <h4 className="font-600 text-charcoal mb-2">Ongoing Deadline Management</h4>
                <p className="text-base text-text-mid font-300">Your VA monitors all deadlines daily, sends you escalating alerts (30 days, 14 days, 3 days, 1 day), and prepares deadline tracking reports weekly.</p>
              </div>
            </li>

            <li className="flex gap-4">
              <span className="font-serif text-2xl text-brass font-600 min-w-fit">04</span>
              <div>
                <h4 className="font-600 text-charcoal mb-2">File Organization & Archiving</h4>
                <p className="text-base text-text-mid font-300">As cases close, your VA organizes final files, preserves critical documents per your retention policy, and archives closed matters.</p>
              </div>
            </li>
          </ol>
        </section>

        {/* CTA */}
        <section className="my-16 p-10 bg-charcoal text-white rounded-sm">
          <h2 className="font-serif text-3xl mb-4">Never Miss a Deadline Again</h2>
          <p className="text-base text-white/70 leading-relaxed mb-8 font-300">
            Deadlines are the heartbeat of law practice. Miss one and everything fails. Our case management VAs are the backup system you need. They track every deadline, monitor every statute, and ensure nothing falls through the cracks. They're not just administrative support. They're insurance against the most common source of malpractice claims.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-brass text-white text-xs font-600 tracking-wider uppercase hover:bg-brass-light transition-all duration-300"
          >
            Schedule Your Case Audit
          </Link>
        </section>

        <section className="text-center pt-12 border-t border-text-light/20">
          <p className="text-base text-text-mid font-300 mb-6">
            Ready to take deadline anxiety off your plate?
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-brass text-white text-xs font-600 tracking-wider uppercase hover:bg-brass-light transition-all duration-300"
          >
            Get Started with Case Management
          </Link>
        </section>
      </article>
    </main>
  );
}
