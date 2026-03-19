import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Confidentiality & Attorney-Client Privilege | Lawyer Capital VA',
  description: 'How Lawyer Capital VA protects attorney-client privilege with NDA-protected VAs, Checkr background verification, and encrypted communication.',
};

export default function Confidentiality() {
  return (
    <main className="pt-32">
      <article className="max-w-4xl mx-auto px-16 py-20">
        <h1 className="font-serif text-6xl text-charcoal mb-8 leading-tight">Confidentiality & Attorney-Client Privilege</h1>

        <p className="text-lg text-text-mid leading-relaxed font-300 mb-12">
          Attorney-client privilege doesn't disappear because your VA is remote. It gets stronger if you build confidentiality into your operations from day one. Here's how we do it.
        </p>

        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-6 mt-12">The Four Pillars of Confidentiality</h2>

          <div className="space-y-8">
            {[
              {
                title: 'NDA Before Access',
                desc: 'Every VA in our network signs a comprehensive non-disclosure agreement before accessing any client systems, case files, or communications. This agreement explicitly addresses attorney-client privilege and its preservation. It covers data retention, termination protocols, and legal remedies for breach.',
              },
              {
                title: 'Checkr Background Verification',
                desc: 'We background check every VA through Checkr before assignment. Identity verification, criminal history check, employment verification, and professional reference validation. This is non-negotiable. If they don\'t pass, they don\'t get access.',
              },
              {
                title: 'Encrypted Communication',
                desc: 'All client data and case materials are transmitted through encrypted channels via Continia. No sensitive information in standard email. No case files on personal devices. No screenshots shared in unsecured chat. Everything is locked.',
              },
              {
                title: 'Role-Based Access Controls',
                desc: 'VAs access only the systems and files necessary for their assigned tasks. If they\'re managing intake, they don\'t need access to litigation files. If they\'re handling document prep, they don\'t need billing info. Permissions are reviewed monthly by your Client Manager.',
              },
            ].map((pillar, idx) => (
              <div key={idx} className="p-8 border border-text-light/10 hover:border-brass/20 transition-colors">
                <h3 className="font-serif text-xl text-charcoal mb-3 flex items-center gap-3">
                  <span className="text-brass font-600">✓</span>
                  {pillar.title}
                </h3>
                <p className="text-base text-text-mid leading-relaxed font-300">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-6 mt-12">What About GDPR / HIPAA?</h2>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-6">
            We're compliant with data protection regulations. Your data stays under your control. We don't use client data for training, aggregation, or AI. We don't move data between countries without explicit consent. If you need specific compliance frameworks (GDPR, CCPA, etc.), we document them in your contract.
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300">
            Talk to us about your specific compliance needs. We'll adapt our protocols to fit.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-6 mt-12">What Happens If a VA Leaves?</h2>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            When a VA separates from our network, we immediately revoke system access. All client data is purged from their devices. Their NDA remains in effect indefinitely. If they breach confidentiality, we pursue legal remedies on your behalf.
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300">
            You have a backup VA on day one anyway. When someone leaves, we transition smoothly to their backup without missing a beat.
          </p>
        </section>

        <section className="my-20 p-8 bg-charcoal text-white border-l-4 border-brass">
          <p className="text-base font-500 italic">
            "Every VA handling legal work operates under the same confidentiality standards as your staff attorney. That's how attorney-client privilege works at scale."
          </p>
        </section>

        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-6 mt-12">Common Questions</h2>

          <div className="space-y-8">
            <div>
              <h4 className="font-serif text-lg text-charcoal mb-3">Can a VA access attorney work product?</h4>
              <p className="text-base text-text-mid leading-relaxed font-300">
                No. Work product (attorney internal analysis, strategy memos, trial prep) stays attorney-only. VAs handle client-facing documents, administrative tasks, and case management—not privileged strategy work. You control what they see.
              </p>
            </div>

            <div>
              <h4 className="font-serif text-lg text-charcoal mb-3">What if my client asks if a VA has accessed their files?</h4>
              <p className="text-base text-text-mid leading-relaxed font-300">
                You can honestly say: "Yes, our VA handles administrative tasks under an NDA. They're bound by the same confidentiality standards as our staff." Many sophisticated clients expect this. What matters is the protection layer, not the number of people involved.
              </p>
            </div>

            <div>
              <h4 className="font-serif text-lg text-charcoal mb-3">How does encryption actually work?</h4>
              <p className="text-base text-text-mid leading-relaxed font-300">
                Continia provides end-to-end encryption for all file transfers. Your data is encrypted in transit and at rest. Even Continia employees can't decrypt your files. It's the same standard as enterprise banking. If you need details on encryption method or security certifications, we provide them.
              </p>
            </div>

            <div>
              <h4 className="font-serif text-lg text-charcoal mb-3">Can you guarantee no data breach?</h4>
              <p className="text-base text-text-mid leading-relaxed font-300">
                No one can guarantee that. But we implement industry-standard security: encryption, background checks, NDA enforcement, access logging, and regular audits. If a breach occurs, we notify you within 24 hours and cooperate fully with any investigation. Our E&O insurance covers this.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="font-serif text-3xl text-charcoal mb-6 mt-12">Ready to Talk Confidentiality?</h2>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-8">
            If you have specific security or compliance requirements, let's discuss them. Schedule a consultation and we'll walk through our protocols in detail.
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
