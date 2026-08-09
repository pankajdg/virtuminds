import board from "@/assets/case-board.jpg";
import datacenter from "@/assets/case-datacenter.jpg";
import soc from "@/assets/case-soc.jpg";
import tower from "@/assets/case-tower.jpg";

const records = [
  {
    image: datacenter,
    headline: "A default that quietly cost millions",
    result: "3.5% cut in annual leased-asset spend",
  },
  {
    image: soc,
    headline: "A platform that funded its own growth",
    result: "25 → 200+ internal teams in 2 years",
  },
  {
    image: tower,
    headline: "Six months of downtime, recovered fast",
    result: "6-week recovery vs. 6-month estimate",
  },
  {
    image: board,
    headline: "Four deadlines, one framework, zero misses",
    result: "$150M saved, zero missed deadlines",
  },
];

export function TrackRecord() {
  return (
    <section id="track-record" className="scroll-mt-24 bg-background py-24">
      <div className="section-shell">
        <p className="eyebrow">Track Record</p>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Selected results</h2>
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
