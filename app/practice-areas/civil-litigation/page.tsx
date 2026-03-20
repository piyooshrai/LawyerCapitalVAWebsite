import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Civil Litigation Virtual Assistant | Lawyer Capital VA',
  description: 'NDA-protected VA support for discovery management, pleading prep, motion practice, and trial coordination.',
  keywords: 'civil litigation virtual assistant, litigation support services, civil litigation support',
};

export default function CivilLitigationPage() {
  return (
    <main className="pt-32 bg-ivory min-h-screen">
      <article className="max-w-4xl mx-auto px-16 py-20">
        <h1 className="font-serif text-6xl text-charcoal mb-8 leading-tight">
          Virtual Assistant Support for Civil Litigation
        </h1>

        <p className="text-lg text-text-mid font-300 mb-12 border-l-4 border-brass pl-6">
          Civil litigation is document-intensive, deadline-driven, and relationship-intensive. Discovery management alone consumes 30-40% of case time. Our litigation VAs handle discovery coordination, motion prep, evidence management, and trial organization so you focus on strategy and courtroom presence.
        </p>

        <section className="mb-16 py-12 bg-white px-8 rounded-sm border-l-4 border-brass">
          <h2 className="font-serif text-3xl text-charcoal mb-6">The Civil Litigation Practice Needs</h2>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            Civil litigation isn't just about being the best legal strategist. It's about managing hundreds of documents, tracking discovery deadlines, organizing exhibits, and ensuring nothing is overlooked. A single missing document in a 500-page production can sink a case.
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            The attorneys who win aren't the smartest. They're the ones with the best-organized cases. A litigation VA is the difference between knowing your case file and being buried in it.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-6 mt-12">What Litigation VAs Handle</h2>

          <h3 className="font-serif text-xl text-charcoal mb-4 mt-8">Discovery Management & Coordination</h3>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            Your VA maintains a discovery schedule. When do you serve interrogatories? When are responses due? When do you request production? When do you receive documents? Your VA tracks all of it. They prepare discovery requests based on your templates and instructions, serve them on opposing counsel, track responses, and flag missing or inadequate responses. They organize received documents into a searchable database. They track privilege logs. They flag potentially problematic documents for your review.
          </p>

          <h3 className="font-serif text-xl text-charcoal mb-4 mt-8">Pleading & Motion Preparation</h3>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            You draft the legal argument. Your VA prepares the pleading structure, compiles the exhibits, checks formatting compliance, and organizes the motion binder. For a motion to dismiss, they pull the complaint, the motion standard, and the applicable case law you'll cite. For a summary judgment motion, they organize all undisputed facts, compile the evidence, and prepare the statement of facts.
          </p>

          <h3 className="font-serif text-xl text-charcoal mb-4 mt-8">Evidence Management & Trial Preparation</h3>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            As trial approaches, your VA organizes all evidence: testimony summaries, exhibit lists, document binders, witness chronologies. They prepare a trial index (every piece of evidence catalogued and cross-referenced). They prepare witness prep materials (deposition summaries, prior testimony, inconsistencies). They prepare jury trial materials (jury instructions, jury questions, verdict forms). By trial, your case is ready.
          </p>

          <h3 className="font-serif text-xl text-charcoal mb-4 mt-8">Deposition Coordination & Summaries</h3>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            A deposition is scheduled. Your VA coordinates logistics: location, time, reporter, transcript order. They prepare your deposition outline, organize key documents for questioning, and prepare a topics list to ensure nothing is missed. After the deposition, they order the transcript, review it for key testimony, prepare a summary, and flag inconsistencies with prior statements.
          </p>

          <h3 className="font-serif text-xl text-charcoal mb-4 mt-8">Timeline & Chronology Management</h3>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            Civil cases turn on chronology. Your VA creates detailed case timelines: when events occurred, when notice was given, when contracts were signed, when breaches happened. They create visual timelines for jury presentations. They organize all documents by date so you can quickly review the sequence of events.
          </p>

          <h3 className="font-serif text-xl text-charcoal mb-4 mt-8">Exhibit Organization & Management</h3>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            A case with 1,000 exhibits is useless if you can't find exhibit 437 during trial. Your VA organizes all exhibits, labels them, creates an exhibit index, and prepares multiple copies (one set for your use, one for opposing counsel, one for the court). They create exhibit binders organized by issue or chronology. They prepare exhibit lists for motions and trial.
          </p>

          <h3 className="font-serif text-xl text-charcoal mb-4 mt-8">Legal Research Organization</h3>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            You research case law. Your VA organizes your research: key cases, statutory provisions, restatements, treatises. They create a research library organized by legal issue. They prepare summaries of key cases (holding, facts, application to your case) that you can reference quickly. They track which cases are still good law and which have been overruled.
          </p>

          <h3 className="font-serif text-xl text-charcoal mb-4 mt-8">Settlement & Alternative Dispute Resolution Prep</h3>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            Mediation is scheduled. Your VA prepares a settlement position statement, gathers supporting documents and evidence, calculates settlement authority (best case value, worst case exposure, settlement range), and prepares a persuasive brief for the mediator. For arbitration, they organize the entire case file in the order you'll present it.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-6 mt-12">Civil Litigation Practice Areas We Support</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {['Contract Disputes', 'Employment Litigation', 'Personal Injury', 'Commercial Disputes', 'Construction Defect', 'Professional Malpractice', 'Shareholder Disputes', 'Intellectual Property Disputes'].map((area) => (
              <div key={area} className="p-4 border border-text-light/10 bg-white">
                <p className="font-500 text-charcoal">{area}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="my-16 p-8 bg-charcoal text-white rounded-sm">
          <h2 className="font-serif text-2xl mb-4">The Organized Case Wins</h2>
          <p className="text-base text-white/70 leading-relaxed">
            In civil litigation, victory often goes to the side with the best organization, not the best legal argument. Your VA ensures that every document is catalogued, every deadline is tracked, and every fact is available on demand. You focus on strategy and persuasion. We handle the organization.
          </p>
        </section>

        <section className="text-center">
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-brass text-white text-xs font-600 tracking-wider uppercase hover:bg-brass-light transition-all duration-300"
          >
            Get Civil Litigation Support
          </Link>
        </section>
      </article>
    </main>
  );
}
