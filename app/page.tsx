'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { services, pricing } from '@/lib/legal-data';

export default function Home() {
  const revealRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    revealRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const addRevealRef = (el: HTMLDivElement | null) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  return (
    <main>
      {/* ─── HERO ─── */}
      <section className="relative min-h-screen bg-charcoal overflow-hidden pt-32 pb-20 px-16 flex items-center">
        {/* Background texture */}
        <div className="absolute inset-0 bg-pinstripe-vertical pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/30 to-charcoal/95 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-12 gap-24 items-center">
          {/* Left: Main message */}
          <div className="col-span-8">
            <div className="mb-8 flex items-center gap-4">
              <div className="w-6 h-px bg-brass" />
              <span className="text-xs font-600 tracking-widest uppercase text-brass">
                Virtual Assistants for Law Firms
              </span>
            </div>

            <h1 className="font-serif text-7xl leading-tight text-white mb-8 font-400">
              Practice law.<br />
              Not <em className="italic text-brass-light">paperwork.</em>
            </h1>

            <p className="text-lg text-white/50 leading-relaxed max-w-md mb-12 font-300">
              Dedicated, NDA-protected virtual assistants who handle client intake, document preparation, case management, and firm administration — so attorneys can focus on billable hours and client outcomes.
            </p>

            <div className="flex gap-4">
              <a
                href="/contact"
                className="px-10 py-4 bg-brass text-white text-xs font-600 tracking-wider uppercase hover:bg-brass-light transition-all duration-300"
              >
                Schedule a Consultation
              </a>
              <a
                href="#services"
                className="px-10 py-4 bg-transparent text-white/60 text-xs font-600 tracking-wider uppercase border border-white/15 hover:border-brass hover:text-brass transition-all duration-300"
              >
                View Practice Areas
              </a>
            </div>
          </div>

          {/* Right: Case study */}
          <div className="col-span-4 border-l border-white/8 pl-12">
            <div className="mb-8">
              <span className="text-xs font-600 tracking-widest uppercase text-brass">Case Study</span>
            </div>

            <p className="font-serif text-2xl leading-relaxed text-white/80 italic mb-6 font-400">
              "His practice runs like a firm three times its size. Same VA, two years running. No turnover, no retraining, no disruption."
            </p>

            <p className="text-xs text-white/40 mb-12 font-500">Solo Attorney — Civil Litigation</p>

            <div className="space-y-8 pt-8 border-t border-white/8">
              <div>
                <div className="font-serif text-5xl text-brass font-600 leading-tight">2yr</div>
                <div className="text-xs text-white/35 mt-2 tracking-wide">Same Dedicated VA</div>
              </div>
              <div>
                <div className="font-serif text-5xl text-brass font-600 leading-tight">3×</div>
                <div className="text-xs text-white/35 mt-2 tracking-wide">Operating Capacity</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── BRASS DIVIDER ─── */}
      <div className="h-14 bg-brass flex items-center justify-center gap-12 overflow-hidden">
        {['NDA Protected', 'Checkr Verified', 'Dedicated Client Manager', 'Month-to-Month', 'Top 3% Hired'].map((item, i) => (
          <span key={i} className="text-xs font-600 tracking-wide uppercase text-white/80 whitespace-nowrap">
            {item}
          </span>
        ))}
      </div>

      {/* ─── PRACTICE AREAS ─── */}
      <section id="services" className="py-32 px-16 bg-ivory">
        <div className="max-w-7xl mx-auto">
          <div
            ref={addRevealRef}
            className="reveal mb-4 flex items-center gap-3"
          >
            <div className="w-6 h-px bg-brass" />
            <span className="text-xs font-600 tracking-widest uppercase text-brass">Practice Area Support</span>
          </div>

          <h2
            ref={addRevealRef}
            className="reveal font-serif text-5xl mb-6 text-charcoal font-400 leading-tight"
          >
            Your VA understands<br />the weight of the work.
          </h2>

          <p
            ref={addRevealRef}
            className="reveal text-base text-text-mid font-300 leading-relaxed max-w-xl mb-16"
          >
            Legal virtual assistants trained in legal terminology, document standards, court procedures, and the absolute necessity of confidentiality.
          </p>

          {/* Practice cards grid */}
          <div className="grid grid-cols-2 gap-px bg-black/6">
            {services.map((service, idx) => (
              <div
                key={service.id}
                ref={addRevealRef}
                className="reveal bg-ivory p-12 hover:bg-white transition-colors duration-300 relative group cursor-pointer"
              >
                <div className="absolute top-0 left-0 w-1 h-0 bg-brass transition-all duration-300 group-hover:h-full" />

                <div className="font-serif text-sm text-brass italic mb-4">{service.roman}</div>

                <h3 className="font-serif text-2xl font-600 text-charcoal mb-3">{service.name}</h3>

                <p className="text-base text-text-mid font-300 leading-relaxed mb-6">
                  {service.description.split('—')[0].trim()}.
                </p>

                <div className="text-xs text-brass font-600 tracking-wider uppercase opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Explore →
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONFIDENTIALITY ─── */}
      <section className="bg-charcoal text-white py-32 px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 gap-20">
            {/* Left */}
            <div>
              <div
                ref={addRevealRef}
                className="reveal mb-4 flex items-center gap-3"
              >
                <div className="w-6 h-px bg-brass" />
                <span className="text-xs font-600 tracking-widest uppercase text-brass">Confidentiality</span>
              </div>

              <h2
                ref={addRevealRef}
                className="reveal font-serif text-5xl mb-6 font-400 leading-tight"
              >
                Attorney-client privilege<br />is not optional.
              </h2>

              <p
                ref={addRevealRef}
                className="reveal text-base text-white/50 font-300 leading-relaxed"
              >
                Every VA handling legal work operates under strict confidentiality protocols. NDAs before system access. Background verification before assignment. Encrypted communication always.
              </p>
            </div>

            {/* Right: Boxes */}
            <div className="space-y-4">
              {[
                { icon: 'N', title: 'NDA Before Access', desc: 'Every VA signs a comprehensive non-disclosure agreement before accessing any client systems, case files, or communications.' },
                { icon: 'C', title: 'Checkr Background Verification', desc: 'Identity verification, criminal history check, and professional background validation for every VA assigned to legal work.' },
                { icon: 'E', title: 'Encrypted Communication', desc: 'All client data and case materials transmitted through encrypted channels via Continia. No sensitive information in standard email.' },
                { icon: 'A', title: 'Access Controls', desc: 'VAs access only the systems and files necessary for their assigned tasks. Permissions are reviewed and adjusted by your Client Manager.' },
              ].map((item, idx) => (
                <div
                  key={idx}
                  ref={addRevealRef}
                  className="reveal border border-white/6 p-7 hover:border-brass/30 hover:bg-white/2 transition-all duration-300 flex gap-5"
                >
                  <div className="w-11 h-11 border border-brass flex items-center justify-center flex-shrink-0">
                    <span className="font-serif text-lg text-brass italic font-400">{item.icon}</span>
                  </div>
                  <div>
                    <h4 className="text-base font-600 mb-1">{item.title}</h4>
                    <p className="text-xs text-white/45 leading-relaxed font-300">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section id="process" className="bg-ivory-warm py-32 px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div
              ref={addRevealRef}
              className="reveal flex items-center justify-center gap-3 mb-4"
            >
              <div className="w-6 h-px bg-brass" />
              <span className="text-xs font-600 tracking-widest uppercase text-brass">Process</span>
              <div className="w-6 h-px bg-brass" />
            </div>

            <h2
              ref={addRevealRef}
              className="reveal font-serif text-5xl text-charcoal font-400 leading-tight"
            >
              Retained in days. Operational in a week.
            </h2>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-4 gap-0 border border-black/6">
            {[
              { num: '01', title: 'Consultation', desc: '15-minute call to assess your firm\'s needs, practice area, and operational pain points.', timeline: 'Day 1' },
              { num: '02', title: 'VA Matching', desc: 'We present a dedicated VA vetted through our five-step standard, briefed on legal workflows.', timeline: 'Day 2–3' },
              { num: '03', title: 'Onboarding', desc: 'NDA signed. Systems access configured. Scope of work defined. Client Manager assigned.', timeline: 'Day 4–5' },
              { num: '04', title: 'Operational', desc: 'Your VA is fully integrated. Ongoing QA, monthly KPI reviews, and scaling when you\'re ready.', timeline: 'Week 2+' },
            ].map((step, idx) => (
              <div
                key={idx}
                ref={addRevealRef}
                className={`reveal p-8 text-center ${idx < 3 ? 'border-r border-black/6' : ''}`}
              >
                <div className="font-serif text-5xl text-brass font-600 mb-4 leading-tight">{step.num}</div>
                <h4 className="text-base font-600 text-charcoal mb-2">{step.title}</h4>
                <p className="text-xs text-text-light leading-relaxed mb-4 font-300">{step.desc}</p>
                <div className="text-xs font-600 tracking-wide uppercase text-brass">{step.timeline}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRICING ─── */}
      <section id="pricing" className="bg-ivory py-32 px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div
              ref={addRevealRef}
              className="reveal flex items-center justify-center gap-3 mb-4"
            >
              <div className="w-6 h-px bg-brass" />
              <span className="text-xs font-600 tracking-widest uppercase text-brass">Pricing</span>
              <div className="w-6 h-px bg-brass" />
            </div>

            <h2
              ref={addRevealRef}
              className="reveal font-serif text-5xl text-charcoal font-400 leading-tight mb-4"
            >
              Transparent. Month-to-month.
            </h2>

            <p
              ref={addRevealRef}
              className="reveal text-base text-text-mid font-300 max-w-lg mx-auto"
            >
              No retainer agreements. No long-term commitments. Your VA earns your business every month.
            </p>
          </div>

          {/* Pricing cards */}
          <div className="grid grid-cols-2 gap-0 border border-black/8 max-w-3xl mx-auto">
            {Object.entries(pricing).map(([key, tier]: any) => (
              <div
                key={key}
                ref={addRevealRef}
                className={`reveal p-12 ${tier.featured ? 'bg-charcoal text-white' : 'bg-ivory'}`}
              >
                <div className="text-xs font-600 tracking-widest uppercase text-brass mb-4">{tier.name}</div>

                <div className="mb-4">
                  <div className={`font-serif text-5xl font-600 leading-tight ${tier.featured ? 'text-white' : 'text-charcoal'}`}>
                    ${tier.price}
                    <span className="text-lg font-300">/month</span>
                  </div>
                </div>

                <p className={`text-sm leading-relaxed mb-8 font-300 ${tier.featured ? 'text-white/50' : 'text-text-mid'}`}>
                  {key === 'partTime'
                    ? 'For solo practitioners and small firms needing consistent administrative support.'
                    : 'For growing firms ready to fully delegate operations to a dedicated professional.'}
                </p>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature: string, idx: number) => (
                    <li
                      key={idx}
                      className={`text-sm font-400 flex items-center gap-3 ${
                        tier.featured ? 'text-white/60 border-white/6' : 'text-text-mid border-black/4'
                      } border-b pb-3`}
                    >
                      <span className="text-brass font-700">/</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="/contact"
                  className={`block w-full py-3 text-center text-xs font-600 tracking-wider uppercase transition-all duration-300 ${
                    tier.featured
                      ? 'bg-brass text-white hover:bg-brass-light'
                      : 'bg-charcoal text-white hover:bg-charcoal-mid'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="bg-charcoal py-24 px-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-pinstripe-vertical pointer-events-none opacity-30" />

        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <h2
            ref={addRevealRef}
            className="reveal font-serif text-5xl text-white mb-6 font-400 leading-tight"
          >
            Every hour on admin is an hour <em className="italic text-brass-light">not billed.</em>
          </h2>

          <p
            ref={addRevealRef}
            className="reveal text-base text-white/45 mb-12 font-300 leading-relaxed"
          >
            Schedule a free 15-minute consultation. We'll assess your firm's needs and match you with a dedicated, NDA-protected legal VA within 48 hours.
          </p>

          <a
            ref={addRevealRef}
            href="/contact"
            className="reveal inline-block px-10 py-4 bg-brass text-white text-xs font-600 tracking-wider uppercase hover:bg-brass-light transition-all duration-300"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>
    </main>
  );
}
