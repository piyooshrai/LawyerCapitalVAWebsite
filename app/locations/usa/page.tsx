import { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import { locations } from '@/lib/legal-data';

export const metadata: Metadata = {
  title: 'Legal Virtual Assistant Services Across the USA | Lawyer Capital VA',
  description: 'Specialized legal VA services nationwide. 12 major US cities with dedicated VA support.',
  keywords: 'legal virtual assistant services USA, law firm support nationwide, legal VA by city',
};

export default function USAPage() {
  const usaCities = locations.usa;

  return (
    <main className="bg-ivory min-h-screen">
      <PageHeader
        label="United States"
        title="Legal VA Services Across 12 Major US Cities"
        subtitle="Dedicated virtual assistant support for law firms nationwide. From New York to Los Angeles. Market-specific expertise."
      />

      <article className="max-w-5xl mx-auto px-16 py-20">
        <p className="text-lg text-text-mid font-300 mb-16 border-l-4 border-brass pl-8 pb-8 border-b border-brass/20">
          US legal markets differ dramatically by region. New York billing rates exceed Los Angeles. Texas competition differs from California. Each market has different court systems, billing expectations, and practice area opportunities. Your VA is trained on your specific market.
        </p>

        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-12">US Cities We Serve</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {usaCities.map((city) => (
              <Link
                key={city.city}
                href={`/locations/usa/${city.city.toLowerCase().replace(/\s+/g, '-')}`}
                className="border-2 border-brass/30 rounded-sm p-6 hover:border-brass hover:bg-white/50 transition-all duration-300 group"
              >
                <h3 className="font-serif text-xl text-charcoal mb-2">{city.city}</h3>
                <p className="text-sm text-brass font-600 mb-2">{city.state}</p>
                <p className="text-sm text-text-mid">{city.region} • {city.timezone}</p>
                <p className="text-xs text-brass mt-4 group-hover:translate-x-1 transition-transform">Market details →</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-16 py-12 bg-charcoal/5 px-8 rounded-sm border-l-4 border-brass">
          <h2 className="font-serif text-3xl text-charcoal mb-6">How We Work Across US Markets</h2>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            <strong>Market Research:</strong> We understand each city's legal landscape - billing rates, practice area opportunities, court procedures, local court rules, bar association requirements.
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            <strong>Specialized Training:</strong> Your VA is trained on your market's laws, court procedures, and practice area specifics. Not generic legal admin - specialized for your region.
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            <strong>Dedicated Support:</strong> Same VA every day. They learn your practice, your clients, your workflows. No rotation. Continuity matters.
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300">
            <strong>Confidentiality:</strong> NDA-protected. Background-verified. Attorney-client privilege respected everywhere. Your clients' information is always secure.
          </p>
        </section>

        <section className="mb-16 p-10 bg-brass/15 border-2 border-brass rounded-sm">
          <h2 className="font-serif text-3xl text-charcoal mb-6">US Market Context</h2>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            US paralegals cost $50,000-$65,000 annually. A Lawyer Capital VA costs $8,400-$15,600 annually. That's 50-75% savings while you recover 10-25 billable hours per week.
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300">
            US attorneys bill $150-500+ per hour depending on market and specialty. Recovering 15 billable hours per week at your market rate = $117,000-390,000 in annual revenue recovery. Your VA pays for itself in the first month.
          </p>
        </section>

        <section className="my-16 p-8 bg-charcoal text-white rounded-sm">
          <h2 className="font-serif text-3xl mb-4">Find Your US City</h2>
          <p className="text-base text-white/70 leading-relaxed mb-6 font-300">
            Choose your city above to see market-specific VA support. Or schedule a consultation to discuss your firm's needs and US market opportunities.
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
