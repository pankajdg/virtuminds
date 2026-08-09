export function CtaBand() {
  return (
    <section className="bg-navy py-20 text-navy-foreground">
      <div className="section-shell flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Focused guidance on your cyber risk decision
          </h2>
          <p className="mt-3 text-navy-foreground/70">
            A 30-minute conversation to frame the decision, the exposure, and the options your
            board needs to see.
          </p>
        </div>
        <a
          href="https://calendly.com"
          target="_blank"
          rel="noreferrer"
          className="shrink-0 rounded-md bg-gold px-6 py-3 text-sm font-semibold text-gold-foreground transition-opacity hover:opacity-90"
        >
          Schedule a meeting
        </a>
      </div>
    </section>
  );
}
