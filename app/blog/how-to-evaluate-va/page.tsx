import { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'How to Evaluate a Virtual Assistant | Lawyer Capital VA',
  description: 'What to look for when choosing a VA service for your law firm.',
  keywords: 'virtual assistant evaluation, VA selection, law firm support',
};

export default function HowToEvaluateBlogPost() {
  return (
    <main className="bg-ivory min-h-screen">
      <PageHeader
        label="VA Selection Guide"
        title="How to Evaluate a Virtual Assistant"
        subtitle="6 criteria that matter. Red flags to watch. What doesn't matter (price, company size, fancy website)."
      />
      <article className="max-w-4xl mx-auto px-16 py-20">
        <h1 className="font-serif text-6xl text-charcoal mb-8 leading-tight">
          How to Evaluate a Virtual Assistant: What Matters and What Does Not
        </h1>

        <p className="text-lg text-text-mid font-300 mb-12 border-l-4 border-brass pl-6">
          You are considering hiring a VA. You want to make sure you choose the right one. What matters? What are red flags? How do you avoid choosing a VA that does not deliver?
        </p>

        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-6">What to Look For</h2>

          <div className="space-y-8">
            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-xl text-charcoal mb-2">1. Practice Area Specialization</h3>
              <p className="text-base text-text-mid leading-relaxed font-300">
                Does the VA understand YOUR practice area? Immigration VAs understand USCIS deadlines. Litigation VAs understand discovery. A generalist VA who works across all practice areas will not be as effective as a specialist.
              </p>
              <p className="text-base text-text-mid leading-relaxed font-300 mt-3">
                <strong>Red Flag:</strong> VA claims to support all practice areas equally. That is not realistic. Specialists are better.
              </p>
            </div>

            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-xl text-charcoal mb-2">2. Dedicated vs Shared</h3>
              <p className="text-base text-text-mid leading-relaxed font-300">
                Is the VA dedicated to you (100% of their time) or shared (they work for multiple firms)? Dedicated VA understands your practice. Shared VA juggle priorities.
              </p>
              <p className="text-base text-text-mid leading-relaxed font-300 mt-3">
                <strong>Red Flag:</strong> VA works for 15+ other law firms simultaneously. Your matters will not be their priority.
              </p>
            </div>

            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-xl text-charcoal mb-2">3. Time Zone & Responsiveness</h3>
              <p className="text-base text-text-mid leading-relaxed font-300">
                Is the VA in your time zone? Can you get same-business-day response? Time zone difference = communication delays = slower work.
              </p>
              <p className="text-base text-text-mid leading-relaxed font-300 mt-3">
                <strong>Red Flag:</strong> 6-8 hour time zone difference. You ask a question at 9am. You wait until 5pm for an answer.
              </p>
            </div>

            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-xl text-charcoal mb-2">4. Quality & Rework Rate</h3>
              <p className="text-base text-text-mid leading-relaxed font-300">
                Ask: What is the rework rate? How often do you have to redo VA work? If it is more than 10%, the VA is not ready. Good VA: less than 5% rework.
              </p>
              <p className="text-base text-text-mid leading-relaxed font-300 mt-3">
                <strong>Red Flag:</strong> VA cannot define their rework rate. They have not measured quality. That is a problem.
              </p>
            </div>

            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-xl text-charcoal mb-2">5. Training & Onboarding</h3>
              <p className="text-base text-text-mid leading-relaxed font-300">
                Does the VA provider have a structured onboarding process? Do they understand your practice's unique needs? Or do they just jump in and figure it out?
              </p>
              <p className="text-base text-text-mid leading-relaxed font-300 mt-3">
                <strong>Red Flag:</strong> No onboarding process. VA starts day one with no training. That is inefficient.
              </p>
            </div>

            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-xl text-charcoal mb-2">6. Client References</h3>
              <p className="text-base text-text-mid leading-relaxed font-300">
                Ask to speak with current clients in your practice area. Not past clients. Current clients. What do they actually say about the VA? Ask about: quality, responsiveness, reliability, value.
              </p>
              <p className="text-base text-text-mid leading-relaxed font-300 mt-3">
                <strong>Red Flag:</strong> No current client references. Only past references. That is suspicious.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16 p-10 bg-brass/15 border-2 border-brass rounded-sm">
          <h2 className="font-serif text-3xl text-charcoal mb-8">What Does Not Matter</h2>

          <p className="text-base text-text-mid leading-relaxed font-300 mb-6">
            <strong>Cheapest Price:</strong> Do not choose a VA based on lowest cost. A $15/hour VA who is mediocre is more expensive than a $35/hour VA who is excellent (because you rework their output).
          </p>

          <p className="text-base text-text-mid leading-relaxed font-300 mb-6">
            <strong>Biggest Company:</strong> Do not assume the biggest VA company is best. Size does not guarantee quality. Specialized boutique firms often outperform large generalist operations.
          </p>

          <p className="text-base text-text-mid leading-relaxed font-300">
            <strong>Fancy Website:</strong> A great website does not mean a great VA. Judge the VA by their work quality and references, not their marketing.
          </p>
        </section>

        <section className="my-16 p-8 bg-charcoal text-white rounded-sm">
          <h2 className="font-serif text-2xl mb-4">Choose Your VA Partner Wisely</h2>
          <p className="text-base text-white/70 leading-relaxed mb-6 font-300">
            A VA is a partnership. You are trusting them with your clients' cases. Your firm's reputation is in their hands. Choose based on specialization, quality, and fit. Not based on price or company size.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-brass text-white text-xs font-600 tracking-wider uppercase hover:bg-brass-light transition-all duration-300"
          >
            Talk to Our Team
          </Link>
        </section>
      </article>
    </main>
  );
}
