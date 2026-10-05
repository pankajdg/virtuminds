const points = [
  {
    number: "01",
    title: "It catalogs use cases instead of governing decisions.",
    body: "A list of AI pilots tells the board nothing about what it must be able to evidence.",
  },
  {
    number: "02",
    title: "It&rsquo;s written to satisfy auditors, not directors.",
    body: "Checkbox compliance produces binders. Boards need judgment they can defend.",
  },
  {
    number: "03",
    title: "It&rsquo;s sold by vendors.",
    body: "Advice paid for by the vendor it recommends isn&rsquo;t advice — it&rsquo;s distribution.",
  },
];

export function PointOfView() {
  return (
    <section className="bg-background py-16 lg:py-20">
      <div className="section-shell">
        <p className="eyebrow text-gold">A point of view</p>
        <h2 className="mt-3 max-w-3xl text-3xl font-bold sm:text-4xl">
          What most AI governance gets wrong
        </h2>

        <div className="mt-10 border-t border-border">
          {points.map((point) => (
            <div
              key={point.number}
              className="grid gap-2 border-b border-border py-6 sm:grid-cols-[2.5rem_1fr] sm:gap-6 lg:py-7"
            >
              <span className="pt-1.5 text-xs font-semibold tracking-[0.18em] text-gold">
                {point.number}
              </span>
              <div>
                <h3
                  className="text-lg font-semibold sm:text-xl"
                  dangerouslySetInnerHTML={{ __html: point.title }}
                />
                <p
                  className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base"
                  dangerouslySetInnerHTML={{ __html: point.body }}
                />
              </div>
            </div>
          ))}
        </div>

        <blockquote className="mt-10 border-l-2 border-gold bg-navy px-6 py-6 text-navy-foreground lg:px-8 lg:py-8">
          <p className="max-w-3xl text-lg font-medium leading-relaxed sm:text-xl">
            Virtuminds takes{" "}
            <span className="text-gold">no vendor incentives and no referral fees</span>. The
            principal who signs is the principal who delivers.
          </p>
        </blockquote>
      </div>
    </section>
  );
}
