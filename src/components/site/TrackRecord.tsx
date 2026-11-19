import board from "@/assets/case-board.jpg";
import datacenter from "@/assets/case-datacenter.jpg";
import soc from "@/assets/case-soc.jpg";
import tower from "@/assets/case-tower.jpg";

const records = [
  {
    image: board,
    headline: "A regulatory program, on deadline",
    result: "$150M program, zero missed deadlines",
    did: "I advised Intuit's leadership on its Money Transmission License program, centralizing reporting across Payments, Payroll, Invoicing and QuickBooks.",
    lesson:
      "Regulators will expect AI oversight to be evidenced the same way, across every business unit.",
  },
  {
    image: datacenter,
    headline: "An auto-approve default, closed",
    result: "3.5% cut in annual leased-asset spend",
    did: "IT was approving vendor late-return charges by default. I added return timestamping so those charges could be caught and rejected.",
    lesson: "Unsanctioned AI subscriptions are the new auto-approved default.",
  },
  {
    image: soc,
    headline: "A platform that funded its own growth",
    result: "25 → 200+ internal teams in two years",
    did: "I built Cisco's Hadoop platform and a chargeback model that funded its own capacity expansion.",
    lesson: "AI platforms scale the same way: adoption first, unless controls keep pace.",
  },
  {
    image: tower,
    headline: "A failed upgrade, recovered in six weeks",
    result: "6 weeks vs. a 6-month estimate",
    did: "I recovered a failed third-party upgrade, restored data integrity and finished in six weeks.",
    lesson: "AI will fail in production too, and recovery speed is a governance question.",
  },
];

export function TrackRecord({ framingLine }: { framingLine?: string }) {
  return (
    <section id="track-record" className="scroll-mt-24 bg-background py-24">
      <div className="section-shell">
        <h2 className="text-3xl font-bold sm:text-4xl">Track Record</h2>
        {framingLine ? (
          <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">{framingLine}</p>
        ) : null}
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {records.map((record) => (
            <article
              key={record.headline}
              className="group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card"
            >
              <div className="relative">
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
              </div>
              <div className="border-t-2 border-gold/50 p-6 text-sm leading-relaxed text-muted-foreground lg:p-7">
                <p>{record.did}</p>
                <p className="mt-3">{record.lesson}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
