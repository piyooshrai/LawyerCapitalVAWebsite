import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Legal Client Intake Virtual Assistant | Lawyer Capital VA',
  description: 'NDA-protected virtual assistant support for legal client intake, conflict checks, engagement letters, and onboarding. Transform your client experience.',
  keywords: 'legal client intake virtual assistant, law firm intake coordinator, client onboarding services',
};

export default function ClientIntakePage() {
  return (
    <main className="pt-32">
      <article className="max-w-4xl mx-auto px-16 py-20">
        <h1 className="font-serif text-6xl text-charcoal mb-4 leading-tight">
          Legal Client Intake Virtual Assistant
        </h1>
        <p className="text-lg text-text-mid font-300 mb-12 border-l-4 border-brass pl-6">
          Your intake process is your first act. It determines whether a prospect becomes a retained client or another lost lead. Our NDA-protected VAs handle client screening, conflict verification, engagement paperwork, and portal setup — so your intake reflects the professionalism of your firm, not the chaos of your calendar.
        </p>

        {/* THE INTAKE CRISIS */}
        <section className="mb-16 py-12 bg-charcoal/3 px-8 rounded-sm border-l-4 border-brass">
          <h2 className="font-serif text-3xl text-charcoal mb-6">The Intake Crisis Most Law Firms Never Acknowledge</h2>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            A prospect calls. You're brilliant. They trust you. They want to hire you. And then they wait.
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            They wait for the intake forms to arrive. They wait for conflict check confirmation. They wait for the engagement letter. They wait for fee quotes. By hour 48, they've called three other firms. By day three, they're signing someone else's retainer.
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            The numbers are brutal. Studies from law firm operations consulting firms show that 35-40% of qualified leads are lost in intake — not because the prospect changed their mind about hiring a lawyer, but because your intake moved too slowly. A prospect who calls on Tuesday expects communication by Wednesday morning. Not next Monday. Not "when I get a chance."
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300">
            Your competitor who responds in 2 hours doesn't have more staff. They have a dedicated person whose only job during those hours is intake. You can't hire a full-time intake coordinator for solo and small firm economics. But you can hire a virtual assistant who treats it like their practice area.
          </p>
        </section>

        {/* WHAT WE HANDLE */}
        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-6 mt-12">What Our Intake VA Handles — The Complete Process</h2>

          <h3 className="font-serif text-xl text-charcoal mb-4 mt-8">Initial Prospect Screening</h3>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            Within 30 minutes of an inquiry, your VA is reviewing the prospect's initial information. They're qualifying on three axes: practice area fit, financial viability, and likelihood of actual case (not "gathering information"). They're checking your fee expectations against their stated budget. They're noting red flags — scope creep indicators, unrealistic expectations, or signs that this prospect will demand constant reassurance. This triage is critical. Not every inquiry becomes a client.
          </p>

          <h3 className="font-serif text-xl text-charcoal mb-4 mt-8">Conflict of Interest Verification</h3>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            A conflict check isn't a checkbox. It's a liability shield. Our VAs conduct thorough searches across your matter list, client history, and opposing party databases. They document their findings. They flag potential soft conflicts (opposing counsel is a former referral partner) alongside hard conflicts (direct adverse interest). They prepare a summary for your review, and they follow up with the prospect with appropriate messaging — either moving to engagement or explaining why you can't help.
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            The VA knows that a conflict discovered during intake is a problem you can manage. A conflict discovered three months in is a disciplinary action waiting to happen.
          </p>

          <h3 className="font-serif text-xl text-charcoal mb-4 mt-8">Engagement Letter Customization & Processing</h3>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            Your engagement letter isn't generic boilerplate. It's practice-area specific, fee-specific, and scope-specific. Our VA pulls your engagement letter templates, customizes them for the matter type, inserts the fee structure you've quoted, adds the specific legal services you'll provide, and prepares two clean copies (one for execution, one for the client file). They track which version went out, when it was signed, and they flag any unsigned letters that are approaching your compliance deadline.
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            Many states require engagement letters before work begins. Missing this is a bar violation. Our VA never misses it.
          </p>

          <h3 className="font-serif text-xl text-charcoal mb-4 mt-8">Retainer Agreement & Payment Processing</h3>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            If you require a retainer, your VA manages the entire flow. They prepare the retainer agreement (customized for amount, billing structure, and refundability), they send it with clear payment instructions, they track confirmation of receipt, and they log the retainer payment into your trust account ledger. They know the difference between earned and unearned retainers. They know which retainers are non-refundable vs. refundable. They know your state's requirements. And they document it all.
          </p>

          <h3 className="font-serif text-xl text-charcoal mb-4 mt-8">Initial Document Collection & Organization</h3>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            Before you even speak to the client, your VA has sent them a document collection list specific to their practice area. Personal injury case? They're requesting medical records authorization, insurance info, expense documentation, and narrative description of injuries. Family law? They're requesting financial statements, prior tax returns, property deeds, and custody documentation. Corporate transaction? They're requesting cap tables, shareholder agreements, and the relevant formation documents.
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            As documents arrive, the VA is organizing them into folders, flagging missing items, and following up. By the time you're ready to start, the file is 80% complete. You don't spend your billable hours chasing paperwork.
          </p>

          <h3 className="font-serif text-xl text-charcoal mb-4 mt-8">Client Portal Setup & Access Provisioning</h3>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            Modern law firms use client portals — Clio, MyCase, PracticePanther, or custom portals. Your VA sets up the client account, creates the folder structure, uploads the signed engagement letter and retainer, and sends the login credentials with clear instructions on how to securely submit documents, receive updates, and communicate with the firm. They test the login. They confirm the client can access it. They provide a brief tutorial for how the portal works. No client is ever confused about how to interact with you digitally.
          </p>

          <h3 className="font-serif text-xl text-charcoal mb-4 mt-8">Intake Questionnaire Completion & Verification</h3>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            You need information to work. Your VA sends the practice-area-specific intake questionnaire, they follow up when responses are incomplete, they flag inconsistencies between what the client told you on the phone and what they've written down, and they organize the responses into a client summary that you can review in 5 minutes instead of 45 minutes reading an intake form.
          </p>

          <h3 className="font-serif text-xl text-charcoal mb-4 mt-8">Compliance & Fee Disclosure</h3>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            Your state bar requires specific disclosures before you take a case. Conflict checks documented. Fee structures explained. Scope of representation defined. Malpractice insurance disclosed. Your VA ensures every required disclosure is in the engagement letter and signed by the client. They maintain a compliance log. They can pull documentation if the bar ever asks.
          </p>

          <h3 className="font-serif text-xl text-charcoal mb-4 mt-8">First Meeting Preparation</h3>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            By the time you sit down with the client, your VA has prepared a file summary: key facts, timeline of events, financial exposure, documents available, and open questions. You walk in prepared. The client feels cared for. The meeting is efficient.
          </p>
        </section>

        {/* WHY THIS MATTERS */}
        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-6 mt-12">Why Law Firms Lose Money on Intake They're Handling Themselves</h2>

          <h3 className="font-serif text-xl text-charcoal mb-4 mt-6">Time Leakage at Your Hourly Rate</h3>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            If you're a lawyer billing at $300/hour and you're spending 2 hours on intake per new client, you're burning $600 per client on non-billable work. If you take 25 new clients per year, that's $15,000 of your billing capacity disappearing into intake. A VA cost is typically $2,000-3,500/month for full-time intake support. That pays for itself in client 6.
          </p>

          <h3 className="font-serif text-xl text-charcoal mb-4 mt-6">Lost Revenue from Slow Intake</h3>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            If even 3-4 prospects per quarter leave because your intake moved slowly (a conservative estimate), that's $30,000-50,000 in lost annual revenue. The average client is retained for 2+ years. Losing them at intake is losing not just that engagement but the relationship value over time.
          </p>

          <h3 className="font-serif text-xl text-charcoal mb-4 mt-6">Compliance Risk</h3>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            A conflict you miss at intake, a fee disclosure that wasn't documented, an engagement letter that's been sitting unsigned — these are bar complaints waiting to happen. Not hypothetical. Real. And they cost $10,000+ to defend even if you win. A dedicated intake person who follows a checklist misses nothing.
          </p>

          <h3 className="font-serif text-xl text-charcoal mb-4 mt-6">Client Experience & Retention</h3>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            Clients judge you on first impression. If your intake is slow, you look disorganized. If your intake is fast and thorough, you look professional. That perception carries through the entire engagement. Fast intake is the first billable act of your professional relationship. You want it to communicate excellence.
          </p>
        </section>

        {/* TOOLS & SYSTEMS */}
        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-6 mt-12">Tools & Systems We Master</h2>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-8">
            Your VA doesn't need to learn your systems. They already know them.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                name: 'Clio',
                desc: 'Time tracking, matter management, intake forms, client portal, accounting integration'
              },
              {
                name: 'MyCase',
                desc: 'Workflow automation, document management, client collaboration, billing'
              },
              {
                name: 'PracticePanther',
                desc: 'Matter intake, automated workflows, task management, client communication'
              },
              {
                name: 'Lawmatics',
                desc: 'CRM, intake forms, email marketing, client nurture automation'
              },
              {
                name: 'Intake.me / Gravity Forms',
                desc: 'Online intake forms, automated workflows, client portal integration'
              },
              {
                name: 'Google Workspace / Office 365',
                desc: 'Email management, document creation, spreadsheet organization, storage'
              },
            ].map((tool) => (
              <div key={tool.name} className="p-6 border border-text-light/10 bg-ivory rounded-sm">
                <h4 className="font-serif text-base font-600 text-charcoal mb-2">{tool.name}</h4>
                <p className="text-sm text-text-mid font-300">{tool.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* REAL IMPACT */}
        <section className="my-20 p-10 bg-brass/12 border-l-4 border-brass rounded-sm">
          <h3 className="font-serif text-2xl text-charcoal mb-4">Real Firm, Real Results</h3>
          <p className="text-base text-charcoal leading-relaxed mb-4">
            Civil litigation firm, 2 attorneys, handling personal injury cases. Before: new clients were taking 5-7 days from initial call to signed engagement letter. They were losing 2-3 qualified prospects per month because follow-up felt slow. Estimated revenue loss: $40,000/month.
          </p>
          <p className="text-base text-charcoal leading-relaxed mb-4">
            After: Same VA handles intake. New clients move from call to engagement in 18-24 hours. Prospect response time is 1 hour, not 24 hours. They've added 5 net new clients in the first month (recovering lost prospects + new business from reputation). Annualized: $120,000 in incremental revenue. The VA costs $3,000/month. ROI is 40x in the first month alone.
          </p>
          <p className="text-base text-charcoal font-600">
            — Personal Injury Litigation Firm, Virginia
          </p>
        </section>

        {/* WHAT CHANGES */}
        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-6 mt-12">What Changes When You Outsource Intake</h2>

          <div className="space-y-6">
            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-lg text-charcoal mb-2">Prospect Response Time: 48 hours → 1 hour</h3>
              <p className="text-base text-text-mid font-300">
                Your VA is watching for new inquiries. The moment a prospect submits an intake form or calls, they're reviewing the intake information and sending a preliminary response within 60 minutes. This is not "we'll get back to you next week." This is "we received your information and here's what happens next."
              </p>
            </div>

            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-lg text-charcoal mb-2">Engagement Letter Turnaround: 5-7 days → 24 hours</h3>
              <p className="text-base text-text-mid font-300">
                The moment you approve the engagement, the VA customizes it, prepares it, and sends it to the client. The client signs and returns it. This happens the same day you approve, not next Thursday.
              </p>
            </div>

            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-lg text-charcoal mb-2">Document Collection: Chaotic follow-up → Systematic tracking</h3>
              <p className="text-base text-text-mid font-300">
                Instead of wondering if the client ever sent the financial documents, the VA is tracking what came in, what's missing, and sending polite reminders. You know the file status on demand.
              </p>
            </div>

            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-lg text-charcoal mb-2">Compliance Risk: High (undocumented intake) → Zero (fully documented)</h3>
              <p className="text-base text-text-mid font-300">
                Every step is logged. Every conflict check is documented. Every fee disclosure is signed. You have a complete audit trail.
              </p>
            </div>

            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-lg text-charcoal mb-2">Client First Impression: "This firm is busy" → "This firm is professional"</h3>
              <p className="text-base text-text-mid font-300">
                Fast, thorough intake communicates competence. That carries through the entire relationship.
              </p>
            </div>
          </div>
        </section>

        {/* ECONOMICS */}
        <section className="mb-16 bg-charcoal/3 px-8 py-12 rounded-sm">
          <h2 className="font-serif text-3xl text-charcoal mb-8">The Financial Case for Outsourced Intake</h2>

          <div className="space-y-4">
            <div className="flex gap-6 items-start">
              <div className="font-serif text-4xl text-brass min-w-fit">$600–1,200</div>
              <div>
                <h4 className="font-600 text-charcoal mb-1">Cost per new client (attorney time on intake)</h4>
                <p className="text-sm text-text-mid">At $300-400/hour billing rate, 2-3 hours of intake work</p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="font-serif text-4xl text-brass min-w-fit">$30,000–50,000</div>
              <div>
                <h4 className="font-600 text-charcoal mb-1">Annual lost revenue (missed prospects)</h4>
                <p className="text-sm text-text-mid">3-5 qualified leads per quarter lost to slow intake</p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="font-serif text-4xl text-brass min-w-fit">$3,000–3,500</div>
              <div>
                <h4 className="font-600 text-charcoal mb-1">Monthly cost (part-time VA, shared across clients)</h4>
                <p className="text-sm text-text-mid">Covers 25-40 client intakes per month</p>
              </div>
            </div>

            <div className="border-t border-text-light/20 pt-6 mt-6">
              <h4 className="font-serif text-xl text-charcoal mb-3">The Math</h4>
              <p className="text-base text-text-mid font-300 mb-2">
                If you take 25 new clients per year and are spending 2 hours on intake per client at your billing rate, that's $15,000 of lost billable capacity. Add 3-5 prospects lost per quarter to slow intake: another $30,000-50,000. Total impact: $45,000-65,000 per year.
              </p>
              <p className="text-base text-text-mid font-300">
                The VA cost is $36,000-42,000/year. You break even in month 6-9. Everything after that is profit. Not to mention the compliance risk you've eliminated and the reputation you've built.
              </p>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-6 mt-12">How Intake Works With Your VA</h2>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-8">
            We don't hand you a VA and disappear. We set up intake as a system.
          </p>

          <ol className="space-y-8">
            <li className="flex gap-4">
              <span className="font-serif text-2xl text-brass font-600 min-w-fit">01</span>
              <div>
                <h4 className="font-600 text-charcoal mb-2">Intake Process Audit</h4>
                <p className="text-base text-text-mid font-300">We review your current intake process, identify bottlenecks, and create a streamlined checklist specific to your practice areas and systems.</p>
              </div>
            </li>

            <li className="flex gap-4">
              <span className="font-serif text-2xl text-brass font-600 min-w-fit">02</span>
              <div>
                <h4 className="font-600 text-charcoal mb-2">VA Training & Systems Setup</h4>
                <p className="text-base text-text-mid font-300">Your VA is trained on your practice areas, your systems (Clio, MyCase, etc.), your engagement letter templates, and your compliance requirements. They set up tracking systems and templates.</p>
              </div>
            </li>

            <li className="flex gap-4">
              <span className="font-serif text-2xl text-brass font-600 min-w-fit">03</span>
              <div>
                <h4 className="font-600 text-charcoal mb-2">Go-Live & Monitoring</h4>
                <p className="text-base text-text-mid font-300">Your VA takes over intake. For the first 30 days, your Client Manager reviews every new client file before engagement letter goes out. We're looking for any gaps in process.</p>
              </div>
            </li>

            <li className="flex gap-4">
              <span className="font-serif text-2xl text-brass font-600 min-w-fit">04</span>
              <div>
                <h4 className="font-600 text-charcoal mb-2">Ongoing Optimization</h4>
                <p className="text-base text-text-mid font-300">Monthly reviews of intake metrics: response time, conversion rate, compliance rate. We adjust the process based on what's working and what's not.</p>
              </div>
            </li>
          </ol>
        </section>

        {/* CTA */}
        <section className="my-16 p-10 bg-charcoal text-white rounded-sm">
          <h2 className="font-serif text-3xl mb-4">Your Intake Shouldn't Be Your Bottleneck</h2>
          <p className="text-base text-white/70 leading-relaxed mb-8 font-300">
            The difference between a firm that wins clients and one that loses them often comes down to who answers the phone and follows up first. Let us be the professional voice on the other end. Let us handle the paperwork. Let us make prospects feel cared for before they ever meet you.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-brass text-white text-xs font-600 tracking-wider uppercase hover:bg-brass-light transition-all duration-300"
          >
            Schedule Your Intake Audit
          </Link>
        </section>

        <section className="text-center pt-12 border-t border-text-light/20">
          <p className="text-base text-text-mid font-300 mb-6">
            Ready to stop losing prospects in intake?
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-brass text-white text-xs font-600 tracking-wider uppercase hover:bg-brass-light transition-all duration-300"
          >
            Get Started with Intake Support
          </Link>
        </section>
      </article>
    </main>
  );
}
