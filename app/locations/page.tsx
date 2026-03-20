import { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'Legal Virtual Assistant Services by Location | Lawyer Capital VA',
  description: 'Find specialized legal VA services in your area. Virginia cities and regions.',
  keywords: 'legal virtual assistant near me, law firm support by location, Virginia VA services',
};

export default function LocationsPage() {
  const locations = [
    {
      city: 'Richmond',
      state: 'Virginia',
      href: '/locations/virginia/richmond',
      description: 'Virginia capital market. Immigration, family law, litigation, corporate.',
      attorneys: '3,000+',
    },
    {
      city: 'Arlington',
      state: 'Virginia',
      href: '/locations/virginia/arlington',
      description: 'Premium market. Immigration, corporate, litigation, IP, real estate.',
      attorneys: '1,500+',
    },
    {
      city: 'Virginia Beach',
      state: 'Virginia',
      href: '/locations/virginia/virginia-beach',
      description: 'Hampton Roads & military market. Immigration, family law, criminal defense.',
      attorneys: '1,800+',
    },
  ];

  return (
    <main className="bg-ivory min-h-screen">
      <PageHeader
        label="Service Locations"
        title="Legal VA Services by Location"
        subtitle="Find specialized virtual assistant support for your local market. Market-specific experience. Local billing rate understanding. Regional expertise."
      />

      <article className="max-w-5xl mx-auto px-16 py-20">
        <p className="text-lg text-text-mid font-300 mb-16 border-l-4 border-brass pl-8 pb-8 border-b border-brass/20">
          Each legal market has different pain points, billing rates, and practice area opportunities. We understand Virginia's markets intimately—from Richmond's competitive general practice to Arlington's premium corporate work to Virginia Beach's military and immigration focus.
        </p>

        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-12">Virginia Service Areas</h2>

          <div className="grid grid-cols-1 gap-8">
            {locations.map((location) => (
              <Link
                key={location.city}
                href={location.href}
                className="border-2 border-brass/30 rounded-sm p-8 hover:border-brass hover:bg-white/50 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-serif text-2xl text-charcoal mb-1">
                      {location.city}, {location.state}
                    </h3>
                    <p className="text-sm text-brass font-600">{location.attorneys} attorneys</p>
                  </div>
                  <div className="text-brass text-2xl group-hover:translate-x-2 transition-transform">→</div>
                </div>
                <p className="text-base text-text-mid font-300">{location.description}</p>
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
