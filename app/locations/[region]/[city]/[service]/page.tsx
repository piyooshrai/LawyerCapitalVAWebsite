import { Metadata } from 'next';
import Link from 'next/link';
import { locations, services } from '@/lib/legal-data';

type LocationPageProps = {
  params: {
    region: string;
    city: string;
    service: string;
  };
};

export async function generateStaticParams() {
  const params: Array<{ region: string; city: string; service: string }> = [];

  // USA locations
  locations.usa.forEach((loc) => {
    services.forEach((svc) => {
      params.push({
        region: 'usa',
        city: loc.city.toLowerCase().replace(/\s+/g, '-'),
        service: svc.slug,
      });
    });
  });

  // UK locations
  locations.uk.forEach((loc) => {
    services.forEach((svc) => {
      params.push({
        region: 'uk',
        city: loc.city.toLowerCase(),
        service: svc.slug,
      });
    });
  });

  // Middle East
  locations.middleEast.forEach((loc) => {
    services.forEach((svc) => {
      params.push({
        region: 'middle-east',
        city: loc.city.toLowerCase(),
        service: svc.slug,
      });
    });
  });

  // APAC
  locations.apac.forEach((loc) => {
    services.forEach((svc) => {
      params.push({
        region: 'apac',
        city: loc.city.toLowerCase(),
        service: svc.slug,
      });
    });
  });

  return params;
}

export function generateMetadata({ params }: LocationPageProps): Metadata {
  const cityName = params.city.replace(/-/g, ' ').toUpperCase();
  const serviceName = services.find((s) => s.slug === params.service)?.name || 'VA';
  const keyword = `${serviceName.toLowerCase()} virtual assistant ${cityName}`;

  return {
    title: `${serviceName} Virtual Assistant in ${cityName} | Lawyer Capital VA`,
    description: `Dedicated, NDA-protected ${serviceName.toLowerCase()} support for law firms in ${cityName}. Legal VA services from Lawyer Capital.`,
    keywords: keyword,
  };
}

export default function LocationServicePage({ params }: LocationPageProps) {
  const service = services.find((s) => s.slug === params.service);
  const cityName = params.city.replace(/-/g, ' ').toUpperCase();

  if (!service) {
    return <div className="pt-32 text-center">Service not found</div>;
  }

  return (
    <main className="pt-32 bg-ivory min-h-screen">
      <article className="max-w-4xl mx-auto px-16 py-20">
        <h1 className="font-serif text-5xl text-charcoal mb-4 leading-tight">
          {service.name} in {cityName}
        </h1>

        <p className="text-lg text-text-mid font-300 mb-12">
          {service.description.split('—')[0].trim()}. Serving law firms across {cityName} with dedicated, NDA-protected virtual assistant support.
        </p>

        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-6">What We Handle in {cityName}</h2>
          <ul className="space-y-3">
            {service.tasks.slice(0, 5).map((task) => (
              <li key={task} className="flex gap-3">
                <span className="text-brass font-700">→</span>
                <span className="text-base text-text-mid font-300">{task}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-6">Why {cityName} Firms Choose Us</h2>
          <p className="text-base text-text-mid leading-relaxed font-300">
            {cityName} law firms trust Lawyer Capital VA for confidentiality, expertise, and reliability. Same dedicated person every day. NDA-protected. Checkr verified. Month-to-month flexibility.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-6">Tools We Support</h2>
          <div className="grid grid-cols-2 gap-4">
            {service.tools.slice(0, 4).map((tool) => (
              <div key={tool} className="p-4 border border-text-light/10 text-center text-sm text-charcoal">
                {tool}
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-serif text-3xl text-charcoal mb-6 mt-12">Ready to Talk?</h2>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-8">
            Schedule a 15-minute consultation. We'll assess your {cityName} firm's needs and match you with a dedicated VA within 48 hours.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-brass text-white text-xs font-600 tracking-wider uppercase hover:bg-brass-light transition-all"
          >
            Schedule Consultation
          </Link>
        </section>
      </article>
    </main>
  );
}
