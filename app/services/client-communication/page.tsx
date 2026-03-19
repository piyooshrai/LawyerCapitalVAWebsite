import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Legal Client Communication Virtual Assistant',
  description: 'Status updates, appointment scheduling, court date reminders, and professional client communications.',
};

export default function ClientCommunicationPage() {
  return (
    <main className="pt-32 bg-ivory min-h-screen">
      <article className="max-w-4xl mx-auto px-16 py-20">
        <h1 className="font-serif text-6xl text-charcoal mb-8 leading-tight">
          Legal Client Communication Virtual Assistant
        </h1>

        <p className="text-lg text-text-mid font-300 mb-12">
          Professional communication keeps clients satisfied. Our VAs send status updates, schedule appointments, send court reminders, and respond to routine inquiries — freeing you for billable work.
        </p>

        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-6">What We Handle</h2>
          <ul className="space-y-3">
            {[
              'Status update emails and letters',
              'Appointment scheduling and reminders',
              'Court date and hearing reminders',
              'Document request follow-ups',
              'Billing inquiry responses',
              'Settlement communication coordination',
              'Case milestone notifications',
              'Referral source thank-you letters',
              'Client satisfaction follow-ups',
              'Newsletter and bulk communication management',
            ].map((task, idx) => (
              <li key={idx} className="flex gap-3">
                <span className="text-brass font-700">→</span>
                <span className="text-base text-text-mid font-300">{task}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-6">Under Your Control</h2>
          <p className="text-base text-text-mid leading-relaxed font-300">
            Your VA uses templates you approve. Tone matches your firm's voice. Messages go through you before sending. You never lose control of client communication. They just handle the execution.
          </p>
        </section>

        <section>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-brass text-white text-xs font-600 tracking-wider uppercase hover:bg-brass-light transition-all"
          >
            Schedule Consultation
          </Link>
        </section>
      </article>
    </main>
  );
}
