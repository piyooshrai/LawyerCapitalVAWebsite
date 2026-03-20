import { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'Legal Virtual Assistant Services in Virginia | Lawyer Capital VA',
  description: 'Specialized VA services across Virginia. Richmond, Arlington, Virginia Beach, and more.',
  keywords: 'legal virtual assistant Virginia, law firm support Virginia, VA services Virginia attorneys',
};

export default function VirginiaPage() {
  const cities = [
    { name: 'Richmond', href: '/locations/virginia/richmond', focus: 'Capital city competitive market' },
    { name: 'Arlington', href: '/locations/virginia/arlington', focus: 'Premium corporate market' },
    { name: 'Virginia Beach', href: '/locations/virginia/virginia-beach', focus: 'Hampton Roads & military' },
  ];

  return (
    <main className="bg-ivory min-h-screen">
      <PageHeader
        label="Virginia"
        title="Legal VA Services Across Virginia"
        subtitle="Richmond to Arlington to Virginia Beach. All practice areas. All markets. Specialized regional expertise."
      />

      <article className="max-w-5xl mx-auto px-16 py-20">
        <p className="text-lg text-text-mid font-300 mb-16 border-l-4 border-brass pl-8 pb-8 border-b border-brass/20">
          Virginia's legal market spans from the state capital to the DC suburbs to the military-heavy Hampton Roads. Each market has different opportunities, different billing rates, different practice area strengths. We support them all.
        </p>

        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-12">Virginia Cities We Serve</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cities.map((city) => (
              <Link
                key={city.name}
                href={city.href}
                className="border-2 border-brass/30 rounded-sm p-6 hover:border-brass hover:bg-white/50 transition-all duration-300 group"
              >
                <h3 className="font-serif text-xl text-charcoal mb-2">{city.name}</h3>
                <p className="text-sm text-brass font-600 mb-2">{city.focus}</p>
                <p className="text-sm text-text-mid">View market-specific VA services →</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-16 py-12 bg-charcoal/5 px-8 rounded-sm border-l-4 border-brass">
          <h2 className="font-serif text-3xl text-charcoal mb-6">Why Virginia Attorneys Choose Us</h2>
          <div className="space-y-4">
            <p className="text-base text-text-mid leading-relaxed font-300">
              <strong>Local Market Understanding:</strong> We know Virginia's billing rates, practice area opportunities, and client expectations by region.
            </p>
            <p className="text-base text-text-mid leading-relaxed font-300">
              <strong>Specialized Training:</strong> Virginia law. Virginia court procedures. USCIS deadlines. Local court rules. Your VA is trained on what matters in your market.
            </p>
            <p className="text-base text-text-mid leading-relaxed font-300">
              <strong>Confidentiality & Compliance:</strong> NDA-protected. Checkr background-verified. Attorney-client privilege respected. Your clients' information stays confidential.
            </p>
            <p className="text-base text-text-mid leading-relaxed font-300">
              <strong>Dedicated Support:</strong> Same VA every day. They learn your practice, your clients, your workflows. No turnover. No retraining.
            </p>
          </div>
        </section>

        <section className="my-16 p-8 bg-charcoal text-white rounded-sm">
          <h2 className="font-serif text-3xl mb-4">Ready to Scale Your Virginia Practice?</h2>
          <p className="text-base text-white/70 leading-relaxed mb-6 font-300">
            Choose your city above to see market-specific information. Or let's talk about your practice's unique needs.
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
