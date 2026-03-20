import { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import { locations } from '@/lib/legal-data';

export const metadata: Metadata = {
  title: 'Legal Virtual Assistant Services in the UK | Lawyer Capital VA',
  description: 'Specialized VA support for UK solicitors and barristers. London, Manchester, Edinburgh, and more.',
  keywords: 'legal virtual assistant UK, solicitor support UK, legal VA services United Kingdom',
};

export default function UKPage() {
  const ukCities = locations.uk;

  return (
    <main className="bg-ivory min-h-screen">
      <PageHeader
        label="United Kingdom"
        title="Legal VA Services for UK Law Firms"
        subtitle="London to Manchester to Edinburgh. SRA-compliant. Confidentiality assured. Dedicated support."
      />

      <article className="max-w-5xl mx-auto px-16 py-20">
        <p className="text-lg text-text-mid font-300 mb-16 border-l-4 border-brass pl-8 pb-8 border-b border-brass/20">
          UK solicitors and barristers operate under SRA regulation with strict confidentiality requirements. Your VA understands attorney-client privilege under English law, complies with SRA handling standards, and respects data protection under GDPR. Remote support doesn't mean reduced diligence—it means increased efficiency without compromising your ethical obligations.
        </p>

        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-12">UK Cities We Serve</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ukCities.map((city) => (
              <Link
                key={city.city}
                href={`/locations/uk/${city.city.toLowerCase().replace(/\s+/g, '-')}`}
                className="border-2 border-brass/30 rounded-sm p-6 hover:border-brass hover:bg-white/50 transition-all duration-300 group"
              >
                <h3 className="font-serif text-xl text-charcoal mb-2">{city.city}</h3>
                <p className="text-sm text-brass font-600 mb-2">{city.regulator}</p>
                <p className="text-sm text-text-mid">Market-specific VA support →</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-16 py-12 bg-charcoal/5 px-8 rounded-sm border-l-4 border-brass">
          <h2 className="font-serif text-3xl text-charcoal mb-6">Why UK Firms Choose Lawyer Capital VA</h2>
          <div className="space-y-4">
            <p className="text-base text-text-mid leading-relaxed font-300">
              <strong>SRA Compliance:</strong> We understand SRA Handbook requirements for confidentiality, data handling, and remote supervision. Your VA operates within the same ethical framework as your own staff.
            </p>
            <p className="text-base text-text-mid leading-relaxed font-300">
              <strong>GDPR & Data Protection:</strong> All VA work complies with UK GDPR and Data Protection Act 2018. Encryption. Secure file transfer. Access controls. Your client data is protected to UK standards.
            </p>
            <p className="text-base text-text-mid leading-relaxed font-300">
              <strong>Attorney-Client Privilege:</strong> English law protects communications between solicitor and client, and between solicitor and VA (when acting under the solicitor's direction). Your privilege isn't compromised—it's maintained.
            </p>
            <p className="text-base text-text-mid leading-relaxed font-300">
              <strong>Dedicated Support:</strong> Same VA every day. They learn your practice, your clients, your workflows. No turnover. No retraining. Continuity matters under SRA oversight.
            </p>
          </div>
        </section>

        <section className="mb-16 p-10 bg-brass/15 border-2 border-brass rounded-sm">
          <h2 className="font-serif text-3xl text-charcoal mb-6">UK Market Context</h2>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            UK paralegals earn £35,000-£45,000 annually. A Lawyer Capital VA costs £5,600-£10,400 annually (invoiced in USD, paid in GBP at current rates). That's 50-70% savings while you recover 10-25 billable hours per week.
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300">
            UK solicitors bill £150-400+ per hour depending on seniority and practice area. Recovering 15 billable hours per week = £117,000-312,000 annually in revenue recovery. Your VA pays for itself within weeks.
          </p>
        </section>

        <section className="my-16 p-8 bg-charcoal text-white rounded-sm">
          <h2 className="font-serif text-3xl mb-4">Build Your UK Practice</h2>
          <p className="text-base text-white/70 leading-relaxed mb-6 font-300">
            Choose your city above to see market-specific information and available services. Or schedule a consultation to discuss your firm's unique needs and SRA compliance requirements.
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
