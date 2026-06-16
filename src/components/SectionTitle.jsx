function BrandMark({ compact = false }) {
  return (
    <div className={compact ? "leading-tight" : "leading-none"}>
      <p className={`font-display font-bold tracking-[0.18em] text-neonBlue ${compact ? "text-sm" : "text-lg"}`}>
        CHRYC
      </p>
      <p className={`font-mono uppercase text-neonPurple/80 ${compact ? "text-[9px] tracking-[0.22em]" : "text-[10px] tracking-[0.28em]"}`}>
        quality.sys
      </p>
    </div>
  );
}

export { BrandMark };

export function SectionTitle({ id, eyebrow, title, subtitle }) {
  return (
    <div id={id} className="mb-8">
      <p className="mb-2 font-mono text-xs uppercase tracking-[0.24em] text-neonBlue">{eyebrow}</p>
      <h2 className="font-display text-2xl font-semibold tracking-wide text-white md:text-3xl">{title}</h2>
      <p className="mt-2 max-w-2xl text-sm text-slate-300 md:text-base">{subtitle}</p>
    </div>
  );
}
