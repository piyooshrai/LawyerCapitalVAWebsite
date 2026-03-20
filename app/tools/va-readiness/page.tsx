import { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'VA Readiness Checklist | Lawyer Capital VA',
  description: 'Is your firm ready for a virtual assistant? Complete this assessment.',
  keywords: 'virtual assistant readiness, law firm assessment',
};

export default function VaReadinessPage() {
  return (
    <main className="bg-ivory min-h-screen">
      <PageHeader
        label="Assessment Tools"
        title="VA Readiness Checklist"
        subtitle="Not every firm is ready yet. Some need process documentation first. Some need better case organization. Find out where you stand."
      />
      <article className="max-w-4xl mx-auto px-16 py-20">
        <h1 className="font-serif text-6xl text-charcoal mb-8 leading-tight">
          VA Readiness Checklist: Is Your Firm Ready?
        </h1>

        <p className="text-lg text-text-mid font-300 mb-12 border-l-4 border-brass pl-6">
          Not every firm is ready for a VA. Some need process documentation first. Some have poor case organization. Some lack communication discipline. Complete this checklist to see if your firm is ready, and if not, what needs fixing.
        </p>

        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-6">Readiness Assessment</h2>

          <div className="space-y-6">
            <div className="bg-white p-6 border border-text-light/10 rounded-sm">
              <h3 className="font-600 text-charcoal mb-4">Case Organization (Readiness for Document Management)</h3>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-3" />
                  <span className="text-base text-text-mid">Your case files are organized consistently across matters</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-3" />
                  <span className="text-base text-text-mid">You use a consistent file naming system</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-3" />
                  <span className="text-base text-text-mid">Documents are stored in one consistent location (not scattered across drives)</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-3" />
                  <span className="text-base text-text-mid">You have written procedures for case file setup</span>
                </label>
              </div>
              <p className="mt-4 text-sm text-text-mid"><strong>Score:</strong> __/4. Less than 2? Document your processes before hiring a VA.</p>
            </div>

            <div className="bg-white p-6 border border-text-light/10 rounded-sm">
              <h3 className="font-600 text-charcoal mb-4">Process Documentation (Readiness for Delegation)</h3>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-3" />
                  <span className="text-base text-text-mid">You have written procedures for your main work processes</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-3" />
                  <span className="text-base text-text-mid">Your staff knows your preferred way of doing things (not just your memory)</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-3" />
                  <span className="text-base text-text-mid">You have communication standards (how to email, format, sign-off)</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-3" />
                  <span className="text-base text-text-mid">You use templates for routine documents and communications</span>
                </label>
              </div>
              <p className="mt-4 text-sm text-text-mid"><strong>Score:</strong> __/4. Less than 2? Create process documentation first.</p>
            </div>

            <div className="bg-white p-6 border border-text-light/10 rounded-sm">
              <h3 className="font-600 text-charcoal mb-4">Communication Discipline (Readiness for Remote Work)</h3>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-3" />
                  <span className="text-base text-text-mid">You use email for most communication (not unrecorded phone calls)</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-3" />
                  <span className="text-base text-text-mid">You are comfortable with asynchronous communication (not requiring instant response)</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-3" />
                  <span className="text-base text-text-mid">You provide clear, written instructions for tasks</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-3" />
                  <span className="text-base text-text-mid">You give feedback regularly (not waiting for performance to tank)</span>
                </label>
              </div>
              <p className="mt-4 text-sm text-text-mid"><strong>Score:</strong> __/4. Less than 2? Improve communication discipline first.</p>
            </div>

            <div className="bg-white p-6 border border-text-light/10 rounded-sm">
              <h3 className="font-600 text-charcoal mb-4">Technology Readiness</h3>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-3" />
                  <span className="text-base text-text-mid">You have cloud storage (Google Drive, Dropbox, OneDrive, or similar)</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-3" />
                  <span className="text-base text-text-mid">You use practice management software or case management system</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-3" />
                  <span className="text-base text-text-mid">You can create secure access for a VA to your systems</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-3" />
                  <span className="text-base text-text-mid">You are comfortable with video conferencing and remote collaboration</span>
                </label>
              </div>
              <p className="mt-4 text-sm text-text-mid"><strong>Score:</strong> __/4. Less than 2? Upgrade your technology first.</p>
            </div>
          </div>
        </section>

        <section className="mb-16 p-10 bg-brass/15 border-2 border-brass rounded-sm">
          <h2 className="font-serif text-3xl text-charcoal mb-8">Your Readiness Score</h2>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-6">
            <strong>13-16 points:</strong> You are ready for a VA. You have good processes and discipline. A VA will integrate easily and deliver immediate value.
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-6">
            <strong>9-12 points:</strong> You are mostly ready. Fix 1-2 areas first (likely process documentation or communication discipline). Then hire a VA.
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300">
            <strong>Less than 9 points:</strong> You have work to do first. Document your processes. Organize your cases. Establish communication standards. Then hire a VA. A VA cannot fix broken foundations.
          </p>
        </section>

        <section className="my-16 p-8 bg-charcoal text-white rounded-sm">
          <h2 className="font-serif text-2xl mb-4">Get Ready or Get Help</h2>
          <p className="text-base text-white/70 leading-relaxed mb-6 font-300">
            Either fix your foundations yourself, or let a VA help you build them while handling your work. Either way, the time to improve your operations is now. Do not put this off.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-brass text-white text-xs font-600 tracking-wider uppercase hover:bg-brass-light transition-all duration-300"
          >
            Discuss Your Readiness
          </Link>
        </section>
      </article>
    </main>
  );
}
