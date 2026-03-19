'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';

// ─── AGENT CONFIGURATION ─────────────────────────────────────────
const AGENTS = [
  { name: 'Victoria', avatar: '/agents/victoria.jpg', specialty: 'operations' },
  { name: 'Alexandria', avatar: '/agents/alexandria.jpg', specialty: 'strategy' },
  { name: 'Margot', avatar: '/agents/margot.jpg', specialty: 'execution' },
];

const LAWYER_CAPITAL_CONFIG = {
  company: 'Lawyer Capital VA',
  phone: '(813) 761-8268',
  email: 'info@thehuman.capital',
  bookingLink: '/contact',
};

// ─── CONVERSATION FLOWS (LEGAL-SPECIFIC) ────────────────────────────
type MessageOption = {
  label: string;
  next: string;
};

type FlowNode = {
  text: string;
  options?: MessageOption[];
  capture?: 'email';
  cta?: 'book' | 'call' | 'apply';
};

const createFlows = (agentName: string): Record<string, FlowNode> => ({
  // ─── ENTRY
  start: {
    text: `Hey — I'm ${agentName} from ${LAWYER_CAPITAL_CONFIG.company}. Quick question: are you looking for VA support for your firm, or interested in joining our team?`,
    options: [
      { label: 'VA support for my firm', next: 'prospect_start' },
      { label: 'I want to join as a VA', next: 'applicant_start' },
      { label: 'Just browsing', next: 'browsing' },
    ],
  },

  // ─── PROSPECT PATH
  prospect_start: {
    text: `What type of practice do you run?`,
    options: [
      { label: 'Solo practitioner', next: 'prospect_size_solo' },
      { label: 'Small firm (2-10)', next: 'prospect_size_small' },
      { label: 'Mid-size (10-50)', next: 'prospect_size_mid' },
      { label: 'Boutique specialty', next: 'prospect_size_specialty' },
    ],
  },
  prospect_size_solo: {
    text: `Perfect. Solo practitioners are our sweet spot — you handle the law, our VA handles admin, intake, scheduling, filings, compliance tracking. What's your biggest bottleneck right now?`,
    options: [
      { label: 'Client intake process', next: 'prospect_pain_intake' },
      { label: 'Document preparation', next: 'prospect_pain_docs' },
      { label: 'Case management & deadlines', next: 'prospect_pain_case' },
      { label: 'Everything — overwhelmed', next: 'prospect_pain_all' },
    ],
  },
  prospect_size_small: {
    text: `Small firms need scaled admin support. Our VA becomes your operations manager — client intake, document prep, case tracking, billing, filing coordination. What's your biggest admin pain point?`,
    options: [
      { label: 'Client intake process', next: 'prospect_pain_intake' },
      { label: 'Document preparation', next: 'prospect_pain_docs' },
      { label: 'Case management & deadlines', next: 'prospect_pain_case' },
      { label: 'Everything — overwhelmed', next: 'prospect_pain_all' },
    ],
  },
  prospect_size_mid: {
    text: `Growing firms can scale ops with a dedicated VA without hiring full-time staff. You get someone trained on your systems, your workflows, your compliance requirements. What's eating the most time?`,
    options: [
      { label: 'Client intake process', next: 'prospect_pain_intake' },
      { label: 'Document preparation', next: 'prospect_pain_docs' },
      { label: 'Case management & deadlines', next: 'prospect_pain_case' },
      { label: 'Everything — overwhelmed', next: 'prospect_pain_all' },
    ],
  },
  prospect_size_specialty: {
    text: `Specialty practices need VAs who understand their complexity. Immigration, real estate, IP, family law — we train on your practice area and tools. What's your biggest operational drag?`,
    options: [
      { label: 'Client intake process', next: 'prospect_pain_intake' },
      { label: 'Document preparation', next: 'prospect_pain_docs' },
      { label: 'Case management & deadlines', next: 'prospect_pain_case' },
      { label: 'Everything — overwhelmed', next: 'prospect_pain_all' },
    ],
  },

  prospect_pain_intake: {
    text: `We handle conflict checks, engagement letters, client portals, retainer agreements, initial document collection, consultation scheduling. Turns "weeks of back-and-forth" into a repeatable process. How soon can you start?`,
    options: [
      { label: 'Right now', next: 'prospect_book' },
      { label: 'Tell me more first', next: 'prospect_details' },
      { label: 'Send pricing info', next: 'prospect_email' },
    ],
  },
  prospect_pain_docs: {
    text: `Document formatting, motion drafting support, discovery organization, contract markup, exhibit prep, e-filing readiness. Every document meets your standards. Plus, all work is NDA-protected and attorney-client privileged. Interested?`,
    options: [
      { label: 'Book a call', next: 'prospect_book' },
      { label: 'Tell me more', next: 'prospect_details' },
      { label: 'Send pricing', next: 'prospect_email' },
    ],
  },
  prospect_pain_case: {
    text: `Docket tracking, deadline alerts, statute of limitations monitoring, case file organization, matter status reporting. Nothing gets missed. Nothing gets late. We track everything so you don't have to.`,
    options: [
      { label: 'Book a call', next: 'prospect_book' },
      { label: 'Tell me more', next: 'prospect_details' },
      { label: 'Send pricing', next: 'prospect_email' },
    ],
  },
  prospect_pain_all: {
    text: `That's exactly why we exist. Our VA becomes your operations person — intake, documents, case management, client comms, billing support, filings, everything. You get your time back. Let's set up a call to figure out the fit.`,
    options: [
      { label: 'Book a call', next: 'prospect_book' },
      { label: 'Send pricing info', next: 'prospect_email' },
    ],
  },

  prospect_details: {
    text: `Here's what you get: One dedicated VA, assigned only to your firm. NDA-protected. Checkr background verified. Trained on Clio, MyCase, PracticePanther, and other practice management tools. A Client Manager ensures quality and handles scaling. $700/mo part-time (20 hrs/week), $1,300/mo full-time (40 hrs/week). Month-to-month, cancel anytime. Ready to talk?`,
    options: [
      { label: 'Book a call', next: 'prospect_book' },
      { label: 'Send pricing', next: 'prospect_email' },
    ],
  },
  prospect_book: {
    text: `Perfect. Here's the link — pick a time that works. We'll assess your needs, answer questions, and if it's a fit, match you with your VA within 48 hours.`,
    cta: 'book',
  },
  prospect_email: {
    text: `Drop your email and I'll send over our pricing breakdown, process overview, and case study. No sales calls unless you want them.`,
    capture: 'email',
  },
  prospect_email_thanks: {
    text: `Sent. Check your inbox. If you want to skip the email and book a call, that works too — no pressure.`,
    cta: 'book',
  },

  // ─── APPLICANT PATH
  applicant_start: {
    text: `Great — we're always hiring. We're selective: top 3% of applicants. You'd be a dedicated VA assigned to one legal firm, not juggling clients. What's your background?`,
    options: [
      { label: 'Legal admin / paralegal', next: 'applicant_legal' },
      { label: 'Executive assistant', next: 'applicant_ea' },
      { label: 'Operations / project management', next: 'applicant_ops' },
      { label: 'Other background', next: 'applicant_other' },
    ],
  },
  applicant_legal: {
    text: `Perfect fit. We need people who understand legal workflows. Our process: resume review, skills assessment, video interview, Checkr background check, then a paid trial period. If you pass, you're placed with a firm. Drop your email and we'll send the application link.`,
    capture: 'email',
  },
  applicant_ea: {
    text: `Executive assistants often transition well to legal VA work. Same core skills — organization, communication, systems management — with legal training. Our process: resume review, skills test, video interview, background check, paid trial. Let's get your application started.`,
    capture: 'email',
  },
  applicant_ops: {
    text: `Ops background is gold for law firm admin. You understand workflows, process optimization, and systems thinking. Same vetting: resume → assessment → interview → background check → paid trial. Drop your email to apply.`,
    capture: 'email',
  },
  applicant_other: {
    text: `We consider all backgrounds. What matters: reliability, attention to detail, ability to learn legal terminology and workflows quickly. Process: resume review, skills assessment, video interview, background check through Checkr, paid trial. Email and we'll send the app.`,
    capture: 'email',
  },
  applicant_email_thanks: {
    text: `Got it. You'll get the application link shortly. Process takes about 5-7 business days. Good luck — we'd love to have you on the team.`,
    options: [
      { label: 'Thanks!', next: 'end' },
    ],
  },

  // ─── BROWSING PATH
  browsing: {
    text: `No problem. Worth checking out: our pricing ($700-$1,300/mo), our confidentiality standards (NDA + Checkr verification), and how the process works. Anything sound interesting?`,
    options: [
      { label: 'Tell me about pricing', next: 'browsing_pricing' },
      { label: 'Actually, I have a question', next: 'prospect_start' },
    ],
  },
  browsing_pricing: {
    text: `$700/mo part-time (up to 20 hrs/week) or $1,300/mo full-time (up to 40 hrs/week). Both include: dedicated VA, Client Manager, background check, NDA, backup coverage during leave, month-to-month flexibility. Want the full pricing breakdown?`,
    options: [
      { label: 'Send pricing details', next: 'prospect_email' },
      { label: 'Book a call', next: 'prospect_book' },
    ],
  },

  // ─── END
  end: {
    text: `Appreciate you stopping by. Questions? ${LAWYER_CAPITAL_CONFIG.phone} or ${LAWYER_CAPITAL_CONFIG.email}. We're here.`,
  },
});

