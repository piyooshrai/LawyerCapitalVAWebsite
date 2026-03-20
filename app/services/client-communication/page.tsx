import { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'Client Communication Virtual Assistant | Lawyer Capital VA',
  description: 'Status updates, appointment scheduling, court date reminders, and professional client communications managed by NDA-protected VAs.',
  keywords: 'legal client communication, law firm client management virtual assistant',
};

export default function ClientCommunicationPage() {
  return (
    <main className="bg-ivory min-h-screen">
      <PageHeader
        label="Core Services"
        title="Clients Want to Hear From You. Let Your VA Do It."
        subtitle="Status updates, appointment reminders, document requests. Recover 10-19 hours per week in billable time while clients stay informed."
      />
      <article className="max-w-4xl mx-auto px-16 py-20">
        <h1 className="font-serif text-6xl text-charcoal mb-4 leading-tight">
          Client Communication & Relationship Management
        </h1>
        <p className="text-lg text-text-mid font-300 mb-12 border-l-4 border-brass pl-6">
          Clients want to hear from you. But they don't need you every time. They need timely updates, confirmation of next steps, and professional communication. Our VAs handle status updates, appointment scheduling, reminder emails, and routine inquiries — so you focus on legal work and your clients feel heard.
        </p>

        {/* THE PROBLEM */}
        <section className="mb-16 py-12 bg-charcoal/3 px-8 rounded-sm border-l-4 border-brass">
          <h2 className="font-serif text-3xl text-charcoal mb-6">The Communication Paradox</h2>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            Clients want communication. They want to know what's happening in their case. They want updates on deadlines and next steps. They want confirmation that their files are being managed.
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            But every client communication takes time. An update email takes 15 minutes to write. An appointment confirmation takes 10 minutes to coordinate. A reminder call takes 5 minutes. Multiply that by 30 active clients, and you're spending 15-20 hours per week on routine client communication.
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            Meanwhile, clients get impatient if they don't hear from you for a week. Silence reads as indifference, even if you're actively working on their case. The best firms solve this by having someone whose job is to keep clients informed without burdening the attorney with administrative communication.
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300">
            A dedicated communication VA means your clients always hear from you. And you don't spend your high-value time on routine updates.
          </p>
        </section>

        {/* WHAT WE HANDLE */}
        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-6 mt-12">What Our Client Communication VA Handles</h2>

          <h3 className="font-serif text-xl text-charcoal mb-4 mt-8">Regular Status Updates</h3>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            Based on your guidance, your VA sends routine status updates to clients. In a personal injury case: "We received the medical records. We're reviewing them and will provide a settlement strategy by Friday." In a family law case: "Discovery is on track. Your financial documents are complete, and we're waiting on opposing counsel's documentation." In a corporate matter: "The contract has been marked up and sent to the other side. We expect comments by next week."
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            These aren't templated form letters. They're personalized updates that reflect the actual status of the case. Your VA knows what's happening because they have access to the case file. They communicate it professionally because that's their job.
          </p>

          <h3 className="font-serif text-xl text-charcoal mb-4 mt-8">Appointment Scheduling & Confirmation</h3>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            A client wants to meet with you. Your VA coordinates the meeting. They check your calendar, propose times, get the client's agreement, book the appointment, and send a confirmation email with the date, time, location, and what to bring. They send a reminder 24 hours before the appointment.
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            For depositions, mediations, and court appearances, your VA handles the scheduling with opposing counsel, confirms attendance with your client, and prepares a briefing document (deposition outlines, mediation settlement parameters, hearing issues).
          </p>

          <h3 className="font-serif text-xl text-charcoal mb-4 mt-8">Court Date & Deadline Reminders</h3>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            Your client has a court date next Tuesday. Your VA sends a reminder email: the date, time, location, what to expect, what to bring, and where to meet you. They confirm the client will be there. They remind them to dress professionally and arrive 15 minutes early.
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            A discovery deadline is approaching. Your VA emails the client: "We need your financial documents by Friday to meet the discovery deadline. Here's what we need and how to submit them." They follow up if documents don't arrive.
          </p>

          <h3 className="font-serif text-xl text-charcoal mb-4 mt-8">Routine Information Requests</h3>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            A client emails asking about the status of their case, wants to provide additional information, or has a routine question. Your VA reads the email, pulls the case file, determines if it's something that needs your involvement or something they can answer. Routine questions ("What's our court date?", "How do I submit documents?", "Can I call you next week?") are answered by the VA with professional, accurate information. Questions that require your judgment are flagged for your attention.
          </p>

          <h3 className="font-serif text-xl text-charcoal mb-4 mt-8">Document Collection Reminders & Coordination</h3>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            A client is slow to provide necessary documents. Your VA sends a friendly but firm reminder: "We're preparing for your hearing and need your expense documentation by Wednesday. Here's how to submit it. Let me know if you have questions." They track what arrives, what's still needed, and follow up until the file is complete.
          </p>

          <h3 className="font-serif text-xl text-charcoal mb-4 mt-8">Fee & Billing Communication</h3>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            An invoice is ready to go out. Your VA prepares a cover letter explaining what the charges are for, provides a summary of work completed, reminds the client of the retainer balance, and requests payment. A client questions a charge. Your VA pulls the relevant file details and sends a professional explanation of what was billed and why.
          </p>

          <h3 className="font-serif text-xl text-charcoal mb-4 mt-8">Case Outcome Communication</h3>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            The case settles. Your VA sends a settlement summary to the client. A motion is granted. Your VA sends a ruling summary and explains what happens next. A case is dismissed. Your VA sends a termination letter with instructions on final documents and file retention.
          </p>

          <h3 className="font-serif text-xl text-charcoal mb-4 mt-8">Portal & Digital Communication Management</h3>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            You use a client portal (Clio, MyCase, etc.). Your VA monitors the portal for client messages, responds to routine inquiries (password resets, document access, "how do I do X"), uploads relevant documents to the portal, and tracks communication threads. Clients feel heard because someone is always responding to them.
          </p>

          <h3 className="font-serif text-xl text-charcoal mb-4 mt-8">Client Feedback & Satisfaction Tracking</h3>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            Your VA gathers feedback from clients on their satisfaction with your services. They conduct brief satisfaction surveys, track feedback trends, and flag concerns that might lead to retention issues. This intelligence allows you to address problems before clients leave.
          </p>
        </section>

        {/* TOOLS */}
        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-6 mt-12">Communication Platforms & Tools We Master</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {[
              { name: 'Client Portals', desc: 'Clio, MyCase, PracticePanther, Lawmatics portal management and communication' },
              { name: 'Email Management', desc: 'Gmail, Outlook, practice-specific email, template creation, tracking' },
              { name: 'Scheduling Tools', desc: 'Calendly, Acuity Scheduling, Outlook calendar coordination' },
              { name: 'SMS/Texting Platforms', desc: 'Text message reminders, appointment confirmations, urgent notifications' },
              { name: 'Video Conferencing', desc: 'Zoom, Microsoft Teams, secure client meetings, recording management' },
              { name: 'Document Portal Sharing', desc: 'Dropbox, OneDrive, secure encrypted sharing, access tracking' },
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
          <h3 className="font-serif text-2xl text-charcoal mb-4">Real Firm, Real Client Satisfaction</h3>
          <p className="text-base text-charcoal leading-relaxed mb-4">
            Personal injury firm, solo attorney, handling 25-30 active cases. Before communication VA: Attorney was spending 3-4 hours per day on client communication. Clients complained about slow response times (48+ hours before hearing back). Many cases had communication gaps where clients felt abandoned.
          </p>
          <p className="text-base text-charcoal leading-relaxed mb-4">
            After communication VA: Every client call or email gets a response within 2 hours (usually within 30 minutes). Regular status updates are sent to all clients bi-weekly. Appointment scheduling is efficient and professional. Clients report feeling much more informed and cared for. Google reviews improved from 4.2 stars to 4.8 stars within 6 months. Client retention increased 35% year-over-year.
          </p>
          <p className="text-base text-charcoal font-600">
            — Personal Injury Firm, California
          </p>
        </section>

        {/* ADVANTAGES */}
        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-6 mt-12">What Changes With Dedicated Client Communication</h2>

          <div className="space-y-6">
            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-lg text-charcoal mb-2">Client Response Time: 24-48 hours → 2 hours</h3>
              <p className="text-base text-text-mid font-300">
                Your VA is monitoring client communications all day. Clients get responses quickly because someone is always available.
              </p>
            </div>

            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-lg text-charcoal mb-2">Attorney Communication Time: 15-20 hours/week → 2-3 hours/week</h3>
              <p className="text-base text-text-mid font-300">
                Your VA handles routine communication. You only engage for legal issues and client strategy conversations.
              </p>
            </div>

            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-lg text-charcoal mb-2">Client Satisfaction: Variable → Consistently High</h3>
              <p className="text-base text-text-mid font-300">
                Regular updates, timely responses, and professional communication create a client experience that improves retention and referrals.
              </p>
            </div>

            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-lg text-charcoal mb-2">Referral Rate: Organic → Accelerated</h3>
              <p className="text-base text-text-mid font-300">
                Happy clients refer. Better communication means more referrals and easier new client acquisition.
              </p>
            </div>

            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-lg text-charcoal mb-2">Recovered Billable Hours: 12-15 hours/week</h3>
              <p className="text-base text-text-mid font-300">
                You focus on billable legal work, not administrative communication. That's $3,600-4,500/week of recovered capacity.
              </p>
            </div>
          </div>
        </section>

        {/* ECONOMICS */}
        <section className="mb-16 bg-charcoal/3 px-8 py-12 rounded-sm">
          <h2 className="font-serif text-3xl text-charcoal mb-8">The Client Satisfaction Premium</h2>

          <div className="space-y-4">
            <div className="flex gap-6 items-start">
              <div className="font-serif text-4xl text-brass min-w-fit">12-15 hrs/week</div>
              <div>
                <h4 className="font-600 text-charcoal mb-1">Attorney time on client communication</h4>
                <p className="text-sm text-text-mid">Status updates, appointment scheduling, reminders, routine questions</p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="font-serif text-4xl text-brass min-w-fit">$3,600–4,500</div>
              <div>
                <h4 className="font-600 text-charcoal mb-1">Weekly cost (in lost billable hours at $300/hr)</h4>
                <p className="text-sm text-text-mid">12-15 hours × $300 = $3,600-4,500 weekly capacity lost</p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="font-serif text-4xl text-brass min-w-fit">35% increase</div>
              <div>
                <h4 className="font-600 text-charcoal mb-1">Typical client retention improvement</h4>
                <p className="text-sm text-text-mid">From better communication and faster response times</p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="font-serif text-4xl text-brass min-w-fit">$2,500–3,000</div>
              <div>
                <h4 className="font-600 text-charcoal mb-1">Monthly cost (dedicated communication VA)</h4>
                <p className="text-sm text-text-mid">Handles all client communication for the firm</p>
              </div>
            </div>

            <div className="border-t border-text-light/20 pt-6 mt-6">
              <h4 className="font-serif text-xl text-charcoal mb-3">The Equation</h4>
              <p className="text-base text-text-mid font-300 mb-2">
                You're losing 12-15 hours per week to client communication at a $300/hour rate: $3,600-4,500 per week or $187,200-234,000 per year in lost capacity. A dedicated communication VA costs $30,000-36,000 per year. You break even in month 2, then add $150,000+ in recovered capacity annually.
              </p>
              <p className="text-base text-text-mid font-300">
                Add the 35% client retention improvement, and you're not just recovering time — you're multiplying revenue by keeping more clients longer and earning more referrals.
              </p>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-6 mt-12">How Client Communication Works With Your VA</h2>

          <ol className="space-y-8">
            <li className="flex gap-4">
              <span className="font-serif text-2xl text-brass font-600 min-w-fit">01</span>
              <div>
                <h4 className="font-600 text-charcoal mb-2">Communication Protocol Development</h4>
                <p className="text-base text-text-mid font-300">We establish communication guidelines: how often clients should hear from you, what channels (email, phone, portal, text), what types of updates are routine vs. require your involvement.</p>
              </div>
            </li>

            <li className="flex gap-4">
              <span className="font-serif text-2xl text-brass font-600 min-w-fit">02</span>
              <div>
                <h4 className="font-600 text-charcoal mb-2">VA Training & Portal Setup</h4>
                <p className="text-base text-text-mid font-300">Your VA is trained on your practice style, your clients' needs, and your communication platforms. They get access to your email, portal, and scheduling systems.</p>
              </div>
            </li>

            <li className="flex gap-4">
              <span className="font-serif text-2xl text-brass font-600 min-w-fit">03</span>
              <div>
                <h4 className="font-600 text-charcoal mb-2">Ongoing Communication Management</h4>
                <p className="text-base text-text-mid font-300">Your VA monitors all client communications, responds to routine inquiries, sends status updates per your protocol, and escalates legal issues to you for decision-making.</p>
              </div>
            </li>

            <li className="flex gap-4">
              <span className="font-serif text-2xl text-brass font-600 min-w-fit">04</span>
              <div>
                <h4 className="font-600 text-charcoal mb-2">Performance Monitoring & Feedback</h4>
                <p className="text-base text-text-mid font-300">We track client response times, satisfaction feedback, and communication metrics. We adjust protocols based on what's working and what needs improvement.</p>
              </div>
            </li>
          </ol>
        </section>

        {/* CTA */}
        <section className="my-16 p-10 bg-charcoal text-white rounded-sm">
          <h2 className="font-serif text-3xl mb-4">Your Clients Deserve a Response Within Hours, Not Days</h2>
          <p className="text-base text-white/70 leading-relaxed mb-8 font-300">
            Happy clients stay. Happy clients refer. Good communication isn't a luxury — it's the foundation of a growing practice. Let our VA handle the routine communication so you can focus on legal strategy. Your clients will feel more cared for. You'll have more time for billable work. And your retention will improve.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-brass text-white text-xs font-600 tracking-wider uppercase hover:bg-brass-light transition-all duration-300"
          >
            Schedule Communication Consultation
          </Link>
        </section>

        <section className="text-center pt-12 border-t border-text-light/20">
          <p className="text-base text-text-mid font-300 mb-6">
            Ready to improve client satisfaction and retention?
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-brass text-white text-xs font-600 tracking-wider uppercase hover:bg-brass-light transition-all duration-300"
          >
            Get Started with Client Communication
          </Link>
        </section>
      </article>
    </main>
  );
}
