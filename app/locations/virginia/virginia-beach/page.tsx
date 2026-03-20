import { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'Legal Virtual Assistant Services in Virginia Beach, VA | Lawyer Capital VA',
  description: 'Legal VA support for Virginia Beach attorneys. Immigration, family law, real estate, and more.',
  keywords: 'virtual assistant Virginia Beach VA, law firm support Virginia Beach, legal VA services Hampton Roads',
};

export default function VirginiaBeachPage() {
  return (
    <main className="bg-ivory min-h-screen">
      <PageHeader
        label="Virginia Beach, Virginia"
        title="Legal VA Support for Hampton Roads Attorneys"
        subtitle="Virginia Beach, Norfolk, and Hampton. All practice areas. All supported. Flat-rate pricing."
      />

      <article className="max-w-5xl mx-auto px-16 py-20">
        <p className="text-lg text-text-mid font-300 mb-16 border-l-4 border-brass pl-8 pb-8 border-b border-brass/20">
          Virginia Beach is the largest city in Virginia with 1,800+ attorneys competing for cases. Military families. Federal government employees. Real estate activity. Immigration work. Family law complexity. Your practice needs organization. A VA gives it to you—and your competitors don't have one.
        </p>

        <section className="mb-16 py-12 bg-charcoal/5 px-8 rounded-sm border-l-4 border-brass">
          <h2 className="font-serif text-3xl text-charcoal mb-6">Why Virginia Beach Practices Need Administrative Support</h2>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            Virginia Beach has military bases, federal employment, and significant immigration populations. This means RFE deadlines, security clearance cases, immigration complexity. It also means high case volumes and client communication demands.
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300">
            The firms winning cases aren't necessarily the smartest—they're the most organized. A VA gives you that organization advantage.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-8">Practice Areas Thriving in Virginia Beach & Hampton Roads</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-xl text-charcoal mb-3">Immigration Law</h3>
              <p className="text-base text-text-mid font-300">Military family sponsorship, employment-based immigration, visa processing. Hampton Roads is heavily military—immigration practices here are specialized and deadline-driven.</p>
            </div>

            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-xl text-charcoal mb-3">Family Law</h3>
              <p className="text-base text-text-mid font-300">Military divorce has unique requirements (BAH, retirement benefits, relocation). High case volumes. Client emotional complexity. VA support reduces attorney burnout and unbilled time.</p>
            </div>

            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-xl text-charcoal mb-3">Real Estate</h3>
              <p className="text-base text-text-mid font-300">Virginia Beach real estate is active with military families relocating, second homes, and investment property. Transaction coordination accelerates closings.</p>
            </div>

            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-xl text-charcoal mb-3">Criminal Defense</h3>
              <p className="text-base text-text-mid font-300">Military bases = military criminal cases + civilian criminal practice. High caseloads. Complex discovery. VA support manages case organization and client communication.</p>
            </div>

            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-xl text-charcoal mb-3">Civil Litigation</h3>
              <p className="text-base text-text-mid font-300">Contract disputes, employment litigation, personal injury. Virginia Beach's growing commercial sector generates litigation work needing efficient discovery management.</p>
            </div>

            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-xl text-charcoal mb-3">Estate Planning</h3>
              <p className="text-base text-text-mid font-300">Military service members with complex estates. Federal employee benefits. Trust coordination and follow-up are critical to successful plan execution.</p>
            </div>
          </div>
        </section>

        <section className="mb-16 p-10 bg-brass/15 border-2 border-brass rounded-sm">
          <h2 className="font-serif text-3xl text-charcoal mb-6">The Virginia Beach Advantage</h2>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            Virginia Beach attorneys average $175-350/hour depending on practice area and experience. Your VA costs $30-42k/year but recovers 15-25 billable hours/week. At Virginia Beach rates, that's $130k-300k+ in recovered annual revenue.
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            A solo immigration attorney in Virginia Beach recovering 12 hours/week at $250/hr = $156k annually. A family law solo with 18 hours/week recovery at $225/hr = $210k annually. Your VA pays for itself within weeks.
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300">
            The practices pulling away from the competition aren't working harder. They're organized. They have support. They have a VA.
          </p>
        </section>

        <section className="my-16 p-8 bg-charcoal text-white rounded-sm">
          <h2 className="font-serif text-3xl mb-4">Build Your Hampton Roads Practice</h2>
          <p className="text-base text-white/70 leading-relaxed mb-6 font-300">
            Virginia Beach needs organized, efficient law practices. You can be one. Let's talk about how a VA accelerates your practice growth and improves client service.
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