// ─── RATE LIMITING
const RATE_LIMIT = { maxPerSession: 30, minIntervalMs: 2000 };

// ─── COMPONENT ─────────────────────────────────────────────
interface ChatMessage {
  role: 'agent' | 'user';
  text: string;
  timestamp: number;
}

export default function ExcellenceAgent() {
  const [agent, setAgent] = useState(AGENTS[0]);
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [currentNode, setCurrentNode] = useState<string>('start');
  const [flows, setFlows] = useState(createFlows(AGENTS[0].name));
  const [emailInput, setEmailInput] = useState('');
  const [capturedEmail, setCapturedEmail] = useState('');
  const [messageCount, setMessageCount] = useState(0);
  const [lastMessageTime, setLastMessageTime] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatBodyRef = useRef<HTMLDivElement>(null);

  const currentPage = typeof window !== 'undefined' ? window.location.pathname : '/';

  // Rotate agents on mount
  useEffect(() => {
    const randomAgent = AGENTS[Math.floor(Math.random() * AGENTS.length)];
    setAgent(randomAgent);
    setFlows(createFlows(randomAgent.name));
  }, []);

  // Auto-scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  // Show initial message on first open
  useEffect(() => {
    if (isOpen && !hasOpened) {
      setHasOpened(true);
      addAgentMessage(flows.start.text);
    }
  }, [isOpen, hasOpened, flows]);

  const addAgentMessage = useCallback((text: string) => {
    setIsTyping(true);
    const delay = Math.min(text.length * 15, 1500);
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, { role: 'agent', text, timestamp: Date.now() }]);
    }, delay);
  }, []);

  const handleOption = useCallback((option: MessageOption) => {
    const now = Date.now();
    if (now - lastMessageTime < RATE_LIMIT.minIntervalMs) return;
    if (messageCount >= RATE_LIMIT.maxPerSession) {
      addAgentMessage(`We're moving fast. Best to call us directly at ${LAWYER_CAPITAL_CONFIG.phone} or book at ${LAWYER_CAPITAL_CONFIG.bookingLink}`);
      return;
    }

    setLastMessageTime(now);
    setMessageCount(prev => prev + 1);

    setMessages(prev => [...prev, { role: 'user', text: option.label, timestamp: now }]);

    const nextNode = flows[option.next];
    if (nextNode) {
      setCurrentNode(option.next);
      addAgentMessage(nextNode.text);
    }
  }, [lastMessageTime, messageCount, addAgentMessage, flows]);

  const handleEmailSubmit = useCallback(async () => {
    const email = emailInput.trim();
    if (!email || !email.includes('@')) return;

    setCapturedEmail(email);
    setMessages(prev => [...prev, { role: 'user', text: email, timestamp: Date.now() }]);
    setEmailInput('');

    const thanksNode = currentNode === 'applicant_legal' || currentNode === 'applicant_ea' || currentNode === 'applicant_ops' || currentNode === 'applicant_other' ? 'applicant_email_thanks' : 'prospect_email_thanks';
    setCurrentNode(thanksNode);
    addAgentMessage(flows[thanksNode].text);

    sendTranscript(email);
  }, [emailInput, currentNode, messages, addAgentMessage, flows]);

  const sendTranscript = async (email: string) => {
    const transcript = messages
      .map(m => `${m.role === 'agent' ? agent.name : 'Visitor'}: ${m.text}`)
      .join('\n');

    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: `Chat Lead — ${email}`,
          email: email,
          company: `Page: ${currentPage}`,
          message: `--- CHAT TRANSCRIPT ---\n\n${transcript}\n\n--- END TRANSCRIPT ---\n\nAgent: ${agent.name}\nCaptured from: ${currentPage}\nTime: ${new Date().toISOString()}\nMessages: ${messages.length}`,
        }),
      });
    } catch (e) {
      // Silent fail
    }
  };

  useEffect(() => {
    const handleBeforeUnload = () => {
      if (capturedEmail && messages.length > 2) {
        const transcript = messages.map(m => `${m.role === 'agent' ? agent.name : 'Visitor'}: ${m.text}`).join('\n');
        navigator.sendBeacon('/api/contact', JSON.stringify({
          name: `Chat Lead (exit) — ${capturedEmail}`,
          email: capturedEmail,
          company: `Page: ${currentPage}`,
          message: transcript,
        }));
      }
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [capturedEmail, messages, agent, currentPage]);

  const node = flows[currentNode];

  if (dismissed) return null;

  return (
    <>
      {!isOpen && (
        <div style={{
          position: 'fixed', bottom: '24px', right: '24px', zIndex: 9998,
          display: 'flex', alignItems: 'center', gap: '12px',
        }}>
          <div
            onClick={() => setIsOpen(true)}
            style={{
              width: '60px', height: '60px', borderRadius: '50%',
              background: '#162040', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
              transition: 'transform 0.2s',
              overflow: 'hidden',
            }}
            onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <Image
              src={agent.avatar}
              alt={agent.name}
              width={60}
              height={60}
              priority
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            />
          </div>
        </div>
      )}

      {isOpen && (
        <div style={{
          position: 'fixed', bottom: '24px', right: '24px', zIndex: 9999,
          width: '380px', maxHeight: '560px',
          background: 'white', borderRadius: '16px',
          boxShadow: '0 20px 60px rgba(0,0,0,0.15), 0 2px 8px rgba(0,0,0,0.08)',
          display: 'flex', flexDirection: 'column', overflow: 'hidden',
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
          animation: 'slideUp 0.3s ease',
        }}>
          <div style={{
            background: '#162040', padding: '16px 20px',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{
                width: '36px', height: '36px', borderRadius: '50%',
                overflow: 'hidden',
                flexShrink: 0,
              }}>
                <Image
                  src={agent.avatar}
                  alt={agent.name}
                  width={36}
                  height={36}
                  priority
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
              </div>
              <div>
                <div style={{ color: 'white', fontSize: '14px', fontWeight: 600 }}>{agent.name}</div>
                <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '11px' }}>
                  <span style={{ display: 'inline-block', width: '6px', height: '6px', background: '#4ADE80', borderRadius: '50%', marginRight: '4px' }}></span>
                  Online now
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button
                onClick={() => setIsOpen(false)}
                style={{
                  background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: '6px',
                  width: '28px', height: '28px', cursor: 'pointer', color: 'white', fontSize: '14px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}
              >—</button>
              <button
                onClick={() => { setIsOpen(false); setDismissed(true); }}
                style={{
                  background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: '6px',
                  width: '28px', height: '28px', cursor: 'pointer', color: 'white', fontSize: '14px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}
              >✕</button>
            </div>
          </div>

          <div ref={chatBodyRef} style={{
            flex: 1, overflowY: 'auto', padding: '16px',
            display: 'flex', flexDirection: 'column', gap: '12px',
            maxHeight: '340px', minHeight: '200px',
          }}>
            {messages.map((msg, i) => (
              <div key={i} style={{
                display: 'flex', justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start',
              }}>
                <div style={{
                  maxWidth: '80%', padding: '10px 14px', borderRadius: '12px',
                  fontSize: '14px', lineHeight: '1.5',
                  ...(msg.role === 'agent' ? {
                    background: '#F3F4F6', color: '#1A1A1A',
                    borderBottomLeftRadius: '4px',
                  } : {
                    background: '#162040', color: 'white',
                    borderBottomRightRadius: '4px',
                  }),
                }}>
                  {msg.text}
                </div>
              </div>
            ))}

            {isTyping && (
              <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                <div style={{
                  background: '#F3F4F6', padding: '10px 14px', borderRadius: '12px',
                  borderBottomLeftRadius: '4px', fontSize: '14px', color: '#9CA3AF',
                }}>
                  <span style={{ animation: 'blink 1.2s infinite' }}>•</span>
                  <span style={{ animation: 'blink 1.2s infinite 0.2s' }}> •</span>
                  <span style={{ animation: 'blink 1.2s infinite 0.4s' }}> •</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          <div style={{
            borderTop: '1px solid #F3F4F6', padding: '12px 16px',
            background: '#FAFAFA',
          }}>
            {node?.cta === 'book' && (
              <a href={LAWYER_CAPITAL_CONFIG.bookingLink} style={{
                display: 'block', width: '100%', padding: '12px', textAlign: 'center',
                background: '#162040', color: 'white', borderRadius: '8px',
                fontSize: '13px', fontWeight: 600, letterSpacing: '0.02em',
              }}>
                Book a Strategy Call
              </a>
            )}

            {node?.cta === 'call' && (
              <a href={`tel:${LAWYER_CAPITAL_CONFIG.phone.replace(/[^0-9]/g, '')}`} style={{
                display: 'block', width: '100%', padding: '12px', textAlign: 'center',
                background: '#162040', color: 'white', borderRadius: '8px',
                fontSize: '13px', fontWeight: 600,
              }}>
                Call {LAWYER_CAPITAL_CONFIG.phone}
              </a>
            )}

            {node?.capture === 'email' && !capturedEmail && (
              <div style={{ display: 'flex', gap: '8px' }}>
                <input
                  type="email"
                  value={emailInput}
                  onChange={e => setEmailInput(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && handleEmailSubmit()}
                  placeholder="your@email.com"
                  style={{
                    flex: 1, padding: '10px 12px', border: '1px solid #E5E7EB',
                    borderRadius: '8px', fontSize: '14px', outline: 'none',
                    fontFamily: 'inherit',
                  }}
                />
                <button
                  onClick={handleEmailSubmit}
                  style={{
                    padding: '10px 16px', background: '#162040', color: 'white',
                    border: 'none', borderRadius: '8px', fontSize: '13px',
                    fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit',
                  }}
                >
                  Send
                </button>
              </div>
            )}

            {node?.options && !node.capture && !node.cta && !isTyping && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {node.options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleOption(opt)}
                    style={{
                      width: '100%', padding: '10px 14px', textAlign: 'left',
                      background: 'white', border: '1px solid #E5E7EB',
                      borderRadius: '8px', fontSize: '13px', color: '#1A1A1A',
                      cursor: 'pointer', fontFamily: 'inherit', fontWeight: 500,
                      transition: 'all 0.15s',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = '#162040';
                      e.currentTarget.style.background = '#F8F9FA';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = '#E5E7EB';
                      e.currentTarget.style.background = 'white';
                    }}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            )}

            {currentNode === 'end' && (
              <div style={{ fontSize: '12px', color: '#9CA3AF', textAlign: 'center', padding: '4px' }}>
                {LAWYER_CAPITAL_CONFIG.phone} — {LAWYER_CAPITAL_CONFIG.email}
              </div>
            )}
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes blink {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
      `}</style>
    </>
  );
}
