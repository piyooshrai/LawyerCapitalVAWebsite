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
  const cityData = locations.uk.find(
    (c) => c.city.toLowerCase() === params.city.replace(/-/g, ' ').toLowerCase()
  );

  const cityName = cityData?.city || params.city.replace(/-/g, ' ');

  return {
    title: `Legal Virtual Assistant Services in ${cityName} | Lawyer Capital VA`,
    description: `Specialized VA support for ${cityName} solicitors. SRA-compliant. GDPR-secure. Confidential support.`,
    keywords: `legal virtual assistant ${cityName}, solicitor support ${cityName}, legal VA services ${cityName}`,
  };
}

export async function generateStaticParams() {
  return locations.uk.map((city) => ({
    city: city.city.toLowerCase().replace(/\s+/g, '-'),
  }));
}

export default function UKCityPage({ params }: Props) {
  const cityData = locations.uk.find(
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

  return (
    <main className="bg-ivory min-h-screen">
      <PageHeader
        label={cityName}
        title={`Legal VA Services for ${cityName} Solicitors`}
        subtitle={`Dedicated virtual assistant support for ${cityName} law firms. Document preparation, case management, client intake, billing & administration.`}
      />

      <article className="max-w-5xl mx-auto px-16 py-20">
        <p className="text-lg text-text-mid font-300 mb-16 border-l-4 border-brass pl-8 pb-8 border-b border-brass/20">
          {cityName} solicitors manage the same administrative burden as every other firm. Fee earner time wasted on intake, document organization, docket management, and client communication. SRA rules require you maintain control of confidential information—but that doesn't mean you handle it yourself. A dedicated VA, operating under your supervision and bound by NDA, increases efficiency without compromising privilege.
        </p>

        <section className="mb-16 py-12 bg-charcoal/5 px-8 rounded-sm border-l-4 border-brass">
          <h2 className="font-serif text-3xl text-charcoal mb-6">{cityName} Legal Market</h2>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            <strong>Regulator:</strong> {cityData.regulator} — your VA operates within SRA Handbook standards for supervision, confidentiality, and professional conduct.
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            <strong>Market Size:</strong> {cityName} is home to {cityData.lawyers.toLocaleString()} solicitors and barristers. Competition for clients is intense. Efficiency is a competitive advantage.
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300">
            <strong>What Wins:</strong> Firms that respond to clients faster, organize documents better, and never miss deadlines. A VA makes all three automatic while you focus on legal work.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-12">Services for {cityName} Solicitors</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <Link
                key={service.id}
                href={`/locations/uk/${params.city}/${service.slug}`}
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
              <strong>SRA-Compliant:</strong> Your VA operates under your supervision, bound by NDA, trained on privilege and confidentiality. No compromise to your professional obligations.
            </p>
            <p className="text-base text-text-mid leading-relaxed font-300">
              <strong>GDPR-Secure:</strong> Data encrypted. Access controlled. Retention policies followed. Your client data protected to UK standards.
            </p>
            <p className="text-base text-text-mid leading-relaxed font-300">
              <strong>ROI That Works:</strong> {cityName} paralegals cost £35,000-£45,000/year. A Lawyer Capital VA costs £5,600-£10,400/year. That's 50-70% savings while you recover 10-25 billable hours/week.
            </p>
            <p className="text-base text-text-mid leading-relaxed font-300">
              <strong>Dedicated Support:</strong> Same VA every day. They learn your practice, your clients, your workflows. No rotation. Continuity matters.
            </p>
          </div>
        </section>

        <section className="my-16 p-8 bg-charcoal text-white rounded-sm">
          <h2 className="font-serif text-3xl mb-4">Scale Your {cityName} Practice</h2>
          <p className="text-base text-white/70 leading-relaxed mb-6 font-300">
            Choose a service above to see exactly how a VA supports {cityName} solicitors. Or schedule a consultation to discuss your firm's specific needs and SRA compliance requirements.
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
