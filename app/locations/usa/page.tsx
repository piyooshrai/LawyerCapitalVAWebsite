import { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'Legal Virtual Assistant Services Across the USA | Lawyer Capital VA',
  description: 'Specialized legal VA services nationwide. Find your state and local service areas.',
  keywords: 'legal virtual assistant services USA, law firm support nationwide, legal VA by state',
};

export default function USAPage() {
  const states = [
    {
      name: 'Virginia',
      href: '/locations/virginia',
      description: 'Richmond, Arlington, Virginia Beach, and more',
      cities: 3,
    },
  ];

  return (
    <main className="bg-ivory min-h-screen">
      <PageHeader
        label="United States"
        title="Legal VA Services Nationwide"
        subtitle="Specialized virtual assistant support for law firms across the country. Find your state and city."
      />

      <article className="max-w-5xl mx-auto px-16 py-20">
        <p className="text-lg text-text-mid font-300 mb-16 border-l-4 border-brass pl-8 pb-8 border-b border-brass/20">
          We specialize in understanding regional legal markets. Billing rates differ by region. Practice area opportunities vary. Client expectations are regional. Our VAs are trained on the nuances of your local market.
        </p>

        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-12">Service States</h2>

          <div className="grid grid-cols-1 gap-8">
            {states.map((state) => (
              <Link
                key={state.name}
                href={state.href}
                className="border-2 border-brass/30 rounded-sm p-8 hover:border-brass hover:bg-white/50 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-serif text-2xl text-charcoal mb-1">
                      {state.name}
                    </h3>
                    <p className="text-sm text-brass font-600">{state.cities} service areas</p>
                  </div>
                  <div className="text-brass text-2xl group-hover:translate-x-2 transition-transform">→</div>
                </div>
                <p className="text-base text-text-mid font-300">{state.description}</p>
              </Link>
            ))}
          </div>

          <div className="mt-12 p-8 bg-charcoal/5 rounded-sm border border-brass/20">
            <h3 className="font-serif text-xl text-charcoal mb-4">Coming Soon</h3>
            <p className="text-base text-text-mid font-300">
              We're expanding to additional states. If you'd like specialized VA support in your state, reach out and let's discuss your market's opportunities.
            </p>
          </div>
        </section>

        <section className="mb-16 py-12 bg-charcoal/5 px-8 rounded-sm border-l-4 border-brass">
          <h2 className="font-serif text-3xl text-charcoal mb-6">How We Work Across Markets</h2>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            <strong>Market Research:</strong> We understand each state's legal landscape—billing rates, practice area opportunities, court procedures, local rules.
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            <strong>Specialized Training:</strong> Your VA is trained on your state's laws, court procedures, and practice area specifics. They're not generic—they're specialized for your market.
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            <strong>Dedicated Support:</strong> Same VA every day. They know your practice, your clients, your workflows. Continuity matters.
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300">
            <strong>Confidentiality:</strong> NDA-protected. Background-verified. Attorney-client privilege respected everywhere. Your clients' information is always secure.
          </p>
        </section>

        <section className="my-16 p-8 bg-charcoal text-white rounded-sm">
          <h2 className="font-serif text-3xl mb-4">Find Your Local Support</h2>
          <p className="text-base text-white/70 leading-relaxed mb-6 font-300">
            Click on your state above to see available service areas and market-specific information. Or schedule a consultation to discuss your practice's needs.
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
