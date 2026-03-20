import { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import { locations } from '@/lib/legal-data';

export const metadata: Metadata = {
  title: 'Legal Virtual Assistant Services in the Middle East | Lawyer Capital VA',
  description: 'Specialized VA support for Middle East law firms. Dubai, Abu Dhabi, Doha, Riyadh, and more.',
  keywords: 'legal virtual assistant Middle East, law firm support UAE, legal VA services Gulf',
};

export default function MiddleEastPage() {
  const meCities = locations.middleEast;

  return (
    <main className="bg-ivory min-h-screen">
      <PageHeader
        label="Middle East"
        title="Legal VA Services for Middle East Law Firms"
        subtitle="Dubai to Doha to Riyadh. DIFC-compliant. Arabic-aware. Dedicated support."
      />

      <article className="max-w-5xl mx-auto px-16 py-20">
        <p className="text-lg text-text-mid font-300 mb-16 border-l-4 border-brass pl-8 pb-8 border-b border-brass/20">
          Middle East law firms operate in a complex regulatory environment. UAE firms navigate DIFC courts and Emirati law. Saudi firms manage jurisdiction-specific requirements. Every market has unique court procedures, filing systems, and compliance frameworks. A dedicated VA, trained on your jurisdiction's requirements, handles administrative work while you focus on legal practice.
        </p>

        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-12">Middle East Markets We Serve</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {meCities.map((city) => (
              <Link
                key={city.city}
                href={`/locations/middle-east/${city.city.toLowerCase().replace(/\s+/g, '-')}`}
                className="border-2 border-brass/30 rounded-sm p-6 hover:border-brass hover:bg-white/50 transition-all duration-300 group"
              >
                <h3 className="font-serif text-xl text-charcoal mb-2">{city.city}</h3>
                <p className="text-sm text-brass font-600 mb-2">{city.country}</p>
                <p className="text-sm text-text-mid">{city.court} • {city.currency}</p>
                <p className="text-xs text-brass mt-4 group-hover:translate-x-1 transition-transform">Market details →</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-16 py-12 bg-charcoal/5 px-8 rounded-sm border-l-4 border-brass">
          <h2 className="font-serif text-3xl text-charcoal mb-6">Why Middle East Firms Choose Lawyer Capital VA</h2>
          <div className="space-y-4">
            <p className="text-base text-text-mid leading-relaxed font-300">
              <strong>Jurisdiction-Specific Training:</strong> DIFC court procedures. Emirati law requirements. Saudi court processes. Qatar court systems. Your VA is trained on your jurisdiction's requirements, not generic legal administration.
            </p>
            <p className="text-base text-text-mid leading-relaxed font-300">
              <strong>Confidentiality & Professional Standards:</strong> Middle East law firms maintain strict client confidentiality. Your VA operates under NDA and maintains the same professional standards as your own staff.
            </p>
            <p className="text-base text-text-mid leading-relaxed font-300">
              <strong>Timezone Alignment:</strong> GST/AST business hours overlap with your firm's working day. Same-day response times. Real-time communication. No waiting for next morning's response.
            </p>
            <p className="text-base text-text-mid leading-relaxed font-300">
              <strong>Dedicated Support:</strong> Same VA every day. They learn your practice, your clients, your workflows. No rotation. Continuity matters in legal practice.
            </p>
          </div>
        </section>

        <section className="mb-16 p-10 bg-brass/15 border-2 border-brass rounded-sm">
          <h2 className="font-serif text-3xl text-charcoal mb-6">Middle East Market Context</h2>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            Middle East law firms operate in a dynamic market with significant growth. Billing rates vary by jurisdiction and practice area, but exceed most global markets. Administrative overhead—taken off your plate by a VA—is the difference between profit and loss at scale.
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300">
            A Lawyer Capital VA costs AED 30,600-46,800 annually (invoiced in USD). Recovering 15+ billable hours per week = AED 450,000+ in annual revenue recovery. Your VA investment pays for itself in the first month.
          </p>
        </section>

        <section className="my-16 p-8 bg-charcoal text-white rounded-sm">
          <h2 className="font-serif text-3xl mb-4">Expand Your Middle East Practice</h2>
          <p className="text-base text-white/70 leading-relaxed mb-6 font-300">
            Choose your jurisdiction above to see market-specific information and available services. Or schedule a consultation to discuss your firm's unique needs and compliance requirements.
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
