// ExcellenceAgent.tsx
// Drop this into /components/ui/ on any THC site.
// Add <ExcellenceAgent /> to your root layout.
// Uses your existing /api/contact route for transcript delivery.

'use client';

import { useState, useRef, useEffect, useCallback } from 'react';

// ─── CONFIGURATION ─────────────────────────────────────────
// Customize these per site (thehuman.capital, drcapitalva.com, etc.)
const AGENT_CONFIG = {
  name: 'The Human Capital',
  agentName: 'Alex',
  phone: '(813) 761-8268',
  email: 'info@thehuman.capital',
  bookingLink: '/contact',
  // Change per vertical site:
  // drcapitalva.com → 'Dr. Capital VA', healthcare-specific flows
  // lawyercapitalva.com → 'Lawyer Capital VA', legal-specific flows
  // accountantcapitalva.com → 'Accountant Capital VA', accounting-specific flows
};

// ─── CONVERSATION FLOWS ────────────────────────────────────
// Every path ends in ≤3 exchanges at a CTA.
// Edit these to match each vertical site's language.

type MessageOption = {
  label: string;
  next: string;
};

type FlowNode = {
  text: string;
  options?: MessageOption[];
  capture?: 'email';
  cta?: 'book' | 'call' | 'apply';
  delay?: number;
};

