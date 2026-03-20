import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Law Firm Administration Virtual Assistant | Lawyer Capital VA',
  description: 'Time entry, invoicing, trust accounting, CLE tracking, and firm administrative management for law firms.',
  keywords: 'law firm administration, legal bookkeeping, legal accounting virtual assistant',
};

export default function FirmAdministrationPage() {
  return (
    <main className="pt-32">
      <article className="max-w-4xl mx-auto px-16 py-20">
        <h1 className="font-serif text-6xl text-charcoal mb-4 leading-tight">
          Law Firm Administration & Back-Office Management
        </h1>
        <p className="text-lg text-text-mid font-300 mb-12 border-l-4 border-brass pl-6">
          Billing, accounting, time tracking, compliance management, CLE credits, trust accounting — the administrative backbone of your firm has to work perfectly or nothing else works. Our VAs handle the back-office so you handle cases.
        </p>

        {/* THE PROBLEM */}
        <section className="mb-16 py-12 bg-charcoal/3 px-8 rounded-sm border-l-4 border-brass">
          <h2 className="font-serif text-3xl text-charcoal mb-6">Why Back-Office Management Eats Profitable Time</h2>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            You practice law. You bill clients. But you don't get paid until someone enters your time into the billing system and sends an invoice.
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            A $10,000 month of work is only valuable if it's billed. That requires time entry. Then it requires invoice creation, which requires checking that all hours are accounted for, all rates are correct, and all matters are properly coded. Then an email goes out. Then payment is tracked. Then follow-up is sent for late payments.
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            Meanwhile, your trust account needs to be reconciled monthly (a requirement, not a nice-to-have). Your CLE credits need to be tracked or you lose your license. Your invoices need to be sent timely or cash flow dries up. Payroll needs to happen. Taxes need to be filed.
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300">
            A solo attorney spending 5-10 hours per month on back-office administration is not uncommon. That's revenue that never gets billed. A small firm with a disorganized back-office is leaving 15-20% of billing on the table because work isn't being properly tracked or invoiced.
          </p>
        </section>

        {/* WHAT WE HANDLE */}
        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-6 mt-12">What Our Firm Administration VA Handles</h2>

          <h3 className="font-serif text-xl text-charcoal mb-4 mt-8">Time Entry & Billing Records</h3>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            You work on a case but forget to enter your time. Your VA reviews your calendar, your emails, and your work output, identifies billable work, and prompts you to enter time. Or, if you authorize, they enter time based on your patterns (meetings with clients, court appearances, work on specific matters). They ensure all work is captured, time entries are accurate, and rates match your fee agreements.
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            They track whether time was entered within 24 hours (when memory is fresh) and flag time entries that are suspiciously round (exactly 1 hour, exactly 2 hours, when most entries vary) as potential estimates that need review.
          </p>

          <h3 className="font-serif text-xl text-charcoal mb-4 mt-8">Invoice Preparation & Delivery</h3>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            Time entries are complete. Your VA reviews the time entries for accuracy, checks that all hours are accounted for, verifies that rates match fee agreements, organizes time by matter, and prepares a professional invoice. They include a summary of work performed (a narrative of what was done, not just a line item). They ensure the invoice is formatted correctly and includes all required billing information.
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            They send the invoice, track delivery, and prepare a follow-up protocol if payment doesn't arrive within your standard payment terms (30 days, 15 days, etc.).
          </p>

          <h3 className="font-serif text-xl text-charcoal mb-4 mt-8">Payment Processing & Collection</h3>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            A payment arrives. Your VA logs it in your accounting system, matches it to the invoice it corresponds to, applies it to the client's account, and updates your accounts receivable. An invoice is unpaid after 45 days. Your VA sends a friendly reminder. Another 30 days passes. Your VA sends a second reminder. After 90 days of non-payment, your VA prepares a collections summary for your review and potential action.
          </p>

          <h3 className="font-serif text-xl text-charcoal mb-4 mt-8">Trust Account Management & Reconciliation</h3>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            Client retainers are received. Your VA deposits them into trust, records the deposit, and updates your trust ledger. As you earn the retainer (through billable work), your VA tracks the earned vs. unearned balance. Monthly, your VA reconciles the trust account: comparing the bank statement balance to your ledger balance, identifying discrepancies, and preparing a reconciliation report.
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            A trust account that's not reconciled is a bar violation. A trust account shortage is discipline. Your VA ensures your trust account is always reconciled and balanced.
          </p>

          <h3 className="font-serif text-xl text-charcoal mb-4 mt-8">Expense Tracking & Reimbursement</h3>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            You spend $500 on court filing fees, $300 on expert witness fees, $200 on document preparation. These are client costs, not your costs. Your VA tracks all expenses by client, by matter, and prepares an expenses bill that goes out with your next invoice. They ensure clients are billed for all reimbursable expenses and that your profit margins reflect the full cost of representation.
          </p>

          <h3 className="font-serif text-xl text-charcoal mb-4 mt-8">Retainer & Fee Agreement Tracking</h3>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            Every client has a fee agreement. Flat fee, hourly rate, contingency arrangement, hybrid? Your VA maintains a fee agreement library. When billing, they pull the correct fee agreement, verify the rate is correct, and ensure billing aligns with the agreement. If a flat fee is being billed, they track hours to ensure you're not leaving money on the table. If an hourly rate is billed, they ensure the rate in the fee agreement matches the invoice.
          </p>

          <h3 className="font-serif text-xl text-charcoal mb-4 mt-8">CLE Credit Tracking & Compliance</h3>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            Your state requires 12 CLE credits per year. Your VA tracks every CLE course you take, the date, the credits earned, and whether it meets the requirements (some states require ethics credits, some require skills training). They alert you when you're approaching the CLE deadline so you have time to complete remaining credits. They maintain all CLE certificates in your file. They know your renewal date and ensure you meet it.
          </p>

          <h3 className="font-serif text-xl text-charcoal mb-4 mt-8">Payroll & Vendor Payment</h3>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            If you have staff, payroll needs to happen on schedule. Your VA coordinates with your payroll processor, ensures timely processing, and tracks payments. Vendor invoices come in (office supplies, software subscriptions, bar association dues). Your VA processes them, approves them based on your authorization, processes payment, and logs them in your accounting system.
          </p>

          <h3 className="font-serif text-xl text-charcoal mb-4 mt-8">Financial Reporting & Analysis</h3>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            Monthly, your VA prepares a financial report: total billings, total collections, accounts receivable aging (how much is 30 days overdue, 60 days overdue), trust account balance, expenses, and profitability by matter or client. You can see at a glance which clients are most profitable, which matters are consuming time without profit, and whether your firm is on track financially.
          </p>

          <h3 className="font-serif text-xl text-charcoal mb-4 mt-8">Tax & Compliance Preparation</h3>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            Tax time comes. Your VA has been organizing your income and expenses all year. They prepare summary statements, organize documentation, and prepare materials for your accountant or tax preparer. If you run a corporation, they ensure quarterly estimated tax payments are made. They track licensing requirements and renewal dates.
          </p>
        </section>

        {/* TOOLS */}
        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-6 mt-12">Accounting & Administration Systems We Master</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {[
              { name: 'Practice Management Systems', desc: 'Clio, MyCase, PracticePanther time tracking, billing, accounting' },
              { name: 'Accounting Software', desc: 'QuickBooks, FreshBooks, Wave, Excel-based bookkeeping' },
              { name: 'Trust Accounting', desc: 'Trust account reconciliation, ledger management, compliance' },
              { name: 'Banking & Payments', desc: 'Bank reconciliation, payment processing, invoice collection' },
              { name: 'Expense Management', desc: 'Expense categorization, reimbursement tracking, cost recovery' },
              { name: 'Reporting & Analysis', desc: 'Financial statements, KPI dashboards, profitability analysis' },
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
          <h3 className="font-serif text-2xl text-charcoal mb-4">Real Numbers: Where Revenue Gets Lost</h3>
          <p className="text-base text-charcoal leading-relaxed mb-4">
            Solo attorney generating $400,000/year in billings. Before back-office VA: 8-10 hours per month spent on time entry, invoicing, and accounting (non-billable work). Accounts receivable aging report showed $45,000 in invoices 30+ days overdue. Estimated revenue leakage (unbilled time, uncollected invoices, missed reimbursable expenses): 12-15% of billings, or $48,000-60,000/year.
          </p>
          <p className="text-base text-charcoal leading-relaxed mb-4">
            After back-office VA: All time is captured and billed. Invoice collection process is systematic, reducing aged receivables to $8,000. All reimbursable expenses are billed to clients. Financial reports are accurate and available monthly. Estimated revenue recovery: $40,000-50,000/year. VA cost: $2,500/month ($30,000/year). Net profit gain: $10,000-20,000/year.
          </p>
          <p className="text-base text-charcoal font-600">
            — Solo Attorney, Multi-practice Areas
          </p>
        </section>

        {/* ADVANTAGES */}
        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-6 mt-12">What Changes With Dedicated Back-Office Management</h2>

          <div className="space-y-6">
            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-lg text-charcoal mb-2">Billing Accuracy: Variable → 100%</h3>
              <p className="text-base text-text-mid font-300">
                Every hour is captured, every rate is correct, every invoice is sent. No revenue is left on the table.
              </p>
            </div>

            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-lg text-charcoal mb-2">Collections: Chaotic → Systematic</h3>
              <p className="text-base text-text-mid font-300">
                Overdue invoices are followed up systematically. Bad debt is minimized. Cash flow is predictable.
              </p>
            </div>

            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-lg text-charcoal mb-2">Compliance: Risky → Certain</h3>
              <p className="text-base text-text-mid font-300">
                Trust accounts are reconciled. CLE credits are tracked. Tax documents are prepared. You never violate a requirement.
              </p>
            </div>

            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-lg text-charcoal mb-2">Financial Visibility: None → Monthly Reports</h3>
              <p className="text-base text-text-mid font-300">
                You know your profitability, your cash position, your A/R aging. You can make strategic decisions.
              </p>
            </div>

            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-lg text-charcoal mb-2">Stress Reduction: High → Minimal</h3>
              <p className="text-base text-text-mid font-300">
                You don't worry about billing, accounting, or compliance. Someone is handling it professionally.
              </p>
            </div>
          </div>
        </section>

        {/* ECONOMICS */}
        <section className="mb-16 bg-charcoal/3 px-8 py-12 rounded-sm">
          <h2 className="font-serif text-3xl text-charcoal mb-8">The Revenue Recovery Opportunity</h2>

          <div className="space-y-4">
            <div className="flex gap-6 items-start">
              <div className="font-serif text-4xl text-brass min-w-fit">8-10 hrs/month</div>
              <div>
                <h4 className="font-600 text-charcoal mb-1">Attorney time on back-office administration</h4>
                <p className="text-sm text-text-mid">Time entry, invoicing, accounting, payroll, tax prep</p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="font-serif text-4xl text-brass min-w-fit">12-15%</div>
              <div>
                <h4 className="font-600 text-charcoal mb-1">Revenue leakage from poor billing/collection</h4>
                <p className="text-sm text-text-mid">Unbilled time, aged receivables, missed reimbursables</p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="font-serif text-4xl text-brass min-w-fit">$2,400–2,800</div>
              <div>
                <h4 className="font-600 text-charcoal mb-1">Monthly cost (firm administration VA)</h4>
                <p className="text-sm text-text-mid">Handles all accounting and administrative work</p>
              </div>
            </div>

            <div className="border-t border-text-light/20 pt-6 mt-6">
              <h4 className="font-serif text-xl text-charcoal mb-3">Example: $400,000/year Firm</h4>
              <p className="text-base text-text-mid font-300 mb-3">
                <strong>Lost time:</strong> 10 hours/month × $300/hour × 12 months = $36,000/year in non-billable time<br/>
                <strong>Revenue leakage:</strong> 12% × $400,000 = $48,000/year in lost billing/collection<br/>
                <strong>Total opportunity:</strong> $84,000/year in recoverable profit
              </p>
              <p className="text-base text-text-mid font-300 mb-2">
                <strong>VA cost:</strong> $30,000-33,600/year<br/>
                <strong>Net profit gain:</strong> $50,000-54,000/year
              </p>
              <p className="text-base text-text-mid font-300">
                This isn't overhead. This is investment that pays for itself 1.5-2x over, year one.
              </p>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-6 mt-12">How Back-Office Management Works With Your VA</h2>

          <ol className="space-y-8">
            <li className="flex gap-4">
              <span className="font-serif text-2xl text-brass font-600 min-w-fit">01</span>
              <div>
                <h4 className="font-600 text-charcoal mb-2">Financial Systems Audit</h4>
                <p className="text-base text-text-mid font-300">We review your current billing, accounting, and trust account systems. We identify gaps (missed revenue, poor collections, compliance issues) and create a plan to improve.</p>
              </div>
            </li>

            <li className="flex gap-4">
              <span className="font-serif text-2xl text-brass font-600 min-w-fit">02</span>
              <div>
                <h4 className="font-600 text-charcoal mb-2">VA Training & Systems Setup</h4>
                <p className="text-base text-text-mid font-300">Your VA is trained on your billing practices, your fee agreements, your accounting software, and your compliance requirements. They set up automated time entry processes and billing workflows.</p>
              </div>
            </li>

            <li className="flex gap-4">
              <span className="font-serif text-2xl text-brass font-600 min-w-fit">03</span>
              <div>
                <h4 className="font-600 text-charcoal mb-2">Ongoing Financial Management</h4>
                <p className="text-base text-text-mid font-300">Your VA captures all time, prepares all invoices, processes payments, manages collections, reconciles trust accounts, and tracks compliance requirements.</p>
              </div>
            </li>

            <li className="flex gap-4">
              <span className="font-serif text-2xl text-brass font-600 min-w-fit">04</span>
              <div>
                <h4 className="font-600 text-charcoal mb-2">Monthly Financial Reporting</h4>
                <p className="text-base text-text-mid font-300">Your VA provides monthly financial reports showing billings, collections, A/R aging, profitability, and compliance status. You always know your financial position.</p>
              </div>
            </li>
          </ol>
        </section>

        {/* CTA */}
        <section className="my-16 p-10 bg-charcoal text-white rounded-sm">
          <h2 className="font-serif text-3xl mb-4">Stop Leaving Money on the Table</h2>
          <p className="text-base text-white/70 leading-relaxed mb-8 font-300">
            Every hour you spend on billing is an hour you could spend practicing law or growing your business. Every invoice that goes out late is a day longer until you get paid. Every uncollected receivable is money that should be in your bank account. Our back-office VAs make sure you capture every billable hour, collect every invoice, and stay compliant with every requirement. You'll recover 12-15% of lost revenue in your first year alone.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-brass text-white text-xs font-600 tracking-wider uppercase hover:bg-brass-light transition-all duration-300"
          >
            Schedule Financial Audit
          </Link>
        </section>

        <section className="text-center pt-12 border-t border-text-light/20">
          <p className="text-base text-text-mid font-300 mb-6">
            Ready to recover 12-15% of lost revenue?
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-brass text-white text-xs font-600 tracking-wider uppercase hover:bg-brass-light transition-all duration-300"
          >
            Get Started with Back-Office Support
          </Link>
        </section>
      </article>
    </main>
  );
}
