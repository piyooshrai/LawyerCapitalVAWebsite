import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#111113] px-16 py-20">
      <div className="max-w-7xl mx-auto mb-12">
        <div className="grid grid-cols-5 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-xl font-600 text-white mb-4">Lawyer Capital VA</h3>
            <p className="text-xs text-white/35 leading-relaxed max-w-sm">
              NDA-protected virtual assistants for law firms. A division of The Human Capital — dedicated VA services since 2019.
            </p>
          </div>

          {/* Services */}
          <div>
            <h5 className="text-xs font-600 tracking-widest uppercase text-white/25 mb-5">Services</h5>
            <ul className="space-y-1">
              <li><Link href="/services/client-intake" className="text-xs text-white/40 hover:text-brass transition-colors">Client Intake</Link></li>
              <li><Link href="/services/document-preparation" className="text-xs text-white/40 hover:text-brass transition-colors">Document Prep</Link></li>
              <li><Link href="/services/case-management" className="text-xs text-white/40 hover:text-brass transition-colors">Case Management</Link></li>
              <li><Link href="/services/court-filing" className="text-xs text-white/40 hover:text-brass transition-colors">Court Filing</Link></li>
              <li><Link href="/services/client-communication" className="text-xs text-white/40 hover:text-brass transition-colors">Client Comms</Link></li>
              <li><Link href="/services/firm-administration" className="text-xs text-white/40 hover:text-brass transition-colors">Firm Admin</Link></li>
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h5 className="text-xs font-600 tracking-widest uppercase text-white/25 mb-5">Practice Areas</h5>
            <ul className="space-y-1">
              <li><Link href="/practice-areas/civil-litigation" className="text-xs text-white/40 hover:text-brass transition-colors">Civil Litigation</Link></li>
              <li><Link href="/practice-areas/corporate" className="text-xs text-white/40 hover:text-brass transition-colors">Corporate</Link></li>
              <li><Link href="/practice-areas/family-law" className="text-xs text-white/40 hover:text-brass transition-colors">Family Law</Link></li>
              <li><Link href="/practice-areas/immigration" className="text-xs text-white/40 hover:text-brass transition-colors">Immigration</Link></li>
              <li><Link href="/practice-areas/real-estate-law" className="text-xs text-white/40 hover:text-brass transition-colors">Real Estate</Link></li>
              <li><Link href="/practice-areas/criminal-defense" className="text-xs text-white/40 hover:text-brass transition-colors">Criminal Defense</Link></li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h5 className="text-xs font-600 tracking-widest uppercase text-white/25 mb-5">Locations</h5>
            <ul className="space-y-1">
              <li><Link href="/locations/usa" className="text-xs text-white/40 hover:text-brass transition-colors">United States</Link></li>
              <li><Link href="/locations/uk" className="text-xs text-white/40 hover:text-brass transition-colors">United Kingdom</Link></li>
              <li><Link href="/locations/middle-east" className="text-xs text-white/40 hover:text-brass transition-colors">Middle East</Link></li>
              <li><Link href="/locations/apac" className="text-xs text-white/40 hover:text-brass transition-colors">Australia & NZ</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h5 className="text-xs font-600 tracking-widest uppercase text-white/25 mb-5">Company</h5>
            <ul className="space-y-1">
              <li><Link href="/about" className="text-xs text-white/40 hover:text-brass transition-colors">About</Link></li>
              <li><Link href="/confidentiality/attorney-client-privilege" className="text-xs text-white/40 hover:text-brass transition-colors">Confidentiality</Link></li>
              <li><Link href="#pricing" className="text-xs text-white/40 hover:text-brass transition-colors">Pricing</Link></li>
              <li><Link href="/contact" className="text-xs text-white/40 hover:text-brass transition-colors">Contact</Link></li>
              <li><Link href="https://thehuman.capital" className="text-xs text-white/40 hover:text-brass transition-colors">The Human Capital</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="max-w-7xl mx-auto pt-6 border-t border-white/5 flex justify-between text-xs text-white/25">
        <span>&copy; 2025 Lawyer Capital VA. Part of The Human Capital.</span>
        <div className="space-x-4">
          <Link href="/privacy" className="hover:text-brass transition-colors">Privacy</Link>
          <span>·</span>
          <Link href="/terms" className="hover:text-brass transition-colors">Terms</Link>
        </div>
      </div>
    </footer>
  );
}