const FLOWS: Record<string, FlowNode> = {
  // ─── ENTRY
  start: {
    text: `Hey — I'm ${AGENT_CONFIG.agentName} from ${AGENT_CONFIG.name}. Quick question: what brings you here today?`,
    options: [
      { label: 'I need a VA for my business', next: 'prospect_start' },
      { label: 'I want to work as a VA', next: 'applicant_start' },
      { label: 'Just browsing', next: 'browsing' },
    ],
  },

  // ─── PROSPECT PATH
  prospect_start: {
    text: `Good. What's eating most of your time right now?`,
    options: [
      { label: 'Admin and back office', next: 'prospect_admin' },
      { label: 'Sales and lead gen', next: 'prospect_sales' },
      { label: 'Bookkeeping and finances', next: 'prospect_books' },
      { label: 'Something else', next: 'prospect_other' },
    ],
  },
  prospect_admin: {
    text: `That's our bread and butter. Email, scheduling, data entry, doc management — we match you with a dedicated VA who handles all of it. Starts at $700/mo, no lock-in. Want to set up a quick 15-min call to talk specifics?`,
    options: [
      { label: 'Yeah, let\'s do it', next: 'prospect_book' },
      { label: 'Tell me more first', next: 'prospect_details' },
      { label: 'Send me pricing info', next: 'prospect_email' },
    ],
  },
  prospect_sales: {
    text: `Lead research, CRM management, cold outreach, follow-ups, appointment setting. Your VA becomes the engine behind your pipeline. $700/mo part-time, $1,300 full-time. Same dedicated person every day. Want a quick call to map out what we'd take off your plate?`,
    options: [
      { label: 'Book a call', next: 'prospect_book' },
      { label: 'Send me details', next: 'prospect_email' },
    ],
  },
  prospect_books: {
    text: `QuickBooks, Xero, FreshBooks — our VAs are trained on all of them. Daily bookkeeping, reconciliation, invoicing, payroll support. Starts at $700/mo. Most clients say their CPA loves us. Quick call to see if it's a fit?`,
    options: [
      { label: 'Set up a call', next: 'prospect_book' },
      { label: 'Send me pricing', next: 'prospect_email' },
    ],
  },
  prospect_other: {
    text: `We cover a lot — marketing, customer support, operations, even industry-specific stuff like patient scheduling or legal intake. Easiest way to figure out if we can help is a quick 15-min call. No pitch, just figuring out if there's a fit.`,
    options: [
      { label: 'Let\'s talk', next: 'prospect_book' },
      { label: 'Send me info first', next: 'prospect_email' },
    ],
  },
  prospect_details: {
    text: `Here's the short version: you get one dedicated VA, assigned only to you. They learn your tools, your preferences, your workflows. A Client Manager oversees everything — quality checks, performance reviews, backup coverage if your VA is ever out. We vet the top 3% of applicants through background checks, interviews, and a paid trial. $700/mo part-time, $1,300 full-time. Month-to-month, cancel anytime. Want to book that call?`,
    options: [
      { label: 'Book a call', next: 'prospect_book' },
      { label: 'Send me pricing details', next: 'prospect_email' },
    ],
  },
  prospect_book: {
    text: `Perfect. Here's the link to schedule your strategy call — takes 30 seconds to pick a time. We'll call you, assess your needs, and if it makes sense, have your VA matched within 48 hours.`,
    cta: 'book',
  },
  prospect_email: {
    text: `Drop your email and I'll send over our pricing breakdown and a quick overview of how it works.`,
    capture: 'email',
  },
  prospect_email_thanks: {
    text: `Sent. Check your inbox in the next few minutes. If you want to skip ahead, you can book a call anytime — no pressure, just a conversation.`,
    cta: 'book',
  },

  // ─── APPLICANT PATH
  applicant_start: {
    text: `Great — we're always looking for talented people. Quick overview: we hire the top 3% of applicants. You'd be a dedicated VA assigned to one client, not juggling multiple accounts. What's your background?`,
    options: [
      { label: 'Admin / Executive Assistant', next: 'applicant_info' },
      { label: 'Bookkeeping / Finance', next: 'applicant_info' },
      { label: 'Marketing / Social Media', next: 'applicant_info' },
      { label: 'Healthcare / Legal / Other', next: 'applicant_info' },
    ],
  },
  applicant_info: {
    text: `Good. Our process: resume review, skills assessment, video interview, background check through Checkr, then a paid trial period. If you make it through, you're matched with a client in your area of expertise. Drop your email and we'll send you the application link.`,
    capture: 'email',
  },
  applicant_email_thanks: {
    text: `Got it. You'll receive the application link shortly. The process typically takes 5-7 business days. Good luck — we'd love to have you on the team.`,
    options: [
      { label: 'Thanks!', next: 'end' },
    ],
  },

  // ─── BROWSING PATH
  browsing: {
    text: `No problem. If anything catches your eye, I'm here. Two things worth checking out: our pricing (starts at $700/mo) and our case studies — real clients, real results.`,
    options: [
      { label: 'Show me pricing', next: 'browsing_pricing' },
      { label: 'Actually, I have a question', next: 'prospect_start' },
    ],
  },
  browsing_pricing: {
    text: `$700/mo for part-time (up to 20 hrs/week). $1,300/mo for full-time (up to 40 hrs/week). Both include a dedicated VA, Client Manager, background check, NDA, and backup coverage. Month-to-month. No lock-in. Want the full breakdown sent to your email?`,
    options: [
      { label: 'Send it over', next: 'prospect_email' },
      { label: 'Book a call instead', next: 'prospect_book' },
    ],
  },

  // ─── END
  end: {
    text: `Appreciate you stopping by. If you need anything later, we're here. ${AGENT_CONFIG.phone} or ${AGENT_CONFIG.email}.`,
  },
};

// ─── RATE LIMITING
const RATE_LIMIT = { maxPerSession: 30, minIntervalMs: 2000 };

// ─── COMPONENT ─────────────────────────────────────────────

interface ChatMessage {
  role: 'agent' | 'user';
  text: string;
  timestamp: number;
}

