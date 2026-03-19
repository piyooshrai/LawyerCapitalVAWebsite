import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How It Works | Lawyer Capital VA',
  description: 'Our 4-step process to match you with a dedicated legal virtual assistant in less than a week.',
};

export default function HowItWorks() {
  return (
    <main className="pt-32">
      <article className="max-w-4xl mx-auto px-16 py-20">
        <h1 className="font-serif text-6xl text-charcoal mb-8 leading-tight">How It Works</h1>

        <p className="text-lg text-text-mid leading-relaxed font-300 mb-12">
          Our process is straightforward. Consultation. VA matching. NDA & onboarding. Then you're operational. From first call to VA managing your inbox: 5-7 days.
        </p>

        <div className="grid grid-cols-4 gap-8 my-20">
          {[
            { num: '01', title: 'Consultation', time: 'Day 1' },
            { num: '02', title: 'VA Matching', time: 'Day 2-3' },
            { num: '03', title: 'Onboarding', time: 'Day 4-5' },
            { num: '04', title: 'Operational', time: 'Week 2+' },
          ].map((step, idx) => (
            <div key={idx} className="text-center">
              <div className="font-serif text-4xl text-brass font-600 mb-3">{step.num}</div>
              <h3 className="font-serif text-xl text-charcoal mb-2">{step.title}</h3>
              <p className="text-xs text-brass font-600 tracking-wide uppercase">{step.time}</p>
            </div>
          ))}
        </div>

        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-6 mt-12">Step 1: Consultation</h2>
          <p className="text-base text-text-mid leading-relaxed font-300">
            You talk to our team for 15 minutes. We ask about your practice type, your biggest pain points, your tools (Clio? MyCase?), and what "done" looks like. We're not here to pitch. We're here to understand if we're a fit.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-6 mt-12">Step 2: VA Matching</h2>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            We present a dedicated VA who matches your needs. Civil litigation? We have VAs trained in discovery management and trial prep. Immigration practice? Someone who's managed multi-jurisdictional cases. We don't rotate people. You get one dedicated person.
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300">
            We vet the top 3% of applicants through background checks, interviews, and skills assessments. The person we propose has already passed our gauntlet.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-6 mt-12">Step 3: Onboarding & NDA</h2>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            Before your VA touches anything, they sign an NDA. We configure their access to your systems (Clio, email, file drives, whatever). You define scope. Your Client Manager is assigned.
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300">
            Everything is documented. You know what they have access to. You know what they're responsible for. You know who to call if something goes wrong.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-6 mt-12">Step 4: Operational</h2>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            Your VA is in your systems, managing your inbox, your intake, your documents, your calendar—whatever you've decided together. They report to your Client Manager, who oversees quality.
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300">
            Monthly KPI reviews. If something isn't working, we adjust. If you need to scale (add hours, add another VA, etc.), we scale. You're not locked in. Month-to-month. Cancel anytime.
          </p>
        </section>

        <section className="my-20 p-8 bg-ivory-warm border-l-4 border-brass">
          <p className="text-base text-charcoal font-500 italic">
            "From consultation to operational: less than a week. That's how fast we move."
          </p>
        </section>

        <section>
          <h2 className="font-serif text-3xl text-charcoal mb-6 mt-12">What About Training?</h2>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-6">
            We train on tools (Clio, MyCase, PracticePanther, etc.) before matching. But legal training is ongoing. Your VA will ask questions. They'll learn your practice area's nuances. They'll understand court rules, client communication norms, and document standards through proximity to your work.
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-8">
            You're not training someone from scratch. You're partnering with someone already trained, already vetted, and ready to go.
          </p>

          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-brass text-white text-xs font-600 tracking-wider uppercase hover:bg-brass-light transition-all duration-300"
          >
            Schedule Your Consultation
          </a>
        </section>
      </article>
    </main>
  );
}
