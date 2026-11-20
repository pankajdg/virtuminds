import { ClipboardCheck, Users, Briefcase } from "lucide-react";

const services = [
  {
    icon: ClipboardCheck,
    title: "AI Governance Readiness Briefing",
    description:
      "Find out what AI is actually running in your company and what your board needs to be able to show. One 90-minute session, one-page exposure map, three prioritized next steps. Starting at $3,000.",
  },
  {
    icon: Users,
    title: "Board & Executive Advisory",
    description:
      "Ongoing counsel as AI decisions get bigger: governance, board reporting, and a second opinion before commitments are made. Monthly retainer with a quarterly board touchpoint.",
  },
  {
    icon: Briefcase,
    title: "AI Risk Due Diligence",
    description:
      "For PE firms, acquirers and portfolio companies: a rapid assessment of AI exposure, delivered in 5-10 business days with findings a deal team can act on.",
  },
];

export function ServicesGrid() {
  return (
    <section id="services" className="scroll-mt-24 bg-background py-16 lg:py-20">
      <div className="section-shell">
        <h2 className="text-3xl font-bold sm:text-4xl">How I help</h2>
        <div className="mt-8 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="flex flex-col bg-card p-6 lg:p-8">
              <service.icon className="h-6 w-6 text-gold" aria-hidden="true" />
              <h3 className="mt-3 text-lg font-semibold lg:mt-4">{service.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
              <a
                href="/services"
                className="mt-4 text-sm font-medium text-gold underline-offset-2 hover:underline"
              >
                See how it works &rarr;
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
