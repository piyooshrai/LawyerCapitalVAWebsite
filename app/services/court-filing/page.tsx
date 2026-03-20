import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Court Filing Virtual Assistant | Lawyer Capital VA',
  description: 'E-filing support, local court rule compliance, hearing scheduling, and proof of service coordination.',
  keywords: 'court filing virtual assistant, e-filing services, legal filing services',
};

export default function CourtFilingPage() {
  return (
    <main className="pt-32">
      <article className="max-w-4xl mx-auto px-16 py-20">
        <h1 className="font-serif text-6xl text-charcoal mb-4 leading-tight">
          Court Filing & E-Filing Services
        </h1>
        <p className="text-lg text-text-mid font-300 mb-12 border-l-4 border-brass pl-6">
          Every court has different rules. Every jurisdiction has different procedures. Every filing deadline is firm. Our VAs handle document compliance checks, e-filing submission, proof of service coordination, and hearing logistics so your filings are perfect, timely, and compliant.
        </p>

        {/* THE PROBLEM */}
        <section className="mb-16 py-12 bg-charcoal/3 px-8 rounded-sm border-l-4 border-brass">
          <h2 className="font-serif text-3xl text-charcoal mb-6">Why Court Filings Consume Attorney Hours</h2>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            A motion is ready to file. But first, you have to check the local rules. Is the font Courier New or Times New Roman? What's the required margin? How many pages per section? Does the court require e-filing or will paper suffice? Do you need a certificate of service attached, or filed separately?
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            Then you need to serve the other side. Are they e-service capable? Do you need to serve opposing counsel, or the other side's client? What's the service deadline — same day filing, or by 5pm the next business day? Do you need proof of service filed with the motion, or separately? Does the proof need to be notarized, or just signed?
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            Then you need to schedule hearings. Call the clerk. Check availability. Confirm via email. Send notice to opposing counsel. File a notice of hearing.
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300">
            A 30-minute legal task has become a 3-hour administrative project because court filing involves a hundred small procedural details. A dedicated filing VA handles every detail so you just write the motion and they make sure it gets to the courthouse correctly.
          </p>
        </section>

        {/* WHAT WE HANDLE */}
        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-6 mt-12">What Our Court Filing VA Handles</h2>

          <h3 className="font-serif text-xl text-charcoal mb-4 mt-8">Local Court Rule Compliance Verification</h3>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            Before any filing goes to court, your VA reviews it against the applicable local rules. Federal court? They check the federal rules, the local court rules for your district, and any judge-specific rules. State court? They check the state rules of civil procedure, any local court rules, and any judge-specific rules. County court? They check everything above plus county-specific requirements.
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            They verify: font size and type, margins, spacing, page numbering, caption format, signature block, certificate of service format, exhibit format, table of contents requirements, page limits, header/footer requirements. They create a compliance checklist for every document. They catch formatting errors before they become filing rejections.
          </p>

          <h3 className="font-serif text-xl text-charcoal mb-4 mt-8">E-Filing Platform Management</h3>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            Every court uses different e-filing systems: CM/ECF for federal court, specific systems for state courts (which vary by state), county systems, and court-specific portals. Your VA is trained on all of them. They know how to upload documents, assign correct categories, set up multi-case batches, manage service lists, and track confirmation of filing. They're familiar with system quirks (some courts reject PDFs that are too heavily compressed, others have text-recognition requirements, others need specific metadata).
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            They e-file your documents, receive the confirmation, and send you a summary showing exactly what was filed and the confirmation number. No guessing about whether something actually went through.
          </p>

          <h3 className="font-serif text-xl text-charcoal mb-4 mt-8">Service Coordination & Proof of Service</h3>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            Filing is only half the job. The other side must be served. Your VA maintains a service list for every case (opposing counsel, adverse parties, interested parties). They know your service obligations — email service, certified mail service, personal service, or some combination. They coordinate service with your e-filing (some courts require e-service, others allow traditional service). They prepare proof of service documents, ensure they match the filing, and file them appropriately.
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            If service is contested (opposing counsel claims they didn't receive it), your VA has documented proof of exactly when, how, and to whom service was made.
          </p>

          <h3 className="font-serif text-xl text-charcoal mb-4 mt-8">Hearing Scheduling & Coordination</h3>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            A motion needs a hearing. Your VA calls the clerk's office, finds available dates, contacts opposing counsel to coordinate, confirms the date with the clerk, and files a notice of hearing. They know the difference between a hearing that requires all parties to be present and a hearing where the judge will rule on the papers. They know which judges allow oral argument and which don't. They're familiar with the courtroom procedures.
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            They manage all hearing logistics: scheduling, notice filing, confirmation, reminder emails to clients and co-counsel. You get a hearing preparation checklist one week before the hearing.
          </p>

          <h3 className="font-serif text-xl text-charcoal mb-4 mt-8">Notice Preparation & Filing</h3>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            A hearing is scheduled. Your VA prepares the notice of hearing (formatted correctly, with proper caption and case number), e-files it with the court, and serves opposing counsel. A continuance is granted. Your VA amends the notice and re-files it. A default judgment is entered. Your VA files the appropriate notice or motion. Every court order triggers a response, and your VA makes sure that response is filed correctly and timely.
          </p>

          <h3 className="font-serif text-xl text-charcoal mb-4 mt-8">Multi-Jurisdiction Filing Coordination</h3>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            You have a case that involves multiple courts (federal and state, or multiple states). Each court has different rules, different e-filing systems, different service requirements. Your VA tracks all of it. They maintain a filing checklist specific to each jurisdiction. They ensure documents are customized for each court's requirements. They track filing deadlines across jurisdictions.
          </p>

          <h3 className="font-serif text-xl text-charcoal mb-4 mt-8">Filing Status & Confirmation Tracking</h3>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            A document is filed. Your VA receives the court's confirmation, logs it in your case management system, and creates a filing summary for the case file. They track what was filed, when, and whether it was accepted or rejected. If rejected, they notify you immediately with the reason and prepare a corrected filing. You always know the status of your filings.
          </p>

          <h3 className="font-serif text-xl text-charcoal mb-4 mt-8">Judge Assignment & Case Tracking</h3>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            A case is filed. Your VA notes the assigned judge, pulls that judge's specific rules, and updates your case file. If the judge changes, they flag it and pull the new judge's rules. They maintain a judge-specific rules library so you know exactly what each judge expects.
          </p>
        </section>

        {/* TOOLS */}
        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-6 mt-12">Court Systems & Filing Platforms We Master</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {[
              { name: 'CM/ECF (Federal)', desc: 'Federal court e-filing system, case access, service lists, PACER queries' },
              { name: 'State Court E-Filing Systems', desc: 'State-specific e-filing platforms, local variations, service coordination' },
              { name: 'County Court Systems', desc: 'County-level filing portals, document submission, status tracking' },
              { name: 'Legal Server / Case Management', desc: 'Clio, MyCase, PracticePanther filing workflows, status tracking' },
              { name: 'Email Service Verification', desc: 'Email proof of service, recipient confirmation, delivery tracking' },
              { name: 'Judge Information Systems', desc: 'Judge-specific rules databases, availability calendars, assignment systems' },
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
          <h3 className="font-serif text-2xl text-charcoal mb-4">Real Firm, Real Efficiency</h3>
          <p className="text-base text-charcoal leading-relaxed mb-4">
            Civil litigation firm, 4 attorneys, handling 60+ active cases. Before filing VA: Attorney time on filing administration averaged 15-20 hours per week. That included checking local rules, e-filing, service coordination, and hearing scheduling. Occasional filing rejections (2-3 per month) due to formatting non-compliance, requiring corrections and re-filing.
          </p>
          <p className="text-base text-charcoal leading-relaxed mb-4">
            After filing VA: All filing administration is handled by the VA. Attorney time on filing dropped to 1-2 hours per week (just reviewing compliance before filing). Filing rejection rate: zero for 12 months straight. Hearing scheduling time: down 80%. All judges' rules are documented and followed. Estimated attorney time recovered: 14-18 hours per week across the firm, or roughly $4,200-5,400 per week in recovered billing capacity.
          </p>
          <p className="text-base text-charcoal font-600">
            — Civil Litigation Firm, Multi-State Practice
          </p>
        </section>

        {/* ADVANTAGES */}
        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-6 mt-12">What Changes With Dedicated Court Filing Support</h2>

          <div className="space-y-6">
            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-lg text-charcoal mb-2">Compliance: Manual + Error-Prone → Verified Checklist</h3>
              <p className="text-base text-text-mid font-300">
                Every filing is checked against local rules before it leaves your office. No formatting rejections. No compliance surprises.
              </p>
            </div>

            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-lg text-charcoal mb-2">Filing Time: 3 hours → 30 minutes</h3>
              <p className="text-base text-text-mid font-300">
                You write the legal content. Your VA handles the filing mechanics. You save 2.5 hours per filing.
              </p>
            </div>

            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-lg text-charcoal mb-2">Service Coordination: Chaotic → Systematic</h3>
              <p className="text-base text-text-mid font-300">
                Service is tracked, documented, and verified for every filing. No disputes about whether someone was served.
              </p>
            </div>

            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-lg text-charcoal mb-2">Hearing Scheduling: Attorney work → VA managed</h3>
              <p className="text-base text-text-mid font-300">
                Your VA schedules, coordinates, and confirms hearings. You don't spend 45 minutes on hold with the clerk's office.
              </p>
            </div>

            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-lg text-charcoal mb-2">Recovered Billable Hours: 14-18 hours/week per firm</h3>
              <p className="text-base text-text-mid font-300">
                You focus on legal strategy and client communication. The VA handles the administrative filing work.
              </p>
            </div>
          </div>
        </section>

        {/* ECONOMICS */}
        <section className="mb-16 bg-charcoal/3 px-8 py-12 rounded-sm">
          <h2 className="font-serif text-3xl text-charcoal mb-8">The Time Recovered</h2>

          <div className="space-y-4">
            <div className="flex gap-6 items-start">
              <div className="font-serif text-4xl text-brass min-w-fit">15-20 hrs/week</div>
              <div>
                <h4 className="font-600 text-charcoal mb-1">Average attorney time on filing administration</h4>
                <p className="text-sm text-text-mid">Local rule checking, e-filing, service coordination, hearing scheduling</p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="font-serif text-4xl text-brass min-w-fit">$4,500–6,000</div>
              <div>
                <h4 className="font-600 text-charcoal mb-1">Weekly cost (in lost billable hours at $300/hr)</h4>
                <p className="text-sm text-text-mid">15-20 hours × $300 = $4,500-6,000/week of capacity lost</p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="font-serif text-4xl text-brass min-w-fit">$3,000–3,500</div>
              <div>
                <h4 className="font-600 text-charcoal mb-1">Monthly cost (dedicated filing VA)</h4>
                <p className="text-sm text-text-mid">Handles all court filing for the firm</p>
              </div>
            </div>

            <div className="border-t border-text-light/20 pt-6 mt-6">
              <h4 className="font-serif text-xl text-charcoal mb-3">The Calculation</h4>
              <p className="text-base text-text-mid font-300 mb-2">
                If you're losing 15-20 hours per week to filing administration at a $300/hour rate, that's $4,500-6,000 per week or $234,000-312,000 per year in lost capacity. A dedicated filing VA costs $36,000-42,000 per year. You break even in week 8 and then add $190,000+ in recovered billable capacity annually.
              </p>
              <p className="text-base text-text-mid font-300">
                Not to mention the zero filing rejections, the perfect compliance record, and the eliminated stress of managing court rules for multiple jurisdictions.
              </p>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-6 mt-12">How Court Filing Works With Your VA</h2>

          <ol className="space-y-8">
            <li className="flex gap-4">
              <span className="font-serif text-2xl text-brass font-600 min-w-fit">01</span>
              <div>
                <h4 className="font-600 text-charcoal mb-2">Court & Judge Rules Library Setup</h4>
                <p className="text-base text-text-mid font-300">We document all local court rules for your practice jurisdictions, pull judge-specific rules for the judges in your area, and create a filing checklist for each court/judge combination.</p>
              </div>
            </li>

            <li className="flex gap-4">
              <span className="font-serif text-2xl text-brass font-600 min-w-fit">02</span>
              <div>
                <h4 className="font-600 text-charcoal mb-2">E-Filing System Training</h4>
                <p className="text-base text-text-mid font-300">Your VA is trained on every e-filing system you use (CM/ECF, state systems, county systems) and gets test access to verify procedures.</p>
              </div>
            </li>

            <li className="flex gap-4">
              <span className="font-serif text-2xl text-brass font-600 min-w-fit">03</span>
              <div>
                <h4 className="font-600 text-charcoal mb-2">Filing Request & Compliance Review</h4>
                <p className="text-base text-text-mid font-300">You send your document to the VA with case details. They review it against the applicable court rules, prepare corrections if needed, and get your approval before filing.</p>
              </div>
            </li>

            <li className="flex gap-4">
              <span className="font-serif text-2xl text-brass font-600 min-w-fit">04</span>
              <div>
                <h4 className="font-600 text-charcoal mb-2">E-Filing & Service</h4>
                <p className="text-base text-text-mid font-300">Your VA e-files the document, receives confirmation, coordinates service, and sends you a filing summary with confirmation number and service details.</p>
              </div>
            </li>
          </ol>
        </section>

        {/* CTA */}
        <section className="my-16 p-10 bg-charcoal text-white rounded-sm">
          <h2 className="font-serif text-3xl mb-4">Focus on Legal Strategy, Not Filing Rules</h2>
          <p className="text-base text-white/70 leading-relaxed mb-8 font-300">
            Every jurisdiction has different rules. Every court has different procedures. You shouldn't have to memorize them. Our filing VAs know the rules so you don't have to. We handle the compliance checking, e-filing, service coordination, and hearing logistics. Your filings are perfect. Your compliance is certain. Your time is recovered.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-brass text-white text-xs font-600 tracking-wider uppercase hover:bg-brass-light transition-all duration-300"
          >
            Schedule Filing Support Consultation
          </Link>
        </section>

        <section className="text-center pt-12 border-t border-text-light/20">
          <p className="text-base text-text-mid font-300 mb-6">
            Ready to reclaim 15-20 billable hours every week?
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-brass text-white text-xs font-600 tracking-wider uppercase hover:bg-brass-light transition-all duration-300"
          >
            Get Started with Court Filing
          </Link>
        </section>
      </article>
    </main>
  );
}
