export default function SectionHeading({ label, title, subtitle, center = true }) {
  return (
    <div className={`mb-12 ${center ? "text-center" : ""}`}>
      {label && <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-sans text-xs font-semibold mb-4 uppercase tracking-wider">{label}</span>}
      <h2 className="font-display text-3xl md:text-4xl text-primary leading-tight">{title}</h2>
      {subtitle && <p className="mt-3 text-muted-foreground font-sans text-sm md:text-base max-w-xl mx-auto leading-relaxed">{subtitle}</p>}
    </div>
  );
}
