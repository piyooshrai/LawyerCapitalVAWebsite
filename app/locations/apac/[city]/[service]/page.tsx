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
  const cityData = locations.apac.find(
    (c) => c.city.toLowerCase() === params.city.replace(/-/g, ' ').toLowerCase()
  );
  const serviceData = services.find((s) => s.slug === params.service);

  const cityName = cityData?.city || params.city.replace(/-/g, ' ');
  const serviceName = serviceData?.name || params.service.replace(/-/g, ' ');

  return {
    title: `${serviceName} Virtual Assistant ${cityName} | Lawyer Capital VA`,
    description: `Expert ${serviceData?.name.toLowerCase()} support for ${cityName} law firms. Dedicated VA handling ${serviceName.toLowerCase()} tasks.`,
    keywords: `${serviceData?.name.toLowerCase()} virtual assistant ${cityName}, legal ${params.service.replace(/-/g, ' ')} ${cityName}, VA services`,
  };
}

export async function generateStaticParams() {
  const params = [];
  for (const city of locations.apac) {
    for (const service of services) {
      params.push({
        city: city.city.toLowerCase().replace(/\s+/g, '-'),
        service: service.slug,
      });
    }
  }
  return params;
}

export default function APACCityServicePage({ params }: Props) {
  const cityData = locations.apac.find(
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
  const country = cityData.country;
  const serviceName = serviceData.name;
  const regulator = cityData.regulator;

  return (
    <main className="bg-ivory min-h-screen">
      <PageHeader
        label={`${cityName}, ${country}`}
        title={`${serviceName} Virtual Assistant for ${cityName}`}
        subtitle={`Dedicated VA support for ${serviceName.toLowerCase()} tasks. ${regulator} compliance. Recover billable hours.`}
      />

      <article className="max-w-5xl mx-auto px-16 py-20">
        <p className="text-lg text-text-mid font-300 mb-16 border-l-4 border-brass pl-8 pb-8 border-b border-brass/20">
          {cityName} law firms operate at premium billing rates where every hour counts. Administrative overhead—intake, document organization, docket management, client communication—steals time from billable work. A dedicated VA, trained on {regulator} requirements and working during your business hours, handles these tasks while you focus on legal work and client development.
        </p>

        <section className="mb-16 py-12 bg-charcoal/5 px-8 rounded-sm border-l-4 border-brass">
          <h2 className="font-serif text-3xl text-charcoal mb-6">The {serviceName} Advantage in {cityName}</h2>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            {cityName} practices that win don't work harder—they're organized. They have systems. They have people managing those systems. A dedicated VA becomes your operations engine, handling administrative work while you focus on fee-earning hours and client relationships.
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300">
            Your VA operates under {regulator} professional standards, bound by NDA, trained on {country}'s legal requirements. Not a contractor—an extension of your firm.
          </p>
        </section>

        <section className="mb-16 p-10 bg-brass/15 border-2 border-brass rounded-sm">
          <h2 className="font-serif text-3xl text-charcoal mb-6">The ROI for {cityName}</h2>
          <div className="grid grid-cols-3 gap-6 mb-6">
            <div className="text-center">
              <div className="font-serif text-4xl text-brass mb-2">15-25</div>
              <div className="text-sm text-text-mid font-500">Billable Hours Recovered/Week</div>
            </div>
            <div className="text-center">
              <div className="font-serif text-4xl text-brass mb-2">{cityData.currency}</div>
              <div className="text-sm text-text-mid font-500">Invoicing in {cityData.currency}</div>
            </div>
            <div className="text-center">
              <div className="font-serif text-4xl text-brass mb-2">Month 1</div>
              <div className="text-sm text-text-mid font-500">ROI Breakeven</div>
            </div>
          </div>
          <p className="text-base text-text-mid leading-relaxed font-300">
            A VA in {cityName} costs {cityData.currency} 10,400-15,600 annually (invoiced in USD). {cityName} practices bill at AUD/NZD 200-500+ per hour. Recovering just 15 billable hours per week = {cityData.currency} 120,000+ in annual revenue recovery. Your VA pays for itself in the first month.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-8">FAQ</h2>

          <details className="border-l-4 border-brass/30 pl-6 mb-6 group cursor-pointer">
            <summary className="text-lg font-500 text-charcoal py-4 group-open:text-brass transition-colors">
              How does a VA handle {regulator} compliance?
            </summary>
            <div className="pb-4 text-base text-text-mid font-300 leading-relaxed">
              Your VA is trained on {regulator} professional conduct standards and {country} legal requirements. They don't practice law—they follow your guidance and manage administrative work within professional standards. For complex legal questions, they route to you. For routine filing, intake, and docket management, they handle it independently.
            </div>
          </details>

          <details className="border-l-4 border-brass/30 pl-6 mb-6 group cursor-pointer">
            <summary className="text-lg font-500 text-charcoal py-4 group-open:text-brass transition-colors">
              What about confidentiality in {cityName}?
            </summary>
            <div className="pb-4 text-base text-text-mid font-300 leading-relaxed">
              Your VA signs an NDA before accessing any client information. Professional confidentiality is maintained to {regulator} standards. Attorney-client privilege is preserved—communications between you and your VA, acting under your direction, are protected under {country} law. Your VA operates with the same professional obligations as your own office staff.
            </div>
          </details>

          <details className="border-l-4 border-brass/30 pl-6 mb-6 group cursor-pointer">
            <summary className="text-lg font-500 text-charcoal py-4 group-open:text-brass transition-colors">
              How do you handle timezone differences?
            </summary>
            <div className="pb-4 text-base text-text-mid font-300 leading-relaxed">
              Your VA works during {cityData.timezone} business hours, which aligns with {cityName}'s working day. Same-day response times. Real-time communication. No waiting for next-day emails. Your VA is available when you need them.
            </div>
          </details>

          <details className="border-l-4 border-brass/30 pl-6 group cursor-pointer">
            <summary className="text-lg font-500 text-charcoal py-4 group-open:text-brass transition-colors">
              Can a VA handle billing and trust accounts in {country}?
            </summary>
            <div className="pb-4 text-base text-text-mid font-300 leading-relaxed">
              Yes. Your VA can manage time entry, invoice preparation, expense tracking, and trust account reconciliation. For complex accounting, you work with a bookkeeper or accountant. But the VA handles 70% of the administrative work, freeing your time for billable hours and client work.
            </div>
          </details>
        </section>

        <section className="my-16 p-8 bg-charcoal text-white rounded-sm">
          <h2 className="font-serif text-3xl mb-4">Ready to Add {serviceName} Support?</h2>
          <p className="text-base text-white/70 leading-relaxed mb-6 font-300">
            See how a dedicated VA transforms {serviceName} for {cityName} law firms. Schedule a consultation to discuss {regulator} compliance, your firm's specific needs, and how to get started.
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
