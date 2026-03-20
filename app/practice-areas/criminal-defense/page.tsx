import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Criminal Defense Virtual Assistant | Lawyer Capital VA',
  description: 'Discovery management, hearing prep, client communication, and case file organization.',
  keywords: 'criminal defense virtual assistant, criminal law support services',
};

export default function CriminalDefensePage() {
  return (
    <main className="pt-32 bg-ivory min-h-screen">
      <article className="max-w-4xl mx-auto px-16 py-20">
        <h1 className="font-serif text-6xl text-charcoal mb-8 leading-tight">
          Virtual Assistant Support for Criminal Defense
        </h1>

        <p className="text-lg text-text-mid font-300 mb-12 border-l-4 border-brass pl-6">
          Criminal defense requires intense client relationships, meticulous discovery management, and courtroom readiness. Your VA handles client communication, discovery organization, and hearing preparation so you focus on strategy and your client's freedom.
        </p>

        <section className="mb-16 py-12 bg-white px-8 rounded-sm border-l-4 border-brass">
          <h2 className="font-serif text-3xl text-charcoal mb-6">The Criminal Defense Challenge</h2>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            Criminal clients are scared. They need reassurance that their case is being managed. They call frequently. They have questions about the process. They worry about outcomes. Meanwhile, you're managing discovery (police reports, witness statements, evidence), preparing for trial, and coordinating with prosecutors.
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300">
            A criminal defense VA manages client fear while you manage legal strategy.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-6 mt-12">What Criminal Defense VAs Handle</h2>

          <h3 className="font-serif text-xl text-charcoal mb-4 mt-8">Discovery Management</h3>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            Prosecution discovery includes police reports, witness statements, evidence logs, and lab results. Your VA tracks what's been provided, flags missing discovery, and requests any outstanding items. They organize all discovery by type (police reports, witness statements, evidence) and create a discovery index for easy reference.
          </p>

          <h3 className="font-serif text-xl text-charcoal mb-4 mt-8">Evidence Organization & Timeline Development</h3>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            Criminal cases turn on evidence. Police reports document arrests and investigations. Witness statements provide testimony. Physical evidence requires careful tracking. Your VA organizes all evidence, creates case timelines showing the sequence of events, and identifies inconsistencies in witness statements or police reports.
          </p>

          <h3 className="font-serif text-xl text-charcoal mb-4 mt-8">Witness Interview & Statement Organization</h3>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            Witness statements are critical. Your VA coordinates witness interviews, documents statements, and prepares summaries showing key testimony. They identify potential defense witnesses and track their contact information and availability.
          </p>

          <h3 className="font-serif text-xl text-charcoal mb-4 mt-8">Charge & Sentencing Research</h3>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            Criminal charges vary by jurisdiction. Your VA researches applicable charges, penalties, and sentencing guidelines. They prepare a sentencing summary showing potential outcomes (best case, likely case, worst case) to advise the client.
          </p>

          <h3 className="font-serif text-xl text-charcoal mb-4 mt-8">Arraignment & Hearing Preparation</h3>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            Hearings are scheduled. Your VA prepares hearing outlines, organizes supporting documents, and ensures all evidence is ready for presentation. For bail hearings, they prepare a bail recommendation package. For trial, they prepare a trial outline showing opening statement structure, witness order, and exhibit organization.
          </p>

          <h3 className="font-serif text-xl text-charcoal mb-4 mt-8">Plea Negotiation Coordination</h3>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            A plea deal is negotiated. Your VA documents all offer details: reduced charges, sentencing recommendations, conditions. They prepare a plea agreement summary and organize all supporting documentation.
          </p>

          <h3 className="font-serif text-xl text-charcoal mb-4 mt-8">Trial Preparation & Jury Materials</h3>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            Trial preparation is intensive. Your VA organizes exhibits, prepares witness outlines, and creates visual aids (timelines, diagram evidence). They prepare jury instructions and verdict forms. They organize trial documents in order of use.
          </p>

          <h3 className="font-serif text-xl text-charcoal mb-4 mt-8">Sentencing Documentation</h3>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            After conviction or plea, sentencing occurs. Your VA prepares sentencing position statements, gathers mitigating evidence (character letters, employment records, education), and prepares a sentencing memorandum advocating for the most favorable outcome.
          </p>

          <h3 className="font-serif text-xl text-charcoal mb-4 mt-8">Client Communication & Reassurance</h3>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            Criminal clients need constant reassurance. Your VA answers routine questions, explains the process, provides case updates, and reports hearing outcomes. They reduce your communication load while keeping the client informed and confident in your representation.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-6 mt-12">Criminal Defense Practice Areas We Support</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {['DUI & Traffic Offenses', 'Drug Offenses', 'Felony Charges', 'White-Collar Crime', 'Domestic Violence', 'Juvenile Crimes', 'Expungement & Appeals', 'Post-Conviction Relief'].map((area) => (
              <div key={area} className="p-4 border border-text-light/10 bg-white">
                <p className="font-500 text-charcoal">{area}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="my-16 p-8 bg-charcoal text-white rounded-sm">
          <h2 className="font-serif text-2xl mb-4">Your Client Deserves Your Full Attention</h2>
          <p className="text-base text-white/70 leading-relaxed">
            Criminal defense clients are fighting for their freedom. They deserve a lawyer focused on strategy and advocacy, not administrative details. Your VA handles the details so you can focus on your client.
          </p>
        </section>

        <section className="text-center">
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-brass text-white text-xs font-600 tracking-wider uppercase hover:bg-brass-light transition-all duration-300"
          >
            Get Criminal Defense Support
          </Link>
        </section>
      </article>
    </main>
  );
}
