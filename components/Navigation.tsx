'use client';

import Link from 'next/link';

export default function Navigation() {

  return (
    <nav className="fixed top-0 left-0 right-0 z-100 px-16 h-20 flex items-center justify-between bg-charcoal shadow-lg">
      <Link href="/" className="flex items-center gap-3 group">
        <div className="w-12 h-12 border-2 border-brass flex items-center justify-center rounded-sm group-hover:bg-brass/10 transition-colors">
          <span className="font-serif text-xl font-600 text-brass">LC</span>
        </div>
        <div className="flex flex-col leading-tight">
          <span className="font-serif text-base font-600 text-ivory">Lawyer Capital</span>
          <span className="text-xs text-brass font-600 tracking-wider">VA</span>
        </div>
      </Link>

      <div className="flex items-center gap-12">
        <div className="flex gap-10">
          {/* Services Dropdown */}
          <div className="relative group">
            <button className="text-sm font-500 text-ivory/80 hover:text-brass transition-colors duration-200 flex items-center gap-2">
              Services
              <svg className="w-4 h-4 group-hover:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
            <div className="absolute left-0 mt-0 w-56 bg-charcoal border border-brass/20 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 py-2">
              <Link href="/services/deadline-management" className="block px-6 py-3 text-ivory/70 hover:text-brass hover:bg-brass/5 transition-colors text-sm">Deadline Management</Link>
              <Link href="/services/document-organization" className="block px-6 py-3 text-ivory/70 hover:text-brass hover:bg-brass/5 transition-colors text-sm">Document Organization</Link>
              <Link href="/services/client-communication" className="block px-6 py-3 text-ivory/70 hover:text-brass hover:bg-brass/5 transition-colors text-sm">Client Communication</Link>
              <Link href="/services/research-briefing" className="block px-6 py-3 text-ivory/70 hover:text-brass hover:bg-brass/5 transition-colors text-sm">Research & Briefing</Link>
              <Link href="/services/intake-onboarding" className="block px-6 py-3 text-ivory/70 hover:text-brass hover:bg-brass/5 transition-colors text-sm">Intake & Onboarding</Link>
              <Link href="/services/reporting-analytics" className="block px-6 py-3 text-ivory/70 hover:text-brass hover:bg-brass/5 transition-colors text-sm">Reporting & Analytics</Link>
            </div>
          </div>

          {/* Practice Areas Dropdown */}
          <div className="relative group">
            <button className="text-sm font-500 text-ivory/80 hover:text-brass transition-colors duration-200 flex items-center gap-2">
              Practice Areas
              <svg className="w-4 h-4 group-hover:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
            <div className="absolute left-0 mt-0 w-56 bg-charcoal border border-brass/20 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 py-2">
              <Link href="/practice-areas/immigration" className="block px-6 py-3 text-ivory/70 hover:text-brass hover:bg-brass/5 transition-colors text-sm">Immigration</Link>
              <Link href="/practice-areas/family-law" className="block px-6 py-3 text-ivory/70 hover:text-brass hover:bg-brass/5 transition-colors text-sm">Family Law</Link>
              <Link href="/practice-areas/civil-litigation" className="block px-6 py-3 text-ivory/70 hover:text-brass hover:bg-brass/5 transition-colors text-sm">Civil Litigation</Link>
              <Link href="/practice-areas/corporate" className="block px-6 py-3 text-ivory/70 hover:text-brass hover:bg-brass/5 transition-colors text-sm">Corporate Law</Link>
              <Link href="/practice-areas/real-estate" className="block px-6 py-3 text-ivory/70 hover:text-brass hover:bg-brass/5 transition-colors text-sm">Real Estate</Link>
              <Link href="/practice-areas/criminal-defense" className="block px-6 py-3 text-ivory/70 hover:text-brass hover:bg-brass/5 transition-colors text-sm">Criminal Defense</Link>
              <Link href="/practice-areas/estate-planning" className="block px-6 py-3 text-ivory/70 hover:text-brass hover:bg-brass/5 transition-colors text-sm">Estate Planning</Link>
              <Link href="/practice-areas/intellectual-property" className="block px-6 py-3 text-ivory/70 hover:text-brass hover:bg-brass/5 transition-colors text-sm">IP & Patents</Link>
            </div>
          </div>

          <Link href="/blog" className="text-sm font-500 text-ivory/80 hover:text-brass transition-colors duration-200">
            Blog
          </Link>

          {/* Confidentiality Dropdown */}
          <div className="relative group">
            <button className="text-sm font-500 text-ivory/80 hover:text-brass transition-colors duration-200 flex items-center gap-2">
              Confidentiality
              <svg className="w-4 h-4 group-hover:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
            <div className="absolute left-0 mt-0 w-56 bg-charcoal border border-brass/20 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 py-2">
              <Link href="/confidentiality/attorney-client-privilege" className="block px-6 py-3 text-ivory/70 hover:text-brass hover:bg-brass/5 transition-colors text-sm">Attorney-Client Privilege</Link>
              <Link href="/confidentiality/vetting-process" className="block px-6 py-3 text-ivory/70 hover:text-brass hover:bg-brass/5 transition-colors text-sm">Vetting Process</Link>
              <Link href="/confidentiality/data-security" className="block px-6 py-3 text-ivory/70 hover:text-brass hover:bg-brass/5 transition-colors text-sm">Data Security</Link>
            </div>
          </div>

          <Link href="/locations" className="text-sm font-500 text-ivory/80 hover:text-brass transition-colors duration-200">
            Locations
          </Link>

          <Link href="/pricing" className="text-sm font-500 text-ivory/80 hover:text-brass transition-colors duration-200">
            Pricing
          </Link>
        </div>
        <Link
          href="/contact"
          className="px-8 py-3 bg-brass text-charcoal text-xs font-600 tracking-widest uppercase hover:bg-brass-light transition-all duration-200 rounded-sm shadow-lg hover:shadow-xl"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
