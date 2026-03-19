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
          <Link href="#services" className={`text-xs font-500 transition-colors duration-300 ${
            scrolled ? 'text-white/60 hover:text-white' : 'text-text-mid hover:text-charcoal'
          }`}>
            Practice Areas
          </Link>
          <Link href="#confidentiality" className={`text-xs font-500 transition-colors duration-300 ${
            scrolled ? 'text-white/60 hover:text-white' : 'text-text-mid hover:text-charcoal'
          }`}>
            Confidentiality
          </Link>
          <Link href="#process" className={`text-xs font-500 transition-colors duration-300 ${
            scrolled ? 'text-white/60 hover:text-white' : 'text-text-mid hover:text-charcoal'
          }`}>
            Process
          </Link>
          <Link href="#pricing" className={`text-xs font-500 transition-colors duration-300 ${
            scrolled ? 'text-white/60 hover:text-white' : 'text-text-mid hover:text-charcoal'
          }`}>
            Pricing
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
