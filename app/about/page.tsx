import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Lawyer Capital VA | Legal Virtual Assistant Services',
  description: 'Learn about Lawyer Capital VA—why law firms need managed VA support, how we protect attorney-client privilege, and our 6-year track record with The Human Capital.',
};

export default function About() {
  return (
    <main className="pt-32">
      <article className="max-w-4xl mx-auto px-16 py-20">
        <h1 className="font-serif text-6xl text-charcoal mb-8 leading-tight">About Lawyer Capital VA</h1>

        <p className="text-lg text-text-mid leading-relaxed font-300 mb-8">
          Lawyer Capital VA is a dedicated virtual assistant service built specifically for law firms. We're not a general VA marketplace or a receptionist service. We're attorneys' operational partners — trained on legal workflows, bound by NDAs, and obsessed with attorney-client privilege.
        </p>

        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-6 mt-12">Why Law Firms Need Managed VA Support</h2>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-6">
            Attorneys are drowning in admin work. Client intake. Document formatting. Deadline tracking. Billing. Filings. All of it pulls time away from billable work and client relationships.
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-6">
            The traditional hire (paralegal, legal secretary) is expensive, rigid, and creates turnover costs. A solo attorney or small firm can't justify $45K-$65K for a full-time employee. And when that person leaves, you start over.
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300">
            A managed VA service solves this. You get a dedicated person for a fraction of the cost. They're trained on your practice area, your tools, your workflows. If they're out, you have backup. If you need to scale, you scale. No turnover, no recruitment, no retraining.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-6 mt-12">Attorney-Client Privilege as Design Principle</h2>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-6">
            Here's what makes us different: we treat attorney-client privilege like it matters.
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-6">
            Every VA in our network signs an ironclad NDA before touching any system. We background check every person through Checkr. We enforce encryption on all communication. We audit access logs. We implement role-based permissions so each VA only sees what they need to see.
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-6">
            This isn't negotiable. If a VA is in your files, they're operating under the same confidentiality standards as your staff attorney. That's the only way attorney-client privilege works with remote support.
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300">
            We put this in writing. Our contract with you explicitly addresses privilege preservation. Your client's data is never sold, never aggregated, never used for AI training. It's yours.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-6 mt-12">The Human Capital Connection</h2>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-6">
            Lawyer Capital VA is part of The Human Capital, a 6-year-old managed VA services company. We've placed thousands of VAs, maintained a 97% client retention rate, and worked with everything from solo practitioners to mid-size firms.
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-6">
            The legal vertical is our specialty. We've learned what works and what doesn't. We've built processes that preserve privilege, match attorneys with the right VA personality, and scale without losing quality.
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300">
            When you work with us, you're not the first experiment. You're the 1,000th. That matters.
          </p>
        </section>

        <section className="my-20 p-8 bg-ivory-warm border-l-4 border-brass">
          <p className="text-base text-charcoal font-500 italic">
            "Every VA handling legal work operates under the same confidentiality standards as your staff. That's how we preserve attorney-client privilege with remote support."
          </p>
        </section>

        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-6 mt-12">Our Vetting Process</h2>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-6">
            We hire the top 3% of applicants. That means:
          </p>
          <ul className="space-y-4 mb-8">
            <li className="flex gap-4">
              <span className="text-brass font-700 mt-1">→</span>
              <span className="text-base text-text-mid font-300"><strong className="font-500">Resume review</strong> — we look for legal admin experience, communication skills, and attention to detail.</span>
            </li>
            <li className="flex gap-4">
              <span className="text-brass font-700 mt-1">→</span>
              <span className="text-base text-text-mid font-300"><strong className="font-500">Skills assessment</strong> — written test covering legal terminology, document formatting, and workflow organization.</span>
            </li>
            <li className="flex gap-4">
              <span className="text-brass font-700 mt-1">→</span>
              <span className="text-base text-text-mid font-300"><strong className="font-500">Video interview</strong> — we assess communication, problem-solving, and cultural fit.</span>
            </li>
            <li className="flex gap-4">
              <span className="text-brass font-700 mt-1">→</span>
              <span className="text-base text-text-mid font-300"><strong className="font-500">Background check (Checkr)</strong> — identity verification, criminal history, and professional references.</span>
            </li>
            <li className="flex gap-4">
              <span className="text-brass font-700 mt-1">→</span>
              <span className="text-base text-text-mid font-300"><strong className="font-500">Paid trial period</strong> — if all else passes, they work with a test client to prove they can execute on legal work.</span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-3xl text-charcoal mb-6 mt-12">Ready to Talk?</h2>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-8">
            Schedule a 15-minute consultation. We'll assess your firm's needs, answer questions about confidentiality and privilege, and explain how a dedicated VA could change your practice.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-brass text-white text-xs font-600 tracking-wider uppercase hover:bg-brass-light transition-all duration-300"
          >
            Schedule Consultation
          </a>
        </section>
      </article>
    </main>
  );
}
