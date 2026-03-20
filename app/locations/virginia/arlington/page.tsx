import { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'Legal Virtual Assistant Services in Arlington, VA | Lawyer Capital VA',
  description: 'Arlington law firm support. Specialized VA services for immigration, corporate, litigation, and more.',
  keywords: 'virtual assistant Arlington VA, law firm support Arlington, legal VA services Northern Virginia',
};

export default function ArlingtonPage() {
  return (
    <main className="bg-ivory min-h-screen">
      <PageHeader
        label="Arlington, Virginia"
        title="Legal VA Support for Arlington's Competitive Market"
        subtitle="Immigration, corporate law, litigation, real estate, family law. Arlington attorneys need efficiency. We deliver it."
      />

      <article className="max-w-5xl mx-auto px-16 py-20">
        <p className="text-lg text-text-mid font-300 mb-16 border-l-4 border-brass pl-8 pb-8 border-b border-brass/20">
          Arlington's legal market is one of the most competitive in the nation. High billing rates ($250-500+/hour). Demanding clients. Complex cases. Your competitive advantage isn't experience—it's efficiency. A VA who handles administrative work gives you 15-25 more billable hours per week.
        </p>

        <section className="mb-16 py-12 bg-charcoal/5 px-8 rounded-sm border-l-4 border-brass">
          <h2 className="font-serif text-3xl text-charcoal mb-6">Why Arlington Practices Hire VAs</h2>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            Arlington attorneys bill at premium rates. Every hour you spend on administrative work is an hour you're not billing. Discovery organization. Document management. Client communication. Email coordination. These aren't "nice to haves"—they're the difference between $300k and $500k annual revenue.
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300">
            Your VA handles it. You bill. That's the formula. That's why every top Arlington firm has one.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-8">Practice Areas Thriving in Arlington</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-xl text-charcoal mb-3">Immigration Law</h3>
              <p className="text-base text-text-mid font-300">Arlington has massive immigration practices handling visa processing, employment-based immigration, and family-based cases. All require deadline precision and international coordination.</p>
            </div>

            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-xl text-charcoal mb-3">Corporate Law</h3>
              <p className="text-base text-text-mid font-300">Arlington is headquarters for dozens of tech companies, defense contractors, and consulting firms. M&A, corporate transactions, securities work—all generating high-value coordination work.</p>
            </div>

            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-xl text-charcoal mb-3">Litigation</h3>
              <p className="text-base text-text-mid font-300">Commercial litigation, securities litigation, employment litigation. Complex discovery. Multimedia evidence. Motion practice. Arlington litigators manage cases worth millions—and discovery organization determines outcomes.</p>
            </div>

            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-xl text-charcoal mb-3">Real Estate</h3>
              <p className="text-base text-text-mid font-300">Arlington real estate is expensive and active. Commercial property, residential, development. Transaction coordination accelerates closing timelines and client satisfaction.</p>
            </div>

            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-xl text-charcoal mb-3">IP & Patents</h3>
              <p className="text-base text-text-mid font-300">Tech companies in Arlington generate patent prosecution, trademark work, licensing agreements. Patent deadline management is critical—one missed deadline costs $18,000+.</p>
            </div>

            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-xl text-charcoal mb-3">Family Law</h3>
              <p className="text-base text-text-mid font-300">High-net-worth family law in Arlington involves complex financial discovery, international assets, and custody complexity. Administrative support accelerates case resolution.</p>
            </div>
          </div>
        </section>

        <section className="mb-16 p-10 bg-brass/15 border-2 border-brass rounded-sm">
          <h2 className="font-serif text-3xl text-charcoal mb-6">The Arlington Economics</h2>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            Arlington attorneys average $300-500+/hour billing rates. Your VA costs $30-42k/year. Recover 15 billable hours/week at $350/hr = $273k annually in new revenue. Your VA pays for itself within the first two months of the year.
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            This isn't theoretical. This is how Arlington's top practices operate. Efficiency = revenue. A VA isn't a cost—it's the highest ROI hire you'll make.
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300">
            The question isn't whether you can afford a VA. It's whether you can afford the $273k annual opportunity cost of not having one.
          </p>
        </section>

        <section className="my-16 p-8 bg-charcoal text-white rounded-sm">
          <h2 className="font-serif text-3xl mb-4">Scale Your Arlington Practice</h2>
          <p className="text-base text-white/70 leading-relaxed mb-6 font-300">
            Top Arlington firms have VAs. You should too. Let's talk about how to accelerate your revenue and reduce administrative chaos.
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
