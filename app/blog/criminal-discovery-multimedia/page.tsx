import { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'Criminal Defense Multimedia Discovery Management | Lawyer Capital VA',
  description: 'Handle body camera footage, dash cams, and digital evidence efficiently.',
  keywords: 'criminal discovery, body camera, multimedia evidence',
};

export default function CriminalBlogPost() {
  return (
    <main className="bg-ivory min-h-screen">
      <PageHeader
        label="Criminal Defense"
        title="Multimedia Discovery Management"
        subtitle="6 body cameras, dash cams, surveillance. 126 hours of video. 118 cases. Your VA summarizes and flags. You enter trial prepared."
      />
      <article className="max-w-4xl mx-auto px-16 py-20">
        <h1 className="font-serif text-6xl text-charcoal mb-8 leading-tight">
          Criminal Defense Multimedia Discovery: Handle 100+ Hours of Video
        </h1>

        <p className="text-lg text-text-mid font-300 mb-12 border-l-4 border-brass pl-6">
          One arrest. Six officers on scene. That is 6 body cameras. Each is 45 minutes to 2 hours of footage. Dash cam footage adds another hour. Surveillance video adds 3 hours. Total: 15-20 hours of video for a 10-minute incident. You are supposed to watch all of it. You have 118 other cases. This is not happening without help.
        </p>

        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-6">Multimedia Discovery Reality</h2>

          <p className="text-base text-text-mid leading-relaxed font-300 mb-6">
            The National Public Defense Workload Study identified multimedia discovery as one of the biggest administrative burdens in criminal defense. Cases now include body camera footage, dash cam footage, surveillance video, digital communications (texts, emails, social media), and phone metadata. Manual review is impossible.
          </p>

          <p className="text-base text-text-mid leading-relaxed font-300">
            The problem: Prosecution provides discovery in raw format. 15 hours of video. It is your job to review it, identify inconsistencies, spot officer misconduct, and prepare for trial. That is 20-40 hours of solo attorney time per case. You cannot do it. Cases go to trial unprepared.
          </p>
        </section>

        <section className="mb-16 p-10 bg-brass/15 border-2 border-brass rounded-sm">
          <h2 className="font-serif text-3xl text-charcoal mb-8">Multimedia Discovery Protocol</h2>

          <p className="text-base text-text-mid leading-relaxed font-300 mb-6">
            <strong>Step 1: Video Inventory</strong> - List all video evidence: source, duration, file size. Organize by camera/source.
          </p>

          <p className="text-base text-text-mid leading-relaxed font-300 mb-6">
            <strong>Step 2: Timeline Preparation</strong> - Someone watches the video and prepares a minute-by-minute timeline. What happens at 1:35, 2:14, 5:47? Highlight the 15-20 minutes that matter. You watch the relevant portions, not all 20 hours.
          </p>

          <p className="text-base text-text-mid leading-relaxed font-300 mb-6">
            <strong>Step 3: Inconsistency Flagging</strong> - Does the video show something inconsistent with the police report? Flag it. Does one officer's account contradict another's? Flag it. Create an inconsistency log for trial prep.
          </p>

          <p className="text-base text-text-mid leading-relaxed font-300 mb-6">
            <strong>Step 4: Evidence Summary</strong> - Prepare a written summary of what the video shows. Fact-based. Neutral tone. Reference specific timestamps. You can reference this summary during depositions and trial without re-watching 20 hours of video.
          </p>

          <p className="text-base text-text-mid leading-relaxed font-300">
            <strong>Step 5: Digital Evidence Organization</strong> - Same approach for texts, emails, social media. Organize chronologically. Tag by relevance. Prepare summaries. You read summaries instead of reviewing thousands of messages individually.
          </p>
        </section>

        <section className="my-16 p-8 bg-charcoal text-white rounded-sm">
          <h2 className="font-serif text-2xl mb-4">Multimedia is Your Roadmap</h2>
          <p className="text-base text-white/70 leading-relaxed mb-6 font-300">
            Video evidence is the most credible discovery. It is your best chance to identify holes in the prosecution's case. But you cannot use it if you cannot manage it. Get organized. Get help. Ensure your clients get the defense they deserve.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-brass text-white text-xs font-600 tracking-wider uppercase hover:bg-brass-light transition-all duration-300"
          >
            Get Discovery Support
          </Link>
        </section>
      </article>
    </main>
  );
}
