import { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'Why VA is Better Than Hiring Staff | Law Firm Strategy | Lawyer Capital VA',
  description: 'The case for virtual assistants vs hiring full-time staff.',
  keywords: 'virtual assistant vs staff, law firm hiring, cost comparison',
};

export default function WhyVABetterBlogPost() {
  return (
    <main className="bg-ivory min-h-screen">
      <PageHeader
        label="Legal Practice"
        title="Why Virtual Assistants Beat Hiring Staff"
        subtitle="Paralegal: $133k-220k/year. VA: $30k-42k/year. Same work. One-third the cost."
      />
      <article className="max-w-4xl mx-auto px-16 py-20">
        <h1 className="font-serif text-6xl text-charcoal mb-8 leading-tight">
          Why Virtual Assistants Beat Hiring Staff (And Save You $100,000+)
        </h1>

        <p className="text-lg text-text-mid font-300 mb-12 border-l-4 border-brass pl-6">
          You have two options: hire a full-time paralegal or hire a virtual assistant. The paralegal seems more "real." You can see them. They are there. But the economics tell a different story. A VA delivers more value at a fraction of the cost.
        </p>

        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-6">The Hidden Cost of Hiring</h2>

          <p className="text-base text-text-mid leading-relaxed font-300 mb-6">
            A paralegal salary: $50,000-65,000/year. Benefits: $10,000-15,000. Taxes & employment costs: $8,000-10,000. Total: $68,000-90,000/year just for salary + benefits + taxes.
          </p>

          <p className="text-base text-text-mid leading-relaxed font-300 mb-6">
            Then add: training time (4 weeks = 160 hours of your time), management time (5-10 hours/week = 260-520 hours/year), rework time (their mistakes require your correction), recruitment if they leave mid-year.
          </p>

          <p className="text-base text-text-mid leading-relaxed font-300">
            Real total cost of a paralegal: $133,000-220,000/year (salary + benefits + your management time). A VA: $30,000-42,000/year. Difference: $91,000-190,000/year in real savings.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-6 mt-12">VA Advantages</h2>

          <div className="space-y-8">
            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-xl text-charcoal mb-2">Flexibility</h3>
              <p className="text-base text-text-mid leading-relaxed font-300">
                Slow month? Reduce VA hours. Busy month? Increase VA hours. No commitment. No employee overhead. Scale perfectly with your business needs.
              </p>
            </div>

            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-xl text-charcoal mb-2">Specialization</h3>
              <p className="text-base text-text-mid leading-relaxed font-300">
                Immigration VA understands USCIS deadlines because that is all they do. Litigation VA understands discovery because that is their specialty. A generalist paralegal is okay at many things, excellent at none.
              </p>
            </div>

            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-xl text-charcoal mb-2">No Management Overhead</h3>
              <p className="text-base text-text-mid leading-relaxed font-300">
                With a paralegal, you spend 5-10 hours per week managing them. You set priorities, check work, provide feedback, deal with people issues. With a VA, they are managed by their provider. You just use them.
              </p>
            </div>

            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-xl text-charcoal mb-2">No Turnover Risk</h3>
              <p className="text-base text-text-mid leading-relaxed font-300">
                Paralegal leaves mid-year? You retrain someone. You lose productivity. You lose continuity. VA service? New VA assigned. No continuity loss. No retraining time.
              </p>
            </div>

            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-xl text-charcoal mb-2">Quality Control</h3>
              <p className="text-base text-text-mid leading-relaxed font-300">
                VA services monitor their VAs' quality. Rework rates. Client satisfaction. You get consistent quality because the VA provider is accountable. Paralegals are accountable to you—which means they are sometimes not.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16 p-10 bg-brass/15 border-2 border-brass rounded-sm">
          <h2 className="font-serif text-3xl text-charcoal mb-8">The Real Story</h2>

          <p className="text-base text-text-mid leading-relaxed font-300 mb-6">
            Paralegals made sense 10 years ago when administrative work was straightforward. Today, administrative work is specialized by practice area. Immigration deadline management is different from civil discovery management. One generalist paralegal cannot excel at both.
          </p>

          <p className="text-base text-text-mid leading-relaxed font-300">
            Modern law practice needs modern staffing: specialized, flexible, scalable, no management overhead. That is a VA. Not a traditional hire.
          </p>
        </section>

        <section className="my-16 p-8 bg-charcoal text-white rounded-sm">
          <h2 className="font-serif text-2xl mb-4">Stop Hiring. Start Partnering.</h2>
          <p className="text-base text-white/70 leading-relaxed mb-6 font-300">
            You do not need a paralegal. You need a specialized virtual assistant. Same quality. One-third the cost. No management overhead. Flexible scaling. Better fit for modern law practice. That is the way forward.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-brass text-white text-xs font-600 tracking-wider uppercase hover:bg-brass-light transition-all duration-300"
          >
            Explore VA Partnership
          </Link>
        </section>
      </article>
    </main>
  );
}
