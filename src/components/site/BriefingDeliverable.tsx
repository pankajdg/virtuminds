import { cn } from "@/lib/utils";

type Status = "CONFIRMED" | "INFERRED" | "UNKNOWN";

const statusChip: Record<Status, string> = {
  CONFIRMED: "bg-gold text-gold-foreground",
  INFERRED: "border border-gold/50 text-gold",
  UNKNOWN: "border border-white/25 text-navy-foreground/60",
};

const findings: {
  title: string;
  status?: Status;
  body: string;
  action?: boolean;
}[] = [
  {
    title: "Shadow AI",
    status: "CONFIRMED",
    body: "14 unsanctioned AI tools detected in network traffic across 3 business units, including 2 with access to customer PII.",
  },
  {
    title: "Third-party & model risk",
    status: "INFERRED",
    body: "Vendor contracts for 6 of 11 AI-enabled SaaS tools lack data-retention and model-training clauses.",
  },
  {
    title: "Data leakage paths",
    status: "CONFIRMED",
    body: "Code and customer records observed in prompts sent to external LLMs via browser extensions.",
  },
  {
    title: "Governance gaps",
    status: "UNKNOWN",
    body: "No inventory of AI models in production; ownership unclear for 2 customer-facing pilots.",
  },
  {
    title: "Board-ready next steps",
    body: "3 priority actions sequenced by risk reduction — full detail in the Briefing readout.",
    action: true,
  },
];

export function BriefingDeliverable() {
  return (
    <section className="border-y border-border bg-secondary py-16 lg:py-20">
      <div className="section-shell">
        <p className="eyebrow text-gold">The Briefing deliverable</p>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">What you walk away with</h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Every Readiness Briefing ends with a one-page AI exposure map — what we confirmed,
          what&rsquo;s inferred, and what we still don&rsquo;t know. Below is an illustrative sample
          (anonymized).
        </p>

        <figure className="mx-auto mt-10 max-w-3xl overflow-hidden rounded-lg border border-navy/15 bg-navy text-navy-foreground shadow-xl shadow-navy/15">
          <div className="h-1 w-full bg-gold" aria-hidden="true" />

          <figcaption className="border-b border-white/10 px-6 py-5 lg:px-8">
            <span className="inline-block rounded-sm bg-gold/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-gold">
              Illustrative sample
            </span>
            <h3 className="mt-3 text-lg font-semibold">AI exposure map</h3>
          </figcaption>

          <ol>
            {findings.map((finding, index) => (
              <li
                key={finding.title}
                className={cn(
                  "border-b border-white/10 px-6 py-5 last:border-b-0 lg:px-8",
                  finding.action && "border-l-2 border-l-gold bg-gold/5",
                )}
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h4 className="flex items-baseline gap-2 text-sm font-semibold lg:text-base">
                    <span className="text-[11px] font-semibold tracking-[0.16em] text-gold">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {finding.title}
                  </h4>
                  {finding.status ? (
                    <span
                      className={cn(
                        "rounded-sm px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em]",
                        statusChip[finding.status],
                      )}
                    >
                      {finding.status.toLowerCase()}
                    </span>
                  ) : null}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-navy-foreground/75">
                  {finding.body}
                </p>
              </li>
            ))}
          </ol>
        </figure>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          <span className="font-semibold text-foreground">Honesty, not false precision:</span> every
          finding is labeled confirmed, inferred, or unknown.
        </p>
      </div>
    </section>
  );
}
