'use client';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  label?: string;
}

export default function PageHeader({
  title,
  subtitle,
  label = 'Practice Support',
}: PageHeaderProps) {
  return (
    <>
      {/* ─── PAGE HEADER HERO ─── */}
      <section className="relative bg-charcoal overflow-hidden pt-32 pb-24 px-16 flex items-center">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-pinstripe-vertical opacity-5 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal to-charcoal/80 pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto w-full">
          {/* Label */}
          {label && (
            <div className="mb-6 flex items-center gap-3">
              <div className="w-8 h-px bg-brass" />
              <span className="text-xs font-600 tracking-widest uppercase text-brass">
                {label}
              </span>
            </div>
          )}

          {/* Main title */}
          <h1 className="font-serif text-7xl leading-tight text-white mb-6 font-400 max-w-5xl">
            {title}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p className="text-xl text-white/70 leading-relaxed max-w-3xl font-300">
              {subtitle}
            </p>
          )}
        </div>
      </section>

      {/* ─── BRASS DIVIDER ─── */}
      <div className="h-16 bg-brass flex items-center justify-center gap-16 overflow-hidden px-16">
        {['NDA Protected', 'Checkr Verified', 'Dedicated Support', 'Confidential', 'Expert Team'].map((item, i) => (
          <span key={i} className="text-xs font-600 tracking-widest uppercase text-white/90 whitespace-nowrap">
            {item}
          </span>
        ))}
      </div>
    </>
  );
}
