import { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'Deadline Audit Tool | Lawyer Capital VA',
  description: 'Assess your firm deadline management and identify gaps.',
  keywords: 'deadline tracking, law firm audit, deadline management',
};

export default function DeadlineAuditPage() {
  return (
    <main className="bg-ivory min-h-screen">
      <PageHeader
        label="Assessment Tools"
        title="Deadline Audit"
        subtitle="One missed deadline costs $2,500-25,000. Is your system spreadsheets, Outlook, or actual automation?"
      />
      <article className="max-w-4xl mx-auto px-16 py-20">
        <h1 className="font-serif text-6xl text-charcoal mb-8 leading-tight">
          Deadline Audit: Where Are Your Vulnerabilities?
        </h1>

        <p className="text-lg text-text-mid font-300 mb-12 border-l-4 border-brass pl-6">
          One missed deadline costs $2,500-25,000. You probably have 30-50 matters with overlapping deadlines. If your deadline management system is not automated and redundant, you are exposed. Take this audit to identify your risks.
        </p>

        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-6">Answer These Questions</h2>

          <div className="space-y-6">
            <div className="bg-white p-6 border border-text-light/10 rounded-sm">
              <h3 className="font-600 text-charcoal mb-3">1. How are you tracking deadlines?</h3>
              <ul className="text-base text-text-mid leading-relaxed font-300 space-y-2">
                <li>□ Spreadsheets (error-prone, no automation)</li>
                <li>□ Outlook calendar (no prioritization)</li>
                <li>□ Paper lists (worst possible)</li>
                <li>□ Practice management software (good but requires discipline)</li>
                <li>□ Dedicated deadline tracking system (best)</li>
              </ul>
              <p className="mt-4 font-600 text-charcoal">If you selected the first 3: You are exposed.</p>
            </div>

            <div className="bg-white p-6 border border-text-light/10 rounded-sm">
              <h3 className="font-600 text-charcoal mb-3">2. What is your backup system?</h3>
              <ul className="text-base text-text-mid leading-relaxed font-300 space-y-2">
                <li>□ No backup system (catastrophic risk)</li>
                <li>□ Someone else manually checks (unreliable)</li>
                <li>□ Automated alerts from your system (good)</li>
                <li>□ Multiple redundant systems (excellent)</li>
              </ul>
              <p className="mt-4 font-600 text-charcoal">If you selected the first 2: You are relying on luck.</p>
            </div>

            <div className="bg-white p-6 border border-text-light/10 rounded-sm">
              <h3 className="font-600 text-charcoal mb-3">3. How often do you miss deadlines?</h3>
              <ul className="text-base text-text-mid leading-relaxed font-300 space-y-2">
                <li>□ Once per year or more (2-8% rate)</li>
                <li>□ Once every 2-3 years</li>
                <li>□ Never (or you are not tracking accurately)</li>
              </ul>
              <p className="mt-4 font-600 text-charcoal">Anything higher than 0% is too high. One missed deadline per year = $2,500-25,000 loss.</p>
            </div>

            <div className="bg-white p-6 border border-text-light/10 rounded-sm">
              <h3 className="font-600 text-charcoal mb-3">4. Who enters deadlines into your system?</h3>
              <ul className="text-base text-text-mid leading-relaxed font-300 space-y-2">
                <li>□ You personally (bottleneck)</li>
                <li>□ Multiple people inconsistently (error-prone)</li>
                <li>□ Dedicated person (reliable)</li>
                <li>□ Automated entry from case management (excellent)</li>
              </ul>
              <p className="mt-4 font-600 text-charcoal">If you are the bottleneck: Your system fails when you are busy.</p>
            </div>

            <div className="bg-white p-6 border border-text-light/10 rounded-sm">
              <h3 className="font-600 text-charcoal mb-3">5. How much time do you spend on deadline management per week?</h3>
              <ul className="text-base text-text-mid leading-relaxed font-300 space-y-2">
                <li>□ 5+ hours (massive time sink)</li>
                <li>□ 2-5 hours (significant waste)</li>
                <li>□ 1-2 hours (expected minimum)</li>
                <li>□ Less than 1 hour (highly automated)</li>
              </ul>
              <p className="mt-4 font-600 text-charcoal">Anything over 2 hours/week = $500-1,000/week in lost billable time.</p>
            </div>
          </div>
        </section>

        <section className="mb-16 p-10 bg-brass/15 border-2 border-brass rounded-sm">
          <h2 className="font-serif text-3xl text-charcoal mb-8">Your Audit Score</h2>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-6">
            <strong>If you selected mostly boxes 1-2:</strong> You have critical deadline management vulnerabilities. You are exposed to missed deadlines costing $2,500-25,000 each. Fix this immediately.
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300">
            <strong>If you selected mostly boxes 3-4:</strong> You have a reasonable system. A dedicated deadline management VA would increase reliability from 95% to 99%+ and free 2-5 hours per week.
          </p>
        </section>

        <section className="my-16 p-8 bg-charcoal text-white rounded-sm">
          <h2 className="font-serif text-2xl mb-4">Fix Your Deadline Vulnerabilities</h2>
          <p className="text-base text-white/70 leading-relaxed mb-6 font-300">
            Deadline management is not optional. It is foundational. Your firm is either managing deadlines reliably or it is exposed to catastrophic loss. A dedicated deadline management VA provides the redundancy and automation your firm needs.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-brass text-white text-xs font-600 tracking-wider uppercase hover:bg-brass-light transition-all duration-300"
          >
            Discuss Your Deadline System
          </Link>
        </section>
      </article>
    </main>
  );
}
