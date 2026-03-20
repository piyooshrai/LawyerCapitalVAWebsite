'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-100 px-16 h-[72px] flex items-center justify-between transition-all duration-400 ${
      scrolled ? 'bg-charcoal/97 backdrop-blur-[20px]' : 'bg-transparent'
    }`}>
      <Link href="/" className="flex items-center gap-4">
        <div className="w-10 h-10 border-2 border-brass flex items-center justify-center">
          <span className="font-serif text-lg font-600 text-brass">LC</span>
        </div>
        <span className={`font-serif text-lg font-600 transition-colors duration-400 ${
          scrolled ? 'text-ivory' : 'text-charcoal'
        }`}>
          Lawyer Capital VA
        </span>
      </Link>

      <div className="flex items-center gap-8">
        <div className="flex gap-8">
          {/* Services Dropdown */}
          <div className="relative group">
            <button className={`text-xs font-500 transition-colors duration-300 ${
              scrolled ? 'text-white/60 hover:text-white' : 'text-text-mid hover:text-charcoal'
            }`}>
              Services
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-charcoal text-white opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <Link href="/services/client-intake" className="block px-4 py-2 hover:bg-charcoal-light">Client Intake</Link>
              <Link href="/services/document-preparation" className="block px-4 py-2 hover:bg-charcoal-light">Document Prep</Link>
              <Link href="/services/case-management" className="block px-4 py-2 hover:bg-charcoal-light">Case Management</Link>
              <Link href="/services/court-filing" className="block px-4 py-2 hover:bg-charcoal-light">Court Filing</Link>
              <Link href="/services/client-communication" className="block px-4 py-2 hover:bg-charcoal-light">Client Communication</Link>
              <Link href="/services/firm-administration" className="block px-4 py-2 hover:bg-charcoal-light">Firm Administration</Link>
            </div>
          </div>

          {/* Practice Areas Dropdown */}
          <div className="relative group">
            <button className={`text-xs font-500 transition-colors duration-300 ${
              scrolled ? 'text-white/60 hover:text-white' : 'text-text-mid hover:text-charcoal'
            }`}>
              Practice Areas
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-charcoal text-white opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <Link href="/practice-areas/civil-litigation" className="block px-4 py-2 hover:bg-charcoal-light">Civil Litigation</Link>
              <Link href="/practice-areas/corporate" className="block px-4 py-2 hover:bg-charcoal-light">Corporate Law</Link>
              <Link href="/practice-areas/family-law" className="block px-4 py-2 hover:bg-charcoal-light">Family Law</Link>
              <Link href="/practice-areas/immigration" className="block px-4 py-2 hover:bg-charcoal-light">Immigration</Link>
              <Link href="/practice-areas/real-estate-law" className="block px-4 py-2 hover:bg-charcoal-light">Real Estate</Link>
              <Link href="/practice-areas/criminal-defense" className="block px-4 py-2 hover:bg-charcoal-light">Criminal Defense</Link>
            </div>
          </div>

          {/* Other Links */}
          <Link href="/about" className={`text-xs font-500 transition-colors duration-300 ${
            scrolled ? 'text-white/60 hover:text-white' : 'text-text-mid hover:text-charcoal'
          }`}>
            About
          </Link>
          <Link href="/how-it-works" className={`text-xs font-500 transition-colors duration-300 ${
            scrolled ? 'text-white/60 hover:text-white' : 'text-text-mid hover:text-charcoal'
          }`}>
            Process
          </Link>
          <Link href="/blog" className={`text-xs font-500 transition-colors duration-300 ${
            scrolled ? 'text-white/60 hover:text-white' : 'text-text-mid hover:text-charcoal'
          }`}>
            Blog
          </Link>
        </div>
        <Link
          href="/contact"
          className="px-7 py-2.5 bg-brass text-white text-xs font-600 tracking-widest uppercase transition-all duration-300 hover:bg-brass-light"
        >
          Schedule Consultation
        </Link>
      </div>
    </nav>
  );
}
