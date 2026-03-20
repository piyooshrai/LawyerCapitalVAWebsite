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
  const cityData = locations.uk.find(
    (c) => c.city.toLowerCase() === params.city.replace(/-/g, ' ').toLowerCase()
  );
  const serviceData = services.find((s) => s.slug === params.service);

  const cityName = cityData?.city || params.city.replace(/-/g, ' ');
  const serviceName = serviceData?.name || params.service.replace(/-/g, ' ');

  return {
    title: `${serviceName} Virtual Assistant ${cityName} | Lawyer Capital VA`,
    description: `Expert ${serviceData?.name.toLowerCase()} support for ${cityName} solicitors. SRA-compliant. Dedicated VA support.`,
    keywords: `${serviceData?.name.toLowerCase()} virtual assistant ${cityName}, legal ${params.service.replace(/-/g, ' ')} ${cityName}, VA services UK`,
  };
}

export async function generateStaticParams() {
  const params = [];
  for (const city of locations.uk) {
    for (const service of services) {
      params.push({
        city: city.city.toLowerCase().replace(/\s+/g, '-'),
        service: service.slug,
      });
    }
  }
  return params;
}

export default function UKCityServicePage({ params }: Props) {
  const cityData = locations.uk.find(
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
  const serviceName = serviceData.name;

  return (
    <main className="bg-ivory min-h-screen">
      <PageHeader
        label={cityName}
        title={`${serviceName} Virtual Assistant for ${cityName}`}
        subtitle={`Dedicated VA support for ${serviceName.toLowerCase()} tasks. SRA-compliant. GDPR-secure. Recover fee-earning hours.`}
      />

      <article className="max-w-5xl mx-auto px-16 py-20">
        <p className="text-lg text-text-mid font-300 mb-16 border-l-4 border-brass pl-8 pb-8 border-b border-brass/20">
          {cityName} solicitors spend too much billable time on administrative tasks. Intake coordination. Document organization. Docket management. Client communication. Each hour spent on these tasks is an hour not spent on fee-earning work. A VA, working under your supervision and bound by NDA, handles these tasks while you focus on legal matters.
        </p>

        <section className="mb-16 py-12 bg-charcoal/5 px-8 rounded-sm border-l-4 border-brass">
          <h2 className="font-serif text-3xl text-charcoal mb-6">The {serviceName} Challenge in {cityName}</h2>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            {cityName} practices manage the same {serviceName.toLowerCase()} challenges as every other firm. The difference is efficiency and focus. Solicitors who delegate routine administrative work to a supervised VA recover time for billable hours, client meetings, and strategic work.
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300">
            Your VA operates under SRA supervision standards. Same confidentiality requirements as your own staff. NDA-protected. Attorney-client privilege maintained. Your professional obligations don't change—your workload decreases.
          </p>
        </section>

        <section className="mb-16 p-10 bg-brass/15 border-2 border-brass rounded-sm">
          <h2 className="font-serif text-3xl text-charcoal mb-6">The ROI for {cityName} Solicitors</h2>
          <div className="grid grid-cols-3 gap-6 mb-6">
            <div className="text-center">
              <div className="font-serif text-4xl text-brass mb-2">15-25</div>
              <div className="text-sm text-text-mid font-500">Fee-Earning Hours Recovered/Week</div>
            </div>
            <div className="text-center">
              <div className="font-serif text-4xl text-brass mb-2">£30K+</div>
              <div className="text-sm text-text-mid font-500">Annual Salary Savings</div>
            </div>
            <div className="text-center">
              <div className="font-serif text-4xl text-brass mb-2">£117K+</div>
              <div className="text-sm text-text-mid font-500">Annual Revenue from Recovery</div>
            </div>
          </div>
          <p className="text-base text-text-mid leading-relaxed font-300">
            A VA in {cityName} costs £5,600-£10,400 annually. Recovering just 15 fee-earning hours per week at your market rate of £200-300/hour = £117,000-234,000 in annual revenue recovery. Your VA pays for itself immediately.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-8">FAQ</h2>

          <details className="border-l-4 border-brass/30 pl-6 mb-6 group cursor-pointer">
            <summary className="text-lg font-500 text-charcoal py-4 group-open:text-brass transition-colors">
              How does SRA supervision work with a VA?
            </summary>
            <div className="pb-4 text-base text-text-mid font-300 leading-relaxed">
              Your VA operates under your direct supervision. You remain responsible for the work they perform. They handle routine administrative tasks under your direction. SRA Handbook Chapter 7 (Management Services) allows this—as long as the VA is NDA-protected and you maintain oversight. We handle the compliance; you maintain control.
            </div>
          </details>

          <details className="border-l-4 border-brass/30 pl-6 mb-6 group cursor-pointer">
            <summary className="text-lg font-500 text-charcoal py-4 group-open:text-brass transition-colors">
              Does a VA in the US understand UK law?
            </summary>
            <div className="pb-4 text-base text-text-mid font-300 leading-relaxed">
              Our VAs don't practice law—they don't need to know UK law in depth. They learn your practice workflows, document templates, court procedures, and case management systems. For substantive legal work, they follow your guidance. Administrative work doesn't require legal knowledge—it requires precision and confidentiality. Both are guaranteed.
            </div>
          </details>

          <details className="border-l-4 border-brass/30 pl-6 mb-6 group cursor-pointer">
            <summary className="text-lg font-500 text-charcoal py-4 group-open:text-brass transition-colors">
              Is GDPR compliance guaranteed?
            </summary>
            <div className="pb-4 text-base text-text-mid font-300 leading-relaxed">
              Yes. All client data is encrypted in transit and at rest. Access is limited to your VA. Data retention policies are documented and followed. We provide a Data Processing Addendum (DPA) for your records. You remain the data controller; we act as your processor. Full UK GDPR compliance.
            </div>
          </details>

          <details className="border-l-4 border-brass/30 pl-6 group cursor-pointer">
            <summary className="text-lg font-500 text-charcoal py-4 group-open:text-brass transition-colors">
              What about confidentiality with a remote VA?
            </summary>
            <div className="pb-4 text-base text-text-mid font-300 leading-relaxed">
              Your VA signs an NDA before accessing any client information. Attorney-client privilege is maintained—communications between you and your VA, acting under your direction, are protected privilege. This is standard in UK law. The VA isn't a lawyer, but they work under your supervision and maintain the same confidentiality standards as your office manager.
            </div>
          </details>
        </section>

        <section className="my-16 p-8 bg-charcoal text-white rounded-sm">
          <h2 className="font-serif text-3xl mb-4">Ready to Add {serviceName} Support?</h2>
          <p className="text-base text-white/70 leading-relaxed mb-6 font-300">
            See how a dedicated VA transforms {serviceName} for {cityName} solicitors. Schedule a consultation to discuss SRA compliance, GDPR requirements, and your firm's specific needs.
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
