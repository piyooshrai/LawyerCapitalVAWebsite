import { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import { locations, services } from '@/lib/legal-data';

type Props = {
  params: {
    city: string;
    service: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const cityData = locations.usa.find(
    (c) => c.city.toLowerCase() === params.city.replace(/-/g, ' ').toLowerCase()
  );
  const serviceData = services.find((s) => s.slug === params.service);

  const cityName = cityData?.city || params.city.replace(/-/g, ' ');
  const stateName = cityData?.state || '';
  const serviceName = serviceData?.name || params.service.replace(/-/g, ' ');

  return {
    title: `${serviceName} Virtual Assistant ${cityName}, ${stateName} | Lawyer Capital VA`,
    description: `Expert ${serviceData?.name.toLowerCase()} support for ${cityName} law firms. Dedicated VA handling ${serviceName.toLowerCase()} tasks.`,
    keywords: `${serviceData?.name.toLowerCase()} virtual assistant ${cityName}, legal ${params.service.replace(/-/g, ' ')} ${cityName}, VA services ${stateName}`,
  };
}

export async function generateStaticParams() {
  const params = [];
  for (const city of locations.usa) {
    for (const service of services) {
      params.push({
        city: city.city.toLowerCase().replace(/\s+/g, '-'),
        service: service.slug,
      });
    }
  }
  return params;
}

export default function CityServicePage({ params }: Props) {
  const cityData = locations.usa.find(
    (c) => c.city.toLowerCase() === params.city.replace(/-/g, ' ').toLowerCase()
  );
  const serviceData = services.find((s) => s.slug === params.service);

  if (!cityData || !serviceData) {
    return (
      <main className="bg-ivory min-h-screen">
        <PageHeader label="Not Found" title="Service" subtitle="This page is not available." />
      </main>
    );
  }

  const cityName = cityData.city;
  const stateName = cityData.state;
  const serviceName = serviceData.name;

  const contentMap: Record<string, Record<string, string>> = {
    'client-intake': {
      opening: `${cityName} law firms handle more intake than they should. Conflict checks that get missed. Engagement letters drafted at 9 PM. Retainer agreements sent to the wrong client. Intake forms sitting in email inboxes. One VA transforms this chaos into a machine that never breaks.`,
      challenge1: 'Conflict Check Bottleneck: Firms manually cross-reference new client names against client databases, opposing parties in open matters, and outside counsel lists. A missed conflict can mean malpractice claims. Takes 15-30 minutes per prospect. Multiply that across 50 prospective clients per month.',
      challenge2: 'Engagement Letter Delays: Partners draft engagement letters; they sit unsigned in emails for weeks. New clients feel neglected. Prospects go elsewhere. The VA reviews templates, fills in client-specific details, prepares for signature, sends for signature, tracks completion.',
      challenge3: 'Retainer Agreement Complexity: Different practice areas, different fee structures, different trust account instructions. Each client onboarding creates a unique retainer agreement. One VA standardizes the process, catches errors, and accelerates onboarding.',
      faq1q: 'Can a VA do conflict checks for us?',
      faq1a: 'Yes. The VA runs prospects through your conflict database (Clio, MyCase, etc.), cross-references opposing parties in open matters, and flags potential conflicts for attorney review. The attorney makes the final yes/no call. The VA handles 80% of the work.',
      faq2q: 'What about client confidentiality during intake?',
      faq2a: 'Same as any staff member. Your VA signs an NDA, passes a background check, and operates under attorney-client privilege. They have the same access as your office manager—because they ARE your office manager.',
    },
    'document-preparation': {
      opening: `${cityName} litigation and corporate practices generate hundreds of documents monthly. Pleadings. Motions. Contracts. Discovery responses. Exhibits. Filing-ready documents demand perfect formatting, flawless citations, and error-free exhibits. A single typo in a court filing wastes partner time on revisions. A VA handles this with precision.`,
      challenge1: 'Pleading Formatting Hell: Every court has different rules. E-filing requirements. Header formats. Page limit calculations. One partner might use Arial; another uses Calibri. Exhibits need tabs, bates numbering, and proper indexing. One VA learns your court rules, your style, your expectations.',
      challenge2: 'Discovery Organization Nightmare: 10,000 documents arrive from opposing counsel. They need bates numbers. They need OCR. They need issue tags. They need Bates ranges cross-referenced to a discovery spreadsheet. A partner drowns in logistics. A VA organizes it into a searchable database.',
      challenge3: 'Motion Support Accuracy: Research memos get organized. Exhibits get compiled. Citations get verified. Draft motions get formatted for filing. A partner focuses on legal arguments; the VA handles the mechanics.',
      faq1q: 'Can a VA draft motions or pleadings?',
      faq1a: 'A VA cannot provide legal advice or draft substantive legal documents (that requires a lawyer). They CAN format draft motions, organize supporting exhibits, verify citations, prepare filing-ready versions, and organize research materials.',
      faq2q: 'How do you handle confidential documents?',
      faq2a: 'Same security protocols as your office. Encrypted file transfers via Continia. Secure document access. NDA-protected. Work happens on your systems (Clio, NetDocuments, iManage) where you control access.',
    },
    'case-management': {
      opening: `${cityName} practices don't lose cases because of bad law. They lose cases because they miss deadlines. Docket entries get missed. Statute of limitations windows close. Court dates vanish from calendars. Settlement offers expire. A VA running your docket stops these catastrophes before they start.`,
      challenge1: 'Docket Management Across Matters: A solo immigration attorney has 80 cases. Each case has USCIS deadlines, RFE responses, interview scheduling. One missed deadline costs $2,500+ in restarts, refilings, lost client trust. Tracking this manually is impossible.',
      challenge2: 'Statute of Limitations Tracking: Family law, civil litigation, personal injury practices operate on statute deadlines. Tolling rules differ by state. Calculation errors mean malpractice. One VA tracks deadlines per practice area, runs monthly reports, flags anything within 90 days.',
      challenge3: 'Court Date Calendar Hell: Partners juggle multiple calendars (personal, office, court systems, client reminders). Conflicts happen. Travel gets scheduled over hearings. One VA centralizes all court dates in one master calendar, sends reminders 14/7/3/1 day before, coordinates with opposing counsel.',
      faq1q: 'Can a VA handle deadline management across multiple practice areas?',
      faq1a: 'Yes. We train on practice-area-specific deadlines (USCIS for immigration, state statute timelines for family law, court-specific local rules for litigation). One master docket system, customized per practice area.',
      faq2q: 'What happens if the VA misses a deadline?',
      faq2a: 'Our Service Level Agreement includes malpractice insurance covering VA-caused deadline misses (up to $100K per incident). Plus daily backups, redundant systems, and attorney review checkpoints for critical dates.',
    },
    'court-filing': {
      opening: `${cityName} courts have different e-filing systems, local rules, and clerk requirements. Federal courts use CM/ECF. Some state courts use proprietary systems. Missing a filing requirement means rejection, re-filing, delay, and lost deadlines. One VA masters your local court rules and handles e-filing like a clerk's office.`,
      challenge1: 'Local Rule Compliance Nightmare: Each court has different page limits, formatting rules, font requirements, and filing procedures. What works in federal court fails in state court. Clerks reject filings for technical compliance errors. One VA learns every court your firm uses.',
      challenge2: 'E-Filing Coordination: Documents arrive in final form at 4:47 PM. E-filing deadline is 5 PM. Partner reviews for 10 minutes, misses an error, filing gets rejected. Next filing attempt costs $500 and misses a deadline. One VA prepares filing-ready documents hours earlier, leaving time for review.',
      challenge3: 'Proof of Service Tracking: Every filing requires proof of service to opposing counsel. Emails need timestamps. Certified mail needs receipts. Proof of service documents need proper formatting. One VA manages service tracking, prepares proof documents, coordinates with opposing counsel.',
      faq1q: 'Does the VA have access to state and federal e-filing systems?',
      faq1a: 'Yes, where you authorize it. The VA works within your Clio/case management system, which integrates with most state court e-filing systems. We follow your firm\'s login and security protocols.',
      faq2q: 'What if a filing deadline is missed due to system failure?',
      faq2a: 'Our backup systems are redundant. But our SLA includes coverage for system-caused missed deadlines. We also train you on emergency filing procedures (phone filing, hand-delivery) for critical deadlines.',
    },
    'client-communication': {
      opening: `${cityName} attorneys lose billable hours to routine client communication. Status updates. Appointment scheduling. Court date reminders. Document request follow-ups. Settlement offer explanations. Each of these could be a $150+ billable hour. Delegating this to a VA recovers 10-15 hours per week—and clients feel MORE communicated-with, not less.`,
      challenge1: 'Status Update Burden: Clients expect weekly status updates. Partners spend 2-3 hours per week drafting them. A template-based approach feels cold. A VA personalizes each update while using templates for efficiency.',
      challenge2: 'Appointment Scheduling Chaos: Clients call with times they're available. Assistant writes them down. Partner emails back. No-shows happen. Reschedules take a week. One VA manages all scheduling, sends calendar invites, sends reminders 24h and 1h before appointments.',
      challenge3: 'Document Request Delays: Clients request documents. Request sits in partner inbox. Partner forgets to send them. Client calls. Partner apologizes. Bad experience. One VA logs every document request, sends to clients within 24 hours.',
      faq1q: 'Can a VA answer client questions or provide legal advice?',
      faq1a: 'No. A VA can answer procedural questions ("when is the next court date?"), handle scheduling, and send routine status updates. Legal questions route to the attorney. The VA acts as an administrative filter.',
      faq2q: 'What if a client is upset and needs immediate response?',
      faq2a: 'The VA flags urgent client communications to the attorney immediately. Routine items (scheduling, document requests) get VA response. Everything else escalates same-day.',
    },
    'firm-administration': {
      opening: `${cityName} law firm administration is a black hole. Time entry. Invoice preparation. Expense tracking. Trust account reconciliation. CLE deadline monitoring. Bar association updates. One partner handles all of this—stealing 15-20 hours per week from billable work. One VA takes it all off their plate.`,
      challenge1: 'Time Entry Delays: Attorneys forget to log time. Work gets unbilled. Invoice prep takes 5 hours monthly. Reports are always late. One VA collects time entries daily, nags for missing entries, prepares invoices weekly, sends to clients by the 5th.',
      challenge2: 'Trust Account Complexity: Retainers get deposited. Invoices pull from trust. Unused balances need reporting. One VA monitors trust account transactions, flags reconciliation issues, prepares trust account spreadsheets for attorney review.',
      challenge3: 'CLE & Bar Compliance: CLE deadlines vary by state and practice area. Bar association dues are annual. License renewals expire. One VA maintains a compliance calendar, sends reminders 90/60/30 days before deadlines.',
      faq1q: 'Can a VA do basic bookkeeping or accounting?',
      faq1a: 'Yes. The VA can input time entries, prepare invoices using your template, track trust account transactions, reconcile accounts, and prepare expense reports. For complex accounting, you still need a bookkeeper or accountant. The VA handles 70% of the work.',
      faq2q: 'What if there\'s a billing error or audit?',
      faq2a: 'The VA maintains detailed logs of all time entry, invoice, and trust account actions. Audit trails are transparent. If an error occurs, you have documentation of when it happened and who caught it.',
    },
  };

  const content = contentMap[params.service] || contentMap['client-intake'];

  return (
    <main className="bg-ivory min-h-screen">
      <PageHeader
        label={`${cityName}, ${stateName}`}
        title={`${serviceName} Virtual Assistant for ${cityName}`}
        subtitle={`Dedicated VA support for ${serviceName.toLowerCase()} tasks. Recover billable hours. Reduce administrative burden. Scale efficiently.`}
      />

      <article className="max-w-5xl mx-auto px-16 py-20">
        <p className="text-lg text-text-mid font-300 mb-16 border-l-4 border-brass pl-8 pb-8 border-b border-brass/20">
          {content.opening}
        </p>

        <section className="mb-16 py-12 bg-charcoal/5 px-8 rounded-sm border-l-4 border-brass">
          <h2 className="font-serif text-3xl text-charcoal mb-6">The {serviceName} Challenge</h2>

          <div className="space-y-4">
            <p className="text-base text-text-mid leading-relaxed font-300">
              <strong>Challenge 1:</strong> {content.challenge1}
            </p>
            <p className="text-base text-text-mid leading-relaxed font-300">
              <strong>Challenge 2:</strong> {content.challenge2}
            </p>
            <p className="text-base text-text-mid leading-relaxed font-300">
              <strong>Challenge 3:</strong> {content.challenge3}
            </p>
          </div>
        </section>

        <section className="mb-16 p-10 bg-brass/15 border-2 border-brass rounded-sm">
          <h2 className="font-serif text-3xl text-charcoal mb-6">The ROI for {cityName}</h2>
          <div className="grid grid-cols-3 gap-6 mb-6">
            <div className="text-center">
              <div className="font-serif text-4xl text-brass mb-2">15-25</div>
              <div className="text-sm text-text-mid font-500">Billable Hours Recovered/Week</div>
            </div>
            <div className="text-center">
              <div className="font-serif text-4xl text-brass mb-2">${(cityData.paralegals * 0.75).toLocaleString().split('.')[0]}</div>
              <div className="text-sm text-text-mid font-500">Annual Salary Savings vs Paralegal</div>
            </div>
            <div className="text-center">
              <div className="font-serif text-4xl text-brass mb-2">$156K+</div>
              <div className="text-sm text-text-mid font-500">Annual Revenue from Recovered Hours</div>
            </div>
          </div>
          <p className="text-base text-text-mid leading-relaxed font-300">
            A VA in {cityName} costs $8,400-$15,600 annually. Recovering just 15 billable hours per week at your market rate of $200-300/hour = $156,000-234,000 in annual revenue recovery. Your VA pays for itself in the first month.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-8">FAQ</h2>

          <details className="border-l-4 border-brass/30 pl-6 mb-6 group cursor-pointer">
            <summary className="text-lg font-500 text-charcoal py-4 group-open:text-brass transition-colors">
              {content.faq1q}
            </summary>
            <div className="pb-4 text-base text-text-mid font-300 leading-relaxed">
              {content.faq1a}
            </div>
          </details>

          <details className="border-l-4 border-brass/30 pl-6 mb-6 group cursor-pointer">
            <summary className="text-lg font-500 text-charcoal py-4 group-open:text-brass transition-colors">
              {content.faq2q}
            </summary>
            <div className="pb-4 text-base text-text-mid font-300 leading-relaxed">
              {content.faq2a}
            </div>
          </details>

          <details className="border-l-4 border-brass/30 pl-6 group cursor-pointer">
            <summary className="text-lg font-500 text-charcoal py-4 group-open:text-brass transition-colors">
              What timezone are VA working in?
            </summary>
            <div className="pb-4 text-base text-text-mid font-300 leading-relaxed">
              Our {cityName} VAs work during {cityData.timezone} business hours (typically 9 AM - 5 PM {cityData.timezone}). This means same-day response times and real-time communication with your team. No international delays. No waiting for tomorrow's afternoon.
            </div>
          </details>
        </section>

        <section className="my-16 p-8 bg-charcoal text-white rounded-sm">
          <h2 className="font-serif text-3xl mb-4">Ready to Add {serviceName} Support?</h2>
          <p className="text-base text-white/70 leading-relaxed mb-6 font-300">
            See how a dedicated VA transforms {serviceName} for {cityName} firms. Schedule a consultation to discuss your firm's specific needs and timeline.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-brass text-charcoal text-xs font-600 tracking-widest uppercase hover:bg-brass-light transition-all duration-300"
          >
            Schedule Consultation
          </Link>
        </section>
      </article>
    </main>
  );
}
