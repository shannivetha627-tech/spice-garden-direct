interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}

export default function PageHero({ eyebrow, title, subtitle }: Props) {
  return (
    <section className="relative pt-32 md:pt-40 pb-16 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--gold)/8%,_transparent_60%)]" />
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-gold/10 blur-3xl" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-highlight/10 blur-3xl" />
      <div className="container-x relative text-center">
        {eyebrow && (
          <p className="reveal text-gold uppercase tracking-[0.4em] text-xs mb-4">
            {eyebrow}
          </p>
        )}
        <h1 className="reveal reveal-delay-1 font-display text-4xl md:text-6xl lg:text-7xl leading-tight">
          {title.split("|").map((part, i) =>
            i % 2 === 1 ? (
              <span key={i} className="text-gold-gradient">{part}</span>
            ) : (
              <span key={i}>{part}</span>
            )
          )}
        </h1>
        {subtitle && (
          <p className="reveal reveal-delay-2 mt-6 max-w-2xl mx-auto text-muted-foreground text-base md:text-lg">
            {subtitle}
          </p>
        )}
        <div className="reveal reveal-delay-3 gold-divider mx-auto mt-8" />
      </div>
    </section>
  );
}