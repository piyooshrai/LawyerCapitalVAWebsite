import { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'Legal Virtual Assistant Services by Location | Lawyer Capital VA',
  description: 'Find specialized legal VA services in your area. Virginia cities and regions.',
  keywords: 'legal virtual assistant near me, law firm support by location, Virginia VA services',
};

export default function LocationsPage() {
  const regions = [
    {
      region: 'United States',
      href: '/locations/usa',
      description: '12 cities across the US with dedicated legal VA support',
      subtext: 'Nationwide coverage',
    },
    {
      region: 'United Kingdom',
      href: '/locations/uk',
      description: 'SRA-compliant VA support for UK solicitors and barristers',
      subtext: '5 cities including London and Edinburgh',
    },
    {
      region: 'Middle East',
      href: '/locations/middle-east',
      description: 'DIFC and jurisdiction-specific legal VA support',
      subtext: 'Dubai, Abu Dhabi, Riyadh, Doha',
    },
    {
      region: 'Asia Pacific',
      href: '/locations/apac',
      description: 'Law Society-compliant VA support for APAC firms',
      subtext: 'Sydney, Melbourne, Auckland, and more',
    },
  ];

  return (
    <main className="bg-ivory min-h-screen">
      <PageHeader
        label="Service Locations"
        title="Legal VA Services Worldwide"
        subtitle="Find specialized virtual assistant support for your local market. Market-specific expertise. Local billing rate understanding. Regional compliance."
      />

      <article className="max-w-5xl mx-auto px-16 py-20">
        <p className="text-lg text-text-mid font-300 mb-16 border-l-4 border-brass pl-8 pb-8 border-b border-brass/20">
          Each legal market has different pain points, billing rates, regulatory frameworks, and practice area opportunities. We understand local legal markets intimately—from US market dynamics to UK SRA compliance to Middle East jurisdiction requirements to APAC Law Society standards. Your VA is trained on your market's specifics.
        </p>

        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-12">Service Regions</h2>

          <div className="grid grid-cols-1 gap-8">
            {regions.map((item) => (
              <Link
                key={item.region}
                href={item.href}
                className="border-2 border-brass/30 rounded-sm p-8 hover:border-brass hover:bg-white/50 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-serif text-2xl text-charcoal mb-1">
                      {item.region}
                    </h3>
                    <p className="text-sm text-brass font-600">{item.subtext}</p>
                  </div>
                  <div className="text-brass text-2xl group-hover:translate-x-2 transition-transform">→</div>
                </div>
                <p className="text-base text-text-mid font-300">{item.description}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-16 py-12 bg-charcoal/5 px-8 rounded-sm border-l-4 border-brass">
          <h2 className="font-serif text-3xl text-charcoal mb-6">Why Location Matters</h2>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            <strong>Billing Rates Vary Dramatically:</strong> Arlington attorneys bill $300-500+/hour. Richmond averages $175-350/hour. Virginia Beach ranges $175-350/hour. Your VA's value scales with your market.
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            <strong>Practice Area Opportunities Differ:</strong> Richmond's competitive market rewards efficiency. Arlington's corporate sector needs M&A coordination. Virginia Beach's military population needs immigration and family law expertise.
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300">
            <strong>Client Expectations Are Regional:</strong> Arlington clients expect fast turnaround. Richmond clients value responsiveness. Virginia Beach military families need coordination. We understand these nuances for your location.
          </p>
        </section>

        <section className="my-16 p-8 bg-charcoal text-white rounded-sm">
          <h2 className="font-serif text-3xl mb-4">Find Your Local Advantage</h2>
          <p className="text-base text-white/70 leading-relaxed mb-6 font-300">
            Click on your city above to see market-specific VA support. Or schedule a consultation to discuss your practice's unique needs.
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
