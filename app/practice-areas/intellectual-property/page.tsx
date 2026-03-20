import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Intellectual Property Virtual Assistant | Lawyer Capital VA',
  description: 'Patent prosecution support, trademark filing, licensing agreements, and IP portfolio tracking.',
  keywords: 'intellectual property virtual assistant, patent support services',
};

export default function IntellectualPropertyPage() {
  return (
    <main className="pt-32 bg-ivory min-h-screen">
      <article className="max-w-4xl mx-auto px-16 py-20">
        <h1 className="font-serif text-6xl text-charcoal mb-8 leading-tight">
          Virtual Assistant Support for Intellectual Property
        </h1>

        <p className="text-lg text-text-mid font-300 mb-12 border-l-4 border-brass pl-6">
          Intellectual property practice requires managing complex filings with USPTO, international trademark offices, and patent examining offices. Patent prosecution, trademark registration, IP portfolio management, and licensing coordination require meticulous deadline tracking and administrative precision. Our IP VAs manage the filing deadlines and administrative complexity while you focus on strategy.
        </p>

        <section className="mb-16 py-12 bg-white px-8 rounded-sm border-l-4 border-brass">
          <h2 className="font-serif text-3xl text-charcoal mb-6">IP Practice Administrative Burden</h2>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            Patent prosecution is document-intensive. Office actions arrive. Responses must be prepared within statutory deadlines. Prior art must be researched. Claims must be drafted and amended. Years of prosecution follow before a patent issues.
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300">
            A dedicated IP VA manages the administrative burden: deadline tracking, office action responses, prior art organization, claim amendment tracking. You focus on the patentability strategy.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-6 mt-12">What IP VAs Handle</h2>

          <h3 className="font-serif text-xl text-charcoal mb-4 mt-8">Patent Prosecution & Deadline Tracking</h3>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            Patent applications are filed with the USPTO. Office actions arrive. Your VA tracks all office action deadlines (typically 3 or 6 months), alerts you as deadlines approach, and organizes the prosecution file. They maintain a patent docket showing filing date, status, current deadline, and examiner information.
          </p>

          <h3 className="font-serif text-xl text-charcoal mb-4 mt-8">Trademark Filing & Maintenance</h3>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            Trademark registration requires careful prosecution. Your VA prepares trademark applications, tracks office action responses, maintains a trademark docket, and monitors renewal dates. They track specimens of use, maintain assignment records, and manage post-registration maintenance filings.
          </p>

          <h3 className="font-serif text-xl text-charcoal mb-4 mt-8">International IP Filing Coordination</h3>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            IP is often filed internationally (patents in multiple countries, trademarks in multiple jurisdictions). Your VA coordinates international filings, tracks priority dates, manages foreign counsel communications, and maintains international IP dockets.
          </p>

          <h3 className="font-serif text-xl text-charcoal mb-4 mt-8">Prior Art Research Organization</h3>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            Patent prosecution requires prior art analysis. Your VA researches prior art references, organizes them by relevance, prepares prior art summaries, and tracks arguments addressing prior art throughout prosecution.
          </p>

          <h3 className="font-serif text-xl text-charcoal mb-4 mt-8">Copyright Registration & Protection</h3>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            Copyright registration with the US Copyright Office requires accurate application information and evidence submission. Your VA prepares copyright applications, gathers copyright evidence, and maintains copyright registration records.
          </p>

          <h3 className="font-serif text-xl text-charcoal mb-4 mt-8">IP Portfolio Management</h3>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            IP clients maintain portfolios of patents, trademarks, and copyrights. Your VA maintains a comprehensive IP portfolio database showing all registered IPs, renewal dates, jurisdictions, and registration status. They alert clients before renewal dates.
          </p>

          <h3 className="font-serif text-xl text-charcoal mb-4 mt-8">License Agreement Management</h3>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            Licensing is common in IP practice. Your VA maintains a license register: license grants, royalty rates, term, renewal dates, and key obligations. They track royalty payment dates and ensure compliance with license terms.
          </p>

          <h3 className="font-serif text-xl text-charcoal mb-4 mt-8">IP Dispute & Enforcement Documentation</h3>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            IP infringement requires evidence. Your VA gathers infringement evidence (products using infringing technology, sales information, marketing materials), prepares infringement analysis, and organizes documentation for cease-and-desist letters or litigation.
          </p>

          <h3 className="font-serif text-xl text-charcoal mb-4 mt-8">Assignment & Ownership Documentation</h3>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            IP ownership transfers require proper documentation. Your VA prepares IP assignment agreements, tracks assignments with USPTO (for patents and trademarks), and maintains ownership records.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-6 mt-12">IP Practice Areas We Support</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {['Patent Prosecution', 'Trademark Registration', 'Copyright Registration', 'IP Licensing', 'Patent Portfolio Management', 'IP Disputes & Enforcement', 'International IP Filing', 'Trade Secrets'].map((area) => (
              <div key={area} className="p-4 border border-text-light/10 bg-white">
                <p className="font-500 text-charcoal">{area}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="my-16 p-8 bg-charcoal text-white rounded-sm">
          <h2 className="font-serif text-2xl mb-4">Innovation Deserves Flawless Protection</h2>
          <p className="text-base text-white/70 leading-relaxed">
            Your clients' inventions and innovations are valuable. They deserve rigorous IP protection. Your VA ensures every filing deadline is met, every office action is answered, every registration is maintained. Nothing falls through the cracks.
          </p>
        </section>

        <section className="text-center">
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-brass text-white text-xs font-600 tracking-wider uppercase hover:bg-brass-light transition-all duration-300"
          >
            Get IP Law Support
          </Link>
        </section>
      </article>
    </main>
  );
}
