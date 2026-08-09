const companies = [
  "Cisco",
  "Intuit",
  "GE",
  "HP",
  "DirecTV",
  "Wachovia",
  "AOL",
  "Constellation Energy",
];

export function TrustStrip() {
  return (
    <section className="border-b border-border bg-card py-12">
      <div className="section-shell text-center">
        <p className="eyebrow">Experience Across Fortune 100 Enterprises</p>
        <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {companies.map((company) => (
            <li
              key={company}
              className="font-display text-lg font-semibold tracking-tight text-muted-foreground"
            >
              {company}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
