import { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'Estate Planning Trust Funding Mistakes | Lawyer Capital VA',
  description: 'Avoid common trust funding mistakes that undermine estate plans.',
  keywords: 'estate planning, trust funding, probate avoidance',
};

export default function EstatePlanningBlogPost() {
  return (
    <main className="bg-ivory min-h-screen">
      <PageHeader
        label="Estate Planning"
        title="Trust Funding Mistakes"
        subtitle="Perfect plan. Client signed it. Client died. House never transferred to trust. Your VA prevents this with post-signing coordination."
      />
      <article className="max-w-4xl mx-auto px-16 py-20">
        <h1 className="font-serif text-6xl text-charcoal mb-8 leading-tight">
          Trust Funding Mistakes: When Your Estate Plan Fails After Death
        </h1>

        <p className="text-lg text-text-mid font-300 mb-12 border-l-4 border-brass pl-6">
          You draft a comprehensive revocable living trust. The client signs it. The plan is complete. Eighteen months later, the client dies. Probate begins. You discover: the house was never transferred to the trust. The investment account was never retitled. The client named an ex-spouse as beneficiary on the life insurance. The trust is useless. The estate goes to probate anyway. You failed.
        </p>

        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-6">The Five Most Common Trust Funding Mistakes</h2>

          <div className="space-y-8">
            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-xl text-charcoal mb-2">Mistake 1: Trust is Drafted But Never Funded</h3>
              <p className="text-base text-text-mid leading-relaxed font-300">
                The trust document is signed and notarized. But nothing is put into it. The client thinks the plan is done. They do not know they need to retitle assets. One year passes. Client dies. Estate goes through probate anyway.
              </p>
              <p className="text-base text-text-mid leading-relaxed font-300 mt-3">
                <strong>Fix:</strong> After execution, immediately prepare a funding checklist. Give the client a deadline. Follow up every 30 days until all assets are retitled. Do not consider the plan "done" until it is fully funded.
              </p>
            </div>

            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-xl text-charcoal mb-2">Mistake 2: Beneficiary Designations Never Updated</h3>
              <p className="text-base text-text-mid leading-relaxed font-300">
                The trust names the spouse as beneficiary. But the life insurance still names the ex-spouse. The IRA still names the old ex-partner. The trust is useless because $500,000 in assets pass outside the plan.
              </p>
              <p className="text-base text-text-mid leading-relaxed font-300 mt-3">
                <strong>Fix:</strong> Create a beneficiary designation checklist showing every asset with a beneficiary designation. Confirm each designation matches the plan. Follow up quarterly until all are updated.
              </p>
            </div>

            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-xl text-charcoal mb-2">Mistake 3: No Follow-Up on Client Action</h3>
              <p className="text-base text-text-mid leading-relaxed font-300">
                You give the client a funding checklist. Months pass. You do not follow up. Client procrastinates. Assets are never retitled. Plan is incomplete.
              </p>
              <p className="text-base text-text-mid leading-relaxed font-300 mt-3">
                <strong>Fix:</strong> You must follow up. Every 30 days. Send the client a note: "Have you retitled the house into the trust yet?" Get the client to commit to a deadline. Then hold them to it.
              </p>
            </div>

            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-xl text-charcoal mb-2">Mistake 4: Digital Assets & Intangible Property Never Documented</h3>
              <p className="text-base text-text-mid leading-relaxed font-300">
                The client has cryptocurrency. They have online accounts. They have digital photos stored in the cloud. The trust does not mention any of this. Upon death, nobody can access the digital assets because nobody knows they exist.
              </p>
              <p className="text-base text-text-mid leading-relaxed font-300 mt-3">
                <strong>Fix:</strong> Create a digital asset inventory during planning. Document all online accounts, cryptocurrency, digital photos, digital business. Ensure the trustee can access and manage digital assets.
              </p>
            </div>

            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-xl text-charcoal mb-2">Mistake 5: No Funding Coordination with Financial Institutions</h3>
              <p className="text-base text-text-mid leading-relaxed font-300">
                The client wants to retitle their brokerage account into the trust. The brokerage requires forms signed by the client. The client forgets. The account is never retitled.
              </p>
              <p className="text-base text-text-mid leading-relaxed font-300 mt-3">
                <strong>Fix:</strong> Contact financial institutions directly. Get their retitling requirements in writing. Coordinate with the client to sign required forms. Do not assume the client will handle this.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16 p-10 bg-brass/15 border-2 border-brass rounded-sm">
          <h2 className="font-serif text-3xl text-charcoal mb-8">The Real Problem</h2>
          <p className="text-base text-text-mid leading-relaxed font-300">
            You cannot draft a plan and walk away. Your job is not done when the document is signed. Your job is done when the plan is fully funded and executed. That requires follow-up. That requires coordination. That requires deadline management.
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300 mt-4">
            Most attorneys treat planning as a one-time event (draft, sign, invoice). Smart attorneys treat it as an ongoing process: draft → fund → verify → execute. The second approach takes more time. It also works.
          </p>
        </section>

        <section className="my-16 p-8 bg-charcoal text-white rounded-sm">
          <h2 className="font-serif text-2xl mb-4">Complete Estate Plans. Not Incomplete Documents.</h2>
          <p className="text-base text-white/70 leading-relaxed mb-6 font-300">
            A trust sitting in a desk drawer is useless. A fully funded, coordinated, executed plan is priceless. Do the work to ensure your plans are complete. Your client's family will be grateful. You will not face malpractice claims.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-brass text-white text-xs font-600 tracking-wider uppercase hover:bg-brass-light transition-all duration-300"
          >
            Get Estate Planning Coordination Support
          </Link>
        </section>
      </article>
    </main>
  );
}
