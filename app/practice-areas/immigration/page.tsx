import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Immigration Law Virtual Assistant | Lawyer Capital VA',
  description: 'Multi-jurisdictional case tracking, visa application coordination, and immigration deadline management.',
  keywords: 'immigration law virtual assistant, visa application support',
};

export default function ImmigrationPage() {
  return (
    <main className="pt-32 bg-ivory min-h-screen">
      <article className="max-w-4xl mx-auto px-16 py-20">
        <h1 className="font-serif text-6xl text-charcoal mb-8 leading-tight">
          Virtual Assistant Support for Immigration Law
        </h1>

        <p className="text-lg text-text-mid font-300 mb-12 border-l-4 border-brass pl-6">
          Immigration law involves government agencies, strict deadlines, complex forms, and multiple jurisdictions. A single missed deadline means your client loses their visa, their employment, or their residency. Our immigration law VAs manage deadlines, coordinate with agencies, and organize complex applications so nothing is ever forgotten.
        </p>

        <section className="mb-16 py-12 bg-white px-8 rounded-sm border-l-4 border-brass">
          <h2 className="font-serif text-3xl text-charcoal mb-6">Immigration Law Complexity</h2>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            Immigration cases involve multiple visa types, government agencies, complex forms, and strict deadlines. A work visa requires form I-140, I-485, I-130, I-864, plus supporting documents. Each form has filing requirements. Each has a deadline. Miss a deadline and the entire application is denied.
          </p>
          <p className="text-base text-text-mid leading-relaxed font-300">
            A dedicated immigration VA ensures no deadline is missed, no form is incomplete, and no supporting document is forgotten. Your clients' futures depend on it.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-6 mt-12">What Immigration Law VAs Handle</h2>

          <h3 className="font-serif text-xl text-charcoal mb-4 mt-8">Visa Application & Case Management</h3>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            Your VA manages the entire visa application process. They maintain an application timeline: when forms must be submitted, when supporting documents are due, when agency responses are expected. They track USCIS portal updates, check application status regularly, and alert you to any requests for additional information (RFEs). They organize all application documents, ensuring nothing is missing.
          </p>

          <h3 className="font-serif text-xl text-charcoal mb-4 mt-8">Form Preparation & Verification</h3>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            Immigration forms are complex. Form I-140 requires employment verification and financial documentation. Form I-485 requires medical exams, biometrics, and background information. Your VA knows every form, every requirement, every supporting document needed. They prepare forms based on your instructions, verify all information is accurate and complete, and organize forms for your signature and filing.
          </p>

          <h3 className="font-serif text-xl text-charcoal mb-4 mt-8">Labor Certification & Prevailing Wage Coordination</h3>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            Employment-based immigration requires labor certification. Your VA coordinates with the Department of Labor, tracks the PERM process, collects prevailing wage information, and organizes job posting documentation. They manage recruitment documentation and PERM advertising requirements.
          </p>

          <h3 className="font-serif text-xl text-charcoal mb-4 mt-8">Medical & Biometrics Appointment Scheduling</h3>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            USCIS medical exams and biometrics appointments are required for most applications. Your VA schedules appointments with USCIS-approved physicians, confirms appointment details with clients, sends reminder emails, and tracks when results are available.
          </p>

          <h3 className="font-serif text-xl text-charcoal mb-4 mt-8">Family Immigration & Petition Coordination</h3>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            Family-based immigration requires petitions (Form I-130), spousal affidavits, and relationship documentation. Your VA organizes family trees, prepares petition documentation, and coordinates with family members in other countries for supporting documents.
          </p>

          <h3 className="font-serif text-xl text-charcoal mb-4 mt-8">Consular Processing & Adjustment of Status</h3>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            Visa processing can occur either through consular processing (visa application at a US consulate abroad) or adjustment of status (green card application within the US). Your VA tracks which process applies to each client, manages documentation requirements for each process, and coordinates with consulates on interview scheduling.
          </p>

          <h3 className="font-serif text-xl text-charcoal mb-4 mt-8">Background & Security Check Coordination</h3>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            USCIS conducts background checks and security investigations. Your VA tracks their progress, responds to agency requests for additional information, and organizes all documentation.
          </p>

          <h3 className="font-serif text-xl text-charcoal mb-4 mt-8">Interview Preparation & Scheduling</h3>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            Visa interviews are required. Your VA schedules interviews with consulates or USCIS, prepares interview guidance for clients, organizes supporting documents, and prepares a checklist of what to bring.
          </p>

          <h3 className="font-serif text-xl text-charcoal mb-4 mt-8">Multi-Jurisdiction & International Coordination</h3>
          <p className="text-base text-text-mid leading-relaxed font-300 mb-4">
            Immigration cases often involve clients in multiple countries. Your VA coordinates across jurisdictions, manages international document collection, and handles time zone differences in scheduling and communication.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="font-serif text-3xl text-charcoal mb-6 mt-12">Immigration Law Practice Areas We Support</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {['Employment-Based Immigration', 'Family Immigration', 'Asylum & Deportation', 'Student Visas', 'Consular Processing', 'Adjustment of Status', 'International Adoption', 'Work Permits'].map((area) => (
              <div key={area} className="p-4 border border-text-light/10 bg-white">
                <p className="font-500 text-charcoal">{area}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="my-16 p-8 bg-charcoal text-white rounded-sm">
          <h2 className="font-serif text-2xl mb-4">Immigration Deadlines Are Unforgiving</h2>
          <p className="text-base text-white/70 leading-relaxed">
            A missed USCIS deadline. A forgotten RFE. A late response to an agency request. These aren't minor errors. They deny visas. They end careers. They separate families. Your VA ensures nothing is missed.
          </p>
        </section>

        <section className="text-center">
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-brass text-white text-xs font-600 tracking-wider uppercase hover:bg-brass-light transition-all duration-300"
          >
            Get Immigration Law Support
          </Link>
        </section>
      </article>
    </main>
  );
}
