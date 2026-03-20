import { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'VA vs Legal Process Outsourcing | Lawyer Capital VA',
  description: 'Compare virtual assistant vs outsourcing to legal process outsourcing firms.',
  keywords: 'VA vs LPO, legal outsourcing, virtual assistant',
};

export default function VsLPOPage() {
  return (
    <main className="bg-ivory min-h-screen">
      <PageHeader
        label="Comparison"
        title="VA vs LPO: Why Offshore Doesn't Work for Your Clients"
        subtitle="LPO: 6-12 hour time zone delay, 15-30% rework rate, generic work. Your VA: same time zone, <5% rework, specialized for your practice."
      />
      <article className="max-w-4xl mx-auto px-16 py-20">
        <h1 className="font-serif text-6xl text-charcoal mb-8 leading-tight">
          VA vs LPO: Why Offshore Outsourcing Fails for Your Clients
        </h1>

        <p className="text-lg text-text-mid font-300 mb-12 border-l-4 border-brass pl-6">
          <strong>You are thinking:</strong> "I will outsource to an LPO firm. They are cheap. They have 50 people. They can handle my document review." Three weeks in, you realize: they do not understand your cases. Communication is slow (6-hour time difference). Quality is mediocre. You are re-doing half their work. You have lost time, money, and client trust.
        </p>

        <section className="mb-16 py-12 bg-charcoal/5 px-8 rounded-sm border-l-4 border-brass">
          <h2 className="font-serif text-3xl text-charcoal mb-6">The LPO Problem</h2>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            <strong>LPO firms are cheap because they are not specialized in your cases.</strong> They handle document review for 47 different law firms simultaneously. They do not know your practice areas. They do not understand your client's specific situation. They follow generic processes that do not apply to your matter.
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            <strong>Communication is slow and expensive.</strong> You email questions. You wait 8 hours for an answer (time zone difference). The answer is wrong. You clarify. You wait another 8 hours. Simple 2-hour problems become 3-day delays.
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300">
            <strong>Your VA is dedicated to you. In your time zone. Understanding your practice. Producing work you can use immediately.</strong> No rework. No delays. No quality issues.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-6 mt-12">VA vs LPO Comparison</h2>

          <div className="space-y-6 mb-12">
            <div className="bg-white p-6 border border-text-light/10 rounded-sm">
              <h3 className="font-600 text-charcoal mb-4">Cost Structure</h3>
              <p className="text-base text-text-mid leading-relaxed font-300 mb-3">
                <strong>LPO:</strong> $15-25/hour per resource. Minimum project fee: $5,000+. Document review: $3,000-8,000 per project. Total per matter: $10,000-25,000+
              </p>
              <p className="text-base text-text-mid leading-relaxed font-300">
                <strong>VA:</strong> $2,500-3,500/month flat. Unlimited work. Handles all matters you send. No per-project fees. No minimums.
              </p>
            </div>

            <div className="bg-white p-6 border border-text-light/10 rounded-sm">
              <h3 className="font-600 text-charcoal mb-4">Quality & Specialization</h3>
              <p className="text-base text-text-mid leading-relaxed font-300 mb-3">
                <strong>LPO:</strong> Generic document review. Does not understand your practice area. Does not know your clients. Does not understand case strategy. Produces work that requires rework (15-30% error rate typical).
              </p>
              <p className="text-base text-text-mid leading-relaxed font-300">
                <strong>VA:</strong> Specialized in your practice area. Understands your clients. Produces work ready to use immediately (less than 5% rework needed).
              </p>
            </div>

            <div className="bg-white p-6 border border-text-light/10 rounded-sm">
              <h3 className="font-600 text-charcoal mb-4">Communication & Turnaround</h3>
              <p className="text-base text-text-mid leading-relaxed font-300 mb-3">
                <strong>LPO:</strong> 6-12 hour response time (offshore). Requires detailed instructions. Misunderstandings common. 2-5 day project turnaround typical.
              </p>
              <p className="text-base text-text-mid leading-relaxed font-300">
                <strong>VA:</strong> Same business day response. Works in your time zone. Understands your preferences. 24-48 hour turnaround typical.
              </p>
            </div>

            <div className="bg-white p-6 border border-text-light/10 rounded-sm">
              <h3 className="font-600 text-charcoal mb-4">Long-Term Partnership</h3>
              <p className="text-base text-text-mid leading-relaxed font-300 mb-3">
                <strong>LPO:</strong> Transactional. Project-by-project. You have no ongoing relationship. Each project requires retraining. Quality varies.
              </p>
              <p className="text-base text-text-mid leading-relaxed font-300">
                <strong>VA:</strong> Ongoing partnership. Learns your business, your clients, your preferences. Gets better over time. Becomes extension of your firm.
              </p>
            </div>
          </div>

          <div className="bg-brass/20 p-8 rounded-sm border-l-4 border-brass">
            <h3 className="font-600 text-charcoal mb-3 text-xl">Real Cost Comparison: 10 Projects/Year</h3>
            <p className="text-base text-text-mid leading-relaxed font-300 mb-3">
              <strong>LPO:</strong> 10 projects × $8,000 average = $80,000/year. Plus 20% rework = $16,000. Total: $96,000/year.
            </p>
            <p className="text-base text-text-mid leading-relaxed font-300 mb-3">
              <strong>VA:</strong> $30,000-42,000/year. Handles all 10 projects + ongoing support. Plus 5% rework = $1,500-2,100. Total: $31,500-44,100/year.
            </p>
            <p className="text-base text-text-mid leading-relaxed font-300">
              <strong>Annual Savings: $51,900-64,500</strong>
            </p>
          </div>
        </section>

        <section className="my-16 p-8 bg-charcoal text-white rounded-sm">
          <h2 className="font-serif text-2xl mb-4">Stop Outsourcing. Start Partnering.</h2>
          <p className="text-base text-white/70 leading-relaxed mb-6 font-300">
            Your clients deserve specialized, high-quality support. LPO firms are cheap because they are generic. Your VA is specialized because they dedicate themselves to your practice. Same time zone. Same quality. Better results. Lower cost.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-brass text-white text-xs font-600 tracking-wider uppercase hover:bg-brass-light transition-all duration-300"
          >
            Switch from LPO to VA
          </Link>
        </section>
      </article>
    </main>
  );
}
