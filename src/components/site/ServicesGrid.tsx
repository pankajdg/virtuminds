import { ClipboardCheck, Users, Briefcase } from "lucide-react";

const services = [
  {
    icon: ClipboardCheck,
    title: "AI Governance Readiness Briefing",
    description:
      "A focused 90-minute session for boards and executive teams working through AI adoption, oversight, or investment decisions. You leave with a clear picture of your AI exposure, the trade-offs, and a board-defensible path forward.",
  },
  {
    icon: Users,
    title: "Board & Executive Advisory",
    description:
      "Ongoing counsel as the AI decisions get bigger — governance frameworks, board reporting, and a second set of eyes before commitments get made.",
  },
  {
    icon: Briefcase,
    title: "AI Risk Due Diligence",
    description:
      "For M&A, private equity, and portfolio companies: rapid assessment of AI exposure — shadow AI usage, third-party and model risk, data leakage — with findings a deal team can act on.",
  },
];

export function ServicesGrid() {
  return (
    <section id="services" className="scroll-mt-24 bg-background py-16 lg:py-20">
      <div className="section-shell">
        <p className="eyebrow">Services</p>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">How I help</h2>
        <div className="mt-8 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="bg-card p-6 lg:p-8">
              <service.icon className="h-6 w-6 text-gold" aria-hidden="true" />
              <h3 className="mt-3 text-lg font-semibold lg:mt-4">{service.title}</h3>
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
