import { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'Practice Area ROI Calculator | Lawyer Capital VA',
  description: 'Calculate VA ROI by practice area and understand your specific opportunities.',
  keywords: 'law practice ROI, practice area analysis, VA value',
};

export default function PracticeAreaROIPage() {
  return (
    <main className="bg-ivory min-h-screen">
      <PageHeader
        label="Assessment Tools"
        title="Practice Area ROI Calculator"
        subtitle="Immigration: $159k-360k ROI. Litigation: $348k-582k. Corporate: $120k-456k. Which is your biggest opportunity?"
      />
      <article className="max-w-4xl mx-auto px-16 py-20">
        <h1 className="font-serif text-6xl text-charcoal mb-8 leading-tight">
          Practice Area ROI Calculator: Which Areas Need a VA Most?
        </h1>

        <p className="text-lg text-text-mid font-300 mb-12 border-l-4 border-brass pl-6">
          Different practice areas have different pain points. Immigration has deadline crisis. Family law has unbilled emotional labor. Litigation has discovery burden. Calculate your ROI by practice area to understand where a VA delivers maximum value.
        </p>

        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-6">Select Your Primary Practice Areas</h2>

          <div className="space-y-4">
            {['Immigration Law', 'Family Law', 'Civil Litigation', 'Corporate Law', 'Real Estate Law', 'Criminal Defense', 'Estate Planning', 'IP Law'].map((area) => (
              <label key={area} className="flex items-center p-4 border border-text-light/10 rounded-sm hover:bg-brass/5 cursor-pointer">
                <input type="checkbox" className="mr-4" />
                <span className="font-500 text-charcoal">{area}</span>
              </label>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-6 mt-12">Annual Cases/Matters by Practice Area</h2>

          <div className="space-y-6">
            <div>
              <label className="block font-600 text-charcoal mb-3">Immigration matters per year</label>
              <input type="number" placeholder="30" className="w-full px-4 py-3 border border-text-light/20 rounded" />
            </div>
            <div>
              <label className="block font-600 text-charcoal mb-3">Family law cases per year</label>
              <input type="number" placeholder="50" className="w-full px-4 py-3 border border-text-light/20 rounded" />
            </div>
            <div>
              <label className="block font-600 text-charcoal mb-3">Litigation cases per year</label>
              <input type="number" placeholder="20" className="w-full px-4 py-3 border border-text-light/20 rounded" />
            </div>

            <button className="w-full px-8 py-3 bg-brass text-white font-600 tracking-wider uppercase rounded hover:bg-brass-light transition">
              Calculate ROI by Practice Area
            </button>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-6 mt-12">Typical Pain Points by Practice Area</h2>

          <div className="space-y-4">
            <div className="bg-white p-6 border border-text-light/10 rounded-sm">
              <h3 className="font-600 text-charcoal mb-2">Immigration Law</h3>
              <p className="text-sm text-text-mid">Primary pain: Deadline management (RFEs, office actions, international filing deadlines)</p>
              <p className="text-sm text-text-mid mt-2"><strong>ROI:</strong> $159,000-360,000/year (prevented deadline misses + form rejection reduction)</p>
            </div>

            <div className="bg-white p-6 border border-text-light/10 rounded-sm">
              <h3 className="font-600 text-charcoal mb-2">Family Law</h3>
              <p className="text-sm text-text-mid">Primary pain: Unbilled emotional labor + administrative burden</p>
              <p className="text-sm text-text-mid mt-2"><strong>ROI:</strong> $144,000-150,000/year (recovered billable time + reduced unbilled labor)</p>
            </div>

            <div className="bg-white p-6 border border-text-light/10 rounded-sm">
              <h3 className="font-6 00 text-charcoal mb-2">Civil Litigation</h3>
              <p className="text-sm text-text-mid">Primary pain: Discovery management + multimedia evidence organization</p>
              <p className="text-sm text-text-mid mt-2"><strong>ROI:</strong> $348,000-582,000/year (recovered billable capacity from discovery management)</p>
            </div>

            <div className="bg-white p-6 border border-text-light/10 rounded-sm">
              <h3 className="font-600 text-charcoal mb-2">Corporate Law</h3>
              <p className="text-sm text-text-mid">Primary pain: M&A coordination + administrative burden between signing/closing</p>
              <p className="text-sm text-text-mid mt-2"><strong>ROI:</strong> $120,000-456,000/year (recovered billable capacity per deal)</p>
            </div>
          </div>
        </section>

        <section className="my-16 p-8 bg-charcoal text-white rounded-sm">
          <h2 className="font-serif text-2xl mb-4">Your Practice Area ROI</h2>
          <p className="text-base text-white/70 leading-relaxed mb-6 font-300">
            Different practice areas benefit differently from VA support. Immigration gets deadline safety. Family law gets billable time recovery. Litigation gets discovery efficiency. Calculate your specific ROI and understand where a VA delivers maximum value for your firm.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-brass text-white text-xs font-600 tracking-wider uppercase hover:bg-brass-light transition-all duration-300"
          >
            Calculate Your ROI
          </Link>
        </section>
      </article>
    </main>
  );
}
