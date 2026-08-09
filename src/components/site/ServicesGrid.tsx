import { ClipboardCheck, Users, ShieldCheck, Cloud, Briefcase, Brain } from "lucide-react";

const services = [
  {
    icon: ClipboardCheck,
    title: "Security Assessment & Roadmap",
    description: "Clear view of current risk posture and a prioritized path forward.",
  },
  {
    icon: Users,
    title: "Board & Executive Advisory",
    description: "Translate cyber risk into language the board can act on.",
  },
  {
    icon: ShieldCheck,
    title: "Fractional CISO / CIO",
    description: "Executive-level security leadership without the full-time overhead.",
  },
  {
    icon: Cloud,
    title: "Cloud, Data & Compliance",
    description: "Practical programs that satisfy regulators and support the business.",
  },
  {
    icon: Briefcase,
    title: "M&A & PE Due Diligence",
    description: "Cyber risk clarity for transactions and portfolio companies.",
  },
  {
    icon: Brain,
    title: "AI / ML Risk & Governance",
    description: "Practical frameworks for responsible and secure AI adoption.",
  },
];

export function ServicesGrid() {
  return (
    <section id="services" className="scroll-mt-24 bg-background py-24">
      <div className="section-shell">
        <p className="eyebrow">Services</p>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">How I help</h2>
        <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="bg-card p-8">
              <service.icon className="h-6 w-6 text-gold" aria-hidden="true" />
              <h3 className="mt-4 text-lg font-semibold">{service.title}</h3>
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
