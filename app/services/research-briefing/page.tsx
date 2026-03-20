import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Legal Research & Briefing Service | Lawyer Capital VA',
  description: 'Case law research, statutory research, brief preparation, and legal analysis support.',
  keywords: 'legal research service, legal briefing, case law research',
};

export default function ResearchBriefingPage() {
  return (
    <main className="pt-32 bg-ivory min-h-screen">
      <article className="max-w-4xl mx-auto px-16 py-20">
        <h1 className="font-serif text-6xl text-charcoal mb-8 leading-tight">
          Legal Research: Research Faster, Brief Better, Win More
        </h1>

        <p className="text-lg text-text-mid font-300 mb-12 border-l-4 border-brass pl-6">
          <strong>The problem:</strong> You need to file a motion on Tuesday. Today is Thursday. You spend Friday and Monday researching. You find 23 cases. You sort through them. You identify the 5 most relevant. You write the brief Monday evening. You file Tuesday morning at 8:47am. Your competitor filed Friday afternoon with a cleaner brief and better case selection. They win.
        </p>

        <section className="mb-16 py-12 bg-charcoal/5 px-8 rounded-sm border-l-4 border-brass">
          <h2 className="font-serif text-3xl text-charcoal mb-6">Why Legal Research Consumes Endless Time</h2>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            <strong>Good research takes time.</strong> You need multiple Westlaw/Lexis searches. You need to read summaries. You need to evaluate relevance. You need to Shepardize/KeyCite. You need to read the full opinions. You need to synthesize the law. 20-40 hours per substantive motion.
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            <strong>But most of this time is not billable.</strong> You cannot charge the client $5,000-10,000 for research they do not understand. You absorb the cost. You race through research to minimize time spent. The brief suffers. The argument is weaker. You lose.
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300">
            <strong>Your VA handles research prep so you do the analysis.</strong> Your VA researches, compiles case summaries, identifies the most relevant authorities, and organizes the research. You read the distilled research and write the argument. Same quality. One-third the time.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-6 mt-12">Legal Research & Briefing Services</h2>

          <div className="space-y-6">
            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-xl text-charcoal mb-2">Case Law Research & Compilation</h3>
              <p className="text-base text-text-mid leading-relaxed font-300">
                Your VA researches Westlaw/Lexis for relevant case law. They compile case summaries showing holdings, key facts, and relevance to your argument. They organize by strength. You focus on the strongest cases.
              </p>
            </div>

            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-xl text-charcoal mb-2">Statutory Research & Analysis</h3>
              <p className="text-base text-text-mid leading-relaxed font-300">
                Need to research a statute? Your VA compiles all relevant sections, identifies legislative history, finds regulatory guidance, and summarizes applicable case interpretation. You understand the statute before you write.
              </p>
            </div>

            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-xl text-charcoal mb-2">Authority Verification & Shepardizing</h3>
              <p className="text-base text-text-mid leading-relaxed font-300">
                Your VA Shepardizes/KeyCites all authorities you plan to cite. They flag any negative history. They identify related cases. You file knowing all citations are good law.
              </p>
            </div>

            <div className="border-l-4 border-brass pl-6">
              <h3 className="font-serif text-xl text-charcoal mb-2">Local Rule & Procedural Research</h3>
              <p className="text-base text-text-mid leading-relaxed font-300">
                Different courts have different rules. Your VA maintains a library of local rules for each court/judge. They research procedural requirements before you file. No surprises. No rejections.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16 p-10 bg-brass/15 border-2 border-brass rounded-sm">
          <h2 className="font-serif text-3xl text-charcoal mb-8">The Research Time Cost</h2>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            <strong>Average motion research time: 20-40 hours</strong> (searching, reading, evaluating, synthesizing).
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            <strong>With a VA handling prep:</strong> Reduces to 5-10 hours (reading VA summaries + writing argument).
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            <strong>Time savings: 10-30 hours per motion</strong> = recovered time for other cases.
          </p>
          <p className="font-600 text-charcoal">
            One motion per month = 120-360 hours/year recovered = $30,000-90,000 in recovered billable capacity per year.
          </p>
        </section>

        <section className="my-16 p-8 bg-charcoal text-white rounded-sm">
          <h2 className="font-serif text-2xl mb-4">Research Smarter. Brief Better. Win.</h2>
          <p className="text-base text-white/70 leading-relaxed mb-6 font-300">
            Your legal analysis is what wins cases. Research is the foundation. Your VA handles the foundation work so you can focus on the argument that matters. Cleaner briefs. Stronger authorities. Better outcomes.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-brass text-white text-xs font-600 tracking-wider uppercase hover:bg-brass-light transition-all duration-300"
          >
            Get Research & Briefing Support
          </Link>
        </section>
      </article>
    </main>
  );
}
