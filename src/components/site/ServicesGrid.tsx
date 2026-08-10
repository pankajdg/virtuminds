import {
  ClipboardCheck,
  Users,
  ShieldCheck,
  Cloud,
  Briefcase,
  Brain,
  EyeOff,
  Globe,
  Bot,
} from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "Agentic AI & Operational Guardrails",
    description:
      "Design identity, least-privilege permissioning, and human-in-the-loop controls for autonomous agents, vector databases, and multi-agent workflows.",
  },
  {
    icon: Brain,
    title: "AI / ML Risk & Governance",
    description: "Practical frameworks for responsible and secure AI adoption.",
  },
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
    icon: EyeOff,
    title: "Shadow AI & Data Leakage Audits",
    description:
      "Rapid assessment of enterprise AI usage, analyzing network and browser data flows to map where PII and IP are exposed to external LLMs — plus DLP guardrails for generative tools.",
  },
  {
    icon: Globe,
    title: "AI Supply Chain & Third-Party Risk",
    description:
      "Evaluate SaaS vendors and AI APIs for model provenance, training data rights, retention policy, hallucination risk, and enterprise data isolation guarantees.",
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
