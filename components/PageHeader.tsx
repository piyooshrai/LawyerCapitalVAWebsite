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
      <section className="relative min-h-[60vh] bg-charcoal overflow-hidden pt-32 pb-20 px-16 flex items-center">
        {/* Background texture */}
        <div className="absolute inset-0 bg-pinstripe-vertical pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/30 to-charcoal/95 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          {/* Label */}
          {label && (
            <div className="mb-8 flex items-center gap-4">
              <div className="w-6 h-px bg-brass" />
              <span className="text-xs font-600 tracking-widest uppercase text-brass">
                {label}
              </span>
            </div>
          )}

          {/* Main title */}
          <h1 className="font-serif text-6xl leading-tight text-white mb-6 font-400 max-w-4xl">
            {title}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p className="text-lg text-white/60 leading-relaxed max-w-2xl font-300">
              {subtitle}
            </p>
          )}
        </div>
      </section>

      {/* ─── BRASS DIVIDER ─── */}
      <div className="h-14 bg-brass flex items-center justify-center gap-12 overflow-hidden">
        {['NDA Protected', 'Checkr Verified', 'Dedicated Support', 'Confidential', 'Expert Team'].map((item, i) => (
          <span key={i} className="text-xs font-600 tracking-wide uppercase text-white/80 whitespace-nowrap">
            {item}
          </span>
        ))}
      </div>
    </>
  );
}
