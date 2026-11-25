const ITEMS = [
  {
    date: "November 20, 2026",
    title: "The patch gap is the threat actor's window",
    href: "/insights#briefs",
  },
  {
    date: "November 19, 2026",
    title: "One breach became the pretext for the next",
    href: "/insights#briefs",
  },
  {
    date: "October 2026",
    title: "Questions every director should ask about AI",
    href: "/insights",
  },
] as const;

export function LatestBriefs() {
  return (
    <section className="border-t border-border bg-background py-16 lg:py-20">
      <div className="section-shell">
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="text-3xl font-bold sm:text-4xl">Latest briefs</h2>
          <a
            href="/insights"
            className="shrink-0 text-sm font-semibold text-gold underline-offset-2 hover:underline"
          >
            All insights &rarr;
          </a>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {ITEMS.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="group rounded-lg border border-border bg-card p-6 transition-colors hover:border-gold"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold">
                {item.date}
              </p>
              <p className="mt-3 text-lg font-semibold leading-snug group-hover:underline group-hover:underline-offset-2">
                {item.title}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