export default function ExcellenceAgent() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [currentNode, setCurrentNode] = useState<string>('start');
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

  // Auto-scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  // Show initial message on first open
  useEffect(() => {
    if (isOpen && !hasOpened) {
      setHasOpened(true);
      addAgentMessage(FLOWS.start.text);
    }
  }, [isOpen, hasOpened]);

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
      addAgentMessage(`We're moving fast. Best to call us directly at ${AGENT_CONFIG.phone} or book at ${AGENT_CONFIG.bookingLink}`);
      return;
    }

    setLastMessageTime(now);
    setMessageCount(prev => prev + 1);

    // Add user message
    setMessages(prev => [...prev, { role: 'user', text: option.label, timestamp: now }]);

    // Navigate to next node
    const nextNode = FLOWS[option.next];
    if (nextNode) {
      setCurrentNode(option.next);
      addAgentMessage(nextNode.text);
    }
  }, [lastMessageTime, messageCount, addAgentMessage]);

  const handleEmailSubmit = useCallback(async () => {
    const email = emailInput.trim();
    if (!email || !email.includes('@')) return;

    setCapturedEmail(email);
    setMessages(prev => [...prev, { role: 'user', text: email, timestamp: Date.now() }]);
    setEmailInput('');

    // Determine which thanks node
    const thanksNode = currentNode === 'applicant_info' ? 'applicant_email_thanks' : 'prospect_email_thanks';
    setCurrentNode(thanksNode);
    addAgentMessage(FLOWS[thanksNode].text);

    // Send transcript via API
    sendTranscript(email);
  }, [emailInput, currentNode, messages, addAgentMessage]);

  const sendTranscript = async (email: string) => {
    const transcript = messages
      .map(m => `${m.role === 'agent' ? AGENT_CONFIG.agentName : 'Visitor'}: ${m.text}`)
      .join('\n');

    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: `Chat Lead — ${email}`,
          email: email,
          company: `Page: ${currentPage}`,
          message: `--- CHAT TRANSCRIPT ---\n\n${transcript}\n\n--- END TRANSCRIPT ---\n\nCaptured from: ${currentPage}\nTime: ${new Date().toISOString()}\nMessages: ${messages.length}`,
        }),
      });
    } catch (e) {
      // Silent fail — don't break the chat experience
    }
  };

  // Send transcript on window close if email was captured
  useEffect(() => {
    const handleBeforeUnload = () => {
      if (capturedEmail && messages.length > 2) {
        navigator.sendBeacon('/api/contact', JSON.stringify({
          name: `Chat Lead (exit) — ${capturedEmail}`,
          email: capturedEmail,
          company: `Page: ${currentPage}`,
          message: messages.map(m => `${m.role === 'agent' ? AGENT_CONFIG.agentName : 'Visitor'}: ${m.text}`).join('\n'),
        }));
      }
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [capturedEmail, messages, currentPage]);

  const node = FLOWS[currentNode];

  if (dismissed) return null;

  return (
    <>
      {/* ─── CHAT BUBBLE ─── */}
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
            }}
            onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
          </div>
        </div>
      )}

      {/* ─── CHAT WINDOW ─── */}
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
          {/* Header */}
          <div style={{
            background: '#162040', padding: '16px 20px',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{
                width: '36px', height: '36px', borderRadius: '50%',
                background: 'rgba(255,255,255,0.15)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '14px', color: 'white', fontWeight: 600,
              }}>
                {AGENT_CONFIG.agentName[0]}
              </div>
              <div>
                <div style={{ color: 'white', fontSize: '14px', fontWeight: 600 }}>{AGENT_CONFIG.agentName}</div>
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

          {/* Messages */}
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

          {/* Options / Input Area */}
          <div style={{
            borderTop: '1px solid #F3F4F6', padding: '12px 16px',
            background: '#FAFAFA',
          }}>
            {/* CTA buttons */}
            {node?.cta === 'book' && (
              <a href={AGENT_CONFIG.bookingLink} style={{
                display: 'block', width: '100%', padding: '12px', textAlign: 'center',
                background: '#162040', color: 'white', borderRadius: '8px',
                fontSize: '13px', fontWeight: 600, letterSpacing: '0.02em',
              }}>
                Book a Strategy Call
              </a>
            )}

            {node?.cta === 'call' && (
              <a href={`tel:${AGENT_CONFIG.phone.replace(/[^0-9]/g, '')}`} style={{
                display: 'block', width: '100%', padding: '12px', textAlign: 'center',
                background: '#162040', color: 'white', borderRadius: '8px',
                fontSize: '13px', fontWeight: 600,
              }}>
                Call {AGENT_CONFIG.phone}
              </a>
            )}

            {/* Email capture */}
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

            {/* Option buttons */}
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

            {/* End state — show contact info */}
            {currentNode === 'end' && (
              <div style={{ fontSize: '12px', color: '#9CA3AF', textAlign: 'center', padding: '4px' }}>
                {AGENT_CONFIG.phone} — {AGENT_CONFIG.email}
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
