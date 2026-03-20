import { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import { locations, services } from '@/lib/legal-data';

type Props = {
  params: {
    city: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const cityData = locations.usa.find(
    (c) => c.city.toLowerCase() === params.city.replace(/-/g, ' ').toLowerCase()
  );

  const cityName = cityData?.city || params.city.replace(/-/g, ' ');
  const stateName = cityData?.state || '';

  return {
    title: `Legal Virtual Assistant Services in ${cityName}, ${stateName} | Lawyer Capital VA`,
    description: `Specialized VA support for ${cityName} attorneys. Legal document preparation, case management, client intake, and more.`,
    keywords: `legal virtual assistant ${cityName}, law firm support ${cityName}, VA services ${stateName} attorneys`,
  };
}

export async function generateStaticParams() {
  return locations.usa.map((city) => ({
    city: city.city.toLowerCase().replace(/\s+/g, '-'),
  }));
}

export default function CityPage({ params }: Props) {
  const cityData = locations.usa.find(
    (c) => c.city.toLowerCase() === params.city.replace(/-/g, ' ').toLowerCase()
  );

  if (!cityData) {
    return (
      <main className="bg-ivory min-h-screen">
        <PageHeader
          label="City Not Found"
          title="Service Location"
          subtitle="This location is not currently available."
        />
      </main>
    );
  }

  const cityName = cityData.city;
  const stateName = cityData.state;
  const region = cityData.region;

  return (
    <main className="bg-ivory min-h-screen">
      <PageHeader
        label={`${cityName}, ${stateName}`}
        title={`Legal VA Services for ${cityName} & ${region}`}
        subtitle={`Dedicated virtual assistant support for ${cityName} law firms. Document preparation, case management, client intake, billing & administration.`}
      />

      <article className="max-w-5xl mx-auto px-16 py-20">
        <p className="text-lg text-text-mid font-300 mb-16 border-l-4 border-brass pl-8 pb-8 border-b border-brass/20">
          {cityName} attorneys face the same time-management challenges as firms everywhere. Overflowing inboxes. Docket management across multiple matters. Document organization that falls through cracks. Client communication delays. Billing and administrative overhead that steals billable hours. A dedicated VA changes everything.
        </p>

        <section className="mb-16 py-12 bg-charcoal/5 px-8 rounded-sm border-l-4 border-brass">
          <h2 className="font-serif text-3xl text-charcoal mb-6">{cityName} Legal Market</h2>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            <strong>Market Size:</strong> {cityName} is home to {cityData.lawyers.toLocaleString()} attorneys in {region}. The competition is real. Billing rates vary by specialty, market pressure, and client expectations.
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            <strong>Timezone:</strong> {cityData.timezone} — same-day communication with your VA, no international delays.
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300">
            <strong>What Wins:</strong> Firms that stay organized, respond to clients quickly, and track deadlines meticulously. A VA makes all three automatic.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-12">Services for {cityName} Attorneys</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <Link
                key={service.id}
                href={`/locations/usa/${params.city}/${service.slug}`}
                className="border-2 border-brass/30 rounded-sm p-6 hover:border-brass hover:bg-white/50 transition-all duration-300 group"
              >
                <div className="mb-4">
                  <h3 className="font-serif text-xl text-charcoal mb-2">{service.name}</h3>
                  <p className="text-sm text-brass font-600 mb-3">{service.roman}</p>
                </div>
                <p className="text-sm text-text-mid leading-relaxed">{service.description}</p>
                <p className="text-xs text-brass mt-4 group-hover:translate-x-1 transition-transform">View details →</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-16 p-10 bg-brass/15 border-2 border-brass rounded-sm">
          <h2 className="font-serif text-3xl text-charcoal mb-6">Why {cityName} Firms Choose Lawyer Capital VA</h2>
          <div className="space-y-4">
            <p className="text-base text-text-mid leading-relaxed font-300">
              <strong>Local Understanding:</strong> We know {cityName}'s legal market. Court systems. Bar association deadlines. Local filing procedures. Your VA is trained on your region's specifics.
            </p>
            <p className="text-base text-text-mid leading-relaxed font-300">
              <strong>ROI That Works:</strong> {cityName} paralegals cost ${cityData.paralegals.toLocaleString()}-${(cityData.paralegals * 1.3).toLocaleString()}/year. A Lawyer Capital VA costs $8,400-$15,600/year. That's 50-70% savings while you recover 10-25 billable hours/week.
            </p>
            <p className="text-base text-text-mid leading-relaxed font-300">
              <strong>Dedicated Support:</strong> Same VA every day. They learn your practice, your clients, your workflows. No rotation. No retraining. Continuity matters.
            </p>
            <p className="text-base text-text-mid leading-relaxed font-300">
              <strong>Confidentiality & Compliance:</strong> NDA-protected. Checkr background-verified. Your clients' information is as secure with us as with your own staff.
            </p>
          </div>
        </section>

        <section className="my-16 p-8 bg-charcoal text-white rounded-sm">
          <h2 className="font-serif text-3xl mb-4">Scale Your {cityName} Practice</h2>
          <p className="text-base text-white/70 leading-relaxed mb-6 font-300">
            Choose a service above to see exactly how a VA supports {cityName} attorneys. Or schedule a consultation to discuss your firm's specific needs.
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
