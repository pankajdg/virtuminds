import board from "@/assets/case-board.jpg";
import datacenter from "@/assets/case-datacenter.jpg";
import soc from "@/assets/case-soc.jpg";
import tower from "@/assets/case-tower.jpg";

const records = [
  { image: board, headline: "Board cyber reporting rebuilt", result: "4 quarters" },
  { image: datacenter, headline: "Global infrastructure consolidation", result: "$40M saved" },
  { image: soc, headline: "Security operations stood up", result: "24/7 coverage" },
  { image: tower, headline: "Enterprise risk program led", result: "11+ years" },
];

export function TrackRecord() {
  return (
    <section className="bg-background py-24">
      <div className="section-shell">
        <p className="eyebrow">Track Record</p>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Outcomes, not activity</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          A selection of outcomes shaped through trusted partnerships and disciplined delivery.
        </p>
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
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-navy-deep via-navy-deep/40 to-transparent p-7 text-navy-foreground">
                <p className="font-display text-3xl font-bold text-gold">{record.result}</p>
                <h3 className="mt-1 text-lg font-semibold">{record.headline}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
