import { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import { locations } from '@/lib/legal-data';

export const metadata: Metadata = {
  title: 'Legal Virtual Assistant Services in APAC | Lawyer Capital VA',
  description: 'Specialized VA support for APAC law firms. Sydney, Melbourne, Auckland, Bangkok, and more.',
  keywords: 'legal virtual assistant APAC, law firm support Australia, legal VA services Asia Pacific',
};

export default function APACPage() {
  const apacCities = locations.apac;

  return (
    <main className="bg-ivory min-h-screen">
      <PageHeader
        label="Asia Pacific"
        title="Legal VA Services for APAC Law Firms"
        subtitle="Sydney to Auckland. Local Law Society compliant. Dedicated support across time zones."
      />

      <article className="max-w-5xl mx-auto px-16 py-20">
        <p className="text-lg text-text-mid font-300 mb-16 border-l-4 border-brass pl-8 pb-8 border-b border-brass/20">
          APAC law firms operate across multiple jurisdictions with different bar association requirements, court systems, and professional standards. Australia and New Zealand share common law traditions but have distinct regulatory frameworks. A dedicated VA, trained on your jurisdiction's requirements and operating during your business hours, handles administrative work while you focus on legal practice and client relationships.
        </p>

        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-12">APAC Markets We Serve</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {apacCities.map((city) => (
              <Link
                key={city.city}
                href={`/locations/apac/${city.city.toLowerCase().replace(/\s+/g, '-')}`}
                className="border-2 border-brass/30 rounded-sm p-6 hover:border-brass hover:bg-white/50 transition-all duration-300 group"
              >
                <h3 className="font-serif text-xl text-charcoal mb-2">{city.city}</h3>
                <p className="text-sm text-brass font-600 mb-2">{city.country}</p>
                <p className="text-sm text-text-mid">{city.regulator}</p>
                <p className="text-xs text-brass mt-4 group-hover:translate-x-1 transition-transform">Market details →</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-16 py-12 bg-charcoal/5 px-8 rounded-sm border-l-4 border-brass">
          <h2 className="font-serif text-3xl text-charcoal mb-6">Why APAC Firms Choose Lawyer Capital VA</h2>
          <div className="space-y-4">
            <p className="text-base text-text-mid leading-relaxed font-300">
              <strong>Law Society Compliance:</strong> Law Society of NSW, Victoria, Queensland, and New Zealand each have specific professional conduct standards. Your VA operates under those standards with full NDA protection and professional oversight.
            </p>
            <p className="text-base text-text-mid leading-relaxed font-300">
              <strong>Time Zone Alignment:</strong> APAC business hours mean your VA is working during your business day. Same-day response times. Real-time communication. No waiting for next-day emails or communication delays.
            </p>
            <p className="text-base text-text-mid leading-relaxed font-300">
              <strong>Confidentiality & Professional Standards:</strong> Australian and New Zealand law firms maintain strict client confidentiality. Your VA operates under attorney-client privilege with full professional oversight and NDA protection.
            </p>
            <p className="text-base text-text-mid leading-relaxed font-300">
              <strong>Dedicated Support:</strong> Same VA every day. They learn your practice, your clients, your workflows. No rotation. Continuity matters in legal practice.
            </p>
          </div>
        </section>

        <section className="mb-16 p-10 bg-brass/15 border-2 border-brass rounded-sm">
          <h2 className="font-serif text-3xl text-charcoal mb-6">APAC Market Context</h2>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            APAC law firms operate at competitive billing rates across all practice areas. Administrative overhead steals time from billable work and client development. A VA handles 15-20 hours per week of administrative tasks, recovering AUD/NZD 120,000+ annually in billable hours.
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300">
            A Lawyer Capital VA costs AUD 10,400-15,600 annually (invoiced in USD, converted to local currency). Billing rates in APAC markets exceed this cost 10-30x over. Your VA investment pays for itself in the first month.
          </p>
        </section>

        <section className="my-16 p-8 bg-charcoal text-white rounded-sm">
          <h2 className="font-serif text-3xl mb-4">Expand Your APAC Practice</h2>
          <p className="text-base text-white/70 leading-relaxed mb-6 font-300">
            Choose your city above to see market-specific information and available services. Or schedule a consultation to discuss your firm's unique needs and Law Society compliance requirements.
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
