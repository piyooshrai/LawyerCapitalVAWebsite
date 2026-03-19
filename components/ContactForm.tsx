'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      company: formData.get('company'),
      phone: formData.get('phone'),
      practiceArea: formData.get('practiceArea'),
      message: formData.get('message'),
    };

    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      setSubmitted(true);
      setIsSubmitting(false);
    } catch (error) {
      console.error('Form submission error:', error);
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-brass/15 border border-brass p-8 rounded-lg">
        <h2 className="font-serif text-2xl text-charcoal mb-4">Thanks for reaching out.</h2>
        <p className="text-base text-text-mid font-300 mb-6">
          We've received your message. We'll be in touch within 24 hours to schedule your consultation.
        </p>
        <p className="text-sm text-text-light">
          Questions in the meantime? Call us at <strong>(813) 761-8268</strong> or email <strong>info@thehuman.capital</strong>.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="block text-xs font-600 tracking-wide uppercase text-text-mid mb-2">
            Name *
          </label>
          <input
            type="text"
            name="name"
            required
            className="w-full px-4 py-3 border border-text-light/20 focus:border-brass outline-none focus:ring-0 transition-colors duration-300"
          />
        </div>
        <div>
          <label className="block text-xs font-600 tracking-wide uppercase text-text-mid mb-2">
            Email *
          </label>
          <input
            type="email"
            name="email"
            required
            className="w-full px-4 py-3 border border-text-light/20 focus:border-brass outline-none focus:ring-0 transition-colors duration-300"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="block text-xs font-600 tracking-wide uppercase text-text-mid mb-2">
            Firm Name *
          </label>
          <input
            type="text"
            name="company"
            required
            className="w-full px-4 py-3 border border-text-light/20 focus:border-brass outline-none focus:ring-0 transition-colors duration-300"
          />
        </div>
        <div>
          <label className="block text-xs font-600 tracking-wide uppercase text-text-mid mb-2">
            Phone
          </label>
          <input
            type="tel"
            name="phone"
            className="w-full px-4 py-3 border border-text-light/20 focus:border-brass outline-none focus:ring-0 transition-colors duration-300"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-600 tracking-wide uppercase text-text-mid mb-2">
          Practice Area *
        </label>
        <select
          name="practiceArea"
          required
          className="w-full px-4 py-3 border border-text-light/20 focus:border-brass outline-none focus:ring-0 transition-colors duration-300"
        >
          <option value="">Select a practice area</option>
          <option value="civil-litigation">Civil Litigation</option>
          <option value="corporate">Corporate/Business Law</option>
          <option value="family-law">Family Law</option>
          <option value="immigration">Immigration</option>
          <option value="real-estate">Real Estate</option>
          <option value="criminal-defense">Criminal Defense</option>
          <option value="estate-planning">Estate Planning</option>
          <option value="intellectual-property">Intellectual Property</option>
          <option value="personal-injury">Personal Injury</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label className="block text-xs font-600 tracking-wide uppercase text-text-mid mb-2">
          Tell us about your needs
        </label>
        <textarea
          name="message"
          rows={6}
          className="w-full px-4 py-3 border border-text-light/20 focus:border-brass outline-none focus:ring-0 transition-colors duration-300 resize-none"
          placeholder="What's your biggest admin bottleneck? What would make the biggest difference in your practice?"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="px-8 py-4 bg-brass text-white text-xs font-600 tracking-wider uppercase hover:bg-brass-light transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed w-full"
      >
        {isSubmitting ? 'Sending...' : 'Schedule Consultation'}
      </button>
    </form>
  );
}
