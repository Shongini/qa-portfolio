export function SectionTitle({ id, eyebrow, title, subtitle }) {
  return (
    <div id={id} className="mb-8">
      <p className="mb-2 text-xs uppercase tracking-[0.24em] text-neonBlue">{eyebrow}</p>
      <h2 className="text-2xl font-semibold text-white md:text-3xl">{title}</h2>
      <p className="mt-2 max-w-2xl text-sm text-slate-300 md:text-base">{subtitle}</p>
    </div>
  );
}
