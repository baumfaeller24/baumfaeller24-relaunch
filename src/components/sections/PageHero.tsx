export function PageHero({
  eyebrow,
  title,
  lead,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
}) {
  return (
    <section className="bg-bark text-bone">
      <div className="mx-auto max-w-6xl px-4 pb-14 pt-28 sm:px-6 sm:pb-16 sm:pt-32">
        {eyebrow ? (
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-bone-muted">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-medium tracking-tight sm:text-5xl">
          {title}
        </h1>
        {lead ? (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-bone-muted">{lead}</p>
        ) : null}
      </div>
    </section>
  );
}
