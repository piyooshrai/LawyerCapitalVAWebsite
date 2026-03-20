import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Legal Document Preparation | Virtual Assistant Services | Lawyer Capital VA',
  description: 'NDA-protected VA support for legal document drafting, editing, formatting, and preparation. Maintain your firm\'s standards at half the cost.',
  keywords: 'legal document preparation, legal document drafting virtual assistant, law firm document services',
};

export default function DocumentPreparationPage() {
  return (
    <main className="pt-32">
      <article className="max-w-4xl mx-auto px-16 py-20">
        <h1 className="font-serif text-6xl text-charcoal mb-4 leading-tight">
          Legal Document Preparation & Drafting
        </h1>
        <p className="text-lg text-text-mid font-300 mb-12 border-l-4 border-brass pl-6">
          Your documents are your work product. They reflect your firm's quality, attention to detail, and professionalism. Our VAs handle document drafting, customization, formatting, compliance checking, and assembly — so your documents meet your standards and your deadlines.
        </p>

        {/* THE DOCUMENT PROBLEM */}
        <section className="mb-16 py-12 bg-charcoal/3 px-8 rounded-sm border-l-4 border-brass">
          <h2 className="font-serif text-3xl text-charcoal mb-6">Why Document Preparation Eats Your Billing Hours</h2>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            You know what you need to say in a legal document. You know the legal standard. You know what your state requires. But you don't know how long it takes to actually prepare.
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            A corporate engagement letter should take 30 minutes. You spend 2 hours because you're hunting for the last version of your template, finding the language about liability limitation, customizing the fee structure, formatting it to match your letterhead, and then reviewing it three times to ensure you didn't miss anything.
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            A motion to dismiss takes you 4 hours of writing and revision. The VA could prepare the first draft in 3 hours from your outline, freeing you to focus on the legal argument, not the formatting. You bill 4 hours. The client gets a better product. You have more capacity.
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300">
            The economics are simple: document preparation is the highest-leverage work to delegate. It's rule-based. It's process-driven. It doesn't require judgment — but it requires attention to detail. That's exactly what a dedicated VA can do better than you ever will, because it's their entire focus.
          </p>
        </section>

        {/* WHAT WE HANDLE */}
        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-6 mt-12">What Our Document Preparation VA Handles</h2>

          <h3 className="font-serif text-xl text-charcoal mb-4 mt-8">Engagement Letters, Retainers & Client Documents</h3>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            Your engagement letter template exists, but it's not a plug-and-play document. Every case is different. Your VA takes your template, customizes it for the specific matter (inserting client name, case type, fee structure, scope of work, timeline, and applicable legal disclaimers), reviews it for completeness, formats it to match your letterhead, and prepares it for your signature.
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            Same with retainer agreements, conflict letters, representation confirmations, and any client-facing document. Your VA pulls the template, customizes it, ensures it meets your state's requirements, and sends it to you for a 5-minute review before it goes out.
          </p>

          <h3 className="font-serif text-xl text-charcoal mb-4 mt-8">Pleadings & Court Filings</h3>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            You provide the outline. The arguments, the legal authorities, the specific claims or defenses — that's your work. Your VA creates the structure. They pull the correct pleading format (complaint, answer, motion to dismiss, motion for summary judgment) from your template library. They format it to court rules (margin size, font, spacing, page numbering). They insert case caption, docket number, and your firm's signature block. They create an index of contents if required. They verify compliance with local rules.
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            You give it a final review. The product is polished and ready to file. The VA has handled 90% of the mechanical work, freeing you to focus on legal argument.
          </p>

          <h3 className="font-serif text-xl text-charcoal mb-4 mt-8">Contracts, Agreements & Business Documents</h3>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            Corporate client needs an NDA. You know what clauses you need. Your VA pulls your NDA template, customizes it for the specific party, inserts the necessary legal language for your jurisdiction, formats it, and presents it for your review. Same with employment agreements, service contracts, purchase agreements, and confidentiality documents.
          </p>

          <h3 className="font-serif text-xl text-charcoal mb-4 mt-8">Discovery Documents & Correspondence</h3>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            Interrogatory responses, requests for production, document lists, discovery objections — your VA understands what information you need and what format discovery rules require. You provide the substance. They handle the formatting, organization, and compliance. Correspondence with opposing counsel, clients, and courts gets drafted based on your templates and instructions, formatted professionally, and prepared for your signature.
          </p>

          <h3 className="font-serif text-xl text-charcoal mb-4 mt-8">Multi-Document Packages & Transactions</h3>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            A real estate transaction involves 15-20 documents: purchase agreement, title documents, disclosure forms, loan documents, closing statements, deed, promissory note. Your VA pulls each template, customizes them for the specific transaction, ensures they're all cross-referenced correctly, creates a transaction binder with organized tabs and an execution order, and prepares a checklist of what needs signatures and what needs notarization.
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            At closing, everything is organized, formatted, and ready. Nothing is missing. Nothing is out of order.
          </p>

          <h3 className="font-serif text-xl text-charcoal mb-4 mt-8">Compliance & Format Verification</h3>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            Every court has rules about formatting, spacing, margin size, and font. Your VA checks every document against the applicable rules before it goes to you. Are the margins correct? Is the font Courier New as required? Is the spacing double-spaced? Are the page numbers in the right corner? Is the caption formatted correctly?
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            A document rejected for formatting non-compliance wastes everyone's time. Your VA never misses it.
          </p>

          <h3 className="font-serif text-xl text-charcoal mb-4 mt-8">Exhibit & Appendix Management</h3>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            A motion with exhibits requires careful organization. Exhibit A is the contract. Exhibit B is the email correspondence. Exhibit C is the photo documentation. Your VA organizes all exhibits, labels them correctly, updates the index to reference them, and creates a clean exhibit binder. The main document stays separate from the exhibits. Everything is cross-referenced.
          </p>

          <h3 className="font-serif text-xl text-charcoal mb-4 mt-8">Document Review & Accuracy Checking</h3>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            Before you see a document, your VA has reviewed it for obvious errors: spelling, spacing, missing sections, inconsistent formatting. They've checked that all cross-references are correct. They've verified that client names and case captions are consistent. They catch the errors that take 15 minutes to fix after the document is already out.
          </p>
        </section>

        {/* TOOLS & SYSTEMS */}
        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-6 mt-12">Document Systems & Tools We Master</h2>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-8">
            We work with the tools you use. Your VA is trained on all of them.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                name: 'Microsoft Word / Google Docs',
                desc: 'Template customization, mail merge, formatting, revision tracking, comment management'
              },
              {
                name: 'HotDocs / Contract Assembly',
                desc: 'Question-based document assembly, template logic, conditional fields, variable substitution'
              },
              {
                name: 'Practice Management Systems',
                desc: 'Clio, MyCase, PracticePanther document storage, version control, and client file integration'
              },
              {
                name: 'Document Assembly Software',
                desc: 'Westlaw DocBuilder, Practical Law templates, LexisNexis document tools'
              },
              {
                name: 'PDF Management',
                desc: 'Adobe Acrobat for form field creation, annotation, signature fields, and document assembly'
              },
              {
                name: 'Secure Sharing Platforms',
                desc: 'Dropbox, OneDrive, encrypted email for client document delivery'
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
          <h3 className="font-serif text-2xl text-charcoal mb-4">The Numbers: Where Hours Go</h3>
          <p className="text-base text-charcoal leading-relaxed mb-4">
            Personal injury firm, 3 attorneys. Each attorney was spending 8-10 hours per week on document preparation: pulling templates, customizing agreements, formatting discovery responses, organizing exhibits. That's 30-40 hours per week of attorney time per week going to mechanical document work.
          </p>
          <p className="text-base text-charcoal leading-relaxed mb-4">
            At $300/hour billing rate, that's $9,000-12,000 per week of productive capacity being spent on non-billable document work. Annualized: $468,000-$624,000 of capacity being wasted.
          </p>
          <p className="text-base text-charcoal leading-relaxed mb-4">
            With a dedicated document preparation VA ($3,500/month), document turnaround went from "whenever the attorney has time" to 24 hours. The attorneys now spend 2-3 hours per week reviewing and editing (down from 40). Recovered capacity: 35+ billable hours per week. Over a year, that's an additional $546,000 in billable capacity.
          </p>
          <p className="text-base text-charcoal font-600">
            — Personal Injury Firm, Multi-State Practice
          </p>
        </section>

        {/* THE ADVANTAGE */}
        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-6 mt-12">What Changes When You Outsource Document Preparation</h2>

          <div className="space-y-6">
            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-lg text-charcoal mb-2">Document Turnaround: 48 hours → 24 hours (or less)</h3>
              <p className="text-base text-text-mid font-300">
                You provide the outline or substance. Your VA has it formatted and ready for your review within 24 hours. Not days. Not weeks. One business day.
              </p>
            </div>

            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-lg text-charcoal mb-2">Quality Consistency: Variable → Uniform</h3>
              <p className="text-base text-text-mid font-300">
                Every document comes out formatted identically. Same font, same spacing, same caption style, same footer format. Your firm looks organized and professional.
              </p>
            </div>

            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-lg text-charcoal mb-2">Compliance Accuracy: Manual review → Verified checklist</h3>
              <p className="text-base text-text-mid font-300">
                Every document is reviewed against applicable rules before it reaches your desk. No more late-night panics about formatting non-compliance.
              </p>
            </div>

            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-lg text-charcoal mb-2">Your Billable Hours: Wasted on mechanical work → Focused on legal judgment</h3>
              <p className="text-base text-text-mid font-300">
                You spend your time on legal argument, strategy, and client management. The VA handles the document mechanics.
              </p>
            </div>

            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-lg text-charcoal mb-2">Client Impressions: "My lawyer is busy" → "My lawyer is professional"</h3>
              <p className="text-base text-text-mid font-300">
                A polished, error-free document on day 1 communicates competence. A hastily formatted document on day 5 communicates that you're overwhelmed.
              </p>
            </div>
          </div>
        </section>

        {/* ECONOMICS */}
        <section className="mb-16 bg-charcoal/3 px-8 py-12 rounded-sm">
          <h2 className="font-serif text-3xl text-charcoal mb-8">The Math on Document Preparation</h2>

          <div className="space-y-4">
            <div className="flex gap-6 items-start">
              <div className="font-serif text-4xl text-brass min-w-fit">35–50 hrs/week</div>
              <div>
                <h4 className="font-600 text-charcoal mb-1">Average attorney time on document prep</h4>
                <p className="text-sm text-text-mid">Pulling templates, customizing, formatting, review, revisions</p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="font-serif text-4xl text-brass min-w-fit">$10,500–15,000</div>
              <div>
                <h4 className="font-600 text-charcoal mb-1">Weekly cost (in lost billable hours at $300/hr)</h4>
                <p className="text-sm text-text-mid">35-50 hours × $300 = $10,500-15,000 in capacity wasted</p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="font-serif text-4xl text-brass min-w-fit">$3,000–4,000</div>
              <div>
                <h4 className="font-600 text-charcoal mb-1">Monthly cost (dedicated document prep VA)</h4>
                <p className="text-sm text-text-mid">Handles all document work for the firm</p>
              </div>
            </div>

            <div className="border-t border-text-light/20 pt-6 mt-6">
              <h4 className="font-serif text-xl text-charcoal mb-3">The Calculation</h4>
              <p className="text-base text-text-mid font-300 mb-2">
                If you're losing 35+ hours per week to document prep at a $300/hour billing rate, that's $10,500 per week or $546,000 per year in lost capacity. A dedicated document VA costs $36,000-48,000 per year. You break even in weeks 3-4 and then add $500,000+ in recovered billable capacity annually.
              </p>
              <p className="text-base text-text-mid font-300">
                And that's conservative. It doesn't include faster client deliverables, fewer compliance errors, or the reduced stress of knowing documents are handled professionally.
              </p>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-6 mt-12">How Document Prep Works With Your VA</h2>

          <ol className="space-y-8">
            <li className="flex gap-4">
              <span className="font-serif text-2xl text-brass font-600 min-w-fit">01</span>
              <div>
                <h4 className="font-600 text-charcoal mb-2">Template Audit & Organization</h4>
                <p className="text-base text-text-mid font-300">We review all your existing document templates, organize them by practice area, identify outdated versions, and create a centralized template library that your VA can quickly access.</p>
              </div>
            </li>

            <li className="flex gap-4">
              <span className="font-serif text-2xl text-brass font-600 min-w-fit">02</span>
              <div>
                <h4 className="font-600 text-charcoal mb-2">VA Training & Systems Setup</h4>
                <p className="text-base text-text-mid font-300">Your VA learns your templates, your formatting standards, your practice areas, and your document tools. They set up systems for tracking document requests, managing versions, and ensuring compliance with court rules.</p>
              </div>
            </li>

            <li className="flex gap-4">
              <span className="font-serif text-2xl text-brass font-600 min-w-fit">03</span>
              <div>
                <h4 className="font-600 text-charcoal mb-2">Document Request Process</h4>
                <p className="text-base text-text-mid font-300">You request a document via email or project tracker. You provide the information needed (client name, case caption, specific terms, attachments). Your VA has it formatted and ready within 24 hours.</p>
              </div>
            </li>

            <li className="flex gap-4">
              <span className="font-serif text-2xl text-brass font-600 min-w-fit">04</span>
              <div>
                <h4 className="font-600 text-charcoal mb-2">Review & Finalization</h4>
                <p className="text-base text-text-mid font-300">You review the document (5-10 minutes), make any final edits, and it's ready to execute or send. No time wasted on formatting or hunting for templates.</p>
              </div>
            </li>
          </ol>
        </section>

        {/* CTA */}
        <section className="my-16 p-10 bg-charcoal text-white rounded-sm">
          <h2 className="font-serif text-3xl mb-4">Stop Wasting Hours on Document Mechanics</h2>
          <p className="text-base text-white/70 leading-relaxed mb-8 font-300">
            You became a lawyer to practice law, not to customize templates and hunt for formatting rules. Let us handle the document preparation. You focus on legal strategy. We'll deliver polished, compliant documents in 24 hours. Your clients will notice. Your stress will drop. Your billable hours will increase.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-brass text-white text-xs font-600 tracking-wider uppercase hover:bg-brass-light transition-all duration-300"
          >
            Schedule a Document Audit
          </Link>
        </section>

        <section className="text-center pt-12 border-t border-text-light/20">
          <p className="text-base text-text-mid font-300 mb-6">
            Ready to reclaim your billable hours?
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-brass text-white text-xs font-600 tracking-wider uppercase hover:bg-brass-light transition-all duration-300"
          >
            Get Started with Document Support
          </Link>
        </section>
      </article>
    </main>
  );
}
