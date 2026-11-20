export function WhyNow() {
  return (
    <section className="bg-navy py-20 text-navy-foreground">
      <div className="section-shell">
        <p className="eyebrow text-gold">Why now</p>
        <h2 className="mt-4 max-w-3xl text-3xl font-bold sm:text-4xl">
          The risk your CIO isn&rsquo;t reporting.
        </h2>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-navy-foreground/80">
          <span className="font-semibold text-gold">68%</span> of security leaders admit to using
          unauthorized AI tools themselves.{" "}
          <span className="font-semibold text-gold">43%</span> of security incidents now involve
          shadow AI — more than doubled from 20% last year. The people writing the policy are
          often routing around it.
        </p>
        <p className="mt-8 max-w-3xl text-lg font-medium leading-relaxed text-navy-foreground">
          Shadow AI isn&rsquo;t an awareness problem. It&rsquo;s an authority problem — and boards
          are being asked to oversee AI decisions they cannot evidence.
        </p>
        <p className="mt-8 text-xs text-navy-foreground/50">
          Sources:{" "}
          <a
            href="https://www.upguard.com/resources/the-state-of-shadow-ai"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-2 hover:text-gold"
          >
            UpGuard State of Shadow AI (Nov 2025)
          </a>
          ;{" "}
          <a
            href="https://www.ibm.com/think/insights/every-ai-agent-followed-rules-data-still-leaked"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-2 hover:text-gold"
          >
            IBM Cost of a Data Breach Report 2026
          </a>
          .
        </p>
      </div>
    </section>
  );
}
