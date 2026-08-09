const services = [
  {
    title: "Board Cyber Risk Briefings",
    description: "Plain-language reporting that makes exposure and trade-offs decision-ready.",
  },
  {
    title: "AI Governance & Oversight",
    description: "Practical guardrails for AI adoption, model risk, and third-party exposure.",
  },
  {
    title: "Security Program Assessment",
    description: "An honest read on maturity, spend efficiency, and where the real gaps sit.",
  },
  {
    title: "CISO Advisory & Coaching",
    description: "A trusted sounding board for security leaders facing high-stakes calls.",
  },
  {
    title: "M&A Cyber Due Diligence",
    description: "Pre- and post-close risk assessment that protects deal value.",
  },
  {
    title: "Incident Readiness",
    description: "Tabletop exercises and response plans tested at the executive level.",
  },
];

export function ServicesGrid() {
  return (
    <section id="services" className="bg-background py-24">
      <div className="section-shell">
        <p className="eyebrow">Services</p>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">How I can help</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Engagements are scoped tightly around the decision at hand — no retainers built on
          activity for its own sake.
        </p>
        <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="bg-card p-8">
              <h3 className="text-lg font-semibold">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
