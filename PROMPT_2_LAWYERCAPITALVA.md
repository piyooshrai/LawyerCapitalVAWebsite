# LAWYER CAPITAL VA — Complete Legal Virtual Assistant Website
# Feed this entire prompt + the lawyercapitalva-homepage.html reference file to Claude Code.

You are building lawyercapitalva.com from scratch. Standalone Next.js 14+ site for legal virtual assistant services. Its own design, its own voice. Feeds leads to itself and the parent company (thehuman.capital).

The file lawyercapitalva-homepage.html is your design reference. Match its exact aesthetic: deep charcoal (#1C1C1E) with brass/amber (#B8963E) accents on ivory (#F7F5F0). Cormorant Garamond for headlines + Outfit for body. Sharp edges (NO border-radius anywhere except buttons). Pinstripe line textures. Editorial gravitas. This site should feel like a prestigious law firm's website, not a tech company.

Read everything before writing code.

---

## TECH STACK
```
Framework: Next.js 14+ (App Router)
Styling: Tailwind CSS 3.4+
Animations: CSS @keyframes + Intersection Observer (NO Framer Motion)
Fonts: Google Fonts (Cormorant Garamond, Outfit) via next/font/google
Forms: Next.js API route → Resend SDK → info@thehuman.capital
Blog: MDX with next-mdx-remote
Hosting: Vercel
Analytics: GA4 + Vercel Analytics
SEO: Next.js metadata API + next-sitemap
Performance target: Lighthouse 95+
```

---

## BRAND SYSTEM

### Colors
```
--charcoal: #1C1C1E (primary dark)
--charcoal-mid: #2C2C2E
--charcoal-light: #3A3A3C
--brass: #B8963E (accent — labels, numbers, dividers, hover states)
--brass-light: #D4B263
--brass-muted: rgba(184,150,62,0.15)
--ivory: #F7F5F0 (primary background)
--ivory-warm: #EFECE4 (alternate sections)
--text-dark: #1C1C1E
--text-mid: #636366
--text-light: #8E8E93
```

### Typography
- Headlines: Cormorant Garamond, weights 400-700, italic for emphasis
- Body/UI: Outfit, weights 300-700
- Section labels: 11px, 600 weight, 0.2em letter-spacing, uppercase, brass, with brass line prefix
- Section headings: Cormorant Garamond 400 weight, clamp(32px, 3.5vw, 52px)
- Body: 15-16px, line-height 1.75, font-weight 300

### Design Rules
- ZERO border-radius on cards and containers. Sharp rectangular edges everywhere.
- Buttons: sharp rectangles with NO rounding
- Pinstripe background texture: repeating 1px lines at very low opacity
- Roman numeral numbering (i, ii, iii, iv, v, vi) on practice area cards
- Left-edge brass bars on hover (3px wide, animated height)
- Border-based card separation (1px solid, no shadows except on hover)
- NO emojis. NO icons. Pure typography, color, and geometric precision.
- Feels like a white-shoe law firm, not a startup

---

## SITE STRUCTURE

### CORE PAGES

#### Homepage (`/`)
Rebuild from lawyercapitalva-homepage.html. All sections.

#### About (`/about`) — 2,000+ words
- Legal-specific founding story
- Why law firms specifically need managed VA support
- Attorney-client privilege as a core design principle
- The Human Capital connection
- "Every VA handling legal work operates under the same confidentiality standards as your staff."

#### How It Works (`/how-it-works`) — 2,000+ words
- 4-step process adapted for legal
- NDA signing during onboarding
- Legal terminology training
- Clio/MyCase/PracticePanther onboarding
- Client Manager role in legal context

#### Pricing (`/pricing`) — 1,500+ words
- Three tiers with legal-specific features
- Cost comparison: paralegal salary ($45K-$65K) vs Lawyer Capital VA ($700-$1,300/mo)
- Competitor comparison: vs specialized legal VA services
- FAQ

#### Contact (`/contact`)
- Form: Name, Firm Name, Email, Phone, Practice Area (dropdown: Civil Litigation, Corporate/Business, Family Law, Immigration, Real Estate, Criminal Defense, Estate Planning, Intellectual Property, Personal Injury, Other), Message
- Submits to info@thehuman.capital

---

### SERVICE PAGES (6 pages, 2,500+ words each)

#### `/services/client-intake`
Primary keyword: "legal client intake virtual assistant"
Tasks: New client screening, conflict check coordination, engagement letter preparation, retainer agreement processing, initial document collection, client portal setup, intake form management, fee disclosure preparation, consultation scheduling, client onboarding packet assembly
Tools: Clio, MyCase, PracticePanther, Lawmatics, Intake.me

#### `/services/document-preparation`
Primary keyword: "legal document preparation virtual assistant"
Tasks: Pleading formatting, motion drafting support, discovery document organization, contract markup and redlining, exhibit preparation, filing-ready document assembly, template management, citation verification, document comparison, e-filing preparation
Tools: Clio, NetDocuments, iManage, Microsoft Word (advanced formatting), Adobe Acrobat

#### `/services/case-management`
Primary keyword: "legal case management virtual assistant"
Tasks: Docket tracking, deadline management, statute of limitations monitoring, case file organization, matter status reporting, court date tracking, discovery deadline management, document indexing, case timeline maintenance, opposing counsel communication logging
Tools: Clio, MyCase, PracticePanther, Smokeball, CosmoLex

#### `/services/court-filing`
Primary keyword: "court filing virtual assistant"
Tasks: E-filing preparation, local court rule compliance, filing fee tracking, proof of service coordination, hearing scheduling, court calendar management, judge-specific requirement research, filing deadline tracking, certificate of service preparation, courtesy copy coordination
Tools: PACER, state e-filing systems, Clio court rules integration

#### `/services/client-communication`
Primary keyword: "legal client communication virtual assistant"
Tasks: Status update emails, appointment scheduling, court date reminders, document request follow-ups, billing inquiry responses, settlement update communications, case milestone notifications, referral source thank-you letters, client satisfaction follow-ups, newsletter management
Tools: Clio, Lawmatics, Mailchimp, practice management communication modules

#### `/services/firm-administration`
Primary keyword: "law firm virtual assistant"
Tasks: Time entry support, invoice preparation, trust account reconciliation tracking, expense management, vendor coordination, office supply ordering, bar association deadline tracking, CLE credit monitoring, firm calendar management, conflict database maintenance
Tools: Clio, QuickBooks, LeanLaw, TimeSolv, Tabs3

---

### PRACTICE AREA PAGES (8 pages, 1,500+ words each)

#### `/practice-areas/civil-litigation`
#### `/practice-areas/corporate`
#### `/practice-areas/family-law`
#### `/practice-areas/immigration`
#### `/practice-areas/real-estate-law`
#### `/practice-areas/criminal-defense`
#### `/practice-areas/estate-planning`
#### `/practice-areas/personal-injury`

Each targets "[practice area] virtual assistant" keyword.
Each contains: specialty-specific tasks, common workflows, relevant tools, compliance needs, case study, FAQ, location links.

---

### CONFIDENTIALITY PAGES

#### `/confidentiality/attorney-client-privilege` — 2,500+ words
Primary keyword: "attorney client privilege virtual assistant"
THE authority page. How remote VAs maintain privilege. NDA requirements. Access controls. Communication protocols. What VAs can and cannot access. Ethical obligations.

#### `/confidentiality/vetting-process` — 2,000+ words
5-step vetting adapted for legal. Emphasis on background checks, NDA, reference verification.

#### `/confidentiality/data-security` — 1,500+ words
Encryption, secure file sharing, access controls, document retention policies.

---

### COMPARISON PAGES (5 pages, 2,500+ words each)

#### `/compare/back-office-betties` — Legal-specific VA service comparison
#### `/compare/smith-ai` — Smith.ai receptionist service comparison
#### `/compare/ruby-receptionists` — Ruby virtual receptionist comparison
#### `/compare/belay-legal` — Belay for legal comparison
#### `/compare/upwork-legal-va` — Hiring legal VAs on Upwork vs managed service

---

### TOOL PAGES (6 pages, 1,500+ words each)

#### `/tools/clio` — Clio practice management VA support
#### `/tools/mycase` — MyCase VA support
#### `/tools/practice-panther` — PracticePanther VA support
#### `/tools/smokeball` — Smokeball VA support
#### `/tools/lawmatics` — Lawmatics CRM VA support
#### `/tools/cosmolex` — CosmoLex VA support

---

### LOCATION PAGES (Same programmatic structure)

#### Regions and Cities (same as healthcare):
USA: 12 cities | UK: 5 cities | Middle East: 4 cities | APAC: 5 cities

#### Service slugs for city-service pages:
- client-intake
- document-preparation
- case-management
- court-filing
- client-communication
- firm-administration

#### City-service pages (2,500+ words each):
Primary keyword: "[service] virtual assistant [city]"
Example: "legal document preparation virtual assistant New York"

Each must reference:
- Local legal market (major firms, court systems, bar associations)
- Local paralegal/legal secretary salary data
- State-specific court rules or filing systems
- Regional compliance frameworks (UK: SRA regulations, ME: DIFC courts, APAC: state bar equivalents)

#### Currency display:
- USA: USD | UK: GBP primary | Middle East: AED primary | APAC: AUD/NZD primary
- All with "Invoicing in USD" disclaimer

---

### BLOG POSTS (10 articles, 1,800-2,500 words each)

#### Post 1: "How Much Does a Legal Virtual Assistant Cost in 2025?"
Slug: legal-va-cost | Keyword: "legal virtual assistant cost"

#### Post 2: "The Solo Attorney's Guide to Hiring a Virtual Assistant"
Slug: solo-attorney-va | Keyword: "solo attorney virtual assistant"

#### Post 3: "Client Intake Best Practices: How Law Firms Convert More Consultations"
Slug: client-intake-best-practices | Keyword: "law firm client intake"

#### Post 4: "Clio Virtual Assistant: Getting the Most from Your Practice Management Software"
Slug: clio-va-guide | Keyword: "Clio virtual assistant"

#### Post 5: "Legal Document Preparation: What a VA Can (and Cannot) Handle"
Slug: legal-document-preparation | Keyword: "legal document preparation virtual assistant"

#### Post 6: "The True Cost of Legal Secretary Turnover (And the Alternative)"
Slug: legal-secretary-turnover | Keyword: "legal secretary turnover cost"

#### Post 7: "Virtual Assistants for Immigration Law: Managing Cases Across Borders"
Slug: immigration-law-va | Keyword: "immigration law virtual assistant"

#### Post 8: "How Small Firms Compete with Big Law Using Virtual Assistants"
Slug: small-firm-va | Keyword: "small law firm virtual assistant"

#### Post 9: "Smith.ai vs Lawyer Capital VA: Receptionist Service vs Dedicated VA"
Slug: vs-smith-ai | Keyword: "Smith.ai alternative"

#### Post 10: "5 Tasks Every Attorney Should Delegate Today"
Slug: attorney-delegate-tasks | Keyword: "tasks to delegate attorney"

---

### RESOURCE PAGES

#### `/resources/delegation-guide` — "The Attorney's Delegation Playbook" — email-gated PDF
#### `/resources/roi-calculator` — Interactive: hourly billing rate × admin hours → ROI

---

### LEGAL PAGES
- `/privacy` — Privacy policy
- `/terms` — Terms of service

---

## DATA FILE

Create `/lib/legal-data.ts` with same structure as healthcare data file but with:
- Legal-specific salary data (paralegal $45K-$65K, legal secretary $38K-$52K, legal admin $35K-$48K)
- Court systems per city
- Bar associations per state/country
- Legal-specific compliance frameworks per region
- All 6 services, 8 practice areas, 5 competitors, 6 tools

---

## NAVIGATION, INTERLINKING, SCHEMA, CONTENT UNITS

Same rules as healthcare prompt:
- Mega-menu header with dropdowns for Services, Practice Areas, Confidentiality, Locations, Pricing
- Deep footer with 6 columns
- Every page: unique H1, unique meta, 1,500+ words minimum (2,500+ for money pages), FAQ with schema, breadcrumbs, 6+ internal links, CTA, compliance mention, pricing anchor
- Schema: Organization, LegalService, FAQPage, BreadcrumbList per page type
- Footer: "Part of The Human Capital" with link

---

## BUILD ORDER

Same as healthcare: data file → design system → layout → homepage → core pages → service pages → practice area pages → confidentiality pages → comparison pages → tool pages → location pages → blog → resources → legal pages → schema → breadcrumbs → interlinking → sitemap → analytics → build test.

Build everything. No placeholders. Every page fully rendered. 230+ pages targeting legal-specific search queries.

---

## PART 13: EXCELLENCE AGENT (Chat Widget)

Build from ExcellenceAgent.tsx. Customize for legal:

### Config:
```
AGENT_CONFIG = {
  name: 'Lawyer Capital VA',
  agentName: 'James',
  phone: '(813) 761-8268',
  email: 'info@thehuman.capital',
  bookingLink: '/contact',
}
```

### Legal-specific flows:

**Entry:** "Hey — I'm James from Lawyer Capital VA. Are you looking for VA support for your firm, or interested in joining our team?"

**Prospect qualification:**
- "What type of practice?" → Solo / Small Firm (2-10) / Mid-Size (10-50) / Boutique Specialty
- "What's your biggest admin bottleneck?" → Client intake / Document prep / Scheduling & calendaring / Billing & collections / Case management / All of the above
- Based on answer, serve practice-specific response

**Objection handling:**
- "Is this confidential?" → "Every VA signs an NDA before touching any system. Checkr background verified. Encrypted communication via Continia. Attorney-client privilege is non-negotiable for us."
- "What does it cost?" → "$700/mo part-time, $1,300 full-time. Month-to-month. No retainer agreement. That's less than a quarter of what a legal secretary costs in most markets."
- "Do they know Clio?" → "We train on Clio, MyCase, PracticePanther, Smokeball, CosmoLex, and others. Whatever your firm uses."
- "Can they do legal research?" → "They handle research support — pulling case law, statutes, organizing findings. They're not paralegals, but they free your paralegals to do higher-level work."

**All paths → CTA in 3 exchanges.** Book a Consultation or email capture.

**Transcript delivery:** Same Resend route. Subject: "Lawyer Capital VA Chat Lead — [email]"

Add to root layout. Hidden on /contact.

---

## PART 14: REAL COMPETITOR DATA

### Back Office Betties
- Price: $299-$1,199/mo (tiered plans based on minutes)
- Focus: Legal receptionist and intake services
- Live answering during business hours
- Bilingual options available
- Strengths: Affordable entry point, legal-specific receptionist
- Weaknesses: Receptionist only (not full admin), per-minute pricing can spike, not a dedicated person

### Smith.ai
- Price: $292.50-$1,170/mo (per-call pricing, 30-120 calls/mo)
- AI + human hybrid receptionist
- Legal intake, scheduling, payment collection
- Integrates with Clio, Lawmatics
- Strengths: 24/7 availability, AI-powered routing, CRM integrations
- Weaknesses: Not dedicated (shared pool), per-call pricing unpredictable, receptionist only — no document prep/case management

### Ruby Receptionists
- Price: Starting ~$235/mo (50 minutes)
- Virtual receptionist and chat
- Not legal-specific but used by law firms
- Strengths: Professional, well-established brand
- Weaknesses: Generic (not legal-trained), per-minute pricing, no admin/document support

### Belay (Legal)
- Price: $1,380+/mo
- US-based W-2 employees
- General VA with some legal placement
- 6-month minimum contract
- Strengths: US-based, professional
- Weaknesses: Not legal-specialized, expensive, lock-in contract, no legal software training

### Wyzer Staffing
- Price: Starting $12/hr (~$1,920/mo full-time)
- LATAM-based legal VAs
- Clio, MyCase, PracticePanther trained
- Strengths: Affordable, legal-focused, bilingual
- Weaknesses: Newer company, LATAM timezone gaps possible, less established

### There is Talent
- Price: Custom (LATAM-based)
- Legal VA placement service
- Strengths: Vetted LATAM talent, legal focus
- Weaknesses: Custom pricing (less transparent), placement model (you manage)

### Lawyer Capital VA positioning:
- $700/mo part-time, $1,300 full-time — competitive with everyone except budget receptionists
- FULL admin support (not just phones — document prep, case management, billing, intake, filing)
- Dedicated VA (not shared/rotated)
- Dedicated Client Manager (unique at this price)
- NDA + Checkr background check (most competitors use internal screening only)
- Backup VA during leave
- Month-to-month, no lock-in (Belay requires 6 months)
- Part of The Human Capital (6-year track record, 97% retention, 2-year case study with solo attorney)

---

## PART 15: KEYWORD TARGETS

### City-service pages — PRIMARY:
- "legal virtual assistant New York"
- "law firm virtual assistant London"
- "legal assistant virtual assistant Chicago"
- "immigration lawyer virtual assistant Miami"
- "legal document preparation virtual assistant Dallas"
- "law firm admin support Dubai"

### Service pages — SECONDARY:
- "legal virtual assistant" (2,400 monthly searches est.)
- "virtual assistant for law firm" (1,800)
- "legal document preparation virtual assistant" (900)
- "legal client intake virtual assistant" (600)
- "law firm billing virtual assistant" (500)
- "court filing virtual assistant" (400)
- "virtual paralegal assistant" (1,200)
- "Clio virtual assistant" (300)

### Blog — LONG-TAIL:
- "how much does a legal virtual assistant cost" (high volume)
- "solo attorney virtual assistant" (mid volume, high intent)
- "law firm client intake best practices" (mid volume, adjacent)
- "legal secretary turnover cost" (mid volume, pain point)
- "Smith.ai alternative" (low volume, very high intent)
- "Clio virtual assistant setup" (low volume, tool-specific)
- "immigration law virtual assistant" (mid volume, specialty)
- "tasks to delegate attorney" (mid volume, awareness)

### Comparison — BRANDED:
- "Smith.ai alternative" / "Smith.ai vs"
- "Back Office Betties review" / "Back Office Betties alternative"
- "Ruby Receptionists alternative law firm"
- "Belay legal assistant review"
- "Wyzer Staffing review"

### Placement rules — every page:
1. Target keyword in H1
2. Target keyword in meta title
3. Target keyword in meta description
4. Target keyword in first 100 words
5. Target keyword in at least one H2
6. Target keyword in URL slug

---

## PART 16: TESTIMONIAL FRAMEWORK

Place adapted testimonials throughout:
- On case management pages: "His practice runs like a firm three times its size. Same VA, two years running." — Solo Practitioner, Civil Litigation
- On intake pages: testimonial about faster client response times
- On billing pages: testimonial about improved collections
- On pricing pages: testimonial about cost savings vs paralegal hire
- On confidentiality pages: testimonial about trust and NDA process

All attributed as: Role + Practice Type. No full names unless provided.

---

Build everything. No placeholders. No stubs. Every page targets a specific search query. Excellence Agent on every page converting browsers to leads. Real competitor data in comparisons. Keywords in every H1, meta tag, and opening paragraph.
