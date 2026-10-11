import board from "@/assets/case-board.jpg";
import datacenter from "@/assets/case-datacenter.jpg";
import soc from "@/assets/case-soc.jpg";
import tower from "@/assets/case-tower.jpg";

const records = [
  {
    image: datacenter,
    headline: "A default that quietly cost millions",
    result: "3.5% cut in annual leased-asset spend",
    lesson:
      "Untracked spend is untracked risk. The same cost-governance discipline now maps AI tool sprawl — every unsanctioned subscription is shadow AI with a price tag.",
  },
  {
    image: soc,
    headline: "A platform that funded its own growth",
    result: "25 → 200+ internal teams in 2 years",
    lesson:
      "Governance that scales with adoption. The platform controls that carried 200+ teams are the template for AI guardrails that enable speed instead of blocking it.",
  },
  {
    image: tower,
    headline: "Six months of downtime, recovered fast",
    result: "6-week recovery vs. 6-month estimate",
    lesson:
      "Incident discipline transfers directly. When AI fails in production — and it will — recovery speed is a governance outcome, not luck.",
  },
  {
    image: board,
    headline: "Four deadlines, one framework, zero misses",
    result: "$150M saved, zero missed deadlines",
    lesson:
      "A $150M regulatory program delivered with zero missed deadlines. That compliance machinery is the template for EU AI Act, NIST AI RMF, and ISO 42001 readiness.",
  },
];

export function TrackRecord({ framingLine }: { framingLine?: string }) {
  return (
    <section id="track-record" className="scroll-mt-24 bg-background py-24">
      <div className="section-shell">
        <p className="eyebrow">Track Record</p>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Selected results</h2>
        {framingLine ? (
          <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">{framingLine}</p>
        ) : null}
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {records.map((record) => (
            <article
              key={record.headline}
              className="group relative overflow-hidden rounded-lg bg-navy-deep"
            >
              <img
                src={record.image}
                alt={record.headline}
                width={1024}
                height={768}
                loading="lazy"
                className="h-72 w-full object-cover opacity-60 transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-navy-deep via-navy-deep/50 to-transparent p-7 text-navy-foreground">
                <h3 className="text-lg font-semibold">{record.headline}</h3>
                <p className="mt-1 font-display text-xl font-bold text-gold sm:text-2xl">
                  {record.result}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
