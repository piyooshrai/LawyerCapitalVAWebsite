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
  const cityData = locations.apac.find(
    (c) => c.city.toLowerCase() === params.city.replace(/-/g, ' ').toLowerCase()
  );

  const cityName = cityData?.city || params.city.replace(/-/g, ' ');
  const country = cityData?.country || '';

  return {
    title: `Legal Virtual Assistant Services in ${cityName}, ${country} | Lawyer Capital VA`,
    description: `Specialized VA support for ${cityName} law firms. Dedicated support during your business hours.`,
    keywords: `legal virtual assistant ${cityName}, law firm support ${country}, legal VA services ${cityName}`,
  };
}

export async function generateStaticParams() {
  return locations.apac.map((city) => ({
    city: city.city.toLowerCase().replace(/\s+/g, '-'),
  }));
}

export default function APACCityPage({ params }: Props) {
  const cityData = locations.apac.find(
    (c) => c.city.toLowerCase() === params.city.replace(/-/g, ' ').toLowerCase()
  );

  if (!cityData) {
    return (
      <main className="bg-ivory min-h-screen">
        <PageHeader label="City Not Found" title="Service Location" subtitle="This location is not currently available." />
      </main>
    );
  }

  const cityName = cityData.city;
  const country = cityData.country;
  const regulator = cityData.regulator;

  return (
    <main className="bg-ivory min-h-screen">
      <PageHeader
        label={`${cityName}, ${country}`}
        title={`Legal VA Services for ${cityName} Law Firms`}
        subtitle={`Dedicated virtual assistant support for ${cityName} practices. ${regulator} compliance. Document preparation, case management, client intake, billing & administration.`}
      />

      <article className="max-w-5xl mx-auto px-16 py-20">
        <p className="text-lg text-text-mid font-300 mb-16 border-l-4 border-brass pl-8 pb-8 border-b border-brass/20">
          {cityName} law firms compete in a sophisticated market with high billing rates and premium client expectations. Administrative work—intake coordination, document organization, docket management, client communication—steals time from billable hours. A dedicated VA, trained on {regulator} requirements and working during your business hours, handles these tasks while you focus on client relationships and practice growth.
        </p>

        <section className="mb-16 py-12 bg-charcoal/5 px-8 rounded-sm border-l-4 border-brass">
          <h2 className="font-serif text-3xl text-charcoal mb-6">{cityName} Legal Market</h2>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            <strong>Regulator:</strong> {regulator} — your VA operates within professional conduct standards and confidentiality requirements specific to {country}.
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            <strong>Timezone:</strong> {cityData.timezone} — same-day response times, real-time communication, no international delays.
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300">
            <strong>What Wins:</strong> Firms that stay organized, respond to clients quickly, and never miss court deadlines. A VA makes all three automatic.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-12">Services for {cityName} Law Firms</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <Link
                key={service.id}
                href={`/locations/apac/${params.city}/${service.slug}`}
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
              <strong>Law Society Compliance:</strong> Your VA operates within {regulator} professional conduct standards. NDA-protected. Confidentiality maintained. Attorney-client privilege respected.
            </p>
            <p className="text-base text-text-mid leading-relaxed font-300">
              <strong>Time Zone Alignment:</strong> Your VA works during {cityName}'s business hours. Same-day response. Real-time communication. No waiting for next morning.
            </p>
            <p className="text-base text-text-mid leading-relaxed font-300">
              <strong>ROI That Works:</strong> {cityName} practices bill at premium rates. Recovering 15-25 billable hours per week = AUD/NZD 120,000+ annual revenue recovery. Your VA pays for itself in weeks.
            </p>
            <p className="text-base text-text-mid leading-relaxed font-300">
              <strong>Dedicated Support:</strong> Same VA every day. They learn your practice, your clients, your workflows. No rotation. Continuity matters.
            </p>
          </div>
        </section>

        <section className="my-16 p-8 bg-charcoal text-white rounded-sm">
          <h2 className="font-serif text-3xl mb-4">Scale Your {cityName} Practice</h2>
          <p className="text-base text-white/70 leading-relaxed mb-6 font-300">
            Choose a service above to see exactly how a VA supports {cityName} law firms. Or schedule a consultation to discuss your firm's specific needs and {regulator} compliance requirements.
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
