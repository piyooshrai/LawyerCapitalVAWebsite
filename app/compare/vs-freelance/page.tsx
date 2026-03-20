import { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'VA vs Freelance Assistant | Lawyer Capital VA',
  description: 'Compare dedicated VA vs hiring freelance legal assistants.',
  keywords: 'VA vs freelancer, freelance legal assistant, virtual assistant comparison',
};

export default function VsFreelancePage() {
  return (
    <main className="bg-ivory min-h-screen">
      <PageHeader
        label="Comparison"
        title="VA vs Freelance: Continuity Wins. Project-by-Project Loses."
        subtitle="Freelancer: 50-70% miss deadline, 30-50% rework rate, no continuity. Your VA: 99%+ hit rate, <5% rework, dedicated to your practice."
      />
      <article className="max-w-4xl mx-auto px-16 py-20">
        <h1 className="font-serif text-6xl text-charcoal mb-8 leading-tight">
          VA vs Freelance: Inconsistency Will Destroy Your Practice
        </h1>

        <p className="text-lg text-text-mid font-300 mb-12 border-l-4 border-brass pl-6">
          <strong>You are thinking:</strong> "I will find a freelancer on Upwork. They are cheap. I can hire per-project." You post a job. You get 47 bids. You hire the cheapest. They have 300 other clients. Your deadline is not their priority. You wait. They miss your deadline. You hire someone else. That freelancer is worse. Now you have two mediocre freelancers and zero continuity. Your cases are chaos.
        </p>

        <section className="mb-16 py-12 bg-charcoal/5 px-8 rounded-sm border-l-4 border-brass">
          <h2 className="font-serif text-3xl text-charcoal mb-6">The Freelance Problem</h2>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            <strong>Freelancers are unreliable by definition.</strong> They have no commitment to you. They have 10 other clients. Your deadline is not their priority. They disappear for weeks. They miss deadlines. They ghost you when a bigger project comes in.
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            <strong>Freelancers create chaos through inconsistency.</strong> One freelancer organizes files one way. Another organizes them differently. One takes 3 hours for a task. Another takes 15 hours for the same task. You waste time managing inconsistent quality and reworking subpar results.
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300">
            <strong>Your dedicated VA is your dedicated VA.</strong> They are committed to you. Your deadlines are their deadlines. They learn your processes. They get better over time. They are reliable.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-6 mt-12">VA vs Freelance Comparison</h2>

          <div className="space-y-6 mb-12">
            <div className="bg-white p-6 border border-text-light/10 rounded-sm">
              <h3 className="font-600 text-charcoal mb-4">Reliability</h3>
              <p className="text-base text-text-mid leading-relaxed font-300 mb-3">
                <strong>Freelancer:</strong> 10-300 other clients. Your deadline is not their priority. 50-70% miss deadline on first try. Disappear mid-project. Ghost on follow-up projects.
              </p>
              <p className="text-base text-text-mid leading-relaxed font-300">
                <strong>VA:</strong> You are their priority. Dedicated to your firm. 99%+ deadline hit rate. Available when you need them.
              </p>
            </div>

            <div className="bg-white p-6 border border-text-light/10 rounded-sm">
              <h3 className="font-600 text-charcoal mb-4">Quality & Consistency</h3>
              <p className="text-base text-text-mid leading-relaxed font-300 mb-3">
                <strong>Freelancer:</strong> Quality varies wildly. Inconsistent work standards. Do not understand your processes. Every project requires extensive instruction. Rework rates: 30-50%.
              </p>
              <p className="text-base text-text-mid leading-relaxed font-300">
                <strong>VA:</strong> Consistent high quality. Learns your processes. Gets better over time. Rework rates: less than 5%.
              </p>
            </div>

            <div className="bg-white p-6 border border-text-light/10 rounded-sm">
              <h3 className="font-600 text-charcoal mb-4">Continuity</h3>
              <p className="text-base text-text-mid leading-relaxed font-300 mb-3">
                <strong>Freelancer:</strong> Project-by-project. No ongoing relationship. Have to retrain each time. No one knows your cases over time. Chaos.
              </p>
              <p className="text-base text-text-mid leading-relaxed font-300">
                <strong>VA:</strong> Ongoing partner. Knows your cases. Understands your clients. Improves over time. Becomes part of your team.
              </p>
            </div>

            <div className="bg-white p-6 border border-text-light/10 rounded-sm">
              <h3 className="font-600 text-charcoal mb-4">Cost per Project</h3>
              <p className="text-base text-text-mid leading-relaxed font-300 mb-3">
                <strong>Freelancer:</strong> $15-40/hour. Looks cheap. Add 30-50% rework. Add 50% management overhead (finding, vetting, directing, fixing). Actual cost: $25-65/hour. 10 projects/year = $15,000-35,000+.
              </p>
              <p className="text-base text-text-mid leading-relaxed font-300">
                <strong>VA:</strong> $2,500-3,500/month = $30-42/hour equivalent. Handles unlimited projects. Zero rework. Zero management overhead. 10 projects/year = $30,000-42,000.
              </p>
            </div>
          </div>

          <div className="bg-brass/20 p-8 rounded-sm border-l-4 border-brass">
            <h3 className="font-600 text-charcoal mb-3 text-xl">True Cost Analysis: 10 Projects/Year</h3>
            <p className="text-base text-text-mid leading-relaxed font-300 mb-3">
              <strong>Freelancer:</strong> 10 projects × 20 hours × $30/hour = $6,000. Plus 40% rework = $2,400. Plus 50% management = $4,200. Total: $12,600 + vetting/hiring time (20 hours × $250/hr = $5,000). Actual total: $17,600.
            </p>
            <p className="text-base text-text-mid leading-relaxed font-300 mb-3">
              <strong>VA:</strong> $36,000/year (mid-range). Zero rework. Zero management overhead. Actually cheaper for reliable, consistent work.
            </p>
            <p className="text-base text-text-mid leading-relaxed font-300">
              <strong>Real Cost Difference:</strong> Freelancer appears cheaper but is actually more expensive when you factor in rework + management time.
            </p>
          </div>
        </section>

        <section className="my-16 p-8 bg-charcoal text-white rounded-sm">
          <h2 className="font-serif text-2xl mb-4">Stop Gambling on Freelancers. Get Commitment.</h2>
          <p className="text-base text-white/70 leading-relaxed mb-6 font-300">
            Freelancers are cheap for a reason: they have no commitment to you. Your dedicated VA is committed. Your deadline is their deadline. Your success is their success. That commitment is worth the price.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-brass text-white text-xs font-600 tracking-wider uppercase hover:bg-brass-light transition-all duration-300"
          >
            Get a Dedicated VA
          </Link>
        </section>
      </article>
    </main>
  );
}
