import { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'Criminal Defense Virtual Assistant | Lawyer Capital VA',
  description: 'Discovery management, case file organization, motion preparation, and trial coordination.',
  keywords: 'criminal defense virtual assistant, discovery management, criminal case support',
};

export default function CriminalDefensePage() {
  return (
    <main className="bg-ivory min-h-screen">
      <PageHeader
        label="Criminal Defense Support"
        title="126 Hours of Video. 118 Cases. You Can't Review All of It."
        subtitle="Your VA does. They summarize the video, flag inconsistencies, organize digital evidence. You enter trial prepared."
      />
      <article className="max-w-4xl mx-auto px-16 py-20">
        <h1 className="font-serif text-6xl text-charcoal mb-8 leading-tight">
          Criminal Defense: Discovery is Drowning You
        </h1>

        <p className="text-lg text-text-mid font-300 mb-12 border-l-4 border-brass pl-6">
          <strong>The real problem:</strong> One arrest. Six officers on scene. That is 6 hours of body camera footage. One dash cam recording from the squad car (another 45 minutes). Surveillance video from the nearby business (3 hours). Text messages between parties (847 messages). Phone records. Social media screenshots. Digital evidence scattered across 5 different platforms. You have 126 hours of video to watch to build a coherent case theory. You have 118 other cases waiting. Your client is incarcerated. You have not reviewed their discovery. That is not a business problem. That is a quality-of-representation crisis.
        </p>

        {/* THE DISCOVERY CRISIS */}
        <section className="mb-16 py-12 bg-charcoal/5 px-8 rounded-sm border-l-4 border-brass">
          <h2 className="font-serif text-3xl text-charcoal mb-6">The Digital Discovery Crisis</h2>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            <strong><a href="https://www.rand.org/pubs/research_reports/RRA2559-1.html" className="text-brass font-500 hover:underline">According to the National Public Defense Workload Study (RAND, 2024-2025)</a>,</strong> discovery work has become increasingly administrative and multimedia-intensive. A single domestic violence incident with 5-6 police officers on scene generates 5-6 hours of body-worn camera footage that must be reviewed and processed. A DUI case now includes dash cam, breath test device data, phone records, toxicology documentation, and pharmacy records.
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            <strong>The workload disparity is staggering.</strong> Old public defender standards allowed 150 felony cases per public defender at 14 hours per case. New research recommends 7 cases at 286 hours per case—a 20x increase in required time. The standard didn't change because cases got easier. It changed because digital discovery and forensic evidence have exploded the workload.
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300">
            <strong>And private defense attorneys don't have the same efficiency support.</strong> Public defenders have discovery coordinators. You don't. You're managing caseloads of 80-150+ cases while reviewing discovery that should take 2-3 weeks of focused work per case.
          </p>
        </section>

        {/* PAIN POINTS */}
        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-6 mt-12">The Real Criminal Defense Pain Points</h2>

          <div className="space-y-8">
            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-xl text-charcoal mb-2">1. Discovery Organization (Body Camera, Dash Cam, Digital Evidence)</h3>
              <p className="text-base text-text-mid leading-relaxed font-300">
                Prosecution delivers discovery on drives, cloud links, or third-party platforms. You have video evidence spanning 50+ hours per case. You have digital communications (texts, emails, social media). You have photos, medical records, pharmacy records, phone metadata. It's organized by the prosecution's filing system, not by relevance. You need to create a searchable, organized discovery database that makes sense to your case strategy.
              </p>
            </div>

            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-xl text-charcoal mb-2">2. Body-Worn Camera Review (5-6+ Hours Per Incident)</h3>
              <p className="text-base text-text-mid leading-relaxed font-300">
                A single arrest involves 5-6 officers. Each officer's body camera records the same incident from different angles. That's 5-6 separate 30-60 minute videos showing the same 10-minute event. You need to watch all of them, identify inconsistencies in statements, flag officer misconduct, note evidentiary issues. This is 5-10 hours per case minimum.
              </p>
            </div>

            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-xl text-charcoal mb-2">3. Digital Evidence Management (Phone Records, Messages, Social Media)</h3>
              <p className="text-base text-text-mid leading-relaxed font-300">
                Prosecution provides phone records, text message screenshots, social media printouts, chat logs. You need to verify authenticity. You need to understand timeline. You need to identify what's admissible and what's hearsay. You need to organize digital evidence by date/participant/relevance. This creates 20-40 hours of organizing work per case.
              </p>
            </div>

            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-xl text-charcoal mb-2">4. Caseload Management (80-150+ Concurrent Cases)</h3>
              <p className="text-base text-text-mid leading-relaxed font-300">
                You're not managing one case at a time. You're managing 80-150+ cases simultaneously. Each has a different discovery status, different court dates, different witnesses, different legal issues. You're juggling discovery review, motion drafting, plea negotiation, trial prep, and client management across dozens of files simultaneously.
              </p>
            </div>

            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-xl text-charcoal mb-2">5. Motion Preparation & Case Law Research (30-50 Hours Per Motion)</h3>
              <p className="text-base text-text-mid leading-relaxed font-300">
                Every motion requires researching relevant case law, reviewing discovery to support your argument, organizing exhibits and evidence, and preparing responsive briefs in case prosecution replies. Suppression motions require detailed factual development from body camera/dash cam evidence. This is 20-50 hours per motion.
              </p>
            </div>
          </div>
        </section>

        {/* ROI SECTION */}
        <section className="mb-16 p-10 bg-brass/15 border-2 border-brass rounded-sm">
          <h2 className="font-serif text-3xl text-charcoal mb-8">The Workload You Cannot Manage Alone</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="font-serif text-5xl text-brass font-600 mb-2">80-150</div>
              <p className="text-sm text-charcoal font-500">concurrent cases</p>
              <p className="text-xs text-text-mid mt-2">(typical criminal defense caseload)</p>
            </div>
            <div className="text-center">
              <div className="font-serif text-5xl text-brass font-600 mb-2">30-50 hrs</div>
              <p className="text-sm text-charcoal font-500">per case discovery review</p>
              <p className="text-xs text-text-mid mt-2">(multimedia + digital evidence)</p>
            </div>
            <div className="text-center">
              <div className="font-serif text-5xl text-brass font-600 mb-2">2,400-7,500</div>
              <p className="text-sm text-charcoal font-500">hours/year unmanaged</p>
              <p className="text-xs text-text-mid mt-2">(discovery backlog across all cases)</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-sm border-l-4 border-brass">
            <h3 className="font-600 text-charcoal mb-3">Real Firm Math: Criminal Defense Practice</h3>
            <p className="text-base text-text-mid leading-relaxed font-300">
              <strong>Typical practice:</strong> 80-150 cases per year. Average case = 30-50 hours of discovery review, motion work, and case preparation at 2+ hours per case minimum. That's 2,400-7,500 hours/year of work required. But you only have 2,000 billable hours per year. You're underwater before you even start.
            </p>
            <p className="text-base text-text-mid leading-relaxed font-300 mt-3">
              <strong>The math doesn't work.</strong> You need 2,400-7,500 hours. You have 2,000 hours. You're choosing which cases don't get adequate discovery review. That's not a business problem. That's a quality-of-representation problem.
            </p>
            <p className="text-base text-text-mid leading-relaxed font-300 mt-3">
              <strong>With a criminal defense VA:</strong> Handles discovery organization, video review coordination, digital evidence management, and case file organization. Reduces discovery review time from 30-50 hours to 10-15 hours per case (you focus on analysis, they handle triage). Recovers 1,600-4,000 hours/year of billable capacity.
            </p>
            <p className="text-base text-text-mid leading-relaxed font-300 mt-3">
              <strong>VA cost:</strong> $2,500-3,500/month = $30,000-42,000/year.
            </p>
            <p className="font-600 text-charcoal mt-4">
              <strong>Net gain: Adequate discovery review on all cases + recovery of 1,600-4,000 hours/year.</strong>
            </p>
          </div>
        </section>

        {/* FAQs */}
        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-6 mt-12">FAQs: Criminal Defense Practice</h2>

          <div className="space-y-6">
            <details className="p-6 bg-white border border-text-light/10 rounded-sm group">
              <summary className="cursor-pointer font-600 text-charcoal flex justify-between items-center">
                How does a VA organize and summarize body-worn camera footage?
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-base text-text-mid leading-relaxed font-300 mt-4">
                Your VA receives body-worn camera footage from all officers on scene. They organize footage chronologically. They watch each video and prepare a timeline summary noting key events, statements, apparent inconsistencies, and notable observations. They flag segments that are important for motion practice. They prepare a synopsis so you can review the distilled information instead of watching 5-6 hours of video.
              </p>
            </details>

            <details className="p-6 bg-white border border-text-light/10 rounded-sm group">
              <summary className="cursor-pointer font-600 text-charcoal flex justify-between items-center">
                Can a VA manage digital evidence and communications?
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-base text-text-mid leading-relaxed font-300 mt-4">
                Yes. Your VA receives phone records, text messages, social media printouts, and chat logs. They organize communications chronologically by participant. They flag relevant exchanges. They identify inconsistencies in statements between parties. They prepare a digital evidence summary showing what was said when, and by whom. This saves 20-30 hours of manual evidence organization per case.
              </p>
            </details>

            <details className="p-6 bg-white border border-text-light/10 rounded-sm group">
              <summary className="cursor-pointer font-600 text-charcoal flex justify-between items-center">
                How does a VA help manage 80-150+ concurrent cases?
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-base text-text-mid leading-relaxed font-300 mt-4">
                Your VA maintains a case management dashboard showing all active cases, their status, discovery completion status, next court date, and outstanding tasks. They track discovery timelines. They alert you to approaching deadlines. They organize case files so you find the information you need instantly. They ensure no case falls through the cracks due to caseload volume.
              </p>
            </details>

            <details className="p-6 bg-white border border-text-light/10 rounded-sm group">
              <summary className="cursor-pointer font-600 text-charcoal flex justify-between items-center">
                Can a VA prepare discovery summaries and motions packets?
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-base text-text-mid leading-relaxed font-300 mt-4">
                Absolutely. Your VA prepares discovery summaries highlighting key evidence, factual inconsistencies, and evidentiary issues. They organize discovery by relevance and issue. They compile relevant case law for motion arguments. They prepare motion packets with exhibits organized and tabbed. You focus on legal strategy and argument development; they handle document assembly.
              </p>
            </details>

            <details className="p-6 bg-white border border-text-light/10 rounded-sm group">
              <summary className="cursor-pointer font-600 text-charcoal flex justify-between items-center">
                How much discovery and administrative work is actually required?
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-base text-text-mid leading-relaxed font-300 mt-4">
                National Public Defense standards recommend 286 hours per case for adequate representation—far above the old 14-hour standard. At 80-150 cases/year, you need 22,880-42,900 hours/year. You have 2,000 billable hours/year. A dedicated VA reduces required discovery work from 30-50 hours to 10-15 hours per case, making your caseload manageable while ensuring adequate representation.
              </p>
            </details>
          </div>
        </section>

        {/* CTA */}
        <section className="my-16 p-8 bg-charcoal text-white rounded-sm">
          <h2 className="font-serif text-2xl mb-4">Your Clients Deserve Adequate Discovery Review</h2>
          <p className="text-base text-white/70 leading-relaxed mb-6 font-300">
            Criminal defense is about examining government evidence and holding the state to its burden of proof. You can't do that while drowning in discovery organization and multimedia triage. A dedicated criminal defense VA handles discovery organization and evidence synthesis, so you can focus on what matters: identifying weaknesses in the prosecution's case and protecting client rights. Your clients deserve an attorney who has actually reviewed their discovery.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-brass text-white text-xs font-600 tracking-wider uppercase hover:bg-brass-light transition-all duration-300"
          >
            Get Criminal Defense Support
          </Link>
        </section>
      </article>
    </main>
  );
}
