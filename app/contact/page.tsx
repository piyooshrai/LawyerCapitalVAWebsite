import { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Lawyer Capital VA',
  description: 'Schedule a consultation with Lawyer Capital VA. Get matched with a dedicated legal virtual assistant.',
};

export default function Contact() {
  return (
    <main className="pt-32 bg-ivory min-h-screen">
      <div className="max-w-2xl mx-auto px-16 py-20">
        <h1 className="font-serif text-5xl text-charcoal mb-4 leading-tight">Schedule a Consultation</h1>
        <p className="text-lg text-text-mid font-300 mb-12">
          15 minutes to assess your needs. No pressure. Just a conversation about how a dedicated VA could transform your practice.
        </p>

        <ContactForm />
      </div>
    </main>
  );
}
